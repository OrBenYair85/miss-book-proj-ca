
const { Outlet, Link, NavLink } = ReactRouterDOM

export function About (){

    return (
        <section className="about"> 
            <h1>About Us</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa veritatis, maxime eum ipsum dolore, nobis aspernatur distinctio explicabo maiores impedit aliquam nostrum tempore, repellat cum animi! Officia nobis nisi blanditiis.</p>

            <section>
                <nav>
                <NavLink to="/about/details">Details</NavLink>
                <NavLink to="/about/vision">Vision</NavLink>
                </nav>
            </section>

            <section>
                <Outlet/ >
            </section>
        </section>
    )
}