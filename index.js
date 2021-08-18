const hide = document.querySelector('.hide'),
    google = document.querySelector('.google'),
    appStore = document.querySelector('.app-store'),
    googleImage = document.querySelector('.playMarket'),
    appStoreImage = document.querySelector('.appStore');


    appStoreImage.addEventListener('mouseover', ()=>{
        hide.innerHTML = `<h6 class="google"><span>...da yuklab oling</span><br> Google play</h6>`
    })
    appStoreImage.addEventListener('mouseout', ()=>{
        hide.innerHTML = `<h6 class="hide">Telefoningiz uchun bepul ilova</h6>`
    })
    googleImage.addEventListener('mouseover', ()=>{
        hide.innerHTML = `<h6 class="app-store"><span>...ga yuklang</span><br> AppStore</h6>`
    })
    googleImage.addEventListener('mouseout', ()=>{
        hide.innerHTML = `<h6 class="hide">Telefoningiz uchun bepul ilova</h6>`
    })


const header = document.querySelector('header');

window.addEventListener('scroll', ()=>{
    header.style.boxShadow = ' 0px 11px 21px 1px rgba(0, 143, 253, 0.39'
    // header.style.backgroundColor = '#0db7ca'
})







// let heartBtn = document.querySelector('.btnHeart'),
//     btn = document.querySelectorAll('.fa-heart');
// console.log(heartBtn);


// heartBtn.addEventListner('click', ()=>{
//     for (let i = 0; i < btn.length; i++) {
//         const element = btn[i];
//         element.style.color = 'red'
//     }
// })