/**
 * External dependencies
 */
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Layout from '../layouts/layout';

const NotFound = () => {
    return (
        <div>
            <Layout>
                <h2>Not found!</h2>

                <Button>
                    <Link to="/">Home</Link>
                </Button>
            </Layout>
        </div>
    )
}

export default NotFound;

