const Button = ({ value, color, bg, handleClick }) => {
	return (
		<button type='submit' onClick={handleClick} className='w-[252px] md:w-[266px] h-12 px-6 py-3 border border-[#24A0B5] rounded-lg cursor-pointer font-[roboto]' style={{background: `${bg}`, color: `${color}`}}>{value}</button>
	);
}

export default Button;