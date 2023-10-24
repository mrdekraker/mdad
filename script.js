// fetch dad joke from "https://icanhazdadjoke.com/"

const btn = document.querySelector("#btn");
const jokes = document.querySelector("#joke");

// JOKES
const responses = [
  "Ugh.",
  "🤦🏻‍♂️",
  "OMG DAD.",
  "Seriously?",
  "That Was Terrible",
  "That Was The Worst One",
  "I'm Telling Mom",
  "You Need To Stop",
]

const getJoke = async () => {
  const getJoke = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  });

  const randomResponse = Math.floor(Math.random() * responses.length);
  const joke = await getJoke.json();

  const jokeText = joke.joke;
  jokes.innerHTML = jokeText;
  
  btn.innerHTML = `${responses[randomResponse]}`;
};

btn.addEventListener("click", getJoke);



// CARDS
const cards = document.querySelectorAll(`.card`);
// Add the tails to each card
cards.forEach((card) => {
  [`top`, `right`, `bottom`, `left`].forEach((side) => {
    const tail = document.createElement(`div`);
    tail.classList.add(`tail`, side);
    card.appendChild(tail);
  });
  // if that card has no colours, add some
  if (!card.style.getPropertyValue(`--color1`)) {
    card.style.setProperty(
      `--color1`,
      `hsl(${Math.random() * 360}, 100%, 50%)`
    );
    card.style.setProperty(
      `--color2`,
      `hsl(${Math.random() * 360}, 100%, 50%)`
    );
  }
});

setInterval(() => {
  cards.forEach((card) => {
    if (!card.style.getPropertyValue(`--color1`)) {
      card.style.setProperty(
        `--color1`,
        `hsl(${Math.random() * 360}, 100%, 50%)`
      );
      card.style.setProperty(
        `--color2`,
        `hsl(${Math.random() * 360}, 100%, 50%)`
      );
    }
  });
}, 7000);