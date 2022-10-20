import Cards from './cards';
import Layout from '../layouts/layout';
import React, { useEffect, useRef, useState } from 'react';
import baseRequest from '../services/baseRequest';
import { useNavigate, useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const SinglePost = () => {
    const [post, setPost] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const fetchPost = async () => {
        try {
            const result = await baseRequest.get(`/api/posts/${params.id}`);

            setPost(result.data.post);
        } catch (e) {
            navigate('/');
        }
    }

    useEffect(() => {
        fetchPost();
    }, []);

    return (
        <Layout>
            {post ?
                <div>
                    <h1>{post.title}</h1>
                    <Card className="w-75 p-3">
                        <Card.Body>
                            <Card.Subtitle className="mb-2 text-success">
                                {post.author} - {post.created_at}
                            </Card.Subtitle>

                            <hr/>

                            <Card.Text className="text-success">
                                {post.content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                :
                <h2>
                    Loading
                </h2>
            }
        </Layout>
    )
}

export default SinglePost;