import React from 'react'
import { ListItemContainer } from './styled'

const SidebarListItem = ({title, onClick}) =>{
//add icons
    return (
        <ListItemContainer onClick={onClick}>
            <span>{title}</span>
        </ListItemContainer>

    )

}

export default SidebarListItem