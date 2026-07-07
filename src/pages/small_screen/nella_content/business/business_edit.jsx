import { ImageDown } from "lucide-react";
import { useState } from "react";
import { FaArrowLeft, FaExclamationCircle, FaImages, FaUpload } from "react-icons/fa";
import { FaCircleXmark, FaPlus } from "react-icons/fa6";

function Business_edit({set_ad_success,set_ad_success_message,set_get_now,get_now,set_edit,short_name1,business_owned_by,business_uuid,business_name_v,business_logo_v,business_address_v,business_email_v,business_desc_v,business_country_v,business_status_v}){
    const [business_name,set_business_name]=useState(business_name_v);
    const [short_name,set_short_name] = useState(short_name1);
    const [desc,set_desc]=useState(business_desc_v);
    const [address,set_address]=useState(business_address_v);
    const [email,set_email]=useState(business_email_v);
    const [country,set_country]=useState(business_country_v);
    const [im,set_im] = useState("");

    const [loading,set_loading]=useState(false);
    const [failed_top,set_failed_top]=useState(-12);

    const [ad_fail,set_ad_fail]=useState(false);
    const [ad_fail_message,set_ad_fail_message]=useState("");

    const edit_url = `${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business/${business_uuid}`
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
//https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business/${business_uuid}
    async function make_edit(){
        set_loading(true);
        await fetch(edit_url,{
            method:"put",
            body: JSON.stringify(
                {
    "request_id": Date.now().toString(),
    "entity_featured_url": null,
    "meta_key": short_name,
    "meta_value": "",
    "title_name": business_name,
    "description": desc,
    "status": "enabled",
    "owned_by": business_owned_by,
    "created_by": null,
    "extra_data": {
        "business_address": address,
        "contact_email": email,
        "enable_on_portal_listing": true,
        "country_of_registration": country,
        "country_of_operation": country,
        "enable_feature_menu": true
    },
    // "uuid": business_uuid,
    // "parent_entity_type": null,
    // "parent_entity": null,
    // "added_by": "1",
    // "data_type": null,
    // "created_at": "2026-06-12 19:29:15",
    // "updated_at": "2026-06-18 01:31:19",
    // "deleted_at": null,
    // "meta_data": []
}

/*
{
    "request_id": "1781749074951",
    "entity_featured_url": "",
    "meta_key": "",
    "meta_value": "",
    "title_name": "",
    "description": "",
    "status": "enabled",
    "owned_by": "6a622d6e-b707-4159-9742-1ad91d4cc620",
    "created_by": "",
    "extra_data": {
        "business_address": "",
        "contact_email": "",
        "enable_on_portal_listing": true,
        "country_of_registration": "ng",
        "country_of_operation": "us,ng,gh",
        "enable_feature_menu": true
    }
}
*/
            ),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            }
        }).then((res)=>res.json()).then((data)=>{
            set_loading(false);
            if(data.status==true){
                console.log("SUCCESS ON EDIT",data);
                set_edit(false);
                set_get_now(!get_now)
                set_ad_success_message(data.message);
                set_ad_success(true);
                setTimeout(()=>{
                    set_ad_success(false);
                },5000);
            }else{
                console.log("made request but got a bug:    ",data);
                // set_failed_top(0);
                // setTimeout(()=>{
                //     set_failed_top(-10);
                // },2000);
                set_ad_fail_message(data.message);
                set_ad_fail(true);
                setTimeout(()=>{
                    set_ad_fail(false);
                },5000);
            }
        }).catch((err)=>{
            set_loading(false);
            console.log("Couldn't make request: ",err);
            // set_failed_top(0);
            // setTimeout(()=>{
            //     set_failed_top(-10);
            // },2000);
            set_ad_fail_message("Check your internet connection");
            set_ad_fail(true);
            setTimeout(()=>{
                set_ad_fail(false);
            },5000);
        })
    }
    return (
        <div style={{width:"100%",height:"100%",fontSize:"14px",backgroundColor:"white",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            {/* <div style={{width:"90%",textAlign:"end",position:"absolute",top:"1%",right:"1%"}}><FaCircleXmark size={30} onClick={()=>{
                set_edit(false);
            }}/></div> */}
            <div style={{backgroundColor:"orange",width:"90%",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",textAlign:"center",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                            <div style={{color:"white",cursor:"pointer",textAlign:"center",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
                                set_edit(false);
                            }}>
                            <FaArrowLeft size={30}/>
                            </div>
                            <div style={{marginLeft:"20px"}}>EDIT BUSINESS</div>
                        </div>
                        
                    </div>
            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(240,240,240)",aspectRatio:"3/1",paddingTop:"10px",paddingBottom:"10px"}} onDragLeave={(e)=>{
                            e.preventDefault();
                            e.target.style.border="0px dashed transparent";
                        }} onDragOver={(e)=>{
                            e.preventDefault();
                            e.target.style.border="2px dashed orange";
                        }} onDrop={(e)=>{
                            e.preventDefault();
                            if(e.dataTransfer.files[0].type.startsWith("image/")){
                                set_im(e.dataTransfer.files[0]); 
                            }
                            e.target.style.border="0px dashed transparent";
            }}>
                {
                    im==""?
                    // <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    //                                 <FaUpload size={100} color="gray"/>
                    //                                 <div>Drag & Drop Image File here</div>
                    // </div>:
                    // <img src={URL.createObjectURL(im)} alt="image" style={{width:"90%",aspectRatio:"3/1"}}/>
                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                <ImageDown size={100} color="gray"/>
                                <div style={{marginTop:"10px"}}>Drag & Drop Image File here</div>
                            </div>:<img src={URL.createObjectURL(im)} alt="" style={{width:"100%",aspectRatio:"3/1"}}/>
                }
                
            </div>
            <div style={{marginTop:"5px"}}>OR</div>
            <label style={{width:"90%",fontSize:"12px",marginTop:"5px",paddingTop:"13px",paddingBottom:"13px",cursor:"pointer",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}><FaPlus/> Click to upload business logo
                    <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                        set_im(e.target.files[0]);
                    }}/>
            </label>
            <div style={{fontFamily:"arial",fontSize:"12px",width:"90%",textAlign:"end"}}><sub>Max: 2MB. PNG, JPEG only.</sub></div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Business Name</div>
                <input type="text" value={business_name} placeholder="Enter your business name..." style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{
                    set_business_name(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Short Name</div>
                <input type="text" value={short_name} placeholder="..." style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{
                    set_short_name(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Business Description</div>
                <input type="text" value={desc} placeholder="Add description here" style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{
                    set_desc(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Business Address</div>
                <input type="text" value={address} placeholder="e.g. Abuja" style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{
                    set_address(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Contact Email</div>
                <input type="text" value={email} placeholder="Business Contact Email" style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{
                    set_email(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Country</div>
                <input type="text" value={country} placeholder="e.g. Nigeria" style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}} onChange={(e)=>{
                    set_country(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px",backgroundColor:"orange",color:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}} onClick={async()=>{
                if(loading==false){
                    await make_edit();
                }
            }}>
                {loading==false?<div>Update</div>:<div>Loading...</div>}
            </div>

            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"red",color:"honeydew",top:`${failed_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.4s linear",textAlign:"center"}}>
                UPDATE FAILED
            </div>

            {ad_fail&&
            <div style={{position:"fixed",backgroundColor:"red",color:"white",top:"30%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                    <FaExclamationCircle size={30}/> {ad_fail_message} 
                </div>
            </div>
            }

        </div>
    );
}

export default Business_edit;