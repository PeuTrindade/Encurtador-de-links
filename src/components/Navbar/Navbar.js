import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../images/logo.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';

const Navbar = () => {
    const [mobile,setMobile] = React.useState(false);
    const [mobileDisplay,setMobileDisplay] = React.useState(false);
    const screenSize = window.innerWidth;

    React.useEffect(() => {
        if(screenSize <= 750){
            setMobile(true);
        }
        else {
            setMobile(false); 
        }
    },[screenSize]);

    function handleClick(){
        setMobileDisplay(!mobileDisplay);
    }

    return (
        <header className={styles.header}>
          <nav className={styles.nav}>
            { mobile ? 
            <div className={styles.mobileContainer}>
                <img src={logo} alt='logo'/>
                {mobileDisplay ? <MdClose onClick={handleClick} style={{marginRight:'5%',fontSize:'2.5rem',cursor:'pointer',color:'hsl(257, 27%, 26%)'}}/> : <GiHamburgerMenu onClick={handleClick} style={{marginRight:'5%',fontSize:'2rem',cursor:'pointer',color:'hsl(257, 27%, 26%)'}}/>}
            </div> :
            <>
            <div className={styles.firstPart}>
                <img src={logo} alt='logo'/>
                <ul className={styles.firstItems}>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
            </div>
            <div className={styles.secondPart}>
                <ul className={styles.secondItems}>
                    <li className={styles.item2}>Login</li>
                    <li className={styles.btn}>Pricing</li>
                </ul>
            </div>
            </>}
            </nav>
            {mobileDisplay && <div className={styles.mobileDisplay}>
                <ul className={styles.itemsMobile1}>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Resources</li>
                </ul>
                <ul className={styles.itemsMobile2}>
                    <li className={styles.itemMobile2}>Login</li>
                    <li className={styles.btnMobile}>Sign Up</li>
                </ul>
            </div>}
        </header>
    )
}

export default Navbar;
