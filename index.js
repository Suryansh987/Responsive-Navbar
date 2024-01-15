const menu = document.querySelector('.ham')
const m_container = document.querySelector('.menu-container')
menu.addEventListener( "click" , ()=>{
    if(m_container.style.display==='block'){
        m_container.style.display='none'
        menu.style.borderColor = "black";
        menu.style.filter= "opacity(1)"
    }
    else{
        m_container.style.display='block'
    }
} )