import React from 'react';
import { FooterSection, FooterCont1, FooterCont2, FooterCont3 } from './styles';

const Footer = () => {
  return (
    <FooterSection>
      <FooterCont1>
        <a href="https://github.com/yses9296" target='_blank'>Github</a>
      </FooterCont1>
      <FooterCont2>
        <address>copyright 2022, Eunseo. All rights reserved.</address>
      </FooterCont2>
      <FooterCont3>
        <a href="https://unmarred-jury-e70.notion.site/Eunseo-Choi-71d61ef0c52546c598039be3f0c22f84" target='_blank'>Notion</a>
      </FooterCont3>
    </FooterSection>
  )
}

export default Footer