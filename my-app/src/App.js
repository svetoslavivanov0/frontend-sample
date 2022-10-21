/**
 * External dependencies
 */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/**
 * Internal dependencies
 */
import Protected from './Protected';
import Login from './components/Login';
import Register from './components/Register';
import AuthService from './services/auth';
import './App.css';
import Sidebar from './components/Sidebar';
import MyPosts from './layouts/my-posts';
import AllPosts from './layouts/all-posts';
import SinglePost from './components/SinglePost';
import PostUpdate from './components/PostUpdate';
import CreatePost from './components/CreatePost';

const App = () => {
    const isLoggedIn = AuthService.isLoggedIn();

    return (
        <BrowserRouter>
            {isLoggedIn ?
                <Sidebar/>
                : <></>
            }

            <Routes>
                <Route path="/" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <AllPosts/>
                    </Protected>
                }/>
                <Route path="/my-posts" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <MyPosts/>
                    </Protected>
                }/>
                <Route path="/post/:id" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <SinglePost/>
                    </Protected>
                }/>

                <Route path="/post/:id/edit" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <PostUpdate/>
                    </Protected>
                }
                />

                <Route path="/create-post" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <CreatePost/>
                    </Protected>
                }/>

                <Route path="/login" element={<Login/>}/>

                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
