import { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../services/auth';
import Cards from './cards';

const UserPosts = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);

        axios.get(Auth.baseUrl + 'api/posts', Auth.baseConfig)
            .then((response) => {
                const posts = response.data?.posts.map((item) => {
                    return {
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        createdAt: item.created_at
                    }
                })

                setPosts(posts);
            }).finally(() => {
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchPosts();
    }, []);


    return (
        <div>
            <section className="section-posts">
                {loading ?
                    <h2>Loading</h2>
                    : <></>
                }

                {posts.length && !loading ?
                    <Cards posts={posts} fetchPosts={fetchPosts}/>
                    : <h2>No posts</h2>
                }
            </section>
        </div>
    )
};

export default UserPosts;