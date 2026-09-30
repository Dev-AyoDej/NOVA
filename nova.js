let nav = document.getElementById ("nav");

let menubtn = document.getElementById ("menubtn");

menubtn.addEventListener("click", function(){
    nav.classList.toggle("active");
});