/**
 * External dependenices
 */
import React from 'react';
import Layout from './layout';
import UserPosts from '../components/UserPosts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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