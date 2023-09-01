import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Reservation3 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const reservation_id = location.state.reservation_id;
    const adult = location.state.adult;
    const child = location.state.child;

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [gender, setGender] = useState('');
    const [nationality, setNationality] = useState('');
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [specialRequest, setSpecialRequest] = useState('');

    const handleBooking = (e) => {
        e.preventDefault();

        axios.request({
            url: `http://127.0.0.1:8000/api/booking`,
            method: 'post',
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
            data: {
                'adults': adult,
                'child': child,
                'gender': gender,
                'name': fullName,
                'phone': phoneNumber,
                'email': emailAddress,
                'specialRequest': specialRequest,
                'reservation_id': reservation_id,
            }
        },)
            .then(res => {
                const data = res.data;
                if (data.success == true) {
                    navigate('/thank-you');
                }
            })
            .catch(err => console.log(err));
    }

    return (
        <div className="Reservation">
            <div className="left-content">
                <div className="back-btn">
                    <div className="img">
                        <img src={require("./Asset/keyboard_backspace (1).png")} alt="" />
                    </div>
                    <span>RESERVATION</span>
                </div>
                <div className="steps-btn">
                    <div className="circle-btn">
                        <div className="circle btn-done">
                            <img src={require("./Asset/check.svg").default} alt="" />
                        </div>
                        <span>Information</span>
                    </div>
                    <span className="line-pending" />
                    <div className="circle-btn">
                        <div className="circle btn-done">
                            <img src={require("./Asset/check.svg").default} alt="" />
                        </div>
                        <span>Booking</span>
                    </div>
                    <span className="line-pending" />
                    <div className="circle-btn">
                        <div className="circle btn-active">3</div>
                        <span>Confirmation</span>
                    </div>
                </div>
            </div>
            <form action="#">
                <div className="Person">
                    <div>
                        <img src="Asset/person.png" alt="" />
                        <select value={gender} onChange={e => setGender(e.target.value)}>
                            <option value="">Mr./Mrs.</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                        </select>
                    </div>
                    <div>
                        <img src="Asset/flag.png" alt="" />
                        <select value={nationality} onChange={e => setNationality(e.target.value)}>
                            <option>Nationality</option>
                            <option value="Indonesia">Indonesia</option>
                        </select>
                    </div>
                </div>
                <div className="contactUser">
                    <img src="Asset/person.png" alt="" />
                    <span />
                    <input type="text" placeholder="Fullname*" value={fullName} onChange={e => setFullName(e.target.value)} />
                </div>
                <div className="contactUser">
                    <img src="Asset/phone.png" alt="" />
                    <span />
                    <input
                        type="tel"
                        placeholder="Number Phone*"
                        // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </div>
                <div className="contactUser">
                    <img src="Asset/mail.png" alt="" />
                    <span />
                    <input type="email" placeholder="Email Address*" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                </div>
                <div className="specialRequest">
                    <p>Special Request/Notes</p>
                    <textarea type="text" placeholder=" Write your request or notes to us" value={specialRequest} onChange={e => setSpecialRequest(e.target.value)} />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="agreement" />
                    <label htmlFor="agreement">
                        By submitting this form, you agree to abide by the restaurant's
                        reservation policies and guidelines.
                    </label>
                </div>
                <div className="chooseTable">
                    <button onClick={(e) => handleBooking(e)}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Reservation3;