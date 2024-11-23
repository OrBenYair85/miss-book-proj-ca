const { Link, NavLink,  } = ReactRouterDOM 
export function AppHeader() {

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>Miss Books</h1>
                <div className="navBar-contianer">
                <nav className="navBar-list">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/books">Books</NavLink>
                </nav>
                </div>
            </section>
        </header>
    )
}
