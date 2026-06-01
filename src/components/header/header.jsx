/* eslint-disable jsx-a11y/anchor-is-valid */
import './header.scss';

const Header = (props) => {
    const { changePage } = props;
    return (
        <header className="header">
            <div className='container menu-wrapper'>
                <ul className="menu-list">
                    <li>
                        <a
                            onClick={(e) => {
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
        </header>
    )
}

export default Header;
