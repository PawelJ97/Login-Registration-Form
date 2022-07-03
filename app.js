const sign_up_btn = document.querySelector("#sign-up-btn");
const sign_in_btn = document.querySelector("#sign-in-btn");
const container = document.querySelector(".container");

//creating a form switch
sign_up_btn.addEventListener("click", ()=> {
    container.classList.add("sign_up_mode");
});
sign_in_btn.addEventListener("click", ()=> {
    container.classList.remove("sign_up_mode");
});