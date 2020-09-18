function viduvar() {
  for (var i = 0; i < 3; i++) {
    console.log("i bên trong vòng lặp: ", i); // kết quả: 0, 1, 2
  }

  console.log("i bên ngoài vòng lặp ", i); //Kết quả: 3
}

function vidulet(){
  for (let j = 0; j < 3; j++) {
    console.log("j bên trong vòng lặp: ", j); //Kết quả:  0, 1, 2
  }
  console.log("j bên ngoài vòng lặp: ", j); // ReferenceError: j is not defined
}

viduvar();
vidulet();