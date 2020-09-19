let mainSection = document.getElementById("mainSection");

let scrollHelper = document.createElement("button");


window.addEventListener('scroll', function(ev){
    setTimeout(() => {
        if (window.scrollY > 200 && scrollHelper.parentNode != mainSection){
            scrollHelper.innerHTML = "UP ↑";
            scrollHelper.className = "scrollHelper"
            mainSection.appendChild(scrollHelper);
    
        } else {
                mainSection.removeChild(scrollHelper);
    
        }
    }, 1000);
});


scrollHelper.addEventListener("click", ()=>{
    document.documentElement.scrollTop -= scrollY;
    mainSection.removeChild(scrollHelper);
})