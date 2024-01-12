const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const miliSeconds = document.getElementById("miliSeconds");
const stopButton = document.getElementById("stop-button");
const reset = document.getElementById("reset");

const increment = (obj) => {
  x = parseInt(obj.innerText);
  obj.innerText = ++x;
  if (obj.id == `miliSeconds`) {
    if (parseInt(obj.innerText) >= 100) {
      obj.innerText = `0`;
    }
  }

  if (obj.id == `seconds` || obj.id == `minutes`) {
    if (parseInt(obj.innerText) >= 60) {
      obj.innerText = `0`;
    }
  }
};

const start = () => {
  const mili = setInterval(increment, 1, miliSeconds);
  const sec = setInterval(increment, 1000, seconds);
  const min = setInterval(increment, 60 * 1000, minutes);

  const clear = () => {
    clearInterval(mili);
    clearInterval(min);
    clearInterval(sec);
  };

  stopButton.addEventListener("click", () => {
    clear();
  });
  reset.addEventListener("click", () => {
    clear();
    miliSeconds.innerText = 0;
    seconds.innerText = 0;
    minutes.innerText = 0;
  });
};
