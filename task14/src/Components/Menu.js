import React from 'react'
import '../Components/styles.css';

function Menu() {
  return (
    <div>
                  


            <section class="menu section bd-container" id="menu">
                <span class="section-subtitle">Special</span>
                <h2 class="section-title">Menu of the week</h2>

                <div class="menu__container bd-grid">
                    <div class="menu__content">
                        <img src="assets/images/chocolate_Drink.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">chocolate Drink</h3>
                        <span class="menu__detail">Delicious drink</span>
                        <span class="menu__preci">60.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>

                    <div class="menu__content">
                        <img src="assets/images/ice_cream.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Ice Cream</h3>
                        <span class="menu__detail">Delicious dish</span>
                        <span class="menu__preci">120.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    
                    <div class="menu__content">
                        <img src="assets/images/sandwich.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Sandwich</h3>
                        <span class="menu__detail">Delicious dish</span>
                        <span class="menu__preci">90.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    <div class="menu__content">
                        <img src="assets/images/pasta.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Pasta</h3>
                        <span class="menu__detail">Delicious dish</span>
                        <span class="menu__preci">82.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>

                    <div class="menu__content">
                        <img src="assets/images/pizza.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Pizza</h3>
                        <span class="menu__detail">Delicious dish</span>
                        <span class="menu__preci">120.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                    
                    <div class="menu__content">
                        <img src="assets/images/buger.jpg" alt="" class="menu__img"/>
                        <h3 class="menu__name">Burger</h3>
                        <span class="menu__detail">Delicious dish</span>
                        <span class="menu__preci">90.00</span>
                        <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                    </div>
                </div>
            </section>

    </div>
  )
}

export default Menu