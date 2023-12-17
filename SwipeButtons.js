import React from 'react'
import "./SwipeButtons.css"
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

/* <IconButton>
<Person2Icon className="header__icon" fontSize="large"/>
</IconButton> */

const SwipeButtons = ( ) => {
    return(
        <div className = "swipeButtons">
            <IconButton> 
                <ReplayIcon className = "swipeButtons__replay" fontSize="large"/>
            </IconButton>
            <IconButton>
                <CloseIcon className = "swipeButtons__left" fontSize="large"/>
            </IconButton>
            <IconButton>
                <StarRateIcon  className = "swipeButtons__star" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon  className = "swipeButtons__right" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FlashOnIcon  className = "swipeButtons__lightning" fontSize="large"/>
            </IconButton>

        </div>
    );

};

export default SwipeButtons;