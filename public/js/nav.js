const createNav = () => {

    let nav = document.querySelector('.navbar');
    nav.innerHTML = `<div class ="nav">
    <img src="/css/pictures/logo.png" alt="logo" class="logo ">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search for electronical devices">
            <button class="search-btn">search</button>
        </div>
    <a>
         <img src="/css/pictures/user.png" alt="" id="user-img">
         <div class="login-logout-popup hide">
            <p class="account-info">Log in as, name</p>
            <button class="btn" id="user-btn">Log out</button>
         </div>
    </a>
    <a href="#"><img src="/css/pictures/shopping-cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Raspberry Pi</a></li>
    <li class="link-item"><a href="#" class="link">Capacitors</a></li>
    <li class="link-item"><a href="#" class="link">Resistors</a></li>
    <li class="link-item"><a href="#" class="link">Wires</a></li>
</ul>`;

}

createNav();

const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popupText = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () =>{
    userPopup.classList.toggle('hide');
})

window.onload = () => {
    let user = JSON.parse(sessionStorage.user || null);
    if(user != null){
        //user is logged in
        popupText.innerHTML = `Log in as, ${user.name} `
        actionBtn.innerHTML = `Log out`;
        actionBtn.addEventListener('click', () => {
            sessionStorage.clear();
            location.reload();
        })
    }else { // user logged out
        popupText.innerHTML = `Log in, then order`;
        actionBtn.innerHTML = `Log in`;
        actionBtn.addEventListener('click', () =>{
            location.href = '/login';
        })
    }
}