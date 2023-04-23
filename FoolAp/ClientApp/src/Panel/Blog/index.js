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
    function handleEdit(e) {
        e.preventDefault();

    }

    function handleDelete(e) {
        e.preventDefault();

    }

    return (
        <>
            {blog ? (
                    <div className="row align-items-center justify-content-center"><div className="col-8">
        <TableWProps 
            data={blog}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            isEditable={true}
            isDeletable={true}
            isFullWidth="w-100"
        ></TableWProps>
                    </div>
                    </div>
            ) : null 
            }
        </>
    )
}

export default Blog;

