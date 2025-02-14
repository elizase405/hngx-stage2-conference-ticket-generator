import { useState } from 'react'
import { HiArrowLongRight } from "react-icons/hi2";
import hugeicons from '../assets/hugeicons_ticket-01.png'
import ticz from '../assets/ticz.png'

function Navbar() {
	const [hover, setHover] = useState(false);

	const handleMouseOver = () => {
		setHover(true);
	}
	const handleMouseOut= () => {
		setHover(false);
	}

	return (
		<nav className='flex justify-between items-center bg-[#05252C] border border-[#197686] py-3 px-4 rounded-4xl h-19 font-[jejumyeongjo] w-18/19 lg:w-6/7'>
			<div className='flex justify-between items-center w-23 h-9'>
				<img src={hugeicons} alt='event-icon' className='bg-[#052F35] border border-[#0E464F] py-1.5 px-2 rounded-xl h-9 w-10'/>
				<img src={ticz} alt='ticz' className='w-11 h-6'/>
			</div>
			<div className='flex justify-between items-center w-[341px] h-8.5 text-lg hidden md:flex'>
				<p className='px-2.5'>Events</p>
				<p className='px-2.5 text-[#B3B3B3]'>My Tickets</p>
				<p className='px-2.5 text-[#B3B3B3]'>About Project</p>
			</div>
			<button className='bg-white text-black w-[169] h-13 rounded-xl hover:bg-[#24A0B5] hover:text-[#D9D9D9] cursor-pointer' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
				<a className='w-full h-full py-4 px-6 text-base flex items-center text-sm md:text-base'>
					MY TICKETS
					{hover ? <HiArrowLongRight size={26} className='rotate-320'/>: <HiArrowLongRight size={26}/>}
				</a>
			</button>
		</nav>
	)
}

export default Navbar;








