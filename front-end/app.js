const userList = document.getElementById("userList");
const loginForm = document.getElementById("loginForm");
const userForm = document.getElementById("userForm");

let users = [
  { id: 1, name: "Mario", email: "mario@test.it", role: "admin" }
];

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });
}

if (userList) {
  renderUsers();
}

function renderUsers() {
  userList.innerHTML = "";
  users.forEach((u) => {
    const li = document.createElement("li");
    li.textContent = `${u.name} (${u.role})`;
    li.onclick = () => editUser(u.id);
    userList.appendChild(li);
  });
}

//navigation func
function goToCreate() {
  window.location.href = "user-form.html";
}

//edit utente func
function editUser(id) {
  localStorage.setItem("editUserId", id);
  window.location.href = "user-form.html";
}

//form 
if (userForm) {
  const editId = localStorage.getItem("editUserId");
  if (editId) {
    const user = users.find(u => u.id == editId);
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("role").value = user.role;
  }

//submit
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Salvato con successo!");
    localStorage.removeItem("editUserId");
    window.location.href = "dashboard.html";
  });
}
