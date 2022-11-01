import { useState } from "react";

const LibraryItem = ({item, handleClick}) => {

    const [itemInfo, setItemInfo] = useState('hey')

    return (

        <div onClick={(e) => handleClick(e, item)} className="h-20 flex justify-between hover:bg-[rgb(18,18,18)] hover:transition ease-in-out delay-[10ms] cursor-pointer">
            <div className="flex">
                <img className="h-[inherit]" src={item.track.album.images[0].url} />    
                <div className="text-white flex justify-center flex-col ml-5">
                    <p className="font-semibold text-lg leading-tight">{item.track.name}</p>  
                    <p className="text-[#767676] leading-tight">{item.track.artists[0].name}</p>  
                </div>   
            </div>
            {/* <div className=" w-96 h-[inherit] items-center justify-center hidden group-hover:flex hover:transition ease-in-out delay-[10ms]">
                <div className="bg-[#1ed760] rounded-full h-10 w-40 flex items-center justify-center cursor-pointer">
                    <p className="text-black uppercase font-semibold">send</p>    
                </div>
            </div> */}
        </div>

    );

};

export default LibraryItem;