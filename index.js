const statusHTML = document.getElementById("status");
const displayUserHTML = document.getElementById("displayUser");
let empList = [];

const rander = () => {
  console.log(empList)
  if (empList.length === 0) {
    displayUserHTML.innerHTML = `<p class="employeeText">You have 0 Employees.</p>`;
  } else {
    displayUserHTML.innerHTML = "";
    empList.forEach((v, i) => {
      const myHTML = `
    <div class="displayUserContainer">
        <div class="userContainer">
            <p>${i+1}.</p>
            <p>Name: ${v.name}</p>
            <p>Profession: ${v.profession}</p>
            <p>Age: ${v.age}</p>
        </div>
        <button class="deleteButton" onclick="deleteUser(${i})">Delete User</button>
    </div>
    `;
    displayUserHTML.innerHTML += myHTML;
    });
  }
};

const onChange = (e) => {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  statusHTML.innerHTML = "";
  if (name.length === 0 || profession.length === 0 || age.length === 0) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.textContent =
      "Error: Please make sure all the fields are filled before adding in an employee !";
    statusHTML.appendChild(error);
  }else{
    const success = document.createElement("p");
    success.classList.add("success");
    success.textContent =
      "Success: All the fields are filled !";
    statusHTML.appendChild(success);
  }
}

const addUser = () => {
  const name = document.getElementById("name").value;
  const profession = document.getElementById("profession").value;
  const age = document.getElementById("age").value;
  statusHTML.innerHTML = "";
  if (name.length === 0 || profession.length === 0 || age.length === 0) {
    const error = document.createElement("p");
    error.classList.add("error");
    error.textContent =
      "Error: Please make sure all the fields are filled before adding in an employee !";
    statusHTML.appendChild(error);
    return;
  }
  empList.push({
    id: Date.now(),
    name: name,
    profession: profession,
    age: age
  });
  const success = document.createElement("p");
    success.classList.add("success");
    success.textContent =
      "Success: Employee Added !";
    statusHTML.appendChild(success);
  rander();
};

const deleteUser = (index) => {
    empList = empList.filter((v, i)=>i!==index);
    rander();
}

rander();