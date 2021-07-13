import entry from './entry';
import { YogaAsm, YogaInitModule } from './types';

const emscripten = require('./yoga.bundle.asm');

function init() {
  const task = emscripten().then((raw: YogaInitModule) =>
    Object.assign(mod, entry(raw)),
  );
  mod.init = () => task;
  return task;
}

const mod = {
  init,
} as YogaAsm;

export default mod;
