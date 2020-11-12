'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var clipboard_min = createCommonjsModule(function (module, exports) {
  /*!
   * clipboard.js v2.0.6
   * https://clipboardjs.com/
   * 
   * Licensed MIT © Zeno Rocha
   */
  !function (t, e) {
     module.exports = e() ;
  }(commonjsGlobal, function () {
    return o = {}, r.m = n = [function (t, e) {
      t.exports = function (t) {
        var e;
        if ("SELECT" === t.nodeName) t.focus(), e = t.value;else if ("INPUT" === t.nodeName || "TEXTAREA" === t.nodeName) {
          var n = t.hasAttribute("readonly");
          n || t.setAttribute("readonly", ""), t.select(), t.setSelectionRange(0, t.value.length), n || t.removeAttribute("readonly"), e = t.value;
        } else {
          t.hasAttribute("contenteditable") && t.focus();
          var o = window.getSelection(),
              r = document.createRange();
          r.selectNodeContents(t), o.removeAllRanges(), o.addRange(r), e = o.toString();
        }
        return e;
      };
    }, function (t, e) {
      function n() {}

      n.prototype = {
        on: function (t, e, n) {
          var o = this.e || (this.e = {});
          return (o[t] || (o[t] = [])).push({
            fn: e,
            ctx: n
          }), this;
        },
        once: function (t, e, n) {
          var o = this;

          function r() {
            o.off(t, r), e.apply(n, arguments);
          }

          return r._ = e, this.on(t, r, n);
        },
        emit: function (t) {
          for (var e = [].slice.call(arguments, 1), n = ((this.e || (this.e = {}))[t] || []).slice(), o = 0, r = n.length; o < r; o++) n[o].fn.apply(n[o].ctx, e);

          return this;
        },
        off: function (t, e) {
          var n = this.e || (this.e = {}),
              o = n[t],
              r = [];
          if (o && e) for (var i = 0, a = o.length; i < a; i++) o[i].fn !== e && o[i].fn._ !== e && r.push(o[i]);
          return r.length ? n[t] = r : delete n[t], this;
        }
      }, t.exports = n, t.exports.TinyEmitter = n;
    }, function (t, e, n) {
      var d = n(3),
          h = n(4);

      t.exports = function (t, e, n) {
        if (!t && !e && !n) throw new Error("Missing required arguments");
        if (!d.string(e)) throw new TypeError("Second argument must be a String");
        if (!d.fn(n)) throw new TypeError("Third argument must be a Function");
        if (d.node(t)) return s = e, f = n, (u = t).addEventListener(s, f), {
          destroy: function () {
            u.removeEventListener(s, f);
          }
        };
        if (d.nodeList(t)) return a = t, c = e, l = n, Array.prototype.forEach.call(a, function (t) {
          t.addEventListener(c, l);
        }), {
          destroy: function () {
            Array.prototype.forEach.call(a, function (t) {
              t.removeEventListener(c, l);
            });
          }
        };
        if (d.string(t)) return o = t, r = e, i = n, h(document.body, o, r, i);
        throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList");
        var o, r, i, a, c, l, u, s, f;
      };
    }, function (t, n) {
      n.node = function (t) {
        return void 0 !== t && t instanceof HTMLElement && 1 === t.nodeType;
      }, n.nodeList = function (t) {
        var e = Object.prototype.toString.call(t);
        return void 0 !== t && ("[object NodeList]" === e || "[object HTMLCollection]" === e) && "length" in t && (0 === t.length || n.node(t[0]));
      }, n.string = function (t) {
        return "string" == typeof t || t instanceof String;
      }, n.fn = function (t) {
        return "[object Function]" === Object.prototype.toString.call(t);
      };
    }, function (t, e, n) {
      var a = n(5);

      function i(t, e, n, o, r) {
        var i = function (e, n, t, o) {
          return function (t) {
            t.delegateTarget = a(t.target, n), t.delegateTarget && o.call(e, t);
          };
        }.apply(this, arguments);

        return t.addEventListener(n, i, r), {
          destroy: function () {
            t.removeEventListener(n, i, r);
          }
        };
      }

      t.exports = function (t, e, n, o, r) {
        return "function" == typeof t.addEventListener ? i.apply(null, arguments) : "function" == typeof n ? i.bind(null, document).apply(null, arguments) : ("string" == typeof t && (t = document.querySelectorAll(t)), Array.prototype.map.call(t, function (t) {
          return i(t, e, n, o, r);
        }));
      };
    }, function (t, e) {
      if ("undefined" != typeof Element && !Element.prototype.matches) {
        var n = Element.prototype;
        n.matches = n.matchesSelector || n.mozMatchesSelector || n.msMatchesSelector || n.oMatchesSelector || n.webkitMatchesSelector;
      }

      t.exports = function (t, e) {
        for (; t && 9 !== t.nodeType;) {
          if ("function" == typeof t.matches && t.matches(e)) return t;
          t = t.parentNode;
        }
      };
    }, function (t, e, n) {

      n.r(e);
      var o = n(0),
          r = n.n(o),
          i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      };

      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      function c(t) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, c), this.resolveOptions(t), this.initSelection();
      }

      var l = (function (t, e, n) {
        return e && a(t.prototype, e), n && a(t, n), t;
      }(c, [{
        key: "resolveOptions",
        value: function (t) {
          var e = 0 < arguments.length && void 0 !== t ? t : {};
          this.action = e.action, this.container = e.container, this.emitter = e.emitter, this.target = e.target, this.text = e.text, this.trigger = e.trigger, this.selectedText = "";
        }
      }, {
        key: "initSelection",
        value: function () {
          this.text ? this.selectFake() : this.target && this.selectTarget();
        }
      }, {
        key: "selectFake",
        value: function () {
          var t = this,
              e = "rtl" == document.documentElement.getAttribute("dir");
          this.removeFake(), this.fakeHandlerCallback = function () {
            return t.removeFake();
          }, this.fakeHandler = this.container.addEventListener("click", this.fakeHandlerCallback) || !0, this.fakeElem = document.createElement("textarea"), this.fakeElem.style.fontSize = "12pt", this.fakeElem.style.border = "0", this.fakeElem.style.padding = "0", this.fakeElem.style.margin = "0", this.fakeElem.style.position = "absolute", this.fakeElem.style[e ? "right" : "left"] = "-9999px";
          var n = window.pageYOffset || document.documentElement.scrollTop;
          this.fakeElem.style.top = n + "px", this.fakeElem.setAttribute("readonly", ""), this.fakeElem.value = this.text, this.container.appendChild(this.fakeElem), this.selectedText = r()(this.fakeElem), this.copyText();
        }
      }, {
        key: "removeFake",
        value: function () {
          this.fakeHandler && (this.container.removeEventListener("click", this.fakeHandlerCallback), this.fakeHandler = null, this.fakeHandlerCallback = null), this.fakeElem && (this.container.removeChild(this.fakeElem), this.fakeElem = null);
        }
      }, {
        key: "selectTarget",
        value: function () {
          this.selectedText = r()(this.target), this.copyText();
        }
      }, {
        key: "copyText",
        value: function () {
          var e = void 0;

          try {
            e = document.execCommand(this.action);
          } catch (t) {
            e = !1;
          }

          this.handleResult(e);
        }
      }, {
        key: "handleResult",
        value: function (t) {
          this.emitter.emit(t ? "success" : "error", {
            action: this.action,
            text: this.selectedText,
            trigger: this.trigger,
            clearSelection: this.clearSelection.bind(this)
          });
        }
      }, {
        key: "clearSelection",
        value: function () {
          this.trigger && this.trigger.focus(), document.activeElement.blur(), window.getSelection().removeAllRanges();
        }
      }, {
        key: "destroy",
        value: function () {
          this.removeFake();
        }
      }, {
        key: "action",
        set: function (t) {
          var e = 0 < arguments.length && void 0 !== t ? t : "copy";
          if (this._action = e, "copy" !== this._action && "cut" !== this._action) throw new Error('Invalid "action" value, use either "copy" or "cut"');
        },
        get: function () {
          return this._action;
        }
      }, {
        key: "target",
        set: function (t) {
          if (void 0 !== t) {
            if (!t || "object" !== (void 0 === t ? "undefined" : i(t)) || 1 !== t.nodeType) throw new Error('Invalid "target" value, use a valid Element');
            if ("copy" === this.action && t.hasAttribute("disabled")) throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');
            if ("cut" === this.action && (t.hasAttribute("readonly") || t.hasAttribute("disabled"))) throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');
            this._target = t;
          }
        },
        get: function () {
          return this._target;
        }
      }]), c),
          u = n(1),
          s = n.n(u),
          f = n(2),
          d = n.n(f),
          h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
        return typeof t;
      } : function (t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
      },
          p = function (t, e, n) {
        return e && y(t.prototype, e), n && y(t, n), t;
      };

      function y(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
        }
      }

      var m = (function (t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
      }(v, s.a), p(v, [{
        key: "resolveOptions",
        value: function (t) {
          var e = 0 < arguments.length && void 0 !== t ? t : {};
          this.action = "function" == typeof e.action ? e.action : this.defaultAction, this.target = "function" == typeof e.target ? e.target : this.defaultTarget, this.text = "function" == typeof e.text ? e.text : this.defaultText, this.container = "object" === h(e.container) ? e.container : document.body;
        }
      }, {
        key: "listenClick",
        value: function (t) {
          var e = this;
          this.listener = d()(t, "click", function (t) {
            return e.onClick(t);
          });
        }
      }, {
        key: "onClick",
        value: function (t) {
          var e = t.delegateTarget || t.currentTarget;
          this.clipboardAction && (this.clipboardAction = null), this.clipboardAction = new l({
            action: this.action(e),
            target: this.target(e),
            text: this.text(e),
            container: this.container,
            trigger: e,
            emitter: this
          });
        }
      }, {
        key: "defaultAction",
        value: function (t) {
          return b("action", t);
        }
      }, {
        key: "defaultTarget",
        value: function (t) {
          var e = b("target", t);
          if (e) return document.querySelector(e);
        }
      }, {
        key: "defaultText",
        value: function (t) {
          return b("text", t);
        }
      }, {
        key: "destroy",
        value: function () {
          this.listener.destroy(), this.clipboardAction && (this.clipboardAction.destroy(), this.clipboardAction = null);
        }
      }], [{
        key: "isSupported",
        value: function (t) {
          var e = 0 < arguments.length && void 0 !== t ? t : ["copy", "cut"],
              n = "string" == typeof e ? [e] : e,
              o = !!document.queryCommandSupported;
          return n.forEach(function (t) {
            o = o && !!document.queryCommandSupported(t);
          }), o;
        }
      }]), v);

      function v(t, e) {
        !function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
        }(this, v);

        var n = function (t, e) {
          if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return !e || "object" != typeof e && "function" != typeof e ? t : e;
        }(this, (v.__proto__ || Object.getPrototypeOf(v)).call(this));

        return n.resolveOptions(e), n.listenClick(t), n;
      }

      function b(t, e) {
        var n = "data-clipboard-" + t;
        if (e.hasAttribute(n)) return e.getAttribute(n);
      }

      e.default = m;
    }], r.c = o, r.d = function (t, e, n) {
      r.o(t, e) || Object.defineProperty(t, e, {
        enumerable: !0,
        get: n
      });
    }, r.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(t, "__esModule", {
        value: !0
      });
    }, r.t = function (e, t) {
      if (1 & t && (e = r(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (r.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) r.d(n, o, function (t) {
        return e[t];
      }.bind(null, o));
      return n;
    }, r.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return r.d(e, "a", e), e;
    }, r.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, r.p = "", r(r.s = 6).default;

    function r(t) {
      if (o[t]) return o[t].exports;
      var e = o[t] = {
        i: t,
        l: !1,
        exports: {}
      };
      return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports;
    }

    var n, o;
  });
});
var Clipboard = unwrapExports(clipboard_min);
var clipboard_min_1 = clipboard_min.ClipboardJS;

