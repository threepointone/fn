check: tests size
	
tests: 
	mocha tests --reporter spec

size: 
	# size in kilobytes
	browserify -r ./index.js | uglifyjs --mangle --compress | gzip | wc -c