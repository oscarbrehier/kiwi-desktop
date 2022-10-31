import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import Client from '../lib/client';
import { getToken } from '../json/token';
import Library from '../components/library';
import uniqid from 'uniqid';

export const getStaticProps  = async () => {

    const token = getToken();

    Client.setAccessToken(token);

    const user = await Client.getMe();
    const tracks = await Client.getMyRecentlyPlayedTracks();
    const saved = await Client.getMySavedTracks({ limit: 10 });

    return {

        props: { user, tracks, saved }

    }

}

const Main = ({user,tracks,saved, data}) => {

    const [userInfo, setUserInfo] = useState(user);

    return (

        <React.Fragment>

            <Head>
                <title>Kiwi - Music with Friends</title>
                <link rel="shortcut icon" type="image/jpg" href="/favicon.ico"></link>
            </Head>

            <div className='h-auto w-full bg-black flex items-center flex-col'>

                <section className='w-[90%] h-16 flex justify-between fixed bg-black items-center'>

                    <div className='h-10 w-10 bg-[#474747] rounded-full flex items-center justify-center cursor-pointer'>
                        <img className='h-5 w-5' src='/images/contact.png' />
                    </div>
                    <div className='w-1/2 h-full flex text-white uppercase font-semibold'>
                        <div className='w-full flex items-center justify-center'>Received</div>
                        <div className='w-full flex items-center justify-center'>Sent</div>
                        <div className='w-full flex items-center justify-center text-[#1ed760]'>My Library</div>
                    </div>
                    <Link href="/profile">
                        <img className='h-10 w-10 rounded-full' src={userInfo.body.images[0].url} alt="" />
                    </Link>

                </section>

                <section className='w-full h-full flex items-center justify-center flex-col'>
                    <p className='text-white font-semibold text-2xl'>No Received Songs Yet</p>
                    <Library tracks={tracks} saved={saved} key={uniqid()} />
                </section>

            </div>

        </React.Fragment>

    );

};

export default Main;