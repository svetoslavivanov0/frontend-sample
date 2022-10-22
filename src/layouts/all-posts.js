import React from 'react';
import Layout from './layout';
import Posts from '../components/Posts';

const AllPosts = () => {
    return (
        <Layout>
            <h2>All Posts</h2>

            <Posts/>
        </Layout>
    )
}

export default AllPosts;