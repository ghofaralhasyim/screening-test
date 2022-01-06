const navMenu = document.getElementById('nav_menu'),
    toggler = document.getElementById('nav_toggler'),
    closeMenu = document.getElementById('nav_close');

toggler.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    toggler.classList.add('d-none');
});

closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('show');
    toggler.classList.remove('d-none');
});

var carouselIndex = 1;
slideShow(carouselIndex);

function nextSlide(x) {
    slideShow(carouselIndex += x);
}

function currentSlide(x) {
    slideShow(carouselIndex = x);
}

function slideShow(x) {
    var i;
    var carouselItem = document.getElementsByClassName('carousel_item');
    var indicator = document.getElementsByClassName("dot");
    if(x > carouselItem.length) {carouselIndex = 1}
    if(x < 1) {carouselIndex = carouselItem.length}

    for(i = 0; i < carouselItem.length; i++){
        carouselItem[i].style.display = "none";
    }
    for(i = 0; i < indicator.length; i++){
        indicator[i].className = indicator[i].className.replace(" active","");
    }

    carouselItem[carouselIndex-1].style.display = "block";
    indicator[carouselIndex-1].className += " active";
}


function validateForm() {
    let name = document.forms["myForm"]["name"].value;
    let email = document.forms["myForm"]["email"].value;
    let message = document.forms["myForm"]["message"].value;
    let alertEmail = document.getElementById("emailValidation");
    let alertName = document.getElementById("nameValidation");
    let alertMessage = document.getElementById("msgValidation");

    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(name == ""){  
        alertName.innerText = "This field is required";
    }else{
        alertName.innerText = "";
    }
    if(!email.match(emailFormat)){
        alertEmail.innerText = "Invalid email address";
    }else{
        alertEmail.innerText = "";
    }
    if(message == ""){
        alertMessage.innerText = "This field is required";
    }else{
        alertMessage.innerText = "";
    }
}
