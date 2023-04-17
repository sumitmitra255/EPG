import { ChannelBox, ChannelLogo } from "planby";


import "./styleitem.css"
export const ChannelItem = ({ channel }) => {
  const { position, logo } = channel;
  console.log(position)
  return (

  <div style={{position:"absolute",top:position.top,height:"100px", width:"100px",display:"flex",alignItems:"center",justifyContent:"center"
,background:"#242424"  }}>

      {/* Overwrite styles by add eg. style={{ maxHeight: 52, maxWidth: 52,... }} */}
      {/* Or stay with default styles */}
      {/* <ChannelLogo
        src={logo}
        alt="Logo"
        style={{ maxHeight: 100, maxWidth:100 }}
        onClick={()=>{
          
        }}
        /> */}
        <img className="channel-logo" src={logo} height={50} width={50} style={{position:"relative"}}/>
   
  </div>
  );
};
