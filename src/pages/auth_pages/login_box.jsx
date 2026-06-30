import Large_login from "./login/large_login";
import Small_login from "./login/small_login";

function Login_box(){
    return (
        <div className="box">
            <Small_login/>
            <Large_login/>
        </div>
    )
}

export default Login_box;