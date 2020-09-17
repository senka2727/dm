"use strict";
let checkbox= document.querySelector(".switcher");
let nav = document.querySelector("nav");
let select_band = document.querySelector("#select_band");
let groups = document.querySelectorAll(".group")
nav.onclick=function(event){
    let target = event.target;
    if (target.tagName != "A") {
        return;
    }
    checkbox.checked=false;
}
select_band.onchange=function(event){
    for(let i=0;i<groups.length;i++){
        groups[i].style.display="none";
    }
    groups[this.selectedIndex].style.display="block";
}
