(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{288:function(t,o,e){"use strict";e.r(o),function(t){e.d(o,"default",(function(){return i}));var n=e(43),a=e(15),r=e(45);var i=function(o){var e,n;function i(){return o.apply(this,arguments)||this}n=o,(e=i).prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n;var c=i.prototype;return c.onReady=function(){this.registerContactFormValidation()},c.registerContactFormValidation=function(){var o="form[data-contact-form]",e=Object(a.a)({submit:o+' input[type="submit"]'}),n=t(o);e.add([{selector:o+' input[name="contact_email"]',validate:function(t,o){t(r.a.email(o))},errorMessage:this.context.contactEmail},{selector:o+' textarea[name="contact_question"]',validate:function(t,o){t(r.a.notEmpty(o))},errorMessage:this.context.contactQuestion}]),n.on("submit",(function(t){e.performCheck(),e.areAll("valid")||t.preventDefault()}))},i}(n.a)}.call(this,e(0))}}]);
//# sourceMappingURL=theme-bundle.chunk.14.js.map