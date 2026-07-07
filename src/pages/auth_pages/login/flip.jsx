import { useEffect,useState } from "react";
import { FaCertificate } from "react-icons/fa";
import { FaPeopleGroup, FaThumbsUp } from "react-icons/fa6";

function Flip(){
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
                },6000);
            },4000);
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
                },6000);
            },4000);
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
                },6000);
            },4000);
        }
    },[move]);
    return (
        <div style={{width:"100%",height:"100%",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
            <div style={{width:"100%",height:"100%",backgroundColor:"transparent",color:"white",position:"absolute",left:`${div1_left}%`,top:"0%",zIndex:div1,transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                    <img src="/slide1.png" style={{width:"100%",height:"100%",borderRadius:"0px"}}/>
                
            </div>
            <div style={{width:"100%",height:"100%",backgroundColor:"transparent",color:"white",position:"absolute",left:`${div2_left}%`,top:"0%",zIndex:div2,transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                
                    <img src="/slide2.png" style={{width:"100%",height:"100%",borderRadius:"0px"}}/>
                
            </div>
            <div style={{width:"100%",height:"100%",backgroundColor:"transparent",color:"white",position:"absolute",left:`${div3_left}%`,top:"0%",zIndex:div3,transition:"left 1s linear",transform:"rotate(0deg)",boxShadow:"2px 2px 2px transparent",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
               
                    <img src="/slide3.png" style={{width:"100%",height:"100%",borderRadius:"0px"}}/>
                
            </div>
        </div>
    )
}

export default Flip;