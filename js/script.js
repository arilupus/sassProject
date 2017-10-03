// logo with svg
  /* var s = Snap("#logo");
  var circleLogo = s.circle(35, 35, 31);
  circleLogo.attr({
    fill: "#33691e"
  });
  var ellipseLogo = s.ellipse(35, 35, 31, 15);
  ellipseLogo.attr({
    fill: "#ffffa8"
  });
  var pathLogo = s.path(Snap.format("M 12 32 q 17 -11 4 13 q 0 -9 17 -17 q 12 -4 -7 17 q 0 -9 17 -17 q 12 -4 -7 17 q 0 -9 22 -17"));
  pathLogo.attr({
    stroke: "#33691e",
    strokeWidth: "3",
    fill: "none"
  });
  var discs = s.group(circleLogo, ellipseLogo, pathLogo); */

$(document).ready(function(){
    var availableTags = [
      "Jakarta Pusat",
      "Kebon Kacang",
      "Kebon Sirih",
      "Gondangdia",
      "Snackbar",
      "Gulp Gulp Gulp",
      "Begadang",
      "Survival",
      $('<div />').html('Mmm &#128566;').text(),
      "Kreasi Dapur Negri",
      "Jadi Kapten",
      $('<div />').html('Happy Costumers &#128523;').text(),
      "Nasi Goreng",
      "Nasi Uduk",
      "Ketoprak",
      "Gado-Gado",
      "Bakso",
      "Mie Ayam",
      "Pecel Lele",
      "Pecel Ayam",
      "Capuccino Cincau",
      "Es Cendol",
      "Es Doger",
      "Es Cincau",
      "Es Jeruk",
      "Jus Alpukat",
      "Jus Mangga",
      "Jus Apel",
      "Nasi Padang"
    ];
    $( "#autocompleteSearch" ).autocomplete({
      source: availableTags
    });
});