const { Link } = ReactRouterDOM

export function NotFound(){
    return (
        <section className="not-found-container">
            <section className="not-found">
                <h1>You are in the wrong path</h1>
                <h1>ERROR 404</h1>
            </section>
            <Link to="/">Back to safeplace </Link>

        </section>
    )
}