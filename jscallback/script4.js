// simple callback example with a loop
var str4 = "";

var funcs = [];
var funcs2 = [];

function createfunc(i, delay) {
    return function() { 
        str4 += i + ': ' + delay + 'ms</br>'; 
    };
}

function printString(i,delay){
    str4 += i + ': ' + delay + 'ms</br>'; 
    document.getElementById("script4").innerHTML = str4;
}

function createfunc2(i, delay, callback) {
    return function() { 
        setTimeout(function () {            
            callback && callback(i,delay);
        }, 3000);        
    };
}

str4 += '<h4>iterations</h4>';

for (var i = 0; i < 10; i++) {
    var delay = Math.round((Math.random() * 3000));
    str4 += i + ': ' + delay + 'ms</br>';
    funcs[i] = createfunc2(i, delay, printString);
}

document.getElementById("script4").innerHTML = str4;
str4 += '<h4>ran async</h4>';

for (var j = 0; j < 10; j++) {
    funcs[j]();
}
