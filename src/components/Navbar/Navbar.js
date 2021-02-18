import React, {useState} from 'react';
import {Link} from 'react-router-dom'
import brand from '../../assets/brand.png'
import menu from '../../assets/menu.svg'
import styles from './navbar.module.css';
import useWindowSize from "../../useWindowSize";


export default function Navbar() {
    const windowSize = useWindowSize();
    const [open, setOpen] = useState(false)
    const handleNavbar = () => {
        setOpen(!open)
    }
    return (
        <nav  className={styles.navbar}>
            <div className={`container ${styles.navbarContainer}`}>
                <Link to="/">
                    <img src={brand} alt=""/>
                </Link>
                {windowSize === "lg" ?
                    <div className={styles.collapse}>
                        <ul className={styles.navCategory}>
                            <li className={styles.active}><Link to="/">About Us</Link></li>
                            <li><Link to="/">Team</Link></li>
                            <li><Link to="/">Careers</Link></li>
                            <li><Link to="/">Projects</Link></li>
                            <li><Link to="/">News</Link></li>
                        </ul>
                        <Link to="/" className={styles.signUp}>
                            sign up
                        </Link>
                    </div> : <div>
                        <button onClick={handleNavbar} className={styles.btn}>
                            <img width="30px" src={menu} alt=""/>
                        </button>
                        <div className={`${styles.navbarToggler} ${open === true ? styles.open : null}`}>
                            <ul className={styles.collapsed}>
                                <li className={styles.active}><Link to="/" onClick={handleNavbar}>About Us</Link></li>
                                <li><Link to="/" onClick={handleNavbar}>Team</Link></li>
                                <li><Link to="/" onClick={handleNavbar}>Careers</Link></li>
                                <li><Link to="/" onClick={handleNavbar}>Projects</Link></li>
                                <li><Link to="/" onClick={handleNavbar}>News</Link></li>
                                <li><Link to="/" className={styles.signUpMini}>
                                    sign up
                                </Link></li>
                            </ul>

                        </div>
                    </div>
                }
            </div>
        </nav>
    )
}
