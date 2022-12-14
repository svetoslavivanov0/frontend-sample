/**
 * External dependencies
 */
import React from 'react';
import Layout from '../layouts/layout';
import UserPosts from '../components/UserPosts';

/**
 * Internal dependencies
 */

const MyPosts = () => {
    return (
        <Layout>
            <h1 className="pb-2">
                My posts
            </h1>

            <UserPosts/>
        </Layout>
    )
}

export default MyPosts