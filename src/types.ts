import type { Layout, Size, Value } from './common';
import * as YGEnums from './enums';
import * as Constants from './enums';

export declare class YogaNode {
  static create(config?: YogaConfig): YogaNode;
  static createDefault(): YogaNode;
  static createWithConfig(config: YogaConfig): YogaNode;
  static destroy(node: YogaNode): any;

  calculateLayout(
    width?: number,
    height?: number,
    direction?: YogaDirection,
  ): void;
  copyStyle(node: YogaNode): void;
  resetStyle(): void;
  free(): void;
  freeRecursive(): void;
  getAlignContent(): YogaAlign;
  getAlignItems(): YogaAlign;
  getAlignSelf(): YogaAlign;
  getAspectRatio(): number;
  getBorder(edge: YogaEdge): number;
  getChild(index: number): YogaNode;
  getChildCount(): number;
  getComputedBorder(edge: YogaEdge): number;
  getComputedBottom(): number;
  getComputedHeight(): number;
  getComputedLayout(): Layout;
  getComputedLeft(): number;
  getComputedMargin(edge: YogaEdge): number;
  getComputedPadding(edge: YogaEdge): number;
  getComputedRight(): number;
  getComputedTop(): number;
  getComputedWidth(): number;
  getDisplay(): YogaDisplay;
  getFlexBasis(): number;
  getFlexDirection(): YogaFlexDirection;
  getFlexGrow(): number;
  getFlexShrink(): number;
  getFlexWrap(): YogaFlexWrap;
  getHeight(): Value;
  getJustifyContent(): YogaJustifyContent;
  getMargin(edge: YogaEdge): Value;
  getMaxHeight(): Value;
  getMaxWidth(): Value;
  getMinHeight(): Value;
  getMinWidth(): Value;
  getOverflow(): YogaOverflow;
  getPadding(edge: YogaEdge): Value;
  getParent(): YogaNode | null;
  getPosition(edge: YogaEdge): Value;
  getPositionType(): YogaPositionType;
  getWidth(): Value;
  insertChild(child: YogaNode, index: number): void;
  isDirty(): boolean;
  markDirty(force: boolean): void;
  removeChild(child: YogaNode): void;
  reset(): void;
  setAlignContent(alignContent: YogaAlign): void;
  setAlignItems(alignItems: YogaAlign): void;
  setAlignSelf(alignSelf: YogaAlign): void;
  setAspectRatio(aspectRatio: number): void;
  setBorder(edge: YogaEdge, borderWidth: number): void;
  setDisplay(display: YogaDisplay): void;
  setFlex(flex: number): void;
  setFlexBasis(flexBasis: number | string): void;
  setFlexBasisPercent(flexBasis: number): void;
  setFlexDirection(flexDirection: YogaFlexDirection): void;
  setFlexGrow(flexGrow: number): void;
  setFlexShrink(flexShrink: number): void;
  setFlexWrap(flexWrap: YogaFlexWrap): void;
  setHeight(height: number | string): void;
  setHeightAuto(): void;
  setHeightPercent(height: number): void;
  setJustifyContent(justifyContent: YogaJustifyContent): void;
  setMargin(edge: YogaEdge, margin: number | string): void;
  setMarginAuto(edge: YogaEdge): void;
  setMarginPercent(edge: YogaEdge, margin: number): void;
  setMaxHeight(maxHeight: number | string): void;
  setMaxHeightPercent(maxHeight: number): void;
  setMaxWidth(maxWidth: number | string): void;
  setMaxWidthPercent(maxWidth: number): void;
  setMeasureFunc(
    measureFunc: (
      width: number,
      widthMeasureMode: YogaMeasureMode,
      height: number,
      heightMeasureMode: YogaMeasureMode,
    ) => {
      width?: number | undefined;
      height?: number | undefined;
    } | null,
  ): void;
  setDirtiedFunc(dirtiedFunc: (() => void) | null): void;
  setMinHeight(minHeight: number | string): void;
  setMinHeightPercent(minHeight: number): void;
  setMinWidth(minWidth: number | string): void;
  setMinWidthPercent(minWidth: number): void;
  setOverflow(overflow: YogaOverflow): void;
  setPadding(edge: YogaEdge, padding: number | string): void;
  setPaddingPercent(edge: YogaEdge, padding: number): void;
  setPosition(edge: YogaEdge, position: number | string): void;
  setPositionPercent(edge: YogaEdge, position: number): void;
  setPositionType(positionType: YogaPositionType): void;
  setWidth(width: number | string): void;
  setWidthAuto(): void;
  setWidthPercent(width: number): void;
  unsetMeasureFunc(): void;
  unsetDirtiedFunc(): void;
  hasNewLayout(): boolean;
  setHasNewLayout(hasNewLayout: boolean): void;
  getID(): number;
}

