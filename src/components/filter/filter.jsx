import './filter.scss';

const Filter = (props) => {
    const buttonsData = [
        { name: 'all', label: 'All', colored: true },
        { name: 'brazil', label: 'Brazil', colored: false },
        { name: 'kenya', label: 'Kenya', colored: false },
        { name: 'columbia', label: 'Columbia', colored: false },
    ]

    const buttons = buttonsData.map(({ name, label, colored }) => {
        const active = props.filter === name;
        const clazz = active ? 'filter-btn filter-btn_active' : 'filter-btn';
        return (
            <button
                className={`btn ${clazz}`}
                type='button'
                key={name}
                onClick={() => props.onFilterSelect(name)}>
                {label}
            </button>
        )
    })
    return (
        <div className="filter-group">
            <p className="filter-group__label">Or filter</p>
            <div className="filter-group__btn-wrapper">{buttons}</div>
        </div>
    )
}

export default Filter;