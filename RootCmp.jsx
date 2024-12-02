
import { AppHeader } from "./cmps/AppHeader.jsx"
import { Home } from "./Pages/Home.jsx"
import { About } from "./Pages/About.jsx"
import { BooksIndex } from "./Pages/BooksIndex.jsx"
import { Details } from "./cmps/AboutComp/Details.jsx"
import { Vision } from "./cmps/AboutComp/Vision.jsx"
import { NotFound } from "./Pages/NotFound.jsx"
import { BookDetails } from "./Pages/BookDetails.jsx"

const Router = ReactRouterDOM.HashRouter //Adding routes to the app 
const {Routes, Route, Navigate} = ReactRouterDOM

export function RootCmp() {
    return (
        <Router>
        <section className="app main-layout">
            <AppHeader />
            <main>
               <Routes>
                    <Route path='/'  element={<Navigate to="/home" />}/>
                    <Route path='/home'  element={<Home />}/>
                    <Route path='/about' element={<About />}> 
                        <Route path="/about/details" element={<Details />} />
                        <Route path="/about/vision" element={<Vision />} />
                    </Route>
                    <Route path='/books' element={<BooksIndex />} />
                    <Route path='/books/:bookId' element={<BookDetails />} />
                    <Route path='*' element={<NotFound />} />
               </Routes>
            </main>
        </section>
        </Router>
    )
}