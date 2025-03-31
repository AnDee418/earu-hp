import React, { useEffect }  from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {ScrollToTopButton} from '../components/SubPageNav';
import ScrollDownIndicator from '../components/animaition/ScrollDown';

import step1 from '../assets/images/Afterservice/flow-step1.png'
import step2 from '../assets/images/Afterservice/flow-step2.png'
import step3 from '../assets/images/Afterservice/flow-step3.png'

const AboutUs = () => {

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className='motion-wrapper'
        >
            <div className='body'>
                <ScrollToTopButton/>
                <div className='sub-top-wrapper after-service-top'>
                    <h1 className='sub-page-title'>AFTER SERVICE</h1>
                    <h2 className='sub-page-subtitle'>アフターサービス</h2>
                    <ScrollDownIndicator/>
                </div>
                <section className='section warranty' id='Warranty'>
                    <h1 className='sub-section-title'>WARRANTY</h1>
                    <p className='sub-section-subtitle'>保証</p>

                    <div className='warranty-wrapper'>

                        <div className='warranty-main-message-container'>
                            <h1 className='warranty-main-message-left'>購入から6ヵ月間
                                <br/><span>修理・調整</span>
                            </h1>
                            <div className='warranty-main-message-right'>
                                <h1>0</h1>
                                <h3>円</h3>
                            </div>
                        </div>

                        <p className='sub-line'>もし作成したインソールが合わなかったり、ご購入から6ヵ月以内の故障があれば、
                            何度でも修理調整が可能です。補償対象となる症状は以下の表をご参照ください。</p>

                        <table class="symptom-table">
                            <thead>
                                <tr>
                                    <th className='first-colmun first-title'>対象となる症状</th>
                                    <th className='second-colmun second-title'>※確認事項</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='first-colmun table-contant'>
                                        <p className='colmun-title'>使用中に継続的に足の裏に痛みが出る場合</p> 
                                    </td>
                                    <td className='second-colmun table-contant'>
                                        <p>
                                            弊社のインソールは足の歪みや身体全体のバランスを補正するインソールです。補正する過程で違和感やダルさ、筋肉痛のような痛みが伴う事がございます。
                                            使用後すぐに痛み等の症状が現れ、2週間から1か月使用を継続しても改善しない場合、インソールが合っていない可能性がありますので、お電話もしくは
                                            <a href="#">こちら</a>からご連絡ください。
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='first-colmun table-contant'>
                                        <p className='colmun-title'>トップカバーなどに穴が開くなどの故障がある場合</p>
                                    </td>
                                    <td className='second-colmun table-contant'>
                                        <p>
                                            インソールは消耗品です。使用方法や使用頻度、素材によって摩耗のスピードが異なります。対象期間内であればトップカバーの張り替えの修理が無償で行えますので、ご気軽にご連絡ください。
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <ul className='sp-table'>
                            <li className='sp-table-title-box'>
                                <p className='sp-table-title'>対象となる症状</p>
                            </li>
                            <li>
                                <p className='sp-colmun-title'>
                                    使用中に継続的に足の裏に痛みが出る場合
                                </p>
                                <p className='sp-colmun-detail'>弊社のインソールは足の歪みや身体全体のバランスを補正するインソールです。補正する過程で違和感やダルさ、筋肉痛のような痛みが伴う事がございます。
                                    使用後すぐに痛み等の症状が現れ、2週間から1か月使用を継続しても改善しない場合、インソールが合っていない可能性がありますので、お電話もしくは
                                    <a href="#">こちら</a>からご連絡ください。</p>
                            </li>
                            <li>
                                <p className='sp-colmun-title'>
                                    穴が開くなどの故障がある場合
                                </p>
                                <p className='sp-colmun-detail'>インソールは消耗品です。使用方法や使用頻度、素材によって摩耗のスピードが異なります。
                                    対象期間内であればトップカバーの張り替えの修理が無償で行えますので、ご気軽にご連絡ください。</p>
                            </li>
                        </ul>

                        <div className='alert'>
                            <p>※修理対応はオーダーメイド商品に限ります。</p>
                            <p>※商品の状況や故障の原因によっては修理対応をお断りさせていただく場合がございます。</p>
                        </div>

                    </div>
                </section>

                <section className='section maintenance' id='Maintenance'>
                    <h1 className='sub-section-title'>MAINTENANCE</h1>
                    <p className='sub-section-subtitle'>修理・メンテナンス</p>

                    <div className='maintenance-wrapper'>
                        <div className='mainte-price'>
                            <h3>8,800円</h3>
                            <p>（税込）</p>
                        </div>

                        <p className='sub-line'>ご愛用のインソールを再び新品のように仕上げます。
                            いつまでも、お客様の足と健康をお供するインソールと会社であるために
                            しっかりケアいたします。
                        </p>

                        <div className='accent-text'>
                            <p>こんな事が可能です</p>
                        </div>

                        <ul className='mainte-list'>
                            <li>
                                <div></div>
                                <p>トップカバーの張り替え</p>
                            </li>
                            <li>
                                <div></div>
                                <p>トップカバーの素材・カラーの変更</p>
                            </li>
                        </ul>

                        <div className='alert'>
                            <p>※修理対応はオーダーメイド商品に限ります。</p>
                            <p>※商品の状況や故障の原因によっては修理対応をお断りさせていただく場合がございます。</p>
                        </div>
                    </div>
                </section>
                <section className='section flow' id='Flow'>
                    <h1 className='sub-section-title'>FLOW</h1>
                    <p className='sub-section-subtitle'>修理までの流れ</p>

                    <div className='flow-wrapper'>
                        <ul className='flow-container'>
                            <li className='flow-1'>
                                <img src={step1} alt="step1" className='step1'/>
                                <div className='flow-text-container'>
                                    <p className='clown'>step1</p>
                                    <h2>修理・メンテナンスのお申込み</h2>
                                    <p className='flow-text'>
                                        お電話もしくは、<Link to="/contact">お問い合わせ</Link>から修理のお申込みをして
                                        いただくことができます。必要情報を選択して送信するだけ。
                                    </p>
                                </div>
                            </li>
                            <li className='flow-2'>
                                <img src={step2} alt="step1" />
                                <div className='flow-text-container'>
                                    <p className='clown'>step2</p>
                                    <h2>インソールを送る</h2>
                                    <p className='flow-text'>
                                        修理するインソールを弊社まで送ります。
                                        <span>※送料は自己負担となりますご注意ください。</span>
                                    </p>
                                </div>
                            </li>
                            <li className='flow-3'>
                                <img src={step3} alt="step1" />
                                <div className='flow-text-container'>
                                    <p className='clown'>step3</p>
                                    <h2>気長に待つ</h2>
                                    <p className='flow-text'>
                                        修理完了まで約２週間ほどいただいております。作業完了次第
                                        お客様住所までお送りいたします。
                                    </p>
                                </div>
                            </li>
                        </ul>

                        <div className='alert-flow'>
                            <p>※修理対応はオーダーメイド商品に限ります。</p>
                            <p>※商品の状況や故障の原因によっては修理対応をお断りさせていただく場合がございます。</p>
                            <p>※受注状況により、納期が前後する場合がございます。あらかじめご了承下さい。</p>
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
};

export default AboutUs;
