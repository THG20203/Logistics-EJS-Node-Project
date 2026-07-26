const wrapper = document.querySelector(".video-wrapper");
const video = wrapper.querySelector("video");
const play = wrapper.querySelector("button");

/* when click button, add the playing class to the entire video-wrapper element */
play.addEventListener("click", () => {
  wrapper.classList.add("playing");
  video.play();
});
