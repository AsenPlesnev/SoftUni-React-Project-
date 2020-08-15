import React from 'react';
import styles from './index.module.css';
import { Link } from 'react-router-dom';

const AuthPageWrapper = (props) => {
    return (
        <div className={styles['gradient-animation']} style={{ "overflowX": "hidden" }}>
            <div className={"row"}>
                <div className={"col s12"}>
                    <div className={styles.valign}>
                        <div className="col s12 m6 push-m3">
                            <div className="card-panel white">
                                <form >
                                    <p className="center">
                                        <Link className="flow-text indigo-text text-lighten-3" to="/">
                                            <span className="red-text text-lighten-3">Net</span>Book
                                        </Link>
                                    </p>
                                    <div className="form-group mx-auto">
                                        <div className="row">
                                            {props.children}
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPageWrapper;