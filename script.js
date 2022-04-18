import Person from "./Person.js";
import populateTable from "./populateTable.js";

const tableBody = document.querySelector("tbody");

let data = [];
let count = 0;

tableBody.addEventListener("click", (e) => {
  const rowTarget = e.target.parentNode.parentNode;
  if (e.target.id == "addRow") addRow();
  if (e.target.id == "remove") removefn(rowTarget);
  if (e.target.id == "edit") edit(rowTarget);
  if (e.target.id == "cancel") populateTable(tableBody, data);
  if (e.target.id == "update") update(rowTarget);
});

function addRow() {
  count++;

  const name = document.getElementById(`userName`).value;
  const address = document.getElementById(`userAddress`).value;
  const number = document.getElementById(`userNumber`).value;

  data.push(new Person(count, name, address, number));
  console.log(data);

  populateTable(tableBody, data);
}

function removefn(el) {
  //   const remove = document.getElementById("remove");
  data = data.filter((data) => data.id != el.id);
  el.remove();
  //   remove.closest(".latrow").remove();
}

function edit(el) {
  const person = data.find((person) => person.id == el.id);
  const editRow = `<td class="row__heading"><input type="text" id="userName" value="${person.name}"></td>
    <td class="row__heading"><input type="text" id="userAddress" value="${person.address}"></td>
    <td class="row__heading"><input type="number" id="userNumber" value="${person.number}"></td>
    <td><input type="button" value="Update" id="update">
    <input type="button" value="Cancel" id="cancel"></td>`;

  el.innerHTML = editRow;
}

function update(el) {
  // get the index of the person which we need to edit in the data
  const index = data.findIndex((person) => person.id == el.id);

  // get all the current values in the editing row
  const name = el.querySelector(`#userName`).value;
  const address = el.querySelector(`#userAddress`).value;
  const number = el.querySelector(`#userNumber`).value;

  data[index] = new Person(el.id, name, address, number);
  populateTable(tableBody, data);
}

// if (update) {
//     update.addEventListener('click', function (e) {
//         e.preventDefault();
//         console.log('hello')
//         const name = document.getElementsByClassName(userName).value;
//         const address = document.getElementsByClassName(userAddress).value;
//         const number = document.getElementsByClassName(userNumber).value;

//         console.log(name, address, number);
//     })
// }

// addRow.addEventListener('click', function (e) {
//     e.preventDefault();
//     const newRow = `<tr>
//     <td class="row__heading"><input type="text" class="userName[]"></td>
//     <td class="row__heading"><input type="text" class="address[]"></td>
//     <td class="row__heading"><input type="number" class="number[]"></td>
//     <td class="row__heading">
//         <input type="button" value="Update" class="update">
//     </td>
//     </tr>`
//     // table.innerHTML += newRow;
//     table.insertAdjacentHTML('beforeend', newRow);
//     addRowlast.insertAdjacentHTML('beforeend');

// });

// const update = document.querySelector('.update');
// update.addEventListener('click', function (e) {
//     e.preventDefault();

//     const name = document.getElementsByClassName('name').value;
//     console.log(name, 'afdf')

// })

// submit.addEventListener('click', function (e) {
//     e.preventDefault();
//     const name = document.querySelector('.name__input').value;
//     const address = document.querySelector('.address__input').value;
//     const number = document.querySelector('.number__input').value;
//     const newRow = `<tr class="row">
//     <td class="row__heading"><input type="text" name="${name}"></td>
//     <td class="row__heading"><input type="text" name="${address}"></td>
//     <td class="row__heading"><input type="number" name="${number}"></td>
//     <td class="row__heading">
//         <input type="button" value="Edit" class="edit">
//         <input type="button" value="Remove" class="remove">
//     </td>
// </tr>`
//     console.log(newRow);
//     table.appendChild(newRow);

// })
