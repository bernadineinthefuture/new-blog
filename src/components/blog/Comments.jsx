import React, {useEffect, useRef, useState} from 'react';
import IndividualComment from './IndividualComment';
import { useParams } from 'react-router';
import axios from 'axios'; 
import Login from '../login/Login';
import { useAuth, useUserName } from '../authWrapper/AuthContext.js';
import { Link } from 'react-router';


function Comments(){
    const params = useParams(); 
    console.log(params.post_id);
    const username = useUserName();
    const {logout} = useAuth();
    const [comment, setComment] = useState({
        name: '',
        content: '',
    });

    console.log(comment);

    const [commentList, setCommentList] = useState([]);
    const addComment = (comment) => {
        setCommentList([...commentList, comment]);
    };

    const textboxRef = useRef();

    const postComment = () => {
        axios.post(`https://jsonplaceholder.typicode.com/posts/${params.post_id}/comments`,{
        name: comment.name,
        body: comment.content
        })
        .then((res) => console.log(res));
    };

    const focusOnCommentBox = () =>{
        if (textboxRef.current) {
            textboxRef.current.focus();
        }
    }

    useEffect(() => {
        focusOnCommentBox();
    }, []);

    return (
        <div className="mt-8">
            <h2>Comments</h2>
        {username ? ( 
        <div>
            <input
            value={comment.name}
            onChange={(e) => setComment({...comment, name: e.target.value})}
            placeholder={username}
        />
        <br></br>
        <br></br>
        <textarea
        ref={textboxRef}
        value={comment.content}
        onChange={(e) => setComment({...comment, content: e.target.value})}
        placeholder="Add a comment"
        />
        </div>
            ):(
                    <Link to="/login">Login to see comment box</Link>)}
        <br></br>

        <button
            onClick={postComment}
            type="submit"
            >
            Submit
        </button>
        <ul>Existing Comments
            {commentList.map((value, index) => (<IndividualComment value={value}/>))}
        </ul>
        </div>


    ); 

}

export default Comments; 