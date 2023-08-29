const Reservation1 = () => {
    return (
        <div className="Reservation">
            <div className="Reservationstep">
                <div className="reservationtitle">
                    <img src="Asset/keyboard_backspace.png" alt="" />
                    <p>RESERVATION</p>
                </div>
                <section className="step-bar">
                    <ul className="step-bar-list">
                        <li className="step-bar-item">
                            <span className="progress-count">1</span>
                            <span className="progess-label">Information</span>
                        </li>
                        <li className="step-bar-item">
                            <span className="progress-count">2</span>
                            <span className="progess-label">Booking</span>
                        </li>
                        <li className="step-bar-item">
                            <span className="progress-count">3</span>
                            <span className="progess-label">Confirmation</span>
                        </li>
                    </ul>
                </section>
            </div>
            <form action="#">
                <div className="field1">
                    <select>
                        <option>Select the location</option>
                        <option>ppppp</option>
                        <option>bbbb</option>
                    </select>
                </div>
                <div className="field2">
                    <div>
                        <select>
                            <option>Select time reservation</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Select Adults</option>
                        </select>
                    </div>
                </div>
                <div className="field3">
                    <div>
                        <select>
                            <option>Select Date</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Select Child</option>
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
                    <button>Choose the table</button>
                </div>
            </form>
        </div>
    );
}

export default Reservation1;