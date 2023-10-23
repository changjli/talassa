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
        <div className="Reservation-3">
            <div className="left-content">
                <div className="back-btn">
                    <div className="img">
                        <img src={require("../Asset/keyboard_backspace (1).png")} alt="" />
                    </div>
                    <span>RESERVATION</span>
                </div>
                <div className="steps">
                    <div className="step">
                        <div className="circle done"><img src={require("../Asset/check.svg").default} alt="" /></div>
                        <div className='desc'>Information</div>
                    </div>
                    <div className="line done"></div>
                    <div className="step">
                        <div className="circle done"><img src={require("../Asset/check.svg").default} alt="" /></div>
                        <div className='desc'>Booking</div>
                    </div>
                    <div className="line done"></div>
                    <div className="step">
                        <div className="circle active">3</div>
                        <div className='desc'>Confirmation</div>
                    </div>
                </div>
            </div>
            <div className="right-content">
                <form action="#">

                    <div className="input">


                        <div className="form-group">
                            <i class="fa-solid fa-user"></i>
                            <div className="vr"></div>
                            <select value={gender} onChange={e => setGender(e.target.value)}>
                                <option value="">Mr./Mrs.</option>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <i class="fa-solid fa-flag"></i>
                            <div className="vr"></div>
                            <select value={nationality} onChange={e => setNationality(e.target.value)}>
                                <option>Nationality</option>
                                <option value="Indonesia">Indonesia</option>
                            </select>
                        </div>





                        <div className="form-group">
                            <i class="fa-solid fa-user"></i>
                            <div className="vr"></div>
                            <input type="text" placeholder="Fullname*" value={fullName} onChange={e => setFullName(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <i class="fa-solid fa-phone"></i>
                            <div className="vr"></div>
                            <input
                                type="tel"
                                placeholder="Number Phone*"
                                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                value={phoneNumber}
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <i class="fa-solid fa-envelope"></i>
                            <div className="vr"></div>
                            <input type="email" placeholder="Email Address*" value={emailAddress} onChange={e => setEmailAddress(e.target.value)} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="">Special Requests / Notes</label>
                            <textarea type="text" placeholder=" Write your request or notes to us" value={specialRequest} onChange={e => setSpecialRequest(e.target.value)} />
                        </div>
                    </div>



                    <div className="checkbox">
                        <input type="checkbox" id="agreement" />
                        <label htmlFor="agreement">
                            By submitting this form, you agree to abide by the restaurant's
                            reservation policies and guidelines.
                        </label>
                    </div>

                    <div className="btn">
                        <img src={require("../Asset/ombak_kiri.png")} alt="ombakerror" />
                        <button onClick={(e) => handleBooking(e)}>Submit</button>

                        <img src={require("../Asset/ombak_kanan.png")} alt="ombakerror" />
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Reservation3;