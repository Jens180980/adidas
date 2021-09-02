
// Pageloader
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    loader.className += " hidden"; // class "loader hidden"
});

// Menu
// const clothMain = document.getElementById('cloth-main')
// const clothMenu = document.getElementById('cloth-wrap')

// clothMain.addEventListener('mouseenter', () => clothMenu.style.height = 'auto')
// clothMain.addEventListener('mouseleave', () => clothMenu.style.height = '0')


// About

    let foldBtn = document.getElementsByClassName("btn"); /* Vi henter vores Class name ind fra HTML */
let i;  /* Vi deklarerer en variabel igen */

for (i = 0; i < foldBtn.length; i++) { /* For hver gang 0 er mindre end ligges der én til */
  foldBtn[i].addEventListener("click", function() { /* Vi tilføjer en eventlistener, til klik, hvor vi skrive en function til */
    this.classList.toggle("active"); /* Her refererer "this" til elementet, som tager i mod vores addeventlistener */
    let foldOut = this.nextElementSibling; /* "this" refererer til det næste søskende element, som er classname content */
    if (foldOut.style.maxHeight){
      foldOut.style.maxHeight = null;
    } else {
      foldOut.style.maxHeight = '100%';
    } 
  });
}

// Formvalidering - Jens

const message = document.getElementById('message-wrap')
const inputs = document.querySelectorAll(':required')
const reset = document.getElementById('reset')

reset.addEventListener('click', function() {
    location.reload()
})

function validate(){
    let status = true
    for(let input of inputs){
        if(!input.value){
            setError(input)
            status = false
            return false
        }
    }
if(status) {
        message.style.display = "block"
        message.style.color = "black"
        message.innerText = "Formularen er sendt"
    }
}

function setError(element){
    
    message.innerText =`Udfyld venligst feltet ${element.previousElementSibling.innerText}`
    message.style.display = "block"

    element.focus()

    element.addEventListener('keydown', function(){
        if(message.style.display = "block"){
            message.style.display = "none"
        }
    })
}