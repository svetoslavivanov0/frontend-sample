import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import baseRequest from '../services/baseRequest';

const Cards = ({ posts, fetchPosts, canUpdate = true }) => {
    const chunkSize = 3;
    const postsToShow = [];
    for (let i = 0; i < posts.length; i += chunkSize) {
        const chunk = posts.slice(i, i + chunkSize);
        postsToShow.push(chunk);
    }

    const handleDeletePost = async (postId) => {
        if (window.confirm('Sure?')) {
            try {
                const result = await baseRequest.delete(`/api/posts/${postId}/delete`);
                if (result.status === 200) {
                    alert('Success!');
                    fetchPosts();
                }
            } catch (e) {

            }

        }
    }

    return (
        <Container>
            {postsToShow.map((item) => {
                return <Row className="mb-5">
                    {item.map((post) => {
                        return <Col>
                            <Card>
                                <Card.Body>
                                    <Card.Title className="text-success">
                                        {post.title}
                                    </Card.Title>

                                    <Card.Subtitle className="mb-2 text-success">
                                        {!canUpdate && post.author + ' - '}

                                        {post.createdAt}
                                    </Card.Subtitle>

                                    <Card.Text className="text-success">
                                        {post.content.substring(0, 30) + '...'}
                                    </Card.Text>

                                    <Card.Link>
                                        <Link to={'/post/' + post.id}>
                                            See More
                                        </Link>
                                    </Card.Link>
                                    {canUpdate &&
                                        <Card.Link>
                                            <Link to={'/post/' + post.id + '/edit'}>
                                                Edit
                                            </Link>
                                        </Card.Link>
                                    }

                                    {canUpdate &&
                                        <Card.Link onClick={() => handleDeletePost(post.id)} href="#">Delete</Card.Link>
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    })
                    })
                </Row>
            })}
        </Container>
    );
}

export default Cards;