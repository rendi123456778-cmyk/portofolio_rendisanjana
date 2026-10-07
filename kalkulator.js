function hitung(operator) {
  const a = Number(document.getElementById("angka1").value);
  const b = Number(document.getElementById("angka2").value);
  let hasil;
  if (operator === "+") {
    hasil = a + b;
  } else if (operator === "-") {
    hasil = a - b;
  } else if (operator === "*") {
    hasil = a * b;
  } else if (operator === "/") {
    if (b === 0) {
      document.getElementById("hasil").textContent = "Tidak bisa bagi 0";
      return;
    }
    hasil = a / b;
  }
  document.getElementById("hasil").textContent = hasil;
}
