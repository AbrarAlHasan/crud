const addRow = document.querySelector('.addRow');
const table = document.querySelector('.footer');
const form = document.querySelector('form');
const submit = document.querySelector('.btn__submit');
//const update = document.querySelector('update');
const addRowlast = document.querySelector('.footer');


const data = [];
const obj = {};

addRow.addEventListener('click', function (e) {
    e.preventDefault();

    const name = document.getElementById("userName").value;
    const address = document.getElementById("userAddress").value;
    const number = document.getElementById("userNumber").value;

    const newRow = `<tr>
    <td class="row__heading"><label>${name}</label></td>
    <td class="row__heading"><label>${address}</label></td>
    <td class="row__heading"><label>${number}</label></td>
    <td class="row__heading">
    <input type="button" value="Edit" id="edit">
    <input type="button" value="Remove" id="remove">
    </td>
    </tr>`
    // table.innerHTML += newRow;
    table.insertAdjacentHTML('beforebegin', newRow);

    document.getElementById("userName").value = null;
    document.getElementById("userAddress").value = null;
    document.getElementById("userNumber").value = null;


});

function update() {
    const name = document.getElementById("userName").value;
    const address = document.getElementById("userAddress").value;
    const number = document.getElementById("userNumber").value;

    const obj = { name: name, address: address, number: number };
    console.log(obj);
    data.push(obj);

    const userName_label = document.getElementById("userName");
    const userAddress_label = document.getElementById("userAddress");
    const userNumber_label = document.getElementById("userNumber");
    userName_label.outerHTML = `<label></label>`;
    userAddress_label.outerHTML = `<label></label>`;
    userNumber_label.outerHTML = `<label></label>`;

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
