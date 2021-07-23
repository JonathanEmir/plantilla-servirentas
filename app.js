// Menu desplegable

let btnOpen = document.getElementById('open')
let btnClose = document.getElementById('close')

btnOpen.addEventListener('click', () =>{
    let x = document.getElementById('mySidebar')
    x.style.width = "100%";
    x.style.fontSize = "40px";
    x.style.paddingTop = "10%";
    x.style.display = "block";
})

btnClose.addEventListener('click', () =>{
    document.getElementById("mySidebar").style.display = "none";
})
