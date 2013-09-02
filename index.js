// fair caveat, this is code collected for various places, and I don't have tests yet. YET.

"use strict";

module.exports = {
    isValue: isValue,
    identity: identity,
    indexOf: indexOf,
    keys: keys,
    values: values,
    isArray: isArray,
    toArray: toArray,
    each: each,
    extend: extend,
    map: map,
    times: times,
    invoke: invoke,
    filter: filter,
    find: find,
    reduce: reduce,
    debounce: debounce,
    compose: compose
};

var slice = [].slice,
    has = {}.hasOwnProperty,
    toString = {}.toString;

function isValue(v) {
    return ((v !== null) && (v !== undefined));
}

function identity(x) {
    return x;
}

function indexOf(arr, obj) {
    if (arr.indexOf) {
        return arr.indexOf(obj);
    }
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] === obj) {
            return i;
        }
    }
    return -1;
}

function keys(obj) {
    if (obj !== Object(obj)) {
        throw new TypeError('Invalid object');
    }
    var keys = [];
    for (var key in obj) {
        if (has.call(obj, key)) {
            keys.push(key);
        }
    }
    return keys;
}

function values(obj) {
    var values = [];
    for (var key in obj) {
        if (has.call(obj, key)) {
            values.push(obj[key]);
        }
    }
    return values;
}

function isArray(obj) {
    if (Array.isArray) {
        return Array.isArray(obj);
    }
    return toString.call(obj) === '[object Array]';
}

function toArray(obj) {
    if (!obj) {
        return [];
    }
    if (isArray(obj)) {
        return slice.call(obj);
    }
    if (obj.length === +obj.length) {
        return map(obj, identity);
    }
    return values(obj);
}

function each(obj, fn) {
    if (isArray(obj)) {
        for (var i = 0, j = obj.length; i < j; i++) {
            fn(obj[i], i);
        }
    } else {
        for (var prop in obj) {
            if (has.call(obj, prop)) {
                fn(obj[prop], prop);
            }
        }
    }
}

function extend(obj) {
    var args = slice.call(arguments, 1);
    for (var i = 0, j = args.length; i < j; i++) {
        var source = args[i];
        for (var prop in source) {
            if (has.call(source, prop)) {
                obj[prop] = source[prop];
            }
        }
    }
    return obj;
}

function map(obj, fn) {
    var arr = [];
    var f = (typeof(fn) === 'string') ? function(o) {
            return o[fn];
        } : fn;
    each(obj, function(v, k) {
        arr.push(f(v, k));
    });
    return arr;
}

function times(n, fn) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr[i] = fn(i);
    }
    return arr;
}

function invoke(obj, fnName) {
    var args = slice.call(arguments, 2);
    return map(obj, function(v) {
        return v[fnName].apply(v, args);
    });
}

function filter(arr, fn) {
    var ret = [];
    for (var i = 0, j = arr.length; i < j; i++) {
        if (fn(arr[i], i)) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

function find(arr, fn) {
    for (var i = 0, j = arr.length; i < j; i++) {
        if (fn(arr[i], i)) {
            return arr[i];
        }
    }
    return null;
}

function reduce(arr, fn, initial) {
    var idx = 0;
    var len = arr.length;
    var curr = arguments.length === 3 ? initial : arr[idx++];

    while (idx < len) {
        curr = fn.call(null, curr, arr[idx], ++idx, arr);
    }
    return curr;
}

function debounce(func, wait, immediate) {
    var result;
    var timeout = null;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
        }
        return result;
    };
}

function compose() {
    var funcs = arguments;
    return function() {
        var args = arguments;
        for (var i = funcs.length - 1; i >= 0; i--) {
            args = [funcs[i].apply(this, args)];
        }
        return args[0];
    };
}