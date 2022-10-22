/**
 * External dependencies
 */
import React from 'react';

/**
 * Internal dependencies
 */
import Layout from '../layouts/layout';
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