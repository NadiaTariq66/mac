import {
  CommonModule,
  NgClass,
  NgStyle
} from "./chunk-VQ5HQCHJ.js";
import "./chunk-E3S3KIMU.js";
import {
  Component,
  Injectable,
  IterableDiffers,
  KeyValueDiffers,
  NgModule,
  ViewChild,
  __async,
  __spreadValues,
  input,
  output,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵviewQuery
} from "./chunk-2PRAIGL2.js";

// node_modules/angular-plotly.js/fesm2022/angular-plotly.js.mjs
var _c0 = ["plot"];
var _c1 = ["*"];
var PlotlyService = class _PlotlyService {
  static {
    this.instances = [];
  }
  static {
    this.plotly = void 0;
  }
  static {
    this.moduleName = void 0;
  }
  static setModuleName(moduleName) {
    _PlotlyService.moduleName = moduleName;
  }
  static getModuleName() {
    return _PlotlyService.moduleName;
  }
  static setPlotly(plotly) {
    if (typeof plotly === "object" && typeof plotly.react !== "function") {
      throw new Error("Invalid plotly.js version. Please, use any version above 1.40.0");
    }
    _PlotlyService.moduleName = "PlotlyJS";
    _PlotlyService.plotly = plotly;
  }
  static insert(instance) {
    const index = _PlotlyService.instances.indexOf(instance);
    if (index === -1) {
      _PlotlyService.instances.push(instance);
    }
    return instance;
  }
  static remove(div) {
    const index = _PlotlyService.instances.indexOf(div);
    if (index >= 0) {
      _PlotlyService.instances.splice(index, 1);
      _PlotlyService.plotly.purge(div);
    }
  }
  getInstanceByDivId(id) {
    for (const instance of _PlotlyService.instances) {
      if (instance && instance.id === id) {
        return instance;
      }
    }
    return void 0;
  }
  getPlotly() {
    return __async(this, null, function* () {
      yield this.waitFor(() => this._getPlotly() !== "waiting");
      return this._getPlotly();
    });
  }
  _getPlotly() {
    if (typeof _PlotlyService.plotly === "undefined") {
      const msg = _PlotlyService.moduleName === "ViaCDN" ? `Error loading Peer dependency plotly.js from CDN url` : `Peer dependency plotly.js isn't installed`;
      throw new Error(msg);
    }
    return _PlotlyService.plotly;
  }
  waitFor(fn) {
    return new Promise((resolve) => {
      const localFn = () => {
        fn() ? resolve() : setTimeout(localFn, 10);
      };
      localFn();
    });
  }
  newPlot(div, data, layout, config, frames) {
    return __async(this, null, function* () {
      yield this.waitFor(() => this._getPlotly() !== "waiting");
      if (frames) {
        const obj = {
          data,
          layout,
          config,
          frames
        };
        return this._getPlotly().newPlot(div, obj).then(() => _PlotlyService.insert(div));
      }
      return this._getPlotly().newPlot(div, data, layout, config).then(() => _PlotlyService.insert(div));
    });
  }
  plot(div, data, layout, config, frames) {
    if (frames) {
      const obj = {
        data,
        layout,
        config,
        frames
      };
      return this._getPlotly().newPlot(div, obj);
    }
    return this._getPlotly().newPlot(div, data, layout, config);
  }
  update(div, data, layout, config, frames) {
    if (frames) {
      const obj = {
        data,
        layout,
        config,
        frames
      };
      return this._getPlotly().react(div, obj);
    }
    return this._getPlotly().react(div, data, layout, config);
  }
  resize(div) {
    return this._getPlotly().Plots.resize(div);
  }
  static {
    this.ɵfac = function PlotlyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyService)();
    };
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _PlotlyService,
      factory: _PlotlyService.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PlotlyComponent = class _PlotlyComponent {
  constructor(plotly, iterableDiffers, keyValueDiffers) {
    this.plotly = plotly;
    this.iterableDiffers = iterableDiffers;
    this.keyValueDiffers = keyValueDiffers;
    this.defaultClassName = "js-plotly-plot";
    this.data = input();
    this.layout = input();
    this.config = input();
    this.frames = input();
    this.style = input();
    this.divId = input();
    this.revision = input(0);
    this.className = input();
    this.debug = input(false);
    this.useResizeHandler = input(false);
    this.updateOnLayoutChange = input(true);
    this.updateOnDataChange = input(true);
    this.updateOnlyWithRevision = input(false);
    this.initialized = output();
    this.update = output();
    this.purge = output();
    this.error = output();
    this.afterExport = output();
    this.afterPlot = output();
    this.animated = output();
    this.animatingFrame = output();
    this.animationInterrupted = output();
    this.autoSize = output();
    this.beforeExport = output();
    this.beforeHover = output();
    this.buttonClicked = output();
    this.click = output();
    this.plotlyClick = output();
    this.clickAnnotation = output();
    this.deselect = output();
    this.doubleClick = output();
    this.framework = output();
    this.hover = output();
    this.legendClick = output();
    this.legendDoubleClick = output();
    this.react = output();
    this.relayout = output();
    this.relayouting = output();
    this.restyle = output();
    this.redraw = output();
    this.selected = output();
    this.selecting = output();
    this.sliderChange = output();
    this.sliderEnd = output();
    this.sliderStart = output();
    this.sunburstclick = output();
    this.transitioning = output();
    this.transitionInterrupted = output();
    this.unhover = output();
    this.treemapclick = output();
    this.webglcontextlost = output();
    this.eventNames = ["afterExport", "afterPlot", "animated", "animatingFrame", "animationInterrupted", "autoSize", "beforeExport", "beforeHover", "buttonClicked", "clickAnnotation", "deselect", "doubleClick", "framework", "hover", "legendClick", "legendDoubleClick", "react", "relayout", "relayouting", "restyle", "redraw", "selected", "selecting", "sliderChange", "sliderEnd", "sliderStart", "sunburstclick", "transitioning", "transitionInterrupted", "unhover", "treemapclick", "webglcontextlost"];
  }
  ngOnInit() {
    this.createPlot().then(() => {
      const figure = this.createFigure();
      this.initialized.emit(figure);
    });
  }
  ngOnDestroy() {
    if (typeof this.resizeHandler === "function") {
      this.getWindow().removeEventListener("resize", this.resizeHandler);
      this.resizeHandler = void 0;
    }
    if (this.plotlyInstance) {
      const figure = this.createFigure();
      this.purge.emit(figure);
      PlotlyService.remove(this.plotlyInstance);
    }
  }
  ngOnChanges(changes) {
    let shouldUpdate = false;
    const revision = changes["revision"];
    if (revision && !revision.isFirstChange()) {
      shouldUpdate = true;
    }
    const debug = changes["debug"];
    if (debug && !debug.isFirstChange()) {
      shouldUpdate = true;
    }
    if (shouldUpdate) {
      this.updatePlot();
    }
    this.updateWindowResizeHandler();
  }
  ngDoCheck() {
    if (this.updateOnlyWithRevision()) {
      return false;
    }
    let shouldUpdate = false;
    if (this.updateOnLayoutChange()) {
      if (this.layoutDiffer) {
        const layoutHasDiff = this.layoutDiffer.diff(this.layout());
        if (layoutHasDiff) {
          shouldUpdate = true;
        }
      } else if (this.layout()) {
        this.layoutDiffer = this.keyValueDiffers.find(this.layout()).create();
      } else {
        this.layoutDiffer = void 0;
      }
    }
    if (this.updateOnDataChange()) {
      if (this.dataDiffer) {
        const dataHasDiff = this.dataDiffer.diff(this.data());
        if (dataHasDiff) {
          shouldUpdate = true;
        }
      } else if (Array.isArray(this.data())) {
        this.dataDiffer = this.iterableDiffers.find(this.data()).create(this.dataDifferTrackBy);
      } else {
        this.dataDiffer = void 0;
      }
    }
    if (shouldUpdate && this.plotlyInstance) {
      this.updatePlot();
    }
  }
  getData() {
    return this.data() ?? [];
  }
  getWindow() {
    return window;
  }
  getClassName() {
    let classes = [this.defaultClassName];
    const className = this.className();
    if (Array.isArray(className)) {
      classes = classes.concat(className);
    } else if (className) {
      classes.push(className);
    }
    return classes.join(" ");
  }
  createPlot() {
    return this.plotly.newPlot(this.plotEl.nativeElement, this.getData(), this.layout(), this.config(), this.frames()).then((plotlyInstance) => {
      this.plotlyInstance = plotlyInstance;
      this.getWindow().gd = this.debug ? plotlyInstance : void 0;
      this.eventNames.forEach((name) => {
        const eventName = `plotly_${name.toLowerCase()}`;
        const event = this[name];
        plotlyInstance.on(eventName, (data) => event.emit(data));
      });
      plotlyInstance.on("plotly_click", (data) => {
        this.plotlyClick.emit(data);
      });
      this.updateWindowResizeHandler();
    }, (err) => {
      console.error("Error while plotting:", err);
      this.error.emit(err);
    });
  }
  createFigure() {
    const p = this.plotlyInstance;
    const figure = {
      data: p.data,
      layout: p.layout,
      frames: p._transitionData ? p._transitionData._frames : null
    };
    return figure;
  }
  updatePlot() {
    if (!this.plotlyInstance) {
      const error = new Error(`Plotly component wasn't initialized`);
      this.error.emit(error);
      throw error;
    }
    const layout = __spreadValues({}, this.layout());
    return this.plotly.update(this.plotlyInstance, this.getData(), layout, this.config(), this.frames()).then(() => {
      const figure = this.createFigure();
      this.update.emit(figure);
    }, (err) => {
      console.error("Error while updating plot:", err);
      this.error.emit(err);
    });
  }
  updateWindowResizeHandler() {
    if (this.useResizeHandler()) {
      if (this.resizeHandler === void 0) {
        this.resizeHandler = () => this.plotly.resize(this.plotlyInstance);
        this.getWindow().addEventListener("resize", this.resizeHandler);
      }
    } else {
      if (typeof this.resizeHandler === "function") {
        this.getWindow().removeEventListener("resize", this.resizeHandler);
        this.resizeHandler = void 0;
      }
    }
  }
  dataDifferTrackBy(_, item) {
    const obj = Object.assign({}, item, {
      uid: ""
    });
    return JSON.stringify(obj);
  }
  static {
    this.ɵfac = function PlotlyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyComponent)(ɵɵdirectiveInject(PlotlyService), ɵɵdirectiveInject(IterableDiffers), ɵɵdirectiveInject(KeyValueDiffers));
    };
  }
  static {
    this.ɵcmp = ɵɵdefineComponent({
      type: _PlotlyComponent,
      selectors: [["plotly-plot"]],
      viewQuery: function PlotlyComponent_Query(rf, ctx) {
        if (rf & 1) {
          ɵɵviewQuery(_c0, 7);
        }
        if (rf & 2) {
          let _t;
          ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.plotEl = _t.first);
        }
      },
      inputs: {
        data: [1, "data"],
        layout: [1, "layout"],
        config: [1, "config"],
        frames: [1, "frames"],
        style: [1, "style"],
        divId: [1, "divId"],
        revision: [1, "revision"],
        className: [1, "className"],
        debug: [1, "debug"],
        useResizeHandler: [1, "useResizeHandler"],
        updateOnLayoutChange: [1, "updateOnLayoutChange"],
        updateOnDataChange: [1, "updateOnDataChange"],
        updateOnlyWithRevision: [1, "updateOnlyWithRevision"]
      },
      outputs: {
        initialized: "initialized",
        update: "update",
        purge: "purge",
        error: "error",
        afterExport: "afterExport",
        afterPlot: "afterPlot",
        animated: "animated",
        animatingFrame: "animatingFrame",
        animationInterrupted: "animationInterrupted",
        autoSize: "autoSize",
        beforeExport: "beforeExport",
        beforeHover: "beforeHover",
        buttonClicked: "buttonClicked",
        click: "click",
        plotlyClick: "plotlyClick",
        clickAnnotation: "clickAnnotation",
        deselect: "deselect",
        doubleClick: "doubleClick",
        framework: "framework",
        hover: "hover",
        legendClick: "legendClick",
        legendDoubleClick: "legendDoubleClick",
        react: "react",
        relayout: "relayout",
        relayouting: "relayouting",
        restyle: "restyle",
        redraw: "redraw",
        selected: "selected",
        selecting: "selecting",
        sliderChange: "sliderChange",
        sliderEnd: "sliderEnd",
        sliderStart: "sliderStart",
        sunburstclick: "sunburstclick",
        transitioning: "transitioning",
        transitionInterrupted: "transitionInterrupted",
        unhover: "unhover",
        treemapclick: "treemapclick",
        webglcontextlost: "webglcontextlost"
      },
      features: [ɵɵProvidersFeature([PlotlyService]), ɵɵNgOnChangesFeature],
      ngContentSelectors: _c1,
      decls: 3,
      vars: 3,
      consts: [["plot", ""], [3, "ngClass", "ngStyle"]],
      template: function PlotlyComponent_Template(rf, ctx) {
        if (rf & 1) {
          ɵɵprojectionDef();
          ɵɵelementStart(0, "div", 1, 0);
          ɵɵprojection(2);
          ɵɵelementEnd();
        }
        if (rf & 2) {
          ɵɵproperty("ngClass", ctx.getClassName())("ngStyle", ctx.style());
          ɵɵattribute("id", ctx.divId());
        }
      },
      dependencies: [CommonModule, NgClass, NgStyle],
      encapsulation: 2
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyComponent, [{
    type: Component,
    args: [{
      selector: "plotly-plot",
      standalone: true,
      imports: [CommonModule],
      template: `<div #plot [attr.id]="divId()" [ngClass]="getClassName()" [ngStyle]="style()">
      <ng-content></ng-content>
    </div>`,
      providers: [PlotlyService]
    }]
  }], () => [{
    type: PlotlyService
  }, {
    type: IterableDiffers
  }, {
    type: KeyValueDiffers
  }], {
    plotEl: [{
      type: ViewChild,
      args: ["plot", {
        static: true
      }]
    }]
  });
})();
var PlotlyModule = class _PlotlyModule {
  constructor() {
    if (!this.isValid()) {
      const msg = "Invalid PlotlyJS object. Please check https://github.com/plotly/angular-plotly.js#quick-start to see how to add PlotlyJS to your project.";
      throw new Error(msg);
    }
  }
  isValid() {
    return PlotlyService.plotly !== void 0 && (typeof PlotlyService.plotly.plot === "function" || typeof PlotlyService.plotly.newPlot === "function");
  }
  static forRoot(plotlyjs) {
    PlotlyService.setPlotly(plotlyjs);
    return {
      ngModule: _PlotlyModule,
      providers: [PlotlyService]
    };
  }
  static {
    this.ɵfac = function PlotlyModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlotlyModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _PlotlyModule,
      imports: [PlotlyComponent],
      exports: [PlotlyComponent]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      providers: [PlotlyService],
      imports: [PlotlyComponent]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlotlyModule, [{
    type: NgModule,
    args: [{
      imports: [PlotlyComponent],
      providers: [PlotlyService],
      exports: [PlotlyComponent]
    }]
  }], () => [], null);
})();
export {
  PlotlyComponent,
  PlotlyModule,
  PlotlyService
};
//# sourceMappingURL=angular-plotly__js.js.map
