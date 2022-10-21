import { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../services/auth';
import Cards from './cards';

const Posts = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);

        axios.get(Auth.baseUrl + 'api/posts/all')
            .then((response) => {
                const posts = response.data?.posts.map((item) => {
                    console.log(item)
                    return {
                        author: item.author,
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
                    <Cards posts={posts} fetchPosts={fetchPosts} canUpdate={false}/>
                    : <h2>No posts</h2>
                }
            </section>
        </div>
    )
};

export default Posts;