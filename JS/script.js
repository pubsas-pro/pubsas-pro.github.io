document.addEventListener("keyup", e=>{
    
    if (e.target.matches("buscador")){
        alert(busc) 

        if(e.key ==="escape")e.target.value = ""
        
        document.querySelectorAll(".about__icons_2").forEach(elemento =>{

            elemento.textContent.toLowerCase().includes(e.target.target.value.toLowerCase())
                ?elemento.classList.remove("filtro")
                :elemento.classList.add("filtro")
        })

    }


})