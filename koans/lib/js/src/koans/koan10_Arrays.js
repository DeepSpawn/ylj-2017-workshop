// Generated by BUCKLESCRIPT VERSION 1.7.1, PLEASE EDIT WITH CARE
'use strict';

var Mocha      = require("mocha");
var Barray     = require("bs-containers/lib/js/src/barray.js");
var Assert     = require("assert");
var Helpers    = require("../helpers.js");
var Caml_array = require("bs-platform/lib/js/caml_array.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

var fullArray = Caml_array.caml_make_vect(3, 0);

function koans() {
  Mocha.describe("Arrays", function () {
        Mocha.it("arrays can be created from a list", function () {
              Assert.equal(Barray.of_list(/* :: */[
                        0,
                        /* :: */[
                          1,
                          /* [] */0
                        ]
                      ]), fullArray);
              return /* () */0;
            });
        Mocha.it("arrays can also be turned into lists", function () {
              Assert.equal(Barray.to_list(Barray.of_list(/* :: */[
                            0,
                            /* :: */[
                              1,
                              /* [] */0
                            ]
                          ])), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("length gives the number of elements", function () {
              Assert.equal(Barray.length(Barray.of_list(/* :: */[
                            0,
                            /* :: */[
                              1,
                              /* :: */[
                                2,
                                /* [] */0
                              ]
                            ]
                          ])), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("or two arrays can become one", function () {
              Assert.equal(Barray.append(Barray.of_list(/* :: */[
                            1,
                            /* :: */[
                              2,
                              /* [] */0
                            ]
                          ]), Barray.of_list(/* :: */[
                            3,
                            /* [] */0
                          ])), Barray.of_list(Helpers.__(/* () */0)));
              return /* () */0;
            });
        Mocha.it("it is easy to create an empty array", function () {
              Assert.equal(Barray.empty, Barray.of_list(Helpers.__(/* () */0)));
              return /* () */0;
            });
        Mocha.it("or to create an array of all the same value", function () {
              Assert.equal(Caml_array.caml_make_vect(3, "a"), Barray.of_list(Helpers.__(/* () */0)));
              return /* () */0;
            });
        Mocha.it("initialize creates an array based on the index", function () {
              Assert.equal(Barray.init(3, function (i) {
                        return (i << 1);
                      }), Barray.of_list(Helpers.__(/* () */0)));
              return /* () */0;
            });
        Mocha.it("you can test how many elements are in an array", function () {
              Assert.equal(Barray.length(fullArray), Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("mapping is just like with lists", function () {
              Assert.equal(Barray.map(function (i) {
                        return Caml_int32.imul(i, 3);
                      }, Barray.of_list(/* :: */[
                            0,
                            /* :: */[
                              1,
                              /* :: */[
                                2,
                                /* [] */0
                              ]
                            ]
                          ])), Barray.of_list(Helpers.__(/* () */0)));
              return /* () */0;
            });
        Mocha.it("you can get the value at an index", function () {
              Assert.equal(Barray.get_safe(Barray.of_list(/* :: */[
                            0,
                            /* :: */[
                              1,
                              /* :: */[
                                2,
                                /* [] */0
                              ]
                            ]
                          ]), 1), /* Some */[Helpers.__(/* () */0)]);
              return /* () */0;
            });
        Mocha.it("and set the value at an index", function () {
              var arr = Helpers.__(/* () */0);
              Barray.set(arr, 1, 5);
              Assert.equal(arr, Helpers.__(/* () */0));
              return /* () */0;
            });
        Mocha.it("or get a slice of the array", function () {
              Assert.equal(Barray.sub(Barray.of_list(/* :: */[
                            0,
                            /* :: */[
                              1,
                              /* :: */[
                                2,
                                /* :: */[
                                  3,
                                  /* :: */[
                                    4,
                                    /* [] */0
                                  ]
                                ]
                              ]
                            ]
                          ]), 1, 4), Barray.of_list(Helpers.__(/* () */0)));
              return /* () */0;
            });
        return /* () */0;
      });
  return /* () */0;
}

exports.fullArray = fullArray;
exports.koans     = koans;
/* mocha Not a pure module */