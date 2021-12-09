// const web = document.querySelector('.gratitude_button_content_item');
// const gratitude = document.querySelectorAll('.register_input_button')
const imagen1 = document.querySelectorAll('img');
 const cargarImagen = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting) {
            entrada.target.classList.add('visible')
        } 
        console.log(entrada);
    });
 }
const observador = new IntersectionObserver(cargarImagen,{
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0,
});
imagen1.forEach((item) => {
    observador.observe(item);
})
// if(gratitude) {
//     gratitude.addEventListener('click',clickregister)
// }
// if(web) {
//     web.addEventListener('click', clickweb);
// }
// function clickweb() {
//     window.location.href = "/innova/proyecto.html"
// }
// web.addEventListener('click', clickregister);
// function clickregister() {
//     window.location.href = "/innova/proyecto-agradecimiento.html"
// }