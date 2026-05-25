import './hero.scss';
import './about.scss';
import './best.scss';

import Divider from '../../components/divider/divider';
import ProductCard from '../../components/product-card/product-card';

const Home = () => {
    return (
        <div className='home'>
            <section className="hero">
                <h1 className='h1-title'>Everything You Love About Coffee</h1>
                <Divider color="white" />
                <div className="h2-wrapper">
                    <h2 className='h2-title h2-title_white'>We makes every day full of energy and taste</h2>
                    <h2 className='h2-title h2-title_white'>Want to try our beans?</h2></div>
                <button className="btn-more">More</button>
            </section>

            <section className="about">
                <div className="container"><h2 className="h2-title">About Us</h2>
                    <Divider />
                    <div className="about__text-wrapper">
                        <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</p>
                        <p>Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.</p>
                    </div></div>
            </section>

            <section className="best">
                <div className="container">
                    <h2 className="h2-title">Our best</h2>
                    <ProductCard />
                </div>
            </section>
        </div>
    )
}

export default Home;