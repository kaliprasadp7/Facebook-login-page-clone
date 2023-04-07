let loginbtn=document.getElementById("loginbtn");
let username=document.getElementById("username");

loginbtn.addEventListener("click", () => {
    alert("Hello "+ username.value)
})