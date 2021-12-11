import styled from 'styled-components'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

export const WrapperTabs = styled(Tabs)`
    font-size: 1rem;
    width: 100%;
    margin-top: 1rem;
`;

export const WrapperTabList = styled(TabList)`
    display: flex;
    list-style-type: none;
    padding: 0.25rem;
    margin: 0;
`;

export const WrapperTab = styled(Tab)`
    border-radius: 8px;
    border: 2px solid #CCC;
    user-select: none;
    cursor: pointer; 
    z-index: 999;
    
    padding: 0.7rem 1.5rem;
    margin: 0.5rem;

    font-weight: 500;

    &:focus {
        outline: none;
    }

    &.is-selected {
         box-shadow: 3px 3px rgba(0, 0, 0, 0.2);
    }


`;




export const WrapperTabPanel = styled(TabPanel)`
    margin-top: 0.5rem;
    display: none;

    &.is-selected {
        display: block;
    }
`;

export const WrapperList = styled.div `
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`