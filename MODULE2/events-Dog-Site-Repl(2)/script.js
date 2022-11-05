const increment = document.querySelectorAll(".increment");
increment.forEach(increase => {
increase.addEventListener("click", (event) => {
  // console.log(event.target.parentNode);
  // const parent = increase.parentNode;
  // console.log(parent.innerHTML);
  // const hearts = parent.querySelector(".hearts"); <-all the above code also works to do the same as the one liner #8 below
  const hearts = event.target.parentNode.querySelector(".hearts");
  hearts.textContent += "❤";
})
});

const decrement = document.querySelectorAll(".decrement");
decrement.forEach(decrease => {
  decrease.addEventListener("click", (event) => {
  const parent = decrease.parentNode;
  const hearts = parent.querySelector(".hearts");
  hearts.textContent = hearts.textContent.slice(0, -1);
})
});