'use strict';
var _keys = require('babel-runtime/core-js/object/keys'), _keys2 = _interopRequireDefault(_keys),
  _typeof2 = require('babel-runtime/helpers/typeof'), _typeof3 = _interopRequireDefault(_typeof2),
  _extends2 = require('babel-runtime/helpers/extends'), _extends3 = _interopRequireDefault(_extends2),
  _classCallCheck2 = require('babel-runtime/helpers/classCallCheck'),
  _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
exports.__esModule = !0;

function _interopRequireDefault(a) {
  return a && a.__esModule ? a : { default: a }
}

var Validator = function () {
  function a() {
    var b = this, c = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, d = c.rules,
      e = void 0 === d ? {} : d;
    (0, _classCallCheck3.default)(this, a);
    var f = function (a) {
      return a + ' \u683C\u5F0F\u4E0D\u6B63\u786E'
    };
    this.rules = (0, _extends3.default)({
      required: {
        fn: function fn() {
          return null !== value && void 0 !== value && '' !== value
        }, msg: '{name} \u4E0D\u80FD\u4E3A\u7A7A'
      },
      name: { reg: /^[a-zA-Z0-9\u4e00-\u9fa5]{6,16}$/, msg: f('\u7528\u6237\u540D') },
      realName: {
        reg: /^[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]{2,5}(?:·[\u4E00-\u9FFF\u3400-\u4DBF\uF900-\uFAFF]{2,5})*$/,
        msg: f('\u59D3\u540D')
      },
      phone: { reg: /(13\d|14[57]|15[^4,\D]|17[13678]|18\d)\d{8}$|170[0589]\d{7}$/, msg: f('\u624B\u673A\u53F7') },
      mail: { reg: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/, msg: f('\u90AE\u7BB1') },
      nameOrPhoneOrMail: {
        fn: function fn() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, c = a.value, d = b.rules,
            e = d.name, f = d.phone, g = d.mail;
          return e.reg.test(c) || f.reg.test(c) || g.reg.test(c)
        }, msg: f('\u7528\u6237\u540D/\u624B\u673A/\u90AE\u7BB1')
      },
      phoneOrMail: {
        fn: function fn() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, c = a.value, d = b.rules,
            e = d.phone, f = d.mail;
          return e.reg.test(c) || f.reg.test(c)
        }, msg: f('\u624B\u673A/\u90AE\u7BB1')
      },
      password: {
        reg: /[\w\d~'!@#￥$%^&*|{}\][)(-?"+_=:`]{6,32}/,
        msg: '\u8BF7\u8F93\u51656-32\u4F4D\u7684\u82F1\u6587/\u6570\u5B57'
      },
      captcha: { reg: /[\d]{6}/, msg: '\u9A8C\u8BC1\u7801 \u5FC5\u987B\u4E3A\u516D\u4F4D\u6570\u5B57' },
      imgCaptcha: { reg: /[\d\w]{4}/, msg: '\u8BF7\u8F93\u5165\u56DB\u4F4D\u6570\u5B57/\u5B57\u6BCD' },
      url: {
        reg: /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-.,@?^=%&:/~+#]*[\w\-@?^=%&/~+#])?$/,
        msg: f('\u94FE\u63A5')
      },
      number: { reg: /^[\d]+$/, msg: '\u53EA\u5141\u8BB8\u6570\u5B57' },
      chinese: { reg: /^[\u4e00-\u9fa5]+$/, msg: '\u53EA\u5141\u8BB8\u4E2D\u6587' },
      amount: { reg: /^\d+(\.\d{1,2})?$/, msg: f('\u91D1\u989D') },
      length: {
        fn: function fn() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = a.value, c = a.param,
            d = void 0 === c ? {} : c, e = d.min, f = d.max, g = !('number' == typeof e && b.length < e),
            h = !('number' == typeof f && b.length > f);
          return g && h
        }, msg: function msg() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = a.param,
            c = void 0 === b ? {} : b;
          if ('number' == typeof c) return '\u957F\u5EA6\u9700\u8981\u7B49\u4E8E' + c;
          var d = c.min, e = c.max, f = 'number' == typeof d, g = 'number' == typeof e;
          return f && g ? '\u957F\u5EA6\u9700\u8981\u5728 ' + f + ' - ' + g + ' \u4E4B\u95F4' : f ? '\u957F\u5EA6\u4E0D\u80FD\u5C0F\u4E8E' + f : f ? '\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E' + g : '\u6821\u9A8C\u53C2\u6570\u6709\u8BEF'
        }
      },
      equals: {
        fn: function fn() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = a.value,
            c = void 0 === b ? '' : b, d = a.form, e = void 0 === d ? {} : d, f = a.param, g = void 0 === f ? {} : f;
          return g.field && c === e[g.field]
        }, msg: function msg() {
          var a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, b = a.param,
            c = void 0 === b ? { enter: '\u8F93\u5165', equal: '\u786E\u8BA4\u5B57\u6BB5' } : b;
          return c.original + '\u4E0E' + c.equal + '\u4E0D\u4E00\u81F4'
        }
      }
    }, e)
  }

  return a.prototype.checkRule = function checkRule(a) {
    var b = a.rule, c = a.value, d = a.form, e = a.param, f = a.aliasName, g = !1;
    if (b) {
      var h = b.fn, i = b.reg, j = b.msg, k = void 0 === j ? '' : j;
      return 'function' != typeof h || h({
        value: c,
        form: d,
        param: e
      }) || (g = !0), i && i.test && !i.test(c) && (g = !0), g ? k.replace('{name}', f || '') : ''
    }
  }, a.prototype.check = function check(a) {
    var b = a.value, c = a.ruleObj, d = a.form, e = '', f = [], g = c.rules, h = c.aliasName,
      j = 'undefined' == typeof g ? 'undefined' : (0, _typeof3.default)(g);
    if ('string' === j) {
      f = g.split('|');
      for (var m = 0; m < f.length && (e = this.checkRule({
        rule: f[m],
        value: b,
        form: d,
        aliasName: h
      }), !e); m += 1) ;
    } else if ('object' === j) for (var k = (0, _keys2.default)(g), l = 0; l < k.length; l += 1) {
      var i = k[l], n = g[i];
      if (e = this.checkRule({ rule: i, param: n, value: b, form: d, aliasName: h }), e) break
    } else 'function' === j && (e = g({ value: b, form: d }));
    return e
  }, a
}();
exports.default = Validator;
