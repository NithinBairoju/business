const bar = document.querySelectorAll('.collapse');
const para = document.querySelectorAll('.p-none');
let valueImg = false;
bar.forEach((e) => {
  
    if (window.innerWidth < 900) {
        e.addEventListener('click', () => {
            openmob(e);
        })
    } else {
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

    // if (content3.style.transform === "rotate(44deg)") {
    //     content3.style.transform = "rotate(0)";
    // } else {
    //     content3.style.transform = "rotate(44deg)";
    // }
    // console.log(content3);
    elm.addEventListener('mouseout', () => {
        let content = elm.nextElementSibling;
        content.classList.remove('p-active');
        // let content2 = elm.firstChild.nextElementSibling;
        // let content3 = content2.nextElementSibling;
        // if (content3.style.transform === "rotate(44deg)") {
        //     content3.style.transform = "rotate(0)";
        // } else {
        //     content3.style.transform = "rotate(44deg)";
        // }
    })

}

function openmob(elm) {
    let content = elm.nextElementSibling;
    content.classList.toggle('p-active');

}
