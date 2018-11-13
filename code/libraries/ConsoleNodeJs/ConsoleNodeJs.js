/**
 * License refer to https://github.com/nodejs/node-v0.x-archive/blob/master/lib/console.js
 * API Refer to :https://nodejs.org/api/console.html
 * Example: Just import this library into ClearBlade service, and start using it: console.log("Hello" , "World!");
*/
if (typeof console === 'undefined') {
    var console = {};
}
(function () {
    const functions = [
        [info, "info"],
        [warn, "warn"],
        [error, "error"],
        [time, "time"],
        [timeEnd, "timeEnd"],
        [dir, "dir"]
    ];

    var _times = {};

    for (var i = 0; i < functions.length; i++) {
        var tuple = functions[i]
        var f = tuple[0]
        var name = tuple[1]

        //if (!console[name]) {
        console[name] = f;
        // }
    }

    var formatRegExp = /%[sdj]/g;

    console.log = function () {
        log(util.format.apply(this, arguments) + '\\n');
    };

    function info() {
        console.log.apply(console, arguments)
    }

    function warn() {
        console.log.apply(console, arguments)
    }

    function error() {
        console.warn.apply(console, arguments)
    }


    function time(label) {
        _times[label] = Date.now();
    };


    function timeEnd(label) {
        var time = _times[label];
        if (!time) {
            throw new Error('No such label: ' + label);
        }
        var duration = Date.now() - time;
        this.log('%s: %dms', label, duration);
    };

    function dir(object) {
        console.log(util.inspect(object) + "\\\\n")
    }


})();
