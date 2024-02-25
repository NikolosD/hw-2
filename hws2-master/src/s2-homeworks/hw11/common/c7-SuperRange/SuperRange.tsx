import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{                width: '160px',
                color: '#00CC22',
                '& .MuiSlider-track': {
                    border: 'none',
                },
                '& .MuiSlider-thumb': {
                    width: 20,
                    height: 20,
                    border: '1px solid #00CC22',
                    backgroundColor: '#fff',
                    '&:before': {
                        content: '""',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: '#00CC22',
                        zIndex: -1,
                    },
                    '&:hover, &.Mui-focusVisible, &.Mui-active': {
                        boxShadow: 'none',
                    },
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
