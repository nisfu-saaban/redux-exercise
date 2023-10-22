import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Hiro, TrendPostings } from '../components'

const HomePage = () => {

    const { loginResult } = useSelector(state => state.UserReducer)

    return (
        <>
            <Hiro></Hiro>
            {loginResult ?
                (

                    <TrendPostings></TrendPostings>
                ) : (

                    <TrendPostings></TrendPostings>
                )
            }

        </>
    )
}

export default HomePage