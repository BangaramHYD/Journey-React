


export const Box = ()=>{

    return <div className="" >
        <div className="flex items-center justify-center w-3">
      <div className="w-6 h-3 bg-black"></div>
    </div>
    </div>
}

export const BoxP = ({postion})=>{
    return <div style={
        {
            position: 'fixed',
            transform: `translate(${postion.x}px , ${postion.y}px)`,
        }
    }>
        <Box />
    </div>
}

// export const Boxada = ({ position, className }) => {
//   return (
//     <div
//       className={`absolute bg-red-500 ${className}`}
//       style={{
//         top: position.y,
//         left: position.x,
//         width: '50px',
//         height: '50px',
//       }}
//     />
//   );
// };



