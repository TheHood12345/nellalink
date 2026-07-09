import { BarChart, Bell, BookOpen, BriefcaseBusiness, BriefcaseBusinessIcon, Home, LogOutIcon, Settings } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

function LeftNav({seek_nav,set_seek_nav}){

    const scroll_ref = useRef(null);

    return (
        <div ref={scroll_ref} style={{width:"100%",transition:"all 1s linear",scrollBehavior:"smooth",overflow:"scroll",fontSize:"14px",fontFamily:"poppins-light",display:"flex",flexDirection:"column",alignItems:"end"}}>
            <div  style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"end"}}>
                <Link to="/home" style={{width:"90%",color:"rgb(100,100,100)",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px",marginTop:"40px",fontFamily:seek_nav=="home"?"poppins-bold":"poppins-light",borderBottom:seek_nav=="home"?"1px solid white":"transparent",borderTop:seek_nav=="home"?"1px solid white":"transparent",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} onClick={()=>{
                    set_seek_nav("home");
                }}>
                    <Home size={20}/>
                    <div style={{width:"70%",textAlign:"start"}}>Dashboard</div>
                </Link>
                <Link to="/notification" style={{width:"90%",color:"rgb(100,100,100)",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",borderTopLeft:"10px",borderBottomLeft:"10px",marginTop:"20px",fontFamily:seek_nav=="notification"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottom:seek_nav=="notification"?"1px solid white":"transparent",borderTop:seek_nav=="notification"?"1px solid white":"transparent",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} onClick={()=>{
                    set_seek_nav("notification");
                }}>
                    <Bell size={20}/>
                    <div style={{width:"70%",textAlign:"start"}}>Notification</div>
                </Link>
                <Link to="/business" style={{width:"90%",color:"rgb(100,100,100)",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",borderTopLeft:"10px",borderBottomLeft:"10px",marginTop:"20px",fontFamily:seek_nav=="business"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottom:seek_nav=="business"?"1px solid white":"transparent",borderTop:seek_nav=="business"?"1px solid white":"transparent",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} onClick={()=>{
                    set_seek_nav("business");
                }}>
                    <BriefcaseBusinessIcon size={20}/>
                    <div style={{width:"70%",textAlign:"start"}}>Businesses</div>
                </Link>
                <Link to="/menu" style={{width:"90%",color:"rgb(100,100,100)",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",borderTopLeft:"10px",borderBottomLeft:"10px",marginTop:"20px",fontFamily:seek_nav=="menu"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottom:seek_nav=="menu"?"1px solid white":"transparent",borderTop:seek_nav=="menu"?"1px solid white":"transparent",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} onClick={()=>{
                    set_seek_nav("menu");
                    // scroll_ref.current?.scrollIntoView({
                    //     behaviour: "smooth"
                    // });
                }}>
                    <BookOpen/>
                    <div style={{width:"70%",textAlign:"start"}}>QR MENU / PRICE LIST</div>
                </Link>
                <div style={{width:"90%",color:"rgb(100,100,100)",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",borderTopLeft:"10px",borderBottomLeft:"10px",marginTop:"20px",fontFamily:seek_nav=="analytics"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottom:seek_nav=="analytics"?"1px solid white":"transparent",borderTop:seek_nav=="analytics"?"1px solid white":"transparent",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} onClick={()=>{
                    set_seek_nav("analytics");
                }}>
                    <BarChart/>
                    <div style={{width:"70%",textAlign:"start"}}>Analytics</div>
                </div>
                <Link to="/profile" style={{width:"90%",color:"rgb(100,100,100)",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",borderTopLeft:"10px",borderBottomLeft:"10px",marginTop:"20px",marginBottom:"40px",fontFamily:seek_nav=="settings"?"poppins-bold":"poppins-light",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderBottom:seek_nav=="settings"?"1px solid white":"transparent",borderTop:seek_nav=="settings"?"1px solid white":"transparent",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} onClick={()=>{
                    set_seek_nav("settings");
                }}>
                    <Settings/>
                    <div style={{width:"70%",textAlign:"start"}}>Settings</div>
                </Link>
            </div>
        </div>
    )
}

export default LeftNav;