import { Copy, IdCard, LockKeyhole, Verified } from "lucide-react";
import { BsPerson } from "react-icons/bs";
import { FaAngleRight, FaArrowLeft, FaInfoCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Small_profile(){
    return (
        <div style={{width:"100%",height:"100%",backgroundColor:"rgb(18,22,28)",color:"white",display:"flex",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"90%",height:"10%",display:"flex",flexDirection:"row",alignItems:"center"}}>
                <FaArrowLeft size={30}/>
                <h1>PROFILE</h1>
            </div>
            <div style={{width:"90%",height:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll",scrollBehavior:"smooth"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"70%",aspectRatio:"1/1",fontWeight:"bolder",backgroundColor:"rgb(100,100,100)",borderRadius:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            {localStorage.getItem("name")[0]}
                        </div>
                        {/* <div style={{width:"70%",fontWeight:"bolder",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            ...
                        </div> */}
                    </div>
                    <div style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                        {/* <div style={{width:"70%",fontWeight:"bolder",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start"}}>
                            {localStorage.getItem("name")}
                        </div>
                        <div style={{width:"70%",overflow:"scroll",fontWeight:"light",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start"}}>
                            {localStorage.getItem("email")}
                        </div>
                        <div style={{width:"70%",overflow:"scroll",fontWeight:"light",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start"}}>
                            {localStorage.getItem("email")}
                        </div> */}

                        {/* -----------start------------ */}

                        <div style={{width:"90%",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                                            <div style={{width:"10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <BsPerson color="gray"/>
                                                            </div>
                                                            
                                                            <div style={{width:"90%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                                                <div style={{userSelect:"all",fontSize:"12px",width:"80%",overflow:"scroll"}}>{localStorage.getItem("name")}</div>
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
                                                            <div style={{width:"10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <MdEmail style={{width:"80%",aspectRatio:"1/1",color:"gray",borderRadius:"100px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontSize:"30px"}}/>
                                                            </div>
                                                            
                                                            <div style={{width:"90%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                                                <div style={{userSelect:"all",fontSize:"12px",width:"80%",overflow:"scroll"}}>{localStorage.getItem("email")}</div>
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
                                                            <div style={{width:"10%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <IdCard color="gray"/>
                                                            </div>
                                                            
                                                            <div style={{width:"90%",position:"relative",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                                                <div style={{userSelect:"all",fontSize:"12px",width:"80%",overflow:"scroll"}}>{localStorage.getItem("uuid")}</div>
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


                        {/* -------------end-------------- */}
                    </div>
                </div>
                <hr style={{width:"80%"}}/>
                <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"20%"}}>
                      <LockKeyhole/>  
                    </div>
                    <div style={{width:"60%"}}>Change Password</div>
                    <div style={{width:"20%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                       <FaAngleRight/> 
                    </div>
                </div>
                <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"20%"}}>
                       <Verified/> 
                    </div>
                    
                    <div style={{width:"60%"}}>Verify Email</div>
                    <div style={{width:"20%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    {
                    localStorage.getItem("email_verified_at")==null || localStorage.getItem("email_verified_at")=="null" || localStorage.getItem("email_verified_at")==""?
                    <div></div>
                    :<div style={{color:"orange",fontSize:"12px"}}>VERIFIED</div>}
                      <FaAngleRight/>  
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Small_profile;