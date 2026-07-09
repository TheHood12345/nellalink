import { ArrowLeft } from "lucide-react";
import { FaAngleLeft, FaArrowCircleLeft, FaArrowLeft } from "react-icons/fa";
import { FaCircleXmark, FaImages } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

function Business_view({set_view,business_logo_v,business_name_v,business_address_v,business_email_v,business_desc_v,business_country_v,business_status_v}){

    const {set_success,set_success_message,set_fail,set_fail_message} = useOutletContext();

    return (
        <div style={{width:"100%",height:"100%",userSelect:"text",fontFamily:"poppins-light",color:"rgb(100,100,100)",position:"absolute",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",fontSize:"16px",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>

          <div style={{width:"50%",height:"90%",borderRadius:"9px",backgroundColor:"white",boxShadow:"0px 7px 6px rgb(0,0,0)",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            <div style={{width:"100%",height:"10%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"rgba(175, 131, 69, 0.5)",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",boxSizing:"border-box"}}>
                    <div><ArrowLeft color="white" size={30} style={{cursor:"pointer"}} onClick={()=>{
                        set_view(false);
                    }}/></div>
                    <div style={{marginLeft:"10px",fontFamily:"poppins-bold"}}>Business Info</div>
                </div>
            </div>
            <div style={{width:"90%",height:"90%",overflow:"scroll"}}>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Business Logo</div>
                <image src={business_logo_v} alt="" style={{width:"30%",aspectRatio:"1/1",backgroundColor:"rgb(240,240,240)"}}/>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Business Name</div>
                <div>{business_name_v?business_name_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Business Address</div>
                <div>{business_address_v?business_address_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Business Email</div>
                <div>{business_email_v?business_email_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Business Description</div>
                <div>{business_desc_v?business_desc_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Country</div>
                <div>{business_country_v?business_country_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontFamily:"poppins-bold"}}>Status</div>
                <div>{business_status_v?business_status_v:"Null"}</div>
            </div>
            </div>
          </div>
        </div>
    );
}

export default Business_view;