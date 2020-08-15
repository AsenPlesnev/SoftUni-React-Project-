import React, { Component } from 'react';
import styles from './index.module.css';
import Link from '../Link';

class HomePage extends Component {
    render() {
        return (
            <div className={styles['gradient-animation']} style={{ "overflowX": "hidden" }}>

                <nav className={"transparent z-depth-0"}>
                    <div className={"nav-wrapper"}>
                        <div className="nav-wrapper">
                            <div className={"row"}>
                                <div className={"col s12"}>
                                    <ul className={"right hide-on-med-and-down"}>
                                        <Link href="/register" title="Регистрация" />
                                        <Link href="/login" title="Вход" />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

                <div className={"row"}>
                    <div className={"col s12"}>
                        <div className={styles.valign}>
                            <div>
                                <h1 className={"header center white-text"}>
                                    <span className={"red-text text-lighten-3"}>Net</span>Book
                                </h1>
                                <p className={"flow-text center white-text"}>Проверка на ученик</p>
                                <form action="#">
                                    <div className={"container"}>
                                        <div className={"row"}>
                                            <div className={"input-field col s12 m4 push-m4"}>
                                                <label htmlFor="code" className={styles['home-label']}>Код</label>
                                                <input id="code" name="code" type="text" className={styles['home-input']} />
                                            </div>
                                        </div>
                                    </div>
                                    <p className={"center"}>
                                        <button className={`${styles["button-total"]} ${styles["button-3e"]} button-3 icon-arrow-right red lighten-3 white-text`}>Напред</button>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage;