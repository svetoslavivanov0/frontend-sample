import { Sidebar, Menu, MenuItem, useProSidebar } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

const SidebarLayout = () => {
    const { collapseSidebar } = useProSidebar();

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

                    <MenuItem> Logout</MenuItem>
                </Menu>
            </Sidebar>
            <main>
                <button onClick={() => collapseSidebar()}>Collapse</button>
            </main>
        </div>
    );
}

export default SidebarLayout;