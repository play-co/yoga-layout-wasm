/**
 * SOURCE:
 *  - yoga/javascript/sources/entry-common.js
 *
 * CHANGES:
 *  - fixed `setMeasureFunc()` to properly implement the callback functor;
 *  - fixed `setDirtiedFunc()` to properly implement the callback functor;
 **/

import * as YGEnums from './enums';
import { Size, Value, Layout } from './common';
import { YogaConfig, YogaInitModule, YogaNode, YogaStatic } from './types';

function patch<
  T extends Function,
  U extends keyof T['prototype'],
  V extends Function,
>(ctor: T, method: U, fn: V) {
  const proto = ctor.prototype;
  const original = proto[method];

  proto[method] = function (...args: any[]) {
    return fn.call(this, original, ...args);
  };
}

export default function entryCommon(lib: YogaInitModule): YogaStatic {
  const { Node, Config, MeasureCallback, DirtiedCallback } = lib;
  const NodeProto = Node.prototype as unknown as Record<string, Function>;

  for (const fnName of [
    'setPosition',
    'setMargin',
    'setFlexBasis',
    'setWidth',
    'setHeight',
    'setMinWidth',
    'setMinHeight',
    'setMaxWidth',
    'setMaxHeight',
    'setPadding',
  ]) {
    const methods = {
      [YGEnums.UNIT_POINT]: NodeProto[fnName],
      [YGEnums.UNIT_PERCENT]: NodeProto[`${fnName}Percent`],
      [YGEnums.UNIT_AUTO]: NodeProto[`${fnName}Auto`],
    };

    patch(
      Node,
      fnName as any,
      function (this: YogaNode, _: Function, ...args: any[]) {
        // We patch all these functions to add support for the following calls:
        // .setWidth(100) / .setWidth("100%") / .setWidth(.getWidth()) / .setWidth("auto")

        const value = args.pop();
        let unit: keyof typeof methods, asNumber;

        if (value === 'auto') {
          unit = YGEnums.UNIT_AUTO;
          asNumber = undefined;
        } else if (value instanceof Value) {
          unit = value.unit as keyof typeof methods;
          asNumber = value.valueOf();
        } else {
          unit =
            typeof value === 'string' && value.endsWith('%')
              ? YGEnums.UNIT_PERCENT
              : YGEnums.UNIT_POINT;
          asNumber = parseFloat(value);
          if (!Number.isNaN(value) && Number.isNaN(asNumber)) {
            throw new Error(`Invalid value ${value} for ${fnName}`);
          }
        }

        if (!methods[unit])
          throw new Error(
            `Failed to execute "${fnName}": Unsupported unit '${value}'`,
          );

        if (asNumber !== undefined) {
          return methods[unit].call(this, ...args, asNumber);
        } else {
          return methods[unit].call(this, ...args);
        }
      },
    );
  }

  patch(Config, 'free', function (this: YogaConfig) {
    // Since we handle the memory allocation ourselves (via lib.Config.create),
    // we also need to handle the deallocation
    Config.destroy(this);
  });

  Node.create = function (config?: YogaConfig): YogaNode {
    // We decide the constructor we want to call depending on the parameters
    return config ? Node.createWithConfig(config) : Node.createDefault();
  };

  patch(Node, 'free', function (this: YogaNode) {
    // Since we handle the memory allocation ourselves (via lib.Node.create),
    // we also need to handle the deallocation
    Node.destroy(this);
  });

  patch(Node, 'freeRecursive', function (this: YogaNode) {
    for (let t = 0, T = this.getChildCount(); t < T; ++t) {
      this.getChild(0).freeRecursive();
    }
    this.free();
  });

  patch(
    Node,
    'setMeasureFunc',
    function (this: YogaNode, original: Function, measureFunc: Function) {
      // This patch is just a convenience patch, since it helps write more
      // idiomatic source code (such as .setMeasureFunc(null))
      // We also automatically convert the return value of the measureFunc
      // to a Size object, so that we can return anything that has .width and
      // .height properties
      if (measureFunc) {
        return original.call(
          this,
          MeasureCallback.implement({
            measure: (...args: any[]) => Size.fromJS(measureFunc(...args)),
          }),
        );
      } else {
        return this.unsetMeasureFunc();
      }
    },
  );

  patch(
    Node,
    'setDirtiedFunc',
    function (this: YogaNode, original: Function, dirtiedFunc: Function) {
      // This patch is just a convenience patch, since it helps write more
      // idiomatic source code (such as .setDirtiedFunc(null))
      if (dirtiedFunc) {
        return original.call(
          this,
          DirtiedCallback.implement({
            dirtied: dirtiedFunc,
          }),
        );
      } else {
        return this.unsetDirtiedFunc();
      }
    },
  );

  patch(
    Node,
    'calculateLayout',
    function (
      this: YogaNode,
      original: Function,
      width = NaN,
      height = NaN,
      direction = YGEnums.DIRECTION_LTR,
    ) {
      // Just a small patch to add support for the function default parameters
      return original.call(this, width, height, direction);
    },
  );

  return {
    Config,
    Node,
    Layout,
    Size,
    Value,
    ...YGEnums,
  };
}
