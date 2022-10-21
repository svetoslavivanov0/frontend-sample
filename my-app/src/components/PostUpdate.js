import Layout from '../layouts/layout';
import { useEffect, useState } from 'react';
import baseRequest from '../services/baseRequest';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from './PostForm';

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