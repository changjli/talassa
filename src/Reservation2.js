import { render } from "@testing-library/react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import _ from 'lodash';

const Reservation2 = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // state buat tunjukkin meja mana aja yang available (disabled)
    const [reservations, setReservations] = useState(location.state.reservations);

    // state buat tunjukkin meja yang dipilih (select)
    const [checked, setChecked] = useState('');

    const isChecked = (value) => value == checked;

    const handleChange = (value) => {
        setChecked(value);
    }

    const handleSelectTable = () => {
        navigate('/reservation/3', {
            state: {
                'reservation_id': checked,
                'adult': location.state.adult,
                'child': location.state.child,
            }
        })
    }

    return (
        <div className="reservation-2">
            <div className="home">
                <div className="container">
                    <div className="left-content">
                        <div className="back-btn">
                            <div className="img">
                                <img src={require("./Asset/keyboard_backspace (1).png")} alt="" />
                            </div>
                            <span>RESERVATION</span>
                        </div>
                        <div className="steps-btn">
                            <div className="circle-btn">
                                <div className="circle">
                                    <img src={require("./Asset/check.svg").default} alt="" />
                                </div>
                                <span>Information</span>
                            </div>
                            <span className="line" />
                            <div className="circle-btn">
                                <div className="circle">2</div>
                                <span>Booking</span>
                            </div>
                            <span className="line" />
                            <div className="circle-btn">
                                <div className="circle">3</div>
                                <span>Confirmation</span>
                            </div>
                        </div>
                    </div>
                    <form action="#" className="right-content">
                        <div className="info">
                            <div className="not-reserved option">
                                <div className="retangle" />
                                <span>Not Reserved</span>
                            </div>
                            <div className="reserved option">
                                <div className="retangle" />
                                <span>Reserved</span>
                            </div>
                            <div className="selected option">
                                <div className="retangle" />
                                <span>Selected</span>
                            </div>
                        </div>
                        <div className="table-ABCD">
                            <div className="table-A-container wrapper">
                                <div className="seats">
                                    <div className="seat seat-1">
                                        <input type="radio" name="A-1" id="A-1" />
                                        <label htmlFor="A-1">1</label>
                                    </div>
                                    <div className="seat seat-2">
                                        <input type="radio" name="A-2" id="A-2" />
                                        <label htmlFor="A-2">2</label>
                                    </div>
                                </div>
                                <div className="table table-A reserved">
                                    <input type="radio" name="A" id="A" value={reservations[0].id} checked={isChecked(reservations[0].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[0].available} />
                                    <label htmlFor="A">A</label>
                                </div>
                                <div className="seats">
                                    <div className="seat seat-3">
                                        <input type="radio" name="A-3" id="A-3" />
                                        <label htmlFor="A-3">3</label>
                                    </div>
                                    <div className="seat seat-4">
                                        <input type="radio" name="A-4" id="A-4" />
                                        <label htmlFor="A-4">4</label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-B-container wrapper">
                                <div className="seats">
                                    <div className="seat seat-1">
                                        <input type="radio" name="B-1" id="B-1" />
                                        <label htmlFor="B-1">1</label>
                                    </div>
                                    <div className="seat seat-2">
                                        <input type="radio" name="B-2" id="B-2" />
                                        <label htmlFor="B-2">2</label>
                                    </div>
                                </div>
                                <div className="table table-A">
                                    <input type="radio" name="B" id="B" value={reservations[1].id} checked={isChecked(reservations[1].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[1].available} />
                                    <label htmlFor="B">B</label>
                                </div>
                                <div className="seats">
                                    <div className="seat seat-3">
                                        <input type="radio" name="B-3" id="B-3" />
                                        <label htmlFor="B-3">3</label>
                                    </div>
                                    <div className="seat seat-4">
                                        <input type="radio" name="B-4" id="B-4" />
                                        <label htmlFor="B-4">4</label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-C-container wrapper">
                                <div className="seats">
                                    <div className="seat seat-1">
                                        <input type="radio" name="C-1" id="C-1" />
                                        <label htmlFor="C-1">1</label>
                                    </div>
                                    <div className="seat seat-2">
                                        <input type="radio" name="C-2" id="C-2" />
                                        <label htmlFor="C-2">2</label>
                                    </div>
                                </div>
                                <div className="table table-C">
                                    <input type="radio" name="C" id="C" value={reservations[2].id} checked={isChecked(reservations[2].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[2].available} />
                                    <label htmlFor="C">C</label>
                                </div>
                                <div className="seats">
                                    <div className="seat seat-3">
                                        <input type="radio" name="C-3" id="C-3" />
                                        <label htmlFor="C-3">3</label>
                                    </div>
                                    <div className="seat seat-4">
                                        <input type="radio" name="C-4" id="C-4" />
                                        <label htmlFor="C-4">4</label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-D-container wrapper">
                                <div className="seats">
                                    <div className="seat seat-1">
                                        <input type="radio" name="D-1" id="D-1" />
                                        <label htmlFor="D-1">1</label>
                                    </div>
                                    <div className="seat seat-2">
                                        <input type="radio" name="D-2" id="D-2" />
                                        <label htmlFor="D-2">2</label>
                                    </div>
                                </div>
                                <div className="table table-D">
                                    <input type="radio" name="D" id="D" value={reservations[3].id} checked={isChecked(reservations[3].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[3].available} />
                                    <label htmlFor="D">D</label>
                                </div>
                                <div className="seats">
                                    <div className="seat seat-3">
                                        <input type="radio" name="D-3" id="D-3" />
                                        <label htmlFor="D-3">3</label>
                                    </div>
                                    <div className="seat seat-4">
                                        <input type="radio" name="D-4" id="D-4" />
                                        <label htmlFor="D-4">4</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="standing-table">
                            <div className="diagonal-container">
                                <div className="diagonal-line" />
                            </div>
                            <div className="container">
                                <div className="outdoor">
                                    <span>Outdoor</span>
                                </div>
                                <div className="sub-container">
                                    <div className="indoor">
                                        <span>Indoor</span>
                                    </div>
                                    <div className="standing-table-container wrapper">
                                        <div className="table">
                                            <input type="radio" name="S" id="S" />
                                            <label htmlFor="S">Standing Table</label>
                                        </div>
                                        <div className="seats">
                                            <div className="seat seat-1">
                                                <input type="radio" name="S-1" id="S-1" />
                                                <label htmlFor="S-1">1</label>
                                            </div>
                                            <div className="seat seat-2">
                                                <input type="radio" name="S-2" id="S-2" />
                                                <label htmlFor="S-2">2</label>
                                            </div>
                                            <div className="seat seat-3">
                                                <input type="radio" name="S-3" id="S-3" />
                                                <label htmlFor="S-3">3</label>
                                            </div>
                                            <div className="seat seat-4">
                                                <input type="radio" name="S-4" id="S-4" />
                                                <label htmlFor="S-4">4</label>
                                            </div>
                                            <div className="seat seat-5">
                                                <input type="radio" name="S-5" id="S-5" />
                                                <label htmlFor="S-5">5</label>
                                            </div>
                                            <div className="seat seat-6">
                                                <input type="radio" name="S-6" id="S-6" />
                                                <label htmlFor="S-6">6</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="table-EFGHIJKL">
                            <div className="table-IJ">
                                <div className="table-I-container wrapper">
                                    <div className="seat seat-2">
                                        <input type="radio" name="I-2" id="I-2" />
                                        <label htmlFor="I-2">2</label>
                                    </div>
                                    <div className="table table-I">
                                        <input type="radio" name="I" id="I" value={reservations[8].id} checked={isChecked(reservations[8].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[8].available} />
                                        <label htmlFor="I">I</label>
                                    </div>
                                    <div className="seat seat-1">
                                        <input type="radio" name="I-1" id="I-1" />
                                        <label htmlFor="I-1">1</label>
                                    </div>
                                </div>
                                <div className="line" />
                                <div className="table-J-container wrapper">
                                    <div className="seat seat-2">
                                        <input type="radio" name="J-2" id="J-2" />
                                        <label htmlFor="J-2">2</label>
                                    </div>
                                    <div className="table table-J">
                                        <input type="radio" name="J" id="J" value={reservations[9].id} checked={isChecked(reservations[9].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[9].available} />
                                        <label htmlFor="J">J</label>
                                    </div>
                                    <div className="seat seat-1">
                                        <input type="radio" name="J-1" id="J-1" />
                                        <label htmlFor="J-1">1</label>
                                    </div>
                                </div>
                            </div>
                            <div className="table-EFGHKL">
                                <div className="table-EFK">
                                    <div className="table-E-container wrapper">
                                        <div className="seat seat-1">
                                            <input type="radio" name="E-1" id="E-1" />
                                            <label htmlFor="E-1">1</label>
                                        </div>
                                        <div className="table table-E">
                                            <input type="radio" name="E" id="E" value={reservations[4].id} checked={isChecked(reservations[4].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[4].available} />
                                            <label htmlFor="E">E</label>
                                        </div>
                                        <div className="seat seat-2">
                                            <input type="radio" name="E-2" id="E-2" />
                                            <label htmlFor="E-2">2</label>
                                        </div>
                                    </div>
                                    <div className="line" />
                                    <div className="table-F-container wrapper">
                                        <div className="seat seat-1">
                                            <input type="radio" name="F-1" id="F-1" />
                                            <label htmlFor="F-1">1</label>
                                        </div>
                                        <div className="table table-F">
                                            <input type="radio" name="F" id="F" value={reservations[5].id} checked={isChecked(reservations[5].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[5].available} />
                                            <label htmlFor="F">F</label>
                                        </div>
                                        <div className="seat seat-2">
                                            <input type="radio" name="F-2" id="F-2" />
                                            <label htmlFor="F-2">2</label>
                                        </div>
                                    </div>
                                    <div className="line" />
                                    <div className="table-K-container wrapper">
                                        <div className="seat seat-1">
                                            <input type="radio" name="K-1" id="K-1" />
                                            <label htmlFor="K-1">1</label>
                                        </div>
                                        <div className="sub-container">
                                            <div className="seat seat-3">
                                                <input type="radio" name="K-3" id="K-3" />
                                                <label htmlFor="K-3">3</label>
                                            </div>
                                            <div className="table table-K">
                                                <input type="radio" name="K" id="K" value={reservations[10].id} checked={isChecked(reservations[10].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[10].available} />
                                                <label htmlFor="K">K</label>
                                            </div>
                                            <div className="seat seat-4">
                                                <input type="radio" name="K-4" id="K-4" />
                                                <label htmlFor="K-4">4</label>
                                            </div>
                                        </div>
                                        <div className="seat seat-2">
                                            <input type="radio" name="K-2" id="K-2" />
                                            <label htmlFor="K-2">2</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="lines">
                                    <div className="line-1" />
                                    <div className="line-2" />
                                    <div className="line-3" />
                                </div>
                                <div className="table-GHL">
                                    <div className="table-G-container wrapper">
                                        <div className="seat seat-1">
                                            <input type="radio" name="G-1" id="G-1" />
                                            <label htmlFor="G-1">1</label>
                                        </div>
                                        <div className="table table-G">
                                            <input type="radio" name="G" id="G" value={reservations[6].id} checked={isChecked(reservations[6].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[6].available} />
                                            <label htmlFor="G">G</label>
                                        </div>
                                        <div className="seat seat-2">
                                            <input type="radio" name="G-2" id="G-2" />
                                            <label htmlFor="G-2">2</label>
                                        </div>
                                    </div>
                                    <div className="line" />
                                    <div className="table-H-container wrapper">
                                        <div className="seat seat-1">
                                            <input type="radio" name="H-1" id="H-1" />
                                            <label htmlFor="H-1">1</label>
                                        </div>
                                        <div className="table table-H">
                                            <input type="radio" name="H" id="H" value={reservations[7].id} checked={isChecked(reservations[7].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[7].available} />
                                            <label htmlFor="H">H</label>
                                        </div>
                                        <div className="seat seat-2">
                                            <input type="radio" name="H-2" id="H-2" />
                                            <label htmlFor="H-2">2</label>
                                        </div>
                                    </div>
                                    <div className="line" />
                                    <div className="table-L-container wrapper">
                                        <div className="seat seat-1">
                                            <input type="radio" name="L-1" id="L-1" />
                                            <label htmlFor="L-1">1</label>
                                        </div>
                                        <div className="sub-container">
                                            <div className="seat seat-3">
                                                <input type="radio" name="L-3" id="L-3" />
                                                <label htmlFor="L-3">3</label>
                                            </div>
                                            <div className="table table-G">
                                                <input type="radio" name="L" id="L" value={reservations[11].id} checked={isChecked(reservations[11].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[11].available} />
                                                <label htmlFor="L">L</label>
                                            </div>
                                            <div className="seat seat-4">
                                                <input type="radio" name="L-4" id="L-4" />
                                                <label htmlFor="L-4">4</label>
                                            </div>
                                        </div>
                                        <div className="seat seat-2">
                                            <input type="radio" name="L-2" id="L-2" />
                                            <label htmlFor="L-2">2</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div action="" className="viproom-container wrapper">
                            <div className="viproom-1 room">
                                <input type="radio" name="vip-1" id="vip-1" value={reservations[12].id} checked={isChecked(reservations[12].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[12].available} />
                                <label htmlFor="vip-1">
                                    VIP <br />
                                    ROOM 1
                                </label>
                            </div>
                            <div className="viproom-2 room">
                                <input type="radio" name="vip-2" id="vip-2" value={reservations[13].id} checked={isChecked(reservations[13].id)} onChange={(e) => handleChange(e.target.value)} disabled={!reservations[13].available} />
                                <label htmlFor="vip-2">
                                    VIP <br />
                                    ROOM 2
                                </label>
                            </div>
                        </div>
                        <div className="btn">
                            <img src={require("./Asset/ombak_kiri.png")} alt="ombakerror" />
                            <button type="submit" id="confimation" className="confirm" onClick={handleSelectTable}>
                                Confirmation
                            </button>
                            <img src={require("./Asset/ombak_kanan.png")} alt="ombakerror" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reservation2;