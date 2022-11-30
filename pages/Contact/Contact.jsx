import React from 'react';
import { PageSection } from '@pages/Styles'
import { ContactTitle, ContactDesc, ContactMail } from '@pages/Contact/styles'


const Contact = () => {
    const message = '저의 포트폴리오에 방문해 주셔서 감사합니다. \n 더 많은 이야기를 나누고 싶으시다면'
    return (
        <PageSection>
            <ContactTitle>How to Contact : Contact</ContactTitle>
            <ContactDesc>
                {message}
            </ContactDesc>

            <ContactMail href="https://mail.google.com/mail/" target='_blank'>yses9296@naver.com</ContactMail>

                    
            <ContactDesc>
                메일을 남겨주시면 3일 이내로 답장 드립니다 :&#41;
            </ContactDesc>
        </PageSection>
    )
}

export default Contact

