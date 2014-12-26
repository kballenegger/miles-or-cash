
# files for target jsx
source.js: source.jsx
	@echo "Compiling JSX: $^."
	@mkdir -p $$(dirname "$@")
	@cat $^ | jsx > $@

bundle.js: source.js
	@echo "Running browserify."
	@browserify source.js > bundle.js

default: all
all: bundle.js

.PHONY: default all
