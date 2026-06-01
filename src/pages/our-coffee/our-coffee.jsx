import { Component } from 'react';

import girlWithCup from '../../images/girl-with-cup.jpg';

import './banner-our-coffee.scss';
import './catalog-our-coffee.scss';

import ProductCard from '../../components/product-card/product-card';
import Filter from '../../components/filter/filter';
import Banner from '../../components/banner/banner';
import Search from '../../components/search/search';
import About from '../../components/about/about';


class OurCoffee extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const { filter, term } = this.state;
        const { data } = this.props
        const visibleData = this.filterProducts(this.searchProducts(data, term), filter);

        const
            h1Title = 'Our Coffee',
            bannerClass = 'banner-our-coffee';

        return (
            <div className='our-coffee' >

                <Banner
                    h1Title={h1Title}
                    bannerClass={bannerClass}
                />


                <About img={girlWithCup} title='About our beans' >
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                    <p>Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </About>

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
                            catalog
                            onSelectedProduct={(card) => this.props.changePage('single-product', null, card)} />
                    </div>
                </section>
            </div>
        )
    }
}

export default OurCoffee;