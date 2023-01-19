import {useRef} from 'react';
import {useState} from 'react';

function NavBar() {

    const NavRef = useRef();
    // const XBtn = useRef();

    const ShowNavbar = () => {
        NavRef.current.classList.toggle("navbar-mobile");
    }

    // const ChangeBtn = () => {
    //     XBtn.current.classList.toggle("bi-x");
    // }

    const [isActive, setActive] = useState("false");

    const ToggleClass = () => {
        setActive(!isActive);
    };

    return ( 
        <nav id="navbar" className="navbar" ref={NavRef}>
            <ul>
                <li><a className="nav-link scrollto active" href="#hero" onClick={ToggleClass}>Home</a></li>
                <li><a className="nav-link scrollto" href="#about" onClick={ToggleClass}>About</a></li>
                <li><a className="nav-link scrollto" href="#services" onClick={ToggleClass}>Services</a></li>
                <li><a className="nav-link scrollto" href="#contact" onClick={ToggleClass}>Contact</a></li>
            </ul>
            <i className={isActive ? "bi bi-list mobile-nav-toggle" : "bi bi-x mobile-nav-toggle"} onClick={function(event){ ToggleClass(); ShowNavbar()}}></i>
        </nav>       
    );   
}

export default NavBar;