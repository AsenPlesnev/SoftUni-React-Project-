import React from 'react';
import styles from './index.module.css';

const AuthPageWrapper = (props) => {
    return (
        <div className={styles['gradient-animation']} style={{ "overflowX": "hidden" }}>
            <div className={"row"}>
                <div className={"col s12"}>
                    <div className={styles.valign}>
                        <div className="col s12 m6 push-m3">
                            <div className="card-panel white">
                                {props.children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthPageWrapper;