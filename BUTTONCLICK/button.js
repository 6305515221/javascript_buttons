let countElement=document.getElementById("countElement")

function buttonElement() {
    if(countElement.textContent<8) {
        countElement.textContent=parseInt(countElement.textContent)+1
        countElement.style.color='red'
    }
    else {
        countElement.textContent=0
    }
    
   
}
