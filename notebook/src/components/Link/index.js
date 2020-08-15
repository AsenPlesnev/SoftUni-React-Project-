import React from 'react'
import { Link } from 'react-router-dom';

const LinkComponent = ({ title, href }) => {
    return (
        <li>
            <Link to={href}>
                {title}
            </Link>
        </li>
    )
}

export default LinkComponent;