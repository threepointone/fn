a bunch of functional helpers, for when you don't need all of underscore. < 1k gzipped, always.

I plan on using this in my own modules via browserify/npm, but feel free to suggest changes, etc.  

included - 

- isValue
- identity
- indexOf
- keys
- values
- isArray
- toArray
- each
- extend
- map
- times
- invoke
- filter
- find
- reduce
- debounce
- compose

additionally, you can chain a series of these functions (à la underscore). eg - 
```js
_.chain([1,2,3,4,5,6])
 .map(function(x){ return x*2; })
 .filter(function(x){ return x%3 === 0; })
 .reduce(function(count, x){ return count+x; }, 0)
 .val();
// 18
```