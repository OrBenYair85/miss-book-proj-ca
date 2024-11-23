const { Link } = ReactRouterDOM 
export function AppHeader() {

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>Miss Books</h1>
                <div className="navBar-contianer">
                <ul className="navBar-list">
                    <li>Home</li>
                    <li>About</li>
                    <li>Books</li>
                </ul>
                </div>
            </section>
        </header>
    )
}
