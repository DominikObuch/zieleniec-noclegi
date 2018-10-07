//hamburger js 
let hamburger = document.getElementsByClassName("hamburger")[0];
let hamburgerState = false;
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("is-active");

    if (hamburgerState) {
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");


        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--invisible");
    } else {
        document.getElementsByClassName("header__list")[0].classList.remove("header__list--invisible");

        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");

    }
    hamburgerState = !hamburgerState;

})

//slider js
let sliders = document.getElementsByClassName("slider__image--pic");
let sliderActive = null;
    for (let i = 0; i < sliders.length; i++) {
        if (sliders[i].classList.contains("slider__image--pic-active")) {
            sliderActive = i;
        }
    }
document.getElementsByClassName("slider__arrow--left")[0].addEventListener("click", () => {
    
    sliders[sliderActive].classList.toggle("sliderOutLeft")
    let asyncSliderActive = sliderActive;
    sliders[sliderActive].classList.remove("slider__image--pic-active")
    sliders[sliderActive].addEventListener("animationend", () => {
        console.log(asyncSliderActive+ "async")
        sliders[asyncSliderActive].classList.remove("sliderOutLeft");
        
    })
    if (sliderActive == 2) {
        sliderActive = 0;
    } else {
        sliderActive++;
    }
    sliders[sliderActive].classList.add("slider__image--pic-active", "sliderInLeft");
    let asyncSliderActiveTwo = sliderActive;
    sliders[sliderActive].addEventListener("animationend", remAnimSecond = ()=>{
        
        sliders[asyncSliderActiveTwo].classList.remove("sliderInLeft")
    })
})



document.getElementsByClassName("slider__arrow--right")[0].addEventListener("click", () => {
    
    sliders[sliderActive].classList.toggle("sliderOutRight")
    let asyncSliderActive = sliderActive;
    sliders[sliderActive].classList.remove("slider__image--pic-active")
    sliders[sliderActive].addEventListener("animationend", () => {
        console.log(asyncSliderActive+ "async")
        sliders[asyncSliderActive].classList.remove("sliderOutRight");
        
    })
    if (sliderActive == 0) {
        sliderActive = 2;
    } else {
        sliderActive--;
    }
    sliders[sliderActive].classList.add("slider__image--pic-active", "sliderInRight");
    let asyncSliderActiveTwo = sliderActive;
    sliders[sliderActive].addEventListener("animationend", remAnimSecond = ()=>{
        
        sliders[asyncSliderActiveTwo].classList.remove("sliderInRight")
    })
})