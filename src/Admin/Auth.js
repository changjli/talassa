// import SideBar from "./Talassa/SideBar";

const Auth = ({ children, page }) => {
    return (
        <div className="grid grid-cols-6">
            {/* <SideBar className="col-span-1" page={page} /> */}
            <div className="col-span-5">
                {children}
            </div>
        </div>
    );
}

export default Auth;