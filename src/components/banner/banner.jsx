import './banner.scss'

const Banner = (props) => {

    return (
        <section className={`banner ${props.bannerClass}`}>
            <div className="container">
                <h1 className="h1-title">{props.h1Title}</h1>
            </div>
        </section>
    );
}

export default Banner;