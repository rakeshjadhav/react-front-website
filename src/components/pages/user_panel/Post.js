import React, { useEffect, useState, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../../pages/user_panel/helpers/AuthContext';

function Post () {
    const { id } = useParams();
    const [postObject, setPostObject] = useState({});
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const { authState } = useContext(AuthContext);

    const history = useHistory();

    useEffect(() => {
        axios.get(`http://localhost:5000/api/users/posts/byId/${id}`).then((response) => {
            setPostObject(response.data);
        });

        axios.get(`http://localhost:5000/api/users/comments/${id}`).then((response) => {
            setComments(response.data);
        });
    }, []);

    const addComment = () => {
        axios
            .post(
                'http://localhost:5000/api/users/comments',
                {
                    commentBody: newComment,
                    PostId: id
                },
                {
                    headers: {
                        token: localStorage.getItem('token')
                    }
                }
            )
            .then((response) => {
                if (response.data.error) {
                    console.log(response.data.error);
                } else {
                    const commentToAdd = {
                        commentBody: newComment,
                        username: response.data.username
                    };
                    setComments([...comments, commentToAdd]);
                    setNewComment('');
                }
            });
    };

    const deleteComment = (id) => {
        axios
            .delete(`http://localhost:5000/api/users/comments/${id}`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(() => {
                setComments(
                    comments.filter((val) => {
                        return val.id != id;
                    })
                );
            });
    };

    const deletePost = (id) => {
        axios
            .delete(`http://localhost:5000/api/users/posts/${id}`, {
                headers: { token: localStorage.getItem('token') }
            })
            .then(() => {
                history.push('/');
            });
    };

    const editPost = (option) => {
        if (option === 'title') {
            const newTitle = prompt('Enter New Title:');
            axios.put(
                'http://localhost:5000/api/users/posts/title',
                {
                    newTitle: newTitle,
                    id: id
                },
                {
                    headers: { token: localStorage.getItem('token') }
                }
            );

            setPostObject({ ...postObject, title: newTitle });
        } else {
            const newPostText = prompt('Enter New Text:');
            axios.put(
                'http://localhost:5000/api/users/posts/postText',
                {
                    newText: newPostText,
                    id: id
                },
                {
                    headers: { token: localStorage.getItem('token') }
                }
            );

            setPostObject({ ...postObject, postText: newPostText });
        }
    };

    return (
        <div className="postPage">
            <div className="leftSide">
                <div className="post" id="individual">
                    <div
                        className="title"
                        onClick={() => {
                            if (authState.username === postObject.username) {
                                editPost('title');
                            }
                        }}
                    >
                        {postObject.title}
                    </div>
                    <div
                        className="body"
                        onClick={() => {
                            if (authState.username === postObject.username) {
                                editPost('body');
                            }
                        }}
                    >
                        {postObject.postText}
                    </div>
                    <div className="footer">
                        {postObject.username}
                        {authState.username === postObject.username && (
                            <button
                                onClick={() => {
                                    deletePost(postObject.id);
                                }}
                            >
                                {' '}
                Delete Post
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <div className="addCommentContainer">
                    <input
                        type="text"
                        placeholder="Comment..."
                        autoComplete="off"
                        value={newComment}
                        onChange={(event) => {
                            setNewComment(event.target.value);
                        }}
                    />
                    <button onClick={addComment}> Add Comment</button>
                </div>
                <div className="listOfComments">
                    {comments.map((comment, key) => {
                        return (
                            <div key={key} className="comment">
                                {comment.commentBody}
                                <label> Username: {comment.username}</label>
                                {authState.username === comment.username && (
                                    <button
                                        onClick={() => {
                                            deleteComment(comment.id);
                                        }}
                                    >
                    X
                                    </button>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Post;
