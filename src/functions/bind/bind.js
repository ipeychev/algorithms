Function.prototype.bind2 = Function.prototype.bind2 || function(context) {
    var origFunction = this;
    var boundArgs = Array.prototype.slice.call(arguments, 1);

    return function() {
        var callingArgs = Array.prototype.slice.call(arguments, 0);

        var mergedParams = callingArgs.concat(boundArgs);

        return origFunction.apply(context, mergedParams);
    };
};