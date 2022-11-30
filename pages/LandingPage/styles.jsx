import styled from '@emotion/styled';
import MainIcon from './MainIcon.svg';

export const SVGWrap = styled.div`
    width: 100%;
    height: 83vh;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MainSVG = styled(MainIcon)`
    width: 65%; 
    height: 75%;
    transition: all 500ms cubic-bezier(0.53, 0.19, 0.29, 1.13);

    &>text {
        font-size: 2.7rem;
        font-weight: 600;
        text-transform: uppercase;
        fill: #fff;
        stroke: #000;

        &>textPath:first-child{
            fill:#6BA7E5;
            letter-spacing: 12px;
        }
    }
`;