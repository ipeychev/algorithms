var debounce = function() {
	var params = Array.prototype.slice.call(arguments, 0);
    var origFunc = arguments[0];
    var delay = arguments[1];
    var context = arguments[2];
    var origArgs = params.slice(3);
    var timeout;

    return function() {
    	clearTimeout(timeout);

        var callingArgs = arguments;

        timeout = setTimeout(function() {
        	var mergedArgs = Array.prototype.slice.call(callingArgs, 0).concat(origArgs);

            return origFunc.apply(context, mergedArgs);
        }, delay);
    };
};

module.exports = debounce;