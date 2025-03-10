function openImageInput() {
  document.getElementById("imageInput").click();
}

document.getElementById("imageInput").addEventListener("change", function () {
  var _0x4b6d23 = this.files[0];
  if (_0x4b6d23) {
    var _0x32b266 = new FileReader();
    _0x32b266.onload = function (_0x56bead) {
      document.getElementById("previewImage").src = _0x56bead.target.result;
    };
    _0x32b266.readAsDataURL(_0x4b6d23);
  }
});

// Sätter en standardbild (profil.jpg) om ingen bild finns sparad i localStorage
window.onload = function () {
    var savedImage = localStorage.getItem("uploadedImage");
    var previewImage = document.getElementById("previewImage");

    if (savedImage) {
        previewImage.src = savedImage;
    } else {
        previewImage.src = "profil.jpeg"; // Se till att sökvägen är rätt
    }
};

document.getElementById("imageInput").addEventListener("change", function (_0x17695f) {
  var _0x2667ea = _0x17695f.target.files[0];
  if (_0x2667ea) {
    var _0x1fb445 = new FileReader();
    _0x1fb445.onload = function (_0x1c18ac) {
      var _0x55e73d = _0x1c18ac.target.result;
      document.getElementById("previewImage").src = _0x55e73d;
      localStorage.setItem("uploadedImage", _0x55e73d);
    };
    _0x1fb445.readAsDataURL(_0x2667ea);
  }
});
