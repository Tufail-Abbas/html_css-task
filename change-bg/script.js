let boxs=document.querySelectorAll('#box')
let body=document.querySelector('body')
boxs.forEach(box=>{
    box.addEventListener('click',()=>{
        
        body.classList=box.classList
    box.style.boxShadow="0px 0px 4px -1px white"


    })
   
})