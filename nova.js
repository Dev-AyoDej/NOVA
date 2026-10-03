let nav = document.getElementById ("nav");

let menubtn = document.getElementById ("menubtn");

menubtn.addEventListener("click", function(event){
    event.stopPropagation();
    nav.classList.toggle("active");
});

document.addEventListener("click", 
    function(event){
        nav.classList.remove("active");
    }
);

let boxes = document.querySelectorAll(".testimonialcard");

let prevbtn = document.getElementById("prevbtn");
let nextbtn = document.getElementById("nextbtn");

let currentIndex = 0;


function showBox() {

    boxes.forEach(function(box, index) {

        if (index === currentIndex) {
            box.style.display = "flex";
        } else {
            box.style.display = "none";
        }

    });

}


showBox();


nextbtn.addEventListener("click", function() {

    currentIndex++;

    if (currentIndex >= boxes.length) {
        currentIndex = 0;
    }

    showBox();

});

prevbtn.addEventListener("click", 
    function(){

        currentIndex--;

        if(currentIndex < 0) {
            currentIndex =
boxes.length - 1;
        }

        showBox();
    });