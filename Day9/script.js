const dogs = [
  { name: "Snickers", age: 2 },
  { name: "hugo", age: 8 },
];

function makeGreen() {
  const p = document.querySelector("p");
  p.style.color = "#BADA55";
  p.style.fontSize = "50px";
}

// Regular
console.log("hello");

// Interpolated

// Styled
console.log("%I am some text", "font-size: 50px");

// warning!
console.warn("OH NOO");

// Error :|
console.error("ERROR");

// Info
console.info("this is fun");

// Testing
const p = document.querySelector("p");
console.assert(p.classList.contains("ouch"), "That is wrong");

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);

// Grouping together
dogs.forEach((dog) => {
  console.log(`${dog.name} is ${dog.age} years old`);
});

// counting
console.count("wes");

// timing
console.time("fetching data");
