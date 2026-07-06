import Large_profile from "./lp";
import Small_profile from "./sp";


function Main_profile(){
    return (
        <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Small_profile/>
                <Large_profile/>
        </div>
    )
}

export default Main_profile;