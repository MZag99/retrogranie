(function (w, throttleTime) {
  var isBusy = false;
  function myFunction() {
    console.log("FIRED!!!");
    var navbar = w.document.getElementById("nav");
    if (!navbar) {
      throw new Error("Navbar not found");
    }
    var sticky = navbar.offsetTop;
    if (w.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  try {
    w.onscroll = function () {
      if (isBusy) {
        return;
      }
      isBusy = true;
      setTimeout(function () {
        myFunction();
        isBusy = false;
      }, throttleTime);
    };
  } catch (error) {
    console.error(error);
  }
  /** Set throttle time in ms between 50 (most responsive) and 1000 (most CPU - effective) */
})(window, 100);
