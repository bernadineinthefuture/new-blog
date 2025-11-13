import { useParams } from 'react-router'; 
import Content from './Content';
import Comments from './Comments';
import {useEffect, useState} from 'react';
import axios from 'axios'; 



function BlogPost(){

    const params = useParams();

    const [loading, setLoading] = useState(true);
    const [postData, setPostData] = useState(null);
    const [authorData, setAuthorData] = useState(null);


    console.log[postData, authorData];

    useEffect(() => {

        const fetchData = async () => {
            try{
            const postRes = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.post_id}`);
                setPostData(postRes.data);

            const authorRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${postRes.data.userId}`);
                setAuthorData(authorRes.data);
                }catch(e){
                    console.error(e);
                }
                finally {
                    setLoading(false);
                }
            };


                fetchData();
    },[]);
            

    return(
        <div>
            {loading ? ( 
                <p> Loading </p>
            ) : (
            <>
                <Content title={postData.title} content={postData.body} author={authorData.name}/>

            </>
            )}
        </div>
    );

       
}

    


export default BlogPost; 