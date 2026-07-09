import { QRCodeCanvas } from "qrcode.react";
import { useRef } from "react";
import { FaDownload } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

function Menu_qr_code({set_show_qr,qr_nm,qr_bus}){

    const ref1=useRef(null);

    const download_QR=()=>{
        const canvas = ref1.current;
        if(!canvas) return;
        const url = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.href = url;
        link.download = `${Date.now()}-QR-CODE.png`;
        link.click();
    }

    return (
        <div style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(0,0,0,0.9)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <div style={{width:"80%",height:"90%",cursor:"pointer",backgroundColor:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                <FaCircleXmark onClick={()=>set_show_qr(false)} size={30} style={{alignSelf:"flex-end"}}/>
                <h2>QR Code for "{qr_nm}"</h2>
                <QRCodeCanvas ref={ref1} value={`${import.meta.env.VITE_FRONT_FACING_URL}/app/${qr_bus}/menu/${qr_nm}`} size={200}/>
                <div onClick={download_QR} style={{width:"90%",cursor:"pointer",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"orange",color:"white",textAlign:"center"}}><FaDownload/> Download</div>
                <div style={{width:"90%",cursor:"pointer",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",textAlign:"center"}} onClick={()=>set_show_qr(false)}>Close</div>
            </div>

        </div>
    ) 
}

export default Menu_qr_code;