function nextPage() {
  window.location.href = "yes.html";
  var wow = document.getElementById("wow");
  wow.play();
}

function moveButton() {
  var button = document.getElementById("noButton");

    button.classList.add("wiggle");
    setTimeout(() => {
      button.classList.remove("wiggle");
    }, 500);

  var currentX = button.offsetLeft + button.offsetWidth / 2;
  var currentY = button.offsetTop + button.offsetHeight / 2;

  var x = Math.random() * (window.innerWidth - button.offsetWidth);
  var y = Math.random() * (window.innerHeight - button.offsetHeight);
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;

  var heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = `${currentX}px`;
  heart.style.top = `${currentY}px`;
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
}

function playAudio(){
  var wrong = document.getElementById("wrong");
  wrong.play();
}

