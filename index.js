"use strict";

module.exports = {
    each: each,
    isArray: isArray,
    extend: extend,
    times: times,
    invoke: invoke,
    filter: filter,
    find: find,
    reduce: reduce
};


var slice = [].slice,
    has = {}.hasOwnProperty,
    toString = {}.toString;

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

function isArray(obj) {
    if (Array.isArray) {
        return Array.isArray(obj);
    }
    return toString.call(obj) === '[object Array]';
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