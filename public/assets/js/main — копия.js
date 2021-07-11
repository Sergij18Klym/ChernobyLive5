/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader(){
    const header = document.getElementById('header')
    const logo_ch = document.getElementById('nav_logo-ch')
    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header');
        logo_ch.src='assets/img/logo2-dark.png';
     } else {
        header.classList.remove('scroll-header');
        logo_ch.src='assets/img/logo2.png';
     }
}
window.addEventListener('scroll', scrollHeader)

/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
})

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // reset: true,
})


sr.reveal(`.home__data, .home__social-link, .home__info,
           .features-card,
           .discover__container,
           .experience__data, .experience__overlay,
           .place__card,
           .sponsor__content,
           .footer__data, .footer__rights`,{
    origin: 'top',
    interval: 100,
})

sr.reveal(`.about__data, 
           .video__description,
           .subscribe__description`,{
    origin: 'left',
})

sr.reveal(`.about__img-overlay, 
           .video__content,
           .subscribe__form`,{
    origin: 'right',
    interval: 100,
})
/*
const acc_ic = document.getElementById('account-icon')
function accch1() {
    this.src="assets/img/account-dark.png"
}
function accch2() {
    this.src="assets/img/account-white.png"
}
acc_ic.addEventListener('mouseover', accch1)
acc_ic.addEventListener('mouseout', accch2)*/

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("home__img");
    var slideLines = document.getElementsByClassName("slide-button");

    var titleBig = document.getElementsByClassName("home__data-title");
    var titleSmall = document.getElementsByClassName("home__data-subtitle");
    var titleInfo = document.getElementsByClassName("home__info-title");
    var miniImg = document.getElementsByClassName("home__info-img");

    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < slideLines.length; i++) {
        slideLines[i].className = slideLines[i].className.replace(" slide-button-active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    slideLines[slideIndex-1].className += " slide-button-active";

    /*bbb[1].style.color = "red";*/

    switch (slideIndex) {
        case 1:
            titleBig[0].innerHTML = "Experience the <br><b>Chernobyl Zone</b>";
            titleSmall[0].innerHTML = "Discover the most outstanding";
            titleSmall[1].innerHTML = "historic sites of the Exclusion Zone";
            titleInfo[0].innerHTML = "Chernobyl Zone Tour";
            miniImg[0].src = "assets/img/sign1.jpg";
            break;
        case 2:
            titleBig[0].innerHTML = "Visit the Ghost<br><b>City of Pripyat</b>";
            titleSmall[0].innerHTML = "Travel back in time and";
            titleSmall[1].innerHTML = "experience the bygone epoch";
            titleInfo[0].innerHTML = "Pripyat City Tour";
            miniImg[0].src = "assets/img/pripyat1.jpg";
            break;
        case 3:
            titleBig[0].innerHTML = "Explore the Core<br><b>Chernobyl Plant</b>";
            titleSmall[0].innerHTML = "Discover what actually happenned";
            titleSmall[1].innerHTML = "that fateful night";
            titleInfo[0].innerHTML = "Chernobyl Plant Tour";
            miniImg[0].src = "assets/img/reactor4.jpg";
            break;
    }
  }
/*
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("home__img");
  var slidesContent = document.getElementsByClassName("home__container");
  var slideLines = document.getElementsByClassName("slide-button");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      slidesContent[i].style.display = "none";
  }
  for (i = 0; i < slideLines.length; i++) {
      slideLines[i].className = slideLines[i].className.replace(" slide-button-active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  slidesContent[slideIndex-1].style.display = "block"; 
  slideLines[slideIndex-1].className += " slide-button-active";
}*/

/*
var s1lideIndex = 0;
s1howSlides();
function s1howSlides() {
  var i;
  var s1lides = document.getElementsByClassName("home__img");
  var s1lideLines = document.getElementsByClassName("slide-button");
  for (i = 0; i < s1lides.length; i++) {
    s1lides[i].style.display = "none";  
  }
  s1lideIndex++;
  if (s1lideIndex > s1lides.length) {s1lideIndex = 1}    
  for (i = 0; i < s1lideLines.length; i++) {
    s1lideLines[i].className = s1lideLines[i].className.replace(" slide-button-active", "");
  }
  s1lides[s1lideIndex-1].style.display = "block";  
  s1lideLines[s1lideIndex-1].className += " slide-button-active";
  setTimeout(s1howSlides, 4000);
}*/

/*
var featureImgs = document.getElementsByClassName("feature-img");
var featureText = document.getElementsByClassName("feature-text");

function mouseOver() {
    featureText[0].style.color = "red";
}
function mouseOut() {
    featureText[0].style.color = "green";
}
document.getElementsByClassName("features-card").onmouseover = function() {mouseOver()};
document.getElementsByClassName("features-card").onmouseout = function() {mouseOut()};*/

var discTitle = document.getElementsByClassName("discover__data1");
var explTitle = document.getElementsByClassName("disc_expl");

function showDisco(n){
    switch (n) {
        case 1:
            discTitle[0].style.display = "none";
            discTitle[3].style.display = "none";
            discTitle[6].style.display = "none";
            explTitle[0].style.display = "block";
            explTitle[3].style.display = "block";
            explTitle[6].style.display = "block";
            break;
        case 2:
            discTitle[1].style.display = "none";
            discTitle[4].style.display = "none";
            discTitle[7].style.display = "none";
            explTitle[1].style.display = "block";
            explTitle[4].style.display = "block";
            explTitle[7].style.display = "block";
            break;
        case 3:
            discTitle[2].style.display = "none";
            discTitle[5].style.display = "none";
            discTitle[8].style.display = "none";
            explTitle[2].style.display = "block";
            explTitle[5].style.display = "block";
            explTitle[8].style.display = "block";
            break;
    }
}
function hideDisco() {
    for (i=0; i<discTitle.length; i++) {
        discTitle[i].style.display = "block";
    }
    for (i=0; i<explTitle.length; i++) {
        explTitle[i].style.display = "none";
    }
}

