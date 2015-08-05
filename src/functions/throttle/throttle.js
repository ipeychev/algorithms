function throttle(func, wait) {
    var self = this;

    var lastCalled;

    return function() {
    	var curTime = Date.now();
        var res;

        if (lastCalled) {
            var diff = curTime - lastCalled;

            if (wait < diff) {
                res = func.apply(self, arguments);
            }
        } else {
            res = func.apply(self, arguments);
        }

        lastCalled = curTime;

        return res;
    };
}

module.exports = throttle;