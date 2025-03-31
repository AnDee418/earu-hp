import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from '../sections/form';  // ContactFormのインポート
import '../../styles/_contact.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ContactConsentPage = ({ onInquiryChange }) => {
    const [agreed, setAgreed] = useState(false);
    const [selectedInquiry, setSelectedInquiry] = useState('');
    const [showContactForm, setShowContactForm] = useState(false);

    const handleAgreeChange = (e) => {
        setAgreed(e.target.checked);
    };

    const handleInquiryChange = (e) => {
        const inquiry = e.target.value;
        setSelectedInquiry(inquiry);
        onInquiryChange(inquiry);
    };

    const handleFormSubmission = () => {
        if (agreed && selectedInquiry !== "") {
            setShowContactForm(true);
        } else if (!agreed) {
            alert('フォームに進む前に、利用規約に同意してください。');
        } else if (selectedInquiry === "") {
            alert('お問い合わせ内容を選択してください。');
        }
    };

    return (
        <div className="contact-consent">
            <CSSTransition
                in={!showContactForm}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                <div className="contact-pre-agree">
                    <h1 className='contact-title'>お問い合わせ</h1>
                    <p className='agree-detail'>
                        下記の「個人情報の取扱いについて」ご覧いただき、「同意する」にチェックを入れてフォームにお進みください。
                    </p>

                    <div className="privacy-policy">
                        <h2>個人情報の取扱いについて</h2>
                        <p className='privacy-policy-text'>
                            お客様からのお問い合わせ内容をお問い合わせフォームにて受け付けております。
                            「個人情報の取扱いについて」に同意の上、チェックをしてからフォームをお進みいただき、必要事項をご記入の上
                            「送信」を押してください。
                            <br/>
                            <strong>
                                （注意）下記につきまして、あらかじめご了承くださいますようお願いいたします。
                            </strong>
                        </p>
                        <ul>
                            <li>各種個別対応する要望につきましては、原則メールにて対応させていただきます。
                                <br/>（メールアドレスは正確にご入力ください。弊社からのメールが迷惑メールフィルタにより届かない場合がございますのでご注意ください。）
                            </li>
                            <li>お問い合わせいただいた内容により、ご返答できない場合がございます。</li>
                            <li>
                            弊社からの回答は、お問い合わせいただいたお客様の特定のご質問にお答えするものです。弊社の許可なく、回答内容の一部もしくは全体を転用、二次利用、又は当該お客様以外に開示することは固くお断りいたします。
                            </li>
                            <li>お問い合わせには、原則として営業時間内に対応させていただきます。</li>
                            <li>営業時間：9:00～17:30（土・日・祝日、年末年始、夏期休暇等、弊社休日を除く）</li>
                            <li>お電話番号等の事項が不正確である場合やお問い合わせの内容によっては、お返事を差し上げられない場合があります。</li>
                            <li>お客様の個人情報は、お問い合わせへの対応に利用し、法令に基づく場合を除き、他に利用または提供することはありません。弊社規定に従い適切に管理いたします。
                                個人情報の取扱いを委託する場合は、当社の厳正な管理の下で行います。個人情報のご入力は任意ですが、必須項目にご入力いただけない場合は送信できません。
                            </li>
                        </ul>
                    </div>

                    <div className="consent">
                        <input
                            type="checkbox"
                            id="agreeCheckbox"
                            checked={agreed}
                            onChange={handleAgreeChange}
                        />
                        <label htmlFor="agreeCheckbox">「個人情報の取扱いについて」に同意する</label>
                    </div>

                    <div className="contact-selection">
                        <p>お問い合わせ内容をご選択ください。</p>
                        <select value={selectedInquiry || ''} onChange={handleInquiryChange}>
                            <option value="">- お問い合わせ内容を選択ください -</option>
                            <option value="販売会に関するお問い合わせ">販売会ついて</option>
                            <option value="修理のお問い合わせ">修理について</option>
                            <option value="代理店特約店契約に関するお問い合わせ">代理店特約店契約について</option>
                            <option value="OEM制作に関するお問い合わせ">OEM制作について</option>
                            <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                        </select>
                    </div>
                    <div className='contact-button-box'>
                        <button
                            className={`contact-button ${agreed ? 'enabled' : 'disabled'}`}
                            onClick={handleFormSubmission}
                            disabled={!agreed}
                        >
                            つぎへ<FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </div>
                </div>
            </CSSTransition>

            <CSSTransition
                in={showContactForm}
                timeout={500}
                classNames="fade"
                unmountOnExit
            >
                <ContactForm selectedInquiry={selectedInquiry} />
            </CSSTransition>
        </div>
    );
};

export default ContactConsentPage;