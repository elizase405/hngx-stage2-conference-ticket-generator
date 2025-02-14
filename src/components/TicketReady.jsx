import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
import Button from './Button';
import Input from './Input';
import bg from '../assets/bg.png';

const TicketReady = () => {
	const [ ticket, setTicket ] = useState([]);
	const [ details, setDetails ] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('/tickets')
			.then(res => setTicket(res.data[0]))
			.catch(err => console.log('Error fetching tickets: ', err))
		axios.get('/details')
			.then(res => setDetails(res.data[0]))
			.catch(err => console.log('Error fetching details: ', err))
	}, [])
	console.log(details, ticket)

	const handleNewTicket = () => {
		axios.delete(`/details/${details.id}`)
		axios.delete(`/tickets/${ticket.id}`)
		navigate('/')
	}

	const handleDownloadTicket = () => {
		console.log('download ticket')
	}

	return (
		<div className='text-white pt-4 bg-gradient-radial flex flex-col items-center' style={{background: 'radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2)0%, rgba(36, 160, 181, 0)100%), #02191D'}}>
			<Navbar />
			<div className='w-[300px] md:w-175 bg-[#041E23] border border-[#0E464F] p-6 md:p-8 rounded-3xl self-center mt-8 mb-20'>
				<div className='header h-12 flex flex-col justify-between'>
					<div className='flex flex-row justify-between mb-2 md:mb-0'>
						<p className='font-[jejumyeongjo] text-3xl'>Ready</p>
						<p className='text-[#fafafa]'>Step 3/3</p>
					</div>
					<div>
						<hr className='border-b-2 border-[#24A0B5] w-4/5 md:w-1/3'/>
						<hr className='border-b border-[#0E464F]'/>
					</div>
				</div>
				<div className='flex flex-col items-center'>
					<div className='mt-6 md:mt-4 text-center'>
						<h1 className='text-xl md:text-3xl font-semibold'>Your Ticket is Booked!</h1>
						<p className='mt-2 md:mt-4'>Check your email for a copy or you can <span className='font-semibold'>download</span></p>
					</div>
					<div className='relative my-12'>
						<img src={bg} />
						<div className='flex flex-col items-center justify-between absolute top-6 left-3.5 w-56 md:w-68 h-92 md:h-112 border border-[#24A0B5] rounded-xl pb-3'>
							<div className='text-center'>
								<h1 className='text-[38px] road-rage-regular'>Techember Fest "25</h1>
								<div className='font-[roboto] md:mb-6'>
									<span className='block'>📍 04 Rumens road, Ikoyi, Lagos</span>
									<span>March 15, 2025 | 7:00 PM</span>
								</div>
							</div>
							<div className='w-40 h-28 md:h-38 border-2 border-[#24A0B5] rounded  md:mb-6'></div>
							<div className='w-[212px] md:w-[232px] h-32 md:h-48 bg-[#08343C] border-2 border-[#133D44] rounded-xl truncate'>
								<div className='flex font-[roboto]'>
									<Input label={'Enter your name'} value={details.name} />
									<Input label={'Enter your email *'} value={details.email} />
								</div>
								<hr className='border-b border-[#133D44]'/>
								<div className='flex font-[roboto]'>
									<Input label={'Ticket Type'} value={ticket.ticketType} />
									<Input label={'Ticket No'} value={ticket.noOfTicket} />
								</div>
								<hr className='border-b border-[#133D44]'/>
								<div className='p-1 md:p-2'>
									<p className='font-[roboto] text-[9px] md:text-[10px] text-[grey]'>Special request</p>
									<p className='text-[11px] md:text-[12px]'>{details.specialRequest}</p>
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col md:flex-row justify-between h-[105px] md:h-full md:w-[604px]'>
						<Button value={'Book Another Ticket'} color={'#24A0B5'} bg={'#08252B'} handleClick={handleNewTicket}/>
						<Button value={'Download Ticket'} color={'#fff'} bg={'#24A0B5'} handleClick={handleDownloadTicket}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default TicketReady;