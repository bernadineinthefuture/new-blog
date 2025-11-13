import React, {useEffect, useRef, useState} from 'react';
import IndividualComment from './IndividualComment';
import { useParams } from 'react-router';
import axios from 'axios'; 

function Comments(){
    const params = useParams(); 
    console.log(params.post_id);

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
        textboxRef.current.focus();
    }

    useEffect(() => {
        focusOnCommentBox();
    }, []);

    return (
        <div className="mt-8">
            <h2>Comments</h2>
            <input
            value={comment.name}
            onChange={(e) => setComment({...comment, name: e.target.value})}
            placeholder="Name"
        />
        <br></br>
        <br></br>
        <textarea
        ref={textboxRef}
        value={comment.content}
        onChange={(e) => setComment({...comment, content: e.target.value})}
        placeholder="Add a comment"
        />
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