/**
 * External dependencies
 */
import { BrowserRouter, Routes, Route } from "react-router-dom"

/**
 * Internal dependencies
 */
import Protected from './Protected';
import Dashboard from './Dashboard';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './components/Admin';
import AuthService from './services/auth';
import './App.css';

const App = () => {
    const isLoggedIn = AuthService.isLoggedIn();

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <Dashboard/>
                    </Protected>
                }/>
                <Route path="/admin" element={
                    <Protected isLoggedIn={isLoggedIn}>
                        <Admin/>
                    </Protected>
                }/>

                <Route path="/login" element={<Login/>}/>

                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
