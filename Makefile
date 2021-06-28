install:
	npm install
brain-games:
	node ~/programming/frontend-project-lvl1/bin/brain-games.js
brain-even:
	node ~/programming/frontend-project-lvl1/bin/brain-even.js
publish:
	npm publish --dry-run
lint:
	npx	eslint .