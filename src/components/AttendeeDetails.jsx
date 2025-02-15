import { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { MdMailOutline } from "react-icons/md";
import { RiDownloadCloud2Line } from "react-icons/ri";
import Navbar from './Navbar';
import Button from './Button';

const AttendeeDetails = () => {
	const [ warning, setWarning ] = useState('');
	const [ file, setFile ] = useState(null);
	const [ ticket, setTicket ] = useState([]);
	const { register, handleSubmit, formState: {errors}} = useForm();
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('/tickets')
			.then(res => setTicket(res.data[0]))
			.catch(err => console.log('Error fetching tickets: ', err))
	}, [])

	const handleFileChange = (e) => {
		const img = e.target.files[0];
		if (img) {
			setFile(URL.createObjectURL(img));
		}
	}
	const handleDrop= (e) => {
		e.preventDefault();
		const file = e.dataTransfer.files[0];
		if (file) {
			setFile(URL.createObjectURL(file));
		}
	}
	const handleDragOver = (e) => {
		e.preventDefault();
	}

	const onSubmit = (data) => {
		localStorage.setItem('details', JSON.stringify(data));
		/*axios.post('/details', data)
			.then(res => console.log(res))
			.catch(err => console.error('Error posting details: ', err))*/
		navigate('/get-ticket')
	}

	const handleGoBack = () => {
		navigate('/')
		localStorage.clear()
	}

	const handleGetTicket = () => {
			setWarning('Image is Required!')
	}
	return (
		<div className='text-white pt-4 bg-gradient-radial flex flex-col items-center' style={{background: 'radial-gradient(52.52% 32.71% at 50% 97.66%, rgba(36, 160, 181, 0.2)0%, rgba(36, 160, 181, 0)100%), #02191D'}}>
			<Navbar />
			<form onSubmit={handleSubmit(onSubmit)} className='w-[300px] md:w-175 bg-[#041E23] border border-[#0E464F] p-6 md:p-8 rounded-3xl self-center mt-8 mb-20'>
				<div className='header h-12 flex flex-col justify-between'>
					<div className='flex flex-col md:flex-row justify-between mb-3 md:mb-0'>
						<p className='font-[jejumyeongjo] text-3xl'>Attendee Details</p>
						<p className='text-[#fafafa]'>Step 2/3</p>
					</div>
					<div>
						<hr className='border-b-2 border-[#24A0B5] w-4/5 md:w-2/4'/>
						<hr className='border-b border-[#0E464F]'/>
					</div>
				</div>
				<div className='md:w-[604px] md:bg-[#08252B] md:border md:border-[#0E464F] md:p-6 md:rounded-3xl md:mt-6 font-[roboto]'>
					<div className='w-[252px] md:w-full mt-14 md:mt-0 h-82 border border-[#07373F] bg-[#052228] px-6 pt-6 pb-12 rounded-3xl'>
						<p className='text-red-500'>{warning}</p>
						<p className='font-[roboto]'>Upload Profile Photo</p>
						<div className='my-8 bg-[#0E464F] h-50 flex justify-center items-center' style={{
background: 'rgba(0, 0, 0, 0.2)'}}>
							<div className='h-60 bg-[#0E464F] border-2 border-[#24A0B5] rounded-4xl flex flex-col justify-center items-center'>
								{file === null && <label htmlFor='img-upload' className='cursor-pointer'>
									<RiDownloadCloud2Line size={32}/>
								</label>}
								{file !== null && <img src={file} alt='Image preview' className='w-60 h-60 rounded-4xl bg-cover bg-center'/>}
								<input type='file' accept='image/*' id='img-upload' className='hidden' onChange={handleFileChange} onDrop={handleDrop} onDragOver={handleDragOver} />
								{file === null && <p className='w-[192px] mt-4 font-[roboto] text-center'>Drag & drop or click to upload</p>}
							</div>
						</div>
					</div>
					<hr className='border-b border-[#07373F] my-8 w-[252px] md:w-full'/>
					<div>
						{errors.name && <p className='text-red-500'>{errors.name.message}</p>}
						<label>Enter your name</label>
						<input type='text' name='name' className='w-[252px] md:w-full h-12 mt-2 mb-8 p-3 border border-[#07373F] rounded-xl bg-[#08252B]' {...register('name', {required: 'Name is required!'})} />
					</div>
					<div>
						{errors.email && <p className='text-red-500'>{errors.email.message}</p>}
						<label className='relative'>Enter your email *<MdMailOutline className='absolute top-10 left-3 z-10' size={23}/></label>
						<input type='email' name='email' placeholder='hello@avioflagos.io' className='w-[252px] md:w-full h-12 mt-2 mb-8 p-3 pl-10 border border-[#07373F] rounded-xl bg-[#08252B]'  {...register('email', {required: 'Email is required!'})}/>
					</div>
					<div>
						<label>Special request?</label>
						<textarea name='specialRequest' placeholder='Textarea' className='w-[252px] md:w-full h-[127px] mt-2 mb-8 p-3 border border-[#07373F] rounded-xl bg-[#08252B]' {...register('specialRequest')}/>
					</div>
					<div className='flex flex-col md:flex-row justify-between h-[112px] md:h-full'>
						<Button value={'Back'} color={'#24A0B5'} bg={'#08252B'} handleClick={handleGoBack}/>
						<Button value={'Get My Free Ticket'} color={'#fff'} bg={'#24A0B5'} handleClick={handleGetTicket}/>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AttendeeDetails;