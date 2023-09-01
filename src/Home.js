import { Link } from "react-router-dom";
import MyCarousel from "./MyCarousel";

const Home = () => {
    const images1 = [
        {
            key: 'image1',
            value: require("./Asset/Picture 1.png")
        },
        {
            key: 'image2',
            value: require("./Asset/Picture 2.png")
        },
        {
            key: 'image3',
            value: require("./Asset/Picture 3.png")
        },
        {
            key: 'image4',
            value: require("./Asset/Picture 4.png")
        },
        {
            key: 'image5',
            value: require("./Asset/Picture 5.png")
        },
    ];

    const images2 = [
        {
            key: 'image6',
            value: require("./Asset/Picture 6.png")
        },
        {
            key: 'image7',
            value: require("./Asset/Picture 7.png")
        },
        {
            key: 'image8',
            value: require("./Asset/Picture 8.png")
        },
        {
            key: 'image9',
            value: require("./Asset/Picture 9.png")
        },
        {
            key: 'image10',
            value: require("./Asset/Picture 10.png")
        }
    ];

    return (
        <div className="home">
            <div className="header">
                <div class="left-content">
                    <div class="title">
                        <h1>Taste</h1>
                        <span>And</span>
                        <h1>Feels</h1>
                        <p>The Fresh Food</p>
                    </div>
                    <div class="button">
                        <Link to='/reservation/1'><div class="reserv btn">Reservation</div></Link>
                        <div class="details btn">See More</div>
                    </div>
                </div>
                <div class="right-content">
                    <img src={require("./Asset/Logo.svg").default} alt="" />
                </div>
            </div>
            <div className="stickyBanner">
                <img src={require("./Asset/Header - After Scroll.svg").default} />
            </div>
            <div className="body">
                <div className="card">
                    <img src={require("./Asset/Pict location 4.png")} />
                    <div className="content">
                        <h1>PANTAI INDAH KAPUK 2</h1>
                        <p>Jl. Pulau Untung</p>
                        <p>Jakarta 11654</p>
                        <a href="">MAPS & DIRECTION</a>
                        <p>Opening Hours</p>
                        <p>monday - sunday</p>
                        <p>04.00 PM - 03.00 AM</p>
                        <p>CONTACT US</p>
                        <div>
                            <img src={require("./Asset/phone copy.png")} alt="" />
                            <a>+6221 8475 4597</a>
                        </div>
                        <div>
                            <img src={require("./Asset/whatsapp copy.png")} alt="" />
                            <a>+62813 5151 3891</a>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="card">
                    <div className="content">
                        <h1>MENTENG</h1>
                        <p>Jl. hos. cokroaminoto no.74</p>
                        <p>Jakarta 10352</p>
                        <a href="">MAPS & DIRECTION</a>
                        <p>Opening Hours</p>
                        <p>wednesday - sunday</p>
                        <p>09.00 AM - 07.00 PM</p>
                        <p>CONTACT US</p>
                        <div>
                            <img src="assets/images/phone.png" alt="" />
                            <a>+6221 5987 7499</a>
                        </div>
                        <div>
                            <img src="assets/images/whatsapp.png" alt="" />
                            <a>+62587 1111 0045</a>
                        </div>
                    </div>
                    <img src={require("./Asset/Pict location 5.png")} alt="" />
                </div>
                <hr />
                <div className="card">
                    <img src={require("./Asset/Pict location 6.png")} alt="" />
                    <div className="content">
                        <h1>KUNINGAN</h1>
                        <p>Jl. guru mughni</p>
                        <p>Jakarta 11654</p>
                        <a href="">Jakarta 12930</a>
                        <p>Opening Hours</p>
                        <p>monday - saturday</p>
                        <p>11.00 AM - 07.00 PM</p>
                        <p>CONTACT US</p>
                        <div>
                            <img src="assets/images/phone.png" alt="" />
                            <a>+6221 5967 2213</a>
                        </div>
                        <div>
                            <img src="assets/images/whatsapp.png" alt="" />
                            <a>+62813 5647 0021</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <p>GALLERY</p>
                <h1>VIEW POTRAIT IMAGE</h1>
                <div className="carousel">
                    <MyCarousel images={images1} />
                    <MyCarousel images={images2} />
                </div>
            </div>
        </div>
    );
}

export default Home;