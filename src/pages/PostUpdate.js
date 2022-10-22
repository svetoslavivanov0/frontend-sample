/**
 * External dependencies
 */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Layout from '../layouts/layout';
import baseRequest from '../services/baseRequest';
import PostForm from '../components/PostForm';

const PostUpdate = () => {
    const [post, setPost] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    const fetchPost = async () => {
        try {
            const result = await baseRequest.get(`/api/posts/${params.id}/edit`);

            setPost(result.data.post);
        } catch (e) {
            navigate('/');
        } finally {

        }
    }

    const updatePost = async (data) => {
        await baseRequest.post(`/api/posts/${post.id}/update`, data);
        alert('Success!');
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Layout>
            <div className="container-fluid">
                <h1>Update post</h1>

                <PostForm handleSubmit={updatePost} defaultPostData={post ?? null}/>
            </div>
        </Layout>
    )
}

export default PostUpdate;