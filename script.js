console.log("I am connected");
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const button = document.querySelector(".btn");
const holder = document.querySelector(".holderDiv");
const display = document.querySelector(".displayMessage");
const spouseName = document.querySelector(".spouseName");
// console.log(userName, password);
class objectMaker {
  constructor(userName, password, spouseName) {
    this.userName = userName;
    this.password = password;
    this.spouseName = spouseName;
  }
}

const jahid = {
  userName: "jahid",
  password: "78784",
  spouseName: "Supti",
};
const alAmin = {
  userName: "Al Amin",
  password: "janpakhi",
  spouseName: "Khushi",
};
console.log(jahid, alAmin);
const accounts = [jahid, alAmin];
let activeAccount;
console.log(accounts);
button.addEventListener("click", function (x) {
  x.preventDefault();
  const name = userName.value;
  const pass = password.value;
  console.log(name, pass);
  activeAccount = accounts.find(
    (acc) => acc.userName === name && acc.password === pass
  );
  button.classList.add("hidden");
  holder.classList.add("hidden");
  display.classList.remove("hidden");
  spouseName.textContent = activeAccount.spouseName;
});
