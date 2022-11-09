function parseJSONToObjects(response) {
  return response.json();
}

function fillUsersDropDown(users) {
  console.log(users);
  const dropDownList = document.getElementById("dropDownList");
  for (const user of users) {
    const option = new Option(user.name, user.id);
    dropDownList.appendChild(option);
  }
}

function fetchUsers() {
  let promise = fetch("https://jsonplaceholder.typicode.com/users");
  let promiseThatReturnsToObjects = promise.then(parseJSONToObjects);
  promiseThatReturnsToObjects.then(fillUsersDropDown);
}
window.onload = function () {
  fetchUsers();
};
