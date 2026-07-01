import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { data, Link, useNavigate } from "react-router-dom";

function Small_login(){
    const log_data = `${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/login`
    const [eye,set_eye] = useState(false);
    const [c_p,set_c_p]=useState(false);

    const [c_t,set_c_t]=useState(false);

    const [email,set_email] = useState("");
    const [password,set_password] = useState("");
    const [token,set_token] = useState("");

    const [token_error,set_token_error] = useState(false);
    const [token_email,set_token_email] = useState("");
    const [sending_token_email,set_sending_token_email] = useState(false);
    const [show_token_email,set_show_token_email] = useState(false);
    const [token_top,set_token_top] = useState(-10);
    const [token_success,set_token_success] = useState(false);
    const [token_s_top,set_token_s_top] = useState(-10);

    const [login_error,set_login_error] = useState(false);
    const [login_top,set_login_top] = useState(-10);
    const [login_text,set_login_text] = useState("Operation Failed");
    const [fp_text,set_fp_text] = useState("Operation Failed");
    const [login_err,set_login_err] = useState(false);

    const [cp_error,set_cp_error] = useState(false);
    const [cp_top,set_cp_top] = useState(-10);
    const [cp_success,set_cp_success] = useState(false);
    const [cp_s_top,set_cp_s_top] = useState(-10);

    const [reset_token,set_reset_token] = useState("");
    const [new_password,set_new_password] = useState("");
    const [confirm_new_password,set_confirm_new_password] = useState("");

    const [loading,set_loading] = useState(false);

    const [success,set_success]=useState(false);
    const [success_message,set_success_message]=useState("");
    const [fail,set_fail]=useState(false);
    const [fail_message,set_fail_message]=useState("");

    const navigate = useNavigate()

    async function login(){
        set_loading(true);
        console.log(email)
        console.log(password)
        await fetch(log_data,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email: email.toString(),
                password: password.toString()
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                navigate("/")
                console.log("login successful: ",data);
                localStorage.setItem("token",data.data.access_token);
                localStorage.setItem("name",data.data.name);
                localStorage.setItem("username",data.data.username);
                localStorage.setItem("email",data.data.email);
                localStorage.setItem("email_verified_at",data.data.email_verified_at);
                localStorage.setItem("uuid",data.data.uuid);
            }else{
                set_loading(false);
                console.log("Could not login: ",data);
                // set_login_text(data.message);
                // set_login_error(true);
                // set_login_top(0);
                // setTimeout(()=>{
                //     set_login_error(false);
                //     set_login_top(-10);
                // },2000);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
            set_loading(false);
            console.log(`Could not perform fetch: ${err}`)
            //set_login_text("Check your internet connection.");
            // set_login_error(true);
            // set_login_top(0);
            // setTimeout(()=>{
            //     set_login_error(false);
            //     set_login_top(-10);
            // },2000);
            // navigate("/nella");
            set_fail_message("Check your internet connection.");
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },5000);
        });
    }
        async function send_token_email(){
        set_sending_token_email(true);
        set_token_error(false);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/reset-password`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email_address: token_email
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_sending_token_email(false);
                set_show_token_email(false);
                set_c_p(true);
                console.log("Token sent to email address",data);
                //set_cp_success(true);
                // set_cp_s_top(0);
                // setTimeout(()=>{
                //     set_cp_success(false);
                //     set_cp_s_top(-10);
                // },2000);
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },5000);
            }else{
                set_sending_token_email(false);
                console.log("Could not send token to email address, due to:  ",data.message);
                // set_fp_text(data.message);
                // set_cp_error(true);
                // set_cp_top(0);
                // setTimeout(()=>{
                //     set_cp_error(false);
                //     set_cp_top(-10);
                // },2000);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
            set_sending_token_email(false);
            console.log(`Could not perform fetch: ${err}`);
            // set_fp_text("Check your internet connection.");
            // set_cp_error(true);
            // set_cp_top(0);
            // setTimeout(()=>{
            //     set_cp_error(false);
            //     set_cp_top(-10);
            // },2000);
            set_fail_message("Check your internet connection.");
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },5000);
        });
    }

    async function change_password(){
        set_loading(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/reset-password/validate`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email_address: token_email,
                token_to_reset_password: reset_token,
                new_password: new_password,
                new_password_confirmation: confirm_new_password
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true || data.status=="true" || data.status_code==200 || data.message=="Login successful."){
                set_c_p(false);
                set_loading(false);
                console.log("Password change successful: ",data);
                //set_cp_success(true);
                // set_cp_s_top(0);
                // setTimeout(()=>{
                //     set_cp_success(false);
                //     set_cp_s_top(-10);
                // },2000);
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },5000);
            }else{
                set_loading(false);
                console.log("Could not change password due to: ",data.message);
                // set_fp_text(data.message);
                // set_cp_error(true);
                // set_cp_top(0);
                // setTimeout(()=>{
                //     set_cp_error(false);
                //     set_cp_top(-10);
                // },2000);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
            set_loading(false);
            console.log(`Could not perform fetch: ${err}`);
            // set_fp_text("Check your internet connection.");
            // set_cp_error(true);
            // set_cp_top(0);
            // setTimeout(()=>{
            //     set_cp_error(false);
            //     set_cp_top(-10);
            // },2000);
            set_fail_message("Check your internet connection.");
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },5000);
        });
    }
    return (
        <div className="small_main" style={{width:"100%",height:"100%",fontFamily:"l",position:"absolute",top:"0%",left:"0%",color:"rgb(50,50,50)",backgroundColor:"rgb(255,255,255)",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",overflow:"scroll",backgroundColor:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
        <h1></h1><div style={{fontWeight:"bold",width:"90%",fontSize:"28px",marginTop:"20px"}}>Welcome back!</div>
                <div style={{width:"90%",fontSize:"16px",marginTop:"10px"}}>Don't have an account? <Link to={"/signup"} style={{color:"#fd7e14",textDecoration:"none"}}>Sign Up</Link></div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" value={email} onChange={(e)=>{
                        set_email(e.target.value)
                    }} placeholder="Enter Email" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={eye?"text":"password"} value={password} onChange={(e)=>{
                            set_password(e.target.value)
                        }} placeholder="Enter Password" style={{width:"90%"}}/>
                        {eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>}
                    </div>
                </div>
                <div style={{opacity:"1",width:"90%",backgroundColor:"#fd7e14",borderRadius:"10px",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){login()}}}>{loading==false?"Login":"Loading.."}</div>
                <div style={{marginTop:"10px"}}>Forgot Password? <Link style={{color:"orange"}} onClick={()=>{set_show_token_email(true)}}>Recover</Link></div>
                {/* <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){set_c_p(true)}}}>{"Change password"}</div> */}
                <div style={{marginTop:"10px",marginBottom:"10px"}}>Or</div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-between"}}>
                    <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6px",backgroundColor:"rgb(230,230,230)"}}>
                        <FaGoogle/>
                        <div>Google</div>
                    </div>
                    <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"6px",backgroundColor:"rgb(230,230,230)"}}>
                        <FaTwitter/>
                        <div>Twitter</div>
                    </div>
                </div>
            </div>
            {c_p&&
            <div style={{width:"90%",height:"90%",position:"absolute",backgroundColor:"white",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"start",flexDirection:"column",overflow:"scroll"}}>
                <div style={{position:"absolute",right:"1%",top:"0%"}} onClick={()=>{set_c_p(false)}}><FaCircleXmark size={22}/></div>
                <div>CHANGE PASSWORD</div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" value={token_email} onChange={(e)=>{
                        set_token_email(e.target.value)
                    }} placeholder="email@example.com" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Enter token</div>
                    <input type="email" value={reset_token} onChange={(e)=>{
                        set_reset_token(e.target.value)
                    }} placeholder="Enter Password Reset Token" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>New Password</div>
                    <input type="text" value={new_password} onChange={(e)=>{
                        set_new_password(e.target.value)
                    }} placeholder="Enter new password" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Confirm New Password</div>
                    <input type="text" value={confirm_new_password} onChange={(e)=>{
                        set_confirm_new_password(e.target.value)
                    }} placeholder="Confirm new password" style={{width:"100%"}}/>
                </div>

                <div style={{width:"90%",backgroundColor:"orange",borderRadius:"10px",color:"white",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",cursor:"pointer"}} onClick={()=>{if(loading==false){change_password()}}}>{loading==false?"Change password":"Loading.."}</div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${cp_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    FAILED TO CHANGE PASSWORD
                </div>
                
            </div>}
            {show_token_email==true&&
            <div style={{width:"100%",height:"100%",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",top:"0%",left:"0%",backgroundColor:"rgba(0,0,0,0.9)"}}>
                <div style={{width:"80%",height:"30%",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgba(255,255,255,1)",borderRadius:"10px"}}>
                    <div style={{width:"90%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <div style={{width:"90%"}}>Email Address</div>
                        <input type="email" value={token_email} onChange={(e)=>{
                            set_token_email(e.target.value)
                        }} placeholder="email@example.com" style={{width:"90%"}}/>
                    </div>
                    {/* <div style={{position:"absolute",right:"1%",top:"0%"}} onClick={()=>{set_show_token_email(false)}}><FaCircleXmark size={30}/></div> */}
                </div>
                <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"45%",backgroundColor:"rgb(200,200,200)",borderRadius:"10px",color:"white",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",cursor:"pointer"}} onClick={()=>{
                        set_show_token_email(false);
                    }
                        }>Cancel</div>
                    <div style={{width:"45%",backgroundColor:"orange",borderRadius:"10px",color:"white",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",cursor:"pointer"}} onClick={async()=>{if(sending_token_email==false){await send_token_email()}}}>{sending_token_email==false?"Send Token":`sending token to ${token_email}..`}</div>
                
                </div>
                  <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${token_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    {/*FAILED TO SEND TOKEN*/} {fp_text}
                </div>
            </div>}
            
            {success&&
            <div style={{position:"fixed",backgroundColor:"orange",color:"white",top:"10%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <FaCheckCircle size={30}/> {success_message}
                </div>
            </div>
            }
            {fail&&
            <div style={{position:"fixed",backgroundColor:"red",color:"white",top:"10%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <FaExclamationCircle size={30}/> {fail_message} 
                </div>
            </div>
            }
        </div>
    );
}

export default Small_login;