const Reservation3 = () => {
    return (
        <div className="Reservation">
            <div className="Reservationstep">
                <div className="reservationtitle">
                    <img src="Asset/keyboard_backspace.png" alt="" />
                    <p>RESERVATION</p>
                </div>
                <div className="step">
                    <div className="stepNumber">
                        <p className="numberRes">1</p>
                        <p>Information</p>
                    </div>
                    <span />
                    <div className="stepNumber">
                        <p className="numberRes">2</p>
                        <p>Booking</p>
                    </div>
                    <span />
                    <div className="stepNumber">
                        <p className="numberRes">3</p>
                        <p>Confirmation</p>
                    </div>
                </div>
            </div>
            <form action="#">
                <div className="Person">
                    <div>
                        <img src="Asset/person.png" alt="" />
                        <select>
                            <option>Mr./Mrs.</option>
                        </select>
                    </div>
                    <div>
                        <img src="Asset/flag.png" alt="" />
                        <select>
                            <option>Nationality</option>
                        </select>
                    </div>
                </div>
                <div className="contactUser">
                    <img src="Asset/person.png" alt="" />
                    <span />
                    <input type="text" placeholder="Fullname*" />
                </div>
                <div className="contactUser">
                    <img src="Asset/phone.png" alt="" />
                    <span />
                    <input
                        type="tel"
                        placeholder="Number Phone*"
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                </div>
                <div className="contactUser">
                    <img src="Asset/mail.png" alt="" />
                    <span />
                    <input type="email" placeholder="Email Address*" />
                </div>
                <div className="specialRequest">
                    <p>Special Request/Notes</p>
                    <input type="text" placeholder=" Write your request or notes to us" />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="agreement" />
                    <label htmlFor="agreement">
                        By submitting this form, you agree to abide by the restaurant's
                        reservation policies and guidelines.
                    </label>
                </div>
                <div className="chooseTable">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Reservation3;