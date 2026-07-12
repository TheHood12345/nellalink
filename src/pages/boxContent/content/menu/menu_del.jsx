import { Loader } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaCircleXmark, FaDeleteLeft } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

function Menu_del({set_show_del,qr_nm,set_get_now,get_now,uuid_del}){

    const url = `${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu/trash/${uuid_del}`;
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const [loading,set_loading] = useState(false);
    const [is_bad,set_is_bad] = useState(false);
    const [bad_text,set_bad_text] = useState("");
    const [bad_top,set_bad_top] = useState(-10);

    const {set_success,set_success_message,set_fail,set_fail_message} = useOutletContext();

    async function delete_menu(){
        set_loading(true);
        await fetch(url,{
            method: "delete",
            headers: {
                "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_loading(false);
            if(data.status==true){
                set_show_del(false);
                set_get_now(!get_now);
                set_success_message("Successfully deleted menu");
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },2000);
            }else{
                console.log("Made request, but failed to delete:    ",data);
                set_bad_text(data.message);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },2000);
            }
            
        }).catch((err)=>{
            set_loading(false);
            console.log("Could not make request:    ",err);
            set_fail_message("Check your internet connection.");
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },2000);
        });
    }


    return (
        <div style={{width:"100%",height:"100%",fontSize:"12px",color:"rgb(100,100,100)",position:"absolute",fontSize:"14px",backgroundColor:"rgba(255,255,255,0.4)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <div style={{width:"300px",position:"relative",paddingTop:"10px",paddingBottom:"10px",cursor:"pointer",backgroundColor:"white",boxShadow:"0px 2px 7px rgb(220,220,220)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                <div style={{fontFamily:"poppins-bold",textAlign:"center"}}>Confirm Deletion</div>
                <div style={{width:"80%",textAlign:"center"}}>Are you sure you want to delete <strong>{qr_nm}</strong>?</div>
                <div style={{width:"80%",marginTop:"20px",cursor:"pointer",backgroundColor:"white",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div onClick={()=>set_show_del(false)} style={{width:"45%",cursor:"pointer",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"rgb(200,200,200)",color:"white",textAlign:"center"}}>Cancel</div>
                    <div onClick={async()=>{
                        if(!loading){
                         await delete_menu()   
                    }}} style={{width:"45%",cursor:"pointer",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"red",color:"white",textAlign:"center",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>{loading?<Loader className="loading"  size={20} color="white"/>:<FaDeleteLeft/>} {loading?"Loading...":"Delete"}</div>
                </div>
                
            </div>

            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"red",color:"white",top:`${bad_top}%`,left:"0%",width:"100%",display:is_bad?"flex":"none",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.5s linear",textAlign:"center",fontSize:"16px"}}>
                 {bad_text}
            </div>

        </div>
    ) 
}

export default Menu_del;