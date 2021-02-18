import React from "react";
import Carousel from "./Carousel";

import styles from './offices.module.css'
import sank from '../../assets/sankPeterburk.jpg'
import moskov from '../../assets/moskov.jpg'
import sochi from '../../assets/sochi.jpg'

export default function Offices({data}) {
    return (
        <div className={styles.offices}>
            <div className="container">
                <h1>{data ? data.header : null}</h1>
                <p className={styles.text}>The VK Team is based in three cities: Saint Petersburg, Moscow, and Sochi. We
                    also have <a href="https://vk.com/@vk-regions">regional representative offices</a> in Yekaterinburg,
                    Kazan, Nizhny Novgorod, and Kazakhstan.</p>
                <p className={styles.text}>{data ? data.paragraph : null}</p>
                <div style={{marginTop: "50px"}} className="row">
                    <div className="col-2">
                        <div className={styles.card}>
                            <img className="img-fluid" src={sank} alt=""/>
                            <div className={styles.overlay}>
                                <h1>Saint Petersburg</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={styles.card}>
                            <img className="img-fluid" src={moskov} alt=""/>
                            <div className={styles.overlay}>
                                <h1>Moscow</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-2">
                        <div className={styles.card}>
                            <img className="img-fluid" src={sochi} alt=""/>
                            <div className={styles.overlay}>
                                <h1>Sochi</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.history}>
                    <h1 className={styles.historyHead}>{data ? data.history : null}</h1>
                    <Carousel/>
                </div>
            </div>
        </div>
    )
}
