import { CheckCheck, ListCheck, PersonStandingIcon, SquareArrowOutUpRight } from "lucide-react";
import { useState } from "react";
import { FaHome, FaBusinessTime, FaBookOpen, FaOutdent, FaBell, FaList, FaOpencart, FaListOl, FaArrowUp, FaArrowDown, FaCalendar } from "react-icons/fa";
import { FaBoltLightning, FaComputer, FaFileLines, FaI, FaMessage, FaPeopleGroup, FaPerson, FaRightToBracket } from "react-icons/fa6";

function Dashboard(){

      const items = [
            {
                icon: <ListCheck size={30} color={"gray"}/>,
                nil: "_",
                name: "Total Business (My Business)"
            },
            {
                icon: <PersonStandingIcon size={30} color={"gray"}/>,
                nil: "_",
                name: "Total Number of Users Onboarded"
            },
            {
                icon: <CheckCheck size={30} color={"gray"}/>,
                nil: "_",
                name: "Total number of accepted orders"
            },
            {
                icon: <FaBell size={30} color={"gray"}/>,
                nil: "Nil",
                name: "Total Number of Notifications"
            },
            {
                icon: <FaFileLines size={30} color={"red"}/>,
                nil: "Nil",
                name: "Total Number of Declined Orders"
            },
            {
                icon: <FaComputer size={30} color={"gray"}/>,
                nil: "Nil",
                name: "Total Number of devices"
            }
        ]

        const [up,set_up] = useState(0)
    return (
        <div id="large_home" style={{width:"100%",height:"80%",backgroundColor:"rgb(252,254,255)",color:"gray",overflow:"scroll",flexDirection:"column",alignItems:"center"}}>
            <div style={{width:"90%",display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"40px"}}>
                        {
                            items.map((item,index)=>{
                                return(
                                <div className="up" key={index} style={{width:"100%",backgroundColor:"white",fontSize:"14px",color:"gray",transition:"all 0.3s linear",cursor:"pointer",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:`0px 3px ${up==index?10:3}px rgb(220,220,220)`,marginTop:"20px",display:"flex",flexDirection:"column"}} onClick={()=>{
                                    set_up(index);
                                }} onMouseEnter={(e)=>{
                                    set_up(index);
                                }}>
                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                        {item.icon}
                                        <SquareArrowOutUpRight/>
                                    </div>
                                    <div style={{color:"black",fontFamily:"poppins-bold",fontSize:"20px",marginTop:"10px"}}>{item.nil}</div>
                                    <div style={{marginTop:"20px"}}>{item.name}</div>
                                </div>
                            )
                            })
                        }
                        </div>
                <div style={{width:"90%",display:"grid",gridTemplateColumns:"1fr 2fr",gap:"10px",marginTop:"40px"}}>
                        <div style={{width:"90%",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 3px 20px rgb(240,240,240)",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                    <div style={{fontSize:"30px",fontWeight:"bold",color:"black",marginBottom:"20px"}}>1</div>
                                    <div>USER ONBOARDING</div>
                                    <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                         <div style={{width:"30%",paddingTop:"1%",paddingBottom:"1%",backgroundColor:"pink",color:"red",textAlign:"center",borderRadius:"3px"}}>Daily</div>
                                         <div style={{width:"30%",paddingTop:"1%",paddingBottom:"1%",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Weekly</div>
                                         <div style={{width:"30%",paddingTop:"1%",paddingBottom:"1%",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Monthly</div>
                                    </div>
                                    <div style={{color:"black",fontWeight:"bold",marginTop:"20px",fontSize:"16px"}}>Total User</div>
                                    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                         <div style={{width:"30%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center",aspectRatio:"1/1",backgroundColor:"orange",color:"white",borderRadius:"100px"}}>BS</div>
                                         <div style={{width:"70%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                            <div style={{fontWeight:"bold",color:"black",fontSize:"16px"}}>Business 1</div>
                                            <div>business@example.com</div>
                                        </div>
                                    </div>
                                    <div>12/07/23</div>
                        </div>
                        <div>
                        <div style={{width:"90%",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
                        <div style={{width:"90%",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 20px rgb(240,240,240)",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                            <div>TIME LOGS</div>
                            <h2 style={{color:"black",fontWeight:"bold",marginBottom:"0px"}}>0 HOURS</h2>
                            <div style={{color:"red"}}><FaArrowDown/>0% up from last week</div>
                        </div>
        
                        <div style={{width:"100%",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 20px rgb(240,240,240)",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                            <div>NOTIFICATION</div>
                            <div style={{width:"100%",marginTop:"20px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                         <div style={{width:"49%",paddingTop:"1%",paddingBottom:"1%",backgroundColor:"pink",color:"red",textAlign:"center",borderRadius:"3px"}}>Today</div>
                                         <div style={{width:"49%",paddingTop:"1%",paddingBottom:"1%",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Last Week</div>
                            </div>
                            <div><FaMessage/> 0 New Notification</div>
                        </div>
                        </div>
        
        
                        <div style={{width:"100%",backgroundColor:"white",paddingTop:"10px",fontSize:"14px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 20px rgb(240,240,240)",marginTop:"40px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"95%"}}>RECENT</div>
                            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",border:"1px solid orange",marginTop:"2px",display:"flex",flexDirection:"column"}}>
                                <div><FaBoltLightning style={{color:"yellow"}}/> QR Code successfully generated</div>
                                <div>Your QR code was generated and you have view it <a href="/">here</a></div>
                                <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",background:"orange",textAlign:"center",color:"white",marginTop:"20px",display:"flex",flexDirection:"column"}}>View QR Code</div>
                            </div>
                            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",border:"1px solid orange",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                <div><FaI/> Information</div>
                                <div>You added your email on this portal</div>
                            </div>
                            <div style={{width:"90%",paddingTop:"10px",color:"orange",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"end"}}>
                                <div>More <FaRightToBracket/></div>
                            </div>
                        </div>
                        </div>

                        </div>
        </div>
    )
}

export default Dashboard;