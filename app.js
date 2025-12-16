let users = [
  { id: 1, name: "Mario", email: "mario@test.it", role: "admin" }
];

const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "dashboard.html";
  });
}

const userList = document.getElementById("userList");
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

function goToCreate() {
  window.location.href = "user-form.html";
}

function editUser(id) {
  localStorage.setItem("editUserId", id);
  window.location.href = "user-form.html";
}

const userForm = document.getElementById("userForm");
if (userForm) {
  const editId = localStorage.getItem("editUserId");
  if (editId) {
    const user = users.find(u => u.id == editId);
    document.getElementById("name").value = user.name;
    document.getElementById("email").value = user.email;
    document.getElementById("role").value = user.role;
  }

  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Salvato (finto)");
    localStorage.removeItem("editUserId");
    window.location.href = "dashboard.html";
  });
}
