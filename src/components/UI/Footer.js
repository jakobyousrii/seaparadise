import classes from "./Footer.module.css";
import { FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Footer = () => {

    return (
        <footer className={classes.footerSection}>
            <p>All Rights Reserved © Jakob Yousri, 2021.</p>

            <article className={classes.networksArticle}>
                <p>Social networks:</p>
                <div className={classes.Snetworks}>
                    <a href="https://hr.linkedin.com/in/jakobyousri"><FaLinkedin/></a>
                    <a href="https://www.facebook.com/jakob.yousri"><FaFacebook/></a>
                    <a href="https://www.instagram.com/jakobyousri/?hl=en"><FaInstagram/></a> 
                </div>
            </article>
        </footer>
    )
}

export default Footer;