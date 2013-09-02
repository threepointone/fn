check: 
	# size in kilobytes
	browserify -r ./index.js | uglifyjs --mangle --compress | gzip | wc -c