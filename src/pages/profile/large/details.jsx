import { Copy } from "lucide-react";
import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { FaAngleDoubleRight, FaAngleRight, FaCheckCircle, FaExclamationCircle, FaInfo, FaInfoCircle } from "react-icons/fa";

function Details(){
        const [success,set_success]=useState(false);
        const [success_message,set_success_message]=useState("");
        const [fail,set_fail]=useState(false);
        const [fail_message,set_fail_message]=useState("");
    return (
        <div style={{width:"100%",height:"100%",position:"relative",backgroundColor:"rgb(245,245,245)",borderRadius:"0px 0px 3px rgb(250,250,250)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"90%",height:"90%",display:"flex",backgroundColor:"white",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                {/* <div style={{width:"90%",marginTop:"40px",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"space-between"}}>
                    <div style={{width:"10%",aspectRatio:"1/1",backgroundColor:"rgb(140,140,140)",color:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"100px",fontWeight:"bolder"}}>{localStorage.getItem("name")[0]}</div>
                    <div style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start"}}>
                        <h1 style={{padding:"0px",margin:"0px",marginTop:"10px"}}>{localStorage.getItem("name")}</h1>
                        <div style={{marginTop:"10px",padding:"0px"}}>{localStorage.getItem("email")}</div>
                        {
                            //localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                            !true?<div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"12px",color:"red",fontWeight:"bold"}}><FaInfoCircle/>UNVERIFIED</div>:
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",fontSize:"12px",color:"orange",fontWeight:"bold"}}><FaCheckCircle/> VERIFIED</div>
                        }
                                            
                    </div>
                </div> */}

                <div style={{width:"90%",marginTop:"40px",display:"flex",alignItems:"center",justifyContent:"start"}}>
                    <div>Account Details</div>
                    <FaAngleDoubleRight/>
                </div>

                <div style={{width:"90%",display:"grid",marginBottom:"20px",gridTemplateColumns:"repeat(1,1fr)",gap:"30px"}}>

                {/* <div style={{width:"90%",gap:"20px",display:"flex",flexDirection:"row",alignItems:"center",overflowX:"scroll",scrollSnapType:"x mandatory"}}> */}
                    <div style={{flex:"0 0 100%",scrollSnapAlign:"center",backgroundColor:"rgba(29, 40, 47, 0.93)",backgroundImage:"linear-gradient(rgba(13, 21, 32, 0.1),rgba(13, 21, 32, 0.9))",boxShadow:"0px 0px 3px rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            
                            <div style={{width:"90%",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                        <div style={{width:"20%",textAlign:"center",borderBottom:"1px solid rgb(240,240,240)"}}>UUID</div>
                                                        <div style={{width:"70%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                            <div style={{width:"80%",textAlign:"center",overflow:"scroll",whiteSpace:"nowrap"}}>{localStorage.getItem("uuid").toString()}</div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                            <div style={{width:"90%",display:"flex",marginTop:"10px",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                <div style={{display:"flex",cursor:"pointer",flexDirection:"row",alignItems:"center",justifyContent:"start",fontSize:"10px",paddingTop:"4px",paddingBottom:"4px",borderRadius:"10px",backgroundColor:"orange",color:"white",paddingLeft:"20px",paddingRight:"20px"}} onClick={()=>{
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
                                }}>
                                    <Copy size={10}/><div>Copy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    

                    <div style={{flex:"0 0 100%",scrollSnapAlign:"center",backgroundColor:"rgba(29, 40, 47, 0.93)",backgroundImage:"linear-gradient(rgba(13, 21, 32, 0.1),rgba(13, 21, 32, 0.9))",boxShadow:"0px 0px 3px rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",paddingTop:"10px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            
                            <div style={{width:"90%",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                                        <div style={{width:"20%",textAlign:"center",borderBottom:"1px solid rgb(240,240,240)"}}>Email</div>
                                                        <div style={{width:"70%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                            <div style={{width:"80%",textAlign:"center",overflow:"scroll"}}>{localStorage.getItem("email")}</div>
                                                        </div>
                                                    </div>
                                                </div>
                            <div style={{width:"90%",display:"flex",marginTop:"10px",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                <div style={{display:"flex",cursor:"pointer",flexDirection:"row",alignItems:"center",justifyContent:"start",fontSize:"10px",paddingTop:"4px",paddingBottom:"4px",borderRadius:"10px",backgroundColor:"orange",color:"white",paddingLeft:"20px",paddingRight:"20px"}} onClick={()=>{
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
                                }}>
                                    <Copy size={10}/><div>Copy</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{flex:"0 0 100%",scrollSnapAlign:"center",backgroundColor:"rgba(29, 40, 47, 0.93)",backgroundImage:"linear-gradient(rgba(13, 21, 32, 0.1),rgba(13, 21, 32, 0.9))",boxShadow:"0px 0px 3px rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",paddingTop:"10px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                            
                            <div style={{width:"90%",marginTop:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                                        <div style={{width:"20%",textAlign:"center",borderBottom:"1px solid rgb(240,240,240)"}}>Name</div>
                                                        <div style={{width:"70%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                                            <div style={{width:"80%",textAlign:"center",overflow:"scroll",color:"white"}}>{localStorage.getItem("name")}</div>
                                                            {/* <FaInfoCircle/> */}
                                                        </div>
                                                    </div>
                                                </div>
                            <div style={{width:"90%",display:"flex",marginTop:"10px",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                <div style={{display:"flex",cursor:"pointer",flexDirection:"row",alignItems:"center",justifyContent:"start",fontSize:"10px",paddingTop:"4px",paddingBottom:"4px",borderRadius:"10px",backgroundColor:"orange",color:"white",paddingLeft:"20px",paddingRight:"20px"}} onClick={()=>{
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
                                }}>
                                    <Copy size={10}/><div>Copy</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    


                </div>

                

            </div>

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

export default Details;