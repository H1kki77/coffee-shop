import Header from '../components/header/header';
import Home from '../pages/home/home';
import Footer from '../components/footer/footer';


import './app.scss';

const CoffeeApp = () => {

    return (
        <div className='app-connector'>
            <Header />
            <Home />
            <Footer />
        </div>
    )
}

export default CoffeeApp;