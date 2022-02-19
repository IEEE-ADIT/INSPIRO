function myFunction() {
    var x = document.getElementById("myDIV");
    var x2 = document.getElementById("myDIV2");
    if (x.style.display === "none") {
      x.style.display = "block";
      x2.style.display = "none";
    } else {
      x.style.display = "none";
      x2.style.display = "block";
    }

  }