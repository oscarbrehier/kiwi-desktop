import Link from 'next/link';

const Spotify = () => {

    const endpoint = 'https://accounts.spotify.com/authorize';
    const redirect = 'localhost:8888/home';
    const cliendId = '6500a893d198432a8511599a60ac8ae3';

    const scopes = ["playlist-read-private", "user-top-read", "user-read-recently-played"];
    
    const url = `${endpoint}?client_id=${cliendId}&redirect_uri=${redirect}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

    return (

        <div>
            <Link href={url}>Spotify</Link>
        </div>

    )

}

export default Spotify;