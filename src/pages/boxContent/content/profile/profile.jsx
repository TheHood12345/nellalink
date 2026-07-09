import { Check, CheckCircle2Icon, Search } from "lucide-react";
import { useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import { FaAngleDown, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ChangePassword from "./changePassword";
import VerifyEmail from "./verify_email";

function Profile(){
    const navigate = useNavigate();
    const [query] = useSearchParams();
    const [show_cp,set_show_cp] = useState(false);
    const [show_verify_email,set_show_verify_email,] = useState(false);
    const [success,set_success] = useState(false);
    const [success_message,set_success_message] = useState("");
    const [fail,set_fail] = useState(false);
    const [fail_message,set_fail_message] = useState("");

    const [logout,set_logout] = useState(false);
    const [sign,set_sign] = useState("");

    useEffect(()=>{
        if(query.get("q")=="change_password"){
            set_show_cp(true);
            set_show_verify_email(false);
        }else if(query.get("q")=="verify"){
            set_show_verify_email(true);
            set_show_cp(false);
        }
    },[query]);
    return (
        <div style={{width:"100%",height:"100%",position:"relative",color:"rgb(100,100,100)",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>

            <div style={{width:"90%",marginTop:"20px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center",fontFamily:"poppins-bold"}}>Profile & Settings</div>
                </div>

                {
                    localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                  
                  <div className="box_card" style={{width:"100%",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",backgroundColor:"white",color:"purple",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}><BsInfoCircle/> Account setup is incomplete</div>
                        <div style={{color:"orange",fontFamily:"poppins-light",textAlign:"justify",fontSize:"12px",width:"80%"}}>Kindly click on the button below to verify your email and complete your acount setup.</div>
                        <div style={{color:"purple",fontFamily:"poppins-bold",textDecoration:"underline"}} onClick={()=>{
                            navigate("/profile?q=verify");
                        }}>verify now</div>
                        <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                           
                        </div>
                    </div>:null
                    }

                  <div style={{width:"100%",marginTop:"20px"}}>Profile Information</div>
                  <div className="profile_card" style={{width:"100%",display:"grid",gap:"20px",transition:"all 0.3s linear"}}>
                    <div className="box_card" style={{width:"100%",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",backgroundColor:"rgb(100,100,100)",color:"white",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}>Profile Name</div>
                        <div>{localStorage.getItem("name")}</div>
                    </div>
                    <div className="box_card" style={{width:"100%",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",backgroundColor:"rgb(100,100,100)",color:"white",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}>Username</div>
                        <div>{localStorage.getItem("name")}</div>
                    </div>
                    <div className="box_card" style={{width:"100%",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",backgroundColor:"rgb(100,100,100)",color:"white",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <div style={{fontFamily:"poppins-bold"}}>Email</div>
                            {
                                localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                                <div style={{color:"orange",fontFamily:"poppins-light",textDecoration:"underline"}} onClick={()=>{
                                    navigate("/profile?q=verify");
                                }}>unverified</div>:
                                <CheckCircle2Icon/>
                            }
                        </div>
                        <div>{localStorage.getItem("email")}</div>
                    </div>
                    <div className="box_card" style={{width:"100%",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",backgroundColor:"rgb(100,100,100)",color:"white",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}>Phone Number</div>
                        <div>{localStorage.getItem("email")}</div>
                    </div>
                  </div>
                

                  <div style={{width:"100%",marginTop:"20px"}}>Security Settings</div>
                    <div className="box_card" style={{width:"100%",boxShadow:"0px 10px 17px rgb(220,220,220)",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}>Change Password</div>
                        <div>Request for a change of password</div>
                        <div style={{color:"blueviolet",fontFamily:"poppins-bold",textDecoration:"underline"}} onClick={()=>{
                            navigate("/profile?q=change_password");
                        }}>Request</div>
                    </div>

                    <div  style={{width:"100%",marginTop:"40px",paddingBottom:"40px",boxShadow:"0px 10px 17px rgb(220,220,220)",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}>Signup</div>
                        <div>Signup/Signin to a new account</div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <Link style={{color:"blueviolet",fontFamily:"poppins-bold",textDecoration:"underline"}} onClick={()=>{
                            set_sign("signup");
                            set_logout(true);
                        }}>Signup</Link>
                            <Link style={{color:"blueviolet",fontFamily:"poppins-bold",textDecoration:"underline",marginLeft:"20px"}} onClick={()=>{
                            set_sign("login");
                            set_logout(true);
                        }}>Logout</Link>  
                        </div>
                        
                    </div>
                    <div  style={{width:"100%",opacity:"0",marginTop:"20px",paddingBottom:"40px",boxShadow:"0px 10px 17px rgb(220,220,220)",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"start",paddingLeft:"20px",paddingRight:"20px",paddingTop:"10px",paddingBottom:"10px",boxSizing:"border-box"}}>
                        <div style={{fontFamily:"poppins-bold"}}></div>
                        <div>..</div>
                        <div style={{fontFamily:"poppins-bold",textDecoration:"underline"}}>Signup</div>
                    </div>
            </div>

            {
                show_cp&&<ChangePassword set_show_cp={set_show_cp} set_success_message={set_success_message} set_success={set_success}  set_fail_message={set_fail_message} set_fail={set_fail}/>
            }
            {
                show_verify_email&&<VerifyEmail set_show_verify_email={set_show_verify_email} set_success_message={set_success_message} set_success={set_success}  set_fail_message={set_fail_message} set_fail={set_fail}/>
            }
            
            {
                logout&&
                <div style={{display:"flex",borderRadius:"10px",position:"absolute",top:"30%",paddingLeft:"10px",paddingRight:"10px",flexDirection:"column",alignItems:"center",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white",boxShadow:"0px 10px 17px rgb(220,220,220)"}}>
                    <div>Confirm Logout</div>
                    <div style={{width:"90%",fontSize:"12px",textAlign:"center"}}>You will be logged out of your current account</div>
                    <div style={{width:"90%",display:"flex",marginTop:"20px",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                            set_logout(false);
                        }}>
                                <div>Cancel</div>
                        </div>
                        <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"red",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                            localStorage.clear();
                            navigate(`/${sign}`,{replace: true});
                        }}>
                                <div>Logout</div>
                        </div>
                    </div>
                </div>
            }
            {
                success&&
                <div className="success" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                   <FaCheckCircle size={30}/> {success_message}
                </div>
            }
            {
                fail&&
                <div className="fail" style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                    <FaExclamationCircle color={"white"} size={30}/> <div style={{width:"60%"}}>{fail_message}</div>
                </div>
            }
        </div>
    );
}

export default Profile;