import { Component } from 'react';
import './search.scss';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;
        this.setState({ term });
        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <div className="search-group">
                <p className="search-group__label">Looking for</p>
                <input
                    className='search-group__input'
                    type="text"
                    placeholder='start typing here...'
                    value={this.state.term}
                    onChange={this.onUpdateSearch} />
            </div>
        )
    }
}

export default Search;