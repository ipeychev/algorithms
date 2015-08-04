function assign(object) {
    if (typeof object !== 'object') {
        return object;
    }

    var sources = Array.prototype.slice.call(arguments, 1);

    for (var i = 0; i < sources.length; i++) {
        var source = sources[i];

        if (typeof source !== 'object') {
            continue;
        }

        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                object[key] = source[key];
            }
        }
    }

    return object;
}


module.exports = assign;