const Layout = ({ children }) => {
    return (
        <div className="layout pt-5 pb-5">
            <div className="main">
                {children}
            </div>
        </div>
    )
}

export default Layout;