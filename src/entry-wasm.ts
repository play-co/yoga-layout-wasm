import entry from './entry.js';
import { YogaInitModule, YogaWasm } from './types.js';

const emscripten = require('./yoga.bundle.wasm');

function initConfig(filepath?: string) {
  return filepath
    ? function locateFile() {
        return filepath;
      }
    : void 0;
}

function init(filepath?: string) {
  const task = emscripten({ locateFile: initConfig(filepath) }).then(
    (raw: YogaInitModule) => Object.assign(mod, entry(raw)),
  );
  mod.init = () => task;
  return task;
}

const mod = {
  init,
} as YogaWasm;

export default mod;
