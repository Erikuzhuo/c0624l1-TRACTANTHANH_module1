
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

// Optionally, you can add an automatic slide change interval
setInterval(nextSlide, 3000);

// No desire location yet, change to store at console log as array
function submitForm(){
    // Get form data
    let form = document.getElementById('form');
    let formData = new FormData(form);
    let data = {};
    formData.forEach((value, key) => { data[key] = value; });
    return console.log(data);
}


function login(){
    document.getElementById("myModal").style.display = "block";
}

function closeModal(){
    document.getElementById("myModal").style.display = "none";
}

function logout(){
    let check=confirm('Bạn xác nhận muốn đăng xuất tài khoản.')
    if(check){
        window.location.href="http://localhost:63342/Module%201_Case%20Study/Module%201_Case%20Study/home.html"
    }
}