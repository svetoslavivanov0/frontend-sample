/**
 * External dependencies
 */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

/**
 * Internal dependencies
 */
import Auth from '../services/auth';
import Cards from './Cards';

const UserPosts = () => {
    const [posts, setPosts] = useState('');
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [showLoadMoreButton, setShowLoadMoreButton] = useState(false);

    const fetchPosts = async () => {
        setLoading(true);

        axios.get(Auth.baseUrl + 'api/posts', {
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
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        createdAt: item.created_at
                    }
                })

                setPosts((prevState) => {
                    return prevState ? [...prevState, ...newPosts] : newPosts;
                });
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

                {showLoadMoreButton &&
                    <Button onClick={() => fetchPosts()}>
                        Load more
                    </Button>
                }
            </section>
        </div>
    )
};

export default UserPosts;