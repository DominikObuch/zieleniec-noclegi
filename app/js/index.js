let eloo = "eloo";
let hamburger = document.getElementsByClassName("hamburger")[0];
let hamburgerState = false;
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");
    console.log(hamburgerState);
    if(hamburgerState){
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");
    
       
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--invisible");
    }
    else{
        document.getElementsByClassName("header__list")[0].classList.remove("header__list--invisible");
    
    document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");
        
}
hamburgerState = !hamburgerState;
    
})