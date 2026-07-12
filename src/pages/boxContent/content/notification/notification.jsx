import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLocation, useOutletContext } from "react-router-dom";

function Notification(){

    const {state} = useLocation();
    const {notif_num,notif_items,set_fail_message,set_success_message,set_success,set_fail} = useOutletContext();

    const [loading,set_loading] = useState(false);
    const [all_data,set_all_data] = useState([]);

    function formatRelativeDate(dateString) {
        const date = new Date(dateString);
        const now = new Date();

        // Strip time for day-level comparison
        const startOfDay = (d) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
        const diffDays = Math.round((startOfDay(now) - startOfDay(date)) / 86400000);

        if (diffDays === 0) return "Today";
        if (diffDays === 1) return "Yesterday";
        if (diffDays > 1 && diffDays <= 6) return `${diffDays} days ago`;

        // Older (or future) dates: "11 July" (add year if not current year)
        const options = { day: "numeric", month: "long" };
        if (date.getFullYear() !== now.getFullYear()) options.year = "numeric";
        return date.toLocaleDateString("en-GB", options);
    }

// Example
formatRelativeDate("2026-07-12T11:44:59+00:00"); // "Today"

    useEffect(()=>{
        async function fetchAll(){
            set_loading(true);
            await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/notification/user/${localStorage.getItem("uuid")}`,{
                method: "get",
                headers: {
                     "Content-Type": "application/json",
                     "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
                }
            }).then((res)=>res.json()).then((data)=>{
                set_loading(false);
                if(data.status==true){
                    console.log("suuccceeessssss",data);
                    set_all_data(data);
                    set_success_message(data.message);
                    set_success(true);
                    setTimeout(()=>{
                        set_success(false);
                    },5000);
                }else{
                    console.log("Faaaiiilllllll",data);
                    set_fail_message(data.message);
                    set_fail(true);
                    setTimeout(()=>{
                        set_fail(false);
                    },2000);
                }
            }).catch((err)=>{
                console.log("Cattttttccchhh",err);
                set_fail_message("rror",err);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },2000);
            })
        }
        fetchAll();
    },[])


    return (
        <div style={{width:"100%",height:"100%",color:"rgb(100,100,100)",display:"flex",flexDirection:"column",alignItems:"center"}}>

            <div style={{width:"90%",marginTop:"20px",height:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                  <div style={{width:"50%",display:"flex",flexDirection:"row",alignItems:"center"}}>All Notifications</div>
                  <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"60%",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <Search size={17} color={"rgb(100,100,100)"}/>
                            <input type="text" placeholder="search notifications..." style={{width:"80%",border:"10px"}}/>
                        </div>
                        <div style={{width:"30%",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                            <div>All</div><FaAngleDown/>
                        </div> 
                  </div>
                    
                  
                  </div>

                  <div style={{backgroundColor:"rgb(100,100,100)",color:"white",width:"100%",display:"flex",flexDirection:"column",alignItems:"end"}}>
                    <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignContent:"start",justifyContent:"space-between"}}>
                        <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <div>{state?.notif_num? state?.notif_num: notif_num? notif_num: "No"} new notifications</div>
                            {all_data!=null?<div style={{fontSize:"12px",color:"orange"}}>Initialized</div>:null}
                            </div>
                            <div>-</div>
                        </div>
                    </div>
                    </div>
                    <div style={{backgroundColor:"transparent",marginTop:"20px",color:"white",width:"100%",display:"flex",flexDirection:"column",alignItems:"end"}}>
                        {/* {
                            all_data!==null || all_data.length>0&&
                            all_data.map((item,index)=>(
                                <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(220,220,200)",marginTop:"20px"}}>{index}</div>
                            ))
                        } */}
                        <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",color:"rgb(100,100,100)"}}>
                                <div style={{width:"10%"}}>{1}</div>
                                <div style={{width:"90%",backgroundColor:"transparent",display:"flex",flexDirection:"column",alignItems:"start"}}>
                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                        <div style={{width:"70%",overflow:"scroll",textWrap:"nowrap",backgroundColor:"transparent",fontFamily:"poppins-bold"}}>title</div>
                                        <div style={{fontSize:"12px",width:"20%",textAlign:"end",fontStyle:"italic",fontFamily:"poppins-light"}}>unread</div>
                                    </div>
                                    <div style={{width:"100%",textAlign:"justify",backgroundColor:"transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                        <div style={{fontSize:"12px"}}>body sssssssss  ssass sds  sds sds dsd sd sds ds dsd sd sd s dsd sdsd sd sds d sdsds dsd sdsd sds d</div>
                                        <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                            <div style={{paddingLeft:"4px",paddingRight:"4px",paddingTop:"4px",paddingBottom:"4px",fontSize:"10px",borderRadius:"8px",textAlign:"center",overflow:"scroll",textWrap:"nowrap",backgroundColor:"rgb(255,243,224)",color:"rgb(230,126,34)"}}>enabled</div>
                                            <div style={{fontSize:"10px",textAlign:"end",marginLeft:"10px",paddingLeft:"10px",borderLeft:"1px solid rgb(230,126,34)",fontFamily:"poppins-bold"}}>{formatRelativeDate("2026-07-11T11:44:59+00:00")}</div>
                                        </div>
                                        {/* <div>View</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  
                  
                     
                    
                

            </div>
        </div>
    );
}

export default Notification;