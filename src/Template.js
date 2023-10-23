import Footer from "./Footer";
import Navbar from "./Navbar";

const Template = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Template
    ;