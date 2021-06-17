/* for animation in loign forms ,we need to add a class to the container element when we click
on the Register button in the panel, and remove it when we click on the Log in button on the another panel*/
const log_in = document.querySelector("#log-in");
const registration = document.querySelector("#registration"); 
const container = document.querySelector(".container");

registration.addEventListener('click', () => {
container.classList.add("registration-mode");
});

log_in.addEventListener('click', () => {
container.classList.remove("registration-mode");
});

/* modal */
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName(".close")[0];

btn.onclick = function(){
    modal.style.display="block";
}

span.onclick =function(){
    modal.style.display="none";
}

window.onclick = function(event){
    if(event.target == modal){
        modal.style.display="none";
    }
}


/* scroll down */
