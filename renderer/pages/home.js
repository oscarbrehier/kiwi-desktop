import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

function Home() {

	return (
		<React.Fragment>

			<Head>
				<title>Kiwi - Music with Friends</title>
				<link rel="shortcut icon" type="image/jpg" href="/images/favicon.ico"></link>
			</Head>
			
			<div className='h-screen w-full bg-black'>
				<section className='w-full h-[15%] flex items-center flex-col justify-between'>
					<div className='flex justify-between w-[80%] mt-5'>
						<div className='h-10 w-10 bg-[#474747] rounded-full flex items-center justify-center cursor-pointer'>
							<img className='h-5 w-5' src='/images/contact.png' />
						</div>
						<div className='h-10 w-10 bg-[#474747] rounded-full'></div>
					</div>
					<div className='h-10 flex w-[40%] justify-between text-white font-semibold'>
						<div className='w-full flex items-center justify-center border-[#1ED760] border-b-[3px]'>Received</div>
						<div className='w-full flex items-center justify-center'>Sent</div>
						<div className='w-full flex items-center justify-center'>My Library</div>
					</div>
				</section>
				<section className='w-full h-[85%] flex items-center justify-center flex-col'>
					<p className='text-white font-semibold text-2xl'>No Received Songs Yet</p>
					<div className='bg-[#1ed760] h-10 w-auto'>
						<Link href='/spotify'>Authenticate spotify</Link>
					</div>
				</section>
			</div>
			
		</React.Fragment>
	);

};

export default Home;
