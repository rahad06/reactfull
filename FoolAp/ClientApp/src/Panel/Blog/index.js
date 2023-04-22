import axios from 'axios';
import React, {useEffect, useState} from 'react';
import TableWProps from "../Common/TableWProps";

function Blog(props) {
    const [blog, setBlog] = useState(null)
    const API_URL = '/api/blog';

    useEffect(() => {
        getAllBlogPosts();
    }, [])

// Get all blog posts
    async function getAllBlogPosts(language = 'en') {
        try {
            const response = await axios.get(`${API_URL}?language=${language}`);
            console.log(response)
            setBlog(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            {blog ? (
        <TableWProps 
            data={blog}
            
        ></TableWProps>
            ) : null 
            }
        </>
    )
}

export default Blog;

