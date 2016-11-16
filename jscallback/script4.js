// simple callback example with a loop
var str4 = "";

function printString(i,delay){
    str4 += i + ': ' + delay + 'ms</br>'; 
    document.getElementById("script4").innerHTML = str4;
}

function createfunc(i, delay, callback) {
    return function() { 
        setTimeout(function () {            
            callback && callback(i,delay);
        }, delay);        
    };
}

function getFunctionList(){

    var funcs = [];
    str4 += '<h4>iterations</h4>';

    for (var i = 0; i < 10; i++) {
        var delay = Math.round((Math.random() * 3000));
        str4 += i + ': ' + delay + 'ms</br>';
        funcs[i] = createfunc(i, delay, printString);
    }

    document.getElementById("script4").innerHTML = str4;
    str4 += '<h4>ran async</h4>';

    for (var j = 0; j < 10; j++) {
        funcs[j]();
    }
}

getFunctionList();