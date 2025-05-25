/*! For license information please see main.2c1ca13a45c718045eb1.js.LICENSE.txt */
(() => {
  'use strict';
  var t,
    r = {
      259: (t, r, e) => {
        function n(t) {
          return (
            (n =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            n(t)
          );
        }
        var o,
          i,
          a,
          u =
            ((o = {
              saveSession: function (t) {
                t &&
                  t.token &&
                  (localStorage.setItem('token', t.token),
                  localStorage.setItem('name', t.name),
                  localStorage.setItem('email', t.email));
              },
              loadSession: function () {
                var t = localStorage.getItem('token'),
                  r = localStorage.getItem('name'),
                  e = localStorage.getItem('email');
                return t && r && e ? { token: t, name: r, email: e } : null;
              },
              clearSession: function () {
                localStorage.removeItem('token'),
                  localStorage.removeItem('name'),
                  localStorage.removeItem('email');
              },
            }),
            (a = function (t) {
              t &&
                t.token &&
                (localStorage.setItem('token', t.token),
                localStorage.setItem('name', t.name),
                localStorage.setItem('email', t.email),
                localStorage.setItem('sessionTime', Date.now()));
            }),
            (i = (function (t) {
              var r = (function (t, r) {
                if ('object' != n(t) || !t) return t;
                var e = t[Symbol.toPrimitive];
                if (void 0 !== e) {
                  var o = e.call(t, r || 'default');
                  if ('object' != n(o)) return o;
                  throw new TypeError(
                    '@@toPrimitive must return a primitive value.'
                  );
                }
                return ('string' === r ? String : Number)(t);
              })(t, 'string');
              return 'symbol' == n(r) ? r : r + '';
            })((i = 'saveSession'))) in o
              ? Object.defineProperty(o, i, {
                  value: a,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (o[i] = a),
            o);
        function c(t) {
          return (
            (c =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            c(t)
          );
        }
        function s() {
          s = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function f(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            f({}, '');
          } catch (t) {
            f = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function l(r, e, n, o) {
            var i = e && e.prototype instanceof d ? e : d,
              a = Object.create(i.prototype);
            return (
              f(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = k(u, n);
                        if (c) {
                          if (c === p) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = h(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === p)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new _(o || [])),
                !0
              ),
              a
            );
          }
          function h(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = l;
          var p = {};
          function d() {}
          function y() {}
          function v() {}
          var g = {};
          f(g, i, function () {
            return this;
          });
          var m = Object.getPrototypeOf,
            w = m && m(m(j([])));
          w && w !== e && n.call(w, i) && (g = w);
          var b = (v.prototype = d.prototype = Object.create(g));
          function x(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              f(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function E(t, r) {
            function e(o, i, a, u) {
              var s = h(t[o], t, i);
              if ('throw' !== s.type) {
                var f = s.arg,
                  l = f.value;
                return l && 'object' == c(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (f.value = t), a(f);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(s.arg);
            }
            var o;
            f(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function k(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  k(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                p
              );
            var i = h(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), p
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  p)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                p);
          }
          function S(t) {
            this.tryEntries.push(t);
          }
          function O(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function _(t) {
            (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
          }
          function j(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(c(r) + ' is not iterable');
          }
          return (
            (y.prototype = v),
            f(b, 'constructor', v),
            f(v, 'constructor', y),
            (y.displayName = f(v, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === y || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, v)
                  : ((t.__proto__ = v), f(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(b)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            x(E.prototype),
            f(E.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = E),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(l(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(b),
            f(b, u, 'Generator'),
            f(b, i, function () {
              return this;
            }),
            f(b, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = j),
            (_.prototype = {
              constructor: _,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(O),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), p)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  p
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), O(e), p;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      O(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: j(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  p
                );
              },
            }),
            r
          );
        }
        function f(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function l(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                f(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                f(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function h(t, r) {
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, p(n.key), n);
          }
        }
        function p(t) {
          var r = (function (t, r) {
            if ('object' != c(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, r || 'default');
              if ('object' != c(n)) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(t);
          })(t, 'string');
          return 'symbol' == c(r) ? r : r + '';
        }
        var d = 'https://story-api.dicoding.dev/v1',
          y = (function () {
            return (function (t, r, e) {
              return (
                r && h(t.prototype, r),
                e && h(t, e),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                t
              );
            })(
              function t() {
                !(function (t, r) {
                  if (!(t instanceof r))
                    throw new TypeError('Cannot call a class as a function');
                })(this, t);
              },
              null,
              [
                {
                  key: 'login',
                  value:
                    ((r = l(
                      s().mark(function t(r, e) {
                        var n, o;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (((t.prev = 0), r && e)) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw new Error(
                                    'Email and password are required.'
                                  );
                                case 3:
                                  return (
                                    (t.next = 5),
                                    fetch(''.concat(d, '/login'), {
                                      method: 'POST',
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                      body: JSON.stringify({
                                        email: r,
                                        password: e,
                                      }),
                                    })
                                  );
                                case 5:
                                  return (n = t.sent), (t.next = 8), n.json();
                                case 8:
                                  if (((o = t.sent), n.ok)) {
                                    t.next = 13;
                                    break;
                                  }
                                  throw (
                                    (console.error(
                                      'Login failed. Status:',
                                      n.status
                                    ),
                                    console.error('Server response:', o),
                                    new Error(o.message || 'Login failed.'))
                                  );
                                case 13:
                                  return (
                                    u.saveSession({
                                      token: o.loginResult.token,
                                      name: o.loginResult.name,
                                      email: r,
                                    }),
                                    t.abrupt('return', !0)
                                  );
                                case 17:
                                  return (
                                    (t.prev = 17),
                                    (t.t0 = t.catch(0)),
                                    console.error('Login Error:', t.t0.message),
                                    t.abrupt('return', !1)
                                  );
                                case 21:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 17]]
                        );
                      })
                    )),
                    function (t, e) {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: 'register',
                  value:
                    ((t = l(
                      s().mark(function t(r, e, n) {
                        var o, i;
                        return s().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (((t.prev = 0), r && e && n)) {
                                    t.next = 3;
                                    break;
                                  }
                                  throw new Error('All fields are required.');
                                case 3:
                                  if (!(n.length < 8)) {
                                    t.next = 5;
                                    break;
                                  }
                                  throw new Error(
                                    'Password must be at least 8 characters.'
                                  );
                                case 5:
                                  return (
                                    (t.next = 7),
                                    fetch(''.concat(d, '/register'), {
                                      method: 'POST',
                                      headers: {
                                        'Content-Type': 'application/json',
                                      },
                                      body: JSON.stringify({
                                        name: r,
                                        email: e,
                                        password: n,
                                      }),
                                    })
                                  );
                                case 7:
                                  return (o = t.sent), (t.next = 10), o.json();
                                case 10:
                                  if (((i = t.sent), o.ok)) {
                                    t.next = 15;
                                    break;
                                  }
                                  throw (
                                    (console.error(
                                      'Register failed. Status:',
                                      o.status
                                    ),
                                    console.error('Server response:', i),
                                    new Error(
                                      i.message || 'Registration failed.'
                                    ))
                                  );
                                case 15:
                                  return t.abrupt('return', !0);
                                case 18:
                                  return (
                                    (t.prev = 18),
                                    (t.t0 = t.catch(0)),
                                    console.error(
                                      'Register Error:',
                                      t.t0.message
                                    ),
                                    t.abrupt('return', !1)
                                  );
                                case 22:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[0, 18]]
                        );
                      })
                    )),
                    function (r, e, n) {
                      return t.apply(this, arguments);
                    }),
                },
                {
                  key: 'logout',
                  value: function () {
                    u.clearSession();
                  },
                },
                {
                  key: 'isLoggedIn',
                  value: function () {
                    return !!u.loadSession();
                  },
                },
                {
                  key: 'getToken',
                  value: function () {
                    var t = u.loadSession();
                    return t ? t.token : null;
                  },
                },
                {
                  key: 'getUser',
                  value: function () {
                    var t = u.loadSession();
                    return t ? { name: t.name, email: t.email } : null;
                  },
                },
              ]
            );
            var t, r;
          })();
        function v(t) {
          return (
            (v =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            v(t)
          );
        }
        function g() {
          g = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = k(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new _(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var m = Object.getPrototypeOf,
            w = m && m(m(j([])));
          w && w !== e && n.call(w, i) && (y = w);
          var b = (d.prototype = h.prototype = Object.create(y));
          function x(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function E(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == v(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function k(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  k(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function S(t) {
            this.tryEntries.push(t);
          }
          function O(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function _(t) {
            (this.tryEntries = [[-1]]), t.forEach(S, this), this.reset(!0);
          }
          function j(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(v(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(b, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(b)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            x(E.prototype),
            c(E.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = E),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new E(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            x(b),
            c(b, u, 'Generator'),
            c(b, i, function () {
              return this;
            }),
            c(b, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = j),
            (_.prototype = {
              constructor: _,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(O),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), O(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      O(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: j(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function m(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function w(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                m(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                m(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function b(t, r) {
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, x(n.key), n);
          }
        }
        function x(t) {
          var r = (function (t, r) {
            if ('object' != v(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, r || 'default');
              if ('object' != v(n)) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(t);
          })(t, 'string');
          return 'symbol' == v(r) ? r : r + '';
        }
        var E = (function () {
          return (function (t, r, e) {
            return (
              r && b(t.prototype, r),
              e && b(t, e),
              Object.defineProperty(t, 'prototype', { writable: !1 }),
              t
            );
          })(
            function t(r) {
              !(function (t, r) {
                if (!(t instanceof r))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.view = r);
            },
            [
              {
                key: 'handleLogin',
                value:
                  ((r = w(
                    g().mark(function t(r, e) {
                      return g().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), y.login(r, e);
                              case 2:
                                t.sent
                                  ? this.view.navigateToHome()
                                  : this.view.showError(
                                      'Login failed. Incorrect email or password..'
                                    );
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (t, e) {
                    return r.apply(this, arguments);
                  }),
              },
              {
                key: 'handleRegister',
                value:
                  ((t = w(
                    g().mark(function t(r, e, n) {
                      return g().wrap(
                        function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), y.register(r, e, n);
                              case 2:
                                t.sent
                                  ? (this.view.showSuccess(
                                      'Registration successful. Please login.'
                                    ),
                                    this.view.navigateToLogin())
                                  : this.view.showError(
                                      'Registration failed. Email may already be registered.'
                                    );
                              case 4:
                              case 'end':
                                return t.stop();
                            }
                        },
                        t,
                        this
                      );
                    })
                  )),
                  function (r, e, n) {
                    return t.apply(this, arguments);
                  }),
              },
              {
                key: 'logout',
                value: function () {
                  y.logout(), this.view.navigateToLogin();
                },
              },
              {
                key: 'isAuthenticated',
                value: function () {
                  return y.isLoggedIn();
                },
              },
              {
                key: 'getUser',
                value: function () {
                  return y.getUser();
                },
              },
            ]
          );
          var t, r;
        })();
        function k(t) {
          return (
            (k =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            k(t)
          );
        }
        function S() {
          S = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new _(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(j([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == k(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function O(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function _(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function j(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(k(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = j),
            (_.prototype = {
              constructor: _,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(O),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), O(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      O(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: j(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function O(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function _(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                O(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                O(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        var j = {
          render: function () {
            return _(
              S().mark(function t() {
                return S().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          'return',
                          '\n      <section class="auth-section">\n        <h2>Login</h2>\n        <form id="login-form" aria-labelledby="login-heading">\n          '.concat(
                            '\n    <label for="email">Email address</label>\n    <input type="email" id="email" name="email" required>\n\n    <label for="password">Password</label>\n    <input type="password" id="password" name="password" required>\n  ',
                            '\n          \n          <button type="submit" aria-label="Login to Story Day account">Login</button>\n        </form>\n        <p>Don\'t have an account yet? <a href="#/register">Register</a></p>\n      </section>\n    '
                          )
                        );
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          afterRender: function () {
            var t = this;
            return _(
              S().mark(function r() {
                return S().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        (t.presenter = new E(t)),
                          document
                            .getElementById('login-form')
                            .addEventListener('submit', function (r) {
                              r.preventDefault();
                              var e = document
                                  .getElementById('email')
                                  .value.trim(),
                                n = document.getElementById('password').value;
                              n.length < 8
                                ? t.showError(
                                    'Password must be at least 8 characters.'
                                  )
                                : t.presenter.handleLogin(e, n);
                            });
                      case 2:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          navigateToHome: function () {
            window.location.hash = '#/home';
          },
          showError: function (t) {
            alert('Error: '.concat(t));
          },
        };
        function P(t) {
          return (
            (P =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            P(t)
          );
        }
        function T() {
          T = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == P(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(P(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function I(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function N(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                I(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                I(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        var G = {
            render: function () {
              return N(
                T().mark(function t() {
                  return T().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return t.abrupt(
                            'return',
                            '\n      <section class="auth-section">\n        <h2 id="register-heading">Register</h2>\n        <form id="register-form" aria-labelledby="register-heading">\n          '.concat(
                              '\n    <label for="name">Full name</label>\n    <input type="text" id="name" name="name" required minlength="2">\n\n    <label for="email">Email address</label>\n    <input type="email" id="email" name="email" required>\n\n    <label for="password">Password</label>\n    <input type="password" id="password" name="password" required minlength="8">\n  ',
                              '\n          \n          <button type="submit" aria-label="Register a new account on Story Day">Register</button>\n        </form>\n        <p>Already have an account? <a href="#/login">Login</a></p>\n      </section>\n    '
                            )
                          );
                        case 1:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )();
            },
            afterRender: function () {
              var t = this;
              return N(
                T().mark(function r() {
                  return T().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          (t.presenter = new E(t)),
                            document
                              .getElementById('register-form')
                              .addEventListener('submit', function (r) {
                                r.preventDefault();
                                var e = document
                                    .getElementById('name')
                                    .value.trim(),
                                  n = document
                                    .getElementById('email')
                                    .value.trim(),
                                  o = document.getElementById('password').value;
                                e.length < 2
                                  ? t.showError(
                                      'Name must be at least 2 characters.'
                                    )
                                  : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(n)
                                  ? o.length < 8
                                    ? t.showError(
                                        'Password must be at least 8 characters.'
                                      )
                                    : t.presenter.handleRegister(e, n, o)
                                  : t.showError('Invalid email format.');
                              });
                        case 2:
                        case 'end':
                          return r.stop();
                      }
                  }, r);
                })
              )();
            },
            navigateToLogin: function () {
              window.location.hash = '#/login';
            },
            showError: function (t) {
              alert('Error: '.concat(t));
            },
            showSuccess: function (t) {
              alert('Success: '.concat(t));
            },
          },
          F = e(148);
        function A(t) {
          return (
            (A =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            A(t)
          );
        }
        function B() {
          B = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == A(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(A(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function M(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function D(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                M(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                M(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        var R = 'stories';
        function C() {
          return U.apply(this, arguments);
        }
        function U() {
          return (U = D(
            B().mark(function t() {
              return B().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      return (
                        console.log('📂 Opening IndexedDB...'),
                        t.abrupt(
                          'return',
                          (0, F.P2)('story-db', 1, {
                            upgrade: function (t) {
                              t.objectStoreNames.contains(R) ||
                                (console.log('🆕 Creating object store:', R),
                                t.createObjectStore(R, { keyPath: 'id' }));
                            },
                          })
                        )
                      );
                    case 2:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        var H = function (t) {
            return D(
              B().mark(function r() {
                var e;
                return B().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.prev = 0), (r.next = 3), C();
                        case 3:
                          return (e = r.sent), (r.next = 6), e.put(R, t);
                        case 6:
                          console.log('✅ Story saved:', t), (r.next = 12);
                          break;
                        case 9:
                          (r.prev = 9),
                            (r.t0 = r.catch(0)),
                            console.error('❌ Failed to save story:', r.t0);
                        case 12:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          W = function () {
            return D(
              B().mark(function t() {
                var r, e;
                return B().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), C();
                        case 3:
                          return (r = t.sent), (t.next = 6), r.getAll(R);
                        case 6:
                          return (
                            (e = t.sent),
                            console.log('📥 Retrieved stories:', e),
                            t.abrupt('return', e)
                          );
                        case 11:
                          return (
                            (t.prev = 11),
                            (t.t0 = t.catch(0)),
                            console.error('❌ Failed to get stories:', t.t0),
                            t.abrupt('return', [])
                          );
                        case 15:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 11]]
                );
              })
            )();
          },
          Y = function (t) {
            return D(
              B().mark(function r() {
                var e;
                return B().wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (r.prev = 0), (r.next = 3), C();
                        case 3:
                          return (e = r.sent), (r.next = 6), e.delete(R, t);
                        case 6:
                          console.log(
                            '🗑️ Story with id '.concat(t, ' deleted')
                          ),
                            (r.next = 12);
                          break;
                        case 9:
                          (r.prev = 9),
                            (r.t0 = r.catch(0)),
                            console.error(
                              '❌ Failed to delete story '.concat(t, ':'),
                              r.t0
                            );
                        case 12:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            )();
          },
          q = function () {
            return D(
              B().mark(function t() {
                var r;
                return B().wrap(
                  function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.prev = 0), (t.next = 3), C();
                        case 3:
                          return (r = t.sent), (t.next = 6), r.clear(R);
                        case 6:
                          console.log('🚮 All stories cleared'), (t.next = 12);
                          break;
                        case 9:
                          (t.prev = 9),
                            (t.t0 = t.catch(0)),
                            console.error('❌ Failed to clear stories:', t.t0);
                        case 12:
                        case 'end':
                          return t.stop();
                      }
                  },
                  t,
                  null,
                  [[0, 9]]
                );
              })
            )();
          };
        function V(t) {
          return (
            (V =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            V(t)
          );
        }
        function z() {
          z = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == V(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(V(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function J(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function $(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                J(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                J(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function K(t, r) {
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, Q(n.key), n);
          }
        }
        function Q(t) {
          var r = (function (t, r) {
            if ('object' != V(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, r || 'default');
              if ('object' != V(n)) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(t);
          })(t, 'string');
          return 'symbol' == V(r) ? r : r + '';
        }
        var Z = 'https://story-api.dicoding.dev/v1',
          X = 'cachedStories',
          tt = (function () {
            return (function (t, r, e) {
              return (
                r && K(t.prototype, r),
                e && K(t, e),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                t
              );
            })(
              function t() {
                !(function (t, r) {
                  if (!(t instanceof r))
                    throw new TypeError('Cannot call a class as a function');
                })(this, t);
              },
              null,
              [
                {
                  key: 'getStorys',
                  value:
                    ((r = $(
                      z().mark(function t() {
                        var r, e, n, o, i, a;
                        return z().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (r = y.getToken()),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    fetch(''.concat(Z, '/stories'), {
                                      headers: {
                                        Authorization: 'Bearer '.concat(r),
                                      },
                                    })
                                  );
                                case 4:
                                  if ((e = t.sent).ok) {
                                    t.next = 7;
                                    break;
                                  }
                                  throw new Error('Failed to fetch from API');
                                case 7:
                                  return (t.next = 9), e.json();
                                case 9:
                                  return (
                                    (n = t.sent),
                                    (o = n.listStory || []),
                                    (i = o.map(function (t) {
                                      return {
                                        id: t.id,
                                        description:
                                          t.description || 'No Description',
                                        image: t.photoUrl,
                                        uploader: t.name || 'Anonim',
                                        createdAt: t.createdAt || '',
                                        location: {
                                          lat: t.lat || 0,
                                          lng: t.lon || 0,
                                        },
                                        isLocal: !1,
                                      };
                                    })),
                                    localStorage.setItem(X, JSON.stringify(i)),
                                    (t.next = 15),
                                    Promise.all(
                                      i.map(function (t) {
                                        return H(t);
                                      })
                                    )
                                  );
                                case 15:
                                  return t.abrupt('return', i);
                                case 18:
                                  return (
                                    (t.prev = 18),
                                    (t.t0 = t.catch(1)),
                                    console.error(
                                      'Failed to fetch data from API:',
                                      t.t0.message
                                    ),
                                    (a =
                                      JSON.parse(localStorage.getItem(X)) ||
                                      []),
                                    t.abrupt('return', a)
                                  );
                                case 23:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[1, 18]]
                        );
                      })
                    )),
                    function () {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: 'addStory',
                  value:
                    ((t = $(
                      z().mark(function t(r) {
                        var e, n, o, i, a, u, c, s, f, l, h;
                        return z().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (e = r.description),
                                    (n = r.photo),
                                    (o = r.lat),
                                    (i = r.lon),
                                    (a = y.getToken()),
                                    (u = new FormData()).append(
                                      'description',
                                      e
                                    ),
                                    u.append('photo', n),
                                    o &&
                                      i &&
                                      (u.append('lat', o), u.append('lon', i)),
                                    (t.prev = 6),
                                    (t.next = 9),
                                    fetch(''.concat(Z, '/stories'), {
                                      method: 'POST',
                                      headers: {
                                        Authorization: 'Bearer '.concat(a),
                                      },
                                      body: u,
                                    })
                                  );
                                case 9:
                                  return (s = t.sent), (t.next = 12), s.json();
                                case 12:
                                  if (((f = t.sent), s.ok)) {
                                    t.next = 15;
                                    break;
                                  }
                                  throw new Error(
                                    f.message || 'Failed to add data'
                                  );
                                case 15:
                                  return (
                                    (l = {
                                      id:
                                        (null === (c = f.story) || void 0 === c
                                          ? void 0
                                          : c.id) || Date.now(),
                                      description: e,
                                      image: '[uploaded]',
                                      uploader: 'You',
                                      createdAt: new Date().toISOString(),
                                      location: { lat: o || 0, lng: i || 0 },
                                      isLocal: !0,
                                    }),
                                    (h =
                                      JSON.parse(localStorage.getItem(X)) ||
                                      []).push(l),
                                    localStorage.setItem(X, JSON.stringify(h)),
                                    (t.next = 21),
                                    H(l)
                                  );
                                case 21:
                                  return t.abrupt('return', f);
                                case 24:
                                  throw (
                                    ((t.prev = 24),
                                    (t.t0 = t.catch(6)),
                                    console.error('Add Story Error:', t.t0),
                                    new Error('Failed to add story data'))
                                  );
                                case 28:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          null,
                          [[6, 24]]
                        );
                      })
                    )),
                    function (r) {
                      return t.apply(this, arguments);
                    }),
                },
              ]
            );
            var t, r;
          })();
        function rt(t) {
          return (
            (rt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            rt(t)
          );
        }
        function et() {
          et = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == rt(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(rt(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function nt(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function ot(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                nt(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                nt(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function it(t, r) {
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, at(n.key), n);
          }
        }
        function at(t) {
          var r = (function (t, r) {
            if ('object' != rt(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, r || 'default');
              if ('object' != rt(n)) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(t);
          })(t, 'string');
          return 'symbol' == rt(r) ? r : r + '';
        }
        var ut = (function () {
            return (function (t, r, e) {
              return (
                r && it(t.prototype, r),
                e && it(t, e),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                t
              );
            })(
              function t(r) {
                !(function (t, r) {
                  if (!(t instanceof r))
                    throw new TypeError('Cannot call a class as a function');
                })(this, t),
                  (this.view = r);
              },
              [
                {
                  key: 'isAuthenticated',
                  value: function () {
                    return y.isLoggedIn();
                  },
                },
                {
                  key: 'logout',
                  value: function () {
                    y.logout(), this.view.redirectToLogin();
                  },
                },
                {
                  key: 'loadStorysAndMap',
                  value:
                    ((e = ot(
                      et().mark(function t() {
                        var r;
                        return et().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (t.prev = 0), (t.next = 3), tt.getStorys()
                                  );
                                case 3:
                                  (r = t.sent),
                                    this.view.renderStorys(r),
                                    this.view.showMap(r),
                                    (t.next = 11);
                                  break;
                                case 8:
                                  (t.prev = 8),
                                    (t.t0 = t.catch(0)),
                                    this.view.showError(
                                      'Failed to load story data.'
                                    );
                                case 11:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 8]]
                        );
                      })
                    )),
                    function () {
                      return e.apply(this, arguments);
                    }),
                },
                {
                  key: 'getStorys',
                  value:
                    ((r = ot(
                      et().mark(function t() {
                        var r;
                        return et().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (((t.prev = 0), y.isLoggedIn())) {
                                    t.next = 5;
                                    break;
                                  }
                                  return (
                                    this.view.showError(
                                      'Session has expired. Please re-login..'
                                    ),
                                    this.view.redirectToLogin(),
                                    t.abrupt('return', [])
                                  );
                                case 5:
                                  return (t.next = 7), tt.getStorys();
                                case 7:
                                  return (
                                    (r = t.sent) && r.length > 0
                                      ? this.view.renderStorys(r)
                                      : this.view.showError(
                                          'No story data found.'
                                        ),
                                    t.abrupt('return', r)
                                  );
                                case 12:
                                  return (
                                    (t.prev = 12),
                                    (t.t0 = t.catch(0)),
                                    this.view.showError(
                                      t.t0.message ||
                                        'An error occurred while retrieving story data.'
                                    ),
                                    t.abrupt('return', [])
                                  );
                                case 16:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[0, 12]]
                        );
                      })
                    )),
                    function () {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: 'submitStory',
                  value:
                    ((t = ot(
                      et().mark(function t(r) {
                        var e, n, o, i;
                        return et().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  return (
                                    (e = r.description),
                                    (n = r.photo),
                                    (o = r.lat),
                                    (i = r.lon),
                                    (t.prev = 1),
                                    (t.next = 4),
                                    tt.addStory({
                                      description: e,
                                      photo: n,
                                      lat: o,
                                      lon: i,
                                    })
                                  );
                                case 4:
                                  this.view.showSuccess(
                                    'Story added successfully!'
                                  ),
                                    (t.next = 10);
                                  break;
                                case 7:
                                  (t.prev = 7),
                                    (t.t0 = t.catch(1)),
                                    this.view.showError(
                                      t.t0.message || 'Failed to add story.'
                                    );
                                case 10:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this,
                          [[1, 7]]
                        );
                      })
                    )),
                    function (r) {
                      return t.apply(this, arguments);
                    }),
                },
              ]
            );
            var t, r, e;
          })(),
          ct = function () {
            if (!document.getElementById('spinner')) {
              var t = document.createElement('div');
              (t.id = 'spinner'),
                (t.innerHTML =
                  '\n        <div class="spinner-overlay">\n          <div class="loader"></div>\n        </div>\n      '),
                document.body.appendChild(t);
            }
          },
          st = function () {
            var t = document.getElementById('spinner');
            t && t.remove();
          };
        function ft(t) {
          return (
            (ft =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            ft(t)
          );
        }
        function lt() {
          lt = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == ft(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(ft(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function ht(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function pt(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                ht(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                ht(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function dt(t, r) {
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, yt(n.key), n);
          }
        }
        function yt(t) {
          var r = (function (t, r) {
            if ('object' != ft(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, r || 'default');
              if ('object' != ft(n)) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(t);
          })(t, 'string');
          return 'symbol' == ft(r) ? r : r + '';
        }
        var vt,
          gt = (function () {
            return (function (t, r, e) {
              return (
                r && dt(t.prototype, r),
                e && dt(t, e),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                t
              );
            })(
              function t() {
                !(function (t, r) {
                  if (!(t instanceof r))
                    throw new TypeError('Cannot call a class as a function');
                })(this, t),
                  (this.presenter = new ut(this));
              },
              [
                {
                  key: 'render',
                  value:
                    ((r = pt(
                      lt().mark(function t() {
                        return lt().wrap(function (t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return t.abrupt(
                                  'return',
                                  '\n      <section class="home-section">\n        <h2 id="story-heading">Today\'s Story</h2>\n        <div id="global-map" class="story-map" style="height: 400px; margin-bottom: 2rem;" role="application" aria-label="Story location map"></div>\n        <div class="story-grid" id="story-list-container" aria-labelledby="story-heading"></div>\n      </section>\n    '
                                );
                              case 1:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      })
                    )),
                    function () {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: 'afterRender',
                  value:
                    ((t = pt(
                      lt().mark(function t() {
                        return lt().wrap(
                          function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (this.presenter.isAuthenticated()) {
                                    t.next = 3;
                                    break;
                                  }
                                  return (
                                    this.redirectToLogin(), t.abrupt('return')
                                  );
                                case 3:
                                  return (
                                    ct(),
                                    (t.next = 6),
                                    this.presenter.loadStorysAndMap()
                                  );
                                case 6:
                                  st(),
                                    this.updateNavbar(),
                                    this.setupThemeToggle();
                                case 9:
                                case 'end':
                                  return t.stop();
                              }
                          },
                          t,
                          this
                        );
                      })
                    )),
                    function () {
                      return t.apply(this, arguments);
                    }),
                },
                {
                  key: 'renderStorys',
                  value: function (t) {
                    var r = t
                        .map(function (t) {
                          return '\n          <div class="story-card" tabindex="0" aria-label="Story by '
                            .concat(t.uploader, ' on ')
                            .concat(t.createdAt, '">\n            <img src="')
                            .concat(
                              t.image,
                              '" alt="Story photo">\n            <p>'
                            )
                            .concat(
                              t.description,
                              '</p>\n            <p><strong>Uploader:</strong> '
                            )
                            .concat(
                              t.uploader,
                              '</p>\n            <p><strong>Created:</strong> '
                            )
                            .concat(
                              new Date(t.createdAt).toLocaleString(),
                              '</p>\n          </div>\n        '
                            );
                        })
                        .join(''),
                      e = document.getElementById('story-list-container');
                    e && (e.innerHTML = r);
                  },
                },
                {
                  key: 'showMap',
                  value: function (t) {
                    var r = document.getElementById('global-map');
                    if (r && 0 !== t.length) {
                      r._leaflet_id && (r._leaflet_id = null);
                      var e = t.find(function (t) {
                        var r, e;
                        return (
                          (null === (r = t.location) || void 0 === r
                            ? void 0
                            : r.lat) &&
                          (null === (e = t.location) || void 0 === e
                            ? void 0
                            : e.lng)
                        );
                      });
                      if (e) {
                        var n = L.map('global-map').setView(
                          [e.location.lat, e.location.lng],
                          13
                        );
                        L.tileLayer(
                          'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                          { attribution: '&copy; OpenStreetMap contributors' }
                        ).addTo(n);
                        var o = [];
                        t.forEach(function (t) {
                          var r, e;
                          if (
                            null !== (r = t.location) &&
                            void 0 !== r &&
                            r.lat &&
                            null !== (e = t.location) &&
                            void 0 !== e &&
                            e.lng
                          ) {
                            var i = [t.location.lat, t.location.lng];
                            o.push(i),
                              L.marker(i)
                                .addTo(n)
                                .bindPopup(
                                  '\n            <b>'
                                    .concat(
                                      t.uploader,
                                      '</b><br>\n            '
                                    )
                                    .concat(t.description, '<br>\n            ')
                                    .concat(
                                      new Date(t.createdAt).toLocaleString(),
                                      '\n          '
                                    )
                                );
                          }
                        }),
                          o.length > 0 && n.fitBounds(o);
                      }
                    }
                  },
                },
                {
                  key: 'updateNavbar',
                  value: function () {
                    var t,
                      r = this,
                      e = document.getElementById('nav');
                    e &&
                      ((e.innerHTML =
                        '\n        <a href="#/home" class="logo" aria-label="Beranda Story Day">\n          <img src="./asset/logo.png" alt="Logo StoryDay" width="40" height="40">\n        </a>\n        <ul id="nav-links">\n          <li><a href="#/home">Home</a></li>\n          <li><a href="#/add">Add Story</a></li>\n          <li><a href="#/mystory">My Story</a></li>\n        </ul>\n      '),
                      null === (t = document.getElementById('logout-btn')) ||
                        void 0 === t ||
                        t.addEventListener('click', function (t) {
                          t.preventDefault(), r.presenter.logout();
                        }));
                  },
                },
                {
                  key: 'setupThemeToggle',
                  value: function () {
                    var t = document.getElementById('theme-toggle');
                    t &&
                      t.addEventListener('click', function () {
                        document.body.classList.toggle('dark'),
                          localStorage.setItem(
                            'theme',
                            document.body.classList.contains('dark')
                              ? 'dark'
                              : 'light'
                          );
                      });
                  },
                },
                {
                  key: 'showError',
                  value: function (t) {
                    alert('Error: '.concat(t));
                  },
                },
                {
                  key: 'showSuccess',
                  value: function (t) {
                    alert('Success: '.concat(t));
                  },
                },
                {
                  key: 'redirectToLogin',
                  value: function () {
                    location.hash = '#/login';
                  },
                },
              ]
            );
            var t, r;
          })();
        function mt(t) {
          return (
            (mt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            mt(t)
          );
        }
        function wt(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return bt(t);
            })(t) ||
            (function (t) {
              if (
                ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t['@@iterator']
              )
                return Array.from(t);
            })(t) ||
            (function (t, r) {
              if (t) {
                if ('string' == typeof t) return bt(t, r);
                var e = {}.toString.call(t).slice(8, -1);
                return (
                  'Object' === e && t.constructor && (e = t.constructor.name),
                  'Map' === e || 'Set' === e
                    ? Array.from(t)
                    : 'Arguments' === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? bt(t, r)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function bt(t, r) {
          (null == r || r > t.length) && (r = t.length);
          for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
          return n;
        }
        function xt() {
          xt = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == mt(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(mt(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function Et(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function kt(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                Et(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                Et(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function St(t, r) {
          for (var e = 0; e < r.length; e++) {
            var n = r[e];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              'value' in n && (n.writable = !0),
              Object.defineProperty(t, Ot(n.key), n);
          }
        }
        function Ot(t) {
          var r = (function (t, r) {
            if ('object' != mt(t) || !t) return t;
            var e = t[Symbol.toPrimitive];
            if (void 0 !== e) {
              var n = e.call(t, r || 'default');
              if ('object' != mt(n)) return n;
              throw new TypeError(
                '@@toPrimitive must return a primitive value.'
              );
            }
            return ('string' === r ? String : Number)(t);
          })(t, 'string');
          return 'symbol' == mt(r) ? r : r + '';
        }
        function _t(t, r, e) {
          jt(t, r), r.set(t, e);
        }
        function jt(t, r) {
          if (r.has(t))
            throw new TypeError(
              'Cannot initialize the same private elements twice on an object'
            );
        }
        function Pt(t, r) {
          return t.get(It(t, r));
        }
        function Tt(t, r, e) {
          return t.set(It(t, r), e), e;
        }
        function It(t, r, e) {
          if ('function' == typeof t ? t === r : t.has(r))
            return arguments.length < 3 ? r : e;
          throw new TypeError('Private element is not present on this object');
        }
        var Nt = new WeakMap(),
          Gt = new WeakMap(),
          Ft = new WeakMap(),
          At = new WeakMap(),
          Lt = new WeakMap(),
          Bt = new WeakSet(),
          Mt = (function () {
            function t(r) {
              var e = r.video,
                n = r.cameraSelect,
                o = r.canvas;
              r.options;
              !(function (t, r) {
                if (!(t instanceof r))
                  throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (function (t, r) {
                  jt(t, r), r.add(t);
                })(this, Bt),
                _t(this, Nt, void 0),
                _t(this, Gt, void 0),
                _t(this, Ft, void 0),
                _t(this, At, void 0),
                _t(this, Lt, void 0),
                Tt(Gt, this, e),
                Tt(Ft, this, n),
                Tt(At, this, o),
                It(Bt, this, Ct).call(this);
            }
            return (function (t, r, e) {
              return (
                r && St(t.prototype, r),
                e && St(t, e),
                Object.defineProperty(t, 'prototype', { writable: !1 }),
                t
              );
            })(
              t,
              [
                {
                  key: 'launch',
                  value:
                    ((r = kt(
                      xt().mark(function r() {
                        return xt().wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (r.t0 = Tt),
                                    (r.t1 = Nt),
                                    (r.t2 = this),
                                    (r.next = 5),
                                    It(Bt, this, Dt).call(this)
                                  );
                                case 5:
                                  return (
                                    (r.t3 = r.sent),
                                    (0, r.t0)(r.t1, r.t2, r.t3),
                                    t.addNewStream(Pt(Nt, this)),
                                    (Pt(Gt, this).srcObject = Pt(Nt, this)),
                                    (r.next = 11),
                                    Pt(Gt, this).play()
                                  );
                                case 11:
                                  It(Bt, this, Ut).call(this);
                                case 12:
                                case 'end':
                                  return r.stop();
                              }
                          },
                          r,
                          this
                        );
                      })
                    )),
                    function () {
                      return r.apply(this, arguments);
                    }),
                },
                {
                  key: 'addCheeseButtonListener',
                  value: function (t, r) {
                    var e = document.querySelector(t);
                    e &&
                      (Tt(Lt, this, e),
                      Pt(Lt, this).addEventListener(
                        'click',
                        kt(
                          xt().mark(function t() {
                            return xt().wrap(function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    if ('function' != typeof r) {
                                      t.next = 3;
                                      break;
                                    }
                                    return (t.next = 3), r();
                                  case 3:
                                  case 'end':
                                    return t.stop();
                                }
                            }, t);
                          })
                        )
                      ));
                  },
                },
                {
                  key: 'takePicture',
                  value: function () {
                    var t = Pt(At, this).getContext('2d'),
                      r = Pt(Gt, this).videoWidth,
                      e = Pt(Gt, this).videoHeight;
                    return r && e
                      ? ((Pt(At, this).width = r),
                        (Pt(At, this).height = e),
                        t.drawImage(Pt(Gt, this), 0, 0, r, e),
                        Pt(At, this).toDataURL('image/jpeg'))
                      : null;
                  },
                },
              ],
              [
                {
                  key: 'addNewStream',
                  value: function (t) {
                    Array.isArray(window.currentStreams)
                      ? (window.currentStreams = [].concat(
                          wt(window.currentStreams),
                          [t]
                        ))
                      : (window.currentStreams = [t]);
                  },
                },
                {
                  key: 'stopAllStreams',
                  value: function () {
                    Array.isArray(window.currentStreams)
                      ? window.currentStreams.forEach(function (t) {
                          t.active &&
                            t.getTracks().forEach(function (t) {
                              return t.stop();
                            });
                        })
                      : (window.currentStreams = []);
                  },
                },
              ]
            );
            var r;
          })();
        function Dt() {
          return Rt.apply(this, arguments);
        }
        function Rt() {
          return (Rt = kt(
            xt().mark(function t() {
              var r;
              return xt().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (!Pt(Ft, this)) {
                          t.next = 5;
                          break;
                        }
                        return (
                          (r = Pt(Ft, this).value),
                          (t.next = 4),
                          navigator.mediaDevices.getUserMedia({
                            video: !r || { deviceId: { exact: r } },
                            audio: !1,
                          })
                        );
                      case 4:
                      case 7:
                        return t.abrupt('return', t.sent);
                      case 5:
                        return (
                          (t.next = 7),
                          navigator.mediaDevices.getUserMedia({
                            video: !0,
                            audio: !1,
                          })
                        );
                      case 8:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                this
              );
            })
          )).apply(this, arguments);
        }
        function Ct() {
          var t = this;
          Pt(Ft, this) &&
            Pt(Ft, this).addEventListener(
              'change',
              kt(
                xt().mark(function r() {
                  return xt().wrap(function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return vt.stopAllStreams(), (r.next = 3), t.launch();
                        case 3:
                        case 'end':
                          return r.stop();
                      }
                  }, r);
                })
              )
            );
        }
        function Ut() {
          var t = Pt(At, this).getContext('2d');
          (t.fillStyle = '#ccc'),
            t.fillRect(0, 0, Pt(At, this).width, Pt(At, this).height);
        }
        function Ht(t) {
          return (
            (Ht =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            Ht(t)
          );
        }
        function Wt() {
          Wt = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == Ht(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(Ht(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function Yt(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function qt(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                Yt(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                Yt(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        vt = Mt;
        var Vt = {
          render: function () {
            return qt(
              Wt().mark(function t() {
                return Wt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          'return',
                          '\n      <section class="add-section">\n      <h2 id="add-story-heading">Add Story</h2>\n      <form id="add-form" aria-labelledby="add-story-heading">\n          '.concat(
                            '\n    <label for="description">Story Description</label>\n    <textarea id="description" name="description" required minlength="10" placeholder="Write story description here..."></textarea>\n  ',
                            '\n          \n          <p id="photo-label"><strong>Story Photo</strong></p>\n          <button type="button" id="open-camera" aria-labelledby="photo-label">Open Camera</button>\n          <button type="button" id="take-photo" style="display:none; margin-top: 10px;" aria-label="Take photo">Take Photo</button>\n\n          <video id="camera-stream" autoplay playsinline style="display:none; width:100%; max-height:300px; border:1px solid #ccc;" aria-label="Camera preview"></video>\n          <canvas id="snapshot" style="display:none;"></canvas>\n          <input type="hidden" id="image" name="image">\n                    \n\n          <p id="map-desc">Click on the map to select a story location:</p>\n          <div id="map" style="height: 300px;" aria-describedby="map-desc" role="application"></div>\n          <input type="hidden" id="latitude" name="latitude">\n          <input type="hidden" id="longitude" name="longitude">\n\n          <button type="submit" aria-label="Add story to Story Day">Add Story</button>\n        </form>\n      </section>\n    '
                          )
                        );
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          afterRender: function () {
            var t = this;
            return qt(
              Wt().mark(function r() {
                var e;
                return Wt().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((t.presenter = new ut(t)),
                          t.presenter.isAuthenticated())
                        ) {
                          r.next = 4;
                          break;
                        }
                        return t.redirectToLogin(), r.abrupt('return');
                      case 4:
                        t.renderMap(),
                          t.initCamera(),
                          t.handleSubmit(),
                          t.updateNavbar(),
                          null ===
                            (e = document.getElementById('theme-toggle')) ||
                            void 0 === e ||
                            e.addEventListener('click', function () {
                              document.body.classList.toggle('dark'),
                                localStorage.setItem(
                                  'theme',
                                  document.body.classList.contains('dark')
                                    ? 'dark'
                                    : 'light'
                                );
                            });
                      case 9:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          renderMap: function () {
            var t = this;
            delete L.Icon.Default.prototype._getIconUrl,
              L.Icon.Default.mergeOptions({
                iconRetinaUrl:
                  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
                iconUrl:
                  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
                shadowUrl:
                  'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
              });
            var r,
              e = L.map('map').setView([-6.2, 106.816666], 10);
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '© OpenStreetMap contributors',
            }).addTo(e),
              e.on('click', function (n) {
                var o = n.latlng,
                  i = o.lat,
                  a = o.lng;
                (document.getElementById('latitude').value = i),
                  (document.getElementById('longitude').value = a),
                  r ? r.setLatLng(n.latlng) : (r = L.marker(n.latlng).addTo(e)),
                  t.updatePopup(r),
                  e.setView(n.latlng, e.getZoom());
              }),
              document
                .getElementById('description')
                .addEventListener('input', function () {
                  t.updatePopup(r);
                });
          },
          updatePopup: function (t) {
            if (t) {
              var r =
                document.getElementById('description').value ||
                'Tanpa Deskripsi';
              t.bindPopup('<strong>'.concat(r, '</strong>')).openPopup();
            }
          },
          initCamera: function () {
            var t = document.getElementById('open-camera'),
              r = document.getElementById('take-photo'),
              e = document.getElementById('camera-stream'),
              n = document.getElementById('snapshot'),
              o = document.getElementById('image'),
              i = new Mt({ video: e, canvas: n });
            t.addEventListener(
              'click',
              qt(
                Wt().mark(function t() {
                  return Wt().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          return (t.next = 2), i.launch();
                        case 2:
                          (e.style.display = 'block'),
                            (n.style.display = 'none'),
                            (r.style.display = 'inline-block');
                        case 5:
                        case 'end':
                          return t.stop();
                      }
                  }, t);
                })
              )
            ),
              i.addCheeseButtonListener(
                '#take-photo',
                qt(
                  Wt().mark(function t() {
                    var a;
                    return Wt().wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            (a = i.takePicture()),
                              (o.value = a),
                              (n.style.display = 'block'),
                              (e.style.display = 'none'),
                              (r.style.display = 'none'),
                              Mt.stopAllStreams();
                          case 6:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                )
              );
          },
          handleSubmit: function () {
            var t = this;
            document.getElementById('add-form').addEventListener(
              'submit',
              (function () {
                var r = qt(
                  Wt().mark(function r(e) {
                    var n, o, i, a, u, c, s;
                    return Wt().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (
                              (e.preventDefault(),
                              (n = document
                                .getElementById('description')
                                .value.trim()),
                              (o = document.getElementById('image').value),
                              (i = document.getElementById('latitude').value),
                              (a = document.getElementById('longitude').value),
                              !(n.length < 10))
                            ) {
                              r.next = 7;
                              break;
                            }
                            return r.abrupt(
                              'return',
                              alert(
                                'Description must be at least 10 characters.'
                              )
                            );
                          case 7:
                            if (o) {
                              r.next = 9;
                              break;
                            }
                            return r.abrupt(
                              'return',
                              alert('Please take a photo first.')
                            );
                          case 9:
                            if (i && a) {
                              r.next = 11;
                              break;
                            }
                            return r.abrupt(
                              'return',
                              alert('Please select a location on the map.')
                            );
                          case 11:
                            return (
                              (r.next = 13),
                              fetch(o).then(function (t) {
                                return t.blob();
                              })
                            );
                          case 13:
                            return (
                              (u = r.sent),
                              (c = new File([u], 'story.jpg', {
                                type: 'image/jpeg',
                              })),
                              (s = {
                                description: n,
                                photo: c,
                                lat: parseFloat(i),
                                lon: parseFloat(a),
                              }),
                              ct(),
                              (r.next = 19),
                              t.presenter.submitStory(s)
                            );
                          case 19:
                            if ((st(), 'granted' !== Notification.permission)) {
                              r.next = 25;
                              break;
                            }
                            return (r.next = 23), navigator.serviceWorker.ready;
                          case 23:
                            r.sent.showNotification('🎉 Story added!', {
                              body: 'Your story has been submitted successfully.',
                              icon: './asset/icons/logo.png',
                              badge: './asset/favicon.png',
                              data: { url: '#/home' },
                            });
                          case 25:
                          case 'end':
                            return r.stop();
                        }
                    }, r);
                  })
                );
                return function (t) {
                  return r.apply(this, arguments);
                };
              })()
            );
          },
          updateNavbar: function () {
            var t,
              r = this;
            (document.querySelector('nav').innerHTML =
              '\n      <ul id="nav-links">\n        <li><a href="#/home">Home</a></li>\n        <li><a href="#/add">Add Story</a></li>\n        <li><a href="#/mystory">My Story</a></li>\n      </ul>\n    '),
              null === (t = document.getElementById('logout-btn')) ||
                void 0 === t ||
                t.addEventListener('click', function (t) {
                  t.preventDefault(), r.presenter.logout();
                });
          },
          showSuccess: function (t) {
            alert('Success: '.concat(t)), (location.hash = '#/home');
          },
          showError: function (t) {
            alert('Error: '.concat(t));
          },
          redirectToLogin: function () {
            location.hash = '#/login';
          },
        };
        function zt(t) {
          return (
            (zt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            zt(t)
          );
        }
        function Jt() {
          Jt = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == zt(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(zt(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function $t(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function Kt(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                $t(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                $t(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        var Qt = {
          render: function () {
            return Kt(
              Jt().mark(function t() {
                return Jt().wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return t.abrupt(
                          'return',
                          '\n      <section class="my-story">\n        <h2>📦 My Saved Stories (Offline)</h2>\n        <div id="story-list" class="story-scroll-list"></div>\n        <button id="clear-all-btn" style="margin-top:1rem;">🗑 Clear All Stories</button>\n      </section>\n    '
                        );
                      case 1:
                      case 'end':
                        return t.stop();
                    }
                }, t);
              })
            )();
          },
          afterRender: function () {
            var t = this;
            return Kt(
              Jt().mark(function r() {
                var e, n;
                return Jt().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        return (
                          (e = document.getElementById('story-list')),
                          (r.next = 3),
                          W()
                        );
                      case 3:
                        if ((n = r.sent) && 0 !== n.length) {
                          r.next = 7;
                          break;
                        }
                        return (
                          (e.innerHTML = '<p>No stories saved offline.</p>'),
                          r.abrupt('return')
                        );
                      case 7:
                        (e.innerHTML = n
                          .map(function (t) {
                            return '\n      <article class="story-card horizontal-card">\n        <img src="'
                              .concat(
                                t.image || 'default.jpg',
                                '" alt="Story Image" />\n        <div class="story-content">\n          <h3>'
                              )
                              .concat(
                                t.uploader || 'Anonim',
                                '</h3>\n          <p>'
                              )
                              .concat(
                                t.description,
                                '</p>\n          <p><small>'
                              )
                              .concat(
                                new Date(t.createdAt).toLocaleString(),
                                '</small></p>\n          <button data-id="'
                              )
                              .concat(
                                t.id,
                                '" class="delete-btn">🗑 Delete</button>\n        </div>\n      </article>\n    '
                              );
                          })
                          .join('')),
                          document
                            .querySelectorAll('.delete-btn')
                            .forEach(function (r) {
                              r.addEventListener(
                                'click',
                                Kt(
                                  Jt().mark(function e() {
                                    return Jt().wrap(function (e) {
                                      for (;;)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (
                                              (e.next = 2), Y(r.dataset.id)
                                            );
                                          case 2:
                                            t.afterRender();
                                          case 3:
                                          case 'end':
                                            return e.stop();
                                        }
                                    }, e);
                                  })
                                )
                              );
                            }),
                          document
                            .getElementById('clear-all-btn')
                            .addEventListener(
                              'click',
                              Kt(
                                Jt().mark(function r() {
                                  return Jt().wrap(function (r) {
                                    for (;;)
                                      switch ((r.prev = r.next)) {
                                        case 0:
                                          return (r.next = 2), q();
                                        case 2:
                                          t.afterRender();
                                        case 3:
                                        case 'end':
                                          return r.stop();
                                      }
                                  }, r);
                                })
                              )
                            );
                      case 10:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
        };
        function Zt(t) {
          return (
            (Zt =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            Zt(t)
          );
        }
        function Xt() {
          Xt = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == Zt(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(Zt(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function tr(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function rr(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                tr(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                tr(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        var er = {
          init: function () {
            window.addEventListener('hashchange', this.handleRoute.bind(this)),
              this.handleRoute();
          },
          handleRoute: function () {
            var t = this;
            return rr(
              Xt().mark(function r() {
                var e, n;
                return Xt().wrap(function (r) {
                  for (;;)
                    switch ((r.prev = r.next)) {
                      case 0:
                        if (
                          ((e = window.location.hash || '#/login'),
                          (n = document.getElementById('main-content')))
                        ) {
                          r.next = 5;
                          break;
                        }
                        return (
                          console.error('main-content element not found'),
                          r.abrupt('return')
                        );
                      case 5:
                        if (!document.startViewTransition) {
                          r.next = 10;
                          break;
                        }
                        return (
                          (r.next = 8),
                          document.startViewTransition(function () {
                            return t.renderView(e, n);
                          })
                        );
                      case 8:
                        r.next = 12;
                        break;
                      case 10:
                        return (r.next = 12), t.renderView(e, n);
                      case 12:
                        Mt.stopAllStreams();
                      case 13:
                      case 'end':
                        return r.stop();
                    }
                }, r);
              })
            )();
          },
          renderView: function (t, r) {
            return rr(
              Xt().mark(function e() {
                var n;
                return Xt().wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (e.t0 = t),
                          (e.next =
                            '#/login' === e.t0
                              ? 3
                              : '#/register' === e.t0
                              ? 8
                              : '#/home' === e.t0
                              ? 13
                              : '#/add' === e.t0
                              ? 21
                              : '#/mystory' === e.t0
                              ? 28
                              : 33);
                        break;
                      case 3:
                        return (e.next = 5), j.render();
                      case 5:
                        return (
                          (r.innerHTML = e.sent),
                          j.afterRender(),
                          e.abrupt('break', 35)
                        );
                      case 8:
                        return (e.next = 10), G.render();
                      case 10:
                        return (
                          (r.innerHTML = e.sent),
                          G.afterRender(),
                          e.abrupt('break', 35)
                        );
                      case 13:
                        if (y.isLoggedIn()) {
                          e.next = 15;
                          break;
                        }
                        return e.abrupt('return', (location.hash = '#/login'));
                      case 15:
                        return (n = new gt()), (e.next = 18), n.render();
                      case 18:
                        return (
                          (r.innerHTML = e.sent),
                          n.afterRender(),
                          e.abrupt('break', 35)
                        );
                      case 21:
                        if (y.isLoggedIn()) {
                          e.next = 23;
                          break;
                        }
                        return e.abrupt('return', (location.hash = '#/login'));
                      case 23:
                        return (e.next = 25), Vt.render();
                      case 25:
                        return (
                          (r.innerHTML = e.sent),
                          Vt.afterRender(),
                          e.abrupt('break', 35)
                        );
                      case 28:
                        return (e.next = 30), Qt.render();
                      case 30:
                        return (
                          (r.innerHTML = e.sent),
                          Qt.afterRender(),
                          e.abrupt('break', 35)
                        );
                      case 33:
                        return (
                          (r.innerHTML =
                            '\n        <section style="padding: 2rem; text-align: center;">\n          <h2>404 - Page Not Found</h2>\n          <p>The page you are looking for does not exist.</p>\n          <a href="#/home" style="display:inline-block;margin-top:1rem;">🔙 Back to Home</a>\n        </section>\n      '),
                          e.abrupt('break', 35)
                        );
                      case 35:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            )();
          },
        };
        function nr(t) {
          return (
            (nr =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            nr(t)
          );
        }
        function or() {
          or = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == nr(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(nr(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function ir(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function ar(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                ir(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                ir(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        function ur(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) return cr(t);
            })(t) ||
            (function (t) {
              if (
                ('undefined' != typeof Symbol && null != t[Symbol.iterator]) ||
                null != t['@@iterator']
              )
                return Array.from(t);
            })(t) ||
            (function (t, r) {
              if (t) {
                if ('string' == typeof t) return cr(t, r);
                var e = {}.toString.call(t).slice(8, -1);
                return (
                  'Object' === e && t.constructor && (e = t.constructor.name),
                  'Map' === e || 'Set' === e
                    ? Array.from(t)
                    : 'Arguments' === e ||
                      /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
                    ? cr(t, r)
                    : void 0
                );
              }
            })(t) ||
            (function () {
              throw new TypeError(
                'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
              );
            })()
          );
        }
        function cr(t, r) {
          (null == r || r > t.length) && (r = t.length);
          for (var e = 0, n = Array(r); e < r; e++) n[e] = t[e];
          return n;
        }
        function sr(t) {
          return fr.apply(this, arguments);
        }
        function fr() {
          return (fr = ar(
            or().mark(function t(r) {
              return or().wrap(function (t) {
                for (;;)
                  switch ((t.prev = t.next)) {
                    case 0:
                      try {
                        console.log(
                          '📡 Subscription sent to server successfully'
                        );
                      } catch (t) {
                        console.error('❌ Failed to send subscription:', t),
                          alert(
                            'Failed to save subscription to server: ' +
                              t.message
                          );
                      }
                    case 1:
                    case 'end':
                      return t.stop();
                  }
              }, t);
            })
          )).apply(this, arguments);
        }
        function lr() {
          return hr.apply(this, arguments);
        }
        function hr() {
          return (hr = ar(
            or().mark(function t() {
              var r, e;
              return or().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        if (
                          'serviceWorker' in navigator &&
                          'PushManager' in window
                        ) {
                          t.next = 2;
                          break;
                        }
                        return t.abrupt('return');
                      case 2:
                        if ('denied' !== Notification.permission) {
                          t.next = 5;
                          break;
                        }
                        return (
                          alert(
                            'You have blocked notifications. Please enable them in your browser settings.'
                          ),
                          t.abrupt('return')
                        );
                      case 5:
                        return (
                          (t.prev = 5),
                          (t.next = 8),
                          navigator.serviceWorker.ready
                        );
                      case 8:
                        return (
                          (r = t.sent),
                          (t.next = 11),
                          r.pushManager.getSubscription()
                        );
                      case 11:
                        if (!t.sent) {
                          t.next = 15;
                          break;
                        }
                        return (
                          console.log('🔔 Already subscribed to push'),
                          t.abrupt('return')
                        );
                      case 15:
                        return (
                          (t.next = 17),
                          r.pushManager.subscribe({
                            userVisibleOnly: !0,
                            applicationServerKey:
                              ((n =
                                'BCCs2eonMI-6H2ctvFaWg-UYdDv387Vno_bzUzALpB442r2lCnsHmtrx8biyPi_E-1fSGABK_Qs_GlvPoJJqxbk'),
                              (o = void 0),
                              (i = void 0),
                              (o = (n + '='.repeat((4 - (n.length % 4)) % 4))
                                .replace(/-/g, '+')
                                .replace(/_/g, '/')),
                              (i = atob(o)),
                              new Uint8Array(
                                ur(i).map(function (t) {
                                  return t.charCodeAt(0);
                                })
                              )),
                          })
                        );
                      case 17:
                        return (
                          (e = t.sent),
                          console.log('🔔 Push subscribed:', e),
                          alert('Push notification subscribed successfully!'),
                          (t.next = 22),
                          sr(e)
                        );
                      case 22:
                        t.next = 28;
                        break;
                      case 24:
                        (t.prev = 24),
                          (t.t0 = t.catch(5)),
                          console.error('❌ Push Notification Error:', t.t0),
                          alert('Failed to subscribe: ' + t.t0.message);
                      case 28:
                      case 'end':
                        return t.stop();
                    }
                  var n, o, i;
                },
                t,
                null,
                [[5, 24]]
              );
            })
          )).apply(this, arguments);
        }
        function pr() {
          return dr.apply(this, arguments);
        }
        function dr() {
          return (dr = ar(
            or().mark(function t() {
              var r, e;
              return or().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          navigator.serviceWorker.ready
                        );
                      case 3:
                        return (
                          (r = t.sent),
                          (t.next = 6),
                          r.pushManager.getSubscription()
                        );
                      case 6:
                        if (!(e = t.sent)) {
                          t.next = 12;
                          break;
                        }
                        return (t.next = 10), e.unsubscribe();
                      case 10:
                        console.log('🔕 Unsubscribed'),
                          alert('Unsubscribed from push notifications.');
                      case 12:
                        t.next = 18;
                        break;
                      case 14:
                        (t.prev = 14),
                          (t.t0 = t.catch(0)),
                          console.error('❌ Unsubscribe Error:', t.t0),
                          alert('Failed to unsubscribe: ' + t.t0.message);
                      case 18:
                      case 'end':
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 14]]
              );
            })
          )).apply(this, arguments);
        }
        var yr = e(481),
          vr = e.n(yr);
        e(927), e(980);
        function gr(t) {
          return (
            (gr =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t;
                  }),
            gr(t)
          );
        }
        function mr() {
          mr = function () {
            return r;
          };
          var t,
            r = {},
            e = Object.prototype,
            n = e.hasOwnProperty,
            o = 'function' == typeof Symbol ? Symbol : {},
            i = o.iterator || '@@iterator',
            a = o.asyncIterator || '@@asyncIterator',
            u = o.toStringTag || '@@toStringTag';
          function c(t, r, e, n) {
            return Object.defineProperty(t, r, {
              value: e,
              enumerable: !n,
              configurable: !n,
              writable: !n,
            });
          }
          try {
            c({}, '');
          } catch (t) {
            c = function (t, r, e) {
              return (t[r] = e);
            };
          }
          function s(r, e, n, o) {
            var i = e && e.prototype instanceof h ? e : h,
              a = Object.create(i.prototype);
            return (
              c(
                a,
                '_invoke',
                (function (r, e, n) {
                  var o = 1;
                  return function (i, a) {
                    if (3 === o) throw Error('Generator is already running');
                    if (4 === o) {
                      if ('throw' === i) throw a;
                      return { value: t, done: !0 };
                    }
                    for (n.method = i, n.arg = a; ; ) {
                      var u = n.delegate;
                      if (u) {
                        var c = x(u, n);
                        if (c) {
                          if (c === l) continue;
                          return c;
                        }
                      }
                      if ('next' === n.method) n.sent = n._sent = n.arg;
                      else if ('throw' === n.method) {
                        if (1 === o) throw ((o = 4), n.arg);
                        n.dispatchException(n.arg);
                      } else 'return' === n.method && n.abrupt('return', n.arg);
                      o = 3;
                      var s = f(r, e, n);
                      if ('normal' === s.type) {
                        if (((o = n.done ? 4 : 2), s.arg === l)) continue;
                        return { value: s.arg, done: n.done };
                      }
                      'throw' === s.type &&
                        ((o = 4), (n.method = 'throw'), (n.arg = s.arg));
                    }
                  };
                })(r, n, new S(o || [])),
                !0
              ),
              a
            );
          }
          function f(t, r, e) {
            try {
              return { type: 'normal', arg: t.call(r, e) };
            } catch (t) {
              return { type: 'throw', arg: t };
            }
          }
          r.wrap = s;
          var l = {};
          function h() {}
          function p() {}
          function d() {}
          var y = {};
          c(y, i, function () {
            return this;
          });
          var v = Object.getPrototypeOf,
            g = v && v(v(O([])));
          g && g !== e && n.call(g, i) && (y = g);
          var m = (d.prototype = h.prototype = Object.create(y));
          function w(t) {
            ['next', 'throw', 'return'].forEach(function (r) {
              c(t, r, function (t) {
                return this._invoke(r, t);
              });
            });
          }
          function b(t, r) {
            function e(o, i, a, u) {
              var c = f(t[o], t, i);
              if ('throw' !== c.type) {
                var s = c.arg,
                  l = s.value;
                return l && 'object' == gr(l) && n.call(l, '__await')
                  ? r.resolve(l.__await).then(
                      function (t) {
                        e('next', t, a, u);
                      },
                      function (t) {
                        e('throw', t, a, u);
                      }
                    )
                  : r.resolve(l).then(
                      function (t) {
                        (s.value = t), a(s);
                      },
                      function (t) {
                        return e('throw', t, a, u);
                      }
                    );
              }
              u(c.arg);
            }
            var o;
            c(
              this,
              '_invoke',
              function (t, n) {
                function i() {
                  return new r(function (r, o) {
                    e(t, n, r, o);
                  });
                }
                return (o = o ? o.then(i, i) : i());
              },
              !0
            );
          }
          function x(r, e) {
            var n = e.method,
              o = r.i[n];
            if (o === t)
              return (
                (e.delegate = null),
                ('throw' === n &&
                  r.i.return &&
                  ((e.method = 'return'),
                  (e.arg = t),
                  x(r, e),
                  'throw' === e.method)) ||
                  ('return' !== n &&
                    ((e.method = 'throw'),
                    (e.arg = new TypeError(
                      "The iterator does not provide a '" + n + "' method"
                    )))),
                l
              );
            var i = f(o, r.i, e.arg);
            if ('throw' === i.type)
              return (
                (e.method = 'throw'), (e.arg = i.arg), (e.delegate = null), l
              );
            var a = i.arg;
            return a
              ? a.done
                ? ((e[r.r] = a.value),
                  (e.next = r.n),
                  'return' !== e.method && ((e.method = 'next'), (e.arg = t)),
                  (e.delegate = null),
                  l)
                : a
              : ((e.method = 'throw'),
                (e.arg = new TypeError('iterator result is not an object')),
                (e.delegate = null),
                l);
          }
          function E(t) {
            this.tryEntries.push(t);
          }
          function k(r) {
            var e = r[4] || {};
            (e.type = 'normal'), (e.arg = t), (r[4] = e);
          }
          function S(t) {
            (this.tryEntries = [[-1]]), t.forEach(E, this), this.reset(!0);
          }
          function O(r) {
            if (null != r) {
              var e = r[i];
              if (e) return e.call(r);
              if ('function' == typeof r.next) return r;
              if (!isNaN(r.length)) {
                var o = -1,
                  a = function e() {
                    for (; ++o < r.length; )
                      if (n.call(r, o))
                        return (e.value = r[o]), (e.done = !1), e;
                    return (e.value = t), (e.done = !0), e;
                  };
                return (a.next = a);
              }
            }
            throw new TypeError(gr(r) + ' is not iterable');
          }
          return (
            (p.prototype = d),
            c(m, 'constructor', d),
            c(d, 'constructor', p),
            (p.displayName = c(d, u, 'GeneratorFunction')),
            (r.isGeneratorFunction = function (t) {
              var r = 'function' == typeof t && t.constructor;
              return (
                !!r &&
                (r === p || 'GeneratorFunction' === (r.displayName || r.name))
              );
            }),
            (r.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, d)
                  : ((t.__proto__ = d), c(t, u, 'GeneratorFunction')),
                (t.prototype = Object.create(m)),
                t
              );
            }),
            (r.awrap = function (t) {
              return { __await: t };
            }),
            w(b.prototype),
            c(b.prototype, a, function () {
              return this;
            }),
            (r.AsyncIterator = b),
            (r.async = function (t, e, n, o, i) {
              void 0 === i && (i = Promise);
              var a = new b(s(t, e, n, o), i);
              return r.isGeneratorFunction(e)
                ? a
                : a.next().then(function (t) {
                    return t.done ? t.value : a.next();
                  });
            }),
            w(m),
            c(m, u, 'Generator'),
            c(m, i, function () {
              return this;
            }),
            c(m, 'toString', function () {
              return '[object Generator]';
            }),
            (r.keys = function (t) {
              var r = Object(t),
                e = [];
              for (var n in r) e.unshift(n);
              return function t() {
                for (; e.length; )
                  if ((n = e.pop()) in r)
                    return (t.value = n), (t.done = !1), t;
                return (t.done = !0), t;
              };
            }),
            (r.values = O),
            (S.prototype = {
              constructor: S,
              reset: function (r) {
                if (
                  ((this.prev = this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = 'next'),
                  (this.arg = t),
                  this.tryEntries.forEach(k),
                  !r)
                )
                  for (var e in this)
                    't' === e.charAt(0) &&
                      n.call(this, e) &&
                      !isNaN(+e.slice(1)) &&
                      (this[e] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0][4];
                if ('throw' === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (r) {
                if (this.done) throw r;
                var e = this;
                function n(t) {
                  (a.type = 'throw'), (a.arg = r), (e.next = t);
                }
                for (var o = e.tryEntries.length - 1; o >= 0; --o) {
                  var i = this.tryEntries[o],
                    a = i[4],
                    u = this.prev,
                    c = i[1],
                    s = i[2];
                  if (-1 === i[0]) return n('end'), !1;
                  if (!c && !s)
                    throw Error('try statement without catch or finally');
                  if (null != i[0] && i[0] <= u) {
                    if (u < c)
                      return (this.method = 'next'), (this.arg = t), n(c), !0;
                    if (u < s) return n(s), !1;
                  }
                }
              },
              abrupt: function (t, r) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n[0] > -1 && n[0] <= this.prev && this.prev < n[2]) {
                    var o = n;
                    break;
                  }
                }
                o &&
                  ('break' === t || 'continue' === t) &&
                  o[0] <= r &&
                  r <= o[2] &&
                  (o = null);
                var i = o ? o[4] : {};
                return (
                  (i.type = t),
                  (i.arg = r),
                  o
                    ? ((this.method = 'next'), (this.next = o[2]), l)
                    : this.complete(i)
                );
              },
              complete: function (t, r) {
                if ('throw' === t.type) throw t.arg;
                return (
                  'break' === t.type || 'continue' === t.type
                    ? (this.next = t.arg)
                    : 'return' === t.type
                    ? ((this.rval = this.arg = t.arg),
                      (this.method = 'return'),
                      (this.next = 'end'))
                    : 'normal' === t.type && r && (this.next = r),
                  l
                );
              },
              finish: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[2] === t) return this.complete(e[4], e[3]), k(e), l;
                }
              },
              catch: function (t) {
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var e = this.tryEntries[r];
                  if (e[0] === t) {
                    var n = e[4];
                    if ('throw' === n.type) {
                      var o = n.arg;
                      k(e);
                    }
                    return o;
                  }
                }
                throw Error('illegal catch attempt');
              },
              delegateYield: function (r, e, n) {
                return (
                  (this.delegate = { i: O(r), r: e, n }),
                  'next' === this.method && (this.arg = t),
                  l
                );
              },
            }),
            r
          );
        }
        function wr(t, r, e, n, o, i, a) {
          try {
            var u = t[i](a),
              c = u.value;
          } catch (t) {
            return void e(t);
          }
          u.done ? r(c) : Promise.resolve(c).then(n, o);
        }
        function br(t) {
          return function () {
            var r = this,
              e = arguments;
            return new Promise(function (n, o) {
              var i = t.apply(r, e);
              function a(t) {
                wr(i, n, o, a, u, 'next', t);
              }
              function u(t) {
                wr(i, n, o, a, u, 'throw', t);
              }
              a(void 0);
            });
          };
        }
        delete vr().Icon.Default.prototype._getIconUrl,
          vr().Icon.Default.mergeOptions({
            iconUrl: 'leaflet/images/marker-icon.png',
            iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
            shadowUrl: 'leaflet/images/marker-shadow.png',
          }),
          'serviceWorker' in navigator &&
            window.addEventListener('load', function () {
              navigator.serviceWorker
                .register('./sw.js')
                .then(function (t) {
                  console.log('✅ Service Worker registered:', t.scope), lr();
                })
                .catch(function (t) {
                  return console.error('❌ Service Worker failed:', t);
                });
            }),
          document.addEventListener('DOMContentLoaded', function () {
            var t;
            'dark' === localStorage.getItem('theme') &&
              document.body.classList.add('dark'),
              er.init(),
              (function () {
                var t = document.getElementById('subscribe-btn'),
                  r = document.getElementById('unsubscribe-btn');
                if (t && r) {
                  if (
                    !('serviceWorker' in navigator) ||
                    !('PushManager' in window)
                  )
                    return (
                      (t.style.display = 'none'),
                      void (r.style.display = 'none')
                    );
                  navigator.serviceWorker.ready.then(
                    (function () {
                      var e = br(
                        mr().mark(function e(n) {
                          var o, i;
                          return mr().wrap(
                            function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (
                                      (e.prev = 0),
                                      (e.next = 3),
                                      n.pushManager.getSubscription()
                                    );
                                  case 3:
                                    (o = e.sent),
                                      (i = Boolean(o)),
                                      (t.style.display = i
                                        ? 'none'
                                        : 'inline-block'),
                                      (r.style.display = i
                                        ? 'inline-block'
                                        : 'none'),
                                      (e.next = 12);
                                    break;
                                  case 9:
                                    (e.prev = 9),
                                      (e.t0 = e.catch(0)),
                                      console.error(
                                        'Error checking subscription status',
                                        e.t0
                                      );
                                  case 12:
                                  case 'end':
                                    return e.stop();
                                }
                            },
                            e,
                            null,
                            [[0, 9]]
                          );
                        })
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })()
                  ),
                    t.addEventListener(
                      'click',
                      br(
                        mr().mark(function e() {
                          var n;
                          return mr().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), lr();
                                case 2:
                                  return (
                                    (e.next = 4), navigator.serviceWorker.ready
                                  );
                                case 4:
                                  return (
                                    (n = e.sent),
                                    (e.next = 7),
                                    n.pushManager.getSubscription()
                                  );
                                case 7:
                                  e.sent &&
                                    ((t.style.display = 'none'),
                                    (r.style.display = 'inline-block'));
                                case 9:
                                case 'end':
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    ),
                    r.addEventListener(
                      'click',
                      br(
                        mr().mark(function e() {
                          return mr().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (e.next = 2), pr();
                                case 2:
                                  (t.style.display = 'inline-block'),
                                    (r.style.display = 'none');
                                case 4:
                                case 'end':
                                  return e.stop();
                              }
                          }, e);
                        })
                      )
                    );
                }
              })(),
              (t = document.getElementById('skip-link')) &&
                t.addEventListener('click', function (t) {
                  t.preventDefault(),
                    setTimeout(function () {
                      var t = document.getElementById('main-content');
                      t &&
                        (t.focus(),
                        t.scrollIntoView({
                          behavior: 'smooth',
                          block: 'start',
                        }));
                    }, 100);
                });
          });
      },
    },
    e = {};
  function n(t) {
    var o = e[t];
    if (void 0 !== o) return o.exports;
    var i = (e[t] = { exports: {} });
    return r[t].call(i.exports, i, i.exports, n), i.exports;
  }
  (n.m = r),
    (t = []),
    (n.O = (r, e, o, i) => {
      if (!e) {
        var a = 1 / 0;
        for (f = 0; f < t.length; f++) {
          for (var [e, o, i] = t[f], u = !0, c = 0; c < e.length; c++)
            (!1 & i || a >= i) && Object.keys(n.O).every((t) => n.O[t](e[c]))
              ? e.splice(c--, 1)
              : ((u = !1), i < a && (a = i));
          if (u) {
            t.splice(f--, 1);
            var s = o();
            void 0 !== s && (r = s);
          }
        }
        return r;
      }
      i = i || 0;
      for (var f = t.length; f > 0 && t[f - 1][2] > i; f--) t[f] = t[f - 1];
      t[f] = [e, o, i];
    }),
    (n.n = (t) => {
      var r = t && t.__esModule ? () => t.default : () => t;
      return n.d(r, { a: r }), r;
    }),
    (n.d = (t, r) => {
      for (var e in r)
        n.o(r, e) &&
          !n.o(t, e) &&
          Object.defineProperty(t, e, { enumerable: !0, get: r[e] });
    }),
    (n.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (t) {
        if ('object' == typeof window) return window;
      }
    })()),
    (n.o = (t, r) => Object.prototype.hasOwnProperty.call(t, r)),
    (() => {
      var t;
      n.g.importScripts && (t = n.g.location + '');
      var r = n.g.document;
      if (
        !t &&
        r &&
        (r.currentScript &&
          'SCRIPT' === r.currentScript.tagName.toUpperCase() &&
          (t = r.currentScript.src),
        !t)
      ) {
        var e = r.getElementsByTagName('script');
        if (e.length)
          for (var o = e.length - 1; o > -1 && (!t || !/^http(s?):/.test(t)); )
            t = e[o--].src;
      }
      if (!t)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (t = t
        .replace(/^blob:/, '')
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (n.p = t);
    })(),
    (() => {
      var t = { 792: 0 };
      n.O.j = (r) => 0 === t[r];
      var r = (r, e) => {
          var o,
            i,
            [a, u, c] = e,
            s = 0;
          if (a.some((r) => 0 !== t[r])) {
            for (o in u) n.o(u, o) && (n.m[o] = u[o]);
            if (c) var f = c(n);
          }
          for (r && r(e); s < a.length; s++)
            (i = a[s]), n.o(t, i) && t[i] && t[i][0](), (t[i] = 0);
          return n.O(f);
        },
        e = (self.webpackChunkstory_day = self.webpackChunkstory_day || []);
      e.forEach(r.bind(null, 0)), (e.push = r.bind(null, e.push.bind(e)));
    })();
  var o = n.O(void 0, [443], () => n(259));
  o = n.O(o);
})();
//# sourceMappingURL=main.2c1ca13a45c718045eb1.js.map
