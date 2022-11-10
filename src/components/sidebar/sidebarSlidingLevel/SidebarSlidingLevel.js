import React, {useState, useCallback} from 'react'
import { TransitionMotion, spring } from '@serprex/react-motion'
import { InnerLevel, Body } from './styled'
import SidebarListItem from './SidebarListItem'
import { Header } from '../styled'

const SidebarSlidingLevel = ({children, open, onToggle, title, style}) =>{
    const [_open, set_Open] = useState(open)

    const willEnter = () => ({translateX: 320})
    const willLeave = () => ({translateX: spring(320, { stiffness: 250 })})
    const getStyles = () => {
        return _open ? [{key: 'slidingLevel', style: {translateX: spring(0, {stiffness: 250})}}] : []
    }

    const handleClick = ()=>{
        if(onToggle){
            onToggle(!_open)
            set_Open(!_open)
        }
        set_Open(!_open)
        
    }

    return (
        <div>
            <SidebarListItem title={title} onClick={handleClick} />

            <TransitionMotion willEnter={willEnter} willLeave={willLeave} styles={getStyles()}>
                {interpolatedStyles => 
                    <div>
                        {interpolatedStyles.map(config => 
                            <InnerLevel key={`${config.key}-transition`} clientStyle={{...style, ...{translateX: config.style.translateX}}}>
                                <Header>My Picks</Header>
                                <Body>
                                    {children}
                                </Body>
                            </InnerLevel>)    
                        }
                    </div>
                }
            </TransitionMotion>
        </div>
    )

}

export default SidebarSlidingLevel