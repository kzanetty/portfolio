import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { ContainerComponent } from "../"
import './navbar.component.css'

export function NavbarComponent() {
    const [heightNavbar, setHeightNavbar] = useState(50)

    function getHeightNavBar() {
        const navbarElement = document.getElementById("navbar")
        const valueHeightNavbar = navbarElement.offsetHeight + 1
        setHeightNavbar(valueHeightNavbar)
    }

    useEffect(() => {
        getHeightNavBar()
    }, [])

    return (
        <div id="navbar" className='navbar'>
            <ContainerComponent fullHeight={true}>
                <ul className='items-navbar'>
                    <li>
                        <Link activeClass="active" to="home" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="about" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                            about
                        </Link>
                    </li>
                    <li>
                        <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                            contact
                        </Link>
                    </li>
                </ul>
            </ContainerComponent>
        </div>
    )
}