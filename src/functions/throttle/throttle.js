function throttle(func, wait) {
    var self = this;

    var lastCalled;

    return function() {
    	var curTime = Date.now();

        if (lastCalled) {
            var diff = curTime - lastCalled;

            if (wait < diff) {
                return func.apply(self, arguments);
            }
        } else {
            return func.apply(self, arguments);
        }

        lastCalled = curTime;
    };
}

module.exports = throttle;