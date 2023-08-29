var slider = document.querySelectorAll(".hor");
var mouseDown = false;
var startX, scrollLeft;

var startDragging = function (e) {
  mouseDown = true;
  slider.forEach((ele) => {
    startX = e.pageX - ele.offsetLeft;
    scrollLeft = ele.scrollLeft;
  });
};
var stopDragging = function (event) {
  mouseDown = false;
};
slider.forEach((ele) => {
  ele.addEventListener("mousemove", (e) => {
    e.preventDefault();
    if (!mouseDown) {
      return;
    }
    var x = e.pageX - ele.offsetLeft;
    var scroll = x - startX;
    ele.scrollLeft = scrollLeft - scroll;
  });
});

// Add the event listeners
slider.forEach((x) => {
  x.addEventListener("mousedown", startDragging, false);
  x.addEventListener("mouseup", stopDragging, false);
  x.addEventListener("mouseleave", stopDragging, false);
});
