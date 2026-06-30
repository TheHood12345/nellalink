import Large_signup from "./signup/large_signup";
import Small_signup from "./signup/small_signup";


function Signup_box(){
    return (
        <div className="box">
            <Small_signup/>
            <Large_signup/>
        </div>
    )
}

export default Signup_box;