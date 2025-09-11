

const Button = ({children, onClick,type="button"}) => {
    return (
        <button
        type={type}
        onClick={onClick}
        className="bg-teal-700 text-white px-8 py-2 rounded hover:bg-teal-800 transition">
            {children}
        </button>
    );
};

export default Button;