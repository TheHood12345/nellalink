import { useEffect, useState } from "react";
import { FaHome, FaBusinessTime, FaBookOpen, FaOutdent, FaBell, FaList, FaOpencart, FaListOl, FaArrowUp, FaArrowDown, FaCalendar, FaUserCircle, FaTable, FaExclamationCircle } from "react-icons/fa";
import { FaBoltLightning, FaCertificate, FaCircleXmark, FaComputer, FaFileLines, FaGear, FaI, FaMessage, FaPeopleGroup, FaPerson, FaRegBell, FaRightToBracket } from "react-icons/fa6";
// import Business from "./small_screen/nella_content/business/business";
// import Home from "./small_screen/nella_content/home/home";
// import Menu from "./small_screen/nella_content/menu/menu";
import { Outlet, useNavigate,Link,useSearchParams } from "react-router-dom";
import Business from "./large_screen/businesses";
import Dashboard from "./large_screen/dashboard";

function Large_nella(){

    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const [q,set_q] = useState(1);
    const [logout,set_logout] = useState(false);
    const token = localStorage.getItem("token");
    const [drawer1,set_drawer1] = useState(false);
    const [show_verify_anim,set_show_verify_anim] = useState(true);

    const [show_v1,set_show_v1] = useState(false);
    const [show_c1,set_show_c1] = useState(false);

    const [c_token,set_c_token] = useState("");

    const navigate = useNavigate();

    const [fail,set_fail] = useState(false);
    const [fail_message,set_fail_message] = useState(false);

    const [loading_token,set_loading_token] = useState(false);
    const [v_top,set_v_top] = useState(-10);
    const [v_error,set_v_error] = useState(false);5


    const [loading_ve,set_loading_ve] = useState(false);
    const [ve_top,set_ve_top] = useState(-10);
    const [ve_s_top,set_ve_s_top] = useState(-10);

    const [loading_ps_token,set_loading_ps_token] = useState(false);

    const [change_tok,set_change_tok] = useState("");
    const [old_ps,set_old_ps] = useState("");
    const [new_ps,set_new_ps] = useState("");
    const [new_ps_confirm,set_new_ps_confirm] = useState("");
    const [change_loading,set_change_loading] = useState(false);
    const [change_err,set_change_err] = useState(false);

    const [verify_email_text_top,set_verify_email_text_top] = useState(-10);

    const [v_text,set_v_text] = useState("Kindly verify your email");

    const [cp_text,set_cp_text] = useState("Operation Failed");
    const [ver_text,set_ver_text] = useState("Operation Failed");

    const [col1,set_col1]=useState(false);
    const [col2,set_col2]=useState(false);
    const [col3,set_col3]=useState(false);

    const [icon,set_icon]=useState(false);
    
    const [query]=useSearchParams();

    useEffect(()=>{
        if(query.get("q")=="create"){
            set_q(2);
        }else if(query.get("q")=="create_menu"){
            set_q(3);
        }
    },[query]);




    // useEffect(()=>{
    //       if(!token){
    //         navigate("/login",{replace:true});
    //         localStorage.removeItem("token");
    //         localStorage.removeItem("name");
    //         localStorage.removeItem("username");
    //         localStorage.removeItem("email");
    //         localStorage.removeItem("email_verified_at");
    //     } 
    // },[]);

    async function send_token_email_v(){
        set_loading_token(true);
        //set_token_error(false);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/verify-email-address`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email")
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_loading_token(false);
                set_drawer1(0);
                set_show_v1(true);
                console.log("Token sent to email address",data);
            }else{
                set_loading_token(false);
                console.log("Could not send token to email addres, due to:  ",data.message);
                set_ver_text(data.message);
                set_v_top(0);
                setTimeout(()=>{
                    set_v_top(-10);
                },2000);
            }
        }).catch((err)=>{
            set_loading_token(false);
            console.log(`Could not perform fetch: ${err}`);
            set_ver_text("Check your internet connection");
            set_v_top(0);
                setTimeout(()=>{
                    set_v_top(-10);
            },2000);
        });
    }

    
    async function ve(){
        set_loading_ve(true);
        //set_token_error(false);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/verify-email-address/validate`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email"),
                token_to_verify_email_address: c_token
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_loading_ve(false);
                set_show_v1(false);
                localStorage.setItem("email_verified_at", "verified");
                set_v_text("SUCCESSFULLY VERIFIED");
                //console.log("Token sent to email address",data);
                set_ve_s_top(0);
                setTimeout(()=>{
                    set_ve_s_top(-10);
                },2000);
            }else{
                set_loading_ve(false);
                //console.log("Could not send token to email addres, due to:  ",data.message);
                set_ver_text(data.message);
                set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
                },2000);
            }
        }).catch((err)=>{
            set_loading_ve(false);
            //console.log(`Could not perform fetch: ${err}`)
            set_ver_text("Check your internet connection");
            set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
            },2000);
        });
    }

        async function send_ps_token(){
        set_loading_ps_token(true);
        //set_token_error(false);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/change-password`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email")
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_loading_ps_token(false);
                set_drawer1(0);
                set_show_c1(true);
                console.log("Token sent to email address",data);
            }else{
                set_loading_ps_token(false);
                console.log("Could not send token to email addres, due to:  ",data.message);
                set_cp_text(data.message);
                set_v_top(0);
                set_change_err(true);
                setTimeout(()=>{
                    set_v_top(-10);
                    set_change_err(false);
                },2000);
            }
        }).catch((err)=>{
            set_loading_ps_token(false);
            console.log(`Could not perform fetch: ${err}`);
            set_cp_text("Check your internet connection");
            set_change_err(true);
            set_v_top(0);
                setTimeout(()=>{
                    set_v_top(-10);
                    set_change_err(false);
            },2000);
        });
    }
        
    async function change_password(){
        set_change_loading(true);
        //set_token_error(false);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/change-password/validate`,{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
            body: JSON.stringify({
                email_address: localStorage.getItem("email"),
                token_to_change_password: change_tok,
                old_password: old_ps,
                new_password: new_ps,
                new_password_confirmation: new_ps_confirm
            })
        }).then((res)=>res.json()).then((data)=>{
            if(data.status==true){
                set_change_loading(false);
                set_show_v1(false);
                set_show_c1(false);
                //console.log("Token sent to email address",data);
                set_ve_s_top(0);
                setTimeout(()=>{
                    set_ve_s_top(-10);
                },2000);
            }else{
                set_change_loading(false);
                //console.log("Could not send token to email addres, due to:  ",data.message);
                set_cp_text(data.message);
                set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
                },2000);
            }
        }).catch((err)=>{
            set_change_loading(false);
            //console.log(`Could not perform fetch: ${err}`)
            set_cp_text("Check your internet connection");
            set_ve_top(0);
                setTimeout(()=>{
                    set_ve_top(-10);
            },2000);
        });
    }

    return (
        <div className="large_main" style={{width:"100%",height:"100%",flexDirection:"row",position:"relative",backgroundColor:"rgb(255,255,255)",alignItems:"center",justifyContent:"space-between"}}>
            {/* --------------------- */}
            <div style={{width:"20%",height:"100%",backgroundColor:"rgb(220,220,220)",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%",height:"80%",backgroundColor:"rgb(200,208,215)",display:"flex",flexDirection:"column",alignItems:"center",overflowY:"scroll"}}>
                    <h1 style={{color:"black",fontFamily:"poppins-bold"}}>Nellalink</h1>
                    <h1 style={{marginTop:"0px",color:"black",fontFamily:"poppins-bold"}}>SBS</h1>
                    <Link className="view_large" to={"/home"} style={{backgroundColor:q==1?"white":"transparent",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",width:"80%",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",alignSelf:"flex-end",marginTop:"20px"}} onClick={()=>{
                    
                    set_q(1);
                }}>
                    <FaHome color={q==1? "black": "gray"} size={25} style={{width:"30%"}}/>
                    <div style={{color:q==1? "black": "gray",width:"70%",fontSize:"12px"}}>Dashboard</div>
                </Link>
                
                <Link to={
                    localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")== "" || localStorage.getItem("email_verified_at")=="null"?
                    "/home":"/business"} style={{backgroundColor:q==2?"white":"transparent",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",width:"80%",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",border:"0px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginTop:"20px"}} onClick={()=>{
                    if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                        set_fail_message("Kindly verify your email to access this feature");
                        set_fail(true);
                        setTimeout(()=>{
                            set_fail(false);
                        },5000);
                    }else{
                      set_q(2);  
                    }
                    
                }}>
                    <FaBusinessTime color={q==2? "black": "gray"} style={{width:"30%"}} size={20}/>
                    <div style={{color:q==2? "black": "gray",width:"70%",fontSize:"12px"}}>Businesses</div>
                </Link>
                <Link to={
                    localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")== "" || localStorage.getItem("email_verified_at")=="null"?
                    "/home":"/menu"} style={{backgroundColor:q==3?"white":"transparent",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",width:"80%",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",border:"0px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginTop:"20px"}} onClick={()=>{
                    if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                        set_fail_message("Kindly verify your email to access this feature");
                        set_fail(true);
                        setTimeout(()=>{
                            set_fail(false);
                        },5000);
                    }else{
                        set_q(3);
                    }
                    
                }}>
                    <FaBookOpen color={q==3? "black": "gray"} style={{width:"30%"}} size={20}/>
                    <div style={{color:q==3? "black": "gray",width:"70%",fontSize:"12px"}}>QR Menu/Price List</div>
                </Link>
                <Link to="/?notification=true" style={{backgroundColor:false?"white":"transparent",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",width:"80%",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",border:"0px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginTop:"20px"}} onClick={()=>{
                    //if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                        // set_verify_email_text_top(0);
                        // setTimeout(()=>{
                        //     set_verify_email_text_top(-10);
                        // },2000);
                    //}else{
                       // set_q(3);
                   // }
                    
                }}>
                    <FaBell color={"gray"} style={{width:"30%"}} size={20}/>
                    <div style={{color:"gray",width:"70%",fontSize:"12px"}}>Notifications</div>
                </Link>
                <Link style={{backgroundColor:false?"white":"transparent",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",width:"80%",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",border:"0px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginTop:"20px"}} onClick={()=>{
                    // if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                    //     set_verify_email_text_top(0);
                    //     setTimeout(()=>{
                    //         set_verify_email_text_top(-10);
                    //     },2000);
                    // }else{
                    //     set_q(3);
                    // }
                    
                }}>
                    <FaTable color={"gray"} style={{width:"30%"}} size={20}/>
                    <div style={{color:"gray",width:"70%",fontSize:"12px"}}>Analytics</div>
                </Link>
                <Link to="/profile" style={{backgroundColor:false?"white":"transparent",borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",width:"80%",textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",border:"0px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",marginTop:"20px"}} onClick={()=>{
                    // if(localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""){
                    //     set_verify_email_text_top(0);
                    //     setTimeout(()=>{
                    //         set_verify_email_text_top(-10);
                    //     },2000);
                    // }else{
                    //     set_q(3);
                    // }
                    
                }}>
                    <FaGear color={"gray"} style={{width:"30%"}} size={20}/>
                    <div style={{color:"gray",width:"70%",fontSize:"12px"}}>Settings</div>
                </Link>
                </div>
                <div style={{width:"100%",height:"20%",backgroundColor:"rgb(50,50,50)",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",alignSelf:"flex-end",overflow:"scroll"}}>
                    <div style={{width:"30%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <img src="/35.png" alt="" style={{width:"80%",aspectRatio:"1/1",borderRadius:"100px"}}/>
                    </div>
                    <div style={{width:"70%",fontSize:"12px",userSelect:"all"}}>
                        <div>{localStorage.getItem("name")}</div>
                        <div>Merchant ID: {localStorage.getItem("uuid")}</div>
                    </div>

                </div>

            </div>

            {/* ------------------------- */}
            <div style={{width:"80%",fontSize:"10px",height:"100%",flexDirection:"column",position:"relative",backgroundColor:"rgb(252,254,255)",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{width:"100%",height:"15%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"60%",height:"100%",fontWeight:"bold",display:"flex",flexDirection:"Column",alignItems:"start",justifyContent:"center",fontWeight:"bold"}}>
                        <div style={{fontSize:"14px",fontFamily:"poppins-bold"}}>{q==1?"Dashboard":q==2?"Businesses":q==3?"QR Menu & Pricing":"Dashboard"}</div>
                        {
                         //   localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                        //  
                       // null
                       // :
                         //  <div style={{display:"flex",fontSize:"20px",color:"rgb(70,70,70)",alignItems:"center",justifyContent:"center"}}><FaCertificate size={24} color={"gray"}/> VERIFIED</div>
                        }
                    </div>
                    
                    
                </div>
                
            </div>
            {/* {
            q == 1?<Dashboard/>:q==3?<Business prop_set_q={set_q}/>:q==4?<Business/>:null
            } */}
            {/* <div style={{width:"100%",height:"80%",boxShadow:"0px 3px 3px red",backgroundColor:"blue",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}> */}
            <Outlet/>
            {/* </div> */}
            {
                logout&&
                <div style={{width:"100%",height:"100%",fontSize:"16px",position:"absolute",top:"0%",left:"0%",backgroundColor:"rgba(0,0,0,0.6)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"70%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"white",opacity:"1",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
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
                        {/* <div style={{width:"70%",height:"100px",backgroundColor:"red",transform:"rotateX(120deg)",perspective:"200px"}}>stuff</div> */}
                    </div>
                </div>
            }

            <div style={{width:"100%",backgroundColor:"rgba(18,22,28,0.4)",height:drawer1==false?"0%":"90%",position:"absolute",top:"10%",right:"0",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"flex-start",overflow:"hidden"}}>
                
                <div style={{width:"100%",height:"40%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"start",fontSize:"12px",justifyContent:"end"}}>
                    <div style={{width:"50%",height:"100%",backgroundColor:"rgba(0,0,0,0.9)"}} onClick={()=>{
                        set_drawer1(false);
                    }}></div>
                    <div style={{width:"50%",height:"100%",overflow:"scroll",display:"flex",flexDirection:"column",alignItems:"start",fontSize:"12px",justifyContent:"space-evenly",backgroundColor:"rgba(0,0,0,0.9)"}}>
                    {/* <div style={{height:"10%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",fontSize:"12px"}}>HELLO, {localStorage.getItem("name").toUpperCase()}</div> */}
                    <div style={{height:"80%",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly",overflow:"scroll"}}>
                        {localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")== "" || localStorage.getItem("email_verified_at")=="null"?
                            <div style={{width:"90%",cursor:"pointer",paddingTop:"12px",paddingBottom:"12px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"1px 1px 3px gray inset,-1px -2px 2px gray inset",backgroundColor:"white"}} onClick={async()=>{
                            if(loading_token==false){
                            await send_token_email_v();
                            }
                        }}>
                            <div>{loading_token==false?"Verify email":"Sending Token..."}</div>
                        </div>:
                        null
                        }
                        <div style={{width:"90%",cursor:"pointer",paddingTop:"12px",paddingBottom:"12px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"1px 1px 3px gray inset,-1px -2px 2px gray inset",backgroundColor:"white"}} onClick={async()=>{
                            if(loading_ps_token==false){
                            await send_ps_token();
                            }
                        }}>
                            <div>{loading_ps_token==false?"Change Password":"Sending Token..."}</div>
                        </div>
                    </div>
                    {/* <div style={{height:"10%",width:"100%",backgroundColor:"rgba(255,0,0,1)",color:"white",textAlign:"center",fontSize:"12px",display:"flex",alignItems:"center",justifyContent:"center"}} onClick={()=>{
                        set_drawer1(false);
                        set_logout(true);
                    }}>SIGN OUT</div> */}
                    </div>
                </div>
                <div style={{width:"100%",height:"60%",backgroundColor:"rgba(0,0,0,0.9)"}} onClick={()=>{
                    set_drawer1(false);
                }}></div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${v_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    {cp_text}
                </div>
            </div>

            {show_v1&&
            <div style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(0,0,0,0.9)",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"80%",height:"60%",position:"absolute",backgroundColor:"transparent",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{position:"relative",width:"80%",height:"30%",backgroundColor:"rgba(255,255,255,1)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter Token</div>
                            <input type="number" value={c_token} onChange={(e)=>{
                                set_c_token(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            <div style={{position:"absolute",right:"2%",top:"2%",cursor:"pointer"}} onClick={()=>{
                                set_show_v1(false);
                            }}><FaCircleXmark size={23}/></div>
                        </div>
                        
                    </div>
                    <div style={{width:"80%",marginTop:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"orange",color:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={async()=>{
                        if(loading_ve==false){
                            await ve();
                        }
                        
                    }}>{loading_ve==false?"VERIFY":"Loading..."}</div>
                </div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${ve_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    {/*OPERATION FAILED*/} {ver_text}
                </div>
            </div>
            }
            {show_c1&&
            <div style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(0,0,0,0.9)",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",position:"relative",backgroundColor:"transparent",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"100%",height:"100%",backgroundColor:"rgba(255,255,255,1)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter Token</div>
                            <input type="number" value={change_tok} onChange={(e)=>{
                                set_change_tok(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter Old Password</div>
                            <input type="text" value={old_ps} onChange={(e)=>{
                                set_old_ps(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Enter New Password</div>
                            <input type="text" value={new_ps} onChange={(e)=>{
                                set_new_ps(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"90%",marginTop:"20px",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div>Confirm New Password</div>
                            <input type="text" value={new_ps_confirm} onChange={(e)=>{
                                set_new_ps_confirm(e.target.value)
                            }} placeholder="******" style={{width:"100%",paddingTop:"10px",paddingBottom:"10px"}}/>
                            
                        </div>

                        <div style={{width:"80%",cursor:"pointer",marginTop:"20px",marginBottom:"20px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"orange",color:"white",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={async()=>{
                        if(change_loading==false){
                            await change_password();
                        }
                        
                    }}>{change_loading==false?"Change Password":"Loading..."}</div>

                    <div style={{position:"absolute",right:"2%",top:"2%",cursor:"pointer"}} onClick={()=>{
                                set_show_c1(false);
                            }}><FaCircleXmark size={23}/></div>
                        
                    </div>
                    
                </div>
                <div style={{position:"absolute",backgroundColor:"red",color:"honeydew",top:`${ve_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center"}}>
                    {cp_text}
                </div>
            </div>
            }
            {fail&&
                <div style={{position:"absolute",backgroundColor:"red",color:"white",top:"15%",left:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                    <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <FaExclamationCircle size={30}/> {fail_message} 
                    </div>
                </div>
            }
            </div>
        </div>
    );
}

export default Large_nella;
