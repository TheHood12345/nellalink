import { FaAngleRight, FaArrowLeft, FaBell, FaInfoCircle } from "react-icons/fa";
import Details from "./large/details";
import { useState } from "react";
import {Link} from "react-router-dom";
import Settings_page from "./large/settings";

function Large_profile(){
    const [details,set_details]=useState(false);
    const [settings,set_settings]=useState(true);
    return (
        <div className="large_profile" style={{width:"100%",height:"100%",backgroundColor:"rgb(18,24,28)",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
            <div style={{width:"100%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",height:"9%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Link to="/" style={{display:"flex",color:"rgb(255,255,255)",textDecoration:"none",flexDirection:"row",alignItems:"center"}}>
                       <FaArrowLeft/>
                       <div style={{marginLeft:"10px"}}>PROFILE</div>
                    </Link>
                    <Link to="/?notification=true" style={{display:"flex",color:"rgb(255,255,255)",textDecoration:"none",flexDirection:"row",alignItems:"center"}}>
                       <div style={{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"}}>
                            <FaBell/>
                            <div style={{marginLeft:"10px"}}>Notification</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{width:"100%",height:"90%",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start"}}>
                <div style={{width:"20%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                    
                    <div style={{width:"80%",marginTop:"40px",color:settings&&"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                        set_details(false);
                        set_settings(true);
                    }}>
                        <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <div>Settings</div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                {/* <FaInfoCircle/> */}
                                <FaAngleRight/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:"80%",marginTop:"40px",color:details&&"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                        set_details(true);
                        set_settings(false);
                    }}>
                        <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <div>Details</div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                <FaInfoCircle/>
                                <FaAngleRight/>
                            </div>
                        </div>
                    </div>

                </div>
                <div style={{width:"80%",height:"100%",backgroundColor:"rgb(250,250,250)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    {details&&
                        <Details/>
                    }
                    {settings&&
                        <Settings_page/>
                    }
                </div>
            </div>
        </div>
    )
}

export default Large_profile;