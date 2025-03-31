import React, { useState } from 'react';
import '../../styles/_accordion.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
    return (
        <div className={`accordion-item ${isOpen ? 'open' : ''}`}>
            <div className="accordion-title" onClick={onClick}>
                <div className='accordion-title-text'>
                    <div className='q-icon'>
                        <FontAwesomeIcon icon={faQuestion} />
                    </div>
                    {title}
                </div>
                <span className="accordion-icon">{isOpen ? '-' : '+'}</span>
            </div>
            <div className="accordion-content">
                <div className="content-inner">
                    {typeof content === 'string' ? content : React.createElement(React.Fragment, null, content)}
                </div>
            </div>
        </div>
    );
};

const AccordionMenu = ({ items }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion-menu">
            {items.map((item, index) => (
                <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    );
};

export default AccordionMenu;
