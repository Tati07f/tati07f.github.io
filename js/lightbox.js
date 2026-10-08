// Click any gallery image to view it larger; click again or press Esc to close.
(function () {
  var box = document.createElement("div");
  box.className = "lightbox";
  box.innerHTML = "<img alt=''>";
  document.body.appendChild(box);
  var big = box.querySelector("img");

  document.querySelectorAll(".gallery img").forEach(function (img) {
    img.addEventListener("click", function () {
      big.src = img.src;
      big.alt = img.alt;
      box.classList.add("open");
    });
  });
  box.addEventListener("click", function () { box.classList.remove("open"); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") box.classList.remove("open");
  });
})();
