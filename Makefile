CC=emcc
ARGS=yoga/yoga/*.cpp yoga/yoga/*/*.cpp bindings/*.cc \
		--bind -O3 --memory-init-file 0 --closure 1 --llvm-lto 1 \
		-Iyoga \
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

all: clean dir wasm asm

wasm:
	$(CC) $(ARGS) \
		-s WASM=1 \
		-o build/yoga.bundle.wasm.js

asm:
	$(CC) $(ARGS) \
		-s WASM=0 \
		-o build/yoga.bundle.asm.js

clean:
	rm -rf build 

dir:
	mkdir -p build
