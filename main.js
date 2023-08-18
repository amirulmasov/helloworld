let url1 = "https://i.ibb.co/f8BC6N3/mbp14-spacegray-select-202110-1.png"
let url2 = "https://i.ibb.co/zRt5hKd/mbp14-silver-select-202110-1.png"


let birxil = document.querySelector(".for")
let birxil2 = document.querySelector(".for2")
let birxil3 = document.querySelector(".for3")
let birxil4 = document.querySelector(".for4")


let narx = document.querySelector(".p3")




let img = document.querySelector(".birinchirasm")
let img2 = document.querySelector(".ikkinchirasm")



let btn1 = document.querySelector(".grayone") 
let btn = document.querySelector(".graytwo") 

let button = document.getElementsByClassName("whiteozgaruvchi")
let button2 = document.getElementsByClassName("whiteozgaruvchi2")


let btn12 = document.querySelector(".graytwo")
let btn12p = document.querySelector(".Space")
let btngrayone = document.querySelector(".whitecha")



// spacee 
function myfunction() {
    
    if(btn.getAttribute("data-btn") == "1") {
        img.setAttribute("src", url1)
        btn12.style.background = "#0071E3"
        btn12p.style.color = "white"
        btngrayone.style.color = "#000"
        btn1.style.background = "#CFE7FF"
        img.style.opacity = "100%"
        img.style.scale = "1.1"
        
        for(let i = 0; i < button.length; i++) {
            button[i].innerText = "Space gray"
            button[i].style.right = "810px"
            button[i].style.opacity = "100%"
        }
    }
}

// white
function myfunctionwhite() {
    if(btn1.getAttribute("data-btn") == "2" ){
        img.setAttribute("src", url2)
        btn12.style.background = "#CFE7FF"
        btn12p.style.color = "#000"
        btngrayone.style.color = "white"
        btn1.style.background = "#0071E3"
        img.style.opacity = "100%"
        img.style.scale = "1.1"



        for(let t = 0; t < button.length; t++) {
            button[t].innerText = "White"
            button[t].style.right = "870px"
            button[t].style.opacity = "100%"
        }
    }
}


function lastfunction() {
    if(birxil.getAttribute("data-btns") == 99) {
        birxil.style.border = "1px solid #0071E3"
        birxil2.style.border = "1px solid #CFE7FF"
        birxil3.style.border = "1px solid #CFE7FF"
        birxil4.style.border = "1px solid #CFE7FF"
        narx.innerText = "$1,999"
        narx.style.right = "820px"
        
        
        

    }
}
function lastfunction2() {
    if(birxil.getAttribute("data-btns") == 99) {
        birxil2.style.border = "1px solid #0071E3"
        birxil.style.border = "1px solid #CFE7FF"
        birxil3.style.border = "1px solid #CFE7FF"
        birxil4.style.border = "1px solid #CFE7FF"
        narx.innerText = "$2,199"
        narx.style.right = "820px"
        
        

    }
}
function lastfunction3() {
    if(birxil.getAttribute("data-btns") == 99) {
        birxil3.style.border = "1px solid #0071E3"
        birxil.style.border = "1px solid #CFE7FF"
        birxil2.style.border = "1px solid #CFE7FF"
        birxil4.style.border = "1px solid #CFE7FF"
        narx.innerText = "$2,599"
        narx.style.right = "820px"
        


    }
}
function lastfunction4() {
    if(birxil.getAttribute("data-btns") == 99) {
        birxil4.style.border = "1px solid #0071E3"
        birxil.style.border = "1px solid #CFE7FF"
        birxil2.style.border = "1px solid #CFE7FF"
        birxil3.style.border = "1px solid #CFE7FF"
        narx.innerText = "$3,199"
        narx.style.right = "820px"
    }
}







