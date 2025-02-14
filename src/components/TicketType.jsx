const TicketType = ({ value, bg, amt, accessType, register, id }) => {
	return (
	<label htmlFor={id} className='flex cursor-pointer'>
		<input
				type='radio'
				id={id}
				name='ticketType'
				value={value}
				className=' appearance-none w-full md:w-[158px] h-[110px] border border-[#197686] rounded-xl'
				style={{background: `${bg}`}}
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