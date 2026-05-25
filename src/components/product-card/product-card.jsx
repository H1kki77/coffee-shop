import solimoImg from '../../images/product-cards/solimo-beans.svg';
import prestoImg from '../../images/product-cards/presto-beans.svg';
import aromisticoImg from '../../images/product-cards/aromistico-beans.svg';

import './product-card.scss';

const ProductCard = () => {
    const data = [
        {
            id: 1, image: solimoImg, title: 'Solimo Coffee Beans 2 kg', price: '10.73$'
        },
        {
            id: 2, image: prestoImg, title: 'Presto Coffee Beans 1 kg', price: '15.99$'
        },
        {
            id: 3, image: aromisticoImg, title: 'AROMISTICO Coffee 1 kg', price: '6.99$'
        },
    ]

    return (
        <div className='cards-wrapper' >
            {data.map(card => {
                const
                    image = card.image,
                    title = card.title,
                    price = card.price;
                return (
                    <div key={card.id} className='product-card'>
                        <img src={image} alt="Coffee card" />
                        <h3 className="product-card__title">{title}</h3>
                        <p className="product-card__price">{price}</p>
                    </div>
                );
            })}
        </div >
    )
}

export default ProductCard;