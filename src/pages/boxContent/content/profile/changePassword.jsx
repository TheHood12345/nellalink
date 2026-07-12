import { LockKeyhole, Send } from "lucide-react"
import { useState } from "react";
import { FaArrowLeft, FaEye, FaLock } from "react-icons/fa"
import { useNavigate } from "react-router-dom";

function ChangePassword({set_show_cp,set_success,set_success_message,set_fail,set_fail_message}){

    const navigate = useNavigate();

    const [cp_loading,set_cp_loading] = useState(false);
    const [send_token_cp_text,set_send_token_cp_text] = useState("Send Token")

    const [cp1_loading,set_cp1_loading] = useState(false);
    const [cp_tok,set_cp_tok] = useState("");
    const [old_ps,set_old_ps] = useState("");
    const [new_ps,set_new_ps] = useState("");
    const [new_ps_confirm,set_new_ps_confirm] = useState("");

        async function send_token(){
        set_cp_loading(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/change-password`,{
            method: "post",
            body:JSON.stringify({
                email_address: localStorage.getItem("email")
            }),
            headers: {
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_cp_loading(false);
            set_send_token_cp_text("Resend Token");
            if(data.status==true){
                console.log("Token sent to email address",data);
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
                set_fail_message("Check your internet connection.");
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },5000);
        });
    }

        async function make_change(){
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
                "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_cp1_loading(false);
            if(data.status==true){
                console.log("Token sent to email address",data);
                set_show_cp(false);
                navigate("/profile");
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

    return(
    <div style={{width:"100%",height:"100%",top:"0%",left:"0%",position:"absolute",backgroundColor:"white",display:"flex",fontSize:"14px",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:"60%",marginTop:"0px",color:"rgb(30,30,30)",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"start"}}>
            <FaArrowLeft style={{cursor:"pointer"}} onClick={()=>{
                set_show_cp(false);
                navigate("/profile");
            }}/><div style={{marginLeft:"10px"}}>Change Password</div>
        </div>
        <div style={{width:"60%",height:"80%",backgroundColor:"white",boxShadow:"0px 10px 17px rgb(220,220,220)",display:"flex",fontSize:"12px",borderRadius:"10px",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
        {/* <div style={{width:"80%",marginTop:"40px",color:"rgb(30,30,30)",fontSize:"16px",display:"flex",alignItems:"center",justifyContent:"start"}}>
            <FaArrowLeft style={{cursor:"pointer"}} onClick={()=>{
                //set_show_cp(false);
                navigate("/profile");
            }}/><div style={{marginLeft:"10px"}}>Change Password</div>
        </div> */}
        <div style={{width:"80%",display:"flex",marginTop:"20px",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%"}}>ENTER OLD PASSWORD</div>
                <div style={{width:"100%",display:"flex",border:"1px solid rgb(240,240,240)",borderRadius:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <FaLock/>
                        <input type="text" value={old_ps} style={{width:"80%",border:"0px"}} onChange={(e)=>{
                            set_old_ps(e.target.value);
                        }}/>
                        <FaEye/>
                    </div>
                </div>
            </div>
        </div>
        <div style={{width:"80%",display:"flex",marginTop:"20px",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%"}}>ENTER NEW PASSWORD</div>
                <div style={{width:"100%",display:"flex",border:"1px solid rgb(240,240,240)",borderRadius:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <FaLock/>
                        <input type="text" value={new_ps} style={{width:"80%",border:"0px"}} onChange={(e)=>{
                            set_new_ps(e.target.value);
                        }}/>
                        <FaEye/>
                    </div>
                </div>
            </div>
        </div>
        <div style={{width:"80%",display:"flex",marginTop:"20px",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%"}}>CONFIRM NEW PASSWORD</div>
                <div style={{width:"100%",display:"flex",border:"1px solid rgb(240,240,240)",borderRadius:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <FaLock/>
                        <input type="text" value={new_ps_confirm} style={{width:"80%",border:"0px"}} onChange={(e)=>{
                            set_new_ps_confirm(e.target.value);
                        }}/>
                        <FaEye/>
                    </div>
                </div>
            </div>
        </div>
        <div style={{width:"80%",display:"flex",marginTop:"20px",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%"}}>ENTER TOKEN</div>
                <div style={{width:"100%",display:"flex",border:"1px solid rgb(240,240,240)",borderRadius:"10px",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <FaLock/>
                        <input type="text" value={cp_tok} style={{width:"80%",border:"0px"}} onChange={(e)=>{
                            set_cp_tok(e.target.value);
                        }}/>
                        <FaEye/>
                    </div>
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"row",justifyContent:"end",alignItems:"center",justifyContent:"end"}}>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center",textAlign:"end",justifyContent:"center",color:"orange",borderRadius:"10px",fontSize:"12px",paddingTop:"10px",paddingBottom:"10px",marginTop:"10px",cursor:"pointer"}} onClick={async()=>{
                        if(cp_loading==false){
                            await send_token();
                        }
                    }}>{cp_loading?null:<Send/>}<div>{cp_loading?"Loading...":send_token_cp_text}</div></div>
                </div>
            </div>
        </div>
        <div style={{width:"90%",display:"flex",marginTop:"20px",marginBottom:"20px",flexDirection:"column",alignItems:"center"}}>
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",borderRadius:"10px",fontSize:"12px",width:"100%",paddingTop:"20px",paddingBottom:"20px",marginTop:"10px",cursor:"pointer"}} onClick={async()=>{
                if(cp1_loading==false){
                    await make_change();
                }
            }}><div>{cp1_loading?"Loading...":"CHANGE PASSWORD"}</div></div>
        </div>

        </div>
    </div>)
}

export default ChangePassword;