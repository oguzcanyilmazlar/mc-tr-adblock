console.log("mctr adblock - acablade");

removeAds();

function removeAds() {
  let elems = document.body.getElementsByTagName("*");
  for (let elem of elems) {
    let className = elem.className;
    if (typeof className != "string") continue;
    className = className.trim();
    let shouldRemove = elem.className.includes("reklam");
    if (shouldRemove) {
      elem.innerHTML = "";
    }
  }
}
