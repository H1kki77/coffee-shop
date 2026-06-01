import whiteCup from '../../images/white-cup.jpg'

import './banner-pleasure.scss'

import Banner from '../../components/banner/banner';
import About from '../../components/about/about';
import ProductCard from '../../components/product-card/product-card';


const Pleasure = (props) => {
    const
        h1Title = 'For your pleasure',
        bannerClass = 'banner-pleasure';
    const { data, changePage } = props;
    return (
        <div className="pleasure">
            <Banner
                h1Title={h1Title}
                bannerClass={bannerClass}
            />

            <About img={whiteCup} title='About our goods'>
                <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.</p>
                <p>Afraid at highly months do things on at. Situation recommend objection do intention
                    so questions.
                    As greatly removed calling pleased improve an. Last ask him cold feel
                    met spot shy want. Children me laughing we prospect answered followed. At it went
                    is song that held help face.</p>
            </About>

            <ProductCard
                data={data}
                catalog
                onSelectedProduct={(card) => changePage('single-product', null, card)} />
        </div>
    )
}

export default Pleasure;