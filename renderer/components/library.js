import { useState, useRef } from "react";
import LibraryItem from "./libraryItem";
import uniqid from 'uniqid';
import { GrClose } from 'react-icons/gr';

const Library = ({ tracks, saved }) => {

    const [trackLimit, setTrackLimit] = useState(10);
    const [sendTrack, setSendTrack] = useState();
    const [visibility, setVisibility] = useState('hidden')

    const handleClick = () => setTrackLimit(trackLimit + 10)

    const handleSend = (e, item) => { 
        
        // item.track.name.length > 16 ? item.track.name.slice(0,16) : item.track.name;
        // console.log(item.track.name.length > 16)

        setSendTrack([
            item.track.album.images[0].url,
            item.track.name.length > 15 ? item.track.name.slice(0,15) + '...' : item.track.name,
            item.track.artists[0].name.length > 10 ? item.track.artists[0].name.slice(0,10) + '...' : item.track.artists[0].name
        ]);
        setVisibility('flex');

    };

    const handleClose = () => { 

        setVisibility('hidden');
        setSendTrack(null);

    };

    return (

        <div className="h-screen w-full mt-20 relative bg-red-400">

            <div className="absolute flex flex-col items-center h-auto w-full bg-black space-y-4 top-0 overflow-y-hidden">
                <div className="w-[90%]">
                    <p className="text-white font-semibold text-lg">Recently played</p>
                </div>
                <div className="w-[90%] space-y-4">
                    {
                        tracks.body.items.slice(0, trackLimit).map((item) => (<LibraryItem handleClick={handleSend} item={item} key={uniqid()} />))
                    }
                </div>
                <div onClick={handleClick}>
                    <p className={`font-semibold ${tracks.body.items.length > trackLimit ? 'text-white cursor-pointer' : 'text-[#767676] cursor-not-allowed'}`}>See more</p>
                </div>

                <div className="w-[90%]">
                    <p className="text-white font-semibold text-lg">Liked Songs</p>
                </div>
                <div className="w-[90%] space-y-4">
                    {
                        saved.body.items.map((item) => (<LibraryItem handleClick={handleSend} item={item} key={uniqid()} />))
                    }
                </div>
            </div>
            <div className={`h-[459px] w-full fixed flex justify-end flex-col items-center ${visibility}`}>
                <div className="h-44 w-full bottom-0 flex items-center justify-center">
                    <div className="h-20 w-auto bg-white rounded-full flex items-center justify-between">
                        <div className="h-16 w-44 bg-black rounded-l-full ml-2 flex items-center justify-center">
                            <p className="uppercase font-bold text-lg text-white">Send</p>    
                        </div>  
                        <div className="w-auto mx-2 flex leading-tight">
                            {/* <div className="h-16 w-16 bg-red-400"></div> */}
                            <img className="h-16 w-16" src={sendTrack ? sendTrack[0] : ''} />
                            <div className="flex justify-center flex-col w-32 ml-5">
                                <p>{sendTrack ? sendTrack[1] : ''}</p>
                                <p className="text-[#767676]">{sendTrack ? sendTrack[2] : ''}</p>
                            </div>
                        </div>
                        <div onClick={handleClose} className="h-16 w-16 bg-[#ededed] rounded-full mr-2 flex items-center justify-center cursor-pointer">
                            <GrClose className="h-6 w-6" />
                        </div>  
                    </div>
                </div>
            </div>

        </div>

    );

};

export default Library;