import Flip1 from "./flip1";
import Flip from "./flip";

function Ad1(){

    return(
    <div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:"90%",height:"98%",borderRadius:"10px",overflow:"hidden",display:"flex",flexDirection:"column",alignItems:"center",overflowY:"scroll"}}>
            <div style={{width:"100%",display:"flex",fontSize:"30px",fontFamily:"poppins-bold",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"60px"}}>
                <img src="nellalink.jpg" alt="" style={{borderRadius:"100px",width:"20%",aspectRatio:"1/1"}}/>
                <div style={{width:"70%",color:"rgb(0,51,102)",lineHeight:"40px",marginLeft:"10px"}}>Nellalink Smart Business Suite (SBS)</div>
            </div>
            <div style={{width:"100%",color:"rgb(60,60,60)",fontSize:"30px",marginTop:"30px",fontFamily:"poppins-bold",lineHeight:"40px",textAlign:"start"}}>Elevate your</div>
            <div style={{width:"100%",color:"rgb(60,60,60)",fontSize:"30px",fontFamily:"poppins-bold",lineHeight:"40px",textAlign:"start"}}>Business experience</div>
            <div style={{width:"100%",color:"rgb(60,60,60)",fontSize:"30px",fontFamily:"poppins-bold",lineHeight:"40px",textAlign:"start"}}>with SBS</div>

            <div style={{width:"100%",borderRadius:"10px",marginTop:"40px",aspectRatio:"2/1"}}>
                    <Flip/>
                </div>
                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center",aspectRatio:"1/1",marginTop:"20px",marginBottom:"0px"}}>
                    <Flip1/>
                </div>
            
        
        </div>
    </div>
    )

}

export default Ad1;