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