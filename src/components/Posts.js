import { useEffect, useState } from 'react';
import axios from 'axios';
import Auth from '../services/auth';
import Cards from './cards';
import { Button } from 'react-bootstrap';

const Posts = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);
    const [page, setPage] = useState(1);

    const fetchPosts = async () => {
        setLoading(true);
        axios.get(Auth.baseUrl + 'api/posts/all', {
            params: {
                page
            }
        })
            .then((response) => {
                if (!!response.data?.hasMorePosts) {
                    setPage(page + 1);
                    setShowLoadMoreButton(true);
                } else {
                    setShowLoadMoreButton(false);
                }
                const newPosts = response.data?.posts.map((item) => {
                    return {
                        author: item.author,
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        createdAt: item.created_at
                    }
                })

                setPosts((prevState) => {
                    return prevState ? [...prevState, ...newPosts] : newPosts;
                });

                setTimeout(() => {
                    window.scroll({
                        top: document.body.offsetHeight,
                        left: 0,
                        behavior: 'smooth',
                    });
                }, 100)
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

                {showLoadMoreButton &&
                    <Button onClick={() => fetchPosts()}>
                        Load more
                    </Button>
                }
            </section>
        </div>
    )
};

export default Posts;