import React from "react";
import classes from "./Header.module.css";
import avatar from "../../assets/images/Header/avatar.png";
import settings from '../../assets/images/Header/settings.svg'
import logout from '../../assets/images/Header/logout.svg'

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.account}>
        <img src={avatar} alt="avtr" />
        <span>Наталья Сергеева</span>
      </div>
      <div className={classes.account_settings}>
        <img src={settings} alt="stn" />
        <span>Настройки аккаунта</span>
      </div>
      <div className={classes.logout}>
        <img src={logout} alt="" />
        <span>Выйти из кабинета</span>
      </div>
    </div>
  );
};

export default Header;
