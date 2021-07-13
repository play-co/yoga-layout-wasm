import * as YGEnums from './enums';
import { YogaUnit } from './types';

export class Layout {
  readonly left: number;
  readonly right: number;
  readonly top: number;
  readonly bottom: number;
  readonly width: number;
  readonly height: number;

  constructor(
    left: number,
    right: number,
    top: number,
    bottom: number,
    width: number,
    height: number,
  ) {
    this.left = left;
    this.right = right;
    this.top = top;
    this.bottom = bottom;
    this.width = width;
    this.height = height;
  }

  fromJS(
    expose: (
      left: number,
      right: number,
      top: number,
      bottom: number,
      width: number,
      height: number,
    ) => any,
  ): void {
    expose(
      this.left,
      this.right,
      this.top,
      this.bottom,
      this.width,
      this.height,
    );
  }

  toString(): string {
    return `<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`;
  }
}

export class Size {
  static fromJS({ width, height }: { width: number; height: number }): Size {
    return new Size(width, height);
  }

  readonly width: number;
  readonly height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  fromJS(expose: (width: number, height: number) => any): void {
    expose(this.width, this.height);
  }

  toString(): string {
    return `<Size#${this.width}x${this.height}>`;
  }
}

export class Value {
  readonly unit: YogaUnit | number;
  readonly value: number;

  constructor(unit: YogaUnit | number, value: number) {
    this.unit = unit;
    this.value = value;
  }

  fromJS(expose: (unit: YogaUnit | number, value: number) => any): void {
    expose(this.unit, this.value);
  }

  toString(): string {
    switch (this.unit) {
      case YGEnums.UNIT_POINT:
        return String(this.value);
      case YGEnums.UNIT_PERCENT:
        return `${this.value}%`;
      case YGEnums.UNIT_AUTO:
        return 'auto';
      default: {
        return `${this.value}?`;
      }
    }
  }

  valueOf(): number {
    return this.value;
  }
}
