import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Popup = ({ isOpen, onClose, staff }) => {
    if (!isOpen) return null;

    return (
        <div className="staff-popup">
            <div className="popup-inner">

                <button className="staff-popup-button" onClick={onClose}><FontAwesomeIcon icon={faCircleXmark} /></button>

                <div className="popup-content">
                    <div className='image-container'>
                        <img src={staff.image} alt={staff.name} />
                        <div className='staff-detail'>
                            <h5>{staff.title}</h5>
                            <h4>{staff.name}</h4>
                            <p className='eng-name'>{staff.engName}</p>
                        </div>
                    </div>
                    <ul className='hovered-detail'>
                        {staff.birth && (
                            <li className='hovered-detail-items'>
                                <p className='label'>生まれ</p>
                                <p className='inform'>{staff.birth}</p>
                            </li>
                        )}
                        {staff.from && (
                            <li className='hovered-detail-items'>
                                <p className='label'>出身地</p>
                                <p className='inform'>{staff.from}</p>
                            </li>
                        )}
                        {Array.isArray(staff.career) && staff.career.length > 0 && (
                            <li className="hovered-detail-items">
                                <p className="label">経歴</p>
                                <p className="inform">
                                    {staff.career.map((item, index) => (
                                        <React.Fragment key={index}>
                                            {item}
                                            {index < staff.career.length - 1 && <br />}
                                        </React.Fragment>
                                    ))}
                                </p>
                            </li>
                        )}
                        {staff.qualification && (
                            <li className='hovered-detail-items'>
                                <p className='label'>資格</p>
                                <p className='inform'>{staff.qualification}</p>
                            </li>
                        )}
                        {staff.email && (
                            <li className='hovered-detail-items'>
                                <p className='label'>e-mail</p>
                                <p className='inform'>{staff.email}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Popup;