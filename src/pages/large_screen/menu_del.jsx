import { QRCodeCanvas } from "qrcode.react";
import { useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { FaCircleXmark, FaDeleteLeft } from "react-icons/fa6";

function Menu_del({set_show_del,qr_nm,set_get_now,get_now,uuid_del}){

    const url = `https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu/trash/${uuid_del}`;
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const [loading,set_loading] = useState(false);
    const [is_bad,set_is_bad] = useState(false);
    const [bad_text,set_bad_text] = useState("");
    const [bad_top,set_bad_top] = useState(-10);

    async function delete_menu(){
        set_loading(true);
        await fetch(url,{
            method: "delete",
            headers: {
                "x-api-key": api
            }
        }).then((res)=>res.json()).then((data)=>{
            set_loading(false);
            if(data.status==true){
                set_show_del(false);
                set_get_now(!get_now);
            }else{
                console.log("Made request, but failed to delete:    ",data);
                set_bad_text(data.message);
                set_is_bad(true);
                set_bad_top(0);
                setTimeout(() => {
                    set_bad_top(-10);
                    setTimeout(() => {
                        set_is_bad(false);
                    }, 3000);
                }, 2000);
            }
            
        }).catch((err)=>{
            set_loading(false);
            console.log("Could not make request:    ",err);
            set_bad_text("Check your internet connection");
            set_is_bad(true);
            set_bad_top(0);
            setTimeout(() => {
            set_bad_top(-10);
            setTimeout(() => {
                set_is_bad(false);
            }, 3000);
        }, 2000);
        });
    }


    return (
        <div style={{width:"100%",height:"100%",position:"absolute",fontSize:"14px",backgroundColor:"rgba(0,0,0,0.9)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

            <div style={{width:"80%",position:"relative",paddingTop:"10px",paddingBottom:"10px",cursor:"pointer",backgroundColor:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                <h2>Confirm Deletion</h2>
                <div>Are you sure you want to delete <strong>{qr_nm}</strong>?</div>
                <div style={{width:"80%",cursor:"pointer",backgroundColor:"white",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div onClick={()=>set_show_del(false)} style={{width:"45%",cursor:"pointer",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"rgb(200,200,200)",color:"white",textAlign:"center"}}>Cancel</div>
                    <div onClick={()=>{
                        if(!loading){
                         delete_menu()   
                    }}} style={{width:"45%",cursor:"pointer",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"red",color:"white",textAlign:"center"}}>{!loading&&<FaDeleteLeft/>} {loading?"Loading...":"Delete"}</div>
                </div>
                
            </div>

            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"red",color:"white",top:`${bad_top}%`,left:"0%",width:"100%",display:is_bad?"flex":"none",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.5s linear",textAlign:"center",fontSize:"16px"}}>
                 {bad_text}
            </div>

        </div>
    ) 
}

export default Menu_del;