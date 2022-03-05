import React from 'react'
import { Header } from './styled'
import { Typography } from "@material-ui/core";



const SidebarHeader = () =>{
    return <Header>
        <Typography variant='h6' color='primary'>All Things New</Typography>
    </Header>
}

export default SidebarHeader