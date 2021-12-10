let rootElm = document.querySelector(".active-span");

let data = [
    "JavaScript",
    "Animation",
    "Web Designs",
    "Full stack web development",
];

let index = 0;
let word = data[index].split("")
let currentStr = "";

let num = 0;

function renderString(){
    currentStr += word[num];

    num += 1;
    rootElm.innerText =   currentStr;

    if( num === word.length){
        index = index + 1;
        num = 0;

        if (index >= data.length){
            index = 0;
        }
        word = data[index].split("");
        currentStr = "";
    } 
 }
    //   timeoutCall = setInterval(renderString, 100);
