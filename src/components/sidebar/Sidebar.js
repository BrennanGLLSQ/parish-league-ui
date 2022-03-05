import React from 'react'
import SidebarHeader from './SidebarHeader'
import { Body, SidebarContainer } from './styled'

export const Sidebar = ({width, children}) =>{
    return (
        <SidebarContainer width={width} >
            <SidebarHeader />
            <Body>
                {children}
            </Body>
        </SidebarContainer>
    )

}

export default Sidebar