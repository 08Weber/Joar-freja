function saveAndNavigate() {
  var _0xc21723 = document.getElementById("btn1").value;
  var _0x794f97 = document.getElementById("btn2").value;
  var _0x49e78a = document.getElementById("btn3").value;
  var _0x1bf883 = document.getElementById("btn4").value;
  localStorage.setItem("fornamn", _0xc21723);
  localStorage.setItem("efternamn", _0x794f97);
  localStorage.setItem("age", _0x49e78a);
  localStorage.setItem("personnummer", _0x1bf883);
  window.location.href = "index.html";
}
var fornamn = ('Carl');
var efternamn = ('Eriksson');
var age = ('18');
var personnummer = ('070222-1574');
document.getElementById("updateEfternamn").textContent = efternamn;
document.getElementById("updateFornamn").textContent = fornamn;
document.getElementById("updateAge").textContent = age;
document.getElementById("Personnummer").textContent = personnummer;
function updateSpans() {
  var _0x235966 = document.getElementById("btn1").value;
  var _0x5d7fed = document.getElementById("btn2").value;
  var _0x385b7b = new Date();
  _0x385b7b.setDate(_0x385b7b.getDate() + 30);
  var _0x3f826a = {
    'fornamn': "",
    'efternamn': "",
    'expiration': _0x385b7b.getTime()
  };
  localStorage.setItem("userData", JSON.stringify(_0x3f826a));
  window.open("other.html", "_blank");
}
