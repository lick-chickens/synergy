document.getElementById("generate").onclick = function () {
  let service = document.getElementById("service").value;
  let master = document.getElementById("master").value;
  document.getElementById("result").innerText = "!SYN?" + hex_md5(master + service).substr(7, 12);
};
