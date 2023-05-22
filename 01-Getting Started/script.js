"use strict";

const buttonElement = document.querySelector(".btn");

buttonElement.addEventListener("click", showModelWindow);

function showModelWindow(e) {
  e.preventDefault();

  let html = `<div class="model">
                    <div class="box">
                        <p>Are you sure?</p>
                        <button class="cancel-btn">Cancel</button>
                        <button class="confirm-btn">Confirm</button>
                    </div>
                </div>`;

  document.body.insertAdjacentHTML("beforeend", html);

  const cancelBtn = document.querySelector(".cancel-btn");
  const confirmBtn = document.querySelector(".confirm-btn");

  cancelBtn.addEventListener("click", closeModelWindow);
  confirmBtn.addEventListener("click", deleteTodo);
}

function closeModelWindow(e) {
  e.preventDefault();

  document.querySelector(".model").remove();
}

function deleteTodo(e) {
  e.preventDefault();

  document.querySelector(".model").remove();
  document.querySelector(".card").remove();

  const p = document.createElement("p");
  p.textContent = "Todo Delete 🚮";
  p.style.color = "red";
  document.body.append(p);
}

/*

With Just JavaScript:

- If we have one todo to delete then javascript is Ok.
- But what if there are more than one todos which comes from database. Doing this same task in just javascript make code complex, less readable, repeatative, may causes bugs.
- In just javascript we need to create each and every thing from scratch multiple times which is called Imperative approach (means action by action or step by steps).

- That is why we require extra help from React Js. 

*/

const value = "Hello";
const hi = "Hello World";
