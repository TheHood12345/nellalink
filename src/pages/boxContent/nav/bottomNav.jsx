import { BookOpen, BriefcaseBusiness, Home, LogOutIcon } from "lucide-react";
import { Link } from "react-router-dom";

function BottomNav({seek_nav,set_seek_nav,set_seek_logout}){

    return (
        <div style={{width:"100%",height:"100%",fontSize:"12px",fontFamily:"poppins-light",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                <Link to="/home" style={{width:"25%",color:"rgb(100,100,100)",textDecoration:"none",fontFamily:seek_nav=="home"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_seek_nav("home");
                }}>
                    <Home size={20}/>
                    <div style={{width:"90%",textAlign:"center",overflow:"scroll",textWrap:"nowrap"}}>Home</div>
                </Link>
                <Link to="/business" style={{width:"25%",color:"rgb(100,100,100)",textDecoration:"none",fontFamily:seek_nav=="business"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_seek_nav("business");
                }}>
                    <BriefcaseBusiness size={20}/>
                    <div style={{width:"90%",textAlign:"center",overflow:"scroll",textWrap:"nowrap"}}>Business</div>
                </Link>
                <Link to="menu" style={{width:"25%",color:"rgb(100,100,100)",textDecoration:"none",fontFamily:seek_nav=="menu"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_seek_nav("menu");
                }}>
                    <BookOpen size={20}/>
                    <div style={{width:"90%",textAlign:"center",overflow:"scroll",textWrap:"nowrap"}}>QR Menu/Price List</div>
                </Link>
                <div style={{width:"25%",color:"rgb(100,100,100)",textDecoration:"none",fontFamily:seek_nav=="logout"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    // set_seek_nav("logout");
                    set_seek_logout(true);
                }}>
                    <LogOutIcon/>
                    <div style={{width:"90%",textAlign:"center",overflow:"scroll",textWrap:"nowrap"}}>Logout</div>
                </div>
            </div>
        </div>
    )
}

export default BottomNav;