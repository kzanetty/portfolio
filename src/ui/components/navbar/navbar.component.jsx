import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { ContainerComponent } from "../"
import './navbar.component.css'
import iconProgramacao from '../../../assets/icon-programacao.png'

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
                <div className='content-navbar'>
                    <img src={iconProgramacao} alt="Icon de Programação" />

                    <ul className='items-navbar'>
                        <li>
                            <Link activeClass="active" to="/" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                                Sobre mim
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="experience" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                                Experiência
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="project" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-heightNavbar} duration={1000} >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </div>

            </ContainerComponent>
        </div>
    )
}