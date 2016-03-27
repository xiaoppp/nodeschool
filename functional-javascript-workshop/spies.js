"use strict";

// very light version of aop
// you can view reference at
// http://www.cnblogs.com/rubylouvre/archive/2009/08/08/1541578.html

// note: call & apply can change the context of function
function Spy(target, method) {
    var r = {
        count: 0
    };

    var original = target[method];

    target[method] = function() {
        r.count = r.count + 1;
        return original.apply(target, arguments)
    }

    return r;
}

var spy = Spy(console, 'error')

console.error('calling console.error')
console.error('calling console.error')
console.error('calling console.error')

console.log(spy.count) // 3

module.exports = Spy