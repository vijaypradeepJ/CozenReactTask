import React from 'react'
import '../components/style.css';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
       <a href="#" class="scrolltop" id="scroll-top">
            <i class='bx bx-chevron-up scrolltop__icon'></i>
        </a>
        <header class="l-header" id="header">
            <nav class="nav bd-container">
                <a href="#" class="nav__logo">Tasty</a>

                <div class="nav__menu" id="nav-menu">
                    <ul class="nav__list">
                        <li class="nav_item"><Link to='/'>Home</Link></li>
                        <li class="nav_item"><Link to='/About'>About</Link></li>
                        <li class="nav_item"><Link to='/Menu'>Menu</Link></li>
                        <li class="nav_item"><Link to='/Contact'>Contact us</Link></li>
                        
                    </ul>
                </div>

                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>
            </nav>
        </header>

        <main class="l-main"/>
            
            <section class="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Tasty food</h1>
                        <h2 class="home__subtitle">Try the best food of <br/> the week.</h2>
                        <a href="#menu" class="button">View Menu</a>
                    </div>
    
                    <img src="assets/images/main_img.png" alt="" class="home__img"/>
                </div>
            </section>
    </div>
  )
}

export default Home