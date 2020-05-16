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
function resize(which, max) {
    var elem = document.getElementById(which);
    if (elem == undefined || elem == null) return false;
    if (max == undefined) max = 100;
    if (elem.width > elem.height) {
      if (elem.width > max) elem.width = max;
    } else {
      if (elem.height > max) elem.height = max;
    }
  }
  $("#inpt-img").slider({
    orientation: "vertical",
    min: 0,
    max: 150,
    value: 50
});
