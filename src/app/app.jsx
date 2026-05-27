import { Component } from 'react';

import Header from '../components/header/header';
import Home from '../pages/home/home';
import OurCoffee from '../pages/our-coffee/our-coffee';
import Pleasure from '../pages/pleasure/pleasure';
import Footer from '../components/footer/footer';

import './app.scss';

class CoffeeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
        }
    }

    changePage = (page) => {
        this.setState({ page });
    }

    render() {
        const { page } = this.state;
        let content

        switch (page) {
            case 'home': content = <Home />;
                break;
            case 'our-coffee': content = <OurCoffee />;
                break;
            case 'pleasure': content = <Pleasure />;
                break;
            default: content = <Home />;
        }
        return (
            <div className='app-connector'>
                <Header changePage={this.changePage} />
                {content}
                <Footer changePage={this.changePage} />
            </div>
        )
    }

}

export default CoffeeApp;