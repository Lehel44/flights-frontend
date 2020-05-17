import React, {Component} from 'react';
import './App.css';
import Flights from "./components/table";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainHeroImage from "./components/MainHeroImage";


const heroContent = {
    title: 'Heathrow and Luton flight information',
    description:
        "The table below contains live flight information from Heathrow and Luton airports in London. You can find the arrivals to Heathrow and " +
        "both the arrivals and departures at Luton airport.",
    image: 'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
};

class App extends Component {
    state = {
        flight_data: []
    }

    render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    <main>
                        <MainHeroImage post={heroContent} />
                    </main>
                    <Flights flights={this.state.flight_data} />
                </Container>
            </React.Fragment>
        );
    }

    componentDidMount() {
        const url = 'http://localhost:3001/api/v1/flights'
        fetch(url)
            .then(res => res.json())
            .then((res) => {
                this.setState({flight_data: res})
            })
            .catch(console.log)
    }
}

export default App;
