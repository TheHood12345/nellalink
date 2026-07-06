import Large_profile from "./large_profile";
import Small_profile from "./small_profile";


function Main_profile(){
    return (
        <div style={{width:"100%",height:"100%",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                <Small_profile/>
                <Large_profile/>
        </div>
    )
}

export default Main_profile;