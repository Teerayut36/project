
var myCanvasUtil;
var img = qs("#inpt-img");
var can = qs("#out-can");

img.on("load", function(e) {
    qsa(".filters-btn").attr("disabled", "true");
    myCanvasUtil = new canvasUtils.Util(img, can);//getting a new istance of Util
    myCanvasUtil.paint();
    qsa(".filters-btn").rmattr("disabled", "false");
});







//image upload
function handleFiles(files) {
    var reader = new FileReader();

    var file = files[0];
    if (file) {
        reader.readAsDataURL(file);
    } else {
        console.error("Error while reading file");
    }

    reader.onload = function() {
        img.src = reader.result;
    }
}

