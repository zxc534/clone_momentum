const quotes = [
  {
    quote:
      "Life is like a box of chocolates. You never know what you're gonna get.",
    author: "Forrest Gump"
  },
  {
    quote: "What doesn't kill us makes us stronger.",
    author: "George Friedrich Nietzsche"
  },
  {
    quote: "Not all those who wander are lost.",
    author: "J. R. R. Tolkein"
  },
  {
    quote: "Knowledge is power.",
    author: "Sir Francis Bacon"
  },
  {
    quote: "If at first you don’t succeed, try, try again.",
    author: "W. E. Hickson"
  },
  {
    quote: "I think therefore I am.",
    author: "Rene Descartes"
  },
  {
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen"
  },
  {
    quote: "All the world’s a stage, and all the men and women merely players.",
    author: "William Shakespeare"
  },
  {
    quote: "For those to whom much is given, much is required.",
    author: "the Bible"
  },
  {
    quote: "I'll be back.",
    author: "Terminator"
  }
];
const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const randQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = randQuote.quote;
author.innerText = randQuote.author;
