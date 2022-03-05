import styled from 'styled-components'

export const SidebarContainer = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    width: ${props=>props.width};
    position: absolute;
    top: 0;
    box-shadow: '0px 0px 30px -1px #a7a7a7';
    transform: translateX(0);
    transition: 'transform .4s;
    background-color: #d2d2d2;
    z-index: 95;
    border-radius: 0 5px 5px 0;
`

export const Body=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    flex: 1 1 0%;
    height: 100%;
    overflow: auto;
    background: 'rgba(255,255,255,1)';
    transition: all .4s;
`

export const Header= styled.div`
    color: #000000ad;
    padding: 20px;
    text-align: center;
    font-size: 22px;
    font-family: 'Open Sans', sans-serif;
    cursor: default;
    background: #ededed;
`

export const Icon=styled.i`
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    left: 8px;
    top: 23px;
    padding: 2px 10px;
    border-radius: 4px;
    transition: all .25s;
    &:hover {
        background: #d2d2d2;
    }
`

export const CloseButton=styled.div`
    cursor: pointer;
    font-size: 20px;
    top: 24px;
    position: absolute;
    right: 8px;
    padding: 0px 9px;
    z-index: 94;
    border-radius: 4px;
    transition: all .25s;
    &:hover {
        background: #d2d2d2;
    }
`