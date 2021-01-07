import React, { useCallback, useState } from "react";
import { Button, Card, Comment, List, Popover } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  MessageOutlined,
  RetweetOutlined,
  HeartTwoTone
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostcardContent";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [liked, setLiked] = useState(false)
  const onToggleLike = useCallback(()=>{
    setLiked((prev)=>!prev)
  },[])
  const [commentFormOpened, setCommentFormOpened] = useState(false)
  const onToggleComment = useCallback(() =>{
    setCommentFormOpened((prev) => !prev)
  },[])
  return (
    <div style={{marginBottom: '20px'}}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor='#ff7675' key="heart" onClick={onToggleLike}/>
            : <HeartOutlined onClick={onToggleLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment}/>,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <>
                    <Button>신고</Button>
                  </>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content}/>}
        />
      </Card>
      {commentFormOpened &&(
        <div>
          <CommentForm post={post}/> 
          {/* 어떤 게시글의 댓글인지 정보가 필요하기 때문에 post를 넘겨준다 */}
          <List 
            header={`${post.Comments.length}개의 댓글`}
            itemLayout='horizontal'
            dataSource={post.Comments}
            renderItem={(item) =>(
              <li>
                <Comment 
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;
