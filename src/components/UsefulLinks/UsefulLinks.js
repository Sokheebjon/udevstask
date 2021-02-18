import React from "react";
import styles from "./usefulLinks.module.css";
import brand from '../../assets/brand.png';
import protection from '../../assets/protection.svg';
import help from '../../assets/help.svg';
import press from '../../assets/press.svg';
import logo from '../../assets/logo.svg';
import support from '../../assets/support.svg';

export default function UsefulLinks(props) {
    const useData = [
        {
            img: brand,
            name: "VK",
            text: "Community sharing top news",
            png: true,
            bgImage: null,
            link: "https://vk.com/team"
        },
        {
            img: protection,
            name: "Data Protection",
            text: "Confidentially and data protection",
            bgImage: "linear-gradient(135deg,#81da82,#4ab34b)",
            link: "https://vk.com/data_protection"
        },
        {
            img: help,
            name: "Data Protection",
            text: "Confidentially and data protection",
            bgImage: "linear-gradient(135deg, #787884,#43434d)",
            link: "https://vk.com/safety"
        },
        {
            img: logo,
            name: "Brand Assets",
            text: "Official logo and font",
            bgImage: "linear-gradient(135deg,#95cbf4,#5b9ce6)",
            link: "https://vk.com/brand"
        },
        {
            img: press,
            name: "Media contacts",
            text: "press@vk.com",
            underline: true,
            bgImage: "linear-gradient(135deg,#95cbf4,#5b9ce6)",
            link: "mailto:press@vk.com"
        },
        {
            img: support,
            name: "Support",
            text: "VK Support",
            underline: true,
            bgImage: "linear-gradient(135deg,#787884,#43434d)",
            link: "https://vk.com/support?act=home"
        }
    ]

    return (
        <div className={styles.usefulLinks}>
            <div className="container">
                <h1 className={styles.header}>{props.data ? props.data.header : null}</h1>
                <div className="row">
                    {useData ? useData.map((d, i) => (
                        <div className="col-3" key={i}>
                            <a href={d.link} className={styles.link}>
                                <div style={{backgroundImage: `${d.bgImage}`}}
                                     className={d.png === true ? null : styles.img}>
                                    <img src={d.img} alt=""/>
                                </div>
                                <h3 className={styles.nameHead}>{d.name}</h3>
                                <p className={d.underline === true ? styles.underlined : styles.lined}>{d.text}</p>
                            </a>
                        </div>
                    )) : null}
                </div>
            </div>
            <footer className={styles.footer}>
                <div className="container">
                    <div style={{justifyContent: "space-between"}} className="row">
                        <div className="col-footer">
                            <a className={styles.footerLinks} href="https://vk.com/dev">Developers</a>
                            <a className={styles.footerLinks} href="https://vk.com/business-ads">VK ads</a>
                            <a className={styles.footerLinks} href="https://vk.com/legal">Legal information</a>
                            <a className={styles.footerLinks} href="https://vk.com/data_protection">Data Protection</a>
                            <a className={styles.footerLinks} href="https://vk.com/safety">Safety Guidelines</a>
                        </div>
                        <div className="col-footer">
                            <a href="#" className={styles.language}>English</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}
