import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useLocation, useOutletContext } from "react-router-dom";

function Notification(){

    const {state} = useLocation();
    const {notif_num,notif_items} = useOutletContext();

    const [loading,set_loading] = useState(false);
    const [all_data,set_all_data] = useState([]);

    useEffect(()=>{
        async function fetchAll(){
            set_loading(true);
            await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/notification/user/${localStorage.getItem("uuid")}`,{
                method: "get",
                headers: {
                     "Content-Type": "application/json",
                     "x-api-key": import.meta.env.VITE_APP_API_KEY
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

                    <div style={{backgroundColor:"rgb(100,100,100)",color:"white",width:"100%",display:"flex",flexDirection:"column",alignItems:"end"}}>
                        {
                            // all_data.map((item,index)=>(
                            //     <div>New..</div>
                            // ))
                        }
                    </div>
                  
                  
                     
                    </div>
                

            </div>
        </div>
    );
}

export default Notification;