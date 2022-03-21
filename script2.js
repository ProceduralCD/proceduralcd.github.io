var canvas = document.getElementById("canvas");

var button = document.getElementById('btn-download');

button.addEventListener('click', function (e) {
    var dataURL = canvas.toDataURL('image/png');
    button.href = dataURL;
});