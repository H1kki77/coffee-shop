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
                                changePage('home');
                            }}
                            href="#"
                            className="menu-item">
                            Coffee house
                        </a>
                    </li>


                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            changePage('our-coffee');
                        }}
                            href="#"
                            className="menu-item">
                            Our coffee
                        </a>
                    </li>

                    <li>
                        <a onClick={(e) => {
                            e.preventDefault();
                            changePage('pleasure');
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
