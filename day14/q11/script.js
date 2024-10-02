const showcount = document.getElementById("counter")
const incrementbtn =document.getElementById("inc-button")
const decrementbtn=document.getElementById("dec-button")
const resetbtn=document.getElementById("reset-button")
const image=document.getElementById("img-container")


let counter =0;

const updatecounter = ()=>{
    showcount.innerText=counter
    if (counter===0){
        decrementbtn.disabled=true
    }
    else{
        decrementbtn.disabled=false
    }
}

incrementbtn.addEventListener("click",()=>{
    counter++
    updatecounter()
})

decrementbtn.addEventListener("click",()=>{
    if (counter>0){
        counter--
        updatecounter()
    }
})

resetbtn.addEventListener("click",()=>{
    counter=0
    updatecounter()
})

const imageelement = document.createElement("img")
imageelement.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-gM84dpm2XFysrvdAYBsycUQPC8F3fBXwhw&s"
imageelement.alt = "image"
image.appendChild(imageelement)
image.classList.add("img-container")