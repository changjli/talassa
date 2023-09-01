import { Component, useEffect } from "react";

export default class Tes extends Component {
    render() {
        const reservations = this.props.location.state.property_id;
        console.log(reservations);
        return (
            <div>hello world</div>
        )
    }
}