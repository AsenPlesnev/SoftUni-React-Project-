import React from 'react';
import styles from './index.module.css';

const SubmitButton = ({ text }) => {
    return (
        <div className={[styles['submit-button'], "row"]}>
            <div className="center-align">
                <button type="submit" className="btn waves-effect waves-light">{text}</button>
            </div>
        </div>
    )
}

export default SubmitButton;