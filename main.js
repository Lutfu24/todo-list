let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let res = document.querySelector(".result");

btn.addEventListener("click", () => {
  res.innerHTML += ` <p class="text">${input.value}<button class="delete">delete</button></p> `;
  const text = document.querySelector(".text");
  const reset = document.querySelector(".delete");
  input.value = "";

  reset.addEventListener("click", () => {
    text.remove();
  });
});
