import { useState } from "react";
import LibraryItem from "./libraryItem";
import uniqid from 'uniqid';

const Library = ({ tracks, saved }) => {

    const [trackLimit, setTrackLimit] = useState(10);
    const handleClick = () => setTrackLimit(trackLimit + 10)

    return (

        <div className="h-full w-full flex flex-col items-center mt-20 space-y-4">

            <div className="w-[90%]">
                <p className="text-white font-semibold text-lg">Recently played</p>
            </div>
            <div className="w-[90%] space-y-4">
                {
                    tracks.body.items.slice(0, trackLimit).map((item) => (<LibraryItem item={item} key={uniqid()} />))
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
                    saved.body.items.map((item) => (<LibraryItem item={item} key={uniqid()} />))
                }
            </div>
        </div>

    );

};

export default Library;