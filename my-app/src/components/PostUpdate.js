import Layout from '../layouts/layout';
import { useEffect, useState } from 'react';
import baseRequest from '../services/baseRequest';
import { useNavigate, useParams } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';

const PostUpdate = () => {
    const [post, setPost] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    const fetchPost = async () => {
        try {
            const result = await baseRequest.get(`/api/posts/${params.id}/edit`);

            setPost(result.data.post);
            setData(result.data.post);
        } catch (e) {
            navigate('/');
        } finally {

        }
    }

    const setPostData = (type, event) => {
        if (type === 'title') {
            setData({
                ...data,
                title: event.target.value
            });
        }

        if (type === 'content') {
            setData({
                ...data,
                content: event.target.value
            });
        }
    };

    const updatePost = async () => {
        setLoading(true);

        try {
            await baseRequest.post(`/api/posts/${post.id}/update`, data);
            setError(null);
        } catch (e) {
            if (e.response.data?.message) {
                setError(e.response.data.message);
            }
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Layout>
            <div className="container-fluid body-content">
                <h1>Update post</h1>

                {post ?
                    <Form className="p-5">
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>

                            <Form.Control
                                type="text"
                                defaultValue={post.title}
                                onChange={(e) => setPostData('title', e)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Text</Form.Label>

                            <Form.Control
                                as="textarea"
                                rows={10}
                                defaultValue={post.content}
                                onChange={(e) => setPostData('content', e)}
                            />
                        </Form.Group>

                        {error &&
                            <div className="">
                                <p className="alert alert-danger">
                                    {error}
                                </p>
                            </div>
                        }

                        {!loading &&
                            <Button variant="primary" onClick={() => updatePost()}>Update</Button>
                        }
                    </Form>
                    :
                    <h2>Loading</h2>
                }
            </div>
        </Layout>
    )
}

export default PostUpdate;