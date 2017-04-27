// Generated by BUCKLESCRIPT VERSION 1.7.1, PLEASE EDIT WITH CARE
'use strict';

var Bfun    = require("bs-containers/lib/js/src/bfun.js");
var Mocha   = require("mocha");
var Assert  = require("assert");
var Helpers = require("../helpers.js");

function add1(x) {
  return x + 1 | 0;
}

function add(x, y) {
  return x + y | 0;
}

function subtract(x, y) {
  return x - y | 0;
}

function subtractFrom4(param) {
  return 4 - param | 0;
}

function always5(param) {
  return Bfun.$$const(5, param);
}

function subtract4(param) {
  return Bfun.flip(subtract, 4, param);
}

function multiplyBy2(x) {
  return (x << 1);
}

function koans() {
  Mocha.describe("Functions", function () {
        Mocha.it("the id function returns whatever it is passed", function () {
              Assert.equal(Bfun.id(4), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("functions are defined as 'name args = implementation'", function () {
              Assert.equal(5, Helpers.__(/* () */0) + 1 | 0);
              return /* () */0;
            });
        Mocha.it("functions may have an optional type signature", function () {
              Assert.equal(5, 3 + Helpers.__(/* () */0) | 0);
              return /* () */0;
            });
        Mocha.it("anonymous functions are defined with '\\args -> implementation'", function () {
              Assert.equal(5, 8 - Helpers.__(/* () */0) | 0);
              return /* () */0;
            });
        Mocha.it("anonymous functions may be defined inline", function () {
              Assert.equal(5, 8 - Helpers.__(/* () */0) | 0);
              return /* () */0;
            });
        Mocha.it("functions passed some values return curried functions", function () {
              Assert.equal(1, subtractFrom4(Helpers.__(/* () */0)));
              return /* () */0;
            });
        Mocha.it("the always function returns its first argument, no matter what the second is", function () {
              Assert.equal(always5(4), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("the flip function flips the order of the first two arguments of a function", function () {
              Assert.equal(subtract4(9), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("f @@ a applies the function f to the arg a", function () {
              Assert.equal(subtract4(10), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("a |> f applies the function f to the arg a", function () {
              Assert.equal(subtract4(10), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("Fun.(%) composes function g with function f", function () {
              Assert.equal(Bfun.$percent(subtract4, multiplyBy2, 9), Helpers.__(/* () */0));
              return /* () */0;
            });
        return /* () */0;
      });
  return /* () */0;
}

exports.add1          = add1;
exports.add           = add;
exports.subtract      = subtract;
exports.subtractFrom4 = subtractFrom4;
exports.always5       = always5;
exports.subtract4     = subtract4;
exports.multiplyBy2   = multiplyBy2;
exports.koans         = koans;
/* mocha Not a pure module */