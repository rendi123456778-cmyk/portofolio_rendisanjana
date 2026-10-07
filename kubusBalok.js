$(document).ready(function () {
  $("#formBalok").hide();

  $("#shape").change(function () {
    let pilihan = $("#shape").val();

    // menampilkan pilihan
    if (pilihan == "kubus") {
      $("#formKubus").show();
      $("#formBalok").hide();
    } else if (pilihan == "balok") {
      $("#formKubus").hide();
      $("#formBalok").show();
    }

    //mengosong kan hasil yang lama dan error
    $("#hasilVolume").text("-");
    $("#hasilLuas").text("-");
    $("#pesanError").addClass("hidden");
  });
  // tombol di pencet
  $("#btnHitung").click(function () {
    let pilihan = $("#shape").val();

    // kubus
    if (pilihan == "kubus") {
      let s = Number($("#sisi").val());
      // mengecek apakah ada input kosong atau 0
      if (s <= 0) {
        $("#pesanError").removeClass("hidden");
      } else {
        $("#pesanError").addClass("hidden");

        // menghitung rumus kubus
        let volume = s * s * s;
        let luas = 6 * s * s;

        // menampilkan hasi
        $("#hasilVolume").text(volume + " cm³");
        $("#hasilLuas").text(luas + " cm²");
      }
    }
    // balok
    else if (pilihan == "balok") {
      let p = Number($("#panjang").val());
      let l = Number($("#lebar").val());
      let t = Number($("#tinggi").val());

      // mengecek apakah ada input kosong atau 0
      if (p <= 0 || l <= 0 || t <= 0) {
        $("#pesanError").removeClass("hidden");
      } else {
        $("#pesanError").addClass("hidden");

        // hitung rumus balok
        let volume = p * l * t;
        let luas = 2 * (p * l + p * t + l * t);

        // tampilkan hasilnya
        $("#hasilVolume").text(volume + " cm³");
        $("#hasilLuas").text(luas + " cm²");
      }
    }
  });
});
