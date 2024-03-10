//  mechanism how to protect states and routes
//  Basically protexted container 
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected ({children , authentication = false}) {
    
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector((state) => state.auth.status)

    useEffect(() => {
        // TODO: Make it more easy
        if (authentication && authStatus !== authentication) {
            navigate('/login')
        } else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }

        setLoader(false)
    } , [authStatus, navigate , authentication])
    return loader ? <h1>Loading....</h1> : <Fragment className=''> {children} </Fragment>
}
