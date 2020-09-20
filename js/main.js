let mainSection = document.getElementById("mainSection");

let scrollHelper = document.createElement("button");


window.addEventListener('scroll', function(ev){
        if (window.scrollY > 200 && scrollHelper.parentNode != mainSection){
            scrollHelper.innerHTML = "UP ↑";
            scrollHelper.className = "scrollHelper"
            mainSection.appendChild(scrollHelper);
    
        } 
        if(window.scrollY < 200 && scrollHelper.parentNode == mainSection) {
            mainSection.removeChild(scrollHelper);
    
        }
});


scrollHelper.addEventListener("click", ()=>{
    document.documentElement.scrollTop -= scrollY;
    mainSection.removeChild(scrollHelper);
})