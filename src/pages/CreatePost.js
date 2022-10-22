/**
 * External dependencies
 */
import { useNavigate } from 'react-router-dom';

/**
 * Internal dependencies
 */
import Layout from '../layouts/layout';
import baseRequest from '../services/baseRequest';
import PostForm from '../components/PostForm';

const CreatePost = () => {
    const navigate = useNavigate();

    const createPost = async (postData) => {
        if (!postData.title || !postData.content) {
            alert('Please add some content!');
            return;
        }
        const result = await baseRequest.post(`/api/posts/create`, postData);
        navigate(`/post/${result.data?.post_id}`);
    }

    return (
        <Layout>
            <PostForm handleSubmit={createPost}/>
        </Layout>
    )
};

export default CreatePost;