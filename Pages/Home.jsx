import { LongTxt } from "../cmps/LongTxt.jsx"
const { useState, useEffect } = React

export function Home() {
    return (
        <section className="home">
            <h2 className="home">Welcome to Miss Books webpage</h2>
            <img className="home-photo" src="assets/img/homePagePhot.webp" />
            <LongTxt  txt={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sit amet lorem vitae justo sagittis efficitur ut eget nisi. Nulla facilisi. Etiam malesuada convallis volutpat.'}/>
       </section>
    )
}

