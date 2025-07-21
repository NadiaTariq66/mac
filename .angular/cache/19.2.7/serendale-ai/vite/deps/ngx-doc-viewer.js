import {
  DomSanitizer
} from "./chunk-TTFVCF4Z.js";
import "./chunk-QCIHQSZS.js";
import {
  CommonModule,
  NgIf
} from "./chunk-PN7RAFQG.js";
import "./chunk-3C6O6HVR.js";
import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  NgZone,
  Output,
  ViewChildren,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-CCUUX3WD.js";
import {
  __async
} from "./chunk-3OV72XIM.js";

// node_modules/docviewhelper/index.js
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var check = function(it) {
  return it && it.Math == Math && it;
};
var global$G = (
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == "object" && globalThis) || check(typeof window == "object" && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == "object" && self) || check(typeof commonjsGlobal == "object" && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  /* @__PURE__ */ function() {
    return this;
  }() || Function("return this")()
);
var objectGetOwnPropertyDescriptor = {};
var fails$e = function(exec2) {
  try {
    return !!exec2();
  } catch (error) {
    return true;
  }
};
var fails$d = fails$e;
var descriptors = !fails$d(function() {
  return Object.defineProperty({}, 1, {
    get: function() {
      return 7;
    }
  })[1] != 7;
});
var fails$c = fails$e;
var functionBindNative = !fails$c(function() {
  var test2 = function() {
  }.bind();
  return typeof test2 != "function" || test2.hasOwnProperty("prototype");
});
var NATIVE_BIND$3 = functionBindNative;
var call$g = Function.prototype.call;
var functionCall = NATIVE_BIND$3 ? call$g.bind(call$g) : function() {
  return call$g.apply(call$g, arguments);
};
var objectPropertyIsEnumerable = {};
var $propertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor$4 = Object.getOwnPropertyDescriptor;
var NASHORN_BUG = getOwnPropertyDescriptor$4 && !$propertyIsEnumerable.call({
  1: 2
}, 1);
objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor$4(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;
var createPropertyDescriptor$2 = function(bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value
  };
};
var NATIVE_BIND$2 = functionBindNative;
var FunctionPrototype$2 = Function.prototype;
var bind$5 = FunctionPrototype$2.bind;
var call$f = FunctionPrototype$2.call;
var uncurryThis$k = NATIVE_BIND$2 && bind$5.bind(call$f, call$f);
var functionUncurryThis = NATIVE_BIND$2 ? function(fn) {
  return fn && uncurryThis$k(fn);
} : function(fn) {
  return fn && function() {
    return call$f.apply(fn, arguments);
  };
};
var uncurryThis$j = functionUncurryThis;
var toString$8 = uncurryThis$j({}.toString);
var stringSlice$5 = uncurryThis$j("".slice);
var classofRaw$1 = function(it) {
  return stringSlice$5(toString$8(it), 8, -1);
};
var global$F = global$G;
var uncurryThis$i = functionUncurryThis;
var fails$b = fails$e;
var classof$7 = classofRaw$1;
var Object$4 = global$F.Object;
var split = uncurryThis$i("".split);
var indexedObject = fails$b(function() {
  return !Object$4("z").propertyIsEnumerable(0);
}) ? function(it) {
  return classof$7(it) == "String" ? split(it, "") : Object$4(it);
} : Object$4;
var global$E = global$G;
var TypeError$g = global$E.TypeError;
var requireObjectCoercible$7 = function(it) {
  if (it == void 0) throw TypeError$g("Can't call method on " + it);
  return it;
};
var IndexedObject = indexedObject;
var requireObjectCoercible$6 = requireObjectCoercible$7;
var toIndexedObject$4 = function(it) {
  return IndexedObject(requireObjectCoercible$6(it));
};
var isCallable$i = function(argument) {
  return typeof argument == "function";
};
var isCallable$h = isCallable$i;
var isObject$8 = function(it) {
  return typeof it == "object" ? it !== null : isCallable$h(it);
};
var global$D = global$G;
var isCallable$g = isCallable$i;
var aFunction = function(argument) {
  return isCallable$g(argument) ? argument : void 0;
};
var getBuiltIn$8 = function(namespace, method) {
  return arguments.length < 2 ? aFunction(global$D[namespace]) : global$D[namespace] && global$D[namespace][method];
};
var uncurryThis$h = functionUncurryThis;
var objectIsPrototypeOf = uncurryThis$h({}.isPrototypeOf);
var getBuiltIn$7 = getBuiltIn$8;
var engineUserAgent = getBuiltIn$7("navigator", "userAgent") || "";
var global$C = global$G;
var userAgent$3 = engineUserAgent;
var process$3 = global$C.process;
var Deno$1 = global$C.Deno;
var versions = process$3 && process$3.versions || Deno$1 && Deno$1.version;
var v8 = versions && versions.v8;
var match;
var version;
if (v8) {
  match = v8.split(".");
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}
if (!version && userAgent$3) {
  match = userAgent$3.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent$3.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}
