const title = document.querySelector('.home .title');
const leaf1 = document.querySelector('.leaf1')
const leaf2 = document.querySelector('.leaf2')
const mount1 = document.querySelector('.mount1')
const mount2 = document.querySelector('.mount2')
const bush2 = document.querySelector('.bush2')

document.addEventListener('scroll', () => {
    let value = window.scrollY;
    title.style.marginTop = value * 1.1 + 'px';

    leaf1.style.marginLeft = -value*0.4 + 'px';
    leaf2.style.marginLeft = value*0.4 + 'px';

    bush2.style.marginBottom = -value*0.4 + 'px';

    mount1.style.marginBottom = -value*1.1 + 'px';
    mount2.style.marginBottom = -value*1.2 + 'px';
})