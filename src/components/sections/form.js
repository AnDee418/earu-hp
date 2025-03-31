import React, { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import SubmitButton from '../perts/SubmitButton';
import { useNavigate } from 'react-router-dom';

const ContactForm = ({ selectedInquiry }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // 共通フィールド
        email: '',
        nameKanji: '',
        nameKatakana: '',
        phone: '',
        message: '',
        inquiryType: '',
        
        // 修理用フィールド
        purchaseDate: '',
        purchaseLocation: '',
        postalCode: '',
        prefecture: '',
        city: '',
        street: '',
        building: '',
        paymentMethod: '代引き',
        isWarrantyPeriod: false,
        
        // 代理店特約店用フィールド
        companyOrPersonName: '',
        representativeName: '',
        companyPostalCode: '',
        companyPrefecture: '',
        companyCity: '',
        companyStreet: '',
        companyBuilding: '',
        companyPhone: '',
        
        // OEM用フィールド
        oemCompanyName: '',
        oemRepresentativeName: '',
        oemPostalCode: '',
        oemPrefecture: '',
        oemCity: '',
        oemStreet: '',
        oemBuilding: '',
        oemCompanyPhone: '',
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            inquiryType: selectedInquiry,
            paymentMethod: '代引き',
        }));
    }, [selectedInquiry]);

    // 保証期間（6ヶ月）内かどうかを判定する関数
    const checkWarrantyPeriod = (purchaseDate) => {
        if (!purchaseDate) return false;
        const purchase = new Date(purchaseDate);
        const today = new Date();
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(today.getMonth() - 6);
        return purchase >= sixMonthsAgo;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // 購入日が変更された場合、保証期間内かどうかを判定
        if (name === 'purchaseDate') {
            const isInWarranty = checkWarrantyPeriod(value);
            setFormData(prev => ({
                ...prev,
                [name]: value,
                isWarrantyPeriod: isInWarranty
            }));
        } else {
            setFormData({ ...formData, [name]: value });
        }

        // 郵便番号が7桁入力された場合に住所検索を実行
        if (name === 'postalCode' && value.length === 7) {
            searchAddress(value, 'repair');
        } else if (name === 'companyPostalCode' && value.length === 7) {
            searchAddress(value, 'agency');
        } else if (name === 'oemPostalCode' && value.length === 7) {
            searchAddress(value, 'oem');
        }
    };

    // 郵便番号から住所を検索する関数
    const searchAddress = async (postalCode, type) => {
        try {
            const response = await fetch(`https://zipcloud.ibsnet.co.jp/api/search?zipcode=${postalCode}`);
            const data = await response.json();
            
            if (data.results) {
                const address = data.results[0];
                if (type === 'repair') {
                    setFormData(prev => ({
                        ...prev,
                        prefecture: address.address1,
                        city: address.address2,
                        street: address.address3,
                    }));
                } else if (type === 'agency') {
                    setFormData(prev => ({
                        ...prev,
                        companyPrefecture: address.address1,
                        companyCity: address.address2,
                        companyStreet: address.address3,
                    }));
                } else if (type === 'oem') {
                    setFormData(prev => ({
                        ...prev,
                        oemPrefecture: address.address1,
                        oemCity: address.address2,
                        oemStreet: address.address3,
                    }));
                }
            }
        } catch (error) {
            console.error('住所検索に失敗しました:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.nameKanji || !formData.nameKatakana) {
            alert('必須項目を入力してください。');
            return;
        }

        // お問い合わせタイプ別の必須項目チェック
        if (selectedInquiry === '修理のお問い合わせ') {
            if (!formData.purchaseDate || !formData.postalCode || !formData.prefecture || !formData.city || !formData.street) {
                alert('購入日と住所は必須項目です。');
                return;
            }
        } else if (selectedInquiry === '代理店特約店契約に関するお問い合わせ') {
            if (!formData.companyOrPersonName || !formData.representativeName || 
                !formData.companyPostalCode || !formData.companyPrefecture || 
                !formData.companyCity || !formData.companyStreet || !formData.companyPhone) {
                alert('会社情報の必須項目をすべて入力してください。');
                return;
            }
        } else if (selectedInquiry === 'OEM制作に関するお問い合わせ') {
            if (!formData.oemCompanyName || !formData.oemRepresentativeName || 
                !formData.oemPostalCode || !formData.oemPrefecture || 
                !formData.oemCity || !formData.oemStreet || !formData.oemCompanyPhone) {
                alert('会社情報の必須項目をすべて入力してください。');
                return;
            }
        }

        // メール送信用のデータを整形
        const emailContent = {
            // 共通項目
            inquiryType: formData.inquiryType || '（お問い合わせ内容なし）',
            email: formData.email || '（メールアドレスなし）',
            nameKanji: formData.nameKanji,
            nameKatakana: formData.nameKatakana,
            phone: formData.phone || '（電話番号なし）',
            message: formData.message || '（お問い合わせ内容なし）',

            // 修理の場合の追加情報
            repairInfo: selectedInquiry === '修理のお問い合わせ' ? `
■ 購入情報
購入日：${formData.purchaseDate}
購入施設：${formData.purchaseLocation || '（入力なし）'}

■ 修理料金
${formData.isWarrantyPeriod ? '無償修理（保証期間内）\n修理費用：0円' : '有償修理（保証期間外）\n修理費用：8,800円（税込）\n返送料：1,100円（税込）\n合計：9,900円（税込）'}
※弊社への送料は自己負担となります。

■ お届け先情報
郵便番号：〒${formData.postalCode}
都道府県：${formData.prefecture}
市区町村：${formData.city}
町名・番地：${formData.street}
建物名・部屋番号：${formData.building || '（なし）'}

■ お支払い方法
${formData.paymentMethod}` : '',

            // 代理店特約店の場合の追加情報
            agencyInfo: selectedInquiry === '代理店特約店契約に関するお問い合わせ' ? `
■ 会社情報
会社名/個人名：${formData.companyOrPersonName}
担当者名：${formData.representativeName}
会社連絡先：${formData.companyPhone}

■ 会社所在地
郵便番号：〒${formData.companyPostalCode}
都道府県：${formData.companyPrefecture}
市区町村：${formData.companyCity}
町名・番地：${formData.companyStreet}
建物名・部屋番号：${formData.companyBuilding || '（なし）'}` : '',

            // OEMの場合の追加情報
            oemInfo: selectedInquiry === 'OEM制作に関するお問い合わせ' ? `
■ 会社情報
会社名/個人名：${formData.oemCompanyName}
担当者名：${formData.oemRepresentativeName}
会社連絡先：${formData.oemCompanyPhone}

■ 会社所在地
郵便番号：〒${formData.oemPostalCode}
都道府県：${formData.oemPrefecture}
市区町村：${formData.oemCity}
町名・番地：${formData.oemStreet}
建物名・部屋番号：${formData.oemBuilding || '（なし）'}` : ''
        };

        emailjs.send(
            'service_qjq8tbu',
            'template_m44i7td',
            emailContent,
            'XYrvyk0twVk9x4v7f'
        ).then(
            (result) => {
                alert('メールが送信されました。');
                // フォームのリセット
                setFormData({
                    email: '', nameKanji: '', nameKatakana: '', phone: '', 
                    message: '', inquiryType: '', purchaseDate: '', purchaseLocation: '',
                    postalCode: '', prefecture: '', city: '', street: '', building: '',
                    paymentMethod: '代引き', companyOrPersonName: '', representativeName: '',
                    companyPostalCode: '', companyPrefecture: '', companyCity: '',
                    companyStreet: '', companyBuilding: '', companyPhone: '',
                    oemCompanyName: '', oemRepresentativeName: '', oemPostalCode: '',
                    oemPrefecture: '', oemCity: '', oemStreet: '', oemBuilding: '',
                    oemCompanyPhone: '', isWarrantyPeriod: false
                });
                // ホームページに遷移
                navigate('/');
            },
            (error) => {
                alert('メール送信に失敗しました。再度お試しください。');
                console.error('メール送信エラー:', error);
            }
        );
    };

    // 共通フィールド
    const commonFields = (
        <>
            <div className='form-block'>
                <p className='form-item-title'>お問い合わせタイプ</p>
                <label>お問い合わせタイプ</label>
                <input
                    type="text"
                    name="inquiryType"
                    value={formData.inquiryType}
                    readOnly
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>メールアドレス<span>（必須）</span></p>
                <label>メールアドレス</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>名前（漢字）<span>（必須）</span></p>
                <label>名前（漢字）<span>（必須）</span></label>
                <input
                    type="text"
                    name="nameKanji"
                    value={formData.nameKanji}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>名前（全角カタカナ）<span>（必須）</span></p>
                <label>名前（全角カタカナ）<span>（必須）</span></label>
                <input
                    type="text"
                    name="nameKatakana"
                    value={formData.nameKatakana}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>連絡先電話番号</p>
                <label>連絡先電話番号</label>
                <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
            </div>
        </>
    );

    // 修理用フィールド
    const repairFields = (
        <>
            <div className='repair-notice'>
                <p>※修理対応はオーダーメイドの商品に限ります</p>
            </div>

            <div className='form-block'>
                <p className='form-item-title'>購入日<span>（必須）</span></p>
                <label>購入日<span>（必須）</span></label>
                <input
                    type="date"
                    name="purchaseDate"
                    value={formData.purchaseDate}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-block'>
                <p className='form-item-title'>購入した施設<span>（必須）</span></p>
                <label>購入した施設</label>
                <input
                    type="text"
                    name="purchaseLocation"
                    value={formData.purchaseLocation}
                    onChange={handleChange}
                    placeholder="例：イオンモール〇〇店"
                />
            </div>

            <div className='form-block'>
                <p className='form-item-title'>郵便番号<span>（必須）</span></p>
                <label>郵便番号<span>（必須）</span></label>
                <div className="postal-code-input">
                    <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        placeholder="例：1234567"
                        maxLength="7"
                        required
                    />
                    <span className="postal-code-notice">※ハイフン（-）なしで入力してください</span>
                </div>
            </div>

            <div className='form-block'>
                <p className='form-item-title'>都道府県<span>（必須）</span></p>
                <label>都道府県<span>（必須）</span></label>
                <input
                    type="text"
                    name="prefecture"
                    value={formData.prefecture}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-block'>
                <p className='form-item-title'>市区町村<span>（必須）</span></p>
                <label>市区町村<span>（必須）</span></label>
                <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-block'>
                <p className='form-item-title'>町名・番地<span>（必須）</span></p>
                <label>町名・番地<span>（必須）</span></label>
                <input
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className='form-block'>
                <p className='form-item-title'>建物名・部屋番号</p>
                <label>建物名・部屋番号</label>
                <input
                    type="text"
                    name="building"
                    value={formData.building}
                    onChange={handleChange}
                    placeholder="例：〇〇マンション101"
                />
            </div>

            <div className='form-block payment-method'>
                <p className='form-item-title'>入金方法</p>
                <div className="fixed-payment">
                    <p className="payment-text">代引き</p>
                    <span className="payment-notice">※お支払い方法は代引きのみとなります</span>
                </div>
            </div>

            <div className='form-block notice-text'>
                <h3>修理料金について</h3>
                {formData.purchaseDate ? (
                    formData.isWarrantyPeriod ? (
                        <div className="warranty-info">
                            <p className="warranty-status">無償修理（保証期間内）</p>
                            <div className="price-info">
                                <p>修理費用：0円</p>
                                <p className="shipping-notice">※弊社への送料は自己負担となります。</p>
                            </div>
                        </div>
                    ) : (
                        <div className="warranty-info">
                            <p className="warranty-status">有償修理（保証期間外）</p>
                            <div className="price-info">
                                <p>修理費用：8,800円（税込）</p>
                                <p>返送料：1,100円（税込）</p>
                                <p className="total">合計：9,900円（税込）</p>
                                <p className="shipping-notice">※弊社への送料は自己負担となります。</p>
                            </div>
                        </div>
                    )
                ) : (
                    <p className="input-notice">※購入日を入力すると料金が表示されます。</p>
                )}
            </div>

            <div className='form-block notice-text'>
                <h3>ご注意事項</h3>
                <div className="notice-list">
                    <p>・修理インソールを弊社にお送りいただく必要があります。</p>
                    <p>・弊社にお客様のインソールが届いてから修理完了までに1週間〜10日程度お時間をいただきます。</p>
                    <p>・修理が可能なのはオーダーメイドの商品のみです。</p>
                    <p>・修理不可能な場合もございます。あらかじめご了承ください。</p>
                </div>
            </div>
        </>
    );

    // 代理店特約店用フィールド
    const agencyFields = (
        <>
            <div className='form-block'>
                <p className='form-item-title'>会社名 or 個人名<span>（必須）</span></p>
                <label>会社名 or 個人名<span>（必須）</span></label>
                <input
                    type="text"
                    name="companyOrPersonName"
                    value={formData.companyOrPersonName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>担当者名<span>（必須）</span></p>
                <label>担当者名<span>（必須）</span></label>
                <input
                    type="text"
                    name="representativeName"
                    value={formData.representativeName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>郵便番号<span>（必須）</span></p>
                <label>郵便番号<span>（必須）</span></label>
                <div className="postal-code-input">
                    <input
                        type="text"
                        name="companyPostalCode"
                        value={formData.companyPostalCode}
                        onChange={handleChange}
                        placeholder="例：1234567"
                        maxLength="7"
                        required
                    />
                    <span className="postal-code-notice">※ハイフン（-）なしで入力してください</span>
                </div>
            </div>
            <div className='form-block'>
                <p className='form-item-title'>都道府県<span>（必須）</span></p>
                <label>都道府県<span>（必須）</span></label>
                <input
                    type="text"
                    name="companyPrefecture"
                    value={formData.companyPrefecture}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>市区町村<span>（必須）</span></p>
                <label>市区町村<span>（必須）</span></label>
                <input
                    type="text"
                    name="companyCity"
                    value={formData.companyCity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>町名・番地<span>（必須）</span></p>
                <label>町名・番地<span>（必須）</span></label>
                <input
                    type="text"
                    name="companyStreet"
                    value={formData.companyStreet}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>建物名・部屋番号</p>
                <label>建物名・部屋番号</label>
                <input
                    type="text"
                    name="companyBuilding"
                    value={formData.companyBuilding}
                    onChange={handleChange}
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>会社連絡先<span>（必須）</span></p>
                <label>会社連絡先<span>（必須）</span></label>
                <input
                    type="tel"
                    name="companyPhone"
                    value={formData.companyPhone}
                    onChange={handleChange}
                    required
                />
            </div>
        </>
    );

    // OEM用フィールド
    const oemFields = (
        <>
            <div className='form-block'>
                <p className='form-item-title'>会社名 or 個人名<span>（必須）</span></p>
                <label>会社名 or 個人名<span>（必須）</span></label>
                <input
                    type="text"
                    name="oemCompanyName"
                    value={formData.oemCompanyName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>担当者名<span>（必須）</span></p>
                <label>担当者名<span>（必須）</span></label>
                <input
                    type="text"
                    name="oemRepresentativeName"
                    value={formData.oemRepresentativeName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>郵便番号<span>（必須）</span></p>
                <label>郵便番号<span>（必須）</span></label>
                <div className="postal-code-input">
                    <input
                        type="text"
                        name="oemPostalCode"
                        value={formData.oemPostalCode}
                        onChange={handleChange}
                        placeholder="例：1234567"
                        maxLength="7"
                        required
                    />
                    <span className="postal-code-notice">※ハイフン（-）なしで入力してください</span>
                </div>
            </div>
            <div className='form-block'>
                <p className='form-item-title'>都道府県<span>（必須）</span></p>
                <label>都道府県<span>（必須）</span></label>
                <input
                    type="text"
                    name="oemPrefecture"
                    value={formData.oemPrefecture}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>市区町村<span>（必須）</span></p>
                <label>市区町村<span>（必須）</span></label>
                <input
                    type="text"
                    name="oemCity"
                    value={formData.oemCity}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>町名・番地<span>（必須）</span></p>
                <label>町名・番地<span>（必須）</span></label>
                <input
                    type="text"
                    name="oemStreet"
                    value={formData.oemStreet}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>建物名・部屋番号</p>
                <label>建物名・部屋番号</label>
                <input
                    type="text"
                    name="oemBuilding"
                    value={formData.oemBuilding}
                    onChange={handleChange}
                />
            </div>
            <div className='form-block'>
                <p className='form-item-title'>会社連絡先<span>（必須）</span></p>
                <label>会社連絡先<span>（必須）</span></label>
                <input
                    type="tel"
                    name="oemCompanyPhone"
                    value={formData.oemCompanyPhone}
                    onChange={handleChange}
                    required
                />
            </div>
        </>
    );

    return (
        <div className='contact-form-container'>
            <div className='form-title-box'>
                <h1>
                    お問い合わせ内容をご記入ください。
                </h1>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
                {commonFields}
                
                {selectedInquiry === '修理のお問い合わせ' && repairFields}
                {selectedInquiry === '代理店特約店契約に関するお問い合わせ' && agencyFields}
                {selectedInquiry === 'OEM制作に関するお問い合わせ' && oemFields}

                <div className='form-block'>
                    <p className='form-item-title'>お問い合わせ内容</p>
                    <label>お問い合わせ内容</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                    />
                </div>
                <SubmitButton/>
            </form>
        </div>
    );
};

export default ContactForm;