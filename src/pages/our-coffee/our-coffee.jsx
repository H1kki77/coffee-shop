import { Component } from 'react';

import solimoImg from '../../images/product-cards/solimo-beans.svg';
import prestoImg from '../../images/product-cards/presto-beans.svg';
import aromisticoImg from '../../images/product-cards/aromistico-beans.svg';

import './banner-our-coffee.scss';
import './about-our-coffee.scss';
import './catalog-our-coffee.scss';

import Header from '../../components/header/header';
import Divider from '../../components/divider/divider';
import ProductCard from '../../components/product-card/product-card';
import Filter from '../../components/filter/filter';
import Search from '../../components/search/search';

import girlWithCup from '../../images/girl-with-cup.jpg';

class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: solimoImg, title: 'Solimo Coffee Beans 2 kg', price: '10.73$', country: 'Brazil' },

                { id: 2, image: prestoImg, title: 'Presto Coffee Beans 1 kg', price: '15.99$', country: 'Kenya' },

                { id: 3, image: prestoImg, title: 'Presto Coffee Beans 1 kg', price: '15.99$', country: 'Columbia' },

                { id: 4, image: solimoImg, title: 'Solimo Coffee Beans 2 kg', price: '10.73$', country: 'Columbia' },

                { id: 5, image: aromisticoImg, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Brazil' },

                { id: 6, image: aromisticoImg, title: 'AROMISTICO Coffee 1 kg', price: '6.99$', country: 'Kenya' },
            ],
            term: '',
            filter: 'all',
        }
    }

    onFilterSelect = (filter) => {
        this.setState({ filter });
    }

    filterProducts = (items, filter) => {
        if (filter === 'all') return items;
        return items.filter(item => item.country.toLowerCase() === filter.toLowerCase())
    }

    onUpdateSearch = (term) => {
        this.setState({ term });
    }

    searchProducts = (items, term) => {
        if (term.length === 0) return items;

        return items.filter(item => {
            return item.title.toLowerCase().includes(term.toLowerCase());
        })
    }


    render() {
        const { data, filter, term } = this.state;
        const visibleData = this.filterProducts(this.searchProducts(data, term), filter);

        return (
            <div className='our-coffee' >
                <section className="banner-our-coffee">
                    <div className="container">
                        <h1 className="h1-title">Our Coffee</h1>
                    </div>
                </section>


                <section className="about-our-coffee">
                    <div className="container">
                        <div className="about-our-coffee__wrapper">
                            <div className="img-wrapper">
                                <img src={girlWithCup} alt="Girl with a cup of coffee" />
                            </div>
                            <div className="text-wrapper">
                                <h2 className="h2-title">About our beans</h2>
                                <Divider />
                                <div className="descr-wrapper">
                                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
                                        so questions.
                                        As greatly removed calling pleased improve an. Last ask him cold feel
                                        met spot shy want. Children me laughing we prospect answered followed. At it went
                                        is song that held help face.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="catalog-our-coffee">
                    <div className="container">
                        <div className="finding-product_wrapper">
                            <Search
                                onUpdateSearch={this.onUpdateSearch} />
                            <Filter
                                filter={filter}
                                onFilterSelect={this.onFilterSelect} />
                        </div>

                        <ProductCard
                            data={visibleData}
                            catalog />
                    </div>
                </section>
            </div>
        )
    }
}

export default OurCoffee;