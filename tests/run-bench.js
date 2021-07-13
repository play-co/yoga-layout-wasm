/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

require(`./tools`);

let fs = require(`fs`);
let vm = require(`vm`);

function main(modules) {
  let WARMUP_ITERATIONS = 3;
  let BENCHMARK_ITERATIONS = 10;
  
  let testFiles = process.argv.slice(2).map(file => {
    return fs.readFileSync(file).toString();
  });
  
  let testResults = new Map();
  
  for (let type in modules) {
    for (let file of testFiles) {
      vm.runInNewContext(
        file,
        Object.assign(Object.create(global), {
          Yoga: modules[type],
          YGBENCHMARK: function(name, fn) {
            let testEntry = testResults.get(name);
  
            if (testEntry === undefined)
              testResults.set(name, (testEntry = new Map()));
  
            for (let t = 0; t < WARMUP_ITERATIONS; ++t) fn();
  
            let start = Date.now();
  
            for (let t = 0; t < BENCHMARK_ITERATIONS; ++t) fn();
  
            let end = Date.now();
  
            testEntry.set(type, (end - start) / BENCHMARK_ITERATIONS);
          },
        }),
      );
    }
  }
  
  console.log(
    `Note: those tests are independants; there is no time relation to be expected between them`,
  );
  
  for (let [name, results] of testResults) {
    console.log();
  
    let min = Math.min(Infinity, ...results.values());
  
    console.log(name);
  
    for (let [type, result] of results) {
      console.log(
        `  - ${type}: ${result}ms (${Math.round((result / min) * 10000) / 100}%)`,
      );
    }
  }
}

Promise.all([
  require('../dist/index').init(), // wasm
  require('../asm').init() // asm
])
.then(modules => {
  main({
    wasm: modules[0],
    asm: modules[1]
  });
});
