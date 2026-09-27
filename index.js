// this is the part of javascript and i started from here to write javascript part
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const btn = document.querySelector("#btn");
const increase = document.querySelector("#count");
const question_part = document.querySelector(".question-part");
const asnwer_part = document.querySelector(".asnwer-part");
let count = 0;
const numberList = [one, two, three, four, five];
// this is with chatbot and me
numberList.forEach((number) => {
  number.addEventListener("click", () => {
    // Remove the selected color from all buttons
    numberList.forEach((item) => {
      item.style.backgroundColor = "";
    });

    // Add the color to the clicked button
    number.style.backgroundColor = "white";

    // Save the selected number
    count = number.textContent;

    // Display the selected number
    increase.textContent = count;
  });
});

// this is my logic
// one.addEventListener("click", () => {
//   one.style.backgroundColor = "white";
//   count = 1;
//   increase.textContent = count;
//   two.style.backgroundColor = "";
//   three.style.backgroundColor = "";
//   four.style.backgroundColor = "";
//   five.style.backgroundColor = "";
// });
// two.addEventListener("click", () => {
//   two.style.backgroundColor = "white";
//   count = 2;
//   increase.textContent = count;
//   one.style.backgroundColor = "";
//   three.style.backgroundColor = "";
//   four.style.backgroundColor = "";
//   five.style.backgroundColor = "";
// });
// three.addEventListener("click", () => {
//   three.style.backgroundColor = "white";
//   count = 3;
//   increase.textContent = count;
//   two.style.backgroundColor = "";
//   one.style.backgroundColor = "";
//   four.style.backgroundColor = "";
//   five.style.backgroundColor = "";
// });
// four.addEventListener("click", () => {
//   four.style.backgroundColor = "white";
//   count = 4;
//   increase.textContent = count;
//   two.style.backgroundColor = "";
//   three.style.backgroundColor = "";
//   one.style.backgroundColor = "";
//   five.style.backgroundColor = "";
// });
// five.addEventListener("click", () => {
//   five.style.backgroundColor = "white";
//   count = 5;
//   increase.textContent = count;
//   two.style.backgroundColor = "";
//   three.style.backgroundColor = "";
//   four.style.backgroundColor = "";
//   one.style.backgroundColor = "";
// });

btn.addEventListener("click", (even) => {
  asnwer_part.classList.add("both-part");
  question_part.classList.remove("both-part");
});
