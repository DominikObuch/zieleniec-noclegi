//hamburger js 
let hamburger = document.getElementsByClassName("hamburger")[0];
let hamburgerState = false;
document.body.addEventListener("click", () => {
    console.log(event.target);
    if (hamburgerState && event.target.classList[0].substr(0, 9) !== "hamburger" && event.target.classList[0] !== "header__list") {
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--invisible");
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");
        hamburgerState = !hamburgerState;

    }
});

let hamburgerBg = document.createElement("div");
hamburgerBg.classList.add("hamburger__background");
hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("is-active");

    if (hamburgerState) {

        document.body.removeChild(document.getElementsByClassName("hamburger__background")[0]);

        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--invisible");
    } else {
        document.body.appendChild(hamburgerBg);
        document.getElementsByClassName("header__list")[0].classList.remove("header__list--invisible");
        document.getElementsByClassName("header__list")[0].classList.toggle("header__list--visible");
    }
    hamburgerState = !hamburgerState;

})


//main 
let article = document.getElementsByClassName("article__image");
let articleCaption = document.getElementsByClassName("article__image--caption");

let articleEvent = i => {
    article[i].classList.toggle("article__blur");
    articleCaption[i].classList.toggle("article__active");


};


for (let i = 0; i < article.length; i++) {
    articleCaption[i].addEventListener("mouseover", () => {
        articleEvent(i);
    });
    article[i].addEventListener("mouseover", () => {
        articleEvent(i);
    });
    articleCaption[i].addEventListener("mouseout", () => {
        articleEvent(i);
    });
    article[i].addEventListener("mouseout", () => {
        articleEvent(i);
    });
}