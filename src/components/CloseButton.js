import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import OpenInFullIcon from '@mui/icons-material/CloseFullscreenRounded'


const CloseButton = ({onClose, className}) => {
    
    return (
        <IconButton onClick={onClose} className={className}>
                <OpenInFullIcon/>
            </IconButton>


    )


}

export default CloseButton