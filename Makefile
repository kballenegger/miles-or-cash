default: all

# files for target jsx
source.js: source.jsx
	@echo "Compiling JSX: $^."
	@mkdir -p $$(dirname "$@")
	@cat $^ | jsx > $@

bundle.js: source.js
	@echo "Running browserify."
	@browserify source.js > bundle.js

clean:
	@rm bundle.js source.js

all: bundle.js

.PHONY: default all clean
