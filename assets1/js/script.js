let removeBtn=document.getElementById("removeIcon")
removeBtn.onclick=function(){
    this.parentNode.classList.add("close")
}

document.getElementById("openBtn").onclick=function(){
    this.previousElementSibling.classList.remove("close")
}