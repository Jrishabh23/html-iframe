console.log("js");
document.querySelector(".nav-item").addEventListener("click", (e) => {
    console.log(e.target.classList[0]);
    let login = e.target.classList[0];
    if (login != "login-btn") return;
    document.querySelector(".login-page").classList.toggle("display-none");
});
