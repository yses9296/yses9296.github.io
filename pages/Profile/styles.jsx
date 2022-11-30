import styled from '@emotion/styled';


export const ProfileWrap = styled.div `
    display: flex;
    justify-content: space-between;
`;
export const ProfileTitle = styled.h3 `
    font-size: 2.45rem;
    font-weight: 700;
    margin-bottom: 20px;
`;

export const ProfileDesc = styled.div`
    width: 60%;

    &>span{
        font-size: 1.25rem;
        font-weight: 400;
        line-height: 1.8;
    }
`

export const ProfileResume = styled.a`
    background-color: #6BA7E5;
    color: #fff;
    width: 300px;
    height: 60px;
    border-radius: 5px;
    font-size: 1.1rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: rgb(18, 44, 96);
    }
`

export const ProfileImage = styled.img`
    width: 25%;
    border-radius: 10px;
    transition: .3s;

    &:hover {
        transform: scale(1.08);
        transition: .3s;
    }
`
export const ProfileImage_ = styled.div`
    width: 30%;
    height: auto;
    background-image: url(../../assets/eunseo_profile_img.jpg);
    background-size: cover;
    border-radius: 10px;
`;