export default function (tableBody, data) {
  let tableDOM = `<tr class="row" id="table-heading">
              <th class="row__heading">Name</th>
              <th class="row__heading">Address</th>
              <th class="row__heading">Number</th>
              <th class="row__heading">Actions</th>
          </tr>`;
  data.forEach((person) => {
    const newRow = `<tr class="latrow" id=${person.id}>
              <td class="row__heading"><label>${person.name}</label></td>
              <td class="row__heading"><label>${person.address}</label></td>
              <td class="row__heading"><label>${person.number}</label></td>
              <td class="row__heading">
              <input type="button" value="Edit" id="edit">
              <input type="button" value="Remove" id="remove">
              </td>
          </tr>`;
    // table.innerHTML += newRow;
    tableDOM += newRow;
  });
  tableDOM += `
    <tr class="footer" id="action_row">
        <td class="row__heading"><input type="text" id="userName"></td>
        <td class="row__heading"><input type="text" id="userAddress"></td>
        <td class="row__heading"><input type="number" id="userNumber"></td>
        <td colspan="4"><input type="button" value="Add" id="addRow"></td>
    </tr>`;
  tableBody.innerHTML = tableDOM;
  resetFields();
}

function resetFields() {
  document.getElementById(`userName`).value = null;
  document.getElementById(`userAddress`).value = null;
  document.getElementById(`userNumber`).value = null;
}
