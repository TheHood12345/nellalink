import { Search } from "lucide-react";
import { FaAngleDown } from "react-icons/fa";
import { useLocation, useOutletContext } from "react-router-dom";

function Notification(){

    const {state} = useLocation();
    const {notif_num,notif_items} = useOutletContext();


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
                            <div>{state?.notif_num? state?.notif_num: notif_num? notif_num: "No"} new notifications</div>
                            <div>-</div>
                        </div>
                    </div>
                  
                  
                     
                    </div>
                

            </div>
        </div>
    );
}

export default Notification;