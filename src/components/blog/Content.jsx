import React from 'react';
import Comments from './Comments';

function Content({ title, content, author}){
    return(
        <main>
            <h1>{title}</h1>
            <p>{content}</p>
            <p>
                <strong>Author: </strong>{author}
            </p>
            <Comments/>
        </main>
    );
}

export default Content; 