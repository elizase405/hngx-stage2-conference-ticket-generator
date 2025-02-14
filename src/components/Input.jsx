const Input = ({ label, value }) => {
	return (
		<div className='p-1 md:p-2 w-1/2'>
			<p className='font-[roboto] text-[9px] md:text-[10px] text-[grey]'>{label}</p>
			<p className='text-[11px] md:text-[12px] pt-1'>{value}</p>
		</div>
	);
}

export default Input;