
// call back in a few different ways

var str3 = '';

function basic(callback) {
    
    var result = 'i am the result of `do something` to be past to the callback';

    callback && callback(result);
}

function callbacks_with_call(arg1, arg2, callback) {

    var result1 = arg1.replace('argument', 'result'),
        result2 = arg2.replace('argument', 'result');

    this.data = 'i am some data that can be use for the callback function with `this` key word';

    callback && callback.call(this, result1, result2);
}

function callbacks_with_apply(arg1, arg2, callback) {

    var result1 = arg1.replace('argument', 'result'),
        result2 = arg2.replace('argument', 'result');

    this.data = 'i am some data that can be use for the callback function with `this` key word';

    callback && callback.apply(this, [result1, result2]);
}

basic(function (result) {
    str3 += 'this callback is going to print out the result from the function `basic`' + '</br>';
    str3 += result + '</br>';
});

str3 += '--------------------------------------------------------------------------------------' + '</br>';

(function () {
    var arg1 = 'i am argument1',
        arg2 = 'i am argument2';

    callbacks_with_call(arg1, arg2, function (result1, result2) {
        str3 += 'this callback is going to print out the results from the function `callbacks_with_call`' + '</br>';
        str3 += 'result1: ' + result1 + '</br>';
        str3 += 'result2: ' + result2 + '</br>';
        str3 += 'data from `callbacks_with_call`: ' + this.data + '</br>';
    });
})();

str3 += '--------------------------------------------------------------------------------------' + '</br>';

(function () {
    var arg1 = 'i am argument1',
        arg2 = 'i am argument2';

    callbacks_with_apply(arg1, arg2, function (result1, result2) {
        str3 += 'this callback is going to print out the result from the function `callbacks_with_apply`' + '</br>';
        str3 += 'result1: ' + result1 + '</br>';
        str3 += 'result2: ' + result2 + '</br>';
        str3 += 'data from `callbacks_with_apply`: ' + this.data + '</br>';
    });
})();

document.getElementById("script3").innerHTML = str3;