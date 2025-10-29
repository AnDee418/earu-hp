import React from "react";
import Atas from '../../assets/images/logo/アセット 1@3x.png'
import Trigger from '../../assets/images/logo/TRIGGERPOINT LOGO.png'
import Easys from '../../assets/images/logo/Easys LOGO-02.svg'
import Ashinaga from '../../assets/images/logo/logo whitebg.png'
import HURON from '../../assets/images/logo/HURON_LOGO.webp'


const AgentLogo = () => {
  return (
    <ul className='agent-logo-container'>
        <li><img src={Atas} alt='background' className='agent-logo'></img></li>
        <li><img src={Trigger} alt='background' className='agent-logo'></img></li>
        <li><img src={Easys} alt='background' className='agent-logo'></img></li>
        <li><img src={Ashinaga} alt='background' className='agent-logo'></img></li>
        <li><img src={HURON} alt='background' className='agent-logo'></img></li>
    </ul>
  );
};

export default AgentLogo;
