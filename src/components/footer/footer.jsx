import './footer.scss';
import Divider from '../divider/divider';

const Footer = (props) => {
    const { changePage } = props;
    return (
        <footer className="footer">
            <div className='container'>
                <ul className="menu-list">
                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            changePage('home', null);
                        }}
                            href="#"
                            className="menu-item">
                            Coffee house
                        </a>
                    </li>

                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            changePage('our-coffee', null);
                        }}
                            href="#"
                            className="menu-item">
                            Our coffee
                        </a>
                    </li>

                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            changePage('pleasure', null);
                        }}
                            href="#"
                            className="menu-item">
                            For your pleasure
                        </a>
                    </li>
                </ul>
            </div>
            <Divider />
        </footer>
    )
}

export default Footer;
