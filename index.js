const newslide = () =>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links")
    const navlinks = document.querySelectorAll(".nav-links li");
 
    //toggle NAV
    burger.addEventListener("click",() =>{
    nav.classList.toggle("nav-active")
    
    // ANIMATE LINKS
    navlinks.forEach((links, index)=>{
          if(links.style.animation){
            links.style.animation=""
          }else{
            links.style.animation=`navlinkfade 0.5s ease forwards ${index / 7 + 0.5}s` 
          }
         
    })
    // burger animation
    burger.classList.toggle("toggle")



})

}

newslide()