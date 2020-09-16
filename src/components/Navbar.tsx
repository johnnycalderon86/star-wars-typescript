import React, { Dispatch, SetStateAction } from 'react'
import '../styles/Navbar.css'
type Dispatcher<T> = Dispatch<SetStateAction<T>>;



type Page = {
    page: string,
    setPage: Dispatcher<string>
}

const Navbar = ({ page, setPage }: Page) => {


    return (
        <nav className="navbarNav">
            <button className="navbarButton" onClick={() => {
                setPage('People')
            }}>People</button>
            <button className="navbarButton" onClick={() => {
                setPage('Planets')
            }}>Planets</button>
        </nav>
    )
}
export default Navbar