"use strict";

// Function to add and remove row and column
function addRow() {
  let element = document.querySelector("tbody");
  let tr = document.createElement("tr");
  tr.className = "trow";
  element.append(tr);

  let count = document.querySelector("tr");

  for (let i = 0; i < count.childElementCount; i++) {
    let td = document.createElement("td");
    tr.append(td);
  }
}

function addColumn() {
  let columns = document.querySelectorAll(".trow");
  columns.forEach((element) => {
    let td = document.createElement("td");
    element.append(td);
  });
}

// Attach the add and remove string function to the buttons

let rightButton = document.querySelector(".button-right");
rightButton.addEventListener("click", addColumn);

let downButton = document.querySelector(".button-down");
downButton.addEventListener("click", addRow);

// Functions for deleting a column and row

let rowIndex = 0;
let cellIndex = 0;

function removeRow() {
  let row = document.querySelectorAll(".trow");
  row[rowIndex].remove();
  hideButtons();
}

function removeColumn() {
  let rows = document.querySelectorAll(".trow");
  rows.forEach((element) => {
    element.children[cellIndex].remove();
  });
  hideButtons();
}

// Attach the delete column and row function to the buttons

let rightButtonMinus = document.querySelector(".button-right-minus");
rightButtonMinus.addEventListener("click", removeColumn);

let downButtonMinus = document.querySelector(".button-down-minus");
downButtonMinus.addEventListener("click", removeRow);

let table = document.querySelector("table");

table.addEventListener("mouseleave", hideButtons);
table.addEventListener("mouseenter", showButtons);

let moveBlock = document.getElementById("button-minus1");
let moveBlock2 = document.getElementById("button-minus2");

function showButtons() {
  let rows = document.querySelectorAll(".trow");
  if (rows.length > 1) {
    document.getElementById("button-minus2").style.display = "block";
  }
  if (rows[0].childElementCount > 1) {
    document.getElementById("button-minus1").style.display = "block";
  }
}

function hideButtons() {
  document.getElementById("button-minus1").style.display = "none";
  document.getElementById("button-minus2").style.display = "none";
}

moveBlock.addEventListener("mouseenter", showButtons);
moveBlock2.addEventListener("mouseenter", showButtons);

moveBlock.addEventListener("mouseleave", hideButtons);
moveBlock2.addEventListener("mouseleave", hideButtons);

document.addEventListener("mouseover", function (event) {
  if (event.target.nodeName === "TD") {
    cellIndex = event.target.cellIndex;
    rowIndex = event.target.parentNode.rowIndex;
    moveBlock.style.transform = "translateX(" + event.target.offsetLeft + "px)";
    moveBlock2.style.transform = "translateY(" + event.target.offsetTop + "px)";
  }
});
