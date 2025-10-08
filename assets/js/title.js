var titles = [
  "@",
  "@r",
  "@re",
  "@rev",
  "@reven",
  "@revenge",
  "@revenger",
  "@revenger d",
  "@revenger di",
  "@revenger dia",
  "@revenger diabl",
  "@revenger diablo"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
