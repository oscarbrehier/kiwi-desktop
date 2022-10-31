import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
// import getToken from '../lib/token';
// import addToken, {access_token} from '../json/token';

import { getToken, addToken } from '../json/token';

export const getStaticProps = async () => {

    // const res = access_token.access_token;
    const res = getToken();
    
    // if(res) {

    //     return {
    //         redirect: {
    //             permanent: true,
    //             destinantion: '/main'
    //         }
    //     }

    // }

    // addToken('hey')
    const data = getToken();

    return { props: { data } };

}

const Spotify = ({ data }) => {

    console.log(data);
    const endpoint = 'https://accounts.spotify.com/authorize';
    const redirect = 'http://localhost:8888/callback';
    const cliendId = '6500a893d198432a8511599a60ac8ae3';

    const scopes = ["playlist-read-private", "user-top-read", "user-read-recently-played", "user-library-read"];
    
    const url = `${endpoint}?client_id=${cliendId}&redirect_uri=${redirect}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

    const router = useRouter();

    const handleClick = () => router.push(url);

    return (

        <div className='h-screen w-full flex flex-col items-center justify-center bg-black space-y-10 select-none'>
            <div className='w-96 h-screen flex flex-col items-center justify-center space-y-10'>
                <p className='text-white font-semibold text-4xl text-center'>Log into your streaming service</p>
                <div onClick={handleClick} className='bg-[#1ed760] h-16 w-full rounded-full flex items-center justify-center space-x-2 cursor-pointer'>
                    <p className='text-black font-bold text-xl uppercase flex items-center'>
                        Spotify
                    </p>
                </div>
            </div>
        </div>

    )

}

export default Spotify; 