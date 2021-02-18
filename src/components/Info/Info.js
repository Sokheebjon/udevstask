import React from "react";
import styles from './info.module.css'
import aboutImg from "../../assets/img_about_1.png"

const Info = (props) => {
    return (
        <div className={styles.Info}>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <div className={styles.weconnect}>
                                <h1>{props.data ? props.data.weConnect : null}</h1>
                            </div>
                            <h1 className={styles.pep}>{props.data ? props.data.h1 : null}</h1>
                            <p className={styles.parag}>{props.data ? props.data.paragraph : null}</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img className="img-fluid" src={aboutImg} alt=""/>
                        </div>
                    </div>
                </div>
                <div style={{padding: "32px 0"}} className="row">
                    <div className="col-1">
                        <div className={styles.card}>
                            <h1>97M</h1>
                            <p>monthly active users</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className={styles.card}>
                            <h1>15B</h1>
                            <p>messages daily</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className={styles.card}>
                            <h1>1B</h1>
                            <p>likes daily</p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className={styles.card}>
                            <h1>89</h1>
                            <p>supported languages</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;
