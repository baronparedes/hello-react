import React from 'react';

const ButtonSocial = (props) => {
    return (
        <div className="icon-container">
            <a target="_blank" href={props.href} className="btn-social btn-outline">
                <i className={props.fa}></i>
            </a>
        </div>
    );
};

export default ButtonSocial;