var VueClipboardConfig = {
  autoSetContainer: false,
  appendToBody: true
};
function copyText(_ref) {
  var _text = _ref.text,
      container = _ref.container,
      callback = _ref.callback;
  var fakeElement = document.createElement('button');
  var clipboard = new Clipboard(fakeElement, {
    text: function text() {
      return _text;
    },
    action: function action() {
      return 'copy';
    },
    container: _typeof(container) === 'object' ? container : document.body
  });
  clipboard.on('success', function (e) {
    clipboard.destroy();
    callback(undefined, e);
  });
  clipboard.on('error', function (e) {
    clipboard.destroy();
    callback(e, undefined);
  });
  if (VueClipboardConfig.appendToBody) document.body.appendChild(fakeElement);
  fakeElement.click();
  if (VueClipboardConfig.appendToBody) document.body.removeChild(fakeElement);
}
function index (app, vueClipboardConfig) {
  VueClipboardConfig = vueClipboardConfig;
  app.config.globalProperties.$copyText = copyText;
  app.directive('clipboard', {
    mounted: function mounted(el, binding) {
      if (binding.arg === 'success') {
        el._vClipboard_success = binding.value;
      } else if (binding.arg === 'error') {
        el._vClipboard_error = binding.value;
      } else {
        var clipboard = new Clipboard(el, {
          text: function text() {
            return binding.value;
          },
          action: function action() {
            return binding.arg === 'cut' ? 'cut' : 'copy';
          },
          container: vueClipboardConfig.autoSetContainer ? el : undefined
        });
        clipboard.on('success', function (e) {
          var callback = el._vClipboard_success;
          callback && callback(e);
        });
        clipboard.on('error', function (e) {
          var callback = el._vClipboard_error;
          callback && callback(e);
        });
        el._vClipboard = clipboard;
      }
    },
    updated: function updated(el, binding) {
      if (binding.arg === 'success') {
        el._vClipboard_success = binding.value;
      } else if (binding.arg === 'error') {
        el._vClipboard_error = binding.value;
      } else {
        el._vClipboard.text = function () {
          return binding.value;
        };

        el._vClipboard.action = function () {
          return binding.arg === 'cut' ? 'cut' : 'copy';
        };
      }
    },
    unmounted: function unmounted(el, binding) {
      if (binding.arg === 'success') {
        delete el._vClipboard_success;
      } else if (binding.arg === 'error') {
        delete el._vClipboard_error;
      } else {
        el._vClipboard.destroy();

        delete el._vClipboard;
      }
    }
  });
}

exports.copyText = copyText;
exports.default = index;
