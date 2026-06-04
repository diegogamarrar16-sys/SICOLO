import Sidebar from "./Sidebar";

const Layout = ({ children }) => {

    return (

        <div className="d-flex">

            <Sidebar />

            <div
                className="flex-grow-1"
                style={{
                    marginLeft: "260px",
                    padding: "30px"
                }}
            >
                {children}
            </div>

        </div>

    );
};

export default Layout;