CC=emcc
ARGS_COMMON=yoga/yoga/*.cpp yoga/yoga/*/*.cpp bindings/*.cc \
		--bind -O0 --memory-init-file 0 --closure 1 --llvm-lto 1 \
		-Iyoga \
		--extern-post-js templates/external.post.js.txt \
		-s EXPORT_ES6=0 \
		-s ENVIRONMENT="web,webview,worker" \
		-s BINARYEN=1 \
		-s "BINARYEN_METHOD='native-wasm'" \
		-s EXPORTED_RUNTIME_METHODS=[] \
		-s NO_FILESYSTEM=1 \
  	-s SINGLE_FILE=1 \
		-s WASM_ASYNC_COMPILATION=1 \
		-s DISABLE_EXCEPTION_CATCHING=1 \
		-s AGGRESSIVE_VARIABLE_ELIMINATION=1 \
		-s NO_EXIT_RUNTIME=1 \
		-s ASSERTIONS=0 \
		-s ALLOW_MEMORY_GROWTH=1 \
		-s MODULARIZE=1 \
		-s ERROR_ON_UNDEFINED_SYMBOLS=0 \
		-s "DEFAULT_LIBRARY_FUNCS_TO_INCLUDE=['memcpy','memset','malloc','free','strlen']"

ARGS_BROWSER=--extern-pre-js templates/external.pre.es6.js.txt
ARGS_NODE=--extern-pre-js templates/external.pre.commonjs.js.txt

ARGS_PROD=-O3 -g0
ARGS_DEBUG=-O0 -g3 -DDEBUG

ARGS_WASM=-s WASM=1 -o build/yoga.bundle.wasm.js
ARGS_ASM=-s WASM=0 -o build/yoga.bundle.asm.js

all: clean dir wasm asm
debug: clean dir wasm-debug asm-debug
tests: clean dir wasm-tests asm-tests

wasm:
	$(CC) $(ARGS_COMMON) ${ARGS_BROWSER} $(ARGS_PROD) $(ARGS_WASM)

asm:
	$(CC) $(ARGS_COMMON) ${ARGS_BROWSER} $(ARGS_PROD) $(ARGS_ASM)

wasm-debug:
	$(CC) $(ARGS_COMMON) ${ARGS_BROWSER} $(ARGS_DEBUG) $(ARGS_WASM)

asm-debug:
	$(CC) $(ARGS_COMMON) ${ARGS_BROWSER} $(ARGS_DEBUG) $(ARGS_ASM)

wasm-tests:
	$(CC) $(ARGS_COMMON) ${ARGS_NODE} $(ARGS_DEBUG) $(ARGS_WASM)

asm-tests:
	$(CC) $(ARGS_COMMON) ${ARGS_NODE} $(ARGS_DEBUG) $(ARGS_ASM)

clean:
	rm -rf build 

dir:
	mkdir -p build

copy: copy-lib copy-tests

copy-lib:
	cp build/* lib/

copy-tests:
	cp build/* tests/lib/
