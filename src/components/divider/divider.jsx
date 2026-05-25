import './divider.scss';

import dividerIconWhite from '../../images/divider-icon-white.svg';
import dividerIconBlack from '../../images/divider-icon-black.svg';

const Divider = ({ color }) => {
    const dividerClass = color ? `divider divider_${color}` : 'divider';
    const dividerIconPath = color ? dividerIconWhite : dividerIconBlack;
    const dividerIcon = color ? 'divider-icon_white' : 'divider-icon'
    return (
        <div className={dividerClass}>
            <img className={dividerIcon} src={dividerIconPath} alt="Divider coffe beans" />
        </div>
    )
}

export default Divider;