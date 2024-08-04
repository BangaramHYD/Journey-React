import MediaCard from "./Cards"


export const Message = ({postion,scrollPosition,message,song})=>{
    // console.log(scrollPosition)
    return <div >
       {scrollPosition > 400 ? <div style={
        {
            position: 'fixed',
            transform: `translate(${postion.x}px , ${postion.y}px)`,
        }} className="">
             <MediaCard scroll={scrollPosition} message={message} song={song}/>
        </div>:null}
        
    </div>
}