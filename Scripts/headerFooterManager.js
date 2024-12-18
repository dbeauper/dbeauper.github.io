class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
                <nav class="header-nav">
                    <input type="checkbox" id = "sidebar-active">
                    <label for="sidebar-active" class="open-sidebar-button">
                        <svg class="header-icon" xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="black"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>

                    </label>

                    <label id="overlay" for="sidebar-active"></label>
                    <div class="links-container">
                        <label for="sidebar-active" class="close-sidebar-button">
                            <svg class="header-icon xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 -960 960 960" width="32px" fill="black"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                        </label>

                        <a class="home-link" href="/index.html">Rink Dam Self Storage</a>
                        <a class="header-links" href="/pages/aboutUs.html">About Us</a>
                        <a class="header-links" href="/pages/contactUs.html">Contact Us</a>
                        <a class="header-links" href="#">Rent a Storage</a>
                    </div>
                </nav>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">

                <ul class="social-icon">

                    <li class="icon-elem">
                        <a href="" class="icon">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                    </li>

                    <li class="icon-elem">
                        <a href="" class="icon">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </li>

                    <li class="icon-elem">
                        <a href="" class="icon">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                    </li>

                    <li class="icon-elem">
                        <a href="" class="icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </a>
                    </li>

                </ul>

                <ul class="menu">

                    <li class="menu-elem">
                        <a href="/index.html" class="menu-icon"> Home </a>
                    </li>

                    <li class="menu-elem">
                        <a href="/pages/aboutUs.html" class="menu-icon"> About Us </a>
                    </li>

                    <li class="menu-elem">
                        <a href="/pages/contactUs.html" class="menu-icon"> Contact Us </a>
                    </li>

                    <li class="menu-elem">
                        <a href="" class="menu-icon"> Rent a Storage </a>
                    </li>

                </ul>

                <p class="text">&copy; 2024 Rink Dam Self Storage | All rights reserved</p>
            </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)