import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    justify-content: space-between;

    width: 100%;
    padding: 4px;

    margin: 1.5rem .9rem 3rem 1rem;

    input {
        border: 1px solid #CCC;
        border-radius: 5px;
        box-shadow: 0px 5px rgba(0, 0, 0, 0.2);

        width: 100%;
        height: 44px;

        outline: none;

        padding: 1rem;

        color: #231E23;

    }

    button {
        background-color: #365475;
        color: #FEFEFE;
        padding: .9rem;
        margin: 0 1rem;

        border-radius: 5px;
        transition: all ease .2s;
    }

    button:hover {
        background-color: #142F43;
    }
    
`