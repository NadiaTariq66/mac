import {
  NG_VALUE_ACCESSOR
} from "./chunk-I2PWTNKR.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-PN7RAFQG.js";
import "./chunk-3C6O6HVR.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Optional,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  distinctUntilChanged,
  filter,
  forwardRef,
  setClassMetadata,
  tap,
  throttleTime,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresolveWindow,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-CCUUX3WD.js";
import "./chunk-3OV72XIM.js";

// node_modules/detect-it/dist/detect-it.esm.js
var w = typeof window !== "undefined" ? window : {
  screen: {},
  navigator: {}
};
var matchMedia = (w.matchMedia || function() {
  return {
    matches: false
  };
}).bind(w);
var passiveOptionAccessed = false;
var options = {
  get passive() {
    return passiveOptionAccessed = true;
  }
};
var noop = function() {
};
w.addEventListener && w.addEventListener("p", noop, options);
w.removeEventListener && w.removeEventListener("p", noop, false);
var supportsPassiveEvents = passiveOptionAccessed;
var supportsPointerEvents = "PointerEvent" in w;
var onTouchStartInWindow = "ontouchstart" in w;
var touchEventInWindow = "TouchEvent" in w;
var supportsTouchEvents = onTouchStartInWindow || touchEventInWindow && matchMedia("(any-pointer: coarse)").matches;
var hasTouch = (w.navigator.maxTouchPoints || 0) > 0 || supportsTouchEvents;
var userAgent = w.navigator.userAgent || "";
var isIPad = matchMedia("(pointer: coarse)").matches && // both iPad and iPhone can "request desktop site", which sets the userAgent to Macintosh
// so need to check both userAgents to determine if it is an iOS device
// and screen size to separate iPad from iPhone
/iPad|Macintosh/.test(userAgent) && Math.min(w.screen.width || 0, w.screen.height || 0) >= 768;
var hasCoarsePrimaryPointer = (matchMedia("(pointer: coarse)").matches || // if the pointer is not coarse and not fine then the browser doesn't support
// interaction media queries (see https://caniuse.com/css-media-interaction)
// so if it has onTouchStartInWindow assume it has a coarse primary pointer
!matchMedia("(pointer: fine)").matches && onTouchStartInWindow) && // bug in firefox (as of v81) on hybrid windows devices where the interaction media queries
// always indicate a touch only device (only has a coarse pointer that can't hover)
// so assume that the primary pointer is not coarse for firefox windows
!/Windows.*Firefox/.test(userAgent);
var hasAnyHoverOrAnyFinePointer = matchMedia("(any-pointer: fine)").matches || matchMedia("(any-hover: hover)").matches || // iPads might have an input device that can hover, so assume it has anyHover
isIPad || // if no onTouchStartInWindow then the browser is indicating that it is not a touch only device
// see above note for supportsTouchEvents
!onTouchStartInWindow;

