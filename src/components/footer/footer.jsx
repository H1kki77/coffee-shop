import './footer.scss';
import Divider from '../divider/divider';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='container'>
                <ul className="menu-list">
                    <li><a href="#" className="menu-item">Coffee house</a></li>
                    <li><a href="#" className="menu-item">Our coffee</a></li>
                    <li><a href="#" className="menu-item">For your pleasure</a></li>
                </ul>
            </div>
            <Divider />
        </footer>
    )
}

export default Footer;
