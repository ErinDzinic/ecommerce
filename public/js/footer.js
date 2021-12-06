const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="footer-content">
            <img src="/public/css/pictures/logo.png" class="logo" alt="">
            <div class="footer-ul-containter">
                <ul class="category">
                    <li class="category-title">Test1</li>
                    <li><a href="#" class="footer-link">Part1</a></li>
                    <li><a href="#" class="footer-link">Part2</a></li>
                    <li><a href="#" class="footer-link">Part3</a></li>
                    <li><a href="#" class="footer-link">Part4</a></li>
                </ul>
                <ul class="category">
                    <li class="category-title">Test2</li>
                    <li><a href="#" class="footer-link">Part5</a></li>
                    <li><a href="#" class="footer-link">Part6</a></li>
                    <li><a href="#" class="footer-link">Part7</a></li>
                    <li><a href="#" class="footer-link">Part8</a></li>
                </ul>
            </div>
           </div>
           <p class="footer-title">About us</p>
           <p class="info">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium architecto, non exercitationem tenetur officiis adipisci. Beatae dolor quidem veniam possimus, eaque amet cum magnam? Accusantium adipisci laudantium ipsa, dolor, quibusdam tenetur mollitia voluptatum quos eos expedita fuga recusandae officiis alias. Nostrum, reprehenderit expedita necessitatibus animi magnam voluptatem ratione aliquid quasi.</p>
           <p class="info" >support email - electronika@edu.fit.ba</p>
           <p class="info" >telephone number - (+387)62/225-883</p>
           <p class="footer-credit">Electronika , The best electronical store </p>
    
    `;
}

createFooter();