import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import TicketType from './TicketType';
import Button from './Button';

function SelectTicket() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const navigate = useNavigate();

	const onSubmit = (data) => {
		localStorage.setItem('tickets', JSON.stringify(data));
		/*
		axios.post('http://localhost:3000/tickets', data)
			.then(res => console.log(res))
			.catch(err => console.error('Error posting tickets: ', err))*/
		navigate('/attendee-details')
	}
	const handleNext = () => {
		console.log('Next');
	}
	const handleCancel = () => {
		console.log('Cancel')
	}

	return (
		<div className='text-white pt-4 bg-gradient-radial flex flex-col items-center' style={{background: 'radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2)0%, rgba(36, 160, 181, 0)100%), #02191D'}}>
			<Navbar />
			<form onSubmit={handleSubmit(onSubmit)} className='w-[300px] md:w-175 bg-[#041E23] border border-[#0E464F] p-6 md:p-8 rounded-3xl self-center mt-8 mb-20'>
				<div className='header h-12 flex flex-col justify-between'>
					<div className='flex flex-col md:flex-row justify-between mb-3 md:mb-0'>
						<p className='font-[jejumyeongjo] text-3xl'>Ticket Selection</p>
						<p className='text-[#fafafa]'>Step 1/3</p>
					</div>
					<div>
						<hr className='border-b-2 border-[#24A0B5] w-4/5 md:w-1/3'/>
						<hr className='border-b border-[#0E464F]'/>
					</div>
				</div>
				<div className='md:w-[604px] md:bg-[#08252B] md:border md:border-[#0E464F] md:p-6 md:rounded-3xl md:mt-6'>
					<div className='w-[252px] md:w-full flex flex-col justify-center items-center border border-[#07373F] rounded-3xl px-6 py-4 md:p-6 text-[#fafafa] mt-14 md:mt-0 mb-6 md:mb-0' style={{background: 'radial-gradient(103.64% 57.39% at 14.02% 32.06%, rgba(36, 160, 181, 0.2)0%, rgba(36, 160, 181, 0)100%), rgba(10, 12, 17, 0.1)'}}>
						<h1 className='text-[38px] md:text-[62px] road-rage-regular'>Techember Fest "25</h1>
						<p className='w-[239px] md:w-[310px] text-center font-[roboto]'>Join us for an unforgettable experience at [Event Name]! Secure your spot now.</p>
						<div className='font-[roboto] mt-8 text-center'>
							<span className='block md:inline'>📍 [Event Location]</span>
							<span className='px-4 hidden md:inline'>||</span>
							<span>March 15, 2025 | 7:00 PM</span>
						</div>
					</div>
					<hr className='border-b border-[#07373F] my-8 w-[252px] md:w-full'/>
					<div className='md:h-[174px]'>
						<p className='font-[roboto]'>Select Ticket Type:</p>
						<div className='flex flex-col justify-between bg-[#052228] border border-[#07373F] rounded-3xl p-4 w-[252px] md:w-full h-[410px] md:h-[158px] mt-2'>
							<div className='flex flex-col md:flex-row justify-between space-y-3 md:space-y-0'>
								<TicketType id={'ticketType1'} value='regular' bg='#12464E' amt={'Free'} accessType='regular access' register={register}/>
								<TicketType id={'ticketType2'} value='vip' amt={'$150'} accessType='vip access' register={register}/>
								<TicketType id={'ticketType3'} value='vvip' amt={'$150'} accessType='vvip access' register={register}/>
							</div>
							{errors.ticketType && <p className='text-red-500 p-1.5 md:p-1 text-sm'>{errors.ticketType?.message}</p>}
						</div>
					</div>
					<div className='flex flex-col my-8'>
						<label htmlFor='noOfTicket' className='font-[roboto]'>Number of Tickets</label>
						<select id='noOfTicket' {...register('noOfTicket')} name='noOfTicket' className='w-[252px] md:w-full mt-2 p-3 border border-[#07373F] rounded-xl bg-[#08252B] cursor-pointer'>
							<option value="1">1</option>
							<option value="2">2</option>
							<option value="3">3</option>
							<option value="4">4</option>
							<option value="5">5</option>
						</select>
					</div>
					<div className='flex flex-col md:flex-row justify-between h-[112px] md:h-full'>
						<button type='submit' disabled={true} onClick={handleCancel} className='w-[252px] md:w-[266px] h-12 px-6 py-3 border border-[#24A0B5] rounded-lg cursor-pointer font-[roboto]' style={{background: '#08252B', color: '#24A0B5'}}>Cancel</button>
						<Button value={'Next'} color={'#fff'} bg={'#24A0B5'} handleClick={handleNext} />
					</div>
				</div>
			</form>
		</div>
	)
}

export default SelectTicket;
