
var str = "";

// simulate a time consuming function, this does not get printed
function do_a() {
    setTimeout(function () {
        str += 'do_a</br>';
    }, 1000);
}

function do_b() {
    str += 'do_b</br>';
}

do_a();
do_b();

document.getElementById("script1").innerHTML = str;