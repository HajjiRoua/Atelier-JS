function ChangeColor() {
    return randomColor = Math.floor(Math.random()*25462795).toString(16)
}

list=document.querySelector("ol")

list.addEventListener("click",(e)=>{
    e.target.style.color = "#" + ChangeColor();
})