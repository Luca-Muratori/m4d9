import { Component, useState, useEffect } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'
import Loading from './Loading'
import Error from './Error'

const  CommentArea =({asin})=> {
const [comments,setComment]=useState([])
const [isLoading,setIsLoading]=useState(false)
const [isError,setIsError]=useState(false)

// state = {
//     comments: [], // comments will go here
//     isLoading: false,
//     isError: false
// }
 
useEffect(()=>{
    console.log("hello")
    const getComment = async () => {
            setIsLoading(true)
            try {
                let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin, {
                    headers: {
                        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDQ5MzA4NjksImV4cCI6MTY0NjE0MDQ2OX0.F8ef5-xK7ZFB7W2qY8LgcamkOMBGkr2wWKo15Su0OKc"
}
                })
                if (response.ok) {
                    let comments = await response.json()
                    setComment( comments )
                    setIsLoading(false)
                    setIsError(false)
                } else {
                    console.log('error')
                    // this.setState({ isLoading: false, isError: true })
                    setIsLoading(false)
                    setIsError(true)
                }
            } catch (error) {
                console.log(error)
                // this.setState({ isLoading: false, isError: true })
                setIsLoading(false)
                setIsError(true)
            }
        }
    getComment()
}, [asin])
    
        return (
            <div>
                {isLoading && <Loading />}
                {isError && <Error />}
                <AddComment asin={asin}/>
                <CommentList  commentsToShow={comments}/>
            </div>
        )
}

export default CommentArea