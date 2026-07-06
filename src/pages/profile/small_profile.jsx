import { FaAngleRight, FaArrowLeft, FaBell, FaInfoCircle } from "react-icons/fa";
import Details from "./large/details";
import { useState } from "react";
import {Link} from "react-router-dom";
import Settings_page from "./large/settings";

function Small_profile(){
    const [details,set_details]=useState(false);
    const [settings,set_settings]=useState(true);
    return (
        <div className="small_profile" style={{width:"100%",height:"100%",backgroundColor:"white",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
            <div style={{width:"100%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",height:"9%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Link to="/" style={{display:"flex",color:"rgb(40,40,40)",textDecoration:"none",flexDirection:"row",alignItems:"center"}}>
                       <FaArrowLeft/>
                       <div style={{marginLeft:"10px"}}>PROFILE</div>
                    </Link>
                    <Link to="/?notification=true" style={{display:"flex",color:"rgb(40,40,40)",textDecoration:"none",flexDirection:"row",alignItems:"center"}}>
                       <div style={{display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer"}}>
                            <FaBell/>
                            <div style={{marginLeft:"10px"}}>Notification</div>
                        </div>
                    </Link>
                </div>
            </div>
            <div style={{width:"100%",height:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                
                <div style={{width:"100%",height:"80%",backgroundColor:"rgb(250,250,250)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    {details&&
                        <Details/>
                    }
                    {settings&&
                        <Settings_page/>
                    }
                </div>

                <div style={{width:"90%",height:"20%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    
                    <div style={{width:"40%",color:settings&&"rgb(40,40,40)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                        set_details(false);
                        set_settings(true);
                    }}>
                        <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <div>Settings</div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                {/* <FaInfoCircle/> */}
                                <FaAngleRight/>
                            </div>
                        </div>
                    </div>

                    <div style={{width:"40%",color:details&&"rgb(40,40,40)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                        set_details(true);
                        set_settings(false);
                    }}>
                        <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <div>Details</div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                <FaInfoCircle/>
                                <FaAngleRight/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Small_profile;