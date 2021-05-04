// input data for carousel
var position = 0;
var slides = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg"];

// short func to show cycle slider
function nextSlide() {
  document.slider_item.src = slides[position];
  if(position < slides.length - 1) {
    position++;
  } else {
    position = 0;
  }

  setTimeout("nextSlide()", 2500);
}

window.onload = nextSlide;


//for popup

var popup = document.getElementById('popup');
var popupBtn = document.getElementById('popup-btn');
var closeBtn = document.getElementById('close');


popupBtn.onclick = function(){
  popup.style.display = "block";
}
closeBtn.onclick = function() {
  popup.style.display = "none";
}