// node_modules/@angular-slider/ngx-slider/fesm2022/angular-slider-ngx-slider.mjs
var _c0 = (a0, a1, a2) => ({
  tooltip: a0,
  placement: a1,
  content: a2
});
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) {
}
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, null, 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c0, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
  }
}
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "div", 2);
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("title", ctx_r0.tooltip)("data-tooltip-placement", ctx_r0.placement);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r0.content, " ");
  }
}
var _c1 = ["tooltipTemplate"];
var _c2 = ["leftOuterSelectionBar"];
var _c3 = ["rightOuterSelectionBar"];
var _c4 = ["fullBar"];
var _c5 = ["selectionBar"];
var _c6 = ["minHandle"];
var _c7 = ["maxHandle"];
var _c8 = ["floorLabel"];
var _c9 = ["ceilLabel"];
var _c10 = ["minHandleLabel"];
var _c11 = ["maxHandleLabel"];
var _c12 = ["combinedLabel"];
var _c13 = ["ticksElement"];
var _c14 = (a0) => ({
  "ngx-slider-selected": a0
});
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ngx-slider-tooltip-wrapper", 32);
  }
  if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.valueTooltip)("placement", t_r1.valueTooltipPlacement)("content", t_r1.value);
  }
}
function SliderComponent_span_28_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 33);
  }
  if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerText", t_r1.legend);
  }
}
function SliderComponent_span_28_span_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 34);
  }
  if (rf & 2) {
    const t_r1 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", t_r1.legend, ɵɵsanitizeHtml);
  }
}
function SliderComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 27);
    ɵɵelement(1, "ngx-slider-tooltip-wrapper", 28);
    ɵɵtemplate(2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29)(3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30)(4, SliderComponent_span_28_span_4_Template, 1, 1, "span", 31);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(8, _c14, t_r1.selected))("ngStyle", t_r1.style);
    ɵɵadvance();
    ɵɵproperty("template", ctx_r1.tooltipTemplate)("tooltip", t_r1.tooltip)("placement", t_r1.tooltipPlacement);
    ɵɵadvance();
    ɵɵproperty("ngIf", t_r1.value !== null && t_r1.value !== void 0);
    ɵɵadvance();
    ɵɵproperty("ngIf", t_r1.legend !== null && t_r1.legend !== void 0 && ctx_r1.allowUnsafeHtmlInSlider === false);
    ɵɵadvance();
    ɵɵproperty("ngIf", t_r1.legend !== null && t_r1.legend !== void 0 && (ctx_r1.allowUnsafeHtmlInSlider === null || ctx_r1.allowUnsafeHtmlInSlider === void 0 || ctx_r1.allowUnsafeHtmlInSlider));
  }
}
var LabelType;
(function(LabelType2) {
  LabelType2[LabelType2["Low"] = 0] = "Low";
  LabelType2[LabelType2["High"] = 1] = "High";
  LabelType2[LabelType2["Floor"] = 2] = "Floor";
  LabelType2[LabelType2["Ceil"] = 3] = "Ceil";
  LabelType2[LabelType2["TickValue"] = 4] = "TickValue";
})(LabelType || (LabelType = {}));
var Options = class {
  /** Minimum value for a slider.
    Not applicable when using stepsArray. */
  floor = 0;
  /** Maximum value for a slider.
    Not applicable when using stepsArray. */
  ceil = null;
  /** Step between each value.
    Not applicable when using stepsArray. */
  step = 1;
  /** The minimum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  minRange = null;
  /** The maximum range authorized on the slider.
    Applies to range slider only.
    When using stepsArray, expressed as index into stepsArray. */
  maxRange = null;
  /** Set to true to have a push behavior. When the min handle goes above the max,
    the max is moved as well (and vice-versa). The range between min and max is
    defined by the step option (defaults to 1) and can also be overriden by
    the minRange option. Applies to range slider only. */
  pushRange = false;
  /** The minimum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  minLimit = null;
  /** The maximum value authorized on the slider.
    When using stepsArray, expressed as index into stepsArray. */
  maxLimit = null;
  /** Custom translate function. Use this if you want to translate values displayed
      on the slider. */
  translate = null;
  /** Custom function for combining overlapping labels in range slider.
      It takes the min and max values (already translated with translate fuction)
      and should return how these two values should be combined.
      If not provided, the default function will join the two values with
      ' - ' as separator. */
  combineLabels = null;
  /** Use to display legend under ticks (thus, it needs to be used along with
     showTicks or showTicksValues). The function will be called with each tick
     value and returned content will be displayed under the tick as a legend.
     If the returned value is null, then no legend is displayed under
     the corresponding tick.You can also directly provide the legend values
     in the stepsArray option. */
  getLegend = null;
  /** Use to display a custom legend of a stepItem from stepsArray.
    It will be the same as getLegend but for stepsArray. */
  getStepLegend = null;
  /** If you want to display a slider with non linear/number steps.
     Just pass an array with each slider value and that's it; the floor, ceil and step settings
     of the slider will be computed automatically.
     By default, the value model and valueHigh model values will be the value of the selected item
     in the stepsArray.
     They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
     option to true. */
  stepsArray = null;
  /** Set to true to bind the index of the selected item to value model and valueHigh model. */
  bindIndexForStepsArray = false;
  /** When set to true and using a range slider, the range can be dragged by the selection bar.
    Applies to range slider only. */
  draggableRange = false;
  /** Same as draggableRange but the slider range can't be changed.
    Applies to range slider only. */
  draggableRangeOnly = false;
  /** Set to true to always show the selection bar before the slider handle. */
  showSelectionBar = false;
  /** Set to true to always show the selection bar after the slider handle. */
  showSelectionBarEnd = false;
  /**  Set a number to draw the selection bar between this value and the slider handle.
    When using stepsArray, expressed as index into stepsArray. */
  showSelectionBarFromValue = null;
  /**  Only for range slider. Set to true to visualize in different colour the areas
    on the left/right (top/bottom for vertical range slider) of selection bar between the handles. */
  showOuterSelectionBars = false;
  /** Set to true to hide pointer labels */
  hidePointerLabels = false;
  /** Set to true to hide min / max labels  */
  hideLimitLabels = false;
  /** Set to false to disable the auto-hiding behavior of the limit labels. */
  autoHideLimitLabels = true;
  /** Set to true to make the slider read-only. */
  readOnly = false;
  /** Set to true to disable the slider. */
  disabled = false;
  /** Set to true to display a tick for each step of the slider. */
  showTicks = false;
  /** Set to true to display a tick and the step value for each step of the slider.. */
  showTicksValues = false;
  /* The step between each tick to display. If not set, the step value is used.
    Not used when ticksArray is specified. */
  tickStep = null;
  /* The step between displaying each tick step value.
    If not set, then tickStep or step is used, depending on which one is set. */
  tickValueStep = null;
  /** Use to display ticks at specific positions.
    The array contains the index of the ticks that should be displayed.
    For example, [0, 1, 5] will display a tick for the first, second and sixth values. */
  ticksArray = null;
  /** Used to display a tooltip when a tick is hovered.
    Set to a function that returns the tooltip content for a given value. */
  ticksTooltip = null;
  /** Same as ticksTooltip but for ticks values. */
  ticksValuesTooltip = null;
  /** Set to true to display the slider vertically.
    The slider will take the full height of its parent.
    Changing this value at runtime is not currently supported. */
  vertical = false;
  /** Function that returns the current color of the selection bar.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model
    has already been updated.*/
  getSelectionBarColor = null;
  /** Function that returns the color of a tick. showTicks must be enabled. */
  getTickColor = null;
  /** Function that returns the current color of a pointer.
    If your color won't change, don't use this option but set it through CSS.
    If the returned color depends on a model value (either value or valueHigh),
    you should use the argument passed to the function.
    Indeed, when the function is called, there is no certainty that the model has already been updated.
    To handle range slider pointers independently, you should evaluate pointerType within the given
    function where "min" stands for value model and "max" for valueHigh model values. */
  getPointerColor = null;
  /** Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
    Left/bottom arrows: -1
    Right/top arrows: +1
    Page-down: -10%
    Page-up: +10%
    Home: minimum value
    End: maximum value
   */
  keyboardSupport = true;
  /** If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
    so that the slider is rendered properly and the events are handled correctly. */
  scale = 1;
  /** If you display the slider in an element that uses transform: rotate(90deg), set the rotate value to 90
   so that the slider is rendered properly and the events are handled correctly. Value is in degrees. */
  rotate = 0;
  /** Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, they are not rounded
    and can be between two steps. */
  enforceStep = true;
  /** Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceRange = true;
  /** Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
    When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
    the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation. */
  enforceStepsArray = true;
  /** Set to true to prevent to user from switching the min and max handles. Applies to range slider only. */
  noSwitching = false;
  /** Set to true to only bind events on slider handles. */
  onlyBindHandles = false;
  /** Set to true to show graphs right to left.
    If vertical is true it will be from top to bottom and left / right arrow functions reversed. */
  rightToLeft = false;
  /** Set to true to reverse keyboard navigation:
    Right/top arrows: -1
    Left/bottom arrows: +1
    Page-up: -10%
    Page-down: +10%
    End: minimum value
    Home: maximum value
   */
  reversedControls = false;
  /** Set to true to keep the slider labels inside the slider bounds. */
  boundPointerLabels = true;
  /** Set to true to use a logarithmic scale to display the slider.  */
  logScale = false;
  /** Function that returns the position on the slider for a given value.
    The position must be a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customValueToPosition = null;
  /** Function that returns the value for a given position on the slider.
    The position is a percentage between 0 and 1.
    The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly. */
  customPositionToValue = null;
  /** Precision limit for calculated values.
    Values used in calculations will be rounded to this number of significant digits
    to prevent accumulating small floating-point errors. */
  precisionLimit = 12;
  /** Use to display the selection bar as a gradient.
    The given object must contain from and to properties which are colors. */
  selectionBarGradient = null;
  /** Use to add a label directly to the slider for accessibility. Adds the aria-label attribute. */
  ariaLabel = "ngx-slider";
  /** Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
    Adds the aria-labelledby attribute. */
  ariaLabelledBy = null;
  /** Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute. */
  ariaLabelHigh = "ngx-slider-max";
  /** Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
    Adds the aria-labelledby attribute. */
  ariaLabelledByHigh = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle */
  handleDimension = null;
  /** Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar */
  barDimension = null;
  /** Enable/disable CSS animations */
  animate = true;
  /** Enable/disable CSS animations while moving the slider */
  animateOnMove = false;
};
var AllowUnsafeHtmlInSlider = new InjectionToken("AllowUnsafeHtmlInSlider");
var PointerType;
(function(PointerType2) {
  PointerType2[PointerType2["Min"] = 0] = "Min";
  PointerType2[PointerType2["Max"] = 1] = "Max";
})(PointerType || (PointerType = {}));
var ChangeContext = class {
  value;
  highValue;
  pointerType;
};
var ValueHelper = class {
  static isNullOrUndefined(value) {
    return value === void 0 || value === null;
  }
  static areArraysEqual(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; ++i) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  }
  static linearValueToPosition(val, minVal, maxVal) {
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static logValueToPosition(val, minVal, maxVal) {
    val = Math.log(val);
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const range = maxVal - minVal;
    return (val - minVal) / range;
  }
  static linearPositionToValue(percent, minVal, maxVal) {
    return percent * (maxVal - minVal) + minVal;
  }
  static logPositionToValue(percent, minVal, maxVal) {
    minVal = Math.log(minVal);
    maxVal = Math.log(maxVal);
    const value = percent * (maxVal - minVal) + minVal;
    return Math.exp(value);
  }
  static findStepIndex(modelValue, stepsArray) {
    const differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
    let minDifferenceIndex = 0;
    for (let index = 0; index < stepsArray.length; index++) {
      if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
        minDifferenceIndex = index;
      }
    }
    return minDifferenceIndex;
  }
};
var CompatibilityHelper = class {
  /** Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari) */
  static isTouchEvent(event) {
    if (window.TouchEvent !== void 0) {
      return event instanceof TouchEvent;
    }
    return event.touches !== void 0;
  }
  /** Detect presence of ResizeObserver API */
  static isResizeObserverAvailable() {
    return window.ResizeObserver !== void 0;
  }
};
var MathHelper = class {
  /* Round numbers to a given number of significant digits */
  static roundToPrecisionLimit(value, precisionLimit) {
    return +value.toPrecision(precisionLimit);
  }
  static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
    const limit = Math.pow(10, -precisionLimit);
    return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
  }
  static clampToRange(value, floor, ceil) {
    return Math.min(Math.max(value, floor), ceil);
  }
};
var EventListener = class {
  eventName = null;
  events = null;
  eventsSubscription = null;
  teardownCallback = null;
};
var EventListenerHelper = class {
  renderer;
  constructor(renderer) {
    this.renderer = renderer;
  }
  attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
    if (supportsPassiveEvents !== true) {
      return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
    }
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new Subject();
    const observerCallback = (event) => {
      listener.events.next(event);
    };
    nativeElement.addEventListener(eventName, observerCallback, {
      passive: true,
      capture: false
    });
    listener.teardownCallback = () => {
      nativeElement.removeEventListener(eventName, observerCallback, {
        passive: true,
        capture: false
      });
    };
    listener.eventsSubscription = listener.events.pipe(
      !ValueHelper.isNullOrUndefined(throttleInterval) ? throttleTime(throttleInterval, void 0, {
        leading: true,
        trailing: true
      }) : tap(() => {
      })
      // no-op
    ).subscribe((event) => {
      callback(event);
    });
    return listener;
  }
  detachEventListener(eventListener) {
    if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
      eventListener.eventsSubscription.unsubscribe();
      eventListener.eventsSubscription = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
      eventListener.events.complete();
      eventListener.events = null;
    }
    if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
      eventListener.teardownCallback();
      eventListener.teardownCallback = null;
    }
  }
  attachEventListener(nativeElement, eventName, callback, throttleInterval) {
    const listener = new EventListener();
    listener.eventName = eventName;
    listener.events = new Subject();
    const observerCallback = (event) => {
      listener.events.next(event);
    };
    listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
    listener.eventsSubscription = listener.events.pipe(
      !ValueHelper.isNullOrUndefined(throttleInterval) ? throttleTime(throttleInterval, void 0, {
        leading: true,
        trailing: true
      }) : tap(() => {
      })
      // no-op
    ).subscribe((event) => {
      callback(event);
    });
    return listener;
  }
};
var SliderElementDirective = class _SliderElementDirective {
  elemRef;
  renderer;
  changeDetectionRef;
  _position = 0;
  get position() {
    return this._position;
  }
  _dimension = 0;
  get dimension() {
    return this._dimension;
  }
  _alwaysHide = false;
  get alwaysHide() {
    return this._alwaysHide;
  }
  _vertical = false;
  get vertical() {
    return this._vertical;
  }
  _scale = 1;
  get scale() {
    return this._scale;
  }
  _rotate = 0;
  get rotate() {
    return this._rotate;
  }
  opacity = 1;
  visibility = "visible";
  left = "";
  bottom = "";
  height = "";
  width = "";
  transform = "";
  eventListenerHelper;
  eventListeners = [];
  constructor(elemRef, renderer, changeDetectionRef) {
    this.elemRef = elemRef;
    this.renderer = renderer;
    this.changeDetectionRef = changeDetectionRef;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  setAlwaysHide(hide) {
    this._alwaysHide = hide;
    if (hide) {
      this.visibility = "hidden";
    } else {
      this.visibility = "visible";
    }
  }
  hide() {
    this.opacity = 0;
  }
  show() {
    if (this.alwaysHide) {
      return;
    }
    this.opacity = 1;
  }
  isVisible() {
    if (this.alwaysHide) {
      return false;
    }
    return this.opacity !== 0;
  }
  setVertical(vertical) {
    this._vertical = vertical;
    if (this._vertical) {
      this.left = "";
      this.width = "";
    } else {
      this.bottom = "";
      this.height = "";
    }
  }
  setScale(scale) {
    this._scale = scale;
  }
  setRotate(rotate) {
    this._rotate = rotate;
    this.transform = "rotate(" + rotate + "deg)";
  }
  getRotate() {
    return this._rotate;
  }
  // Set element left/top position depending on whether slider is horizontal or vertical
  setPosition(pos) {
    if (this._position !== pos && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._position = pos;
    if (this._vertical) {
      this.bottom = Math.round(pos) + "px";
    } else {
      this.left = Math.round(pos) + "px";
    }
  }
  // Calculate element's width/height depending on whether slider is horizontal or vertical
  calculateDimension() {
    const val = this.getBoundingClientRect();
    if (this.vertical) {
      this._dimension = (val.bottom - val.top) * this.scale;
    } else {
      this._dimension = (val.right - val.left) * this.scale;
    }
  }
  // Set element width/height depending on whether slider is horizontal or vertical
  setDimension(dim) {
    if (this._dimension !== dim && !this.isRefDestroyed()) {
      this.changeDetectionRef.markForCheck();
    }
    this._dimension = dim;
    if (this._vertical) {
      this.height = Math.round(dim) + "px";
    } else {
      this.width = Math.round(dim) + "px";
    }
  }
  getBoundingClientRect() {
    return this.elemRef.nativeElement.getBoundingClientRect();
  }
  on(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  onPassive(eventName, callback, debounceInterval) {
    const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
    this.eventListeners.push(listener);
  }
  off(eventName) {
    let listenersToKeep;
    let listenersToRemove;
    if (!ValueHelper.isNullOrUndefined(eventName)) {
      listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
      listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
    } else {
      listenersToKeep = [];
      listenersToRemove = this.eventListeners;
    }
    for (const listener of listenersToRemove) {
      this.eventListenerHelper.detachEventListener(listener);
    }
    this.eventListeners = listenersToKeep;
  }
  isRefDestroyed() {
    return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef["destroyed"];
  }
  static ɵfac = function SliderElementDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderElementDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SliderElementDirective,
    selectors: [["", "ngxSliderElement", ""]],
    hostVars: 14,
    hostBindings: function SliderElementDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵstyleProp("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width)("transform", ctx.transform);
      }
    },
    standalone: false
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderElementDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSliderElement]",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    opacity: [{
      type: HostBinding,
      args: ["style.opacity"]
    }],
    visibility: [{
      type: HostBinding,
      args: ["style.visibility"]
    }],
    left: [{
      type: HostBinding,
      args: ["style.left"]
    }],
    bottom: [{
      type: HostBinding,
      args: ["style.bottom"]
    }],
    height: [{
      type: HostBinding,
      args: ["style.height"]
    }],
    width: [{
      type: HostBinding,
      args: ["style.width"]
    }],
    transform: [{
      type: HostBinding,
      args: ["style.transform"]
    }]
  });
})();
var SliderHandleDirective = class _SliderHandleDirective extends SliderElementDirective {
  active = false;
  role = "";
  tabindex = "";
  ariaOrientation = "";
  ariaLabel = "";
  ariaLabelledBy = "";
  ariaValueNow = "";
  ariaValueText = "";
  ariaValueMin = "";
  ariaValueMax = "";
  focus() {
    this.elemRef.nativeElement.focus();
  }
  focusIfNeeded() {
    if (document.activeElement !== this.elemRef.nativeElement) {
      this.elemRef.nativeElement.focus();
    }
  }
  constructor(elemRef, renderer, changeDetectionRef) {
    super(elemRef, renderer, changeDetectionRef);
  }
  static ɵfac = function SliderHandleDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderHandleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SliderHandleDirective,
    selectors: [["", "ngxSliderHandle", ""]],
    hostVars: 11,
    hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        ɵɵclassProp("ngx-slider-active", ctx.active);
      }
    },
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderHandleDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSliderHandle]",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }], {
    active: [{
      type: HostBinding,
      args: ["class.ngx-slider-active"]
    }],
    role: [{
      type: HostBinding,
      args: ["attr.role"]
    }],
    tabindex: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }],
    ariaOrientation: [{
      type: HostBinding,
      args: ["attr.aria-orientation"]
    }],
    ariaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    ariaLabelledBy: [{
      type: HostBinding,
      args: ["attr.aria-labelledby"]
    }],
    ariaValueNow: [{
      type: HostBinding,
      args: ["attr.aria-valuenow"]
    }],
    ariaValueText: [{
      type: HostBinding,
      args: ["attr.aria-valuetext"]
    }],
    ariaValueMin: [{
      type: HostBinding,
      args: ["attr.aria-valuemin"]
    }],
    ariaValueMax: [{
      type: HostBinding,
      args: ["attr.aria-valuemax"]
    }]
  });
})();
var SliderLabelDirective = class _SliderLabelDirective extends SliderElementDirective {
  allowUnsafeHtmlInSlider;
  _value = null;
  get value() {
    return this._value;
  }
  constructor(elemRef, renderer, changeDetectionRef, allowUnsafeHtmlInSlider) {
    super(elemRef, renderer, changeDetectionRef);
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
  }
  setValue(value) {
    let recalculateDimension = false;
    if (!this.alwaysHide && (ValueHelper.isNullOrUndefined(this.value) || this.value.length !== value.length || this.value.length > 0 && this.dimension === 0)) {
      recalculateDimension = true;
    }
    this._value = value;
    if (this.allowUnsafeHtmlInSlider === false) {
      this.elemRef.nativeElement.innerText = value;
    } else {
      this.elemRef.nativeElement.innerHTML = value;
    }
    if (recalculateDimension) {
      this.calculateDimension();
    }
  }
  static ɵfac = function SliderLabelDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderLabelDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(AllowUnsafeHtmlInSlider, 8));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _SliderLabelDirective,
    selectors: [["", "ngxSliderLabel", ""]],
    standalone: false,
    features: [ɵɵInheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderLabelDirective, [{
    type: Directive,
    args: [{
      selector: "[ngxSliderLabel]",
      standalone: false
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: Renderer2
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: Optional
    }]
  }], null);
})();
var TooltipWrapperComponent = class _TooltipWrapperComponent {
  template;
  tooltip;
  placement;
  content;
  static ɵfac = function TooltipWrapperComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TooltipWrapperComponent)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _TooltipWrapperComponent,
    selectors: [["ngx-slider-tooltip-wrapper"]],
    inputs: {
      template: "template",
      tooltip: "tooltip",
      placement: "placement",
      content: "content"
    },
    standalone: false,
    decls: 2,
    vars: 2,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]],
    template: function TooltipWrapperComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0)(1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.template);
        ɵɵadvance();
        ɵɵproperty("ngIf", !ctx.template);
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipWrapperComponent, [{
    type: Component,
    args: [{
      selector: "ngx-slider-tooltip-wrapper",
      standalone: false,
      template: '<ng-container *ngIf="template">\n  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>\n</ng-container>\n\n<ng-container *ngIf="!template">\n  <div class="ngx-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">\n    {{content}}\n  </div>\n</ng-container>',
      styles: [".ngx-slider-inner-tooltip{height:100%}\n"]
    }]
  }], null, {
    template: [{
      type: Input
    }],
    tooltip: [{
      type: Input
    }],
    placement: [{
      type: Input
    }],
    content: [{
      type: Input
    }]
  });
})();
var Tick = class {
  selected = false;
  style = {};
  tooltip = null;
  tooltipPlacement = null;
  value = null;
  valueTooltip = null;
  valueTooltipPlacement = null;
  legend = null;
};
var Dragging = class {
  active = false;
  value = 0;
  difference = 0;
  position = 0;
  lowLimit = 0;
  highLimit = 0;
};
var ModelValues = class {
  value;
  highValue;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue;
  }
};
var ModelChange = class extends ModelValues {
  // Flag used to by-pass distinctUntilChanged() filter on input values
  // (sometimes there is a need to pass values through even though the model values have not changed)
  forceChange;
  static compare(x, y) {
    if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
      return false;
    }
    return x.value === y.value && x.highValue === y.highValue && x.forceChange === y.forceChange;
  }
};
var NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  /* tslint:disable-next-line: no-use-before-declare */
  useExisting: forwardRef(() => SliderComponent),
  multi: true
};
var SliderComponent = class _SliderComponent {
  renderer;
  elementRef;
  changeDetectionRef;
  zone;
  allowUnsafeHtmlInSlider;
  // Add ngx-slider class to the host element - this is static, should never change
  sliderElementNgxSliderClass = true;
  // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
  value = null;
  // Output for low value slider to support two-way bindings
  valueChange = new EventEmitter();
  // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
  highValue = null;
  // Output for high value slider to support two-way bindings
  highValueChange = new EventEmitter();
  // An object with all the other options of the slider.
  // Each option can be updated at runtime and the slider will automatically be re-rendered.
  options = new Options();
  // Event emitted when user starts interaction with the slider
  userChangeStart = new EventEmitter();
  // Event emitted on each change coming from user interaction
  userChange = new EventEmitter();
  // Event emitted when user finishes interaction with the slider
  userChangeEnd = new EventEmitter();
  manualRefreshSubscription;
  // Input event that triggers slider refresh (re-positioning of slider elements)
  set manualRefresh(manualRefresh) {
    this.unsubscribeManualRefresh();
    this.manualRefreshSubscription = manualRefresh.subscribe(() => {
      setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
    });
  }
  triggerFocusSubscription;
  // Input event that triggers setting focus on given slider handle
  set triggerFocus(triggerFocus) {
    this.unsubscribeTriggerFocus();
    this.triggerFocusSubscription = triggerFocus.subscribe((pointerType) => {
      this.focusPointer(pointerType);
    });
  }
  cancelUserChangeSubscription;
  set cancelUserChange(cancelUserChange) {
    this.unsubscribeCancelUserChange();
    this.cancelUserChangeSubscription = cancelUserChange.subscribe(() => {
      if (this.moving) {
        this.positionTrackingHandle(this.preStartHandleValue);
        this.forceEnd(true);
      }
    });
  }
  // Slider type, true means range slider
  get range() {
    return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
  }
  // Set to true if init method already executed
  initHasRun = false;
  // Changes in model inputs are passed through this subject
  // These are all changes coming in from outside the component through input bindings or reactive form inputs
  inputModelChangeSubject = new Subject();
  inputModelChangeSubscription = null;
  // Changes to model outputs are passed through this subject
  // These are all changes that need to be communicated to output emitters and registered callbacks
  outputModelChangeSubject = new Subject();
  outputModelChangeSubscription = null;
  // Low value synced to model low value
  viewLowValue = null;
  // High value synced to model high value
  viewHighValue = null;
  // Options synced to model options, based on defaults
  viewOptions = new Options();
  // Half of the width or height of the slider handles
  handleHalfDimension = 0;
  // Maximum position the slider handle can have
  maxHandlePosition = 0;
  // Which handle is currently tracked for move events
  currentTrackingPointer = null;
  // Internal variable to keep track of the focus element
  currentFocusPointer = null;
  // Used to call onStart on the first keydown event
  firstKeyDown = false;
  // Current touch id of touch event being handled
  touchId = null;
  // Values recorded when first dragging the bar
  dragging = new Dragging();
  // Value of hanlde at the beginning of onStart()
  preStartHandleValue = null;
  /* Slider DOM elements */
  // Left selection bar outside two handles
  leftOuterSelectionBarElement;
  // Right selection bar outside two handles
  rightOuterSelectionBarElement;
  // The whole slider bar
  fullBarElement;
  // Highlight between two handles
  selectionBarElement;
  // Left slider handle
  minHandleElement;
  // Right slider handle
  maxHandleElement;
  // Floor label
  floorLabelElement;
  // Ceiling label
  ceilLabelElement;
  // Label above the low value
  minHandleLabelElement;
  // Label above the high value
  maxHandleLabelElement;
  // Combined label
  combinedLabelElement;
  // The ticks
  ticksElement;
  // Optional custom template for displaying tooltips
  tooltipTemplate;
  // Host element class bindings
  sliderElementVerticalClass = false;
  sliderElementAnimateClass = false;
  sliderElementWithLegendClass = false;
  sliderElementDisabledAttr = null;
  sliderElementAriaLabel = "ngx-slider";
  // CSS styles and class flags
  barStyle = {};
  minPointerStyle = {};
  maxPointerStyle = {};
  fullBarTransparentClass = false;
  selectionBarDraggableClass = false;
  ticksUnderValuesClass = false;
  // Whether to show/hide ticks
  get showTicks() {
    return this.viewOptions.showTicks;
  }
  /* If tickStep is set or ticksArray is specified.
     In this case, ticks values should be displayed below the slider. */
  intermediateTicks = false;
  // Ticks array as displayed in view
  ticks = [];
  // Event listeners
  eventListenerHelper = null;
  onMoveEventListener = null;
  onEndEventListener = null;
  // Whether currently moving the slider (between onStart() and onEnd())
  moving = false;
  // Observer for slider element resize events
  resizeObserver = null;
  // Callbacks for reactive forms support
  onTouchedCallback = null;
  onChangeCallback = null;
  constructor(renderer, elementRef, changeDetectionRef, zone, allowUnsafeHtmlInSlider) {
    this.renderer = renderer;
    this.elementRef = elementRef;
    this.changeDetectionRef = changeDetectionRef;
    this.zone = zone;
    this.allowUnsafeHtmlInSlider = allowUnsafeHtmlInSlider;
    this.eventListenerHelper = new EventListenerHelper(this.renderer);
  }
  // OnInit interface
  ngOnInit() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    this.updateDisabledState();
    this.updateVerticalState();
    this.updateAriaLabel();
  }
  // AfterViewInit interface
  ngAfterViewInit() {
    this.applyOptions();
    this.subscribeInputModelChangeSubject();
    this.subscribeOutputModelChangeSubject();
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateVerticalState();
    this.manageElementsStyle();
    this.updateDisabledState();
    this.calculateViewDimensions();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    this.initHandles();
    this.manageEventsBindings();
    this.updateAriaLabel();
    this.subscribeResizeObserver();
    this.initHasRun = true;
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  // OnChanges interface
  ngOnChanges(changes) {
    if (!ValueHelper.isNullOrUndefined(changes.options) && JSON.stringify(changes.options.previousValue) !== JSON.stringify(changes.options.currentValue)) {
      this.onChangeOptions();
    }
    if (!ValueHelper.isNullOrUndefined(changes.value) || !ValueHelper.isNullOrUndefined(changes.highValue)) {
      this.inputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        controlAccessorChange: false,
        forceChange: false,
        internalChange: false
      });
    }
  }
  // OnDestroy interface
  ngOnDestroy() {
    this.unbindEvents();
    this.unsubscribeResizeObserver();
    this.unsubscribeInputModelChangeSubject();
    this.unsubscribeOutputModelChangeSubject();
    this.unsubscribeManualRefresh();
    this.unsubscribeTriggerFocus();
  }
  // ControlValueAccessor interface
  writeValue(obj) {
    if (obj instanceof Array) {
      this.value = obj[0];
      this.highValue = obj[1];
    } else {
      this.value = obj;
    }
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      forceChange: false,
      internalChange: false,
      controlAccessorChange: true
    });
  }
  // ControlValueAccessor interface
  registerOnChange(onChangeCallback) {
    this.onChangeCallback = onChangeCallback;
  }
  // ControlValueAccessor interface
  registerOnTouched(onTouchedCallback) {
    this.onTouchedCallback = onTouchedCallback;
  }
  // ControlValueAccessor interface
  setDisabledState(isDisabled) {
    this.viewOptions.disabled = isDisabled;
    this.updateDisabledState();
    if (this.initHasRun) {
      this.manageEventsBindings();
    }
  }
  setAriaLabel(ariaLabel) {
    this.viewOptions.ariaLabel = ariaLabel;
    this.updateAriaLabel();
  }
  onResize(event) {
    this.calculateViewDimensionsAndDetectChanges();
  }
  subscribeInputModelChangeSubject() {
    this.inputModelChangeSubscription = this.inputModelChangeSubject.pipe(
      distinctUntilChanged(ModelChange.compare),
      // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
      // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
      filter((modelChange) => !modelChange.forceChange && !modelChange.internalChange)
    ).subscribe((modelChange) => this.applyInputModelChange(modelChange));
  }
  subscribeOutputModelChangeSubject() {
    this.outputModelChangeSubscription = this.outputModelChangeSubject.pipe(distinctUntilChanged(ModelChange.compare)).subscribe((modelChange) => this.publishOutputModelChange(modelChange));
  }
  subscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable()) {
      this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
      this.resizeObserver.observe(this.elementRef.nativeElement);
    }
  }
  unsubscribeResizeObserver() {
    if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  unsubscribeOnMove() {
    if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
      this.onMoveEventListener = null;
    }
  }
  unsubscribeOnEnd() {
    if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
      this.eventListenerHelper.detachEventListener(this.onEndEventListener);
      this.onEndEventListener = null;
    }
  }
  unsubscribeInputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
      this.inputModelChangeSubscription.unsubscribe();
      this.inputModelChangeSubscription = null;
    }
  }
  unsubscribeOutputModelChangeSubject() {
    if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
      this.outputModelChangeSubscription.unsubscribe();
      this.outputModelChangeSubscription = null;
    }
  }
  unsubscribeManualRefresh() {
    if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
      this.manualRefreshSubscription.unsubscribe();
      this.manualRefreshSubscription = null;
    }
  }
  unsubscribeTriggerFocus() {
    if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
      this.triggerFocusSubscription.unsubscribe();
      this.triggerFocusSubscription = null;
    }
  }
  unsubscribeCancelUserChange() {
    if (!ValueHelper.isNullOrUndefined(this.cancelUserChangeSubscription)) {
      this.cancelUserChangeSubscription.unsubscribe();
      this.cancelUserChangeSubscription = null;
    }
  }
  getPointerElement(pointerType) {
    if (pointerType === PointerType.Min) {
      return this.minHandleElement;
    } else if (pointerType === PointerType.Max) {
      return this.maxHandleElement;
    }
    return null;
  }
  getCurrentTrackingValue() {
    if (this.currentTrackingPointer === PointerType.Min) {
      return this.viewLowValue;
    } else if (this.currentTrackingPointer === PointerType.Max) {
      return this.viewHighValue;
    }
    return null;
  }
  modelValueToViewValue(modelValue) {
    if (ValueHelper.isNullOrUndefined(modelValue)) {
      return NaN;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
    }
    return +modelValue;
  }
  viewValueToModelValue(viewValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      return this.getStepValue(viewValue);
    }
    return viewValue;
  }
  getStepValue(sliderValue) {
    const step = this.viewOptions.stepsArray[sliderValue];
    return !ValueHelper.isNullOrUndefined(step) ? step.value : NaN;
  }
  applyViewChange() {
    this.value = this.viewValueToModelValue(this.viewLowValue);
    if (this.range) {
      this.highValue = this.viewValueToModelValue(this.viewHighValue);
    }
    this.outputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      controlAccessorChange: false,
      userEventInitiated: true,
      forceChange: false
    });
    this.inputModelChangeSubject.next({
      value: this.value,
      highValue: this.highValue,
      controlAccessorChange: false,
      forceChange: false,
      internalChange: true
    });
  }
  // Apply model change to the slider view
  applyInputModelChange(modelChange) {
    const normalisedModelChange = this.normaliseModelValues(modelChange);
    const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
    if (normalisationChange) {
      this.value = normalisedModelChange.value;
      this.highValue = normalisedModelChange.highValue;
    }
    this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    this.updateAriaAttributes();
    if (this.range) {
      this.updateCombinedLabel();
    }
    this.outputModelChangeSubject.next({
      value: normalisedModelChange.value,
      highValue: normalisedModelChange.highValue,
      controlAccessorChange: modelChange.controlAccessorChange,
      forceChange: normalisationChange,
      userEventInitiated: false
    });
  }
  // Publish model change to output event emitters and registered callbacks
  publishOutputModelChange(modelChange) {
    const emitOutputs = () => {
      this.valueChange.emit(modelChange.value);
      if (this.range) {
        this.highValueChange.emit(modelChange.highValue);
      }
      if (modelChange.controlAccessorChange) {
        return;
      }
      if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
        if (this.range) {
          this.onChangeCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onChangeCallback(modelChange.value);
        }
      }
      if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
        if (this.range) {
          this.onTouchedCallback([modelChange.value, modelChange.highValue]);
        } else {
          this.onTouchedCallback(modelChange.value);
        }
      }
    };
    if (modelChange.userEventInitiated) {
      emitOutputs();
      this.userChange.emit(this.getChangeContext());
    } else {
      setTimeout(() => {
        emitOutputs();
      });
    }
  }
  normaliseModelValues(input) {
    const normalisedInput = new ModelValues();
    normalisedInput.value = input.value;
    normalisedInput.highValue = input.highValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      if (this.viewOptions.enforceStepsArray) {
        const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
        normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
        if (this.range) {
          const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
          normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
        }
      }
      return normalisedInput;
    }
    if (this.viewOptions.enforceStep) {
      normalisedInput.value = this.roundStep(normalisedInput.value);
      if (this.range) {
        normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
      }
    }
    if (this.viewOptions.enforceRange) {
      normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
      if (this.range) {
        normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
      }
      if (this.range && input.value > input.highValue) {
        if (this.viewOptions.noSwitching) {
          normalisedInput.value = normalisedInput.highValue;
        } else {
          const tempValue = input.value;
          normalisedInput.value = input.highValue;
          normalisedInput.highValue = tempValue;
        }
      }
    }
    return normalisedInput;
  }
  renormaliseModelValues() {
    const previousModelValues = {
      value: this.value,
      highValue: this.highValue
    };
    const normalisedModelValues = this.normaliseModelValues(previousModelValues);
    if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
      this.value = normalisedModelValues.value;
      this.highValue = normalisedModelValues.highValue;
      this.outputModelChangeSubject.next({
        value: this.value,
        highValue: this.highValue,
        controlAccessorChange: false,
        forceChange: true,
        userEventInitiated: false
      });
    }
  }
  onChangeOptions() {
    if (!this.initHasRun) {
      return;
    }
    const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    this.applyOptions();
    const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
    const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
    this.renormaliseModelValues();
    this.viewLowValue = this.modelValueToViewValue(this.value);
    if (this.range) {
      this.viewHighValue = this.modelValueToViewValue(this.highValue);
    } else {
      this.viewHighValue = null;
    }
    this.resetSlider(rebindEvents);
  }
  // Read the user options and apply them to the slider model
  applyOptions() {
    this.viewOptions = new Options();
    Object.assign(this.viewOptions, this.options);
    this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
    this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
    if (this.viewOptions.draggableRangeOnly) {
      this.viewOptions.draggableRange = true;
    }
    this.viewOptions.showTicks = this.viewOptions.showTicks || this.viewOptions.showTicksValues || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
    if (this.viewOptions.showTicks && (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
      this.intermediateTicks = true;
    }
    this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar || this.viewOptions.showSelectionBarEnd || !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
      this.applyStepsArrayOptions();
    } else {
      this.applyFloorCeilOptions();
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
      this.viewOptions.combineLabels = (minValue, maxValue) => {
        return minValue + " - " + maxValue;
      };
    }
    if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
      throw Error("Can't use floor=0 with logarithmic scale");
    }
  }
  applyStepsArrayOptions() {
    this.viewOptions.floor = 0;
    this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
    this.viewOptions.step = 1;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = (modelValue) => {
        if (this.viewOptions.bindIndexForStepsArray) {
          return String(this.getStepValue(modelValue));
        }
        return String(modelValue);
      };
    }
  }
  applyFloorCeilOptions() {
    if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
      this.viewOptions.step = 1;
    } else {
      this.viewOptions.step = +this.viewOptions.step;
      if (this.viewOptions.step <= 0) {
        this.viewOptions.step = 1;
      }
    }
    if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) || ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
      throw Error("floor and ceil options must be supplied");
    }
    this.viewOptions.ceil = +this.viewOptions.ceil;
    this.viewOptions.floor = +this.viewOptions.floor;
    if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
      this.viewOptions.translate = (value) => String(value);
    }
  }
  // Resets slider
  resetSlider(rebindEvents = true) {
    this.manageElementsStyle();
    this.addAccessibility();
    this.updateCeilLabel();
    this.updateFloorLabel();
    if (rebindEvents) {
      this.unbindEvents();
      this.manageEventsBindings();
    }
    this.updateDisabledState();
    this.updateAriaLabel();
    this.calculateViewDimensions();
    this.refocusPointerIfNeeded();
  }
  // Sets focus on the specified pointer
  focusPointer(pointerType) {
    if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
      pointerType = PointerType.Min;
    }
    if (pointerType === PointerType.Min) {
      this.minHandleElement.focus();
    } else if (this.range && pointerType === PointerType.Max) {
      this.maxHandleElement.focus();
    }
  }
  refocusPointerIfNeeded() {
    if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
      const element = this.getPointerElement(this.currentFocusPointer);
      element.focusIfNeeded();
    }
  }
  // Update each elements style based on options
  manageElementsStyle() {
    this.updateScale();
    this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
    const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
    this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
    this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
    this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
    this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
    this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
    this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
    this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
    if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
      this.updateVerticalState();
      setTimeout(() => {
        this.resetSlider();
      });
    }
    if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
      setTimeout(() => {
        this.sliderElementAnimateClass = this.viewOptions.animate;
      });
    }
    this.updateRotate();
  }
  // Manage the events bindings based on readOnly and disabled options
  manageEventsBindings() {
    if (this.viewOptions.disabled || this.viewOptions.readOnly) {
      this.unbindEvents();
    } else {
      this.bindEvents();
    }
  }
  // Set the disabled state based on disabled option
  updateDisabledState() {
    this.sliderElementDisabledAttr = this.viewOptions.disabled ? "disabled" : null;
  }
  // Set the aria-label state based on ariaLabel option
  updateAriaLabel() {
    this.sliderElementAriaLabel = this.viewOptions.ariaLabel || "nxg-slider";
  }
  // Set vertical state based on vertical option
  updateVerticalState() {
    this.sliderElementVerticalClass = this.viewOptions.vertical;
    for (const element of this.getAllSliderElements()) {
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.setVertical(this.viewOptions.vertical);
      }
    }
  }
  updateScale() {
    for (const element of this.getAllSliderElements()) {
      element.setScale(this.viewOptions.scale);
    }
  }
  updateRotate() {
    for (const element of this.getAllSliderElements()) {
      element.setRotate(this.viewOptions.rotate);
    }
  }
  getAllSliderElements() {
    return [this.leftOuterSelectionBarElement, this.rightOuterSelectionBarElement, this.fullBarElement, this.selectionBarElement, this.minHandleElement, this.maxHandleElement, this.floorLabelElement, this.ceilLabelElement, this.minHandleLabelElement, this.maxHandleLabelElement, this.combinedLabelElement, this.ticksElement];
  }
  // Initialize slider handles positions and labels
  // Run only once during initialization and every time view port changes size
  initHandles() {
    this.updateLowHandle(this.valueToPosition(this.viewLowValue));
    if (this.range) {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
    }
    this.updateSelectionBar();
    if (this.range) {
      this.updateCombinedLabel();
    }
    this.updateTicksScale();
  }
  // Adds accessibility attributes, run only once during initialization
  addAccessibility() {
    this.updateAriaAttributes();
    this.minHandleElement.role = "slider";
    if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
      this.minHandleElement.tabindex = "0";
    } else {
      this.minHandleElement.tabindex = "";
    }
    this.minHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? "vertical" : "horizontal";
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
      this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
      this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
    }
    if (this.range) {
      this.maxHandleElement.role = "slider";
      if (this.viewOptions.keyboardSupport && !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
        this.maxHandleElement.tabindex = "0";
      } else {
        this.maxHandleElement.tabindex = "";
      }
      this.maxHandleElement.ariaOrientation = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? "vertical" : "horizontal";
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
        this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
        this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
      }
    }
  }
  // Updates aria attributes according to current values
  updateAriaAttributes() {
    this.minHandleElement.ariaValueNow = (+this.value).toString();
    this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
    this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
    this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    if (this.range) {
      this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
      this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
      this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
      this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
    }
  }
  // Calculate dimensions that are dependent on view port size
  // Run once during initialization and every time view port changes size.
  calculateViewDimensions() {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
      this.minHandleElement.setDimension(this.viewOptions.handleDimension);
    } else {
      this.minHandleElement.calculateDimension();
    }
    const handleWidth = this.minHandleElement.dimension;
    this.handleHalfDimension = handleWidth / 2;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
      this.fullBarElement.setDimension(this.viewOptions.barDimension);
    } else {
      this.fullBarElement.calculateDimension();
    }
    this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
    if (this.initHasRun) {
      this.updateFloorLabel();
      this.updateCeilLabel();
      this.initHandles();
    }
  }
  calculateViewDimensionsAndDetectChanges() {
    this.calculateViewDimensions();
    if (!this.isRefDestroyed()) {
      this.changeDetectionRef.detectChanges();
    }
  }
  /**
   * If the slider reference is already destroyed
   * @returns boolean - true if ref is destroyed
   */
  isRefDestroyed() {
    return this.changeDetectionRef["destroyed"];
  }
  // Update the ticks position
  updateTicksScale() {
    if (!this.viewOptions.showTicks && this.sliderElementWithLegendClass) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = false;
      });
      return;
    }
    const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray) ? this.viewOptions.ticksArray : this.getTicksArray();
    const translate = this.viewOptions.vertical ? "translateY" : "translateX";
    if (this.viewOptions.rightToLeft) {
      ticksArray.reverse();
    }
    const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep : !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    let hasAtLeastOneLegend = false;
    const newTicks = ticksArray.map((value) => {
      let position = this.valueToPosition(value);
      if (this.viewOptions.vertical) {
        position = this.maxHandlePosition - position;
      }
      const translation = translate + "(" + Math.round(position) + "px)";
      const tick = new Tick();
      tick.selected = this.isTickSelected(value);
      tick.style = {
        "-webkit-transform": translation,
        "-moz-transform": translation,
        "-o-transform": translation,
        "-ms-transform": translation,
        transform: translation
      };
      if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
        tick.style["background-color"] = this.getSelectionBarColor();
      }
      if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
        tick.style["background-color"] = this.getTickColor(value);
      }
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
        tick.tooltip = this.viewOptions.ticksTooltip(value);
        tick.tooltipPlacement = this.viewOptions.vertical ? "right" : "top";
      }
      if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) && MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
        tick.value = this.getDisplayValue(value, LabelType.TickValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
          tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
          tick.valueTooltipPlacement = this.viewOptions.vertical ? "right" : "top";
        }
      }
      let legend = null;
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
        const step = this.viewOptions.stepsArray[value];
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getStepLegend)) {
          legend = this.viewOptions.getStepLegend(step);
        } else if (!ValueHelper.isNullOrUndefined(step)) {
          legend = step.legend;
        }
      } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
        legend = this.viewOptions.getLegend(value);
      }
      if (!ValueHelper.isNullOrUndefined(legend)) {
        tick.legend = legend;
        hasAtLeastOneLegend = true;
      }
      return tick;
    });
    if (this.sliderElementWithLegendClass !== hasAtLeastOneLegend) {
      setTimeout(() => {
        this.sliderElementWithLegendClass = hasAtLeastOneLegend;
      });
    }
    if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
      for (let i = 0; i < newTicks.length; ++i) {
        Object.assign(this.ticks[i], newTicks[i]);
      }
    } else {
      this.ticks = newTicks;
      if (!this.isRefDestroyed()) {
        this.changeDetectionRef.detectChanges();
      }
    }
  }
  getTicksArray() {
    if (!this.viewOptions.showTicks) {
      return [];
    }
    const step = !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step;
    const ticksArray = [];
    const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
    for (let index = 0; index < numberOfValues; ++index) {
      ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
    }
    return ticksArray;
  }
  isTickSelected(value) {
    if (!this.range) {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        if (this.viewLowValue > center && value >= center && value <= this.viewLowValue) {
          return true;
        } else if (this.viewLowValue < center && value <= center && value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBarEnd) {
        if (value >= this.viewLowValue) {
          return true;
        }
      } else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
        return true;
      }
    }
    if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
      return true;
    }
    return false;
  }
  // Update position of the floor label
  updateFloorLabel() {
    if (!this.floorLabelElement.alwaysHide) {
      this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
      this.floorLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? this.fullBarElement.dimension - this.floorLabelElement.dimension : 0;
      this.floorLabelElement.setPosition(position);
    }
  }
  // Update position of the ceiling label
  updateCeilLabel() {
    if (!this.ceilLabelElement.alwaysHide) {
      this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
      this.ceilLabelElement.calculateDimension();
      const position = this.viewOptions.rightToLeft ? 0 : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
      this.ceilLabelElement.setPosition(position);
    }
  }
  // Update slider handles and label positions
  updateHandles(which, newPos) {
    if (which === PointerType.Min) {
      this.updateLowHandle(newPos);
    } else if (which === PointerType.Max) {
      this.updateHighHandle(newPos);
    }
    this.updateSelectionBar();
    this.updateTicksScale();
    if (this.range) {
      this.updateCombinedLabel();
    }
  }
  // Helper function to work out the position for handle labels depending on RTL or not
  getHandleLabelPos(labelType, newPos) {
    const labelDimension = labelType === PointerType.Min ? this.minHandleLabelElement.dimension : this.maxHandleLabelElement.dimension;
    const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
    const endOfBarPos = this.fullBarElement.dimension - labelDimension;
    if (!this.viewOptions.boundPointerLabels) {
      return nearHandlePos;
    }
    if (this.viewOptions.rightToLeft && labelType === PointerType.Min || !this.viewOptions.rightToLeft && labelType === PointerType.Max) {
      return Math.min(nearHandlePos, endOfBarPos);
    } else {
      return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
    }
  }
  // Update low slider handle position and label
  updateLowHandle(newPos) {
    this.minHandleElement.setPosition(newPos);
    this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
    this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.minPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Min)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Update high slider handle position and label
  updateHighHandle(newPos) {
    this.maxHandleElement.setPosition(newPos);
    this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
    this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
      this.maxPointerStyle = {
        backgroundColor: this.getPointerColor(PointerType.Max)
      };
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Show/hide floor/ceiling label
  updateFloorAndCeilLabelsVisibility() {
    if (this.viewOptions.hidePointerLabels) {
      return;
    }
    let floorLabelHidden = false;
    let ceilLabelHidden = false;
    const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
    const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
    const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
    const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
    const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
    if (isMinLabelAtFloor) {
      floorLabelHidden = true;
      this.floorLabelElement.hide();
    } else {
      floorLabelHidden = false;
      this.floorLabelElement.show();
    }
    if (isMinLabelAtCeil) {
      ceilLabelHidden = true;
      this.ceilLabelElement.hide();
    } else {
      ceilLabelHidden = false;
      this.ceilLabelElement.show();
    }
    if (this.range) {
      const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
      const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
      if (hideCeil) {
        this.ceilLabelElement.hide();
      } else if (!ceilLabelHidden) {
        this.ceilLabelElement.show();
      }
      if (hideFloor) {
        this.floorLabelElement.hide();
      } else if (!floorLabelHidden) {
        this.floorLabelElement.show();
      }
    }
  }
  isLabelBelowFloorLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const floorPos = this.floorLabelElement.position;
    const floorDim = this.floorLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos + dim >= floorPos - 2 : pos <= floorPos + floorDim + 2;
  }
  isLabelAboveCeilLabel(label) {
    const pos = label.position;
    const dim = label.dimension;
    const ceilPos = this.ceilLabelElement.position;
    const ceilDim = this.ceilLabelElement.dimension;
    return this.viewOptions.rightToLeft ? pos <= ceilPos + ceilDim + 2 : pos + dim >= ceilPos - 2;
  }
  // Update slider selection bar, combined label and range label
  updateSelectionBar() {
    let position = 0;
    let dimension = 0;
    const isSelectionBarFromRight = this.viewOptions.rightToLeft ? !this.viewOptions.showSelectionBarEnd : this.viewOptions.showSelectionBarEnd;
    const positionForRange = this.viewOptions.rightToLeft ? this.maxHandleElement.position + this.handleHalfDimension : this.minHandleElement.position + this.handleHalfDimension;
    if (this.range) {
      dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
      position = positionForRange;
    } else {
      if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
        const center = this.viewOptions.showSelectionBarFromValue;
        const centerPosition = this.valueToPosition(center);
        const isModelGreaterThanCenter = this.viewOptions.rightToLeft ? this.viewLowValue <= center : this.viewLowValue > center;
        if (isModelGreaterThanCenter) {
          dimension = this.minHandleElement.position - centerPosition;
          position = centerPosition + this.handleHalfDimension;
        } else {
          dimension = centerPosition - this.minHandleElement.position;
          position = this.minHandleElement.position + this.handleHalfDimension;
        }
      } else if (isSelectionBarFromRight) {
        dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
        position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
      } else {
        dimension = this.minHandleElement.position + this.handleHalfDimension;
        position = 0;
      }
    }
    this.selectionBarElement.setDimension(dimension);
    this.selectionBarElement.setPosition(position);
    if (this.range && this.viewOptions.showOuterSelectionBars) {
      if (this.viewOptions.rightToLeft) {
        this.rightOuterSelectionBarElement.setDimension(position);
        this.rightOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.leftOuterSelectionBarElement.setPosition(position + dimension);
      } else {
        this.leftOuterSelectionBarElement.setDimension(position);
        this.leftOuterSelectionBarElement.setPosition(0);
        this.fullBarElement.calculateDimension();
        this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
        this.rightOuterSelectionBarElement.setPosition(position + dimension);
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
      const color = this.getSelectionBarColor();
      this.barStyle = {
        backgroundColor: color
      };
    } else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
      const offset = !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue) ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue) : 0;
      const reversed = offset - position > 0 && !isSelectionBarFromRight || offset - position <= 0 && isSelectionBarFromRight;
      const direction = this.viewOptions.vertical ? reversed ? "bottom" : "top" : reversed ? "left" : "right";
      this.barStyle = {
        backgroundImage: "linear-gradient(to " + direction + ", " + this.viewOptions.selectionBarGradient.from + " 0%," + this.viewOptions.selectionBarGradient.to + " 100%)"
      };
      if (this.viewOptions.vertical) {
        this.barStyle.backgroundPosition = "center " + (offset + dimension + position + (reversed ? -this.handleHalfDimension : 0)) + "px";
        this.barStyle.backgroundSize = "100% " + (this.fullBarElement.dimension - this.handleHalfDimension) + "px";
      } else {
        this.barStyle.backgroundPosition = offset - position + (reversed ? this.handleHalfDimension : 0) + "px center";
        this.barStyle.backgroundSize = this.fullBarElement.dimension - this.handleHalfDimension + "px 100%";
      }
    }
  }
  // Wrapper around the getSelectionBarColor of the user to pass to correct parameters
  getSelectionBarColor() {
    if (this.range) {
      return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
    }
    return this.viewOptions.getSelectionBarColor(this.value);
  }
  // Wrapper around the getPointerColor of the user to pass to  correct parameters
  getPointerColor(pointerType) {
    if (pointerType === PointerType.Max) {
      return this.viewOptions.getPointerColor(this.highValue, pointerType);
    }
    return this.viewOptions.getPointerColor(this.value, pointerType);
  }
  // Wrapper around the getTickColor of the user to pass to correct parameters
  getTickColor(value) {
    return this.viewOptions.getTickColor(value);
  }
  // Update combined label position and value
  updateCombinedLabel() {
    let isLabelOverlap = null;
    if (this.viewOptions.rightToLeft) {
      isLabelOverlap = this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
    } else {
      isLabelOverlap = this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
    }
    if (isLabelOverlap) {
      const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
      const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
      const combinedLabelValue = this.viewOptions.rightToLeft ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue) : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
      this.combinedLabelElement.setValue(combinedLabelValue);
      const pos = this.viewOptions.boundPointerLabels ? Math.min(Math.max(this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension) : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
      this.combinedLabelElement.setPosition(pos);
      this.minHandleLabelElement.hide();
      this.maxHandleLabelElement.hide();
      this.combinedLabelElement.show();
    } else {
      this.updateHighHandle(this.valueToPosition(this.viewHighValue));
      this.updateLowHandle(this.valueToPosition(this.viewLowValue));
      this.maxHandleLabelElement.show();
      this.minHandleLabelElement.show();
      this.combinedLabelElement.hide();
    }
    if (this.viewOptions.autoHideLimitLabels) {
      this.updateFloorAndCeilLabelsVisibility();
    }
  }
  // Return the translated value if a translate function is provided else the original value
  getDisplayValue(value, which) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
      value = this.getStepValue(value);
    }
    return this.viewOptions.translate(value, which);
  }
  // Round value to step and precision based on minValue
  roundStep(value, customStep) {
    const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
    let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
    steppedDifference = Math.round(steppedDifference) * step;
    return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
  }
  // Translate value to pixel position
  valueToPosition(val) {
    let fn = ValueHelper.linearValueToPosition;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
      fn = this.viewOptions.customValueToPosition;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logValueToPosition;
    }
    val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
    let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
    if (ValueHelper.isNullOrUndefined(percent)) {
      percent = 0;
    }
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    return percent * this.maxHandlePosition;
  }
  // Translate position to model value
  positionToValue(position) {
    let percent = position / this.maxHandlePosition;
    if (this.viewOptions.rightToLeft) {
      percent = 1 - percent;
    }
    let fn = ValueHelper.linearPositionToValue;
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
      fn = this.viewOptions.customPositionToValue;
    } else if (this.viewOptions.logScale) {
      fn = ValueHelper.logPositionToValue;
    }
    const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
    return !ValueHelper.isNullOrUndefined(value) ? value : 0;
  }
  // Get the X-coordinate or Y-coordinate of an event
  getEventXY(event, targetTouchId) {
    if (event instanceof MouseEvent) {
      return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? event.clientY : event.clientX;
    }
    let touchIndex = 0;
    const touches = event.touches;
    if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
      for (let i = 0; i < touches.length; i++) {
        if (touches[i].identifier === targetTouchId) {
          touchIndex = i;
          break;
        }
      }
    }
    return this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? touches[touchIndex].clientY : touches[touchIndex].clientX;
  }
  // Compute the event position depending on whether the slider is horizontal or vertical
  getEventPosition(event, targetTouchId) {
    const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
    const sliderPos = this.viewOptions.vertical || this.viewOptions.rotate !== 0 ? sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
    let eventPos = 0;
    if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
      eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
    } else {
      eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
    }
    return eventPos * this.viewOptions.scale - this.handleHalfDimension;
  }
  // Get the handle closest to an event
  getNearestHandle(event) {
    if (!this.range) {
      return PointerType.Min;
    }
    const position = this.getEventPosition(event);
    const distanceMin = Math.abs(position - this.minHandleElement.position);
    const distanceMax = Math.abs(position - this.maxHandleElement.position);
    if (distanceMin < distanceMax) {
      return PointerType.Min;
    } else if (distanceMin > distanceMax) {
      return PointerType.Max;
    } else if (!this.viewOptions.rightToLeft) {
      return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
  }
  // Bind mouse and touch events to slider handles
  bindEvents() {
    const draggableRange = this.viewOptions.draggableRange;
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.on("mousedown", (event) => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.on("mousedown", (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.on("mousedown", (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.on("mousedown", (event) => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.on("mousedown", (event) => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.on("mousedown", (event) => this.onStart(null, event, true, true, true));
        this.ticksElement.on("mousedown", (event) => this.onStart(null, event, true, true, true, true));
      }
    }
    if (!this.viewOptions.onlyBindHandles) {
      this.selectionBarElement.onPassive("touchstart", (event) => this.onBarStart(null, draggableRange, event, true, true, true));
    }
    if (this.viewOptions.draggableRangeOnly) {
      this.minHandleElement.onPassive("touchstart", (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
      this.maxHandleElement.onPassive("touchstart", (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
    } else {
      this.minHandleElement.onPassive("touchstart", (event) => this.onStart(PointerType.Min, event, true, true));
      if (this.range) {
        this.maxHandleElement.onPassive("touchstart", (event) => this.onStart(PointerType.Max, event, true, true));
      }
      if (!this.viewOptions.onlyBindHandles) {
        this.fullBarElement.onPassive("touchstart", (event) => this.onStart(null, event, true, true, true));
        this.ticksElement.onPassive("touchstart", (event) => this.onStart(null, event, false, false, true, true));
      }
    }
    if (this.viewOptions.keyboardSupport) {
      this.minHandleElement.on("focus", () => this.onPointerFocus(PointerType.Min));
      if (this.range) {
        this.maxHandleElement.on("focus", () => this.onPointerFocus(PointerType.Max));
      }
    }
  }
  getOptionsInfluencingEventBindings(options2) {
    return [options2.disabled, options2.readOnly, options2.draggableRange, options2.draggableRangeOnly, options2.onlyBindHandles, options2.keyboardSupport];
  }
  // Unbind mouse and touch events to slider handles
  unbindEvents() {
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    for (const element of this.getAllSliderElements()) {
      if (!ValueHelper.isNullOrUndefined(element)) {
        element.off();
      }
    }
  }
  onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    if (draggableRange) {
      this.onDragStart(pointerType, event, bindMove, bindEnd);
    } else {
      this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
    }
  }
  // onStart event handler
  onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
    event.stopPropagation();
    if (!CompatibilityHelper.isTouchEvent(event) && !supportsPassiveEvents) {
      event.preventDefault();
    }
    this.moving = false;
    this.calculateViewDimensions();
    if (ValueHelper.isNullOrUndefined(pointerType)) {
      pointerType = this.getNearestHandle(event);
    }
    this.currentTrackingPointer = pointerType;
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.active = true;
    this.preStartHandleValue = this.getCurrentTrackingValue();
    if (this.viewOptions.keyboardSupport) {
      pointerElement.focus();
    }
    if (bindMove) {
      this.unsubscribeOnMove();
      const onMoveCallback = (e) => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, "touchmove", onMoveCallback);
      } else {
        this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, "mousemove", onMoveCallback);
      }
    }
    if (bindEnd) {
      this.unsubscribeOnEnd();
      const onEndCallback = (e) => this.onEnd(e);
      if (CompatibilityHelper.isTouchEvent(event)) {
        this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, "touchend", onEndCallback);
      } else {
        this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, "mouseup", onEndCallback);
      }
    }
    this.userChangeStart.emit(this.getChangeContext());
    if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined(event.changedTouches)) {
      if (ValueHelper.isNullOrUndefined(this.touchId)) {
        this.touchId = event.changedTouches[0].identifier;
      }
    }
    if (simulateImmediateMove) {
      this.onMove(event, true);
    }
    if (simulateImmediateEnd) {
      this.onEnd(event);
    }
  }
  // onMove event handler
  onMove(event, fromTick) {
    let touchForThisSlider = null;
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      for (let i = 0; i < changedTouches.length; i++) {
        if (changedTouches[i].identifier === this.touchId) {
          touchForThisSlider = changedTouches[i];
          break;
        }
      }
      if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
        return;
      }
    }
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider) ? this.getEventPosition(event, touchForThisSlider.identifier) : this.getEventPosition(event);
    let newValue;
    const ceilValue = this.viewOptions.rightToLeft ? this.viewOptions.floor : this.viewOptions.ceil;
    const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
    if (newPos <= 0) {
      newValue = floorValue;
    } else if (newPos >= this.maxHandlePosition) {
      newValue = ceilValue;
    } else {
      newValue = this.positionToValue(newPos);
      if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
        newValue = this.roundStep(newValue, this.viewOptions.tickStep);
      } else {
        newValue = this.roundStep(newValue);
      }
    }
    this.positionTrackingHandle(newValue);
  }
  forceEnd(disableAnimation = false) {
    this.moving = false;
    if (this.viewOptions.animate) {
      this.sliderElementAnimateClass = true;
    }
    if (disableAnimation) {
      this.sliderElementAnimateClass = false;
      setTimeout(() => {
        this.sliderElementAnimateClass = this.viewOptions.animate;
      });
    }
    this.touchId = null;
    if (!this.viewOptions.keyboardSupport) {
      this.minHandleElement.active = false;
      this.maxHandleElement.active = false;
      this.currentTrackingPointer = null;
    }
    this.dragging.active = false;
    this.unsubscribeOnMove();
    this.unsubscribeOnEnd();
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onEnd(event) {
    if (CompatibilityHelper.isTouchEvent(event)) {
      const changedTouches = event.changedTouches;
      if (changedTouches[0].identifier !== this.touchId) {
        return;
      }
    }
    this.forceEnd();
  }
  onPointerFocus(pointerType) {
    const pointerElement = this.getPointerElement(pointerType);
    pointerElement.on("blur", () => this.onPointerBlur(pointerElement));
    pointerElement.on("keydown", (event) => this.onKeyboardEvent(event));
    pointerElement.on("keyup", () => this.onKeyUp());
    pointerElement.active = true;
    this.currentTrackingPointer = pointerType;
    this.currentFocusPointer = pointerType;
    this.firstKeyDown = true;
  }
  onKeyUp() {
    this.firstKeyDown = true;
    this.userChangeEnd.emit(this.getChangeContext());
  }
  onPointerBlur(pointer) {
    pointer.off("blur");
    pointer.off("keydown");
    pointer.off("keyup");
    pointer.active = false;
    if (ValueHelper.isNullOrUndefined(this.touchId)) {
      this.currentTrackingPointer = null;
      this.currentFocusPointer = null;
    }
  }
  getKeyActions(currentValue) {
    const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
    let increaseStep = currentValue + this.viewOptions.step;
    let decreaseStep = currentValue - this.viewOptions.step;
    let increasePage = currentValue + valueRange / 10;
    let decreasePage = currentValue - valueRange / 10;
    if (this.viewOptions.reversedControls) {
      increaseStep = currentValue - this.viewOptions.step;
      decreaseStep = currentValue + this.viewOptions.step;
      increasePage = currentValue - valueRange / 10;
      decreasePage = currentValue + valueRange / 10;
    }
    const actions = {
      UP: increaseStep,
      DOWN: decreaseStep,
      LEFT: decreaseStep,
      RIGHT: increaseStep,
      PAGEUP: increasePage,
      PAGEDOWN: decreasePage,
      HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
      END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil
    };
    if (this.viewOptions.rightToLeft) {
      actions.LEFT = increaseStep;
      actions.RIGHT = decreaseStep;
      if (this.viewOptions.vertical || this.viewOptions.rotate !== 0) {
        actions.UP = decreaseStep;
        actions.DOWN = increaseStep;
      }
    }
    return actions;
  }
  onKeyboardEvent(event) {
    const currentValue = this.getCurrentTrackingValue();
    const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode) ? event.keyCode : event.which;
    const keys = {
      38: "UP",
      40: "DOWN",
      37: "LEFT",
      39: "RIGHT",
      33: "PAGEUP",
      34: "PAGEDOWN",
      36: "HOME",
      35: "END"
    };
    const actions = this.getKeyActions(currentValue);
    const key = keys[keyCode];
    const action = actions[key];
    if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
      return;
    }
    event.preventDefault();
    if (this.firstKeyDown) {
      this.firstKeyDown = false;
      this.userChangeStart.emit(this.getChangeContext());
    }
    const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
    const newValue = this.roundStep(actionValue);
    if (!this.viewOptions.draggableRangeOnly) {
      this.positionTrackingHandle(newValue);
    } else {
      const difference = this.viewHighValue - this.viewLowValue;
      let newMinValue;
      let newMaxValue;
      if (this.currentTrackingPointer === PointerType.Min) {
        newMinValue = newValue;
        newMaxValue = newValue + difference;
        if (newMaxValue > this.viewOptions.ceil) {
          newMaxValue = this.viewOptions.ceil;
          newMinValue = newMaxValue - difference;
        }
      } else if (this.currentTrackingPointer === PointerType.Max) {
        newMaxValue = newValue;
        newMinValue = newValue - difference;
        if (newMinValue < this.viewOptions.floor) {
          newMinValue = this.viewOptions.floor;
          newMaxValue = newMinValue + difference;
        }
      }
      this.positionTrackingBar(newMinValue, newMaxValue);
    }
  }
  // onDragStart event handler, handles dragging of the middle bar
  onDragStart(pointerType, event, bindMove, bindEnd) {
    const position = this.getEventPosition(event);
    this.dragging = new Dragging();
    this.dragging.active = true;
    this.dragging.value = this.positionToValue(position);
    this.dragging.difference = this.viewHighValue - this.viewLowValue;
    this.dragging.lowLimit = this.viewOptions.rightToLeft ? this.minHandleElement.position - position : position - this.minHandleElement.position;
    this.dragging.highLimit = this.viewOptions.rightToLeft ? position - this.maxHandleElement.position : this.maxHandleElement.position - position;
    this.onStart(pointerType, event, bindMove, bindEnd);
  }
  /** Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMinValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor : this.viewOptions.ceil - this.dragging.difference;
      } else {
        value = isRTL ? this.viewOptions.ceil - this.dragging.difference : this.viewOptions.floor;
      }
    } else {
      value = isRTL ? this.positionToValue(newPos + this.dragging.lowLimit) : this.positionToValue(newPos - this.dragging.lowLimit);
    }
    return this.roundStep(value);
  }
  /** Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft */
  getMaxValue(newPos, outOfBounds, isAbove) {
    const isRTL = this.viewOptions.rightToLeft;
    let value = null;
    if (outOfBounds) {
      if (isAbove) {
        value = isRTL ? this.viewOptions.floor + this.dragging.difference : this.viewOptions.ceil;
      } else {
        value = isRTL ? this.viewOptions.ceil : this.viewOptions.floor + this.dragging.difference;
      }
    } else {
      if (isRTL) {
        value = this.positionToValue(newPos + this.dragging.lowLimit) + this.dragging.difference;
      } else {
        value = this.positionToValue(newPos - this.dragging.lowLimit) + this.dragging.difference;
      }
    }
    return this.roundStep(value);
  }
  onDragMove(event) {
    const newPos = this.getEventPosition(event);
    if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
      if (this.moving) {
        this.sliderElementAnimateClass = false;
      }
    }
    this.moving = true;
    let ceilLimit, floorLimit, floorHandleElement, ceilHandleElement;
    if (this.viewOptions.rightToLeft) {
      ceilLimit = this.dragging.lowLimit;
      floorLimit = this.dragging.highLimit;
      floorHandleElement = this.maxHandleElement;
      ceilHandleElement = this.minHandleElement;
    } else {
      ceilLimit = this.dragging.highLimit;
      floorLimit = this.dragging.lowLimit;
      floorHandleElement = this.minHandleElement;
      ceilHandleElement = this.maxHandleElement;
    }
    const isUnderFloorLimit = newPos <= floorLimit;
    const isOverCeilLimit = newPos >= this.maxHandlePosition - ceilLimit;
    let newMinValue;
    let newMaxValue;
    if (isUnderFloorLimit) {
      if (floorHandleElement.position === 0) {
        return;
      }
      newMinValue = this.getMinValue(newPos, true, false);
      newMaxValue = this.getMaxValue(newPos, true, false);
    } else if (isOverCeilLimit) {
      if (ceilHandleElement.position === this.maxHandlePosition) {
        return;
      }
      newMaxValue = this.getMaxValue(newPos, true, true);
      newMinValue = this.getMinValue(newPos, true, true);
    } else {
      newMinValue = this.getMinValue(newPos, false, false);
      newMaxValue = this.getMaxValue(newPos, false, false);
    }
    this.positionTrackingBar(newMinValue, newMaxValue);
  }
  // Set the new value and position for the entire bar
  positionTrackingBar(newMinValue, newMaxValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newMinValue < this.viewOptions.minLimit) {
      newMinValue = this.viewOptions.minLimit;
      newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newMaxValue > this.viewOptions.maxLimit) {
      newMaxValue = this.viewOptions.maxLimit;
      newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
    }
    this.viewLowValue = newMinValue;
    this.viewHighValue = newMaxValue;
    this.applyViewChange();
    this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
    this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
  }
  // Set the new value and position to the current tracking handle
  positionTrackingHandle(newValue) {
    newValue = this.applyMinMaxLimit(newValue);
    if (this.range) {
      if (this.viewOptions.pushRange) {
        newValue = this.applyPushRange(newValue);
      } else {
        if (this.viewOptions.noSwitching) {
          if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
            newValue = this.applyMinMaxRange(this.viewHighValue);
          } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
            newValue = this.applyMinMaxRange(this.viewLowValue);
          }
        }
        newValue = this.applyMinMaxRange(newValue);
        if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
          this.viewLowValue = this.viewHighValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Min, this.maxHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Max;
          this.minHandleElement.active = false;
          this.maxHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.maxHandleElement.focus();
          }
        } else if (this.currentTrackingPointer === PointerType.Max && newValue < this.viewLowValue) {
          this.viewHighValue = this.viewLowValue;
          this.applyViewChange();
          this.updateHandles(PointerType.Max, this.minHandleElement.position);
          this.updateAriaAttributes();
          this.currentTrackingPointer = PointerType.Min;
          this.maxHandleElement.active = false;
          this.minHandleElement.active = true;
          if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.focus();
          }
        }
      }
    }
    if (this.getCurrentTrackingValue() !== newValue) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewLowValue = newValue;
        this.applyViewChange();
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewHighValue = newValue;
        this.applyViewChange();
      }
      this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
      this.updateAriaAttributes();
    }
  }
  applyMinMaxLimit(newValue) {
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
      return this.viewOptions.minLimit;
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
      return this.viewOptions.maxLimit;
    }
    return newValue;
  }
  applyMinMaxRange(newValue) {
    const oppositeValue = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue : this.viewLowValue;
    const difference = Math.abs(newValue - oppositeValue);
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
      if (difference < this.viewOptions.minRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
        }
      }
    }
    if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
      if (difference > this.viewOptions.maxRange) {
        if (this.currentTrackingPointer === PointerType.Min) {
          return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        } else if (this.currentTrackingPointer === PointerType.Max) {
          return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
        }
      }
    }
    return newValue;
  }
  applyPushRange(newValue) {
    const difference = this.currentTrackingPointer === PointerType.Min ? this.viewHighValue - newValue : newValue - this.viewLowValue;
    const minRange = !ValueHelper.isNullOrUndefined(this.viewOptions.minRange) ? this.viewOptions.minRange : this.viewOptions.step;
    const maxRange = this.viewOptions.maxRange;
    if (difference < minRange) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
        newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    } else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
      if (this.currentTrackingPointer === PointerType.Min) {
        this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
      } else if (this.currentTrackingPointer === PointerType.Max) {
        this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
      }
      this.updateAriaAttributes();
    }
    return newValue;
  }
  getChangeContext() {
    const changeContext = new ChangeContext();
    changeContext.pointerType = this.currentTrackingPointer;
    changeContext.value = +this.value;
    if (this.range) {
      changeContext.highValue = +this.highValue;
    }
    return changeContext;
  }
  static ɵfac = function SliderComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SliderComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(AllowUnsafeHtmlInSlider, 8));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _SliderComponent,
    selectors: [["ngx-slider"]],
    contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tooltipTemplate = _t.first);
      }
    },
    viewQuery: function SliderComponent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c2, 5, SliderElementDirective);
        ɵɵviewQuery(_c3, 5, SliderElementDirective);
        ɵɵviewQuery(_c4, 5, SliderElementDirective);
        ɵɵviewQuery(_c5, 5, SliderElementDirective);
        ɵɵviewQuery(_c6, 5, SliderHandleDirective);
        ɵɵviewQuery(_c7, 5, SliderHandleDirective);
        ɵɵviewQuery(_c8, 5, SliderLabelDirective);
        ɵɵviewQuery(_c9, 5, SliderLabelDirective);
        ɵɵviewQuery(_c10, 5, SliderLabelDirective);
        ɵɵviewQuery(_c11, 5, SliderLabelDirective);
        ɵɵviewQuery(_c12, 5, SliderLabelDirective);
        ɵɵviewQuery(_c13, 5, SliderElementDirective);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.leftOuterSelectionBarElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rightOuterSelectionBarElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fullBarElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selectionBarElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.minHandleElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.maxHandleElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.floorLabelElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ceilLabelElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.minHandleLabelElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.maxHandleLabelElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.combinedLabelElement = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ticksElement = _t.first);
      }
    },
    hostVars: 10,
    hostBindings: function SliderComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("resize", function SliderComponent_resize_HostBindingHandler($event) {
          return ctx.onResize($event);
        }, false, ɵɵresolveWindow);
      }
      if (rf & 2) {
        ɵɵattribute("disabled", ctx.sliderElementDisabledAttr)("aria-label", ctx.sliderElementAriaLabel);
        ɵɵclassProp("ngx-slider", ctx.sliderElementNgxSliderClass)("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
      }
    },
    inputs: {
      value: "value",
      highValue: "highValue",
      options: "options",
      manualRefresh: "manualRefresh",
      triggerFocus: "triggerFocus",
      cancelUserChange: "cancelUserChange"
    },
    outputs: {
      valueChange: "valueChange",
      highValueChange: "highValueChange",
      userChangeStart: "userChangeStart",
      userChange: "userChange",
      userChangeEnd: "userChangeEnd"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), ɵɵNgOnChangesFeature],
    decls: 29,
    vars: 13,
    consts: [["leftOuterSelectionBar", ""], ["rightOuterSelectionBar", ""], ["fullBar", ""], ["selectionBar", ""], ["minHandle", ""], ["maxHandle", ""], ["floorLabel", ""], ["ceilLabel", ""], ["minHandleLabel", ""], ["maxHandleLabel", ""], ["combinedLabel", ""], ["ticksElement", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerText", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerText"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]],
    template: function SliderComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "span", 12, 0);
        ɵɵelement(2, "span", 13);
        ɵɵelementEnd();
        ɵɵelementStart(3, "span", 14, 1);
        ɵɵelement(5, "span", 13);
        ɵɵelementEnd();
        ɵɵelementStart(6, "span", 15, 2);
        ɵɵelement(8, "span", 13);
        ɵɵelementEnd();
        ɵɵelementStart(9, "span", 16, 3);
        ɵɵelement(11, "span", 17);
        ɵɵelementEnd();
        ɵɵelement(12, "span", 18, 4)(14, "span", 19, 5)(16, "span", 20, 6)(18, "span", 21, 7)(20, "span", 22, 8)(22, "span", 23, 9)(24, "span", 24, 10);
        ɵɵelementStart(26, "span", 25, 11);
        ɵɵtemplate(28, SliderComponent_span_28_Template, 5, 10, "span", 26);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵadvance(6);
        ɵɵclassProp("ngx-slider-transparent", ctx.fullBarTransparentClass);
        ɵɵadvance(3);
        ɵɵclassProp("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        ɵɵadvance(2);
        ɵɵproperty("ngStyle", ctx.barStyle);
        ɵɵadvance();
        ɵɵproperty("ngStyle", ctx.minPointerStyle);
        ɵɵadvance(2);
        ɵɵstyleProp("display", ctx.range ? "inherit" : "none");
        ɵɵproperty("ngStyle", ctx.maxPointerStyle);
        ɵɵadvance(12);
        ɵɵclassProp("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        ɵɵproperty("hidden", !ctx.showTicks);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.ticks);
      }
    },
    dependencies: [NgClass, NgForOf, NgIf, NgStyle, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
    styles: ['.ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:"";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}  .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}  .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}']
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SliderComponent, [{
    type: Component,
    args: [{
      selector: "ngx-slider",
      providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR],
      changeDetection: ChangeDetectionStrategy.Default,
      standalone: false,
      template: `<!-- // 0 Left selection bar outside two handles -->
<span ngxSliderElement #leftOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 1 Right selection bar outside two handles -->
<span ngxSliderElement #rightOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 2 The whole slider bar -->
<span ngxSliderElement #fullBar [class.ngx-slider-transparent]="fullBarTransparentClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 3 Selection bar between two handles -->
<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]="selectionBarDraggableClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar">
  <span class="ngx-slider-span ngx-slider-bar ngx-slider-selection" [ngStyle]="barStyle"></span>
</span>
<!-- // 4 Low slider handle -->
<span ngxSliderHandle #minHandle class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min" [ngStyle]=minPointerStyle></span>
<!-- // 5 High slider handle -->
<span ngxSliderHandle #maxHandle [style.display]="range ? 'inherit' : 'none'" class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max" [ngStyle]=maxPointerStyle></span>
<!-- // 6 Floor label -->
<span ngxSliderLabel #floorLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor"></span>
<!-- // 7 Ceiling label -->
<span ngxSliderLabel #ceilLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil"></span>
<!-- // 8 Label above the low slider handle -->
<span ngxSliderLabel #minHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"></span>
<!-- // 9 Label above the high slider handle -->
<span ngxSliderLabel #maxHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"></span>
<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->
<span ngxSliderLabel #combinedLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-combined"></span>
<!-- // 11 The ticks -->
<span ngxSliderElement #ticksElement [hidden]="!showTicks" [class.ngx-slider-ticks-values-under]="ticksUnderValuesClass" class="ngx-slider-ticks">
  <span *ngFor="let t of ticks" class="ngx-slider-tick" [ngClass]="{'ngx-slider-selected': t.selected}" [ngStyle]="t.style">
    <ngx-slider-tooltip-wrapper [template]="tooltipTemplate" [tooltip]="t.tooltip" [placement]="t.tooltipPlacement"></ngx-slider-tooltip-wrapper>
    <ngx-slider-tooltip-wrapper *ngIf="t.value !== null && t.value !== undefined" class="ngx-slider-span ngx-slider-tick-value"
        [template]="tooltipTemplate" [tooltip]="t.valueTooltip" [placement]="t.valueTooltipPlacement" [content]="t.value"></ngx-slider-tooltip-wrapper>
    <span *ngIf="t.legend !== null && t.legend !== undefined && allowUnsafeHtmlInSlider === false" class="ngx-slider-span ngx-slider-tick-legend" [innerText]="t.legend"></span>
    <span *ngIf="t.legend !== null && t.legend !== undefined && (allowUnsafeHtmlInSlider === null || allowUnsafeHtmlInSlider === undefined || allowUnsafeHtmlInSlider)" class="ngx-slider-span ngx-slider-tick-legend" [innerHTML]="t.legend"></span>
  </span>
</span>`,
      styles: ['::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:transparent}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;-webkit-border-radius:2px;-moz-border-radius:2px;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;-webkit-border-radius:16px;-moz-border-radius:16px;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:"";width:8px;height:8px;position:absolute;top:12px;left:12px;-webkit-border-radius:4px;-moz-border-radius:4px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;transform:translate(-50%)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;transform:translate(-50%);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;transform:translateY(-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;transform:translateY(-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-pointer:after{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:all linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity linear .3s}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color linear .3s}\n']
    }]
  }], () => [{
    type: Renderer2
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgZone
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [AllowUnsafeHtmlInSlider]
    }, {
      type: Optional
    }]
  }], {
    sliderElementNgxSliderClass: [{
      type: HostBinding,
      args: ["class.ngx-slider"]
    }],
    value: [{
      type: Input
    }],
    valueChange: [{
      type: Output
    }],
    highValue: [{
      type: Input
    }],
    highValueChange: [{
      type: Output
    }],
    options: [{
      type: Input
    }],
    userChangeStart: [{
      type: Output
    }],
    userChange: [{
      type: Output
    }],
    userChangeEnd: [{
      type: Output
    }],
    manualRefresh: [{
      type: Input
    }],
    triggerFocus: [{
      type: Input
    }],
    cancelUserChange: [{
      type: Input
    }],
    leftOuterSelectionBarElement: [{
      type: ViewChild,
      args: ["leftOuterSelectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    rightOuterSelectionBarElement: [{
      type: ViewChild,
      args: ["rightOuterSelectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    fullBarElement: [{
      type: ViewChild,
      args: ["fullBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    selectionBarElement: [{
      type: ViewChild,
      args: ["selectionBar", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    minHandleElement: [{
      type: ViewChild,
      args: ["minHandle", {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    maxHandleElement: [{
      type: ViewChild,
      args: ["maxHandle", {
        read: SliderHandleDirective,
        static: false
      }]
    }],
    floorLabelElement: [{
      type: ViewChild,
      args: ["floorLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ceilLabelElement: [{
      type: ViewChild,
      args: ["ceilLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    minHandleLabelElement: [{
      type: ViewChild,
      args: ["minHandleLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    maxHandleLabelElement: [{
      type: ViewChild,
      args: ["maxHandleLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    combinedLabelElement: [{
      type: ViewChild,
      args: ["combinedLabel", {
        read: SliderLabelDirective,
        static: false
      }]
    }],
    ticksElement: [{
      type: ViewChild,
      args: ["ticksElement", {
        read: SliderElementDirective,
        static: false
      }]
    }],
    tooltipTemplate: [{
      type: ContentChild,
      args: ["tooltipTemplate", {
        static: false
      }]
    }],
    sliderElementVerticalClass: [{
      type: HostBinding,
      args: ["class.vertical"]
    }],
    sliderElementAnimateClass: [{
      type: HostBinding,
      args: ["class.animate"]
    }],
    sliderElementWithLegendClass: [{
      type: HostBinding,
      args: ["class.with-legend"]
    }],
    sliderElementDisabledAttr: [{
      type: HostBinding,
      args: ["attr.disabled"]
    }],
    sliderElementAriaLabel: [{
      type: HostBinding,
      args: ["attr.aria-label"]
    }],
    onResize: [{
      type: HostListener,
      args: ["window:resize", ["$event"]]
    }]
  });
})();
var NgxSliderModule = class _NgxSliderModule {
  static ɵfac = function NgxSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NgxSliderModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _NgxSliderModule,
    declarations: [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
    imports: [CommonModule],
    exports: [SliderComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxSliderModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent],
      exports: [SliderComponent]
    }]
  }], null, null);
})();
export {
  AllowUnsafeHtmlInSlider,
  ChangeContext,
  LabelType,
  NgxSliderModule,
  Options,
  PointerType,
  SliderComponent
};
//# sourceMappingURL=@angular-slider_ngx-slider.js.map
