import React, { useState } from 'react';
import { PageSection, PageTitle } from '@pages/Styles';
import { ProfileWrap, ProfileDesc, ProfileTitle, ProfileResume, ProfileImage } from '@pages/Profile/styles';

import ProfileImg from '@assets/eunseo_profile_img.jpg'

const Profile = () => {
  const profileDesc = "세상을 넓게 보는 시야로 다양한 웹을 만들고자 하루하루 꾸준히 공부하고 있어요. \n 누구보다 강한 책임감을 가지고 끝까지 완주하려고 해요. \n한 번 빠지면 시간 가는줄 모르고 작업에 몰두하곤 한답니다! \n아직 많이 미숙한 부분이 많지만, 빠른 습득력과 이해력으로 업무를 센스있게 마무리할 수 있어요 :)";


  return (
    <PageSection>
      <PageTitle>Who am I : Profile</PageTitle>
      <ProfileWrap>
        <ProfileDesc>
          <ProfileTitle>0에서 무한으로 성장할 수 있는 최은서 입니다.</ProfileTitle>
          {profileDesc.split("\n").map( (v,i) => {
            return (<span key={i}>{ v }</span>);
          })}

          <ProfileResume href="https://drive.google.com/file/d/1L9wxakFISR81ut-1CTZyUmYwjzXpysPc/view?usp=sharing" target='_blank' >view resume</ProfileResume>
        </ProfileDesc>
        {/* <ProfileImage></ProfileImage> */}
        <ProfileImage src={ProfileImg} alt="" />
                        
      </ProfileWrap>


    </PageSection>
  )
}

export default Profile