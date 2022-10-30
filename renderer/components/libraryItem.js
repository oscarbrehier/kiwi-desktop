const LibraryItem = ({item}) => {

    console.log(item)

    return (

        <div className="h-20 flex">
            <img className="h-[inherit]" src={item.track.album.images[0].url} />    
            <div className="text-white flex justify-center flex-col ml-5">
                <p className="font-semibold text-lg leading-tight">{item.track.name}</p>  
                <p className="text-[#767676] leading-tight">{item.track.artists[0].name}</p>  
            </div>   
        </div>

    );

};

export default LibraryItem;