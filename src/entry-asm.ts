// @ts-expect-error
import getEmscripten from './yoga.bundle.asm';
import entry from './entry';
import { YogaInitModule, YogaAsm } from './types';

function init() {
  const emscripten = getEmscripten();
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
