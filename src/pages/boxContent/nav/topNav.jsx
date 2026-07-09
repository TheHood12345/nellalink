import { Bell, BookOpen, BriefcaseBusiness, Home, LogOutIcon } from "lucide-react";
import { useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaCircleXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

function TopNav({seek_nav,set_seek_logout,seek_top_bar,set_seek_top_bar,notif_num,notif_items}){

    const [show_alert,set_show_alert] = useState(true);

    return (
        <div style={{width:"100%",height:"100%",position:"relative",fontSize:"12px",fontFamily:"poppins-light",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            
            <div>
                <div style={{fontFamily:"poppins-bold"}}>{seek_nav=="home"?"DASHBOARD":seek_nav.toUpperCase()}</div>
            </div>
            
            <div style={{width:"100px",height:"90%",overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Link to="profile" style={{cursor:"pointer",width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_seek_top_bar("profile");
                }}>
                    <img src="/35.png" style={{width:"100%",aspectRatio:"1/1",borderRadius:"100px"}}/>
                </Link>
                <Link to="notification" state={{notif_num:notif_num,notif_items:notif_items}} style={{position:"relative",cursor:"pointer",width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_seek_top_bar("notification");
                }}>
                    <Bell size={20}/>
                    <div style={{position:"absolute",bottom:"90%",right:"0%",color:"red",fontFamily:"poppins-bold"}}>{notif_num<1?null:notif_num}</div>
                </Link>
                <div style={{cursor:"pointer",width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_seek_top_bar("logout");
                    set_seek_logout(true);
                }}>
                    <LogOutIcon/>
                </div>
            </div>
            {
                                localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                              show_alert&&
                              <div style={{paddingLeft:"10px",paddingRight:"10px",border:"1px solid purple",backgroundColor:"pink",position:"absolute",top:"100%",left:"0%",zIndex:"2",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",color:"purple",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                                    <div style={{fontFamily:"poppins-bold"}}><BsInfoCircle/> Account setup is incomplete</div>
                                    <div style={{color:"orange",fontFamily:"poppins-light",textAlign:"justify",fontSize:"12px",width:"80%",color:"purple"}}>Kindly click on the button below to verify your email and complete your acount setup.</div>
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                                    <Link to="profile?q=verify" style={{color:"purple",fontFamily:"poppins-bold",textDecoration:"underline"}} onClick={()=>{
                                        set_show_alert(false);
                                    }}>verify now</Link>
                                    <div to="profile?q=verify" style={{color:"red",fontFamily:"poppins-bold",textDecoration:"underline",marginLeft:"40px"}} onClick={()=>{
                                        set_show_alert(false);
                                    }}><FaCircleXmark/>Do this later</div>
                                    </div>
                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                       
                                    </div>
                                </div>:null
                                }
        </div>
    )
}

export default TopNav;