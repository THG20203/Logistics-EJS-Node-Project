const wrapper = document.querySelector(".video-wrapper");
const video = wrapper.querySelector("video");
const play = wrapper.querySelector("button");

/* when click button, add the playing class to the entire video-wrapper element */
play.addEventListener("click", () => {
  /* playing declaration forces opacity of gradient and the button to 0 */
  wrapper.classList.add("playing");
  video.play();
});

video.addEventListener("ended", () => {
  wrapper.classList.remove("playing");
  video.currentTime = 0;
});
