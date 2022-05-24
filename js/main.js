var loadFile = function(event) {
    var output = document.getElementById('placeholder_img');
    output.src = URL.createObjectURL(event.target.files[0]);
    output.style.height = "210px";
    output.onload = function() {
        URL.revokeObjectURL(output.src)
    }
};