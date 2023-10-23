const Footer = () => {
    return (
        <div className="footer">
            <div className="wave">
                <img src={require("./Asset/wAVE.png")} />
            </div>
            <footer>
                <div class="socialMedia">
                    <img src={require("./Asset/Line.png")} alt="" />
                    <img src={require("./Asset/Facebook copy.png")} alt="" />
                    <img src={require("./Asset/Twitter copy.png")} alt="" />
                    <img src={require("./Asset/Instagram.png")} alt="" />
                    <img src={require("./Asset/Whatsapp (1).png")} alt="" />
                </div>
                <img src="Asset/Logo2.png" alt="" class="Logo2" />

                <div class="contact">
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

                <p class="Talassa">© 2023 Talassa Group. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default Footer;