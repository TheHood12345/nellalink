import { ArrowsUpFromLineIcon, BellDot, BookAlert, Computer, ListEnd, Menu, User } from "lucide-react";
import { FaArrowDown } from "react-icons/fa";
import { FaBoltLightning, FaI, FaMessage, FaRightToBracket } from "react-icons/fa6";

function Home(){

    return(
        <div style={{width:"100%",height:"100%",display:"flex",color:"gray",flexDirection:"column",alignItems:"center"}}>

            <div className="box_grid" style={{width:"90%",marginTop:"20px",display:"grid",fontSize:"14px",gap:"20px",justifyItems:"center",alignItems:"center"}}>

                <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                        <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <BookAlert size={30} color="gray"/>
                            <ArrowsUpFromLineIcon/>
                        </div>
                    <div style={{fontFamily:"poppins-bold",marginTop:"20px"}}>-</div>
                     <div style={{fontFamily:"poppins-light",marginTop:"20px"}}>Total Businesses (My Business)</div>
                    </div>
                </div>

                <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                        <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <User size={30} color="gray"/>
                            <ArrowsUpFromLineIcon/>
                        </div>
                    <div style={{fontFamily:"poppins-bold",marginTop:"20px"}}>-</div>
                     <div style={{fontFamily:"poppins-light",marginTop:"20px"}}>Total Number of Users Onboarded</div>
                    </div>
                </div>

                <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                        <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <Menu size={30} color="gray"/>
                            <ArrowsUpFromLineIcon/>
                        </div>
                    <div style={{fontFamily:"poppins-bold",marginTop:"20px"}}>-</div>
                     <div style={{fontFamily:"poppins-light",marginTop:"20px"}}>Total number of accepted orders</div>
                    </div>
                </div>

                <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                        <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <BellDot size={30} color="gray"/>
                            <ArrowsUpFromLineIcon/>
                        </div>
                    <div style={{fontFamily:"poppins-bold",marginTop:"20px",fontSize:"20px"}}>NIL</div>
                     <div style={{fontFamily:"poppins-light",marginTop:"20px"}}>Total Number of Notifications</div>
                    </div>
                </div>

                <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                        <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <ListEnd size={30} color="gray"/>
                            <ArrowsUpFromLineIcon/>
                        </div>
                    <div style={{fontFamily:"poppins-bold",marginTop:"20px",fontSize:"20px"}}>NIL</div>
                     <div style={{fontFamily:"poppins-light",marginTop:"20px",color:"gray"}}>Total Number of Declined Orders</div>
                    </div>
                </div>

                <div className="box_card" style={{backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                        <div style={{backgroundColor:"white",width:"90%",height:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <Computer size={30} color="rgb(100,100,100)"/>
                            <ArrowsUpFromLineIcon/>
                        </div>
                    <div style={{fontFamily:"poppins-bold",marginTop:"20px",fontSize:"20px"}}>NIL</div>
                     <div style={{fontFamily:"poppins-light",marginTop:"20px",width:"90%",overflow:"scroll"}}>Total number of devices</div>
                    </div>
                </div>

            </div>

                {/* --------------------------LARGE SCREEN----------------------------- */}
            <div className="box_bottom_card_large" style={{width:"90%",marginTop:"20px",marginBottom:"60px",flexDirection:"row",alignItems:"start",justifyContent:"space-between"}}>
                
                {/* <div className="box_card" style={{width:"40%",backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{width:"90%",fontSize:"30px",fontFamily:"poppins-bold",marginTop:"20px"}}>1</div>
                    <div style={{width:"90%",fontFamily:"poppins-light"}}>USER ONBOARDING</div>
                    <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"30%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"pink",color:"orangered",borderRadius:"10px",textAlign:"center"}}>Daily</div>
                        <div style={{width:"30%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(240,240,240)",color:"rgb(100,100,100)",borderRadius:"10px",textAlign:"center"}}>Weekly</div>
                        <div style={{width:"30%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(240,240,240)",color:"rgb(100,100,100)",borderRadius:"10px",textAlign:"center"}}>Monthly</div>
                    </div>
                    <div style={{width:"90%",fontFamily:"poppins-bold",marginTop:"40px"}}>Total User</div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"10%",aspectRatio:"1/1",backgroundColor:"orange",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"100px",color:"white"}}>BS</div>
                        <div style={{width:"80%",overflow:"scroll"}}>
                        <div style={{textAlign:"start"}}>Business 1</div>
                        <div style={{textAlign:"start"}}>business@example.com</div>
                        <div style={{textAlign:"start"}}>12/07/23</div>
                        </div>
                    </div>
                </div>

                <div className="box_card" style={{width:"50%",backgroundColor:"rgb(255,255,255)",transition:"all 0.3s linear",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                    <div style={{width:"90%",fontSize:"30px",fontFamily:"poppins-bold",marginTop:"20px"}}>1</div>
                    <div style={{width:"90%",fontFamily:"poppins-light"}}>USER ONBOARDING</div>
                    <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"30%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"pink",color:"orangered",borderRadius:"10px",textAlign:"center"}}>Daily</div>
                        <div style={{width:"30%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(240,240,240)",color:"rgb(100,100,100)",borderRadius:"10px",textAlign:"center"}}>Weekly</div>
                        <div style={{width:"30%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(240,240,240)",color:"rgb(100,100,100)",borderRadius:"10px",textAlign:"center"}}>Monthly</div>
                    </div>
                    <div style={{width:"90%",fontFamily:"poppins-bold",marginTop:"40px"}}>Total User</div>
                    <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"10%",aspectRatio:"1/1",backgroundColor:"orange",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"100px",color:"white"}}>BS</div>
                        <div style={{width:"80%",overflow:"scroll"}}>
                        <div style={{textAlign:"start"}}>Business 1</div>
                        <div style={{textAlign:"start"}}>business@example.com</div>
                        <div style={{textAlign:"start"}}>12/07/23</div>
                        </div>
                    </div>
                </div> */}

                <div style={{width:"100%",display:"grid",gridTemplateColumns:"1fr 2fr",color:"rgb(100,100,100)",gap:"10px",marginTop:"10px"}}>
                                        <div className="box_card" style={{width:"90%",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                                    <div style={{fontSize:"30px",fontFamily:"poppins-bold",marginTop:"10px",marginBottom:"20px"}}>1</div>
                                                    <div>USER ONBOARDING</div>
                                                    <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                         <div style={{width:"30%",fontSize:"8px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"pink",color:"red",textAlign:"center",borderRadius:"3px"}}>Daily</div>
                                                         <div style={{width:"30%",fontSize:"8px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Weekly</div>
                                                         <div style={{width:"30%",fontSize:"8px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Monthly</div>
                                                    </div>
                                                    <div style={{fontFamily:"poppins-bold",marginTop:"20px",fontSize:"16px"}}>Total User</div>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                                                         <div style={{width:"30%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center",aspectRatio:"1/1",backgroundColor:"orange",color:"white",borderRadius:"100px"}}>BS</div>
                                                         
                                                    </div>
                                                    <div style={{width:"70%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                                            <div style={{fontSize:"16px"}}>Business 1</div>
                                                            <div>business@example.com</div>
                                                    </div>
                                                    <div>12/07/23</div>
                                        </div>
                                        <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                        <div style={{width:"90%",display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px"}}>
                                        <div className="box_card" style={{width:"90%",color:"rgb(100,100,100)",fontFamily:"poppins-light",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                            <div>TIME LOGS</div>
                                            <h2 style={{fontFamily:"poppins-bold",marginBottom:"0px"}}>0 HOURS</h2>
                                            <div style={{color:"orangered"}}><FaArrowDown/>0% up from last week</div>
                                        </div>
                        
                                        <div className="box_card" style={{width:"100%",backgroundColor:"white",color:"rgb(100,100,100)",fontFamily:"poppins-light",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                            <div>NOTIFICATION</div>
                                            <div style={{width:"100%",marginTop:"20px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                         <div style={{width:"49%",paddingTop:"3px",paddingBottom:"3px",fontSize:"10px",backgroundColor:"pink",color:"red",textAlign:"center",borderRadius:"3px"}}>Today</div>
                                                         <div style={{width:"49%",paddingTop:"3px",paddingBottom:"3px",fontSize:"10px",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Last Week</div>
                                            </div>
                                            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}><FaMessage/> 0 New Notification</div>
                                        </div>
                                        </div>
                        
                        
                                        <div className="box_card" style={{width:"90%",backgroundColor:"white",color:"rgb(100,100,100)",paddingTop:"10px",fontSize:"14px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"40px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
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

            {/* ------------------------------SMALL SCREEN -------------------------------------- */}

             <div className="box_bottom_card_small" style={{width:"90%",marginBottom:"60px",flexDirection:"column",alignItems:"center"}}>

                    <div style={{width:"90%",boxShadow:"0px 0px 3px rgb(220,220,220)",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                                    <div style={{fontSize:"30px",fontFamily:"poppins-bold",marginTop:"30px",marginBottom:"20px"}}>1</div>
                                                    <div>USER ONBOARDING</div>
                                                    <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                         <div style={{width:"30%",fontSize:"8px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"pink",color:"red",textAlign:"center",borderRadius:"3px"}}>Daily</div>
                                                         <div style={{width:"30%",fontSize:"8px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Weekly</div>
                                                         <div style={{width:"30%",fontSize:"8px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Monthly</div>
                                                    </div>
                                                    <div style={{fontFamily:"poppins-bold",marginTop:"20px",fontSize:"16px"}}>Total User</div>
                                                    <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                                         <div style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",textAlign:"center",aspectRatio:"1/1",backgroundColor:"orange",color:"white",borderRadius:"100px"}}>BS</div>
                                                         <div style={{width:"70%",marginLeft:"10px",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"center"}}>
                                                            <div style={{fontSize:"12px",fontFamily:"poppins-bold"}}>Business 1</div>
                                                            <div>business@example.com</div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div>12/07/23</div>
                                        </div>
        
                        <div style={{width:"90%",boxShadow:"0px 0px 3px rgb(220,220,220)",color:"rgb(100,100,100)",fontFamily:"poppins-light",backgroundColor:"white",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                            <div>TIME LOGS</div>
                                            <h2 style={{fontFamily:"poppins-bold",marginBottom:"0px"}}>0 HOURS</h2>
                                            <div style={{color:"orangered"}}><FaArrowDown/>0% up from last week</div>
                                        </div>
        
                        <div style={{width:"90%",boxShadow:"0px 0px 3px rgb(220,220,220)",backgroundColor:"white",color:"rgb(100,100,100)",fontFamily:"poppins-light",fontSize:"14px",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",marginTop:"20px",display:"flex",flexDirection:"column"}}>
                                            <div>NOTIFICATION</div>
                                            <div style={{width:"100%",marginTop:"20px",marginBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                                         <div style={{width:"49%",paddingTop:"3px",paddingBottom:"3px",fontSize:"10px",backgroundColor:"pink",color:"red",textAlign:"center",borderRadius:"3px"}}>Today</div>
                                                         <div style={{width:"49%",paddingTop:"3px",paddingBottom:"3px",fontSize:"10px",backgroundColor:"rgb(200,200,200)",color:"black",textAlign:"center",borderRadius:"3px"}}>Last Week</div>
                                            </div>
                                            <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}><FaMessage/> 0 New Notification</div>
                                        </div>
        
        
                        <div style={{width:"90%",backgroundColor:"white",paddingTop:"10px",fontSize:"14px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",borderRadius:"10px",boxShadow:"0px 0px 20px rgb(240,240,240)",marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
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
    )
}

export default Home;