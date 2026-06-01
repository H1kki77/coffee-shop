import { Component } from 'react';

import solimoImg from '../images/product-cards/solimo-beans.svg';
import solimoSingleImg from '../images/product-cards/solimo-single-product.jpg';
import prestoImg from '../images/product-cards/presto-beans.svg';
import prestoSingleImg from '../images/product-cards/presto-single-product.jpg';
import aromisticoImg from '../images/product-cards/aromistico-beans.svg';
import aromisticoSingleImg from '../images/product-cards/aromistico-single-product.jpg';

import Header from '../components/header/header';
import Home from '../pages/home/home';
import OurCoffee from '../pages/our-coffee/our-coffee';
import SingleProduct from '../pages/single-product/single-product';
import Pleasure from '../pages/pleasure/pleasure';
import Footer from '../components/footer/footer';

import './app.scss';

class CoffeeApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'home',
            scrollTarget: null,
            selectedProduct: null,
            data: [
                { id: 1, image: solimoImg, singleProductImg: solimoSingleImg, title: 'Solimo Coffee Beans 2 kg', price: '10.73$', country: 'Brazil', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dignissimos doloribus sit, perferendis iure, ea aut laudantium libero neque vel illum inventore aperiam vitae aliquid, assumenda voluptates. Quam, numquam!' },

                { id: 2, image: prestoImg, singleProductImg: prestoSingleImg, title: 'Presto Coffee Beans 1 kg', price: '15.99$', country: 'Kenya', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dignissimos doloribus sit, perferendis iure, ea aut laudantium libero neque vel illum inventore aperiam vitae aliquid, assumenda voluptates. Quam, numquam!' },

                { id: 3, image: prestoImg, singleProductImg: prestoSingleImg, title: 'Presto Coffee Beans 1 kg', price: '15.99$', country: 'Columbia', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dignissimos doloribus sit, perferendis iure, ea aut laudantium libero neque vel illum inventore aperiam vitae aliquid, assumenda voluptates. Quam, numquam!' },

                { id: 4, image: solimoImg, singleProductImg: solimoSingleImg, title: 'Solimo Coffee Beans 2 kg', price: '10.73$', country: 'Columbia', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dignissimos doloribus sit, perferendis iure, ea aut laudantium libero neque vel illum inventore aperiam vitae aliquid, assumenda voluptates. Quam, numquam!' },

                { id: 5, image: aromisticoImg, singleProductImg: aromisticoSingleImg, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Brazil', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dignissimos doloribus sit, perferendis iure, ea aut laudantium libero neque vel illum inventore aperiam vitae aliquid, assumenda voluptates. Quam, numquam!' },

                { id: 6, image: aromisticoImg, singleProductImg: aromisticoSingleImg, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Kenya', descr: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit fuga dignissimos doloribus sit, perferendis iure, ea aut laudantium libero neque vel illum inventore aperiam vitae aliquid, assumenda voluptates. Quam, numquam!' },
            ],
        }
    }

    changePage = (page, scrollTarget, selectedProduct) => {
        this.setState({ page, scrollTarget, selectedProduct });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            if (this.state.scrollTarget) {
                const elem = document.querySelector('.' + this.state.scrollTarget);
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }
            else { window.scrollTo(0, 0) }
            this.setState({ scrollTarget: null });
        }
    }

    render() {
        const { page, selectedProduct } = this.state;
        let content

        switch (page) {
            case 'home': content = <Home changePage={this.changePage} />;
                break;
            case 'our-coffee': content = <OurCoffee changePage={this.changePage} data={this.state.data} />;
                break;
            case 'pleasure': content = <Pleasure changePage={this.changePage} data={this.state.data} />;
                break;
            case 'single-product': content = <SingleProduct product={selectedProduct} changePage={this.changePage} />;
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