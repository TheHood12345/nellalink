import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaEye, FaEyeSlash, FaGoogle, FaTwitter } from "react-icons/fa";
import { data, Link, useNavigate } from "react-router-dom";

function Small_signup(){
    const log_data = `${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/register`
    const [eye,set_eye] = useState(false);
    const [c_eye,set_c_eye] = useState(false);

    const [name,set_name] = useState("");
    const [username,set_username] = useState("");
    const [email,set_email] = useState("");
    const [password,set_password] = useState("");
    const [confirm_password,set_confirm_password] = useState("");

    const [loading,set_loading] = useState(false);
    const navigate = useNavigate();

    const [register_error,set_register_error] = useState(false);
    const [register_top,set_register_top] = useState(-10);

    const [create_text,set_create_text] = useState("Operation Failed");

    const [success,set_success]=useState(false);
    const [success_message,set_success_message]=useState("");
    const [fail,set_fail]=useState(false);
    const [fail_message,set_fail_message]=useState("");

      async function register(){
        set_loading(true);
        
         await fetch(log_data,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email: email,
                password: password,
                username:username,
                name:name,
                referred_by:"string",
                extra_data: ["string"],
                password_confirmation: confirm_password,
                meta_data: [
                    {
                        meta_key: "string",
                        meta_value:"string",
                        extra_data:["string"]
                    }
                ]
            })
         }).then((res)=>res.json()).then((data)=>{
            set_loading(false);
            if(data.status==true){
                console.log("Successfully registered: ",data);
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                    navigate("/login");
                },2000);
            }else{
                console.log("Could not register: ",data);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
                
            }
        }).catch((err)=>{
            set_loading(false);
            console.log(`nope: ${err}`);
            set_fail_message("Check your internet connection.");
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },5000);
        });
    }

    return (
        <div className="small_main" style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",overflow:"scroll",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                <div style={{fontWeight:"bold",fontSize:"30px",color:"black",fontWeight:"bolder",marginTop:"20px"}}>REGISTER</div>
                <div style={{fontSize:"20px",marginTop:"10px"}}>Already have an account? <Link to={"/login"} style={{color:"#fd7e14"}}>Login</Link></div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>User Name</div>
                    <input type="text" required value={username} onChange={(e)=>{
                        set_username(e.target.value)
                    }} placeholder="Enter User Name" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Name</div>
                    <input type="text" required value={name} onChange={(e)=>{
                        set_name(e.target.value)
                    }} placeholder="Enter Name" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Email Address</div>
                    <input type="email" required value={email} onChange={(e)=>{
                        set_email(e.target.value)
                    }} placeholder="email@example.com" style={{width:"100%"}}/>
                </div>
                <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={eye?"text":"password"} required value={password} onChange={(e)=>{
                            set_password(e.target.value)
                        }} placeholder="*****" style={{width:"90%"}}/>
                        {eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_eye(!eye);
                        }}/>}
                    </div>
                </div>
                <div style={{width:"90%",marginBottom:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                    <div>Confirm Password</div>
                    <div style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <input type={c_eye?"text":"password"} required value={confirm_password} onChange={(e)=>{
                            set_confirm_password(e.target.value)
                        }} placeholder="*****" style={{width:"90%"}}/>
                        {c_eye==true?<FaEyeSlash size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_c_eye(!c_eye);
                        }}/>:<FaEye size={23} style={{cursor:"pointer"}} onClick={()=>{
                            set_c_eye(!c_eye);
                        }}/>}
                    </div>
                </div>
                <div style={{width:"90%",backgroundColor:"#fd7e14",borderRadius:"10px",color:"white",paddingTop:"20px",paddingBottom:"20px",marginBottom:"20px",textAlign:"center",cursor:"pointer"}} onClick={async()=>{if(loading==false){await register()}}}>{loading==false?"Create Account":"loading.."}</div>
                
            </div>
            <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${register_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    {/*FAILED TO CREATE ACCOUNT*/} {create_text}
            </div>
            {success&&
            <div style={{position:"fixed",backgroundColor:"rgba(0,0,0,0.6)",color:"white",top:"0%",right:"0%",width:"100%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
            <div style={{backgroundColor:"orange",color:"white",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <FaCheckCircle size={30}/> {success_message}
                </div>
            </div>
            </div>
            }
            {fail&&
            <div style={{position:"fixed",backgroundColor:"red",color:"white",top:"0%",left:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <FaExclamationCircle size={30}/> {fail_message} 
                </div>
            </div>
            }
        </div>
    );
}

export default Small_signup;