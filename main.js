function startQuiz() {
  let inputan = document.getElementById("inputan");
  inputan.setAttribute("style", "display: none;");
  let soal = document.getElementById("soal");
  soal.style.display = "block";

  var angka1 = Math.floor(Math.random() * 10 + 1);
  var angka2 = Math.floor(Math.random() * 10 + 1);
  document.getElementById("tampilAngka").innerHTML = angka1;
  document.getElementById("tampilAngka2").innerHTML = angka2;

  var hasilAngka = angka1 + angka2;
  let arr = [null, null, null, null];
  let random = Math.floor(Math.random() * 3); //2
  arr[random] = hasilAngka;
  //for untuk angka
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === null) {
      let hasilFloor = Math.floor(Math.random() * 20);
      while (hasilFloor === arr[random]) {
        hasilFloor = Math.floor(Math.random() * 20);
      }
      arr[i] = hasilFloor;
    }
  }
  //for untuk button
  for (let i = 0; i < arr.length; i++) {
    if (i === random) {
      document.getElementById(
        "tampungButton"
      ).innerHTML += `<button id="jawabBenar${i}" onclick="hasilBenar()">${arr[i]}</button>`;
      //menambahkan event onclick kalau jawaban benar
      // let button2Object = document.getElementById(`jawabBenar${i}`);
      // button2Object.addEventListener("click", hasilBenar);
      //random dibuat looping while
    } else {
      document.getElementById(
        "tampungButton"
      ).innerHTML += `<button id="jawabBenar${i}" onclick="hasilSalah()">${arr[i]}</button>`;
      // let button2Object = document.getElementById(`jawabBenar${i}`);
      // button2Object.addEventListener("click", hasilSalah);
    }
  }
  console.log("test");
}

function hasilBenar() {
  let soal = document.getElementById("soal");
  soal.style.display = "none";
  let outputBenar = document.getElementById("benar");
  outputBenar.style.display = "block";
  console.log("testbenar");
}

function hasilSalah() {
  let soal = document.getElementById("soal");
  soal.style.display = "none";
  let outputSalah = document.getElementById("salah");
  outputSalah.style.display = "block";
}

function ulang() {
  let soal = document.getElementById("soal");
  soal.style.display = "block";
  let outputSalah = document.getElementById("salah");
  outputSalah.style.display = "none";
}

// function next() {
//   let soalB = document.getElementById("soalB");
//   soalB.style.display = "block";
//   let outputBenar = document.getElementById("benar");
//   outputBenar.style.display = "none";
// }
