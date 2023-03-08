const bar = document.querySelectorAll('.collapse');
const para = document.querySelectorAll('.p-none');
let valueImg = false;
bar.forEach((e) => {
   
     if (window.innerWidth < 900){
        e.addEventListener('touchstart', () => {
            open(e);
        })
     }else{
        e.addEventListener('mouseover', () => {
            open(e);
        })
     }
})


function open(elm) {
    let content = elm.nextElementSibling;
    content.classList.add('p-active');
    
    // let content2 = elm.firstChild.nextElementSibling;
    // let content3 = content2.nextElementSibling;
    
    elm.addEventListener('mouseout', () => {
        let content = elm.nextElementSibling;
        content.classList.remove('p-active');
     
    })
    
     elm.addEventListener('touchstart', () => {
         let content = elm.nextElementSibling;
        content.classList.remove('p-active');
    })

}

