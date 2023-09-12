var slider = document.querySelectorAll(".horscroll");
slider.forEach((ele) => {
  var mouseDown = false;
  var startX, scrollLeft;
  var startDragging = function (e) {
    mouseDown = true;
    startX = e.pageX - ele.offsetLeft;
    scrollLeft = ele.scrollLeft;
  };
  var stopDragging = function (event) {
    mouseDown = false;
  };

  ele.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    var x = e.pageX - ele.offsetLeft;
    var scroll = x - startX;
    ele.scrollLeft = scrollLeft - scroll;
  });

  // Add the event listeners
  ele.addEventListener("mousedown", startDragging, false);
  ele.addEventListener("mouseup", stopDragging, false);
  ele.addEventListener("mouseleave", stopDragging, false);
});
