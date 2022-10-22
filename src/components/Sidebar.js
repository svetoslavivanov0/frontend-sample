/**
 * External dependencies
 */
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Location, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

/**
 * Internal dependencies
 */

const SidebarLayout = () => {
    const location = useLocation();
    const [path, setPath] = useState(location.pathname);

    useEffect(() => {
        setPath(location.pathname);
    }, [location])
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <Menu>
                    <MenuItem active={path === '/'}>
                        <Link to="/">
                            All posts
                        </Link>
                    </MenuItem>

                    <MenuItem active={path === '/my-posts'}>
                        <Link to="/my-posts">
                            My posts
                        </Link>
                    </MenuItem>

                    <MenuItem active={path === '/create-post'}>
                        <Link to="/create-post">
                            Create post
                        </Link>
                    </MenuItem>

                    <MenuItem> Logout</MenuItem>
                </Menu>
            </Sidebar>
        </div>
    );
}

export default SidebarLayout;