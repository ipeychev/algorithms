function memoize(func, context) {
    var cache = Object.create(null);

    memoize.cache = cache;

    return function() {
    	var key = Array.prototype.join.call(arguments, '$') + '$';

        if (key in cache) {
            return cache[key];
        } else {
            var result = func.apply(context || this, arguments);
            cache[key] = result;
            return result;
        }
    };
}

module.exports = memoize;