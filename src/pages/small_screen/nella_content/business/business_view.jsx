import { FaCircleXmark, FaImages } from "react-icons/fa6";

function Business_view({set_view,business_name_v,business_address_v,business_email_v,business_desc_v,business_country_v,business_status_v}){
    return (
        <div style={{width:"100%",height:"100%",position:"absolute",backgroundColor:"rgba(0,0,0,0.8)",display:"flex",fontSize:"16px",flexDirection:"column",alignItems:"center"}}>

          <div style={{width:"80%",height:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"orange",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"70%"}}>Business Info</div>
                    <div style={{width:"20%"}}><FaCircleXmark color="white" size={30} onClick={()=>{
                        set_view(false);
                    }}/></div>
                </div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Business Logo</div>
                <FaImages size={30}/>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Business Name</div>
                <div>{business_name_v?business_name_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Business Address</div>
                <div>{business_address_v?business_address_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Business Email</div>
                <div>{business_email_v?business_email_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Business Description</div>
                <div>{business_desc_v?business_desc_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Country</div>
                <div>{business_country_v?business_country_v:"Null"}</div>
            </div>
            <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div style={{fontWeight:"bolder"}}>Status</div>
                <div>{business_status_v?business_status_v:"Null"}</div>
            </div>
          </div>
        </div>
    );
}

export default Business_view;