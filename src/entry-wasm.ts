// @ts-expect-error
import getEmscripten from './yoga.bundle.wasm';
import entry from './entry';
import { YogaInitModule, YogaWasm } from './types';

function init(filepath?: string) {
  const emscripten = getEmscripten();
  const task = emscripten({
    locateFile: filepath ? () => filepath : void 0,
  }).then((raw: YogaInitModule) => Object.assign(mod, entry(raw)));
  mod.init = () => task;
  return task;
}

const mod = {
  init,
} as YogaWasm;

export default mod;
