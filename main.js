let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let res = document.querySelector(".result");
const deleteBtn = document.createElement("button");

btn.addEventListener("click", () => {
  res.innerHTML += ` <p class="text">${
    input.value
  } <button class="delete">${"Delete"}</button></p>
    `;
});

deleteBtn.addEventListener("click", () => {
  res.delete();
});