export declare class YogaConfig {
  static create(): YogaConfig;
  static destroy(config: YogaConfig): any;

  isExperimentalFeatureEnabled(feature: YogaExperimentalFeature): boolean;
  setExperimentalFeatureEnabled(
    feature: YogaExperimentalFeature,
    enabled: boolean,
  ): void;
  setPointScaleFactor(factor: number): void;
  free(): void;
}

export type ConstantsStatic = typeof Constants;

export interface YogaStatic extends ConstantsStatic {
  Node: typeof YogaNode;
  Config: typeof YogaConfig;
  Layout: typeof Layout;
  Size: typeof Size;
  Value: typeof Value;
}

export interface YogaWasm extends YogaStatic {
  init(filepath?: string): Promise<YogaWasm>;
}

export interface YogaAsm extends YogaStatic {
  init(): Promise<YogaAsm>;
}

export interface YogaInitModule {
  Node: typeof YogaNode;
  Config: typeof YogaConfig;
  DirtiedCallback: any;
  MeasureCallback: any;
}

export type YogaJustifyContent =
  | typeof YGEnums.JUSTIFY_CENTER
  | typeof YGEnums.JUSTIFY_FLEX_END
  | typeof YGEnums.JUSTIFY_FLEX_START
  | typeof YGEnums.JUSTIFY_SPACE_AROUND
  | typeof YGEnums.JUSTIFY_SPACE_BETWEEN
  | typeof YGEnums.JUSTIFY_SPACE_EVENLY;

export type YogaAlign =
  | typeof YGEnums.ALIGN_AUTO
  | typeof YGEnums.ALIGN_BASELINE
  | typeof YGEnums.ALIGN_CENTER
  | typeof YGEnums.ALIGN_FLEX_END
  | typeof YGEnums.ALIGN_FLEX_START
  | typeof YGEnums.ALIGN_SPACE_AROUND
  | typeof YGEnums.ALIGN_SPACE_BETWEEN
  | typeof YGEnums.ALIGN_STRETCH;

export type YogaFlexDirection =
  | typeof YGEnums.FLEX_DIRECTION_COLUMN
  | typeof YGEnums.FLEX_DIRECTION_COLUMN_REVERSE
  | typeof YGEnums.FLEX_DIRECTION_ROW
  | typeof YGEnums.FLEX_DIRECTION_ROW_REVERSE;

export type YogaDirection =
  | typeof YGEnums.DIRECTION_INHERIT
  | typeof YGEnums.DIRECTION_LTR
  | typeof YGEnums.DIRECTION_RTL;

export type YogaFlexWrap =
  | typeof YGEnums.WRAP_NO_WRAP
  | typeof YGEnums.WRAP_WRAP
  | typeof YGEnums.WRAP_WRAP_REVERSE;

export type YogaEdge =
  | typeof YGEnums.EDGE_LEFT
  | typeof YGEnums.EDGE_TOP
  | typeof YGEnums.EDGE_RIGHT
  | typeof YGEnums.EDGE_BOTTOM
  | typeof YGEnums.EDGE_START
  | typeof YGEnums.EDGE_END
  | typeof YGEnums.EDGE_HORIZONTAL
  | typeof YGEnums.EDGE_VERTICAL
  | typeof YGEnums.EDGE_ALL;

export type YogaDisplay =
  | typeof YGEnums.DISPLAY_FLEX
  | typeof YGEnums.DISPLAY_NONE;

export type YogaUnit =
  | typeof YGEnums.UNIT_AUTO
  | typeof YGEnums.UNIT_PERCENT
  | typeof YGEnums.UNIT_POINT
  | typeof YGEnums.UNIT_UNDEFINED;

export type YogaOverflow =
  | typeof YGEnums.OVERFLOW_HIDDEN
  | typeof YGEnums.OVERFLOW_SCROLL
  | typeof YGEnums.OVERFLOW_VISIBLE;

export type YogaPositionType =
  | typeof YGEnums.POSITION_TYPE_ABSOLUTE
  | typeof YGEnums.POSITION_TYPE_RELATIVE;

export type YogaExperimentalFeature =
  typeof YGEnums.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;

export type YogaMeasureMode =
  | typeof YGEnums.MEASURE_MODE_UNDEFINED
  | typeof YGEnums.MEASURE_MODE_EXACTLY
  | typeof YGEnums.MEASURE_MODE_AT_MOST;
