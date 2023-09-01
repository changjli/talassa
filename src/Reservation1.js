import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

const Reservation1 = () => {

    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    // data from fetch
    const [restaurants, setRestaurants] = useState([]);
    const [shifts, setShifts] = useState([]);

    // data from form 
    const [restaurant, setRestaurant] = useState('');
    const [shift, setShift] = useState('');
    const [date, setDate] = useState('');
    const [adult, setAdult] = useState('');
    const [child, setChild] = useState('');

    // query all locations
    const getRestaurants = (setData) => {
        axios.get(`http://127.0.0.1:8000/api/restaurant`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(res => {
                const data = res.data;
                if (data.success == true) {
                    setData(data.data);
                }
            })
            .catch(err => console.log(err));
    }

    // query all shifts 
    const getShifts = (setData) => {
        axios.get(`http://127.0.0.1:8000/api/shift`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(res => {
                const data = res.data;
                if (data.success == true) {
                    setData(data.data);
                }
            })
            .catch(err => console.log(err));
    }

    const handleChooseTable = (e) => {
        e.preventDefault();
        axios.get(`http://127.0.0.1:8000/api/reservation/available?d=${date}&s=${shift}&b=Talassa&l=${restaurant}`, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        })
            .then(res => {
                const data = res.data;
                if (data.success == true) {
                    navigate('/reservation/2', {
                        state: {
                            'reservations': data.data,
                            'adult': adult,
                            'child': child,
                        }
                    })
                }
            })
            .catch(err => console.log(err));
    }

    useEffect(() => {
        getRestaurants(setRestaurants);
        getShifts(setShifts);
    }, []);

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
                        <div className="circle btn-active">
                            1
                        </div>
                        <span>Information</span>
                    </div>
                    <span className="line-done" />
                    <div className="circle-btn">
                        <div className="circle btn-pending">2</div>
                        <span>Booking</span>
                    </div>
                    <span className="line-done" />
                    <div className="circle-btn">
                        <div className="circle btn-pending">3</div>
                        <span>Confirmation</span>
                    </div>
                </div>
            </div>
            <form action="#">
                <div className="field1">
                    <select value={restaurant} onChange={e => setRestaurant(e.target.value)}>
                        <option>Select the location</option>
                        {restaurants.map(restaurant => (
                            <option value={restaurant.location} key={restaurant.id}>{restaurant.location}</option>
                        ))}
                    </select>
                </div>
                <div className="field2">
                    <div>
                        <select value={shift} onChange={e => setShift(e.target.value)}>
                            <option>Select time reservation</option>
                            {shifts.map(shift => (
                                <option value={shift.id} key={shift.id}>{shift.start} - {shift.end}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <select value={adult} onChange={e => setAdult(e.target.value)}>
                            <option>Select Adults</option>
                            <option value="1">1 Adults</option>
                            <option value="2">2 Adults</option>
                            <option value="3">3 Adults</option>
                            <option value="4">4 Adults</option>
                        </select>
                    </div>
                </div>
                <div className="field3">
                    <div>
                        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
                    </div>
                    <div>
                        <select value={child} onChange={e => setChild(e.target.value)}>
                            <option>Select Child</option>
                            <option value="0">0 child</option>
                            <option value="1">1 child</option>
                            <option value="2">2 child</option>
                        </select>
                    </div>
                </div>
                <div className="notes">
                    <li>
                        The late limit after reserving a spot is 10 minutes. If there are any
                        problems or needs, please contact our contacts available on the
                        homepage.
                    </li>
                    <br />
                    <li>
                        Once you have booked a place, you agree and it cannot be changed
                        unless you cancel.
                    </li>
                    <br />
                    <li>
                        The limit for dining in is 2 hours or 120 minutes from the time the
                        food is served to the table. If there is an urgent need after 120
                        minutes, please contact the waiter or waitress at the restaurant and
                        let us know.
                    </li>
                    <br />
                    <li>
                        Personal belongings are the responsibility of each person. Loss of
                        personal belongings is not the responsibility of our restaurant.
                    </li>
                    <br />
                </div>
                <div className="checkbox">
                    <input type="checkbox" id="agreement" />
                    <label htmlFor="agreement">
                        I have read and agree with the terms and conditions.
                    </label>
                </div>
                <div className="chooseTable">
                    <button onClick={(e) => handleChooseTable(e)}>Choose the table</button>
                </div>
            </form>
        </div>
    );
}

export default Reservation1;