var engineV8Version = version;
var V8_VERSION$1 = engineV8Version;
var fails$a = fails$e;
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$a(function() {
  var symbol = Symbol();
  return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
  !Symbol.sham && V8_VERSION$1 && V8_VERSION$1 < 41;
});
var NATIVE_SYMBOL$1 = nativeSymbol;
var useSymbolAsUid = NATIVE_SYMBOL$1 && !Symbol.sham && typeof Symbol.iterator == "symbol";
var global$B = global$G;
var getBuiltIn$6 = getBuiltIn$8;
var isCallable$f = isCallable$i;
var isPrototypeOf$2 = objectIsPrototypeOf;
var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
var Object$3 = global$B.Object;
var isSymbol$2 = USE_SYMBOL_AS_UID$1 ? function(it) {
  return typeof it == "symbol";
} : function(it) {
  var $Symbol = getBuiltIn$6("Symbol");
  return isCallable$f($Symbol) && isPrototypeOf$2($Symbol.prototype, Object$3(it));
};
var global$A = global$G;
var String$5 = global$A.String;
var tryToString$4 = function(argument) {
  try {
    return String$5(argument);
  } catch (error) {
    return "Object";
  }
};
var global$z = global$G;
var isCallable$e = isCallable$i;
var tryToString$3 = tryToString$4;
var TypeError$f = global$z.TypeError;
var aCallable$7 = function(argument) {
  if (isCallable$e(argument)) return argument;
  throw TypeError$f(tryToString$3(argument) + " is not a function");
};
var aCallable$6 = aCallable$7;
var getMethod$5 = function(V, P) {
  var func = V[P];
  return func == null ? void 0 : aCallable$6(func);
};
var global$y = global$G;
var call$e = functionCall;
var isCallable$d = isCallable$i;
var isObject$7 = isObject$8;
var TypeError$e = global$y.TypeError;
var ordinaryToPrimitive$1 = function(input, pref) {
  var fn, val;
  if (pref === "string" && isCallable$d(fn = input.toString) && !isObject$7(val = call$e(fn, input))) return val;
  if (isCallable$d(fn = input.valueOf) && !isObject$7(val = call$e(fn, input))) return val;
  if (pref !== "string" && isCallable$d(fn = input.toString) && !isObject$7(val = call$e(fn, input))) return val;
  throw TypeError$e("Can't convert object to primitive value");
};
var shared$4 = {
  exports: {}
};
var global$x = global$G;
var defineProperty$1 = Object.defineProperty;
var setGlobal$3 = function(key, value) {
  try {
    defineProperty$1(global$x, key, {
      value,
      configurable: true,
      writable: true
    });
  } catch (error) {
    global$x[key] = value;
  }
  return value;
};
var global$w = global$G;
var setGlobal$2 = setGlobal$3;
var SHARED = "__core-js_shared__";
var store$3 = global$w[SHARED] || setGlobal$2(SHARED, {});
var sharedStore = store$3;
var store$2 = sharedStore;
(shared$4.exports = function(key, value) {
  return store$2[key] || (store$2[key] = value !== void 0 ? value : {});
})("versions", []).push({
  version: "3.22.2",
  mode: "global",
  copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",
  source: "https://github.com/zloirock/core-js"
});
var global$v = global$G;
var requireObjectCoercible$5 = requireObjectCoercible$7;
var Object$2 = global$v.Object;
var toObject$2 = function(argument) {
  return Object$2(requireObjectCoercible$5(argument));
};
var uncurryThis$g = functionUncurryThis;
var toObject$1 = toObject$2;
var hasOwnProperty = uncurryThis$g({}.hasOwnProperty);
var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject$1(it), key);
};
var uncurryThis$f = functionUncurryThis;
var id = 0;
var postfix = Math.random();
var toString$7 = uncurryThis$f(1 .toString);
var uid$2 = function(key) {
  return "Symbol(" + (key === void 0 ? "" : key) + ")_" + toString$7(++id + postfix, 36);
};
var global$u = global$G;
var shared$3 = shared$4.exports;
var hasOwn$8 = hasOwnProperty_1;
var uid$1 = uid$2;
var NATIVE_SYMBOL = nativeSymbol;
var USE_SYMBOL_AS_UID = useSymbolAsUid;
var WellKnownSymbolsStore = shared$3("wks");
var Symbol$1 = global$u.Symbol;
var symbolFor = Symbol$1 && Symbol$1["for"];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid$1;
var wellKnownSymbol$f = function(name) {
  if (!hasOwn$8(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == "string")) {
    var description = "Symbol." + name;
    if (NATIVE_SYMBOL && hasOwn$8(Symbol$1, name)) {
      WellKnownSymbolsStore[name] = Symbol$1[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  }
  return WellKnownSymbolsStore[name];
};
var global$t = global$G;
var call$d = functionCall;
var isObject$6 = isObject$8;
var isSymbol$1 = isSymbol$2;
var getMethod$4 = getMethod$5;
var ordinaryToPrimitive = ordinaryToPrimitive$1;
var wellKnownSymbol$e = wellKnownSymbol$f;
var TypeError$d = global$t.TypeError;
var TO_PRIMITIVE = wellKnownSymbol$e("toPrimitive");
var toPrimitive$1 = function(input, pref) {
  if (!isObject$6(input) || isSymbol$1(input)) return input;
  var exoticToPrim = getMethod$4(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === void 0) pref = "default";
    result = call$d(exoticToPrim, input, pref);
    if (!isObject$6(result) || isSymbol$1(result)) return result;
    throw TypeError$d("Can't convert object to primitive value");
  }
  if (pref === void 0) pref = "number";
  return ordinaryToPrimitive(input, pref);
};
var toPrimitive = toPrimitive$1;
var isSymbol = isSymbol$2;
var toPropertyKey$2 = function(argument) {
  var key = toPrimitive(argument, "string");
  return isSymbol(key) ? key : key + "";
};
var global$s = global$G;
var isObject$5 = isObject$8;
var document$3 = global$s.document;
var EXISTS$1 = isObject$5(document$3) && isObject$5(document$3.createElement);
var documentCreateElement$1 = function(it) {
  return EXISTS$1 ? document$3.createElement(it) : {};
};
var DESCRIPTORS$7 = descriptors;
var fails$9 = fails$e;
var createElement$1 = documentCreateElement$1;
var ie8DomDefine = !DESCRIPTORS$7 && !fails$9(function() {
  return Object.defineProperty(createElement$1("div"), "a", {
    get: function() {
      return 7;
    }
  }).a != 7;
});
var DESCRIPTORS$6 = descriptors;
var call$c = functionCall;
var propertyIsEnumerableModule = objectPropertyIsEnumerable;
var createPropertyDescriptor$1 = createPropertyDescriptor$2;
var toIndexedObject$3 = toIndexedObject$4;
var toPropertyKey$1 = toPropertyKey$2;
var hasOwn$7 = hasOwnProperty_1;
var IE8_DOM_DEFINE$1 = ie8DomDefine;
var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
objectGetOwnPropertyDescriptor.f = DESCRIPTORS$6 ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject$3(O);
  P = toPropertyKey$1(P);
  if (IE8_DOM_DEFINE$1) try {
    return $getOwnPropertyDescriptor$1(O, P);
  } catch (error) {
  }
  if (hasOwn$7(O, P)) return createPropertyDescriptor$1(!call$c(propertyIsEnumerableModule.f, O, P), O[P]);
};
var objectDefineProperty = {};
var DESCRIPTORS$5 = descriptors;
var fails$8 = fails$e;
var v8PrototypeDefineBug = DESCRIPTORS$5 && fails$8(function() {
  return Object.defineProperty(function() {
  }, "prototype", {
    value: 42,
    writable: false
  }).prototype != 42;
});
var global$r = global$G;
var isObject$4 = isObject$8;
var String$4 = global$r.String;
var TypeError$c = global$r.TypeError;
var anObject$e = function(argument) {
  if (isObject$4(argument)) return argument;
  throw TypeError$c(String$4(argument) + " is not an object");
};
var global$q = global$G;
var DESCRIPTORS$4 = descriptors;
var IE8_DOM_DEFINE = ie8DomDefine;
var V8_PROTOTYPE_DEFINE_BUG$1 = v8PrototypeDefineBug;
var anObject$d = anObject$e;
var toPropertyKey = toPropertyKey$2;
var TypeError$b = global$q.TypeError;
var $defineProperty = Object.defineProperty;
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = "enumerable";
var CONFIGURABLE$1 = "configurable";
var WRITABLE = "writable";
objectDefineProperty.f = DESCRIPTORS$4 ? V8_PROTOTYPE_DEFINE_BUG$1 ? function defineProperty(O, P, Attributes) {
  anObject$d(O);
  P = toPropertyKey(P);
  anObject$d(Attributes);
  if (typeof O === "function" && P === "prototype" && "value" in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE$1 in Attributes ? Attributes[CONFIGURABLE$1] : current[CONFIGURABLE$1],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  }
  return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty2(O, P, Attributes) {
  anObject$d(O);
  P = toPropertyKey(P);
  anObject$d(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) {
  }
  if ("get" in Attributes || "set" in Attributes) throw TypeError$b("Accessors not supported");
  if ("value" in Attributes) O[P] = Attributes.value;
  return O;
};
var DESCRIPTORS$3 = descriptors;
var definePropertyModule$4 = objectDefineProperty;
var createPropertyDescriptor = createPropertyDescriptor$2;
var createNonEnumerableProperty$4 = DESCRIPTORS$3 ? function(object, key, value) {
  return definePropertyModule$4.f(object, key, createPropertyDescriptor(1, value));
} : function(object, key, value) {
  object[key] = value;
  return object;
};
var redefine$5 = {
  exports: {}
};
var uncurryThis$e = functionUncurryThis;
var isCallable$c = isCallable$i;
var store$1 = sharedStore;
var functionToString = uncurryThis$e(Function.toString);
if (!isCallable$c(store$1.inspectSource)) {
  store$1.inspectSource = function(it) {
    return functionToString(it);
  };
}
var inspectSource$4 = store$1.inspectSource;
var global$p = global$G;
var isCallable$b = isCallable$i;
var inspectSource$3 = inspectSource$4;
var WeakMap$1 = global$p.WeakMap;
var nativeWeakMap = isCallable$b(WeakMap$1) && /native code/.test(inspectSource$3(WeakMap$1));
var shared$2 = shared$4.exports;
var uid = uid$2;
var keys = shared$2("keys");
var sharedKey$2 = function(key) {
  return keys[key] || (keys[key] = uid(key));
};
var hiddenKeys$4 = {};
var NATIVE_WEAK_MAP = nativeWeakMap;
var global$o = global$G;
var uncurryThis$d = functionUncurryThis;
var isObject$3 = isObject$8;
var createNonEnumerableProperty$3 = createNonEnumerableProperty$4;
var hasOwn$6 = hasOwnProperty_1;
var shared$1 = sharedStore;
var sharedKey$1 = sharedKey$2;
var hiddenKeys$3 = hiddenKeys$4;
var OBJECT_ALREADY_INITIALIZED = "Object already initialized";
var TypeError$a = global$o.TypeError;
var WeakMap = global$o.WeakMap;
var set$1;
var get;
var has;
var enforce = function(it) {
  return has(it) ? get(it) : set$1(it, {});
};
var getterFor = function(TYPE) {
  return function(it) {
    var state;
    if (!isObject$3(it) || (state = get(it)).type !== TYPE) {
      throw TypeError$a("Incompatible receiver, " + TYPE + " required");
    }
    return state;
  };
};
if (NATIVE_WEAK_MAP || shared$1.state) {
  store = shared$1.state || (shared$1.state = new WeakMap());
  wmget = uncurryThis$d(store.get);
  wmhas = uncurryThis$d(store.has);
  wmset = uncurryThis$d(store.set);
  set$1 = function(it, metadata) {
    if (wmhas(store, it)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function(it) {
    return wmget(store, it) || {};
  };
  has = function(it) {
    return wmhas(store, it);
  };
} else {
  STATE = sharedKey$1("state");
  hiddenKeys$3[STATE] = true;
  set$1 = function(it, metadata) {
    if (hasOwn$6(it, STATE)) throw new TypeError$a(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty$3(it, STATE, metadata);
    return metadata;
  };
  get = function(it) {
    return hasOwn$6(it, STATE) ? it[STATE] : {};
  };
  has = function(it) {
    return hasOwn$6(it, STATE);
  };
}
var store;
var wmget;
var wmhas;
var wmset;
var STATE;
var internalState = {
  set: set$1,
  get,
  has,
  enforce,
  getterFor
};
var DESCRIPTORS$2 = descriptors;
var hasOwn$5 = hasOwnProperty_1;
var FunctionPrototype$1 = Function.prototype;
var getDescriptor = DESCRIPTORS$2 && Object.getOwnPropertyDescriptor;
var EXISTS = hasOwn$5(FunctionPrototype$1, "name");
var PROPER = EXISTS && function something() {
}.name === "something";
var CONFIGURABLE = EXISTS && (!DESCRIPTORS$2 || DESCRIPTORS$2 && getDescriptor(FunctionPrototype$1, "name").configurable);
var functionName = {
  EXISTS,
  PROPER,
  CONFIGURABLE
};
var global$n = global$G;
var isCallable$a = isCallable$i;
var hasOwn$4 = hasOwnProperty_1;
var createNonEnumerableProperty$2 = createNonEnumerableProperty$4;
var setGlobal$1 = setGlobal$3;
var inspectSource$2 = inspectSource$4;
var InternalStateModule$1 = internalState;
var CONFIGURABLE_FUNCTION_NAME = functionName.CONFIGURABLE;
var getInternalState$1 = InternalStateModule$1.get;
var enforceInternalState = InternalStateModule$1.enforce;
var TEMPLATE = String(String).split("String");
(redefine$5.exports = function(O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  var name = options && options.name !== void 0 ? options.name : key;
  var state;
  if (isCallable$a(value)) {
    if (String(name).slice(0, 7) === "Symbol(") {
      name = "[" + String(name).replace(/^Symbol\(([^)]*)\)/, "$1") + "]";
    }
    if (!hasOwn$4(value, "name") || CONFIGURABLE_FUNCTION_NAME && value.name !== name) {
      createNonEnumerableProperty$2(value, "name", name);
    }
    state = enforceInternalState(value);
    if (!state.source) {
      state.source = TEMPLATE.join(typeof name == "string" ? name : "");
    }
  }
  if (O === global$n) {
    if (simple) O[key] = value;
    else setGlobal$1(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty$2(O, key, value);
})(Function.prototype, "toString", function toString() {
  return isCallable$a(this) && getInternalState$1(this).source || inspectSource$2(this);
});
var objectGetOwnPropertyNames = {};
var ceil = Math.ceil;
var floor$1 = Math.floor;
var toIntegerOrInfinity$4 = function(argument) {
  var number = +argument;
  return number !== number || number === 0 ? 0 : (number > 0 ? floor$1 : ceil)(number);
};
var toIntegerOrInfinity$3 = toIntegerOrInfinity$4;
var max$1 = Math.max;
var min$4 = Math.min;
var toAbsoluteIndex$1 = function(index, length) {
  var integer = toIntegerOrInfinity$3(index);
  return integer < 0 ? max$1(integer + length, 0) : min$4(integer, length);
};
var toIntegerOrInfinity$2 = toIntegerOrInfinity$4;
var min$3 = Math.min;
var toLength$5 = function(argument) {
  return argument > 0 ? min$3(toIntegerOrInfinity$2(argument), 9007199254740991) : 0;
};
var toLength$4 = toLength$5;
var lengthOfArrayLike$2 = function(obj) {
  return toLength$4(obj.length);
};
var toIndexedObject$2 = toIndexedObject$4;
var toAbsoluteIndex = toAbsoluteIndex$1;
var lengthOfArrayLike$1 = lengthOfArrayLike$2;
var createMethod$1 = function(IS_INCLUDES) {
  return function($this, el, fromIndex) {
    var O = toIndexedObject$2($this);
    var length = lengthOfArrayLike$1(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      if (value != value) return true;
    }
    else for (; length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    }
    return !IS_INCLUDES && -1;
  };
};
var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod$1(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod$1(false)
};
var uncurryThis$c = functionUncurryThis;
var hasOwn$3 = hasOwnProperty_1;
var toIndexedObject$1 = toIndexedObject$4;
var indexOf$1 = arrayIncludes.indexOf;
var hiddenKeys$2 = hiddenKeys$4;
var push$1 = uncurryThis$c([].push);
var objectKeysInternal = function(object, names) {
  var O = toIndexedObject$1(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn$3(hiddenKeys$2, key) && hasOwn$3(O, key) && push$1(result, key);
  while (names.length > i) if (hasOwn$3(O, key = names[i++])) {
    ~indexOf$1(result, key) || push$1(result, key);
  }
  return result;
};
var enumBugKeys$3 = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
var internalObjectKeys$1 = objectKeysInternal;
var enumBugKeys$2 = enumBugKeys$3;
var hiddenKeys$1 = enumBugKeys$2.concat("length", "prototype");
objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys$1(O, hiddenKeys$1);
};
var objectGetOwnPropertySymbols = {};
objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
var getBuiltIn$5 = getBuiltIn$8;
var uncurryThis$b = functionUncurryThis;
var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
var anObject$c = anObject$e;
var concat$1 = uncurryThis$b([].concat);
var ownKeys$1 = getBuiltIn$5("Reflect", "ownKeys") || function ownKeys(it) {
  var keys3 = getOwnPropertyNamesModule.f(anObject$c(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat$1(keys3, getOwnPropertySymbols(it)) : keys3;
};
var hasOwn$2 = hasOwnProperty_1;
var ownKeys2 = ownKeys$1;
var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
var definePropertyModule$3 = objectDefineProperty;
var copyConstructorProperties$1 = function(target, source, exceptions) {
  var keys3 = ownKeys2(source);
  var defineProperty4 = definePropertyModule$3.f;
  var getOwnPropertyDescriptor3 = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys3.length; i++) {
    var key = keys3[i];
    if (!hasOwn$2(target, key) && !(exceptions && hasOwn$2(exceptions, key))) {
      defineProperty4(target, key, getOwnPropertyDescriptor3(source, key));
    }
  }
};
var fails$7 = fails$e;
var isCallable$9 = isCallable$i;
var replacement = /#|\.prototype\./;
var isForced$2 = function(feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true : value == NATIVE ? false : isCallable$9(detection) ? fails$7(detection) : !!detection;
};
var normalize = isForced$2.normalize = function(string) {
  return String(string).replace(replacement, ".").toLowerCase();
};
var data = isForced$2.data = {};
var NATIVE = isForced$2.NATIVE = "N";
var POLYFILL = isForced$2.POLYFILL = "P";
var isForced_1 = isForced$2;
var global$m = global$G;
var getOwnPropertyDescriptor$3 = objectGetOwnPropertyDescriptor.f;
var createNonEnumerableProperty$1 = createNonEnumerableProperty$4;
var redefine$4 = redefine$5.exports;
var setGlobal = setGlobal$3;
var copyConstructorProperties = copyConstructorProperties$1;
var isForced$1 = isForced_1;
var _export = function(options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global$m;
  } else if (STATIC) {
    target = global$m[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global$m[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$3(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced$1(GLOBAL ? key : TARGET + (STATIC ? "." : "#") + key, options.forced);
    if (!FORCED && targetProperty !== void 0) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    if (options.sham || targetProperty && targetProperty.sham) {
      createNonEnumerableProperty$1(sourceProperty, "sham", true);
    }
    redefine$4(target, key, sourceProperty, options);
  }
};
var classof$6 = classofRaw$1;
var global$l = global$G;
var engineIsNode = classof$6(global$l.process) == "process";
var redefine$3 = redefine$5.exports;
var redefineAll$1 = function(target, src, options) {
  for (var key in src) redefine$3(target, key, src[key], options);
  return target;
};
var global$k = global$G;
var isCallable$8 = isCallable$i;
var String$3 = global$k.String;
var TypeError$9 = global$k.TypeError;
var aPossiblePrototype$1 = function(argument) {
  if (typeof argument == "object" || isCallable$8(argument)) return argument;
  throw TypeError$9("Can't set " + String$3(argument) + " as a prototype");
};
var uncurryThis$a = functionUncurryThis;
var anObject$b = anObject$e;
var aPossiblePrototype = aPossiblePrototype$1;
var objectSetPrototypeOf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var CORRECT_SETTER = false;
  var test2 = {};
  var setter;
  try {
    setter = uncurryThis$a(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set);
    setter(test2, []);
    CORRECT_SETTER = test2 instanceof Array;
  } catch (error) {
  }
  return function setPrototypeOf2(O, proto) {
    anObject$b(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : void 0);
var defineProperty3 = objectDefineProperty.f;
var hasOwn$1 = hasOwnProperty_1;
var wellKnownSymbol$d = wellKnownSymbol$f;
var TO_STRING_TAG$2 = wellKnownSymbol$d("toStringTag");
var setToStringTag$1 = function(target, TAG, STATIC) {
  if (target && !STATIC) target = target.prototype;
  if (target && !hasOwn$1(target, TO_STRING_TAG$2)) {
    defineProperty3(target, TO_STRING_TAG$2, {
      configurable: true,
      value: TAG
    });
  }
};
var getBuiltIn$4 = getBuiltIn$8;
var definePropertyModule$2 = objectDefineProperty;
var wellKnownSymbol$c = wellKnownSymbol$f;
var DESCRIPTORS$1 = descriptors;
var SPECIES$3 = wellKnownSymbol$c("species");
var setSpecies$1 = function(CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn$4(CONSTRUCTOR_NAME);
  var defineProperty4 = definePropertyModule$2.f;
  if (DESCRIPTORS$1 && Constructor && !Constructor[SPECIES$3]) {
    defineProperty4(Constructor, SPECIES$3, {
      configurable: true,
      get: function() {
        return this;
      }
    });
  }
};
var global$j = global$G;
var isPrototypeOf$1 = objectIsPrototypeOf;
var TypeError$8 = global$j.TypeError;
var anInstance$1 = function(it, Prototype) {
  if (isPrototypeOf$1(Prototype, it)) return it;
  throw TypeError$8("Incorrect invocation");
};
var wellKnownSymbol$b = wellKnownSymbol$f;
var TO_STRING_TAG$1 = wellKnownSymbol$b("toStringTag");
var test = {};
test[TO_STRING_TAG$1] = "z";
var toStringTagSupport = String(test) === "[object z]";
var global$i = global$G;
var TO_STRING_TAG_SUPPORT = toStringTagSupport;
var isCallable$7 = isCallable$i;
var classofRaw = classofRaw$1;
var wellKnownSymbol$a = wellKnownSymbol$f;
var TO_STRING_TAG = wellKnownSymbol$a("toStringTag");
var Object$1 = global$i.Object;
var CORRECT_ARGUMENTS = classofRaw(/* @__PURE__ */ function() {
  return arguments;
}()) == "Arguments";
var tryGet = function(it, key) {
  try {
    return it[key];
  } catch (error) {
  }
};
var classof$5 = TO_STRING_TAG_SUPPORT ? classofRaw : function(it) {
  var O, tag, result;
  return it === void 0 ? "Undefined" : it === null ? "Null" : typeof (tag = tryGet(O = Object$1(it), TO_STRING_TAG)) == "string" ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : (result = classofRaw(O)) == "Object" && isCallable$7(O.callee) ? "Arguments" : result;
};
var uncurryThis$9 = functionUncurryThis;
var fails$6 = fails$e;
var isCallable$6 = isCallable$i;
var classof$4 = classof$5;
var getBuiltIn$3 = getBuiltIn$8;
var inspectSource$1 = inspectSource$4;
var noop = function() {
};
var empty = [];
var construct = getBuiltIn$3("Reflect", "construct");
var constructorRegExp = /^\s*(?:class|function)\b/;
var exec$1 = uncurryThis$9(constructorRegExp.exec);
var INCORRECT_TO_STRING = !constructorRegExp.exec(noop);
var isConstructorModern = function isConstructor(argument) {
  if (!isCallable$6(argument)) return false;
  try {
    construct(noop, empty, argument);
    return true;
  } catch (error) {
    return false;
  }
};
var isConstructorLegacy = function isConstructor2(argument) {
  if (!isCallable$6(argument)) return false;
  switch (classof$4(argument)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return INCORRECT_TO_STRING || !!exec$1(constructorRegExp, inspectSource$1(argument));
  } catch (error) {
    return true;
  }
};
isConstructorLegacy.sham = true;
var isConstructor$1 = !construct || fails$6(function() {
  var called;
  return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function() {
    called = true;
  }) || called;
}) ? isConstructorLegacy : isConstructorModern;
var global$h = global$G;
var isConstructor3 = isConstructor$1;
var tryToString$2 = tryToString$4;
var TypeError$7 = global$h.TypeError;
var aConstructor$1 = function(argument) {
  if (isConstructor3(argument)) return argument;
  throw TypeError$7(tryToString$2(argument) + " is not a constructor");
};
var anObject$a = anObject$e;
var aConstructor = aConstructor$1;
var wellKnownSymbol$9 = wellKnownSymbol$f;
var SPECIES$2 = wellKnownSymbol$9("species");
var speciesConstructor$1 = function(O, defaultConstructor) {
  var C = anObject$a(O).constructor;
  var S;
  return C === void 0 || (S = anObject$a(C)[SPECIES$2]) == void 0 ? defaultConstructor : aConstructor(S);
};
var NATIVE_BIND$1 = functionBindNative;
var FunctionPrototype = Function.prototype;
var apply$2 = FunctionPrototype.apply;
var call$b = FunctionPrototype.call;
var functionApply = typeof Reflect == "object" && Reflect.apply || (NATIVE_BIND$1 ? call$b.bind(apply$2) : function() {
  return call$b.apply(apply$2, arguments);
});
var uncurryThis$8 = functionUncurryThis;
var aCallable$5 = aCallable$7;
var NATIVE_BIND = functionBindNative;
var bind$4 = uncurryThis$8(uncurryThis$8.bind);
var functionBindContext = function(fn, that) {
  aCallable$5(fn);
  return that === void 0 ? fn : NATIVE_BIND ? bind$4(fn, that) : function() {
    return fn.apply(that, arguments);
  };
};
var getBuiltIn$2 = getBuiltIn$8;
var html$2 = getBuiltIn$2("document", "documentElement");
var uncurryThis$7 = functionUncurryThis;
var arraySlice$1 = uncurryThis$7([].slice);
var global$g = global$G;
var TypeError$6 = global$g.TypeError;
var validateArgumentsLength$1 = function(passed, required) {
  if (passed < required) throw TypeError$6("Not enough arguments");
  return passed;
};
var userAgent$2 = engineUserAgent;
var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);
var global$f = global$G;
var apply$1 = functionApply;
var bind$3 = functionBindContext;
var isCallable$5 = isCallable$i;
var hasOwn2 = hasOwnProperty_1;
var fails$5 = fails$e;
var html$1 = html$2;
var arraySlice = arraySlice$1;
var createElement = documentCreateElement$1;
var validateArgumentsLength = validateArgumentsLength$1;
var IS_IOS$1 = engineIsIos;
var IS_NODE$2 = engineIsNode;
var set = global$f.setImmediate;
var clear = global$f.clearImmediate;
var process$2 = global$f.process;
var Dispatch = global$f.Dispatch;
var Function$1 = global$f.Function;
var MessageChannel = global$f.MessageChannel;
var String$2 = global$f.String;
var counter = 0;
var queue$1 = {};
var ONREADYSTATECHANGE = "onreadystatechange";
var location;
var defer;
var channel;
var port;
try {
  location = global$f.location;
} catch (error) {
}
var run = function(id2) {
  if (hasOwn2(queue$1, id2)) {
    var fn = queue$1[id2];
    delete queue$1[id2];
    fn();
  }
};
var runner = function(id2) {
  return function() {
    run(id2);
  };
};
var listener = function(event) {
  run(event.data);
};
var post = function(id2) {
  global$f.postMessage(String$2(id2), location.protocol + "//" + location.host);
};
if (!set || !clear) {
  set = function setImmediate(handler) {
    validateArgumentsLength(arguments.length, 1);
    var fn = isCallable$5(handler) ? handler : Function$1(handler);
    var args = arraySlice(arguments, 1);
    queue$1[++counter] = function() {
      apply$1(fn, void 0, args);
    };
    defer(counter);
    return counter;
  };
  clear = function clearImmediate(id2) {
    delete queue$1[id2];
  };
  if (IS_NODE$2) {
    defer = function(id2) {
      process$2.nextTick(runner(id2));
    };
  } else if (Dispatch && Dispatch.now) {
    defer = function(id2) {
      Dispatch.now(runner(id2));
    };
  } else if (MessageChannel && !IS_IOS$1) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = bind$3(port.postMessage, port);
  } else if (global$f.addEventListener && isCallable$5(global$f.postMessage) && !global$f.importScripts && location && location.protocol !== "file:" && !fails$5(post)) {
    defer = post;
    global$f.addEventListener("message", listener, false);
  } else if (ONREADYSTATECHANGE in createElement("script")) {
    defer = function(id2) {
      html$1.appendChild(createElement("script"))[ONREADYSTATECHANGE] = function() {
        html$1.removeChild(this);
        run(id2);
      };
    };
  } else {
    defer = function(id2) {
      setTimeout(runner(id2), 0);
    };
  }
}
var task$1 = {
  set,
  clear
};
var userAgent$1 = engineUserAgent;
var global$e = global$G;
var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$e.Pebble !== void 0;
var userAgent = engineUserAgent;
var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
var global$d = global$G;
var bind$2 = functionBindContext;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var macrotask = task$1.set;
var IS_IOS = engineIsIos;
var IS_IOS_PEBBLE = engineIsIosPebble;
var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
var IS_NODE$1 = engineIsNode;
var MutationObserver = global$d.MutationObserver || global$d.WebKitMutationObserver;
var document$2 = global$d.document;
var process$1 = global$d.process;
var Promise$1 = global$d.Promise;
var queueMicrotaskDescriptor = getOwnPropertyDescriptor$2(global$d, "queueMicrotask");
var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
var flush;
var head;
var last;
var notify$1;
var toggle;
var node;
var promise;
var then;
if (!queueMicrotask) {
  flush = function() {
    var parent, fn;
    if (IS_NODE$1 && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (error) {
        if (head) notify$1();
        else last = void 0;
        throw error;
      }
    }
    last = void 0;
    if (parent) parent.enter();
  };
  if (!IS_IOS && !IS_NODE$1 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
    toggle = true;
    node = document$2.createTextNode("");
    new MutationObserver(flush).observe(node, {
      characterData: true
    });
    notify$1 = function() {
      node.data = toggle = !toggle;
    };
  } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
    promise = Promise$1.resolve(void 0);
    promise.constructor = Promise$1;
    then = bind$2(promise.then, promise);
    notify$1 = function() {
      then(flush);
    };
  } else if (IS_NODE$1) {
    notify$1 = function() {
      process$1.nextTick(flush);
    };
  } else {
    macrotask = bind$2(macrotask, global$d);
    notify$1 = function() {
      macrotask(flush);
    };
  }
}
var microtask$1 = queueMicrotask || function(fn) {
  var task2 = {
    fn,
    next: void 0
  };
  if (last) last.next = task2;
  if (!head) {
    head = task2;
    notify$1();
  }
  last = task2;
};
var global$c = global$G;
var hostReportErrors$1 = function(a, b) {
  var console2 = global$c.console;
  if (console2 && console2.error) {
    arguments.length == 1 ? console2.error(a) : console2.error(a, b);
  }
};
var perform$3 = function(exec2) {
  try {
    return {
      error: false,
      value: exec2()
    };
  } catch (error) {
    return {
      error: true,
      value: error
    };
  }
};
var Queue$1 = function() {
  this.head = null;
  this.tail = null;
};
Queue$1.prototype = {
  add: function(item) {
    var entry = {
      item,
      next: null
    };
    if (this.head) this.tail.next = entry;
    else this.head = entry;
    this.tail = entry;
  },
  get: function() {
    var entry = this.head;
    if (entry) {
      this.head = entry.next;
      if (this.tail === entry) this.tail = null;
      return entry.item;
    }
  }
};
var queue = Queue$1;
var global$b = global$G;
var promiseNativeConstructor = global$b.Promise;
var engineIsBrowser = typeof window == "object" && typeof Deno != "object";
var global$a = global$G;
var NativePromiseConstructor$3 = promiseNativeConstructor;
var isCallable$4 = isCallable$i;
var isForced = isForced_1;
var inspectSource = inspectSource$4;
var wellKnownSymbol$8 = wellKnownSymbol$f;
var IS_BROWSER = engineIsBrowser;
var V8_VERSION = engineV8Version;
NativePromiseConstructor$3 && NativePromiseConstructor$3.prototype;
var SPECIES$1 = wellKnownSymbol$8("species");
var SUBCLASSING = false;
var NATIVE_PROMISE_REJECTION_EVENT$1 = isCallable$4(global$a.PromiseRejectionEvent);
var FORCED_PROMISE_CONSTRUCTOR$5 = isForced("Promise", function() {
  var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(NativePromiseConstructor$3);
  var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(NativePromiseConstructor$3);
  if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true;
  if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false;
  var promise2 = new NativePromiseConstructor$3(function(resolve2) {
    resolve2(1);
  });
  var FakePromise = function(exec2) {
    exec2(function() {
    }, function() {
    });
  };
  var constructor = promise2.constructor = {};
  constructor[SPECIES$1] = FakePromise;
  SUBCLASSING = promise2.then(function() {
  }) instanceof FakePromise;
  if (!SUBCLASSING) return true;
  return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_PROMISE_REJECTION_EVENT$1;
});
var promiseConstructorDetection = {
  CONSTRUCTOR: FORCED_PROMISE_CONSTRUCTOR$5,
  REJECTION_EVENT: NATIVE_PROMISE_REJECTION_EVENT$1,
  SUBCLASSING
};
var newPromiseCapability$2 = {};
var aCallable$4 = aCallable$7;
var PromiseCapability = function(C) {
  var resolve2, reject2;
  this.promise = new C(function($$resolve, $$reject) {
    if (resolve2 !== void 0 || reject2 !== void 0) throw TypeError("Bad Promise constructor");
    resolve2 = $$resolve;
    reject2 = $$reject;
  });
  this.resolve = aCallable$4(resolve2);
  this.reject = aCallable$4(reject2);
};
newPromiseCapability$2.f = function(C) {
  return new PromiseCapability(C);
};
var $$9 = _export;
var IS_NODE = engineIsNode;
var global$9 = global$G;
var call$a = functionCall;
var redefine$2 = redefine$5.exports;
var redefineAll = redefineAll$1;
var setPrototypeOf = objectSetPrototypeOf;
var setToStringTag = setToStringTag$1;
var setSpecies = setSpecies$1;
var aCallable$3 = aCallable$7;
var isCallable$3 = isCallable$i;
var isObject$2 = isObject$8;
var anInstance = anInstance$1;
var speciesConstructor = speciesConstructor$1;
var task = task$1.set;
var microtask = microtask$1;
var hostReportErrors = hostReportErrors$1;
var perform$2 = perform$3;
var Queue = queue;
var InternalStateModule = internalState;
var NativePromiseConstructor$2 = promiseNativeConstructor;
var PromiseConstructorDetection = promiseConstructorDetection;
var newPromiseCapabilityModule$3 = newPromiseCapability$2;
var PROMISE = "Promise";
var FORCED_PROMISE_CONSTRUCTOR$4 = PromiseConstructorDetection.CONSTRUCTOR;
var NATIVE_PROMISE_REJECTION_EVENT = PromiseConstructorDetection.REJECTION_EVENT;
var NATIVE_PROMISE_SUBCLASSING = PromiseConstructorDetection.SUBCLASSING;
var getInternalPromiseState = InternalStateModule.getterFor(PROMISE);
var setInternalState = InternalStateModule.set;
var NativePromisePrototype$1 = NativePromiseConstructor$2 && NativePromiseConstructor$2.prototype;
var PromiseConstructor = NativePromiseConstructor$2;
var PromisePrototype = NativePromisePrototype$1;
var TypeError$5 = global$9.TypeError;
var document$1 = global$9.document;
var process = global$9.process;
var newPromiseCapability$1 = newPromiseCapabilityModule$3.f;
var newGenericPromiseCapability = newPromiseCapability$1;
var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$9.dispatchEvent);
var UNHANDLED_REJECTION = "unhandledrejection";
var REJECTION_HANDLED = "rejectionhandled";
var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;
var HANDLED = 1;
var UNHANDLED = 2;
var Internal;
var OwnPromiseCapability;
var PromiseWrapper;
var nativeThen;
var isThenable = function(it) {
  var then2;
  return isObject$2(it) && isCallable$3(then2 = it.then) ? then2 : false;
};
var callReaction = function(reaction, state) {
  var value = state.value;
  var ok = state.state == FULFILLED;
  var handler = ok ? reaction.ok : reaction.fail;
  var resolve2 = reaction.resolve;
  var reject2 = reaction.reject;
  var domain = reaction.domain;
  var result, then2, exited;
  try {
    if (handler) {
      if (!ok) {
        if (state.rejection === UNHANDLED) onHandleUnhandled(state);
        state.rejection = HANDLED;
      }
      if (handler === true) result = value;
      else {
        if (domain) domain.enter();
        result = handler(value);
        if (domain) {
          domain.exit();
          exited = true;
        }
      }
      if (result === reaction.promise) {
        reject2(TypeError$5("Promise-chain cycle"));
      } else if (then2 = isThenable(result)) {
        call$a(then2, result, resolve2, reject2);
      } else resolve2(result);
    } else reject2(value);
  } catch (error) {
    if (domain && !exited) domain.exit();
    reject2(error);
  }
};
var notify = function(state, isReject) {
  if (state.notified) return;
  state.notified = true;
  microtask(function() {
    var reactions = state.reactions;
    var reaction;
    while (reaction = reactions.get()) {
      callReaction(reaction, state);
    }
    state.notified = false;
    if (isReject && !state.rejection) onUnhandled(state);
  });
};
var dispatchEvent = function(name, promise2, reason) {
  var event, handler;
  if (DISPATCH_EVENT) {
    event = document$1.createEvent("Event");
    event.promise = promise2;
    event.reason = reason;
    event.initEvent(name, false, true);
    global$9.dispatchEvent(event);
  } else event = {
    promise: promise2,
    reason
  };
  if (!NATIVE_PROMISE_REJECTION_EVENT && (handler = global$9["on" + name])) handler(event);
  else if (name === UNHANDLED_REJECTION) hostReportErrors("Unhandled promise rejection", reason);
};
var onUnhandled = function(state) {
  call$a(task, global$9, function() {
    var promise2 = state.facade;
    var value = state.value;
    var IS_UNHANDLED = isUnhandled(state);
    var result;
    if (IS_UNHANDLED) {
      result = perform$2(function() {
        if (IS_NODE) {
          process.emit("unhandledRejection", value, promise2);
        } else dispatchEvent(UNHANDLED_REJECTION, promise2, value);
      });
      state.rejection = IS_NODE || isUnhandled(state) ? UNHANDLED : HANDLED;
      if (result.error) throw result.value;
    }
  });
};
var isUnhandled = function(state) {
  return state.rejection !== HANDLED && !state.parent;
};
var onHandleUnhandled = function(state) {
  call$a(task, global$9, function() {
    var promise2 = state.facade;
    if (IS_NODE) {
      process.emit("rejectionHandled", promise2);
    } else dispatchEvent(REJECTION_HANDLED, promise2, state.value);
  });
};
var bind$1 = function(fn, state, unwrap) {
  return function(value) {
    fn(state, value, unwrap);
  };
};
var internalReject = function(state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  state.value = value;
  state.state = REJECTED;
  notify(state, true);
};
var internalResolve = function(state, value, unwrap) {
  if (state.done) return;
  state.done = true;
  if (unwrap) state = unwrap;
  try {
    if (state.facade === value) throw TypeError$5("Promise can't be resolved itself");
    var then2 = isThenable(value);
    if (then2) {
      microtask(function() {
        var wrapper = {
          done: false
        };
        try {
          call$a(then2, value, bind$1(internalResolve, wrapper, state), bind$1(internalReject, wrapper, state));
        } catch (error) {
          internalReject(wrapper, error, state);
        }
      });
    } else {
      state.value = value;
      state.state = FULFILLED;
      notify(state, false);
    }
  } catch (error) {
    internalReject({
      done: false
    }, error, state);
  }
};
if (FORCED_PROMISE_CONSTRUCTOR$4) {
  PromiseConstructor = function Promise2(executor) {
    anInstance(this, PromisePrototype);
    aCallable$3(executor);
    call$a(Internal, this);
    var state = getInternalPromiseState(this);
    try {
      executor(bind$1(internalResolve, state), bind$1(internalReject, state));
    } catch (error) {
      internalReject(state, error);
    }
  };
  PromisePrototype = PromiseConstructor.prototype;
  Internal = function Promise2(executor) {
    setInternalState(this, {
      type: PROMISE,
      done: false,
      notified: false,
      parent: false,
      reactions: new Queue(),
      rejection: false,
      state: PENDING,
      value: void 0
    });
  };
  Internal.prototype = redefineAll(PromisePrototype, {
    // `Promise.prototype.then` method
    // https://tc39.es/ecma262/#sec-promise.prototype.then
    // eslint-disable-next-line unicorn/no-thenable -- safe
    then: function then2(onFulfilled, onRejected) {
      var state = getInternalPromiseState(this);
      var reaction = newPromiseCapability$1(speciesConstructor(this, PromiseConstructor));
      state.parent = true;
      reaction.ok = isCallable$3(onFulfilled) ? onFulfilled : true;
      reaction.fail = isCallable$3(onRejected) && onRejected;
      reaction.domain = IS_NODE ? process.domain : void 0;
      if (state.state == PENDING) state.reactions.add(reaction);
      else microtask(function() {
        callReaction(reaction, state);
      });
      return reaction.promise;
    }
  });
  OwnPromiseCapability = function() {
    var promise2 = new Internal();
    var state = getInternalPromiseState(promise2);
    this.promise = promise2;
    this.resolve = bind$1(internalResolve, state);
    this.reject = bind$1(internalReject, state);
  };
  newPromiseCapabilityModule$3.f = newPromiseCapability$1 = function(C) {
    return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
  if (isCallable$3(NativePromiseConstructor$2) && NativePromisePrototype$1 !== Object.prototype) {
    nativeThen = NativePromisePrototype$1.then;
    if (!NATIVE_PROMISE_SUBCLASSING) {
      redefine$2(NativePromisePrototype$1, "then", function then2(onFulfilled, onRejected) {
        var that = this;
        return new PromiseConstructor(function(resolve2, reject2) {
          call$a(nativeThen, that, resolve2, reject2);
        }).then(onFulfilled, onRejected);
      }, {
        unsafe: true
      });
    }
    try {
      delete NativePromisePrototype$1.constructor;
    } catch (error) {
    }
    if (setPrototypeOf) {
      setPrototypeOf(NativePromisePrototype$1, PromisePrototype);
    }
  }
}
$$9({
  global: true,
  wrap: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$4
}, {
  Promise: PromiseConstructor
});
setToStringTag(PromiseConstructor, PROMISE, false);
setSpecies(PROMISE);
var iterators = {};
var wellKnownSymbol$7 = wellKnownSymbol$f;
var Iterators$1 = iterators;
var ITERATOR$2 = wellKnownSymbol$7("iterator");
var ArrayPrototype$1 = Array.prototype;
var isArrayIteratorMethod$1 = function(it) {
  return it !== void 0 && (Iterators$1.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
};
var classof$3 = classof$5;
var getMethod$3 = getMethod$5;
var Iterators = iterators;
var wellKnownSymbol$6 = wellKnownSymbol$f;
var ITERATOR$1 = wellKnownSymbol$6("iterator");
var getIteratorMethod$2 = function(it) {
  if (it != void 0) return getMethod$3(it, ITERATOR$1) || getMethod$3(it, "@@iterator") || Iterators[classof$3(it)];
};
var global$8 = global$G;
var call$9 = functionCall;
var aCallable$2 = aCallable$7;
var anObject$9 = anObject$e;
var tryToString$1 = tryToString$4;
var getIteratorMethod$1 = getIteratorMethod$2;
var TypeError$4 = global$8.TypeError;
var getIterator$1 = function(argument, usingIterator) {
  var iteratorMethod = arguments.length < 2 ? getIteratorMethod$1(argument) : usingIterator;
  if (aCallable$2(iteratorMethod)) return anObject$9(call$9(iteratorMethod, argument));
  throw TypeError$4(tryToString$1(argument) + " is not iterable");
};
var call$8 = functionCall;
var anObject$8 = anObject$e;
var getMethod$2 = getMethod$5;
var iteratorClose$1 = function(iterator, kind, value) {
  var innerResult, innerError;
  anObject$8(iterator);
  try {
    innerResult = getMethod$2(iterator, "return");
    if (!innerResult) {
      if (kind === "throw") throw value;
      return value;
    }
    innerResult = call$8(innerResult, iterator);
  } catch (error) {
    innerError = true;
    innerResult = error;
  }
  if (kind === "throw") throw value;
  if (innerError) throw innerResult;
  anObject$8(innerResult);
  return value;
};
var global$7 = global$G;
var bind = functionBindContext;
var call$7 = functionCall;
var anObject$7 = anObject$e;
var tryToString = tryToString$4;
var isArrayIteratorMethod = isArrayIteratorMethod$1;
var lengthOfArrayLike = lengthOfArrayLike$2;
var isPrototypeOf = objectIsPrototypeOf;
var getIterator = getIterator$1;
var getIteratorMethod = getIteratorMethod$2;
var iteratorClose = iteratorClose$1;
var TypeError$3 = global$7.TypeError;
var Result = function(stopped, result) {
  this.stopped = stopped;
  this.result = result;
};
var ResultPrototype = Result.prototype;
var iterate$2 = function(iterable, unboundFunction, options) {
  var that = options && options.that;
  var AS_ENTRIES = !!(options && options.AS_ENTRIES);
  var IS_ITERATOR = !!(options && options.IS_ITERATOR);
  var INTERRUPTED = !!(options && options.INTERRUPTED);
  var fn = bind(unboundFunction, that);
  var iterator, iterFn, index, length, result, next, step;
  var stop = function(condition) {
    if (iterator) iteratorClose(iterator, "normal", condition);
    return new Result(true, condition);
  };
  var callFn = function(value) {
    if (AS_ENTRIES) {
      anObject$7(value);
      return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
    }
    return INTERRUPTED ? fn(value, stop) : fn(value);
  };
  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (!iterFn) throw TypeError$3(tryToString(iterable) + " is not iterable");
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = lengthOfArrayLike(iterable); length > index; index++) {
        result = callFn(iterable[index]);
        if (result && isPrototypeOf(ResultPrototype, result)) return result;
      }
      return new Result(false);
    }
    iterator = getIterator(iterable, iterFn);
  }
  next = iterator.next;
  while (!(step = call$7(next, iterator)).done) {
    try {
      result = callFn(step.value);
    } catch (error) {
      iteratorClose(iterator, "throw", error);
    }
    if (typeof result == "object" && result && isPrototypeOf(ResultPrototype, result)) return result;
  }
  return new Result(false);
};
var wellKnownSymbol$5 = wellKnownSymbol$f;
var ITERATOR = wellKnownSymbol$5("iterator");
var SAFE_CLOSING = false;
try {
  called = 0;
  iteratorWithReturn = {
    next: function() {
      return {
        done: !!called++
      };
    },
    "return": function() {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR] = function() {
    return this;
  };
  Array.from(iteratorWithReturn, function() {
    throw 2;
  });
} catch (error) {
}
var called;
var iteratorWithReturn;
var checkCorrectnessOfIteration$1 = function(exec2, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR] = function() {
      return {
        next: function() {
          return {
            done: ITERATION_SUPPORT = true
          };
        }
      };
    };
    exec2(object);
  } catch (error) {
  }
  return ITERATION_SUPPORT;
};
var NativePromiseConstructor$1 = promiseNativeConstructor;
var checkCorrectnessOfIteration = checkCorrectnessOfIteration$1;
var FORCED_PROMISE_CONSTRUCTOR$3 = promiseConstructorDetection.CONSTRUCTOR;
var promiseStaticsIncorrectIteration = FORCED_PROMISE_CONSTRUCTOR$3 || !checkCorrectnessOfIteration(function(iterable) {
  NativePromiseConstructor$1.all(iterable).then(void 0, function() {
  });
});
var $$8 = _export;
var call$6 = functionCall;
var aCallable$1 = aCallable$7;
var newPromiseCapabilityModule$2 = newPromiseCapability$2;
var perform$1 = perform$3;
var iterate$1 = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION$1 = promiseStaticsIncorrectIteration;
$$8({
  target: "Promise",
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION$1
}, {
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$2.f(C);
    var resolve2 = capability.resolve;
    var reject2 = capability.reject;
    var result = perform$1(function() {
      var $promiseResolve = aCallable$1(C.resolve);
      var values = [];
      var counter2 = 0;
      var remaining = 1;
      iterate$1(iterable, function(promise2) {
        var index = counter2++;
        var alreadyCalled = false;
        remaining++;
        call$6($promiseResolve, C, promise2).then(function(value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[index] = value;
          --remaining || resolve2(values);
        }, reject2);
      });
      --remaining || resolve2(values);
    });
    if (result.error) reject2(result.value);
    return capability.promise;
  }
});
var $$7 = _export;
var FORCED_PROMISE_CONSTRUCTOR$2 = promiseConstructorDetection.CONSTRUCTOR;
var NativePromiseConstructor = promiseNativeConstructor;
var getBuiltIn$1 = getBuiltIn$8;
var isCallable$2 = isCallable$i;
var redefine$1 = redefine$5.exports;
var NativePromisePrototype = NativePromiseConstructor && NativePromiseConstructor.prototype;
$$7({
  target: "Promise",
  proto: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$2,
  real: true
}, {
  "catch": function(onRejected) {
    return this.then(void 0, onRejected);
  }
});
if (isCallable$2(NativePromiseConstructor)) {
  method = getBuiltIn$1("Promise").prototype["catch"];
  if (NativePromisePrototype["catch"] !== method) {
    redefine$1(NativePromisePrototype, "catch", method, {
      unsafe: true
    });
  }
}
var method;
var $$6 = _export;
var call$5 = functionCall;
var aCallable = aCallable$7;
var newPromiseCapabilityModule$1 = newPromiseCapability$2;
var perform = perform$3;
var iterate = iterate$2;
var PROMISE_STATICS_INCORRECT_ITERATION = promiseStaticsIncorrectIteration;
$$6({
  target: "Promise",
  stat: true,
  forced: PROMISE_STATICS_INCORRECT_ITERATION
}, {
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapabilityModule$1.f(C);
    var reject2 = capability.reject;
    var result = perform(function() {
      var $promiseResolve = aCallable(C.resolve);
      iterate(iterable, function(promise2) {
        call$5($promiseResolve, C, promise2).then(capability.resolve, reject2);
      });
    });
    if (result.error) reject2(result.value);
    return capability.promise;
  }
});
var $$5 = _export;
var call$4 = functionCall;
var newPromiseCapabilityModule = newPromiseCapability$2;
var FORCED_PROMISE_CONSTRUCTOR$1 = promiseConstructorDetection.CONSTRUCTOR;
$$5({
  target: "Promise",
  stat: true,
  forced: FORCED_PROMISE_CONSTRUCTOR$1
}, {
  reject: function reject(r) {
    var capability = newPromiseCapabilityModule.f(this);
    call$4(capability.reject, void 0, r);
    return capability.promise;
  }
});
var anObject$6 = anObject$e;
var isObject$1 = isObject$8;
var newPromiseCapability = newPromiseCapability$2;
var promiseResolve$1 = function(C, x) {
  anObject$6(C);
  if (isObject$1(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve2 = promiseCapability.resolve;
  resolve2(x);
  return promiseCapability.promise;
};
var $$4 = _export;
var getBuiltIn = getBuiltIn$8;
var FORCED_PROMISE_CONSTRUCTOR = promiseConstructorDetection.CONSTRUCTOR;
var promiseResolve = promiseResolve$1;
getBuiltIn("Promise");
$$4({
  target: "Promise",
  stat: true,
  forced: FORCED_PROMISE_CONSTRUCTOR
}, {
  resolve: function resolve(x) {
    return promiseResolve(this, x);
  }
});
var global$6 = global$G;
var classof$2 = classof$5;
var String$1 = global$6.String;
var toString$6 = function(argument) {
  if (classof$2(argument) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
  return String$1(argument);
};
var anObject$5 = anObject$e;
var regexpFlags$1 = function() {
  var that = anObject$5(this);
  var result = "";
  if (that.hasIndices) result += "d";
  if (that.global) result += "g";
  if (that.ignoreCase) result += "i";
  if (that.multiline) result += "m";
  if (that.dotAll) result += "s";
  if (that.unicode) result += "u";
  if (that.sticky) result += "y";
  return result;
};
var fails$4 = fails$e;
var global$5 = global$G;
var $RegExp$2 = global$5.RegExp;
var UNSUPPORTED_Y$1 = fails$4(function() {
  var re = $RegExp$2("a", "y");
  re.lastIndex = 2;
  return re.exec("abcd") != null;
});
var MISSED_STICKY = UNSUPPORTED_Y$1 || fails$4(function() {
  return !$RegExp$2("a", "y").sticky;
});
var BROKEN_CARET = UNSUPPORTED_Y$1 || fails$4(function() {
  var re = $RegExp$2("^r", "gy");
  re.lastIndex = 2;
  return re.exec("str") != null;
});
var regexpStickyHelpers = {
  BROKEN_CARET,
  MISSED_STICKY,
  UNSUPPORTED_Y: UNSUPPORTED_Y$1
};
var objectDefineProperties = {};
var internalObjectKeys = objectKeysInternal;
var enumBugKeys$1 = enumBugKeys$3;
var objectKeys$1 = Object.keys || function keys2(O) {
  return internalObjectKeys(O, enumBugKeys$1);
};
var DESCRIPTORS = descriptors;
var V8_PROTOTYPE_DEFINE_BUG = v8PrototypeDefineBug;
var definePropertyModule$1 = objectDefineProperty;
var anObject$4 = anObject$e;
var toIndexedObject = toIndexedObject$4;
var objectKeys = objectKeys$1;
objectDefineProperties.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject$4(O);
  var props = toIndexedObject(Properties);
  var keys3 = objectKeys(Properties);
  var length = keys3.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule$1.f(O, key = keys3[index++], props[key]);
  return O;
};
var anObject$3 = anObject$e;
var definePropertiesModule = objectDefineProperties;
var enumBugKeys = enumBugKeys$3;
var hiddenKeys = hiddenKeys$4;
var html = html$2;
var documentCreateElement = documentCreateElement$1;
var sharedKey = sharedKey$2;
var GT = ">";
var LT = "<";
var PROTOTYPE = "prototype";
var SCRIPT = "script";
var IE_PROTO = sharedKey("IE_PROTO");
var EmptyConstructor = function() {
};
var scriptTag = function(content) {
  return LT + SCRIPT + GT + content + LT + "/" + SCRIPT + GT;
};
var NullProtoObjectViaActiveX = function(activeXDocument2) {
  activeXDocument2.write(scriptTag(""));
  activeXDocument2.close();
  var temp = activeXDocument2.parentWindow.Object;
  activeXDocument2 = null;
  return temp;
};
var NullProtoObjectViaIFrame = function() {
  var iframe = documentCreateElement("iframe");
  var JS = "java" + SCRIPT + ":";
  var iframeDocument;
  iframe.style.display = "none";
  html.appendChild(iframe);
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag("document.F=Object"));
  iframeDocument.close();
  return iframeDocument.F;
};
var activeXDocument;
var NullProtoObject = function() {
  try {
    activeXDocument = new ActiveXObject("htmlfile");
  } catch (error) {
  }
  NullProtoObject = typeof document != "undefined" ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument);
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject$3(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === void 0 ? result : definePropertiesModule.f(result, Properties);
};
var fails$3 = fails$e;
var global$4 = global$G;
var $RegExp$1 = global$4.RegExp;
var regexpUnsupportedDotAll = fails$3(function() {
  var re = $RegExp$1(".", "s");
  return !(re.dotAll && re.exec("\n") && re.flags === "s");
});
var fails$2 = fails$e;
var global$3 = global$G;
var $RegExp = global$3.RegExp;
var regexpUnsupportedNcg = fails$2(function() {
  var re = $RegExp("(?<a>b)", "g");
  return re.exec("b").groups.a !== "b" || "b".replace(re, "$<a>c") !== "bc";
});
var call$3 = functionCall;
var uncurryThis$6 = functionUncurryThis;
var toString$5 = toString$6;
var regexpFlags = regexpFlags$1;
var stickyHelpers = regexpStickyHelpers;
var shared = shared$4.exports;
var create$1 = objectCreate;
var getInternalState = internalState.get;
var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
var UNSUPPORTED_NCG = regexpUnsupportedNcg;
var nativeReplace = shared("native-string-replace", String.prototype.replace);
var nativeExec = RegExp.prototype.exec;
var patchedExec = nativeExec;
var charAt$3 = uncurryThis$6("".charAt);
var indexOf = uncurryThis$6("".indexOf);
var replace$1 = uncurryThis$6("".replace);
var stringSlice$4 = uncurryThis$6("".slice);
var UPDATES_LAST_INDEX_WRONG = function() {
  var re1 = /a/;
  var re2 = /b*/g;
  call$3(nativeExec, re1, "a");
  call$3(nativeExec, re2, "a");
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
}();
var UNSUPPORTED_Y = stickyHelpers.BROKEN_CARET;
var NPCG_INCLUDED = /()??/.exec("")[1] !== void 0;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG;
if (PATCH) {
  patchedExec = function exec2(string) {
    var re = this;
    var state = getInternalState(re);
    var str = toString$5(string);
    var raw = state.raw;
    var result, reCopy, lastIndex, match2, i, object, group;
    if (raw) {
      raw.lastIndex = re.lastIndex;
      result = call$3(patchedExec, raw, str);
      re.lastIndex = raw.lastIndex;
      return result;
    }
    var groups = state.groups;
    var sticky = UNSUPPORTED_Y && re.sticky;
    var flags = call$3(regexpFlags, re);
    var source = re.source;
    var charsAdded = 0;
    var strCopy = str;
    if (sticky) {
      flags = replace$1(flags, "y", "");
      if (indexOf(flags, "g") === -1) {
        flags += "g";
      }
      strCopy = stringSlice$4(str, re.lastIndex);
      if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== "\n")) {
        source = "(?: " + source + ")";
        strCopy = " " + strCopy;
        charsAdded++;
      }
      reCopy = new RegExp("^(?:" + source + ")", flags);
    }
    if (NPCG_INCLUDED) {
      reCopy = new RegExp("^" + source + "$(?!\\s)", flags);
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
    match2 = call$3(nativeExec, sticky ? reCopy : re, strCopy);
    if (sticky) {
      if (match2) {
        match2.input = stringSlice$4(match2.input, charsAdded);
        match2[0] = stringSlice$4(match2[0], charsAdded);
        match2.index = re.lastIndex;
        re.lastIndex += match2[0].length;
      } else re.lastIndex = 0;
    } else if (UPDATES_LAST_INDEX_WRONG && match2) {
      re.lastIndex = re.global ? match2.index + match2[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match2 && match2.length > 1) {
      call$3(nativeReplace, match2[0], reCopy, function() {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === void 0) match2[i] = void 0;
        }
      });
    }
    if (match2 && groups) {
      match2.groups = object = create$1(null);
      for (i = 0; i < groups.length; i++) {
        group = groups[i];
        object[group[0]] = match2[group[1]];
      }
    }
    return match2;
  };
}
var regexpExec$2 = patchedExec;
var $$3 = _export;
var exec = regexpExec$2;
$$3({
  target: "RegExp",
  proto: true,
  forced: /./.exec !== exec
}, {
  exec
});
var uncurryThis$5 = functionUncurryThis;
var redefine = redefine$5.exports;
var regexpExec$1 = regexpExec$2;
var fails$1 = fails$e;
var wellKnownSymbol$4 = wellKnownSymbol$f;
var createNonEnumerableProperty = createNonEnumerableProperty$4;
var SPECIES = wellKnownSymbol$4("species");
var RegExpPrototype = RegExp.prototype;
var fixRegexpWellKnownSymbolLogic = function(KEY, exec2, FORCED, SHAM) {
  var SYMBOL = wellKnownSymbol$4(KEY);
  var DELEGATES_TO_SYMBOL = !fails$1(function() {
    var O = {};
    O[SYMBOL] = function() {
      return 7;
    };
    return ""[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$1(function() {
    var execCalled = false;
    var re = /a/;
    if (KEY === "split") {
      re = {};
      re.constructor = {};
      re.constructor[SPECIES] = function() {
        return re;
      };
      re.flags = "";
      re[SYMBOL] = /./[SYMBOL];
    }
    re.exec = function() {
      execCalled = true;
      return null;
    };
    re[SYMBOL]("");
    return !execCalled;
  });
  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
    var uncurriedNativeRegExpMethod = uncurryThis$5(/./[SYMBOL]);
    var methods = exec2(SYMBOL, ""[KEY], function(nativeMethod, regexp, str, arg2, forceStringMethod) {
      var uncurriedNativeMethod = uncurryThis$5(nativeMethod);
      var $exec = regexp.exec;
      if ($exec === regexpExec$1 || $exec === RegExpPrototype.exec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          return {
            done: true,
            value: uncurriedNativeRegExpMethod(regexp, str, arg2)
          };
        }
        return {
          done: true,
          value: uncurriedNativeMethod(str, regexp, arg2)
        };
      }
      return {
        done: false
      };
    });
    redefine(String.prototype, KEY, methods[0]);
    redefine(RegExpPrototype, SYMBOL, methods[1]);
  }
  if (SHAM) createNonEnumerableProperty(RegExpPrototype[SYMBOL], "sham", true);
};
var uncurryThis$4 = functionUncurryThis;
var toIntegerOrInfinity$1 = toIntegerOrInfinity$4;
var toString$4 = toString$6;
var requireObjectCoercible$4 = requireObjectCoercible$7;
var charAt$2 = uncurryThis$4("".charAt);
var charCodeAt = uncurryThis$4("".charCodeAt);
var stringSlice$3 = uncurryThis$4("".slice);
var createMethod = function(CONVERT_TO_STRING) {
  return function($this, pos) {
    var S = toString$4(requireObjectCoercible$4($this));
    var position = toIntegerOrInfinity$1(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? "" : void 0;
    first = charCodeAt(S, position);
    return first < 55296 || first > 56319 || position + 1 === size || (second = charCodeAt(S, position + 1)) < 56320 || second > 57343 ? CONVERT_TO_STRING ? charAt$2(S, position) : first : CONVERT_TO_STRING ? stringSlice$3(S, position, position + 2) : (first - 55296 << 10) + (second - 56320) + 65536;
  };
};
var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.es/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod(true)
};
var charAt$1 = stringMultibyte.charAt;
var advanceStringIndex$2 = function(S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};
var global$2 = global$G;
var call$2 = functionCall;
var anObject$2 = anObject$e;
var isCallable$1 = isCallable$i;
var classof$1 = classofRaw$1;
var regexpExec = regexpExec$2;
var TypeError$2 = global$2.TypeError;
var regexpExecAbstract = function(R, S) {
  var exec2 = R.exec;
  if (isCallable$1(exec2)) {
    var result = call$2(exec2, R, S);
    if (result !== null) anObject$2(result);
    return result;
  }
  if (classof$1(R) === "RegExp") return call$2(regexpExec, R, S);
  throw TypeError$2("RegExp#exec called on incompatible receiver");
};
var call$1 = functionCall;
var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
var anObject$1 = anObject$e;
var toLength$3 = toLength$5;
var toString$3 = toString$6;
var requireObjectCoercible$3 = requireObjectCoercible$7;
var getMethod$1 = getMethod$5;
var advanceStringIndex$1 = advanceStringIndex$2;
var regExpExec$1 = regexpExecAbstract;
fixRegExpWellKnownSymbolLogic$1("match", function(MATCH2, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match2(regexp) {
      var O = requireObjectCoercible$3(this);
      var matcher = regexp == void 0 ? void 0 : getMethod$1(regexp, MATCH2);
      return matcher ? call$1(matcher, regexp, O) : new RegExp(regexp)[MATCH2](toString$3(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function(string) {
      var rx = anObject$1(this);
      var S = toString$3(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$1(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$3(result[0]);
        A[n] = matchStr;
        if (matchStr === "") rx.lastIndex = advanceStringIndex$1(S, toLength$3(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});
var uncurryThis$3 = functionUncurryThis;
var toObject = toObject$2;
var floor = Math.floor;
var charAt = uncurryThis$3("".charAt);
var replace = uncurryThis$3("".replace);
var stringSlice$2 = uncurryThis$3("".slice);
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d{1,2})/g;
var getSubstitution$1 = function(matched, str, position, captures, namedCaptures, replacement2) {
  var tailPos = position + matched.length;
  var m = captures.length;
  var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
  if (namedCaptures !== void 0) {
    namedCaptures = toObject(namedCaptures);
    symbols = SUBSTITUTION_SYMBOLS;
  }
  return replace(replacement2, symbols, function(match2, ch) {
    var capture;
    switch (charAt(ch, 0)) {
      case "$":
        return "$";
      case "&":
        return matched;
      case "`":
        return stringSlice$2(str, 0, position);
      case "'":
        return stringSlice$2(str, tailPos);
      case "<":
        capture = namedCaptures[stringSlice$2(ch, 1, -1)];
        break;
      default:
        var n = +ch;
        if (n === 0) return match2;
        if (n > m) {
          var f = floor(n / 10);
          if (f === 0) return match2;
          if (f <= m) return captures[f - 1] === void 0 ? charAt(ch, 1) : captures[f - 1] + charAt(ch, 1);
          return match2;
        }
        capture = captures[n - 1];
    }
    return capture === void 0 ? "" : capture;
  });
};
var apply = functionApply;
var call = functionCall;
var uncurryThis$2 = functionUncurryThis;
var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
var fails = fails$e;
var anObject = anObject$e;
var isCallable = isCallable$i;
var toIntegerOrInfinity = toIntegerOrInfinity$4;
var toLength$2 = toLength$5;
var toString$2 = toString$6;
var requireObjectCoercible$2 = requireObjectCoercible$7;
var advanceStringIndex = advanceStringIndex$2;
var getMethod = getMethod$5;
var getSubstitution = getSubstitution$1;
var regExpExec = regexpExecAbstract;
var wellKnownSymbol$3 = wellKnownSymbol$f;
var REPLACE = wellKnownSymbol$3("replace");
var max = Math.max;
var min$2 = Math.min;
var concat = uncurryThis$2([].concat);
var push = uncurryThis$2([].push);
var stringIndexOf = uncurryThis$2("".indexOf);
var stringSlice$1 = uncurryThis$2("".slice);
var maybeToString = function(it) {
  return it === void 0 ? it : String(it);
};
var REPLACE_KEEPS_$0 = function() {
  return "a".replace(/./, "$0") === "$0";
}();
var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
  if (/./[REPLACE]) {
    return /./[REPLACE]("a", "$0") === "";
  }
  return false;
}();
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function() {
  var re = /./;
  re.exec = function() {
    var result = [];
    result.groups = {
      a: "7"
    };
    return result;
  };
  return "".replace(re, "$<a>") !== "7";
});
fixRegExpWellKnownSymbolLogic("replace", function(_, nativeReplace2, maybeCallNative) {
  var UNSAFE_SUBSTITUTE = REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE ? "$" : "$0";
  return [
    // `String.prototype.replace` method
    // https://tc39.es/ecma262/#sec-string.prototype.replace
    function replace2(searchValue, replaceValue) {
      var O = requireObjectCoercible$2(this);
      var replacer = searchValue == void 0 ? void 0 : getMethod(searchValue, REPLACE);
      return replacer ? call(replacer, searchValue, O, replaceValue) : call(nativeReplace2, toString$2(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@replace
    function(string, replaceValue) {
      var rx = anObject(this);
      var S = toString$2(string);
      if (typeof replaceValue == "string" && stringIndexOf(replaceValue, UNSAFE_SUBSTITUTE) === -1 && stringIndexOf(replaceValue, "$<") === -1) {
        var res = maybeCallNative(nativeReplace2, rx, S, replaceValue);
        if (res.done) return res.value;
      }
      var functionalReplace = isCallable(replaceValue);
      if (!functionalReplace) replaceValue = toString$2(replaceValue);
      var global2 = rx.global;
      if (global2) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        push(results, result);
        if (!global2) break;
        var matchStr = toString$2(result[0]);
        if (matchStr === "") rx.lastIndex = advanceStringIndex(S, toLength$2(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = "";
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = toString$2(result[0]);
        var position = max(min$2(toIntegerOrInfinity(result.index), S.length), 0);
        var captures = [];
        for (var j = 1; j < result.length; j++) push(captures, maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = concat([matched], captures, position, S);
          if (namedCaptures !== void 0) push(replacerArgs, namedCaptures);
          var replacement2 = toString$2(apply(replaceValue, void 0, replacerArgs));
        } else {
          replacement2 = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += stringSlice$1(S, nextSourcePosition, position) + replacement2;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + stringSlice$1(S, nextSourcePosition);
    }
  ];
}, !REPLACE_SUPPORTS_NAMED_GROUPS || !REPLACE_KEEPS_$0 || REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE);
var isObject = isObject$8;
var classof = classofRaw$1;
var wellKnownSymbol$2 = wellKnownSymbol$f;
var MATCH$1 = wellKnownSymbol$2("match");
var isRegexp = function(it) {
  var isRegExp2;
  return isObject(it) && ((isRegExp2 = it[MATCH$1]) !== void 0 ? !!isRegExp2 : classof(it) == "RegExp");
};
var global$1 = global$G;
var isRegExp = isRegexp;
var TypeError$1 = global$1.TypeError;
var notARegexp = function(it) {
  if (isRegExp(it)) {
    throw TypeError$1("The method doesn't accept regular expressions");
  }
  return it;
};
var wellKnownSymbol$1 = wellKnownSymbol$f;
var MATCH = wellKnownSymbol$1("match");
var correctIsRegexpLogic = function(METHOD_NAME) {
  var regexp = /./;
  try {
    "/./"[METHOD_NAME](regexp);
  } catch (error1) {
    try {
      regexp[MATCH] = false;
      return "/./"[METHOD_NAME](regexp);
    } catch (error2) {
    }
  }
  return false;
};
var $$2 = _export;
var uncurryThis$1 = functionUncurryThis;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var toLength$1 = toLength$5;
var toString$1 = toString$6;
var notARegExp$1 = notARegexp;
var requireObjectCoercible$1 = requireObjectCoercible$7;
var correctIsRegExpLogic$1 = correctIsRegexpLogic;
var un$StartsWith = uncurryThis$1("".startsWith);
var stringSlice = uncurryThis$1("".slice);
var min$1 = Math.min;
var CORRECT_IS_REGEXP_LOGIC$1 = correctIsRegExpLogic$1("startsWith");
var MDN_POLYFILL_BUG$1 = !CORRECT_IS_REGEXP_LOGIC$1 && !!function() {
  var descriptor = getOwnPropertyDescriptor$1(String.prototype, "startsWith");
  return descriptor && !descriptor.writable;
}();
$$2({
  target: "String",
  proto: true,
  forced: !MDN_POLYFILL_BUG$1 && !CORRECT_IS_REGEXP_LOGIC$1
}, {
  startsWith: function startsWith(searchString) {
    var that = toString$1(requireObjectCoercible$1(this));
    notARegExp$1(searchString);
    var index = toLength$1(min$1(arguments.length > 1 ? arguments[1] : void 0, that.length));
    var search = toString$1(searchString);
    return un$StartsWith ? un$StartsWith(that, search, index) : stringSlice(that, index, index + search.length) === search;
  }
});
var wellKnownSymbol = wellKnownSymbol$f;
var create2 = objectCreate;
var definePropertyModule = objectDefineProperty;
var UNSCOPABLES = wellKnownSymbol("unscopables");
var ArrayPrototype = Array.prototype;
if (ArrayPrototype[UNSCOPABLES] == void 0) {
  definePropertyModule.f(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create2(null)
  });
}
var addToUnscopables$1 = function(key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};
var $$1 = _export;
var $includes = arrayIncludes.includes;
var addToUnscopables = addToUnscopables$1;
$$1({
  target: "Array",
  proto: true
}, {
  includes: function includes(el) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : void 0);
  }
});
addToUnscopables("includes");
var $ = _export;
var uncurryThis = functionUncurryThis;
var getOwnPropertyDescriptor2 = objectGetOwnPropertyDescriptor.f;
var toLength = toLength$5;
var toString2 = toString$6;
var notARegExp = notARegexp;
var requireObjectCoercible = requireObjectCoercible$7;
var correctIsRegExpLogic = correctIsRegexpLogic;
var un$EndsWith = uncurryThis("".endsWith);
var slice = uncurryThis("".slice);
var min = Math.min;
var CORRECT_IS_REGEXP_LOGIC = correctIsRegExpLogic("endsWith");
var MDN_POLYFILL_BUG = !CORRECT_IS_REGEXP_LOGIC && !!function() {
  var descriptor = getOwnPropertyDescriptor2(String.prototype, "endsWith");
  return descriptor && !descriptor.writable;
}();
$({
  target: "String",
  proto: true,
  forced: !MDN_POLYFILL_BUG && !CORRECT_IS_REGEXP_LOGIC
}, {
  endsWith: function endsWith(searchString) {
    var that = toString2(requireObjectCoercible(this));
    notARegExp(searchString);
    var endPosition = arguments.length > 1 ? arguments[1] : void 0;
    var len = that.length;
    var end = endPosition === void 0 ? len : min(toLength(endPosition), len);
    var search = toString2(searchString);
    return un$EndsWith ? un$EndsWith(that, search, end) : slice(that, end - search.length, end) === search;
  }
});
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve2) {
      resolve2(value);
    });
  }
  return new (P || (P = Promise))(function(resolve2, reject2) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject2(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject2(e);
      }
    }
    function step(result) {
      result.done ? resolve2(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
var fileToArray = (url) => {
  return new Promise((resolve2, reject2) => {
    try {
      const request = new XMLHttpRequest();
      request.open("GET", url, true);
      request.responseType = "blob";
      request.onload = () => {
        const reader = new FileReader();
        reader.readAsArrayBuffer(request.response);
        reader.onloadend = () => {
          resolve2(reader.result);
        };
      };
      request.send();
    } catch (_a) {
      reject2(`error while retrieving file ${url}.`);
    }
  });
};
var timeout = (ms) => {
  return new Promise((resolve2) => setTimeout(resolve2, ms));
};
var reloadIFrame = (iframe) => {
  if (iframe) {
    const url = iframe.src;
    iframe.src = "about:blank";
    setTimeout(() => {
      if (iframe) {
        iframe.src = url;
      }
    }, 100);
  }
};
var handleFileUpload = (fileInput) => {
  return new Promise((resolve2, reject2) => {
    if (fileInput.target.files && fileInput.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        resolve2(e.target.result);
      };
      reader.readAsDataURL(fileInput.target.files[0]);
    } else {
      reject2("no files selected");
    }
  });
};
var getbaseUrl = () => {
  const pathArray = window.location.href.split("/");
  const protocol = pathArray[0];
  const host = pathArray[2];
  return protocol + "//" + host;
};
var getLocation = (href) => {
  const match2 = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match2 && {
    href,
    protocol: match2[1],
    host: match2[2],
    hostname: match2[3],
    port: match2[4],
    pathname: match2[5],
    search: match2[6],
    hash: match2[7]
  };
};
var getDocxToHtml = (url) => __awaiter(void 0, void 0, void 0, function* () {
  if (!mammoth) {
    console.error("Please install mammoth and make sure mammoth.browser.min.js is loaded.");
  }
  const arrayBuffer = yield fileToArray(url);
  const resultObject = yield mammoth.convertToHtml({
    arrayBuffer
  });
  return resultObject.value;
});
var googleCheckSubscription = () => {
  let subscription = null;
  let checkCount = 0;
  return {
    subscribe: (iframe, interval = 3e3, maxChecks = 5) => {
      if (!iframeIsLoaded(iframe)) {
        subscription = setInterval(() => {
          checkCount++;
          if (checkCount >= maxChecks) {
            clearInterval(subscription);
          }
          reloadIFrame(iframe);
        }, interval);
        return subscription;
      } else {
        if (subscription) {
          clearInterval(subscription);
        }
      }
    },
    unsubscribe: () => {
      if (subscription) {
        clearInterval(subscription);
      }
    }
  };
};
var iframeIsLoaded = (iframe) => {
  var _a;
  let isLoaded = false;
  try {
    if (!internetExplorer()) {
      isLoaded = !(iframe === null || iframe === void 0 ? void 0 : iframe.contentDocument);
    } else {
      isLoaded = !((_a = iframe === null || iframe === void 0 ? void 0 : iframe.contentWindow) === null || _a === void 0 ? void 0 : _a.document);
    }
  } catch (_b) {
  }
  return isLoaded;
};
var internetExplorer = () => /MSIE (\d+\.\d+);/.test(navigator.userAgent) || navigator.userAgent.indexOf("Trident/") > -1;
var getViewerDetails = (url, configuredViewer = "google", queryParams = "", viewerUrl = "") => {
  switch (configuredViewer) {
    case "google":
      viewerUrl = `https://docs.google.com/gview?url=%URL%&embedded=true`;
      break;
    case "office": {
      viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=%URL%`;
      break;
    }
    case "pdf": {
      viewerUrl = "";
      break;
    }
  }
  const externalViewer = configuredViewer === "google" || configuredViewer === "office" || configuredViewer === "url";
  const u = (url === null || url === void 0 ? void 0 : url.indexOf("/")) ? encodeURIComponent(url) : url;
  let fullUrl = viewerUrl ? viewerUrl.replace("%URL%", u) : url;
  if (queryParams && externalViewer && configuredViewer !== "url") {
    const start = queryParams.startsWith("&") ? "" : "&";
    fullUrl = `${fullUrl}${start}${queryParams}`;
  }
  return {
    url: fullUrl,
    externalViewer
  };
};
var replaceLocalUrl = (url, overrideLocalhost) => {
  const loc = getLocation(url);
  const locReplace = getLocation(overrideLocalhost);
  if (loc && locReplace) {
    return url.replace(loc.port ? `${loc.hostname}:${loc.port}` : loc.hostname, locReplace.port ? `${locReplace.hostname}:${locReplace.port}` : locReplace.hostname);
  }
  return url;
};
var getBlobFromUrl = (url) => {
  return new Promise((resolve2, reject2) => {
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.responseType = "blob";
    request.onload = () => {
      resolve2(request.response);
    };
    request.onerror = reject2;
    request.send();
  });
};
var uploadToCloud = (fileUrl, api) => new Promise((resolve2, reject2) => {
  getBlobFromUrl(fileUrl).then((blob) => {
    var _a, _b;
    const loc = getLocation(fileUrl);
    const name = (loc === null || loc === void 0 ? void 0 : loc.pathname) ? (_a = loc === null || loc === void 0 ? void 0 : loc.pathname) === null || _a === void 0 ? void 0 : _a.split("/")[((_b = loc === null || loc === void 0 ? void 0 : loc.pathname) === null || _b === void 0 ? void 0 : _b.split("/").length) - 1] : "";
    const formData = new FormData();
    const request = new XMLHttpRequest();
    formData.append("file", blob, name);
    request.onreadystatechange = (e) => {
      if (request.readyState === XMLHttpRequest.DONE) {
        if (request.status === 200) {
          resolve2(request.responseText);
        } else {
          reject2(request.responseText);
        }
      }
    };
    request.onerror = reject2;
    request.open("post", api, true);
    request.send(formData);
  });
});
var isLocalFile = (file) => {
  const loc = getLocation(file);
  const hostname = (loc === null || loc === void 0 ? void 0 : loc.hostname) || "";
  return ["localhost", "127.0.0.1", "", "::1"].includes(hostname) || hostname.startsWith("192.168.") || hostname.startsWith("10.0.") || hostname.endsWith(".local");
};
var defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  loaded: () => {
  },
  disableContent: "none",
  googleCheckContentLoaded: true,
  googleCheckInterval: 3e3,
  queryParams: "",
  url: "",
  viewer: "google",
  viewerUrl: ""
};

// node_modules/ngx-doc-viewer/fesm2020/ngx-doc-viewer.mjs
var _c0 = ["iframe"];
function NgxDocViewerComponent_ng_container_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("innerHtml", ctx_r0.docHtml, ɵɵsanitizeHtml);
  }
}
function NgxDocViewerComponent_ng_container_0_object_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "object", 5)(1, "p");
    ɵɵtext(2, " Your browser does not support PDFs. ");
    ɵɵelementStart(3, "a", 6);
    ɵɵtext(4, "Download the PDF");
    ɵɵelementEnd();
    ɵɵtext(5, ". ");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("data", ctx_r0.fullUrl, ɵɵsanitizeResourceUrl);
    ɵɵadvance(3);
    ɵɵproperty("href", ctx_r0.fullUrl, ɵɵsanitizeUrl);
  }
}
function NgxDocViewerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgxDocViewerComponent_ng_container_0_div_1_Template, 1, 1, "div", 2)(2, NgxDocViewerComponent_ng_container_0_object_2_Template, 6, 2, "object", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.configuredViewer !== "pdf");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fullUrl && ctx_r0.configuredViewer === "pdf");
  }
}
function NgxDocViewerComponent_ng_container_1_iframe_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "iframe", 9, 0);
    ɵɵlistener("load", function NgxDocViewerComponent_ng_container_1_iframe_1_Template_iframe_load_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.iframeLoaded());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r0.fullUrl, ɵɵsanitizeResourceUrl);
  }
}
function NgxDocViewerComponent_ng_container_1_div_2_iframe_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "iframe", 12, 0);
    ɵɵlistener("load", function NgxDocViewerComponent_ng_container_1_div_2_iframe_2_Template_iframe_load_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r0.iframeLoaded());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(3);
    ɵɵproperty("src", ctx_r0.fullUrl, ɵɵsanitizeResourceUrl);
  }
}
function NgxDocViewerComponent_ng_container_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelement(1, "div");
    ɵɵtemplate(2, NgxDocViewerComponent_ng_container_1_div_2_iframe_2_Template, 2, 1, "iframe", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵstyleProp("background-color", ctx_r0.disableContent === "popout-hide" ? "#fff" : "transparent");
    ɵɵclassProp("overlay-full", ctx_r0.disableContent === "all")("overlay-popout-google", ctx_r0.configuredViewer === "google" && (ctx_r0.disableContent === "popout" || ctx_r0.disableContent === "popout-hide"))("overlay-popout-office", ctx_r0.configuredViewer === "office" && (ctx_r0.disableContent === "popout" || ctx_r0.disableContent === "popout-hide"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fullUrl);
  }
}
function NgxDocViewerComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, NgxDocViewerComponent_ng_container_1_iframe_1_Template, 2, 1, "iframe", 7)(2, NgxDocViewerComponent_ng_container_1_div_2_Template, 3, 9, "div", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.fullUrl && ctx_r0.disableContent === "none");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r0.disableContent !== "none");
  }
}
var NgxDocViewerComponent = class {
  constructor(domSanitizer, ngZone) {
    this.domSanitizer = domSanitizer;
    this.ngZone = ngZone;
    this.loaded = new EventEmitter();
    this.url = "";
    this.queryParams = "";
    this.viewerUrl = "";
    this.googleCheckInterval = 3e3;
    this.googleMaxChecks = 5;
    this.disableContent = "none";
    this.googleCheckContentLoaded = true;
    this.viewer = "google";
    this.overrideLocalhost = "";
    this.iframes = void 0;
    this.fullUrl = void 0;
    this.externalViewer = false;
    this.docHtml = "";
    this.configuredViewer = "google";
    this.checkIFrameSubscription = void 0;
    this.shouldCheckIframe = false;
  }
  ngAfterViewInit() {
    if (this.shouldCheckIframe) {
      const iframe = this.iframes?.first?.nativeElement;
      if (iframe) {
        this.shouldCheckIframe = false;
        this.reloadIframe(iframe);
      }
    }
  }
  ngOnDestroy() {
    if (this.checkIFrameSubscription) {
      this.checkIFrameSubscription.unsubscribe();
    }
  }
  ngOnChanges(changes) {
    return __async(this, null, function* () {
      if (changes && changes["viewer"] && (changes["viewer"].isFirstChange || changes["viewer"].currentValue !== changes["viewer"].previousValue)) {
        if (this.viewer !== "google" && this.viewer !== "office" && this.viewer !== "mammoth" && this.viewer !== "pdf" && this.viewer !== "url") {
          console.error(`Unsupported viewer: '${this.viewer}'. Supported viewers: google, office, mammoth and pdf`);
        }
        this.configuredViewer = this.viewer;
      }
      if (changes["url"] && changes["url"].currentValue !== changes["url"].previousValue || changes["viewer"] && changes["viewer"].currentValue !== changes["viewer"].previousValue || changes["viewerUrl"] && changes["viewerUrl"].currentValue !== changes["viewerUrl"].previousValue) {
        let viewerDetails = getViewerDetails(this.url, this.configuredViewer, this.queryParams, this.viewerUrl);
        this.externalViewer = viewerDetails.externalViewer;
        if (viewerDetails.externalViewer && this.overrideLocalhost && isLocalFile(this.url)) {
          const newUrl = replaceLocalUrl(this.url, this.overrideLocalhost);
          viewerDetails = getViewerDetails(newUrl, this.configuredViewer, this.queryParams, this.viewerUrl);
        }
        this.docHtml = "";
        if (this.checkIFrameSubscription) {
          this.checkIFrameSubscription.unsubscribe();
        }
        if (!this.url) {
          this.fullUrl = void 0;
        } else if (viewerDetails.externalViewer || this.configuredViewer === "url" || this.configuredViewer === "pdf") {
          this.fullUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(viewerDetails.url);
          if (this.configuredViewer === "google" && this.googleCheckContentLoaded) {
            this.ngZone.runOutsideAngular(() => {
              const iframe = this.iframes?.first?.nativeElement;
              if (iframe) {
                this.reloadIframe(iframe);
              } else {
                this.shouldCheckIframe = true;
              }
            });
          }
        } else if (this.configuredViewer === "mammoth") {
          this.docHtml = yield getDocxToHtml(this.url);
        }
      }
    });
  }
  reloadIframe(iframe) {
    this.checkIFrameSubscription = googleCheckSubscription();
    this.checkIFrameSubscription.subscribe(iframe, this.googleCheckInterval, this.googleMaxChecks);
  }
  iframeLoaded() {
    const iframe = this.iframes?.first?.nativeElement;
    if (iframe && iframeIsLoaded(iframe)) {
      this.loaded.emit(void 0);
      if (this.checkIFrameSubscription) {
        this.checkIFrameSubscription.unsubscribe();
      }
    }
  }
};
NgxDocViewerComponent.ɵfac = function NgxDocViewerComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDocViewerComponent)(ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(NgZone));
};
NgxDocViewerComponent.ɵcmp = ɵɵdefineComponent({
  type: NgxDocViewerComponent,
  selectors: [["ngx-doc-viewer"]],
  viewQuery: function NgxDocViewerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.iframes = _t);
    }
  },
  inputs: {
    url: "url",
    queryParams: "queryParams",
    viewerUrl: "viewerUrl",
    googleCheckInterval: "googleCheckInterval",
    googleMaxChecks: "googleMaxChecks",
    disableContent: "disableContent",
    googleCheckContentLoaded: "googleCheckContentLoaded",
    viewer: "viewer",
    overrideLocalhost: "overrideLocalhost"
  },
  outputs: {
    loaded: "loaded"
  },
  standalone: false,
  features: [ɵɵNgOnChangesFeature],
  decls: 2,
  vars: 2,
  consts: [["iframe", ""], [4, "ngIf"], [3, "innerHtml", 4, "ngIf"], ["type", "application/pdf", "width", "100%", "height", "100%", 3, "data", 4, "ngIf"], [3, "innerHtml"], ["type", "application/pdf", "width", "100%", "height", "100%", 3, "data"], [3, "href"], ["id", "iframe-doc-viewer", "frameBorder", "0", 3, "src", "load", 4, "ngIf"], ["class", "container", 4, "ngIf"], ["id", "iframe-doc-viewer", "frameBorder", "0", 3, "load", "src"], [1, "container"], ["id", "iframe", "frameBorder", "0", 3, "src", "load", 4, "ngIf"], ["id", "iframe", "frameBorder", "0", 3, "load", "src"]],
  template: function NgxDocViewerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, NgxDocViewerComponent_ng_container_0_Template, 3, 2, "ng-container", 1)(1, NgxDocViewerComponent_ng_container_1_Template, 3, 2, "ng-container", 1);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", !ctx.externalViewer);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.externalViewer);
    }
  },
  dependencies: [NgIf],
  styles: ["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{width:100%;height:100%;position:relative}.overlay-popout-google[_ngcontent-%COMP%]{width:40px;height:40px;right:26px;top:11.5px;position:absolute;z-index:1000}.overlay-popout-office[_ngcontent-%COMP%]{width:100px;height:20px;right:0;bottom:0;position:absolute;z-index:1000}.overlay-full[_ngcontent-%COMP%]{width:100%;height:100%;right:0;top:0;position:absolute;z-index:1000}iframe[_ngcontent-%COMP%]{width:100%;height:100%}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDocViewerComponent, [{
    type: Component,
    args: [{
      selector: "ngx-doc-viewer",
      template: `<ng-container *ngIf="!externalViewer">
  <div *ngIf="configuredViewer !== 'pdf'" [innerHtml]="docHtml"></div>
  <object
    *ngIf="fullUrl && configuredViewer === 'pdf'"
    [data]="fullUrl"
    type="application/pdf"
    width="100%"
    height="100%"
  >
    <p>
      Your browser does not support PDFs.
      <a [href]="fullUrl">Download the PDF</a>.
    </p>
  </object>
</ng-container>
<ng-container *ngIf="externalViewer">
  <iframe
    (load)="iframeLoaded()"
    *ngIf="fullUrl && disableContent === 'none'"
    #iframe
    id="iframe-doc-viewer"
    frameBorder="0"
    [src]="fullUrl"
  ></iframe>
  <div class="container" *ngIf="disableContent !== 'none'">
    <div
      [class.overlay-full]="disableContent === 'all'"
      [class.overlay-popout-google]="
        configuredViewer === 'google' &&
        (disableContent === 'popout' || disableContent === 'popout-hide')
      "
      [class.overlay-popout-office]="
        configuredViewer === 'office' &&
        (disableContent === 'popout' || disableContent === 'popout-hide')
      "
      [style.background-color]="
        disableContent === 'popout-hide' ? '#fff' : 'transparent'
      "
    ></div>
    <iframe
      (load)="iframeLoaded()"
      *ngIf="fullUrl"
      #iframe
      id="iframe"
      frameBorder="0"
      [src]="fullUrl"
    ></iframe>
  </div>
</ng-container>
`,
      styles: [":host{display:block}.container{width:100%;height:100%;position:relative}.overlay-popout-google{width:40px;height:40px;right:26px;top:11.5px;position:absolute;z-index:1000}.overlay-popout-office{width:100px;height:20px;right:0;bottom:0;position:absolute;z-index:1000}.overlay-full{width:100%;height:100%;right:0;top:0;position:absolute;z-index:1000}iframe{width:100%;height:100%}\n"]
    }]
  }], function() {
    return [{
      type: DomSanitizer
    }, {
      type: NgZone
    }];
  }, {
    loaded: [{
      type: Output
    }],
    url: [{
      type: Input
    }],
    queryParams: [{
      type: Input
    }],
    viewerUrl: [{
      type: Input
    }],
    googleCheckInterval: [{
      type: Input
    }],
    googleMaxChecks: [{
      type: Input
    }],
    disableContent: [{
      type: Input
    }],
    googleCheckContentLoaded: [{
      type: Input
    }],
    viewer: [{
      type: Input
    }],
    overrideLocalhost: [{
      type: Input
    }],
    iframes: [{
      type: ViewChildren,
      args: ["iframe"]
    }]
  });
})();
var NgxDocViewerModule = class {
};
NgxDocViewerModule.ɵfac = function NgxDocViewerModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || NgxDocViewerModule)();
};
NgxDocViewerModule.ɵmod = ɵɵdefineNgModule({
  type: NgxDocViewerModule,
  declarations: [NgxDocViewerComponent],
  imports: [CommonModule],
  exports: [NgxDocViewerComponent]
});
NgxDocViewerModule.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxDocViewerModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      declarations: [NgxDocViewerComponent],
      exports: [NgxDocViewerComponent]
    }]
  }], null, null);
})();
export {
  NgxDocViewerComponent,
  NgxDocViewerModule,
  defaultProps,
  fileToArray,
  getDocxToHtml,
  getLocation,
  getViewerDetails,
  getbaseUrl,
  googleCheckSubscription,
  handleFileUpload,
  iframeIsLoaded,
  isLocalFile,
  replaceLocalUrl,
  timeout,
  uploadToCloud
};
//# sourceMappingURL=ngx-doc-viewer.js.map
