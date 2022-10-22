import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SidebarLayout = () => {
    return (
        <div style={{ display: 'flex', height: '100%' }}>
            <Sidebar>
                <Menu>
                    <MenuItem>
                        <Link to="/">
                            All posts
                        </Link>
                    </MenuItem>

                    <MenuItem>
                        <Link to="/my-posts">
                            My posts
                        </Link>
                    </MenuItem>

                    <MenuItem>
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