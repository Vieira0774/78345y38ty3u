console.log("o script está sendo lido");

const divs = document.getElementsByName("div")

for (let i = 0; i < divs.length; i++){
    divs[i].innerHTML = "<b>" + Math.random() + "</b"
    
}