// simple callback example
var str4 = "";

function a(delay, callback) {
    setTimeout(function () {
        str4 += 'do_a</br>';
        callback && callback();
    }, 3000);
}

// function do_b() {
//     str4 += 'do_b</br>';
// }

// do_a(function () {
//     do_b();
//     document.getElementById("script4").innerHTML = str4;
// });

function callback() {
    document.getElementById("script4").innerHTML = str4;
}

var itemsProcessed = 0;

function processArray() {
    for (var i = 0; i < 10; i++) {
        var delay = Math.round((Math.random() * 3000));        
        a(delay, function() {
            str4 += i + ': ' + delay + 'ms</br>';
        });
    }
}

processArray();
document.getElementById("script4").innerHTML = str4;