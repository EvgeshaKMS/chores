import React from "react";
import classes from "./Footer.module.css";
import logo from "../../assets/images/logo.svg";
import facebook from '../../assets/images/Footer/facebook.svg'
import vkontakte from '../../assets/images/Footer/vk.svg'
import instagram from '../../assets/images/Footer/instagram.svg'
import youtube from '../../assets/images/Footer/youtube.svg'
import madeIn from '../../assets/images/Footer/madeIn.svg'

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.top}>
          <img src={logo} alt="" className={classes.logo}/>
          <div className={classes.information}>
            <div className={classes.contacts}>
                <span>+7 (495) 023-87-50</span>
                <span>info@imenastudios.com</span>
            </div>

            <div className={classes.socials}>
                <a href="#"><img src={facebook} alt="" /></a>
                <a href="#"><img src={vkontakte} alt="" /></a>
                <a href="#"><img src={instagram} alt="" /></a>
                <a href="#"><img src={youtube} alt="" /></a>
            </div>
          </div>
        </div>
     
        <div className={classes.bottom}>
            <span>© Imena Studios 2019 | Все права защищены</span>
            <span>Политика конфиденциальности</span>
            <img src={madeIn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
