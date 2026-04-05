const text = "Ahmad ❤️";

let i = 0;

const nameEl = document.getElementById("name");

setTimeout(() => {

  const interval = setInterval(() => {

    if (i < text.length) {

      nameEl.textContent += text[i];

      i++;

    } else {

      clearInterval(interval);

    }

  }, 150);

}, 3000);