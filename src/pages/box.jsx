import Large_nella from "./large_nella";
import Small_nella from "./small_nella";
import OneSignal from "react-onesignal";
import { useEffect, useRef, useState } from "react";
import { Bell, CheckCircle2, Copy, IdCard, LockKeyhole, Send, Verified } from "lucide-react";
import { FaAngleDown, FaAngleUp, FaBell, FaCaretDown, FaCaretUp, FaCertificate, FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaLock, FaRegBell } from "react-icons/fa";
import { FaCircleXmark, FaRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { BsFillArrowLeftCircleFill, BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

function Box(){

    const navigate = useNavigate();
    const [logout,set_logout] = useState();
    const [notif,set_notif] = useState();
    const [prof,set_prof] = useState();
    const [cp,set_cp] = useState(false);
    const [send_token_cp_text,set_send_token_cp_text] = useState("Send Token");
    const [ver,set_ver] = useState(false);
    const [send_token_text,set_send_token_text] = useState("Send Token");
    const [ver1,set_ver1] = useState(false);
    const [cp1,set_cp1] = useState(false);

    const [cp_tok,set_cp_tok] = useState("");
    const [old_ps,set_old_ps] = useState("");
    const [new_ps,set_new_ps] = useState("");
    const [new_ps_confirm,set_new_ps_confirm] = useState("");
    const [change_loading,set_change_loading] = useState(false);

    const [ver_tok,set_ver_tok] = useState("");

    const [cp_loading,set_cp_loading] = useState(false);
    const [cp1_loading,set_cp1_loading] = useState(false);
    const [ver_loading,set_ver_loading] = useState(false);
    const [ver1_loading,set_ver1_loading] = useState(false);

    const [success,set_success] = useState(false);
    const [fail,set_fail] = useState(false);
    const [success_message,set_success_message] = useState("");
    const [fail_message,set_fail_message] = useState("");

    const screen2_ref = useRef(null);

    const [notif_num,set_notif_num] = useState(0);
    const [notif_items,set_notif_items] = useState([]);

    async function make_cp(){
        set_cp_loading(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/change-password`,{
            method: "post",
            body:JSON.stringify({
                email_address: localStorage.getItem("email")
            }),
            headers: {
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_cp_loading(false);
            set_send_token_cp_text("Resend Token");
            if(data.status==true){
                console.log("Token sent to email address",data);
                set_cp1(true);
                screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight;
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },5000);
            }else{
                console.log("Could not send token to email addres, due to:  ",data.message);
                set_send_token_cp_text("Resend Token");
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
                set_cp_loading(false);
                set_send_token_cp_text("Resend Token");
                console.log(`Could not perform fetch: ${err}`);
                set_send_token_cp_text("Resend Token");
                set_fail_message("Check your internet connection.");
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
        });
        screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight;
    }

        async function make_cp1(){
        set_cp1_loading(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/change-password/validate`,{
            method: "post",
            body:JSON.stringify({
                email_address: localStorage.getItem("email"),
                token_to_change_password: cp_tok,
                old_password: old_ps,
                new_password: new_ps,
                new_password_confirmation: new_ps_confirm
            }),
            headers: {
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_cp1_loading(false);
            if(data.status==true){
                console.log("Token sent to email address",data);
                set_cp(false);
                set_cp1(false);
                // screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight * 2;
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },5000);
            }else{
                console.log("Could not send token to email addres, due to:  ",data.message);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
                set_cp1_loading(false);
                console.log(`Could not perform fetch: ${err}`);
                set_fail_message("Check your internet connection.");
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
        });
    }

        async function make_ver(){
        set_ver_loading(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/verify-email-address`,{
            method: "post",
            body:JSON.stringify({
                email_address: localStorage.getItem("email")
            }),
            headers: {
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_ver_loading(false);
            set_send_token_text("Resend Token");
            if(data.status==true){
                console.log("Token sent to email address",data);
                set_ver1(true);
                screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight;
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },5000);
            }else{
                console.log("Could not send token to email address, due to:  ",data.message);
                set_send_token_text("Resend Token");
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
                set_ver_loading(false);
                set_send_token_text("Resend Token");
                console.log(`Could not perform fetch: ${err}`);
                set_send_token_ver_text("Resend Token");
                set_fail_message("Check your internet connection.");
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
        });
        screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight;
    }

        async function make_ver1(){
        set_ver1_loading(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/verify-email-address/validate`,{
            method: "post",
            body:JSON.stringify({
                email_address: localStorage.getItem("email"),
                token_to_verify_email_address: ver_tok
            }),
            headers: {
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_ver1_loading(false);
            if(data.status==true){
                console.log("Token sent to email address",data);
                localStorage.setItem("email_verified_at",Date.now().toString());
                set_ver(false);
                set_ver1(false);
                // screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight * 2;
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },5000);
            }else{
                console.log("Could not send token to email address, due to:  ",data.message);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
            }
        }).catch((err)=>{
                set_ver1_loading(false);
                console.log(`Could not perform fetch: ${err}`);
                set_fail_message("Check your internet connection.");
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
        });
    }

    useEffect(()=>{
        async function init(){
            await OneSignal.init({
                appId: import.meta.env.VITE_ONESIGNAL_APP_ID,
                allowLocalhostAsSecureOrigin: true
            }).then((res)=>{
                console.log("OneSignal initialized: ",res);
            }).catch((err)=>{
                console.log("OneSignal failed to initialize:    ",err);
            });
            await OneSignal.Notifications.requestPermission().then((res)=>{
                console.log("OneSignal requested permission successfully: ",res);
            }).catch((err)=>{
                console.log("OneSignal failed to request permission:    ",err)
            });

            OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event)=>{
                event.preventDefault();
                set_notif_num((num)=>num+=1);
                set_notif_items(prev => [{name:"name",uuid:"uuid"},...prev]);
                console.log("New Notification:  ",JSON.stringify(event.notification));
                alert("New notification:    ",JSON.stringify(event.notification));
                event.notification.display();
            })
        }
        init();
    },[]);

    return (
        <div className="box">
            <Small_nella/>
            <Large_nella/>
            {
                <div id="note_main" style={{position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{display:"flex",fontSize:"12px",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                        <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                            set_prof(true);
                        }}>
                            <img src="/35.png" alt="" style={{width:"70%",aspectRatio:"1/1",borderRadius:"100px",backgroundColor:"rgb(100,100,100)"}}/>
                        </div>
                        <div style={{width:"30%",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                            set_notif(true);
                        }}>
                            <FaRegBell size={30} className={notif_num>0?"alert":null}/>
                            {notif_num>0&&
                            <div style={{position:"absolute",top:"0%",right:"10%"}}>
                                <div style={{color:"white",backgroundColor:"rgba(255,0,0,0.8)",width:"20px",aspectRatio:"1/1",borderRadius:"100px",textAlign:"center",fontWeight:"bolder",fontSize:"7px"}}>{notif_num>0?notif_num:null}</div>
                            </div>
                            }
                        </div>
                        <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                            set_logout(true);
                        }}>
                            <FaRightToBracket size={30}/>
                        </div>
                    </div>

                </div>
            }
            {
                logout&&
                <div style={{width:"100%",height:"100%",fontSize:"16px",position:"absolute",top:"0%",left:"0%",backgroundColor:"rgba(0,0,0,0.6)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"white",opacity:"1",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{fontWeight:"bolder",color:"black",fontSize:"16px"}}>Confirm Logout</div>
                        <div style={{fontSize:"14px",marginTop:"10px",color:"rgb(40,40,40)"}}>Are you sure you want to log out?</div>
                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",opacity:"1",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                            <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"4px",textAlign:"center",cursor:"pointer",color:"rgb(30,30,30)"}} onClick={()=>{
                                set_logout(false);
                            }}>Cancel</div>
                            <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"4px",backgroundColor:"red",color:"white",textAlign:"center",cursor:"pointer"}} onClick={()=>{
                                navigate("/login",{replace: true});
                                localStorage.removeItem("token");
                                localStorage.removeItem("name");
                                localStorage.removeItem("username");
                                localStorage.removeItem("email");
                                localStorage.removeItem("email_verified_at");
                                localStorage.removeItem("uuid");
                            }}>Okay</div>
                        </div>
                    </div>
                </div>
            }
            {notif&&
                <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",backgroundColor:"rgba(0,0,0,0.6)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"100%",height:"100%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div className="screen1_notif" style={{width:"100%",height:"100%",overflow:"scroll",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <div style={{width:"80%",height:"90%",overflow:"scroll",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                <div style={{width:"100%",height:"10%",fontSize:"20px",fontWeight:"bolder",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                    <div style={{cursor:"pointer",width:"20%",paddingTop:"20px",paddingBottom:"20px",display:"flex",alignItems:"center",color:"gray"}} onClick={()=>{
                                        set_notif(false);
                                    }}><BsFillArrowLeftCircleFill size={40}/></div>
                                    <h1>Notifications</h1>
                                </div>
                                {
                                notif_num<=0?
                                <div style={{width:"90%",height:"70%",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                    <FaInfoCircle size={40}/>
                                    <div style={{fontWeight:"bolder",textAlign:"center"}}>No New Notifications</div>
                                </div>
                                :
                                <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
                                {   
                                    notif_items.map((item,index)=>
                                         <div key={index} style={{width:"100%",fontSize:"12px",boxShadow:"0px 0px 10px rgb(220,220,220)",backgroundColor:"rgb(255,255,255)",borderRadius:"10px",marginTop:"40px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                            <div key={index} style={{width:"100%",backgroundColor:"rgb(255,255,255)",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>BUSINESS NAME </div>
                                                    <div style={{width:"60%"}}>{"INDEX "}{index}</div>
                                                </div>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>MENU </div>
                                                    <div style={{width:"60%"}}>{index}</div>
                                                </div>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>Name: </div>
                                                    <div style={{width:"60%"}}>{"INDEX "}{index}</div>
                                                </div>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>UUID: </div>
                                                    <div style={{width:"60%"}}>{index}</div>
                                                </div>
                                            </div>
                                            <div style={{width:"100%",paddingTop:"20px",backgroundColor:"rgb(250,250,250)",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                <div style={{width:"100%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"orange",color:"white",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>ACTION</div>
                                            </div>
                                        </div>
                                    )
                                }
                                </div>
                                }
                            </div>
                        </div>
                        <div className="screen2_notif" style={{width:"100%",height:"100%",backgroundColor:"white",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <div style={{width:"80%",height:"90%",overflow:"scroll",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                <div style={{width:"100%",height:"10%",fontSize:"20px",fontWeight:"bolder",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                    <div style={{cursor:"pointer",width:"20%",paddingTop:"20px",paddingBottom:"20px",display:"flex",alignItems:"center",color:"gray"}} onClick={()=>{
                                        set_notif(false);
                                    }}><BsFillArrowLeftCircleFill size={40}/></div>
                                    <h1>Notifications</h1>
                                </div>
                                
                                
                                { 
                                    notif_num<=0?
                                    <div style={{width:"90%",height:"70%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        <FaInfoCircle size={40}/>
                                        <div style={{fontWeight:"bolder",textAlign:"center"}}>No New Notifications</div>
                                    </div>
                                    :
                                    notif_items.map((item,index)=>
                                        <div key={index} style={{width:"100%",fontSize:"12px",boxShadow:"0px 0px 10px rgb(220,220,220)",backgroundColor:"rgb(255,255,255)",borderRadius:"10px",marginTop:"40px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                            <div key={index} style={{width:"100%",backgroundColor:"rgb(255,255,255)",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>BUSINESS NAME </div>
                                                    <div style={{width:"60%"}}>{"INDEX "}{index}</div>
                                                </div>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>MENU </div>
                                                    <div style={{width:"60%"}}>{index}</div>
                                                </div>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>Name: </div>
                                                    <div style={{width:"60%"}}>{"INDEX "}{index}</div>
                                                </div>
                                                <div key={index} style={{width:"90%",paddingTop:"20px",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                    <div style={{width:"30%",display:"flex",fontWeight:"bold"}}>UUID: </div>
                                                    <div style={{width:"60%"}}>{index}</div>
                                                </div>
                                            </div>
                                            <div style={{width:"100%",paddingTop:"20px",backgroundColor:"rgb(250,250,250)",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                <div style={{width:"100%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"orange",color:"white",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>ACTION</div>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            </div>
                        </div>
                        
                    </div>

                    
                    
                    
                </div>
            }
            {prof&&
                <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                    <div style={{width:"100%",height:"90%",boxShadow:"0px 0px 3px transparent",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"center"}}>
                        

                        {/* -------------------SCREEN 2------------------------- */}
                        <div className="screen2" style={{scrollBehavior:"smooth",backgroundColor:"white",borderRadius:"10px",overflow:"scroll",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <div style={{width:"95%",height:"90%",paddingBottom:"20px",backgroundColor:"transparent",borderRadius:"10px",overflow:"scroll",flexDirection:"column",alignItems:"center"}}>

                                <div style={{width:"100%",height:"10%",fontSize:"20px",fontWeight:"bolder",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                    <div style={{cursor:"pointer",width:"20%",paddingTop:"20px",paddingBottom:"20px",display:"flex",alignItems:"center",color:"gray"}} onClick={()=>{
                                        set_prof(false);
                                    }}><BsFillArrowLeftCircleFill size={40}/></div>
                                    <div style={{width:"80%"}}>PROFILE</div>
                                    
                                </div>

                                <div ref={screen2_ref} style={{width:"100%",height:"90%",fontSize:"20px",fontWeight:"bolder",paddingBottom:"10px",backgroundColor:"rgb(255,255,255)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start",overflow:"scroll",scrollBehavior:"smooth"}}>
                                


                              <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                    <div style={{width:"60%",aspectRatio:"1/1",backgroundColor:"rgb(60,60,60)",color:"white",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontWeight:"bolder",fontSize:"30px"}}>{localStorage.getItem("name")[0]}</div>
                                </div>
                                <div style={{width:"65%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                    <div style={{fontSize:"30px",fontWeight:"bolder"}}>{localStorage.getItem("name")}</div>
                                    <div style={{fontWeight:"bolder",marginTop:"10px"}}>{localStorage.getItem("email")}</div>
                                    <div style={{}}>{localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"6px",backgroundColor:"rgb(240,240,240)",borderRadius:'100px',color:"orangered",fontSize:"12px"}}>
                                        <FaInfoCircle/>
                                        <div>UNVERIFIED</div>
                                    </div>
                                    :
                                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",padding:"4px",borderRadius:'10px',fontSize:"12px",color:"orange",fontWeight:"bolder"}}>
                                        <FaCheckCircle/>
                                        <div>VERIFIED</div>
                                    </div>
                                    }</div>
                                </div>
                                
                              </div>
                              <hr style={{width:"70%",marginTop:"20px"}}/>

                              {/* -----------------------CHANGE PASSWORD------------------- */}
                              <div style={{width:"90%",fontWeight:"bold",fontSize:"14px",cursor:"pointer",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onClick={()=>{
                                    set_cp(!cp);
                                    if(cp==false){
                                        screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight
                                    }
                                    set_cp1(false);
                                    set_ver(false);
                                    set_ver1(false);
                                    set_send_token_cp_text("Send_token");
                                }}>
                                <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                    <LockKeyhole style={{width:"80%",aspectRatio:"1/1",color:"gray",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"30px"}}/>
                                </div>
                                <div style={{width:"65%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                    <div style={{}}>Change password</div>
                                    <div style={{position:"absolute",right:"1%",top:"10%"}}>
                                    {
                                        cp?
                                        <FaAngleDown/>:
                                        <FaAngleUp/>
                                    }
                                    </div>
                                </div>
                              </div>
                              {
                                    cp&&
                                    <div style={{width:"90%",fontSize:"12px",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                        {/* <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                <div style={{width:"70%",aspectRatio:"1/1",backgroundColor:"rgb(18,24,28)",color:"white",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontWeight:"bolder",fontSize:"30px"}}>1</div>
                                            </div>
                                        </div> */}
                                        <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"}}>
                                            <div>A token will be sent to {localStorage.getItem("email")}</div>
                                        </div>
                                        <div style={{width:"70%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer"}} onClick={async()=>{
                                            if(cp_loading==false){
                                                await make_cp().then(()=>{
                                                    screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight;
                                                });
                                            }
                                        }}>
                                            {cp_loading?null:<Send/>}
                                            <div>{cp_loading?"Loading...": send_token_cp_text}</div>
                                        </div>
                                    </div>
                                }
                                {
                                    cp1&&
                                    <div style={{width:"90%",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                                        {/* <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                <div style={{width:"80%",aspectRatio:"1/1",backgroundColor:"rgb(18,24,28)",color:"white",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontWeight:"bolder",fontSize:"30px"}}>2</div>
                                            </div>
                                        </div> */}
                                        <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <FaInfoCircle/>
                                            <div>Fill in details below</div>
                                        </div>
                                        <div style={{width:"70%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"column",alignItems:"start",paddingTop:"20px",paddingBottom:"20px"}}>
                                            <div>Enter Token</div>
                                            <input type="number" value={cp_tok}  style={{width:"100%"}} placeholder="******" onChange={(e)=>{
                                                set_cp_tok(e.target.value);
                                            }}/>
                                        </div>
                                        <div style={{width:"70%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"column",alignItems:"start",paddingTop:"20px",paddingBottom:"20px"}}>
                                            <div>Enter Old Password</div>
                                            <input type="text" value={old_ps} style={{width:"100%"}} placeholder="******" onChange={(e)=>{
                                                set_old_ps(e.target.value);
                                            }}/>
                                        </div>
                                        <div style={{width:"70%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"column",alignItems:"start",paddingTop:"20px",paddingBottom:"20px"}}>
                                            <div>Enter New Password</div>
                                            <input type="text" value={new_ps} style={{width:"100%"}} placeholder="******" onChange={(e)=>{
                                                set_new_ps(e.target.value);
                                            }}/>
                                        </div>
                                        <div style={{width:"70%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"column",alignItems:"start",paddingTop:"20px",paddingBottom:"20px"}}>
                                            <div>Confirm New Password</div>
                                            <input type="text" value={new_ps_confirm} style={{width:"100%"}} placeholder="******" onChange={(e)=>{
                                                set_new_ps_confirm(e.target.value);
                                            }}/>
                                        </div>
                                        
                                        <div style={{width:"70%",fontWeight:"bolder",marginTop:"10px",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer"}} onClick={async()=>{
                                            // set_send_token_text("Resend Token");
                                            // set_ver1(true);
                                            if(cp1_loading==false){
                                                await make_cp1();
                                            }
                                        }}>
                                            
                                            <div>{cp1_loading?"Loading...":"VERIFY"}</div>
                                        </div>
                                    </div>
                                }

                              {/* -----------------------VERIFY------------------------- */}

                              <div style={{width:"90%",cursor:"pointer",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}} onClick={()=>{
                                    if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                                        set_ver(!ver);
                                        set_ver1(false);
                                        set_cp(false);
                                        set_cp1(false);
                                        set_send_token_text("Send_token");
                                    }else{
                                        set_success_message("Email has already been verified");
                                        set_success(true);
                                        setTimeout(()=>{
                                            set_success(false);
                                        },5000);
                                    }
                                }}>
                                <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                    <Verified style={{width:"80%",aspectRatio:"1/1",color:"gray",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"30px"}}/>
                                </div>
                                <div style={{width:"65%",fontWeight:"bold",fontSize:"14px",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                    <div>Verify Email</div>
                                    <div style={{position:"absolute",right:"1%",top:"10%"}}>
                                    {
                                        ver?
                                        <FaAngleDown/>:
                                        <FaAngleUp/>
                                    }
                                    </div>
                                </div>
                              </div>
                              {
                                    ver&&
                                    <div style={{width:"90%",fontSize:"12px",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                        {/* <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                <div style={{width:"80%",aspectRatio:"1/1",backgroundColor:"rgb(18,24,28)",color:"white",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontWeight:"bolder",fontSize:"30px"}}>1</div>
                                            </div>
                                        </div> */}
                                        <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"}}>
                                            <div>A token will be sent to {localStorage.getItem("email")}</div>
                                        </div>
                                        <div style={{width:"70%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer"}} onClick={async()=>{
                                            if(ver_loading==false){
                                                await make_ver().then(()=>{
                                                    screen2_ref.current.scrollTop=screen2_ref.current.scrollHeight;
                                                });
                                            }
                                        }}>
                                            {ver_loading?null:<Send/>}
                                            <div>{ver_loading?"loading...":send_token_text}</div>
                                        </div>
                                    </div>
                                }
                                {
                                    ver1&&
                                    <div style={{width:"90%",fontSize:"12px",display:"flex",flexDirection:"column",alignItems:"center",marginTop:"20px"}}>
                                        {/* <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                <div style={{width:"80%",aspectRatio:"1/1",backgroundColor:"rgb(18,24,28)",color:"white",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontWeight:"bolder",fontSize:"30px"}}>2</div>
                                            </div>
                                        </div> */}
                                        <div style={{width:"30%",borderRadius:"10px",display:"flex",textAlign:"center",fontWeight:"bolder",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                            <FaInfoCircle/>
                                            <div>Enter The Token Below</div>
                                        </div>
                                        <input type="text" value={ver_tok} style={{width:"70%"}} placeholder="******" onChange={(e)=>{
                                            set_ver_tok(e.target.value);
                                        }}/>
                                        <div style={{width:"70%",fontWeight:"bolder",marginTop:"10px",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer"}} onClick={async()=>{
                                            if(ver1_loading==false){
                                                await make_ver1();
                                            }
                                        }}>
                                            
                                            <div>{ver1_loading?"Loading...":"VERIFY"}</div>
                                        </div>
                                    </div>
                                }
                                {/* -------------------ADDITIONAL------------------------------ */}

                                <hr style={{width:"70%",marginTop:"20px"}}/>
                                <div style={{width:"90%",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                    <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        <BsPerson style={{width:"80%",aspectRatio:"1/1",color:"gray",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"30px"}}/>
                                    </div>
                                    
                                    <div style={{width:"65%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                        <div style={{userSelect:"all",fontSize:"12px",width:"80%"}}>{localStorage.getItem("name")}</div>
                                        <div style={{position:"absolute",right:"1%",top:"10%"}}>
                                            <Copy onClick={()=>{
                                                navigator.clipboard.writeText(localStorage.getItem("name")).then(()=>{
                                                    set_success_message("Successfully copied user's name");
                                                    set_success(true);
                                                    setTimeout(()=>{
                                                        set_success(false);
                                                    },5000);
                                                }).catch(()=>{
                                                    set_fail_message("Failed to copy user's name");
                                                    set_fail(true);
                                                    setTimeout(()=>{
                                                        set_fail(false);
                                                    },5000);
                                                });
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                    <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        <MdEmail style={{width:"80%",aspectRatio:"1/1",color:"gray",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"30px"}}/>
                                    </div>
                                    
                                    <div style={{width:"65%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                        <div style={{userSelect:"all",fontSize:"12px",width:"80%"}}>{localStorage.getItem("email")}</div>
                                        <div style={{position:"absolute",right:"1%",top:"10%"}}>
                                            <Copy onClick={()=>{
                                                navigator.clipboard.writeText(localStorage.getItem("email")).then(()=>{
                                                    set_success_message("Successfully copied email address");
                                                    set_success(true);
                                                    setTimeout(()=>{
                                                        set_success(false);
                                                    },5000);
                                                }).catch(()=>{
                                                    set_fail_message("Failed to copy email address");
                                                    set_fail(true);
                                                    setTimeout(()=>{
                                                        set_fail(false);
                                                    },5000);
                                                });
                                            }}/>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                    <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        <IdCard style={{width:"80%",aspectRatio:"1/1",color:"gray",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"30px"}}/>
                                    </div>
                                    
                                    <div style={{width:"65%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                        <div style={{userSelect:"all",fontSize:"12px",width:"80%"}}>{localStorage.getItem("uuid")}</div>
                                        <div style={{position:"absolute",right:"1%",top:"10%"}}>
                                            <Copy onClick={()=>{
                                                navigator.clipboard.writeText(localStorage.getItem("uuid")).then(()=>{
                                                    set_success_message("Successfully copied UUID");
                                                    set_success(true);
                                                    setTimeout(()=>{
                                                        set_success(false);
                                                    },5000);
                                                }).catch(()=>{
                                                    set_fail_message("Failed to copy UUID");
                                                    set_fail(true);
                                                    setTimeout(()=>{
                                                        set_fail(false);
                                                    },5000);
                                                });
                                            }}/>
                                        </div>
                                    </div>
                                </div>

                              </div>
                            </div>
                        </div>
                        
                    </div>

                    {/* <div style={{position:"absolute",top:"0%",left:"1%",paddingTop:"20px",paddingBottom:"20px",display:"flex",alignItems:"center",color:"orange"}} onClick={()=>{
                                        set_prof(false);
                                    }}><BsFillArrowLeftCircleFill size={40}/><div>Exit</div></div> */}

                    
                    
                    </div>
                  
                    
            }

            {success&&
                        <div style={{position:"fixed",backgroundColor:"orange",color:"white",top:"0%",right:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                            <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <FaCheckCircle size={30}/> {success_message}
                            </div>
                        </div>
                        }
                        {fail&&
                        <div style={{position:"fixed",backgroundColor:"red",color:"white",top:"0%",right:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                            <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <FaExclamationCircle size={30}/> {fail_message} 
                            </div>
                        </div>
                        }
        </div>
    )
}

export default Box;