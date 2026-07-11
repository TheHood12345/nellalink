import { Outlet } from "react-router-dom";
import Ad1 from "./adv";
import Login from "./login";

function BoxLogin(){

    return(
    <div style={{width:"100%",height:"100%",backgroundColor:"rgb(220,220,220)",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
        <div style={{width:"98%",height:"98%",backgroundColor:"white",borderRadius:"10px",overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>

            {/* ---------------SIDE PAGE--------------- */}
            <div className="auth_left_bar" style={{height:"100%",transition:"all 0.3s linear",backgroundColor:"rgb(200,208,215)",display:"flex",flexDirection:"column",overflow:"scroll",alignItems:"center"}}>

                <Ad1/>
        
            </div>
            {/* ---------------MAIN PAGE--------------- */}
            <div className="auth_body" style={{height:"100%",transition:"all 0.3s linear",backgroundColor:"white",display:"flex",flexDirection:"column",overflow:"scroll",alignItems:"center"}}>

                {/* ---------------SIDE PAGE--------------- */}
                <Login/>
        
            </div>
        
        </div>
    </div>
    )

}

export default BoxLogin;