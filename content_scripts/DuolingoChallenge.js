import ReactUtils from "./ReactUtils.js";

export default class DuolingoChallenge extends ReactUtils {
  constructor() {
    super();

    // get the react internals for the current lesson
    this.challenge_internals = this.get_challenge_internals();
    console.logger(this.challenge_internals);

    // make sure the keyboard is enabled so we can paste in the input box
    if (!this.challenge_internals.browserSettings.typingEnabled) {
      const enable_typing_node = Array.from(
        document.querySelectorAll("div")
      ).find((e) => {
        return e.innerHTML.toLowerCase() === "use keyboard";
      });

      
