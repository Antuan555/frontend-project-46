test:
	node Js/Index.js
install:
	npm ci
lint:
	npx eslint .
lint-fix:
	npx eslint . --fix
gendiff: 
	./index.js