let des=document.getElementById('des')
let add=document.getElementById("add")
let rev=document.getElementById('rev')
let desc=document.querySelector('.desc')
let additonal=document.querySelector('.additonal-info')
let review=document.querySelector('.review')
des.addEventListener('click',()=>{
    desc.style.display='block'
    additonal.style.display='none'
    review.style.display='none'
    des.style.color="#fff;"
    add.style.color="#9F9F9F"
    rev.style.color="#9F9F9F"
})
add.addEventListener('click',()=>{
    desc.style.display='none'
    additonal.style.display='block'
    review.style.display='none'
    des.style.color="#9F9F9F;"
    add.style.color="#fff"
    rev.style.color="#9F9F9F"
})
rev.addEventListener('click',()=>{
    desc.style.display='none'
    additonal.style.display='none'
    review.style.display='block'
})