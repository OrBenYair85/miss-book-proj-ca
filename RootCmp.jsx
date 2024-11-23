
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./cmps/Home.jsx"
import { About } from "./cmps/About.jsx"
import { BooksIndex } from "./cmps/BooksIndex.jsx"

const Router = ReactRouterDOM.HashRouter //Adding routes to the app 
const {Routes, Route} = ReactRouterDOM

export function RootCmp() {
    return (
        <Router>
        <section className="app main-layout">
            <AppHeader />
            <main>
               <Routes>
                    <Route path='/'  element={<Home />}/>
                    <Route path='/about' element={<About />} />
                    <Route path='/books' element={<BooksIndex />} />
               </Routes>
            </main>
        </section>
        </Router>
    )
}