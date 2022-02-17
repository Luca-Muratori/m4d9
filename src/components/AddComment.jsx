import { Component, useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap'

//lavoro di lLuca

const AddComment=({asin})=> {
    const [comment, setComment]=useState({
                                            comment: '',
                                            rate: 1,
                                        })
    // state = {
    //     comment: {
    //         comment: '',
    //         rate: 1,
    //         elementId: null
    //     }
    // }
    
    // componentDidUpdate(prevProps); {
    //     if (prevProps.asin !== this.props.asin) {
    //         this.setState({
    //             comment: {
    //                 ...this.state.comment,
    //                 elementId: this.props.asin
    //             }
    //         })
    //     }
    // }

       useEffect(() => {
        setComment(c => ({
            ...c,
            elementId: asin
        }))
    }, [asin])
  const  sendComment = async (e) => {
      e.preventDefault()
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments', {
                method: 'POST',
                body: JSON.stringify({...comment, elementId:asin}),
                headers: {
                    'Content-type': 'application/json',
                    Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA1MGFjY2RhNDBjOTAwMTVmYzhkNjkiLCJpYXQiOjE2NDQ5MzA4NjksImV4cCI6MTY0NjE0MDQ2OX0.F8ef5-xK7ZFB7W2qY8LgcamkOMBGkr2wWKo15Su0OKc"
}
            })
            if (response.ok) {
                // the comment has been sent successfully!!
                // let data=await response.json()
                 setComment({
                    comment: '',
                    rate: 1,
                 })
                alert('Comment was sent!')
            } else {
                console.log('error')
                alert('something went wrong')
            }
        } catch (error) {
            console.log(error)
        }
    }
        return (
            <div>
                <Form onSubmit={sendComment}>
                    <Form.Group>
                        <Form.Label>Comment text</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Add comment here"
                            value={comment.comment}
                            onChange={e=>setComment({
                                ...comment,
                                'comment': e.target.value
                                               } )}
                                   
                            
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control as="select" value={comment.rate}
                            onChange={(e) => setComment({
                                                    ...comment,
                                                    'rate': e.target.value
                                                })
                                         }
                            >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
}

export default AddComment