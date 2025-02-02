/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the LICENSE
 * file in the root directory of this source tree.
 */
// @Generated by gentest/gentest.rb from gentest/fixtures/YGPaddingTest.html

// var Yoga = Yoga || require("../../sources/entry-" + process.env.TEST_ENTRY);

it("padding_no_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPadding(Yoga.EDGE_LEFT, 10);
    root.setPadding(Yoga.EDGE_TOP, 10);
    root.setPadding(Yoga.EDGE_RIGHT, 10);
    root.setPadding(Yoga.EDGE_BOTTOM, 10);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(20 === root.getComputedWidth(), "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(20 === root.getComputedHeight(), "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(20 === root.getComputedWidth(), "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(20 === root.getComputedHeight(), "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("padding_container_match_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPadding(Yoga.EDGE_LEFT, 10);
    root.setPadding(Yoga.EDGE_TOP, 10);
    root.setPadding(Yoga.EDGE_RIGHT, 10);
    root.setPadding(Yoga.EDGE_BOTTOM, 10);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(30 === root.getComputedWidth(), "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(30 === root.getComputedHeight(), "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(30 === root.getComputedWidth(), "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(30 === root.getComputedHeight(), "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("padding_flex_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPadding(Yoga.EDGE_LEFT, 10);
    root.setPadding(Yoga.EDGE_TOP, 10);
    root.setPadding(Yoga.EDGE_RIGHT, 10);
    root.setPadding(Yoga.EDGE_BOTTOM, 10);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(80 === root_child0.getComputedHeight(), "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(80 === root_child0.getComputedLeft(), "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(80 === root_child0.getComputedHeight(), "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("padding_stretch_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setPadding(Yoga.EDGE_LEFT, 10);
    root.setPadding(Yoga.EDGE_TOP, 10);
    root.setPadding(Yoga.EDGE_RIGHT, 10);
    root.setPadding(Yoga.EDGE_BOTTOM, 10);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(80 === root_child0.getComputedWidth(), "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(10 === root_child0.getComputedLeft(), "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(10 === root_child0.getComputedTop(), "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(80 === root_child0.getComputedWidth(), "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("padding_center_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setPadding(Yoga.EDGE_START, 10);
    root.setPadding(Yoga.EDGE_END, 20);
    root.setPadding(Yoga.EDGE_BOTTOM, 20);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(40 === root_child0.getComputedLeft(), "40 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(35 === root_child0.getComputedTop(), "35 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(100 === root.getComputedWidth(), "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(100 === root.getComputedHeight(), "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(50 === root_child0.getComputedLeft(), "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(35 === root_child0.getComputedTop(), "35 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(10 === root_child0.getComputedWidth(), "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(10 === root_child0.getComputedHeight(), "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("child_with_padding_align_end", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_FLEX_END);
    root.setAlignItems(Yoga.ALIGN_FLEX_END);
    root.setWidth(200);
    root.setHeight(200);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setPadding(Yoga.EDGE_LEFT, 20);
    root_child0.setPadding(Yoga.EDGE_TOP, 20);
    root_child0.setPadding(Yoga.EDGE_RIGHT, 20);
    root_child0.setPadding(Yoga.EDGE_BOTTOM, 20);
    root_child0.setWidth(100);
    root_child0.setHeight(100);
    root.insertChild(root_child0, 0);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(100 === root_child0.getComputedLeft(), "100 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(100 === root_child0.getComputedTop(), "100 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    console.assert(0 === root.getComputedLeft(), "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")");
    console.assert(0 === root.getComputedTop(), "0 === root.getComputedTop() (" + root.getComputedTop() + ")");
    console.assert(200 === root.getComputedWidth(), "200 === root.getComputedWidth() (" + root.getComputedWidth() + ")");
    console.assert(200 === root.getComputedHeight(), "200 === root.getComputedHeight() (" + root.getComputedHeight() + ")");

    console.assert(0 === root_child0.getComputedLeft(), "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")");
    console.assert(100 === root_child0.getComputedTop(), "100 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")");
    console.assert(100 === root_child0.getComputedWidth(), "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")");
    console.assert(100 === root_child0.getComputedHeight(), "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")");
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
