import React from 'react'
import downIcon from './../../images/downIcon.svg'
import upIcon from './../../images/upIcon.svg'
import noneIcon from './../../images/noneIcon.svg'


export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    switch (sort) {
        case down:
            return up;
        case up:
            return '';
        default:
            return down;
    }
}


const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <img
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            src={icon}
            height={8}
            alt={'icon'}
       />


    )
}

export default SuperSort
