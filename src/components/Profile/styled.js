import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    align-items: flex-start;
`;


export const WrapperStatusCount = styled.div `
    display: flex;
    align-items: center;
    div {
        margin: 0.5rem;
        text-align: center;
        padding-right: 2rem;

        :nth-last-child(1) {
            padding-right: 0;
        }
    }

    span {
        font-size: 1.2rem;
    }
`;

export const WrapperGeneric = styled.div `
    display: flex;
    align-items: center;

    margin-top: 0.7rem;

    h3 {
        margin-right: 1rem;
    }

    a {
        color: #118AB2;
        font-size: 1.125rem;
        font-weight: bold;
    }
`;


export const WrapperInfoUser = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-around;

    height: 200px;
    width: 100%;

    margin: 1rem 0 0 0;

    h1 {
        font-size: 2rem;
        font-weight: bold;
    }

    h3 {
        font-size: 1.125rem;
        font-weight: bold;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }


`;

export const WrapperImage = styled.img `
    border-top-left-radius: 55px;
    border-bottom-right-radius: 55px;
    width: 250px;
    margin: 1rem;
`