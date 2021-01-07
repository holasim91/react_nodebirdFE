import React, { useCallback } from 'react'
import useInput from "../hooks/useInput";
import PropTypes from 'prop-types'
import { Button, Form, Input } from 'antd'
import { useSelector } from 'react-redux';


const CommentForm = ({post}) => {
    const id = useSelector((state) => state.user.me?.id) //힝싱 없는 경우를 생각해야한다
    const [commentText, onChangeCommentText] = useInput('')
    const onSubmitComment = useCallback(() =>{
        console.log(post.id, commentText)
    },[commentText])
    return (
        <Form onFinish={onSubmitComment}>
            <Form.Item style={{position:'relative', margin: 0}}>
                <Input.TextArea value={commentText} onChange={onChangeCommentText} rows={4} />
                <Button style={{position:'absolute', right:0, bottom:-40}} type='primary' htmlType='submit'>삐약</Button>
            </Form.Item>
        </Form>
    )
}

CommentForm.propTypes ={
    post: PropTypes.object.isRequired
}


export default CommentForm