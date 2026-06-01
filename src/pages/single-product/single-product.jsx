import './about-single-product.scss';

import Banner from '../../components/banner/banner';
import Divider from '../../components/divider/divider';

const SingleProduct = (props) => {
    const
        h1Title = 'Our Product',
        bannerClass = 'banner-our-coffee';
    const { product, changePage } = props;
    const { singleProductImg, country, descr, price } = product || {};

    return (
        <div className="single-product">
            <Banner
                h1Title={h1Title}
                bannerClass={bannerClass}
            />
            <section className="about-single-product">
                <div className="container">
                    <div className="about-single-product__wrapper">

                        <div className="img-wrapper">
                            <img src={singleProductImg} alt="Single product" />
                        </div>

                        <div className="content-wrapper">
                            <h2 className="h2-title">
                                <span
                                    className="btn-back"
                                    onClick={() => changePage('our-coffee', null)}>← back</span>
                                About it
                            </h2>

                            <Divider />
                            <div className="text-wrapper">
                                <p className="text-wrapper__paragraph"><span className='text-wrapper__title'>Country: </span>{country}</p>

                                <p className="text-wrapper__paragraph"><span className='text-wrapper__title'>Description: </span>{descr}</p>

                                <p className="text-wrapper__paragraph">
                                    <span className='text-wrapper__title'>Price: </span>
                                    <span className='text-wrapper__price'>{price}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default SingleProduct;