(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) i(r);
  new MutationObserver((r) => {
    for (const s of r)
      if (s.type === 'childList')
        for (const a of s.addedNodes) a.tagName === 'LINK' && a.rel === 'modulepreload' && i(a);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const s = {};
    return (
      r.integrity && (s.integrity = r.integrity),
      r.referrerPolicy && (s.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : r.crossOrigin === 'anonymous'
        ? (s.credentials = 'omit')
        : (s.credentials = 'same-origin'),
      s
    );
  }
  function i(r) {
    if (r.ep) return;
    r.ep = !0;
    const s = n(r);
    fetch(r.href, s);
  }
})();
var jp = { exports: {} },
  xl = {},
  Xp = { exports: {} },
  He = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ta = Symbol.for('react.element'),
  X0 = Symbol.for('react.portal'),
  q0 = Symbol.for('react.fragment'),
  Y0 = Symbol.for('react.strict_mode'),
  $0 = Symbol.for('react.profiler'),
  K0 = Symbol.for('react.provider'),
  Z0 = Symbol.for('react.context'),
  Q0 = Symbol.for('react.forward_ref'),
  J0 = Symbol.for('react.suspense'),
  ex = Symbol.for('react.memo'),
  tx = Symbol.for('react.lazy'),
  lf = Symbol.iterator;
function nx(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (lf && t[lf]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var qp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Yp = Object.assign,
  $p = {};
function As(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = $p), (this.updater = n || qp);
}
As.prototype.isReactComponent = {};
As.prototype.setState = function (t, e) {
  if (typeof t != 'object' && typeof t != 'function' && t != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    );
  this.updater.enqueueSetState(this, t, e, 'setState');
};
As.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, 'forceUpdate');
};
function Kp() {}
Kp.prototype = As.prototype;
function td(t, e, n) {
  (this.props = t), (this.context = e), (this.refs = $p), (this.updater = n || qp);
}
var nd = (td.prototype = new Kp());
nd.constructor = td;
Yp(nd, As.prototype);
nd.isPureReactComponent = !0;
var cf = Array.isArray,
  Zp = Object.prototype.hasOwnProperty,
  id = { current: null },
  Qp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Jp(t, e, n) {
  var i,
    r = {},
    s = null,
    a = null;
  if (e != null)
    for (i in (e.ref !== void 0 && (a = e.ref), e.key !== void 0 && (s = '' + e.key), e))
      Zp.call(e, i) && !Qp.hasOwnProperty(i) && (r[i] = e[i]);
  var o = arguments.length - 2;
  if (o === 1) r.children = n;
  else if (1 < o) {
    for (var l = Array(o), c = 0; c < o; c++) l[c] = arguments[c + 2];
    r.children = l;
  }
  if (t && t.defaultProps) for (i in ((o = t.defaultProps), o)) r[i] === void 0 && (r[i] = o[i]);
  return { $$typeof: Ta, type: t, key: s, ref: a, props: r, _owner: id.current };
}
function ix(t, e) {
  return { $$typeof: Ta, type: t.type, key: e, ref: t.ref, props: t.props, _owner: t._owner };
}
function rd(t) {
  return typeof t == 'object' && t !== null && t.$$typeof === Ta;
}
function rx(t) {
  var e = { '=': '=0', ':': '=2' };
  return (
    '$' +
    t.replace(/[=:]/g, function (n) {
      return e[n];
    })
  );
}
var uf = /\/+/g;
function Vl(t, e) {
  return typeof t == 'object' && t !== null && t.key != null ? rx('' + t.key) : e.toString(36);
}
function Ao(t, e, n, i, r) {
  var s = typeof t;
  (s === 'undefined' || s === 'boolean') && (t = null);
  var a = !1;
  if (t === null) a = !0;
  else
    switch (s) {
      case 'string':
      case 'number':
        a = !0;
        break;
      case 'object':
        switch (t.$$typeof) {
          case Ta:
          case X0:
            a = !0;
        }
    }
  if (a)
    return (
      (a = t),
      (r = r(a)),
      (t = i === '' ? '.' + Vl(a, 0) : i),
      cf(r)
        ? ((n = ''),
          t != null && (n = t.replace(uf, '$&/') + '/'),
          Ao(r, e, n, '', function (c) {
            return c;
          }))
        : r != null &&
          (rd(r) &&
            (r = ix(
              r,
              n +
                (!r.key || (a && a.key === r.key) ? '' : ('' + r.key).replace(uf, '$&/') + '/') +
                t,
            )),
          e.push(r)),
      1
    );
  if (((a = 0), (i = i === '' ? '.' : i + ':'), cf(t)))
    for (var o = 0; o < t.length; o++) {
      s = t[o];
      var l = i + Vl(s, o);
      a += Ao(s, e, n, l, r);
    }
  else if (((l = nx(t)), typeof l == 'function'))
    for (t = l.call(t), o = 0; !(s = t.next()).done; )
      (s = s.value), (l = i + Vl(s, o++)), (a += Ao(s, e, n, l, r));
  else if (s === 'object')
    throw (
      ((e = String(t)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    );
  return a;
}
function ka(t, e, n) {
  if (t == null) return t;
  var i = [],
    r = 0;
  return (
    Ao(t, i, '', '', function (s) {
      return e.call(n, s, r++);
    }),
    i
  );
}
function sx(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (n) {
          (t._status === 0 || t._status === -1) && ((t._status = 1), (t._result = n));
        },
        function (n) {
          (t._status === 0 || t._status === -1) && ((t._status = 2), (t._result = n));
        },
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var Xt = { current: null },
  bo = { transition: null },
  ax = { ReactCurrentDispatcher: Xt, ReactCurrentBatchConfig: bo, ReactCurrentOwner: id };
function em() {
  throw Error('act(...) is not supported in production builds of React.');
}
He.Children = {
  map: ka,
  forEach: function (t, e, n) {
    ka(
      t,
      function () {
        e.apply(this, arguments);
      },
      n,
    );
  },
  count: function (t) {
    var e = 0;
    return (
      ka(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      ka(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!rd(t))
      throw Error('React.Children.only expected to receive a single React element child.');
    return t;
  },
};
He.Component = As;
He.Fragment = q0;
He.Profiler = $0;
He.PureComponent = td;
He.StrictMode = Y0;
He.Suspense = J0;
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ax;
He.act = em;
He.cloneElement = function (t, e, n) {
  if (t == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' + t + '.',
    );
  var i = Yp({}, t.props),
    r = t.key,
    s = t.ref,
    a = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((s = e.ref), (a = id.current)),
      e.key !== void 0 && (r = '' + e.key),
      t.type && t.type.defaultProps)
    )
      var o = t.type.defaultProps;
    for (l in e)
      Zp.call(e, l) &&
        !Qp.hasOwnProperty(l) &&
        (i[l] = e[l] === void 0 && o !== void 0 ? o[l] : e[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) i.children = n;
  else if (1 < l) {
    o = Array(l);
    for (var c = 0; c < l; c++) o[c] = arguments[c + 2];
    i.children = o;
  }
  return { $$typeof: Ta, type: t.type, key: r, ref: s, props: i, _owner: a };
};
He.createContext = function (t) {
  return (
    (t = {
      $$typeof: Z0,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: K0, _context: t }),
    (t.Consumer = t)
  );
};
He.createElement = Jp;
He.createFactory = function (t) {
  var e = Jp.bind(null, t);
  return (e.type = t), e;
};
He.createRef = function () {
  return { current: null };
};
He.forwardRef = function (t) {
  return { $$typeof: Q0, render: t };
};
He.isValidElement = rd;
He.lazy = function (t) {
  return { $$typeof: tx, _payload: { _status: -1, _result: t }, _init: sx };
};
He.memo = function (t, e) {
  return { $$typeof: ex, type: t, compare: e === void 0 ? null : e };
};
He.startTransition = function (t) {
  var e = bo.transition;
  bo.transition = {};
  try {
    t();
  } finally {
    bo.transition = e;
  }
};
He.unstable_act = em;
He.useCallback = function (t, e) {
  return Xt.current.useCallback(t, e);
};
He.useContext = function (t) {
  return Xt.current.useContext(t);
};
He.useDebugValue = function () {};
He.useDeferredValue = function (t) {
  return Xt.current.useDeferredValue(t);
};
He.useEffect = function (t, e) {
  return Xt.current.useEffect(t, e);
};
He.useId = function () {
  return Xt.current.useId();
};
He.useImperativeHandle = function (t, e, n) {
  return Xt.current.useImperativeHandle(t, e, n);
};
He.useInsertionEffect = function (t, e) {
  return Xt.current.useInsertionEffect(t, e);
};
He.useLayoutEffect = function (t, e) {
  return Xt.current.useLayoutEffect(t, e);
};
He.useMemo = function (t, e) {
  return Xt.current.useMemo(t, e);
};
He.useReducer = function (t, e, n) {
  return Xt.current.useReducer(t, e, n);
};
He.useRef = function (t) {
  return Xt.current.useRef(t);
};
He.useState = function (t) {
  return Xt.current.useState(t);
};
He.useSyncExternalStore = function (t, e, n) {
  return Xt.current.useSyncExternalStore(t, e, n);
};
He.useTransition = function () {
  return Xt.current.useTransition();
};
He.version = '18.3.1';
Xp.exports = He;
var un = Xp.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ox = un,
  lx = Symbol.for('react.element'),
  cx = Symbol.for('react.fragment'),
  ux = Object.prototype.hasOwnProperty,
  dx = ox.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  fx = { key: !0, ref: !0, __self: !0, __source: !0 };
function tm(t, e, n) {
  var i,
    r = {},
    s = null,
    a = null;
  n !== void 0 && (s = '' + n),
    e.key !== void 0 && (s = '' + e.key),
    e.ref !== void 0 && (a = e.ref);
  for (i in e) ux.call(e, i) && !fx.hasOwnProperty(i) && (r[i] = e[i]);
  if (t && t.defaultProps) for (i in ((e = t.defaultProps), e)) r[i] === void 0 && (r[i] = e[i]);
  return { $$typeof: lx, type: t, key: s, ref: a, props: r, _owner: dx.current };
}
xl.Fragment = cx;
xl.jsx = tm;
xl.jsxs = tm;
jp.exports = xl;
var m = jp.exports,
  nm = { exports: {} },
  pn = {},
  im = { exports: {} },
  rm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(P, O) {
    var V = P.length;
    P.push(O);
    e: for (; 0 < V; ) {
      var K = (V - 1) >>> 1,
        se = P[K];
      if (0 < r(se, O)) (P[K] = O), (P[V] = se), (V = K);
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function i(P) {
    if (P.length === 0) return null;
    var O = P[0],
      V = P.pop();
    if (V !== O) {
      P[0] = V;
      e: for (var K = 0, se = P.length, Te = se >>> 1; K < Te; ) {
        var H = 2 * (K + 1) - 1,
          Z = P[H],
          ce = H + 1,
          Se = P[ce];
        if (0 > r(Z, V))
          ce < se && 0 > r(Se, Z)
            ? ((P[K] = Se), (P[ce] = V), (K = ce))
            : ((P[K] = Z), (P[H] = V), (K = H));
        else if (ce < se && 0 > r(Se, V)) (P[K] = Se), (P[ce] = V), (K = ce);
        else break e;
      }
    }
    return O;
  }
  function r(P, O) {
    var V = P.sortIndex - O.sortIndex;
    return V !== 0 ? V : P.id - O.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var s = performance;
    t.unstable_now = function () {
      return s.now();
    };
  } else {
    var a = Date,
      o = a.now();
    t.unstable_now = function () {
      return a.now() - o;
    };
  }
  var l = [],
    c = [],
    d = 1,
    f = null,
    h = 3,
    g = !1,
    v = !1,
    y = !1,
    p = typeof setTimeout == 'function' ? setTimeout : null,
    u = typeof clearTimeout == 'function' ? clearTimeout : null,
    _ = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(P) {
    for (var O = n(c); O !== null; ) {
      if (O.callback === null) i(c);
      else if (O.startTime <= P) i(c), (O.sortIndex = O.expirationTime), e(l, O);
      else break;
      O = n(c);
    }
  }
  function E(P) {
    if (((y = !1), x(P), !v))
      if (n(l) !== null) (v = !0), j(C);
      else {
        var O = n(c);
        O !== null && $(E, O.startTime - P);
      }
  }
  function C(P, O) {
    (v = !1), y && ((y = !1), u(D), (D = -1)), (g = !0);
    var V = h;
    try {
      for (x(O), f = n(l); f !== null && (!(f.expirationTime > O) || (P && !R())); ) {
        var K = f.callback;
        if (typeof K == 'function') {
          (f.callback = null), (h = f.priorityLevel);
          var se = K(f.expirationTime <= O);
          (O = t.unstable_now()),
            typeof se == 'function' ? (f.callback = se) : f === n(l) && i(l),
            x(O);
        } else i(l);
        f = n(l);
      }
      if (f !== null) var Te = !0;
      else {
        var H = n(c);
        H !== null && $(E, H.startTime - O), (Te = !1);
      }
      return Te;
    } finally {
      (f = null), (h = V), (g = !1);
    }
  }
  var b = !1,
    T = null,
    D = -1,
    Y = 5,
    S = -1;
  function R() {
    return !(t.unstable_now() - S < Y);
  }
  function ne() {
    if (T !== null) {
      var P = t.unstable_now();
      S = P;
      var O = !0;
      try {
        O = T(!0, P);
      } finally {
        O ? J() : ((b = !1), (T = null));
      }
    } else b = !1;
  }
  var J;
  if (typeof _ == 'function')
    J = function () {
      _(ne);
    };
  else if (typeof MessageChannel < 'u') {
    var L = new MessageChannel(),
      X = L.port2;
    (L.port1.onmessage = ne),
      (J = function () {
        X.postMessage(null);
      });
  } else
    J = function () {
      p(ne, 0);
    };
  function j(P) {
    (T = P), b || ((b = !0), J());
  }
  function $(P, O) {
    D = p(function () {
      P(t.unstable_now());
    }, O);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (P) {
      P.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      v || g || ((v = !0), j(C));
    }),
    (t.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (Y = 0 < P ? Math.floor(1e3 / P) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return h;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (t.unstable_next = function (P) {
      switch (h) {
        case 1:
        case 2:
        case 3:
          var O = 3;
          break;
        default:
          O = h;
      }
      var V = h;
      h = O;
      try {
        return P();
      } finally {
        h = V;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (P, O) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          P = 3;
      }
      var V = h;
      h = P;
      try {
        return O();
      } finally {
        h = V;
      }
    }),
    (t.unstable_scheduleCallback = function (P, O, V) {
      var K = t.unstable_now();
      switch (
        (typeof V == 'object' && V !== null
          ? ((V = V.delay), (V = typeof V == 'number' && 0 < V ? K + V : K))
          : (V = K),
        P)
      ) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return (
        (se = V + se),
        (P = {
          id: d++,
          callback: O,
          priorityLevel: P,
          startTime: V,
          expirationTime: se,
          sortIndex: -1,
        }),
        V > K
          ? ((P.sortIndex = V),
            e(c, P),
            n(l) === null && P === n(c) && (y ? (u(D), (D = -1)) : (y = !0), $(E, V - K)))
          : ((P.sortIndex = se), e(l, P), v || g || ((v = !0), j(C))),
        P
      );
    }),
    (t.unstable_shouldYield = R),
    (t.unstable_wrapCallback = function (P) {
      var O = h;
      return function () {
        var V = h;
        h = O;
        try {
          return P.apply(this, arguments);
        } finally {
          h = V;
        }
      };
    });
})(rm);
im.exports = rm;
var hx = im.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var px = un,
  hn = hx;
function ee(t) {
  for (
    var e = 'https://reactjs.org/docs/error-decoder.html?invariant=' + t, n = 1;
    n < arguments.length;
    n++
  )
    e += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    t +
    '; visit ' +
    e +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var sm = new Set(),
  aa = {};
function Ar(t, e) {
  ps(t, e), ps(t + 'Capture', e);
}
function ps(t, e) {
  for (aa[t] = e, t = 0; t < e.length; t++) sm.add(e[t]);
}
var ui = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Zc = Object.prototype.hasOwnProperty,
  mx =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  df = {},
  ff = {};
function gx(t) {
  return Zc.call(ff, t) ? !0 : Zc.call(df, t) ? !1 : mx.test(t) ? (ff[t] = !0) : ((df[t] = !0), !1);
}
function xx(t, e, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof e) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== 'data-' && t !== 'aria-');
    default:
      return !1;
  }
}
function _x(t, e, n, i) {
  if (e === null || typeof e > 'u' || xx(t, e, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function qt(t, e, n, i, r, s, a) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = i),
    (this.attributeNamespace = r),
    (this.mustUseProperty = n),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = s),
    (this.removeEmptyString = a);
}
var Lt = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (t) {
    Lt[t] = new qt(t, 0, !1, t, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (t) {
  var e = t[0];
  Lt[e] = new qt(e, 1, !1, t[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (t) {
  Lt[t] = new qt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (t) {
  Lt[t] = new qt(t, 2, !1, t, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (t) {
    Lt[t] = new qt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (t) {
  Lt[t] = new qt(t, 3, !0, t, null, !1, !1);
});
['capture', 'download'].forEach(function (t) {
  Lt[t] = new qt(t, 4, !1, t, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (t) {
  Lt[t] = new qt(t, 6, !1, t, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (t) {
  Lt[t] = new qt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var sd = /[\-:]([a-z])/g;
function ad(t) {
  return t[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(sd, ad);
    Lt[e] = new qt(e, 1, !1, t, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (t) {
    var e = t.replace(sd, ad);
    Lt[e] = new qt(e, 1, !1, t, 'http://www.w3.org/1999/xlink', !1, !1);
  });
['xml:base', 'xml:lang', 'xml:space'].forEach(function (t) {
  var e = t.replace(sd, ad);
  Lt[e] = new qt(e, 1, !1, t, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (t) {
  Lt[t] = new qt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
Lt.xlinkHref = new qt('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (t) {
  Lt[t] = new qt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function od(t, e, n, i) {
  var r = Lt.hasOwnProperty(e) ? Lt[e] : null;
  (r !== null
    ? r.type !== 0
    : i || !(2 < e.length) || (e[0] !== 'o' && e[0] !== 'O') || (e[1] !== 'n' && e[1] !== 'N')) &&
    (_x(e, n, r, i) && (n = null),
    i || r === null
      ? gx(e) && (n === null ? t.removeAttribute(e) : t.setAttribute(e, '' + n))
      : r.mustUseProperty
      ? (t[r.propertyName] = n === null ? (r.type === 3 ? !1 : '') : n)
      : ((e = r.attributeName),
        (i = r.attributeNamespace),
        n === null
          ? t.removeAttribute(e)
          : ((r = r.type),
            (n = r === 3 || (r === 4 && n === !0) ? '' : '' + n),
            i ? t.setAttributeNS(i, e, n) : t.setAttribute(e, n))));
}
var mi = px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  za = Symbol.for('react.element'),
  Xr = Symbol.for('react.portal'),
  qr = Symbol.for('react.fragment'),
  ld = Symbol.for('react.strict_mode'),
  Qc = Symbol.for('react.profiler'),
  am = Symbol.for('react.provider'),
  om = Symbol.for('react.context'),
  cd = Symbol.for('react.forward_ref'),
  Jc = Symbol.for('react.suspense'),
  eu = Symbol.for('react.suspense_list'),
  ud = Symbol.for('react.memo'),
  wi = Symbol.for('react.lazy'),
  lm = Symbol.for('react.offscreen'),
  hf = Symbol.iterator;
function Ls(t) {
  return t === null || typeof t != 'object'
    ? null
    : ((t = (hf && t[hf]) || t['@@iterator']), typeof t == 'function' ? t : null);
}
var ft = Object.assign,
  Wl;
function qs(t) {
  if (Wl === void 0)
    try {
      throw Error();
    } catch (n) {
      var e = n.stack.trim().match(/\n( *(at )?)/);
      Wl = (e && e[1]) || '';
    }
  return (
    `
` +
    Wl +
    t
  );
}
var jl = !1;
function Xl(t, e) {
  if (!t || jl) return '';
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (c) {
          var i = c;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (c) {
          i = c;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        i = c;
      }
      t();
    }
  } catch (c) {
    if (c && i && typeof c.stack == 'string') {
      for (
        var r = c.stack.split(`
`),
          s = i.stack.split(`
`),
          a = r.length - 1,
          o = s.length - 1;
        1 <= a && 0 <= o && r[a] !== s[o];

      )
        o--;
      for (; 1 <= a && 0 <= o; a--, o--)
        if (r[a] !== s[o]) {
          if (a !== 1 || o !== 1)
            do
              if ((a--, o--, 0 > o || r[a] !== s[o])) {
                var l =
                  `
` + r[a].replace(' at new ', ' at ');
                return (
                  t.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', t.displayName)),
                  l
                );
              }
            while (1 <= a && 0 <= o);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (t = t ? t.displayName || t.name : '') ? qs(t) : '';
}
function vx(t) {
  switch (t.tag) {
    case 5:
      return qs(t.type);
    case 16:
      return qs('Lazy');
    case 13:
      return qs('Suspense');
    case 19:
      return qs('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (t = Xl(t.type, !1)), t;
    case 11:
      return (t = Xl(t.type.render, !1)), t;
    case 1:
      return (t = Xl(t.type, !0)), t;
    default:
      return '';
  }
}
function tu(t) {
  if (t == null) return null;
  if (typeof t == 'function') return t.displayName || t.name || null;
  if (typeof t == 'string') return t;
  switch (t) {
    case qr:
      return 'Fragment';
    case Xr:
      return 'Portal';
    case Qc:
      return 'Profiler';
    case ld:
      return 'StrictMode';
    case Jc:
      return 'Suspense';
    case eu:
      return 'SuspenseList';
  }
  if (typeof t == 'object')
    switch (t.$$typeof) {
      case om:
        return (t.displayName || 'Context') + '.Consumer';
      case am:
        return (t._context.displayName || 'Context') + '.Provider';
      case cd:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ''),
            (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')),
          t
        );
      case ud:
        return (e = t.displayName || null), e !== null ? e : tu(t.type) || 'Memo';
      case wi:
        (e = t._payload), (t = t._init);
        try {
          return tu(t(e));
        } catch {}
    }
  return null;
}
function yx(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (e.displayName || 'Context') + '.Consumer';
    case 10:
      return (e._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ''),
        e.displayName || (t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return e;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return tu(e);
    case 8:
      return e === ld ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == 'function') return e.displayName || e.name || null;
      if (typeof e == 'string') return e;
  }
  return null;
}
function Vi(t) {
  switch (typeof t) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return t;
    case 'object':
      return t;
    default:
      return '';
  }
}
function cm(t) {
  var e = t.type;
  return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio');
}
function Sx(t) {
  var e = cm(t) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    i = '' + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var r = n.get,
      s = n.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return r.call(this);
        },
        set: function (a) {
          (i = '' + a), s.call(this, a);
        },
      }),
      Object.defineProperty(t, e, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (a) {
          i = '' + a;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function Ba(t) {
  t._valueTracker || (t._valueTracker = Sx(t));
}
function um(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var n = e.getValue(),
    i = '';
  return (
    t && (i = cm(t) ? (t.checked ? 'true' : 'false') : t.value),
    (t = i),
    t !== n ? (e.setValue(t), !0) : !1
  );
}
function Bo(t) {
  if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function nu(t, e) {
  var n = e.checked;
  return ft({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? t._wrapperState.initialChecked,
  });
}
function pf(t, e) {
  var n = e.defaultValue == null ? '' : e.defaultValue,
    i = e.checked != null ? e.checked : e.defaultChecked;
  (n = Vi(e.value != null ? e.value : n)),
    (t._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled: e.type === 'checkbox' || e.type === 'radio' ? e.checked != null : e.value != null,
    });
}
function dm(t, e) {
  (e = e.checked), e != null && od(t, 'checked', e, !1);
}
function iu(t, e) {
  dm(t, e);
  var n = Vi(e.value),
    i = e.type;
  if (n != null)
    i === 'number'
      ? ((n === 0 && t.value === '') || t.value != n) && (t.value = '' + n)
      : t.value !== '' + n && (t.value = '' + n);
  else if (i === 'submit' || i === 'reset') {
    t.removeAttribute('value');
    return;
  }
  e.hasOwnProperty('value')
    ? ru(t, e.type, n)
    : e.hasOwnProperty('defaultValue') && ru(t, e.type, Vi(e.defaultValue)),
    e.checked == null && e.defaultChecked != null && (t.defaultChecked = !!e.defaultChecked);
}
function mf(t, e, n) {
  if (e.hasOwnProperty('value') || e.hasOwnProperty('defaultValue')) {
    var i = e.type;
    if (!((i !== 'submit' && i !== 'reset') || (e.value !== void 0 && e.value !== null))) return;
    (e = '' + t._wrapperState.initialValue),
      n || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (n = t.name),
    n !== '' && (t.name = ''),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    n !== '' && (t.name = n);
}
function ru(t, e, n) {
  (e !== 'number' || Bo(t.ownerDocument) !== t) &&
    (n == null
      ? (t.defaultValue = '' + t._wrapperState.initialValue)
      : t.defaultValue !== '' + n && (t.defaultValue = '' + n));
}
var Ys = Array.isArray;
function as(t, e, n, i) {
  if (((t = t.options), e)) {
    e = {};
    for (var r = 0; r < n.length; r++) e['$' + n[r]] = !0;
    for (n = 0; n < t.length; n++)
      (r = e.hasOwnProperty('$' + t[n].value)),
        t[n].selected !== r && (t[n].selected = r),
        r && i && (t[n].defaultSelected = !0);
  } else {
    for (n = '' + Vi(n), e = null, r = 0; r < t.length; r++) {
      if (t[r].value === n) {
        (t[r].selected = !0), i && (t[r].defaultSelected = !0);
        return;
      }
      e !== null || t[r].disabled || (e = t[r]);
    }
    e !== null && (e.selected = !0);
  }
}
function su(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(ee(91));
  return ft({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: '' + t._wrapperState.initialValue,
  });
}
function gf(t, e) {
  var n = e.value;
  if (n == null) {
    if (((n = e.children), (e = e.defaultValue), n != null)) {
      if (e != null) throw Error(ee(92));
      if (Ys(n)) {
        if (1 < n.length) throw Error(ee(93));
        n = n[0];
      }
      e = n;
    }
    e == null && (e = ''), (n = e);
  }
  t._wrapperState = { initialValue: Vi(n) };
}
function fm(t, e) {
  var n = Vi(e.value),
    i = Vi(e.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== t.value && (t.value = n),
    e.defaultValue == null && t.defaultValue !== n && (t.defaultValue = n)),
    i != null && (t.defaultValue = '' + i);
}
function xf(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== '' && e !== null && (t.value = e);
}
function hm(t) {
  switch (t) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function au(t, e) {
  return t == null || t === 'http://www.w3.org/1999/xhtml'
    ? hm(e)
    : t === 'http://www.w3.org/2000/svg' && e === 'foreignObject'
    ? 'http://www.w3.org/1999/xhtml'
    : t;
}
var Ha,
  pm = (function (t) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (e, n, i, r) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, n, i, r);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in t) t.innerHTML = e;
    else {
      for (
        Ha = Ha || document.createElement('div'),
          Ha.innerHTML = '<svg>' + e.valueOf().toString() + '</svg>',
          e = Ha.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function oa(t, e) {
  if (e) {
    var n = t.firstChild;
    if (n && n === t.lastChild && n.nodeType === 3) {
      n.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Zs = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Mx = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(Zs).forEach(function (t) {
  Mx.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Zs[e] = Zs[t]);
  });
});
function mm(t, e, n) {
  return e == null || typeof e == 'boolean' || e === ''
    ? ''
    : n || typeof e != 'number' || e === 0 || (Zs.hasOwnProperty(t) && Zs[t])
    ? ('' + e).trim()
    : e + 'px';
}
function gm(t, e) {
  t = t.style;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      var i = n.indexOf('--') === 0,
        r = mm(n, e[n], i);
      n === 'float' && (n = 'cssFloat'), i ? t.setProperty(n, r) : (t[n] = r);
    }
}
var Ex = ft(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
);
function ou(t, e) {
  if (e) {
    if (Ex[t] && (e.children != null || e.dangerouslySetInnerHTML != null)) throw Error(ee(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(ee(60));
      if (typeof e.dangerouslySetInnerHTML != 'object' || !('__html' in e.dangerouslySetInnerHTML))
        throw Error(ee(61));
    }
    if (e.style != null && typeof e.style != 'object') throw Error(ee(62));
  }
}
function lu(t, e) {
  if (t.indexOf('-') === -1) return typeof e.is == 'string';
  switch (t) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var cu = null;
function dd(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var uu = null,
  os = null,
  ls = null;
function _f(t) {
  if ((t = Ra(t))) {
    if (typeof uu != 'function') throw Error(ee(280));
    var e = t.stateNode;
    e && ((e = Ml(e)), uu(t.stateNode, t.type, e));
  }
}
function xm(t) {
  os ? (ls ? ls.push(t) : (ls = [t])) : (os = t);
}
function _m() {
  if (os) {
    var t = os,
      e = ls;
    if (((ls = os = null), _f(t), e)) for (t = 0; t < e.length; t++) _f(e[t]);
  }
}
function vm(t, e) {
  return t(e);
}
function ym() {}
var ql = !1;
function Sm(t, e, n) {
  if (ql) return t(e, n);
  ql = !0;
  try {
    return vm(t, e, n);
  } finally {
    (ql = !1), (os !== null || ls !== null) && (ym(), _m());
  }
}
function la(t, e) {
  var n = t.stateNode;
  if (n === null) return null;
  var i = Ml(n);
  if (i === null) return null;
  n = i[e];
  e: switch (e) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (i = !i.disabled) ||
        ((t = t.type),
        (i = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))),
        (t = !i);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (n && typeof n != 'function') throw Error(ee(231, e, typeof n));
  return n;
}
var du = !1;
if (ui)
  try {
    var Ds = {};
    Object.defineProperty(Ds, 'passive', {
      get: function () {
        du = !0;
      },
    }),
      window.addEventListener('test', Ds, Ds),
      window.removeEventListener('test', Ds, Ds);
  } catch {
    du = !1;
  }
function wx(t, e, n, i, r, s, a, o, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(n, c);
  } catch (d) {
    this.onError(d);
  }
}
var Qs = !1,
  Ho = null,
  Go = !1,
  fu = null,
  Tx = {
    onError: function (t) {
      (Qs = !0), (Ho = t);
    },
  };
function Ax(t, e, n, i, r, s, a, o, l) {
  (Qs = !1), (Ho = null), wx.apply(Tx, arguments);
}
function bx(t, e, n, i, r, s, a, o, l) {
  if ((Ax.apply(this, arguments), Qs)) {
    if (Qs) {
      var c = Ho;
      (Qs = !1), (Ho = null);
    } else throw Error(ee(198));
    Go || ((Go = !0), (fu = c));
  }
}
function br(t) {
  var e = t,
    n = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (n = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? n : null;
}
function Mm(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null))
      return e.dehydrated;
  }
  return null;
}
function vf(t) {
  if (br(t) !== t) throw Error(ee(188));
}
function Rx(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = br(t)), e === null)) throw Error(ee(188));
    return e !== t ? null : t;
  }
  for (var n = t, i = e; ; ) {
    var r = n.return;
    if (r === null) break;
    var s = r.alternate;
    if (s === null) {
      if (((i = r.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (r.child === s.child) {
      for (s = r.child; s; ) {
        if (s === n) return vf(r), t;
        if (s === i) return vf(r), e;
        s = s.sibling;
      }
      throw Error(ee(188));
    }
    if (n.return !== i.return) (n = r), (i = s);
    else {
      for (var a = !1, o = r.child; o; ) {
        if (o === n) {
          (a = !0), (n = r), (i = s);
          break;
        }
        if (o === i) {
          (a = !0), (i = r), (n = s);
          break;
        }
        o = o.sibling;
      }
      if (!a) {
        for (o = s.child; o; ) {
          if (o === n) {
            (a = !0), (n = s), (i = r);
            break;
          }
          if (o === i) {
            (a = !0), (i = s), (n = r);
            break;
          }
          o = o.sibling;
        }
        if (!a) throw Error(ee(189));
      }
    }
    if (n.alternate !== i) throw Error(ee(190));
  }
  if (n.tag !== 3) throw Error(ee(188));
  return n.stateNode.current === n ? t : e;
}
function Em(t) {
  return (t = Rx(t)), t !== null ? wm(t) : null;
}
function wm(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = wm(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var Tm = hn.unstable_scheduleCallback,
  yf = hn.unstable_cancelCallback,
  Cx = hn.unstable_shouldYield,
  Px = hn.unstable_requestPaint,
  gt = hn.unstable_now,
  Nx = hn.unstable_getCurrentPriorityLevel,
  fd = hn.unstable_ImmediatePriority,
  Am = hn.unstable_UserBlockingPriority,
  Vo = hn.unstable_NormalPriority,
  Lx = hn.unstable_LowPriority,
  bm = hn.unstable_IdlePriority,
  _l = null,
  Wn = null;
function Dx(t) {
  if (Wn && typeof Wn.onCommitFiberRoot == 'function')
    try {
      Wn.onCommitFiberRoot(_l, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var Un = Math.clz32 ? Math.clz32 : Fx,
  Ux = Math.log,
  Ix = Math.LN2;
function Fx(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Ux(t) / Ix) | 0)) | 0;
}
var Ga = 64,
  Va = 4194304;
function $s(t) {
  switch (t & -t) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function Wo(t, e) {
  var n = t.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    r = t.suspendedLanes,
    s = t.pingedLanes,
    a = n & 268435455;
  if (a !== 0) {
    var o = a & ~r;
    o !== 0 ? (i = $s(o)) : ((s &= a), s !== 0 && (i = $s(s)));
  } else (a = n & ~r), a !== 0 ? (i = $s(a)) : s !== 0 && (i = $s(s));
  if (i === 0) return 0;
  if (
    e !== 0 &&
    e !== i &&
    !(e & r) &&
    ((r = i & -i), (s = e & -e), r >= s || (r === 16 && (s & 4194240) !== 0))
  )
    return e;
  if ((i & 4 && (i |= n & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= i; 0 < e; )
      (n = 31 - Un(e)), (r = 1 << n), (i |= t[n]), (e &= ~r);
  return i;
}
function Ox(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function kx(t, e) {
  for (
    var n = t.suspendedLanes, i = t.pingedLanes, r = t.expirationTimes, s = t.pendingLanes;
    0 < s;

  ) {
    var a = 31 - Un(s),
      o = 1 << a,
      l = r[a];
    l === -1 ? (!(o & n) || o & i) && (r[a] = Ox(o, e)) : l <= e && (t.expiredLanes |= o),
      (s &= ~o);
  }
}
function hu(t) {
  return (t = t.pendingLanes & -1073741825), t !== 0 ? t : t & 1073741824 ? 1073741824 : 0;
}
function Rm() {
  var t = Ga;
  return (Ga <<= 1), !(Ga & 4194240) && (Ga = 64), t;
}
function Yl(t) {
  for (var e = [], n = 0; 31 > n; n++) e.push(t);
  return e;
}
function Aa(t, e, n) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - Un(e)),
    (t[e] = n);
}
function zx(t, e) {
  var n = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var i = t.eventTimes;
  for (t = t.expirationTimes; 0 < n; ) {
    var r = 31 - Un(n),
      s = 1 << r;
    (e[r] = 0), (i[r] = -1), (t[r] = -1), (n &= ~s);
  }
}
function hd(t, e) {
  var n = (t.entangledLanes |= e);
  for (t = t.entanglements; n; ) {
    var i = 31 - Un(n),
      r = 1 << i;
    (r & e) | (t[i] & e) && (t[i] |= e), (n &= ~r);
  }
}
var $e = 0;
function Cm(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Pm,
  pd,
  Nm,
  Lm,
  Dm,
  pu = !1,
  Wa = [],
  Li = null,
  Di = null,
  Ui = null,
  ca = new Map(),
  ua = new Map(),
  Ai = [],
  Bx =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    );
function Sf(t, e) {
  switch (t) {
    case 'focusin':
    case 'focusout':
      Li = null;
      break;
    case 'dragenter':
    case 'dragleave':
      Di = null;
      break;
    case 'mouseover':
    case 'mouseout':
      Ui = null;
      break;
    case 'pointerover':
    case 'pointerout':
      ca.delete(e.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      ua.delete(e.pointerId);
  }
}
function Us(t, e, n, i, r, s) {
  return t === null || t.nativeEvent !== s
    ? ((t = {
        blockedOn: e,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: s,
        targetContainers: [r],
      }),
      e !== null && ((e = Ra(e)), e !== null && pd(e)),
      t)
    : ((t.eventSystemFlags |= i),
      (e = t.targetContainers),
      r !== null && e.indexOf(r) === -1 && e.push(r),
      t);
}
function Hx(t, e, n, i, r) {
  switch (e) {
    case 'focusin':
      return (Li = Us(Li, t, e, n, i, r)), !0;
    case 'dragenter':
      return (Di = Us(Di, t, e, n, i, r)), !0;
    case 'mouseover':
      return (Ui = Us(Ui, t, e, n, i, r)), !0;
    case 'pointerover':
      var s = r.pointerId;
      return ca.set(s, Us(ca.get(s) || null, t, e, n, i, r)), !0;
    case 'gotpointercapture':
      return (s = r.pointerId), ua.set(s, Us(ua.get(s) || null, t, e, n, i, r)), !0;
  }
  return !1;
}
function Um(t) {
  var e = dr(t.target);
  if (e !== null) {
    var n = br(e);
    if (n !== null) {
      if (((e = n.tag), e === 13)) {
        if (((e = Mm(n)), e !== null)) {
          (t.blockedOn = e),
            Dm(t.priority, function () {
              Nm(n);
            });
          return;
        }
      } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Ro(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var n = mu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (n === null) {
      n = t.nativeEvent;
      var i = new n.constructor(n.type, n);
      (cu = i), n.target.dispatchEvent(i), (cu = null);
    } else return (e = Ra(n)), e !== null && pd(e), (t.blockedOn = n), !1;
    e.shift();
  }
  return !0;
}
function Mf(t, e, n) {
  Ro(t) && n.delete(e);
}
function Gx() {
  (pu = !1),
    Li !== null && Ro(Li) && (Li = null),
    Di !== null && Ro(Di) && (Di = null),
    Ui !== null && Ro(Ui) && (Ui = null),
    ca.forEach(Mf),
    ua.forEach(Mf);
}
function Is(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    pu || ((pu = !0), hn.unstable_scheduleCallback(hn.unstable_NormalPriority, Gx)));
}
function da(t) {
  function e(r) {
    return Is(r, t);
  }
  if (0 < Wa.length) {
    Is(Wa[0], t);
    for (var n = 1; n < Wa.length; n++) {
      var i = Wa[n];
      i.blockedOn === t && (i.blockedOn = null);
    }
  }
  for (
    Li !== null && Is(Li, t),
      Di !== null && Is(Di, t),
      Ui !== null && Is(Ui, t),
      ca.forEach(e),
      ua.forEach(e),
      n = 0;
    n < Ai.length;
    n++
  )
    (i = Ai[n]), i.blockedOn === t && (i.blockedOn = null);
  for (; 0 < Ai.length && ((n = Ai[0]), n.blockedOn === null); )
    Um(n), n.blockedOn === null && Ai.shift();
}
var cs = mi.ReactCurrentBatchConfig,
  jo = !0;
function Vx(t, e, n, i) {
  var r = $e,
    s = cs.transition;
  cs.transition = null;
  try {
    ($e = 1), md(t, e, n, i);
  } finally {
    ($e = r), (cs.transition = s);
  }
}
function Wx(t, e, n, i) {
  var r = $e,
    s = cs.transition;
  cs.transition = null;
  try {
    ($e = 4), md(t, e, n, i);
  } finally {
    ($e = r), (cs.transition = s);
  }
}
function md(t, e, n, i) {
  if (jo) {
    var r = mu(t, e, n, i);
    if (r === null) rc(t, e, i, Xo, n), Sf(t, i);
    else if (Hx(r, t, e, n, i)) i.stopPropagation();
    else if ((Sf(t, i), e & 4 && -1 < Bx.indexOf(t))) {
      for (; r !== null; ) {
        var s = Ra(r);
        if ((s !== null && Pm(s), (s = mu(t, e, n, i)), s === null && rc(t, e, i, Xo, n), s === r))
          break;
        r = s;
      }
      r !== null && i.stopPropagation();
    } else rc(t, e, i, null, n);
  }
}
var Xo = null;
function mu(t, e, n, i) {
  if (((Xo = null), (t = dd(i)), (t = dr(t)), t !== null))
    if (((e = br(t)), e === null)) t = null;
    else if (((n = e.tag), n === 13)) {
      if (((t = Mm(e)), t !== null)) return t;
      t = null;
    } else if (n === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (Xo = t), null;
}
function Im(t) {
  switch (t) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (Nx()) {
        case fd:
          return 1;
        case Am:
          return 4;
        case Vo:
        case Lx:
          return 16;
        case bm:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Ci = null,
  gd = null,
  Co = null;
function Fm() {
  if (Co) return Co;
  var t,
    e = gd,
    n = e.length,
    i,
    r = 'value' in Ci ? Ci.value : Ci.textContent,
    s = r.length;
  for (t = 0; t < n && e[t] === r[t]; t++);
  var a = n - t;
  for (i = 1; i <= a && e[n - i] === r[s - i]; i++);
  return (Co = r.slice(t, 1 < i ? 1 - i : void 0));
}
function Po(t) {
  var e = t.keyCode;
  return (
    'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function ja() {
  return !0;
}
function Ef() {
  return !1;
}
function mn(t) {
  function e(n, i, r, s, a) {
    (this._reactName = n),
      (this._targetInst = r),
      (this.type = i),
      (this.nativeEvent = s),
      (this.target = a),
      (this.currentTarget = null);
    for (var o in t) t.hasOwnProperty(o) && ((n = t[o]), (this[o] = n ? n(s) : s[o]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? ja
        : Ef),
      (this.isPropagationStopped = Ef),
      this
    );
  }
  return (
    ft(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = ja));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = ja));
      },
      persist: function () {},
      isPersistent: ja,
    }),
    e
  );
}
var bs = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  xd = mn(bs),
  ba = ft({}, bs, { view: 0, detail: 0 }),
  jx = mn(ba),
  $l,
  Kl,
  Fs,
  vl = ft({}, ba, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: _d,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return 'movementX' in t
        ? t.movementX
        : (t !== Fs &&
            (Fs && t.type === 'mousemove'
              ? (($l = t.screenX - Fs.screenX), (Kl = t.screenY - Fs.screenY))
              : (Kl = $l = 0),
            (Fs = t)),
          $l);
    },
    movementY: function (t) {
      return 'movementY' in t ? t.movementY : Kl;
    },
  }),
  wf = mn(vl),
  Xx = ft({}, vl, { dataTransfer: 0 }),
  qx = mn(Xx),
  Yx = ft({}, ba, { relatedTarget: 0 }),
  Zl = mn(Yx),
  $x = ft({}, bs, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Kx = mn($x),
  Zx = ft({}, bs, {
    clipboardData: function (t) {
      return 'clipboardData' in t ? t.clipboardData : window.clipboardData;
    },
  }),
  Qx = mn(Zx),
  Jx = ft({}, bs, { data: 0 }),
  Tf = mn(Jx),
  e_ = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  t_ = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  n_ = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' };
function i_(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = n_[t]) ? !!e[t] : !1;
}
function _d() {
  return i_;
}
var r_ = ft({}, ba, {
    key: function (t) {
      if (t.key) {
        var e = e_[t.key] || t.key;
        if (e !== 'Unidentified') return e;
      }
      return t.type === 'keypress'
        ? ((t = Po(t)), t === 13 ? 'Enter' : String.fromCharCode(t))
        : t.type === 'keydown' || t.type === 'keyup'
        ? t_[t.keyCode] || 'Unidentified'
        : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: _d,
    charCode: function (t) {
      return t.type === 'keypress' ? Po(t) : 0;
    },
    keyCode: function (t) {
      return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === 'keypress'
        ? Po(t)
        : t.type === 'keydown' || t.type === 'keyup'
        ? t.keyCode
        : 0;
    },
  }),
  s_ = mn(r_),
  a_ = ft({}, vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Af = mn(a_),
  o_ = ft({}, ba, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: _d,
  }),
  l_ = mn(o_),
  c_ = ft({}, bs, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  u_ = mn(c_),
  d_ = ft({}, vl, {
    deltaX: function (t) {
      return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return 'deltaY' in t
        ? t.deltaY
        : 'wheelDeltaY' in t
        ? -t.wheelDeltaY
        : 'wheelDelta' in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  f_ = mn(d_),
  h_ = [9, 13, 27, 32],
  vd = ui && 'CompositionEvent' in window,
  Js = null;
ui && 'documentMode' in document && (Js = document.documentMode);
var p_ = ui && 'TextEvent' in window && !Js,
  Om = ui && (!vd || (Js && 8 < Js && 11 >= Js)),
  bf = ' ',
  Rf = !1;
function km(t, e) {
  switch (t) {
    case 'keyup':
      return h_.indexOf(e.keyCode) !== -1;
    case 'keydown':
      return e.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function zm(t) {
  return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null;
}
var Yr = !1;
function m_(t, e) {
  switch (t) {
    case 'compositionend':
      return zm(e);
    case 'keypress':
      return e.which !== 32 ? null : ((Rf = !0), bf);
    case 'textInput':
      return (t = e.data), t === bf && Rf ? null : t;
    default:
      return null;
  }
}
function g_(t, e) {
  if (Yr)
    return t === 'compositionend' || (!vd && km(t, e))
      ? ((t = Fm()), (Co = gd = Ci = null), (Yr = !1), t)
      : null;
  switch (t) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case 'compositionend':
      return Om && e.locale !== 'ko' ? null : e.data;
    default:
      return null;
  }
}
var x_ = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Cf(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === 'input' ? !!x_[t.type] : e === 'textarea';
}
function Bm(t, e, n, i) {
  xm(i),
    (e = qo(e, 'onChange')),
    0 < e.length &&
      ((n = new xd('onChange', 'change', null, n, i)), t.push({ event: n, listeners: e }));
}
var ea = null,
  fa = null;
function __(t) {
  Zm(t, 0);
}
function yl(t) {
  var e = Zr(t);
  if (um(e)) return t;
}
function v_(t, e) {
  if (t === 'change') return e;
}
var Hm = !1;
if (ui) {
  var Ql;
  if (ui) {
    var Jl = 'oninput' in document;
    if (!Jl) {
      var Pf = document.createElement('div');
      Pf.setAttribute('oninput', 'return;'), (Jl = typeof Pf.oninput == 'function');
    }
    Ql = Jl;
  } else Ql = !1;
  Hm = Ql && (!document.documentMode || 9 < document.documentMode);
}
function Nf() {
  ea && (ea.detachEvent('onpropertychange', Gm), (fa = ea = null));
}
function Gm(t) {
  if (t.propertyName === 'value' && yl(fa)) {
    var e = [];
    Bm(e, fa, t, dd(t)), Sm(__, e);
  }
}
function y_(t, e, n) {
  t === 'focusin'
    ? (Nf(), (ea = e), (fa = n), ea.attachEvent('onpropertychange', Gm))
    : t === 'focusout' && Nf();
}
function S_(t) {
  if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return yl(fa);
}
function M_(t, e) {
  if (t === 'click') return yl(e);
}
function E_(t, e) {
  if (t === 'input' || t === 'change') return yl(e);
}
function w_(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Fn = typeof Object.is == 'function' ? Object.is : w_;
function ha(t, e) {
  if (Fn(t, e)) return !0;
  if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1;
  var n = Object.keys(t),
    i = Object.keys(e);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var r = n[i];
    if (!Zc.call(e, r) || !Fn(t[r], e[r])) return !1;
  }
  return !0;
}
function Lf(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function Df(t, e) {
  var n = Lf(t);
  t = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = t + n.textContent.length), t <= e && i >= e)) return { node: n, offset: e - t };
      t = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Lf(n);
  }
}
function Vm(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? Vm(t, e.parentNode)
      : 'contains' in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function Wm() {
  for (var t = window, e = Bo(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var n = typeof e.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) t = e.contentWindow;
    else break;
    e = Bo(t.document);
  }
  return e;
}
function yd(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === 'input' &&
      (t.type === 'text' ||
        t.type === 'search' ||
        t.type === 'tel' ||
        t.type === 'url' ||
        t.type === 'password')) ||
      e === 'textarea' ||
      t.contentEditable === 'true')
  );
}
function T_(t) {
  var e = Wm(),
    n = t.focusedElem,
    i = t.selectionRange;
  if (e !== n && n && n.ownerDocument && Vm(n.ownerDocument.documentElement, n)) {
    if (i !== null && yd(n)) {
      if (((e = i.start), (t = i.end), t === void 0 && (t = e), 'selectionStart' in n))
        (n.selectionStart = e), (n.selectionEnd = Math.min(t, n.value.length));
      else if (
        ((t = ((e = n.ownerDocument || document) && e.defaultView) || window), t.getSelection)
      ) {
        t = t.getSelection();
        var r = n.textContent.length,
          s = Math.min(i.start, r);
        (i = i.end === void 0 ? s : Math.min(i.end, r)),
          !t.extend && s > i && ((r = i), (i = s), (s = r)),
          (r = Df(n, s));
        var a = Df(n, i);
        r &&
          a &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== r.node ||
            t.anchorOffset !== r.offset ||
            t.focusNode !== a.node ||
            t.focusOffset !== a.offset) &&
          ((e = e.createRange()),
          e.setStart(r.node, r.offset),
          t.removeAllRanges(),
          s > i
            ? (t.addRange(e), t.extend(a.node, a.offset))
            : (e.setEnd(a.node, a.offset), t.addRange(e)));
      }
    }
    for (e = [], t = n; (t = t.parentNode); )
      t.nodeType === 1 && e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < e.length; n++)
      (t = e[n]), (t.element.scrollLeft = t.left), (t.element.scrollTop = t.top);
  }
}
var A_ = ui && 'documentMode' in document && 11 >= document.documentMode,
  $r = null,
  gu = null,
  ta = null,
  xu = !1;
function Uf(t, e, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xu ||
    $r == null ||
    $r !== Bo(i) ||
    ((i = $r),
    'selectionStart' in i && yd(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = ((i.ownerDocument && i.ownerDocument.defaultView) || window).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (ta && ha(ta, i)) ||
      ((ta = i),
      (i = qo(gu, 'onSelect')),
      0 < i.length &&
        ((e = new xd('onSelect', 'select', null, e, n)),
        t.push({ event: e, listeners: i }),
        (e.target = $r))));
}
function Xa(t, e) {
  var n = {};
  return (
    (n[t.toLowerCase()] = e.toLowerCase()),
    (n['Webkit' + t] = 'webkit' + e),
    (n['Moz' + t] = 'moz' + e),
    n
  );
}
var Kr = {
    animationend: Xa('Animation', 'AnimationEnd'),
    animationiteration: Xa('Animation', 'AnimationIteration'),
    animationstart: Xa('Animation', 'AnimationStart'),
    transitionend: Xa('Transition', 'TransitionEnd'),
  },
  ec = {},
  jm = {};
ui &&
  ((jm = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Kr.animationend.animation,
    delete Kr.animationiteration.animation,
    delete Kr.animationstart.animation),
  'TransitionEvent' in window || delete Kr.transitionend.transition);
function Sl(t) {
  if (ec[t]) return ec[t];
  if (!Kr[t]) return t;
  var e = Kr[t],
    n;
  for (n in e) if (e.hasOwnProperty(n) && n in jm) return (ec[t] = e[n]);
  return t;
}
var Xm = Sl('animationend'),
  qm = Sl('animationiteration'),
  Ym = Sl('animationstart'),
  $m = Sl('transitionend'),
  Km = new Map(),
  If =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    );
function qi(t, e) {
  Km.set(t, e), Ar(e, [t]);
}
for (var tc = 0; tc < If.length; tc++) {
  var nc = If[tc],
    b_ = nc.toLowerCase(),
    R_ = nc[0].toUpperCase() + nc.slice(1);
  qi(b_, 'on' + R_);
}
qi(Xm, 'onAnimationEnd');
qi(qm, 'onAnimationIteration');
qi(Ym, 'onAnimationStart');
qi('dblclick', 'onDoubleClick');
qi('focusin', 'onFocus');
qi('focusout', 'onBlur');
qi($m, 'onTransitionEnd');
ps('onMouseEnter', ['mouseout', 'mouseover']);
ps('onMouseLeave', ['mouseout', 'mouseover']);
ps('onPointerEnter', ['pointerout', 'pointerover']);
ps('onPointerLeave', ['pointerout', 'pointerover']);
Ar('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Ar(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '),
);
Ar('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Ar('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Ar('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Ar('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Ks =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  C_ = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Ks));
function Ff(t, e, n) {
  var i = t.type || 'unknown-event';
  (t.currentTarget = n), bx(i, e, void 0, t), (t.currentTarget = null);
}
function Zm(t, e) {
  e = (e & 4) !== 0;
  for (var n = 0; n < t.length; n++) {
    var i = t[n],
      r = i.event;
    i = i.listeners;
    e: {
      var s = void 0;
      if (e)
        for (var a = i.length - 1; 0 <= a; a--) {
          var o = i[a],
            l = o.instance,
            c = o.currentTarget;
          if (((o = o.listener), l !== s && r.isPropagationStopped())) break e;
          Ff(r, o, c), (s = l);
        }
      else
        for (a = 0; a < i.length; a++) {
          if (
            ((o = i[a]),
            (l = o.instance),
            (c = o.currentTarget),
            (o = o.listener),
            l !== s && r.isPropagationStopped())
          )
            break e;
          Ff(r, o, c), (s = l);
        }
    }
  }
  if (Go) throw ((t = fu), (Go = !1), (fu = null), t);
}
function tt(t, e) {
  var n = e[Mu];
  n === void 0 && (n = e[Mu] = new Set());
  var i = t + '__bubble';
  n.has(i) || (Qm(e, t, 2, !1), n.add(i));
}
function ic(t, e, n) {
  var i = 0;
  e && (i |= 4), Qm(n, t, i, e);
}
var qa = '_reactListening' + Math.random().toString(36).slice(2);
function pa(t) {
  if (!t[qa]) {
    (t[qa] = !0),
      sm.forEach(function (n) {
        n !== 'selectionchange' && (C_.has(n) || ic(n, !1, t), ic(n, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[qa] || ((e[qa] = !0), ic('selectionchange', !1, e));
  }
}
function Qm(t, e, n, i) {
  switch (Im(e)) {
    case 1:
      var r = Vx;
      break;
    case 4:
      r = Wx;
      break;
    default:
      r = md;
  }
  (n = r.bind(null, e, n, t)),
    (r = void 0),
    !du || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (r = !0),
    i
      ? r !== void 0
        ? t.addEventListener(e, n, { capture: !0, passive: r })
        : t.addEventListener(e, n, !0)
      : r !== void 0
      ? t.addEventListener(e, n, { passive: r })
      : t.addEventListener(e, n, !1);
}
function rc(t, e, n, i, r) {
  var s = i;
  if (!(e & 1) && !(e & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var a = i.tag;
      if (a === 3 || a === 4) {
        var o = i.stateNode.containerInfo;
        if (o === r || (o.nodeType === 8 && o.parentNode === r)) break;
        if (a === 4)
          for (a = i.return; a !== null; ) {
            var l = a.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo), l === r || (l.nodeType === 8 && l.parentNode === r))
            )
              return;
            a = a.return;
          }
        for (; o !== null; ) {
          if (((a = dr(o)), a === null)) return;
          if (((l = a.tag), l === 5 || l === 6)) {
            i = s = a;
            continue e;
          }
          o = o.parentNode;
        }
      }
      i = i.return;
    }
  Sm(function () {
    var c = s,
      d = dd(n),
      f = [];
    e: {
      var h = Km.get(t);
      if (h !== void 0) {
        var g = xd,
          v = t;
        switch (t) {
          case 'keypress':
            if (Po(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            g = s_;
            break;
          case 'focusin':
            (v = 'focus'), (g = Zl);
            break;
          case 'focusout':
            (v = 'blur'), (g = Zl);
            break;
          case 'beforeblur':
          case 'afterblur':
            g = Zl;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = wf;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = qx;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = l_;
            break;
          case Xm:
          case qm:
          case Ym:
            g = Kx;
            break;
          case $m:
            g = u_;
            break;
          case 'scroll':
            g = jx;
            break;
          case 'wheel':
            g = f_;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            g = Qx;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Af;
        }
        var y = (e & 4) !== 0,
          p = !y && t === 'scroll',
          u = y ? (h !== null ? h + 'Capture' : null) : h;
        y = [];
        for (var _ = c, x; _ !== null; ) {
          x = _;
          var E = x.stateNode;
          if (
            (x.tag === 5 &&
              E !== null &&
              ((x = E), u !== null && ((E = la(_, u)), E != null && y.push(ma(_, E, x)))),
            p)
          )
            break;
          _ = _.return;
        }
        0 < y.length && ((h = new g(h, v, null, n, d)), f.push({ event: h, listeners: y }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((h = t === 'mouseover' || t === 'pointerover'),
          (g = t === 'mouseout' || t === 'pointerout'),
          h && n !== cu && (v = n.relatedTarget || n.fromElement) && (dr(v) || v[di]))
        )
          break e;
        if (
          (g || h) &&
          ((h =
            d.window === d ? d : (h = d.ownerDocument) ? h.defaultView || h.parentWindow : window),
          g
            ? ((v = n.relatedTarget || n.toElement),
              (g = c),
              (v = v ? dr(v) : null),
              v !== null && ((p = br(v)), v !== p || (v.tag !== 5 && v.tag !== 6)) && (v = null))
            : ((g = null), (v = c)),
          g !== v)
        ) {
          if (
            ((y = wf),
            (E = 'onMouseLeave'),
            (u = 'onMouseEnter'),
            (_ = 'mouse'),
            (t === 'pointerout' || t === 'pointerover') &&
              ((y = Af), (E = 'onPointerLeave'), (u = 'onPointerEnter'), (_ = 'pointer')),
            (p = g == null ? h : Zr(g)),
            (x = v == null ? h : Zr(v)),
            (h = new y(E, _ + 'leave', g, n, d)),
            (h.target = p),
            (h.relatedTarget = x),
            (E = null),
            dr(d) === c &&
              ((y = new y(u, _ + 'enter', v, n, d)),
              (y.target = x),
              (y.relatedTarget = p),
              (E = y)),
            (p = E),
            g && v)
          )
            t: {
              for (y = g, u = v, _ = 0, x = y; x; x = Cr(x)) _++;
              for (x = 0, E = u; E; E = Cr(E)) x++;
              for (; 0 < _ - x; ) (y = Cr(y)), _--;
              for (; 0 < x - _; ) (u = Cr(u)), x--;
              for (; _--; ) {
                if (y === u || (u !== null && y === u.alternate)) break t;
                (y = Cr(y)), (u = Cr(u));
              }
              y = null;
            }
          else y = null;
          g !== null && Of(f, h, g, y, !1), v !== null && p !== null && Of(f, p, v, y, !0);
        }
      }
      e: {
        if (
          ((h = c ? Zr(c) : window),
          (g = h.nodeName && h.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && h.type === 'file'))
        )
          var C = v_;
        else if (Cf(h))
          if (Hm) C = E_;
          else {
            C = S_;
            var b = y_;
          }
        else
          (g = h.nodeName) &&
            g.toLowerCase() === 'input' &&
            (h.type === 'checkbox' || h.type === 'radio') &&
            (C = M_);
        if (C && (C = C(t, c))) {
          Bm(f, C, n, d);
          break e;
        }
        b && b(t, h, c),
          t === 'focusout' &&
            (b = h._wrapperState) &&
            b.controlled &&
            h.type === 'number' &&
            ru(h, 'number', h.value);
      }
      switch (((b = c ? Zr(c) : window), t)) {
        case 'focusin':
          (Cf(b) || b.contentEditable === 'true') && (($r = b), (gu = c), (ta = null));
          break;
        case 'focusout':
          ta = gu = $r = null;
          break;
        case 'mousedown':
          xu = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (xu = !1), Uf(f, n, d);
          break;
        case 'selectionchange':
          if (A_) break;
        case 'keydown':
        case 'keyup':
          Uf(f, n, d);
      }
      var T;
      if (vd)
        e: {
          switch (t) {
            case 'compositionstart':
              var D = 'onCompositionStart';
              break e;
            case 'compositionend':
              D = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              D = 'onCompositionUpdate';
              break e;
          }
          D = void 0;
        }
      else
        Yr
          ? km(t, n) && (D = 'onCompositionEnd')
          : t === 'keydown' && n.keyCode === 229 && (D = 'onCompositionStart');
      D &&
        (Om &&
          n.locale !== 'ko' &&
          (Yr || D !== 'onCompositionStart'
            ? D === 'onCompositionEnd' && Yr && (T = Fm())
            : ((Ci = d), (gd = 'value' in Ci ? Ci.value : Ci.textContent), (Yr = !0))),
        (b = qo(c, D)),
        0 < b.length &&
          ((D = new Tf(D, t, null, n, d)),
          f.push({ event: D, listeners: b }),
          T ? (D.data = T) : ((T = zm(n)), T !== null && (D.data = T)))),
        (T = p_ ? m_(t, n) : g_(t, n)) &&
          ((c = qo(c, 'onBeforeInput')),
          0 < c.length &&
            ((d = new Tf('onBeforeInput', 'beforeinput', null, n, d)),
            f.push({ event: d, listeners: c }),
            (d.data = T)));
    }
    Zm(f, e);
  });
}
function ma(t, e, n) {
  return { instance: t, listener: e, currentTarget: n };
}
function qo(t, e) {
  for (var n = e + 'Capture', i = []; t !== null; ) {
    var r = t,
      s = r.stateNode;
    r.tag === 5 &&
      s !== null &&
      ((r = s),
      (s = la(t, n)),
      s != null && i.unshift(ma(t, s, r)),
      (s = la(t, e)),
      s != null && i.push(ma(t, s, r))),
      (t = t.return);
  }
  return i;
}
function Cr(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Of(t, e, n, i, r) {
  for (var s = e._reactName, a = []; n !== null && n !== i; ) {
    var o = n,
      l = o.alternate,
      c = o.stateNode;
    if (l !== null && l === i) break;
    o.tag === 5 &&
      c !== null &&
      ((o = c),
      r
        ? ((l = la(n, s)), l != null && a.unshift(ma(n, l, o)))
        : r || ((l = la(n, s)), l != null && a.push(ma(n, l, o)))),
      (n = n.return);
  }
  a.length !== 0 && t.push({ event: e, listeners: a });
}
var P_ = /\r\n?/g,
  N_ = /\u0000|\uFFFD/g;
function kf(t) {
  return (typeof t == 'string' ? t : '' + t)
    .replace(
      P_,
      `
`,
    )
    .replace(N_, '');
}
function Ya(t, e, n) {
  if (((e = kf(e)), kf(t) !== e && n)) throw Error(ee(425));
}
function Yo() {}
var _u = null,
  vu = null;
function yu(t, e) {
  return (
    t === 'textarea' ||
    t === 'noscript' ||
    typeof e.children == 'string' ||
    typeof e.children == 'number' ||
    (typeof e.dangerouslySetInnerHTML == 'object' &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var Su = typeof setTimeout == 'function' ? setTimeout : void 0,
  L_ = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  zf = typeof Promise == 'function' ? Promise : void 0,
  D_ =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof zf < 'u'
      ? function (t) {
          return zf.resolve(null).then(t).catch(U_);
        }
      : Su;
function U_(t) {
  setTimeout(function () {
    throw t;
  });
}
function sc(t, e) {
  var n = e,
    i = 0;
  do {
    var r = n.nextSibling;
    if ((t.removeChild(n), r && r.nodeType === 8))
      if (((n = r.data), n === '/$')) {
        if (i === 0) {
          t.removeChild(r), da(e);
          return;
        }
        i--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || i++;
    n = r;
  } while (n);
  da(e);
}
function Ii(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === '$' || e === '$!' || e === '$?')) break;
      if (e === '/$') return null;
    }
  }
  return t;
}
function Bf(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var n = t.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (e === 0) return t;
        e--;
      } else n === '/$' && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var Rs = Math.random().toString(36).slice(2),
  Gn = '__reactFiber$' + Rs,
  ga = '__reactProps$' + Rs,
  di = '__reactContainer$' + Rs,
  Mu = '__reactEvents$' + Rs,
  I_ = '__reactListeners$' + Rs,
  F_ = '__reactHandles$' + Rs;
function dr(t) {
  var e = t[Gn];
  if (e) return e;
  for (var n = t.parentNode; n; ) {
    if ((e = n[di] || n[Gn])) {
      if (((n = e.alternate), e.child !== null || (n !== null && n.child !== null)))
        for (t = Bf(t); t !== null; ) {
          if ((n = t[Gn])) return n;
          t = Bf(t);
        }
      return e;
    }
    (t = n), (n = t.parentNode);
  }
  return null;
}
function Ra(t) {
  return (
    (t = t[Gn] || t[di]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Zr(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(ee(33));
}
function Ml(t) {
  return t[ga] || null;
}
var Eu = [],
  Qr = -1;
function Yi(t) {
  return { current: t };
}
function it(t) {
  0 > Qr || ((t.current = Eu[Qr]), (Eu[Qr] = null), Qr--);
}
function Je(t, e) {
  Qr++, (Eu[Qr] = t.current), (t.current = e);
}
var Wi = {},
  zt = Yi(Wi),
  Jt = Yi(!1),
  vr = Wi;
function ms(t, e) {
  var n = t.type.contextTypes;
  if (!n) return Wi;
  var i = t.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === e)
    return i.__reactInternalMemoizedMaskedChildContext;
  var r = {},
    s;
  for (s in n) r[s] = e[s];
  return (
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = r)),
    r
  );
}
function en(t) {
  return (t = t.childContextTypes), t != null;
}
function $o() {
  it(Jt), it(zt);
}
function Hf(t, e, n) {
  if (zt.current !== Wi) throw Error(ee(168));
  Je(zt, e), Je(Jt, n);
}
function Jm(t, e, n) {
  var i = t.stateNode;
  if (((e = e.childContextTypes), typeof i.getChildContext != 'function')) return n;
  i = i.getChildContext();
  for (var r in i) if (!(r in e)) throw Error(ee(108, yx(t) || 'Unknown', r));
  return ft({}, n, i);
}
function Ko(t) {
  return (
    (t = ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Wi),
    (vr = zt.current),
    Je(zt, t),
    Je(Jt, Jt.current),
    !0
  );
}
function Gf(t, e, n) {
  var i = t.stateNode;
  if (!i) throw Error(ee(169));
  n
    ? ((t = Jm(t, e, vr)),
      (i.__reactInternalMemoizedMergedChildContext = t),
      it(Jt),
      it(zt),
      Je(zt, t))
    : it(Jt),
    Je(Jt, n);
}
var ni = null,
  El = !1,
  ac = !1;
function eg(t) {
  ni === null ? (ni = [t]) : ni.push(t);
}
function O_(t) {
  (El = !0), eg(t);
}
function $i() {
  if (!ac && ni !== null) {
    ac = !0;
    var t = 0,
      e = $e;
    try {
      var n = ni;
      for ($e = 1; t < n.length; t++) {
        var i = n[t];
        do i = i(!0);
        while (i !== null);
      }
      (ni = null), (El = !1);
    } catch (r) {
      throw (ni !== null && (ni = ni.slice(t + 1)), Tm(fd, $i), r);
    } finally {
      ($e = e), (ac = !1);
    }
  }
  return null;
}
var Jr = [],
  es = 0,
  Zo = null,
  Qo = 0,
  vn = [],
  yn = 0,
  yr = null,
  si = 1,
  ai = '';
function sr(t, e) {
  (Jr[es++] = Qo), (Jr[es++] = Zo), (Zo = t), (Qo = e);
}
function tg(t, e, n) {
  (vn[yn++] = si), (vn[yn++] = ai), (vn[yn++] = yr), (yr = t);
  var i = si;
  t = ai;
  var r = 32 - Un(i) - 1;
  (i &= ~(1 << r)), (n += 1);
  var s = 32 - Un(e) + r;
  if (30 < s) {
    var a = r - (r % 5);
    (s = (i & ((1 << a) - 1)).toString(32)),
      (i >>= a),
      (r -= a),
      (si = (1 << (32 - Un(e) + r)) | (n << r) | i),
      (ai = s + t);
  } else (si = (1 << s) | (n << r) | i), (ai = t);
}
function Sd(t) {
  t.return !== null && (sr(t, 1), tg(t, 1, 0));
}
function Md(t) {
  for (; t === Zo; ) (Zo = Jr[--es]), (Jr[es] = null), (Qo = Jr[--es]), (Jr[es] = null);
  for (; t === yr; )
    (yr = vn[--yn]),
      (vn[yn] = null),
      (ai = vn[--yn]),
      (vn[yn] = null),
      (si = vn[--yn]),
      (vn[yn] = null);
}
var fn = null,
  dn = null,
  at = !1,
  Nn = null;
function ng(t, e) {
  var n = Sn(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = e),
    (n.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [n]), (t.flags |= 16)) : e.push(n);
}
function Vf(t, e) {
  switch (t.tag) {
    case 5:
      var n = t.type;
      return (
        (e = e.nodeType !== 1 || n.toLowerCase() !== e.nodeName.toLowerCase() ? null : e),
        e !== null ? ((t.stateNode = e), (fn = t), (dn = Ii(e.firstChild)), !0) : !1
      );
    case 6:
      return (
        (e = t.pendingProps === '' || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (fn = t), (dn = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((n = yr !== null ? { id: si, overflow: ai } : null),
            (t.memoizedState = { dehydrated: e, treeContext: n, retryLane: 1073741824 }),
            (n = Sn(18, null, null, 0)),
            (n.stateNode = e),
            (n.return = t),
            (t.child = n),
            (fn = t),
            (dn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function wu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function Tu(t) {
  if (at) {
    var e = dn;
    if (e) {
      var n = e;
      if (!Vf(t, e)) {
        if (wu(t)) throw Error(ee(418));
        e = Ii(n.nextSibling);
        var i = fn;
        e && Vf(t, e) ? ng(i, n) : ((t.flags = (t.flags & -4097) | 2), (at = !1), (fn = t));
      }
    } else {
      if (wu(t)) throw Error(ee(418));
      (t.flags = (t.flags & -4097) | 2), (at = !1), (fn = t);
    }
  }
}
function Wf(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; ) t = t.return;
  fn = t;
}
function $a(t) {
  if (t !== fn) return !1;
  if (!at) return Wf(t), (at = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type), (e = e !== 'head' && e !== 'body' && !yu(t.type, t.memoizedProps))),
    e && (e = dn))
  ) {
    if (wu(t)) throw (ig(), Error(ee(418)));
    for (; e; ) ng(t, e), (e = Ii(e.nextSibling));
  }
  if ((Wf(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(ee(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var n = t.data;
          if (n === '/$') {
            if (e === 0) {
              dn = Ii(t.nextSibling);
              break e;
            }
            e--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || e++;
        }
        t = t.nextSibling;
      }
      dn = null;
    }
  } else dn = fn ? Ii(t.stateNode.nextSibling) : null;
  return !0;
}
function ig() {
  for (var t = dn; t; ) t = Ii(t.nextSibling);
}
function gs() {
  (dn = fn = null), (at = !1);
}
function Ed(t) {
  Nn === null ? (Nn = [t]) : Nn.push(t);
}
var k_ = mi.ReactCurrentBatchConfig;
function Os(t, e, n) {
  if (((t = n.ref), t !== null && typeof t != 'function' && typeof t != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(ee(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(ee(147, t));
      var r = i,
        s = '' + t;
      return e !== null && e.ref !== null && typeof e.ref == 'function' && e.ref._stringRef === s
        ? e.ref
        : ((e = function (a) {
            var o = r.refs;
            a === null ? delete o[s] : (o[s] = a);
          }),
          (e._stringRef = s),
          e);
    }
    if (typeof t != 'string') throw Error(ee(284));
    if (!n._owner) throw Error(ee(290, t));
  }
  return t;
}
function Ka(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      ee(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t),
    ))
  );
}
function jf(t) {
  var e = t._init;
  return e(t._payload);
}
function rg(t) {
  function e(u, _) {
    if (t) {
      var x = u.deletions;
      x === null ? ((u.deletions = [_]), (u.flags |= 16)) : x.push(_);
    }
  }
  function n(u, _) {
    if (!t) return null;
    for (; _ !== null; ) e(u, _), (_ = _.sibling);
    return null;
  }
  function i(u, _) {
    for (u = new Map(); _ !== null; )
      _.key !== null ? u.set(_.key, _) : u.set(_.index, _), (_ = _.sibling);
    return u;
  }
  function r(u, _) {
    return (u = zi(u, _)), (u.index = 0), (u.sibling = null), u;
  }
  function s(u, _, x) {
    return (
      (u.index = x),
      t
        ? ((x = u.alternate),
          x !== null ? ((x = x.index), x < _ ? ((u.flags |= 2), _) : x) : ((u.flags |= 2), _))
        : ((u.flags |= 1048576), _)
    );
  }
  function a(u) {
    return t && u.alternate === null && (u.flags |= 2), u;
  }
  function o(u, _, x, E) {
    return _ === null || _.tag !== 6
      ? ((_ = hc(x, u.mode, E)), (_.return = u), _)
      : ((_ = r(_, x)), (_.return = u), _);
  }
  function l(u, _, x, E) {
    var C = x.type;
    return C === qr
      ? d(u, _, x.props.children, E, x.key)
      : _ !== null &&
        (_.elementType === C ||
          (typeof C == 'object' && C !== null && C.$$typeof === wi && jf(C) === _.type))
      ? ((E = r(_, x.props)), (E.ref = Os(u, _, x)), (E.return = u), E)
      : ((E = Oo(x.type, x.key, x.props, null, u.mode, E)),
        (E.ref = Os(u, _, x)),
        (E.return = u),
        E);
  }
  function c(u, _, x, E) {
    return _ === null ||
      _.tag !== 4 ||
      _.stateNode.containerInfo !== x.containerInfo ||
      _.stateNode.implementation !== x.implementation
      ? ((_ = pc(x, u.mode, E)), (_.return = u), _)
      : ((_ = r(_, x.children || [])), (_.return = u), _);
  }
  function d(u, _, x, E, C) {
    return _ === null || _.tag !== 7
      ? ((_ = gr(x, u.mode, E, C)), (_.return = u), _)
      : ((_ = r(_, x)), (_.return = u), _);
  }
  function f(u, _, x) {
    if ((typeof _ == 'string' && _ !== '') || typeof _ == 'number')
      return (_ = hc('' + _, u.mode, x)), (_.return = u), _;
    if (typeof _ == 'object' && _ !== null) {
      switch (_.$$typeof) {
        case za:
          return (
            (x = Oo(_.type, _.key, _.props, null, u.mode, x)),
            (x.ref = Os(u, null, _)),
            (x.return = u),
            x
          );
        case Xr:
          return (_ = pc(_, u.mode, x)), (_.return = u), _;
        case wi:
          var E = _._init;
          return f(u, E(_._payload), x);
      }
      if (Ys(_) || Ls(_)) return (_ = gr(_, u.mode, x, null)), (_.return = u), _;
      Ka(u, _);
    }
    return null;
  }
  function h(u, _, x, E) {
    var C = _ !== null ? _.key : null;
    if ((typeof x == 'string' && x !== '') || typeof x == 'number')
      return C !== null ? null : o(u, _, '' + x, E);
    if (typeof x == 'object' && x !== null) {
      switch (x.$$typeof) {
        case za:
          return x.key === C ? l(u, _, x, E) : null;
        case Xr:
          return x.key === C ? c(u, _, x, E) : null;
        case wi:
          return (C = x._init), h(u, _, C(x._payload), E);
      }
      if (Ys(x) || Ls(x)) return C !== null ? null : d(u, _, x, E, null);
      Ka(u, x);
    }
    return null;
  }
  function g(u, _, x, E, C) {
    if ((typeof E == 'string' && E !== '') || typeof E == 'number')
      return (u = u.get(x) || null), o(_, u, '' + E, C);
    if (typeof E == 'object' && E !== null) {
      switch (E.$$typeof) {
        case za:
          return (u = u.get(E.key === null ? x : E.key) || null), l(_, u, E, C);
        case Xr:
          return (u = u.get(E.key === null ? x : E.key) || null), c(_, u, E, C);
        case wi:
          var b = E._init;
          return g(u, _, x, b(E._payload), C);
      }
      if (Ys(E) || Ls(E)) return (u = u.get(x) || null), d(_, u, E, C, null);
      Ka(_, E);
    }
    return null;
  }
  function v(u, _, x, E) {
    for (var C = null, b = null, T = _, D = (_ = 0), Y = null; T !== null && D < x.length; D++) {
      T.index > D ? ((Y = T), (T = null)) : (Y = T.sibling);
      var S = h(u, T, x[D], E);
      if (S === null) {
        T === null && (T = Y);
        break;
      }
      t && T && S.alternate === null && e(u, T),
        (_ = s(S, _, D)),
        b === null ? (C = S) : (b.sibling = S),
        (b = S),
        (T = Y);
    }
    if (D === x.length) return n(u, T), at && sr(u, D), C;
    if (T === null) {
      for (; D < x.length; D++)
        (T = f(u, x[D], E)),
          T !== null && ((_ = s(T, _, D)), b === null ? (C = T) : (b.sibling = T), (b = T));
      return at && sr(u, D), C;
    }
    for (T = i(u, T); D < x.length; D++)
      (Y = g(T, u, D, x[D], E)),
        Y !== null &&
          (t && Y.alternate !== null && T.delete(Y.key === null ? D : Y.key),
          (_ = s(Y, _, D)),
          b === null ? (C = Y) : (b.sibling = Y),
          (b = Y));
    return (
      t &&
        T.forEach(function (R) {
          return e(u, R);
        }),
      at && sr(u, D),
      C
    );
  }
  function y(u, _, x, E) {
    var C = Ls(x);
    if (typeof C != 'function') throw Error(ee(150));
    if (((x = C.call(x)), x == null)) throw Error(ee(151));
    for (
      var b = (C = null), T = _, D = (_ = 0), Y = null, S = x.next();
      T !== null && !S.done;
      D++, S = x.next()
    ) {
      T.index > D ? ((Y = T), (T = null)) : (Y = T.sibling);
      var R = h(u, T, S.value, E);
      if (R === null) {
        T === null && (T = Y);
        break;
      }
      t && T && R.alternate === null && e(u, T),
        (_ = s(R, _, D)),
        b === null ? (C = R) : (b.sibling = R),
        (b = R),
        (T = Y);
    }
    if (S.done) return n(u, T), at && sr(u, D), C;
    if (T === null) {
      for (; !S.done; D++, S = x.next())
        (S = f(u, S.value, E)),
          S !== null && ((_ = s(S, _, D)), b === null ? (C = S) : (b.sibling = S), (b = S));
      return at && sr(u, D), C;
    }
    for (T = i(u, T); !S.done; D++, S = x.next())
      (S = g(T, u, D, S.value, E)),
        S !== null &&
          (t && S.alternate !== null && T.delete(S.key === null ? D : S.key),
          (_ = s(S, _, D)),
          b === null ? (C = S) : (b.sibling = S),
          (b = S));
    return (
      t &&
        T.forEach(function (ne) {
          return e(u, ne);
        }),
      at && sr(u, D),
      C
    );
  }
  function p(u, _, x, E) {
    if (
      (typeof x == 'object' &&
        x !== null &&
        x.type === qr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == 'object' && x !== null)
    ) {
      switch (x.$$typeof) {
        case za:
          e: {
            for (var C = x.key, b = _; b !== null; ) {
              if (b.key === C) {
                if (((C = x.type), C === qr)) {
                  if (b.tag === 7) {
                    n(u, b.sibling), (_ = r(b, x.props.children)), (_.return = u), (u = _);
                    break e;
                  }
                } else if (
                  b.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === wi && jf(C) === b.type)
                ) {
                  n(u, b.sibling),
                    (_ = r(b, x.props)),
                    (_.ref = Os(u, b, x)),
                    (_.return = u),
                    (u = _);
                  break e;
                }
                n(u, b);
                break;
              } else e(u, b);
              b = b.sibling;
            }
            x.type === qr
              ? ((_ = gr(x.props.children, u.mode, E, x.key)), (_.return = u), (u = _))
              : ((E = Oo(x.type, x.key, x.props, null, u.mode, E)),
                (E.ref = Os(u, _, x)),
                (E.return = u),
                (u = E));
          }
          return a(u);
        case Xr:
          e: {
            for (b = x.key; _ !== null; ) {
              if (_.key === b)
                if (
                  _.tag === 4 &&
                  _.stateNode.containerInfo === x.containerInfo &&
                  _.stateNode.implementation === x.implementation
                ) {
                  n(u, _.sibling), (_ = r(_, x.children || [])), (_.return = u), (u = _);
                  break e;
                } else {
                  n(u, _);
                  break;
                }
              else e(u, _);
              _ = _.sibling;
            }
            (_ = pc(x, u.mode, E)), (_.return = u), (u = _);
          }
          return a(u);
        case wi:
          return (b = x._init), p(u, _, b(x._payload), E);
      }
      if (Ys(x)) return v(u, _, x, E);
      if (Ls(x)) return y(u, _, x, E);
      Ka(u, x);
    }
    return (typeof x == 'string' && x !== '') || typeof x == 'number'
      ? ((x = '' + x),
        _ !== null && _.tag === 6
          ? (n(u, _.sibling), (_ = r(_, x)), (_.return = u), (u = _))
          : (n(u, _), (_ = hc(x, u.mode, E)), (_.return = u), (u = _)),
        a(u))
      : n(u, _);
  }
  return p;
}
var xs = rg(!0),
  sg = rg(!1),
  Jo = Yi(null),
  el = null,
  ts = null,
  wd = null;
function Td() {
  wd = ts = el = null;
}
function Ad(t) {
  var e = Jo.current;
  it(Jo), (t._currentValue = e);
}
function Au(t, e, n) {
  for (; t !== null; ) {
    var i = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), i !== null && (i.childLanes |= e))
        : i !== null && (i.childLanes & e) !== e && (i.childLanes |= e),
      t === n)
    )
      break;
    t = t.return;
  }
}
function us(t, e) {
  (el = t),
    (wd = ts = null),
    (t = t.dependencies),
    t !== null && t.firstContext !== null && (t.lanes & e && (Qt = !0), (t.firstContext = null));
}
function En(t) {
  var e = t._currentValue;
  if (wd !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), ts === null)) {
      if (el === null) throw Error(ee(308));
      (ts = t), (el.dependencies = { lanes: 0, firstContext: t });
    } else ts = ts.next = t;
  return e;
}
var fr = null;
function bd(t) {
  fr === null ? (fr = [t]) : fr.push(t);
}
function ag(t, e, n, i) {
  var r = e.interleaved;
  return (
    r === null ? ((n.next = n), bd(e)) : ((n.next = r.next), (r.next = n)),
    (e.interleaved = n),
    fi(t, i)
  );
}
function fi(t, e) {
  t.lanes |= e;
  var n = t.alternate;
  for (n !== null && (n.lanes |= e), n = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (n = t.alternate),
      n !== null && (n.childLanes |= e),
      (n = t),
      (t = t.return);
  return n.tag === 3 ? n.stateNode : null;
}
var Ti = !1;
function Rd(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function og(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function ci(t, e) {
  return { eventTime: t, lane: e, tag: 0, payload: null, callback: null, next: null };
}
function Fi(t, e, n) {
  var i = t.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), Xe & 2)) {
    var r = i.pending;
    return r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)), (i.pending = e), fi(t, n);
  }
  return (
    (r = i.interleaved),
    r === null ? ((e.next = e), bd(i)) : ((e.next = r.next), (r.next = e)),
    (i.interleaved = e),
    fi(t, n)
  );
}
function No(t, e, n) {
  if (((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194240) !== 0))) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), hd(t, n);
  }
}
function Xf(t, e) {
  var n = t.updateQueue,
    i = t.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var r = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (r = s = a) : (s = s.next = a), (n = n.next);
      } while (n !== null);
      s === null ? (r = s = e) : (s = s.next = e);
    } else r = s = e;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: r,
      lastBaseUpdate: s,
      shared: i.shared,
      effects: i.effects,
    }),
      (t.updateQueue = n);
    return;
  }
  (t = n.lastBaseUpdate),
    t === null ? (n.firstBaseUpdate = e) : (t.next = e),
    (n.lastBaseUpdate = e);
}
function tl(t, e, n, i) {
  var r = t.updateQueue;
  Ti = !1;
  var s = r.firstBaseUpdate,
    a = r.lastBaseUpdate,
    o = r.shared.pending;
  if (o !== null) {
    r.shared.pending = null;
    var l = o,
      c = l.next;
    (l.next = null), a === null ? (s = c) : (a.next = c), (a = l);
    var d = t.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (o = d.lastBaseUpdate),
      o !== a && (o === null ? (d.firstBaseUpdate = c) : (o.next = c), (d.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var f = r.baseState;
    (a = 0), (d = c = l = null), (o = s);
    do {
      var h = o.lane,
        g = o.eventTime;
      if ((i & h) === h) {
        d !== null &&
          (d = d.next =
            {
              eventTime: g,
              lane: 0,
              tag: o.tag,
              payload: o.payload,
              callback: o.callback,
              next: null,
            });
        e: {
          var v = t,
            y = o;
          switch (((h = e), (g = n), y.tag)) {
            case 1:
              if (((v = y.payload), typeof v == 'function')) {
                f = v.call(g, f, h);
                break e;
              }
              f = v;
              break e;
            case 3:
              v.flags = (v.flags & -65537) | 128;
            case 0:
              if (((v = y.payload), (h = typeof v == 'function' ? v.call(g, f, h) : v), h == null))
                break e;
              f = ft({}, f, h);
              break e;
            case 2:
              Ti = !0;
          }
        }
        o.callback !== null &&
          o.lane !== 0 &&
          ((t.flags |= 64), (h = r.effects), h === null ? (r.effects = [o]) : h.push(o));
      } else
        (g = {
          eventTime: g,
          lane: h,
          tag: o.tag,
          payload: o.payload,
          callback: o.callback,
          next: null,
        }),
          d === null ? ((c = d = g), (l = f)) : (d = d.next = g),
          (a |= h);
      if (((o = o.next), o === null)) {
        if (((o = r.shared.pending), o === null)) break;
        (h = o), (o = h.next), (h.next = null), (r.lastBaseUpdate = h), (r.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (l = f),
      (r.baseState = l),
      (r.firstBaseUpdate = c),
      (r.lastBaseUpdate = d),
      (e = r.shared.interleaved),
      e !== null)
    ) {
      r = e;
      do (a |= r.lane), (r = r.next);
      while (r !== e);
    } else s === null && (r.shared.lanes = 0);
    (Mr |= a), (t.lanes = a), (t.memoizedState = f);
  }
}
function qf(t, e, n) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var i = t[e],
        r = i.callback;
      if (r !== null) {
        if (((i.callback = null), (i = n), typeof r != 'function')) throw Error(ee(191, r));
        r.call(i);
      }
    }
}
var Ca = {},
  jn = Yi(Ca),
  xa = Yi(Ca),
  _a = Yi(Ca);
function hr(t) {
  if (t === Ca) throw Error(ee(174));
  return t;
}
function Cd(t, e) {
  switch ((Je(_a, e), Je(xa, t), Je(jn, Ca), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : au(null, '');
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = au(e, t));
  }
  it(jn), Je(jn, e);
}
function _s() {
  it(jn), it(xa), it(_a);
}
function lg(t) {
  hr(_a.current);
  var e = hr(jn.current),
    n = au(e, t.type);
  e !== n && (Je(xa, t), Je(jn, n));
}
function Pd(t) {
  xa.current === t && (it(jn), it(xa));
}
var ct = Yi(0);
function nl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!'))
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var oc = [];
function Nd() {
  for (var t = 0; t < oc.length; t++) oc[t]._workInProgressVersionPrimary = null;
  oc.length = 0;
}
var Lo = mi.ReactCurrentDispatcher,
  lc = mi.ReactCurrentBatchConfig,
  Sr = 0,
  ut = null,
  yt = null,
  At = null,
  il = !1,
  na = !1,
  va = 0,
  z_ = 0;
function Ut() {
  throw Error(ee(321));
}
function Ld(t, e) {
  if (e === null) return !1;
  for (var n = 0; n < e.length && n < t.length; n++) if (!Fn(t[n], e[n])) return !1;
  return !0;
}
function Dd(t, e, n, i, r, s) {
  if (
    ((Sr = s),
    (ut = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    (Lo.current = t === null || t.memoizedState === null ? V_ : W_),
    (t = n(i, r)),
    na)
  ) {
    s = 0;
    do {
      if (((na = !1), (va = 0), 25 <= s)) throw Error(ee(301));
      (s += 1), (At = yt = null), (e.updateQueue = null), (Lo.current = j_), (t = n(i, r));
    } while (na);
  }
  if (
    ((Lo.current = rl),
    (e = yt !== null && yt.next !== null),
    (Sr = 0),
    (At = yt = ut = null),
    (il = !1),
    e)
  )
    throw Error(ee(300));
  return t;
}
function Ud() {
  var t = va !== 0;
  return (va = 0), t;
}
function zn() {
  var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return At === null ? (ut.memoizedState = At = t) : (At = At.next = t), At;
}
function wn() {
  if (yt === null) {
    var t = ut.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = yt.next;
  var e = At === null ? ut.memoizedState : At.next;
  if (e !== null) (At = e), (yt = t);
  else {
    if (t === null) throw Error(ee(310));
    (yt = t),
      (t = {
        memoizedState: yt.memoizedState,
        baseState: yt.baseState,
        baseQueue: yt.baseQueue,
        queue: yt.queue,
        next: null,
      }),
      At === null ? (ut.memoizedState = At = t) : (At = At.next = t);
  }
  return At;
}
function ya(t, e) {
  return typeof e == 'function' ? e(t) : e;
}
function cc(t) {
  var e = wn(),
    n = e.queue;
  if (n === null) throw Error(ee(311));
  n.lastRenderedReducer = t;
  var i = yt,
    r = i.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (r !== null) {
      var a = r.next;
      (r.next = s.next), (s.next = a);
    }
    (i.baseQueue = r = s), (n.pending = null);
  }
  if (r !== null) {
    (s = r.next), (i = i.baseState);
    var o = (a = null),
      l = null,
      c = s;
    do {
      var d = c.lane;
      if ((Sr & d) === d)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (i = c.hasEagerState ? c.eagerState : t(i, c.action));
      else {
        var f = {
          lane: d,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((o = l = f), (a = i)) : (l = l.next = f), (ut.lanes |= d), (Mr |= d);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (a = i) : (l.next = o),
      Fn(i, e.memoizedState) || (Qt = !0),
      (e.memoizedState = i),
      (e.baseState = a),
      (e.baseQueue = l),
      (n.lastRenderedState = i);
  }
  if (((t = n.interleaved), t !== null)) {
    r = t;
    do (s = r.lane), (ut.lanes |= s), (Mr |= s), (r = r.next);
    while (r !== t);
  } else r === null && (n.lanes = 0);
  return [e.memoizedState, n.dispatch];
}
function uc(t) {
  var e = wn(),
    n = e.queue;
  if (n === null) throw Error(ee(311));
  n.lastRenderedReducer = t;
  var i = n.dispatch,
    r = n.pending,
    s = e.memoizedState;
  if (r !== null) {
    n.pending = null;
    var a = (r = r.next);
    do (s = t(s, a.action)), (a = a.next);
    while (a !== r);
    Fn(s, e.memoizedState) || (Qt = !0),
      (e.memoizedState = s),
      e.baseQueue === null && (e.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, i];
}
function cg() {}
function ug(t, e) {
  var n = ut,
    i = wn(),
    r = e(),
    s = !Fn(i.memoizedState, r);
  if (
    (s && ((i.memoizedState = r), (Qt = !0)),
    (i = i.queue),
    Id(hg.bind(null, n, i, t), [t]),
    i.getSnapshot !== e || s || (At !== null && At.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), Sa(9, fg.bind(null, n, i, r, e), void 0, null), bt === null))
      throw Error(ee(349));
    Sr & 30 || dg(n, e, r);
  }
  return r;
}
function dg(t, e, n) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: n }),
    (e = ut.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }), (ut.updateQueue = e), (e.stores = [t]))
      : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t));
}
function fg(t, e, n, i) {
  (e.value = n), (e.getSnapshot = i), pg(e) && mg(t);
}
function hg(t, e, n) {
  return n(function () {
    pg(e) && mg(t);
  });
}
function pg(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var n = e();
    return !Fn(t, n);
  } catch {
    return !0;
  }
}
function mg(t) {
  var e = fi(t, 1);
  e !== null && In(e, t, 1, -1);
}
function Yf(t) {
  var e = zn();
  return (
    typeof t == 'function' && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ya,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = G_.bind(null, ut, t)),
    [e.memoizedState, t]
  );
}
function Sa(t, e, n, i) {
  return (
    (t = { tag: t, create: e, destroy: n, deps: i, next: null }),
    (e = ut.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (ut.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((n = e.lastEffect),
        n === null
          ? (e.lastEffect = t.next = t)
          : ((i = n.next), (n.next = t), (t.next = i), (e.lastEffect = t))),
    t
  );
}
function gg() {
  return wn().memoizedState;
}
function Do(t, e, n, i) {
  var r = zn();
  (ut.flags |= t), (r.memoizedState = Sa(1 | e, n, void 0, i === void 0 ? null : i));
}
function wl(t, e, n, i) {
  var r = wn();
  i = i === void 0 ? null : i;
  var s = void 0;
  if (yt !== null) {
    var a = yt.memoizedState;
    if (((s = a.destroy), i !== null && Ld(i, a.deps))) {
      r.memoizedState = Sa(e, n, s, i);
      return;
    }
  }
  (ut.flags |= t), (r.memoizedState = Sa(1 | e, n, s, i));
}
function $f(t, e) {
  return Do(8390656, 8, t, e);
}
function Id(t, e) {
  return wl(2048, 8, t, e);
}
function xg(t, e) {
  return wl(4, 2, t, e);
}
function _g(t, e) {
  return wl(4, 4, t, e);
}
function vg(t, e) {
  if (typeof e == 'function')
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function yg(t, e, n) {
  return (n = n != null ? n.concat([t]) : null), wl(4, 4, vg.bind(null, e, t), n);
}
function Fd() {}
function Sg(t, e) {
  var n = wn();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Ld(e, i[1]) ? i[0] : ((n.memoizedState = [t, e]), t);
}
function Mg(t, e) {
  var n = wn();
  e = e === void 0 ? null : e;
  var i = n.memoizedState;
  return i !== null && e !== null && Ld(e, i[1])
    ? i[0]
    : ((t = t()), (n.memoizedState = [t, e]), t);
}
function Eg(t, e, n) {
  return Sr & 21
    ? (Fn(n, e) || ((n = Rm()), (ut.lanes |= n), (Mr |= n), (t.baseState = !0)), e)
    : (t.baseState && ((t.baseState = !1), (Qt = !0)), (t.memoizedState = n));
}
function B_(t, e) {
  var n = $e;
  ($e = n !== 0 && 4 > n ? n : 4), t(!0);
  var i = lc.transition;
  lc.transition = {};
  try {
    t(!1), e();
  } finally {
    ($e = n), (lc.transition = i);
  }
}
function wg() {
  return wn().memoizedState;
}
function H_(t, e, n) {
  var i = ki(t);
  if (((n = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null }), Tg(t)))
    Ag(e, n);
  else if (((n = ag(t, e, n, i)), n !== null)) {
    var r = Wt();
    In(n, t, i, r), bg(n, e, i);
  }
}
function G_(t, e, n) {
  var i = ki(t),
    r = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Tg(t)) Ag(e, r);
  else {
    var s = t.alternate;
    if (t.lanes === 0 && (s === null || s.lanes === 0) && ((s = e.lastRenderedReducer), s !== null))
      try {
        var a = e.lastRenderedState,
          o = s(a, n);
        if (((r.hasEagerState = !0), (r.eagerState = o), Fn(o, a))) {
          var l = e.interleaved;
          l === null ? ((r.next = r), bd(e)) : ((r.next = l.next), (l.next = r)),
            (e.interleaved = r);
          return;
        }
      } catch {
      } finally {
      }
    (n = ag(t, e, r, i)), n !== null && ((r = Wt()), In(n, t, i, r), bg(n, e, i));
  }
}
function Tg(t) {
  var e = t.alternate;
  return t === ut || (e !== null && e === ut);
}
function Ag(t, e) {
  na = il = !0;
  var n = t.pending;
  n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)), (t.pending = e);
}
function bg(t, e, n) {
  if (n & 4194240) {
    var i = e.lanes;
    (i &= t.pendingLanes), (n |= i), (e.lanes = n), hd(t, n);
  }
}
var rl = {
    readContext: En,
    useCallback: Ut,
    useContext: Ut,
    useEffect: Ut,
    useImperativeHandle: Ut,
    useInsertionEffect: Ut,
    useLayoutEffect: Ut,
    useMemo: Ut,
    useReducer: Ut,
    useRef: Ut,
    useState: Ut,
    useDebugValue: Ut,
    useDeferredValue: Ut,
    useTransition: Ut,
    useMutableSource: Ut,
    useSyncExternalStore: Ut,
    useId: Ut,
    unstable_isNewReconciler: !1,
  },
  V_ = {
    readContext: En,
    useCallback: function (t, e) {
      return (zn().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: En,
    useEffect: $f,
    useImperativeHandle: function (t, e, n) {
      return (n = n != null ? n.concat([t]) : null), Do(4194308, 4, vg.bind(null, e, t), n);
    },
    useLayoutEffect: function (t, e) {
      return Do(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Do(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var n = zn();
      return (e = e === void 0 ? null : e), (t = t()), (n.memoizedState = [t, e]), t;
    },
    useReducer: function (t, e, n) {
      var i = zn();
      return (
        (e = n !== void 0 ? n(e) : e),
        (i.memoizedState = i.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (i.queue = t),
        (t = t.dispatch = H_.bind(null, ut, t)),
        [i.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = zn();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Yf,
    useDebugValue: Fd,
    useDeferredValue: function (t) {
      return (zn().memoizedState = t);
    },
    useTransition: function () {
      var t = Yf(!1),
        e = t[0];
      return (t = B_.bind(null, t[1])), (zn().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, n) {
      var i = ut,
        r = zn();
      if (at) {
        if (n === void 0) throw Error(ee(407));
        n = n();
      } else {
        if (((n = e()), bt === null)) throw Error(ee(349));
        Sr & 30 || dg(i, e, n);
      }
      r.memoizedState = n;
      var s = { value: n, getSnapshot: e };
      return (
        (r.queue = s),
        $f(hg.bind(null, i, s, t), [t]),
        (i.flags |= 2048),
        Sa(9, fg.bind(null, i, s, n, e), void 0, null),
        n
      );
    },
    useId: function () {
      var t = zn(),
        e = bt.identifierPrefix;
      if (at) {
        var n = ai,
          i = si;
        (n = (i & ~(1 << (32 - Un(i) - 1))).toString(32) + n),
          (e = ':' + e + 'R' + n),
          (n = va++),
          0 < n && (e += 'H' + n.toString(32)),
          (e += ':');
      } else (n = z_++), (e = ':' + e + 'r' + n.toString(32) + ':');
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  W_ = {
    readContext: En,
    useCallback: Sg,
    useContext: En,
    useEffect: Id,
    useImperativeHandle: yg,
    useInsertionEffect: xg,
    useLayoutEffect: _g,
    useMemo: Mg,
    useReducer: cc,
    useRef: gg,
    useState: function () {
      return cc(ya);
    },
    useDebugValue: Fd,
    useDeferredValue: function (t) {
      var e = wn();
      return Eg(e, yt.memoizedState, t);
    },
    useTransition: function () {
      var t = cc(ya)[0],
        e = wn().memoizedState;
      return [t, e];
    },
    useMutableSource: cg,
    useSyncExternalStore: ug,
    useId: wg,
    unstable_isNewReconciler: !1,
  },
  j_ = {
    readContext: En,
    useCallback: Sg,
    useContext: En,
    useEffect: Id,
    useImperativeHandle: yg,
    useInsertionEffect: xg,
    useLayoutEffect: _g,
    useMemo: Mg,
    useReducer: uc,
    useRef: gg,
    useState: function () {
      return uc(ya);
    },
    useDebugValue: Fd,
    useDeferredValue: function (t) {
      var e = wn();
      return yt === null ? (e.memoizedState = t) : Eg(e, yt.memoizedState, t);
    },
    useTransition: function () {
      var t = uc(ya)[0],
        e = wn().memoizedState;
      return [t, e];
    },
    useMutableSource: cg,
    useSyncExternalStore: ug,
    useId: wg,
    unstable_isNewReconciler: !1,
  };
function Cn(t, e) {
  if (t && t.defaultProps) {
    (e = ft({}, e)), (t = t.defaultProps);
    for (var n in t) e[n] === void 0 && (e[n] = t[n]);
    return e;
  }
  return e;
}
function bu(t, e, n, i) {
  (e = t.memoizedState),
    (n = n(i, e)),
    (n = n == null ? e : ft({}, e, n)),
    (t.memoizedState = n),
    t.lanes === 0 && (t.updateQueue.baseState = n);
}
var Tl = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? br(t) === t : !1;
  },
  enqueueSetState: function (t, e, n) {
    t = t._reactInternals;
    var i = Wt(),
      r = ki(t),
      s = ci(i, r);
    (s.payload = e),
      n != null && (s.callback = n),
      (e = Fi(t, s, r)),
      e !== null && (In(e, t, r, i), No(e, t, r));
  },
  enqueueReplaceState: function (t, e, n) {
    t = t._reactInternals;
    var i = Wt(),
      r = ki(t),
      s = ci(i, r);
    (s.tag = 1),
      (s.payload = e),
      n != null && (s.callback = n),
      (e = Fi(t, s, r)),
      e !== null && (In(e, t, r, i), No(e, t, r));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var n = Wt(),
      i = ki(t),
      r = ci(n, i);
    (r.tag = 2),
      e != null && (r.callback = e),
      (e = Fi(t, r, i)),
      e !== null && (In(e, t, i, n), No(e, t, i));
  },
};
function Kf(t, e, n, i, r, s, a) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == 'function'
      ? t.shouldComponentUpdate(i, s, a)
      : e.prototype && e.prototype.isPureReactComponent
      ? !ha(n, i) || !ha(r, s)
      : !0
  );
}
function Rg(t, e, n) {
  var i = !1,
    r = Wi,
    s = e.contextType;
  return (
    typeof s == 'object' && s !== null
      ? (s = En(s))
      : ((r = en(e) ? vr : zt.current),
        (i = e.contextTypes),
        (s = (i = i != null) ? ms(t, r) : Wi)),
    (e = new e(n, s)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Tl),
    (t.stateNode = e),
    (e._reactInternals = t),
    i &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = r),
      (t.__reactInternalMemoizedMaskedChildContext = s)),
    e
  );
}
function Zf(t, e, n, i) {
  (t = e.state),
    typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(n, i),
    typeof e.UNSAFE_componentWillReceiveProps == 'function' &&
      e.UNSAFE_componentWillReceiveProps(n, i),
    e.state !== t && Tl.enqueueReplaceState(e, e.state, null);
}
function Ru(t, e, n, i) {
  var r = t.stateNode;
  (r.props = n), (r.state = t.memoizedState), (r.refs = {}), Rd(t);
  var s = e.contextType;
  typeof s == 'object' && s !== null
    ? (r.context = En(s))
    : ((s = en(e) ? vr : zt.current), (r.context = ms(t, s))),
    (r.state = t.memoizedState),
    (s = e.getDerivedStateFromProps),
    typeof s == 'function' && (bu(t, e, s, n), (r.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == 'function' ||
      typeof r.getSnapshotBeforeUpdate == 'function' ||
      (typeof r.UNSAFE_componentWillMount != 'function' &&
        typeof r.componentWillMount != 'function') ||
      ((e = r.state),
      typeof r.componentWillMount == 'function' && r.componentWillMount(),
      typeof r.UNSAFE_componentWillMount == 'function' && r.UNSAFE_componentWillMount(),
      e !== r.state && Tl.enqueueReplaceState(r, r.state, null),
      tl(t, n, r, i),
      (r.state = t.memoizedState)),
    typeof r.componentDidMount == 'function' && (t.flags |= 4194308);
}
function vs(t, e) {
  try {
    var n = '',
      i = e;
    do (n += vx(i)), (i = i.return);
    while (i);
    var r = n;
  } catch (s) {
    r =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: t, source: e, stack: r, digest: null };
}
function dc(t, e, n) {
  return { value: t, source: null, stack: n ?? null, digest: e ?? null };
}
function Cu(t, e) {
  try {
    console.error(e.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var X_ = typeof WeakMap == 'function' ? WeakMap : Map;
function Cg(t, e, n) {
  (n = ci(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = e.value;
  return (
    (n.callback = function () {
      al || ((al = !0), (zu = i)), Cu(t, e);
    }),
    n
  );
}
function Pg(t, e, n) {
  (n = ci(-1, n)), (n.tag = 3);
  var i = t.type.getDerivedStateFromError;
  if (typeof i == 'function') {
    var r = e.value;
    (n.payload = function () {
      return i(r);
    }),
      (n.callback = function () {
        Cu(t, e);
      });
  }
  var s = t.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == 'function' &&
      (n.callback = function () {
        Cu(t, e), typeof i != 'function' && (Oi === null ? (Oi = new Set([this])) : Oi.add(this));
        var a = e.stack;
        this.componentDidCatch(e.value, { componentStack: a !== null ? a : '' });
      }),
    n
  );
}
function Qf(t, e, n) {
  var i = t.pingCache;
  if (i === null) {
    i = t.pingCache = new X_();
    var r = new Set();
    i.set(e, r);
  } else (r = i.get(e)), r === void 0 && ((r = new Set()), i.set(e, r));
  r.has(n) || (r.add(n), (t = av.bind(null, t, e, n)), e.then(t, t));
}
function Jf(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) && ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function eh(t, e, n, i, r) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = r), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null ? (n.tag = 17) : ((e = ci(-1, 1)), (e.tag = 2), Fi(n, e, 1))),
          (n.lanes |= 1)),
      t);
}
var q_ = mi.ReactCurrentOwner,
  Qt = !1;
function Gt(t, e, n, i) {
  e.child = t === null ? sg(e, null, n, i) : xs(e, t.child, n, i);
}
function th(t, e, n, i, r) {
  n = n.render;
  var s = e.ref;
  return (
    us(e, r),
    (i = Dd(t, e, n, i, s, r)),
    (n = Ud()),
    t !== null && !Qt
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), hi(t, e, r))
      : (at && n && Sd(e), (e.flags |= 1), Gt(t, e, i, r), e.child)
  );
}
function nh(t, e, n, i, r) {
  if (t === null) {
    var s = n.type;
    return typeof s == 'function' &&
      !Wd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((e.tag = 15), (e.type = s), Ng(t, e, s, i, r))
      : ((t = Oo(n.type, null, i, e, e.mode, r)), (t.ref = e.ref), (t.return = e), (e.child = t));
  }
  if (((s = t.child), !(t.lanes & r))) {
    var a = s.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : ha), n(a, i) && t.ref === e.ref))
      return hi(t, e, r);
  }
  return (e.flags |= 1), (t = zi(s, i)), (t.ref = e.ref), (t.return = e), (e.child = t);
}
function Ng(t, e, n, i, r) {
  if (t !== null) {
    var s = t.memoizedProps;
    if (ha(s, i) && t.ref === e.ref)
      if (((Qt = !1), (e.pendingProps = i = s), (t.lanes & r) !== 0)) t.flags & 131072 && (Qt = !0);
      else return (e.lanes = t.lanes), hi(t, e, r);
  }
  return Pu(t, e, n, i, r);
}
function Lg(t, e, n) {
  var i = e.pendingProps,
    r = i.children,
    s = t !== null ? t.memoizedState : null;
  if (i.mode === 'hidden')
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Je(is, ln),
        (ln |= n);
    else {
      if (!(n & 1073741824))
        return (
          (t = s !== null ? s.baseLanes | n : n),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = { baseLanes: t, cachePool: null, transitions: null }),
          (e.updateQueue = null),
          Je(is, ln),
          (ln |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = s !== null ? s.baseLanes : n),
        Je(is, ln),
        (ln |= i);
    }
  else
    s !== null ? ((i = s.baseLanes | n), (e.memoizedState = null)) : (i = n), Je(is, ln), (ln |= i);
  return Gt(t, e, r, n), e.child;
}
function Dg(t, e) {
  var n = e.ref;
  ((t === null && n !== null) || (t !== null && t.ref !== n)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function Pu(t, e, n, i, r) {
  var s = en(n) ? vr : zt.current;
  return (
    (s = ms(e, s)),
    us(e, r),
    (n = Dd(t, e, n, i, s, r)),
    (i = Ud()),
    t !== null && !Qt
      ? ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~r), hi(t, e, r))
      : (at && i && Sd(e), (e.flags |= 1), Gt(t, e, n, r), e.child)
  );
}
function ih(t, e, n, i, r) {
  if (en(n)) {
    var s = !0;
    Ko(e);
  } else s = !1;
  if ((us(e, r), e.stateNode === null)) Uo(t, e), Rg(e, n, i), Ru(e, n, i, r), (i = !0);
  else if (t === null) {
    var a = e.stateNode,
      o = e.memoizedProps;
    a.props = o;
    var l = a.context,
      c = n.contextType;
    typeof c == 'object' && c !== null
      ? (c = En(c))
      : ((c = en(n) ? vr : zt.current), (c = ms(e, c)));
    var d = n.getDerivedStateFromProps,
      f = typeof d == 'function' || typeof a.getSnapshotBeforeUpdate == 'function';
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((o !== i || l !== c) && Zf(e, a, i, c)),
      (Ti = !1);
    var h = e.memoizedState;
    (a.state = h),
      tl(e, i, a, r),
      (l = e.memoizedState),
      o !== i || h !== l || Jt.current || Ti
        ? (typeof d == 'function' && (bu(e, n, d, i), (l = e.memoizedState)),
          (o = Ti || Kf(e, n, o, i, h, l, c))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' && a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' && a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (e.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (e.flags |= 4194308),
              (e.memoizedProps = i),
              (e.memoizedState = l)),
          (a.props = i),
          (a.state = l),
          (a.context = c),
          (i = o))
        : (typeof a.componentDidMount == 'function' && (e.flags |= 4194308), (i = !1));
  } else {
    (a = e.stateNode),
      og(t, e),
      (o = e.memoizedProps),
      (c = e.type === e.elementType ? o : Cn(e.type, o)),
      (a.props = c),
      (f = e.pendingProps),
      (h = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = En(l))
        : ((l = en(n) ? vr : zt.current), (l = ms(e, l)));
    var g = n.getDerivedStateFromProps;
    (d = typeof g == 'function' || typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((o !== f || h !== l) && Zf(e, a, i, l)),
      (Ti = !1),
      (h = e.memoizedState),
      (a.state = h),
      tl(e, i, a, r);
    var v = e.memoizedState;
    o !== f || h !== v || Jt.current || Ti
      ? (typeof g == 'function' && (bu(e, n, g, i), (v = e.memoizedState)),
        (c = Ti || Kf(e, n, c, i, h, v, l) || !1)
          ? (d ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' && a.componentWillUpdate(i, v, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(i, v, l)),
            typeof a.componentDidUpdate == 'function' && (e.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (o === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (o === t.memoizedProps && h === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = i),
            (e.memoizedState = v)),
        (a.props = i),
        (a.state = v),
        (a.context = l),
        (i = c))
      : (typeof a.componentDidUpdate != 'function' ||
          (o === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (o === t.memoizedProps && h === t.memoizedState) ||
          (e.flags |= 1024),
        (i = !1));
  }
  return Nu(t, e, n, i, s, r);
}
function Nu(t, e, n, i, r, s) {
  Dg(t, e);
  var a = (e.flags & 128) !== 0;
  if (!i && !a) return r && Gf(e, n, !1), hi(t, e, s);
  (i = e.stateNode), (q_.current = e);
  var o = a && typeof n.getDerivedStateFromError != 'function' ? null : i.render();
  return (
    (e.flags |= 1),
    t !== null && a
      ? ((e.child = xs(e, t.child, null, s)), (e.child = xs(e, null, o, s)))
      : Gt(t, e, o, s),
    (e.memoizedState = i.state),
    r && Gf(e, n, !0),
    e.child
  );
}
function Ug(t) {
  var e = t.stateNode;
  e.pendingContext
    ? Hf(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && Hf(t, e.context, !1),
    Cd(t, e.containerInfo);
}
function rh(t, e, n, i, r) {
  return gs(), Ed(r), (e.flags |= 256), Gt(t, e, n, i), e.child;
}
var Lu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Du(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Ig(t, e, n) {
  var i = e.pendingProps,
    r = ct.current,
    s = !1,
    a = (e.flags & 128) !== 0,
    o;
  if (
    ((o = a) || (o = t !== null && t.memoizedState === null ? !1 : (r & 2) !== 0),
    o ? ((s = !0), (e.flags &= -129)) : (t === null || t.memoizedState !== null) && (r |= 1),
    Je(ct, r & 1),
    t === null)
  )
    return (
      Tu(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1 ? (t.data === '$!' ? (e.lanes = 8) : (e.lanes = 1073741824)) : (e.lanes = 1),
          null)
        : ((a = i.children),
          (t = i.fallback),
          s
            ? ((i = e.mode),
              (s = e.child),
              (a = { mode: 'hidden', children: a }),
              !(i & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = a))
                : (s = Rl(a, i, 0, null)),
              (t = gr(t, i, n, null)),
              (s.return = e),
              (t.return = e),
              (s.sibling = t),
              (e.child = s),
              (e.child.memoizedState = Du(n)),
              (e.memoizedState = Lu),
              t)
            : Od(e, a))
    );
  if (((r = t.memoizedState), r !== null && ((o = r.dehydrated), o !== null)))
    return Y_(t, e, a, i, o, r, n);
  if (s) {
    (s = i.fallback), (a = e.mode), (r = t.child), (o = r.sibling);
    var l = { mode: 'hidden', children: i.children };
    return (
      !(a & 1) && e.child !== r
        ? ((i = e.child), (i.childLanes = 0), (i.pendingProps = l), (e.deletions = null))
        : ((i = zi(r, l)), (i.subtreeFlags = r.subtreeFlags & 14680064)),
      o !== null ? (s = zi(o, s)) : ((s = gr(s, a, n, null)), (s.flags |= 2)),
      (s.return = e),
      (i.return = e),
      (i.sibling = s),
      (e.child = i),
      (i = s),
      (s = e.child),
      (a = t.child.memoizedState),
      (a =
        a === null
          ? Du(n)
          : { baseLanes: a.baseLanes | n, cachePool: null, transitions: a.transitions }),
      (s.memoizedState = a),
      (s.childLanes = t.childLanes & ~n),
      (e.memoizedState = Lu),
      i
    );
  }
  return (
    (s = t.child),
    (t = s.sibling),
    (i = zi(s, { mode: 'visible', children: i.children })),
    !(e.mode & 1) && (i.lanes = n),
    (i.return = e),
    (i.sibling = null),
    t !== null &&
      ((n = e.deletions), n === null ? ((e.deletions = [t]), (e.flags |= 16)) : n.push(t)),
    (e.child = i),
    (e.memoizedState = null),
    i
  );
}
function Od(t, e) {
  return (e = Rl({ mode: 'visible', children: e }, t.mode, 0, null)), (e.return = t), (t.child = e);
}
function Za(t, e, n, i) {
  return (
    i !== null && Ed(i),
    xs(e, t.child, null, n),
    (t = Od(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function Y_(t, e, n, i, r, s, a) {
  if (n)
    return e.flags & 256
      ? ((e.flags &= -257), (i = dc(Error(ee(422)))), Za(t, e, a, i))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((s = i.fallback),
        (r = e.mode),
        (i = Rl({ mode: 'visible', children: i.children }, r, 0, null)),
        (s = gr(s, r, a, null)),
        (s.flags |= 2),
        (i.return = e),
        (s.return = e),
        (i.sibling = s),
        (e.child = i),
        e.mode & 1 && xs(e, t.child, null, a),
        (e.child.memoizedState = Du(a)),
        (e.memoizedState = Lu),
        s);
  if (!(e.mode & 1)) return Za(t, e, a, null);
  if (r.data === '$!') {
    if (((i = r.nextSibling && r.nextSibling.dataset), i)) var o = i.dgst;
    return (i = o), (s = Error(ee(419))), (i = dc(s, i, void 0)), Za(t, e, a, i);
  }
  if (((o = (a & t.childLanes) !== 0), Qt || o)) {
    if (((i = bt), i !== null)) {
      switch (a & -a) {
        case 4:
          r = 2;
          break;
        case 16:
          r = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          r = 32;
          break;
        case 536870912:
          r = 268435456;
          break;
        default:
          r = 0;
      }
      (r = r & (i.suspendedLanes | a) ? 0 : r),
        r !== 0 && r !== s.retryLane && ((s.retryLane = r), fi(t, r), In(i, t, r, -1));
    }
    return Vd(), (i = dc(Error(ee(421)))), Za(t, e, a, i);
  }
  return r.data === '$?'
    ? ((e.flags |= 128), (e.child = t.child), (e = ov.bind(null, t)), (r._reactRetry = e), null)
    : ((t = s.treeContext),
      (dn = Ii(r.nextSibling)),
      (fn = e),
      (at = !0),
      (Nn = null),
      t !== null &&
        ((vn[yn++] = si),
        (vn[yn++] = ai),
        (vn[yn++] = yr),
        (si = t.id),
        (ai = t.overflow),
        (yr = e)),
      (e = Od(e, i.children)),
      (e.flags |= 4096),
      e);
}
function sh(t, e, n) {
  t.lanes |= e;
  var i = t.alternate;
  i !== null && (i.lanes |= e), Au(t.return, e, n);
}
function fc(t, e, n, i, r) {
  var s = t.memoizedState;
  s === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: r,
      })
    : ((s.isBackwards = e),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = i),
      (s.tail = n),
      (s.tailMode = r));
}
function Fg(t, e, n) {
  var i = e.pendingProps,
    r = i.revealOrder,
    s = i.tail;
  if ((Gt(t, e, i.children, n), (i = ct.current), i & 2)) (i = (i & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && sh(t, n, e);
        else if (t.tag === 19) sh(t, n, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    i &= 1;
  }
  if ((Je(ct, i), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (r) {
      case 'forwards':
        for (n = e.child, r = null; n !== null; )
          (t = n.alternate), t !== null && nl(t) === null && (r = n), (n = n.sibling);
        (n = r),
          n === null ? ((r = e.child), (e.child = null)) : ((r = n.sibling), (n.sibling = null)),
          fc(e, !1, r, n, s);
        break;
      case 'backwards':
        for (n = null, r = e.child, e.child = null; r !== null; ) {
          if (((t = r.alternate), t !== null && nl(t) === null)) {
            e.child = r;
            break;
          }
          (t = r.sibling), (r.sibling = n), (n = r), (r = t);
        }
        fc(e, !0, n, null, s);
        break;
      case 'together':
        fc(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Uo(t, e) {
  !(e.mode & 1) && t !== null && ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function hi(t, e, n) {
  if ((t !== null && (e.dependencies = t.dependencies), (Mr |= e.lanes), !(n & e.childLanes)))
    return null;
  if (t !== null && e.child !== t.child) throw Error(ee(153));
  if (e.child !== null) {
    for (t = e.child, n = zi(t, t.pendingProps), e.child = n, n.return = e; t.sibling !== null; )
      (t = t.sibling), (n = n.sibling = zi(t, t.pendingProps)), (n.return = e);
    n.sibling = null;
  }
  return e.child;
}
function $_(t, e, n) {
  switch (e.tag) {
    case 3:
      Ug(e), gs();
      break;
    case 5:
      lg(e);
      break;
    case 1:
      en(e.type) && Ko(e);
      break;
    case 4:
      Cd(e, e.stateNode.containerInfo);
      break;
    case 10:
      var i = e.type._context,
        r = e.memoizedProps.value;
      Je(Jo, i._currentValue), (i._currentValue = r);
      break;
    case 13:
      if (((i = e.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Je(ct, ct.current & 1), (e.flags |= 128), null)
          : n & e.child.childLanes
          ? Ig(t, e, n)
          : (Je(ct, ct.current & 1), (t = hi(t, e, n)), t !== null ? t.sibling : null);
      Je(ct, ct.current & 1);
      break;
    case 19:
      if (((i = (n & e.childLanes) !== 0), t.flags & 128)) {
        if (i) return Fg(t, e, n);
        e.flags |= 128;
      }
      if (
        ((r = e.memoizedState),
        r !== null && ((r.rendering = null), (r.tail = null), (r.lastEffect = null)),
        Je(ct, ct.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Lg(t, e, n);
  }
  return hi(t, e, n);
}
var Og, Uu, kg, zg;
Og = function (t, e) {
  for (var n = e.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) t.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === e) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === e) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Uu = function () {};
kg = function (t, e, n, i) {
  var r = t.memoizedProps;
  if (r !== i) {
    (t = e.stateNode), hr(jn.current);
    var s = null;
    switch (n) {
      case 'input':
        (r = nu(t, r)), (i = nu(t, i)), (s = []);
        break;
      case 'select':
        (r = ft({}, r, { value: void 0 })), (i = ft({}, i, { value: void 0 })), (s = []);
        break;
      case 'textarea':
        (r = su(t, r)), (i = su(t, i)), (s = []);
        break;
      default:
        typeof r.onClick != 'function' && typeof i.onClick == 'function' && (t.onclick = Yo);
    }
    ou(n, i);
    var a;
    n = null;
    for (c in r)
      if (!i.hasOwnProperty(c) && r.hasOwnProperty(c) && r[c] != null)
        if (c === 'style') {
          var o = r[c];
          for (a in o) o.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''));
        } else
          c !== 'dangerouslySetInnerHTML' &&
            c !== 'children' &&
            c !== 'suppressContentEditableWarning' &&
            c !== 'suppressHydrationWarning' &&
            c !== 'autoFocus' &&
            (aa.hasOwnProperty(c) ? s || (s = []) : (s = s || []).push(c, null));
    for (c in i) {
      var l = i[c];
      if (
        ((o = r != null ? r[c] : void 0),
        i.hasOwnProperty(c) && l !== o && (l != null || o != null))
      )
        if (c === 'style')
          if (o) {
            for (a in o)
              !o.hasOwnProperty(a) || (l && l.hasOwnProperty(a)) || (n || (n = {}), (n[a] = ''));
            for (a in l) l.hasOwnProperty(a) && o[a] !== l[a] && (n || (n = {}), (n[a] = l[a]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (o = o ? o.__html : void 0),
              l != null && o !== l && (s = s || []).push(c, l))
            : c === 'children'
            ? (typeof l != 'string' && typeof l != 'number') || (s = s || []).push(c, '' + l)
            : c !== 'suppressContentEditableWarning' &&
              c !== 'suppressHydrationWarning' &&
              (aa.hasOwnProperty(c)
                ? (l != null && c === 'onScroll' && tt('scroll', t), s || o === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push('style', n);
    var c = s;
    (e.updateQueue = c) && (e.flags |= 4);
  }
};
zg = function (t, e, n, i) {
  n !== i && (e.flags |= 4);
};
function ks(t, e) {
  if (!at)
    switch (t.tailMode) {
      case 'hidden':
        e = t.tail;
        for (var n = null; e !== null; ) e.alternate !== null && (n = e), (e = e.sibling);
        n === null ? (t.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = t.tail;
        for (var i = null; n !== null; ) n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (i.sibling = null);
    }
}
function It(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    n = 0,
    i = 0;
  if (e)
    for (var r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags & 14680064),
        (i |= r.flags & 14680064),
        (r.return = t),
        (r = r.sibling);
  else
    for (r = t.child; r !== null; )
      (n |= r.lanes | r.childLanes),
        (i |= r.subtreeFlags),
        (i |= r.flags),
        (r.return = t),
        (r = r.sibling);
  return (t.subtreeFlags |= i), (t.childLanes = n), e;
}
function K_(t, e, n) {
  var i = e.pendingProps;
  switch ((Md(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return It(e), null;
    case 1:
      return en(e.type) && $o(), It(e), null;
    case 3:
      return (
        (i = e.stateNode),
        _s(),
        it(Jt),
        it(zt),
        Nd(),
        i.pendingContext && ((i.context = i.pendingContext), (i.pendingContext = null)),
        (t === null || t.child === null) &&
          ($a(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), Nn !== null && (Gu(Nn), (Nn = null)))),
        Uu(t, e),
        It(e),
        null
      );
    case 5:
      Pd(e);
      var r = hr(_a.current);
      if (((n = e.type), t !== null && e.stateNode != null))
        kg(t, e, n, i, r), t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!i) {
          if (e.stateNode === null) throw Error(ee(166));
          return It(e), null;
        }
        if (((t = hr(jn.current)), $a(e))) {
          (i = e.stateNode), (n = e.type);
          var s = e.memoizedProps;
          switch (((i[Gn] = e), (i[ga] = s), (t = (e.mode & 1) !== 0), n)) {
            case 'dialog':
              tt('cancel', i), tt('close', i);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              tt('load', i);
              break;
            case 'video':
            case 'audio':
              for (r = 0; r < Ks.length; r++) tt(Ks[r], i);
              break;
            case 'source':
              tt('error', i);
              break;
            case 'img':
            case 'image':
            case 'link':
              tt('error', i), tt('load', i);
              break;
            case 'details':
              tt('toggle', i);
              break;
            case 'input':
              pf(i, s), tt('invalid', i);
              break;
            case 'select':
              (i._wrapperState = { wasMultiple: !!s.multiple }), tt('invalid', i);
              break;
            case 'textarea':
              gf(i, s), tt('invalid', i);
          }
          ou(n, s), (r = null);
          for (var a in s)
            if (s.hasOwnProperty(a)) {
              var o = s[a];
              a === 'children'
                ? typeof o == 'string'
                  ? i.textContent !== o &&
                    (s.suppressHydrationWarning !== !0 && Ya(i.textContent, o, t),
                    (r = ['children', o]))
                  : typeof o == 'number' &&
                    i.textContent !== '' + o &&
                    (s.suppressHydrationWarning !== !0 && Ya(i.textContent, o, t),
                    (r = ['children', '' + o]))
                : aa.hasOwnProperty(a) && o != null && a === 'onScroll' && tt('scroll', i);
            }
          switch (n) {
            case 'input':
              Ba(i), mf(i, s, !0);
              break;
            case 'textarea':
              Ba(i), xf(i);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof s.onClick == 'function' && (i.onclick = Yo);
          }
          (i = r), (e.updateQueue = i), i !== null && (e.flags |= 4);
        } else {
          (a = r.nodeType === 9 ? r : r.ownerDocument),
            t === 'http://www.w3.org/1999/xhtml' && (t = hm(n)),
            t === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((t = a.createElement('div')),
                  (t.innerHTML = '<script></script>'),
                  (t = t.removeChild(t.firstChild)))
                : typeof i.is == 'string'
                ? (t = a.createElement(n, { is: i.is }))
                : ((t = a.createElement(n)),
                  n === 'select' &&
                    ((a = t), i.multiple ? (a.multiple = !0) : i.size && (a.size = i.size)))
              : (t = a.createElementNS(t, n)),
            (t[Gn] = e),
            (t[ga] = i),
            Og(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((a = lu(n, i)), n)) {
              case 'dialog':
                tt('cancel', t), tt('close', t), (r = i);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                tt('load', t), (r = i);
                break;
              case 'video':
              case 'audio':
                for (r = 0; r < Ks.length; r++) tt(Ks[r], t);
                r = i;
                break;
              case 'source':
                tt('error', t), (r = i);
                break;
              case 'img':
              case 'image':
              case 'link':
                tt('error', t), tt('load', t), (r = i);
                break;
              case 'details':
                tt('toggle', t), (r = i);
                break;
              case 'input':
                pf(t, i), (r = nu(t, i)), tt('invalid', t);
                break;
              case 'option':
                r = i;
                break;
              case 'select':
                (t._wrapperState = { wasMultiple: !!i.multiple }),
                  (r = ft({}, i, { value: void 0 })),
                  tt('invalid', t);
                break;
              case 'textarea':
                gf(t, i), (r = su(t, i)), tt('invalid', t);
                break;
              default:
                r = i;
            }
            ou(n, r), (o = r);
            for (s in o)
              if (o.hasOwnProperty(s)) {
                var l = o[s];
                s === 'style'
                  ? gm(t, l)
                  : s === 'dangerouslySetInnerHTML'
                  ? ((l = l ? l.__html : void 0), l != null && pm(t, l))
                  : s === 'children'
                  ? typeof l == 'string'
                    ? (n !== 'textarea' || l !== '') && oa(t, l)
                    : typeof l == 'number' && oa(t, '' + l)
                  : s !== 'suppressContentEditableWarning' &&
                    s !== 'suppressHydrationWarning' &&
                    s !== 'autoFocus' &&
                    (aa.hasOwnProperty(s)
                      ? l != null && s === 'onScroll' && tt('scroll', t)
                      : l != null && od(t, s, l, a));
              }
            switch (n) {
              case 'input':
                Ba(t), mf(t, i, !1);
                break;
              case 'textarea':
                Ba(t), xf(t);
                break;
              case 'option':
                i.value != null && t.setAttribute('value', '' + Vi(i.value));
                break;
              case 'select':
                (t.multiple = !!i.multiple),
                  (s = i.value),
                  s != null
                    ? as(t, !!i.multiple, s, !1)
                    : i.defaultValue != null && as(t, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof r.onClick == 'function' && (t.onclick = Yo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                i = !!i.autoFocus;
                break e;
              case 'img':
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return It(e), null;
    case 6:
      if (t && e.stateNode != null) zg(t, e, t.memoizedProps, i);
      else {
        if (typeof i != 'string' && e.stateNode === null) throw Error(ee(166));
        if (((n = hr(_a.current)), hr(jn.current), $a(e))) {
          if (
            ((i = e.stateNode),
            (n = e.memoizedProps),
            (i[Gn] = e),
            (s = i.nodeValue !== n) && ((t = fn), t !== null))
          )
            switch (t.tag) {
              case 3:
                Ya(i.nodeValue, n, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ya(i.nodeValue, n, (t.mode & 1) !== 0);
            }
          s && (e.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[Gn] = e),
            (e.stateNode = i);
      }
      return It(e), null;
    case 13:
      if (
        (it(ct),
        (i = e.memoizedState),
        t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (at && dn !== null && e.mode & 1 && !(e.flags & 128))
          ig(), gs(), (e.flags |= 98560), (s = !1);
        else if (((s = $a(e)), i !== null && i.dehydrated !== null)) {
          if (t === null) {
            if (!s) throw Error(ee(318));
            if (((s = e.memoizedState), (s = s !== null ? s.dehydrated : null), !s))
              throw Error(ee(317));
            s[Gn] = e;
          } else gs(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          It(e), (s = !1);
        } else Nn !== null && (Gu(Nn), (Nn = null)), (s = !0);
        if (!s) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = n), e)
        : ((i = i !== null),
          i !== (t !== null && t.memoizedState !== null) &&
            i &&
            ((e.child.flags |= 8192),
            e.mode & 1 && (t === null || ct.current & 1 ? St === 0 && (St = 3) : Vd())),
          e.updateQueue !== null && (e.flags |= 4),
          It(e),
          null);
    case 4:
      return _s(), Uu(t, e), t === null && pa(e.stateNode.containerInfo), It(e), null;
    case 10:
      return Ad(e.type._context), It(e), null;
    case 17:
      return en(e.type) && $o(), It(e), null;
    case 19:
      if ((it(ct), (s = e.memoizedState), s === null)) return It(e), null;
      if (((i = (e.flags & 128) !== 0), (a = s.rendering), a === null))
        if (i) ks(s, !1);
        else {
          if (St !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((a = nl(t)), a !== null)) {
                for (
                  e.flags |= 128,
                    ks(s, !1),
                    i = a.updateQueue,
                    i !== null && ((e.updateQueue = i), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    i = n,
                    n = e.child;
                  n !== null;

                )
                  (s = n),
                    (t = i),
                    (s.flags &= 14680066),
                    (a = s.alternate),
                    a === null
                      ? ((s.childLanes = 0),
                        (s.lanes = t),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = a.childLanes),
                        (s.lanes = a.lanes),
                        (s.child = a.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = a.memoizedProps),
                        (s.memoizedState = a.memoizedState),
                        (s.updateQueue = a.updateQueue),
                        (s.type = a.type),
                        (t = a.dependencies),
                        (s.dependencies =
                          t === null ? null : { lanes: t.lanes, firstContext: t.firstContext })),
                    (n = n.sibling);
                return Je(ct, (ct.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          s.tail !== null &&
            gt() > ys &&
            ((e.flags |= 128), (i = !0), ks(s, !1), (e.lanes = 4194304));
        }
      else {
        if (!i)
          if (((t = nl(a)), t !== null)) {
            if (
              ((e.flags |= 128),
              (i = !0),
              (n = t.updateQueue),
              n !== null && ((e.updateQueue = n), (e.flags |= 4)),
              ks(s, !0),
              s.tail === null && s.tailMode === 'hidden' && !a.alternate && !at)
            )
              return It(e), null;
          } else
            2 * gt() - s.renderingStartTime > ys &&
              n !== 1073741824 &&
              ((e.flags |= 128), (i = !0), ks(s, !1), (e.lanes = 4194304));
        s.isBackwards
          ? ((a.sibling = e.child), (e.child = a))
          : ((n = s.last), n !== null ? (n.sibling = a) : (e.child = a), (s.last = a));
      }
      return s.tail !== null
        ? ((e = s.tail),
          (s.rendering = e),
          (s.tail = e.sibling),
          (s.renderingStartTime = gt()),
          (e.sibling = null),
          (n = ct.current),
          Je(ct, i ? (n & 1) | 2 : n & 1),
          e)
        : (It(e), null);
    case 22:
    case 23:
      return (
        Gd(),
        (i = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== i && (e.flags |= 8192),
        i && e.mode & 1
          ? ln & 1073741824 && (It(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : It(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(ee(156, e.tag));
}
function Z_(t, e) {
  switch ((Md(e), e.tag)) {
    case 1:
      return (
        en(e.type) && $o(), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        _s(),
        it(Jt),
        it(zt),
        Nd(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return Pd(e), null;
    case 13:
      if ((it(ct), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
        if (e.alternate === null) throw Error(ee(340));
        gs();
      }
      return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null;
    case 19:
      return it(ct), null;
    case 4:
      return _s(), null;
    case 10:
      return Ad(e.type._context), null;
    case 22:
    case 23:
      return Gd(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Qa = !1,
  kt = !1,
  Q_ = typeof WeakSet == 'function' ? WeakSet : Set,
  he = null;
function ns(t, e) {
  var n = t.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (i) {
        ht(t, e, i);
      }
    else n.current = null;
}
function Iu(t, e, n) {
  try {
    n();
  } catch (i) {
    ht(t, e, i);
  }
}
var ah = !1;
function J_(t, e) {
  if (((_u = jo), (t = Wm()), yd(t))) {
    if ('selectionStart' in t) var n = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        n = ((n = t.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var r = i.anchorOffset,
            s = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var a = 0,
            o = -1,
            l = -1,
            c = 0,
            d = 0,
            f = t,
            h = null;
          t: for (;;) {
            for (
              var g;
              f !== n || (r !== 0 && f.nodeType !== 3) || (o = a + r),
                f !== s || (i !== 0 && f.nodeType !== 3) || (l = a + i),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (h = f), (f = g);
            for (;;) {
              if (f === t) break t;
              if (
                (h === n && ++c === r && (o = a),
                h === s && ++d === i && (l = a),
                (g = f.nextSibling) !== null)
              )
                break;
              (f = h), (h = f.parentNode);
            }
            f = g;
          }
          n = o === -1 || l === -1 ? null : { start: o, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (vu = { focusedElem: t, selectionRange: n }, jo = !1, he = e; he !== null; )
    if (((e = he), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (he = t);
    else
      for (; he !== null; ) {
        e = he;
        try {
          var v = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (v !== null) {
                  var y = v.memoizedProps,
                    p = v.memoizedState,
                    u = e.stateNode,
                    _ = u.getSnapshotBeforeUpdate(e.elementType === e.type ? y : Cn(e.type, y), p);
                  u.__reactInternalSnapshotBeforeUpdate = _;
                }
                break;
              case 3:
                var x = e.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = '')
                  : x.nodeType === 9 && x.documentElement && x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(ee(163));
            }
        } catch (E) {
          ht(e, e.return, E);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (he = t);
          break;
        }
        he = e.return;
      }
  return (v = ah), (ah = !1), v;
}
function ia(t, e, n) {
  var i = e.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var r = (i = i.next);
    do {
      if ((r.tag & t) === t) {
        var s = r.destroy;
        (r.destroy = void 0), s !== void 0 && Iu(e, n, s);
      }
      r = r.next;
    } while (r !== i);
  }
}
function Al(t, e) {
  if (((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)) {
    var n = (e = e.next);
    do {
      if ((n.tag & t) === t) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== e);
  }
}
function Fu(t) {
  var e = t.ref;
  if (e !== null) {
    var n = t.stateNode;
    switch (t.tag) {
      case 5:
        t = n;
        break;
      default:
        t = n;
    }
    typeof e == 'function' ? e(t) : (e.current = t);
  }
}
function Bg(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), Bg(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null && (delete e[Gn], delete e[ga], delete e[Mu], delete e[I_], delete e[F_])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function Hg(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function oh(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || Hg(t.return)) return null;
      t = t.return;
    }
    for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18; ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function Ou(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6)
    (t = t.stateNode),
      e
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(t, e)
          : n.insertBefore(t, e)
        : (n.nodeType === 8
            ? ((e = n.parentNode), e.insertBefore(t, n))
            : ((e = n), e.appendChild(t)),
          (n = n._reactRootContainer),
          n != null || e.onclick !== null || (e.onclick = Yo));
  else if (i !== 4 && ((t = t.child), t !== null))
    for (Ou(t, e, n), t = t.sibling; t !== null; ) Ou(t, e, n), (t = t.sibling);
}
function ku(t, e, n) {
  var i = t.tag;
  if (i === 5 || i === 6) (t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t);
  else if (i !== 4 && ((t = t.child), t !== null))
    for (ku(t, e, n), t = t.sibling; t !== null; ) ku(t, e, n), (t = t.sibling);
}
var Pt = null,
  Pn = !1;
function xi(t, e, n) {
  for (n = n.child; n !== null; ) Gg(t, e, n), (n = n.sibling);
}
function Gg(t, e, n) {
  if (Wn && typeof Wn.onCommitFiberUnmount == 'function')
    try {
      Wn.onCommitFiberUnmount(_l, n);
    } catch {}
  switch (n.tag) {
    case 5:
      kt || ns(n, e);
    case 6:
      var i = Pt,
        r = Pn;
      (Pt = null),
        xi(t, e, n),
        (Pt = i),
        (Pn = r),
        Pt !== null &&
          (Pn
            ? ((t = Pt),
              (n = n.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(n) : t.removeChild(n))
            : Pt.removeChild(n.stateNode));
      break;
    case 18:
      Pt !== null &&
        (Pn
          ? ((t = Pt),
            (n = n.stateNode),
            t.nodeType === 8 ? sc(t.parentNode, n) : t.nodeType === 1 && sc(t, n),
            da(t))
          : sc(Pt, n.stateNode));
      break;
    case 4:
      (i = Pt),
        (r = Pn),
        (Pt = n.stateNode.containerInfo),
        (Pn = !0),
        xi(t, e, n),
        (Pt = i),
        (Pn = r);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!kt && ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))) {
        r = i = i.next;
        do {
          var s = r,
            a = s.destroy;
          (s = s.tag), a !== void 0 && (s & 2 || s & 4) && Iu(n, e, a), (r = r.next);
        } while (r !== i);
      }
      xi(t, e, n);
      break;
    case 1:
      if (!kt && (ns(n, e), (i = n.stateNode), typeof i.componentWillUnmount == 'function'))
        try {
          (i.props = n.memoizedProps), (i.state = n.memoizedState), i.componentWillUnmount();
        } catch (o) {
          ht(n, e, o);
        }
      xi(t, e, n);
      break;
    case 21:
      xi(t, e, n);
      break;
    case 22:
      n.mode & 1
        ? ((kt = (i = kt) || n.memoizedState !== null), xi(t, e, n), (kt = i))
        : xi(t, e, n);
      break;
    default:
      xi(t, e, n);
  }
}
function lh(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var n = t.stateNode;
    n === null && (n = t.stateNode = new Q_()),
      e.forEach(function (i) {
        var r = lv.bind(null, t, i);
        n.has(i) || (n.add(i), i.then(r, r));
      });
  }
}
function Tn(t, e) {
  var n = e.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var r = n[i];
      try {
        var s = t,
          a = e,
          o = a;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              (Pt = o.stateNode), (Pn = !1);
              break e;
            case 3:
              (Pt = o.stateNode.containerInfo), (Pn = !0);
              break e;
            case 4:
              (Pt = o.stateNode.containerInfo), (Pn = !0);
              break e;
          }
          o = o.return;
        }
        if (Pt === null) throw Error(ee(160));
        Gg(s, a, r), (Pt = null), (Pn = !1);
        var l = r.alternate;
        l !== null && (l.return = null), (r.return = null);
      } catch (c) {
        ht(r, e, c);
      }
    }
  if (e.subtreeFlags & 12854) for (e = e.child; e !== null; ) Vg(e, t), (e = e.sibling);
}
function Vg(t, e) {
  var n = t.alternate,
    i = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Tn(e, t), kn(t), i & 4)) {
        try {
          ia(3, t, t.return), Al(3, t);
        } catch (y) {
          ht(t, t.return, y);
        }
        try {
          ia(5, t, t.return);
        } catch (y) {
          ht(t, t.return, y);
        }
      }
      break;
    case 1:
      Tn(e, t), kn(t), i & 512 && n !== null && ns(n, n.return);
      break;
    case 5:
      if ((Tn(e, t), kn(t), i & 512 && n !== null && ns(n, n.return), t.flags & 32)) {
        var r = t.stateNode;
        try {
          oa(r, '');
        } catch (y) {
          ht(t, t.return, y);
        }
      }
      if (i & 4 && ((r = t.stateNode), r != null)) {
        var s = t.memoizedProps,
          a = n !== null ? n.memoizedProps : s,
          o = t.type,
          l = t.updateQueue;
        if (((t.updateQueue = null), l !== null))
          try {
            o === 'input' && s.type === 'radio' && s.name != null && dm(r, s), lu(o, a);
            var c = lu(o, s);
            for (a = 0; a < l.length; a += 2) {
              var d = l[a],
                f = l[a + 1];
              d === 'style'
                ? gm(r, f)
                : d === 'dangerouslySetInnerHTML'
                ? pm(r, f)
                : d === 'children'
                ? oa(r, f)
                : od(r, d, f, c);
            }
            switch (o) {
              case 'input':
                iu(r, s);
                break;
              case 'textarea':
                fm(r, s);
                break;
              case 'select':
                var h = r._wrapperState.wasMultiple;
                r._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? as(r, !!s.multiple, g, !1)
                  : h !== !!s.multiple &&
                    (s.defaultValue != null
                      ? as(r, !!s.multiple, s.defaultValue, !0)
                      : as(r, !!s.multiple, s.multiple ? [] : '', !1));
            }
            r[ga] = s;
          } catch (y) {
            ht(t, t.return, y);
          }
      }
      break;
    case 6:
      if ((Tn(e, t), kn(t), i & 4)) {
        if (t.stateNode === null) throw Error(ee(162));
        (r = t.stateNode), (s = t.memoizedProps);
        try {
          r.nodeValue = s;
        } catch (y) {
          ht(t, t.return, y);
        }
      }
      break;
    case 3:
      if ((Tn(e, t), kn(t), i & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          da(e.containerInfo);
        } catch (y) {
          ht(t, t.return, y);
        }
      break;
    case 4:
      Tn(e, t), kn(t);
      break;
    case 13:
      Tn(e, t),
        kn(t),
        (r = t.child),
        r.flags & 8192 &&
          ((s = r.memoizedState !== null),
          (r.stateNode.isHidden = s),
          !s || (r.alternate !== null && r.alternate.memoizedState !== null) || (Bd = gt())),
        i & 4 && lh(t);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        t.mode & 1 ? ((kt = (c = kt) || d), Tn(e, t), (kt = c)) : Tn(e, t),
        kn(t),
        i & 8192)
      ) {
        if (((c = t.memoizedState !== null), (t.stateNode.isHidden = c) && !d && t.mode & 1))
          for (he = t, d = t.child; d !== null; ) {
            for (f = he = d; he !== null; ) {
              switch (((h = he), (g = h.child), h.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ia(4, h, h.return);
                  break;
                case 1:
                  ns(h, h.return);
                  var v = h.stateNode;
                  if (typeof v.componentWillUnmount == 'function') {
                    (i = h), (n = h.return);
                    try {
                      (e = i),
                        (v.props = e.memoizedProps),
                        (v.state = e.memoizedState),
                        v.componentWillUnmount();
                    } catch (y) {
                      ht(i, n, y);
                    }
                  }
                  break;
                case 5:
                  ns(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    uh(f);
                    continue;
                  }
              }
              g !== null ? ((g.return = h), (he = g)) : uh(f);
            }
            d = d.sibling;
          }
        e: for (d = null, f = t; ; ) {
          if (f.tag === 5) {
            if (d === null) {
              d = f;
              try {
                (r = f.stateNode),
                  c
                    ? ((s = r.style),
                      typeof s.setProperty == 'function'
                        ? s.setProperty('display', 'none', 'important')
                        : (s.display = 'none'))
                    : ((o = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a = l != null && l.hasOwnProperty('display') ? l.display : null),
                      (o.style.display = mm('display', a)));
              } catch (y) {
                ht(t, t.return, y);
              }
            }
          } else if (f.tag === 6) {
            if (d === null)
              try {
                f.stateNode.nodeValue = c ? '' : f.memoizedProps;
              } catch (y) {
                ht(t, t.return, y);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) || f.memoizedState === null || f === t) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === t) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === t) break e;
            d === f && (d = null), (f = f.return);
          }
          d === f && (d = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      Tn(e, t), kn(t), i & 4 && lh(t);
      break;
    case 21:
      break;
    default:
      Tn(e, t), kn(t);
  }
}
function kn(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var n = t.return; n !== null; ) {
          if (Hg(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(ee(160));
      }
      switch (i.tag) {
        case 5:
          var r = i.stateNode;
          i.flags & 32 && (oa(r, ''), (i.flags &= -33));
          var s = oh(t);
          ku(t, s, r);
          break;
        case 3:
        case 4:
          var a = i.stateNode.containerInfo,
            o = oh(t);
          Ou(t, o, a);
          break;
        default:
          throw Error(ee(161));
      }
    } catch (l) {
      ht(t, t.return, l);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function ev(t, e, n) {
  (he = t), Wg(t);
}
function Wg(t, e, n) {
  for (var i = (t.mode & 1) !== 0; he !== null; ) {
    var r = he,
      s = r.child;
    if (r.tag === 22 && i) {
      var a = r.memoizedState !== null || Qa;
      if (!a) {
        var o = r.alternate,
          l = (o !== null && o.memoizedState !== null) || kt;
        o = Qa;
        var c = kt;
        if (((Qa = a), (kt = l) && !c))
          for (he = r; he !== null; )
            (a = he),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? dh(r)
                : l !== null
                ? ((l.return = a), (he = l))
                : dh(r);
        for (; s !== null; ) (he = s), Wg(s), (s = s.sibling);
        (he = r), (Qa = o), (kt = c);
      }
      ch(t);
    } else r.subtreeFlags & 8772 && s !== null ? ((s.return = r), (he = s)) : ch(t);
  }
}
function ch(t) {
  for (; he !== null; ) {
    var e = he;
    if (e.flags & 8772) {
      var n = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              kt || Al(5, e);
              break;
            case 1:
              var i = e.stateNode;
              if (e.flags & 4 && !kt)
                if (n === null) i.componentDidMount();
                else {
                  var r = e.elementType === e.type ? n.memoizedProps : Cn(e.type, n.memoizedProps);
                  i.componentDidUpdate(r, n.memoizedState, i.__reactInternalSnapshotBeforeUpdate);
                }
              var s = e.updateQueue;
              s !== null && qf(e, s, i);
              break;
            case 3:
              var a = e.updateQueue;
              if (a !== null) {
                if (((n = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      n = e.child.stateNode;
                      break;
                    case 1:
                      n = e.child.stateNode;
                  }
                qf(e, a, n);
              }
              break;
            case 5:
              var o = e.stateNode;
              if (n === null && e.flags & 4) {
                n = o;
                var l = e.memoizedProps;
                switch (e.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus();
                    break;
                  case 'img':
                    l.src && (n.src = l.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var c = e.alternate;
                if (c !== null) {
                  var d = c.memoizedState;
                  if (d !== null) {
                    var f = d.dehydrated;
                    f !== null && da(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(ee(163));
          }
        kt || (e.flags & 512 && Fu(e));
      } catch (h) {
        ht(e, e.return, h);
      }
    }
    if (e === t) {
      he = null;
      break;
    }
    if (((n = e.sibling), n !== null)) {
      (n.return = e.return), (he = n);
      break;
    }
    he = e.return;
  }
}
function uh(t) {
  for (; he !== null; ) {
    var e = he;
    if (e === t) {
      he = null;
      break;
    }
    var n = e.sibling;
    if (n !== null) {
      (n.return = e.return), (he = n);
      break;
    }
    he = e.return;
  }
}
function dh(t) {
  for (; he !== null; ) {
    var e = he;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var n = e.return;
          try {
            Al(4, e);
          } catch (l) {
            ht(e, n, l);
          }
          break;
        case 1:
          var i = e.stateNode;
          if (typeof i.componentDidMount == 'function') {
            var r = e.return;
            try {
              i.componentDidMount();
            } catch (l) {
              ht(e, r, l);
            }
          }
          var s = e.return;
          try {
            Fu(e);
          } catch (l) {
            ht(e, s, l);
          }
          break;
        case 5:
          var a = e.return;
          try {
            Fu(e);
          } catch (l) {
            ht(e, a, l);
          }
      }
    } catch (l) {
      ht(e, e.return, l);
    }
    if (e === t) {
      he = null;
      break;
    }
    var o = e.sibling;
    if (o !== null) {
      (o.return = e.return), (he = o);
      break;
    }
    he = e.return;
  }
}
var tv = Math.ceil,
  sl = mi.ReactCurrentDispatcher,
  kd = mi.ReactCurrentOwner,
  Mn = mi.ReactCurrentBatchConfig,
  Xe = 0,
  bt = null,
  vt = null,
  Nt = 0,
  ln = 0,
  is = Yi(0),
  St = 0,
  Ma = null,
  Mr = 0,
  bl = 0,
  zd = 0,
  ra = null,
  Kt = null,
  Bd = 0,
  ys = 1 / 0,
  ti = null,
  al = !1,
  zu = null,
  Oi = null,
  Ja = !1,
  Pi = null,
  ol = 0,
  sa = 0,
  Bu = null,
  Io = -1,
  Fo = 0;
function Wt() {
  return Xe & 6 ? gt() : Io !== -1 ? Io : (Io = gt());
}
function ki(t) {
  return t.mode & 1
    ? Xe & 2 && Nt !== 0
      ? Nt & -Nt
      : k_.transition !== null
      ? (Fo === 0 && (Fo = Rm()), Fo)
      : ((t = $e), t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : Im(t.type))), t)
    : 1;
}
function In(t, e, n, i) {
  if (50 < sa) throw ((sa = 0), (Bu = null), Error(ee(185)));
  Aa(t, n, i),
    (!(Xe & 2) || t !== bt) &&
      (t === bt && (!(Xe & 2) && (bl |= n), St === 4 && bi(t, Nt)),
      tn(t, i),
      n === 1 && Xe === 0 && !(e.mode & 1) && ((ys = gt() + 500), El && $i()));
}
function tn(t, e) {
  var n = t.callbackNode;
  kx(t, e);
  var i = Wo(t, t === bt ? Nt : 0);
  if (i === 0) n !== null && yf(n), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = i & -i), t.callbackPriority !== e)) {
    if ((n != null && yf(n), e === 1))
      t.tag === 0 ? O_(fh.bind(null, t)) : eg(fh.bind(null, t)),
        D_(function () {
          !(Xe & 6) && $i();
        }),
        (n = null);
    else {
      switch (Cm(i)) {
        case 1:
          n = fd;
          break;
        case 4:
          n = Am;
          break;
        case 16:
          n = Vo;
          break;
        case 536870912:
          n = bm;
          break;
        default:
          n = Vo;
      }
      n = Qg(n, jg.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = n);
  }
}
function jg(t, e) {
  if (((Io = -1), (Fo = 0), Xe & 6)) throw Error(ee(327));
  var n = t.callbackNode;
  if (ds() && t.callbackNode !== n) return null;
  var i = Wo(t, t === bt ? Nt : 0);
  if (i === 0) return null;
  if (i & 30 || i & t.expiredLanes || e) e = ll(t, i);
  else {
    e = i;
    var r = Xe;
    Xe |= 2;
    var s = qg();
    (bt !== t || Nt !== e) && ((ti = null), (ys = gt() + 500), mr(t, e));
    do
      try {
        rv();
        break;
      } catch (o) {
        Xg(t, o);
      }
    while (!0);
    Td(), (sl.current = s), (Xe = r), vt !== null ? (e = 0) : ((bt = null), (Nt = 0), (e = St));
  }
  if (e !== 0) {
    if ((e === 2 && ((r = hu(t)), r !== 0 && ((i = r), (e = Hu(t, r)))), e === 1))
      throw ((n = Ma), mr(t, 0), bi(t, i), tn(t, gt()), n);
    if (e === 6) bi(t, i);
    else {
      if (
        ((r = t.current.alternate),
        !(i & 30) &&
          !nv(r) &&
          ((e = ll(t, i)), e === 2 && ((s = hu(t)), s !== 0 && ((i = s), (e = Hu(t, s)))), e === 1))
      )
        throw ((n = Ma), mr(t, 0), bi(t, i), tn(t, gt()), n);
      switch (((t.finishedWork = r), (t.finishedLanes = i), e)) {
        case 0:
        case 1:
          throw Error(ee(345));
        case 2:
          ar(t, Kt, ti);
          break;
        case 3:
          if ((bi(t, i), (i & 130023424) === i && ((e = Bd + 500 - gt()), 10 < e))) {
            if (Wo(t, 0) !== 0) break;
            if (((r = t.suspendedLanes), (r & i) !== i)) {
              Wt(), (t.pingedLanes |= t.suspendedLanes & r);
              break;
            }
            t.timeoutHandle = Su(ar.bind(null, t, Kt, ti), e);
            break;
          }
          ar(t, Kt, ti);
          break;
        case 4:
          if ((bi(t, i), (i & 4194240) === i)) break;
          for (e = t.eventTimes, r = -1; 0 < i; ) {
            var a = 31 - Un(i);
            (s = 1 << a), (a = e[a]), a > r && (r = a), (i &= ~s);
          }
          if (
            ((i = r),
            (i = gt() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * tv(i / 1960)) - i),
            10 < i)
          ) {
            t.timeoutHandle = Su(ar.bind(null, t, Kt, ti), i);
            break;
          }
          ar(t, Kt, ti);
          break;
        case 5:
          ar(t, Kt, ti);
          break;
        default:
          throw Error(ee(329));
      }
    }
  }
  return tn(t, gt()), t.callbackNode === n ? jg.bind(null, t) : null;
}
function Hu(t, e) {
  var n = ra;
  return (
    t.current.memoizedState.isDehydrated && (mr(t, e).flags |= 256),
    (t = ll(t, e)),
    t !== 2 && ((e = Kt), (Kt = n), e !== null && Gu(e)),
    t
  );
}
function Gu(t) {
  Kt === null ? (Kt = t) : Kt.push.apply(Kt, t);
}
function nv(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var n = e.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var r = n[i],
            s = r.getSnapshot;
          r = r.value;
          try {
            if (!Fn(s(), r)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = e.child), e.subtreeFlags & 16384 && n !== null)) (n.return = e), (e = n);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function bi(t, e) {
  for (
    e &= ~zd, e &= ~bl, t.suspendedLanes |= e, t.pingedLanes &= ~e, t = t.expirationTimes;
    0 < e;

  ) {
    var n = 31 - Un(e),
      i = 1 << n;
    (t[n] = -1), (e &= ~i);
  }
}
function fh(t) {
  if (Xe & 6) throw Error(ee(327));
  ds();
  var e = Wo(t, 0);
  if (!(e & 1)) return tn(t, gt()), null;
  var n = ll(t, e);
  if (t.tag !== 0 && n === 2) {
    var i = hu(t);
    i !== 0 && ((e = i), (n = Hu(t, i)));
  }
  if (n === 1) throw ((n = Ma), mr(t, 0), bi(t, e), tn(t, gt()), n);
  if (n === 6) throw Error(ee(345));
  return (
    (t.finishedWork = t.current.alternate), (t.finishedLanes = e), ar(t, Kt, ti), tn(t, gt()), null
  );
}
function Hd(t, e) {
  var n = Xe;
  Xe |= 1;
  try {
    return t(e);
  } finally {
    (Xe = n), Xe === 0 && ((ys = gt() + 500), El && $i());
  }
}
function Er(t) {
  Pi !== null && Pi.tag === 0 && !(Xe & 6) && ds();
  var e = Xe;
  Xe |= 1;
  var n = Mn.transition,
    i = $e;
  try {
    if (((Mn.transition = null), ($e = 1), t)) return t();
  } finally {
    ($e = i), (Mn.transition = n), (Xe = e), !(Xe & 6) && $i();
  }
}
function Gd() {
  (ln = is.current), it(is);
}
function mr(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var n = t.timeoutHandle;
  if ((n !== -1 && ((t.timeoutHandle = -1), L_(n)), vt !== null))
    for (n = vt.return; n !== null; ) {
      var i = n;
      switch ((Md(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && $o();
          break;
        case 3:
          _s(), it(Jt), it(zt), Nd();
          break;
        case 5:
          Pd(i);
          break;
        case 4:
          _s();
          break;
        case 13:
          it(ct);
          break;
        case 19:
          it(ct);
          break;
        case 10:
          Ad(i.type._context);
          break;
        case 22:
        case 23:
          Gd();
      }
      n = n.return;
    }
  if (
    ((bt = t),
    (vt = t = zi(t.current, null)),
    (Nt = ln = e),
    (St = 0),
    (Ma = null),
    (zd = bl = Mr = 0),
    (Kt = ra = null),
    fr !== null)
  ) {
    for (e = 0; e < fr.length; e++)
      if (((n = fr[e]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var r = i.next,
          s = n.pending;
        if (s !== null) {
          var a = s.next;
          (s.next = r), (i.next = a);
        }
        n.pending = i;
      }
    fr = null;
  }
  return t;
}
function Xg(t, e) {
  do {
    var n = vt;
    try {
      if ((Td(), (Lo.current = rl), il)) {
        for (var i = ut.memoizedState; i !== null; ) {
          var r = i.queue;
          r !== null && (r.pending = null), (i = i.next);
        }
        il = !1;
      }
      if (
        ((Sr = 0),
        (At = yt = ut = null),
        (na = !1),
        (va = 0),
        (kd.current = null),
        n === null || n.return === null)
      ) {
        (St = 1), (Ma = e), (vt = null);
        break;
      }
      e: {
        var s = t,
          a = n.return,
          o = n,
          l = e;
        if (
          ((e = Nt),
          (o.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var c = l,
            d = o,
            f = d.tag;
          if (!(d.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var h = d.alternate;
            h
              ? ((d.updateQueue = h.updateQueue),
                (d.memoizedState = h.memoizedState),
                (d.lanes = h.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var g = Jf(a);
          if (g !== null) {
            (g.flags &= -257), eh(g, a, o, s, e), g.mode & 1 && Qf(s, c, e), (e = g), (l = c);
            var v = e.updateQueue;
            if (v === null) {
              var y = new Set();
              y.add(l), (e.updateQueue = y);
            } else v.add(l);
            break e;
          } else {
            if (!(e & 1)) {
              Qf(s, c, e), Vd();
              break e;
            }
            l = Error(ee(426));
          }
        } else if (at && o.mode & 1) {
          var p = Jf(a);
          if (p !== null) {
            !(p.flags & 65536) && (p.flags |= 256), eh(p, a, o, s, e), Ed(vs(l, o));
            break e;
          }
        }
        (s = l = vs(l, o)), St !== 4 && (St = 2), ra === null ? (ra = [s]) : ra.push(s), (s = a);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (e &= -e), (s.lanes |= e);
              var u = Cg(s, l, e);
              Xf(s, u);
              break e;
            case 1:
              o = l;
              var _ = s.type,
                x = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof _.getDerivedStateFromError == 'function' ||
                  (x !== null &&
                    typeof x.componentDidCatch == 'function' &&
                    (Oi === null || !Oi.has(x))))
              ) {
                (s.flags |= 65536), (e &= -e), (s.lanes |= e);
                var E = Pg(s, o, e);
                Xf(s, E);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      $g(n);
    } catch (C) {
      (e = C), vt === n && n !== null && (vt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function qg() {
  var t = sl.current;
  return (sl.current = rl), t === null ? rl : t;
}
function Vd() {
  (St === 0 || St === 3 || St === 2) && (St = 4),
    bt === null || (!(Mr & 268435455) && !(bl & 268435455)) || bi(bt, Nt);
}
function ll(t, e) {
  var n = Xe;
  Xe |= 2;
  var i = qg();
  (bt !== t || Nt !== e) && ((ti = null), mr(t, e));
  do
    try {
      iv();
      break;
    } catch (r) {
      Xg(t, r);
    }
  while (!0);
  if ((Td(), (Xe = n), (sl.current = i), vt !== null)) throw Error(ee(261));
  return (bt = null), (Nt = 0), St;
}
function iv() {
  for (; vt !== null; ) Yg(vt);
}
function rv() {
  for (; vt !== null && !Cx(); ) Yg(vt);
}
function Yg(t) {
  var e = Zg(t.alternate, t, ln);
  (t.memoizedProps = t.pendingProps), e === null ? $g(t) : (vt = e), (kd.current = null);
}
function $g(t) {
  var e = t;
  do {
    var n = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((n = Z_(n, e)), n !== null)) {
        (n.flags &= 32767), (vt = n);
        return;
      }
      if (t !== null) (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (St = 6), (vt = null);
        return;
      }
    } else if (((n = K_(n, e, ln)), n !== null)) {
      vt = n;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      vt = e;
      return;
    }
    vt = e = t;
  } while (e !== null);
  St === 0 && (St = 5);
}
function ar(t, e, n) {
  var i = $e,
    r = Mn.transition;
  try {
    (Mn.transition = null), ($e = 1), sv(t, e, n, i);
  } finally {
    (Mn.transition = r), ($e = i);
  }
  return null;
}
function sv(t, e, n, i) {
  do ds();
  while (Pi !== null);
  if (Xe & 6) throw Error(ee(327));
  n = t.finishedWork;
  var r = t.finishedLanes;
  if (n === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), n === t.current)) throw Error(ee(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (zx(t, s),
    t === bt && ((vt = bt = null), (Nt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ja ||
      ((Ja = !0),
      Qg(Vo, function () {
        return ds(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = Mn.transition), (Mn.transition = null);
    var a = $e;
    $e = 1;
    var o = Xe;
    (Xe |= 4),
      (kd.current = null),
      J_(t, n),
      Vg(n, t),
      T_(vu),
      (jo = !!_u),
      (vu = _u = null),
      (t.current = n),
      ev(n),
      Px(),
      (Xe = o),
      ($e = a),
      (Mn.transition = s);
  } else t.current = n;
  if (
    (Ja && ((Ja = !1), (Pi = t), (ol = r)),
    (s = t.pendingLanes),
    s === 0 && (Oi = null),
    Dx(n.stateNode),
    tn(t, gt()),
    e !== null)
  )
    for (i = t.onRecoverableError, n = 0; n < e.length; n++)
      (r = e[n]), i(r.value, { componentStack: r.stack, digest: r.digest });
  if (al) throw ((al = !1), (t = zu), (zu = null), t);
  return (
    ol & 1 && t.tag !== 0 && ds(),
    (s = t.pendingLanes),
    s & 1 ? (t === Bu ? sa++ : ((sa = 0), (Bu = t))) : (sa = 0),
    $i(),
    null
  );
}
function ds() {
  if (Pi !== null) {
    var t = Cm(ol),
      e = Mn.transition,
      n = $e;
    try {
      if (((Mn.transition = null), ($e = 16 > t ? 16 : t), Pi === null)) var i = !1;
      else {
        if (((t = Pi), (Pi = null), (ol = 0), Xe & 6)) throw Error(ee(331));
        var r = Xe;
        for (Xe |= 4, he = t.current; he !== null; ) {
          var s = he,
            a = s.child;
          if (he.flags & 16) {
            var o = s.deletions;
            if (o !== null) {
              for (var l = 0; l < o.length; l++) {
                var c = o[l];
                for (he = c; he !== null; ) {
                  var d = he;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ia(8, d, s);
                  }
                  var f = d.child;
                  if (f !== null) (f.return = d), (he = f);
                  else
                    for (; he !== null; ) {
                      d = he;
                      var h = d.sibling,
                        g = d.return;
                      if ((Bg(d), d === c)) {
                        he = null;
                        break;
                      }
                      if (h !== null) {
                        (h.return = g), (he = h);
                        break;
                      }
                      he = g;
                    }
                }
              }
              var v = s.alternate;
              if (v !== null) {
                var y = v.child;
                if (y !== null) {
                  v.child = null;
                  do {
                    var p = y.sibling;
                    (y.sibling = null), (y = p);
                  } while (y !== null);
                }
              }
              he = s;
            }
          }
          if (s.subtreeFlags & 2064 && a !== null) (a.return = s), (he = a);
          else
            e: for (; he !== null; ) {
              if (((s = he), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ia(9, s, s.return);
                }
              var u = s.sibling;
              if (u !== null) {
                (u.return = s.return), (he = u);
                break e;
              }
              he = s.return;
            }
        }
        var _ = t.current;
        for (he = _; he !== null; ) {
          a = he;
          var x = a.child;
          if (a.subtreeFlags & 2064 && x !== null) (x.return = a), (he = x);
          else
            e: for (a = _; he !== null; ) {
              if (((o = he), o.flags & 2048))
                try {
                  switch (o.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Al(9, o);
                  }
                } catch (C) {
                  ht(o, o.return, C);
                }
              if (o === a) {
                he = null;
                break e;
              }
              var E = o.sibling;
              if (E !== null) {
                (E.return = o.return), (he = E);
                break e;
              }
              he = o.return;
            }
        }
        if (((Xe = r), $i(), Wn && typeof Wn.onPostCommitFiberRoot == 'function'))
          try {
            Wn.onPostCommitFiberRoot(_l, t);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      ($e = n), (Mn.transition = e);
    }
  }
  return !1;
}
function hh(t, e, n) {
  (e = vs(n, e)),
    (e = Cg(t, e, 1)),
    (t = Fi(t, e, 1)),
    (e = Wt()),
    t !== null && (Aa(t, 1, e), tn(t, e));
}
function ht(t, e, n) {
  if (t.tag === 3) hh(t, t, n);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        hh(e, t, n);
        break;
      } else if (e.tag === 1) {
        var i = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == 'function' ||
          (typeof i.componentDidCatch == 'function' && (Oi === null || !Oi.has(i)))
        ) {
          (t = vs(n, t)),
            (t = Pg(e, t, 1)),
            (e = Fi(e, t, 1)),
            (t = Wt()),
            e !== null && (Aa(e, 1, t), tn(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function av(t, e, n) {
  var i = t.pingCache;
  i !== null && i.delete(e),
    (e = Wt()),
    (t.pingedLanes |= t.suspendedLanes & n),
    bt === t &&
      (Nt & n) === n &&
      (St === 4 || (St === 3 && (Nt & 130023424) === Nt && 500 > gt() - Bd) ? mr(t, 0) : (zd |= n)),
    tn(t, e);
}
function Kg(t, e) {
  e === 0 && (t.mode & 1 ? ((e = Va), (Va <<= 1), !(Va & 130023424) && (Va = 4194304)) : (e = 1));
  var n = Wt();
  (t = fi(t, e)), t !== null && (Aa(t, e, n), tn(t, n));
}
function ov(t) {
  var e = t.memoizedState,
    n = 0;
  e !== null && (n = e.retryLane), Kg(t, n);
}
function lv(t, e) {
  var n = 0;
  switch (t.tag) {
    case 13:
      var i = t.stateNode,
        r = t.memoizedState;
      r !== null && (n = r.retryLane);
      break;
    case 19:
      i = t.stateNode;
      break;
    default:
      throw Error(ee(314));
  }
  i !== null && i.delete(e), Kg(t, n);
}
var Zg;
Zg = function (t, e, n) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Jt.current) Qt = !0;
    else {
      if (!(t.lanes & n) && !(e.flags & 128)) return (Qt = !1), $_(t, e, n);
      Qt = !!(t.flags & 131072);
    }
  else (Qt = !1), at && e.flags & 1048576 && tg(e, Qo, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var i = e.type;
      Uo(t, e), (t = e.pendingProps);
      var r = ms(e, zt.current);
      us(e, n), (r = Dd(null, e, i, t, r, n));
      var s = Ud();
      return (
        (e.flags |= 1),
        typeof r == 'object' && r !== null && typeof r.render == 'function' && r.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            en(i) ? ((s = !0), Ko(e)) : (s = !1),
            (e.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null),
            Rd(e),
            (r.updater = Tl),
            (e.stateNode = r),
            (r._reactInternals = e),
            Ru(e, i, t, n),
            (e = Nu(null, e, i, !0, s, n)))
          : ((e.tag = 0), at && s && Sd(e), Gt(null, e, r, n), (e = e.child)),
        e
      );
    case 16:
      i = e.elementType;
      e: {
        switch (
          (Uo(t, e),
          (t = e.pendingProps),
          (r = i._init),
          (i = r(i._payload)),
          (e.type = i),
          (r = e.tag = uv(i)),
          (t = Cn(i, t)),
          r)
        ) {
          case 0:
            e = Pu(null, e, i, t, n);
            break e;
          case 1:
            e = ih(null, e, i, t, n);
            break e;
          case 11:
            e = th(null, e, i, t, n);
            break e;
          case 14:
            e = nh(null, e, i, Cn(i.type, t), n);
            break e;
        }
        throw Error(ee(306, i, ''));
      }
      return e;
    case 0:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Cn(i, r)),
        Pu(t, e, i, r, n)
      );
    case 1:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Cn(i, r)),
        ih(t, e, i, r, n)
      );
    case 3:
      e: {
        if ((Ug(e), t === null)) throw Error(ee(387));
        (i = e.pendingProps), (s = e.memoizedState), (r = s.element), og(t, e), tl(e, i, null, n);
        var a = e.memoizedState;
        if (((i = a.element), s.isDehydrated))
          if (
            ((s = {
              element: i,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (e.updateQueue.baseState = s),
            (e.memoizedState = s),
            e.flags & 256)
          ) {
            (r = vs(Error(ee(423)), e)), (e = rh(t, e, i, n, r));
            break e;
          } else if (i !== r) {
            (r = vs(Error(ee(424)), e)), (e = rh(t, e, i, n, r));
            break e;
          } else
            for (
              dn = Ii(e.stateNode.containerInfo.firstChild),
                fn = e,
                at = !0,
                Nn = null,
                n = sg(e, null, i, n),
                e.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((gs(), i === r)) {
            e = hi(t, e, n);
            break e;
          }
          Gt(t, e, i, n);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        lg(e),
        t === null && Tu(e),
        (i = e.type),
        (r = e.pendingProps),
        (s = t !== null ? t.memoizedProps : null),
        (a = r.children),
        yu(i, r) ? (a = null) : s !== null && yu(i, s) && (e.flags |= 32),
        Dg(t, e),
        Gt(t, e, a, n),
        e.child
      );
    case 6:
      return t === null && Tu(e), null;
    case 13:
      return Ig(t, e, n);
    case 4:
      return (
        Cd(e, e.stateNode.containerInfo),
        (i = e.pendingProps),
        t === null ? (e.child = xs(e, null, i, n)) : Gt(t, e, i, n),
        e.child
      );
    case 11:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Cn(i, r)),
        th(t, e, i, r, n)
      );
    case 7:
      return Gt(t, e, e.pendingProps, n), e.child;
    case 8:
      return Gt(t, e, e.pendingProps.children, n), e.child;
    case 12:
      return Gt(t, e, e.pendingProps.children, n), e.child;
    case 10:
      e: {
        if (
          ((i = e.type._context),
          (r = e.pendingProps),
          (s = e.memoizedProps),
          (a = r.value),
          Je(Jo, i._currentValue),
          (i._currentValue = a),
          s !== null)
        )
          if (Fn(s.value, a)) {
            if (s.children === r.children && !Jt.current) {
              e = hi(t, e, n);
              break e;
            }
          } else
            for (s = e.child, s !== null && (s.return = e); s !== null; ) {
              var o = s.dependencies;
              if (o !== null) {
                a = s.child;
                for (var l = o.firstContext; l !== null; ) {
                  if (l.context === i) {
                    if (s.tag === 1) {
                      (l = ci(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var d = c.pending;
                        d === null ? (l.next = l) : ((l.next = d.next), (d.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      Au(s.return, n, e),
                      (o.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) a = s.type === e.type ? null : s.child;
              else if (s.tag === 18) {
                if (((a = s.return), a === null)) throw Error(ee(341));
                (a.lanes |= n),
                  (o = a.alternate),
                  o !== null && (o.lanes |= n),
                  Au(a, n, e),
                  (a = s.sibling);
              } else a = s.child;
              if (a !== null) a.return = s;
              else
                for (a = s; a !== null; ) {
                  if (a === e) {
                    a = null;
                    break;
                  }
                  if (((s = a.sibling), s !== null)) {
                    (s.return = a.return), (a = s);
                    break;
                  }
                  a = a.return;
                }
              s = a;
            }
        Gt(t, e, r.children, n), (e = e.child);
      }
      return e;
    case 9:
      return (
        (r = e.type),
        (i = e.pendingProps.children),
        us(e, n),
        (r = En(r)),
        (i = i(r)),
        (e.flags |= 1),
        Gt(t, e, i, n),
        e.child
      );
    case 14:
      return (i = e.type), (r = Cn(i, e.pendingProps)), (r = Cn(i.type, r)), nh(t, e, i, r, n);
    case 15:
      return Ng(t, e, e.type, e.pendingProps, n);
    case 17:
      return (
        (i = e.type),
        (r = e.pendingProps),
        (r = e.elementType === i ? r : Cn(i, r)),
        Uo(t, e),
        (e.tag = 1),
        en(i) ? ((t = !0), Ko(e)) : (t = !1),
        us(e, n),
        Rg(e, i, r),
        Ru(e, i, r, n),
        Nu(null, e, i, !0, t, n)
      );
    case 19:
      return Fg(t, e, n);
    case 22:
      return Lg(t, e, n);
  }
  throw Error(ee(156, e.tag));
};
function Qg(t, e) {
  return Tm(t, e);
}
function cv(t, e, n, i) {
  (this.tag = t),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Sn(t, e, n, i) {
  return new cv(t, e, n, i);
}
function Wd(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function uv(t) {
  if (typeof t == 'function') return Wd(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === cd)) return 11;
    if (t === ud) return 14;
  }
  return 2;
}
function zi(t, e) {
  var n = t.alternate;
  return (
    n === null
      ? ((n = Sn(t.tag, e, t.key, t.mode)),
        (n.elementType = t.elementType),
        (n.type = t.type),
        (n.stateNode = t.stateNode),
        (n.alternate = t),
        (t.alternate = n))
      : ((n.pendingProps = e),
        (n.type = t.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = t.flags & 14680064),
    (n.childLanes = t.childLanes),
    (n.lanes = t.lanes),
    (n.child = t.child),
    (n.memoizedProps = t.memoizedProps),
    (n.memoizedState = t.memoizedState),
    (n.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (n.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (n.sibling = t.sibling),
    (n.index = t.index),
    (n.ref = t.ref),
    n
  );
}
function Oo(t, e, n, i, r, s) {
  var a = 2;
  if (((i = t), typeof t == 'function')) Wd(t) && (a = 1);
  else if (typeof t == 'string') a = 5;
  else
    e: switch (t) {
      case qr:
        return gr(n.children, r, s, e);
      case ld:
        (a = 8), (r |= 8);
        break;
      case Qc:
        return (t = Sn(12, n, e, r | 2)), (t.elementType = Qc), (t.lanes = s), t;
      case Jc:
        return (t = Sn(13, n, e, r)), (t.elementType = Jc), (t.lanes = s), t;
      case eu:
        return (t = Sn(19, n, e, r)), (t.elementType = eu), (t.lanes = s), t;
      case lm:
        return Rl(n, r, s, e);
      default:
        if (typeof t == 'object' && t !== null)
          switch (t.$$typeof) {
            case am:
              a = 10;
              break e;
            case om:
              a = 9;
              break e;
            case cd:
              a = 11;
              break e;
            case ud:
              a = 14;
              break e;
            case wi:
              (a = 16), (i = null);
              break e;
          }
        throw Error(ee(130, t == null ? t : typeof t, ''));
    }
  return (e = Sn(a, n, e, r)), (e.elementType = t), (e.type = i), (e.lanes = s), e;
}
function gr(t, e, n, i) {
  return (t = Sn(7, t, i, e)), (t.lanes = n), t;
}
function Rl(t, e, n, i) {
  return (
    (t = Sn(22, t, i, e)), (t.elementType = lm), (t.lanes = n), (t.stateNode = { isHidden: !1 }), t
  );
}
function hc(t, e, n) {
  return (t = Sn(6, t, null, e)), (t.lanes = n), t;
}
function pc(t, e, n) {
  return (
    (e = Sn(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = n),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function dv(t, e, n, i, r) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Yl(0)),
    (this.expirationTimes = Yl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Yl(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = r),
    (this.mutableSourceEagerHydrationData = null);
}
function jd(t, e, n, i, r, s, a, o, l) {
  return (
    (t = new dv(t, e, n, o, l)),
    e === 1 ? ((e = 1), s === !0 && (e |= 8)) : (e = 0),
    (s = Sn(3, null, null, e)),
    (t.current = s),
    (s.stateNode = t),
    (s.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Rd(s),
    t
  );
}
function fv(t, e, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Xr,
    key: i == null ? null : '' + i,
    children: t,
    containerInfo: e,
    implementation: n,
  };
}
function Jg(t) {
  if (!t) return Wi;
  t = t._reactInternals;
  e: {
    if (br(t) !== t || t.tag !== 1) throw Error(ee(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (en(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(ee(171));
  }
  if (t.tag === 1) {
    var n = t.type;
    if (en(n)) return Jm(t, n, e);
  }
  return e;
}
function e0(t, e, n, i, r, s, a, o, l) {
  return (
    (t = jd(n, i, !0, t, r, s, a, o, l)),
    (t.context = Jg(null)),
    (n = t.current),
    (i = Wt()),
    (r = ki(n)),
    (s = ci(i, r)),
    (s.callback = e ?? null),
    Fi(n, s, r),
    (t.current.lanes = r),
    Aa(t, r, i),
    tn(t, i),
    t
  );
}
function Cl(t, e, n, i) {
  var r = e.current,
    s = Wt(),
    a = ki(r);
  return (
    (n = Jg(n)),
    e.context === null ? (e.context = n) : (e.pendingContext = n),
    (e = ci(s, a)),
    (e.payload = { element: t }),
    (i = i === void 0 ? null : i),
    i !== null && (e.callback = i),
    (t = Fi(r, e, a)),
    t !== null && (In(t, r, a, s), No(t, r, a)),
    a
  );
}
function cl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function ph(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var n = t.retryLane;
    t.retryLane = n !== 0 && n < e ? n : e;
  }
}
function Xd(t, e) {
  ph(t, e), (t = t.alternate) && ph(t, e);
}
var t0 =
  typeof reportError == 'function'
    ? reportError
    : function (t) {
        console.error(t);
      };
function qd(t) {
  this._internalRoot = t;
}
Pl.prototype.render = qd.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(ee(409));
  Cl(t, e, null, null);
};
Pl.prototype.unmount = qd.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    Er(function () {
      Cl(null, t, null, null);
    }),
      (e[di] = null);
  }
};
function Pl(t) {
  this._internalRoot = t;
}
Pl.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = Lm();
    t = { blockedOn: null, target: t, priority: e };
    for (var n = 0; n < Ai.length && e !== 0 && e < Ai[n].priority; n++);
    Ai.splice(n, 0, t), n === 0 && Um(t);
  }
};
function Yd(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function Nl(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== ' react-mount-point-unstable '))
  );
}
function mh() {}
function hv(t, e, n, i, r) {
  if (r) {
    if (typeof i == 'function') {
      var s = i;
      i = function () {
        var c = cl(a);
        s.call(c);
      };
    }
    var a = e0(e, i, t, 0, null, !1, !1, '', mh);
    return (
      (t._reactRootContainer = a),
      (t[di] = a.current),
      pa(t.nodeType === 8 ? t.parentNode : t),
      Er(),
      a
    );
  }
  for (; (r = t.lastChild); ) t.removeChild(r);
  if (typeof i == 'function') {
    var o = i;
    i = function () {
      var c = cl(l);
      o.call(c);
    };
  }
  var l = jd(t, 0, !1, null, null, !1, !1, '', mh);
  return (
    (t._reactRootContainer = l),
    (t[di] = l.current),
    pa(t.nodeType === 8 ? t.parentNode : t),
    Er(function () {
      Cl(e, l, n, i);
    }),
    l
  );
}
function Ll(t, e, n, i, r) {
  var s = n._reactRootContainer;
  if (s) {
    var a = s;
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var l = cl(a);
        o.call(l);
      };
    }
    Cl(e, a, t, r);
  } else a = hv(n, e, t, r, i);
  return cl(a);
}
Pm = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var n = $s(e.pendingLanes);
        n !== 0 && (hd(e, n | 1), tn(e, gt()), !(Xe & 6) && ((ys = gt() + 500), $i()));
      }
      break;
    case 13:
      Er(function () {
        var i = fi(t, 1);
        if (i !== null) {
          var r = Wt();
          In(i, t, 1, r);
        }
      }),
        Xd(t, 1);
  }
};
pd = function (t) {
  if (t.tag === 13) {
    var e = fi(t, 134217728);
    if (e !== null) {
      var n = Wt();
      In(e, t, 134217728, n);
    }
    Xd(t, 134217728);
  }
};
Nm = function (t) {
  if (t.tag === 13) {
    var e = ki(t),
      n = fi(t, e);
    if (n !== null) {
      var i = Wt();
      In(n, t, e, i);
    }
    Xd(t, e);
  }
};
Lm = function () {
  return $e;
};
Dm = function (t, e) {
  var n = $e;
  try {
    return ($e = t), e();
  } finally {
    $e = n;
  }
};
uu = function (t, e, n) {
  switch (e) {
    case 'input':
      if ((iu(t, n), (e = n.name), n.type === 'radio' && e != null)) {
        for (n = t; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + e) + '][type="radio"]'), e = 0;
          e < n.length;
          e++
        ) {
          var i = n[e];
          if (i !== t && i.form === t.form) {
            var r = Ml(i);
            if (!r) throw Error(ee(90));
            um(i), iu(i, r);
          }
        }
      }
      break;
    case 'textarea':
      fm(t, n);
      break;
    case 'select':
      (e = n.value), e != null && as(t, !!n.multiple, e, !1);
  }
};
vm = Hd;
ym = Er;
var pv = { usingClientEntryPoint: !1, Events: [Ra, Zr, Ml, xm, _m, Hd] },
  zs = {
    findFiberByHostInstance: dr,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  mv = {
    bundleType: zs.bundleType,
    version: zs.version,
    rendererPackageName: zs.rendererPackageName,
    rendererConfig: zs.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: mi.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = Em(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: zs.findFiberByHostInstance,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var eo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!eo.isDisabled && eo.supportsFiber)
    try {
      (_l = eo.inject(mv)), (Wn = eo);
    } catch {}
}
pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pv;
pn.createPortal = function (t, e) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yd(e)) throw Error(ee(200));
  return fv(t, e, null, n);
};
pn.createRoot = function (t, e) {
  if (!Yd(t)) throw Error(ee(299));
  var n = !1,
    i = '',
    r = t0;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (n = !0),
      e.identifierPrefix !== void 0 && (i = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (r = e.onRecoverableError)),
    (e = jd(t, 1, !1, null, null, n, !1, i, r)),
    (t[di] = e.current),
    pa(t.nodeType === 8 ? t.parentNode : t),
    new qd(e)
  );
};
pn.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == 'function'
      ? Error(ee(188))
      : ((t = Object.keys(t).join(',')), Error(ee(268, t)));
  return (t = Em(e)), (t = t === null ? null : t.stateNode), t;
};
pn.flushSync = function (t) {
  return Er(t);
};
pn.hydrate = function (t, e, n) {
  if (!Nl(e)) throw Error(ee(200));
  return Ll(null, t, e, !0, n);
};
pn.hydrateRoot = function (t, e, n) {
  if (!Yd(t)) throw Error(ee(405));
  var i = (n != null && n.hydratedSources) || null,
    r = !1,
    s = '',
    a = t0;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (r = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (e = e0(e, null, t, 1, n ?? null, r, !1, s, a)),
    (t[di] = e.current),
    pa(t),
    i)
  )
    for (t = 0; t < i.length; t++)
      (n = i[t]),
        (r = n._getVersion),
        (r = r(n._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [n, r])
          : e.mutableSourceEagerHydrationData.push(n, r);
  return new Pl(e);
};
pn.render = function (t, e, n) {
  if (!Nl(e)) throw Error(ee(200));
  return Ll(null, t, e, !1, n);
};
pn.unmountComponentAtNode = function (t) {
  if (!Nl(t)) throw Error(ee(40));
  return t._reactRootContainer
    ? (Er(function () {
        Ll(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[di] = null);
        });
      }),
      !0)
    : !1;
};
pn.unstable_batchedUpdates = Hd;
pn.unstable_renderSubtreeIntoContainer = function (t, e, n, i) {
  if (!Nl(n)) throw Error(ee(200));
  if (t == null || t._reactInternals === void 0) throw Error(ee(38));
  return Ll(t, e, n, !1, i);
};
pn.version = '18.3.1-next-f1338f8080-20240426';
function n0() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n0);
    } catch (t) {
      console.error(t);
    }
}
n0(), (nm.exports = pn);
var gv = nm.exports,
  i0,
  gh = gv;
(i0 = gh.createRoot), gh.hydrateRoot;
function xv() {
  return m.jsx('header', {
    className: 'absolute w-full z-50 bg-transparent',
    children: m.jsx('div', {
      className: 'container mx-auto px-4',
      children: m.jsx('div', {
        className: 'flex items-center h-16 sm:h-20',
        children: m.jsx('a', {
          href: 'https://livekone.com/',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'flex items-center gap-2',
          children: m.jsx('img', {
            src: '/Livekone.svg',
            alt: 'Livekone',
            className: 'h-8 sm:h-10',
          }),
        }),
      }),
    }),
  });
}
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var _v = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vv = (t) =>
    t
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .toLowerCase()
      .trim(),
  et = (t, e) => {
    const n = un.forwardRef(
      (
        {
          color: i = 'currentColor',
          size: r = 24,
          strokeWidth: s = 2,
          absoluteStrokeWidth: a,
          className: o = '',
          children: l,
          ...c
        },
        d,
      ) =>
        un.createElement(
          'svg',
          {
            ref: d,
            ..._v,
            width: r,
            height: r,
            stroke: i,
            strokeWidth: a ? (Number(s) * 24) / Number(r) : s,
            className: ['lucide', `lucide-${vv(t)}`, o].join(' '),
            ...c,
          },
          [...e.map(([f, h]) => un.createElement(f, h)), ...(Array.isArray(l) ? l : [l])],
        ),
    );
    return (n.displayName = `${t}`), n;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ko = et('AlertTriangle', [
  [
    'path',
    {
      d: 'm21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z',
      key: 'c3ski4',
    },
  ],
  ['path', { d: 'M12 9v4', key: 'juzpu7' }],
  ['path', { d: 'M12 17h.01', key: 'p32p05' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yv = et('ArrowDown', [
  ['path', { d: 'M12 5v14', key: 's699le' }],
  ['path', { d: 'm19 12-7 7-7-7', key: '1idqje' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pa = et('ArrowRight', [
  ['path', { d: 'M5 12h14', key: '1ays0h' }],
  ['path', { d: 'm12 5 7 7-7 7', key: 'xquz4c' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xh = et('ArrowUpRight', [
  ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
  ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wr = et('Bot', [
  ['path', { d: 'M12 8V4H8', key: 'hb8ula' }],
  ['rect', { width: '16', height: '12', x: '4', y: '8', rx: '2', key: 'enze0r' }],
  ['path', { d: 'M2 14h2', key: 'vft8re' }],
  ['path', { d: 'M20 14h2', key: '4cs60a' }],
  ['path', { d: 'M15 13v2', key: '1xurst' }],
  ['path', { d: 'M9 13v2', key: 'rq6x2g' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dl = et('Brain', [
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z',
      key: 'l5xja',
    },
  ],
  [
    'path',
    {
      d: 'M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z',
      key: 'ep3f8r',
    },
  ],
  ['path', { d: 'M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4', key: '1p4c4q' }],
  ['path', { d: 'M17.599 6.5a3 3 0 0 0 .399-1.375', key: 'tmeiqw' }],
  ['path', { d: 'M6.003 5.125A3 3 0 0 0 6.401 6.5', key: '105sqy' }],
  ['path', { d: 'M3.477 10.896a4 4 0 0 1 .585-.396', key: 'ql3yin' }],
  ['path', { d: 'M19.938 10.5a4 4 0 0 1 .585.396', key: '1qfode' }],
  ['path', { d: 'M6 18a4 4 0 0 1-1.967-.516', key: '2e4loj' }],
  ['path', { d: 'M19.967 17.484A4 4 0 0 1 18 18', key: '159ez6' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ss = et('CheckCircle', [
  ['path', { d: 'M22 11.08V12a10 10 0 1 1-5.93-9.14', key: 'g774vq' }],
  ['path', { d: 'm9 11 3 3L22 4', key: '1pflzl' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sv = et('Check', [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const r0 = et('ChevronDown', [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mv = et('Code2', [
  ['path', { d: 'm18 16 4-4-4-4', key: '1inbqp' }],
  ['path', { d: 'm6 8-4 4 4 4', key: '15zrgr' }],
  ['path', { d: 'm14.5 4-5 16', key: 'e7oirm' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ul = et('Gift', [
  ['rect', { x: '3', y: '8', width: '18', height: '4', rx: '1', key: 'bkv52' }],
  ['path', { d: 'M12 8v13', key: '1c76mn' }],
  ['path', { d: 'M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7', key: '6wjy6b' }],
  [
    'path',
    {
      d: 'M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5',
      key: '1ihvrl',
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ev = et('Lightbulb', [
  [
    'path',
    {
      d: 'M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5',
      key: '1gvzjb',
    },
  ],
  ['path', { d: 'M9 18h6', key: 'x1upvd' }],
  ['path', { d: 'M10 22h4', key: 'ceow96' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const wv = et('LineChart', [
  ['path', { d: 'M3 3v18h18', key: '1s2lah' }],
  ['path', { d: 'm19 9-5 5-4-4-3 3', key: '2osh9i' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tv = et('MessageCircle', [
  ['path', { d: 'M7.9 20A9 9 0 1 0 4 16.1L2 22Z', key: 'vv11sd' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const s0 = et('MessageSquare', [
  ['path', { d: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z', key: '1lielz' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Av = et('Rocket', [
  [
    'path',
    {
      d: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z',
      key: 'm3kijz',
    },
  ],
  [
    'path',
    {
      d: 'm12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
      key: '1fmvmk',
    },
  ],
  ['path', { d: 'M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0', key: '1f8sc4' }],
  ['path', { d: 'M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5', key: 'qeys4' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bv = et('Send', [
  ['path', { d: 'm22 2-7 20-4-9-9-4Z', key: '1q3vgg' }],
  ['path', { d: 'M22 2 11 13', key: 'nzbqef' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rv = et('Settings', [
  [
    'path',
    {
      d: 'M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z',
      key: '1qme2f',
    },
  ],
  ['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ea = et('Sparkles', [
  [
    'path',
    {
      d: 'm12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z',
      key: '17u4zn',
    },
  ],
  ['path', { d: 'M5 3v4', key: 'bklmnn' }],
  ['path', { d: 'M19 17v4', key: 'iiml17' }],
  ['path', { d: 'M3 5h4', key: 'nem4j1' }],
  ['path', { d: 'M17 19h4', key: 'lbex7p' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cv = et('Star', [
  [
    'polygon',
    {
      points:
        '12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2',
      key: '8f66p6',
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const a0 = et('Target', [
  ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
  ['circle', { cx: '12', cy: '12', r: '6', key: '1vlfrh' }],
  ['circle', { cx: '12', cy: '12', r: '2', key: '1c9p78' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Pv = et('Ticket', [
  [
    'path',
    {
      d: 'M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z',
      key: 'qn84l0',
    },
  ],
  ['path', { d: 'M13 5v2', key: 'dyzc3o' }],
  ['path', { d: 'M13 17v2', key: '1ont0d' }],
  ['path', { d: 'M13 11v2', key: '1wjjxi' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nv = et('Timer', [
  ['line', { x1: '10', x2: '14', y1: '2', y2: '2', key: '14vaq8' }],
  ['line', { x1: '12', x2: '15', y1: '14', y2: '11', key: '17fdiu' }],
  ['circle', { cx: '12', cy: '14', r: '8', key: '1e1u0o' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lv = et('Trophy', [
  ['path', { d: 'M6 9H4.5a2.5 2.5 0 0 1 0-5H6', key: '17hqa7' }],
  ['path', { d: 'M18 9h1.5a2.5 2.5 0 0 0 0-5H18', key: 'lmptdp' }],
  ['path', { d: 'M4 22h16', key: '57wxv0' }],
  ['path', { d: 'M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22', key: '1nw9bq' }],
  ['path', { d: 'M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22', key: '1np0yb' }],
  ['path', { d: 'M18 2H6v7a6 6 0 0 0 12 0V2Z', key: 'u46fv3' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dv = et('Users', [
  ['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
  ['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
  ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
  ['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75', key: '1da9ce' }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Rr = et('Zap', [
  ['polygon', { points: '13 2 3 14 12 14 11 22 21 10 12 10 13 2', key: '45s27k' }],
]);
function $d({
  showStats: t = !0,
  stats: e = [{ value: '24h', label: '対応' }],
  className: n = '',
}) {
  return m.jsxs('a', {
    href: 'https://livekone.com/contact',
    target: '_blank',
    rel: 'noopener noreferrer',
    className: `group relative flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-6 sm:px-8 py-4 sm:py-6 bg-gradient-to-r from-rose-500 via-purple-500 to-rose-500 text-white rounded-xl transition-all duration-300 hover:scale-105 transform animate-gradient bg-[length:200%_200%] w-full sm:w-auto ${n}`,
    children: [
      m.jsxs('div', {
        className: 'flex flex-col w-full sm:w-auto',
        children: [
          m.jsx('div', {
            className: 'flex items-center justify-center sm:justify-start gap-2',
            children: m.jsx('span', {
              className: 'text-xs sm:text-sm text-white/80',
              children: 'AI Web制作の',
            }),
          }),
          m.jsxs('div', {
            className: 'flex items-center justify-center sm:justify-start gap-2',
            children: [
              m.jsx('span', {
                className: 'text-lg sm:text-xl font-bold',
                children: '無料相談はこちら',
              }),
              m.jsx(Pa, {
                className: 'w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform',
              }),
            ],
          }),
        ],
      }),
      t &&
        m.jsxs(m.Fragment, {
          children: [
            m.jsx('div', { className: 'hidden sm:block h-12 w-px bg-white/20' }),
            m.jsx('div', {
              className: 'hidden sm:flex items-center gap-4 sm:gap-6',
              children: e.map(({ value: i, label: r }) =>
                m.jsxs(
                  'div',
                  {
                    className: 'text-center',
                    children: [
                      m.jsx('div', { className: 'text-xl sm:text-2xl font-bold', children: i }),
                      m.jsx('div', {
                        className: 'text-[10px] sm:text-xs text-white/80',
                        children: r,
                      }),
                    ],
                  },
                  r,
                ),
              ),
            }),
          ],
        }),
    ],
  });
}
/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Kd = '162',
  Uv = 0,
  _h = 1,
  Iv = 2,
  o0 = 1,
  Fv = 2,
  ei = 3,
  ji = 0,
  nn = 1,
  ii = 2,
  Bi = 0,
  fs = 1,
  Vu = 2,
  vh = 3,
  yh = 4,
  Ov = 5,
  cr = 100,
  kv = 101,
  zv = 102,
  Sh = 103,
  Mh = 104,
  Bv = 200,
  Hv = 201,
  Gv = 202,
  Vv = 203,
  Wu = 204,
  ju = 205,
  Wv = 206,
  jv = 207,
  Xv = 208,
  qv = 209,
  Yv = 210,
  $v = 211,
  Kv = 212,
  Zv = 213,
  Qv = 214,
  Jv = 0,
  ey = 1,
  ty = 2,
  dl = 3,
  ny = 4,
  iy = 5,
  ry = 6,
  sy = 7,
  l0 = 0,
  ay = 1,
  oy = 2,
  Hi = 0,
  ly = 1,
  cy = 2,
  uy = 3,
  dy = 4,
  fy = 5,
  hy = 6,
  py = 7,
  c0 = 300,
  Ms = 301,
  Es = 302,
  Xu = 303,
  qu = 304,
  Ul = 306,
  Yu = 1e3,
  Ln = 1001,
  $u = 1002,
  Vt = 1003,
  Eh = 1004,
  Bs = 1005,
  $t = 1006,
  mc = 1007,
  pr = 1008,
  Gi = 1009,
  my = 1010,
  gy = 1011,
  Zd = 1012,
  u0 = 1013,
  Ni = 1014,
  ri = 1015,
  wa = 1016,
  d0 = 1017,
  f0 = 1018,
  xr = 1020,
  xy = 1021,
  Dn = 1023,
  _y = 1024,
  vy = 1025,
  _r = 1026,
  ws = 1027,
  yy = 1028,
  h0 = 1029,
  Sy = 1030,
  p0 = 1031,
  m0 = 1033,
  gc = 33776,
  xc = 33777,
  _c = 33778,
  vc = 33779,
  wh = 35840,
  Th = 35841,
  Ah = 35842,
  bh = 35843,
  g0 = 36196,
  Rh = 37492,
  Ch = 37496,
  Ph = 37808,
  Nh = 37809,
  Lh = 37810,
  Dh = 37811,
  Uh = 37812,
  Ih = 37813,
  Fh = 37814,
  Oh = 37815,
  kh = 37816,
  zh = 37817,
  Bh = 37818,
  Hh = 37819,
  Gh = 37820,
  Vh = 37821,
  yc = 36492,
  Wh = 36494,
  jh = 36495,
  My = 36283,
  Xh = 36284,
  qh = 36285,
  Yh = 36286,
  Ey = 3200,
  wy = 3201,
  Ty = 0,
  Ay = 1,
  Ri = '',
  Bn = 'srgb',
  Ki = 'srgb-linear',
  Qd = 'display-p3',
  Il = 'display-p3-linear',
  fl = 'linear',
  nt = 'srgb',
  hl = 'rec709',
  pl = 'p3',
  Pr = 7680,
  $h = 519,
  by = 512,
  Ry = 513,
  Cy = 514,
  x0 = 515,
  Py = 516,
  Ny = 517,
  Ly = 518,
  Dy = 519,
  Kh = 35044,
  Zh = '300 es',
  Ku = 1035,
  oi = 2e3,
  ml = 2001;
class Cs {
  addEventListener(e, n) {
    this._listeners === void 0 && (this._listeners = {});
    const i = this._listeners;
    i[e] === void 0 && (i[e] = []), i[e].indexOf(n) === -1 && i[e].push(n);
  }
  hasEventListener(e, n) {
    if (this._listeners === void 0) return !1;
    const i = this._listeners;
    return i[e] !== void 0 && i[e].indexOf(n) !== -1;
  }
  removeEventListener(e, n) {
    if (this._listeners === void 0) return;
    const r = this._listeners[e];
    if (r !== void 0) {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e.type];
    if (i !== void 0) {
      e.target = this;
      const r = i.slice(0);
      for (let s = 0, a = r.length; s < a; s++) r[s].call(this, e);
      e.target = null;
    }
  }
}
const Ft = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '0a',
    '0b',
    '0c',
    '0d',
    '0e',
    '0f',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '1a',
    '1b',
    '1c',
    '1d',
    '1e',
    '1f',
    '20',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '2a',
    '2b',
    '2c',
    '2d',
    '2e',
    '2f',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '3a',
    '3b',
    '3c',
    '3d',
    '3e',
    '3f',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '4a',
    '4b',
    '4c',
    '4d',
    '4e',
    '4f',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59',
    '5a',
    '5b',
    '5c',
    '5d',
    '5e',
    '5f',
    '60',
    '61',
    '62',
    '63',
    '64',
    '65',
    '66',
    '67',
    '68',
    '69',
    '6a',
    '6b',
    '6c',
    '6d',
    '6e',
    '6f',
    '70',
    '71',
    '72',
    '73',
    '74',
    '75',
    '76',
    '77',
    '78',
    '79',
    '7a',
    '7b',
    '7c',
    '7d',
    '7e',
    '7f',
    '80',
    '81',
    '82',
    '83',
    '84',
    '85',
    '86',
    '87',
    '88',
    '89',
    '8a',
    '8b',
    '8c',
    '8d',
    '8e',
    '8f',
    '90',
    '91',
    '92',
    '93',
    '94',
    '95',
    '96',
    '97',
    '98',
    '99',
    '9a',
    '9b',
    '9c',
    '9d',
    '9e',
    '9f',
    'a0',
    'a1',
    'a2',
    'a3',
    'a4',
    'a5',
    'a6',
    'a7',
    'a8',
    'a9',
    'aa',
    'ab',
    'ac',
    'ad',
    'ae',
    'af',
    'b0',
    'b1',
    'b2',
    'b3',
    'b4',
    'b5',
    'b6',
    'b7',
    'b8',
    'b9',
    'ba',
    'bb',
    'bc',
    'bd',
    'be',
    'bf',
    'c0',
    'c1',
    'c2',
    'c3',
    'c4',
    'c5',
    'c6',
    'c7',
    'c8',
    'c9',
    'ca',
    'cb',
    'cc',
    'cd',
    'ce',
    'cf',
    'd0',
    'd1',
    'd2',
    'd3',
    'd4',
    'd5',
    'd6',
    'd7',
    'd8',
    'd9',
    'da',
    'db',
    'dc',
    'dd',
    'de',
    'df',
    'e0',
    'e1',
    'e2',
    'e3',
    'e4',
    'e5',
    'e6',
    'e7',
    'e8',
    'e9',
    'ea',
    'eb',
    'ec',
    'ed',
    'ee',
    'ef',
    'f0',
    'f1',
    'f2',
    'f3',
    'f4',
    'f5',
    'f6',
    'f7',
    'f8',
    'f9',
    'fa',
    'fb',
    'fc',
    'fd',
    'fe',
    'ff',
  ],
  Sc = Math.PI / 180,
  Zu = 180 / Math.PI;
function Na() {
  const t = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0,
    i = (Math.random() * 4294967295) | 0;
  return (
    Ft[t & 255] +
    Ft[(t >> 8) & 255] +
    Ft[(t >> 16) & 255] +
    Ft[(t >> 24) & 255] +
    '-' +
    Ft[e & 255] +
    Ft[(e >> 8) & 255] +
    '-' +
    Ft[((e >> 16) & 15) | 64] +
    Ft[(e >> 24) & 255] +
    '-' +
    Ft[(n & 63) | 128] +
    Ft[(n >> 8) & 255] +
    '-' +
    Ft[(n >> 16) & 255] +
    Ft[(n >> 24) & 255] +
    Ft[i & 255] +
    Ft[(i >> 8) & 255] +
    Ft[(i >> 16) & 255] +
    Ft[(i >> 24) & 255]
  ).toLowerCase();
}
function Zt(t, e, n) {
  return Math.max(e, Math.min(n, t));
}
function Uy(t, e) {
  return ((t % e) + e) % e;
}
function Mc(t, e, n) {
  return (1 - n) * t + n * e;
}
function Qh(t) {
  return (t & (t - 1)) === 0 && t !== 0;
}
function Qu(t) {
  return Math.pow(2, Math.floor(Math.log(t) / Math.LN2));
}
function Hs(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return t / 4294967295;
    case Uint16Array:
      return t / 65535;
    case Uint8Array:
      return t / 255;
    case Int32Array:
      return Math.max(t / 2147483647, -1);
    case Int16Array:
      return Math.max(t / 32767, -1);
    case Int8Array:
      return Math.max(t / 127, -1);
    default:
      throw new Error('Invalid component type.');
  }
}
function Yt(t, e) {
  switch (e.constructor) {
    case Float32Array:
      return t;
    case Uint32Array:
      return Math.round(t * 4294967295);
    case Uint16Array:
      return Math.round(t * 65535);
    case Uint8Array:
      return Math.round(t * 255);
    case Int32Array:
      return Math.round(t * 2147483647);
    case Int16Array:
      return Math.round(t * 32767);
    case Int8Array:
      return Math.round(t * 127);
    default:
      throw new Error('Invalid component type.');
  }
}
class je {
  constructor(e = 0, n = 0) {
    (je.prototype.isVector2 = !0), (this.x = e), (this.y = n);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, n) {
    return (this.x = e), (this.y = n), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, n) {
    return (this.x = e.x + n.x), (this.y = e.y + n.y), this;
  }
  addScaledVector(e, n) {
    return (this.x += e.x * n), (this.y += e.y * n), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, n) {
    return (this.x = e.x - n.x), (this.y = e.y - n.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const n = this.x,
      i = this.y,
      r = e.elements;
    return (this.x = r[0] * n + r[3] * i + r[6]), (this.y = r[1] * n + r[4] * i + r[7]), this;
  }
  min(e) {
    return (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this;
  }
  max(e) {
    return (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this;
  }
  clamp(e, n) {
    return (
      (this.x = Math.max(e.x, Math.min(n.x, this.x))),
      (this.y = Math.max(e.y, Math.min(n.y, this.y))),
      this
    );
  }
  clampScalar(e, n) {
    return (
      (this.x = Math.max(e, Math.min(n, this.x))), (this.y = Math.max(e, Math.min(n, this.y))), this
    );
  }
  clampLength(e, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(n, i)));
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this;
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const n = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(e) / n;
    return Math.acos(Zt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const n = this.x - e.x,
      i = this.y - e.y;
    return n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return (this.x += (e.x - this.x) * n), (this.y += (e.y - this.y) * n), this;
  }
  lerpVectors(e, n, i) {
    return (this.x = e.x + (n.x - e.x) * i), (this.y = e.y + (n.y - e.y) * i), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, n = 0) {
    return (this.x = e[n]), (this.y = e[n + 1]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.x), (e[n + 1] = this.y), e;
  }
  fromBufferAttribute(e, n) {
    return (this.x = e.getX(n)), (this.y = e.getY(n)), this;
  }
  rotateAround(e, n) {
    const i = Math.cos(n),
      r = Math.sin(n),
      s = this.x - e.x,
      a = this.y - e.y;
    return (this.x = s * i - a * r + e.x), (this.y = s * r + a * i + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class Ie {
  constructor(e, n, i, r, s, a, o, l, c) {
    (Ie.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, n, i, r, s, a, o, l, c);
  }
  set(e, n, i, r, s, a, o, l, c) {
    const d = this.elements;
    return (
      (d[0] = e),
      (d[1] = r),
      (d[2] = o),
      (d[3] = n),
      (d[4] = s),
      (d[5] = l),
      (d[6] = i),
      (d[7] = a),
      (d[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const n = this.elements,
      i = e.elements;
    return (
      (n[0] = i[0]),
      (n[1] = i[1]),
      (n[2] = i[2]),
      (n[3] = i[3]),
      (n[4] = i[4]),
      (n[5] = i[5]),
      (n[6] = i[6]),
      (n[7] = i[7]),
      (n[8] = i[8]),
      this
    );
  }
  extractBasis(e, n, i) {
    return (
      e.setFromMatrix3Column(this, 0),
      n.setFromMatrix3Column(this, 1),
      i.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const n = e.elements;
    return this.set(n[0], n[4], n[8], n[1], n[5], n[9], n[2], n[6], n[10]), this;
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, n) {
    const i = e.elements,
      r = n.elements,
      s = this.elements,
      a = i[0],
      o = i[3],
      l = i[6],
      c = i[1],
      d = i[4],
      f = i[7],
      h = i[2],
      g = i[5],
      v = i[8],
      y = r[0],
      p = r[3],
      u = r[6],
      _ = r[1],
      x = r[4],
      E = r[7],
      C = r[2],
      b = r[5],
      T = r[8];
    return (
      (s[0] = a * y + o * _ + l * C),
      (s[3] = a * p + o * x + l * b),
      (s[6] = a * u + o * E + l * T),
      (s[1] = c * y + d * _ + f * C),
      (s[4] = c * p + d * x + f * b),
      (s[7] = c * u + d * E + f * T),
      (s[2] = h * y + g * _ + v * C),
      (s[5] = h * p + g * x + v * b),
      (s[8] = h * u + g * E + v * T),
      this
    );
  }
  multiplyScalar(e) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= e),
      (n[4] *= e),
      (n[7] *= e),
      (n[2] *= e),
      (n[5] *= e),
      (n[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      n = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      d = e[8];
    return n * a * d - n * o * c - i * s * d + i * o * l + r * s * c - r * a * l;
  }
  invert() {
    const e = this.elements,
      n = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      d = e[8],
      f = d * a - o * c,
      h = o * l - d * s,
      g = c * s - a * l,
      v = n * f + i * h + r * g;
    if (v === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const y = 1 / v;
    return (
      (e[0] = f * y),
      (e[1] = (r * c - d * i) * y),
      (e[2] = (o * i - r * a) * y),
      (e[3] = h * y),
      (e[4] = (d * n - r * l) * y),
      (e[5] = (r * s - o * n) * y),
      (e[6] = g * y),
      (e[7] = (i * l - c * n) * y),
      (e[8] = (a * n - i * s) * y),
      this
    );
  }
  transpose() {
    let e;
    const n = this.elements;
    return (
      (e = n[1]),
      (n[1] = n[3]),
      (n[3] = e),
      (e = n[2]),
      (n[2] = n[6]),
      (n[6] = e),
      (e = n[5]),
      (n[5] = n[7]),
      (n[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const n = this.elements;
    return (
      (e[0] = n[0]),
      (e[1] = n[3]),
      (e[2] = n[6]),
      (e[3] = n[1]),
      (e[4] = n[4]),
      (e[5] = n[7]),
      (e[6] = n[2]),
      (e[7] = n[5]),
      (e[8] = n[8]),
      this
    );
  }
  setUvTransform(e, n, i, r, s, a, o) {
    const l = Math.cos(s),
      c = Math.sin(s);
    return (
      this.set(
        i * l,
        i * c,
        -i * (l * a + c * o) + a + e,
        -r * c,
        r * l,
        -r * (-c * a + l * o) + o + n,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, n) {
    return this.premultiply(Ec.makeScale(e, n)), this;
  }
  rotate(e) {
    return this.premultiply(Ec.makeRotation(-e)), this;
  }
  translate(e, n) {
    return this.premultiply(Ec.makeTranslation(e, n)), this;
  }
  makeTranslation(e, n) {
    return (
      e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, n, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(n, -i, 0, i, n, 0, 0, 0, 1), this;
  }
  makeScale(e, n) {
    return this.set(e, 0, 0, 0, n, 0, 0, 0, 1), this;
  }
  equals(e) {
    const n = this.elements,
      i = e.elements;
    for (let r = 0; r < 9; r++) if (n[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, n = 0) {
    for (let i = 0; i < 9; i++) this.elements[i] = e[i + n];
    return this;
  }
  toArray(e = [], n = 0) {
    const i = this.elements;
    return (
      (e[n] = i[0]),
      (e[n + 1] = i[1]),
      (e[n + 2] = i[2]),
      (e[n + 3] = i[3]),
      (e[n + 4] = i[4]),
      (e[n + 5] = i[5]),
      (e[n + 6] = i[6]),
      (e[n + 7] = i[7]),
      (e[n + 8] = i[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const Ec = new Ie();
function _0(t) {
  for (let e = t.length - 1; e >= 0; --e) if (t[e] >= 65535) return !0;
  return !1;
}
function gl(t) {
  return document.createElementNS('http://www.w3.org/1999/xhtml', t);
}
function Iy() {
  const t = gl('canvas');
  return (t.style.display = 'block'), t;
}
const Jh = {};
function Fy(t) {
  t in Jh || ((Jh[t] = !0), console.warn(t));
}
const ep = new Ie().set(
    0.8224621,
    0.177538,
    0,
    0.0331941,
    0.9668058,
    0,
    0.0170827,
    0.0723974,
    0.9105199,
  ),
  tp = new Ie().set(
    1.2249401,
    -0.2249404,
    0,
    -0.0420569,
    1.0420571,
    0,
    -0.0196376,
    -0.0786361,
    1.0982735,
  ),
  to = {
    [Ki]: { transfer: fl, primaries: hl, toReference: (t) => t, fromReference: (t) => t },
    [Bn]: {
      transfer: nt,
      primaries: hl,
      toReference: (t) => t.convertSRGBToLinear(),
      fromReference: (t) => t.convertLinearToSRGB(),
    },
    [Il]: {
      transfer: fl,
      primaries: pl,
      toReference: (t) => t.applyMatrix3(tp),
      fromReference: (t) => t.applyMatrix3(ep),
    },
    [Qd]: {
      transfer: nt,
      primaries: pl,
      toReference: (t) => t.convertSRGBToLinear().applyMatrix3(tp),
      fromReference: (t) => t.applyMatrix3(ep).convertLinearToSRGB(),
    },
  },
  Oy = new Set([Ki, Il]),
  Ke = {
    enabled: !0,
    _workingColorSpace: Ki,
    get workingColorSpace() {
      return this._workingColorSpace;
    },
    set workingColorSpace(t) {
      if (!Oy.has(t)) throw new Error(`Unsupported working color space, "${t}".`);
      this._workingColorSpace = t;
    },
    convert: function (t, e, n) {
      if (this.enabled === !1 || e === n || !e || !n) return t;
      const i = to[e].toReference,
        r = to[n].fromReference;
      return r(i(t));
    },
    fromWorkingColorSpace: function (t, e) {
      return this.convert(t, this._workingColorSpace, e);
    },
    toWorkingColorSpace: function (t, e) {
      return this.convert(t, e, this._workingColorSpace);
    },
    getPrimaries: function (t) {
      return to[t].primaries;
    },
    getTransfer: function (t) {
      return t === Ri ? fl : to[t].transfer;
    },
  };
function hs(t) {
  return t < 0.04045 ? t * 0.0773993808 : Math.pow(t * 0.9478672986 + 0.0521327014, 2.4);
}
function wc(t) {
  return t < 0.0031308 ? t * 12.92 : 1.055 * Math.pow(t, 0.41666) - 0.055;
}
let Nr;
class v0 {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > 'u') return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      Nr === void 0 && (Nr = gl('canvas')), (Nr.width = e.width), (Nr.height = e.height);
      const i = Nr.getContext('2d');
      e instanceof ImageData ? i.putImageData(e, 0, 0) : i.drawImage(e, 0, 0, e.width, e.height),
        (n = Nr);
    }
    return n.width > 2048 || n.height > 2048
      ? (console.warn(
          'THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons',
          e,
        ),
        n.toDataURL('image/jpeg', 0.6))
      : n.toDataURL('image/png');
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < 'u' && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < 'u' && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < 'u' && e instanceof ImageBitmap)
    ) {
      const n = gl('canvas');
      (n.width = e.width), (n.height = e.height);
      const i = n.getContext('2d');
      i.drawImage(e, 0, 0, e.width, e.height);
      const r = i.getImageData(0, 0, e.width, e.height),
        s = r.data;
      for (let a = 0; a < s.length; a++) s[a] = hs(s[a] / 255) * 255;
      return i.putImageData(r, 0, 0), n;
    } else if (e.data) {
      const n = e.data.slice(0);
      for (let i = 0; i < n.length; i++)
        n instanceof Uint8Array || n instanceof Uint8ClampedArray
          ? (n[i] = Math.floor(hs(n[i] / 255) * 255))
          : (n[i] = hs(n[i]));
      return { data: n, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          'THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.',
        ),
        e
      );
  }
}
let ky = 0;
class y0 {
  constructor(e = null) {
    (this.isSource = !0),
      Object.defineProperty(this, 'id', { value: ky++ }),
      (this.uuid = Na()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == 'string';
    if (!n && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const i = { uuid: this.uuid, url: '' },
      r = this.data;
    if (r !== null) {
      let s;
      if (Array.isArray(r)) {
        s = [];
        for (let a = 0, o = r.length; a < o; a++)
          r[a].isDataTexture ? s.push(Tc(r[a].image)) : s.push(Tc(r[a]));
      } else s = Tc(r);
      i.url = s;
    }
    return n || (e.images[this.uuid] = i), i;
  }
}
function Tc(t) {
  return (typeof HTMLImageElement < 'u' && t instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < 'u' && t instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < 'u' && t instanceof ImageBitmap)
    ? v0.getDataURL(t)
    : t.data
    ? { data: Array.from(t.data), width: t.width, height: t.height, type: t.data.constructor.name }
    : (console.warn('THREE.Texture: Unable to serialize Texture.'), {});
}
let zy = 0;
class rn extends Cs {
  constructor(
    e = rn.DEFAULT_IMAGE,
    n = rn.DEFAULT_MAPPING,
    i = Ln,
    r = Ln,
    s = $t,
    a = pr,
    o = Dn,
    l = Gi,
    c = rn.DEFAULT_ANISOTROPY,
    d = Ri,
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, 'id', { value: zy++ }),
      (this.uuid = Na()),
      (this.name = ''),
      (this.source = new y0(e)),
      (this.mipmaps = []),
      (this.mapping = n),
      (this.channel = 0),
      (this.wrapS = i),
      (this.wrapT = r),
      (this.magFilter = s),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new je(0, 0)),
      (this.repeat = new je(1, 1)),
      (this.center = new je(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Ie()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = d),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == 'string';
    if (!n && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const i = {
      metadata: { version: 4.6, type: 'Texture', generator: 'Texture.toJSON' },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      n || (e.textures[this.uuid] = i),
      i
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  transformUv(e) {
    if (this.mapping !== c0) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Yu:
          e.x = e.x - Math.floor(e.x);
          break;
        case Ln:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case $u:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Yu:
          e.y = e.y - Math.floor(e.y);
          break;
        case Ln:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case $u:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
rn.DEFAULT_IMAGE = null;
rn.DEFAULT_MAPPING = c0;
rn.DEFAULT_ANISOTROPY = 1;
class ot {
  constructor(e = 0, n = 0, i = 0, r = 1) {
    (ot.prototype.isVector4 = !0), (this.x = e), (this.y = n), (this.z = i), (this.w = r);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, n, i, r) {
    return (this.x = e), (this.y = n), (this.z = i), (this.w = r), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      case 3:
        this.w = n;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x), (this.y = e.y), (this.z = e.z), (this.w = e.w !== void 0 ? e.w : 1), this
    );
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), (this.w += e.w), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, n) {
    return (
      (this.x = e.x + n.x), (this.y = e.y + n.y), (this.z = e.z + n.z), (this.w = e.w + n.w), this
    );
  }
  addScaledVector(e, n) {
    return (this.x += e.x * n), (this.y += e.y * n), (this.z += e.z * n), (this.w += e.w * n), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), (this.w -= e.w), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, n) {
    return (
      (this.x = e.x - n.x), (this.y = e.y - n.y), (this.z = e.z - n.z), (this.w = e.w - n.w), this
    );
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const n = this.x,
      i = this.y,
      r = this.z,
      s = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * n + a[4] * i + a[8] * r + a[12] * s),
      (this.y = a[1] * n + a[5] * i + a[9] * r + a[13] * s),
      (this.z = a[2] * n + a[6] * i + a[10] * r + a[14] * s),
      (this.w = a[3] * n + a[7] * i + a[11] * r + a[15] * s),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const n = Math.sqrt(1 - e.w * e.w);
    return (
      n < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / n), (this.y = e.y / n), (this.z = e.z / n)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let n, i, r, s;
    const l = e.elements,
      c = l[0],
      d = l[4],
      f = l[8],
      h = l[1],
      g = l[5],
      v = l[9],
      y = l[2],
      p = l[6],
      u = l[10];
    if (Math.abs(d - h) < 0.01 && Math.abs(f - y) < 0.01 && Math.abs(v - p) < 0.01) {
      if (
        Math.abs(d + h) < 0.1 &&
        Math.abs(f + y) < 0.1 &&
        Math.abs(v + p) < 0.1 &&
        Math.abs(c + g + u - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      n = Math.PI;
      const x = (c + 1) / 2,
        E = (g + 1) / 2,
        C = (u + 1) / 2,
        b = (d + h) / 4,
        T = (f + y) / 4,
        D = (v + p) / 4;
      return (
        x > E && x > C
          ? x < 0.01
            ? ((i = 0), (r = 0.707106781), (s = 0.707106781))
            : ((i = Math.sqrt(x)), (r = b / i), (s = T / i))
          : E > C
          ? E < 0.01
            ? ((i = 0.707106781), (r = 0), (s = 0.707106781))
            : ((r = Math.sqrt(E)), (i = b / r), (s = D / r))
          : C < 0.01
          ? ((i = 0.707106781), (r = 0.707106781), (s = 0))
          : ((s = Math.sqrt(C)), (i = T / s), (r = D / s)),
        this.set(i, r, s, n),
        this
      );
    }
    let _ = Math.sqrt((p - v) * (p - v) + (f - y) * (f - y) + (h - d) * (h - d));
    return (
      Math.abs(_) < 0.001 && (_ = 1),
      (this.x = (p - v) / _),
      (this.y = (f - y) / _),
      (this.z = (h - d) / _),
      (this.w = Math.acos((c + g + u - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, n) {
    return (
      (this.x = Math.max(e.x, Math.min(n.x, this.x))),
      (this.y = Math.max(e.y, Math.min(n.y, this.y))),
      (this.z = Math.max(e.z, Math.min(n.z, this.z))),
      (this.w = Math.max(e.w, Math.min(n.w, this.w))),
      this
    );
  }
  clampScalar(e, n) {
    return (
      (this.x = Math.max(e, Math.min(n, this.x))),
      (this.y = Math.max(e, Math.min(n, this.y))),
      (this.z = Math.max(e, Math.min(n, this.z))),
      (this.w = Math.max(e, Math.min(n, this.w))),
      this
    );
  }
  clampLength(e, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(n, i)));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), (this.w = -this.w), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return (
      (this.x += (e.x - this.x) * n),
      (this.y += (e.y - this.y) * n),
      (this.z += (e.z - this.z) * n),
      (this.w += (e.w - this.w) * n),
      this
    );
  }
  lerpVectors(e, n, i) {
    return (
      (this.x = e.x + (n.x - e.x) * i),
      (this.y = e.y + (n.y - e.y) * i),
      (this.z = e.z + (n.z - e.z) * i),
      (this.w = e.w + (n.w - e.w) * i),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, n = 0) {
    return (this.x = e[n]), (this.y = e[n + 1]), (this.z = e[n + 2]), (this.w = e[n + 3]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.x), (e[n + 1] = this.y), (e[n + 2] = this.z), (e[n + 3] = this.w), e;
  }
  fromBufferAttribute(e, n) {
    return (
      (this.x = e.getX(n)), (this.y = e.getY(n)), (this.z = e.getZ(n)), (this.w = e.getW(n)), this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class By extends Cs {
  constructor(e = 1, n = 1, i = {}) {
    super(),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = n),
      (this.depth = 1),
      (this.scissor = new ot(0, 0, e, n)),
      (this.scissorTest = !1),
      (this.viewport = new ot(0, 0, e, n));
    const r = { width: e, height: n, depth: 1 };
    i = Object.assign(
      {
        generateMipmaps: !1,
        internalFormat: null,
        minFilter: $t,
        depthBuffer: !0,
        stencilBuffer: !1,
        depthTexture: null,
        samples: 0,
        count: 1,
      },
      i,
    );
    const s = new rn(
      r,
      i.mapping,
      i.wrapS,
      i.wrapT,
      i.magFilter,
      i.minFilter,
      i.format,
      i.type,
      i.anisotropy,
      i.colorSpace,
    );
    (s.flipY = !1),
      (s.generateMipmaps = i.generateMipmaps),
      (s.internalFormat = i.internalFormat),
      (this.textures = []);
    const a = i.count;
    for (let o = 0; o < a; o++)
      (this.textures[o] = s.clone()), (this.textures[o].isRenderTargetTexture = !0);
    (this.depthBuffer = i.depthBuffer),
      (this.stencilBuffer = i.stencilBuffer),
      (this.depthTexture = i.depthTexture),
      (this.samples = i.samples);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  setSize(e, n, i = 1) {
    if (this.width !== e || this.height !== n || this.depth !== i) {
      (this.width = e), (this.height = n), (this.depth = i);
      for (let r = 0, s = this.textures.length; r < s; r++)
        (this.textures[r].image.width = e),
          (this.textures[r].image.height = n),
          (this.textures[r].image.depth = i);
      this.dispose();
    }
    this.viewport.set(0, 0, e, n), this.scissor.set(0, 0, e, n);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0);
    for (let i = 0, r = e.textures.length; i < r; i++)
      (this.textures[i] = e.textures[i].clone()), (this.textures[i].isRenderTargetTexture = !0);
    const n = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new y0(n)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
class Tr extends By {
  constructor(e = 1, n = 1, i = {}) {
    super(e, n, i), (this.isWebGLRenderTarget = !0);
  }
}
class S0 extends rn {
  constructor(e = null, n = 1, i = 1, r = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: n, height: i, depth: r }),
      (this.magFilter = Vt),
      (this.minFilter = Vt),
      (this.wrapR = Ln),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Hy extends rn {
  constructor(e = null, n = 1, i = 1, r = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: n, height: i, depth: r }),
      (this.magFilter = Vt),
      (this.minFilter = Vt),
      (this.wrapR = Ln),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class La {
  constructor(e = 0, n = 0, i = 0, r = 1) {
    (this.isQuaternion = !0), (this._x = e), (this._y = n), (this._z = i), (this._w = r);
  }
  static slerpFlat(e, n, i, r, s, a, o) {
    let l = i[r + 0],
      c = i[r + 1],
      d = i[r + 2],
      f = i[r + 3];
    const h = s[a + 0],
      g = s[a + 1],
      v = s[a + 2],
      y = s[a + 3];
    if (o === 0) {
      (e[n + 0] = l), (e[n + 1] = c), (e[n + 2] = d), (e[n + 3] = f);
      return;
    }
    if (o === 1) {
      (e[n + 0] = h), (e[n + 1] = g), (e[n + 2] = v), (e[n + 3] = y);
      return;
    }
    if (f !== y || l !== h || c !== g || d !== v) {
      let p = 1 - o;
      const u = l * h + c * g + d * v + f * y,
        _ = u >= 0 ? 1 : -1,
        x = 1 - u * u;
      if (x > Number.EPSILON) {
        const C = Math.sqrt(x),
          b = Math.atan2(C, u * _);
        (p = Math.sin(p * b) / C), (o = Math.sin(o * b) / C);
      }
      const E = o * _;
      if (
        ((l = l * p + h * E),
        (c = c * p + g * E),
        (d = d * p + v * E),
        (f = f * p + y * E),
        p === 1 - o)
      ) {
        const C = 1 / Math.sqrt(l * l + c * c + d * d + f * f);
        (l *= C), (c *= C), (d *= C), (f *= C);
      }
    }
    (e[n] = l), (e[n + 1] = c), (e[n + 2] = d), (e[n + 3] = f);
  }
  static multiplyQuaternionsFlat(e, n, i, r, s, a) {
    const o = i[r],
      l = i[r + 1],
      c = i[r + 2],
      d = i[r + 3],
      f = s[a],
      h = s[a + 1],
      g = s[a + 2],
      v = s[a + 3];
    return (
      (e[n] = o * v + d * f + l * g - c * h),
      (e[n + 1] = l * v + d * h + c * f - o * g),
      (e[n + 2] = c * v + d * g + o * h - l * f),
      (e[n + 3] = d * v - o * f - l * h - c * g),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, n, i, r) {
    return (
      (this._x = e), (this._y = n), (this._z = i), (this._w = r), this._onChangeCallback(), this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, n = !0) {
    const i = e._x,
      r = e._y,
      s = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(i / 2),
      d = o(r / 2),
      f = o(s / 2),
      h = l(i / 2),
      g = l(r / 2),
      v = l(s / 2);
    switch (a) {
      case 'XYZ':
        (this._x = h * d * f + c * g * v),
          (this._y = c * g * f - h * d * v),
          (this._z = c * d * v + h * g * f),
          (this._w = c * d * f - h * g * v);
        break;
      case 'YXZ':
        (this._x = h * d * f + c * g * v),
          (this._y = c * g * f - h * d * v),
          (this._z = c * d * v - h * g * f),
          (this._w = c * d * f + h * g * v);
        break;
      case 'ZXY':
        (this._x = h * d * f - c * g * v),
          (this._y = c * g * f + h * d * v),
          (this._z = c * d * v + h * g * f),
          (this._w = c * d * f - h * g * v);
        break;
      case 'ZYX':
        (this._x = h * d * f - c * g * v),
          (this._y = c * g * f + h * d * v),
          (this._z = c * d * v - h * g * f),
          (this._w = c * d * f + h * g * v);
        break;
      case 'YZX':
        (this._x = h * d * f + c * g * v),
          (this._y = c * g * f + h * d * v),
          (this._z = c * d * v - h * g * f),
          (this._w = c * d * f - h * g * v);
        break;
      case 'XZY':
        (this._x = h * d * f - c * g * v),
          (this._y = c * g * f - h * d * v),
          (this._z = c * d * v + h * g * f),
          (this._w = c * d * f + h * g * v);
        break;
      default:
        console.warn('THREE.Quaternion: .setFromEuler() encountered an unknown order: ' + a);
    }
    return n === !0 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, n) {
    const i = n / 2,
      r = Math.sin(i);
    return (
      (this._x = e.x * r),
      (this._y = e.y * r),
      (this._z = e.z * r),
      (this._w = Math.cos(i)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const n = e.elements,
      i = n[0],
      r = n[4],
      s = n[8],
      a = n[1],
      o = n[5],
      l = n[9],
      c = n[2],
      d = n[6],
      f = n[10],
      h = i + o + f;
    if (h > 0) {
      const g = 0.5 / Math.sqrt(h + 1);
      (this._w = 0.25 / g),
        (this._x = (d - l) * g),
        (this._y = (s - c) * g),
        (this._z = (a - r) * g);
    } else if (i > o && i > f) {
      const g = 2 * Math.sqrt(1 + i - o - f);
      (this._w = (d - l) / g),
        (this._x = 0.25 * g),
        (this._y = (r + a) / g),
        (this._z = (s + c) / g);
    } else if (o > f) {
      const g = 2 * Math.sqrt(1 + o - i - f);
      (this._w = (s - c) / g),
        (this._x = (r + a) / g),
        (this._y = 0.25 * g),
        (this._z = (l + d) / g);
    } else {
      const g = 2 * Math.sqrt(1 + f - i - o);
      (this._w = (a - r) / g),
        (this._x = (s + c) / g),
        (this._y = (l + d) / g),
        (this._z = 0.25 * g);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, n) {
    let i = e.dot(n) + 1;
    return (
      i < Number.EPSILON
        ? ((i = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = i))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = i)))
        : ((this._x = e.y * n.z - e.z * n.y),
          (this._y = e.z * n.x - e.x * n.z),
          (this._z = e.x * n.y - e.y * n.x),
          (this._w = i)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(Zt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, n) {
    const i = this.angleTo(e);
    if (i === 0) return this;
    const r = Math.min(1, n / i);
    return this.slerp(e, r), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (this._x *= -1), (this._y *= -1), (this._z *= -1), this._onChangeCallback(), this;
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  }
  length() {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, n) {
    const i = e._x,
      r = e._y,
      s = e._z,
      a = e._w,
      o = n._x,
      l = n._y,
      c = n._z,
      d = n._w;
    return (
      (this._x = i * d + a * o + r * c - s * l),
      (this._y = r * d + a * l + s * o - i * c),
      (this._z = s * d + a * c + i * l - r * o),
      (this._w = a * d - i * o - r * l - s * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, n) {
    if (n === 0) return this;
    if (n === 1) return this.copy(e);
    const i = this._x,
      r = this._y,
      s = this._z,
      a = this._w;
    let o = a * e._w + i * e._x + r * e._y + s * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w), (this._x = -e._x), (this._y = -e._y), (this._z = -e._z), (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return (this._w = a), (this._x = i), (this._y = r), (this._z = s), this;
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const g = 1 - n;
      return (
        (this._w = g * a + n * this._w),
        (this._x = g * i + n * this._x),
        (this._y = g * r + n * this._y),
        (this._z = g * s + n * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      d = Math.atan2(c, o),
      f = Math.sin((1 - n) * d) / c,
      h = Math.sin(n * d) / c;
    return (
      (this._w = a * f + this._w * h),
      (this._x = i * f + this._x * h),
      (this._y = r * f + this._y * h),
      (this._z = s * f + this._z * h),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, n, i) {
    return this.copy(e).slerp(n, i);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      n = 2 * Math.PI * Math.random(),
      i = Math.random(),
      r = Math.sqrt(1 - i),
      s = Math.sqrt(i);
    return this.set(r * Math.sin(e), r * Math.cos(e), s * Math.sin(n), s * Math.cos(n));
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w;
  }
  fromArray(e, n = 0) {
    return (
      (this._x = e[n]),
      (this._y = e[n + 1]),
      (this._z = e[n + 2]),
      (this._w = e[n + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (e[n] = this._x), (e[n + 1] = this._y), (e[n + 2] = this._z), (e[n + 3] = this._w), e;
  }
  fromBufferAttribute(e, n) {
    return (
      (this._x = e.getX(n)),
      (this._y = e.getY(n)),
      (this._z = e.getZ(n)),
      (this._w = e.getW(n)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class F {
  constructor(e = 0, n = 0, i = 0) {
    (F.prototype.isVector3 = !0), (this.x = e), (this.y = n), (this.z = i);
  }
  set(e, n, i) {
    return i === void 0 && (i = this.z), (this.x = e), (this.y = n), (this.z = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, n) {
    switch (e) {
      case 0:
        this.x = n;
        break;
      case 1:
        this.y = n;
        break;
      case 2:
        this.z = n;
        break;
      default:
        throw new Error('index is out of range: ' + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error('index is out of range: ' + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e) {
    return (this.x += e.x), (this.y += e.y), (this.z += e.z), this;
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, n) {
    return (this.x = e.x + n.x), (this.y = e.y + n.y), (this.z = e.z + n.z), this;
  }
  addScaledVector(e, n) {
    return (this.x += e.x * n), (this.y += e.y * n), (this.z += e.z * n), this;
  }
  sub(e) {
    return (this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this;
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, n) {
    return (this.x = e.x - n.x), (this.y = e.y - n.y), (this.z = e.z - n.z), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, n) {
    return (this.x = e.x * n.x), (this.y = e.y * n.y), (this.z = e.z * n.z), this;
  }
  applyEuler(e) {
    return this.applyQuaternion(np.setFromEuler(e));
  }
  applyAxisAngle(e, n) {
    return this.applyQuaternion(np.setFromAxisAngle(e, n));
  }
  applyMatrix3(e) {
    const n = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * n + s[3] * i + s[6] * r),
      (this.y = s[1] * n + s[4] * i + s[7] * r),
      (this.z = s[2] * n + s[5] * i + s[8] * r),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const n = this.x,
      i = this.y,
      r = this.z,
      s = e.elements,
      a = 1 / (s[3] * n + s[7] * i + s[11] * r + s[15]);
    return (
      (this.x = (s[0] * n + s[4] * i + s[8] * r + s[12]) * a),
      (this.y = (s[1] * n + s[5] * i + s[9] * r + s[13]) * a),
      (this.z = (s[2] * n + s[6] * i + s[10] * r + s[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const n = this.x,
      i = this.y,
      r = this.z,
      s = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * r - o * i),
      d = 2 * (o * n - s * r),
      f = 2 * (s * i - a * n);
    return (
      (this.x = n + l * c + a * f - o * d),
      (this.y = i + l * d + o * c - s * f),
      (this.z = r + l * f + s * d - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix);
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld);
  }
  transformDirection(e) {
    const n = this.x,
      i = this.y,
      r = this.z,
      s = e.elements;
    return (
      (this.x = s[0] * n + s[4] * i + s[8] * r),
      (this.y = s[1] * n + s[5] * i + s[9] * r),
      (this.z = s[2] * n + s[6] * i + s[10] * r),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, n) {
    return (
      (this.x = Math.max(e.x, Math.min(n.x, this.x))),
      (this.y = Math.max(e.y, Math.min(n.y, this.y))),
      (this.z = Math.max(e.z, Math.min(n.z, this.z))),
      this
    );
  }
  clampScalar(e, n) {
    return (
      (this.x = Math.max(e, Math.min(n, this.x))),
      (this.y = Math.max(e, Math.min(n, this.y))),
      (this.z = Math.max(e, Math.min(n, this.z))),
      this
    );
  }
  clampLength(e, n) {
    const i = this.length();
    return this.divideScalar(i || 1).multiplyScalar(Math.max(e, Math.min(n, i)));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), (this.z = Math.ceil(this.z)), this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, n) {
    return (
      (this.x += (e.x - this.x) * n),
      (this.y += (e.y - this.y) * n),
      (this.z += (e.z - this.z) * n),
      this
    );
  }
  lerpVectors(e, n, i) {
    return (
      (this.x = e.x + (n.x - e.x) * i),
      (this.y = e.y + (n.y - e.y) * i),
      (this.z = e.z + (n.z - e.z) * i),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, n) {
    const i = e.x,
      r = e.y,
      s = e.z,
      a = n.x,
      o = n.y,
      l = n.z;
    return (this.x = r * l - s * o), (this.y = s * a - i * l), (this.z = i * o - r * a), this;
  }
  projectOnVector(e) {
    const n = e.lengthSq();
    if (n === 0) return this.set(0, 0, 0);
    const i = e.dot(this) / n;
    return this.copy(e).multiplyScalar(i);
  }
  projectOnPlane(e) {
    return Ac.copy(this).projectOnVector(e), this.sub(Ac);
  }
  reflect(e) {
    return this.sub(Ac.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const n = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (n === 0) return Math.PI / 2;
    const i = this.dot(e) / n;
    return Math.acos(Zt(i, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const n = this.x - e.x,
      i = this.y - e.y,
      r = this.z - e.z;
    return n * n + i * i + r * r;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z);
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, n, i) {
    const r = Math.sin(n) * e;
    return (this.x = r * Math.sin(i)), (this.y = Math.cos(n) * e), (this.z = r * Math.cos(i)), this;
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, n, i) {
    return (this.x = e * Math.sin(n)), (this.y = i), (this.z = e * Math.cos(n)), this;
  }
  setFromMatrixPosition(e) {
    const n = e.elements;
    return (this.x = n[12]), (this.y = n[13]), (this.z = n[14]), this;
  }
  setFromMatrixScale(e) {
    const n = this.setFromMatrixColumn(e, 0).length(),
      i = this.setFromMatrixColumn(e, 1).length(),
      r = this.setFromMatrixColumn(e, 2).length();
    return (this.x = n), (this.y = i), (this.z = r), this;
  }
  setFromMatrixColumn(e, n) {
    return this.fromArray(e.elements, n * 4);
  }
  setFromMatrix3Column(e, n) {
    return this.fromArray(e.elements, n * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  setFromColor(e) {
    return (this.x = e.r), (this.y = e.g), (this.z = e.b), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, n = 0) {
    return (this.x = e[n]), (this.y = e[n + 1]), (this.z = e[n + 2]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.x), (e[n + 1] = this.y), (e[n + 2] = this.z), e;
  }
  fromBufferAttribute(e, n) {
    return (this.x = e.getX(n)), (this.y = e.getY(n)), (this.z = e.getZ(n)), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), (this.z = Math.random()), this;
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      n = Math.random() * 2 - 1,
      i = Math.sqrt(1 - n * n);
    return (this.x = i * Math.cos(e)), (this.y = n), (this.z = i * Math.sin(e)), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const Ac = new F(),
  np = new La();
class Da {
  constructor(e = new F(1 / 0, 1 / 0, 1 / 0), n = new F(-1 / 0, -1 / 0, -1 / 0)) {
    (this.isBox3 = !0), (this.min = e), (this.max = n);
  }
  set(e, n) {
    return this.min.copy(e), this.max.copy(n), this;
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let n = 0, i = e.length; n < i; n += 3) this.expandByPoint(An.fromArray(e, n));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let n = 0, i = e.count; n < i; n++) this.expandByPoint(An.fromBufferAttribute(e, n));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let n = 0, i = e.length; n < i; n++) this.expandByPoint(e[n]);
    return this;
  }
  setFromCenterAndSize(e, n) {
    const i = An.copy(n).multiplyScalar(0.5);
    return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
  }
  setFromObject(e, n = !1) {
    return this.makeEmpty(), this.expandByObject(e, n);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  }
  getCenter(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, n = !1) {
    e.updateWorldMatrix(!1, !1);
    const i = e.geometry;
    if (i !== void 0) {
      const s = i.getAttribute('position');
      if (n === !0 && s !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = s.count; a < o; a++)
          e.isMesh === !0 ? e.getVertexPosition(a, An) : An.fromBufferAttribute(s, a),
            An.applyMatrix4(e.matrixWorld),
            this.expandByPoint(An);
      else
        e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(), no.copy(e.boundingBox))
          : (i.boundingBox === null && i.computeBoundingBox(), no.copy(i.boundingBox)),
          no.applyMatrix4(e.matrixWorld),
          this.union(no);
    }
    const r = e.children;
    for (let s = 0, a = r.length; s < a; s++) this.expandByObject(r[s], n);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, n) {
    return n.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return this.clampPoint(e.center, An), An.distanceToSquared(e.center) <= e.radius * e.radius;
  }
  intersectsPlane(e) {
    let n, i;
    return (
      e.normal.x > 0
        ? ((n = e.normal.x * this.min.x), (i = e.normal.x * this.max.x))
        : ((n = e.normal.x * this.max.x), (i = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((n += e.normal.y * this.min.y), (i += e.normal.y * this.max.y))
        : ((n += e.normal.y * this.max.y), (i += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((n += e.normal.z * this.min.z), (i += e.normal.z * this.max.z))
        : ((n += e.normal.z * this.max.z), (i += e.normal.z * this.min.z)),
      n <= -e.constant && i >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(Gs),
      io.subVectors(this.max, Gs),
      Lr.subVectors(e.a, Gs),
      Dr.subVectors(e.b, Gs),
      Ur.subVectors(e.c, Gs),
      _i.subVectors(Dr, Lr),
      vi.subVectors(Ur, Dr),
      Ji.subVectors(Lr, Ur);
    let n = [
      0,
      -_i.z,
      _i.y,
      0,
      -vi.z,
      vi.y,
      0,
      -Ji.z,
      Ji.y,
      _i.z,
      0,
      -_i.x,
      vi.z,
      0,
      -vi.x,
      Ji.z,
      0,
      -Ji.x,
      -_i.y,
      _i.x,
      0,
      -vi.y,
      vi.x,
      0,
      -Ji.y,
      Ji.x,
      0,
    ];
    return !bc(n, Lr, Dr, Ur, io) || ((n = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !bc(n, Lr, Dr, Ur, io))
      ? !1
      : (ro.crossVectors(_i, vi), (n = [ro.x, ro.y, ro.z]), bc(n, Lr, Dr, Ur, io));
  }
  clampPoint(e, n) {
    return n.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, An).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center), (e.radius = this.getSize(An).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return this.min.max(e.min), this.max.min(e.max), this.isEmpty() && this.makeEmpty(), this;
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : ($n[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        $n[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        $n[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        $n[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        $n[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        $n[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        $n[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        $n[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints($n),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const $n = [new F(), new F(), new F(), new F(), new F(), new F(), new F(), new F()],
  An = new F(),
  no = new Da(),
  Lr = new F(),
  Dr = new F(),
  Ur = new F(),
  _i = new F(),
  vi = new F(),
  Ji = new F(),
  Gs = new F(),
  io = new F(),
  ro = new F(),
  er = new F();
function bc(t, e, n, i, r) {
  for (let s = 0, a = t.length - 3; s <= a; s += 3) {
    er.fromArray(t, s);
    const o = r.x * Math.abs(er.x) + r.y * Math.abs(er.y) + r.z * Math.abs(er.z),
      l = e.dot(er),
      c = n.dot(er),
      d = i.dot(er);
    if (Math.max(-Math.max(l, c, d), Math.min(l, c, d)) > o) return !1;
  }
  return !0;
}
const Gy = new Da(),
  Vs = new F(),
  Rc = new F();
class Fl {
  constructor(e = new F(), n = -1) {
    (this.isSphere = !0), (this.center = e), (this.radius = n);
  }
  set(e, n) {
    return this.center.copy(e), (this.radius = n), this;
  }
  setFromPoints(e, n) {
    const i = this.center;
    n !== void 0 ? i.copy(n) : Gy.setFromPoints(e).getCenter(i);
    let r = 0;
    for (let s = 0, a = e.length; s < a; s++) r = Math.max(r, i.distanceToSquared(e[s]));
    return (this.radius = Math.sqrt(r)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const n = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= n * n;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, n) {
    const i = this.center.distanceToSquared(e);
    return (
      n.copy(e),
      i > this.radius * this.radius &&
        (n.sub(this.center).normalize(), n.multiplyScalar(this.radius).add(this.center)),
      n
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return this.center.applyMatrix4(e), (this.radius = this.radius * e.getMaxScaleOnAxis()), this;
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    if (this.isEmpty()) return this.center.copy(e), (this.radius = 0), this;
    Vs.subVectors(e, this.center);
    const n = Vs.lengthSq();
    if (n > this.radius * this.radius) {
      const i = Math.sqrt(n),
        r = (i - this.radius) * 0.5;
      this.center.addScaledVector(Vs, r / i), (this.radius += r);
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
      ? (this.copy(e), this)
      : (this.center.equals(e.center) === !0
          ? (this.radius = Math.max(this.radius, e.radius))
          : (Rc.subVectors(e.center, this.center).setLength(e.radius),
            this.expandByPoint(Vs.copy(e.center).add(Rc)),
            this.expandByPoint(Vs.copy(e.center).sub(Rc))),
        this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Kn = new F(),
  Cc = new F(),
  so = new F(),
  yi = new F(),
  Pc = new F(),
  ao = new F(),
  Nc = new F();
class M0 {
  constructor(e = new F(), n = new F(0, 0, -1)) {
    (this.origin = e), (this.direction = n);
  }
  set(e, n) {
    return this.origin.copy(e), this.direction.copy(n), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, n) {
    return n.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Kn)), this;
  }
  closestPointToPoint(e, n) {
    n.subVectors(e, this.origin);
    const i = n.dot(this.direction);
    return i < 0 ? n.copy(this.origin) : n.copy(this.origin).addScaledVector(this.direction, i);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const n = Kn.subVectors(e, this.origin).dot(this.direction);
    return n < 0
      ? this.origin.distanceToSquared(e)
      : (Kn.copy(this.origin).addScaledVector(this.direction, n), Kn.distanceToSquared(e));
  }
  distanceSqToSegment(e, n, i, r) {
    Cc.copy(e).add(n).multiplyScalar(0.5),
      so.copy(n).sub(e).normalize(),
      yi.copy(this.origin).sub(Cc);
    const s = e.distanceTo(n) * 0.5,
      a = -this.direction.dot(so),
      o = yi.dot(this.direction),
      l = -yi.dot(so),
      c = yi.lengthSq(),
      d = Math.abs(1 - a * a);
    let f, h, g, v;
    if (d > 0)
      if (((f = a * l - o), (h = a * o - l), (v = s * d), f >= 0))
        if (h >= -v)
          if (h <= v) {
            const y = 1 / d;
            (f *= y), (h *= y), (g = f * (f + a * h + 2 * o) + h * (a * f + h + 2 * l) + c);
          } else (h = s), (f = Math.max(0, -(a * h + o))), (g = -f * f + h * (h + 2 * l) + c);
        else (h = -s), (f = Math.max(0, -(a * h + o))), (g = -f * f + h * (h + 2 * l) + c);
      else
        h <= -v
          ? ((f = Math.max(0, -(-a * s + o))),
            (h = f > 0 ? -s : Math.min(Math.max(-s, -l), s)),
            (g = -f * f + h * (h + 2 * l) + c))
          : h <= v
          ? ((f = 0), (h = Math.min(Math.max(-s, -l), s)), (g = h * (h + 2 * l) + c))
          : ((f = Math.max(0, -(a * s + o))),
            (h = f > 0 ? s : Math.min(Math.max(-s, -l), s)),
            (g = -f * f + h * (h + 2 * l) + c));
    else (h = a > 0 ? -s : s), (f = Math.max(0, -(a * h + o))), (g = -f * f + h * (h + 2 * l) + c);
    return (
      i && i.copy(this.origin).addScaledVector(this.direction, f),
      r && r.copy(Cc).addScaledVector(so, h),
      g
    );
  }
  intersectSphere(e, n) {
    Kn.subVectors(e.center, this.origin);
    const i = Kn.dot(this.direction),
      r = Kn.dot(Kn) - i * i,
      s = e.radius * e.radius;
    if (r > s) return null;
    const a = Math.sqrt(s - r),
      o = i - a,
      l = i + a;
    return l < 0 ? null : o < 0 ? this.at(l, n) : this.at(o, n);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const n = e.normal.dot(this.direction);
    if (n === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const i = -(this.origin.dot(e.normal) + e.constant) / n;
    return i >= 0 ? i : null;
  }
  intersectPlane(e, n) {
    const i = this.distanceToPlane(e);
    return i === null ? null : this.at(i, n);
  }
  intersectsPlane(e) {
    const n = e.distanceToPoint(this.origin);
    return n === 0 || e.normal.dot(this.direction) * n < 0;
  }
  intersectBox(e, n) {
    let i, r, s, a, o, l;
    const c = 1 / this.direction.x,
      d = 1 / this.direction.y,
      f = 1 / this.direction.z,
      h = this.origin;
    return (
      c >= 0
        ? ((i = (e.min.x - h.x) * c), (r = (e.max.x - h.x) * c))
        : ((i = (e.max.x - h.x) * c), (r = (e.min.x - h.x) * c)),
      d >= 0
        ? ((s = (e.min.y - h.y) * d), (a = (e.max.y - h.y) * d))
        : ((s = (e.max.y - h.y) * d), (a = (e.min.y - h.y) * d)),
      i > a ||
      s > r ||
      ((s > i || isNaN(i)) && (i = s),
      (a < r || isNaN(r)) && (r = a),
      f >= 0
        ? ((o = (e.min.z - h.z) * f), (l = (e.max.z - h.z) * f))
        : ((o = (e.max.z - h.z) * f), (l = (e.min.z - h.z) * f)),
      i > l || o > r) ||
      ((o > i || i !== i) && (i = o), (l < r || r !== r) && (r = l), r < 0)
        ? null
        : this.at(i >= 0 ? i : r, n)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Kn) !== null;
  }
  intersectTriangle(e, n, i, r, s) {
    Pc.subVectors(n, e), ao.subVectors(i, e), Nc.crossVectors(Pc, ao);
    let a = this.direction.dot(Nc),
      o;
    if (a > 0) {
      if (r) return null;
      o = 1;
    } else if (a < 0) (o = -1), (a = -a);
    else return null;
    yi.subVectors(this.origin, e);
    const l = o * this.direction.dot(ao.crossVectors(yi, ao));
    if (l < 0) return null;
    const c = o * this.direction.dot(Pc.cross(yi));
    if (c < 0 || l + c > a) return null;
    const d = -o * yi.dot(Nc);
    return d < 0 ? null : this.at(d / a, s);
  }
  applyMatrix4(e) {
    return this.origin.applyMatrix4(e), this.direction.transformDirection(e), this;
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class dt {
  constructor(e, n, i, r, s, a, o, l, c, d, f, h, g, v, y, p) {
    (dt.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, n, i, r, s, a, o, l, c, d, f, h, g, v, y, p);
  }
  set(e, n, i, r, s, a, o, l, c, d, f, h, g, v, y, p) {
    const u = this.elements;
    return (
      (u[0] = e),
      (u[4] = n),
      (u[8] = i),
      (u[12] = r),
      (u[1] = s),
      (u[5] = a),
      (u[9] = o),
      (u[13] = l),
      (u[2] = c),
      (u[6] = d),
      (u[10] = f),
      (u[14] = h),
      (u[3] = g),
      (u[7] = v),
      (u[11] = y),
      (u[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new dt().fromArray(this.elements);
  }
  copy(e) {
    const n = this.elements,
      i = e.elements;
    return (
      (n[0] = i[0]),
      (n[1] = i[1]),
      (n[2] = i[2]),
      (n[3] = i[3]),
      (n[4] = i[4]),
      (n[5] = i[5]),
      (n[6] = i[6]),
      (n[7] = i[7]),
      (n[8] = i[8]),
      (n[9] = i[9]),
      (n[10] = i[10]),
      (n[11] = i[11]),
      (n[12] = i[12]),
      (n[13] = i[13]),
      (n[14] = i[14]),
      (n[15] = i[15]),
      this
    );
  }
  copyPosition(e) {
    const n = this.elements,
      i = e.elements;
    return (n[12] = i[12]), (n[13] = i[13]), (n[14] = i[14]), this;
  }
  setFromMatrix3(e) {
    const n = e.elements;
    return (
      this.set(n[0], n[3], n[6], 0, n[1], n[4], n[7], 0, n[2], n[5], n[8], 0, 0, 0, 0, 1), this
    );
  }
  extractBasis(e, n, i) {
    return (
      e.setFromMatrixColumn(this, 0),
      n.setFromMatrixColumn(this, 1),
      i.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, n, i) {
    return this.set(e.x, n.x, i.x, 0, e.y, n.y, i.y, 0, e.z, n.z, i.z, 0, 0, 0, 0, 1), this;
  }
  extractRotation(e) {
    const n = this.elements,
      i = e.elements,
      r = 1 / Ir.setFromMatrixColumn(e, 0).length(),
      s = 1 / Ir.setFromMatrixColumn(e, 1).length(),
      a = 1 / Ir.setFromMatrixColumn(e, 2).length();
    return (
      (n[0] = i[0] * r),
      (n[1] = i[1] * r),
      (n[2] = i[2] * r),
      (n[3] = 0),
      (n[4] = i[4] * s),
      (n[5] = i[5] * s),
      (n[6] = i[6] * s),
      (n[7] = 0),
      (n[8] = i[8] * a),
      (n[9] = i[9] * a),
      (n[10] = i[10] * a),
      (n[11] = 0),
      (n[12] = 0),
      (n[13] = 0),
      (n[14] = 0),
      (n[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const n = this.elements,
      i = e.x,
      r = e.y,
      s = e.z,
      a = Math.cos(i),
      o = Math.sin(i),
      l = Math.cos(r),
      c = Math.sin(r),
      d = Math.cos(s),
      f = Math.sin(s);
    if (e.order === 'XYZ') {
      const h = a * d,
        g = a * f,
        v = o * d,
        y = o * f;
      (n[0] = l * d),
        (n[4] = -l * f),
        (n[8] = c),
        (n[1] = g + v * c),
        (n[5] = h - y * c),
        (n[9] = -o * l),
        (n[2] = y - h * c),
        (n[6] = v + g * c),
        (n[10] = a * l);
    } else if (e.order === 'YXZ') {
      const h = l * d,
        g = l * f,
        v = c * d,
        y = c * f;
      (n[0] = h + y * o),
        (n[4] = v * o - g),
        (n[8] = a * c),
        (n[1] = a * f),
        (n[5] = a * d),
        (n[9] = -o),
        (n[2] = g * o - v),
        (n[6] = y + h * o),
        (n[10] = a * l);
    } else if (e.order === 'ZXY') {
      const h = l * d,
        g = l * f,
        v = c * d,
        y = c * f;
      (n[0] = h - y * o),
        (n[4] = -a * f),
        (n[8] = v + g * o),
        (n[1] = g + v * o),
        (n[5] = a * d),
        (n[9] = y - h * o),
        (n[2] = -a * c),
        (n[6] = o),
        (n[10] = a * l);
    } else if (e.order === 'ZYX') {
      const h = a * d,
        g = a * f,
        v = o * d,
        y = o * f;
      (n[0] = l * d),
        (n[4] = v * c - g),
        (n[8] = h * c + y),
        (n[1] = l * f),
        (n[5] = y * c + h),
        (n[9] = g * c - v),
        (n[2] = -c),
        (n[6] = o * l),
        (n[10] = a * l);
    } else if (e.order === 'YZX') {
      const h = a * l,
        g = a * c,
        v = o * l,
        y = o * c;
      (n[0] = l * d),
        (n[4] = y - h * f),
        (n[8] = v * f + g),
        (n[1] = f),
        (n[5] = a * d),
        (n[9] = -o * d),
        (n[2] = -c * d),
        (n[6] = g * f + v),
        (n[10] = h - y * f);
    } else if (e.order === 'XZY') {
      const h = a * l,
        g = a * c,
        v = o * l,
        y = o * c;
      (n[0] = l * d),
        (n[4] = -f),
        (n[8] = c * d),
        (n[1] = h * f + y),
        (n[5] = a * d),
        (n[9] = g * f - v),
        (n[2] = v * f - g),
        (n[6] = o * d),
        (n[10] = y * f + h);
    }
    return (
      (n[3] = 0), (n[7] = 0), (n[11] = 0), (n[12] = 0), (n[13] = 0), (n[14] = 0), (n[15] = 1), this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Vy, e, Wy);
  }
  lookAt(e, n, i) {
    const r = this.elements;
    return (
      an.subVectors(e, n),
      an.lengthSq() === 0 && (an.z = 1),
      an.normalize(),
      Si.crossVectors(i, an),
      Si.lengthSq() === 0 &&
        (Math.abs(i.z) === 1 ? (an.x += 1e-4) : (an.z += 1e-4),
        an.normalize(),
        Si.crossVectors(i, an)),
      Si.normalize(),
      oo.crossVectors(an, Si),
      (r[0] = Si.x),
      (r[4] = oo.x),
      (r[8] = an.x),
      (r[1] = Si.y),
      (r[5] = oo.y),
      (r[9] = an.y),
      (r[2] = Si.z),
      (r[6] = oo.z),
      (r[10] = an.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, n) {
    const i = e.elements,
      r = n.elements,
      s = this.elements,
      a = i[0],
      o = i[4],
      l = i[8],
      c = i[12],
      d = i[1],
      f = i[5],
      h = i[9],
      g = i[13],
      v = i[2],
      y = i[6],
      p = i[10],
      u = i[14],
      _ = i[3],
      x = i[7],
      E = i[11],
      C = i[15],
      b = r[0],
      T = r[4],
      D = r[8],
      Y = r[12],
      S = r[1],
      R = r[5],
      ne = r[9],
      J = r[13],
      L = r[2],
      X = r[6],
      j = r[10],
      $ = r[14],
      P = r[3],
      O = r[7],
      V = r[11],
      K = r[15];
    return (
      (s[0] = a * b + o * S + l * L + c * P),
      (s[4] = a * T + o * R + l * X + c * O),
      (s[8] = a * D + o * ne + l * j + c * V),
      (s[12] = a * Y + o * J + l * $ + c * K),
      (s[1] = d * b + f * S + h * L + g * P),
      (s[5] = d * T + f * R + h * X + g * O),
      (s[9] = d * D + f * ne + h * j + g * V),
      (s[13] = d * Y + f * J + h * $ + g * K),
      (s[2] = v * b + y * S + p * L + u * P),
      (s[6] = v * T + y * R + p * X + u * O),
      (s[10] = v * D + y * ne + p * j + u * V),
      (s[14] = v * Y + y * J + p * $ + u * K),
      (s[3] = _ * b + x * S + E * L + C * P),
      (s[7] = _ * T + x * R + E * X + C * O),
      (s[11] = _ * D + x * ne + E * j + C * V),
      (s[15] = _ * Y + x * J + E * $ + C * K),
      this
    );
  }
  multiplyScalar(e) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[4] *= e),
      (n[8] *= e),
      (n[12] *= e),
      (n[1] *= e),
      (n[5] *= e),
      (n[9] *= e),
      (n[13] *= e),
      (n[2] *= e),
      (n[6] *= e),
      (n[10] *= e),
      (n[14] *= e),
      (n[3] *= e),
      (n[7] *= e),
      (n[11] *= e),
      (n[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      n = e[0],
      i = e[4],
      r = e[8],
      s = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      d = e[2],
      f = e[6],
      h = e[10],
      g = e[14],
      v = e[3],
      y = e[7],
      p = e[11],
      u = e[15];
    return (
      v * (+s * l * f - r * c * f - s * o * h + i * c * h + r * o * g - i * l * g) +
      y * (+n * l * g - n * c * h + s * a * h - r * a * g + r * c * d - s * l * d) +
      p * (+n * c * f - n * o * g - s * a * f + i * a * g + s * o * d - i * c * d) +
      u * (-r * o * d - n * l * f + n * o * h + r * a * f - i * a * h + i * l * d)
    );
  }
  transpose() {
    const e = this.elements;
    let n;
    return (
      (n = e[1]),
      (e[1] = e[4]),
      (e[4] = n),
      (n = e[2]),
      (e[2] = e[8]),
      (e[8] = n),
      (n = e[6]),
      (e[6] = e[9]),
      (e[9] = n),
      (n = e[3]),
      (e[3] = e[12]),
      (e[12] = n),
      (n = e[7]),
      (e[7] = e[13]),
      (e[13] = n),
      (n = e[11]),
      (e[11] = e[14]),
      (e[14] = n),
      this
    );
  }
  setPosition(e, n, i) {
    const r = this.elements;
    return (
      e.isVector3
        ? ((r[12] = e.x), (r[13] = e.y), (r[14] = e.z))
        : ((r[12] = e), (r[13] = n), (r[14] = i)),
      this
    );
  }
  invert() {
    const e = this.elements,
      n = e[0],
      i = e[1],
      r = e[2],
      s = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      d = e[8],
      f = e[9],
      h = e[10],
      g = e[11],
      v = e[12],
      y = e[13],
      p = e[14],
      u = e[15],
      _ = f * p * c - y * h * c + y * l * g - o * p * g - f * l * u + o * h * u,
      x = v * h * c - d * p * c - v * l * g + a * p * g + d * l * u - a * h * u,
      E = d * y * c - v * f * c + v * o * g - a * y * g - d * o * u + a * f * u,
      C = v * f * l - d * y * l - v * o * h + a * y * h + d * o * p - a * f * p,
      b = n * _ + i * x + r * E + s * C;
    if (b === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const T = 1 / b;
    return (
      (e[0] = _ * T),
      (e[1] = (y * h * s - f * p * s - y * r * g + i * p * g + f * r * u - i * h * u) * T),
      (e[2] = (o * p * s - y * l * s + y * r * c - i * p * c - o * r * u + i * l * u) * T),
      (e[3] = (f * l * s - o * h * s - f * r * c + i * h * c + o * r * g - i * l * g) * T),
      (e[4] = x * T),
      (e[5] = (d * p * s - v * h * s + v * r * g - n * p * g - d * r * u + n * h * u) * T),
      (e[6] = (v * l * s - a * p * s - v * r * c + n * p * c + a * r * u - n * l * u) * T),
      (e[7] = (a * h * s - d * l * s + d * r * c - n * h * c - a * r * g + n * l * g) * T),
      (e[8] = E * T),
      (e[9] = (v * f * s - d * y * s - v * i * g + n * y * g + d * i * u - n * f * u) * T),
      (e[10] = (a * y * s - v * o * s + v * i * c - n * y * c - a * i * u + n * o * u) * T),
      (e[11] = (d * o * s - a * f * s - d * i * c + n * f * c + a * i * g - n * o * g) * T),
      (e[12] = C * T),
      (e[13] = (d * y * r - v * f * r + v * i * h - n * y * h - d * i * p + n * f * p) * T),
      (e[14] = (v * o * r - a * y * r - v * i * l + n * y * l + a * i * p - n * o * p) * T),
      (e[15] = (a * f * r - d * o * r + d * i * l - n * f * l - a * i * h + n * o * h) * T),
      this
    );
  }
  scale(e) {
    const n = this.elements,
      i = e.x,
      r = e.y,
      s = e.z;
    return (
      (n[0] *= i),
      (n[4] *= r),
      (n[8] *= s),
      (n[1] *= i),
      (n[5] *= r),
      (n[9] *= s),
      (n[2] *= i),
      (n[6] *= r),
      (n[10] *= s),
      (n[3] *= i),
      (n[7] *= r),
      (n[11] *= s),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      n = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(n, i, r));
  }
  makeTranslation(e, n, i) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, n, 0, 0, 1, i, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, n, -i, 0, 0, i, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(n, 0, i, 0, 0, 1, 0, 0, -i, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const n = Math.cos(e),
      i = Math.sin(e);
    return this.set(n, -i, 0, 0, i, n, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, n) {
    const i = Math.cos(n),
      r = Math.sin(n),
      s = 1 - i,
      a = e.x,
      o = e.y,
      l = e.z,
      c = s * a,
      d = s * o;
    return (
      this.set(
        c * a + i,
        c * o - r * l,
        c * l + r * o,
        0,
        c * o + r * l,
        d * o + i,
        d * l - r * a,
        0,
        c * l - r * o,
        d * l + r * a,
        s * l * l + i,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, n, i) {
    return this.set(e, 0, 0, 0, 0, n, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, n, i, r, s, a) {
    return this.set(1, i, s, 0, e, 1, a, 0, n, r, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, n, i) {
    const r = this.elements,
      s = n._x,
      a = n._y,
      o = n._z,
      l = n._w,
      c = s + s,
      d = a + a,
      f = o + o,
      h = s * c,
      g = s * d,
      v = s * f,
      y = a * d,
      p = a * f,
      u = o * f,
      _ = l * c,
      x = l * d,
      E = l * f,
      C = i.x,
      b = i.y,
      T = i.z;
    return (
      (r[0] = (1 - (y + u)) * C),
      (r[1] = (g + E) * C),
      (r[2] = (v - x) * C),
      (r[3] = 0),
      (r[4] = (g - E) * b),
      (r[5] = (1 - (h + u)) * b),
      (r[6] = (p + _) * b),
      (r[7] = 0),
      (r[8] = (v + x) * T),
      (r[9] = (p - _) * T),
      (r[10] = (1 - (h + y)) * T),
      (r[11] = 0),
      (r[12] = e.x),
      (r[13] = e.y),
      (r[14] = e.z),
      (r[15] = 1),
      this
    );
  }
  decompose(e, n, i) {
    const r = this.elements;
    let s = Ir.set(r[0], r[1], r[2]).length();
    const a = Ir.set(r[4], r[5], r[6]).length(),
      o = Ir.set(r[8], r[9], r[10]).length();
    this.determinant() < 0 && (s = -s), (e.x = r[12]), (e.y = r[13]), (e.z = r[14]), bn.copy(this);
    const c = 1 / s,
      d = 1 / a,
      f = 1 / o;
    return (
      (bn.elements[0] *= c),
      (bn.elements[1] *= c),
      (bn.elements[2] *= c),
      (bn.elements[4] *= d),
      (bn.elements[5] *= d),
      (bn.elements[6] *= d),
      (bn.elements[8] *= f),
      (bn.elements[9] *= f),
      (bn.elements[10] *= f),
      n.setFromRotationMatrix(bn),
      (i.x = s),
      (i.y = a),
      (i.z = o),
      this
    );
  }
  makePerspective(e, n, i, r, s, a, o = oi) {
    const l = this.elements,
      c = (2 * s) / (n - e),
      d = (2 * s) / (i - r),
      f = (n + e) / (n - e),
      h = (i + r) / (i - r);
    let g, v;
    if (o === oi) (g = -(a + s) / (a - s)), (v = (-2 * a * s) / (a - s));
    else if (o === ml) (g = -a / (a - s)), (v = (-a * s) / (a - s));
    else throw new Error('THREE.Matrix4.makePerspective(): Invalid coordinate system: ' + o);
    return (
      (l[0] = c),
      (l[4] = 0),
      (l[8] = f),
      (l[12] = 0),
      (l[1] = 0),
      (l[5] = d),
      (l[9] = h),
      (l[13] = 0),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = g),
      (l[14] = v),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = -1),
      (l[15] = 0),
      this
    );
  }
  makeOrthographic(e, n, i, r, s, a, o = oi) {
    const l = this.elements,
      c = 1 / (n - e),
      d = 1 / (i - r),
      f = 1 / (a - s),
      h = (n + e) * c,
      g = (i + r) * d;
    let v, y;
    if (o === oi) (v = (a + s) * f), (y = -2 * f);
    else if (o === ml) (v = s * f), (y = -1 * f);
    else throw new Error('THREE.Matrix4.makeOrthographic(): Invalid coordinate system: ' + o);
    return (
      (l[0] = 2 * c),
      (l[4] = 0),
      (l[8] = 0),
      (l[12] = -h),
      (l[1] = 0),
      (l[5] = 2 * d),
      (l[9] = 0),
      (l[13] = -g),
      (l[2] = 0),
      (l[6] = 0),
      (l[10] = y),
      (l[14] = -v),
      (l[3] = 0),
      (l[7] = 0),
      (l[11] = 0),
      (l[15] = 1),
      this
    );
  }
  equals(e) {
    const n = this.elements,
      i = e.elements;
    for (let r = 0; r < 16; r++) if (n[r] !== i[r]) return !1;
    return !0;
  }
  fromArray(e, n = 0) {
    for (let i = 0; i < 16; i++) this.elements[i] = e[i + n];
    return this;
  }
  toArray(e = [], n = 0) {
    const i = this.elements;
    return (
      (e[n] = i[0]),
      (e[n + 1] = i[1]),
      (e[n + 2] = i[2]),
      (e[n + 3] = i[3]),
      (e[n + 4] = i[4]),
      (e[n + 5] = i[5]),
      (e[n + 6] = i[6]),
      (e[n + 7] = i[7]),
      (e[n + 8] = i[8]),
      (e[n + 9] = i[9]),
      (e[n + 10] = i[10]),
      (e[n + 11] = i[11]),
      (e[n + 12] = i[12]),
      (e[n + 13] = i[13]),
      (e[n + 14] = i[14]),
      (e[n + 15] = i[15]),
      e
    );
  }
}
const Ir = new F(),
  bn = new dt(),
  Vy = new F(0, 0, 0),
  Wy = new F(1, 1, 1),
  Si = new F(),
  oo = new F(),
  an = new F(),
  ip = new dt(),
  rp = new La();
class pi {
  constructor(e = 0, n = 0, i = 0, r = pi.DEFAULT_ORDER) {
    (this.isEuler = !0), (this._x = e), (this._y = n), (this._z = i), (this._order = r);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, n, i, r = this._order) {
    return (
      (this._x = e), (this._y = n), (this._z = i), (this._order = r), this._onChangeCallback(), this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, n = this._order, i = !0) {
    const r = e.elements,
      s = r[0],
      a = r[4],
      o = r[8],
      l = r[1],
      c = r[5],
      d = r[9],
      f = r[2],
      h = r[6],
      g = r[10];
    switch (n) {
      case 'XYZ':
        (this._y = Math.asin(Zt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-d, g)), (this._z = Math.atan2(-a, s)))
            : ((this._x = Math.atan2(h, c)), (this._z = 0));
        break;
      case 'YXZ':
        (this._x = Math.asin(-Zt(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(o, g)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-f, s)), (this._z = 0));
        break;
      case 'ZXY':
        (this._x = Math.asin(Zt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(-f, g)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, s)));
        break;
      case 'ZYX':
        (this._y = Math.asin(-Zt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._x = Math.atan2(h, g)), (this._z = Math.atan2(l, s)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c)));
        break;
      case 'YZX':
        (this._z = Math.asin(Zt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-d, c)), (this._y = Math.atan2(-f, s)))
            : ((this._x = 0), (this._y = Math.atan2(o, g)));
        break;
      case 'XZY':
        (this._z = Math.asin(-Zt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(h, c)), (this._y = Math.atan2(o, s)))
            : ((this._x = Math.atan2(-d, g)), (this._y = 0));
        break;
      default:
        console.warn('THREE.Euler: .setFromRotationMatrix() encountered an unknown order: ' + n);
    }
    return (this._order = n), i === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, n, i) {
    return ip.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ip, n, i);
  }
  setFromVector3(e, n = this._order) {
    return this.set(e.x, e.y, e.z, n);
  }
  reorder(e) {
    return rp.setFromEuler(this), this.setFromQuaternion(rp, e);
  }
  equals(e) {
    return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order;
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], n = 0) {
    return (
      (e[n] = this._x), (e[n + 1] = this._y), (e[n + 2] = this._z), (e[n + 3] = this._order), e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
}
pi.DEFAULT_ORDER = 'XYZ';
class E0 {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let jy = 0;
const sp = new F(),
  Fr = new La(),
  Zn = new dt(),
  lo = new F(),
  Ws = new F(),
  Xy = new F(),
  qy = new La(),
  ap = new F(1, 0, 0),
  op = new F(0, 1, 0),
  lp = new F(0, 0, 1),
  Yy = { type: 'added' },
  $y = { type: 'removed' },
  Lc = { type: 'childadded', child: null },
  Dc = { type: 'childremoved', child: null };
class jt extends Cs {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, 'id', { value: jy++ }),
      (this.uuid = Na()),
      (this.name = ''),
      (this.type = 'Object3D'),
      (this.parent = null),
      (this.children = []),
      (this.up = jt.DEFAULT_UP.clone());
    const e = new F(),
      n = new pi(),
      i = new La(),
      r = new F(1, 1, 1);
    function s() {
      i.setFromEuler(n, !1);
    }
    function a() {
      n.setFromQuaternion(i, void 0, !1);
    }
    n._onChange(s),
      i._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: n },
        quaternion: { configurable: !0, enumerable: !0, value: i },
        scale: { configurable: !0, enumerable: !0, value: r },
        modelViewMatrix: { value: new dt() },
        normalMatrix: { value: new Ie() },
      }),
      (this.matrix = new dt()),
      (this.matrixWorld = new dt()),
      (this.matrixAutoUpdate = jt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new E0()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, n) {
    this.quaternion.setFromAxisAngle(e, n);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, n) {
    return Fr.setFromAxisAngle(e, n), this.quaternion.multiply(Fr), this;
  }
  rotateOnWorldAxis(e, n) {
    return Fr.setFromAxisAngle(e, n), this.quaternion.premultiply(Fr), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(ap, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(op, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(lp, e);
  }
  translateOnAxis(e, n) {
    return (
      sp.copy(e).applyQuaternion(this.quaternion), this.position.add(sp.multiplyScalar(n)), this
    );
  }
  translateX(e) {
    return this.translateOnAxis(ap, e);
  }
  translateY(e) {
    return this.translateOnAxis(op, e);
  }
  translateZ(e) {
    return this.translateOnAxis(lp, e);
  }
  localToWorld(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return this.updateWorldMatrix(!0, !1), e.applyMatrix4(Zn.copy(this.matrixWorld).invert());
  }
  lookAt(e, n, i) {
    e.isVector3 ? lo.copy(e) : lo.set(e, n, i);
    const r = this.parent;
    this.updateWorldMatrix(!0, !1),
      Ws.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight ? Zn.lookAt(Ws, lo, this.up) : Zn.lookAt(lo, Ws, this.up),
      this.quaternion.setFromRotationMatrix(Zn),
      r &&
        (Zn.extractRotation(r.matrixWorld),
        Fr.setFromRotationMatrix(Zn),
        this.quaternion.premultiply(Fr.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.add(arguments[n]);
      return this;
    }
    return e === this
      ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e), this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Yy),
            (Lc.child = e),
            this.dispatchEvent(Lc),
            (Lc.child = null))
          : console.error('THREE.Object3D.add: object not an instance of THREE.Object3D.', e),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let i = 0; i < arguments.length; i++) this.remove(arguments[i]);
      return this;
    }
    const n = this.children.indexOf(e);
    return (
      n !== -1 &&
        ((e.parent = null),
        this.children.splice(n, 1),
        e.dispatchEvent($y),
        (Dc.child = e),
        this.dispatchEvent(Dc),
        (Dc.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Zn.copy(this.matrixWorld).invert(),
      e.parent !== null && (e.parent.updateWorldMatrix(!0, !1), Zn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Zn),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty('id', e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty('name', e);
  }
  getObjectByProperty(e, n) {
    if (this[e] === n) return this;
    for (let i = 0, r = this.children.length; i < r; i++) {
      const a = this.children[i].getObjectByProperty(e, n);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, n, i = []) {
    this[e] === n && i.push(this);
    const r = this.children;
    for (let s = 0, a = r.length; s < a; s++) r[s].getObjectsByProperty(e, n, i);
    return i;
  }
  getWorldPosition(e) {
    return this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld);
  }
  getWorldQuaternion(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ws, e, Xy), e;
  }
  getWorldScale(e) {
    return this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(Ws, qy, e), e;
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const n = this.matrixWorld.elements;
    return e.set(n[8], n[9], n[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) n[i].traverseVisible(e);
  }
  traverseAncestors(e) {
    const n = this.parent;
    n !== null && (e(n), n.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const n = this.children;
    for (let i = 0, r = n.length; i < r; i++) {
      const s = n[i];
      (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e);
    }
  }
  updateWorldMatrix(e, n) {
    const i = this.parent;
    if (
      (e === !0 && i !== null && i.matrixWorldAutoUpdate === !0 && i.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
      n === !0)
    ) {
      const r = this.children;
      for (let s = 0, a = r.length; s < a; s++) {
        const o = r[s];
        o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0);
      }
    }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == 'string',
      i = {};
    n &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (i.metadata = { version: 4.6, type: 'Object', generator: 'Object3D.toJSON' }));
    const r = {};
    (r.uuid = this.uuid),
      (r.type = this.type),
      this.name !== '' && (r.name = this.name),
      this.castShadow === !0 && (r.castShadow = !0),
      this.receiveShadow === !0 && (r.receiveShadow = !0),
      this.visible === !1 && (r.visible = !1),
      this.frustumCulled === !1 && (r.frustumCulled = !1),
      this.renderOrder !== 0 && (r.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (r.userData = this.userData),
      (r.layers = this.layers.mask),
      (r.matrix = this.matrix.toArray()),
      (r.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (r.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((r.type = 'InstancedMesh'),
        (r.count = this.count),
        (r.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null && (r.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((r.type = 'BatchedMesh'),
        (r.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (r.sortObjects = this.sortObjects),
        (r.drawRanges = this._drawRanges),
        (r.reservedRanges = this._reservedRanges),
        (r.visibility = this._visibility),
        (r.active = this._active),
        (r.bounds = this._bounds.map((o) => ({
          boxInitialized: o.boxInitialized,
          boxMin: o.box.min.toArray(),
          boxMax: o.box.max.toArray(),
          sphereInitialized: o.sphereInitialized,
          sphereRadius: o.sphere.radius,
          sphereCenter: o.sphere.center.toArray(),
        }))),
        (r.maxGeometryCount = this._maxGeometryCount),
        (r.maxVertexCount = this._maxVertexCount),
        (r.maxIndexCount = this._maxIndexCount),
        (r.geometryInitialized = this._geometryInitialized),
        (r.geometryCount = this._geometryCount),
        (r.matricesTexture = this._matricesTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (r.boundingSphere = {
            center: r.boundingSphere.center.toArray(),
            radius: r.boundingSphere.radius,
          }),
        this.boundingBox !== null &&
          (r.boundingBox = { min: r.boundingBox.min.toArray(), max: r.boundingBox.max.toArray() }));
    function s(o, l) {
      return o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (r.background = this.background.toJSON())
          : this.background.isTexture && (r.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (r.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      r.geometry = s(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, d = l.length; c < d; c++) {
            const f = l[c];
            s(e.shapes, f);
          }
        else s(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((r.bindMode = this.bindMode),
        (r.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (s(e.skeletons, this.skeleton), (r.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(s(e.materials, this.material[l]));
        r.material = o;
      } else r.material = s(e.materials, this.material);
    if (this.children.length > 0) {
      r.children = [];
      for (let o = 0; o < this.children.length; o++)
        r.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      r.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        r.animations.push(s(e.animations, l));
      }
    }
    if (n) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        d = a(e.images),
        f = a(e.shapes),
        h = a(e.skeletons),
        g = a(e.animations),
        v = a(e.nodes);
      o.length > 0 && (i.geometries = o),
        l.length > 0 && (i.materials = l),
        c.length > 0 && (i.textures = c),
        d.length > 0 && (i.images = d),
        f.length > 0 && (i.shapes = f),
        h.length > 0 && (i.skeletons = h),
        g.length > 0 && (i.animations = g),
        v.length > 0 && (i.nodes = v);
    }
    return (i.object = r), i;
    function a(o) {
      const l = [];
      for (const c in o) {
        const d = o[c];
        delete d.metadata, l.push(d);
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, n = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      n === !0)
    )
      for (let i = 0; i < e.children.length; i++) {
        const r = e.children[i];
        this.add(r.clone());
      }
    return this;
  }
}
jt.DEFAULT_UP = new F(0, 1, 0);
jt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Rn = new F(),
  Qn = new F(),
  Uc = new F(),
  Jn = new F(),
  Or = new F(),
  kr = new F(),
  cp = new F(),
  Ic = new F(),
  Fc = new F(),
  Oc = new F();
class Vn {
  constructor(e = new F(), n = new F(), i = new F()) {
    (this.a = e), (this.b = n), (this.c = i);
  }
  static getNormal(e, n, i, r) {
    r.subVectors(i, n), Rn.subVectors(e, n), r.cross(Rn);
    const s = r.lengthSq();
    return s > 0 ? r.multiplyScalar(1 / Math.sqrt(s)) : r.set(0, 0, 0);
  }
  static getBarycoord(e, n, i, r, s) {
    Rn.subVectors(r, n), Qn.subVectors(i, n), Uc.subVectors(e, n);
    const a = Rn.dot(Rn),
      o = Rn.dot(Qn),
      l = Rn.dot(Uc),
      c = Qn.dot(Qn),
      d = Qn.dot(Uc),
      f = a * c - o * o;
    if (f === 0) return s.set(0, 0, 0), null;
    const h = 1 / f,
      g = (c * l - o * d) * h,
      v = (a * d - o * l) * h;
    return s.set(1 - g - v, v, g);
  }
  static containsPoint(e, n, i, r) {
    return this.getBarycoord(e, n, i, r, Jn) === null
      ? !1
      : Jn.x >= 0 && Jn.y >= 0 && Jn.x + Jn.y <= 1;
  }
  static getInterpolation(e, n, i, r, s, a, o, l) {
    return this.getBarycoord(e, n, i, r, Jn) === null
      ? ((l.x = 0), (l.y = 0), 'z' in l && (l.z = 0), 'w' in l && (l.w = 0), null)
      : (l.setScalar(0),
        l.addScaledVector(s, Jn.x),
        l.addScaledVector(a, Jn.y),
        l.addScaledVector(o, Jn.z),
        l);
  }
  static isFrontFacing(e, n, i, r) {
    return Rn.subVectors(i, n), Qn.subVectors(e, n), Rn.cross(Qn).dot(r) < 0;
  }
  set(e, n, i) {
    return this.a.copy(e), this.b.copy(n), this.c.copy(i), this;
  }
  setFromPointsAndIndices(e, n, i, r) {
    return this.a.copy(e[n]), this.b.copy(e[i]), this.c.copy(e[r]), this;
  }
  setFromAttributeAndIndices(e, n, i, r) {
    return (
      this.a.fromBufferAttribute(e, n),
      this.b.fromBufferAttribute(e, i),
      this.c.fromBufferAttribute(e, r),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      Rn.subVectors(this.c, this.b), Qn.subVectors(this.a, this.b), Rn.cross(Qn).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Vn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, n) {
    return Vn.getBarycoord(e, this.a, this.b, this.c, n);
  }
  getInterpolation(e, n, i, r, s) {
    return Vn.getInterpolation(e, this.a, this.b, this.c, n, i, r, s);
  }
  containsPoint(e) {
    return Vn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Vn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, n) {
    const i = this.a,
      r = this.b,
      s = this.c;
    let a, o;
    Or.subVectors(r, i), kr.subVectors(s, i), Ic.subVectors(e, i);
    const l = Or.dot(Ic),
      c = kr.dot(Ic);
    if (l <= 0 && c <= 0) return n.copy(i);
    Fc.subVectors(e, r);
    const d = Or.dot(Fc),
      f = kr.dot(Fc);
    if (d >= 0 && f <= d) return n.copy(r);
    const h = l * f - d * c;
    if (h <= 0 && l >= 0 && d <= 0) return (a = l / (l - d)), n.copy(i).addScaledVector(Or, a);
    Oc.subVectors(e, s);
    const g = Or.dot(Oc),
      v = kr.dot(Oc);
    if (v >= 0 && g <= v) return n.copy(s);
    const y = g * c - l * v;
    if (y <= 0 && c >= 0 && v <= 0) return (o = c / (c - v)), n.copy(i).addScaledVector(kr, o);
    const p = d * v - g * f;
    if (p <= 0 && f - d >= 0 && g - v >= 0)
      return (
        cp.subVectors(s, r), (o = (f - d) / (f - d + (g - v))), n.copy(r).addScaledVector(cp, o)
      );
    const u = 1 / (p + y + h);
    return (a = y * u), (o = h * u), n.copy(i).addScaledVector(Or, a).addScaledVector(kr, o);
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const w0 = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Mi = { h: 0, s: 0, l: 0 },
  co = { h: 0, s: 0, l: 0 };
function kc(t, e, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? t + (e - t) * 6 * n : n < 1 / 2 ? e : n < 2 / 3 ? t + (e - t) * 6 * (2 / 3 - n) : t
  );
}
class qe {
  constructor(e, n, i) {
    return (this.isColor = !0), (this.r = 1), (this.g = 1), (this.b = 1), this.set(e, n, i);
  }
  set(e, n, i) {
    if (n === void 0 && i === void 0) {
      const r = e;
      r && r.isColor
        ? this.copy(r)
        : typeof r == 'number'
        ? this.setHex(r)
        : typeof r == 'string' && this.setStyle(r);
    } else this.setRGB(e, n, i);
    return this;
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, n = Bn) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      Ke.toWorkingColorSpace(this, n),
      this
    );
  }
  setRGB(e, n, i, r = Ke.workingColorSpace) {
    return (this.r = e), (this.g = n), (this.b = i), Ke.toWorkingColorSpace(this, r), this;
  }
  setHSL(e, n, i, r = Ke.workingColorSpace) {
    if (((e = Uy(e, 1)), (n = Zt(n, 0, 1)), (i = Zt(i, 0, 1)), n === 0))
      this.r = this.g = this.b = i;
    else {
      const s = i <= 0.5 ? i * (1 + n) : i + n - i * n,
        a = 2 * i - s;
      (this.r = kc(a, s, e + 1 / 3)), (this.g = kc(a, s, e)), (this.b = kc(a, s, e - 1 / 3));
    }
    return Ke.toWorkingColorSpace(this, r), this;
  }
  setStyle(e, n = Bn) {
    function i(s) {
      s !== void 0 &&
        parseFloat(s) < 1 &&
        console.warn('THREE.Color: Alpha component of ' + e + ' will be ignored.');
    }
    let r;
    if ((r = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let s;
      const a = r[1],
        o = r[2];
      switch (a) {
        case 'rgb':
        case 'rgba':
          if ((s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
            return (
              i(s[4]),
              this.setRGB(
                Math.min(255, parseInt(s[1], 10)) / 255,
                Math.min(255, parseInt(s[2], 10)) / 255,
                Math.min(255, parseInt(s[3], 10)) / 255,
                n,
              )
            );
          if ((s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)))
            return (
              i(s[4]),
              this.setRGB(
                Math.min(100, parseInt(s[1], 10)) / 100,
                Math.min(100, parseInt(s[2], 10)) / 100,
                Math.min(100, parseInt(s[3], 10)) / 100,
                n,
              )
            );
          break;
        case 'hsl':
        case 'hsla':
          if (
            (s =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              i(s[4]),
              this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, n)
            );
          break;
        default:
          console.warn('THREE.Color: Unknown color model ' + e);
      }
    } else if ((r = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const s = r[1],
        a = s.length;
      if (a === 3)
        return this.setRGB(
          parseInt(s.charAt(0), 16) / 15,
          parseInt(s.charAt(1), 16) / 15,
          parseInt(s.charAt(2), 16) / 15,
          n,
        );
      if (a === 6) return this.setHex(parseInt(s, 16), n);
      console.warn('THREE.Color: Invalid hex color ' + e);
    } else if (e && e.length > 0) return this.setColorName(e, n);
    return this;
  }
  setColorName(e, n = Bn) {
    const i = w0[e.toLowerCase()];
    return i !== void 0 ? this.setHex(i, n) : console.warn('THREE.Color: Unknown color ' + e), this;
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = hs(e.r)), (this.g = hs(e.g)), (this.b = hs(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = wc(e.r)), (this.g = wc(e.g)), (this.b = wc(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Bn) {
    return (
      Ke.fromWorkingColorSpace(Ot.copy(this), e),
      Math.round(Zt(Ot.r * 255, 0, 255)) * 65536 +
        Math.round(Zt(Ot.g * 255, 0, 255)) * 256 +
        Math.round(Zt(Ot.b * 255, 0, 255))
    );
  }
  getHexString(e = Bn) {
    return ('000000' + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, n = Ke.workingColorSpace) {
    Ke.fromWorkingColorSpace(Ot.copy(this), n);
    const i = Ot.r,
      r = Ot.g,
      s = Ot.b,
      a = Math.max(i, r, s),
      o = Math.min(i, r, s);
    let l, c;
    const d = (o + a) / 2;
    if (o === a) (l = 0), (c = 0);
    else {
      const f = a - o;
      switch (((c = d <= 0.5 ? f / (a + o) : f / (2 - a - o)), a)) {
        case i:
          l = (r - s) / f + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / f + 2;
          break;
        case s:
          l = (i - r) / f + 4;
          break;
      }
      l /= 6;
    }
    return (e.h = l), (e.s = c), (e.l = d), e;
  }
  getRGB(e, n = Ke.workingColorSpace) {
    return Ke.fromWorkingColorSpace(Ot.copy(this), n), (e.r = Ot.r), (e.g = Ot.g), (e.b = Ot.b), e;
  }
  getStyle(e = Bn) {
    Ke.fromWorkingColorSpace(Ot.copy(this), e);
    const n = Ot.r,
      i = Ot.g,
      r = Ot.b;
    return e !== Bn
      ? `color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`
      : `rgb(${Math.round(n * 255)},${Math.round(i * 255)},${Math.round(r * 255)})`;
  }
  offsetHSL(e, n, i) {
    return this.getHSL(Mi), this.setHSL(Mi.h + e, Mi.s + n, Mi.l + i);
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, n) {
    return (this.r = e.r + n.r), (this.g = e.g + n.g), (this.b = e.b + n.b), this;
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, n) {
    return (
      (this.r += (e.r - this.r) * n),
      (this.g += (e.g - this.g) * n),
      (this.b += (e.b - this.b) * n),
      this
    );
  }
  lerpColors(e, n, i) {
    return (
      (this.r = e.r + (n.r - e.r) * i),
      (this.g = e.g + (n.g - e.g) * i),
      (this.b = e.b + (n.b - e.b) * i),
      this
    );
  }
  lerpHSL(e, n) {
    this.getHSL(Mi), e.getHSL(co);
    const i = Mc(Mi.h, co.h, n),
      r = Mc(Mi.s, co.s, n),
      s = Mc(Mi.l, co.l, n);
    return this.setHSL(i, r, s), this;
  }
  setFromVector3(e) {
    return (this.r = e.x), (this.g = e.y), (this.b = e.z), this;
  }
  applyMatrix3(e) {
    const n = this.r,
      i = this.g,
      r = this.b,
      s = e.elements;
    return (
      (this.r = s[0] * n + s[3] * i + s[6] * r),
      (this.g = s[1] * n + s[4] * i + s[7] * r),
      (this.b = s[2] * n + s[5] * i + s[8] * r),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, n = 0) {
    return (this.r = e[n]), (this.g = e[n + 1]), (this.b = e[n + 2]), this;
  }
  toArray(e = [], n = 0) {
    return (e[n] = this.r), (e[n + 1] = this.g), (e[n + 2] = this.b), e;
  }
  fromBufferAttribute(e, n) {
    return (this.r = e.getX(n)), (this.g = e.getY(n)), (this.b = e.getZ(n)), this;
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
const Ot = new qe();
qe.NAMES = w0;
let Ky = 0;
class Ua extends Cs {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, 'id', { value: Ky++ }),
      (this.uuid = Na()),
      (this.name = ''),
      (this.type = 'Material'),
      (this.blending = fs),
      (this.side = ji),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = Wu),
      (this.blendDst = ju),
      (this.blendEquation = cr),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new qe(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = dl),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = $h),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = Pr),
      (this.stencilZFail = Pr),
      (this.stencilZPass = Pr),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const n in e) {
        const i = e[n];
        if (i === void 0) {
          console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);
          continue;
        }
        const r = this[n];
        if (r === void 0) {
          console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);
          continue;
        }
        r && r.isColor
          ? r.set(i)
          : r && r.isVector3 && i && i.isVector3
          ? r.copy(i)
          : (this[n] = i);
      }
  }
  toJSON(e) {
    const n = e === void 0 || typeof e == 'string';
    n && (e = { textures: {}, images: {} });
    const i = { metadata: { version: 4.6, type: 'Material', generator: 'Material.toJSON' } };
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== '' && (i.name = this.name),
      this.color && this.color.isColor && (i.color = this.color.getHex()),
      this.roughness !== void 0 && (i.roughness = this.roughness),
      this.metalness !== void 0 && (i.metalness = this.metalness),
      this.sheen !== void 0 && (i.sheen = this.sheen),
      this.sheenColor && this.sheenColor.isColor && (i.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 && (i.sheenRoughness = this.sheenRoughness),
      this.emissive && this.emissive.isColor && (i.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (i.emissiveIntensity = this.emissiveIntensity),
      this.specular && this.specular.isColor && (i.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 && (i.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (i.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (i.shininess = this.shininess),
      this.clearcoat !== void 0 && (i.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 && (i.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (i.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (i.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((i.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (i.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (i.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 && (i.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (i.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (i.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (i.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (i.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 && (i.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (i.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (i.map = this.map.toJSON(e).uuid),
      this.matcap && this.matcap.isTexture && (i.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap && this.alphaMap.isTexture && (i.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((i.lightMap = this.lightMap.toJSON(e).uuid),
        (i.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((i.aoMap = this.aoMap.toJSON(e).uuid), (i.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((i.bumpMap = this.bumpMap.toJSON(e).uuid), (i.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((i.normalMap = this.normalMap.toJSON(e).uuid),
        (i.normalMapType = this.normalMapType),
        (i.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((i.displacementMap = this.displacementMap.toJSON(e).uuid),
        (i.displacementScale = this.displacementScale),
        (i.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (i.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (i.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (i.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (i.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (i.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (i.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((i.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (i.combine = this.combine)),
      this.envMapRotation !== void 0 && (i.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 && (i.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (i.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 && (i.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (i.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (i.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (i.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (i.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (i.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (i.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 && (i.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (i.size = this.size),
      this.shadowSide !== null && (i.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 && (i.sizeAttenuation = this.sizeAttenuation),
      this.blending !== fs && (i.blending = this.blending),
      this.side !== ji && (i.side = this.side),
      this.vertexColors === !0 && (i.vertexColors = !0),
      this.opacity < 1 && (i.opacity = this.opacity),
      this.transparent === !0 && (i.transparent = !0),
      this.blendSrc !== Wu && (i.blendSrc = this.blendSrc),
      this.blendDst !== ju && (i.blendDst = this.blendDst),
      this.blendEquation !== cr && (i.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (i.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (i.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null && (i.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor && this.blendColor.isColor && (i.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (i.blendAlpha = this.blendAlpha),
      this.depthFunc !== dl && (i.depthFunc = this.depthFunc),
      this.depthTest === !1 && (i.depthTest = this.depthTest),
      this.depthWrite === !1 && (i.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (i.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 && (i.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== $h && (i.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (i.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 && (i.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== Pr && (i.stencilFail = this.stencilFail),
      this.stencilZFail !== Pr && (i.stencilZFail = this.stencilZFail),
      this.stencilZPass !== Pr && (i.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (i.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 && this.rotation !== 0 && (i.rotation = this.rotation),
      this.polygonOffset === !0 && (i.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 && (i.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 && (i.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 && this.linewidth !== 1 && (i.linewidth = this.linewidth),
      this.dashSize !== void 0 && (i.dashSize = this.dashSize),
      this.gapSize !== void 0 && (i.gapSize = this.gapSize),
      this.scale !== void 0 && (i.scale = this.scale),
      this.dithering === !0 && (i.dithering = !0),
      this.alphaTest > 0 && (i.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (i.alphaHash = !0),
      this.alphaToCoverage === !0 && (i.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (i.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (i.forceSinglePass = !0),
      this.wireframe === !0 && (i.wireframe = !0),
      this.wireframeLinewidth > 1 && (i.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== 'round' && (i.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== 'round' && (i.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (i.flatShading = !0),
      this.visible === !1 && (i.visible = !1),
      this.toneMapped === !1 && (i.toneMapped = !1),
      this.fog === !1 && (i.fog = !1),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData);
    function r(s) {
      const a = [];
      for (const o in s) {
        const l = s[o];
        delete l.metadata, a.push(l);
      }
      return a;
    }
    if (n) {
      const s = r(e.textures),
        a = r(e.images);
      s.length > 0 && (i.textures = s), a.length > 0 && (i.images = a);
    }
    return i;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const n = e.clippingPlanes;
    let i = null;
    if (n !== null) {
      const r = n.length;
      i = new Array(r);
      for (let s = 0; s !== r; ++s) i[s] = n[s].clone();
    }
    return (
      (this.clippingPlanes = i),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class T0 extends Ua {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = 'MeshBasicMaterial'),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new pi()),
      (this.combine = l0),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = 'round'),
      (this.wireframeLinejoin = 'round'),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const _t = new F(),
  uo = new je();
class Xn {
  constructor(e, n, i = !1) {
    if (Array.isArray(e))
      throw new TypeError('THREE.BufferAttribute: array should be a Typed Array.');
    (this.isBufferAttribute = !0),
      (this.name = ''),
      (this.array = e),
      (this.itemSize = n),
      (this.count = e !== void 0 ? e.length / n : 0),
      (this.normalized = i),
      (this.usage = Kh),
      (this._updateRange = { offset: 0, count: -1 }),
      (this.updateRanges = []),
      (this.gpuType = ri),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  get updateRange() {
    return (
      Fy(
        'THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.',
      ),
      this._updateRange
    );
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  addUpdateRange(e, n) {
    this.updateRanges.push({ start: e, count: n });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, n, i) {
    (e *= this.itemSize), (i *= n.itemSize);
    for (let r = 0, s = this.itemSize; r < s; r++) this.array[e + r] = n.array[i + r];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let n = 0, i = this.count; n < i; n++)
        uo.fromBufferAttribute(this, n), uo.applyMatrix3(e), this.setXY(n, uo.x, uo.y);
    else if (this.itemSize === 3)
      for (let n = 0, i = this.count; n < i; n++)
        _t.fromBufferAttribute(this, n), _t.applyMatrix3(e), this.setXYZ(n, _t.x, _t.y, _t.z);
    return this;
  }
  applyMatrix4(e) {
    for (let n = 0, i = this.count; n < i; n++)
      _t.fromBufferAttribute(this, n), _t.applyMatrix4(e), this.setXYZ(n, _t.x, _t.y, _t.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let n = 0, i = this.count; n < i; n++)
      _t.fromBufferAttribute(this, n), _t.applyNormalMatrix(e), this.setXYZ(n, _t.x, _t.y, _t.z);
    return this;
  }
  transformDirection(e) {
    for (let n = 0, i = this.count; n < i; n++)
      _t.fromBufferAttribute(this, n), _t.transformDirection(e), this.setXYZ(n, _t.x, _t.y, _t.z);
    return this;
  }
  set(e, n = 0) {
    return this.array.set(e, n), this;
  }
  getComponent(e, n) {
    let i = this.array[e * this.itemSize + n];
    return this.normalized && (i = Hs(i, this.array)), i;
  }
  setComponent(e, n, i) {
    return (
      this.normalized && (i = Yt(i, this.array)), (this.array[e * this.itemSize + n] = i), this
    );
  }
  getX(e) {
    let n = this.array[e * this.itemSize];
    return this.normalized && (n = Hs(n, this.array)), n;
  }
  setX(e, n) {
    return this.normalized && (n = Yt(n, this.array)), (this.array[e * this.itemSize] = n), this;
  }
  getY(e) {
    let n = this.array[e * this.itemSize + 1];
    return this.normalized && (n = Hs(n, this.array)), n;
  }
  setY(e, n) {
    return (
      this.normalized && (n = Yt(n, this.array)), (this.array[e * this.itemSize + 1] = n), this
    );
  }
  getZ(e) {
    let n = this.array[e * this.itemSize + 2];
    return this.normalized && (n = Hs(n, this.array)), n;
  }
  setZ(e, n) {
    return (
      this.normalized && (n = Yt(n, this.array)), (this.array[e * this.itemSize + 2] = n), this
    );
  }
  getW(e) {
    let n = this.array[e * this.itemSize + 3];
    return this.normalized && (n = Hs(n, this.array)), n;
  }
  setW(e, n) {
    return (
      this.normalized && (n = Yt(n, this.array)), (this.array[e * this.itemSize + 3] = n), this
    );
  }
  setXY(e, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized && ((n = Yt(n, this.array)), (i = Yt(i, this.array))),
      (this.array[e + 0] = n),
      (this.array[e + 1] = i),
      this
    );
  }
  setXYZ(e, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((n = Yt(n, this.array)), (i = Yt(i, this.array)), (r = Yt(r, this.array))),
      (this.array[e + 0] = n),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      this
    );
  }
  setXYZW(e, n, i, r, s) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((n = Yt(n, this.array)),
        (i = Yt(i, this.array)),
        (r = Yt(r, this.array)),
        (s = Yt(s, this.array))),
      (this.array[e + 0] = n),
      (this.array[e + 1] = i),
      (this.array[e + 2] = r),
      (this.array[e + 3] = s),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return this.name !== '' && (e.name = this.name), this.usage !== Kh && (e.usage = this.usage), e;
  }
}
class A0 extends Xn {
  constructor(e, n, i) {
    super(new Uint16Array(e), n, i);
  }
}
class b0 extends Xn {
  constructor(e, n, i) {
    super(new Uint32Array(e), n, i);
  }
}
class qn extends Xn {
  constructor(e, n, i) {
    super(new Float32Array(e), n, i);
  }
}
let Zy = 0;
const _n = new dt(),
  zc = new jt(),
  zr = new F(),
  on = new Da(),
  js = new Da(),
  Tt = new F();
class gi extends Cs {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, 'id', { value: Zy++ }),
      (this.uuid = Na()),
      (this.name = ''),
      (this.type = 'BufferGeometry'),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return Array.isArray(e) ? (this.index = new (_0(e) ? b0 : A0)(e, 1)) : (this.index = e), this;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, n) {
    return (this.attributes[e] = n), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, n, i = 0) {
    this.groups.push({ start: e, count: n, materialIndex: i });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, n) {
    (this.drawRange.start = e), (this.drawRange.count = n);
  }
  applyMatrix4(e) {
    const n = this.attributes.position;
    n !== void 0 && (n.applyMatrix4(e), (n.needsUpdate = !0));
    const i = this.attributes.normal;
    if (i !== void 0) {
      const s = new Ie().getNormalMatrix(e);
      i.applyNormalMatrix(s), (i.needsUpdate = !0);
    }
    const r = this.attributes.tangent;
    return (
      r !== void 0 && (r.transformDirection(e), (r.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return _n.makeRotationFromQuaternion(e), this.applyMatrix4(_n), this;
  }
  rotateX(e) {
    return _n.makeRotationX(e), this.applyMatrix4(_n), this;
  }
  rotateY(e) {
    return _n.makeRotationY(e), this.applyMatrix4(_n), this;
  }
  rotateZ(e) {
    return _n.makeRotationZ(e), this.applyMatrix4(_n), this;
  }
  translate(e, n, i) {
    return _n.makeTranslation(e, n, i), this.applyMatrix4(_n), this;
  }
  scale(e, n, i) {
    return _n.makeScale(e, n, i), this.applyMatrix4(_n), this;
  }
  lookAt(e) {
    return zc.lookAt(e), zc.updateMatrix(), this.applyMatrix4(zc.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(zr).negate(),
      this.translate(zr.x, zr.y, zr.z),
      this
    );
  }
  setFromPoints(e) {
    const n = [];
    for (let i = 0, r = e.length; i < r; i++) {
      const s = e[i];
      n.push(s.x, s.y, s.z || 0);
    }
    return this.setAttribute('position', new qn(n, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new Da());
    const e = this.attributes.position,
      n = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.',
        this,
      ),
        this.boundingBox.set(new F(-1 / 0, -1 / 0, -1 / 0), new F(1 / 0, 1 / 0, 1 / 0));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), n))
        for (let i = 0, r = n.length; i < r; i++) {
          const s = n[i];
          on.setFromBufferAttribute(s),
            this.morphTargetsRelative
              ? (Tt.addVectors(this.boundingBox.min, on.min),
                this.boundingBox.expandByPoint(Tt),
                Tt.addVectors(this.boundingBox.max, on.max),
                this.boundingBox.expandByPoint(Tt))
              : (this.boundingBox.expandByPoint(on.min), this.boundingBox.expandByPoint(on.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Fl());
    const e = this.attributes.position,
      n = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.',
        this,
      ),
        this.boundingSphere.set(new F(), 1 / 0);
      return;
    }
    if (e) {
      const i = this.boundingSphere.center;
      if ((on.setFromBufferAttribute(e), n))
        for (let s = 0, a = n.length; s < a; s++) {
          const o = n[s];
          js.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Tt.addVectors(on.min, js.min),
                on.expandByPoint(Tt),
                Tt.addVectors(on.max, js.max),
                on.expandByPoint(Tt))
              : (on.expandByPoint(js.min), on.expandByPoint(js.max));
        }
      on.getCenter(i);
      let r = 0;
      for (let s = 0, a = e.count; s < a; s++)
        Tt.fromBufferAttribute(e, s), (r = Math.max(r, i.distanceToSquared(Tt)));
      if (n)
        for (let s = 0, a = n.length; s < a; s++) {
          const o = n[s],
            l = this.morphTargetsRelative;
          for (let c = 0, d = o.count; c < d; c++)
            Tt.fromBufferAttribute(o, c),
              l && (zr.fromBufferAttribute(e, c), Tt.add(zr)),
              (r = Math.max(r, i.distanceToSquared(Tt)));
        }
      (this.boundingSphere.radius = Math.sqrt(r)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          );
    }
  }
  computeTangents() {
    const e = this.index,
      n = this.attributes;
    if (e === null || n.position === void 0 || n.normal === void 0 || n.uv === void 0) {
      console.error(
        'THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)',
      );
      return;
    }
    const i = n.position,
      r = n.normal,
      s = n.uv;
    this.hasAttribute('tangent') === !1 &&
      this.setAttribute('tangent', new Xn(new Float32Array(4 * i.count), 4));
    const a = this.getAttribute('tangent'),
      o = [],
      l = [];
    for (let D = 0; D < i.count; D++) (o[D] = new F()), (l[D] = new F());
    const c = new F(),
      d = new F(),
      f = new F(),
      h = new je(),
      g = new je(),
      v = new je(),
      y = new F(),
      p = new F();
    function u(D, Y, S) {
      c.fromBufferAttribute(i, D),
        d.fromBufferAttribute(i, Y),
        f.fromBufferAttribute(i, S),
        h.fromBufferAttribute(s, D),
        g.fromBufferAttribute(s, Y),
        v.fromBufferAttribute(s, S),
        d.sub(c),
        f.sub(c),
        g.sub(h),
        v.sub(h);
      const R = 1 / (g.x * v.y - v.x * g.y);
      isFinite(R) &&
        (y.copy(d).multiplyScalar(v.y).addScaledVector(f, -g.y).multiplyScalar(R),
        p.copy(f).multiplyScalar(g.x).addScaledVector(d, -v.x).multiplyScalar(R),
        o[D].add(y),
        o[Y].add(y),
        o[S].add(y),
        l[D].add(p),
        l[Y].add(p),
        l[S].add(p));
    }
    let _ = this.groups;
    _.length === 0 && (_ = [{ start: 0, count: e.count }]);
    for (let D = 0, Y = _.length; D < Y; ++D) {
      const S = _[D],
        R = S.start,
        ne = S.count;
      for (let J = R, L = R + ne; J < L; J += 3) u(e.getX(J + 0), e.getX(J + 1), e.getX(J + 2));
    }
    const x = new F(),
      E = new F(),
      C = new F(),
      b = new F();
    function T(D) {
      C.fromBufferAttribute(r, D), b.copy(C);
      const Y = o[D];
      x.copy(Y), x.sub(C.multiplyScalar(C.dot(Y))).normalize(), E.crossVectors(b, Y);
      const R = E.dot(l[D]) < 0 ? -1 : 1;
      a.setXYZW(D, x.x, x.y, x.z, R);
    }
    for (let D = 0, Y = _.length; D < Y; ++D) {
      const S = _[D],
        R = S.start,
        ne = S.count;
      for (let J = R, L = R + ne; J < L; J += 3)
        T(e.getX(J + 0)), T(e.getX(J + 1)), T(e.getX(J + 2));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      n = this.getAttribute('position');
    if (n !== void 0) {
      let i = this.getAttribute('normal');
      if (i === void 0)
        (i = new Xn(new Float32Array(n.count * 3), 3)), this.setAttribute('normal', i);
      else for (let h = 0, g = i.count; h < g; h++) i.setXYZ(h, 0, 0, 0);
      const r = new F(),
        s = new F(),
        a = new F(),
        o = new F(),
        l = new F(),
        c = new F(),
        d = new F(),
        f = new F();
      if (e)
        for (let h = 0, g = e.count; h < g; h += 3) {
          const v = e.getX(h + 0),
            y = e.getX(h + 1),
            p = e.getX(h + 2);
          r.fromBufferAttribute(n, v),
            s.fromBufferAttribute(n, y),
            a.fromBufferAttribute(n, p),
            d.subVectors(a, s),
            f.subVectors(r, s),
            d.cross(f),
            o.fromBufferAttribute(i, v),
            l.fromBufferAttribute(i, y),
            c.fromBufferAttribute(i, p),
            o.add(d),
            l.add(d),
            c.add(d),
            i.setXYZ(v, o.x, o.y, o.z),
            i.setXYZ(y, l.x, l.y, l.z),
            i.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let h = 0, g = n.count; h < g; h += 3)
          r.fromBufferAttribute(n, h + 0),
            s.fromBufferAttribute(n, h + 1),
            a.fromBufferAttribute(n, h + 2),
            d.subVectors(a, s),
            f.subVectors(r, s),
            d.cross(f),
            i.setXYZ(h + 0, d.x, d.y, d.z),
            i.setXYZ(h + 1, d.x, d.y, d.z),
            i.setXYZ(h + 2, d.x, d.y, d.z);
      this.normalizeNormals(), (i.needsUpdate = !0);
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let n = 0, i = e.count; n < i; n++)
      Tt.fromBufferAttribute(e, n), Tt.normalize(), e.setXYZ(n, Tt.x, Tt.y, Tt.z);
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        d = o.itemSize,
        f = o.normalized,
        h = new c.constructor(l.length * d);
      let g = 0,
        v = 0;
      for (let y = 0, p = l.length; y < p; y++) {
        o.isInterleavedBufferAttribute ? (g = l[y] * o.data.stride + o.offset) : (g = l[y] * d);
        for (let u = 0; u < d; u++) h[v++] = c[g++];
      }
      return new Xn(h, d, f);
    }
    if (this.index === null)
      return (
        console.warn('THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.'),
        this
      );
    const n = new gi(),
      i = this.index.array,
      r = this.attributes;
    for (const o in r) {
      const l = r[o],
        c = e(l, i);
      n.setAttribute(o, c);
    }
    const s = this.morphAttributes;
    for (const o in s) {
      const l = [],
        c = s[o];
      for (let d = 0, f = c.length; d < f; d++) {
        const h = c[d],
          g = e(h, i);
        l.push(g);
      }
      n.morphAttributes[o] = l;
    }
    n.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      n.addGroup(c.start, c.count, c.materialIndex);
    }
    return n;
  }
  toJSON() {
    const e = {
      metadata: { version: 4.6, type: 'BufferGeometry', generator: 'BufferGeometry.toJSON' },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== '' && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const n = this.index;
    n !== null &&
      (e.data.index = {
        type: n.array.constructor.name,
        array: Array.prototype.slice.call(n.array),
      });
    const i = this.attributes;
    for (const l in i) {
      const c = i[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const r = {};
    let s = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        d = [];
      for (let f = 0, h = c.length; f < h; f++) {
        const g = c[f];
        d.push(g.toJSON(e.data));
      }
      d.length > 0 && ((r[l] = d), (s = !0));
    }
    s && ((e.data.morphAttributes = r), (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (
      o !== null && (e.data.boundingSphere = { center: o.center.toArray(), radius: o.radius }), e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const n = {};
    this.name = e.name;
    const i = e.index;
    i !== null && this.setIndex(i.clone(n));
    const r = e.attributes;
    for (const c in r) {
      const d = r[c];
      this.setAttribute(c, d.clone(n));
    }
    const s = e.morphAttributes;
    for (const c in s) {
      const d = [],
        f = s[c];
      for (let h = 0, g = f.length; h < g; h++) d.push(f[h].clone(n));
      this.morphAttributes[c] = d;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, d = a.length; c < d; c++) {
      const f = a[c];
      this.addGroup(f.start, f.count, f.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: 'dispose' });
  }
}
const up = new dt(),
  tr = new M0(),
  fo = new Fl(),
  dp = new F(),
  Br = new F(),
  Hr = new F(),
  Gr = new F(),
  Bc = new F(),
  ho = new F(),
  po = new je(),
  mo = new je(),
  go = new je(),
  fp = new F(),
  hp = new F(),
  pp = new F(),
  xo = new F(),
  _o = new F();
class li extends jt {
  constructor(e = new gi(), n = new T0()) {
    super(),
      (this.isMesh = !0),
      (this.type = 'Mesh'),
      (this.geometry = e),
      (this.material = n),
      this.updateMorphTargets();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
      (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const n = this.geometry.morphAttributes,
      i = Object.keys(n);
    if (i.length > 0) {
      const r = n[i[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
  getVertexPosition(e, n) {
    const i = this.geometry,
      r = i.attributes.position,
      s = i.morphAttributes.position,
      a = i.morphTargetsRelative;
    n.fromBufferAttribute(r, e);
    const o = this.morphTargetInfluences;
    if (s && o) {
      ho.set(0, 0, 0);
      for (let l = 0, c = s.length; l < c; l++) {
        const d = o[l],
          f = s[l];
        d !== 0 &&
          (Bc.fromBufferAttribute(f, e),
          a ? ho.addScaledVector(Bc, d) : ho.addScaledVector(Bc.sub(n), d));
      }
      n.add(ho);
    }
    return n;
  }
  raycast(e, n) {
    const i = this.geometry,
      r = this.material,
      s = this.matrixWorld;
    r !== void 0 &&
      (i.boundingSphere === null && i.computeBoundingSphere(),
      fo.copy(i.boundingSphere),
      fo.applyMatrix4(s),
      tr.copy(e.ray).recast(e.near),
      !(
        fo.containsPoint(tr.origin) === !1 &&
        (tr.intersectSphere(fo, dp) === null ||
          tr.origin.distanceToSquared(dp) > (e.far - e.near) ** 2)
      ) &&
        (up.copy(s).invert(),
        tr.copy(e.ray).applyMatrix4(up),
        !(i.boundingBox !== null && tr.intersectsBox(i.boundingBox) === !1) &&
          this._computeIntersections(e, n, tr)));
  }
  _computeIntersections(e, n, i) {
    let r;
    const s = this.geometry,
      a = this.material,
      o = s.index,
      l = s.attributes.position,
      c = s.attributes.uv,
      d = s.attributes.uv1,
      f = s.attributes.normal,
      h = s.groups,
      g = s.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let v = 0, y = h.length; v < y; v++) {
          const p = h[v],
            u = a[p.materialIndex],
            _ = Math.max(p.start, g.start),
            x = Math.min(o.count, Math.min(p.start + p.count, g.start + g.count));
          for (let E = _, C = x; E < C; E += 3) {
            const b = o.getX(E),
              T = o.getX(E + 1),
              D = o.getX(E + 2);
            (r = vo(this, u, e, i, c, d, f, b, T, D)),
              r &&
                ((r.faceIndex = Math.floor(E / 3)),
                (r.face.materialIndex = p.materialIndex),
                n.push(r));
          }
        }
      else {
        const v = Math.max(0, g.start),
          y = Math.min(o.count, g.start + g.count);
        for (let p = v, u = y; p < u; p += 3) {
          const _ = o.getX(p),
            x = o.getX(p + 1),
            E = o.getX(p + 2);
          (r = vo(this, a, e, i, c, d, f, _, x, E)),
            r && ((r.faceIndex = Math.floor(p / 3)), n.push(r));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let v = 0, y = h.length; v < y; v++) {
          const p = h[v],
            u = a[p.materialIndex],
            _ = Math.max(p.start, g.start),
            x = Math.min(l.count, Math.min(p.start + p.count, g.start + g.count));
          for (let E = _, C = x; E < C; E += 3) {
            const b = E,
              T = E + 1,
              D = E + 2;
            (r = vo(this, u, e, i, c, d, f, b, T, D)),
              r &&
                ((r.faceIndex = Math.floor(E / 3)),
                (r.face.materialIndex = p.materialIndex),
                n.push(r));
          }
        }
      else {
        const v = Math.max(0, g.start),
          y = Math.min(l.count, g.start + g.count);
        for (let p = v, u = y; p < u; p += 3) {
          const _ = p,
            x = p + 1,
            E = p + 2;
          (r = vo(this, a, e, i, c, d, f, _, x, E)),
            r && ((r.faceIndex = Math.floor(p / 3)), n.push(r));
        }
      }
  }
}
function Qy(t, e, n, i, r, s, a, o) {
  let l;
  if (
    (e.side === nn
      ? (l = i.intersectTriangle(a, s, r, !0, o))
      : (l = i.intersectTriangle(r, s, a, e.side === ji, o)),
    l === null)
  )
    return null;
  _o.copy(o), _o.applyMatrix4(t.matrixWorld);
  const c = n.ray.origin.distanceTo(_o);
  return c < n.near || c > n.far ? null : { distance: c, point: _o.clone(), object: t };
}
function vo(t, e, n, i, r, s, a, o, l, c) {
  t.getVertexPosition(o, Br), t.getVertexPosition(l, Hr), t.getVertexPosition(c, Gr);
  const d = Qy(t, e, n, i, Br, Hr, Gr, xo);
  if (d) {
    r &&
      (po.fromBufferAttribute(r, o),
      mo.fromBufferAttribute(r, l),
      go.fromBufferAttribute(r, c),
      (d.uv = Vn.getInterpolation(xo, Br, Hr, Gr, po, mo, go, new je()))),
      s &&
        (po.fromBufferAttribute(s, o),
        mo.fromBufferAttribute(s, l),
        go.fromBufferAttribute(s, c),
        (d.uv1 = Vn.getInterpolation(xo, Br, Hr, Gr, po, mo, go, new je()))),
      a &&
        (fp.fromBufferAttribute(a, o),
        hp.fromBufferAttribute(a, l),
        pp.fromBufferAttribute(a, c),
        (d.normal = Vn.getInterpolation(xo, Br, Hr, Gr, fp, hp, pp, new F())),
        d.normal.dot(i.direction) > 0 && d.normal.multiplyScalar(-1));
    const f = { a: o, b: l, c, normal: new F(), materialIndex: 0 };
    Vn.getNormal(Br, Hr, Gr, f.normal), (d.face = f);
  }
  return d;
}
class Ia extends gi {
  constructor(e = 1, n = 1, i = 1, r = 1, s = 1, a = 1) {
    super(),
      (this.type = 'BoxGeometry'),
      (this.parameters = {
        width: e,
        height: n,
        depth: i,
        widthSegments: r,
        heightSegments: s,
        depthSegments: a,
      });
    const o = this;
    (r = Math.floor(r)), (s = Math.floor(s)), (a = Math.floor(a));
    const l = [],
      c = [],
      d = [],
      f = [];
    let h = 0,
      g = 0;
    v('z', 'y', 'x', -1, -1, i, n, e, a, s, 0),
      v('z', 'y', 'x', 1, -1, i, n, -e, a, s, 1),
      v('x', 'z', 'y', 1, 1, e, i, n, r, a, 2),
      v('x', 'z', 'y', 1, -1, e, i, -n, r, a, 3),
      v('x', 'y', 'z', 1, -1, e, n, i, r, s, 4),
      v('x', 'y', 'z', -1, -1, e, n, -i, r, s, 5),
      this.setIndex(l),
      this.setAttribute('position', new qn(c, 3)),
      this.setAttribute('normal', new qn(d, 3)),
      this.setAttribute('uv', new qn(f, 2));
    function v(y, p, u, _, x, E, C, b, T, D, Y) {
      const S = E / T,
        R = C / D,
        ne = E / 2,
        J = C / 2,
        L = b / 2,
        X = T + 1,
        j = D + 1;
      let $ = 0,
        P = 0;
      const O = new F();
      for (let V = 0; V < j; V++) {
        const K = V * R - J;
        for (let se = 0; se < X; se++) {
          const Te = se * S - ne;
          (O[y] = Te * _),
            (O[p] = K * x),
            (O[u] = L),
            c.push(O.x, O.y, O.z),
            (O[y] = 0),
            (O[p] = 0),
            (O[u] = b > 0 ? 1 : -1),
            d.push(O.x, O.y, O.z),
            f.push(se / T),
            f.push(1 - V / D),
            ($ += 1);
        }
      }
      for (let V = 0; V < D; V++)
        for (let K = 0; K < T; K++) {
          const se = h + K + X * V,
            Te = h + K + X * (V + 1),
            H = h + (K + 1) + X * (V + 1),
            Z = h + (K + 1) + X * V;
          l.push(se, Te, Z), l.push(Te, H, Z), (P += 6);
        }
      o.addGroup(g, P, Y), (g += P), (h += $);
    }
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new Ia(e.width, e.height, e.depth, e.widthSegments, e.heightSegments, e.depthSegments);
  }
}
function Ts(t) {
  const e = {};
  for (const n in t) {
    e[n] = {};
    for (const i in t[n]) {
      const r = t[n][i];
      r &&
      (r.isColor ||
        r.isMatrix3 ||
        r.isMatrix4 ||
        r.isVector2 ||
        r.isVector3 ||
        r.isVector4 ||
        r.isTexture ||
        r.isQuaternion)
        ? r.isRenderTargetTexture
          ? (console.warn(
              'UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().',
            ),
            (e[n][i] = null))
          : (e[n][i] = r.clone())
        : Array.isArray(r)
        ? (e[n][i] = r.slice())
        : (e[n][i] = r);
    }
  }
  return e;
}
function Ht(t) {
  const e = {};
  for (let n = 0; n < t.length; n++) {
    const i = Ts(t[n]);
    for (const r in i) e[r] = i[r];
  }
  return e;
}
function Jy(t) {
  const e = [];
  for (let n = 0; n < t.length; n++) e.push(t[n].clone());
  return e;
}
function R0(t) {
  return t.getRenderTarget() === null ? t.outputColorSpace : Ke.workingColorSpace;
}
const eS = { clone: Ts, merge: Ht };
var tS = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  nS = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Xi extends Ua {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = 'ShaderMaterial'),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = tS),
      (this.fragmentShader = nS),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
        clipCullDistance: !1,
        multiDraw: !1,
      }),
      (this.defaultAttributeValues = { color: [1, 1, 1], uv: [0, 0], uv1: [0, 0] }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Ts(e.uniforms)),
      (this.uniformsGroups = Jy(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const n = super.toJSON(e);
    (n.glslVersion = this.glslVersion), (n.uniforms = {});
    for (const r in this.uniforms) {
      const a = this.uniforms[r].value;
      a && a.isTexture
        ? (n.uniforms[r] = { type: 't', value: a.toJSON(e).uuid })
        : a && a.isColor
        ? (n.uniforms[r] = { type: 'c', value: a.getHex() })
        : a && a.isVector2
        ? (n.uniforms[r] = { type: 'v2', value: a.toArray() })
        : a && a.isVector3
        ? (n.uniforms[r] = { type: 'v3', value: a.toArray() })
        : a && a.isVector4
        ? (n.uniforms[r] = { type: 'v4', value: a.toArray() })
        : a && a.isMatrix3
        ? (n.uniforms[r] = { type: 'm3', value: a.toArray() })
        : a && a.isMatrix4
        ? (n.uniforms[r] = { type: 'm4', value: a.toArray() })
        : (n.uniforms[r] = { value: a });
    }
    Object.keys(this.defines).length > 0 && (n.defines = this.defines),
      (n.vertexShader = this.vertexShader),
      (n.fragmentShader = this.fragmentShader),
      (n.lights = this.lights),
      (n.clipping = this.clipping);
    const i = {};
    for (const r in this.extensions) this.extensions[r] === !0 && (i[r] = !0);
    return Object.keys(i).length > 0 && (n.extensions = i), n;
  }
}
class C0 extends jt {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = 'Camera'),
      (this.matrixWorldInverse = new dt()),
      (this.projectionMatrix = new dt()),
      (this.projectionMatrixInverse = new dt()),
      (this.coordinateSystem = oi);
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, n) {
    super.updateWorldMatrix(e, n), this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Ei = new F(),
  mp = new je(),
  gp = new je();
class cn extends C0 {
  constructor(e = 50, n = 1, i = 0.1, r = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = 'PerspectiveCamera'),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = i),
      (this.far = r),
      (this.focus = 10),
      (this.aspect = n),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const n = (0.5 * this.getFilmHeight()) / e;
    (this.fov = Zu * 2 * Math.atan(n)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(Sc * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Zu * 2 * Math.atan(Math.tan(Sc * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, n, i) {
    Ei.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(Ei.x, Ei.y).multiplyScalar(-e / Ei.z),
      Ei.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      i.set(Ei.x, Ei.y).multiplyScalar(-e / Ei.z);
  }
  getViewSize(e, n) {
    return this.getViewBounds(e, mp, gp), n.subVectors(gp, mp);
  }
  setViewOffset(e, n, i, r, s, a) {
    (this.aspect = e / n),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = n),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let n = (e * Math.tan(Sc * 0.5 * this.fov)) / this.zoom,
      i = 2 * n,
      r = this.aspect * i,
      s = -0.5 * r;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      (s += (a.offsetX * r) / l),
        (n -= (a.offsetY * i) / c),
        (r *= a.width / l),
        (i *= a.height / c);
    }
    const o = this.filmOffset;
    o !== 0 && (s += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(s, s + r, n, n - i, e, this.far, this.coordinateSystem),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      (n.object.fov = this.fov),
      (n.object.zoom = this.zoom),
      (n.object.near = this.near),
      (n.object.far = this.far),
      (n.object.focus = this.focus),
      (n.object.aspect = this.aspect),
      this.view !== null && (n.object.view = Object.assign({}, this.view)),
      (n.object.filmGauge = this.filmGauge),
      (n.object.filmOffset = this.filmOffset),
      n
    );
  }
}
const Vr = -90,
  Wr = 1;
class iS extends jt {
  constructor(e, n, i) {
    super(),
      (this.type = 'CubeCamera'),
      (this.renderTarget = i),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0);
    const r = new cn(Vr, Wr, e, n);
    (r.layers = this.layers), this.add(r);
    const s = new cn(Vr, Wr, e, n);
    (s.layers = this.layers), this.add(s);
    const a = new cn(Vr, Wr, e, n);
    (a.layers = this.layers), this.add(a);
    const o = new cn(Vr, Wr, e, n);
    (o.layers = this.layers), this.add(o);
    const l = new cn(Vr, Wr, e, n);
    (l.layers = this.layers), this.add(l);
    const c = new cn(Vr, Wr, e, n);
    (c.layers = this.layers), this.add(c);
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      n = this.children.concat(),
      [i, r, s, a, o, l] = n;
    for (const c of n) this.remove(c);
    if (e === oi)
      i.up.set(0, 1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 1, 0),
        r.lookAt(-1, 0, 0),
        s.up.set(0, 0, -1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1);
    else if (e === ml)
      i.up.set(0, -1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, -1, 0),
        r.lookAt(1, 0, 0),
        s.up.set(0, 0, 1),
        s.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1);
    else
      throw new Error('THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: ' + e);
    for (const c of n) this.add(c), c.updateMatrixWorld();
  }
  update(e, n) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: i, activeMipmapLevel: r } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem), this.updateCoordinateSystem());
    const [s, a, o, l, c, d] = this.children,
      f = e.getRenderTarget(),
      h = e.getActiveCubeFace(),
      g = e.getActiveMipmapLevel(),
      v = e.xr.enabled;
    e.xr.enabled = !1;
    const y = i.texture.generateMipmaps;
    (i.texture.generateMipmaps = !1),
      e.setRenderTarget(i, 0, r),
      e.render(n, s),
      e.setRenderTarget(i, 1, r),
      e.render(n, a),
      e.setRenderTarget(i, 2, r),
      e.render(n, o),
      e.setRenderTarget(i, 3, r),
      e.render(n, l),
      e.setRenderTarget(i, 4, r),
      e.render(n, c),
      (i.texture.generateMipmaps = y),
      e.setRenderTarget(i, 5, r),
      e.render(n, d),
      e.setRenderTarget(f, h, g),
      (e.xr.enabled = v),
      (i.texture.needsPMREMUpdate = !0);
  }
}
class P0 extends rn {
  constructor(e, n, i, r, s, a, o, l, c, d) {
    (e = e !== void 0 ? e : []),
      (n = n !== void 0 ? n : Ms),
      super(e, n, i, r, s, a, o, l, c, d),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class rS extends Tr {
  constructor(e = 1, n = {}) {
    super(e, e, n), (this.isWebGLCubeRenderTarget = !0);
    const i = { width: e, height: e, depth: 1 },
      r = [i, i, i, i, i, i];
    (this.texture = new P0(
      r,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.colorSpace,
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps = n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : $t);
  }
  fromEquirectangularTexture(e, n) {
    (this.texture.type = n.type),
      (this.texture.colorSpace = n.colorSpace),
      (this.texture.generateMipmaps = n.generateMipmaps),
      (this.texture.minFilter = n.minFilter),
      (this.texture.magFilter = n.magFilter);
    const i = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      r = new Ia(5, 5, 5),
      s = new Xi({
        name: 'CubemapFromEquirect',
        uniforms: Ts(i.uniforms),
        vertexShader: i.vertexShader,
        fragmentShader: i.fragmentShader,
        side: nn,
        blending: Bi,
      });
    s.uniforms.tEquirect.value = n;
    const a = new li(r, s),
      o = n.minFilter;
    return (
      n.minFilter === pr && (n.minFilter = $t),
      new iS(1, 10, this).update(e, a),
      (n.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, n, i, r) {
    const s = e.getRenderTarget();
    for (let a = 0; a < 6; a++) e.setRenderTarget(this, a), e.clear(n, i, r);
    e.setRenderTarget(s);
  }
}
const Hc = new F(),
  sS = new F(),
  aS = new Ie();
class or {
  constructor(e = new F(1, 0, 0), n = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = n);
  }
  set(e, n) {
    return this.normal.copy(e), (this.constant = n), this;
  }
  setComponents(e, n, i, r) {
    return this.normal.set(e, n, i), (this.constant = r), this;
  }
  setFromNormalAndCoplanarPoint(e, n) {
    return this.normal.copy(e), (this.constant = -n.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, n, i) {
    const r = Hc.subVectors(i, n).cross(sS.subVectors(e, n)).normalize();
    return this.setFromNormalAndCoplanarPoint(r, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, n) {
    return n.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, n) {
    const i = e.delta(Hc),
      r = this.normal.dot(i);
    if (r === 0) return this.distanceToPoint(e.start) === 0 ? n.copy(e.start) : null;
    const s = -(e.start.dot(this.normal) + this.constant) / r;
    return s < 0 || s > 1 ? null : n.copy(e.start).addScaledVector(i, s);
  }
  intersectsLine(e) {
    const n = this.distanceToPoint(e.start),
      i = this.distanceToPoint(e.end);
    return (n < 0 && i > 0) || (i < 0 && n > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, n) {
    const i = n || aS.getNormalMatrix(e),
      r = this.coplanarPoint(Hc).applyMatrix4(e),
      s = this.normal.applyMatrix3(i).normalize();
    return (this.constant = -r.dot(s)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const nr = new Fl(),
  yo = new F();
class Jd {
  constructor(e = new or(), n = new or(), i = new or(), r = new or(), s = new or(), a = new or()) {
    this.planes = [e, n, i, r, s, a];
  }
  set(e, n, i, r, s, a) {
    const o = this.planes;
    return o[0].copy(e), o[1].copy(n), o[2].copy(i), o[3].copy(r), o[4].copy(s), o[5].copy(a), this;
  }
  copy(e) {
    const n = this.planes;
    for (let i = 0; i < 6; i++) n[i].copy(e.planes[i]);
    return this;
  }
  setFromProjectionMatrix(e, n = oi) {
    const i = this.planes,
      r = e.elements,
      s = r[0],
      a = r[1],
      o = r[2],
      l = r[3],
      c = r[4],
      d = r[5],
      f = r[6],
      h = r[7],
      g = r[8],
      v = r[9],
      y = r[10],
      p = r[11],
      u = r[12],
      _ = r[13],
      x = r[14],
      E = r[15];
    if (
      (i[0].setComponents(l - s, h - c, p - g, E - u).normalize(),
      i[1].setComponents(l + s, h + c, p + g, E + u).normalize(),
      i[2].setComponents(l + a, h + d, p + v, E + _).normalize(),
      i[3].setComponents(l - a, h - d, p - v, E - _).normalize(),
      i[4].setComponents(l - o, h - f, p - y, E - x).normalize(),
      n === oi)
    )
      i[5].setComponents(l + o, h + f, p + y, E + x).normalize();
    else if (n === ml) i[5].setComponents(o, f, y, x).normalize();
    else
      throw new Error('THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: ' + n);
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      e.boundingSphere === null && e.computeBoundingSphere(),
        nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
    else {
      const n = e.geometry;
      n.boundingSphere === null && n.computeBoundingSphere(),
        nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld);
    }
    return this.intersectsSphere(nr);
  }
  intersectsSprite(e) {
    return (
      nr.center.set(0, 0, 0),
      (nr.radius = 0.7071067811865476),
      nr.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(nr)
    );
  }
  intersectsSphere(e) {
    const n = this.planes,
      i = e.center,
      r = -e.radius;
    for (let s = 0; s < 6; s++) if (n[s].distanceToPoint(i) < r) return !1;
    return !0;
  }
  intersectsBox(e) {
    const n = this.planes;
    for (let i = 0; i < 6; i++) {
      const r = n[i];
      if (
        ((yo.x = r.normal.x > 0 ? e.max.x : e.min.x),
        (yo.y = r.normal.y > 0 ? e.max.y : e.min.y),
        (yo.z = r.normal.z > 0 ? e.max.z : e.min.z),
        r.distanceToPoint(yo) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const n = this.planes;
    for (let i = 0; i < 6; i++) if (n[i].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function N0() {
  let t = null,
    e = !1,
    n = null,
    i = null;
  function r(s, a) {
    n(s, a), (i = t.requestAnimationFrame(r));
  }
  return {
    start: function () {
      e !== !0 && n !== null && ((i = t.requestAnimationFrame(r)), (e = !0));
    },
    stop: function () {
      t.cancelAnimationFrame(i), (e = !1);
    },
    setAnimationLoop: function (s) {
      n = s;
    },
    setContext: function (s) {
      t = s;
    },
  };
}
function oS(t, e) {
  const n = e.isWebGL2,
    i = new WeakMap();
  function r(c, d) {
    const f = c.array,
      h = c.usage,
      g = f.byteLength,
      v = t.createBuffer();
    t.bindBuffer(d, v), t.bufferData(d, f, h), c.onUploadCallback();
    let y;
    if (f instanceof Float32Array) y = t.FLOAT;
    else if (f instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (n) y = t.HALF_FLOAT;
        else
          throw new Error(
            'THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.',
          );
      else y = t.UNSIGNED_SHORT;
    else if (f instanceof Int16Array) y = t.SHORT;
    else if (f instanceof Uint32Array) y = t.UNSIGNED_INT;
    else if (f instanceof Int32Array) y = t.INT;
    else if (f instanceof Int8Array) y = t.BYTE;
    else if (f instanceof Uint8Array) y = t.UNSIGNED_BYTE;
    else if (f instanceof Uint8ClampedArray) y = t.UNSIGNED_BYTE;
    else throw new Error('THREE.WebGLAttributes: Unsupported buffer data format: ' + f);
    return {
      buffer: v,
      type: y,
      bytesPerElement: f.BYTES_PER_ELEMENT,
      version: c.version,
      size: g,
    };
  }
  function s(c, d, f) {
    const h = d.array,
      g = d._updateRange,
      v = d.updateRanges;
    if (
      (t.bindBuffer(f, c),
      g.count === -1 && v.length === 0 && t.bufferSubData(f, 0, h),
      v.length !== 0)
    ) {
      for (let y = 0, p = v.length; y < p; y++) {
        const u = v[y];
        n
          ? t.bufferSubData(f, u.start * h.BYTES_PER_ELEMENT, h, u.start, u.count)
          : t.bufferSubData(
              f,
              u.start * h.BYTES_PER_ELEMENT,
              h.subarray(u.start, u.start + u.count),
            );
      }
      d.clearUpdateRanges();
    }
    g.count !== -1 &&
      (n
        ? t.bufferSubData(f, g.offset * h.BYTES_PER_ELEMENT, h, g.offset, g.count)
        : t.bufferSubData(
            f,
            g.offset * h.BYTES_PER_ELEMENT,
            h.subarray(g.offset, g.offset + g.count),
          ),
      (g.count = -1)),
      d.onUploadCallback();
  }
  function a(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), i.get(c);
  }
  function o(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const d = i.get(c);
    d && (t.deleteBuffer(d.buffer), i.delete(c));
  }
  function l(c, d) {
    if (c.isGLBufferAttribute) {
      const h = i.get(c);
      (!h || h.version < c.version) &&
        i.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = i.get(c);
    if (f === void 0) i.set(c, r(c, d));
    else if (f.version < c.version) {
      if (f.size !== c.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      s(f.buffer, c, d), (f.version = c.version);
    }
  }
  return { get: a, remove: o, update: l };
}
class Ol extends gi {
  constructor(e = 1, n = 1, i = 1, r = 1) {
    super(),
      (this.type = 'PlaneGeometry'),
      (this.parameters = { width: e, height: n, widthSegments: i, heightSegments: r });
    const s = e / 2,
      a = n / 2,
      o = Math.floor(i),
      l = Math.floor(r),
      c = o + 1,
      d = l + 1,
      f = e / o,
      h = n / l,
      g = [],
      v = [],
      y = [],
      p = [];
    for (let u = 0; u < d; u++) {
      const _ = u * h - a;
      for (let x = 0; x < c; x++) {
        const E = x * f - s;
        v.push(E, -_, 0), y.push(0, 0, 1), p.push(x / o), p.push(1 - u / l);
      }
    }
    for (let u = 0; u < l; u++)
      for (let _ = 0; _ < o; _++) {
        const x = _ + c * u,
          E = _ + c * (u + 1),
          C = _ + 1 + c * (u + 1),
          b = _ + 1 + c * u;
        g.push(x, E, b), g.push(E, C, b);
      }
    this.setIndex(g),
      this.setAttribute('position', new qn(v, 3)),
      this.setAttribute('normal', new qn(y, 3)),
      this.setAttribute('uv', new qn(p, 2));
  }
  copy(e) {
    return super.copy(e), (this.parameters = Object.assign({}, e.parameters)), this;
  }
  static fromJSON(e) {
    return new Ol(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var lS = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  cS = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  uS = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  dS = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  fS = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  hS = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  pS = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  mS = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  gS = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  xS = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,
  _S = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  vS = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  yS = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  SS = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  MS = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ES = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  wS = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  TS = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  AS = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  bS = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  RS = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  CS = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  PS = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  NS = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  LS = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  DS = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  US = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  IS = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  FS = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  OS = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  kS = 'gl_FragColor = linearToOutputTexel( gl_FragColor );',
  zS = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,
  BS = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  HS = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  GS = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  VS = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  WS = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  jS = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  XS = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  qS = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  YS = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  $S = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  KS = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  ZS = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  QS = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  JS = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  eM = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  tM = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  nM = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  iM = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  rM = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  sM = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  aM = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  oM = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  lM = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  cM = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  uM = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  dM = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  fM = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  hM = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  pM = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  mM = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  gM = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  xM = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  _M = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  vM = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  yM = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  SM = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  MM = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  EM = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  wM = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  TM = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  AM = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  bM = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  RM = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  CM = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  PM = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  NM = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  LM = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  DM = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  UM = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  IM = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  FM = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  OM = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  kM = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  zM = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  BM = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  HM = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  GM = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  VM = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  WM = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  jM = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  XM = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  qM = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  YM = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  $M = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  KM = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  ZM = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  QM = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  JM = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  eE = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  tE = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  nE = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  iE = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  rE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  sE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  aE = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  oE = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const lE = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  cE = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  uE = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  dE = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  fE = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  hE = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  pE = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  mE = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  gE = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  xE = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  _E = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  vE = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  yE = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  SE = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  ME = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  EE = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  wE = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  TE = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  AE = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  bE = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  RE = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  CE = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  PE = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  NE = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  LE = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  DE = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  UE = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  IE = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  FE = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  OE = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  kE = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  zE = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  BE = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  HE = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Ue = {
    alphahash_fragment: lS,
    alphahash_pars_fragment: cS,
    alphamap_fragment: uS,
    alphamap_pars_fragment: dS,
    alphatest_fragment: fS,
    alphatest_pars_fragment: hS,
    aomap_fragment: pS,
    aomap_pars_fragment: mS,
    batching_pars_vertex: gS,
    batching_vertex: xS,
    begin_vertex: _S,
    beginnormal_vertex: vS,
    bsdfs: yS,
    iridescence_fragment: SS,
    bumpmap_pars_fragment: MS,
    clipping_planes_fragment: ES,
    clipping_planes_pars_fragment: wS,
    clipping_planes_pars_vertex: TS,
    clipping_planes_vertex: AS,
    color_fragment: bS,
    color_pars_fragment: RS,
    color_pars_vertex: CS,
    color_vertex: PS,
    common: NS,
    cube_uv_reflection_fragment: LS,
    defaultnormal_vertex: DS,
    displacementmap_pars_vertex: US,
    displacementmap_vertex: IS,
    emissivemap_fragment: FS,
    emissivemap_pars_fragment: OS,
    colorspace_fragment: kS,
    colorspace_pars_fragment: zS,
    envmap_fragment: BS,
    envmap_common_pars_fragment: HS,
    envmap_pars_fragment: GS,
    envmap_pars_vertex: VS,
    envmap_physical_pars_fragment: tM,
    envmap_vertex: WS,
    fog_vertex: jS,
    fog_pars_vertex: XS,
    fog_fragment: qS,
    fog_pars_fragment: YS,
    gradientmap_pars_fragment: $S,
    lightmap_fragment: KS,
    lightmap_pars_fragment: ZS,
    lights_lambert_fragment: QS,
    lights_lambert_pars_fragment: JS,
    lights_pars_begin: eM,
    lights_toon_fragment: nM,
    lights_toon_pars_fragment: iM,
    lights_phong_fragment: rM,
    lights_phong_pars_fragment: sM,
    lights_physical_fragment: aM,
    lights_physical_pars_fragment: oM,
    lights_fragment_begin: lM,
    lights_fragment_maps: cM,
    lights_fragment_end: uM,
    logdepthbuf_fragment: dM,
    logdepthbuf_pars_fragment: fM,
    logdepthbuf_pars_vertex: hM,
    logdepthbuf_vertex: pM,
    map_fragment: mM,
    map_pars_fragment: gM,
    map_particle_fragment: xM,
    map_particle_pars_fragment: _M,
    metalnessmap_fragment: vM,
    metalnessmap_pars_fragment: yM,
    morphinstance_vertex: SM,
    morphcolor_vertex: MM,
    morphnormal_vertex: EM,
    morphtarget_pars_vertex: wM,
    morphtarget_vertex: TM,
    normal_fragment_begin: AM,
    normal_fragment_maps: bM,
    normal_pars_fragment: RM,
    normal_pars_vertex: CM,
    normal_vertex: PM,
    normalmap_pars_fragment: NM,
    clearcoat_normal_fragment_begin: LM,
    clearcoat_normal_fragment_maps: DM,
    clearcoat_pars_fragment: UM,
    iridescence_pars_fragment: IM,
    opaque_fragment: FM,
    packing: OM,
    premultiplied_alpha_fragment: kM,
    project_vertex: zM,
    dithering_fragment: BM,
    dithering_pars_fragment: HM,
    roughnessmap_fragment: GM,
    roughnessmap_pars_fragment: VM,
    shadowmap_pars_fragment: WM,
    shadowmap_pars_vertex: jM,
    shadowmap_vertex: XM,
    shadowmask_pars_fragment: qM,
    skinbase_vertex: YM,
    skinning_pars_vertex: $M,
    skinning_vertex: KM,
    skinnormal_vertex: ZM,
    specularmap_fragment: QM,
    specularmap_pars_fragment: JM,
    tonemapping_fragment: eE,
    tonemapping_pars_fragment: tE,
    transmission_fragment: nE,
    transmission_pars_fragment: iE,
    uv_pars_fragment: rE,
    uv_pars_vertex: sE,
    uv_vertex: aE,
    worldpos_vertex: oE,
    background_vert: lE,
    background_frag: cE,
    backgroundCube_vert: uE,
    backgroundCube_frag: dE,
    cube_vert: fE,
    cube_frag: hE,
    depth_vert: pE,
    depth_frag: mE,
    distanceRGBA_vert: gE,
    distanceRGBA_frag: xE,
    equirect_vert: _E,
    equirect_frag: vE,
    linedashed_vert: yE,
    linedashed_frag: SE,
    meshbasic_vert: ME,
    meshbasic_frag: EE,
    meshlambert_vert: wE,
    meshlambert_frag: TE,
    meshmatcap_vert: AE,
    meshmatcap_frag: bE,
    meshnormal_vert: RE,
    meshnormal_frag: CE,
    meshphong_vert: PE,
    meshphong_frag: NE,
    meshphysical_vert: LE,
    meshphysical_frag: DE,
    meshtoon_vert: UE,
    meshtoon_frag: IE,
    points_vert: FE,
    points_frag: OE,
    shadow_vert: kE,
    shadow_frag: zE,
    sprite_vert: BE,
    sprite_frag: HE,
  },
  ae = {
    common: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null }, specularMapTransform: { value: new Ie() } },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Ie() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Ie() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Ie() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Ie() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Ie() },
      normalScale: { value: new je(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Ie() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: { emissiveMap: { value: null }, emissiveMapTransform: { value: new Ie() } },
    metalnessmap: { metalnessMap: { value: null }, metalnessMapTransform: { value: new Ie() } },
    roughnessmap: { roughnessMap: { value: null }, roughnessMapTransform: { value: new Ie() } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new qe(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: { value: [], properties: { direction: {}, color: {} } },
      directionalLightShadows: {
        value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: { shadowBias: {}, shadowNormalBias: {}, shadowRadius: {}, shadowMapSize: {} },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: { value: [], properties: { color: {}, position: {}, decay: {}, distance: {} } },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: { value: [], properties: { direction: {}, skyColor: {}, groundColor: {} } },
      rectAreaLights: { value: [], properties: { color: {}, position: {}, width: {}, height: {} } },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Ie() },
    },
    sprite: {
      diffuse: { value: new qe(16777215) },
      opacity: { value: 1 },
      center: { value: new je(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Ie() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Ie() },
      alphaTest: { value: 0 },
    },
  },
  Hn = {
    basic: {
      uniforms: Ht([ae.common, ae.specularmap, ae.envmap, ae.aomap, ae.lightmap, ae.fog]),
      vertexShader: Ue.meshbasic_vert,
      fragmentShader: Ue.meshbasic_frag,
    },
    lambert: {
      uniforms: Ht([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: Ue.meshlambert_vert,
      fragmentShader: Ue.meshlambert_frag,
    },
    phong: {
      uniforms: Ht([
        ae.common,
        ae.specularmap,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new qe(0) },
          specular: { value: new qe(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Ue.meshphong_vert,
      fragmentShader: Ue.meshphong_frag,
    },
    standard: {
      uniforms: Ht([
        ae.common,
        ae.envmap,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.roughnessmap,
        ae.metalnessmap,
        ae.fog,
        ae.lights,
        {
          emissive: { value: new qe(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Ue.meshphysical_vert,
      fragmentShader: Ue.meshphysical_frag,
    },
    toon: {
      uniforms: Ht([
        ae.common,
        ae.aomap,
        ae.lightmap,
        ae.emissivemap,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.gradientmap,
        ae.fog,
        ae.lights,
        { emissive: { value: new qe(0) } },
      ]),
      vertexShader: Ue.meshtoon_vert,
      fragmentShader: Ue.meshtoon_frag,
    },
    matcap: {
      uniforms: Ht([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        ae.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Ue.meshmatcap_vert,
      fragmentShader: Ue.meshmatcap_frag,
    },
    points: {
      uniforms: Ht([ae.points, ae.fog]),
      vertexShader: Ue.points_vert,
      fragmentShader: Ue.points_frag,
    },
    dashed: {
      uniforms: Ht([
        ae.common,
        ae.fog,
        { scale: { value: 1 }, dashSize: { value: 1 }, totalSize: { value: 2 } },
      ]),
      vertexShader: Ue.linedashed_vert,
      fragmentShader: Ue.linedashed_frag,
    },
    depth: {
      uniforms: Ht([ae.common, ae.displacementmap]),
      vertexShader: Ue.depth_vert,
      fragmentShader: Ue.depth_frag,
    },
    normal: {
      uniforms: Ht([
        ae.common,
        ae.bumpmap,
        ae.normalmap,
        ae.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Ue.meshnormal_vert,
      fragmentShader: Ue.meshnormal_frag,
    },
    sprite: {
      uniforms: Ht([ae.sprite, ae.fog]),
      vertexShader: Ue.sprite_vert,
      fragmentShader: Ue.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Ie() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Ue.background_vert,
      fragmentShader: Ue.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Ie() },
      },
      vertexShader: Ue.backgroundCube_vert,
      fragmentShader: Ue.backgroundCube_frag,
    },
    cube: {
      uniforms: { tCube: { value: null }, tFlip: { value: -1 }, opacity: { value: 1 } },
      vertexShader: Ue.cube_vert,
      fragmentShader: Ue.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Ue.equirect_vert,
      fragmentShader: Ue.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Ht([
        ae.common,
        ae.displacementmap,
        {
          referencePosition: { value: new F() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Ue.distanceRGBA_vert,
      fragmentShader: Ue.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Ht([ae.lights, ae.fog, { color: { value: new qe(0) }, opacity: { value: 1 } }]),
      vertexShader: Ue.shadow_vert,
      fragmentShader: Ue.shadow_frag,
    },
  };
Hn.physical = {
  uniforms: Ht([
    Hn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Ie() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Ie() },
      clearcoatNormalScale: { value: new je(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Ie() },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Ie() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Ie() },
      sheen: { value: 0 },
      sheenColor: { value: new qe(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Ie() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Ie() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Ie() },
      transmissionSamplerSize: { value: new je() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Ie() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new qe(0) },
      specularColor: { value: new qe(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Ie() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Ie() },
      anisotropyVector: { value: new je() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Ie() },
    },
  ]),
  vertexShader: Ue.meshphysical_vert,
  fragmentShader: Ue.meshphysical_frag,
};
const So = { r: 0, b: 0, g: 0 },
  ir = new pi(),
  GE = new dt();
function VE(t, e, n, i, r, s, a) {
  const o = new qe(0);
  let l = s === !0 ? 0 : 1,
    c,
    d,
    f = null,
    h = 0,
    g = null;
  function v(p, u) {
    let _ = !1,
      x = u.isScene === !0 ? u.background : null;
    x && x.isTexture && (x = (u.backgroundBlurriness > 0 ? n : e).get(x)),
      x === null ? y(o, l) : x && x.isColor && (y(x, 1), (_ = !0));
    const E = t.xr.getEnvironmentBlendMode();
    E === 'additive'
      ? i.buffers.color.setClear(0, 0, 0, 1, a)
      : E === 'alpha-blend' && i.buffers.color.setClear(0, 0, 0, 0, a),
      (t.autoClear || _) && t.clear(t.autoClearColor, t.autoClearDepth, t.autoClearStencil),
      x && (x.isCubeTexture || x.mapping === Ul)
        ? (d === void 0 &&
            ((d = new li(
              new Ia(1, 1, 1),
              new Xi({
                name: 'BackgroundCubeMaterial',
                uniforms: Ts(Hn.backgroundCube.uniforms),
                vertexShader: Hn.backgroundCube.vertexShader,
                fragmentShader: Hn.backgroundCube.fragmentShader,
                side: nn,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            d.geometry.deleteAttribute('normal'),
            d.geometry.deleteAttribute('uv'),
            (d.onBeforeRender = function (C, b, T) {
              this.matrixWorld.copyPosition(T.matrixWorld);
            }),
            Object.defineProperty(d.material, 'envMap', {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            r.update(d)),
          ir.copy(u.backgroundRotation),
          (ir.x *= -1),
          (ir.y *= -1),
          (ir.z *= -1),
          x.isCubeTexture && x.isRenderTargetTexture === !1 && ((ir.y *= -1), (ir.z *= -1)),
          (d.material.uniforms.envMap.value = x),
          (d.material.uniforms.flipEnvMap.value =
            x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
          (d.material.uniforms.backgroundBlurriness.value = u.backgroundBlurriness),
          (d.material.uniforms.backgroundIntensity.value = u.backgroundIntensity),
          d.material.uniforms.backgroundRotation.value.setFromMatrix4(GE.makeRotationFromEuler(ir)),
          (d.material.toneMapped = Ke.getTransfer(x.colorSpace) !== nt),
          (f !== x || h !== x.version || g !== t.toneMapping) &&
            ((d.material.needsUpdate = !0), (f = x), (h = x.version), (g = t.toneMapping)),
          d.layers.enableAll(),
          p.unshift(d, d.geometry, d.material, 0, 0, null))
        : x &&
          x.isTexture &&
          (c === void 0 &&
            ((c = new li(
              new Ol(2, 2),
              new Xi({
                name: 'BackgroundMaterial',
                uniforms: Ts(Hn.background.uniforms),
                vertexShader: Hn.background.vertexShader,
                fragmentShader: Hn.background.fragmentShader,
                side: ji,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              }),
            )),
            c.geometry.deleteAttribute('normal'),
            Object.defineProperty(c.material, 'map', {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            r.update(c)),
          (c.material.uniforms.t2D.value = x),
          (c.material.uniforms.backgroundIntensity.value = u.backgroundIntensity),
          (c.material.toneMapped = Ke.getTransfer(x.colorSpace) !== nt),
          x.matrixAutoUpdate === !0 && x.updateMatrix(),
          c.material.uniforms.uvTransform.value.copy(x.matrix),
          (f !== x || h !== x.version || g !== t.toneMapping) &&
            ((c.material.needsUpdate = !0), (f = x), (h = x.version), (g = t.toneMapping)),
          c.layers.enableAll(),
          p.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function y(p, u) {
    p.getRGB(So, R0(t)), i.buffers.color.setClear(So.r, So.g, So.b, u, a);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (p, u = 1) {
      o.set(p), (l = u), y(o, l);
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (p) {
      (l = p), y(o, l);
    },
    render: v,
  };
}
function WE(t, e, n, i) {
  const r = t.getParameter(t.MAX_VERTEX_ATTRIBS),
    s = i.isWebGL2 ? null : e.get('OES_vertex_array_object'),
    a = i.isWebGL2 || s !== null,
    o = {},
    l = p(null);
  let c = l,
    d = !1;
  function f(L, X, j, $, P) {
    let O = !1;
    if (a) {
      const V = y($, j, X);
      c !== V && ((c = V), g(c.object)), (O = u(L, $, j, P)), O && _(L, $, j, P);
    } else {
      const V = X.wireframe === !0;
      (c.geometry !== $.id || c.program !== j.id || c.wireframe !== V) &&
        ((c.geometry = $.id), (c.program = j.id), (c.wireframe = V), (O = !0));
    }
    P !== null && n.update(P, t.ELEMENT_ARRAY_BUFFER),
      (O || d) &&
        ((d = !1),
        D(L, X, j, $),
        P !== null && t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, n.get(P).buffer));
  }
  function h() {
    return i.isWebGL2 ? t.createVertexArray() : s.createVertexArrayOES();
  }
  function g(L) {
    return i.isWebGL2 ? t.bindVertexArray(L) : s.bindVertexArrayOES(L);
  }
  function v(L) {
    return i.isWebGL2 ? t.deleteVertexArray(L) : s.deleteVertexArrayOES(L);
  }
  function y(L, X, j) {
    const $ = j.wireframe === !0;
    let P = o[L.id];
    P === void 0 && ((P = {}), (o[L.id] = P));
    let O = P[X.id];
    O === void 0 && ((O = {}), (P[X.id] = O));
    let V = O[$];
    return V === void 0 && ((V = p(h())), (O[$] = V)), V;
  }
  function p(L) {
    const X = [],
      j = [],
      $ = [];
    for (let P = 0; P < r; P++) (X[P] = 0), (j[P] = 0), ($[P] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: X,
      enabledAttributes: j,
      attributeDivisors: $,
      object: L,
      attributes: {},
      index: null,
    };
  }
  function u(L, X, j, $) {
    const P = c.attributes,
      O = X.attributes;
    let V = 0;
    const K = j.getAttributes();
    for (const se in K)
      if (K[se].location >= 0) {
        const H = P[se];
        let Z = O[se];
        if (
          (Z === void 0 &&
            (se === 'instanceMatrix' && L.instanceMatrix && (Z = L.instanceMatrix),
            se === 'instanceColor' && L.instanceColor && (Z = L.instanceColor)),
          H === void 0 || H.attribute !== Z || (Z && H.data !== Z.data))
        )
          return !0;
        V++;
      }
    return c.attributesNum !== V || c.index !== $;
  }
  function _(L, X, j, $) {
    const P = {},
      O = X.attributes;
    let V = 0;
    const K = j.getAttributes();
    for (const se in K)
      if (K[se].location >= 0) {
        let H = O[se];
        H === void 0 &&
          (se === 'instanceMatrix' && L.instanceMatrix && (H = L.instanceMatrix),
          se === 'instanceColor' && L.instanceColor && (H = L.instanceColor));
        const Z = {};
        (Z.attribute = H), H && H.data && (Z.data = H.data), (P[se] = Z), V++;
      }
    (c.attributes = P), (c.attributesNum = V), (c.index = $);
  }
  function x() {
    const L = c.newAttributes;
    for (let X = 0, j = L.length; X < j; X++) L[X] = 0;
  }
  function E(L) {
    C(L, 0);
  }
  function C(L, X) {
    const j = c.newAttributes,
      $ = c.enabledAttributes,
      P = c.attributeDivisors;
    (j[L] = 1),
      $[L] === 0 && (t.enableVertexAttribArray(L), ($[L] = 1)),
      P[L] !== X &&
        ((i.isWebGL2 ? t : e.get('ANGLE_instanced_arrays'))[
          i.isWebGL2 ? 'vertexAttribDivisor' : 'vertexAttribDivisorANGLE'
        ](L, X),
        (P[L] = X));
  }
  function b() {
    const L = c.newAttributes,
      X = c.enabledAttributes;
    for (let j = 0, $ = X.length; j < $; j++)
      X[j] !== L[j] && (t.disableVertexAttribArray(j), (X[j] = 0));
  }
  function T(L, X, j, $, P, O, V) {
    V === !0 ? t.vertexAttribIPointer(L, X, j, P, O) : t.vertexAttribPointer(L, X, j, $, P, O);
  }
  function D(L, X, j, $) {
    if (
      i.isWebGL2 === !1 &&
      (L.isInstancedMesh || $.isInstancedBufferGeometry) &&
      e.get('ANGLE_instanced_arrays') === null
    )
      return;
    x();
    const P = $.attributes,
      O = j.getAttributes(),
      V = X.defaultAttributeValues;
    for (const K in O) {
      const se = O[K];
      if (se.location >= 0) {
        let Te = P[K];
        if (
          (Te === void 0 &&
            (K === 'instanceMatrix' && L.instanceMatrix && (Te = L.instanceMatrix),
            K === 'instanceColor' && L.instanceColor && (Te = L.instanceColor)),
          Te !== void 0)
        ) {
          const H = Te.normalized,
            Z = Te.itemSize,
            ce = n.get(Te);
          if (ce === void 0) continue;
          const Se = ce.buffer,
            _e = ce.type,
            pe = ce.bytesPerElement,
            Ye = i.isWebGL2 === !0 && (_e === t.INT || _e === t.UNSIGNED_INT || Te.gpuType === u0);
          if (Te.isInterleavedBufferAttribute) {
            const be = Te.data,
              I = be.stride,
              Rt = Te.offset;
            if (be.isInstancedInterleavedBuffer) {
              for (let ye = 0; ye < se.locationSize; ye++) C(se.location + ye, be.meshPerAttribute);
              L.isInstancedMesh !== !0 &&
                $._maxInstanceCount === void 0 &&
                ($._maxInstanceCount = be.meshPerAttribute * be.count);
            } else for (let ye = 0; ye < se.locationSize; ye++) E(se.location + ye);
            t.bindBuffer(t.ARRAY_BUFFER, Se);
            for (let ye = 0; ye < se.locationSize; ye++)
              T(
                se.location + ye,
                Z / se.locationSize,
                _e,
                H,
                I * pe,
                (Rt + (Z / se.locationSize) * ye) * pe,
                Ye,
              );
          } else {
            if (Te.isInstancedBufferAttribute) {
              for (let be = 0; be < se.locationSize; be++) C(se.location + be, Te.meshPerAttribute);
              L.isInstancedMesh !== !0 &&
                $._maxInstanceCount === void 0 &&
                ($._maxInstanceCount = Te.meshPerAttribute * Te.count);
            } else for (let be = 0; be < se.locationSize; be++) E(se.location + be);
            t.bindBuffer(t.ARRAY_BUFFER, Se);
            for (let be = 0; be < se.locationSize; be++)
              T(
                se.location + be,
                Z / se.locationSize,
                _e,
                H,
                Z * pe,
                (Z / se.locationSize) * be * pe,
                Ye,
              );
          }
        } else if (V !== void 0) {
          const H = V[K];
          if (H !== void 0)
            switch (H.length) {
              case 2:
                t.vertexAttrib2fv(se.location, H);
                break;
              case 3:
                t.vertexAttrib3fv(se.location, H);
                break;
              case 4:
                t.vertexAttrib4fv(se.location, H);
                break;
              default:
                t.vertexAttrib1fv(se.location, H);
            }
        }
      }
    }
    b();
  }
  function Y() {
    ne();
    for (const L in o) {
      const X = o[L];
      for (const j in X) {
        const $ = X[j];
        for (const P in $) v($[P].object), delete $[P];
        delete X[j];
      }
      delete o[L];
    }
  }
  function S(L) {
    if (o[L.id] === void 0) return;
    const X = o[L.id];
    for (const j in X) {
      const $ = X[j];
      for (const P in $) v($[P].object), delete $[P];
      delete X[j];
    }
    delete o[L.id];
  }
  function R(L) {
    for (const X in o) {
      const j = o[X];
      if (j[L.id] === void 0) continue;
      const $ = j[L.id];
      for (const P in $) v($[P].object), delete $[P];
      delete j[L.id];
    }
  }
  function ne() {
    J(), (d = !0), c !== l && ((c = l), g(c.object));
  }
  function J() {
    (l.geometry = null), (l.program = null), (l.wireframe = !1);
  }
  return {
    setup: f,
    reset: ne,
    resetDefaultState: J,
    dispose: Y,
    releaseStatesOfGeometry: S,
    releaseStatesOfProgram: R,
    initAttributes: x,
    enableAttribute: E,
    disableUnusedAttributes: b,
  };
}
function jE(t, e, n, i) {
  const r = i.isWebGL2;
  let s;
  function a(d) {
    s = d;
  }
  function o(d, f) {
    t.drawArrays(s, d, f), n.update(f, s, 1);
  }
  function l(d, f, h) {
    if (h === 0) return;
    let g, v;
    if (r) (g = t), (v = 'drawArraysInstanced');
    else if (
      ((g = e.get('ANGLE_instanced_arrays')), (v = 'drawArraysInstancedANGLE'), g === null)
    ) {
      console.error(
        'THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.',
      );
      return;
    }
    g[v](s, d, f, h), n.update(f, s, h);
  }
  function c(d, f, h) {
    if (h === 0) return;
    const g = e.get('WEBGL_multi_draw');
    if (g === null) for (let v = 0; v < h; v++) this.render(d[v], f[v]);
    else {
      g.multiDrawArraysWEBGL(s, d, 0, f, 0, h);
      let v = 0;
      for (let y = 0; y < h; y++) v += f[y];
      n.update(v, s, 1);
    }
  }
  (this.setMode = a), (this.render = o), (this.renderInstances = l), (this.renderMultiDraw = c);
}
function XE(t, e, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has('EXT_texture_filter_anisotropic') === !0) {
      const T = e.get('EXT_texture_filter_anisotropic');
      i = t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function s(T) {
    if (T === 'highp') {
      if (
        t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.HIGH_FLOAT).precision > 0 &&
        t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.HIGH_FLOAT).precision > 0
      )
        return 'highp';
      T = 'mediump';
    }
    return T === 'mediump' &&
      t.getShaderPrecisionFormat(t.VERTEX_SHADER, t.MEDIUM_FLOAT).precision > 0 &&
      t.getShaderPrecisionFormat(t.FRAGMENT_SHADER, t.MEDIUM_FLOAT).precision > 0
      ? 'mediump'
      : 'lowp';
  }
  const a = typeof WebGL2RenderingContext < 'u' && t.constructor.name === 'WebGL2RenderingContext';
  let o = n.precision !== void 0 ? n.precision : 'highp';
  const l = s(o);
  l !== o &&
    (console.warn('THREE.WebGLRenderer:', o, 'not supported, using', l, 'instead.'), (o = l));
  const c = a || e.has('WEBGL_draw_buffers'),
    d = n.logarithmicDepthBuffer === !0,
    f = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),
    h = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    g = t.getParameter(t.MAX_TEXTURE_SIZE),
    v = t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),
    y = t.getParameter(t.MAX_VERTEX_ATTRIBS),
    p = t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),
    u = t.getParameter(t.MAX_VARYING_VECTORS),
    _ = t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),
    x = h > 0,
    E = a || e.has('OES_texture_float'),
    C = x && E,
    b = a ? t.getParameter(t.MAX_SAMPLES) : 0;
  return {
    isWebGL2: a,
    drawBuffers: c,
    getMaxAnisotropy: r,
    getMaxPrecision: s,
    precision: o,
    logarithmicDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: h,
    maxTextureSize: g,
    maxCubemapSize: v,
    maxAttributes: y,
    maxVertexUniforms: p,
    maxVaryings: u,
    maxFragmentUniforms: _,
    vertexTextures: x,
    floatFragmentTextures: E,
    floatVertexTextures: C,
    maxSamples: b,
  };
}
function qE(t) {
  const e = this;
  let n = null,
    i = 0,
    r = !1,
    s = !1;
  const a = new or(),
    o = new Ie(),
    l = { value: null, needsUpdate: !1 };
  (this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (f, h) {
      const g = f.length !== 0 || h || i !== 0 || r;
      return (r = h), (i = f.length), g;
    }),
    (this.beginShadows = function () {
      (s = !0), d(null);
    }),
    (this.endShadows = function () {
      s = !1;
    }),
    (this.setGlobalState = function (f, h) {
      n = d(f, h, 0);
    }),
    (this.setState = function (f, h, g) {
      const v = f.clippingPlanes,
        y = f.clipIntersection,
        p = f.clipShadows,
        u = t.get(f);
      if (!r || v === null || v.length === 0 || (s && !p)) s ? d(null) : c();
      else {
        const _ = s ? 0 : i,
          x = _ * 4;
        let E = u.clippingState || null;
        (l.value = E), (E = d(v, h, x, g));
        for (let C = 0; C !== x; ++C) E[C] = n[C];
        (u.clippingState = E),
          (this.numIntersection = y ? this.numPlanes : 0),
          (this.numPlanes += _);
      }
    });
  function c() {
    l.value !== n && ((l.value = n), (l.needsUpdate = i > 0)),
      (e.numPlanes = i),
      (e.numIntersection = 0);
  }
  function d(f, h, g, v) {
    const y = f !== null ? f.length : 0;
    let p = null;
    if (y !== 0) {
      if (((p = l.value), v !== !0 || p === null)) {
        const u = g + y * 4,
          _ = h.matrixWorldInverse;
        o.getNormalMatrix(_), (p === null || p.length < u) && (p = new Float32Array(u));
        for (let x = 0, E = g; x !== y; ++x, E += 4)
          a.copy(f[x]).applyMatrix4(_, o), a.normal.toArray(p, E), (p[E + 3] = a.constant);
      }
      (l.value = p), (l.needsUpdate = !0);
    }
    return (e.numPlanes = y), (e.numIntersection = 0), p;
  }
}
function YE(t) {
  let e = new WeakMap();
  function n(a, o) {
    return o === Xu ? (a.mapping = Ms) : o === qu && (a.mapping = Es), a;
  }
  function i(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === Xu || o === qu)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return n(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new rS(l.height);
            return (
              c.fromEquirectangularTexture(t, a),
              e.set(a, c),
              a.addEventListener('dispose', r),
              n(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function r(a) {
    const o = a.target;
    o.removeEventListener('dispose', r);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function s() {
    e = new WeakMap();
  }
  return { get: i, dispose: s };
}
class $E extends C0 {
  constructor(e = -1, n = 1, i = 1, r = -1, s = 0.1, a = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = 'OrthographicCamera'),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = n),
      (this.top = i),
      (this.bottom = r),
      (this.near = s),
      (this.far = a),
      this.updateProjectionMatrix();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, n, i, r, s, a) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = n),
      (this.view.offsetX = i),
      (this.view.offsetY = r),
      (this.view.width = s),
      (this.view.height = a),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1), this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      n = (this.top - this.bottom) / (2 * this.zoom),
      i = (this.right + this.left) / 2,
      r = (this.top + this.bottom) / 2;
    let s = i - e,
      a = i + e,
      o = r + n,
      l = r - n;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        d = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (s += c * this.view.offsetX),
        (a = s + c * this.view.width),
        (o -= d * this.view.offsetY),
        (l = o - d * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(s, a, o, l, this.near, this.far, this.coordinateSystem),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      (n.object.zoom = this.zoom),
      (n.object.left = this.left),
      (n.object.right = this.right),
      (n.object.top = this.top),
      (n.object.bottom = this.bottom),
      (n.object.near = this.near),
      (n.object.far = this.far),
      this.view !== null && (n.object.view = Object.assign({}, this.view)),
      n
    );
  }
}
const rs = 4,
  xp = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ur = 20,
  Gc = new $E(),
  _p = new qe();
let Vc = null,
  Wc = 0,
  jc = 0;
const lr = (1 + Math.sqrt(5)) / 2,
  jr = 1 / lr,
  vp = [
    new F(1, 1, 1),
    new F(-1, 1, 1),
    new F(1, 1, -1),
    new F(-1, 1, -1),
    new F(0, lr, jr),
    new F(0, lr, -jr),
    new F(jr, 0, lr),
    new F(-jr, 0, lr),
    new F(lr, jr, 0),
    new F(-lr, jr, 0),
  ];
class yp {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, n = 0, i = 0.1, r = 100) {
    (Vc = this._renderer.getRenderTarget()),
      (Wc = this._renderer.getActiveCubeFace()),
      (jc = this._renderer.getActiveMipmapLevel()),
      this._setSize(256);
    const s = this._allocateTargets();
    return (
      (s.depthBuffer = !0),
      this._sceneToCubeUV(e, i, r, s),
      n > 0 && this._blur(s, 0, 0, n),
      this._applyPMREM(s),
      this._cleanup(s),
      s
    );
  }
  fromEquirectangular(e, n = null) {
    return this._fromTexture(e, n);
  }
  fromCubemap(e, n = null) {
    return this._fromTexture(e, n);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Ep()), this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Mp()), this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))), (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++) this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Vc, Wc, jc),
      (e.scissorTest = !1),
      Mo(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, n) {
    e.mapping === Ms || e.mapping === Es
      ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width)
      : this._setSize(e.image.width / 4),
      (Vc = this._renderer.getRenderTarget()),
      (Wc = this._renderer.getActiveCubeFace()),
      (jc = this._renderer.getActiveMipmapLevel());
    const i = n || this._allocateTargets();
    return this._textureToCubeUV(e, i), this._applyPMREM(i), this._cleanup(i), i;
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      n = 4 * this._cubeSize,
      i = {
        magFilter: $t,
        minFilter: $t,
        generateMipmaps: !1,
        type: wa,
        format: Dn,
        colorSpace: Ki,
        depthBuffer: !1,
      },
      r = Sp(e, n, i);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== n
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = Sp(e, n, i));
      const { _lodMax: s } = this;
      ({ sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas } = KE(s)),
        (this._blurMaterial = ZE(s, e, n));
    }
    return r;
  }
  _compileMaterial(e) {
    const n = new li(this._lodPlanes[0], e);
    this._renderer.compile(n, Gc);
  }
  _sceneToCubeUV(e, n, i, r) {
    const o = new cn(90, 1, n, i),
      l = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      d = this._renderer,
      f = d.autoClear,
      h = d.toneMapping;
    d.getClearColor(_p), (d.toneMapping = Hi), (d.autoClear = !1);
    const g = new T0({ name: 'PMREM.Background', side: nn, depthWrite: !1, depthTest: !1 }),
      v = new li(new Ia(), g);
    let y = !1;
    const p = e.background;
    p
      ? p.isColor && (g.color.copy(p), (e.background = null), (y = !0))
      : (g.color.copy(_p), (y = !0));
    for (let u = 0; u < 6; u++) {
      const _ = u % 3;
      _ === 0
        ? (o.up.set(0, l[u], 0), o.lookAt(c[u], 0, 0))
        : _ === 1
        ? (o.up.set(0, 0, l[u]), o.lookAt(0, c[u], 0))
        : (o.up.set(0, l[u], 0), o.lookAt(0, 0, c[u]));
      const x = this._cubeSize;
      Mo(r, _ * x, u > 2 ? x : 0, x, x), d.setRenderTarget(r), y && d.render(v, o), d.render(e, o);
    }
    v.geometry.dispose(),
      v.material.dispose(),
      (d.toneMapping = h),
      (d.autoClear = f),
      (e.background = p);
  }
  _textureToCubeUV(e, n) {
    const i = this._renderer,
      r = e.mapping === Ms || e.mapping === Es;
    r
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Ep()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Mp());
    const s = r ? this._cubemapMaterial : this._equirectMaterial,
      a = new li(this._lodPlanes[0], s),
      o = s.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    Mo(n, 0, 0, 3 * l, 2 * l), i.setRenderTarget(n), i.render(a, Gc);
  }
  _applyPMREM(e) {
    const n = this._renderer,
      i = n.autoClear;
    n.autoClear = !1;
    for (let r = 1; r < this._lodPlanes.length; r++) {
      const s = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] - this._sigmas[r - 1] * this._sigmas[r - 1],
        ),
        a = vp[(r - 1) % vp.length];
      this._blur(e, r - 1, r, s, a);
    }
    n.autoClear = i;
  }
  _blur(e, n, i, r, s) {
    const a = this._pingPongRenderTarget;
    this._halfBlur(e, a, n, i, r, 'latitudinal', s),
      this._halfBlur(a, e, i, i, r, 'longitudinal', s);
  }
  _halfBlur(e, n, i, r, s, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== 'latitudinal' &&
      a !== 'longitudinal' &&
      console.error('blur direction must be either latitudinal or longitudinal!');
    const d = 3,
      f = new li(this._lodPlanes[r], c),
      h = c.uniforms,
      g = this._sizeLods[i] - 1,
      v = isFinite(s) ? Math.PI / (2 * g) : (2 * Math.PI) / (2 * ur - 1),
      y = s / v,
      p = isFinite(s) ? 1 + Math.floor(d * y) : ur;
    p > ur &&
      console.warn(
        `sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ur}`,
      );
    const u = [];
    let _ = 0;
    for (let T = 0; T < ur; ++T) {
      const D = T / y,
        Y = Math.exp((-D * D) / 2);
      u.push(Y), T === 0 ? (_ += Y) : T < p && (_ += 2 * Y);
    }
    for (let T = 0; T < u.length; T++) u[T] = u[T] / _;
    (h.envMap.value = e.texture),
      (h.samples.value = p),
      (h.weights.value = u),
      (h.latitudinal.value = a === 'latitudinal'),
      o && (h.poleAxis.value = o);
    const { _lodMax: x } = this;
    (h.dTheta.value = v), (h.mipInt.value = x - i);
    const E = this._sizeLods[r],
      C = 3 * E * (r > x - rs ? r - x + rs : 0),
      b = 4 * (this._cubeSize - E);
    Mo(n, C, b, 3 * E, 2 * E), l.setRenderTarget(n), l.render(f, Gc);
  }
}
function KE(t) {
  const e = [],
    n = [],
    i = [];
  let r = t;
  const s = t - rs + 1 + xp.length;
  for (let a = 0; a < s; a++) {
    const o = Math.pow(2, r);
    n.push(o);
    let l = 1 / o;
    a > t - rs ? (l = xp[a - t + rs - 1]) : a === 0 && (l = 0), i.push(l);
    const c = 1 / (o - 2),
      d = -c,
      f = 1 + c,
      h = [d, d, f, d, f, f, d, d, f, f, d, f],
      g = 6,
      v = 6,
      y = 3,
      p = 2,
      u = 1,
      _ = new Float32Array(y * v * g),
      x = new Float32Array(p * v * g),
      E = new Float32Array(u * v * g);
    for (let b = 0; b < g; b++) {
      const T = ((b % 3) * 2) / 3 - 1,
        D = b > 2 ? 0 : -1,
        Y = [
          T,
          D,
          0,
          T + 2 / 3,
          D,
          0,
          T + 2 / 3,
          D + 1,
          0,
          T,
          D,
          0,
          T + 2 / 3,
          D + 1,
          0,
          T,
          D + 1,
          0,
        ];
      _.set(Y, y * v * b), x.set(h, p * v * b);
      const S = [b, b, b, b, b, b];
      E.set(S, u * v * b);
    }
    const C = new gi();
    C.setAttribute('position', new Xn(_, y)),
      C.setAttribute('uv', new Xn(x, p)),
      C.setAttribute('faceIndex', new Xn(E, u)),
      e.push(C),
      r > rs && r--;
  }
  return { lodPlanes: e, sizeLods: n, sigmas: i };
}
function Sp(t, e, n) {
  const i = new Tr(t, e, n);
  return (i.texture.mapping = Ul), (i.texture.name = 'PMREM.cubeUv'), (i.scissorTest = !0), i;
}
function Mo(t, e, n, i, r) {
  t.viewport.set(e, n, i, r), t.scissor.set(e, n, i, r);
}
function ZE(t, e, n) {
  const i = new Float32Array(ur),
    r = new F(0, 1, 0);
  return new Xi({
    name: 'SphericalGaussianBlur',
    defines: {
      n: ur,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / n,
      CUBEUV_MAX_MIP: `${t}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: i },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: r },
    },
    vertexShader: ef(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Bi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Mp() {
  return new Xi({
    name: 'EquirectangularToCubeUV',
    uniforms: { envMap: { value: null } },
    vertexShader: ef(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Bi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Ep() {
  return new Xi({
    name: 'CubemapToCubeUV',
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: ef(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Bi,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ef() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function QE(t) {
  let e = new WeakMap(),
    n = null;
  function i(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === Xu || l === qu,
        d = l === Ms || l === Es;
      if (c || d)
        if (o.isRenderTargetTexture && o.needsPMREMUpdate === !0) {
          o.needsPMREMUpdate = !1;
          let f = e.get(o);
          return (
            n === null && (n = new yp(t)),
            (f = c ? n.fromEquirectangular(o, f) : n.fromCubemap(o, f)),
            e.set(o, f),
            f.texture
          );
        } else {
          if (e.has(o)) return e.get(o).texture;
          {
            const f = o.image;
            if ((c && f && f.height > 0) || (d && f && r(f))) {
              n === null && (n = new yp(t));
              const h = c ? n.fromEquirectangular(o) : n.fromCubemap(o);
              return e.set(o, h), o.addEventListener('dispose', s), h.texture;
            } else return null;
          }
        }
    }
    return o;
  }
  function r(o) {
    let l = 0;
    const c = 6;
    for (let d = 0; d < c; d++) o[d] !== void 0 && l++;
    return l === c;
  }
  function s(o) {
    const l = o.target;
    l.removeEventListener('dispose', s);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    (e = new WeakMap()), n !== null && (n.dispose(), (n = null));
  }
  return { get: i, dispose: a };
}
function JE(t) {
  const e = {};
  function n(i) {
    if (e[i] !== void 0) return e[i];
    let r;
    switch (i) {
      case 'WEBGL_depth_texture':
        r =
          t.getExtension('WEBGL_depth_texture') ||
          t.getExtension('MOZ_WEBGL_depth_texture') ||
          t.getExtension('WEBKIT_WEBGL_depth_texture');
        break;
      case 'EXT_texture_filter_anisotropic':
        r =
          t.getExtension('EXT_texture_filter_anisotropic') ||
          t.getExtension('MOZ_EXT_texture_filter_anisotropic') ||
          t.getExtension('WEBKIT_EXT_texture_filter_anisotropic');
        break;
      case 'WEBGL_compressed_texture_s3tc':
        r =
          t.getExtension('WEBGL_compressed_texture_s3tc') ||
          t.getExtension('MOZ_WEBGL_compressed_texture_s3tc') ||
          t.getExtension('WEBKIT_WEBGL_compressed_texture_s3tc');
        break;
      case 'WEBGL_compressed_texture_pvrtc':
        r =
          t.getExtension('WEBGL_compressed_texture_pvrtc') ||
          t.getExtension('WEBKIT_WEBGL_compressed_texture_pvrtc');
        break;
      default:
        r = t.getExtension(i);
    }
    return (e[i] = r), r;
  }
  return {
    has: function (i) {
      return n(i) !== null;
    },
    init: function (i) {
      i.isWebGL2
        ? (n('EXT_color_buffer_float'), n('WEBGL_clip_cull_distance'))
        : (n('WEBGL_depth_texture'),
          n('OES_texture_float'),
          n('OES_texture_half_float'),
          n('OES_texture_half_float_linear'),
          n('OES_standard_derivatives'),
          n('OES_element_index_uint'),
          n('OES_vertex_array_object'),
          n('ANGLE_instanced_arrays')),
        n('OES_texture_float_linear'),
        n('EXT_color_buffer_half_float'),
        n('WEBGL_multisampled_render_to_texture');
    },
    get: function (i) {
      const r = n(i);
      return (
        r === null && console.warn('THREE.WebGLRenderer: ' + i + ' extension not supported.'), r
      );
    },
  };
}
function e1(t, e, n, i) {
  const r = {},
    s = new WeakMap();
  function a(f) {
    const h = f.target;
    h.index !== null && e.remove(h.index);
    for (const v in h.attributes) e.remove(h.attributes[v]);
    for (const v in h.morphAttributes) {
      const y = h.morphAttributes[v];
      for (let p = 0, u = y.length; p < u; p++) e.remove(y[p]);
    }
    h.removeEventListener('dispose', a), delete r[h.id];
    const g = s.get(h);
    g && (e.remove(g), s.delete(h)),
      i.releaseStatesOfGeometry(h),
      h.isInstancedBufferGeometry === !0 && delete h._maxInstanceCount,
      n.memory.geometries--;
  }
  function o(f, h) {
    return (
      r[h.id] === !0 || (h.addEventListener('dispose', a), (r[h.id] = !0), n.memory.geometries++), h
    );
  }
  function l(f) {
    const h = f.attributes;
    for (const v in h) e.update(h[v], t.ARRAY_BUFFER);
    const g = f.morphAttributes;
    for (const v in g) {
      const y = g[v];
      for (let p = 0, u = y.length; p < u; p++) e.update(y[p], t.ARRAY_BUFFER);
    }
  }
  function c(f) {
    const h = [],
      g = f.index,
      v = f.attributes.position;
    let y = 0;
    if (g !== null) {
      const _ = g.array;
      y = g.version;
      for (let x = 0, E = _.length; x < E; x += 3) {
        const C = _[x + 0],
          b = _[x + 1],
          T = _[x + 2];
        h.push(C, b, b, T, T, C);
      }
    } else if (v !== void 0) {
      const _ = v.array;
      y = v.version;
      for (let x = 0, E = _.length / 3 - 1; x < E; x += 3) {
        const C = x + 0,
          b = x + 1,
          T = x + 2;
        h.push(C, b, b, T, T, C);
      }
    } else return;
    const p = new (_0(h) ? b0 : A0)(h, 1);
    p.version = y;
    const u = s.get(f);
    u && e.remove(u), s.set(f, p);
  }
  function d(f) {
    const h = s.get(f);
    if (h) {
      const g = f.index;
      g !== null && h.version < g.version && c(f);
    } else c(f);
    return s.get(f);
  }
  return { get: o, update: l, getWireframeAttribute: d };
}
function t1(t, e, n, i) {
  const r = i.isWebGL2;
  let s;
  function a(g) {
    s = g;
  }
  let o, l;
  function c(g) {
    (o = g.type), (l = g.bytesPerElement);
  }
  function d(g, v) {
    t.drawElements(s, v, o, g * l), n.update(v, s, 1);
  }
  function f(g, v, y) {
    if (y === 0) return;
    let p, u;
    if (r) (p = t), (u = 'drawElementsInstanced');
    else if (
      ((p = e.get('ANGLE_instanced_arrays')), (u = 'drawElementsInstancedANGLE'), p === null)
    ) {
      console.error(
        'THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.',
      );
      return;
    }
    p[u](s, v, o, g * l, y), n.update(v, s, y);
  }
  function h(g, v, y) {
    if (y === 0) return;
    const p = e.get('WEBGL_multi_draw');
    if (p === null) for (let u = 0; u < y; u++) this.render(g[u] / l, v[u]);
    else {
      p.multiDrawElementsWEBGL(s, v, 0, o, g, 0, y);
      let u = 0;
      for (let _ = 0; _ < y; _++) u += v[_];
      n.update(u, s, 1);
    }
  }
  (this.setMode = a),
    (this.setIndex = c),
    (this.render = d),
    (this.renderInstances = f),
    (this.renderMultiDraw = h);
}
function n1(t) {
  const e = { geometries: 0, textures: 0 },
    n = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function i(s, a, o) {
    switch ((n.calls++, a)) {
      case t.TRIANGLES:
        n.triangles += o * (s / 3);
        break;
      case t.LINES:
        n.lines += o * (s / 2);
        break;
      case t.LINE_STRIP:
        n.lines += o * (s - 1);
        break;
      case t.LINE_LOOP:
        n.lines += o * s;
        break;
      case t.POINTS:
        n.points += o * s;
        break;
      default:
        console.error('THREE.WebGLInfo: Unknown draw mode:', a);
        break;
    }
  }
  function r() {
    (n.calls = 0), (n.triangles = 0), (n.points = 0), (n.lines = 0);
  }
  return { memory: e, render: n, programs: null, autoReset: !0, reset: r, update: i };
}
function i1(t, e) {
  return t[0] - e[0];
}
function r1(t, e) {
  return Math.abs(e[1]) - Math.abs(t[1]);
}
function s1(t, e, n) {
  const i = {},
    r = new Float32Array(8),
    s = new WeakMap(),
    a = new ot(),
    o = [];
  for (let c = 0; c < 8; c++) o[c] = [c, 0];
  function l(c, d, f) {
    const h = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const v = d.morphAttributes.position || d.morphAttributes.normal || d.morphAttributes.color,
        y = v !== void 0 ? v.length : 0;
      let p = s.get(d);
      if (p === void 0 || p.count !== y) {
        let J = function () {
          R.dispose(), s.delete(d), d.removeEventListener('dispose', J);
        };
        var g = J;
        p !== void 0 && p.texture.dispose();
        const u = d.morphAttributes.position !== void 0,
          _ = d.morphAttributes.normal !== void 0,
          x = d.morphAttributes.color !== void 0,
          E = d.morphAttributes.position || [],
          C = d.morphAttributes.normal || [],
          b = d.morphAttributes.color || [];
        let T = 0;
        u === !0 && (T = 1), _ === !0 && (T = 2), x === !0 && (T = 3);
        let D = d.attributes.position.count * T,
          Y = 1;
        D > e.maxTextureSize && ((Y = Math.ceil(D / e.maxTextureSize)), (D = e.maxTextureSize));
        const S = new Float32Array(D * Y * 4 * y),
          R = new S0(S, D, Y, y);
        (R.type = ri), (R.needsUpdate = !0);
        const ne = T * 4;
        for (let L = 0; L < y; L++) {
          const X = E[L],
            j = C[L],
            $ = b[L],
            P = D * Y * 4 * L;
          for (let O = 0; O < X.count; O++) {
            const V = O * ne;
            u === !0 &&
              (a.fromBufferAttribute(X, O),
              (S[P + V + 0] = a.x),
              (S[P + V + 1] = a.y),
              (S[P + V + 2] = a.z),
              (S[P + V + 3] = 0)),
              _ === !0 &&
                (a.fromBufferAttribute(j, O),
                (S[P + V + 4] = a.x),
                (S[P + V + 5] = a.y),
                (S[P + V + 6] = a.z),
                (S[P + V + 7] = 0)),
              x === !0 &&
                (a.fromBufferAttribute($, O),
                (S[P + V + 8] = a.x),
                (S[P + V + 9] = a.y),
                (S[P + V + 10] = a.z),
                (S[P + V + 11] = $.itemSize === 4 ? a.w : 1));
          }
        }
        (p = { count: y, texture: R, size: new je(D, Y) }),
          s.set(d, p),
          d.addEventListener('dispose', J);
      }
      if (c.isInstancedMesh === !0 && c.morphTexture !== null)
        f.getUniforms().setValue(t, 'morphTexture', c.morphTexture, n);
      else {
        let u = 0;
        for (let x = 0; x < h.length; x++) u += h[x];
        const _ = d.morphTargetsRelative ? 1 : 1 - u;
        f.getUniforms().setValue(t, 'morphTargetBaseInfluence', _),
          f.getUniforms().setValue(t, 'morphTargetInfluences', h);
      }
      f.getUniforms().setValue(t, 'morphTargetsTexture', p.texture, n),
        f.getUniforms().setValue(t, 'morphTargetsTextureSize', p.size);
    } else {
      const v = h === void 0 ? 0 : h.length;
      let y = i[d.id];
      if (y === void 0 || y.length !== v) {
        y = [];
        for (let E = 0; E < v; E++) y[E] = [E, 0];
        i[d.id] = y;
      }
      for (let E = 0; E < v; E++) {
        const C = y[E];
        (C[0] = E), (C[1] = h[E]);
      }
      y.sort(r1);
      for (let E = 0; E < 8; E++)
        E < v && y[E][1]
          ? ((o[E][0] = y[E][0]), (o[E][1] = y[E][1]))
          : ((o[E][0] = Number.MAX_SAFE_INTEGER), (o[E][1] = 0));
      o.sort(i1);
      const p = d.morphAttributes.position,
        u = d.morphAttributes.normal;
      let _ = 0;
      for (let E = 0; E < 8; E++) {
        const C = o[E],
          b = C[0],
          T = C[1];
        b !== Number.MAX_SAFE_INTEGER && T
          ? (p &&
              d.getAttribute('morphTarget' + E) !== p[b] &&
              d.setAttribute('morphTarget' + E, p[b]),
            u &&
              d.getAttribute('morphNormal' + E) !== u[b] &&
              d.setAttribute('morphNormal' + E, u[b]),
            (r[E] = T),
            (_ += T))
          : (p && d.hasAttribute('morphTarget' + E) === !0 && d.deleteAttribute('morphTarget' + E),
            u && d.hasAttribute('morphNormal' + E) === !0 && d.deleteAttribute('morphNormal' + E),
            (r[E] = 0));
      }
      const x = d.morphTargetsRelative ? 1 : 1 - _;
      f.getUniforms().setValue(t, 'morphTargetBaseInfluence', x),
        f.getUniforms().setValue(t, 'morphTargetInfluences', r);
    }
  }
  return { update: l };
}
function a1(t, e, n, i) {
  let r = new WeakMap();
  function s(l) {
    const c = i.render.frame,
      d = l.geometry,
      f = e.get(l, d);
    if (
      (r.get(f) !== c && (e.update(f), r.set(f, c)),
      l.isInstancedMesh &&
        (l.hasEventListener('dispose', o) === !1 && l.addEventListener('dispose', o),
        r.get(l) !== c &&
          (n.update(l.instanceMatrix, t.ARRAY_BUFFER),
          l.instanceColor !== null && n.update(l.instanceColor, t.ARRAY_BUFFER),
          r.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const h = l.skeleton;
      r.get(h) !== c && (h.update(), r.set(h, c));
    }
    return f;
  }
  function a() {
    r = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    c.removeEventListener('dispose', o),
      n.remove(c.instanceMatrix),
      c.instanceColor !== null && n.remove(c.instanceColor);
  }
  return { update: s, dispose: a };
}
class L0 extends rn {
  constructor(e, n, i, r, s, a, o, l, c, d) {
    if (((d = d !== void 0 ? d : _r), d !== _r && d !== ws))
      throw new Error(
        'DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat',
      );
    i === void 0 && d === _r && (i = Ni),
      i === void 0 && d === ws && (i = xr),
      super(null, r, s, a, o, l, d, i, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: n }),
      (this.magFilter = o !== void 0 ? o : Vt),
      (this.minFilter = l !== void 0 ? l : Vt),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null);
  }
  copy(e) {
    return super.copy(e), (this.compareFunction = e.compareFunction), this;
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return this.compareFunction !== null && (n.compareFunction = this.compareFunction), n;
  }
}
const D0 = new rn(),
  U0 = new L0(1, 1);
U0.compareFunction = x0;
const I0 = new S0(),
  F0 = new Hy(),
  O0 = new P0(),
  wp = [],
  Tp = [],
  Ap = new Float32Array(16),
  bp = new Float32Array(9),
  Rp = new Float32Array(4);
function Ps(t, e, n) {
  const i = t[0];
  if (i <= 0 || i > 0) return t;
  const r = e * n;
  let s = wp[r];
  if ((s === void 0 && ((s = new Float32Array(r)), (wp[r] = s)), e !== 0)) {
    i.toArray(s, 0);
    for (let a = 1, o = 0; a !== e; ++a) (o += n), t[a].toArray(s, o);
  }
  return s;
}
function Mt(t, e) {
  if (t.length !== e.length) return !1;
  for (let n = 0, i = t.length; n < i; n++) if (t[n] !== e[n]) return !1;
  return !0;
}
function Et(t, e) {
  for (let n = 0, i = e.length; n < i; n++) t[n] = e[n];
}
function kl(t, e) {
  let n = Tp[e];
  n === void 0 && ((n = new Int32Array(e)), (Tp[e] = n));
  for (let i = 0; i !== e; ++i) n[i] = t.allocateTextureUnit();
  return n;
}
function o1(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1f(this.addr, e), (n[0] = e));
}
function l1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y) &&
      (t.uniform2f(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Mt(n, e)) return;
    t.uniform2fv(this.addr, e), Et(n, e);
  }
}
function c1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) &&
      (t.uniform3f(this.addr, e.x, e.y, e.z), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z));
  else if (e.r !== void 0)
    (n[0] !== e.r || n[1] !== e.g || n[2] !== e.b) &&
      (t.uniform3f(this.addr, e.r, e.g, e.b), (n[0] = e.r), (n[1] = e.g), (n[2] = e.b));
  else {
    if (Mt(n, e)) return;
    t.uniform3fv(this.addr, e), Et(n, e);
  }
}
function u1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) &&
      (t.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Mt(n, e)) return;
    t.uniform4fv(this.addr, e), Et(n, e);
  }
}
function d1(t, e) {
  const n = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Mt(n, e)) return;
    t.uniformMatrix2fv(this.addr, !1, e), Et(n, e);
  } else {
    if (Mt(n, i)) return;
    Rp.set(i), t.uniformMatrix2fv(this.addr, !1, Rp), Et(n, i);
  }
}
function f1(t, e) {
  const n = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Mt(n, e)) return;
    t.uniformMatrix3fv(this.addr, !1, e), Et(n, e);
  } else {
    if (Mt(n, i)) return;
    bp.set(i), t.uniformMatrix3fv(this.addr, !1, bp), Et(n, i);
  }
}
function h1(t, e) {
  const n = this.cache,
    i = e.elements;
  if (i === void 0) {
    if (Mt(n, e)) return;
    t.uniformMatrix4fv(this.addr, !1, e), Et(n, e);
  } else {
    if (Mt(n, i)) return;
    Ap.set(i), t.uniformMatrix4fv(this.addr, !1, Ap), Et(n, i);
  }
}
function p1(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1i(this.addr, e), (n[0] = e));
}
function m1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y) &&
      (t.uniform2i(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Mt(n, e)) return;
    t.uniform2iv(this.addr, e), Et(n, e);
  }
}
function g1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) &&
      (t.uniform3i(this.addr, e.x, e.y, e.z), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z));
  else {
    if (Mt(n, e)) return;
    t.uniform3iv(this.addr, e), Et(n, e);
  }
}
function x1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) &&
      (t.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Mt(n, e)) return;
    t.uniform4iv(this.addr, e), Et(n, e);
  }
}
function _1(t, e) {
  const n = this.cache;
  n[0] !== e && (t.uniform1ui(this.addr, e), (n[0] = e));
}
function v1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y) &&
      (t.uniform2ui(this.addr, e.x, e.y), (n[0] = e.x), (n[1] = e.y));
  else {
    if (Mt(n, e)) return;
    t.uniform2uiv(this.addr, e), Et(n, e);
  }
}
function y1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z) &&
      (t.uniform3ui(this.addr, e.x, e.y, e.z), (n[0] = e.x), (n[1] = e.y), (n[2] = e.z));
  else {
    if (Mt(n, e)) return;
    t.uniform3uiv(this.addr, e), Et(n, e);
  }
}
function S1(t, e) {
  const n = this.cache;
  if (e.x !== void 0)
    (n[0] !== e.x || n[1] !== e.y || n[2] !== e.z || n[3] !== e.w) &&
      (t.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (n[0] = e.x),
      (n[1] = e.y),
      (n[2] = e.z),
      (n[3] = e.w));
  else {
    if (Mt(n, e)) return;
    t.uniform4uiv(this.addr, e), Et(n, e);
  }
}
function M1(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r));
  const s = this.type === t.SAMPLER_2D_SHADOW ? U0 : D0;
  n.setTexture2D(e || s, r);
}
function E1(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture3D(e || F0, r);
}
function w1(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTextureCube(e || O0, r);
}
function T1(t, e, n) {
  const i = this.cache,
    r = n.allocateTextureUnit();
  i[0] !== r && (t.uniform1i(this.addr, r), (i[0] = r)), n.setTexture2DArray(e || I0, r);
}
function A1(t) {
  switch (t) {
    case 5126:
      return o1;
    case 35664:
      return l1;
    case 35665:
      return c1;
    case 35666:
      return u1;
    case 35674:
      return d1;
    case 35675:
      return f1;
    case 35676:
      return h1;
    case 5124:
    case 35670:
      return p1;
    case 35667:
    case 35671:
      return m1;
    case 35668:
    case 35672:
      return g1;
    case 35669:
    case 35673:
      return x1;
    case 5125:
      return _1;
    case 36294:
      return v1;
    case 36295:
      return y1;
    case 36296:
      return S1;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return M1;
    case 35679:
    case 36299:
    case 36307:
      return E1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return w1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return T1;
  }
}
function b1(t, e) {
  t.uniform1fv(this.addr, e);
}
function R1(t, e) {
  const n = Ps(e, this.size, 2);
  t.uniform2fv(this.addr, n);
}
function C1(t, e) {
  const n = Ps(e, this.size, 3);
  t.uniform3fv(this.addr, n);
}
function P1(t, e) {
  const n = Ps(e, this.size, 4);
  t.uniform4fv(this.addr, n);
}
function N1(t, e) {
  const n = Ps(e, this.size, 4);
  t.uniformMatrix2fv(this.addr, !1, n);
}
function L1(t, e) {
  const n = Ps(e, this.size, 9);
  t.uniformMatrix3fv(this.addr, !1, n);
}
function D1(t, e) {
  const n = Ps(e, this.size, 16);
  t.uniformMatrix4fv(this.addr, !1, n);
}
function U1(t, e) {
  t.uniform1iv(this.addr, e);
}
function I1(t, e) {
  t.uniform2iv(this.addr, e);
}
function F1(t, e) {
  t.uniform3iv(this.addr, e);
}
function O1(t, e) {
  t.uniform4iv(this.addr, e);
}
function k1(t, e) {
  t.uniform1uiv(this.addr, e);
}
function z1(t, e) {
  t.uniform2uiv(this.addr, e);
}
function B1(t, e) {
  t.uniform3uiv(this.addr, e);
}
function H1(t, e) {
  t.uniform4uiv(this.addr, e);
}
function G1(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = kl(n, r);
  Mt(i, s) || (t.uniform1iv(this.addr, s), Et(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture2D(e[a] || D0, s[a]);
}
function V1(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = kl(n, r);
  Mt(i, s) || (t.uniform1iv(this.addr, s), Et(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture3D(e[a] || F0, s[a]);
}
function W1(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = kl(n, r);
  Mt(i, s) || (t.uniform1iv(this.addr, s), Et(i, s));
  for (let a = 0; a !== r; ++a) n.setTextureCube(e[a] || O0, s[a]);
}
function j1(t, e, n) {
  const i = this.cache,
    r = e.length,
    s = kl(n, r);
  Mt(i, s) || (t.uniform1iv(this.addr, s), Et(i, s));
  for (let a = 0; a !== r; ++a) n.setTexture2DArray(e[a] || I0, s[a]);
}
function X1(t) {
  switch (t) {
    case 5126:
      return b1;
    case 35664:
      return R1;
    case 35665:
      return C1;
    case 35666:
      return P1;
    case 35674:
      return N1;
    case 35675:
      return L1;
    case 35676:
      return D1;
    case 5124:
    case 35670:
      return U1;
    case 35667:
    case 35671:
      return I1;
    case 35668:
    case 35672:
      return F1;
    case 35669:
    case 35673:
      return O1;
    case 5125:
      return k1;
    case 36294:
      return z1;
    case 36295:
      return B1;
    case 36296:
      return H1;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return G1;
    case 35679:
    case 36299:
    case 36307:
      return V1;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return W1;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return j1;
  }
}
class q1 {
  constructor(e, n, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = n.type),
      (this.setValue = A1(n.type));
  }
}
class Y1 {
  constructor(e, n, i) {
    (this.id = e),
      (this.addr = i),
      (this.cache = []),
      (this.type = n.type),
      (this.size = n.size),
      (this.setValue = X1(n.type));
  }
}
class $1 {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, n, i) {
    const r = this.seq;
    for (let s = 0, a = r.length; s !== a; ++s) {
      const o = r[s];
      o.setValue(e, n[o.id], i);
    }
  }
}
const Xc = /(\w+)(\])?(\[|\.)?/g;
function Cp(t, e) {
  t.seq.push(e), (t.map[e.id] = e);
}
function K1(t, e, n) {
  const i = t.name,
    r = i.length;
  for (Xc.lastIndex = 0; ; ) {
    const s = Xc.exec(i),
      a = Xc.lastIndex;
    let o = s[1];
    const l = s[2] === ']',
      c = s[3];
    if ((l && (o = o | 0), c === void 0 || (c === '[' && a + 2 === r))) {
      Cp(n, c === void 0 ? new q1(o, t, e) : new Y1(o, t, e));
      break;
    } else {
      let f = n.map[o];
      f === void 0 && ((f = new $1(o)), Cp(n, f)), (n = f);
    }
  }
}
class zo {
  constructor(e, n) {
    (this.seq = []), (this.map = {});
    const i = e.getProgramParameter(n, e.ACTIVE_UNIFORMS);
    for (let r = 0; r < i; ++r) {
      const s = e.getActiveUniform(n, r),
        a = e.getUniformLocation(n, s.name);
      K1(s, a, this);
    }
  }
  setValue(e, n, i, r) {
    const s = this.map[n];
    s !== void 0 && s.setValue(e, i, r);
  }
  setOptional(e, n, i) {
    const r = n[i];
    r !== void 0 && this.setValue(e, i, r);
  }
  static upload(e, n, i, r) {
    for (let s = 0, a = n.length; s !== a; ++s) {
      const o = n[s],
        l = i[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, r);
    }
  }
  static seqWithValue(e, n) {
    const i = [];
    for (let r = 0, s = e.length; r !== s; ++r) {
      const a = e[r];
      a.id in n && i.push(a);
    }
    return i;
  }
}
function Pp(t, e, n) {
  const i = t.createShader(e);
  return t.shaderSource(i, n), t.compileShader(i), i;
}
const Z1 = 37297;
let Q1 = 0;
function J1(t, e) {
  const n = t.split(`
`),
    i = [],
    r = Math.max(e - 6, 0),
    s = Math.min(e + 6, n.length);
  for (let a = r; a < s; a++) {
    const o = a + 1;
    i.push(`${o === e ? '>' : ' '} ${o}: ${n[a]}`);
  }
  return i.join(`
`);
}
function ew(t) {
  const e = Ke.getPrimaries(Ke.workingColorSpace),
    n = Ke.getPrimaries(t);
  let i;
  switch (
    (e === n
      ? (i = '')
      : e === pl && n === hl
      ? (i = 'LinearDisplayP3ToLinearSRGB')
      : e === hl && n === pl && (i = 'LinearSRGBToLinearDisplayP3'),
    t)
  ) {
    case Ki:
    case Il:
      return [i, 'LinearTransferOETF'];
    case Bn:
    case Qd:
      return [i, 'sRGBTransferOETF'];
    default:
      return (
        console.warn('THREE.WebGLProgram: Unsupported color space:', t), [i, 'LinearTransferOETF']
      );
  }
}
function Np(t, e, n) {
  const i = t.getShaderParameter(e, t.COMPILE_STATUS),
    r = t.getShaderInfoLog(e).trim();
  if (i && r === '') return '';
  const s = /ERROR: 0:(\d+)/.exec(r);
  if (s) {
    const a = parseInt(s[1]);
    return (
      n.toUpperCase() +
      `

` +
      r +
      `

` +
      J1(t.getShaderSource(e), a)
    );
  } else return r;
}
function tw(t, e) {
  const n = ew(e);
  return `vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`;
}
function nw(t, e) {
  let n;
  switch (e) {
    case ly:
      n = 'Linear';
      break;
    case cy:
      n = 'Reinhard';
      break;
    case uy:
      n = 'OptimizedCineon';
      break;
    case dy:
      n = 'ACESFilmic';
      break;
    case hy:
      n = 'AgX';
      break;
    case py:
      n = 'Neutral';
      break;
    case fy:
      n = 'Custom';
      break;
    default:
      console.warn('THREE.WebGLProgram: Unsupported toneMapping:', e), (n = 'Linear');
  }
  return 'vec3 ' + t + '( vec3 color ) { return ' + n + 'ToneMapping( color ); }';
}
function iw(t) {
  return [
    t.extensionDerivatives ||
    t.envMapCubeUVHeight ||
    t.bumpMap ||
    t.normalMapTangentSpace ||
    t.clearcoatNormalMap ||
    t.flatShading ||
    t.alphaToCoverage ||
    t.shaderID === 'physical'
      ? '#extension GL_OES_standard_derivatives : enable'
      : '',
    (t.extensionFragDepth || t.logarithmicDepthBuffer) && t.rendererExtensionFragDepth
      ? '#extension GL_EXT_frag_depth : enable'
      : '',
    t.extensionDrawBuffers && t.rendererExtensionDrawBuffers
      ? '#extension GL_EXT_draw_buffers : require'
      : '',
    (t.extensionShaderTextureLOD || t.envMap || t.transmission) &&
    t.rendererExtensionShaderTextureLod
      ? '#extension GL_EXT_shader_texture_lod : enable'
      : '',
  ].filter(ss).join(`
`);
}
function rw(t) {
  return [
    t.extensionClipCullDistance ? '#extension GL_ANGLE_clip_cull_distance : require' : '',
    t.extensionMultiDraw ? '#extension GL_ANGLE_multi_draw : require' : '',
  ].filter(ss).join(`
`);
}
function sw(t) {
  const e = [];
  for (const n in t) {
    const i = t[n];
    i !== !1 && e.push('#define ' + n + ' ' + i);
  }
  return e.join(`
`);
}
function aw(t, e) {
  const n = {},
    i = t.getProgramParameter(e, t.ACTIVE_ATTRIBUTES);
  for (let r = 0; r < i; r++) {
    const s = t.getActiveAttrib(e, r),
      a = s.name;
    let o = 1;
    s.type === t.FLOAT_MAT2 && (o = 2),
      s.type === t.FLOAT_MAT3 && (o = 3),
      s.type === t.FLOAT_MAT4 && (o = 4),
      (n[a] = { type: s.type, location: t.getAttribLocation(e, a), locationSize: o });
  }
  return n;
}
function ss(t) {
  return t !== '';
}
function Lp(t, e) {
  const n = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return t
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, n)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function Dp(t, e) {
  return t
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection);
}
const ow = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Ju(t) {
  return t.replace(ow, cw);
}
const lw = new Map([
  ['encodings_fragment', 'colorspace_fragment'],
  ['encodings_pars_fragment', 'colorspace_pars_fragment'],
  ['output_fragment', 'opaque_fragment'],
]);
function cw(t, e) {
  let n = Ue[e];
  if (n === void 0) {
    const i = lw.get(e);
    if (i !== void 0)
      (n = Ue[i]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          i,
        );
    else throw new Error('Can not resolve #include <' + e + '>');
  }
  return Ju(n);
}
const uw =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Up(t) {
  return t.replace(uw, dw);
}
function dw(t, e, n, i) {
  let r = '';
  for (let s = parseInt(e); s < parseInt(n); s++)
    r += i.replace(/\[\s*i\s*\]/g, '[ ' + s + ' ]').replace(/UNROLLED_LOOP_INDEX/g, s);
  return r;
}
function Ip(t) {
  let e = `precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;
  return (
    t.isWebGL2 &&
      (e += `precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),
    t.precision === 'highp'
      ? (e += `
#define HIGH_PRECISION`)
      : t.precision === 'mediump'
      ? (e += `
#define MEDIUM_PRECISION`)
      : t.precision === 'lowp' &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function fw(t) {
  let e = 'SHADOWMAP_TYPE_BASIC';
  return (
    t.shadowMapType === o0
      ? (e = 'SHADOWMAP_TYPE_PCF')
      : t.shadowMapType === Fv
      ? (e = 'SHADOWMAP_TYPE_PCF_SOFT')
      : t.shadowMapType === ei && (e = 'SHADOWMAP_TYPE_VSM'),
    e
  );
}
function hw(t) {
  let e = 'ENVMAP_TYPE_CUBE';
  if (t.envMap)
    switch (t.envMapMode) {
      case Ms:
      case Es:
        e = 'ENVMAP_TYPE_CUBE';
        break;
      case Ul:
        e = 'ENVMAP_TYPE_CUBE_UV';
        break;
    }
  return e;
}
function pw(t) {
  let e = 'ENVMAP_MODE_REFLECTION';
  if (t.envMap)
    switch (t.envMapMode) {
      case Es:
        e = 'ENVMAP_MODE_REFRACTION';
        break;
    }
  return e;
}
function mw(t) {
  let e = 'ENVMAP_BLENDING_NONE';
  if (t.envMap)
    switch (t.combine) {
      case l0:
        e = 'ENVMAP_BLENDING_MULTIPLY';
        break;
      case ay:
        e = 'ENVMAP_BLENDING_MIX';
        break;
      case oy:
        e = 'ENVMAP_BLENDING_ADD';
        break;
    }
  return e;
}
function gw(t) {
  const e = t.envMapCubeUVHeight;
  if (e === null) return null;
  const n = Math.log2(e) - 2,
    i = 1 / e;
  return { texelWidth: 1 / (3 * Math.max(Math.pow(2, n), 7 * 16)), texelHeight: i, maxMip: n };
}
function xw(t, e, n, i) {
  const r = t.getContext(),
    s = n.defines;
  let a = n.vertexShader,
    o = n.fragmentShader;
  const l = fw(n),
    c = hw(n),
    d = pw(n),
    f = mw(n),
    h = gw(n),
    g = n.isWebGL2 ? '' : iw(n),
    v = rw(n),
    y = sw(s),
    p = r.createProgram();
  let u,
    _,
    x = n.glslVersion
      ? '#version ' +
        n.glslVersion +
        `
`
      : '';
  n.isRawShaderMaterial
    ? ((u = [
        '#define SHADER_TYPE ' + n.shaderType,
        '#define SHADER_NAME ' + n.shaderName,
        y,
      ].filter(ss).join(`
`)),
      u.length > 0 &&
        (u += `
`),
      (_ = [
        g,
        '#define SHADER_TYPE ' + n.shaderType,
        '#define SHADER_NAME ' + n.shaderName,
        y,
      ].filter(ss).join(`
`)),
      _.length > 0 &&
        (_ += `
`))
    : ((u = [
        Ip(n),
        '#define SHADER_TYPE ' + n.shaderType,
        '#define SHADER_NAME ' + n.shaderName,
        y,
        n.extensionClipCullDistance ? '#define USE_CLIP_DISTANCE' : '',
        n.batching ? '#define USE_BATCHING' : '',
        n.instancing ? '#define USE_INSTANCING' : '',
        n.instancingColor ? '#define USE_INSTANCING_COLOR' : '',
        n.instancingMorph ? '#define USE_INSTANCING_MORPH' : '',
        n.useFog && n.fog ? '#define USE_FOG' : '',
        n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
        n.map ? '#define USE_MAP' : '',
        n.envMap ? '#define USE_ENVMAP' : '',
        n.envMap ? '#define ' + d : '',
        n.lightMap ? '#define USE_LIGHTMAP' : '',
        n.aoMap ? '#define USE_AOMAP' : '',
        n.bumpMap ? '#define USE_BUMPMAP' : '',
        n.normalMap ? '#define USE_NORMALMAP' : '',
        n.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        n.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        n.displacementMap ? '#define USE_DISPLACEMENTMAP' : '',
        n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        n.anisotropy ? '#define USE_ANISOTROPY' : '',
        n.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        n.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        n.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        n.specularMap ? '#define USE_SPECULARMAP' : '',
        n.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        n.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        n.metalnessMap ? '#define USE_METALNESSMAP' : '',
        n.alphaMap ? '#define USE_ALPHAMAP' : '',
        n.alphaHash ? '#define USE_ALPHAHASH' : '',
        n.transmission ? '#define USE_TRANSMISSION' : '',
        n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        n.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        n.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        n.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        n.mapUv ? '#define MAP_UV ' + n.mapUv : '',
        n.alphaMapUv ? '#define ALPHAMAP_UV ' + n.alphaMapUv : '',
        n.lightMapUv ? '#define LIGHTMAP_UV ' + n.lightMapUv : '',
        n.aoMapUv ? '#define AOMAP_UV ' + n.aoMapUv : '',
        n.emissiveMapUv ? '#define EMISSIVEMAP_UV ' + n.emissiveMapUv : '',
        n.bumpMapUv ? '#define BUMPMAP_UV ' + n.bumpMapUv : '',
        n.normalMapUv ? '#define NORMALMAP_UV ' + n.normalMapUv : '',
        n.displacementMapUv ? '#define DISPLACEMENTMAP_UV ' + n.displacementMapUv : '',
        n.metalnessMapUv ? '#define METALNESSMAP_UV ' + n.metalnessMapUv : '',
        n.roughnessMapUv ? '#define ROUGHNESSMAP_UV ' + n.roughnessMapUv : '',
        n.anisotropyMapUv ? '#define ANISOTROPYMAP_UV ' + n.anisotropyMapUv : '',
        n.clearcoatMapUv ? '#define CLEARCOATMAP_UV ' + n.clearcoatMapUv : '',
        n.clearcoatNormalMapUv ? '#define CLEARCOAT_NORMALMAP_UV ' + n.clearcoatNormalMapUv : '',
        n.clearcoatRoughnessMapUv
          ? '#define CLEARCOAT_ROUGHNESSMAP_UV ' + n.clearcoatRoughnessMapUv
          : '',
        n.iridescenceMapUv ? '#define IRIDESCENCEMAP_UV ' + n.iridescenceMapUv : '',
        n.iridescenceThicknessMapUv
          ? '#define IRIDESCENCE_THICKNESSMAP_UV ' + n.iridescenceThicknessMapUv
          : '',
        n.sheenColorMapUv ? '#define SHEEN_COLORMAP_UV ' + n.sheenColorMapUv : '',
        n.sheenRoughnessMapUv ? '#define SHEEN_ROUGHNESSMAP_UV ' + n.sheenRoughnessMapUv : '',
        n.specularMapUv ? '#define SPECULARMAP_UV ' + n.specularMapUv : '',
        n.specularColorMapUv ? '#define SPECULAR_COLORMAP_UV ' + n.specularColorMapUv : '',
        n.specularIntensityMapUv
          ? '#define SPECULAR_INTENSITYMAP_UV ' + n.specularIntensityMapUv
          : '',
        n.transmissionMapUv ? '#define TRANSMISSIONMAP_UV ' + n.transmissionMapUv : '',
        n.thicknessMapUv ? '#define THICKNESSMAP_UV ' + n.thicknessMapUv : '',
        n.vertexTangents && n.flatShading === !1 ? '#define USE_TANGENT' : '',
        n.vertexColors ? '#define USE_COLOR' : '',
        n.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        n.vertexUv1s ? '#define USE_UV1' : '',
        n.vertexUv2s ? '#define USE_UV2' : '',
        n.vertexUv3s ? '#define USE_UV3' : '',
        n.pointsUvs ? '#define USE_POINTS_UV' : '',
        n.flatShading ? '#define FLAT_SHADED' : '',
        n.skinning ? '#define USE_SKINNING' : '',
        n.morphTargets ? '#define USE_MORPHTARGETS' : '',
        n.morphNormals && n.flatShading === !1 ? '#define USE_MORPHNORMALS' : '',
        n.morphColors && n.isWebGL2 ? '#define USE_MORPHCOLORS' : '',
        n.morphTargetsCount > 0 && n.isWebGL2 ? '#define MORPHTARGETS_TEXTURE' : '',
        n.morphTargetsCount > 0 && n.isWebGL2
          ? '#define MORPHTARGETS_TEXTURE_STRIDE ' + n.morphTextureStride
          : '',
        n.morphTargetsCount > 0 && n.isWebGL2
          ? '#define MORPHTARGETS_COUNT ' + n.morphTargetsCount
          : '',
        n.doubleSided ? '#define DOUBLE_SIDED' : '',
        n.flipSided ? '#define FLIP_SIDED' : '',
        n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        n.shadowMapEnabled ? '#define ' + l : '',
        n.sizeAttenuation ? '#define USE_SIZEATTENUATION' : '',
        n.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        n.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
        n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
          ? '#define USE_LOGDEPTHBUF_EXT'
          : '',
        'uniform mat4 modelMatrix;',
        'uniform mat4 modelViewMatrix;',
        'uniform mat4 projectionMatrix;',
        'uniform mat4 viewMatrix;',
        'uniform mat3 normalMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        '#ifdef USE_INSTANCING',
        '	attribute mat4 instanceMatrix;',
        '#endif',
        '#ifdef USE_INSTANCING_COLOR',
        '	attribute vec3 instanceColor;',
        '#endif',
        '#ifdef USE_INSTANCING_MORPH',
        '	uniform sampler2D morphTexture;',
        '#endif',
        'attribute vec3 position;',
        'attribute vec3 normal;',
        'attribute vec2 uv;',
        '#ifdef USE_UV1',
        '	attribute vec2 uv1;',
        '#endif',
        '#ifdef USE_UV2',
        '	attribute vec2 uv2;',
        '#endif',
        '#ifdef USE_UV3',
        '	attribute vec2 uv3;',
        '#endif',
        '#ifdef USE_TANGENT',
        '	attribute vec4 tangent;',
        '#endif',
        '#if defined( USE_COLOR_ALPHA )',
        '	attribute vec4 color;',
        '#elif defined( USE_COLOR )',
        '	attribute vec3 color;',
        '#endif',
        '#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )',
        '	attribute vec3 morphTarget0;',
        '	attribute vec3 morphTarget1;',
        '	attribute vec3 morphTarget2;',
        '	attribute vec3 morphTarget3;',
        '	#ifdef USE_MORPHNORMALS',
        '		attribute vec3 morphNormal0;',
        '		attribute vec3 morphNormal1;',
        '		attribute vec3 morphNormal2;',
        '		attribute vec3 morphNormal3;',
        '	#else',
        '		attribute vec3 morphTarget4;',
        '		attribute vec3 morphTarget5;',
        '		attribute vec3 morphTarget6;',
        '		attribute vec3 morphTarget7;',
        '	#endif',
        '#endif',
        '#ifdef USE_SKINNING',
        '	attribute vec4 skinIndex;',
        '	attribute vec4 skinWeight;',
        '#endif',
        `
`,
      ].filter(ss).join(`
`)),
      (_ = [
        g,
        Ip(n),
        '#define SHADER_TYPE ' + n.shaderType,
        '#define SHADER_NAME ' + n.shaderName,
        y,
        n.useFog && n.fog ? '#define USE_FOG' : '',
        n.useFog && n.fogExp2 ? '#define FOG_EXP2' : '',
        n.alphaToCoverage ? '#define ALPHA_TO_COVERAGE' : '',
        n.map ? '#define USE_MAP' : '',
        n.matcap ? '#define USE_MATCAP' : '',
        n.envMap ? '#define USE_ENVMAP' : '',
        n.envMap ? '#define ' + c : '',
        n.envMap ? '#define ' + d : '',
        n.envMap ? '#define ' + f : '',
        h ? '#define CUBEUV_TEXEL_WIDTH ' + h.texelWidth : '',
        h ? '#define CUBEUV_TEXEL_HEIGHT ' + h.texelHeight : '',
        h ? '#define CUBEUV_MAX_MIP ' + h.maxMip + '.0' : '',
        n.lightMap ? '#define USE_LIGHTMAP' : '',
        n.aoMap ? '#define USE_AOMAP' : '',
        n.bumpMap ? '#define USE_BUMPMAP' : '',
        n.normalMap ? '#define USE_NORMALMAP' : '',
        n.normalMapObjectSpace ? '#define USE_NORMALMAP_OBJECTSPACE' : '',
        n.normalMapTangentSpace ? '#define USE_NORMALMAP_TANGENTSPACE' : '',
        n.emissiveMap ? '#define USE_EMISSIVEMAP' : '',
        n.anisotropy ? '#define USE_ANISOTROPY' : '',
        n.anisotropyMap ? '#define USE_ANISOTROPYMAP' : '',
        n.clearcoat ? '#define USE_CLEARCOAT' : '',
        n.clearcoatMap ? '#define USE_CLEARCOATMAP' : '',
        n.clearcoatRoughnessMap ? '#define USE_CLEARCOAT_ROUGHNESSMAP' : '',
        n.clearcoatNormalMap ? '#define USE_CLEARCOAT_NORMALMAP' : '',
        n.iridescence ? '#define USE_IRIDESCENCE' : '',
        n.iridescenceMap ? '#define USE_IRIDESCENCEMAP' : '',
        n.iridescenceThicknessMap ? '#define USE_IRIDESCENCE_THICKNESSMAP' : '',
        n.specularMap ? '#define USE_SPECULARMAP' : '',
        n.specularColorMap ? '#define USE_SPECULAR_COLORMAP' : '',
        n.specularIntensityMap ? '#define USE_SPECULAR_INTENSITYMAP' : '',
        n.roughnessMap ? '#define USE_ROUGHNESSMAP' : '',
        n.metalnessMap ? '#define USE_METALNESSMAP' : '',
        n.alphaMap ? '#define USE_ALPHAMAP' : '',
        n.alphaTest ? '#define USE_ALPHATEST' : '',
        n.alphaHash ? '#define USE_ALPHAHASH' : '',
        n.sheen ? '#define USE_SHEEN' : '',
        n.sheenColorMap ? '#define USE_SHEEN_COLORMAP' : '',
        n.sheenRoughnessMap ? '#define USE_SHEEN_ROUGHNESSMAP' : '',
        n.transmission ? '#define USE_TRANSMISSION' : '',
        n.transmissionMap ? '#define USE_TRANSMISSIONMAP' : '',
        n.thicknessMap ? '#define USE_THICKNESSMAP' : '',
        n.vertexTangents && n.flatShading === !1 ? '#define USE_TANGENT' : '',
        n.vertexColors || n.instancingColor ? '#define USE_COLOR' : '',
        n.vertexAlphas ? '#define USE_COLOR_ALPHA' : '',
        n.vertexUv1s ? '#define USE_UV1' : '',
        n.vertexUv2s ? '#define USE_UV2' : '',
        n.vertexUv3s ? '#define USE_UV3' : '',
        n.pointsUvs ? '#define USE_POINTS_UV' : '',
        n.gradientMap ? '#define USE_GRADIENTMAP' : '',
        n.flatShading ? '#define FLAT_SHADED' : '',
        n.doubleSided ? '#define DOUBLE_SIDED' : '',
        n.flipSided ? '#define FLIP_SIDED' : '',
        n.shadowMapEnabled ? '#define USE_SHADOWMAP' : '',
        n.shadowMapEnabled ? '#define ' + l : '',
        n.premultipliedAlpha ? '#define PREMULTIPLIED_ALPHA' : '',
        n.numLightProbes > 0 ? '#define USE_LIGHT_PROBES' : '',
        n.useLegacyLights ? '#define LEGACY_LIGHTS' : '',
        n.decodeVideoTexture ? '#define DECODE_VIDEO_TEXTURE' : '',
        n.logarithmicDepthBuffer ? '#define USE_LOGDEPTHBUF' : '',
        n.logarithmicDepthBuffer && n.rendererExtensionFragDepth
          ? '#define USE_LOGDEPTHBUF_EXT'
          : '',
        'uniform mat4 viewMatrix;',
        'uniform vec3 cameraPosition;',
        'uniform bool isOrthographic;',
        n.toneMapping !== Hi ? '#define TONE_MAPPING' : '',
        n.toneMapping !== Hi ? Ue.tonemapping_pars_fragment : '',
        n.toneMapping !== Hi ? nw('toneMapping', n.toneMapping) : '',
        n.dithering ? '#define DITHERING' : '',
        n.opaque ? '#define OPAQUE' : '',
        Ue.colorspace_pars_fragment,
        tw('linearToOutputTexel', n.outputColorSpace),
        n.useDepthPacking ? '#define DEPTH_PACKING ' + n.depthPacking : '',
        `
`,
      ].filter(ss).join(`
`))),
    (a = Ju(a)),
    (a = Lp(a, n)),
    (a = Dp(a, n)),
    (o = Ju(o)),
    (o = Lp(o, n)),
    (o = Dp(o, n)),
    (a = Up(a)),
    (o = Up(o)),
    n.isWebGL2 &&
      n.isRawShaderMaterial !== !0 &&
      ((x = `#version 300 es
`),
      (u =
        [
          v,
          'precision mediump sampler2DArray;',
          '#define attribute in',
          '#define varying out',
          '#define texture2D texture',
        ].join(`
`) +
        `
` +
        u),
      (_ =
        [
          'precision mediump sampler2DArray;',
          '#define varying in',
          n.glslVersion === Zh ? '' : 'layout(location = 0) out highp vec4 pc_fragColor;',
          n.glslVersion === Zh ? '' : '#define gl_FragColor pc_fragColor',
          '#define gl_FragDepthEXT gl_FragDepth',
          '#define texture2D texture',
          '#define textureCube texture',
          '#define texture2DProj textureProj',
          '#define texture2DLodEXT textureLod',
          '#define texture2DProjLodEXT textureProjLod',
          '#define textureCubeLodEXT textureLod',
          '#define texture2DGradEXT textureGrad',
          '#define texture2DProjGradEXT textureProjGrad',
          '#define textureCubeGradEXT textureGrad',
        ].join(`
`) +
        `
` +
        _));
  const E = x + u + a,
    C = x + _ + o,
    b = Pp(r, r.VERTEX_SHADER, E),
    T = Pp(r, r.FRAGMENT_SHADER, C);
  r.attachShader(p, b),
    r.attachShader(p, T),
    n.index0AttributeName !== void 0
      ? r.bindAttribLocation(p, 0, n.index0AttributeName)
      : n.morphTargets === !0 && r.bindAttribLocation(p, 0, 'position'),
    r.linkProgram(p);
  function D(ne) {
    if (t.debug.checkShaderErrors) {
      const J = r.getProgramInfoLog(p).trim(),
        L = r.getShaderInfoLog(b).trim(),
        X = r.getShaderInfoLog(T).trim();
      let j = !0,
        $ = !0;
      if (r.getProgramParameter(p, r.LINK_STATUS) === !1)
        if (((j = !1), typeof t.debug.onShaderError == 'function'))
          t.debug.onShaderError(r, p, b, T);
        else {
          const P = Np(r, b, 'vertex'),
            O = Np(r, T, 'fragment');
          console.error(
            'THREE.WebGLProgram: Shader Error ' +
              r.getError() +
              ' - VALIDATE_STATUS ' +
              r.getProgramParameter(p, r.VALIDATE_STATUS) +
              `

Material Name: ` +
              ne.name +
              `
Material Type: ` +
              ne.type +
              `

Program Info Log: ` +
              J +
              `
` +
              P +
              `
` +
              O,
          );
        }
      else
        J !== ''
          ? console.warn('THREE.WebGLProgram: Program Info Log:', J)
          : (L === '' || X === '') && ($ = !1);
      $ &&
        (ne.diagnostics = {
          runnable: j,
          programLog: J,
          vertexShader: { log: L, prefix: u },
          fragmentShader: { log: X, prefix: _ },
        });
    }
    r.deleteShader(b), r.deleteShader(T), (Y = new zo(r, p)), (S = aw(r, p));
  }
  let Y;
  this.getUniforms = function () {
    return Y === void 0 && D(this), Y;
  };
  let S;
  this.getAttributes = function () {
    return S === void 0 && D(this), S;
  };
  let R = n.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return R === !1 && (R = r.getProgramParameter(p, Z1)), R;
    }),
    (this.destroy = function () {
      i.releaseStatesOfProgram(this), r.deleteProgram(p), (this.program = void 0);
    }),
    (this.type = n.shaderType),
    (this.name = n.shaderName),
    (this.id = Q1++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = p),
    (this.vertexShader = b),
    (this.fragmentShader = T),
    this
  );
}
let _w = 0;
class vw {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const n = e.vertexShader,
      i = e.fragmentShader,
      r = this._getShaderStage(n),
      s = this._getShaderStage(i),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      a.has(s) === !1 && (a.add(s), s.usedTimes++),
      this
    );
  }
  remove(e) {
    const n = this.materialCache.get(e);
    for (const i of n) i.usedTimes--, i.usedTimes === 0 && this.shaderCache.delete(i.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const n = this.materialCache;
    let i = n.get(e);
    return i === void 0 && ((i = new Set()), n.set(e, i)), i;
  }
  _getShaderStage(e) {
    const n = this.shaderCache;
    let i = n.get(e);
    return i === void 0 && ((i = new yw(e)), n.set(e, i)), i;
  }
}
class yw {
  constructor(e) {
    (this.id = _w++), (this.code = e), (this.usedTimes = 0);
  }
}
function Sw(t, e, n, i, r, s, a) {
  const o = new E0(),
    l = new vw(),
    c = new Set(),
    d = [],
    f = r.isWebGL2,
    h = r.logarithmicDepthBuffer,
    g = r.vertexTextures;
  let v = r.precision;
  const y = {
    MeshDepthMaterial: 'depth',
    MeshDistanceMaterial: 'distanceRGBA',
    MeshNormalMaterial: 'normal',
    MeshBasicMaterial: 'basic',
    MeshLambertMaterial: 'lambert',
    MeshPhongMaterial: 'phong',
    MeshToonMaterial: 'toon',
    MeshStandardMaterial: 'physical',
    MeshPhysicalMaterial: 'physical',
    MeshMatcapMaterial: 'matcap',
    LineBasicMaterial: 'basic',
    LineDashedMaterial: 'dashed',
    PointsMaterial: 'points',
    ShadowMaterial: 'shadow',
    SpriteMaterial: 'sprite',
  };
  function p(S) {
    return c.add(S), S === 0 ? 'uv' : `uv${S}`;
  }
  function u(S, R, ne, J, L) {
    const X = J.fog,
      j = L.geometry,
      $ = S.isMeshStandardMaterial ? J.environment : null,
      P = (S.isMeshStandardMaterial ? n : e).get(S.envMap || $),
      O = P && P.mapping === Ul ? P.image.height : null,
      V = y[S.type];
    S.precision !== null &&
      ((v = r.getMaxPrecision(S.precision)),
      v !== S.precision &&
        console.warn(
          'THREE.WebGLProgram.getParameters:',
          S.precision,
          'not supported, using',
          v,
          'instead.',
        ));
    const K = j.morphAttributes.position || j.morphAttributes.normal || j.morphAttributes.color,
      se = K !== void 0 ? K.length : 0;
    let Te = 0;
    j.morphAttributes.position !== void 0 && (Te = 1),
      j.morphAttributes.normal !== void 0 && (Te = 2),
      j.morphAttributes.color !== void 0 && (Te = 3);
    let H, Z, ce, Se;
    if (V) {
      const Ze = Hn[V];
      (H = Ze.vertexShader), (Z = Ze.fragmentShader);
    } else
      (H = S.vertexShader),
        (Z = S.fragmentShader),
        l.update(S),
        (ce = l.getVertexShaderID(S)),
        (Se = l.getFragmentShaderID(S));
    const _e = t.getRenderTarget(),
      pe = L.isInstancedMesh === !0,
      Ye = L.isBatchedMesh === !0,
      be = !!S.map,
      I = !!S.matcap,
      Rt = !!P,
      ye = !!S.aoMap,
      ke = !!S.lightMap,
      Ee = !!S.bumpMap,
      Ve = !!S.normalMap,
      Fe = !!S.displacementMap,
      ze = !!S.emissiveMap,
      pt = !!S.metalnessMap,
      A = !!S.roughnessMap,
      M = S.anisotropy > 0,
      W = S.clearcoat > 0,
      q = S.iridescence > 0,
      te = S.sheen > 0,
      Q = S.transmission > 0,
      Ne = M && !!S.anisotropyMap,
      we = W && !!S.clearcoatMap,
      oe = W && !!S.clearcoatNormalMap,
      ue = W && !!S.clearcoatRoughnessMap,
      Le = q && !!S.iridescenceMap,
      ie = q && !!S.iridescenceThicknessMap,
      xt = te && !!S.sheenColorMap,
      Be = te && !!S.sheenRoughnessMap,
      ve = !!S.specularMap,
      me = !!S.specularColorMap,
      ge = !!S.specularIntensityMap,
      We = Q && !!S.transmissionMap,
      Ce = Q && !!S.thicknessMap,
      rt = !!S.gradientMap,
      N = !!S.alphaMap,
      le = S.alphaTest > 0,
      z = !!S.alphaHash,
      re = !!S.extensions;
    let de = Hi;
    S.toneMapped && (_e === null || _e.isXRRenderTarget === !0) && (de = t.toneMapping);
    const Ge = {
      isWebGL2: f,
      shaderID: V,
      shaderType: S.type,
      shaderName: S.name,
      vertexShader: H,
      fragmentShader: Z,
      defines: S.defines,
      customVertexShaderID: ce,
      customFragmentShaderID: Se,
      isRawShaderMaterial: S.isRawShaderMaterial === !0,
      glslVersion: S.glslVersion,
      precision: v,
      batching: Ye,
      instancing: pe,
      instancingColor: pe && L.instanceColor !== null,
      instancingMorph: pe && L.morphTexture !== null,
      supportsVertexTextures: g,
      outputColorSpace:
        _e === null ? t.outputColorSpace : _e.isXRRenderTarget === !0 ? _e.texture.colorSpace : Ki,
      alphaToCoverage: !!S.alphaToCoverage,
      map: be,
      matcap: I,
      envMap: Rt,
      envMapMode: Rt && P.mapping,
      envMapCubeUVHeight: O,
      aoMap: ye,
      lightMap: ke,
      bumpMap: Ee,
      normalMap: Ve,
      displacementMap: g && Fe,
      emissiveMap: ze,
      normalMapObjectSpace: Ve && S.normalMapType === Ay,
      normalMapTangentSpace: Ve && S.normalMapType === Ty,
      metalnessMap: pt,
      roughnessMap: A,
      anisotropy: M,
      anisotropyMap: Ne,
      clearcoat: W,
      clearcoatMap: we,
      clearcoatNormalMap: oe,
      clearcoatRoughnessMap: ue,
      iridescence: q,
      iridescenceMap: Le,
      iridescenceThicknessMap: ie,
      sheen: te,
      sheenColorMap: xt,
      sheenRoughnessMap: Be,
      specularMap: ve,
      specularColorMap: me,
      specularIntensityMap: ge,
      transmission: Q,
      transmissionMap: We,
      thicknessMap: Ce,
      gradientMap: rt,
      opaque: S.transparent === !1 && S.blending === fs && S.alphaToCoverage === !1,
      alphaMap: N,
      alphaTest: le,
      alphaHash: z,
      combine: S.combine,
      mapUv: be && p(S.map.channel),
      aoMapUv: ye && p(S.aoMap.channel),
      lightMapUv: ke && p(S.lightMap.channel),
      bumpMapUv: Ee && p(S.bumpMap.channel),
      normalMapUv: Ve && p(S.normalMap.channel),
      displacementMapUv: Fe && p(S.displacementMap.channel),
      emissiveMapUv: ze && p(S.emissiveMap.channel),
      metalnessMapUv: pt && p(S.metalnessMap.channel),
      roughnessMapUv: A && p(S.roughnessMap.channel),
      anisotropyMapUv: Ne && p(S.anisotropyMap.channel),
      clearcoatMapUv: we && p(S.clearcoatMap.channel),
      clearcoatNormalMapUv: oe && p(S.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ue && p(S.clearcoatRoughnessMap.channel),
      iridescenceMapUv: Le && p(S.iridescenceMap.channel),
      iridescenceThicknessMapUv: ie && p(S.iridescenceThicknessMap.channel),
      sheenColorMapUv: xt && p(S.sheenColorMap.channel),
      sheenRoughnessMapUv: Be && p(S.sheenRoughnessMap.channel),
      specularMapUv: ve && p(S.specularMap.channel),
      specularColorMapUv: me && p(S.specularColorMap.channel),
      specularIntensityMapUv: ge && p(S.specularIntensityMap.channel),
      transmissionMapUv: We && p(S.transmissionMap.channel),
      thicknessMapUv: Ce && p(S.thicknessMap.channel),
      alphaMapUv: N && p(S.alphaMap.channel),
      vertexTangents: !!j.attributes.tangent && (Ve || M),
      vertexColors: S.vertexColors,
      vertexAlphas:
        S.vertexColors === !0 && !!j.attributes.color && j.attributes.color.itemSize === 4,
      pointsUvs: L.isPoints === !0 && !!j.attributes.uv && (be || N),
      fog: !!X,
      useFog: S.fog === !0,
      fogExp2: !!X && X.isFogExp2,
      flatShading: S.flatShading === !0,
      sizeAttenuation: S.sizeAttenuation === !0,
      logarithmicDepthBuffer: h,
      skinning: L.isSkinnedMesh === !0,
      morphTargets: j.morphAttributes.position !== void 0,
      morphNormals: j.morphAttributes.normal !== void 0,
      morphColors: j.morphAttributes.color !== void 0,
      morphTargetsCount: se,
      morphTextureStride: Te,
      numDirLights: R.directional.length,
      numPointLights: R.point.length,
      numSpotLights: R.spot.length,
      numSpotLightMaps: R.spotLightMap.length,
      numRectAreaLights: R.rectArea.length,
      numHemiLights: R.hemi.length,
      numDirLightShadows: R.directionalShadowMap.length,
      numPointLightShadows: R.pointShadowMap.length,
      numSpotLightShadows: R.spotShadowMap.length,
      numSpotLightShadowsWithMaps: R.numSpotLightShadowsWithMaps,
      numLightProbes: R.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: S.dithering,
      shadowMapEnabled: t.shadowMap.enabled && ne.length > 0,
      shadowMapType: t.shadowMap.type,
      toneMapping: de,
      useLegacyLights: t._useLegacyLights,
      decodeVideoTexture:
        be && S.map.isVideoTexture === !0 && Ke.getTransfer(S.map.colorSpace) === nt,
      premultipliedAlpha: S.premultipliedAlpha,
      doubleSided: S.side === ii,
      flipSided: S.side === nn,
      useDepthPacking: S.depthPacking >= 0,
      depthPacking: S.depthPacking || 0,
      index0AttributeName: S.index0AttributeName,
      extensionDerivatives: re && S.extensions.derivatives === !0,
      extensionFragDepth: re && S.extensions.fragDepth === !0,
      extensionDrawBuffers: re && S.extensions.drawBuffers === !0,
      extensionShaderTextureLOD: re && S.extensions.shaderTextureLOD === !0,
      extensionClipCullDistance:
        re && S.extensions.clipCullDistance === !0 && i.has('WEBGL_clip_cull_distance'),
      extensionMultiDraw: re && S.extensions.multiDraw === !0 && i.has('WEBGL_multi_draw'),
      rendererExtensionFragDepth: f || i.has('EXT_frag_depth'),
      rendererExtensionDrawBuffers: f || i.has('WEBGL_draw_buffers'),
      rendererExtensionShaderTextureLod: f || i.has('EXT_shader_texture_lod'),
      rendererExtensionParallelShaderCompile: i.has('KHR_parallel_shader_compile'),
      customProgramCacheKey: S.customProgramCacheKey(),
    };
    return (
      (Ge.vertexUv1s = c.has(1)),
      (Ge.vertexUv2s = c.has(2)),
      (Ge.vertexUv3s = c.has(3)),
      c.clear(),
      Ge
    );
  }
  function _(S) {
    const R = [];
    if (
      (S.shaderID
        ? R.push(S.shaderID)
        : (R.push(S.customVertexShaderID), R.push(S.customFragmentShaderID)),
      S.defines !== void 0)
    )
      for (const ne in S.defines) R.push(ne), R.push(S.defines[ne]);
    return (
      S.isRawShaderMaterial === !1 && (x(R, S), E(R, S), R.push(t.outputColorSpace)),
      R.push(S.customProgramCacheKey),
      R.join()
    );
  }
  function x(S, R) {
    S.push(R.precision),
      S.push(R.outputColorSpace),
      S.push(R.envMapMode),
      S.push(R.envMapCubeUVHeight),
      S.push(R.mapUv),
      S.push(R.alphaMapUv),
      S.push(R.lightMapUv),
      S.push(R.aoMapUv),
      S.push(R.bumpMapUv),
      S.push(R.normalMapUv),
      S.push(R.displacementMapUv),
      S.push(R.emissiveMapUv),
      S.push(R.metalnessMapUv),
      S.push(R.roughnessMapUv),
      S.push(R.anisotropyMapUv),
      S.push(R.clearcoatMapUv),
      S.push(R.clearcoatNormalMapUv),
      S.push(R.clearcoatRoughnessMapUv),
      S.push(R.iridescenceMapUv),
      S.push(R.iridescenceThicknessMapUv),
      S.push(R.sheenColorMapUv),
      S.push(R.sheenRoughnessMapUv),
      S.push(R.specularMapUv),
      S.push(R.specularColorMapUv),
      S.push(R.specularIntensityMapUv),
      S.push(R.transmissionMapUv),
      S.push(R.thicknessMapUv),
      S.push(R.combine),
      S.push(R.fogExp2),
      S.push(R.sizeAttenuation),
      S.push(R.morphTargetsCount),
      S.push(R.morphAttributeCount),
      S.push(R.numDirLights),
      S.push(R.numPointLights),
      S.push(R.numSpotLights),
      S.push(R.numSpotLightMaps),
      S.push(R.numHemiLights),
      S.push(R.numRectAreaLights),
      S.push(R.numDirLightShadows),
      S.push(R.numPointLightShadows),
      S.push(R.numSpotLightShadows),
      S.push(R.numSpotLightShadowsWithMaps),
      S.push(R.numLightProbes),
      S.push(R.shadowMapType),
      S.push(R.toneMapping),
      S.push(R.numClippingPlanes),
      S.push(R.numClipIntersection),
      S.push(R.depthPacking);
  }
  function E(S, R) {
    o.disableAll(),
      R.isWebGL2 && o.enable(0),
      R.supportsVertexTextures && o.enable(1),
      R.instancing && o.enable(2),
      R.instancingColor && o.enable(3),
      R.instancingMorph && o.enable(4),
      R.matcap && o.enable(5),
      R.envMap && o.enable(6),
      R.normalMapObjectSpace && o.enable(7),
      R.normalMapTangentSpace && o.enable(8),
      R.clearcoat && o.enable(9),
      R.iridescence && o.enable(10),
      R.alphaTest && o.enable(11),
      R.vertexColors && o.enable(12),
      R.vertexAlphas && o.enable(13),
      R.vertexUv1s && o.enable(14),
      R.vertexUv2s && o.enable(15),
      R.vertexUv3s && o.enable(16),
      R.vertexTangents && o.enable(17),
      R.anisotropy && o.enable(18),
      R.alphaHash && o.enable(19),
      R.batching && o.enable(20),
      S.push(o.mask),
      o.disableAll(),
      R.fog && o.enable(0),
      R.useFog && o.enable(1),
      R.flatShading && o.enable(2),
      R.logarithmicDepthBuffer && o.enable(3),
      R.skinning && o.enable(4),
      R.morphTargets && o.enable(5),
      R.morphNormals && o.enable(6),
      R.morphColors && o.enable(7),
      R.premultipliedAlpha && o.enable(8),
      R.shadowMapEnabled && o.enable(9),
      R.useLegacyLights && o.enable(10),
      R.doubleSided && o.enable(11),
      R.flipSided && o.enable(12),
      R.useDepthPacking && o.enable(13),
      R.dithering && o.enable(14),
      R.transmission && o.enable(15),
      R.sheen && o.enable(16),
      R.opaque && o.enable(17),
      R.pointsUvs && o.enable(18),
      R.decodeVideoTexture && o.enable(19),
      R.alphaToCoverage && o.enable(20),
      S.push(o.mask);
  }
  function C(S) {
    const R = y[S.type];
    let ne;
    if (R) {
      const J = Hn[R];
      ne = eS.clone(J.uniforms);
    } else ne = S.uniforms;
    return ne;
  }
  function b(S, R) {
    let ne;
    for (let J = 0, L = d.length; J < L; J++) {
      const X = d[J];
      if (X.cacheKey === R) {
        (ne = X), ++ne.usedTimes;
        break;
      }
    }
    return ne === void 0 && ((ne = new xw(t, R, S, s)), d.push(ne)), ne;
  }
  function T(S) {
    if (--S.usedTimes === 0) {
      const R = d.indexOf(S);
      (d[R] = d[d.length - 1]), d.pop(), S.destroy();
    }
  }
  function D(S) {
    l.remove(S);
  }
  function Y() {
    l.dispose();
  }
  return {
    getParameters: u,
    getProgramCacheKey: _,
    getUniforms: C,
    acquireProgram: b,
    releaseProgram: T,
    releaseShaderCache: D,
    programs: d,
    dispose: Y,
  };
}
function Mw() {
  let t = new WeakMap();
  function e(s) {
    let a = t.get(s);
    return a === void 0 && ((a = {}), t.set(s, a)), a;
  }
  function n(s) {
    t.delete(s);
  }
  function i(s, a, o) {
    t.get(s)[a] = o;
  }
  function r() {
    t = new WeakMap();
  }
  return { get: e, remove: n, update: i, dispose: r };
}
function Ew(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.material.id !== e.material.id
    ? t.material.id - e.material.id
    : t.z !== e.z
    ? t.z - e.z
    : t.id - e.id;
}
function Fp(t, e) {
  return t.groupOrder !== e.groupOrder
    ? t.groupOrder - e.groupOrder
    : t.renderOrder !== e.renderOrder
    ? t.renderOrder - e.renderOrder
    : t.z !== e.z
    ? e.z - t.z
    : t.id - e.id;
}
function Op() {
  const t = [];
  let e = 0;
  const n = [],
    i = [],
    r = [];
  function s() {
    (e = 0), (n.length = 0), (i.length = 0), (r.length = 0);
  }
  function a(f, h, g, v, y, p) {
    let u = t[e];
    return (
      u === void 0
        ? ((u = {
            id: f.id,
            object: f,
            geometry: h,
            material: g,
            groupOrder: v,
            renderOrder: f.renderOrder,
            z: y,
            group: p,
          }),
          (t[e] = u))
        : ((u.id = f.id),
          (u.object = f),
          (u.geometry = h),
          (u.material = g),
          (u.groupOrder = v),
          (u.renderOrder = f.renderOrder),
          (u.z = y),
          (u.group = p)),
      e++,
      u
    );
  }
  function o(f, h, g, v, y, p) {
    const u = a(f, h, g, v, y, p);
    g.transmission > 0 ? i.push(u) : g.transparent === !0 ? r.push(u) : n.push(u);
  }
  function l(f, h, g, v, y, p) {
    const u = a(f, h, g, v, y, p);
    g.transmission > 0 ? i.unshift(u) : g.transparent === !0 ? r.unshift(u) : n.unshift(u);
  }
  function c(f, h) {
    n.length > 1 && n.sort(f || Ew),
      i.length > 1 && i.sort(h || Fp),
      r.length > 1 && r.sort(h || Fp);
  }
  function d() {
    for (let f = e, h = t.length; f < h; f++) {
      const g = t[f];
      if (g.id === null) break;
      (g.id = null), (g.object = null), (g.geometry = null), (g.material = null), (g.group = null);
    }
  }
  return {
    opaque: n,
    transmissive: i,
    transparent: r,
    init: s,
    push: o,
    unshift: l,
    finish: d,
    sort: c,
  };
}
function ww() {
  let t = new WeakMap();
  function e(i, r) {
    const s = t.get(i);
    let a;
    return (
      s === void 0
        ? ((a = new Op()), t.set(i, [a]))
        : r >= s.length
        ? ((a = new Op()), s.push(a))
        : (a = s[r]),
      a
    );
  }
  function n() {
    t = new WeakMap();
  }
  return { get: e, dispose: n };
}
function Tw() {
  const t = {};
  return {
    get: function (e) {
      if (t[e.id] !== void 0) return t[e.id];
      let n;
      switch (e.type) {
        case 'DirectionalLight':
          n = { direction: new F(), color: new qe() };
          break;
        case 'SpotLight':
          n = {
            position: new F(),
            direction: new F(),
            color: new qe(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case 'PointLight':
          n = { position: new F(), color: new qe(), distance: 0, decay: 0 };
          break;
        case 'HemisphereLight':
          n = { direction: new F(), skyColor: new qe(), groundColor: new qe() };
          break;
        case 'RectAreaLight':
          n = { color: new qe(), position: new F(), halfWidth: new F(), halfHeight: new F() };
          break;
      }
      return (t[e.id] = n), n;
    },
  };
}
function Aw() {
  const t = {};
  return {
    get: function (e) {
      if (t[e.id] !== void 0) return t[e.id];
      let n;
      switch (e.type) {
        case 'DirectionalLight':
          n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new je() };
          break;
        case 'SpotLight':
          n = { shadowBias: 0, shadowNormalBias: 0, shadowRadius: 1, shadowMapSize: new je() };
          break;
        case 'PointLight':
          n = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new je(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (t[e.id] = n), n;
    },
  };
}
let bw = 0;
function Rw(t, e) {
  return (e.castShadow ? 2 : 0) - (t.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (t.map ? 1 : 0);
}
function Cw(t, e) {
  const n = new Tw(),
    i = Aw(),
    r = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let d = 0; d < 9; d++) r.probe.push(new F());
  const s = new F(),
    a = new dt(),
    o = new dt();
  function l(d, f) {
    let h = 0,
      g = 0,
      v = 0;
    for (let ne = 0; ne < 9; ne++) r.probe[ne].set(0, 0, 0);
    let y = 0,
      p = 0,
      u = 0,
      _ = 0,
      x = 0,
      E = 0,
      C = 0,
      b = 0,
      T = 0,
      D = 0,
      Y = 0;
    d.sort(Rw);
    const S = f === !0 ? Math.PI : 1;
    for (let ne = 0, J = d.length; ne < J; ne++) {
      const L = d[ne],
        X = L.color,
        j = L.intensity,
        $ = L.distance,
        P = L.shadow && L.shadow.map ? L.shadow.map.texture : null;
      if (L.isAmbientLight) (h += X.r * j * S), (g += X.g * j * S), (v += X.b * j * S);
      else if (L.isLightProbe) {
        for (let O = 0; O < 9; O++) r.probe[O].addScaledVector(L.sh.coefficients[O], j);
        Y++;
      } else if (L.isDirectionalLight) {
        const O = n.get(L);
        if ((O.color.copy(L.color).multiplyScalar(L.intensity * S), L.castShadow)) {
          const V = L.shadow,
            K = i.get(L);
          (K.shadowBias = V.bias),
            (K.shadowNormalBias = V.normalBias),
            (K.shadowRadius = V.radius),
            (K.shadowMapSize = V.mapSize),
            (r.directionalShadow[y] = K),
            (r.directionalShadowMap[y] = P),
            (r.directionalShadowMatrix[y] = L.shadow.matrix),
            E++;
        }
        (r.directional[y] = O), y++;
      } else if (L.isSpotLight) {
        const O = n.get(L);
        O.position.setFromMatrixPosition(L.matrixWorld),
          O.color.copy(X).multiplyScalar(j * S),
          (O.distance = $),
          (O.coneCos = Math.cos(L.angle)),
          (O.penumbraCos = Math.cos(L.angle * (1 - L.penumbra))),
          (O.decay = L.decay),
          (r.spot[u] = O);
        const V = L.shadow;
        if (
          (L.map && ((r.spotLightMap[T] = L.map), T++, V.updateMatrices(L), L.castShadow && D++),
          (r.spotLightMatrix[u] = V.matrix),
          L.castShadow)
        ) {
          const K = i.get(L);
          (K.shadowBias = V.bias),
            (K.shadowNormalBias = V.normalBias),
            (K.shadowRadius = V.radius),
            (K.shadowMapSize = V.mapSize),
            (r.spotShadow[u] = K),
            (r.spotShadowMap[u] = P),
            b++;
        }
        u++;
      } else if (L.isRectAreaLight) {
        const O = n.get(L);
        O.color.copy(X).multiplyScalar(j),
          O.halfWidth.set(L.width * 0.5, 0, 0),
          O.halfHeight.set(0, L.height * 0.5, 0),
          (r.rectArea[_] = O),
          _++;
      } else if (L.isPointLight) {
        const O = n.get(L);
        if (
          (O.color.copy(L.color).multiplyScalar(L.intensity * S),
          (O.distance = L.distance),
          (O.decay = L.decay),
          L.castShadow)
        ) {
          const V = L.shadow,
            K = i.get(L);
          (K.shadowBias = V.bias),
            (K.shadowNormalBias = V.normalBias),
            (K.shadowRadius = V.radius),
            (K.shadowMapSize = V.mapSize),
            (K.shadowCameraNear = V.camera.near),
            (K.shadowCameraFar = V.camera.far),
            (r.pointShadow[p] = K),
            (r.pointShadowMap[p] = P),
            (r.pointShadowMatrix[p] = L.shadow.matrix),
            C++;
        }
        (r.point[p] = O), p++;
      } else if (L.isHemisphereLight) {
        const O = n.get(L);
        O.skyColor.copy(L.color).multiplyScalar(j * S),
          O.groundColor.copy(L.groundColor).multiplyScalar(j * S),
          (r.hemi[x] = O),
          x++;
      }
    }
    _ > 0 &&
      (e.isWebGL2
        ? t.has('OES_texture_float_linear') === !0
          ? ((r.rectAreaLTC1 = ae.LTC_FLOAT_1), (r.rectAreaLTC2 = ae.LTC_FLOAT_2))
          : ((r.rectAreaLTC1 = ae.LTC_HALF_1), (r.rectAreaLTC2 = ae.LTC_HALF_2))
        : t.has('OES_texture_float_linear') === !0
        ? ((r.rectAreaLTC1 = ae.LTC_FLOAT_1), (r.rectAreaLTC2 = ae.LTC_FLOAT_2))
        : t.has('OES_texture_half_float_linear') === !0
        ? ((r.rectAreaLTC1 = ae.LTC_HALF_1), (r.rectAreaLTC2 = ae.LTC_HALF_2))
        : console.error(
            'THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.',
          )),
      (r.ambient[0] = h),
      (r.ambient[1] = g),
      (r.ambient[2] = v);
    const R = r.hash;
    (R.directionalLength !== y ||
      R.pointLength !== p ||
      R.spotLength !== u ||
      R.rectAreaLength !== _ ||
      R.hemiLength !== x ||
      R.numDirectionalShadows !== E ||
      R.numPointShadows !== C ||
      R.numSpotShadows !== b ||
      R.numSpotMaps !== T ||
      R.numLightProbes !== Y) &&
      ((r.directional.length = y),
      (r.spot.length = u),
      (r.rectArea.length = _),
      (r.point.length = p),
      (r.hemi.length = x),
      (r.directionalShadow.length = E),
      (r.directionalShadowMap.length = E),
      (r.pointShadow.length = C),
      (r.pointShadowMap.length = C),
      (r.spotShadow.length = b),
      (r.spotShadowMap.length = b),
      (r.directionalShadowMatrix.length = E),
      (r.pointShadowMatrix.length = C),
      (r.spotLightMatrix.length = b + T - D),
      (r.spotLightMap.length = T),
      (r.numSpotLightShadowsWithMaps = D),
      (r.numLightProbes = Y),
      (R.directionalLength = y),
      (R.pointLength = p),
      (R.spotLength = u),
      (R.rectAreaLength = _),
      (R.hemiLength = x),
      (R.numDirectionalShadows = E),
      (R.numPointShadows = C),
      (R.numSpotShadows = b),
      (R.numSpotMaps = T),
      (R.numLightProbes = Y),
      (r.version = bw++));
  }
  function c(d, f) {
    let h = 0,
      g = 0,
      v = 0,
      y = 0,
      p = 0;
    const u = f.matrixWorldInverse;
    for (let _ = 0, x = d.length; _ < x; _++) {
      const E = d[_];
      if (E.isDirectionalLight) {
        const C = r.directional[h];
        C.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          C.direction.sub(s),
          C.direction.transformDirection(u),
          h++;
      } else if (E.isSpotLight) {
        const C = r.spot[v];
        C.position.setFromMatrixPosition(E.matrixWorld),
          C.position.applyMatrix4(u),
          C.direction.setFromMatrixPosition(E.matrixWorld),
          s.setFromMatrixPosition(E.target.matrixWorld),
          C.direction.sub(s),
          C.direction.transformDirection(u),
          v++;
      } else if (E.isRectAreaLight) {
        const C = r.rectArea[y];
        C.position.setFromMatrixPosition(E.matrixWorld),
          C.position.applyMatrix4(u),
          o.identity(),
          a.copy(E.matrixWorld),
          a.premultiply(u),
          o.extractRotation(a),
          C.halfWidth.set(E.width * 0.5, 0, 0),
          C.halfHeight.set(0, E.height * 0.5, 0),
          C.halfWidth.applyMatrix4(o),
          C.halfHeight.applyMatrix4(o),
          y++;
      } else if (E.isPointLight) {
        const C = r.point[g];
        C.position.setFromMatrixPosition(E.matrixWorld), C.position.applyMatrix4(u), g++;
      } else if (E.isHemisphereLight) {
        const C = r.hemi[p];
        C.direction.setFromMatrixPosition(E.matrixWorld), C.direction.transformDirection(u), p++;
      }
    }
  }
  return { setup: l, setupView: c, state: r };
}
function kp(t, e) {
  const n = new Cw(t, e),
    i = [],
    r = [];
  function s() {
    (i.length = 0), (r.length = 0);
  }
  function a(f) {
    i.push(f);
  }
  function o(f) {
    r.push(f);
  }
  function l(f) {
    n.setup(i, f);
  }
  function c(f) {
    n.setupView(i, f);
  }
  return {
    init: s,
    state: { lightsArray: i, shadowsArray: r, lights: n },
    setupLights: l,
    setupLightsView: c,
    pushLight: a,
    pushShadow: o,
  };
}
function Pw(t, e) {
  let n = new WeakMap();
  function i(s, a = 0) {
    const o = n.get(s);
    let l;
    return (
      o === void 0
        ? ((l = new kp(t, e)), n.set(s, [l]))
        : a >= o.length
        ? ((l = new kp(t, e)), o.push(l))
        : (l = o[a]),
      l
    );
  }
  function r() {
    n = new WeakMap();
  }
  return { get: i, dispose: r };
}
class Nw extends Ua {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = 'MeshDepthMaterial'),
      (this.depthPacking = Ey),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Lw extends Ua {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = 'MeshDistanceMaterial'),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const Dw = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  Uw = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Iw(t, e, n) {
  let i = new Jd();
  const r = new je(),
    s = new je(),
    a = new ot(),
    o = new Nw({ depthPacking: wy }),
    l = new Lw(),
    c = {},
    d = n.maxTextureSize,
    f = { [ji]: nn, [nn]: ji, [ii]: ii },
    h = new Xi({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new je() },
        radius: { value: 4 },
      },
      vertexShader: Dw,
      fragmentShader: Uw,
    }),
    g = h.clone();
  g.defines.HORIZONTAL_PASS = 1;
  const v = new gi();
  v.setAttribute('position', new Xn(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3));
  const y = new li(v, h),
    p = this;
  (this.enabled = !1), (this.autoUpdate = !0), (this.needsUpdate = !1), (this.type = o0);
  let u = this.type;
  this.render = function (b, T, D) {
    if (p.enabled === !1 || (p.autoUpdate === !1 && p.needsUpdate === !1) || b.length === 0) return;
    const Y = t.getRenderTarget(),
      S = t.getActiveCubeFace(),
      R = t.getActiveMipmapLevel(),
      ne = t.state;
    ne.setBlending(Bi),
      ne.buffers.color.setClear(1, 1, 1, 1),
      ne.buffers.depth.setTest(!0),
      ne.setScissorTest(!1);
    const J = u !== ei && this.type === ei,
      L = u === ei && this.type !== ei;
    for (let X = 0, j = b.length; X < j; X++) {
      const $ = b[X],
        P = $.shadow;
      if (P === void 0) {
        console.warn('THREE.WebGLShadowMap:', $, 'has no shadow.');
        continue;
      }
      if (P.autoUpdate === !1 && P.needsUpdate === !1) continue;
      r.copy(P.mapSize);
      const O = P.getFrameExtents();
      if (
        (r.multiply(O),
        s.copy(P.mapSize),
        (r.x > d || r.y > d) &&
          (r.x > d && ((s.x = Math.floor(d / O.x)), (r.x = s.x * O.x), (P.mapSize.x = s.x)),
          r.y > d && ((s.y = Math.floor(d / O.y)), (r.y = s.y * O.y), (P.mapSize.y = s.y))),
        P.map === null || J === !0 || L === !0)
      ) {
        const K = this.type !== ei ? { minFilter: Vt, magFilter: Vt } : {};
        P.map !== null && P.map.dispose(),
          (P.map = new Tr(r.x, r.y, K)),
          (P.map.texture.name = $.name + '.shadowMap'),
          P.camera.updateProjectionMatrix();
      }
      t.setRenderTarget(P.map), t.clear();
      const V = P.getViewportCount();
      for (let K = 0; K < V; K++) {
        const se = P.getViewport(K);
        a.set(s.x * se.x, s.y * se.y, s.x * se.z, s.y * se.w),
          ne.viewport(a),
          P.updateMatrices($, K),
          (i = P.getFrustum()),
          E(T, D, P.camera, $, this.type);
      }
      P.isPointLightShadow !== !0 && this.type === ei && _(P, D), (P.needsUpdate = !1);
    }
    (u = this.type), (p.needsUpdate = !1), t.setRenderTarget(Y, S, R);
  };
  function _(b, T) {
    const D = e.update(y);
    h.defines.VSM_SAMPLES !== b.blurSamples &&
      ((h.defines.VSM_SAMPLES = b.blurSamples),
      (g.defines.VSM_SAMPLES = b.blurSamples),
      (h.needsUpdate = !0),
      (g.needsUpdate = !0)),
      b.mapPass === null && (b.mapPass = new Tr(r.x, r.y)),
      (h.uniforms.shadow_pass.value = b.map.texture),
      (h.uniforms.resolution.value = b.mapSize),
      (h.uniforms.radius.value = b.radius),
      t.setRenderTarget(b.mapPass),
      t.clear(),
      t.renderBufferDirect(T, null, D, h, y, null),
      (g.uniforms.shadow_pass.value = b.mapPass.texture),
      (g.uniforms.resolution.value = b.mapSize),
      (g.uniforms.radius.value = b.radius),
      t.setRenderTarget(b.map),
      t.clear(),
      t.renderBufferDirect(T, null, D, g, y, null);
  }
  function x(b, T, D, Y) {
    let S = null;
    const R = D.isPointLight === !0 ? b.customDistanceMaterial : b.customDepthMaterial;
    if (R !== void 0) S = R;
    else if (
      ((S = D.isPointLight === !0 ? l : o),
      (t.localClippingEnabled &&
        T.clipShadows === !0 &&
        Array.isArray(T.clippingPlanes) &&
        T.clippingPlanes.length !== 0) ||
        (T.displacementMap && T.displacementScale !== 0) ||
        (T.alphaMap && T.alphaTest > 0) ||
        (T.map && T.alphaTest > 0))
    ) {
      const ne = S.uuid,
        J = T.uuid;
      let L = c[ne];
      L === void 0 && ((L = {}), (c[ne] = L));
      let X = L[J];
      X === void 0 && ((X = S.clone()), (L[J] = X), T.addEventListener('dispose', C)), (S = X);
    }
    if (
      ((S.visible = T.visible),
      (S.wireframe = T.wireframe),
      Y === ei
        ? (S.side = T.shadowSide !== null ? T.shadowSide : T.side)
        : (S.side = T.shadowSide !== null ? T.shadowSide : f[T.side]),
      (S.alphaMap = T.alphaMap),
      (S.alphaTest = T.alphaTest),
      (S.map = T.map),
      (S.clipShadows = T.clipShadows),
      (S.clippingPlanes = T.clippingPlanes),
      (S.clipIntersection = T.clipIntersection),
      (S.displacementMap = T.displacementMap),
      (S.displacementScale = T.displacementScale),
      (S.displacementBias = T.displacementBias),
      (S.wireframeLinewidth = T.wireframeLinewidth),
      (S.linewidth = T.linewidth),
      D.isPointLight === !0 && S.isMeshDistanceMaterial === !0)
    ) {
      const ne = t.properties.get(S);
      ne.light = D;
    }
    return S;
  }
  function E(b, T, D, Y, S) {
    if (b.visible === !1) return;
    if (
      b.layers.test(T.layers) &&
      (b.isMesh || b.isLine || b.isPoints) &&
      (b.castShadow || (b.receiveShadow && S === ei)) &&
      (!b.frustumCulled || i.intersectsObject(b))
    ) {
      b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse, b.matrixWorld);
      const J = e.update(b),
        L = b.material;
      if (Array.isArray(L)) {
        const X = J.groups;
        for (let j = 0, $ = X.length; j < $; j++) {
          const P = X[j],
            O = L[P.materialIndex];
          if (O && O.visible) {
            const V = x(b, O, Y, S);
            b.onBeforeShadow(t, b, T, D, J, V, P),
              t.renderBufferDirect(D, null, J, V, b, P),
              b.onAfterShadow(t, b, T, D, J, V, P);
          }
        }
      } else if (L.visible) {
        const X = x(b, L, Y, S);
        b.onBeforeShadow(t, b, T, D, J, X, null),
          t.renderBufferDirect(D, null, J, X, b, null),
          b.onAfterShadow(t, b, T, D, J, X, null);
      }
    }
    const ne = b.children;
    for (let J = 0, L = ne.length; J < L; J++) E(ne[J], T, D, Y, S);
  }
  function C(b) {
    b.target.removeEventListener('dispose', C);
    for (const D in c) {
      const Y = c[D],
        S = b.target.uuid;
      S in Y && (Y[S].dispose(), delete Y[S]);
    }
  }
}
function Fw(t, e, n) {
  const i = n.isWebGL2;
  function r() {
    let N = !1;
    const le = new ot();
    let z = null;
    const re = new ot(0, 0, 0, 0);
    return {
      setMask: function (de) {
        z !== de && !N && (t.colorMask(de, de, de, de), (z = de));
      },
      setLocked: function (de) {
        N = de;
      },
      setClear: function (de, Ge, Ze, Ct, gn) {
        gn === !0 && ((de *= Ct), (Ge *= Ct), (Ze *= Ct)),
          le.set(de, Ge, Ze, Ct),
          re.equals(le) === !1 && (t.clearColor(de, Ge, Ze, Ct), re.copy(le));
      },
      reset: function () {
        (N = !1), (z = null), re.set(-1, 0, 0, 0);
      },
    };
  }
  function s() {
    let N = !1,
      le = null,
      z = null,
      re = null;
    return {
      setTest: function (de) {
        de ? pe(t.DEPTH_TEST) : Ye(t.DEPTH_TEST);
      },
      setMask: function (de) {
        le !== de && !N && (t.depthMask(de), (le = de));
      },
      setFunc: function (de) {
        if (z !== de) {
          switch (de) {
            case Jv:
              t.depthFunc(t.NEVER);
              break;
            case ey:
              t.depthFunc(t.ALWAYS);
              break;
            case ty:
              t.depthFunc(t.LESS);
              break;
            case dl:
              t.depthFunc(t.LEQUAL);
              break;
            case ny:
              t.depthFunc(t.EQUAL);
              break;
            case iy:
              t.depthFunc(t.GEQUAL);
              break;
            case ry:
              t.depthFunc(t.GREATER);
              break;
            case sy:
              t.depthFunc(t.NOTEQUAL);
              break;
            default:
              t.depthFunc(t.LEQUAL);
          }
          z = de;
        }
      },
      setLocked: function (de) {
        N = de;
      },
      setClear: function (de) {
        re !== de && (t.clearDepth(de), (re = de));
      },
      reset: function () {
        (N = !1), (le = null), (z = null), (re = null);
      },
    };
  }
  function a() {
    let N = !1,
      le = null,
      z = null,
      re = null,
      de = null,
      Ge = null,
      Ze = null,
      Ct = null,
      gn = null;
    return {
      setTest: function (Qe) {
        N || (Qe ? pe(t.STENCIL_TEST) : Ye(t.STENCIL_TEST));
      },
      setMask: function (Qe) {
        le !== Qe && !N && (t.stencilMask(Qe), (le = Qe));
      },
      setFunc: function (Qe, Bt, On) {
        (z !== Qe || re !== Bt || de !== On) &&
          (t.stencilFunc(Qe, Bt, On), (z = Qe), (re = Bt), (de = On));
      },
      setOp: function (Qe, Bt, On) {
        (Ge !== Qe || Ze !== Bt || Ct !== On) &&
          (t.stencilOp(Qe, Bt, On), (Ge = Qe), (Ze = Bt), (Ct = On));
      },
      setLocked: function (Qe) {
        N = Qe;
      },
      setClear: function (Qe) {
        gn !== Qe && (t.clearStencil(Qe), (gn = Qe));
      },
      reset: function () {
        (N = !1),
          (le = null),
          (z = null),
          (re = null),
          (de = null),
          (Ge = null),
          (Ze = null),
          (Ct = null),
          (gn = null);
      },
    };
  }
  const o = new r(),
    l = new s(),
    c = new a(),
    d = new WeakMap(),
    f = new WeakMap();
  let h = {},
    g = {},
    v = new WeakMap(),
    y = [],
    p = null,
    u = !1,
    _ = null,
    x = null,
    E = null,
    C = null,
    b = null,
    T = null,
    D = null,
    Y = new qe(0, 0, 0),
    S = 0,
    R = !1,
    ne = null,
    J = null,
    L = null,
    X = null,
    j = null;
  const $ = t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let P = !1,
    O = 0;
  const V = t.getParameter(t.VERSION);
  V.indexOf('WebGL') !== -1
    ? ((O = parseFloat(/^WebGL (\d)/.exec(V)[1])), (P = O >= 1))
    : V.indexOf('OpenGL ES') !== -1 &&
      ((O = parseFloat(/^OpenGL ES (\d)/.exec(V)[1])), (P = O >= 2));
  let K = null,
    se = {};
  const Te = t.getParameter(t.SCISSOR_BOX),
    H = t.getParameter(t.VIEWPORT),
    Z = new ot().fromArray(Te),
    ce = new ot().fromArray(H);
  function Se(N, le, z, re) {
    const de = new Uint8Array(4),
      Ge = t.createTexture();
    t.bindTexture(N, Ge),
      t.texParameteri(N, t.TEXTURE_MIN_FILTER, t.NEAREST),
      t.texParameteri(N, t.TEXTURE_MAG_FILTER, t.NEAREST);
    for (let Ze = 0; Ze < z; Ze++)
      i && (N === t.TEXTURE_3D || N === t.TEXTURE_2D_ARRAY)
        ? t.texImage3D(le, 0, t.RGBA, 1, 1, re, 0, t.RGBA, t.UNSIGNED_BYTE, de)
        : t.texImage2D(le + Ze, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, de);
    return Ge;
  }
  const _e = {};
  (_e[t.TEXTURE_2D] = Se(t.TEXTURE_2D, t.TEXTURE_2D, 1)),
    (_e[t.TEXTURE_CUBE_MAP] = Se(t.TEXTURE_CUBE_MAP, t.TEXTURE_CUBE_MAP_POSITIVE_X, 6)),
    i &&
      ((_e[t.TEXTURE_2D_ARRAY] = Se(t.TEXTURE_2D_ARRAY, t.TEXTURE_2D_ARRAY, 1, 1)),
      (_e[t.TEXTURE_3D] = Se(t.TEXTURE_3D, t.TEXTURE_3D, 1, 1))),
    o.setClear(0, 0, 0, 1),
    l.setClear(1),
    c.setClear(0),
    pe(t.DEPTH_TEST),
    l.setFunc(dl),
    Fe(!1),
    ze(_h),
    pe(t.CULL_FACE),
    Ee(Bi);
  function pe(N) {
    h[N] !== !0 && (t.enable(N), (h[N] = !0));
  }
  function Ye(N) {
    h[N] !== !1 && (t.disable(N), (h[N] = !1));
  }
  function be(N, le) {
    return g[N] !== le
      ? (t.bindFramebuffer(N, le),
        (g[N] = le),
        i &&
          (N === t.DRAW_FRAMEBUFFER && (g[t.FRAMEBUFFER] = le),
          N === t.FRAMEBUFFER && (g[t.DRAW_FRAMEBUFFER] = le)),
        !0)
      : !1;
  }
  function I(N, le) {
    let z = y,
      re = !1;
    if (N) {
      (z = v.get(le)), z === void 0 && ((z = []), v.set(le, z));
      const de = N.textures;
      if (z.length !== de.length || z[0] !== t.COLOR_ATTACHMENT0) {
        for (let Ge = 0, Ze = de.length; Ge < Ze; Ge++) z[Ge] = t.COLOR_ATTACHMENT0 + Ge;
        (z.length = de.length), (re = !0);
      }
    } else z[0] !== t.BACK && ((z[0] = t.BACK), (re = !0));
    if (re)
      if (n.isWebGL2) t.drawBuffers(z);
      else if (e.has('WEBGL_draw_buffers') === !0) e.get('WEBGL_draw_buffers').drawBuffersWEBGL(z);
      else
        throw new Error(
          'THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension',
        );
  }
  function Rt(N) {
    return p !== N ? (t.useProgram(N), (p = N), !0) : !1;
  }
  const ye = { [cr]: t.FUNC_ADD, [kv]: t.FUNC_SUBTRACT, [zv]: t.FUNC_REVERSE_SUBTRACT };
  if (i) (ye[Sh] = t.MIN), (ye[Mh] = t.MAX);
  else {
    const N = e.get('EXT_blend_minmax');
    N !== null && ((ye[Sh] = N.MIN_EXT), (ye[Mh] = N.MAX_EXT));
  }
  const ke = {
    [Bv]: t.ZERO,
    [Hv]: t.ONE,
    [Gv]: t.SRC_COLOR,
    [Wu]: t.SRC_ALPHA,
    [Yv]: t.SRC_ALPHA_SATURATE,
    [Xv]: t.DST_COLOR,
    [Wv]: t.DST_ALPHA,
    [Vv]: t.ONE_MINUS_SRC_COLOR,
    [ju]: t.ONE_MINUS_SRC_ALPHA,
    [qv]: t.ONE_MINUS_DST_COLOR,
    [jv]: t.ONE_MINUS_DST_ALPHA,
    [$v]: t.CONSTANT_COLOR,
    [Kv]: t.ONE_MINUS_CONSTANT_COLOR,
    [Zv]: t.CONSTANT_ALPHA,
    [Qv]: t.ONE_MINUS_CONSTANT_ALPHA,
  };
  function Ee(N, le, z, re, de, Ge, Ze, Ct, gn, Qe) {
    if (N === Bi) {
      u === !0 && (Ye(t.BLEND), (u = !1));
      return;
    }
    if ((u === !1 && (pe(t.BLEND), (u = !0)), N !== Ov)) {
      if (N !== _ || Qe !== R) {
        if (((x !== cr || b !== cr) && (t.blendEquation(t.FUNC_ADD), (x = cr), (b = cr)), Qe))
          switch (N) {
            case fs:
              t.blendFuncSeparate(t.ONE, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
              break;
            case Vu:
              t.blendFunc(t.ONE, t.ONE);
              break;
            case vh:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case yh:
              t.blendFuncSeparate(t.ZERO, t.SRC_COLOR, t.ZERO, t.SRC_ALPHA);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', N);
              break;
          }
        else
          switch (N) {
            case fs:
              t.blendFuncSeparate(t.SRC_ALPHA, t.ONE_MINUS_SRC_ALPHA, t.ONE, t.ONE_MINUS_SRC_ALPHA);
              break;
            case Vu:
              t.blendFunc(t.SRC_ALPHA, t.ONE);
              break;
            case vh:
              t.blendFuncSeparate(t.ZERO, t.ONE_MINUS_SRC_COLOR, t.ZERO, t.ONE);
              break;
            case yh:
              t.blendFunc(t.ZERO, t.SRC_COLOR);
              break;
            default:
              console.error('THREE.WebGLState: Invalid blending: ', N);
              break;
          }
        (E = null), (C = null), (T = null), (D = null), Y.set(0, 0, 0), (S = 0), (_ = N), (R = Qe);
      }
      return;
    }
    (de = de || le),
      (Ge = Ge || z),
      (Ze = Ze || re),
      (le !== x || de !== b) && (t.blendEquationSeparate(ye[le], ye[de]), (x = le), (b = de)),
      (z !== E || re !== C || Ge !== T || Ze !== D) &&
        (t.blendFuncSeparate(ke[z], ke[re], ke[Ge], ke[Ze]), (E = z), (C = re), (T = Ge), (D = Ze)),
      (Ct.equals(Y) === !1 || gn !== S) &&
        (t.blendColor(Ct.r, Ct.g, Ct.b, gn), Y.copy(Ct), (S = gn)),
      (_ = N),
      (R = !1);
  }
  function Ve(N, le) {
    N.side === ii ? Ye(t.CULL_FACE) : pe(t.CULL_FACE);
    let z = N.side === nn;
    le && (z = !z),
      Fe(z),
      N.blending === fs && N.transparent === !1
        ? Ee(Bi)
        : Ee(
            N.blending,
            N.blendEquation,
            N.blendSrc,
            N.blendDst,
            N.blendEquationAlpha,
            N.blendSrcAlpha,
            N.blendDstAlpha,
            N.blendColor,
            N.blendAlpha,
            N.premultipliedAlpha,
          ),
      l.setFunc(N.depthFunc),
      l.setTest(N.depthTest),
      l.setMask(N.depthWrite),
      o.setMask(N.colorWrite);
    const re = N.stencilWrite;
    c.setTest(re),
      re &&
        (c.setMask(N.stencilWriteMask),
        c.setFunc(N.stencilFunc, N.stencilRef, N.stencilFuncMask),
        c.setOp(N.stencilFail, N.stencilZFail, N.stencilZPass)),
      A(N.polygonOffset, N.polygonOffsetFactor, N.polygonOffsetUnits),
      N.alphaToCoverage === !0 ? pe(t.SAMPLE_ALPHA_TO_COVERAGE) : Ye(t.SAMPLE_ALPHA_TO_COVERAGE);
  }
  function Fe(N) {
    ne !== N && (N ? t.frontFace(t.CW) : t.frontFace(t.CCW), (ne = N));
  }
  function ze(N) {
    N !== Uv
      ? (pe(t.CULL_FACE),
        N !== J &&
          (N === _h
            ? t.cullFace(t.BACK)
            : N === Iv
            ? t.cullFace(t.FRONT)
            : t.cullFace(t.FRONT_AND_BACK)))
      : Ye(t.CULL_FACE),
      (J = N);
  }
  function pt(N) {
    N !== L && (P && t.lineWidth(N), (L = N));
  }
  function A(N, le, z) {
    N
      ? (pe(t.POLYGON_OFFSET_FILL),
        (X !== le || j !== z) && (t.polygonOffset(le, z), (X = le), (j = z)))
      : Ye(t.POLYGON_OFFSET_FILL);
  }
  function M(N) {
    N ? pe(t.SCISSOR_TEST) : Ye(t.SCISSOR_TEST);
  }
  function W(N) {
    N === void 0 && (N = t.TEXTURE0 + $ - 1), K !== N && (t.activeTexture(N), (K = N));
  }
  function q(N, le, z) {
    z === void 0 && (K === null ? (z = t.TEXTURE0 + $ - 1) : (z = K));
    let re = se[z];
    re === void 0 && ((re = { type: void 0, texture: void 0 }), (se[z] = re)),
      (re.type !== N || re.texture !== le) &&
        (K !== z && (t.activeTexture(z), (K = z)),
        t.bindTexture(N, le || _e[N]),
        (re.type = N),
        (re.texture = le));
  }
  function te() {
    const N = se[K];
    N !== void 0 &&
      N.type !== void 0 &&
      (t.bindTexture(N.type, null), (N.type = void 0), (N.texture = void 0));
  }
  function Q() {
    try {
      t.compressedTexImage2D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function Ne() {
    try {
      t.compressedTexImage3D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function we() {
    try {
      t.texSubImage2D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function oe() {
    try {
      t.texSubImage3D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function ue() {
    try {
      t.compressedTexSubImage2D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function Le() {
    try {
      t.compressedTexSubImage3D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function ie() {
    try {
      t.texStorage2D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function xt() {
    try {
      t.texStorage3D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function Be() {
    try {
      t.texImage2D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function ve() {
    try {
      t.texImage3D.apply(t, arguments);
    } catch (N) {
      console.error('THREE.WebGLState:', N);
    }
  }
  function me(N) {
    Z.equals(N) === !1 && (t.scissor(N.x, N.y, N.z, N.w), Z.copy(N));
  }
  function ge(N) {
    ce.equals(N) === !1 && (t.viewport(N.x, N.y, N.z, N.w), ce.copy(N));
  }
  function We(N, le) {
    let z = f.get(le);
    z === void 0 && ((z = new WeakMap()), f.set(le, z));
    let re = z.get(N);
    re === void 0 && ((re = t.getUniformBlockIndex(le, N.name)), z.set(N, re));
  }
  function Ce(N, le) {
    const re = f.get(le).get(N);
    d.get(le) !== re && (t.uniformBlockBinding(le, re, N.__bindingPointIndex), d.set(le, re));
  }
  function rt() {
    t.disable(t.BLEND),
      t.disable(t.CULL_FACE),
      t.disable(t.DEPTH_TEST),
      t.disable(t.POLYGON_OFFSET_FILL),
      t.disable(t.SCISSOR_TEST),
      t.disable(t.STENCIL_TEST),
      t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),
      t.blendEquation(t.FUNC_ADD),
      t.blendFunc(t.ONE, t.ZERO),
      t.blendFuncSeparate(t.ONE, t.ZERO, t.ONE, t.ZERO),
      t.blendColor(0, 0, 0, 0),
      t.colorMask(!0, !0, !0, !0),
      t.clearColor(0, 0, 0, 0),
      t.depthMask(!0),
      t.depthFunc(t.LESS),
      t.clearDepth(1),
      t.stencilMask(4294967295),
      t.stencilFunc(t.ALWAYS, 0, 4294967295),
      t.stencilOp(t.KEEP, t.KEEP, t.KEEP),
      t.clearStencil(0),
      t.cullFace(t.BACK),
      t.frontFace(t.CCW),
      t.polygonOffset(0, 0),
      t.activeTexture(t.TEXTURE0),
      t.bindFramebuffer(t.FRAMEBUFFER, null),
      i === !0 &&
        (t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), t.bindFramebuffer(t.READ_FRAMEBUFFER, null)),
      t.useProgram(null),
      t.lineWidth(1),
      t.scissor(0, 0, t.canvas.width, t.canvas.height),
      t.viewport(0, 0, t.canvas.width, t.canvas.height),
      (h = {}),
      (K = null),
      (se = {}),
      (g = {}),
      (v = new WeakMap()),
      (y = []),
      (p = null),
      (u = !1),
      (_ = null),
      (x = null),
      (E = null),
      (C = null),
      (b = null),
      (T = null),
      (D = null),
      (Y = new qe(0, 0, 0)),
      (S = 0),
      (R = !1),
      (ne = null),
      (J = null),
      (L = null),
      (X = null),
      (j = null),
      Z.set(0, 0, t.canvas.width, t.canvas.height),
      ce.set(0, 0, t.canvas.width, t.canvas.height),
      o.reset(),
      l.reset(),
      c.reset();
  }
  return {
    buffers: { color: o, depth: l, stencil: c },
    enable: pe,
    disable: Ye,
    bindFramebuffer: be,
    drawBuffers: I,
    useProgram: Rt,
    setBlending: Ee,
    setMaterial: Ve,
    setFlipSided: Fe,
    setCullFace: ze,
    setLineWidth: pt,
    setPolygonOffset: A,
    setScissorTest: M,
    activeTexture: W,
    bindTexture: q,
    unbindTexture: te,
    compressedTexImage2D: Q,
    compressedTexImage3D: Ne,
    texImage2D: Be,
    texImage3D: ve,
    updateUBOMapping: We,
    uniformBlockBinding: Ce,
    texStorage2D: ie,
    texStorage3D: xt,
    texSubImage2D: we,
    texSubImage3D: oe,
    compressedTexSubImage2D: ue,
    compressedTexSubImage3D: Le,
    scissor: me,
    viewport: ge,
    reset: rt,
  };
}
function Ow(t, e, n, i, r, s, a) {
  const o = r.isWebGL2,
    l = e.has('WEBGL_multisampled_render_to_texture')
      ? e.get('WEBGL_multisampled_render_to_texture')
      : null,
    c = typeof navigator > 'u' ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    d = new je(),
    f = new WeakMap();
  let h;
  const g = new WeakMap();
  let v = !1;
  try {
    v = typeof OffscreenCanvas < 'u' && new OffscreenCanvas(1, 1).getContext('2d') !== null;
  } catch {}
  function y(A, M) {
    return v ? new OffscreenCanvas(A, M) : gl('canvas');
  }
  function p(A, M, W, q) {
    let te = 1;
    const Q = pt(A);
    if (
      ((Q.width > q || Q.height > q) && (te = q / Math.max(Q.width, Q.height)), te < 1 || M === !0)
    )
      if (
        (typeof HTMLImageElement < 'u' && A instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < 'u' && A instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < 'u' && A instanceof ImageBitmap) ||
        (typeof VideoFrame < 'u' && A instanceof VideoFrame)
      ) {
        const Ne = M ? Qu : Math.floor,
          we = Ne(te * Q.width),
          oe = Ne(te * Q.height);
        h === void 0 && (h = y(we, oe));
        const ue = W ? y(we, oe) : h;
        return (
          (ue.width = we),
          (ue.height = oe),
          ue.getContext('2d').drawImage(A, 0, 0, we, oe),
          console.warn(
            'THREE.WebGLRenderer: Texture has been resized from (' +
              Q.width +
              'x' +
              Q.height +
              ') to (' +
              we +
              'x' +
              oe +
              ').',
          ),
          ue
        );
      } else
        return (
          'data' in A &&
            console.warn(
              'THREE.WebGLRenderer: Image in DataTexture is too big (' +
                Q.width +
                'x' +
                Q.height +
                ').',
            ),
          A
        );
    return A;
  }
  function u(A) {
    const M = pt(A);
    return Qh(M.width) && Qh(M.height);
  }
  function _(A) {
    return o ? !1 : A.wrapS !== Ln || A.wrapT !== Ln || (A.minFilter !== Vt && A.minFilter !== $t);
  }
  function x(A, M) {
    return A.generateMipmaps && M && A.minFilter !== Vt && A.minFilter !== $t;
  }
  function E(A) {
    t.generateMipmap(A);
  }
  function C(A, M, W, q, te = !1) {
    if (o === !1) return M;
    if (A !== null) {
      if (t[A] !== void 0) return t[A];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'",
      );
    }
    let Q = M;
    if (
      (M === t.RED &&
        (W === t.FLOAT && (Q = t.R32F),
        W === t.HALF_FLOAT && (Q = t.R16F),
        W === t.UNSIGNED_BYTE && (Q = t.R8)),
      M === t.RED_INTEGER &&
        (W === t.UNSIGNED_BYTE && (Q = t.R8UI),
        W === t.UNSIGNED_SHORT && (Q = t.R16UI),
        W === t.UNSIGNED_INT && (Q = t.R32UI),
        W === t.BYTE && (Q = t.R8I),
        W === t.SHORT && (Q = t.R16I),
        W === t.INT && (Q = t.R32I)),
      M === t.RG &&
        (W === t.FLOAT && (Q = t.RG32F),
        W === t.HALF_FLOAT && (Q = t.RG16F),
        W === t.UNSIGNED_BYTE && (Q = t.RG8)),
      M === t.RG_INTEGER &&
        (W === t.UNSIGNED_BYTE && (Q = t.RG8UI),
        W === t.UNSIGNED_SHORT && (Q = t.RG16UI),
        W === t.UNSIGNED_INT && (Q = t.RG32UI),
        W === t.BYTE && (Q = t.RG8I),
        W === t.SHORT && (Q = t.RG16I),
        W === t.INT && (Q = t.RG32I)),
      M === t.RGBA)
    ) {
      const Ne = te ? fl : Ke.getTransfer(q);
      W === t.FLOAT && (Q = t.RGBA32F),
        W === t.HALF_FLOAT && (Q = t.RGBA16F),
        W === t.UNSIGNED_BYTE && (Q = Ne === nt ? t.SRGB8_ALPHA8 : t.RGBA8),
        W === t.UNSIGNED_SHORT_4_4_4_4 && (Q = t.RGBA4),
        W === t.UNSIGNED_SHORT_5_5_5_1 && (Q = t.RGB5_A1);
    }
    return (
      (Q === t.R16F ||
        Q === t.R32F ||
        Q === t.RG16F ||
        Q === t.RG32F ||
        Q === t.RGBA16F ||
        Q === t.RGBA32F) &&
        e.get('EXT_color_buffer_float'),
      Q
    );
  }
  function b(A, M, W) {
    return x(A, W) === !0 || (A.isFramebufferTexture && A.minFilter !== Vt && A.minFilter !== $t)
      ? Math.log2(Math.max(M.width, M.height)) + 1
      : A.mipmaps !== void 0 && A.mipmaps.length > 0
      ? A.mipmaps.length
      : A.isCompressedTexture && Array.isArray(A.image)
      ? M.mipmaps.length
      : 1;
  }
  function T(A) {
    return A === Vt || A === Eh || A === Bs ? t.NEAREST : t.LINEAR;
  }
  function D(A) {
    const M = A.target;
    M.removeEventListener('dispose', D), S(M), M.isVideoTexture && f.delete(M);
  }
  function Y(A) {
    const M = A.target;
    M.removeEventListener('dispose', Y), ne(M);
  }
  function S(A) {
    const M = i.get(A);
    if (M.__webglInit === void 0) return;
    const W = A.source,
      q = g.get(W);
    if (q) {
      const te = q[M.__cacheKey];
      te.usedTimes--, te.usedTimes === 0 && R(A), Object.keys(q).length === 0 && g.delete(W);
    }
    i.remove(A);
  }
  function R(A) {
    const M = i.get(A);
    t.deleteTexture(M.__webglTexture);
    const W = A.source,
      q = g.get(W);
    delete q[M.__cacheKey], a.memory.textures--;
  }
  function ne(A) {
    const M = i.get(A);
    if ((A.depthTexture && A.depthTexture.dispose(), A.isWebGLCubeRenderTarget))
      for (let q = 0; q < 6; q++) {
        if (Array.isArray(M.__webglFramebuffer[q]))
          for (let te = 0; te < M.__webglFramebuffer[q].length; te++)
            t.deleteFramebuffer(M.__webglFramebuffer[q][te]);
        else t.deleteFramebuffer(M.__webglFramebuffer[q]);
        M.__webglDepthbuffer && t.deleteRenderbuffer(M.__webglDepthbuffer[q]);
      }
    else {
      if (Array.isArray(M.__webglFramebuffer))
        for (let q = 0; q < M.__webglFramebuffer.length; q++)
          t.deleteFramebuffer(M.__webglFramebuffer[q]);
      else t.deleteFramebuffer(M.__webglFramebuffer);
      if (
        (M.__webglDepthbuffer && t.deleteRenderbuffer(M.__webglDepthbuffer),
        M.__webglMultisampledFramebuffer && t.deleteFramebuffer(M.__webglMultisampledFramebuffer),
        M.__webglColorRenderbuffer)
      )
        for (let q = 0; q < M.__webglColorRenderbuffer.length; q++)
          M.__webglColorRenderbuffer[q] && t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);
      M.__webglDepthRenderbuffer && t.deleteRenderbuffer(M.__webglDepthRenderbuffer);
    }
    const W = A.textures;
    for (let q = 0, te = W.length; q < te; q++) {
      const Q = i.get(W[q]);
      Q.__webglTexture && (t.deleteTexture(Q.__webglTexture), a.memory.textures--), i.remove(W[q]);
    }
    i.remove(A);
  }
  let J = 0;
  function L() {
    J = 0;
  }
  function X() {
    const A = J;
    return (
      A >= r.maxTextures &&
        console.warn(
          'THREE.WebGLTextures: Trying to use ' +
            A +
            ' texture units while this GPU supports only ' +
            r.maxTextures,
        ),
      (J += 1),
      A
    );
  }
  function j(A) {
    const M = [];
    return (
      M.push(A.wrapS),
      M.push(A.wrapT),
      M.push(A.wrapR || 0),
      M.push(A.magFilter),
      M.push(A.minFilter),
      M.push(A.anisotropy),
      M.push(A.internalFormat),
      M.push(A.format),
      M.push(A.type),
      M.push(A.generateMipmaps),
      M.push(A.premultiplyAlpha),
      M.push(A.flipY),
      M.push(A.unpackAlignment),
      M.push(A.colorSpace),
      M.join()
    );
  }
  function $(A, M) {
    const W = i.get(A);
    if (
      (A.isVideoTexture && Fe(A),
      A.isRenderTargetTexture === !1 && A.version > 0 && W.__version !== A.version)
    ) {
      const q = A.image;
      if (q === null)
        console.warn('THREE.WebGLRenderer: Texture marked for update but no image data found.');
      else if (q.complete === !1)
        console.warn('THREE.WebGLRenderer: Texture marked for update but image is incomplete');
      else {
        ce(W, A, M);
        return;
      }
    }
    n.bindTexture(t.TEXTURE_2D, W.__webglTexture, t.TEXTURE0 + M);
  }
  function P(A, M) {
    const W = i.get(A);
    if (A.version > 0 && W.__version !== A.version) {
      ce(W, A, M);
      return;
    }
    n.bindTexture(t.TEXTURE_2D_ARRAY, W.__webglTexture, t.TEXTURE0 + M);
  }
  function O(A, M) {
    const W = i.get(A);
    if (A.version > 0 && W.__version !== A.version) {
      ce(W, A, M);
      return;
    }
    n.bindTexture(t.TEXTURE_3D, W.__webglTexture, t.TEXTURE0 + M);
  }
  function V(A, M) {
    const W = i.get(A);
    if (A.version > 0 && W.__version !== A.version) {
      Se(W, A, M);
      return;
    }
    n.bindTexture(t.TEXTURE_CUBE_MAP, W.__webglTexture, t.TEXTURE0 + M);
  }
  const K = { [Yu]: t.REPEAT, [Ln]: t.CLAMP_TO_EDGE, [$u]: t.MIRRORED_REPEAT },
    se = {
      [Vt]: t.NEAREST,
      [Eh]: t.NEAREST_MIPMAP_NEAREST,
      [Bs]: t.NEAREST_MIPMAP_LINEAR,
      [$t]: t.LINEAR,
      [mc]: t.LINEAR_MIPMAP_NEAREST,
      [pr]: t.LINEAR_MIPMAP_LINEAR,
    },
    Te = {
      [by]: t.NEVER,
      [Dy]: t.ALWAYS,
      [Ry]: t.LESS,
      [x0]: t.LEQUAL,
      [Cy]: t.EQUAL,
      [Ly]: t.GEQUAL,
      [Py]: t.GREATER,
      [Ny]: t.NOTEQUAL,
    };
  function H(A, M, W) {
    if (
      (M.type === ri &&
        e.has('OES_texture_float_linear') === !1 &&
        (M.magFilter === $t ||
          M.magFilter === mc ||
          M.magFilter === Bs ||
          M.magFilter === pr ||
          M.minFilter === $t ||
          M.minFilter === mc ||
          M.minFilter === Bs ||
          M.minFilter === pr) &&
        console.warn(
          'THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.',
        ),
      W
        ? (t.texParameteri(A, t.TEXTURE_WRAP_S, K[M.wrapS]),
          t.texParameteri(A, t.TEXTURE_WRAP_T, K[M.wrapT]),
          (A === t.TEXTURE_3D || A === t.TEXTURE_2D_ARRAY) &&
            t.texParameteri(A, t.TEXTURE_WRAP_R, K[M.wrapR]),
          t.texParameteri(A, t.TEXTURE_MAG_FILTER, se[M.magFilter]),
          t.texParameteri(A, t.TEXTURE_MIN_FILTER, se[M.minFilter]))
        : (t.texParameteri(A, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE),
          t.texParameteri(A, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE),
          (A === t.TEXTURE_3D || A === t.TEXTURE_2D_ARRAY) &&
            t.texParameteri(A, t.TEXTURE_WRAP_R, t.CLAMP_TO_EDGE),
          (M.wrapS !== Ln || M.wrapT !== Ln) &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.',
            ),
          t.texParameteri(A, t.TEXTURE_MAG_FILTER, T(M.magFilter)),
          t.texParameteri(A, t.TEXTURE_MIN_FILTER, T(M.minFilter)),
          M.minFilter !== Vt &&
            M.minFilter !== $t &&
            console.warn(
              'THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.',
            )),
      M.compareFunction &&
        (t.texParameteri(A, t.TEXTURE_COMPARE_MODE, t.COMPARE_REF_TO_TEXTURE),
        t.texParameteri(A, t.TEXTURE_COMPARE_FUNC, Te[M.compareFunction])),
      e.has('EXT_texture_filter_anisotropic') === !0)
    ) {
      if (
        M.magFilter === Vt ||
        (M.minFilter !== Bs && M.minFilter !== pr) ||
        (M.type === ri && e.has('OES_texture_float_linear') === !1) ||
        (o === !1 && M.type === wa && e.has('OES_texture_half_float_linear') === !1)
      )
        return;
      if (M.anisotropy > 1 || i.get(M).__currentAnisotropy) {
        const q = e.get('EXT_texture_filter_anisotropic');
        t.texParameterf(
          A,
          q.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(M.anisotropy, r.getMaxAnisotropy()),
        ),
          (i.get(M).__currentAnisotropy = M.anisotropy);
      }
    }
  }
  function Z(A, M) {
    let W = !1;
    A.__webglInit === void 0 && ((A.__webglInit = !0), M.addEventListener('dispose', D));
    const q = M.source;
    let te = g.get(q);
    te === void 0 && ((te = {}), g.set(q, te));
    const Q = j(M);
    if (Q !== A.__cacheKey) {
      te[Q] === void 0 &&
        ((te[Q] = { texture: t.createTexture(), usedTimes: 0 }), a.memory.textures++, (W = !0)),
        te[Q].usedTimes++;
      const Ne = te[A.__cacheKey];
      Ne !== void 0 && (te[A.__cacheKey].usedTimes--, Ne.usedTimes === 0 && R(M)),
        (A.__cacheKey = Q),
        (A.__webglTexture = te[Q].texture);
    }
    return W;
  }
  function ce(A, M, W) {
    let q = t.TEXTURE_2D;
    (M.isDataArrayTexture || M.isCompressedArrayTexture) && (q = t.TEXTURE_2D_ARRAY),
      M.isData3DTexture && (q = t.TEXTURE_3D);
    const te = Z(A, M),
      Q = M.source;
    n.bindTexture(q, A.__webglTexture, t.TEXTURE0 + W);
    const Ne = i.get(Q);
    if (Q.version !== Ne.__version || te === !0) {
      n.activeTexture(t.TEXTURE0 + W);
      const we = Ke.getPrimaries(Ke.workingColorSpace),
        oe = M.colorSpace === Ri ? null : Ke.getPrimaries(M.colorSpace),
        ue = M.colorSpace === Ri || we === oe ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, M.flipY),
        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha),
        t.pixelStorei(t.UNPACK_ALIGNMENT, M.unpackAlignment),
        t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, ue);
      const Le = _(M) && u(M.image) === !1;
      let ie = p(M.image, Le, !1, r.maxTextureSize);
      ie = ze(M, ie);
      const xt = u(ie) || o,
        Be = s.convert(M.format, M.colorSpace);
      let ve = s.convert(M.type),
        me = C(M.internalFormat, Be, ve, M.colorSpace, M.isVideoTexture);
      H(q, M, xt);
      let ge;
      const We = M.mipmaps,
        Ce = o && M.isVideoTexture !== !0 && me !== g0,
        rt = Ne.__version === void 0 || te === !0,
        N = Q.dataReady,
        le = b(M, ie, xt);
      if (M.isDepthTexture)
        (me = t.DEPTH_COMPONENT),
          o
            ? M.type === ri
              ? (me = t.DEPTH_COMPONENT32F)
              : M.type === Ni
              ? (me = t.DEPTH_COMPONENT24)
              : M.type === xr
              ? (me = t.DEPTH24_STENCIL8)
              : (me = t.DEPTH_COMPONENT16)
            : M.type === ri &&
              console.error('WebGLRenderer: Floating point depth texture requires WebGL2.'),
          M.format === _r &&
            me === t.DEPTH_COMPONENT &&
            M.type !== Zd &&
            M.type !== Ni &&
            (console.warn(
              'THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.',
            ),
            (M.type = Ni),
            (ve = s.convert(M.type))),
          M.format === ws &&
            me === t.DEPTH_COMPONENT &&
            ((me = t.DEPTH_STENCIL),
            M.type !== xr &&
              (console.warn(
                'THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.',
              ),
              (M.type = xr),
              (ve = s.convert(M.type)))),
          rt &&
            (Ce
              ? n.texStorage2D(t.TEXTURE_2D, 1, me, ie.width, ie.height)
              : n.texImage2D(t.TEXTURE_2D, 0, me, ie.width, ie.height, 0, Be, ve, null));
      else if (M.isDataTexture)
        if (We.length > 0 && xt) {
          Ce && rt && n.texStorage2D(t.TEXTURE_2D, le, me, We[0].width, We[0].height);
          for (let z = 0, re = We.length; z < re; z++)
            (ge = We[z]),
              Ce
                ? N && n.texSubImage2D(t.TEXTURE_2D, z, 0, 0, ge.width, ge.height, Be, ve, ge.data)
                : n.texImage2D(t.TEXTURE_2D, z, me, ge.width, ge.height, 0, Be, ve, ge.data);
          M.generateMipmaps = !1;
        } else
          Ce
            ? (rt && n.texStorage2D(t.TEXTURE_2D, le, me, ie.width, ie.height),
              N && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, ie.width, ie.height, Be, ve, ie.data))
            : n.texImage2D(t.TEXTURE_2D, 0, me, ie.width, ie.height, 0, Be, ve, ie.data);
      else if (M.isCompressedTexture)
        if (M.isCompressedArrayTexture) {
          Ce &&
            rt &&
            n.texStorage3D(t.TEXTURE_2D_ARRAY, le, me, We[0].width, We[0].height, ie.depth);
          for (let z = 0, re = We.length; z < re; z++)
            (ge = We[z]),
              M.format !== Dn
                ? Be !== null
                  ? Ce
                    ? N &&
                      n.compressedTexSubImage3D(
                        t.TEXTURE_2D_ARRAY,
                        z,
                        0,
                        0,
                        0,
                        ge.width,
                        ge.height,
                        ie.depth,
                        Be,
                        ge.data,
                        0,
                        0,
                      )
                    : n.compressedTexImage3D(
                        t.TEXTURE_2D_ARRAY,
                        z,
                        me,
                        ge.width,
                        ge.height,
                        ie.depth,
                        0,
                        ge.data,
                        0,
                        0,
                      )
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                    )
                : Ce
                ? N &&
                  n.texSubImage3D(
                    t.TEXTURE_2D_ARRAY,
                    z,
                    0,
                    0,
                    0,
                    ge.width,
                    ge.height,
                    ie.depth,
                    Be,
                    ve,
                    ge.data,
                  )
                : n.texImage3D(
                    t.TEXTURE_2D_ARRAY,
                    z,
                    me,
                    ge.width,
                    ge.height,
                    ie.depth,
                    0,
                    Be,
                    ve,
                    ge.data,
                  );
        } else {
          Ce && rt && n.texStorage2D(t.TEXTURE_2D, le, me, We[0].width, We[0].height);
          for (let z = 0, re = We.length; z < re; z++)
            (ge = We[z]),
              M.format !== Dn
                ? Be !== null
                  ? Ce
                    ? N &&
                      n.compressedTexSubImage2D(
                        t.TEXTURE_2D,
                        z,
                        0,
                        0,
                        ge.width,
                        ge.height,
                        Be,
                        ge.data,
                      )
                    : n.compressedTexImage2D(t.TEXTURE_2D, z, me, ge.width, ge.height, 0, ge.data)
                  : console.warn(
                      'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()',
                    )
                : Ce
                ? N && n.texSubImage2D(t.TEXTURE_2D, z, 0, 0, ge.width, ge.height, Be, ve, ge.data)
                : n.texImage2D(t.TEXTURE_2D, z, me, ge.width, ge.height, 0, Be, ve, ge.data);
        }
      else if (M.isDataArrayTexture)
        Ce
          ? (rt && n.texStorage3D(t.TEXTURE_2D_ARRAY, le, me, ie.width, ie.height, ie.depth),
            N &&
              n.texSubImage3D(
                t.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                ie.width,
                ie.height,
                ie.depth,
                Be,
                ve,
                ie.data,
              ))
          : n.texImage3D(
              t.TEXTURE_2D_ARRAY,
              0,
              me,
              ie.width,
              ie.height,
              ie.depth,
              0,
              Be,
              ve,
              ie.data,
            );
      else if (M.isData3DTexture)
        Ce
          ? (rt && n.texStorage3D(t.TEXTURE_3D, le, me, ie.width, ie.height, ie.depth),
            N &&
              n.texSubImage3D(
                t.TEXTURE_3D,
                0,
                0,
                0,
                0,
                ie.width,
                ie.height,
                ie.depth,
                Be,
                ve,
                ie.data,
              ))
          : n.texImage3D(t.TEXTURE_3D, 0, me, ie.width, ie.height, ie.depth, 0, Be, ve, ie.data);
      else if (M.isFramebufferTexture) {
        if (rt)
          if (Ce) n.texStorage2D(t.TEXTURE_2D, le, me, ie.width, ie.height);
          else {
            let z = ie.width,
              re = ie.height;
            for (let de = 0; de < le; de++)
              n.texImage2D(t.TEXTURE_2D, de, me, z, re, 0, Be, ve, null), (z >>= 1), (re >>= 1);
          }
      } else if (We.length > 0 && xt) {
        if (Ce && rt) {
          const z = pt(We[0]);
          n.texStorage2D(t.TEXTURE_2D, le, me, z.width, z.height);
        }
        for (let z = 0, re = We.length; z < re; z++)
          (ge = We[z]),
            Ce
              ? N && n.texSubImage2D(t.TEXTURE_2D, z, 0, 0, Be, ve, ge)
              : n.texImage2D(t.TEXTURE_2D, z, me, Be, ve, ge);
        M.generateMipmaps = !1;
      } else if (Ce) {
        if (rt) {
          const z = pt(ie);
          n.texStorage2D(t.TEXTURE_2D, le, me, z.width, z.height);
        }
        N && n.texSubImage2D(t.TEXTURE_2D, 0, 0, 0, Be, ve, ie);
      } else n.texImage2D(t.TEXTURE_2D, 0, me, Be, ve, ie);
      x(M, xt) && E(q), (Ne.__version = Q.version), M.onUpdate && M.onUpdate(M);
    }
    A.__version = M.version;
  }
  function Se(A, M, W) {
    if (M.image.length !== 6) return;
    const q = Z(A, M),
      te = M.source;
    n.bindTexture(t.TEXTURE_CUBE_MAP, A.__webglTexture, t.TEXTURE0 + W);
    const Q = i.get(te);
    if (te.version !== Q.__version || q === !0) {
      n.activeTexture(t.TEXTURE0 + W);
      const Ne = Ke.getPrimaries(Ke.workingColorSpace),
        we = M.colorSpace === Ri ? null : Ke.getPrimaries(M.colorSpace),
        oe = M.colorSpace === Ri || Ne === we ? t.NONE : t.BROWSER_DEFAULT_WEBGL;
      t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL, M.flipY),
        t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, M.premultiplyAlpha),
        t.pixelStorei(t.UNPACK_ALIGNMENT, M.unpackAlignment),
        t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, oe);
      const ue = M.isCompressedTexture || M.image[0].isCompressedTexture,
        Le = M.image[0] && M.image[0].isDataTexture,
        ie = [];
      for (let z = 0; z < 6; z++)
        !ue && !Le
          ? (ie[z] = p(M.image[z], !1, !0, r.maxCubemapSize))
          : (ie[z] = Le ? M.image[z].image : M.image[z]),
          (ie[z] = ze(M, ie[z]));
      const xt = ie[0],
        Be = u(xt) || o,
        ve = s.convert(M.format, M.colorSpace),
        me = s.convert(M.type),
        ge = C(M.internalFormat, ve, me, M.colorSpace),
        We = o && M.isVideoTexture !== !0,
        Ce = Q.__version === void 0 || q === !0,
        rt = te.dataReady;
      let N = b(M, xt, Be);
      H(t.TEXTURE_CUBE_MAP, M, Be);
      let le;
      if (ue) {
        We && Ce && n.texStorage2D(t.TEXTURE_CUBE_MAP, N, ge, xt.width, xt.height);
        for (let z = 0; z < 6; z++) {
          le = ie[z].mipmaps;
          for (let re = 0; re < le.length; re++) {
            const de = le[re];
            M.format !== Dn
              ? ve !== null
                ? We
                  ? rt &&
                    n.compressedTexSubImage2D(
                      t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                      re,
                      0,
                      0,
                      de.width,
                      de.height,
                      ve,
                      de.data,
                    )
                  : n.compressedTexImage2D(
                      t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                      re,
                      ge,
                      de.width,
                      de.height,
                      0,
                      de.data,
                    )
                : console.warn(
                    'THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()',
                  )
              : We
              ? rt &&
                n.texSubImage2D(
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  re,
                  0,
                  0,
                  de.width,
                  de.height,
                  ve,
                  me,
                  de.data,
                )
              : n.texImage2D(
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  re,
                  ge,
                  de.width,
                  de.height,
                  0,
                  ve,
                  me,
                  de.data,
                );
          }
        }
      } else {
        if (((le = M.mipmaps), We && Ce)) {
          le.length > 0 && N++;
          const z = pt(ie[0]);
          n.texStorage2D(t.TEXTURE_CUBE_MAP, N, ge, z.width, z.height);
        }
        for (let z = 0; z < 6; z++)
          if (Le) {
            We
              ? rt &&
                n.texSubImage2D(
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  0,
                  0,
                  0,
                  ie[z].width,
                  ie[z].height,
                  ve,
                  me,
                  ie[z].data,
                )
              : n.texImage2D(
                  t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                  0,
                  ge,
                  ie[z].width,
                  ie[z].height,
                  0,
                  ve,
                  me,
                  ie[z].data,
                );
            for (let re = 0; re < le.length; re++) {
              const Ge = le[re].image[z].image;
              We
                ? rt &&
                  n.texSubImage2D(
                    t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    re + 1,
                    0,
                    0,
                    Ge.width,
                    Ge.height,
                    ve,
                    me,
                    Ge.data,
                  )
                : n.texImage2D(
                    t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    re + 1,
                    ge,
                    Ge.width,
                    Ge.height,
                    0,
                    ve,
                    me,
                    Ge.data,
                  );
            }
          } else {
            We
              ? rt && n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, 0, 0, ve, me, ie[z])
              : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + z, 0, ge, ve, me, ie[z]);
            for (let re = 0; re < le.length; re++) {
              const de = le[re];
              We
                ? rt &&
                  n.texSubImage2D(
                    t.TEXTURE_CUBE_MAP_POSITIVE_X + z,
                    re + 1,
                    0,
                    0,
                    ve,
                    me,
                    de.image[z],
                  )
                : n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + z, re + 1, ge, ve, me, de.image[z]);
            }
          }
      }
      x(M, Be) && E(t.TEXTURE_CUBE_MAP), (Q.__version = te.version), M.onUpdate && M.onUpdate(M);
    }
    A.__version = M.version;
  }
  function _e(A, M, W, q, te, Q) {
    const Ne = s.convert(W.format, W.colorSpace),
      we = s.convert(W.type),
      oe = C(W.internalFormat, Ne, we, W.colorSpace);
    if (!i.get(M).__hasExternalTextures) {
      const Le = Math.max(1, M.width >> Q),
        ie = Math.max(1, M.height >> Q);
      te === t.TEXTURE_3D || te === t.TEXTURE_2D_ARRAY
        ? n.texImage3D(te, Q, oe, Le, ie, M.depth, 0, Ne, we, null)
        : n.texImage2D(te, Q, oe, Le, ie, 0, Ne, we, null);
    }
    n.bindFramebuffer(t.FRAMEBUFFER, A),
      Ve(M)
        ? l.framebufferTexture2DMultisampleEXT(
            t.FRAMEBUFFER,
            q,
            te,
            i.get(W).__webglTexture,
            0,
            Ee(M),
          )
        : (te === t.TEXTURE_2D ||
            (te >= t.TEXTURE_CUBE_MAP_POSITIVE_X && te <= t.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          t.framebufferTexture2D(t.FRAMEBUFFER, q, te, i.get(W).__webglTexture, Q),
      n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  function pe(A, M, W) {
    if ((t.bindRenderbuffer(t.RENDERBUFFER, A), M.depthBuffer && !M.stencilBuffer)) {
      let q = o === !0 ? t.DEPTH_COMPONENT24 : t.DEPTH_COMPONENT16;
      if (W || Ve(M)) {
        const te = M.depthTexture;
        te &&
          te.isDepthTexture &&
          (te.type === ri
            ? (q = t.DEPTH_COMPONENT32F)
            : te.type === Ni && (q = t.DEPTH_COMPONENT24));
        const Q = Ee(M);
        Ve(M)
          ? l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, Q, q, M.width, M.height)
          : t.renderbufferStorageMultisample(t.RENDERBUFFER, Q, q, M.width, M.height);
      } else t.renderbufferStorage(t.RENDERBUFFER, q, M.width, M.height);
      t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.RENDERBUFFER, A);
    } else if (M.depthBuffer && M.stencilBuffer) {
      const q = Ee(M);
      W && Ve(M) === !1
        ? t.renderbufferStorageMultisample(t.RENDERBUFFER, q, t.DEPTH24_STENCIL8, M.width, M.height)
        : Ve(M)
        ? l.renderbufferStorageMultisampleEXT(
            t.RENDERBUFFER,
            q,
            t.DEPTH24_STENCIL8,
            M.width,
            M.height,
          )
        : t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, M.width, M.height),
        t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, A);
    } else {
      const q = M.textures;
      for (let te = 0; te < q.length; te++) {
        const Q = q[te],
          Ne = s.convert(Q.format, Q.colorSpace),
          we = s.convert(Q.type),
          oe = C(Q.internalFormat, Ne, we, Q.colorSpace),
          ue = Ee(M);
        W && Ve(M) === !1
          ? t.renderbufferStorageMultisample(t.RENDERBUFFER, ue, oe, M.width, M.height)
          : Ve(M)
          ? l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER, ue, oe, M.width, M.height)
          : t.renderbufferStorage(t.RENDERBUFFER, oe, M.width, M.height);
      }
    }
    t.bindRenderbuffer(t.RENDERBUFFER, null);
  }
  function Ye(A, M) {
    if (M && M.isWebGLCubeRenderTarget)
      throw new Error('Depth Texture with cube render targets is not supported');
    if ((n.bindFramebuffer(t.FRAMEBUFFER, A), !(M.depthTexture && M.depthTexture.isDepthTexture)))
      throw new Error('renderTarget.depthTexture must be an instance of THREE.DepthTexture');
    (!i.get(M.depthTexture).__webglTexture ||
      M.depthTexture.image.width !== M.width ||
      M.depthTexture.image.height !== M.height) &&
      ((M.depthTexture.image.width = M.width),
      (M.depthTexture.image.height = M.height),
      (M.depthTexture.needsUpdate = !0)),
      $(M.depthTexture, 0);
    const q = i.get(M.depthTexture).__webglTexture,
      te = Ee(M);
    if (M.depthTexture.format === _r)
      Ve(M)
        ? l.framebufferTexture2DMultisampleEXT(
            t.FRAMEBUFFER,
            t.DEPTH_ATTACHMENT,
            t.TEXTURE_2D,
            q,
            0,
            te,
          )
        : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_ATTACHMENT, t.TEXTURE_2D, q, 0);
    else if (M.depthTexture.format === ws)
      Ve(M)
        ? l.framebufferTexture2DMultisampleEXT(
            t.FRAMEBUFFER,
            t.DEPTH_STENCIL_ATTACHMENT,
            t.TEXTURE_2D,
            q,
            0,
            te,
          )
        : t.framebufferTexture2D(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.TEXTURE_2D, q, 0);
    else throw new Error('Unknown depthTexture format');
  }
  function be(A) {
    const M = i.get(A),
      W = A.isWebGLCubeRenderTarget === !0;
    if (A.depthTexture && !M.__autoAllocateDepthBuffer) {
      if (W) throw new Error('target.depthTexture not supported in Cube render targets');
      Ye(M.__webglFramebuffer, A);
    } else if (W) {
      M.__webglDepthbuffer = [];
      for (let q = 0; q < 6; q++)
        n.bindFramebuffer(t.FRAMEBUFFER, M.__webglFramebuffer[q]),
          (M.__webglDepthbuffer[q] = t.createRenderbuffer()),
          pe(M.__webglDepthbuffer[q], A, !1);
    } else
      n.bindFramebuffer(t.FRAMEBUFFER, M.__webglFramebuffer),
        (M.__webglDepthbuffer = t.createRenderbuffer()),
        pe(M.__webglDepthbuffer, A, !1);
    n.bindFramebuffer(t.FRAMEBUFFER, null);
  }
  function I(A, M, W) {
    const q = i.get(A);
    M !== void 0 && _e(q.__webglFramebuffer, A, A.texture, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, 0),
      W !== void 0 && be(A);
  }
  function Rt(A) {
    const M = A.texture,
      W = i.get(A),
      q = i.get(M);
    A.addEventListener('dispose', Y);
    const te = A.textures,
      Q = A.isWebGLCubeRenderTarget === !0,
      Ne = te.length > 1,
      we = u(A) || o;
    if (
      (Ne ||
        (q.__webglTexture === void 0 && (q.__webglTexture = t.createTexture()),
        (q.__version = M.version),
        a.memory.textures++),
      Q)
    ) {
      W.__webglFramebuffer = [];
      for (let oe = 0; oe < 6; oe++)
        if (o && M.mipmaps && M.mipmaps.length > 0) {
          W.__webglFramebuffer[oe] = [];
          for (let ue = 0; ue < M.mipmaps.length; ue++)
            W.__webglFramebuffer[oe][ue] = t.createFramebuffer();
        } else W.__webglFramebuffer[oe] = t.createFramebuffer();
    } else {
      if (o && M.mipmaps && M.mipmaps.length > 0) {
        W.__webglFramebuffer = [];
        for (let oe = 0; oe < M.mipmaps.length; oe++)
          W.__webglFramebuffer[oe] = t.createFramebuffer();
      } else W.__webglFramebuffer = t.createFramebuffer();
      if (Ne)
        if (r.drawBuffers)
          for (let oe = 0, ue = te.length; oe < ue; oe++) {
            const Le = i.get(te[oe]);
            Le.__webglTexture === void 0 &&
              ((Le.__webglTexture = t.createTexture()), a.memory.textures++);
          }
        else
          console.warn(
            'THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.',
          );
      if (o && A.samples > 0 && Ve(A) === !1) {
        (W.__webglMultisampledFramebuffer = t.createFramebuffer()),
          (W.__webglColorRenderbuffer = []),
          n.bindFramebuffer(t.FRAMEBUFFER, W.__webglMultisampledFramebuffer);
        for (let oe = 0; oe < te.length; oe++) {
          const ue = te[oe];
          (W.__webglColorRenderbuffer[oe] = t.createRenderbuffer()),
            t.bindRenderbuffer(t.RENDERBUFFER, W.__webglColorRenderbuffer[oe]);
          const Le = s.convert(ue.format, ue.colorSpace),
            ie = s.convert(ue.type),
            xt = C(ue.internalFormat, Le, ie, ue.colorSpace, A.isXRRenderTarget === !0),
            Be = Ee(A);
          t.renderbufferStorageMultisample(t.RENDERBUFFER, Be, xt, A.width, A.height),
            t.framebufferRenderbuffer(
              t.FRAMEBUFFER,
              t.COLOR_ATTACHMENT0 + oe,
              t.RENDERBUFFER,
              W.__webglColorRenderbuffer[oe],
            );
        }
        t.bindRenderbuffer(t.RENDERBUFFER, null),
          A.depthBuffer &&
            ((W.__webglDepthRenderbuffer = t.createRenderbuffer()),
            pe(W.__webglDepthRenderbuffer, A, !0)),
          n.bindFramebuffer(t.FRAMEBUFFER, null);
      }
    }
    if (Q) {
      n.bindTexture(t.TEXTURE_CUBE_MAP, q.__webglTexture), H(t.TEXTURE_CUBE_MAP, M, we);
      for (let oe = 0; oe < 6; oe++)
        if (o && M.mipmaps && M.mipmaps.length > 0)
          for (let ue = 0; ue < M.mipmaps.length; ue++)
            _e(
              W.__webglFramebuffer[oe][ue],
              A,
              M,
              t.COLOR_ATTACHMENT0,
              t.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
              ue,
            );
        else
          _e(
            W.__webglFramebuffer[oe],
            A,
            M,
            t.COLOR_ATTACHMENT0,
            t.TEXTURE_CUBE_MAP_POSITIVE_X + oe,
            0,
          );
      x(M, we) && E(t.TEXTURE_CUBE_MAP), n.unbindTexture();
    } else if (Ne) {
      for (let oe = 0, ue = te.length; oe < ue; oe++) {
        const Le = te[oe],
          ie = i.get(Le);
        n.bindTexture(t.TEXTURE_2D, ie.__webglTexture),
          H(t.TEXTURE_2D, Le, we),
          _e(W.__webglFramebuffer, A, Le, t.COLOR_ATTACHMENT0 + oe, t.TEXTURE_2D, 0),
          x(Le, we) && E(t.TEXTURE_2D);
      }
      n.unbindTexture();
    } else {
      let oe = t.TEXTURE_2D;
      if (
        ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) &&
          (o
            ? (oe = A.isWebGL3DRenderTarget ? t.TEXTURE_3D : t.TEXTURE_2D_ARRAY)
            : console.error(
                'THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.',
              )),
        n.bindTexture(oe, q.__webglTexture),
        H(oe, M, we),
        o && M.mipmaps && M.mipmaps.length > 0)
      )
        for (let ue = 0; ue < M.mipmaps.length; ue++)
          _e(W.__webglFramebuffer[ue], A, M, t.COLOR_ATTACHMENT0, oe, ue);
      else _e(W.__webglFramebuffer, A, M, t.COLOR_ATTACHMENT0, oe, 0);
      x(M, we) && E(oe), n.unbindTexture();
    }
    A.depthBuffer && be(A);
  }
  function ye(A) {
    const M = u(A) || o,
      W = A.textures;
    for (let q = 0, te = W.length; q < te; q++) {
      const Q = W[q];
      if (x(Q, M)) {
        const Ne = A.isWebGLCubeRenderTarget ? t.TEXTURE_CUBE_MAP : t.TEXTURE_2D,
          we = i.get(Q).__webglTexture;
        n.bindTexture(Ne, we), E(Ne), n.unbindTexture();
      }
    }
  }
  function ke(A) {
    if (o && A.samples > 0 && Ve(A) === !1) {
      const M = A.textures,
        W = A.width,
        q = A.height;
      let te = t.COLOR_BUFFER_BIT;
      const Q = [],
        Ne = A.stencilBuffer ? t.DEPTH_STENCIL_ATTACHMENT : t.DEPTH_ATTACHMENT,
        we = i.get(A),
        oe = M.length > 1;
      if (oe)
        for (let ue = 0; ue < M.length; ue++)
          n.bindFramebuffer(t.FRAMEBUFFER, we.__webglMultisampledFramebuffer),
            t.framebufferRenderbuffer(
              t.FRAMEBUFFER,
              t.COLOR_ATTACHMENT0 + ue,
              t.RENDERBUFFER,
              null,
            ),
            n.bindFramebuffer(t.FRAMEBUFFER, we.__webglFramebuffer),
            t.framebufferTexture2D(
              t.DRAW_FRAMEBUFFER,
              t.COLOR_ATTACHMENT0 + ue,
              t.TEXTURE_2D,
              null,
              0,
            );
      n.bindFramebuffer(t.READ_FRAMEBUFFER, we.__webglMultisampledFramebuffer),
        n.bindFramebuffer(t.DRAW_FRAMEBUFFER, we.__webglFramebuffer);
      for (let ue = 0; ue < M.length; ue++) {
        Q.push(t.COLOR_ATTACHMENT0 + ue), A.depthBuffer && Q.push(Ne);
        const Le = we.__ignoreDepthValues !== void 0 ? we.__ignoreDepthValues : !1;
        if (
          (Le === !1 &&
            (A.depthBuffer && (te |= t.DEPTH_BUFFER_BIT),
            A.stencilBuffer && (te |= t.STENCIL_BUFFER_BIT)),
          oe &&
            t.framebufferRenderbuffer(
              t.READ_FRAMEBUFFER,
              t.COLOR_ATTACHMENT0,
              t.RENDERBUFFER,
              we.__webglColorRenderbuffer[ue],
            ),
          Le === !0 &&
            (t.invalidateFramebuffer(t.READ_FRAMEBUFFER, [Ne]),
            t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER, [Ne])),
          oe)
        ) {
          const ie = i.get(M[ue]).__webglTexture;
          t.framebufferTexture2D(t.DRAW_FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, ie, 0);
        }
        t.blitFramebuffer(0, 0, W, q, 0, 0, W, q, te, t.NEAREST),
          c && t.invalidateFramebuffer(t.READ_FRAMEBUFFER, Q);
      }
      if (
        (n.bindFramebuffer(t.READ_FRAMEBUFFER, null),
        n.bindFramebuffer(t.DRAW_FRAMEBUFFER, null),
        oe)
      )
        for (let ue = 0; ue < M.length; ue++) {
          n.bindFramebuffer(t.FRAMEBUFFER, we.__webglMultisampledFramebuffer),
            t.framebufferRenderbuffer(
              t.FRAMEBUFFER,
              t.COLOR_ATTACHMENT0 + ue,
              t.RENDERBUFFER,
              we.__webglColorRenderbuffer[ue],
            );
          const Le = i.get(M[ue]).__webglTexture;
          n.bindFramebuffer(t.FRAMEBUFFER, we.__webglFramebuffer),
            t.framebufferTexture2D(
              t.DRAW_FRAMEBUFFER,
              t.COLOR_ATTACHMENT0 + ue,
              t.TEXTURE_2D,
              Le,
              0,
            );
        }
      n.bindFramebuffer(t.DRAW_FRAMEBUFFER, we.__webglMultisampledFramebuffer);
    }
  }
  function Ee(A) {
    return Math.min(r.maxSamples, A.samples);
  }
  function Ve(A) {
    const M = i.get(A);
    return (
      o &&
      A.samples > 0 &&
      e.has('WEBGL_multisampled_render_to_texture') === !0 &&
      M.__useRenderToTexture !== !1
    );
  }
  function Fe(A) {
    const M = a.render.frame;
    f.get(A) !== M && (f.set(A, M), A.update());
  }
  function ze(A, M) {
    const W = A.colorSpace,
      q = A.format,
      te = A.type;
    return (
      A.isCompressedTexture === !0 ||
        A.isVideoTexture === !0 ||
        A.format === Ku ||
        (W !== Ki &&
          W !== Ri &&
          (Ke.getTransfer(W) === nt
            ? o === !1
              ? e.has('EXT_sRGB') === !0 && q === Dn
                ? ((A.format = Ku), (A.minFilter = $t), (A.generateMipmaps = !1))
                : (M = v0.sRGBToLinear(M))
              : (q !== Dn || te !== Gi) &&
                console.warn(
                  'THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.',
                )
            : console.error('THREE.WebGLTextures: Unsupported texture color space:', W))),
      M
    );
  }
  function pt(A) {
    return (
      typeof HTMLImageElement < 'u' && A instanceof HTMLImageElement
        ? ((d.width = A.naturalWidth || A.width), (d.height = A.naturalHeight || A.height))
        : typeof VideoFrame < 'u' && A instanceof VideoFrame
        ? ((d.width = A.displayWidth), (d.height = A.displayHeight))
        : ((d.width = A.width), (d.height = A.height)),
      d
    );
  }
  (this.allocateTextureUnit = X),
    (this.resetTextureUnits = L),
    (this.setTexture2D = $),
    (this.setTexture2DArray = P),
    (this.setTexture3D = O),
    (this.setTextureCube = V),
    (this.rebindTextures = I),
    (this.setupRenderTarget = Rt),
    (this.updateRenderTargetMipmap = ye),
    (this.updateMultisampleRenderTarget = ke),
    (this.setupDepthRenderbuffer = be),
    (this.setupFrameBufferTexture = _e),
    (this.useMultisampledRTT = Ve);
}
function kw(t, e, n) {
  const i = n.isWebGL2;
  function r(s, a = Ri) {
    let o;
    const l = Ke.getTransfer(a);
    if (s === Gi) return t.UNSIGNED_BYTE;
    if (s === d0) return t.UNSIGNED_SHORT_4_4_4_4;
    if (s === f0) return t.UNSIGNED_SHORT_5_5_5_1;
    if (s === my) return t.BYTE;
    if (s === gy) return t.SHORT;
    if (s === Zd) return t.UNSIGNED_SHORT;
    if (s === u0) return t.INT;
    if (s === Ni) return t.UNSIGNED_INT;
    if (s === ri) return t.FLOAT;
    if (s === wa)
      return i
        ? t.HALF_FLOAT
        : ((o = e.get('OES_texture_half_float')), o !== null ? o.HALF_FLOAT_OES : null);
    if (s === xy) return t.ALPHA;
    if (s === Dn) return t.RGBA;
    if (s === _y) return t.LUMINANCE;
    if (s === vy) return t.LUMINANCE_ALPHA;
    if (s === _r) return t.DEPTH_COMPONENT;
    if (s === ws) return t.DEPTH_STENCIL;
    if (s === Ku) return (o = e.get('EXT_sRGB')), o !== null ? o.SRGB_ALPHA_EXT : null;
    if (s === yy) return t.RED;
    if (s === h0) return t.RED_INTEGER;
    if (s === Sy) return t.RG;
    if (s === p0) return t.RG_INTEGER;
    if (s === m0) return t.RGBA_INTEGER;
    if (s === gc || s === xc || s === _c || s === vc)
      if (l === nt)
        if (((o = e.get('WEBGL_compressed_texture_s3tc_srgb')), o !== null)) {
          if (s === gc) return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (s === xc) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (s === _c) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (s === vc) return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((o = e.get('WEBGL_compressed_texture_s3tc')), o !== null)) {
        if (s === gc) return o.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (s === xc) return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (s === _c) return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (s === vc) return o.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (s === wh || s === Th || s === Ah || s === bh)
      if (((o = e.get('WEBGL_compressed_texture_pvrtc')), o !== null)) {
        if (s === wh) return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (s === Th) return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (s === Ah) return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (s === bh) return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (s === g0)
      return (
        (o = e.get('WEBGL_compressed_texture_etc1')),
        o !== null ? o.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (s === Rh || s === Ch)
      if (((o = e.get('WEBGL_compressed_texture_etc')), o !== null)) {
        if (s === Rh) return l === nt ? o.COMPRESSED_SRGB8_ETC2 : o.COMPRESSED_RGB8_ETC2;
        if (s === Ch)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : o.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      s === Ph ||
      s === Nh ||
      s === Lh ||
      s === Dh ||
      s === Uh ||
      s === Ih ||
      s === Fh ||
      s === Oh ||
      s === kh ||
      s === zh ||
      s === Bh ||
      s === Hh ||
      s === Gh ||
      s === Vh
    )
      if (((o = e.get('WEBGL_compressed_texture_astc')), o !== null)) {
        if (s === Ph)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : o.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (s === Nh)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : o.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (s === Lh)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : o.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (s === Dh)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : o.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (s === Uh)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : o.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (s === Ih)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : o.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (s === Fh)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : o.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (s === Oh)
          return l === nt ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : o.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (s === kh)
          return l === nt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : o.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (s === zh)
          return l === nt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : o.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (s === Bh)
          return l === nt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : o.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (s === Hh)
          return l === nt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : o.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (s === Gh)
          return l === nt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : o.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (s === Vh)
          return l === nt
            ? o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : o.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (s === yc || s === Wh || s === jh)
      if (((o = e.get('EXT_texture_compression_bptc')), o !== null)) {
        if (s === yc)
          return l === nt
            ? o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : o.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (s === Wh) return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (s === jh) return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (s === My || s === Xh || s === qh || s === Yh)
      if (((o = e.get('EXT_texture_compression_rgtc')), o !== null)) {
        if (s === yc) return o.COMPRESSED_RED_RGTC1_EXT;
        if (s === Xh) return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (s === qh) return o.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (s === Yh) return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return s === xr
      ? i
        ? t.UNSIGNED_INT_24_8
        : ((o = e.get('WEBGL_depth_texture')), o !== null ? o.UNSIGNED_INT_24_8_WEBGL : null)
      : t[s] !== void 0
      ? t[s]
      : null;
  }
  return { convert: r };
}
class zw extends cn {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Eo extends jt {
  constructor() {
    super(), (this.isGroup = !0), (this.type = 'Group');
  }
}
const Bw = { type: 'move' };
class qc {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Eo()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Eo()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new F()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new F())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Eo()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new F()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new F())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const n = this._hand;
      if (n) for (const i of e.hand.values()) this._getHandJoint(n, i);
    }
    return this.dispatchEvent({ type: 'connected', data: e }), this;
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: 'disconnected', data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, n, i) {
    let r = null,
      s = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && n.session.visibilityState !== 'visible-blurred') {
      if (c && e.hand) {
        a = !0;
        for (const y of e.hand.values()) {
          const p = n.getJointPose(y, i),
            u = this._getHandJoint(c, y);
          p !== null &&
            (u.matrix.fromArray(p.transform.matrix),
            u.matrix.decompose(u.position, u.rotation, u.scale),
            (u.matrixWorldNeedsUpdate = !0),
            (u.jointRadius = p.radius)),
            (u.visible = p !== null);
        }
        const d = c.joints['index-finger-tip'],
          f = c.joints['thumb-tip'],
          h = d.position.distanceTo(f.position),
          g = 0.02,
          v = 0.005;
        c.inputState.pinching && h > g + v
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({ type: 'pinchend', handedness: e.handedness, target: this }))
          : !c.inputState.pinching &&
            h <= g - v &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({ type: 'pinchstart', handedness: e.handedness, target: this }));
      } else
        l !== null &&
          e.gripSpace &&
          ((s = n.getPose(e.gripSpace, i)),
          s !== null &&
            (l.matrix.fromArray(s.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            s.linearVelocity
              ? ((l.hasLinearVelocity = !0), l.linearVelocity.copy(s.linearVelocity))
              : (l.hasLinearVelocity = !1),
            s.angularVelocity
              ? ((l.hasAngularVelocity = !0), l.angularVelocity.copy(s.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((r = n.getPose(e.targetRaySpace, i)),
        r === null && s !== null && (r = s),
        r !== null &&
          (o.matrix.fromArray(r.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          r.linearVelocity
            ? ((o.hasLinearVelocity = !0), o.linearVelocity.copy(r.linearVelocity))
            : (o.hasLinearVelocity = !1),
          r.angularVelocity
            ? ((o.hasAngularVelocity = !0), o.angularVelocity.copy(r.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Bw)));
    }
    return (
      o !== null && (o.visible = r !== null),
      l !== null && (l.visible = s !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, n) {
    if (e.joints[n.jointName] === void 0) {
      const i = new Eo();
      (i.matrixAutoUpdate = !1), (i.visible = !1), (e.joints[n.jointName] = i), e.add(i);
    }
    return e.joints[n.jointName];
  }
}
const Hw = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Gw = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Vw {
  constructor() {
    (this.texture = null), (this.mesh = null), (this.depthNear = 0), (this.depthFar = 0);
  }
  init(e, n, i) {
    if (this.texture === null) {
      const r = new rn(),
        s = e.properties.get(r);
      (s.__webglTexture = n.texture),
        (n.depthNear != i.depthNear || n.depthFar != i.depthFar) &&
          ((this.depthNear = n.depthNear), (this.depthFar = n.depthFar)),
        (this.texture = r);
    }
  }
  render(e, n) {
    if (this.texture !== null) {
      if (this.mesh === null) {
        const i = n.cameras[0].viewport,
          r = new Xi({
            extensions: { fragDepth: !0 },
            vertexShader: Hw,
            fragmentShader: Gw,
            uniforms: {
              depthColor: { value: this.texture },
              depthWidth: { value: i.z },
              depthHeight: { value: i.w },
            },
          });
        this.mesh = new li(new Ol(20, 20), r);
      }
      e.render(this.mesh, n);
    }
  }
  reset() {
    (this.texture = null), (this.mesh = null);
  }
}
class Ww extends Cs {
  constructor(e, n) {
    super();
    const i = this;
    let r = null,
      s = 1,
      a = null,
      o = 'local-floor',
      l = 1,
      c = null,
      d = null,
      f = null,
      h = null,
      g = null,
      v = null;
    const y = new Vw(),
      p = n.getContextAttributes();
    let u = null,
      _ = null;
    const x = [],
      E = [],
      C = new je();
    let b = null;
    const T = new cn();
    T.layers.enable(1), (T.viewport = new ot());
    const D = new cn();
    D.layers.enable(2), (D.viewport = new ot());
    const Y = [T, D],
      S = new zw();
    S.layers.enable(1), S.layers.enable(2);
    let R = null,
      ne = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (H) {
        let Z = x[H];
        return Z === void 0 && ((Z = new qc()), (x[H] = Z)), Z.getTargetRaySpace();
      }),
      (this.getControllerGrip = function (H) {
        let Z = x[H];
        return Z === void 0 && ((Z = new qc()), (x[H] = Z)), Z.getGripSpace();
      }),
      (this.getHand = function (H) {
        let Z = x[H];
        return Z === void 0 && ((Z = new qc()), (x[H] = Z)), Z.getHandSpace();
      });
    function J(H) {
      const Z = E.indexOf(H.inputSource);
      if (Z === -1) return;
      const ce = x[Z];
      ce !== void 0 &&
        (ce.update(H.inputSource, H.frame, c || a),
        ce.dispatchEvent({ type: H.type, data: H.inputSource }));
    }
    function L() {
      r.removeEventListener('select', J),
        r.removeEventListener('selectstart', J),
        r.removeEventListener('selectend', J),
        r.removeEventListener('squeeze', J),
        r.removeEventListener('squeezestart', J),
        r.removeEventListener('squeezeend', J),
        r.removeEventListener('end', L),
        r.removeEventListener('inputsourceschange', X);
      for (let H = 0; H < x.length; H++) {
        const Z = E[H];
        Z !== null && ((E[H] = null), x[H].disconnect(Z));
      }
      (R = null),
        (ne = null),
        y.reset(),
        e.setRenderTarget(u),
        (g = null),
        (h = null),
        (f = null),
        (r = null),
        (_ = null),
        Te.stop(),
        (i.isPresenting = !1),
        e.setPixelRatio(b),
        e.setSize(C.width, C.height, !1),
        i.dispatchEvent({ type: 'sessionend' });
    }
    (this.setFramebufferScaleFactor = function (H) {
      (s = H),
        i.isPresenting === !0 &&
          console.warn('THREE.WebXRManager: Cannot change framebuffer scale while presenting.');
    }),
      (this.setReferenceSpaceType = function (H) {
        (o = H),
          i.isPresenting === !0 &&
            console.warn(
              'THREE.WebXRManager: Cannot change reference space type while presenting.',
            );
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (H) {
        c = H;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : g;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return v;
      }),
      (this.getSession = function () {
        return r;
      }),
      (this.setSession = async function (H) {
        if (((r = H), r !== null)) {
          if (
            ((u = e.getRenderTarget()),
            r.addEventListener('select', J),
            r.addEventListener('selectstart', J),
            r.addEventListener('selectend', J),
            r.addEventListener('squeeze', J),
            r.addEventListener('squeezestart', J),
            r.addEventListener('squeezeend', J),
            r.addEventListener('end', L),
            r.addEventListener('inputsourceschange', X),
            p.xrCompatible !== !0 && (await n.makeXRCompatible()),
            (b = e.getPixelRatio()),
            e.getSize(C),
            r.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const Z = {
              antialias: r.renderState.layers === void 0 ? p.antialias : !0,
              alpha: !0,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: s,
            };
            (g = new XRWebGLLayer(r, n, Z)),
              r.updateRenderState({ baseLayer: g }),
              e.setPixelRatio(1),
              e.setSize(g.framebufferWidth, g.framebufferHeight, !1),
              (_ = new Tr(g.framebufferWidth, g.framebufferHeight, {
                format: Dn,
                type: Gi,
                colorSpace: e.outputColorSpace,
                stencilBuffer: p.stencil,
              }));
          } else {
            let Z = null,
              ce = null,
              Se = null;
            p.depth &&
              ((Se = p.stencil ? n.DEPTH24_STENCIL8 : n.DEPTH_COMPONENT24),
              (Z = p.stencil ? ws : _r),
              (ce = p.stencil ? xr : Ni));
            const _e = { colorFormat: n.RGBA8, depthFormat: Se, scaleFactor: s };
            (f = new XRWebGLBinding(r, n)),
              (h = f.createProjectionLayer(_e)),
              r.updateRenderState({ layers: [h] }),
              e.setPixelRatio(1),
              e.setSize(h.textureWidth, h.textureHeight, !1),
              (_ = new Tr(h.textureWidth, h.textureHeight, {
                format: Dn,
                type: Gi,
                depthTexture: new L0(
                  h.textureWidth,
                  h.textureHeight,
                  ce,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  Z,
                ),
                stencilBuffer: p.stencil,
                colorSpace: e.outputColorSpace,
                samples: p.antialias ? 4 : 0,
              }));
            const pe = e.properties.get(_);
            pe.__ignoreDepthValues = h.ignoreDepthValues;
          }
          (_.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await r.requestReferenceSpace(o)),
            Te.setContext(r),
            Te.start(),
            (i.isPresenting = !0),
            i.dispatchEvent({ type: 'sessionstart' });
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (r !== null) return r.environmentBlendMode;
      });
    function X(H) {
      for (let Z = 0; Z < H.removed.length; Z++) {
        const ce = H.removed[Z],
          Se = E.indexOf(ce);
        Se >= 0 && ((E[Se] = null), x[Se].disconnect(ce));
      }
      for (let Z = 0; Z < H.added.length; Z++) {
        const ce = H.added[Z];
        let Se = E.indexOf(ce);
        if (Se === -1) {
          for (let pe = 0; pe < x.length; pe++)
            if (pe >= E.length) {
              E.push(ce), (Se = pe);
              break;
            } else if (E[pe] === null) {
              (E[pe] = ce), (Se = pe);
              break;
            }
          if (Se === -1) break;
        }
        const _e = x[Se];
        _e && _e.connect(ce);
      }
    }
    const j = new F(),
      $ = new F();
    function P(H, Z, ce) {
      j.setFromMatrixPosition(Z.matrixWorld), $.setFromMatrixPosition(ce.matrixWorld);
      const Se = j.distanceTo($),
        _e = Z.projectionMatrix.elements,
        pe = ce.projectionMatrix.elements,
        Ye = _e[14] / (_e[10] - 1),
        be = _e[14] / (_e[10] + 1),
        I = (_e[9] + 1) / _e[5],
        Rt = (_e[9] - 1) / _e[5],
        ye = (_e[8] - 1) / _e[0],
        ke = (pe[8] + 1) / pe[0],
        Ee = Ye * ye,
        Ve = Ye * ke,
        Fe = Se / (-ye + ke),
        ze = Fe * -ye;
      Z.matrixWorld.decompose(H.position, H.quaternion, H.scale),
        H.translateX(ze),
        H.translateZ(Fe),
        H.matrixWorld.compose(H.position, H.quaternion, H.scale),
        H.matrixWorldInverse.copy(H.matrixWorld).invert();
      const pt = Ye + Fe,
        A = be + Fe,
        M = Ee - ze,
        W = Ve + (Se - ze),
        q = ((I * be) / A) * pt,
        te = ((Rt * be) / A) * pt;
      H.projectionMatrix.makePerspective(M, W, q, te, pt, A),
        H.projectionMatrixInverse.copy(H.projectionMatrix).invert();
    }
    function O(H, Z) {
      Z === null
        ? H.matrixWorld.copy(H.matrix)
        : H.matrixWorld.multiplyMatrices(Z.matrixWorld, H.matrix),
        H.matrixWorldInverse.copy(H.matrixWorld).invert();
    }
    this.updateCamera = function (H) {
      if (r === null) return;
      y.texture !== null && ((H.near = y.depthNear), (H.far = y.depthFar)),
        (S.near = D.near = T.near = H.near),
        (S.far = D.far = T.far = H.far),
        (R !== S.near || ne !== S.far) &&
          (r.updateRenderState({ depthNear: S.near, depthFar: S.far }),
          (R = S.near),
          (ne = S.far),
          (T.near = R),
          (T.far = ne),
          (D.near = R),
          (D.far = ne),
          T.updateProjectionMatrix(),
          D.updateProjectionMatrix(),
          H.updateProjectionMatrix());
      const Z = H.parent,
        ce = S.cameras;
      O(S, Z);
      for (let Se = 0; Se < ce.length; Se++) O(ce[Se], Z);
      ce.length === 2 ? P(S, T, D) : S.projectionMatrix.copy(T.projectionMatrix), V(H, S, Z);
    };
    function V(H, Z, ce) {
      ce === null
        ? H.matrix.copy(Z.matrixWorld)
        : (H.matrix.copy(ce.matrixWorld), H.matrix.invert(), H.matrix.multiply(Z.matrixWorld)),
        H.matrix.decompose(H.position, H.quaternion, H.scale),
        H.updateMatrixWorld(!0),
        H.projectionMatrix.copy(Z.projectionMatrix),
        H.projectionMatrixInverse.copy(Z.projectionMatrixInverse),
        H.isPerspectiveCamera &&
          ((H.fov = Zu * 2 * Math.atan(1 / H.projectionMatrix.elements[5])), (H.zoom = 1));
    }
    (this.getCamera = function () {
      return S;
    }),
      (this.getFoveation = function () {
        if (!(h === null && g === null)) return l;
      }),
      (this.setFoveation = function (H) {
        (l = H),
          h !== null && (h.fixedFoveation = H),
          g !== null && g.fixedFoveation !== void 0 && (g.fixedFoveation = H);
      }),
      (this.hasDepthSensing = function () {
        return y.texture !== null;
      });
    let K = null;
    function se(H, Z) {
      if (((d = Z.getViewerPose(c || a)), (v = Z), d !== null)) {
        const ce = d.views;
        g !== null && (e.setRenderTargetFramebuffer(_, g.framebuffer), e.setRenderTarget(_));
        let Se = !1;
        ce.length !== S.cameras.length && ((S.cameras.length = 0), (Se = !0));
        for (let pe = 0; pe < ce.length; pe++) {
          const Ye = ce[pe];
          let be = null;
          if (g !== null) be = g.getViewport(Ye);
          else {
            const Rt = f.getViewSubImage(h, Ye);
            (be = Rt.viewport),
              pe === 0 &&
                (e.setRenderTargetTextures(
                  _,
                  Rt.colorTexture,
                  h.ignoreDepthValues ? void 0 : Rt.depthStencilTexture,
                ),
                e.setRenderTarget(_));
          }
          let I = Y[pe];
          I === void 0 &&
            ((I = new cn()), I.layers.enable(pe), (I.viewport = new ot()), (Y[pe] = I)),
            I.matrix.fromArray(Ye.transform.matrix),
            I.matrix.decompose(I.position, I.quaternion, I.scale),
            I.projectionMatrix.fromArray(Ye.projectionMatrix),
            I.projectionMatrixInverse.copy(I.projectionMatrix).invert(),
            I.viewport.set(be.x, be.y, be.width, be.height),
            pe === 0 &&
              (S.matrix.copy(I.matrix), S.matrix.decompose(S.position, S.quaternion, S.scale)),
            Se === !0 && S.cameras.push(I);
        }
        const _e = r.enabledFeatures;
        if (_e && _e.includes('depth-sensing')) {
          const pe = f.getDepthInformation(ce[0]);
          pe && pe.isValid && pe.texture && y.init(e, pe, r.renderState);
        }
      }
      for (let ce = 0; ce < x.length; ce++) {
        const Se = E[ce],
          _e = x[ce];
        Se !== null && _e !== void 0 && _e.update(Se, Z, c || a);
      }
      y.render(e, S),
        K && K(H, Z),
        Z.detectedPlanes && i.dispatchEvent({ type: 'planesdetected', data: Z }),
        (v = null);
    }
    const Te = new N0();
    Te.setAnimationLoop(se),
      (this.setAnimationLoop = function (H) {
        K = H;
      }),
      (this.dispose = function () {});
  }
}
const rr = new pi(),
  jw = new dt();
function Xw(t, e) {
  function n(p, u) {
    p.matrixAutoUpdate === !0 && p.updateMatrix(), u.value.copy(p.matrix);
  }
  function i(p, u) {
    u.color.getRGB(p.fogColor.value, R0(t)),
      u.isFog
        ? ((p.fogNear.value = u.near), (p.fogFar.value = u.far))
        : u.isFogExp2 && (p.fogDensity.value = u.density);
  }
  function r(p, u, _, x, E) {
    u.isMeshBasicMaterial || u.isMeshLambertMaterial
      ? s(p, u)
      : u.isMeshToonMaterial
      ? (s(p, u), f(p, u))
      : u.isMeshPhongMaterial
      ? (s(p, u), d(p, u))
      : u.isMeshStandardMaterial
      ? (s(p, u), h(p, u), u.isMeshPhysicalMaterial && g(p, u, E))
      : u.isMeshMatcapMaterial
      ? (s(p, u), v(p, u))
      : u.isMeshDepthMaterial
      ? s(p, u)
      : u.isMeshDistanceMaterial
      ? (s(p, u), y(p, u))
      : u.isMeshNormalMaterial
      ? s(p, u)
      : u.isLineBasicMaterial
      ? (a(p, u), u.isLineDashedMaterial && o(p, u))
      : u.isPointsMaterial
      ? l(p, u, _, x)
      : u.isSpriteMaterial
      ? c(p, u)
      : u.isShadowMaterial
      ? (p.color.value.copy(u.color), (p.opacity.value = u.opacity))
      : u.isShaderMaterial && (u.uniformsNeedUpdate = !1);
  }
  function s(p, u) {
    (p.opacity.value = u.opacity),
      u.color && p.diffuse.value.copy(u.color),
      u.emissive && p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),
      u.map && ((p.map.value = u.map), n(u.map, p.mapTransform)),
      u.alphaMap && ((p.alphaMap.value = u.alphaMap), n(u.alphaMap, p.alphaMapTransform)),
      u.bumpMap &&
        ((p.bumpMap.value = u.bumpMap),
        n(u.bumpMap, p.bumpMapTransform),
        (p.bumpScale.value = u.bumpScale),
        u.side === nn && (p.bumpScale.value *= -1)),
      u.normalMap &&
        ((p.normalMap.value = u.normalMap),
        n(u.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(u.normalScale),
        u.side === nn && p.normalScale.value.negate()),
      u.displacementMap &&
        ((p.displacementMap.value = u.displacementMap),
        n(u.displacementMap, p.displacementMapTransform),
        (p.displacementScale.value = u.displacementScale),
        (p.displacementBias.value = u.displacementBias)),
      u.emissiveMap &&
        ((p.emissiveMap.value = u.emissiveMap), n(u.emissiveMap, p.emissiveMapTransform)),
      u.specularMap &&
        ((p.specularMap.value = u.specularMap), n(u.specularMap, p.specularMapTransform)),
      u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
    const _ = e.get(u),
      x = _.envMap,
      E = _.envMapRotation;
    if (
      (x &&
        ((p.envMap.value = x),
        rr.copy(E),
        (rr.x *= -1),
        (rr.y *= -1),
        (rr.z *= -1),
        x.isCubeTexture && x.isRenderTargetTexture === !1 && ((rr.y *= -1), (rr.z *= -1)),
        p.envMapRotation.value.setFromMatrix4(jw.makeRotationFromEuler(rr)),
        (p.flipEnvMap.value = x.isCubeTexture && x.isRenderTargetTexture === !1 ? -1 : 1),
        (p.reflectivity.value = u.reflectivity),
        (p.ior.value = u.ior),
        (p.refractionRatio.value = u.refractionRatio)),
      u.lightMap)
    ) {
      p.lightMap.value = u.lightMap;
      const C = t._useLegacyLights === !0 ? Math.PI : 1;
      (p.lightMapIntensity.value = u.lightMapIntensity * C), n(u.lightMap, p.lightMapTransform);
    }
    u.aoMap &&
      ((p.aoMap.value = u.aoMap),
      (p.aoMapIntensity.value = u.aoMapIntensity),
      n(u.aoMap, p.aoMapTransform));
  }
  function a(p, u) {
    p.diffuse.value.copy(u.color),
      (p.opacity.value = u.opacity),
      u.map && ((p.map.value = u.map), n(u.map, p.mapTransform));
  }
  function o(p, u) {
    (p.dashSize.value = u.dashSize),
      (p.totalSize.value = u.dashSize + u.gapSize),
      (p.scale.value = u.scale);
  }
  function l(p, u, _, x) {
    p.diffuse.value.copy(u.color),
      (p.opacity.value = u.opacity),
      (p.size.value = u.size * _),
      (p.scale.value = x * 0.5),
      u.map && ((p.map.value = u.map), n(u.map, p.uvTransform)),
      u.alphaMap && ((p.alphaMap.value = u.alphaMap), n(u.alphaMap, p.alphaMapTransform)),
      u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function c(p, u) {
    p.diffuse.value.copy(u.color),
      (p.opacity.value = u.opacity),
      (p.rotation.value = u.rotation),
      u.map && ((p.map.value = u.map), n(u.map, p.mapTransform)),
      u.alphaMap && ((p.alphaMap.value = u.alphaMap), n(u.alphaMap, p.alphaMapTransform)),
      u.alphaTest > 0 && (p.alphaTest.value = u.alphaTest);
  }
  function d(p, u) {
    p.specular.value.copy(u.specular), (p.shininess.value = Math.max(u.shininess, 1e-4));
  }
  function f(p, u) {
    u.gradientMap && (p.gradientMap.value = u.gradientMap);
  }
  function h(p, u) {
    (p.metalness.value = u.metalness),
      u.metalnessMap &&
        ((p.metalnessMap.value = u.metalnessMap), n(u.metalnessMap, p.metalnessMapTransform)),
      (p.roughness.value = u.roughness),
      u.roughnessMap &&
        ((p.roughnessMap.value = u.roughnessMap), n(u.roughnessMap, p.roughnessMapTransform)),
      e.get(u).envMap && (p.envMapIntensity.value = u.envMapIntensity);
  }
  function g(p, u, _) {
    (p.ior.value = u.ior),
      u.sheen > 0 &&
        (p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),
        (p.sheenRoughness.value = u.sheenRoughness),
        u.sheenColorMap &&
          ((p.sheenColorMap.value = u.sheenColorMap), n(u.sheenColorMap, p.sheenColorMapTransform)),
        u.sheenRoughnessMap &&
          ((p.sheenRoughnessMap.value = u.sheenRoughnessMap),
          n(u.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
      u.clearcoat > 0 &&
        ((p.clearcoat.value = u.clearcoat),
        (p.clearcoatRoughness.value = u.clearcoatRoughness),
        u.clearcoatMap &&
          ((p.clearcoatMap.value = u.clearcoatMap), n(u.clearcoatMap, p.clearcoatMapTransform)),
        u.clearcoatRoughnessMap &&
          ((p.clearcoatRoughnessMap.value = u.clearcoatRoughnessMap),
          n(u.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        u.clearcoatNormalMap &&
          ((p.clearcoatNormalMap.value = u.clearcoatNormalMap),
          n(u.clearcoatNormalMap, p.clearcoatNormalMapTransform),
          p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),
          u.side === nn && p.clearcoatNormalScale.value.negate())),
      u.iridescence > 0 &&
        ((p.iridescence.value = u.iridescence),
        (p.iridescenceIOR.value = u.iridescenceIOR),
        (p.iridescenceThicknessMinimum.value = u.iridescenceThicknessRange[0]),
        (p.iridescenceThicknessMaximum.value = u.iridescenceThicknessRange[1]),
        u.iridescenceMap &&
          ((p.iridescenceMap.value = u.iridescenceMap),
          n(u.iridescenceMap, p.iridescenceMapTransform)),
        u.iridescenceThicknessMap &&
          ((p.iridescenceThicknessMap.value = u.iridescenceThicknessMap),
          n(u.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
      u.transmission > 0 &&
        ((p.transmission.value = u.transmission),
        (p.transmissionSamplerMap.value = _.texture),
        p.transmissionSamplerSize.value.set(_.width, _.height),
        u.transmissionMap &&
          ((p.transmissionMap.value = u.transmissionMap),
          n(u.transmissionMap, p.transmissionMapTransform)),
        (p.thickness.value = u.thickness),
        u.thicknessMap &&
          ((p.thicknessMap.value = u.thicknessMap), n(u.thicknessMap, p.thicknessMapTransform)),
        (p.attenuationDistance.value = u.attenuationDistance),
        p.attenuationColor.value.copy(u.attenuationColor)),
      u.anisotropy > 0 &&
        (p.anisotropyVector.value.set(
          u.anisotropy * Math.cos(u.anisotropyRotation),
          u.anisotropy * Math.sin(u.anisotropyRotation),
        ),
        u.anisotropyMap &&
          ((p.anisotropyMap.value = u.anisotropyMap),
          n(u.anisotropyMap, p.anisotropyMapTransform))),
      (p.specularIntensity.value = u.specularIntensity),
      p.specularColor.value.copy(u.specularColor),
      u.specularColorMap &&
        ((p.specularColorMap.value = u.specularColorMap),
        n(u.specularColorMap, p.specularColorMapTransform)),
      u.specularIntensityMap &&
        ((p.specularIntensityMap.value = u.specularIntensityMap),
        n(u.specularIntensityMap, p.specularIntensityMapTransform));
  }
  function v(p, u) {
    u.matcap && (p.matcap.value = u.matcap);
  }
  function y(p, u) {
    const _ = e.get(u).light;
    p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),
      (p.nearDistance.value = _.shadow.camera.near),
      (p.farDistance.value = _.shadow.camera.far);
  }
  return { refreshFogUniforms: i, refreshMaterialUniforms: r };
}
function qw(t, e, n, i) {
  let r = {},
    s = {},
    a = [];
  const o = n.isWebGL2 ? t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS) : 0;
  function l(_, x) {
    const E = x.program;
    i.uniformBlockBinding(_, E);
  }
  function c(_, x) {
    let E = r[_.id];
    E === void 0 && (v(_), (E = d(_)), (r[_.id] = E), _.addEventListener('dispose', p));
    const C = x.program;
    i.updateUBOMapping(_, C);
    const b = e.render.frame;
    s[_.id] !== b && (h(_), (s[_.id] = b));
  }
  function d(_) {
    const x = f();
    _.__bindingPointIndex = x;
    const E = t.createBuffer(),
      C = _.__size,
      b = _.usage;
    return (
      t.bindBuffer(t.UNIFORM_BUFFER, E),
      t.bufferData(t.UNIFORM_BUFFER, C, b),
      t.bindBuffer(t.UNIFORM_BUFFER, null),
      t.bindBufferBase(t.UNIFORM_BUFFER, x, E),
      E
    );
  }
  function f() {
    for (let _ = 0; _ < o; _++) if (a.indexOf(_) === -1) return a.push(_), _;
    return (
      console.error(
        'THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.',
      ),
      0
    );
  }
  function h(_) {
    const x = r[_.id],
      E = _.uniforms,
      C = _.__cache;
    t.bindBuffer(t.UNIFORM_BUFFER, x);
    for (let b = 0, T = E.length; b < T; b++) {
      const D = Array.isArray(E[b]) ? E[b] : [E[b]];
      for (let Y = 0, S = D.length; Y < S; Y++) {
        const R = D[Y];
        if (g(R, b, Y, C) === !0) {
          const ne = R.__offset,
            J = Array.isArray(R.value) ? R.value : [R.value];
          let L = 0;
          for (let X = 0; X < J.length; X++) {
            const j = J[X],
              $ = y(j);
            typeof j == 'number' || typeof j == 'boolean'
              ? ((R.__data[0] = j), t.bufferSubData(t.UNIFORM_BUFFER, ne + L, R.__data))
              : j.isMatrix3
              ? ((R.__data[0] = j.elements[0]),
                (R.__data[1] = j.elements[1]),
                (R.__data[2] = j.elements[2]),
                (R.__data[3] = 0),
                (R.__data[4] = j.elements[3]),
                (R.__data[5] = j.elements[4]),
                (R.__data[6] = j.elements[5]),
                (R.__data[7] = 0),
                (R.__data[8] = j.elements[6]),
                (R.__data[9] = j.elements[7]),
                (R.__data[10] = j.elements[8]),
                (R.__data[11] = 0))
              : (j.toArray(R.__data, L), (L += $.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          t.bufferSubData(t.UNIFORM_BUFFER, ne, R.__data);
        }
      }
    }
    t.bindBuffer(t.UNIFORM_BUFFER, null);
  }
  function g(_, x, E, C) {
    const b = _.value,
      T = x + '_' + E;
    if (C[T] === void 0)
      return typeof b == 'number' || typeof b == 'boolean' ? (C[T] = b) : (C[T] = b.clone()), !0;
    {
      const D = C[T];
      if (typeof b == 'number' || typeof b == 'boolean') {
        if (D !== b) return (C[T] = b), !0;
      } else if (D.equals(b) === !1) return D.copy(b), !0;
    }
    return !1;
  }
  function v(_) {
    const x = _.uniforms;
    let E = 0;
    const C = 16;
    for (let T = 0, D = x.length; T < D; T++) {
      const Y = Array.isArray(x[T]) ? x[T] : [x[T]];
      for (let S = 0, R = Y.length; S < R; S++) {
        const ne = Y[S],
          J = Array.isArray(ne.value) ? ne.value : [ne.value];
        for (let L = 0, X = J.length; L < X; L++) {
          const j = J[L],
            $ = y(j),
            P = E % C;
          P !== 0 && C - P < $.boundary && (E += C - P),
            (ne.__data = new Float32Array($.storage / Float32Array.BYTES_PER_ELEMENT)),
            (ne.__offset = E),
            (E += $.storage);
        }
      }
    }
    const b = E % C;
    return b > 0 && (E += C - b), (_.__size = E), (_.__cache = {}), this;
  }
  function y(_) {
    const x = { boundary: 0, storage: 0 };
    return (
      typeof _ == 'number' || typeof _ == 'boolean'
        ? ((x.boundary = 4), (x.storage = 4))
        : _.isVector2
        ? ((x.boundary = 8), (x.storage = 8))
        : _.isVector3 || _.isColor
        ? ((x.boundary = 16), (x.storage = 12))
        : _.isVector4
        ? ((x.boundary = 16), (x.storage = 16))
        : _.isMatrix3
        ? ((x.boundary = 48), (x.storage = 48))
        : _.isMatrix4
        ? ((x.boundary = 64), (x.storage = 64))
        : _.isTexture
        ? console.warn(
            'THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.',
          )
        : console.warn('THREE.WebGLRenderer: Unsupported uniform value type.', _),
      x
    );
  }
  function p(_) {
    const x = _.target;
    x.removeEventListener('dispose', p);
    const E = a.indexOf(x.__bindingPointIndex);
    a.splice(E, 1), t.deleteBuffer(r[x.id]), delete r[x.id], delete s[x.id];
  }
  function u() {
    for (const _ in r) t.deleteBuffer(r[_]);
    (a = []), (r = {}), (s = {});
  }
  return { bind: l, update: c, dispose: u };
}
class k0 {
  constructor(e = {}) {
    const {
      canvas: n = Iy(),
      context: i = null,
      depth: r = !0,
      stencil: s = !0,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: d = 'default',
      failIfMajorPerformanceCaveat: f = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let h;
    i !== null ? (h = i.getContextAttributes().alpha) : (h = a);
    const g = new Uint32Array(4),
      v = new Int32Array(4);
    let y = null,
      p = null;
    const u = [],
      _ = [];
    (this.domElement = n),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this._outputColorSpace = Bn),
      (this._useLegacyLights = !1),
      (this.toneMapping = Hi),
      (this.toneMappingExposure = 1);
    const x = this;
    let E = !1,
      C = 0,
      b = 0,
      T = null,
      D = -1,
      Y = null;
    const S = new ot(),
      R = new ot();
    let ne = null;
    const J = new qe(0);
    let L = 0,
      X = n.width,
      j = n.height,
      $ = 1,
      P = null,
      O = null;
    const V = new ot(0, 0, X, j),
      K = new ot(0, 0, X, j);
    let se = !1;
    const Te = new Jd();
    let H = !1,
      Z = !1,
      ce = null;
    const Se = new dt(),
      _e = new je(),
      pe = new F(),
      Ye = { background: null, fog: null, environment: null, overrideMaterial: null, isScene: !0 };
    function be() {
      return T === null ? $ : 1;
    }
    let I = i;
    function Rt(w, U) {
      for (let B = 0; B < w.length; B++) {
        const G = w[B],
          k = n.getContext(G, U);
        if (k !== null) return k;
      }
      return null;
    }
    try {
      const w = {
        alpha: !0,
        depth: r,
        stencil: s,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: d,
        failIfMajorPerformanceCaveat: f,
      };
      if (
        ('setAttribute' in n && n.setAttribute('data-engine', `three.js r${Kd}`),
        n.addEventListener('webglcontextlost', rt, !1),
        n.addEventListener('webglcontextrestored', N, !1),
        n.addEventListener('webglcontextcreationerror', le, !1),
        I === null)
      ) {
        const U = ['webgl2', 'webgl', 'experimental-webgl'];
        if ((x.isWebGL1Renderer === !0 && U.shift(), (I = Rt(U, w)), I === null))
          throw Rt(U)
            ? new Error('Error creating WebGL context with your selected attributes.')
            : new Error('Error creating WebGL context.');
      }
      typeof WebGLRenderingContext < 'u' &&
        I instanceof WebGLRenderingContext &&
        console.warn(
          'THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163.',
        ),
        I.getShaderPrecisionFormat === void 0 &&
          (I.getShaderPrecisionFormat = function () {
            return { rangeMin: 1, rangeMax: 1, precision: 1 };
          });
    } catch (w) {
      throw (console.error('THREE.WebGLRenderer: ' + w.message), w);
    }
    let ye, ke, Ee, Ve, Fe, ze, pt, A, M, W, q, te, Q, Ne, we, oe, ue, Le, ie, xt, Be, ve, me, ge;
    function We() {
      (ye = new JE(I)),
        (ke = new XE(I, ye, e)),
        ye.init(ke),
        (ve = new kw(I, ye, ke)),
        (Ee = new Fw(I, ye, ke)),
        (Ve = new n1(I)),
        (Fe = new Mw()),
        (ze = new Ow(I, ye, Ee, Fe, ke, ve, Ve)),
        (pt = new YE(x)),
        (A = new QE(x)),
        (M = new oS(I, ke)),
        (me = new WE(I, ye, M, ke)),
        (W = new e1(I, M, Ve, me)),
        (q = new a1(I, W, M, Ve)),
        (ie = new s1(I, ke, ze)),
        (oe = new qE(Fe)),
        (te = new Sw(x, pt, A, ye, ke, me, oe)),
        (Q = new Xw(x, Fe)),
        (Ne = new ww()),
        (we = new Pw(ye, ke)),
        (Le = new VE(x, pt, A, Ee, q, h, l)),
        (ue = new Iw(x, q, ke)),
        (ge = new qw(I, Ve, ke, Ee)),
        (xt = new jE(I, ye, Ve, ke)),
        (Be = new t1(I, ye, Ve, ke)),
        (Ve.programs = te.programs),
        (x.capabilities = ke),
        (x.extensions = ye),
        (x.properties = Fe),
        (x.renderLists = Ne),
        (x.shadowMap = ue),
        (x.state = Ee),
        (x.info = Ve);
    }
    We();
    const Ce = new Ww(x, I);
    (this.xr = Ce),
      (this.getContext = function () {
        return I;
      }),
      (this.getContextAttributes = function () {
        return I.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const w = ye.get('WEBGL_lose_context');
        w && w.loseContext();
      }),
      (this.forceContextRestore = function () {
        const w = ye.get('WEBGL_lose_context');
        w && w.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return $;
      }),
      (this.setPixelRatio = function (w) {
        w !== void 0 && (($ = w), this.setSize(X, j, !1));
      }),
      (this.getSize = function (w) {
        return w.set(X, j);
      }),
      (this.setSize = function (w, U, B = !0) {
        if (Ce.isPresenting) {
          console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
          return;
        }
        (X = w),
          (j = U),
          (n.width = Math.floor(w * $)),
          (n.height = Math.floor(U * $)),
          B === !0 && ((n.style.width = w + 'px'), (n.style.height = U + 'px')),
          this.setViewport(0, 0, w, U);
      }),
      (this.getDrawingBufferSize = function (w) {
        return w.set(X * $, j * $).floor();
      }),
      (this.setDrawingBufferSize = function (w, U, B) {
        (X = w),
          (j = U),
          ($ = B),
          (n.width = Math.floor(w * B)),
          (n.height = Math.floor(U * B)),
          this.setViewport(0, 0, w, U);
      }),
      (this.getCurrentViewport = function (w) {
        return w.copy(S);
      }),
      (this.getViewport = function (w) {
        return w.copy(V);
      }),
      (this.setViewport = function (w, U, B, G) {
        w.isVector4 ? V.set(w.x, w.y, w.z, w.w) : V.set(w, U, B, G),
          Ee.viewport(S.copy(V).multiplyScalar($).round());
      }),
      (this.getScissor = function (w) {
        return w.copy(K);
      }),
      (this.setScissor = function (w, U, B, G) {
        w.isVector4 ? K.set(w.x, w.y, w.z, w.w) : K.set(w, U, B, G),
          Ee.scissor(R.copy(K).multiplyScalar($).round());
      }),
      (this.getScissorTest = function () {
        return se;
      }),
      (this.setScissorTest = function (w) {
        Ee.setScissorTest((se = w));
      }),
      (this.setOpaqueSort = function (w) {
        P = w;
      }),
      (this.setTransparentSort = function (w) {
        O = w;
      }),
      (this.getClearColor = function (w) {
        return w.copy(Le.getClearColor());
      }),
      (this.setClearColor = function () {
        Le.setClearColor.apply(Le, arguments);
      }),
      (this.getClearAlpha = function () {
        return Le.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        Le.setClearAlpha.apply(Le, arguments);
      }),
      (this.clear = function (w = !0, U = !0, B = !0) {
        let G = 0;
        if (w) {
          let k = !1;
          if (T !== null) {
            const fe = T.texture.format;
            k = fe === m0 || fe === p0 || fe === h0;
          }
          if (k) {
            const fe = T.texture.type,
              xe = fe === Gi || fe === Ni || fe === Zd || fe === xr || fe === d0 || fe === f0,
              Me = Le.getClearColor(),
              Ae = Le.getClearAlpha(),
              Oe = Me.r,
              Re = Me.g,
              Pe = Me.b;
            xe
              ? ((g[0] = Oe),
                (g[1] = Re),
                (g[2] = Pe),
                (g[3] = Ae),
                I.clearBufferuiv(I.COLOR, 0, g))
              : ((v[0] = Oe),
                (v[1] = Re),
                (v[2] = Pe),
                (v[3] = Ae),
                I.clearBufferiv(I.COLOR, 0, v));
          } else G |= I.COLOR_BUFFER_BIT;
        }
        U && (G |= I.DEPTH_BUFFER_BIT),
          B && ((G |= I.STENCIL_BUFFER_BIT), this.state.buffers.stencil.setMask(4294967295)),
          I.clear(G);
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        n.removeEventListener('webglcontextlost', rt, !1),
          n.removeEventListener('webglcontextrestored', N, !1),
          n.removeEventListener('webglcontextcreationerror', le, !1),
          Ne.dispose(),
          we.dispose(),
          Fe.dispose(),
          pt.dispose(),
          A.dispose(),
          q.dispose(),
          me.dispose(),
          ge.dispose(),
          te.dispose(),
          Ce.dispose(),
          Ce.removeEventListener('sessionstart', gn),
          Ce.removeEventListener('sessionend', Qe),
          ce && (ce.dispose(), (ce = null)),
          Bt.stop();
      });
    function rt(w) {
      w.preventDefault(), console.log('THREE.WebGLRenderer: Context Lost.'), (E = !0);
    }
    function N() {
      console.log('THREE.WebGLRenderer: Context Restored.'), (E = !1);
      const w = Ve.autoReset,
        U = ue.enabled,
        B = ue.autoUpdate,
        G = ue.needsUpdate,
        k = ue.type;
      We(),
        (Ve.autoReset = w),
        (ue.enabled = U),
        (ue.autoUpdate = B),
        (ue.needsUpdate = G),
        (ue.type = k);
    }
    function le(w) {
      console.error(
        'THREE.WebGLRenderer: A WebGL context could not be created. Reason: ',
        w.statusMessage,
      );
    }
    function z(w) {
      const U = w.target;
      U.removeEventListener('dispose', z), re(U);
    }
    function re(w) {
      de(w), Fe.remove(w);
    }
    function de(w) {
      const U = Fe.get(w).programs;
      U !== void 0 &&
        (U.forEach(function (B) {
          te.releaseProgram(B);
        }),
        w.isShaderMaterial && te.releaseShaderCache(w));
    }
    this.renderBufferDirect = function (w, U, B, G, k, fe) {
      U === null && (U = Ye);
      const xe = k.isMesh && k.matrixWorld.determinant() < 0,
        Me = G0(w, U, B, G, k);
      Ee.setMaterial(G, xe);
      let Ae = B.index,
        Oe = 1;
      if (G.wireframe === !0) {
        if (((Ae = W.getWireframeAttribute(B)), Ae === void 0)) return;
        Oe = 2;
      }
      const Re = B.drawRange,
        Pe = B.attributes.position;
      let mt = Re.start * Oe,
        sn = (Re.start + Re.count) * Oe;
      fe !== null &&
        ((mt = Math.max(mt, fe.start * Oe)), (sn = Math.min(sn, (fe.start + fe.count) * Oe))),
        Ae !== null
          ? ((mt = Math.max(mt, 0)), (sn = Math.min(sn, Ae.count)))
          : Pe != null && ((mt = Math.max(mt, 0)), (sn = Math.min(sn, Pe.count)));
      const wt = sn - mt;
      if (wt < 0 || wt === 1 / 0) return;
      me.setup(k, G, Me, B, Ae);
      let Yn,
        lt = xt;
      if ((Ae !== null && ((Yn = M.get(Ae)), (lt = Be), lt.setIndex(Yn)), k.isMesh))
        G.wireframe === !0
          ? (Ee.setLineWidth(G.wireframeLinewidth * be()), lt.setMode(I.LINES))
          : lt.setMode(I.TRIANGLES);
      else if (k.isLine) {
        let De = G.linewidth;
        De === void 0 && (De = 1),
          Ee.setLineWidth(De * be()),
          k.isLineSegments
            ? lt.setMode(I.LINES)
            : k.isLineLoop
            ? lt.setMode(I.LINE_LOOP)
            : lt.setMode(I.LINE_STRIP);
      } else k.isPoints ? lt.setMode(I.POINTS) : k.isSprite && lt.setMode(I.TRIANGLES);
      if (k.isBatchedMesh)
        lt.renderMultiDraw(k._multiDrawStarts, k._multiDrawCounts, k._multiDrawCount);
      else if (k.isInstancedMesh) lt.renderInstances(mt, wt, k.count);
      else if (B.isInstancedBufferGeometry) {
        const De = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
          zl = Math.min(B.instanceCount, De);
        lt.renderInstances(mt, wt, zl);
      } else lt.render(mt, wt);
    };
    function Ge(w, U, B) {
      w.transparent === !0 && w.side === ii && w.forceSinglePass === !1
        ? ((w.side = nn),
          (w.needsUpdate = !0),
          Oa(w, U, B),
          (w.side = ji),
          (w.needsUpdate = !0),
          Oa(w, U, B),
          (w.side = ii))
        : Oa(w, U, B);
    }
    (this.compile = function (w, U, B = null) {
      B === null && (B = w),
        (p = we.get(B)),
        p.init(),
        _.push(p),
        B.traverseVisible(function (k) {
          k.isLight && k.layers.test(U.layers) && (p.pushLight(k), k.castShadow && p.pushShadow(k));
        }),
        w !== B &&
          w.traverseVisible(function (k) {
            k.isLight &&
              k.layers.test(U.layers) &&
              (p.pushLight(k), k.castShadow && p.pushShadow(k));
          }),
        p.setupLights(x._useLegacyLights);
      const G = new Set();
      return (
        w.traverse(function (k) {
          const fe = k.material;
          if (fe)
            if (Array.isArray(fe))
              for (let xe = 0; xe < fe.length; xe++) {
                const Me = fe[xe];
                Ge(Me, B, k), G.add(Me);
              }
            else Ge(fe, B, k), G.add(fe);
        }),
        _.pop(),
        (p = null),
        G
      );
    }),
      (this.compileAsync = function (w, U, B = null) {
        const G = this.compile(w, U, B);
        return new Promise((k) => {
          function fe() {
            if (
              (G.forEach(function (xe) {
                Fe.get(xe).currentProgram.isReady() && G.delete(xe);
              }),
              G.size === 0)
            ) {
              k(w);
              return;
            }
            setTimeout(fe, 10);
          }
          ye.get('KHR_parallel_shader_compile') !== null ? fe() : setTimeout(fe, 10);
        });
      });
    let Ze = null;
    function Ct(w) {
      Ze && Ze(w);
    }
    function gn() {
      Bt.stop();
    }
    function Qe() {
      Bt.start();
    }
    const Bt = new N0();
    Bt.setAnimationLoop(Ct),
      typeof self < 'u' && Bt.setContext(self),
      (this.setAnimationLoop = function (w) {
        (Ze = w), Ce.setAnimationLoop(w), w === null ? Bt.stop() : Bt.start();
      }),
      Ce.addEventListener('sessionstart', gn),
      Ce.addEventListener('sessionend', Qe),
      (this.render = function (w, U) {
        if (U !== void 0 && U.isCamera !== !0) {
          console.error('THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.');
          return;
        }
        if (E === !0) return;
        w.matrixWorldAutoUpdate === !0 && w.updateMatrixWorld(),
          U.parent === null && U.matrixWorldAutoUpdate === !0 && U.updateMatrixWorld(),
          Ce.enabled === !0 &&
            Ce.isPresenting === !0 &&
            (Ce.cameraAutoUpdate === !0 && Ce.updateCamera(U), (U = Ce.getCamera())),
          w.isScene === !0 && w.onBeforeRender(x, w, U, T),
          (p = we.get(w, _.length)),
          p.init(),
          _.push(p),
          Se.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          Te.setFromProjectionMatrix(Se),
          (Z = this.localClippingEnabled),
          (H = oe.init(this.clippingPlanes, Z)),
          (y = Ne.get(w, u.length)),
          y.init(),
          u.push(y),
          On(w, U, 0, x.sortObjects),
          y.finish(),
          x.sortObjects === !0 && y.sort(P, O),
          this.info.render.frame++,
          H === !0 && oe.beginShadows();
        const B = p.state.shadowsArray;
        if (
          (ue.render(B, w, U),
          H === !0 && oe.endShadows(),
          this.info.autoReset === !0 && this.info.reset(),
          (Ce.enabled === !1 || Ce.isPresenting === !1 || Ce.hasDepthSensing() === !1) &&
            Le.render(y, w),
          p.setupLights(x._useLegacyLights),
          U.isArrayCamera)
        ) {
          const G = U.cameras;
          for (let k = 0, fe = G.length; k < fe; k++) {
            const xe = G[k];
            tf(y, w, xe, xe.viewport);
          }
        } else tf(y, w, U);
        T !== null && (ze.updateMultisampleRenderTarget(T), ze.updateRenderTargetMipmap(T)),
          w.isScene === !0 && w.onAfterRender(x, w, U),
          me.resetDefaultState(),
          (D = -1),
          (Y = null),
          _.pop(),
          _.length > 0 ? (p = _[_.length - 1]) : (p = null),
          u.pop(),
          u.length > 0 ? (y = u[u.length - 1]) : (y = null);
      });
    function On(w, U, B, G) {
      if (w.visible === !1) return;
      if (w.layers.test(U.layers)) {
        if (w.isGroup) B = w.renderOrder;
        else if (w.isLOD) w.autoUpdate === !0 && w.update(U);
        else if (w.isLight) p.pushLight(w), w.castShadow && p.pushShadow(w);
        else if (w.isSprite) {
          if (!w.frustumCulled || Te.intersectsSprite(w)) {
            G && pe.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Se);
            const xe = q.update(w),
              Me = w.material;
            Me.visible && y.push(w, xe, Me, B, pe.z, null);
          }
        } else if (
          (w.isMesh || w.isLine || w.isPoints) &&
          (!w.frustumCulled || Te.intersectsObject(w))
        ) {
          const xe = q.update(w),
            Me = w.material;
          if (
            (G &&
              (w.boundingSphere !== void 0
                ? (w.boundingSphere === null && w.computeBoundingSphere(),
                  pe.copy(w.boundingSphere.center))
                : (xe.boundingSphere === null && xe.computeBoundingSphere(),
                  pe.copy(xe.boundingSphere.center)),
              pe.applyMatrix4(w.matrixWorld).applyMatrix4(Se)),
            Array.isArray(Me))
          ) {
            const Ae = xe.groups;
            for (let Oe = 0, Re = Ae.length; Oe < Re; Oe++) {
              const Pe = Ae[Oe],
                mt = Me[Pe.materialIndex];
              mt && mt.visible && y.push(w, xe, mt, B, pe.z, Pe);
            }
          } else Me.visible && y.push(w, xe, Me, B, pe.z, null);
        }
      }
      const fe = w.children;
      for (let xe = 0, Me = fe.length; xe < Me; xe++) On(fe[xe], U, B, G);
    }
    function tf(w, U, B, G) {
      const k = w.opaque,
        fe = w.transmissive,
        xe = w.transparent;
      p.setupLightsView(B),
        H === !0 && oe.setGlobalState(x.clippingPlanes, B),
        fe.length > 0 && H0(k, fe, U, B),
        G && Ee.viewport(S.copy(G)),
        k.length > 0 && Fa(k, U, B),
        fe.length > 0 && Fa(fe, U, B),
        xe.length > 0 && Fa(xe, U, B),
        Ee.buffers.depth.setTest(!0),
        Ee.buffers.depth.setMask(!0),
        Ee.buffers.color.setMask(!0),
        Ee.setPolygonOffset(!1);
    }
    function H0(w, U, B, G) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
      const fe = ke.isWebGL2;
      ce === null &&
        (ce = new Tr(1, 1, {
          generateMipmaps: !0,
          type: ye.has('EXT_color_buffer_half_float') ? wa : Gi,
          minFilter: pr,
          samples: fe ? 4 : 0,
        })),
        x.getDrawingBufferSize(_e),
        fe ? ce.setSize(_e.x, _e.y) : ce.setSize(Qu(_e.x), Qu(_e.y));
      const xe = x.getRenderTarget();
      x.setRenderTarget(ce),
        x.getClearColor(J),
        (L = x.getClearAlpha()),
        L < 1 && x.setClearColor(16777215, 0.5),
        x.clear();
      const Me = x.toneMapping;
      (x.toneMapping = Hi),
        Fa(w, B, G),
        ze.updateMultisampleRenderTarget(ce),
        ze.updateRenderTargetMipmap(ce);
      let Ae = !1;
      for (let Oe = 0, Re = U.length; Oe < Re; Oe++) {
        const Pe = U[Oe],
          mt = Pe.object,
          sn = Pe.geometry,
          wt = Pe.material,
          Yn = Pe.group;
        if (wt.side === ii && mt.layers.test(G.layers)) {
          const lt = wt.side;
          (wt.side = nn),
            (wt.needsUpdate = !0),
            nf(mt, B, G, sn, wt, Yn),
            (wt.side = lt),
            (wt.needsUpdate = !0),
            (Ae = !0);
        }
      }
      Ae === !0 && (ze.updateMultisampleRenderTarget(ce), ze.updateRenderTargetMipmap(ce)),
        x.setRenderTarget(xe),
        x.setClearColor(J, L),
        (x.toneMapping = Me);
    }
    function Fa(w, U, B) {
      const G = U.isScene === !0 ? U.overrideMaterial : null;
      for (let k = 0, fe = w.length; k < fe; k++) {
        const xe = w[k],
          Me = xe.object,
          Ae = xe.geometry,
          Oe = G === null ? xe.material : G,
          Re = xe.group;
        Me.layers.test(B.layers) && nf(Me, U, B, Ae, Oe, Re);
      }
    }
    function nf(w, U, B, G, k, fe) {
      w.onBeforeRender(x, U, B, G, k, fe),
        w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, w.matrixWorld),
        w.normalMatrix.getNormalMatrix(w.modelViewMatrix),
        k.onBeforeRender(x, U, B, G, w, fe),
        k.transparent === !0 && k.side === ii && k.forceSinglePass === !1
          ? ((k.side = nn),
            (k.needsUpdate = !0),
            x.renderBufferDirect(B, U, G, k, w, fe),
            (k.side = ji),
            (k.needsUpdate = !0),
            x.renderBufferDirect(B, U, G, k, w, fe),
            (k.side = ii))
          : x.renderBufferDirect(B, U, G, k, w, fe),
        w.onAfterRender(x, U, B, G, k, fe);
    }
    function Oa(w, U, B) {
      U.isScene !== !0 && (U = Ye);
      const G = Fe.get(w),
        k = p.state.lights,
        fe = p.state.shadowsArray,
        xe = k.state.version,
        Me = te.getParameters(w, k.state, fe, U, B),
        Ae = te.getProgramCacheKey(Me);
      let Oe = G.programs;
      (G.environment = w.isMeshStandardMaterial ? U.environment : null),
        (G.fog = U.fog),
        (G.envMap = (w.isMeshStandardMaterial ? A : pt).get(w.envMap || G.environment)),
        (G.envMapRotation =
          G.environment !== null && w.envMap === null ? U.environmentRotation : w.envMapRotation),
        Oe === void 0 && (w.addEventListener('dispose', z), (Oe = new Map()), (G.programs = Oe));
      let Re = Oe.get(Ae);
      if (Re !== void 0) {
        if (G.currentProgram === Re && G.lightsStateVersion === xe) return sf(w, Me), Re;
      } else
        (Me.uniforms = te.getUniforms(w)),
          w.onBuild(B, Me, x),
          w.onBeforeCompile(Me, x),
          (Re = te.acquireProgram(Me, Ae)),
          Oe.set(Ae, Re),
          (G.uniforms = Me.uniforms);
      const Pe = G.uniforms;
      return (
        ((!w.isShaderMaterial && !w.isRawShaderMaterial) || w.clipping === !0) &&
          (Pe.clippingPlanes = oe.uniform),
        sf(w, Me),
        (G.needsLights = W0(w)),
        (G.lightsStateVersion = xe),
        G.needsLights &&
          ((Pe.ambientLightColor.value = k.state.ambient),
          (Pe.lightProbe.value = k.state.probe),
          (Pe.directionalLights.value = k.state.directional),
          (Pe.directionalLightShadows.value = k.state.directionalShadow),
          (Pe.spotLights.value = k.state.spot),
          (Pe.spotLightShadows.value = k.state.spotShadow),
          (Pe.rectAreaLights.value = k.state.rectArea),
          (Pe.ltc_1.value = k.state.rectAreaLTC1),
          (Pe.ltc_2.value = k.state.rectAreaLTC2),
          (Pe.pointLights.value = k.state.point),
          (Pe.pointLightShadows.value = k.state.pointShadow),
          (Pe.hemisphereLights.value = k.state.hemi),
          (Pe.directionalShadowMap.value = k.state.directionalShadowMap),
          (Pe.directionalShadowMatrix.value = k.state.directionalShadowMatrix),
          (Pe.spotShadowMap.value = k.state.spotShadowMap),
          (Pe.spotLightMatrix.value = k.state.spotLightMatrix),
          (Pe.spotLightMap.value = k.state.spotLightMap),
          (Pe.pointShadowMap.value = k.state.pointShadowMap),
          (Pe.pointShadowMatrix.value = k.state.pointShadowMatrix)),
        (G.currentProgram = Re),
        (G.uniformsList = null),
        Re
      );
    }
    function rf(w) {
      if (w.uniformsList === null) {
        const U = w.currentProgram.getUniforms();
        w.uniformsList = zo.seqWithValue(U.seq, w.uniforms);
      }
      return w.uniformsList;
    }
    function sf(w, U) {
      const B = Fe.get(w);
      (B.outputColorSpace = U.outputColorSpace),
        (B.batching = U.batching),
        (B.instancing = U.instancing),
        (B.instancingColor = U.instancingColor),
        (B.instancingMorph = U.instancingMorph),
        (B.skinning = U.skinning),
        (B.morphTargets = U.morphTargets),
        (B.morphNormals = U.morphNormals),
        (B.morphColors = U.morphColors),
        (B.morphTargetsCount = U.morphTargetsCount),
        (B.numClippingPlanes = U.numClippingPlanes),
        (B.numIntersection = U.numClipIntersection),
        (B.vertexAlphas = U.vertexAlphas),
        (B.vertexTangents = U.vertexTangents),
        (B.toneMapping = U.toneMapping);
    }
    function G0(w, U, B, G, k) {
      U.isScene !== !0 && (U = Ye), ze.resetTextureUnits();
      const fe = U.fog,
        xe = G.isMeshStandardMaterial ? U.environment : null,
        Me =
          T === null ? x.outputColorSpace : T.isXRRenderTarget === !0 ? T.texture.colorSpace : Ki,
        Ae = (G.isMeshStandardMaterial ? A : pt).get(G.envMap || xe),
        Oe = G.vertexColors === !0 && !!B.attributes.color && B.attributes.color.itemSize === 4,
        Re = !!B.attributes.tangent && (!!G.normalMap || G.anisotropy > 0),
        Pe = !!B.morphAttributes.position,
        mt = !!B.morphAttributes.normal,
        sn = !!B.morphAttributes.color;
      let wt = Hi;
      G.toneMapped && (T === null || T.isXRRenderTarget === !0) && (wt = x.toneMapping);
      const Yn = B.morphAttributes.position || B.morphAttributes.normal || B.morphAttributes.color,
        lt = Yn !== void 0 ? Yn.length : 0,
        De = Fe.get(G),
        zl = p.state.lights;
      if (H === !0 && (Z === !0 || w !== Y)) {
        const xn = w === Y && G.id === D;
        oe.setState(G, w, xn);
      }
      let st = !1;
      G.version === De.__version
        ? ((De.needsLights && De.lightsStateVersion !== zl.state.version) ||
            De.outputColorSpace !== Me ||
            (k.isBatchedMesh && De.batching === !1) ||
            (!k.isBatchedMesh && De.batching === !0) ||
            (k.isInstancedMesh && De.instancing === !1) ||
            (!k.isInstancedMesh && De.instancing === !0) ||
            (k.isSkinnedMesh && De.skinning === !1) ||
            (!k.isSkinnedMesh && De.skinning === !0) ||
            (k.isInstancedMesh && De.instancingColor === !0 && k.instanceColor === null) ||
            (k.isInstancedMesh && De.instancingColor === !1 && k.instanceColor !== null) ||
            (k.isInstancedMesh && De.instancingMorph === !0 && k.morphTexture === null) ||
            (k.isInstancedMesh && De.instancingMorph === !1 && k.morphTexture !== null) ||
            De.envMap !== Ae ||
            (G.fog === !0 && De.fog !== fe) ||
            (De.numClippingPlanes !== void 0 &&
              (De.numClippingPlanes !== oe.numPlanes ||
                De.numIntersection !== oe.numIntersection)) ||
            De.vertexAlphas !== Oe ||
            De.vertexTangents !== Re ||
            De.morphTargets !== Pe ||
            De.morphNormals !== mt ||
            De.morphColors !== sn ||
            De.toneMapping !== wt ||
            (ke.isWebGL2 === !0 && De.morphTargetsCount !== lt)) &&
          (st = !0)
        : ((st = !0), (De.__version = G.version));
      let Zi = De.currentProgram;
      st === !0 && (Zi = Oa(G, U, k));
      let af = !1,
        Ns = !1,
        Bl = !1;
      const Dt = Zi.getUniforms(),
        Qi = De.uniforms;
      if (
        (Ee.useProgram(Zi.program) && ((af = !0), (Ns = !0), (Bl = !0)),
        G.id !== D && ((D = G.id), (Ns = !0)),
        af || Y !== w)
      ) {
        Dt.setValue(I, 'projectionMatrix', w.projectionMatrix),
          Dt.setValue(I, 'viewMatrix', w.matrixWorldInverse);
        const xn = Dt.map.cameraPosition;
        xn !== void 0 && xn.setValue(I, pe.setFromMatrixPosition(w.matrixWorld)),
          ke.logarithmicDepthBuffer &&
            Dt.setValue(I, 'logDepthBufFC', 2 / (Math.log(w.far + 1) / Math.LN2)),
          (G.isMeshPhongMaterial ||
            G.isMeshToonMaterial ||
            G.isMeshLambertMaterial ||
            G.isMeshBasicMaterial ||
            G.isMeshStandardMaterial ||
            G.isShaderMaterial) &&
            Dt.setValue(I, 'isOrthographic', w.isOrthographicCamera === !0),
          Y !== w && ((Y = w), (Ns = !0), (Bl = !0));
      }
      if (k.isSkinnedMesh) {
        Dt.setOptional(I, k, 'bindMatrix'), Dt.setOptional(I, k, 'bindMatrixInverse');
        const xn = k.skeleton;
        xn &&
          (ke.floatVertexTextures
            ? (xn.boneTexture === null && xn.computeBoneTexture(),
              Dt.setValue(I, 'boneTexture', xn.boneTexture, ze))
            : console.warn(
                'THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required.',
              ));
      }
      k.isBatchedMesh &&
        (Dt.setOptional(I, k, 'batchingTexture'),
        Dt.setValue(I, 'batchingTexture', k._matricesTexture, ze));
      const Hl = B.morphAttributes;
      if (
        ((Hl.position !== void 0 ||
          Hl.normal !== void 0 ||
          (Hl.color !== void 0 && ke.isWebGL2 === !0)) &&
          ie.update(k, B, Zi),
        (Ns || De.receiveShadow !== k.receiveShadow) &&
          ((De.receiveShadow = k.receiveShadow), Dt.setValue(I, 'receiveShadow', k.receiveShadow)),
        G.isMeshGouraudMaterial &&
          G.envMap !== null &&
          ((Qi.envMap.value = Ae),
          (Qi.flipEnvMap.value = Ae.isCubeTexture && Ae.isRenderTargetTexture === !1 ? -1 : 1)),
        Ns &&
          (Dt.setValue(I, 'toneMappingExposure', x.toneMappingExposure),
          De.needsLights && V0(Qi, Bl),
          fe && G.fog === !0 && Q.refreshFogUniforms(Qi, fe),
          Q.refreshMaterialUniforms(Qi, G, $, j, ce),
          zo.upload(I, rf(De), Qi, ze)),
        G.isShaderMaterial &&
          G.uniformsNeedUpdate === !0 &&
          (zo.upload(I, rf(De), Qi, ze), (G.uniformsNeedUpdate = !1)),
        G.isSpriteMaterial && Dt.setValue(I, 'center', k.center),
        Dt.setValue(I, 'modelViewMatrix', k.modelViewMatrix),
        Dt.setValue(I, 'normalMatrix', k.normalMatrix),
        Dt.setValue(I, 'modelMatrix', k.matrixWorld),
        G.isShaderMaterial || G.isRawShaderMaterial)
      ) {
        const xn = G.uniformsGroups;
        for (let Gl = 0, j0 = xn.length; Gl < j0; Gl++)
          if (ke.isWebGL2) {
            const of = xn[Gl];
            ge.update(of, Zi), ge.bind(of, Zi);
          } else
            console.warn(
              'THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.',
            );
      }
      return Zi;
    }
    function V0(w, U) {
      (w.ambientLightColor.needsUpdate = U),
        (w.lightProbe.needsUpdate = U),
        (w.directionalLights.needsUpdate = U),
        (w.directionalLightShadows.needsUpdate = U),
        (w.pointLights.needsUpdate = U),
        (w.pointLightShadows.needsUpdate = U),
        (w.spotLights.needsUpdate = U),
        (w.spotLightShadows.needsUpdate = U),
        (w.rectAreaLights.needsUpdate = U),
        (w.hemisphereLights.needsUpdate = U);
    }
    function W0(w) {
      return (
        w.isMeshLambertMaterial ||
        w.isMeshToonMaterial ||
        w.isMeshPhongMaterial ||
        w.isMeshStandardMaterial ||
        w.isShadowMaterial ||
        (w.isShaderMaterial && w.lights === !0)
      );
    }
    (this.getActiveCubeFace = function () {
      return C;
    }),
      (this.getActiveMipmapLevel = function () {
        return b;
      }),
      (this.getRenderTarget = function () {
        return T;
      }),
      (this.setRenderTargetTextures = function (w, U, B) {
        (Fe.get(w.texture).__webglTexture = U), (Fe.get(w.depthTexture).__webglTexture = B);
        const G = Fe.get(w);
        (G.__hasExternalTextures = !0),
          (G.__autoAllocateDepthBuffer = B === void 0),
          G.__autoAllocateDepthBuffer ||
            (ye.has('WEBGL_multisampled_render_to_texture') === !0 &&
              (console.warn(
                'THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided',
              ),
              (G.__useRenderToTexture = !1)));
      }),
      (this.setRenderTargetFramebuffer = function (w, U) {
        const B = Fe.get(w);
        (B.__webglFramebuffer = U), (B.__useDefaultFramebuffer = U === void 0);
      }),
      (this.setRenderTarget = function (w, U = 0, B = 0) {
        (T = w), (C = U), (b = B);
        let G = !0,
          k = null,
          fe = !1,
          xe = !1;
        if (w) {
          const Ae = Fe.get(w);
          Ae.__useDefaultFramebuffer !== void 0
            ? (Ee.bindFramebuffer(I.FRAMEBUFFER, null), (G = !1))
            : Ae.__webglFramebuffer === void 0
            ? ze.setupRenderTarget(w)
            : Ae.__hasExternalTextures &&
              ze.rebindTextures(
                w,
                Fe.get(w.texture).__webglTexture,
                Fe.get(w.depthTexture).__webglTexture,
              );
          const Oe = w.texture;
          (Oe.isData3DTexture || Oe.isDataArrayTexture || Oe.isCompressedArrayTexture) && (xe = !0);
          const Re = Fe.get(w).__webglFramebuffer;
          w.isWebGLCubeRenderTarget
            ? (Array.isArray(Re[U]) ? (k = Re[U][B]) : (k = Re[U]), (fe = !0))
            : ke.isWebGL2 && w.samples > 0 && ze.useMultisampledRTT(w) === !1
            ? (k = Fe.get(w).__webglMultisampledFramebuffer)
            : Array.isArray(Re)
            ? (k = Re[B])
            : (k = Re),
            S.copy(w.viewport),
            R.copy(w.scissor),
            (ne = w.scissorTest);
        } else S.copy(V).multiplyScalar($).floor(), R.copy(K).multiplyScalar($).floor(), (ne = se);
        if (
          (Ee.bindFramebuffer(I.FRAMEBUFFER, k) && ke.drawBuffers && G && Ee.drawBuffers(w, k),
          Ee.viewport(S),
          Ee.scissor(R),
          Ee.setScissorTest(ne),
          fe)
        ) {
          const Ae = Fe.get(w.texture);
          I.framebufferTexture2D(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            I.TEXTURE_CUBE_MAP_POSITIVE_X + U,
            Ae.__webglTexture,
            B,
          );
        } else if (xe) {
          const Ae = Fe.get(w.texture),
            Oe = U || 0;
          I.framebufferTextureLayer(
            I.FRAMEBUFFER,
            I.COLOR_ATTACHMENT0,
            Ae.__webglTexture,
            B || 0,
            Oe,
          );
        }
        D = -1;
      }),
      (this.readRenderTargetPixels = function (w, U, B, G, k, fe, xe) {
        if (!(w && w.isWebGLRenderTarget)) {
          console.error(
            'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.',
          );
          return;
        }
        let Me = Fe.get(w).__webglFramebuffer;
        if ((w.isWebGLCubeRenderTarget && xe !== void 0 && (Me = Me[xe]), Me)) {
          Ee.bindFramebuffer(I.FRAMEBUFFER, Me);
          try {
            const Ae = w.texture,
              Oe = Ae.format,
              Re = Ae.type;
            if (
              Oe !== Dn &&
              ve.convert(Oe) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)
            ) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.',
              );
              return;
            }
            const Pe =
              Re === wa &&
              (ye.has('EXT_color_buffer_half_float') ||
                (ke.isWebGL2 && ye.has('EXT_color_buffer_float')));
            if (
              Re !== Gi &&
              ve.convert(Re) !== I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE) &&
              !(
                Re === ri &&
                (ke.isWebGL2 || ye.has('OES_texture_float') || ye.has('WEBGL_color_buffer_float'))
              ) &&
              !Pe
            ) {
              console.error(
                'THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.',
              );
              return;
            }
            U >= 0 &&
              U <= w.width - G &&
              B >= 0 &&
              B <= w.height - k &&
              I.readPixels(U, B, G, k, ve.convert(Oe), ve.convert(Re), fe);
          } finally {
            const Ae = T !== null ? Fe.get(T).__webglFramebuffer : null;
            Ee.bindFramebuffer(I.FRAMEBUFFER, Ae);
          }
        }
      }),
      (this.copyFramebufferToTexture = function (w, U, B = 0) {
        const G = Math.pow(2, -B),
          k = Math.floor(U.image.width * G),
          fe = Math.floor(U.image.height * G);
        ze.setTexture2D(U, 0),
          I.copyTexSubImage2D(I.TEXTURE_2D, B, 0, 0, w.x, w.y, k, fe),
          Ee.unbindTexture();
      }),
      (this.copyTextureToTexture = function (w, U, B, G = 0) {
        const k = U.image.width,
          fe = U.image.height,
          xe = ve.convert(B.format),
          Me = ve.convert(B.type);
        ze.setTexture2D(B, 0),
          I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, B.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, B.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, B.unpackAlignment),
          U.isDataTexture
            ? I.texSubImage2D(I.TEXTURE_2D, G, w.x, w.y, k, fe, xe, Me, U.image.data)
            : U.isCompressedTexture
            ? I.compressedTexSubImage2D(
                I.TEXTURE_2D,
                G,
                w.x,
                w.y,
                U.mipmaps[0].width,
                U.mipmaps[0].height,
                xe,
                U.mipmaps[0].data,
              )
            : I.texSubImage2D(I.TEXTURE_2D, G, w.x, w.y, xe, Me, U.image),
          G === 0 && B.generateMipmaps && I.generateMipmap(I.TEXTURE_2D),
          Ee.unbindTexture();
      }),
      (this.copyTextureToTexture3D = function (w, U, B, G, k = 0) {
        if (x.isWebGL1Renderer) {
          console.warn('THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.');
          return;
        }
        const fe = Math.round(w.max.x - w.min.x),
          xe = Math.round(w.max.y - w.min.y),
          Me = w.max.z - w.min.z + 1,
          Ae = ve.convert(G.format),
          Oe = ve.convert(G.type);
        let Re;
        if (G.isData3DTexture) ze.setTexture3D(G, 0), (Re = I.TEXTURE_3D);
        else if (G.isDataArrayTexture || G.isCompressedArrayTexture)
          ze.setTexture2DArray(G, 0), (Re = I.TEXTURE_2D_ARRAY);
        else {
          console.warn(
            'THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.',
          );
          return;
        }
        I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL, G.flipY),
          I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL, G.premultiplyAlpha),
          I.pixelStorei(I.UNPACK_ALIGNMENT, G.unpackAlignment);
        const Pe = I.getParameter(I.UNPACK_ROW_LENGTH),
          mt = I.getParameter(I.UNPACK_IMAGE_HEIGHT),
          sn = I.getParameter(I.UNPACK_SKIP_PIXELS),
          wt = I.getParameter(I.UNPACK_SKIP_ROWS),
          Yn = I.getParameter(I.UNPACK_SKIP_IMAGES),
          lt = B.isCompressedTexture ? B.mipmaps[k] : B.image;
        I.pixelStorei(I.UNPACK_ROW_LENGTH, lt.width),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, lt.height),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, w.min.x),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, w.min.y),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, w.min.z),
          B.isDataTexture || B.isData3DTexture
            ? I.texSubImage3D(Re, k, U.x, U.y, U.z, fe, xe, Me, Ae, Oe, lt.data)
            : G.isCompressedArrayTexture
            ? I.compressedTexSubImage3D(Re, k, U.x, U.y, U.z, fe, xe, Me, Ae, lt.data)
            : I.texSubImage3D(Re, k, U.x, U.y, U.z, fe, xe, Me, Ae, Oe, lt),
          I.pixelStorei(I.UNPACK_ROW_LENGTH, Pe),
          I.pixelStorei(I.UNPACK_IMAGE_HEIGHT, mt),
          I.pixelStorei(I.UNPACK_SKIP_PIXELS, sn),
          I.pixelStorei(I.UNPACK_SKIP_ROWS, wt),
          I.pixelStorei(I.UNPACK_SKIP_IMAGES, Yn),
          k === 0 && G.generateMipmaps && I.generateMipmap(Re),
          Ee.unbindTexture();
      }),
      (this.initTexture = function (w) {
        w.isCubeTexture
          ? ze.setTextureCube(w, 0)
          : w.isData3DTexture
          ? ze.setTexture3D(w, 0)
          : w.isDataArrayTexture || w.isCompressedArrayTexture
          ? ze.setTexture2DArray(w, 0)
          : ze.setTexture2D(w, 0),
          Ee.unbindTexture();
      }),
      (this.resetState = function () {
        (C = 0), (b = 0), (T = null), Ee.reset(), me.reset();
      }),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
  }
  get coordinateSystem() {
    return oi;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const n = this.getContext();
    (n.drawingBufferColorSpace = e === Qd ? 'display-p3' : 'srgb'),
      (n.unpackColorSpace = Ke.workingColorSpace === Il ? 'display-p3' : 'srgb');
  }
  get useLegacyLights() {
    return (
      console.warn(
        'THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.',
      ),
      this._useLegacyLights
    );
  }
  set useLegacyLights(e) {
    console.warn(
      'THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733.',
    ),
      (this._useLegacyLights = e);
  }
}
class Yw extends k0 {}
Yw.prototype.isWebGL1Renderer = !0;
class $w extends jt {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = 'Scene'),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new pi()),
      (this.environmentRotation = new pi()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < 'u' &&
        __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('observe', { detail: this }));
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      this.fog !== null && (n.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 && (n.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 && (n.object.backgroundIntensity = this.backgroundIntensity),
      (n.object.backgroundRotation = this.backgroundRotation.toArray()),
      (n.object.environmentRotation = this.environmentRotation.toArray()),
      n
    );
  }
}
class z0 extends Ua {
  constructor(e) {
    super(),
      (this.isPointsMaterial = !0),
      (this.type = 'PointsMaterial'),
      (this.color = new qe(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const zp = new dt(),
  ed = new M0(),
  wo = new Fl(),
  To = new F();
class Kw extends jt {
  constructor(e = new gi(), n = new z0()) {
    super(),
      (this.isPoints = !0),
      (this.type = 'Points'),
      (this.geometry = e),
      (this.material = n),
      this.updateMorphTargets();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.material = Array.isArray(e.material) ? e.material.slice() : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, n) {
    const i = this.geometry,
      r = this.matrixWorld,
      s = e.params.Points.threshold,
      a = i.drawRange;
    if (
      (i.boundingSphere === null && i.computeBoundingSphere(),
      wo.copy(i.boundingSphere),
      wo.applyMatrix4(r),
      (wo.radius += s),
      e.ray.intersectsSphere(wo) === !1)
    )
      return;
    zp.copy(r).invert(), ed.copy(e.ray).applyMatrix4(zp);
    const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = i.index,
      f = i.attributes.position;
    if (c !== null) {
      const h = Math.max(0, a.start),
        g = Math.min(c.count, a.start + a.count);
      for (let v = h, y = g; v < y; v++) {
        const p = c.getX(v);
        To.fromBufferAttribute(f, p), Bp(To, p, l, r, e, n, this);
      }
    } else {
      const h = Math.max(0, a.start),
        g = Math.min(f.count, a.start + a.count);
      for (let v = h, y = g; v < y; v++) To.fromBufferAttribute(f, v), Bp(To, v, l, r, e, n, this);
    }
  }
  updateMorphTargets() {
    const n = this.geometry.morphAttributes,
      i = Object.keys(n);
    if (i.length > 0) {
      const r = n[i[0]];
      if (r !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let s = 0, a = r.length; s < a; s++) {
          const o = r[s].name || String(s);
          this.morphTargetInfluences.push(0), (this.morphTargetDictionary[o] = s);
        }
      }
    }
  }
}
function Bp(t, e, n, i, r, s, a) {
  const o = ed.distanceSqToPoint(t);
  if (o < n) {
    const l = new F();
    ed.closestPointToPoint(t, l), l.applyMatrix4(i);
    const c = r.ray.origin.distanceTo(l);
    if (c < r.near || c > r.far) return;
    s.push({ distance: c, distanceToRay: Math.sqrt(o), point: l, index: e, face: null, object: a });
  }
}
class B0 extends jt {
  constructor(e, n = 1) {
    super(),
      (this.isLight = !0),
      (this.type = 'Light'),
      (this.color = new qe(e)),
      (this.intensity = n);
  }
  dispose() {}
  copy(e, n) {
    return super.copy(e, n), this.color.copy(e.color), (this.intensity = e.intensity), this;
  }
  toJSON(e) {
    const n = super.toJSON(e);
    return (
      (n.object.color = this.color.getHex()),
      (n.object.intensity = this.intensity),
      this.groundColor !== void 0 && (n.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (n.object.distance = this.distance),
      this.angle !== void 0 && (n.object.angle = this.angle),
      this.decay !== void 0 && (n.object.decay = this.decay),
      this.penumbra !== void 0 && (n.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (n.object.shadow = this.shadow.toJSON()),
      n
    );
  }
}
const Yc = new dt(),
  Hp = new F(),
  Gp = new F();
class Zw {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new je(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new dt()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Jd()),
      (this._frameExtents = new je(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new ot(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const n = this.camera,
      i = this.matrix;
    Hp.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(Hp),
      Gp.setFromMatrixPosition(e.target.matrixWorld),
      n.lookAt(Gp),
      n.updateMatrixWorld(),
      Yc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Yc),
      i.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      i.multiply(Yc);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
const Vp = new dt(),
  Xs = new F(),
  $c = new F();
class Qw extends Zw {
  constructor() {
    super(new cn(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new je(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new ot(2, 1, 1, 1),
        new ot(0, 1, 1, 1),
        new ot(3, 1, 1, 1),
        new ot(1, 1, 1, 1),
        new ot(3, 0, 1, 1),
        new ot(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new F(1, 0, 0),
        new F(-1, 0, 0),
        new F(0, 0, 1),
        new F(0, 0, -1),
        new F(0, 1, 0),
        new F(0, -1, 0),
      ]),
      (this._cubeUps = [
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 1, 0),
        new F(0, 0, 1),
        new F(0, 0, -1),
      ]);
  }
  updateMatrices(e, n = 0) {
    const i = this.camera,
      r = this.matrix,
      s = e.distance || i.far;
    s !== i.far && ((i.far = s), i.updateProjectionMatrix()),
      Xs.setFromMatrixPosition(e.matrixWorld),
      i.position.copy(Xs),
      $c.copy(i.position),
      $c.add(this._cubeDirections[n]),
      i.up.copy(this._cubeUps[n]),
      i.lookAt($c),
      i.updateMatrixWorld(),
      r.makeTranslation(-Xs.x, -Xs.y, -Xs.z),
      Vp.multiplyMatrices(i.projectionMatrix, i.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Vp);
  }
}
class Jw extends B0 {
  constructor(e, n, i = 0, r = 2) {
    super(e, n),
      (this.isPointLight = !0),
      (this.type = 'PointLight'),
      (this.distance = i),
      (this.decay = r),
      (this.shadow = new Qw());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, n) {
    return (
      super.copy(e, n),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class eT extends B0 {
  constructor(e, n) {
    super(e, n), (this.isAmbientLight = !0), (this.type = 'AmbientLight');
  }
}
typeof __THREE_DEVTOOLS__ < 'u' &&
  __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent('register', { detail: { revision: Kd } }));
typeof window < 'u' &&
  (window.__THREE__
    ? console.warn('WARNING: Multiple instances of Three.js being imported.')
    : (window.__THREE__ = Kd));
function tT() {
  const t = un.useRef(null);
  return (
    un.useEffect(() => {
      if (!t.current) return;
      const e = new $w(),
        n = new cn(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
      n.position.z = 2;
      const i = new k0({ alpha: !0, antialias: !0 });
      i.setSize(window.innerWidth, window.innerHeight),
        i.setClearColor(0, 0),
        t.current.appendChild(i.domElement);
      const r = new eT(8947848, 0.3);
      e.add(r);
      const s = new Jw(16777215, 1.5, 100);
      s.position.set(0, 30, 20), e.add(s);
      let a, o;
      function l(h) {
        const g = [],
          v = [],
          y = (1 + Math.sqrt(5)) / 2,
          p = 2;
        for (let u = 0; u < h; u++) {
          const _ = u / h,
            x = 2 * Math.PI * y * u,
            E = p * Math.pow(_, 0.5),
            C = E * Math.cos(x),
            b = E * Math.sin(x),
            T = (_ - 0.5) * 2;
          g.push(C, b, T);
          const D = _,
            R = new qe().setHSL(D, 0.8, 0.5);
          v.push(R.r, R.g, R.b);
        }
        return [g, v];
      }
      function c() {
        const [g, v] = l(15e3),
          y = new Float32Array(15e3);
        for (let u = 0; u < 15e3; u++) y[u] = 0.8 + Math.random() * 0.2;
        (a = new gi()),
          a.setAttribute('position', new qn(g, 3)),
          a.setAttribute('color', new qn(v, 3)),
          a.setAttribute('speedVariation', new qn(y, 1));
        const p = new z0({
          size: 0.01,
          vertexColors: !0,
          transparent: !0,
          opacity: 0.8,
          blending: Vu,
          depthWrite: !1,
        });
        (o = new Kw(a, p)), e.add(o);
      }
      function d() {
        requestAnimationFrame(d), (o.rotation.y -= 0.001), (o.rotation.z -= 5e-4);
        const h = a.attributes.position.array,
          g = a.attributes.speedVariation.array,
          v = Date.now() * 1e-4;
        for (let y = 0; y < h.length; y += 3) {
          const p = y / 3,
            u = (2 * Math.PI * p) / (h.length / 3);
          (h[y] -= Math.sin(v + u) * 0.001 * g[p]),
            (h[y + 1] -= Math.cos(v + u) * 0.001 * g[p]),
            (h[y + 2] -= Math.sin(v * 2 + u) * 0.001 * g[p]);
        }
        (a.attributes.position.needsUpdate = !0), i.render(e, n);
      }
      function f() {
        (n.aspect = window.innerWidth / window.innerHeight),
          n.updateProjectionMatrix(),
          i.setSize(window.innerWidth, window.innerHeight);
      }
      return (
        window.addEventListener('resize', f),
        c(),
        d(),
        () => {
          window.removeEventListener('resize', f),
            t.current && t.current.removeChild(i.domElement),
            e.remove(o),
            a.dispose(),
            o.material.dispose(),
            i.dispose();
        }
      );
    }, []),
    m.jsx('div', {
      ref: t,
      className: 'absolute inset-0 z-0 pointer-events-none',
      style: { background: 'transparent' },
    })
  );
}
function nT() {
  return m.jsxs('div', {
    className: 'bg-black text-white relative overflow-hidden',
    children: [
      m.jsx(tT, {}),
      m.jsxs('div', {
        className: 'container mx-auto px-4 relative',
        children: [
          m.jsx('div', {
            className: 'py-20 sm:py-32 lg:py-40',
            children: m.jsxs('div', {
              className: 'max-w-2xl mx-auto lg:mx-0',
              children: [
                m.jsxs('div', {
                  className: 'space-y-3 sm:space-y-4 mb-4 sm:mb-8',
                  children: [
                    m.jsx('h1', {
                      className: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
                      children: m.jsx('span', {
                        className: 'text-gradient inline-block',
                        children: 'AIが加速する',
                      }),
                    }),
                    m.jsx('h1', {
                      className: 'text-3xl sm:text-4xl md:text-5xl font-bold leading-tight',
                      children: m.jsx('span', {
                        className: 'text-white inline-block',
                        children: '次世代のWeb制作',
                      }),
                    }),
                  ],
                }),
                m.jsxs('p', {
                  className:
                    'text-base sm:text-lg md:text-xl mb-8 sm:mb-16 text-white/90 leading-relaxed',
                  children: [
                    '最新のAI技術と豊富なLP制作実績で、',
                    m.jsx('br', {}),
                    'あなたのビジネスの',
                    m.jsx('span', {
                      className: 'text-rose-400 font-medium',
                      children: '成果を最大化',
                    }),
                    'します。',
                  ],
                }),
                m.jsx('div', {
                  className: 'relative z-10 flex justify-start',
                  children: m.jsx('div', {
                    className: 'relative max-w-md',
                    children: m.jsx($d, {
                      showStats: !0,
                      stats: [{ value: '24h', label: '対応' }],
                    }),
                  }),
                }),
              ],
            }),
          }),
          m.jsxs('div', {
            className:
              'absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 text-white/60',
            children: [
              m.jsx('div', { className: 'text-xs sm:text-sm', children: 'Scroll' }),
              m.jsx(r0, { className: 'w-5 h-5 sm:w-6 sm:h-6' }),
            ],
          }),
        ],
      }),
    ],
  });
}
const iT = [
  {
    title: '納期に間に合わない',
    description:
      '従来のWeb制作では、打ち合わせや修正に時間がかかり、急ぎのプロジェクトに対応できない',
    problem: ['打ち合わせに時間がかかる', '修正のたびに待ち時間が発生', '担当者の空き状況に依存'],
    solution: {
      title: '最短3日のスピード納品',
      description: 'AI活用による開発時間の大幅短縮で、急ぎのプロジェクトにも対応',
      points: [
        'AI活用による開発時間の大幅短縮',
        '並行作業による効率的な制作フロー',
        '豊富な実績による無駄のない進行',
      ],
    },
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    gradient: 'from-orange-500/20 to-orange-500/5',
  },
  {
    title: '予算が限られている',
    description: '高額な制作費用が負担に。追加の修正費用も発生し、予算管理が難しい',
    problem: ['初期費用が高額', '修正の度に追加料金', '保守費用の見通しが立たない'],
    solution: {
      title: '圧倒的なコスト削減',
      description: 'AI活用による効率化で、高品質なサイトを手頃な価格で提供',
      points: [
        'テンプレート活用による初期費用削減',
        '保守費用を抑える最適化設計',
        '段階的な機能追加プラン',
      ],
    },
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    title: '集客できていない',
    description: 'せっかく制作したサイトなのに、アクセスが集まらず、成果に繋がらない',
    problem: ['SEO対策が不十分', 'コンバージョン率が低い', '分析・改善ができていない'],
    solution: {
      title: '成果を出すLP設計',
      description: 'SEO対策とコンバージョン重視の設計で成果を実現',
      points: [
        '検索エンジン最適化の徹底対応',
        'ユーザー行動分析に基づく改善',
        'SNSとの連携による集客強化',
      ],
    },
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-500/20 to-blue-500/5',
  },
];
function rT() {
  return m.jsxs('section', {
    className: 'py-20 bg-white relative overflow-hidden',
    children: [
      m.jsxs('div', {
        className: 'absolute inset-0',
        children: [
          m.jsx('div', {
            className:
              'absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-full blur-3xl animate-float',
          }),
          m.jsx('div', {
            className:
              'absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-float animation-delay-200',
          }),
        ],
      }),
      m.jsxs('div', {
        className: 'container mx-auto px-4 relative',
        children: [
          m.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-16',
            children: [
              m.jsxs('div', {
                className:
                  'inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6',
                children: [m.jsx(ko, { className: 'w-4 h-4 mr-2' }), 'こんなお悩みありませんか？'],
              }),
              m.jsxs('h2', {
                className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900',
                children: [
                  'Web制作の',
                  m.jsx('span', { className: 'text-gradient', children: '課題' }),
                  'を',
                  m.jsx('br', { className: 'sm:hidden' }),
                  m.jsx('span', { className: 'text-gradient', children: '最新AI' }),
                  'で解決',
                ],
              }),
              m.jsxs('p', {
                className: 'text-base sm:text-lg md:text-xl text-gray-600',
                children: [
                  '多くの企業が直面するWeb制作の課題を、',
                  m.jsx('br', { className: 'hidden sm:block' }),
                  '最新AIとプロフェッショナルチームが解決します。',
                ],
              }),
            ],
          }),
          m.jsx('div', {
            className: 'max-w-7xl mx-auto space-y-8',
            children: iT.map(
              ({
                title: t,
                description: e,
                problem: n,
                solution: i,
                color: r,
                bgColor: s,
                gradient: a,
              }) =>
                m.jsx(
                  'div',
                  {
                    className:
                      'group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500',
                    children: m.jsxs('div', {
                      className: 'flex flex-col md:flex-row',
                      children: [
                        m.jsx('div', {
                          className: 'p-8 md:w-[35%] relative',
                          children: m.jsxs('div', {
                            className: 'flex flex-col h-full',
                            children: [
                              m.jsx('div', {
                                className: `${s} ${r} p-4 rounded-xl group-hover:scale-110 transition-transform duration-500 self-start`,
                                children: m.jsx(ko, { className: 'w-8 h-8' }),
                              }),
                              m.jsxs('div', {
                                className: 'flex-1 flex flex-col justify-between mt-4',
                                children: [
                                  m.jsxs('div', {
                                    children: [
                                      m.jsx('h3', {
                                        className: 'text-xl font-bold mb-3 text-gray-900',
                                        children: t,
                                      }),
                                      m.jsx('p', {
                                        className:
                                          'text-gray-600 mb-4 text-sm leading-relaxed min-h-[3rem]',
                                        children: e,
                                      }),
                                    ],
                                  }),
                                  m.jsx('ul', {
                                    className: 'space-y-3',
                                    children: n.map((o) =>
                                      m.jsxs(
                                        'li',
                                        {
                                          className:
                                            'flex items-center gap-2 text-gray-500 text-sm',
                                          children: [
                                            m.jsx(ko, { className: `w-4 h-4 ${r} flex-shrink-0` }),
                                            m.jsx('span', {
                                              className: 'leading-relaxed',
                                              children: o,
                                            }),
                                          ],
                                        },
                                        o,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                        m.jsxs('div', {
                          className:
                            'relative md:w-[10%] flex items-center justify-center py-6 md:py-0',
                          children: [
                            m.jsxs('div', {
                              className: `${s} rounded-full p-4 shadow-lg group-hover:scale-110 transition-transform duration-500`,
                              children: [
                                m.jsx(Pa, { className: `w-8 h-8 ${r} hidden md:block` }),
                                m.jsx(yv, { className: `w-8 h-8 ${r} md:hidden` }),
                              ],
                            }),
                            m.jsx('div', {
                              className: 'absolute inset-0 flex items-center',
                              children: m.jsx('div', {
                                className: `h-0.5 w-full ${s} hidden md:block`,
                              }),
                            }),
                          ],
                        }),
                        m.jsx('div', {
                          className: `p-8 md:w-[55%] bg-gradient-to-br ${a}`,
                          children: m.jsxs('div', {
                            className: 'flex flex-col h-full',
                            children: [
                              m.jsx('div', {
                                className: `bg-white ${r} p-4 rounded-xl group-hover:scale-110 transition-transform duration-500 self-start`,
                                children: m.jsx(Rr, { className: 'w-8 h-8' }),
                              }),
                              m.jsxs('div', {
                                className: 'flex-1 flex flex-col justify-between mt-4',
                                children: [
                                  m.jsxs('div', {
                                    children: [
                                      m.jsx('h3', {
                                        className: 'text-xl font-bold mb-3 text-gray-900',
                                        children: i.title,
                                      }),
                                      m.jsx('p', {
                                        className:
                                          'text-gray-600 mb-4 text-sm leading-relaxed min-h-[3rem]',
                                        children: i.description,
                                      }),
                                    ],
                                  }),
                                  m.jsx('ul', {
                                    className: 'space-y-3',
                                    children: i.points.map((o) =>
                                      m.jsxs(
                                        'li',
                                        {
                                          className:
                                            'flex items-center gap-2 text-gray-500 text-sm',
                                          children: [
                                            m.jsx(Ss, { className: `w-4 h-4 ${r} flex-shrink-0` }),
                                            m.jsx('span', {
                                              className: 'leading-relaxed',
                                              children: o,
                                            }),
                                          ],
                                        },
                                        o,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  },
                  t,
                ),
            ),
          }),
          m.jsx('div', {
            className: 'mt-16 text-center',
            children: m.jsx('div', {
              className: 'inline-block relative group',
              children: m.jsx($d, { showStats: !0, stats: [{ value: '24h', label: '対応' }] }),
            }),
          }),
        ],
      }),
    ],
  });
}
const sT = [
  {
    category: '開発スピード',
    traditional: '2-3ヶ月',
    aiPowered: '最短3日',
    benefits: ['AIによる高速開発', 'リアルタイム修正', '即時デプロイ'],
  },
  {
    category: '品質',
    traditional: '担当者次第',
    aiPowered: 'AI品質保証',
    benefits: ['自動コード最適化', 'パフォーマンス保証', 'セキュリティ対策'],
  },
  {
    category: 'コスト',
    traditional: '50-100万円',
    aiPowered: '59,800円〜',
    benefits: ['AI活用で工数削減', '無駄のない開発', '明確な料金体系'],
  },
  {
    category: '保守性',
    traditional: '属人化の懸念',
    aiPowered: '統一された管理',
    benefits: ['簡単な更新作業', '一貫した品質', '自動バックアップ'],
  },
];
function aT() {
  return m.jsxs('section', {
    className: 'py-20 relative overflow-hidden',
    children: [
      m.jsxs('div', {
        className: 'absolute inset-0',
        children: [
          m.jsx('div', {
            className:
              'absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-rose-500/10 to-red-500/10 rounded-full blur-3xl animate-float',
          }),
          m.jsx('div', {
            className:
              'absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-full blur-3xl animate-float animation-delay-200',
          }),
        ],
      }),
      m.jsxs('div', {
        className: 'container mx-auto px-4 relative',
        children: [
          m.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-16',
            children: [
              m.jsxs('div', {
                className:
                  'inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-rose-500 shadow-md mb-4 sm:mb-6',
                children: [
                  m.jsx(Dl, { className: 'w-4 h-4 mr-2' }),
                  m.jsx('span', { className: 'font-bold', children: 'AI特化型Web制作' }),
                ],
              }),
              m.jsxs('h2', {
                className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-8',
                children: [
                  m.jsx('span', { className: 'text-gradient', children: 'AI Web制作' }),
                  'で',
                  m.jsx('br', { className: 'sm:hidden' }),
                  '実現する価値',
                ],
              }),
              m.jsxs('p', {
                className: 'text-base sm:text-lg md:text-xl text-gray-600',
                children: [
                  '従来のWeb制作とは一線を画す、',
                  m.jsx('br', { className: 'hidden sm:block' }),
                  'AI特化型の開発プロセスをご提供します。',
                ],
              }),
            ],
          }),
          m.jsxs('div', {
            className: 'max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden',
            children: [
              m.jsxs('div', {
                className: 'bg-gradient-to-r from-rose-500 to-red-500 p-8 text-white',
                children: [
                  m.jsxs('div', {
                    className: 'flex items-center gap-3 mb-4',
                    children: [
                      m.jsx(a0, { className: 'w-6 h-6 text-white' }),
                      m.jsx('h3', { className: 'text-2xl font-bold', children: '従来型との比較' }),
                    ],
                  }),
                  m.jsxs('p', {
                    className: 'text-white/90',
                    children: [
                      'AI技術の活用により、従来のWeb制作では実現できなかった',
                      m.jsx('br', {}),
                      'スピードと品質、コストパフォーマンスを実現します。',
                    ],
                  }),
                ],
              }),
              m.jsx('div', {
                className: 'p-8',
                children: sT.map(({ category: t, traditional: e, aiPowered: n, benefits: i }) =>
                  m.jsxs(
                    'div',
                    {
                      className: 'mb-8 last:mb-0',
                      children: [
                        m.jsx('h4', { className: 'font-bold text-lg mb-4', children: t }),
                        m.jsxs('div', {
                          className: 'grid md:grid-cols-2 gap-4',
                          children: [
                            m.jsxs('div', {
                              className: 'bg-gray-50 p-6 rounded-xl',
                              children: [
                                m.jsx('div', {
                                  className: 'text-gray-500 mb-2',
                                  children: '従来のWeb制作',
                                }),
                                m.jsx('div', {
                                  className: 'text-2xl font-bold text-gray-400',
                                  children: e,
                                }),
                              ],
                            }),
                            m.jsxs('div', {
                              className: 'bg-rose-50 p-6 rounded-xl',
                              children: [
                                m.jsx('div', {
                                  className: 'text-rose-500 mb-2',
                                  children: 'AI特化型制作',
                                }),
                                m.jsx('div', {
                                  className: 'text-2xl font-bold text-rose-500',
                                  children: n,
                                }),
                              ],
                            }),
                          ],
                        }),
                        m.jsx('div', {
                          className: 'mt-4',
                          children: m.jsx('ul', {
                            className: 'grid grid-cols-1 md:grid-cols-3 gap-3',
                            children: i.map((r) =>
                              m.jsxs(
                                'li',
                                {
                                  className:
                                    'flex items-center gap-2 text-sm text-gray-600 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-all duration-300',
                                  children: [
                                    m.jsx(Rr, { className: 'w-4 h-4 text-rose-500 flex-shrink-0' }),
                                    r,
                                  ],
                                },
                                r,
                              ),
                            ),
                          }),
                        }),
                      ],
                    },
                    t,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const Kc = [
  {
    icon: s0,
    title: 'ヒアリング',
    description: 'お客様の課題とゴールを詳しくお伺いします',
    details: ['目的の明確化', 'ターゲット層の特定', '必要な機能の洗い出し'],
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    gradient: 'from-blue-500/20 to-blue-500/5',
  },
  {
    icon: wr,
    title: 'AI分析・提案',
    description: 'AIが最適な解決策を分析・提案',
    details: ['競合サイトの自動分析', '最適な技術スタックの選定', 'コンバージョン率の予測'],
    color: 'text-purple-500',
    bgColor: 'bg-purple-50',
    gradient: 'from-purple-500/20 to-purple-500/5',
  },
  {
    icon: Ev,
    title: 'デザイン設計',
    description: 'AIがデザインの初期案を生成',
    details: ['複数デザイン案の自動生成', 'ユーザー動線の最適化', 'レスポンシブ対応'],
    color: 'text-amber-500',
    bgColor: 'bg-amber-50',
    gradient: 'from-amber-500/20 to-amber-500/5',
  },
  {
    icon: Mv,
    title: '高速開発',
    description: 'AIによる効率的なコーディング',
    details: ['コードの自動生成', '品質チェックの自動化', 'SEO対策の実装'],
    color: 'text-emerald-500',
    bgColor: 'bg-emerald-50',
    gradient: 'from-emerald-500/20 to-emerald-500/5',
  },
  {
    icon: Av,
    title: 'テスト・デプロイ',
    description: '品質を担保して素早くリリース',
    details: ['自動テストの実行', 'パフォーマンス最適化', 'セキュリティチェック'],
    color: 'text-rose-500',
    bgColor: 'bg-rose-50',
    gradient: 'from-rose-500/20 to-rose-500/5',
  },
];
function oT() {
  const [t, e] = un.useState(-1),
    n = un.useRef(null),
    i = un.useRef([]);
  return (
    un.useEffect(() => {
      const r = () => {
        if (!n.current) return;
        const s = n.current.getBoundingClientRect(),
          a = window.innerHeight;
        if (s.top > a || s.bottom < 0) {
          e(-1);
          return;
        }
        const o = a / 2;
        let l = -1,
          c = 1 / 0;
        i.current.forEach((d, f) => {
          if (d) {
            const h = d.getBoundingClientRect(),
              g = Math.abs(h.top + h.height / 2 - o);
            g < c && ((c = g), (l = f));
          }
        }),
          e(l);
      };
      return (
        window.addEventListener('scroll', r), r(), () => window.removeEventListener('scroll', r)
      );
    }, []),
    m.jsx('section', {
      ref: n,
      className: 'py-12 sm:py-20 bg-gray-50 overflow-hidden',
      children: m.jsxs('div', {
        className: 'container mx-auto px-0 sm:px-4',
        children: [
          m.jsxs('div', {
            className: 'absolute inset-0 overflow-hidden',
            children: [
              m.jsx('div', {
                className:
                  'absolute w-[500px] h-[500px] -top-20 -right-20 bg-rose-500/5 rounded-full blur-3xl',
              }),
              m.jsx('div', {
                className:
                  'absolute w-[300px] h-[300px] top-40 -left-20 bg-blue-500/5 rounded-full blur-3xl',
              }),
            ],
          }),
          m.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-8 sm:mb-16 relative px-4',
            children: [
              m.jsxs('div', {
                className:
                  'inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-rose-500 shadow-md mb-4 sm:mb-6',
                children: [m.jsx(Rr, { className: 'w-4 h-4 mr-2' }), 'AI Web制作プロセス'],
              }),
              m.jsxs('h2', {
                className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6',
                children: [
                  m.jsx('span', { className: 'text-gradient', children: 'AI' }),
                  'による',
                  m.jsx('br', { className: 'sm:hidden' }),
                  '最速のWeb制作フロー',
                ],
              }),
              m.jsxs('p', {
                className: 'text-base sm:text-lg md:text-xl text-gray-600',
                children: [
                  '従来の制作工程をAIで効率化。',
                  m.jsx('br', { className: 'hidden sm:block' }),
                  'スピードと品質を両立した新しいWeb制作の形を実現します。',
                ],
              }),
            ],
          }),
          m.jsx('div', {
            className: 'relative',
            children: Kc.map(
              (
                {
                  icon: r,
                  title: s,
                  description: a,
                  details: o,
                  color: l,
                  bgColor: c,
                  gradient: d,
                },
                f,
              ) =>
                m.jsxs(
                  'div',
                  {
                    ref: (h) => (i.current[f] = h),
                    className: `relative mb-6 sm:mb-12 last:mb-0 transition-all duration-1000 ${
                      f === t ? 'opacity-100 scale-100' : 'opacity-50 scale-95'
                    }`,
                    children: [
                      f !== Kc.length - 1 &&
                        m.jsx('div', {
                          className: `absolute left-6 sm:left-[2.25rem] top-20 sm:top-24 bottom-0 w-0.5 ${
                            f === t ? l : 'bg-gray-200'
                          } hidden sm:block transition-colors duration-1000`,
                        }),
                      m.jsxs('div', {
                        className:
                          'flex flex-col sm:flex-row gap-4 sm:gap-8 items-start px-4 sm:px-0',
                        children: [
                          m.jsxs('div', {
                            className: 'flex-shrink-0 relative',
                            children: [
                              m.jsx('div', {
                                className: `w-12 h-12 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl ${
                                  f === t ? c : 'bg-gray-100'
                                } ${f === t ? l : 'text-gray-400'} 
                    flex items-center justify-center shadow-lg transform transition-all duration-1000`,
                                children: m.jsx(r, { className: 'w-6 h-6 sm:w-10 sm:h-10' }),
                              }),
                              m.jsx('div', {
                                className: `absolute -top-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full ${
                                  f === t ? l.replace('text-', 'bg-') : 'bg-gray-400'
                                } text-white flex items-center justify-center text-xs sm:text-sm font-bold transition-colors duration-1000`,
                                children:
                                  f === t
                                    ? m.jsx(Ss, { className: 'w-4 h-4 sm:w-5 sm:h-5' })
                                    : f + 1,
                              }),
                            ],
                          }),
                          m.jsx('div', {
                            className: `flex-1 bg-white p-4 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 w-full ${
                              f === t
                                ? `${l.replace('text-', 'border-')} bg-gradient-to-br ${d}`
                                : 'border-transparent'
                            }`,
                            children: m.jsxs('div', {
                              className: 'flex flex-col sm:flex-row gap-4 sm:gap-8',
                              children: [
                                m.jsxs('div', {
                                  className: 'flex-1',
                                  children: [
                                    m.jsxs('h3', {
                                      className:
                                        'text-xl sm:text-2xl font-bold mb-2 sm:mb-4 flex items-center gap-2 sm:gap-3',
                                      children: [
                                        s,
                                        f === t &&
                                          m.jsx(Ss, { className: `w-4 h-4 sm:w-5 sm:h-5 ${l}` }),
                                      ],
                                    }),
                                    m.jsx('p', {
                                      className: 'text-sm sm:text-base text-gray-600 mb-4 sm:mb-6',
                                      children: a,
                                    }),
                                    m.jsx('ul', {
                                      className: 'space-y-2 sm:space-y-4',
                                      children: o.map((h) =>
                                        m.jsxs(
                                          'li',
                                          {
                                            className: 'flex items-center gap-2 sm:gap-3 group',
                                            children: [
                                              m.jsx('div', {
                                                className: `w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                                                  f === t ? l : 'bg-gray-300'
                                                } group-hover:scale-150 transition-all duration-300`,
                                              }),
                                              m.jsx('span', {
                                                className: 'text-sm sm:text-base text-gray-600',
                                                children: h,
                                              }),
                                            ],
                                          },
                                          h,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                f !== Kc.length - 1 &&
                                  m.jsx('div', {
                                    className: 'hidden sm:flex items-center',
                                    children: m.jsx(Pa, {
                                      className: `w-6 h-6 sm:w-8 sm:h-8 ${
                                        f === t ? l : 'text-gray-300'
                                      } transition-colors duration-1000`,
                                    }),
                                  }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  },
                  s,
                ),
            ),
          }),
          m.jsx('div', {
            className: 'mt-16 text-center',
            children: m.jsx('div', {
              className: 'inline-block relative group',
              children: m.jsx($d, { showStats: !0, stats: [{ value: '24h', label: '対応' }] }),
            }),
          }),
        ],
      }),
    })
  );
}
const lT = [
  {
    title: 'AIデザイン教室 YAMMY',
    category: 'オンラインセミナーLP',
    image: '/yammyai.png',
    results: [
      { icon: Dl, value: '100%', label: 'AI活用率' },
      { icon: wv, value: '1.2倍', label: '集客数増加' },
      { icon: Rr, value: '5日間', label: '制作期間' },
    ],
    tags: ['AI Web制作', '高速開発', '広告運用'],
  },
];
function cT() {
  return m.jsx('section', {
    className: 'py-12 sm:py-20',
    children: m.jsxs('div', {
      className: 'container mx-auto px-4',
      children: [
        m.jsxs('div', {
          className: 'max-w-3xl mx-auto text-center mb-8 sm:mb-16',
          children: [
            m.jsxs('div', {
              className:
                'inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6',
              children: [m.jsx(a0, { className: 'w-4 h-4 mr-2' }), 'LP特化型の制作実績'],
            }),
            m.jsxs('h2', {
              className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6',
              children: [
                m.jsx('span', { className: 'text-rose-500', children: '成果にこだわる' }),
                m.jsx('br', {}),
                'ハイパフォーマンスLP制作',
              ],
            }),
            m.jsxs('p', {
              className: 'text-base sm:text-lg md:text-xl text-gray-600',
              children: [
                'お客様の目標に合わせた最適なLPを制作。',
                m.jsx('br', { className: 'hidden sm:block' }),
                '問合せ数や申込数の大幅な増加を実現します。',
              ],
            }),
            m.jsxs('div', {
              className:
                'mt-6 inline-flex items-center bg-blue-50 text-blue-500 px-6 py-3 rounded-xl',
              children: [
                m.jsx(wr, { className: 'w-5 h-5 mr-2' }),
                m.jsx('span', {
                  className: 'font-medium',
                  children: 'このLPもAI Web制作で作成しています',
                }),
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8',
          children: lT.map((t) =>
            m.jsxs(
              'div',
              {
                className:
                  'group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300',
                children: [
                  m.jsxs('div', {
                    className: 'relative aspect-video overflow-hidden',
                    children: [
                      m.jsx('img', {
                        src: t.image,
                        alt: t.title,
                        className:
                          'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500',
                      }),
                      m.jsx('div', {
                        className:
                          'absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity',
                        children:
                          t.title === 'AIデザイン教室 YAMMY'
                            ? m.jsxs('a', {
                                href: 'https://yammyai.com/',
                                target: '_blank',
                                rel: 'noopener noreferrer',
                                className:
                                  'px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base',
                                children: ['サイトを見る', m.jsx(xh, { className: 'w-4 h-4' })],
                              })
                            : m.jsxs('button', {
                                className:
                                  'px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-lg font-medium flex items-center gap-2 text-sm sm:text-base',
                                children: ['詳細を見る', m.jsx(xh, { className: 'w-4 h-4' })],
                              }),
                      }),
                      t.category === '自社LP' &&
                        m.jsxs('div', {
                          className:
                            'absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2',
                          children: [m.jsx(Dl, { className: 'w-4 h-4' }), 'AI活用事例'],
                        }),
                    ],
                  }),
                  m.jsxs('div', {
                    className: 'p-4 sm:p-6',
                    children: [
                      m.jsx('div', {
                        className: 'text-xs sm:text-sm text-gray-500 mb-2',
                        children: t.category,
                      }),
                      m.jsx('h3', {
                        className: 'text-lg sm:text-xl font-bold mb-4',
                        children: t.title,
                      }),
                      m.jsx('div', {
                        className: 'grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6',
                        children: t.results.map(({ icon: e, value: n, label: i }) =>
                          m.jsxs(
                            'div',
                            {
                              className: 'text-center',
                              children: [
                                m.jsx(e, {
                                  className:
                                    'w-4 sm:w-5 h-4 sm:h-5 mx-auto mb-1 sm:mb-2 text-rose-500',
                                }),
                                m.jsx('div', {
                                  className: 'font-bold text-sm sm:text-base',
                                  children: n,
                                }),
                                m.jsx('div', { className: 'text-xs text-gray-500', children: i }),
                              ],
                            },
                            i,
                          ),
                        ),
                      }),
                      m.jsx('div', {
                        className: 'flex flex-wrap gap-2',
                        children: t.tags.map((e) =>
                          m.jsx(
                            'span',
                            {
                              className:
                                'px-2 sm:px-3 py-1 bg-gray-50 text-gray-600 rounded-full text-xs sm:text-sm',
                              children: e,
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              },
              t.title,
            ),
          ),
        }),
      ],
    }),
  });
}
function Wp() {
  return m.jsxs('section', {
    className: 'py-12 sm:py-20 relative overflow-hidden',
    children: [
      m.jsxs('div', {
        className: 'absolute inset-0',
        children: [
          m.jsx('div', {
            className:
              'absolute w-[800px] h-[800px] -top-40 -right-40 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full blur-3xl animate-float',
          }),
          m.jsx('div', {
            className:
              'absolute w-[600px] h-[600px] top-60 -left-40 bg-gradient-to-br from-sky-500/20 to-blue-500/20 rounded-full blur-3xl animate-float animation-delay-200',
          }),
        ],
      }),
      m.jsx('div', {
        className: 'container mx-auto px-4 relative',
        children: m.jsxs('div', {
          className: 'max-w-3xl mx-auto text-center',
          children: [
            m.jsxs('div', {
              className:
                'inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-blue-500 shadow-md mb-4 sm:mb-6',
              children: [
                m.jsx(Rr, { className: 'w-4 h-4 mr-2' }),
                m.jsx('span', { className: 'font-bold', children: '人気No.1プラン' }),
              ],
            }),
            m.jsxs('h2', {
              className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-8',
              children: [
                m.jsx('span', { className: 'text-gradient-blue', children: '最短3日' }),
                'で',
                m.jsx('br', { className: 'sm:hidden' }),
                '高品質なLPを制作',
              ],
            }),
            m.jsxs('p', {
              className: 'text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12',
              children: [
                'AI技術と豊富な実績を組み合わせた独自の制作フローで、',
                m.jsx('br', { className: 'hidden sm:block' }),
                'スピーディーかつ高品質なLPをお届けします。',
              ],
            }),
            m.jsxs('div', {
              className:
                'relative bg-white border-4 border-blue-500 p-6 sm:p-8 md:p-12 rounded-3xl mb-8 sm:mb-16 max-w-2xl mx-auto transform hover:scale-102 transition-all duration-300 shadow-2xl',
              children: [
                m.jsxs('div', {
                  className:
                    'absolute -top-3 sm:-top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 text-white px-4 sm:px-8 py-1 sm:py-2 rounded-full text-sm sm:text-base font-bold flex items-center gap-2 shadow-lg animate-gradient whitespace-nowrap',
                  children: [
                    m.jsx(Nv, { className: 'w-4 h-4 sm:w-5 sm:h-5 animate-pulse' }),
                    '期間限定特別価格',
                  ],
                }),
                m.jsxs('div', {
                  className: 'mt-6 sm:mt-8 mb-6 sm:mb-8',
                  children: [
                    m.jsx('h3', {
                      className: 'text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-3',
                      children: 'バリはやプラン',
                    }),
                    m.jsx('p', {
                      className: 'text-sm sm:text-base md:text-lg text-gray-600',
                      children: 'スピード重視のハイパフォーマンスプラン',
                    }),
                  ],
                }),
                m.jsxs('div', {
                  className:
                    'relative mb-6 sm:mb-8 bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 rounded-2xl border-2 border-blue-200',
                  children: [
                    m.jsxs('div', {
                      className:
                        'absolute -right-2 sm:-right-4 -top-2 sm:-top-4 bg-blue-500 text-white px-3 sm:px-4 py-1 sm:py-2 rounded-full transform rotate-12 shadow-lg flex items-center gap-1 sm:gap-2 text-sm sm:text-base',
                      children: [
                        m.jsx(Ea, { className: 'w-3 h-3 sm:w-4 sm:h-4' }),
                        m.jsx('span', { className: 'font-bold', children: '15%OFF' }),
                      ],
                    }),
                    m.jsxs('div', {
                      className: 'text-center',
                      children: [
                        m.jsx('div', {
                          className:
                            'text-sm sm:text-base md:text-lg text-gray-500 line-through mb-3',
                          children: '通常価格 ¥59,800',
                        }),
                        m.jsxs('div', {
                          className:
                            'flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3',
                          children: [
                            m.jsx('div', {
                              className: 'bg-blue-500/10 px-3 py-1 rounded-full mb-2 sm:mb-0',
                              children: m.jsx('span', {
                                className:
                                  'text-base sm:text-xl md:text-2xl text-blue-500 font-medium',
                                children: '今だけ',
                              }),
                            }),
                            m.jsxs('div', {
                              className: 'flex items-baseline gap-1 sm:gap-2',
                              children: [
                                m.jsx('span', {
                                  className:
                                    'text-3xl sm:text-5xl md:text-7xl font-bold text-blue-500 tracking-tight',
                                  children: '¥49,800',
                                }),
                                m.jsx('span', {
                                  className: 'text-sm sm:text-base text-blue-500',
                                  children: '（税込）',
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                m.jsx('div', {
                  className:
                    'bg-gradient-to-r from-sky-50 to-blue-50 border-2 border-blue-200 p-4 sm:p-6 md:p-8 rounded-2xl mb-6 sm:mb-8',
                  children: m.jsxs('div', {
                    className: 'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3',
                    children: [
                      m.jsxs('div', {
                        className: 'flex items-center gap-2 sm:gap-3',
                        children: [
                          m.jsx(ko, {
                            className:
                              'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-600 animate-pulse',
                          }),
                          m.jsx('div', {
                            className: 'text-base sm:text-lg md:text-xl font-bold text-blue-800',
                            children: '残りわずか',
                          }),
                        ],
                      }),
                      m.jsx('div', {
                        className:
                          'bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl text-blue-800 font-mono font-bold shadow-sm text-center text-sm sm:text-base',
                        children: '残り3枠',
                      }),
                    ],
                  }),
                }),
                m.jsxs('div', {
                  className:
                    'bg-gradient-to-br from-gray-50 to-white p-6 sm:p-8 rounded-2xl mb-8 sm:mb-10 border-2 border-gray-100',
                  children: [
                    m.jsxs('div', {
                      className:
                        'text-left font-bold mb-4 sm:mb-6 flex items-center gap-2 text-base sm:text-lg md:text-xl',
                      children: [
                        m.jsx(ul, {
                          className: 'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-blue-500',
                        }),
                        m.jsx('span', { children: 'キャンペーン特典' }),
                      ],
                    }),
                    m.jsx('div', {
                      className: 'grid gap-3 sm:gap-4',
                      children: ['通常価格から15%OFF', '最短3日で納品', '24時間対応可能'].map((t) =>
                        m.jsxs(
                          'div',
                          {
                            className:
                              'flex items-center gap-3 sm:gap-4 bg-white p-4 sm:p-5 rounded-xl shadow-sm',
                            children: [
                              m.jsx(Ss, {
                                className: 'w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0',
                              }),
                              m.jsx('span', {
                                className: 'text-sm sm:text-base text-gray-700 font-medium',
                                children: t,
                              }),
                            ],
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
                m.jsxs('a', {
                  href: 'https://livekone.com/contact',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  className:
                    'group w-full px-6 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 text-white rounded-xl inline-flex items-center justify-center gap-3 sm:gap-4 hover:from-blue-600 hover:via-blue-700 hover:to-blue-600 transition-all duration-300 shadow-xl animate-gradient',
                  children: [
                    m.jsx('span', {
                      className: 'text-base sm:text-lg md:text-xl font-bold',
                      children: 'いますぐ特別価格で申し込む',
                    }),
                    m.jsx(Pa, {
                      className:
                        'w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    ],
  });
}
const uT = [
    {
      title: 'COZE-AIMハッカソン 受賞',
      date: '2024年6月',
      description: '最新のAI技術と使いやすさが評価され、数百のプロジェクトの中から入賞しました。',
    },
  ],
  dT = [
    {
      icon: wr,
      title: '24時間対応の自動応答',
      description: 'お客様の質問に24時間365日、即座に対応。夜間や休日でも商談機会を逃しません。',
    },
    {
      icon: Dl,
      title: 'AIによる賢い会話',
      description:
        '自然な日本語での会話が可能。商品説明から見積もり提示まで、スムーズな対応を実現します。',
    },
    {
      icon: Rv,
      title: 'データ分析と改善',
      description:
        '会話ログを分析し、よくある質問や顧客ニーズを可視化。マーケティング施策に活用できます。',
    },
  ],
  fT = [
    {
      type: 'bot',
      message: 'こんにちは！AI Web制作に関するご質問がありましたら、お気軽にお申し付けください。',
    },
    { type: 'user', message: 'バリはやプランについて教えてください。' },
    {
      type: 'bot',
      message: `バリはやプランは、最短3日でのスピード納品が特徴のプランです。
現在、期間限定で特別価格¥49,800（税込）でご提供中です。

主な特徴：
・フルカスタマイズデザイン
・AI活用による高速開発
・アクセス解析設定
・SEO対策の実装
・最短3日納品
・サポートチケット3枚付き

ご興味ありますか？`,
    },
  ];
function hT() {
  return m.jsx('section', {
    className: 'py-20',
    children: m.jsxs('div', {
      className: 'container mx-auto px-4',
      children: [
        m.jsxs('div', {
          className: 'max-w-3xl mx-auto text-center mb-16',
          children: [
            m.jsxs('div', {
              className:
                'inline-flex items-center bg-blue-50 text-blue-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6',
              children: [m.jsx(s0, { className: 'w-4 h-4 mr-2' }), 'AIチャットボット搭載'],
            }),
            m.jsxs('h2', {
              className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-6',
              children: [
                m.jsx('span', { className: 'text-gradient', children: 'AIチャットボット' }),
                'で',
                m.jsx('br', {}),
                '商談機会を逃さない',
              ],
            }),
            m.jsxs('p', {
              className: 'text-base sm:text-lg md:text-xl text-gray-600',
              children: [
                '24時間365日、お客様の質問に即座に対応。',
                m.jsx('br', { className: 'hidden sm:block' }),
                'リアルタイムな商談対応で成約率を最大化します。',
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'max-w-4xl mx-auto mb-16',
          children: m.jsxs('div', {
            className: 'bg-white rounded-2xl shadow-xl overflow-hidden',
            children: [
              m.jsxs('div', {
                className: 'bg-blue-500 p-4 flex items-center gap-3',
                children: [
                  m.jsx(wr, { className: 'w-6 h-6 text-white' }),
                  m.jsx('div', { className: 'text-white font-medium', children: 'AIアシスタント' }),
                ],
              }),
              m.jsx('div', {
                className: 'p-6 space-y-4',
                children: fT.map((t, e) =>
                  m.jsx(
                    'div',
                    {
                      className: `flex ${t.type === 'user' ? 'justify-end' : 'justify-start'}`,
                      children: m.jsx('div', {
                        className: `max-w-[80%] p-4 rounded-2xl ${
                          t.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                        }`,
                        children: t.message
                          .split(
                            `
`,
                          )
                          .map((n, i) =>
                            m.jsx('p', { className: 'mb-1 last:mb-0', children: n }, i),
                          ),
                      }),
                    },
                    e,
                  ),
                ),
              }),
              m.jsx('div', {
                className: 'p-4 border-t border-gray-100 bg-gray-50',
                children: m.jsxs('div', {
                  className: 'flex gap-2',
                  children: [
                    m.jsx('input', {
                      type: 'text',
                      placeholder: 'メッセージを入力...',
                      disabled: !0,
                      className:
                        'flex-1 px-4 py-2 border border-gray-200 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed',
                    }),
                    m.jsx('button', {
                      disabled: !0,
                      className: 'p-2 bg-gray-300 text-white rounded-lg cursor-not-allowed',
                      children: m.jsx(bv, { className: 'w-5 h-5' }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        m.jsxs('div', {
          className: 'relative max-w-5xl mx-auto',
          children: [
            m.jsx('div', {
              className:
                'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-50 rounded-full opacity-50',
            }),
            m.jsx('div', {
              className: 'grid md:grid-cols-3 gap-8',
              children: dT.map(({ icon: t, title: e, description: n }, i) =>
                m.jsx(
                  'div',
                  {
                    className: 'relative group',
                    children: m.jsxs('div', {
                      className:
                        'bg-white rounded-full aspect-square shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center text-center',
                      children: [
                        m.jsx('div', {
                          className:
                            'bg-blue-50 p-4 rounded-full text-blue-500 mb-4 group-hover:scale-110 transition-transform duration-300',
                          children: m.jsx(t, { className: 'w-8 h-8' }),
                        }),
                        m.jsx('h3', { className: 'text-xl font-bold mb-3', children: e }),
                        m.jsx('p', {
                          className: 'text-gray-600 mb-4 text-sm leading-relaxed',
                          children: n,
                        }),
                        m.jsx('div', { className: 'flex items-end gap-2 text-blue-500' }),
                      ],
                    }),
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        m.jsx('div', {
          className: 'max-w-4xl mx-auto mt-16',
          children: m.jsx('div', {
            className:
              'bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-4 sm:p-8 text-white',
            children: m.jsxs('div', {
              className: 'flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6',
              children: [
                m.jsx('div', {
                  className:
                    'bg-white/10 p-3 sm:p-4 rounded-xl backdrop-blur-sm flex-shrink-0 mx-auto sm:mx-0',
                  children: m.jsx(Lv, { className: 'w-8 sm:w-12 h-8 sm:h-12 text-yellow-300' }),
                }),
                m.jsx('div', {
                  className: 'flex-1 text-center sm:text-left',
                  children: uT.map((t) =>
                    m.jsxs(
                      'div',
                      {
                        children: [
                          m.jsxs('div', {
                            className:
                              'flex flex-col sm:flex-row items-center sm:items-center gap-2 mb-2',
                            children: [
                              m.jsx('h3', {
                                className: 'text-lg sm:text-xl font-bold',
                                children: t.title,
                              }),
                              m.jsx('span', {
                                className: 'text-xs sm:text-sm bg-white/20 px-2 py-1 rounded-full',
                                children: t.date,
                              }),
                            ],
                          }),
                          m.jsx('p', {
                            className: 'text-white/90 text-sm sm:text-base leading-relaxed',
                            children: t.description,
                          }),
                        ],
                      },
                      t.title,
                    ),
                  ),
                }),
              ],
            }),
          }),
        }),
      ],
    }),
  });
}
function pT({ title: t, subtitle: e, price: n, features: i, badge: r, className: s = '' }) {
  const a = t === 'バリはやプラン',
    o = a
      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white transform hover:scale-105'
      : 'bg-gradient-to-br from-amber-600 to-amber-700 text-white transform hover:scale-105',
    l = a
      ? 'bg-white text-blue-600 hover:bg-gray-100'
      : 'bg-white text-amber-600 hover:bg-gray-100';
  return m.jsxs('div', {
    className: `${o} p-8 rounded-2xl shadow-xl transition-all duration-500 ${s}`,
    children: [
      r &&
        m.jsxs('div', {
          className: 'relative',
          children: [
            m.jsx('div', {
              className: 'absolute -top-2 -right-2',
              children: a
                ? m.jsx(Ea, { className: 'w-5 h-5 text-blue-300 animate-pulse' })
                : m.jsx(wr, { className: 'w-5 h-5 text-amber-300 animate-pulse' }),
            }),
            m.jsxs('div', {
              className: `
            ${a ? 'bg-blue-500' : 'bg-amber-500'} text-white text-sm px-3 py-1 
            rounded-full inline-block mb-4
            animate-fade-in
            hover:bg-opacity-90 transition-colors
            flex items-center gap-2
          `,
              children: [
                a ? m.jsx(Ea, { className: 'w-4 h-4' }) : m.jsx(wr, { className: 'w-4 h-4' }),
                r,
              ],
            }),
          ],
        }),
      m.jsx('h3', { className: 'text-xl font-bold mb-2 text-white', children: t }),
      e && m.jsx('p', { className: 'text-sm text-white/80 mb-4', children: e }),
      m.jsx('div', {
        className: 'transform transition-all duration-300 hover:scale-105 mb-6',
        children: m.jsxs('div', {
          className: 'flex items-baseline gap-2',
          children: [
            m.jsxs('span', {
              className: 'text-4xl font-bold text-white',
              children: ['¥', n.toLocaleString()],
            }),
            m.jsx('span', { className: 'text-sm text-white/80', children: '（税込）' }),
          ],
        }),
      }),
      m.jsx('ul', {
        className: 'space-y-4 mb-8',
        children: i.map((c, d) =>
          typeof c == 'string'
            ? m.jsxs(
                'li',
                {
                  className:
                    'flex items-center text-white/90 transform transition-all duration-300 hover:translate-x-2',
                  style: { animationDelay: `${d * 100}ms` },
                  children: [
                    m.jsx(Sv, {
                      className: `
                  w-5 h-5 mr-2
                  ${a ? 'text-blue-300' : 'text-amber-300'}
                  transition-transform duration-300 group-hover:rotate-12
                `,
                    }),
                    c,
                  ],
                },
                c,
              )
            : null,
        ),
      }),
      m.jsxs('a', {
        href: 'https://livekone.com/contact',
        target: '_blank',
        rel: 'noopener noreferrer',
        className: `
          w-full py-3 ${l} rounded-md 
          transition-all duration-300
          transform hover:scale-105
          hover:shadow-lg
          relative overflow-hidden
          group
          font-bold
          flex items-center justify-center
        `,
        children: [
          m.jsx('span', { className: 'relative z-10', children: 'プランを選択' }),
          m.jsx('div', {
            className:
              'absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000',
          }),
        ],
      }),
    ],
  });
}
const mT = [
  {
    title: 'バリはやプラン',
    subtitle: '最短3日でスピード納品',
    price: 59800,
    features: [
      'フルカスタマイズデザイン',
      'AI活用による高速開発',
      'アクセス解析設定',
      'SEO対策の実装',
      '最短3日納品',
      'サポートチケット3枚付き',
    ],
    badge: 'スピード重視',
  },
  {
    title: 'プレミアムプラン',
    subtitle: '24時間365日、AIが自動で商談対応',
    price: 99800,
    features: [
      'フルカスタマイズデザイン',
      'AIチャットボットの搭載',
      'マーケティング戦略提案',
      'A/Bテストの実装',
      '最短5日納品',
      'サポートチケット5枚付き',
    ],
    badge: 'AIチャットボット搭載',
  },
];
function gT() {
  return m.jsx('section', {
    className: 'py-20 bg-gray-50',
    children: m.jsxs('div', {
      className: 'container mx-auto px-4',
      children: [
        m.jsxs('div', {
          className: 'max-w-3xl mx-auto text-center mb-16',
          children: [
            m.jsxs('div', {
              className:
                'inline-flex items-center bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm text-rose-500 shadow-md mb-4 sm:mb-6',
              children: [
                m.jsx(Ea, { className: 'w-4 h-4 mr-2' }),
                m.jsx('span', { className: 'font-bold', children: '目的に合わせて選べる' }),
              ],
            }),
            m.jsx('h2', {
              className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-6',
              children: '料金プラン',
            }),
            m.jsxs('p', {
              className: 'text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed',
              children: [
                'プロジェクトの規模や目的に合わせて、',
                m.jsx('br', { className: 'hidden sm:block' }),
                '最適なプランをお選びいただけます。',
              ],
            }),
            m.jsxs('div', {
              className: 'mt-8 flex flex-wrap justify-center gap-2 sm:gap-4',
              children: [
                m.jsxs('div', {
                  className:
                    'inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap',
                  children: [m.jsx(Rr, { className: 'w-3 h-3 sm:w-4 sm:h-4' }), '最短3日で納品'],
                }),
                m.jsxs('div', {
                  className:
                    'inline-flex items-center gap-2 bg-amber-50 text-amber-600 px-3 py-1.5 rounded-full text-xs sm:text-sm whitespace-nowrap',
                  children: [
                    m.jsx(wr, { className: 'w-3 h-3 sm:w-4 sm:h-4' }),
                    'AIチャットボット対応',
                  ],
                }),
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'grid md:grid-cols-2 gap-8 max-w-4xl mx-auto',
          children: mT.map((t) => m.jsx(pT, { ...t }, t.title)),
        }),
      ],
    }),
  });
}
function xT() {
  return m.jsx('section', {
    className: 'py-20 bg-gradient-to-br from-rose-50 to-purple-50 relative overflow-hidden',
    children: m.jsxs('div', {
      className: 'container mx-auto px-4 relative',
      children: [
        m.jsxs('div', {
          className: 'max-w-3xl mx-auto text-center mb-12',
          children: [
            m.jsxs('div', {
              className:
                'inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6',
              children: [m.jsx(Dv, { className: 'w-4 h-4 mr-2' }), 'インフルエンサー限定プラン'],
            }),
            m.jsxs('h2', {
              className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-6',
              children: [
                m.jsx('span', { className: 'text-gradient', children: 'インフルエンサー' }),
                'の',
                m.jsx('br', {}),
                'ビジネスを加速する',
              ],
            }),
            m.jsxs('p', {
              className: 'text-base sm:text-lg md:text-xl text-gray-600',
              children: [
                'フォロワー10,000人以上のインフルエンサー限定。',
                m.jsx('br', { className: 'hidden sm:block' }),
                '特別価格でプロフェッショナルなLPを制作いたします。',
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'max-w-2xl mx-auto',
          children: m.jsxs('div', {
            className:
              'bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300',
            children: [
              m.jsxs('div', {
                className: 'bg-gradient-to-r from-rose-500 to-purple-500 p-8 text-white relative',
                children: [
                  m.jsx('div', {
                    className: 'absolute top-4 right-4',
                    children: m.jsx(Cv, { className: 'w-8 h-8 text-yellow-300 animate-pulse' }),
                  }),
                  m.jsx('h3', {
                    className: 'text-2xl font-bold mb-2',
                    children: 'インフルエンサープラン',
                  }),
                  m.jsxs('div', {
                    className: 'mt-4',
                    children: [
                      m.jsx('div', {
                        className: 'text-sm text-white/80 line-through',
                        children: '通常価格 ¥59,800',
                      }),
                      m.jsxs('div', {
                        className: 'flex items-baseline gap-2',
                        children: [
                          m.jsx('span', { className: 'text-5xl font-bold', children: '¥19,800' }),
                          m.jsx('span', { className: 'text-white/90', children: '（税込）' }),
                        ],
                      }),
                      m.jsxs('div', {
                        className:
                          'inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm mt-2',
                        children: [m.jsx(ul, { className: 'w-4 h-4' }), '70%OFF'],
                      }),
                    ],
                  }),
                ],
              }),
              m.jsxs('div', {
                className: 'p-8',
                children: [
                  m.jsx('div', {
                    className: 'space-y-4 mb-8',
                    children: [
                      'フルカスタマイズデザイン',
                      'お問い合わせフォーム設定',
                      '最短5日納品',
                    ].map((t) =>
                      m.jsxs(
                        'div',
                        {
                          className: 'flex items-center gap-3',
                          children: [
                            m.jsx(Ss, { className: 'w-5 h-5 text-emerald-500 flex-shrink-0' }),
                            m.jsx('span', { className: 'text-gray-700', children: t }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                  m.jsxs('a', {
                    href: 'https://livekone.com/contact',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    className:
                      'w-full group bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-xl px-8 py-4 font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-300',
                    children: [
                      'インフルエンサープランで申し込む',
                      m.jsx(Pa, {
                        className: 'w-5 h-5 group-hover:translate-x-1 transition-transform',
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
const _T = [
  { task: 'テキストの修正', tickets: 0.5, time: '約30分', category: '軽微な修正' },
  { task: 'レイアウトの微調整', tickets: 1, time: '約1時間', category: 'デザイン調整' },
  { task: 'セクションの追加', tickets: 2, time: '約2時間', category: '機能追加' },
];
function vT() {
  return m.jsxs('section', {
    className: 'py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden',
    children: [
      m.jsxs('div', {
        className: 'absolute inset-0 overflow-hidden',
        children: [
          m.jsx('div', {
            className:
              'absolute w-[500px] h-[500px] -top-20 -right-20 bg-emerald-500/5 rounded-full blur-3xl animate-float',
          }),
          m.jsx('div', {
            className:
              'absolute w-[300px] h-[300px] top-40 -left-20 bg-blue-500/5 rounded-full blur-3xl animate-float animation-delay-200',
          }),
        ],
      }),
      m.jsxs('div', {
        className: 'container mx-auto px-4 relative',
        children: [
          m.jsxs('div', {
            className: 'max-w-3xl mx-auto text-center mb-16',
            children: [
              m.jsxs('div', {
                className:
                  'inline-flex items-center bg-emerald-50 text-emerald-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6',
                children: [m.jsx(Ea, { className: 'w-4 h-4 mr-2' }), '安心のサポート体制'],
              }),
              m.jsxs('h2', {
                className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-6',
                children: [
                  m.jsx('span', { className: 'text-gradient', children: 'チケット制サポート' }),
                  'で',
                  m.jsx('br', {}),
                  '柔軟な保守運用を実現',
                ],
              }),
              m.jsxs('p', {
                className: 'text-base sm:text-lg md:text-xl text-gray-600',
                children: [
                  '納品後もしっかりサポート。必要な時に必要なだけ使える',
                  m.jsx('br', { className: 'hidden sm:block' }),
                  '効率的なチケット制サポートをご用意しています。',
                ],
              }),
            ],
          }),
          m.jsxs('div', {
            className: 'max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden',
            children: [
              m.jsxs('div', {
                className: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white p-8',
                children: [
                  m.jsx('div', {
                    className: 'flex items-center justify-between mb-4',
                    children: m.jsxs('div', {
                      className: 'flex items-center gap-3',
                      children: [
                        m.jsx(ul, { className: 'w-6 h-6' }),
                        m.jsx('h3', {
                          className: 'text-2xl font-bold',
                          children: 'お得な5枚セット',
                        }),
                      ],
                    }),
                  }),
                  m.jsxs('div', {
                    className: 'flex items-baseline gap-2 mb-2',
                    children: [
                      m.jsx('span', { className: 'text-5xl font-bold', children: '¥19,800' }),
                      m.jsx('span', { className: 'text-white/80', children: '（税込）' }),
                    ],
                  }),
                  m.jsx('p', {
                    className: 'text-white/90',
                    children: '1チケットあたり ¥3,960 / 通常価格より20%お得',
                  }),
                ],
              }),
              m.jsxs('div', {
                className: 'p-8',
                children: [
                  m.jsxs('div', {
                    className: 'grid md:grid-cols-2 gap-8',
                    children: [
                      m.jsxs('div', {
                        children: [
                          m.jsxs('h4', {
                            className: 'text-lg font-bold mb-4 flex items-center gap-2',
                            children: [
                              m.jsx(Pv, { className: 'w-5 h-5 text-emerald-500' }),
                              'チケットの使用例',
                            ],
                          }),
                          m.jsx('div', {
                            className: 'space-y-4',
                            children: _T.map(({ task: t, tickets: e, time: n, category: i }) =>
                              m.jsxs(
                                'div',
                                {
                                  className:
                                    'flex items-center gap-4 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors',
                                  children: [
                                    m.jsxs('div', {
                                      className: 'flex-1',
                                      children: [
                                        m.jsx('div', { className: 'font-medium', children: t }),
                                        m.jsx('div', {
                                          className: 'text-sm text-gray-500',
                                          children: i,
                                        }),
                                      ],
                                    }),
                                    m.jsxs('div', {
                                      className: 'text-right',
                                      children: [
                                        m.jsxs('div', {
                                          className: 'font-bold text-emerald-500',
                                          children: [e, '枚'],
                                        }),
                                        m.jsx('div', {
                                          className: 'text-sm text-gray-500',
                                          children: n,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t,
                              ),
                            ),
                          }),
                        ],
                      }),
                      m.jsxs('div', {
                        children: [
                          m.jsxs('h4', {
                            className: 'text-lg font-bold mb-4 flex items-center gap-2',
                            children: [
                              m.jsx(ul, { className: 'w-5 h-5 text-emerald-500' }),
                              'チケット特典',
                            ],
                          }),
                          m.jsx('div', {
                            className: 'bg-emerald-50 p-6 rounded-xl',
                            children: m.jsx('ul', {
                              className: 'space-y-4',
                              children: [
                                { text: '24時間以内の初期回答', sub: 'スピーディーな対応' },
                                { text: '最短当日対応', sub: '緊急の修正にも対応' },
                                { text: '有効期限12ヶ月', sub: '余裕を持って利用可能' },
                              ].map(({ text: t, sub: e }) =>
                                m.jsxs(
                                  'li',
                                  {
                                    className: 'flex items-start gap-3',
                                    children: [
                                      m.jsx('div', {
                                        className: 'bg-white p-2 rounded-lg',
                                        children: m.jsx(Ss, {
                                          className: 'w-5 h-5 text-emerald-500',
                                        }),
                                      }),
                                      m.jsxs('div', {
                                        children: [
                                          m.jsx('div', { className: 'font-medium', children: t }),
                                          m.jsx('div', {
                                            className: 'text-sm text-gray-600',
                                            children: e,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  t,
                                ),
                              ),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  m.jsx('div', {
                    className: 'mt-8 text-center',
                    children: m.jsxs('a', {
                      href: 'https://livekone.com/contact',
                      target: '_blank',
                      rel: 'noopener noreferrer',
                      className:
                        'group px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-xl inline-flex items-center gap-2 hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 hover:scale-105',
                      children: [
                        m.jsx('span', { className: 'font-bold', children: 'チケットを購入する' }),
                        m.jsx(Rr, {
                          className: 'w-5 h-5 group-hover:translate-x-1 transition-transform',
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
const yT = [
  {
    question: '制作期間はどのくらいかかりますか？',
    answer:
      '最短3日間での納品が可能です。AI技術の活用により、従来の制作期間を大幅に短縮しています。ただし、プロジェクトの規模や要件によって期間は変動する場合があります。',
    category: '納期・料金',
  },
  {
    question: 'AIを使用することでクオリティは下がりませんか？',
    answer:
      'AIはあくまでも制作を効率化するためのツールとして使用しています。最終的なクオリティチェックやデザインの調整は、経験豊富なデザイナーが行いますので、品質は従来以上のものをご提供できます。',
    category: '品質・技術',
  },
  {
    question: '修正回数に制限はありますか？',
    answer:
      '納品までの修正回数は無制限です。お客様のご要望を完全に満たすまで、何度でも修正対応させていただきます。納品後の修正については、チケット制のサポートをご用意しています。',
    category: 'サポート',
  },
  {
    question: '納品後のサポート体制はどうなっていますか？',
    answer:
      '納品後は、チケット制のサポートをご用意しています。サイトの更新や軽微な修正、技術的なサポートなど、必要に応じてチケットを使用してご依頼いただけます。また、24時間対応のチャットボットサポートも提供しています。',
    category: 'サポート',
  },
  {
    question: 'SEO対策は含まれていますか？',
    answer:
      'はい、すべてのプランに基本的なSEO対策が含まれています。タイトル・メタディスクリプションの最適化、画像のalt属性設定、構造化データの実装など、検索エンジン対策を標準で行っています。さらに高度なSEO対策もオプションでご用意しています。',
    category: '品質・技術',
  },
  {
    question: '独自ドメインの取得や設定も対応していますか？',
    answer:
      'はい、ドメインの取得から設定まで一括で対応可能です。また、既にお持ちのドメインがある場合は、そちらを使用することも可能です。DNSの設定やSSL証明書の導入なども含めてサポートいたします。',
    category: 'サポート',
  },
];
function ST() {
  const [t, e] = un.useState(null);
  return m.jsx('section', {
    className: 'py-12 sm:py-20 bg-gray-50',
    children: m.jsxs('div', {
      className: 'container mx-auto px-4',
      children: [
        m.jsxs('div', {
          className: 'max-w-3xl mx-auto text-center mb-8 sm:mb-12',
          children: [
            m.jsxs('div', {
              className:
                'inline-flex items-center bg-rose-50 text-rose-500 px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm mb-4 sm:mb-6',
              children: [m.jsx(Tv, { className: 'w-4 h-4 mr-2' }), 'よくあるご質問'],
            }),
            m.jsxs('h2', {
              className: 'text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6',
              children: ['お客様からよく', m.jsx('br', { className: 'sm:hidden' }), 'いただく質問'],
            }),
            m.jsxs('p', {
              className: 'text-base sm:text-lg md:text-xl text-gray-600',
              children: [
                'Web制作に関する不安や疑問にお答えします。',
                m.jsx('br', { className: 'hidden sm:block' }),
                'ご不明な点がございましたら、お気軽にお問い合わせください。',
              ],
            }),
          ],
        }),
        m.jsx('div', {
          className: 'max-w-3xl mx-auto space-y-3 sm:space-y-4',
          children: yT.map((n, i) =>
            m.jsxs(
              'div',
              {
                className:
                  'bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300',
                children: [
                  m.jsxs('button', {
                    onClick: () => e(t === i ? null : i),
                    className:
                      'w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center gap-4',
                    children: [
                      m.jsx('span', {
                        className: 'font-medium text-sm sm:text-base',
                        children: n.question,
                      }),
                      m.jsx(r0, {
                        className: `w-5 h-5 text-gray-400 transition-transform ${
                          t === i ? 'rotate-180' : ''
                        }`,
                      }),
                    ],
                  }),
                  m.jsx('div', {
                    className: `px-4 sm:px-6 transition-all duration-300 ease-in-out ${
                      t === i ? 'py-3 sm:py-4 border-t border-gray-100' : 'max-h-0 overflow-hidden'
                    }`,
                    children: m.jsx('p', {
                      className: 'text-sm sm:text-base text-gray-600',
                      children: n.answer,
                    }),
                  }),
                ],
              },
              i,
            ),
          ),
        }),
      ],
    }),
  });
}
function MT() {
  return m.jsx('footer', {
    className: 'bg-black text-white py-12',
    children: m.jsx('div', {
      className: 'container mx-auto px-4',
      children: m.jsxs('div', {
        className: 'flex flex-col items-center justify-center',
        children: [
          m.jsx('div', {
            className: 'flex items-center gap-2 mb-6',
            children: m.jsx('a', {
              href: 'https://livekone.com/',
              target: '_blank',
              rel: 'noopener noreferrer',
              className: 'flex items-center gap-2',
              children: m.jsx('img', {
                src: '/Livekone.svg',
                alt: 'Livekone',
                className: 'h-8 sm:h-10',
              }),
            }),
          }),
          m.jsx('div', {
            className: 'text-sm text-gray-500',
            children: '© Livekone Inc. All Rights Reserved 2025',
          }),
        ],
      }),
    }),
  });
}
function ET() {
  return m.jsxs('div', {
    className: 'bg-white',
    children: [
      m.jsx(xv, {}),
      m.jsxs('main', {
        className: 'pt-0',
        children: [
          m.jsx('section', { id: 'hero', children: m.jsx(nT, {}) }),
          m.jsxs('section', { id: 'features', children: [m.jsx(rT, {}), m.jsx(aT, {})] }),
          m.jsx('section', { id: 'speed-plan', children: m.jsx(Wp, {}) }),
          m.jsx('section', { id: 'workflow', children: m.jsx(oT, {}) }),
          m.jsx('section', { id: 'chatbot', children: m.jsx(hT, {}) }),
          m.jsx('section', { id: 'pricing', children: m.jsx(gT, {}) }),
          m.jsx('section', { id: 'influencer', children: m.jsx(xT, {}) }),
          m.jsx('section', { id: 'portfolio', children: m.jsx(cT, {}) }),
          m.jsx('section', { id: 'support', children: m.jsx(vT, {}) }),
          m.jsx('section', { id: 'faq', children: m.jsx(ST, {}) }),
          m.jsx('section', { id: 'speed-plan', children: m.jsx(Wp, {}) }),
        ],
      }),
      m.jsx(MT, {}),
    ],
  });
}
i0(document.getElementById('root')).render(m.jsx(un.StrictMode, { children: m.jsx(ET, {}) }));
