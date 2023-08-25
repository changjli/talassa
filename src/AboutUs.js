import './AboutUs.css'

const AboutUs = () => {
    // const hamburger = document.querySelector(".hamburger");
    // const navMenu = document.querySelector(".nav-menu");

    // hamburger.addEventListener("click", () => {
    //     hamburger.classList.toggle("active");
    //     navMenu.classList.toggle("active");
    // })

    // document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    //     hamburger.classList.remove("active");
    //     navMenu.classList.remove("active")
    // }))

    return (
        <div className="about-us">
            <div className="Head-container">
                <nav className="navbar">
                    <img src="Asset/Logo.svg" alt="" className="Logo" />
                    <ul className="nav-menu">
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Group
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                About Us
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                Support
                            </a>
                        </li>
                    </ul>
                    <div className="hamburger">
                        <span className="bar" />
                        <span className="bar" />
                        <span className="bar" />
                    </div>
                </nav>
                <section>
                    <img src="Asset/Logo.svg" alt="" />
                    <div className="AboutTalassa">
                        <p>
                            Talassa Jakarta, a fruit-themed restaurant collaboration between GIOI,
                            Jakarta Phinisi, and Agung Sedayu Group, officially opened its doors
                            in March 2022. The restaurant is located in Pantai Indah Kapuk, North
                            Jakarta, precisely at Cove Batavia Golf Island PIK.
                        </p>
                        <p>
                            Talassa has garnered significant attention from visitors and its
                            opening was highly anticipated. It's not hard to see why, as the
                            restaurant offers a rather unique concept. Restaurant patrons can
                            enjoy their meals in two distinct settings: the Talassa Station
                            Restaurant and on the Talassa Phinisi Boat, a cruise ship.
                        </p>
                    </div>
                </section>
            </div>
            <div className="stickyBanner">
                <img src="Asset/Header - After Scroll.svg" />
            </div>
            <div className="mid-container">
                <h2>Our collaboration</h2>
                <div className="collaboration">
                    <div className="collab">
                        <div className="collabLogo1">
                            <img src="Asset/Gioi.png" />
                        </div>
                        <h5>Gioi Jakarta</h5>
                        <p>
                            "Gioi" is a Vietnamese-named restaurant in South Jakarta. It is an
                            Asian fusion restaurant that grows its own cooking ingredients and
                            promotes the hashtag "cookery and plantery.”
                        </p>
                    </div>
                    <div className="collab">
                        <div className="collabLogo2">
                            <img src="Asset/Phinisi.png" alt="" />
                        </div>
                        <h5>Jakarta Phinisi</h5>
                        <p>
                            "The Phinisi Experience from Naikapal will take you on a journey
                            around the beautiful islands of the Thousand Islands while enjoying
                            various other exciting facilities."
                        </p>
                    </div>
                    <div className="collab">
                        <div className="collabLogo3">
                            <img src="Asset/Agungsedayu.png" />
                        </div>
                        <h5>Agung Sedayu Group</h5>
                        <p>
                            "Agung Sedayu Group is a leading property developer company based in
                            Jakarta. Established since 1971, we specialize in property development
                            as a business solution and one-stop-living."
                        </p>
                    </div>
                </div>
            </div>
            <div className="last-container">
                <h2>Our Gallery</h2>
                <div className="gallery">
                    <img src="Asset/Gallery1.png" />
                    <img src="Asset/Gallery2.png" />
                    <img src="Asset/Gallery3.png" />
                    <img src="Asset/Gallery4.png" />
                    <img src="Asset/Gallery5.png" />
                </div>
                <p>
                    Docked at Cove at Batavia in Pantai Indah Kapuk, Talassa started with a
                    simple question of “what can we do with the boat?” In came GIOI to present
                    a different dining experience that makes the best of what’s available: a
                    traditional phinisi schooner—acquired in collaboration with Agung Sedayu
                    Group and Jakarta Phinisi—and a waterfront view, two things that are not
                    your everyday sight in the city.
                </p>
            </div>
            <div className="wave">
                <img src="Asset/wAVE.png" />
            </div>
            <footer>
                <div className="socialMedia">
                    <img src="Asset/Line.png" alt="" />
                    <img src="Asset/Facebook.png" alt="" />
                    <img src="Asset/twitter.png" alt="" />
                    <img src="Asset/Instagram.png" alt="" />
                    <img src="Asset/Whatsapp.png" alt="" />
                </div>
                <img src="Asset/Logo2.png" alt="" className="Logo2" />
                <div className="contact">
                    <div>FAQS</div>
                    <div>|</div>
                    <div>MEDIA</div>
                    <div>|</div>
                    <div>PROMOTIONS</div>
                    <div>|</div>
                    <div>CAREERS</div>
                    <div>|</div>
                    <div>CONTACT</div>
                </div>
                <p className="Talassa">© 2023 Talassa Group. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default AboutUs;