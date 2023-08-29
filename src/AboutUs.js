import { useState } from 'react';

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

const AboutUs = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="about-us">
            <div className="Head-container">
                <section>
                    <img src="assets/images/Logo (1).svg" alt="" />
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
                <img src="assets/images/Header - After Scroll.png" />
            </div>
            <div className="mid-container">
                <h2>Our collaboration</h2>
                <div className="collaboration">
                    <div className="collab">
                        <div className="collabLogo1">
                            <img src="assets/images/Group 30.png" />
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
                            <img src="assets/images/Frame 6.png" alt="" />
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
                            <img src="assets/images/Group 32.png" />
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
                <img src="assets/images/wAVE.png" />
            </div>
        </div>
    );
}

export default AboutUs;