NODE_ENV ?= development

default: all

# files for target jsx
source.js: source.jsx
	@echo "Compiling JSX: $^."
	@mkdir -p $$(dirname "$@")
	@cat $^ | jsx > $@

bundle.js: source.js
	@echo "Running browserify."
	@if [ "$(NODE_ENV)" = "production" ] ; then browserify source.js > bundle.js ; fi
	@if [ "$(NODE_ENV)" != "production" ] ; then browserify --fast source.js > bundle.js ; fi

clean:
	@rm bundle.js source.js

all: bundle.js

.PHONY: default all clean
