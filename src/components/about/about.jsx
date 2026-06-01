
import './about.scss';

import Divider from '../../components/divider/divider';

const About = (props) => {
    const { img, title, children } = props;
    return (
        <section className="about">
            <div className="container">
                <div className="about__wrapper">
                    <div className="img-wrapper">
                        <img src={img} alt={title} />
                    </div>
                    <div className="text-wrapper">
                        <h2 className="h2-title">{title}</h2>
                        <Divider />
                        <div className="descr-wrapper">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;