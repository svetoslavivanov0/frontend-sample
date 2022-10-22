import Layout from '../layouts/layout';
import baseRequest from '../services/baseRequest';
import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm';

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