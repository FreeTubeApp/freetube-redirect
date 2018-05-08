function checkUrl(e) {
  // Grab <a> elements
  let target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  // Redirect the user to FreeTube
  if (target.href.includes('youtube.com') || target.href.includes('youtu.be') || target.href.includes('hooktube.com')){
    window.stop();
    e.stopImmediatePropagation();
    e.preventDefault();
    let url = 'freetube://' + target.href;
    console.log(url);
    window.location = url;
    return false;
  }
}

// Listen for click events
window.addEventListener("click", (event) => {
  checkUrl(event);
});
