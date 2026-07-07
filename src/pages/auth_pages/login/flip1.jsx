import { useEffect,useState } from "react";
import { FaCertificate } from "react-icons/fa";
import { FaPeopleGroup, FaThumbsUp } from "react-icons/fa6";

function Flip1(){
    const [move,set_move] = useState(false);
    const [div1,set_div1] = useState(1);
    const [div2,set_div2] = useState(2);
    const [div3,set_div3] = useState(3);

    const [div1_left,set_div1_left] = useState(0);
    const [div2_left,set_div2_left] = useState(0);
    const [div3_left,set_div3_left] = useState(0);

    useEffect(()=>{
        if(div1 == 1){
            setTimeout(()=>{
                set_div3_left(110);
                setTimeout(()=>{
                    set_div1(2);
                    set_div2(3);
                    set_div3(1);
                    set_div3_left(0);
                    set_move(!move);
                },3000);
            },2000);
        }
        if(div1 == 2){
            setTimeout(()=>{
                set_div2_left(110);
                setTimeout(()=>{
                    set_div1(3);
                    set_div2(1);
                    set_div3(2);
                    set_div2_left(0);
                    set_move(!move);
                },3000);
            },2000);
        }
        if(div1 == 3){
            setTimeout(()=>{
                set_div1_left(110);
                setTimeout(()=>{
                    set_div1(1);
                    set_div2(2);
                    set_div3(3);
                    set_div1_left(0);
                    set_move(!move);
                },3000);
            },2000);
        }
    },[move]);
    return (
        <div style={{width:"90%",paddingTop:"20px",position:"relative",fontFamily:"poppins-light",fontSize:"12px",paddingBottom:"20px",position:"relative",display:"flex",paddingBottom:"20px",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"100%",height:"80%",display:"flex",paddingBottom:"20px",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"scroll"}}>
            <div style={{width:"100%",height:"100%",backgroundColor:"rgb(100,100,100)",borderRadius:"10px",paddingTop:"20px",paddingBottom:"20px",color:"white",position:"absolute",left:`0%`,top:"0%",zIndex:div1,transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                   <div style={{width:"80%"}}>I'm impressed with how easy it is to place orders on your website! The menu options are clear, and the ordering process is seamless. I've had a great experience using your platform to order food from my favorite restaurants in Lagos. <div style={{fontFamily:"poppins-bold"}}>Janet</div> Lagos, Nigeria<div></div></div>
                   <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{padding:"3px",border:"2px solid white",backgroundColor:"white",borderRadius:"100px"}}></div>
                        <div style={{padding:"3px",border:"2px solid white",borderRadius:"100px"}}></div>
                        <div style={{padding:"3px",border:"2px solid white",borderRadius:"100px"}}></div>
                   </div>
                
            </div>
            <div style={{width:"100%",height:"100%",backgroundColor:"rgb(100,100,100)",borderRadius:"10px",paddingTop:"20px",paddingBottom:"20px",color:"white",position:"absolute",left:`0%`,top:"0%",zIndex:div2,transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                    <div style={{width:"80%"}}>Your website has made ordering food a breeze! I love how I can browse through different restaurants, check menus, and place orders quickly. The platform is user-friendly, and I've had no issues with my orders. Thanks for providing a convenient service! <div style={{fontFamily:"poppins-bold"}}>Mkhize</div> <div>Capetown, South Africa</div></div>
                    <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{padding:"3px",border:"2px solid white",borderRadius:"100px"}}></div>
                        <div style={{padding:"3px",border:"2px solid white",backgroundColor:"white",borderRadius:"100px"}}></div>
                        <div style={{padding:"3px",border:"2px solid white",borderRadius:"100px"}}></div>
                    </div>
            </div>
            <div style={{width:"100%",height:"100%",backgroundColor:"rgb(100,100,100)",borderRadius:"10px",paddingTop:"20px",paddingBottom:"20px",color:"white",position:"absolute",left:`0%`,top:"0%",zIndex:div3,transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
               
                    <div style={{width:"80%"}}>I've tried several food ordering platforms, but yours is one of the most efficient. Placing orders is straightforward, and I appreciate the accuracy of the order summaries. Your platform has become my go-to for ordering food in Accra.<div style={{fontFamily:"poppins-bold"}}>Mensah</div><div>Accra, Ghana</div></div>
                    <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{padding:"3px",border:"2px solid white",borderRadius:"100px"}}></div>
                        <div style={{padding:"3px",border:"2px solid white",borderRadius:"100px"}}></div>
                        <div style={{padding:"3px",border:"2px solid white",backgroundColor:"white",borderRadius:"100px"}}></div>
                    </div>
                
            </div>
            </div>
            <div style={{width:"100%",height:"20%",backgroundColor:"red",borderRadius:"20px",color:"white",transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"row",alignItems:"flex-end",justifyContent:"center"}}>
               
                    <div style={{width:"20%",aspectRatio:"1/1",backgroundColor:"white",borderRadius:"100px"}}></div>
                    <div style={{width:"20%",aspectRatio:"1/1",backgroundColor:"white",borderRadius:"100px"}}></div>
                    <div style={{width:"20%",aspectRatio:"1/1",backgroundColor:"white",borderRadius:"100px"}}></div>
                
            </div>
        </div>
    )
}

export default Flip1;