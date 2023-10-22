import React, { useEffect, useState } from 'react'
import { FaArrowTrendUp, FaClone } from 'react-icons/fa6'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPost, getPostByUser } from '../axios/PostingAxios'

const TrendPostings = () => {

    const {
        getAllPostResult,
        getAllPostLoading,
        getAllPostError,

        getPostResult,
        getPostLoading,
        getPostError

    } = useSelector(state => state.PostingReducer)

    const { loginResult } = useSelector(state => state.UserReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllPost())
        dispatch(getPostByUser())
    }, [dispatch])

    useEffect

    return (
        <div className='trend-container p-3'>
            <div className='trend-post'>
                <FaArrowTrendUp />
                Trend on Pedia
            </div>


            {
                !loginResult ? (
                    getAllPostResult ? (
                        getAllPostResult.map(posts => {
                            return (
                                <>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <p>{posts.userId}</p>
                                            <h6>{posts.title}</h6>
                                            <p>{posts.createdAt}</p>
                                        </div>
                                    </div>

                                    <div className='trend-post mb-4'>
                                        <FaClone />
                                        Related content
                                    </div>

                                    <div className='row ms-4'>
                                        <div className='col-8 items'>
                                            <p>{posts.userId}</p>
                                            <h6>{posts.title}</h6>
                                            <p>{posts.createdAt}</p>
                                        </div>
                                    </div>
                                </>
                            )

                        })

                    ) : getAllPostLoading ? (
                        <p>Loading ...</p>
                    ) : (
                        <p>{getAllPostError ? getAllPostError : "Data kosong"}</p>
                    )

                ) : (
                    getPostResult ? (
                        getPostResult.map(post => {
                            return (
                                <>
                                    <div className='row'>
                                        <div className='col-4'>
                                            <p>{post.userId}</p>
                                            <h6>{post.title}</h6>
                                            <p>{post.createdAt}</p>
                                        </div>
                                    </div>

                                    <div className='trend-post mb-4'>
                                        <FaClone />
                                        Related content
                                    </div>

                                    <div className='row ms-4'>
                                        <div className='col-8 items'>
                                            <p>{post.userId}</p>
                                            <h6>{post.title}</h6>
                                            <p>{post.createdAt}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    ) : getPostLoading ? (
                        <p>Loading ...</p>
                    ) : (
                        <p>{getPostError ? getPostError : "Data Kosong"}</p>
                    )
                )
            }




        </div>
    )
}

export default TrendPostings