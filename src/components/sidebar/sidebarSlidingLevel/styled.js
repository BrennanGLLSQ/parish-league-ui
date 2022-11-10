import styled from 'styled-components'

export const InnerLevel = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    transform: translateX(0);
    background: white;
    z-index: 1;
    border-radius: 0 5px 5px 0;
    overflow: scroll;
`

export const Body=styled.div`
    height: 100%;
    overflow: auto;
    padding-bottom: 50%;
`
export const ListItemContainer = styled.div`
    margin: 5px 5px 5px 5px;
    padding: 7px 12px;
    width: auto;
    border-radius: 3px;
    color: white;
    outline: none;
    text-shadow: 0 0 1px rgba(255,255,255, 0.1);
    text-decoration: none;
    text-indent: none;
    font-size: 1em;
    user-select: none;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
        background: #eaeaea;
    }
`



