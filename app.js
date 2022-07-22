const allSpeech = document.querySelectorAll(".speech");
const totalSpeech = allSpeech.length;
let speechNumber = 0;

document.querySelector(".prev-btn").addEventListener("click", showPrevSpeech);
document.querySelector(".next-btn").addEventListener("click", showNextSpeech);

function hideSpeech() {
  for (const speech of allSpeech) {
    speech.classList.remove("show-speech");
  }
}

function showNextSpeech() {
  hideSpeech();
  if (speechNumber === totalSpeech - 1) {
    speechNumber = 0;
  } else {
    speechNumber++;
  }
  allSpeech[speechNumber].classList.add("show-speech");
}

function showPrevSpeech() {
  hideSpeech();
  if (speechNumber === 0) {
    speechNumber = totalSpeech - 1;
  } else {
    speechNumber--;
  }
  allSpeech[speechNumber].classList.add("show-speech");
  console.log("heejlasg");
}
