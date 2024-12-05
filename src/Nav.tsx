function Nav() {
    return(
        <div>
            <nav className="main__nav">
            <ul className="nav__list">
                <li><a href="/">Main</a></li>
                <li><a href="/cart">Shop Cart</a></li>
            </ul>
            <img src="/img/shopping-cart.png" alt="shop cart"  className="shop__cart"/>
            </nav>

        </div>
    )
}

export default Nav;