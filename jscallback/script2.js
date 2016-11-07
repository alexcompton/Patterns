
var str2 = "";

function do_a(callback) {
    setTimeout(function () {
        str2 += 'do_a</br>';
        callback && callback();
    }, 3000);
}

function do_b() {
    str2 += 'do_b</br>';
}

do_a(function () {
    do_b();
    document.getElementById("script2").innerHTML = str2;
});