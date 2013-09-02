check: 
	# size in kilobytes
	mocha tests --reporter spec
	browserify -r ./index.js | uglifyjs --mangle --compress | gzip | wc -c