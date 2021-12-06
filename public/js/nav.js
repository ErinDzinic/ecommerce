const createNav = () => {

    let nav = document.querySelector('.navbar');
    nav.innerHTML = `<div class ="nav">
    <img src="/css/pictures/logo.png" alt="logo" class="logo ">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search for electronical devices">
            <button class="search-btn">search</button>
        </div>
    <a href="#"><img src="/css/pictures/user.png" alt=""></a>
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