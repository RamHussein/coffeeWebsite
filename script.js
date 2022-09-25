let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    container.classList.remove('active');

}
let container = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick =() =>{
    container.classList.toggle('active');
    searchForm.classList.remove('active');

}
window.onscroll = () =>{
    searchForm.classList.remove('active');
    container.classList.remove('active');
}

