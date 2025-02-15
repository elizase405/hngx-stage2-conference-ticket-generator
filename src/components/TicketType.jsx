const TicketType = ({ value, amt, accessType, register, id, handleClick }) => {
	return (
	<label htmlFor={id} className='flex cursor-pointer'>
		<input
				type='radio'
				id={id}
				name='ticketType'
				value={value}
				className='hover:bg-[#12464E] appearance-none w-full md:w-[158px] h-[110px] border border-[#197686] rounded-xl'
				onClick={handleClick}
				{...register('ticketType', {required: 'Ticket Type is required!'})}
		/>
		<div className='absolute flex flex-col p-3 font-roboto '>
			<span className='font-semibold text-xl mb-3'>{amt}</span>
			<span className='uppercase'>{accessType}</span>
			<span className='text-sm'>20/52</span>
		</div>
	</label>
	);
}

export default TicketType;