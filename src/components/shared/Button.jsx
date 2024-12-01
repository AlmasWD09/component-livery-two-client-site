import PropTypes from 'prop-types';

const Button = ({ text }) => {
    return (
        <div>
            <button className="text-base font-semibold font-lato lg:mx-5 md:py-0">
                <span className='font-montserrat transition-all hover:text-primary'>{text}</span>
            </button>
        </div>
    );
};
// props-type validation
Button.propTypes = {
    text: PropTypes.string
};
export default Button;