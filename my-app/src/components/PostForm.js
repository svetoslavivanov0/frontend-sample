import { Button, Form } from 'react-bootstrap';
import { useEffect, useState } from 'react';

const PostForm = ({ handleSubmit, defaultPostData }) => {
    const [error, setError] = useState(null);
    const [postData, setPostData] = useState({
        title: '',
        content: ''
    });

    useEffect((prev) => {
        if (!defaultPostData) {
            return;
        }
        setPostData({
            title: defaultPostData?.title,
            content: defaultPostData?.content
        })
    }, [defaultPostData]);

    const onChangeHandler = (e) => {
        setPostData(prev => {
            return {
                ...prev,
                [e.target.name]: e.target.value
            }
        })
    };

    const submitForm = async () => {
        try {
            await handleSubmit(postData);
        } catch (e) {
            setError(e.response?.data?.message);
        }
    }

    return (
        <Form className="container-fluid p-5">
            <Form.Group className="mb-3">
                <Form.Label>
                    Title
                </Form.Label>

                <Form.Control
                    type="text"
                    name="title"
                    defaultValue={postData.title}
                    onChange={(e) => onChangeHandler(e)}
                />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>
                    Content
                </Form.Label>

                <Form.Control
                    as="textarea"
                    name="content"
                    defaultValue={postData.content}
                    onChange={(e) => onChangeHandler(e)}
                    rows={10}
                />
            </Form.Group>

            {!!error &&
                <div className="">
                    <p className="alert alert-danger">
                        {error}
                    </p>
                </div>
            }

            <Button variant="primary" onClick={() => submitForm()}>Submit</Button>
        </Form>
    );
}

export default PostForm;