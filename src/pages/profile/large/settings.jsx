import { LockKeyhole, Settings, Verified } from "lucide-react";
import { useState } from "react";
import { FaAngleRight, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from "react-icons/fa";
import ChangePassword from "./settings/change_password";
import VerifyEmail from "./settings/verify_email";

function Settings_page(){
    const [show_cp,set_show_cp]=useState(false);
    const [show_verify_email,set_show_verify_email]=useState(false);

    const [success,set_success]=useState(false);
    const [success_message,set_success_message]=useState("");
    const [fail,set_fail]=useState(false);
    const [fail_message,set_fail_message]=useState("");
    return (
        <div style={{width:"100%",height:"100%",backgroundColor:"rgb(240,240,240)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            {
            (show_cp==false && show_verify_email==false)&&
            <div style={{width:"90%",height:"90%",backgroundColor:"rgb(255,255,255)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                
                <div style={{width:"80%",marginTop:"40px",display:"flex",alignItems:"center",justifyContent:"start"}}>
                    <Settings/><div>Account Settings</div>
                </div>

                <div style={{width:"80%",marginTop:"20px",scrollSnapAlign:"center",backgroundColor:"rgba(29, 40, 47, 0.93)",backgroundImage:"linear-gradient(rgba(13, 21, 32, 0.1),rgba(13, 21, 32, 0.9))",color:"white",boxShadow:"0px 0px 3px rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",paddingTop:"10px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            
                            {/* <div style={{width:"90%",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                                        <div style={{width:"20%"}}>{localStorage.getItem("name")}</div>
                                                        
                                                    </div>
                                                </div> */}
                            <div style={{width:"90%",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                                        <div style={{width:"20%"}}>{localStorage.getItem("email")}</div>
                                                    </div>
                                                </div>
                            <div style={{width:"90%",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                        {
                                                        localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                                                        <div style={{color:"red",fontSize:"12px",backgroundColor:"pink",paddingTop:"3px",paddingBottom:"3px",width:"30%",textAlign:"center",borderRadius:"100px"}}>UNVERIFIED</div>
                                                        :<div style={{color:"orange",fontSize:"12px",paddingTop:"3px",paddingBottom:"3px",textAlign:"center",borderRadius:"100px"}}>VERIFIED</div>
                                                        }
                                                        <div style={{width:"70%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                                            
                                                            <FaInfoCircle/>
                                                        </div>
                                                    </div>
                                                </div>
                            
                        </div>
                    </div>

                    <hr style={{width:"80%"}}/>
                <div style={{width:"80%",position:"relative",paddingTop:"10px",fontSize:"14px",paddingBottom:"10px",display:"flex",background:"rgb(255,255,255)",flexDirection:"column",alignItems:"start"}}>
                <div>Manage Account</div>
                <div className="set1" style={{marginTop:"0px",backgroundColor:"rgb(230,230,230)",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    set_show_cp(true);
                }}>
                    <div  style={{width:"90%",cursor:"pointer",paddingTop:"5px",paddingBottom:"5px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"20%"}}>
                      <LockKeyhole/>  
                    </div>
                    <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center"}}>Change Password<FaAngleRight size={20}/></div>
                    {/* <div style={{width:"20%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                       <FaAngleRight size={20}/> 
                    </div> */}
                    </div>
                </div>
                <div className="set1" style={{marginTop:"5px",backgroundColor:"rgb(230,230,230)",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                    if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                                        set_show_verify_email(true);
                                    }else{
                                        set_success_message("Email has already been verified");
                                        set_success(true);
                                        setTimeout(()=>{
                                            set_success(false);
                                        },5000);
                                    }
                    
                }}>
                    <div  style={{width:"90%",cursor:"pointer",paddingTop:"5px",paddingBottom:"5px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                    <div style={{width:"20%"}}>
                                       <Verified/> 
                                    </div>
                                    
                                    <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center"}}>Verify Email<FaAngleRight  size={20}/></div>
                                    <div style={{width:"20%",position:"absolute",right:"0%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                    
                                        
                                    </div>
                                    </div>
                    {/* {
                                    localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                                    null
                                    :<div style={{color:"orange",fontSize:"12px"}}>VERIFIED</div>
                                    } */}
                                    
                </div>
                </div>
                


            </div>
            }
            {
                            show_cp&&
                            <div style={{width:"90%",height:"90%",backgroundColor:"rgb(255,255,255)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

                                <ChangePassword set_show_cp={set_show_cp} set_success={set_success} set_success_message={set_success_message} set_fail={set_fail} set_fail_message={set_fail_message}/>

                            </div>
                        }
                        {
                            show_verify_email&&
                            <div style={{width:"90%",height:"90%",backgroundColor:"rgb(255,255,255)",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

                                <VerifyEmail set_show_verify_email={set_show_verify_email} set_success={set_success} set_success_message={set_success_message} set_fail={set_fail} set_fail_message={set_fail_message}/>

                            </div>
                        }
            

            {success&&
                                                                                    <div style={{position:"absolute",top:"0%",left:"0%",width:"100%",backgroundColor:"orange",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                                                                                        <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                                                            <FaCheckCircle size={30}/> {success_message}
                                                                                        </div>
                                                                                    </div>
                                                                                    }
                        {fail&&
                                                                    <div style={{position:"absolute",backgroundColor:"red",color:"white",top:"0%",left:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                                                                        <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                                            <FaExclamationCircle size={30}/> {fail_message} 
                                                                        </div>
                                                                    </div>
                                                                    }
        </div>
    );
}

export default Settings_page;