/**
 * External dependencies
 */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/**
 * Internal dependencies
 */
import Protected from './Protected';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthService from './services/auth';
import './App.scss';
import Sidebar from './components/Sidebar';
import MyPosts from './pages/MyPosts';
import AllPosts from './pages/AllPosts';
import SinglePost from './pages/SinglePost';
import PostUpdate from './pages/PostUpdate';
import CreatePost from './pages/CreatePost';
import NotFound from './pages/NotFound';
import Logout from './pages/Logout';

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

                {
                    isLoggedIn ? (
                            <Route path="/login" element={<AllPosts/>}/>
                        ) :
                        <Route path="/login" element={<Login/>}
                        />
                }

                {
                    isLoggedIn ? (
                            <Route path="/register" element={<AllPosts/>}/>
                        ) :
                        <Route path="/register" element={<Register/>}
                        />
                }

                <Route path="/logout" element={<Logout/>}/>

                <Route path='*' exact={true} element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <AllPosts/>
                    </Protected>
                }/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
