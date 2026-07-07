import { useEffect, useState } from "react";
import { BiEdit, BiExit } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { FaArrowDown, FaArrowLeft, FaBook, FaCalendar, FaCaretLeft, FaCheckCircle, FaExclamationCircle, FaIcicles, FaImage, FaInfoCircle, FaPiedPiper, FaPlus, FaSearch, FaUpload } from "react-icons/fa";
import { FaCircleXmark, FaDownload, FaEarthAfrica, FaEllipsisVertical, FaLocationPin, FaMessage, FaPerson, FaPhotoFilm } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { data, Link, useSearchParams } from "react-router-dom";
import Business_view from "./business_view";
import Business_edit from "./business_edit";
import {AlarmCheck, BellCheck, ImageDown, Loader, Loader2, LoaderPinwheel, Upload} from "lucide-react"
import Business_large from "../../../large_screen/businesses";
//import { s3 } from "./s3";
// import { S3Client,PutObjectCommand } from "@aws-sdk/client-s3";
// import {FetchHttpHandler} from "@aws-sdk/fetch-http-handler"
//import axios from "axios";

//https://nellalink-middleware-dev.eu-4.evennode.com/docs/api/#/File%20Manager/post_api_v1_nellalink_file_manager_aws_upload_url

function Business({prop_set_q}){
    const url=`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business`;
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const get_all_url = `${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business?owned_by=${localStorage.getItem("uuid")}&page=1&parent_entity_type=&parent_entity_uuid=&per_page=${1000000}&sort_by=uuid&sort_order=asc`;
    const z = ["Filter Enabled, Disabled","Enabled","Disabled"];
    const [z_main,set_z_main]=useState("enabled");
    const [z_all,set_z_all]=useState("disabled");
    const [z_search,set_z_search]=useState("");
    const [x,set_x]=useState("Filter Enabled, Disabled");
    const [q,set_q]=useState(false);
    const [ad,set_ad]=useState(false);
    const [sc,set_sc]=useState("");

    const [loading,set_loading] = useState(false);
    const [create_text,set_create_text] = useState("Operation failed");
    const [create_top,set_create_top] = useState(-10);
    const [create_s_text,set_create_s_text] = useState("Success");
    const [create_s_top,set_create_s_top] = useState(-10);

    const [title_name,set_title_name]=useState("");
    const [description,set_description]=useState("");
    const [business_address,set_business_address] = useState("");
    const [contact_email,set_contact_email] = useState("");
    const [country,set_country] = useState("");

    const [get_now,set_get_now] = useState(false);
    const [loading_get_now,set_loading_get_now] = useState(false);
    const [all_data,set_all_data] = useState(null);
    const [i,set_i]=useState(null);

    const [query] = useSearchParams();

    const [view,set_view]=useState(false);
    const [business_name_v,set_business_name_v]=useState("");
    const [business_address_v,set_business_address_v]=useState("");
    const [business_email_v,set_business_email_v]=useState("");
    const [business_desc_v,set_business_desc_v]=useState("");
    const [business_country_v,set_business_country_v]=useState("");
    const [business_status_v,set_business_status_v]=useState("");
    const [business_logo_v,set_business_logo_v]=useState("");

    const [edit,set_edit] = useState(false);
    const [business_uuid,set_business_uuid] = useState("");

    const [short_name,set_short_name]=useState("");
    const [business_owned_by,set_business_owned_by] = useState("");

    const [nw,set_nw]=useState(`${Date.now().toString()}`);

    const [mem,set_mem]=useState({title_name:""});
    const [mem_from,set_mem_from]=useState(null);
    const [mem_to,set_mem_to]=useState(null);
    const [mem_on,set_mem_on]=useState(false);

    const [dragIndex,set_dragIndex] = useState(null);

    const [ht,set_ht]=useState({
        first:30,second:70,add1:30,search1:"flex",filter1:"flex"
        // first:10,
        // second: 90,
        // add1: 100,
        // search1: "none",
        // filter1: "none"
    });

    const [ad_success,set_ad_success]=useState(false);
    const [ad_fail,set_ad_fail]=useState(false);
    const [ad_success_message,set_ad_success_message]=useState("");
    const [ad_fail_message,set_ad_fail_message]=useState("");

    //entity_featured_url: "https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/6a622d6e-b707-4159-9742-1ad91d4cc620/info/logo/1781768213528-w.jpg"

    useEffect(()=>{
        if(query.get("q") == "create"){
            set_ad(true);
        }
    },[]);

    const handleDrop = (dropIndex)=>{
        const newItems = [...all_data];

        [newItems[dragIndex],newItems[dropIndex]]=[newItems[dropIndex],newItems[dragIndex],];
        set_all_data(newItems);
        set_dragIndex(null);
    }


    
    async function create_business(file,nw){
        set_loading(true);
        await fetch(url,{
            method:"post",
            body: JSON.stringify({
                request_id: Date.now().toString(),
                meta_key: title_name,
                meta_value: "",
               // slug: "string",
               // data_type: "string",
               // created_by:"string",
                title_name: title_name,
                description: description,
              //  entity_type: "nellalink_business",
                entity_featured_url: `https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/${localStorage.getItem("uuid")}/info/logo/${Date.now().toString()}-${encodeURIComponent(file.name.toString().slice(file.name.toString().lastIndexOf(".")))}`,
                //entity_featured_url:"https://nellalink.s3.eu-west-1.amazonaws.com/entity/nellalink_business/6a622d6e-b707-4159-9742-1ad91d4cc620/info/logo/1781952232029-a2.jpg",
                extra_data: {
                 //   key_name1:"value1",
                 //   key_name2: 2,
                    business_address:business_address,
                    contact_email:contact_email,
                    enable_on_portal_listing: true,
                    country_of_registration: country
                },
                status: "enabled",
                //parent_entity_type: "business",
               // parent_entity_uuid: localStorage.getItem("uuid"),
                owned_by: localStorage.getItem("uuid")

                
    // "request_id": "1781335841198",
    // "entity_featured_url": "",
    // "meta_key": "",
    // "meta_value": "",
    // "title_name": "",
    // "description": "",
    // "status": "enabled",
    // "owned_by": "6a622d6e-b707-4159-9742-1ad91d4cc620",
    // "created_by": "",
    // "extra_data": {
    //     "business_address": "",
    //     "contact_email": "",
    //     "enable_on_portal_listing": true,
    //     "country_of_registration": "Nigeria",
    //     "country_of_operation": "us,ng,gh",
    //     "enable_feature_menu": true
    // }

            }),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                set_get_now(!get_now);
                set_ad(false);
                set_create_s_text("successfully created business");
                set_create_s_top(0);
                setTimeout(() => {
                    set_create_s_top(-10);
                }, 3000);
            }else{
                set_loading(false);
                console.log(data);
                set_create_text(data.message);
                set_create_top(0);
                setTimeout(() => {
                    set_create_top(-10);
                }, 3000);
            }
         }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
            set_create_text("Check your internet connection.");
            set_create_top(0);
            setTimeout(() => {
                set_create_top(-10);
            }, 3000);
        });
    }

    // const s3 = new S3Client({
    // region: "eu-west-1",
    // credentials: {
    //     accessKeyId: "AKIASZPIVUO5LETSUJWI",
    //     secretAccessKey: "code"
    // },
    // requestHandler: new FetchHttpHandler(),
    // })

    // [file_url,set_file_url]=useState("");
        let complete_upload = async(body,file)=>{
            console.log(body);
            await fetch(body.upload_url,{
                method:"put",
                body: file,
                headers: {
                    "Content-Length": file.size,
                    "Content-type": file.type,
                }
            }
           
        ).then(async()=>{
          //  set_file_url(body.file_url);
            await create_business11(body.file_url);
        })
        }
        

        async function file_upload(file){
        set_loading(true);
        set_nw(`${Date.now().toString()}`);
        console.log("------------",file.type);
        //
        //`https://middleware-dev.middey.com/api/entity/nellalink_business/${localStorage.getItem("uuid")}/info/logo/${nw}-${file.name}`
        await fetch(`${import.meta.env.VITE_MIDDLEWARE_API_URL}/api/v1/nellalink/file-manager/aws/upload-url`,{
            method:"post",
            headers:{
                "Content-Type": "application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY,
               "authorization":`Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                files: [
                    {
                    "file_name": file.name,//`logo.jpg`
                    "file_type": file.type,
                    "file_size": file.size,
                    "visibility": "public",
                    "directory": `business/logo/${localStorage.getItem("uuid")}`
                    }
                ],
                
                "user_uuid": `${localStorage.getItem("uuid")}`,
                "expires_in": 3600
                })
        }).then((res)=>res.json()).then(async(data)=>{
           // set_loading(false);
            if(data.status){
                
                console.log("Upload Successful:    ",data);
                await complete_upload(data.data[0],file);
            }else{
                //await create_business(file,nw);
                set_loading(false);
                console.log("Upload failed:    ",data);
                set_ad_fail_message(data.message);
                set_ad_fail(true);
                setTimeout(()=>{
                    set_ad_fail(false);
                },5000);
           }
        }).catch((err)=>{
            set_loading(false);
            console.log("Could not make upload request:    ",err);
            set_ad_fail_message("Check your internet connection");
            set_ad_fail(true);
            setTimeout(()=>{
                set_ad_fail(false);
            },5000);
        })
  
        // await s3.send(
        //     new PutObjectCommand({
        //         Bucket: "bucket-name",
        //         Key: file.name,
        //         Body: new Blob([file]),
        //         ContentType: file.type,
        //     })
        // ).then((res)=>{
        //     set_loading(false);
        //     console.log("uplaoded:  ",res);
        // }).catch((err)=>{
        //     set_loading(false);
        //     console.log("Nope:  ",err);
        // })
        
    }
    

    async function create_business11(file){
        set_loading(true);
        await fetch(url,{
            method:"post",
            body: JSON.stringify({
                request_id: Date.now().toString(),
                meta_key: title_name,
                meta_value: "",
                title_name: title_name,
                description: description,
              //  entity_type: "nellalink_business",
                entity_featured_url: file,
                extra_data: {

                    business_address:business_address,
                    contact_email:contact_email,
                    enable_on_portal_listing: true,
                    country_of_registration: country
                },
                status: "enabled",
                owned_by: localStorage.getItem("uuid")
            }),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": import.meta.env.VITE_APP_API_KEY
            },
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                set_get_now(!get_now);
                set_ad(false);
                // set_create_s_text("successfully created business");
                // set_create_s_top(0);
                // setTimeout(() => {
                //     set_create_s_top(-10);
                // }, 3000);
                set_ad_success_message(data.message);
                set_ad_success(true);
                setTimeout(()=>{
                    set_ad_success(false);
                },5000);
            }else{
                set_loading(false);
                console.log(data);
                // set_create_text(data.message);
                // set_create_top(0);
                // setTimeout(() => {
                //     set_create_top(-10);
                // }, 3000);
                set_ad_fail_message(data.message);
                set_ad_fail(true);
                setTimeout(()=>{
                    set_ad_fail(false);
                },5000);
            }
         }).catch((err)=>{
            console.log(`nope: ${err}`);
            set_loading(false);
            // set_create_text("Check your internet connection.");
            // set_create_top(0);
            // setTimeout(() => {
            //     set_create_top(-10);
            // }, 3000);
            set_ad_fail_message("Check your internet connection.");
            set_ad_fail(true);
            setTimeout(()=>{
                set_ad_fail(false);
            },5000);
        });
    }


    useEffect(()=>{
        async function get_business(){
        set_loading_get_now(true);
            await fetch(get_all_url,{
                method: "get",
                headers:{
                    "Content-Type": "application/json",
                    "x-api-key": import.meta.env.VITE_APP_API_KEY
                }
            }).then((res)=>res.json()).then((data)=>{
                set_loading_get_now(false);
                if(data.status==true){
                    set_all_data(data.data);
                }else{

                }
                console.log("success:   ",data);
            }).catch((err)=>{
                set_loading_get_now(false);
                console.log("SORRY",err);
            });
        }
        get_business();
    },[get_now]);


    return (
        <>
        <div id="small_business" style={{width:"100%",height:"70%",backgroundColor:"rgb(250,250,250)",overflow:"scroll",flexDirection:"column",alignItems:"center",position:"relative",color:"black"}}>
             <div style={{width:"100%",height:`${ht.first}%`,transition:"all 0.3s linear",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
            <div style={{width:ht.first==10?"90%":"90%",height:`${ht.add1}%`,fontSize:"14px",transition:"all 0.3s linear",paddingLeft:"3%",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",backgroundColor:"#fd7e14",borderRadius:"10px"}} onClick={()=>{
                set_ad(true);
            }}><FaPlus size={14}/><div style={{paddingLeft:"3%"}}>Add Business</div></div>
            <div style={{width:"90%",height:"30%",backgroundColor:"rgb(255,255,255)",overflow:"scroll",display:`${ht.search1}`,flexDirection:"row",alignItems:"center",borderRadius:"10px"}}>
                <FaSearch size={14} color={"gray"} style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",alignItems:"center"}}/>
                <input type="text" value={z_search} placeholder="Search Email, name" style={{fontSize:"12px",backgroundColor:"transparent",height:"100%",border:"0px",width:"90%"}} onChange={(e)=>{
                    set_z_search(e.target.value);
                    if(z_search!=""){
                        set_z_main("");
                        set_z_all("");
                    }else{
                        set_z_main("enabled");
                        set_z_all("disabled");
                    }
                }}/>
            </div>
            <div style={{width:"90%",height:"30%",position:"relative",color:"black",backgroundColor:"rgba(250,250,250,0)",display:`${ht.filter1}`,flexDirection:"column",alignItems:"start",justifyContent:"center",borderRadius:"10px",position:"relative"}}>
                <div style={{width:"90%",fontWeight:"bold",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{
                    set_q(!q);
                }}>
                    <div>{x}</div>
                    <FaArrowDown style={{marginLeft:"10px"}}/>
                </div>
                {
                q==true?
                <div style={{width:"40%",zIndex:"2",backgroundColor:"white",paddingTop:"10px",paddingBottom:"10px",position:"absolute",top:"100%",left:"0%",overflow:"scroll"}}>
                    {
                        z.map((item,index)=>{
                            return (
                                <div className="add" key={index} style={{width:"100%",paddingLeft:"10px",cursor:"pointer",paddingRight:"3px",paddingTop:"10px",paddingBottom:"10px",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
                                    set_x(item);
                                    set_q(!q);
                                    set_z_search("");
                                    if(index == 0){
                                        set_z_main("enabled");
                                        set_z_all("disabled");
                                    }else if(index==1){
                                        set_z_main("enabled");
                                        set_z_all("enabled");
                                    }else if(index==2){
                                        set_z_main("disabled");
                                        set_z_all("disabled")
                                    }
                                }}>{item}</div>
                            )
                        })
                    }
                </div>:null
                }
            </div>

            </div>
            {/* ....... */}
             <div style={{width:"100%",height:`${ht.second}%`,transition:"all 0.3s linear",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll",backgroundColor:"rgb(250,250,250)",opacity:"1"}} onScroll={(e)=>{
                if(e.target.scrollTop >= 20){
                    set_ht({
                        first:10,
                        second: 90,
                        add1: 100,
                        search1: "none",
                        filter1: "none"
                    })
                }else{
                    set_ht({
                        first:30,
                        second: 70,
                        add1: 30,
                        search1: "flex",
                        filter1: "flex"
                    })
                }
             }}>
            {
                all_data==null?
                loading_get_now==true?
                <div style={{width:"90%",height:"100%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px"}}>
                <Loader className="loading"  size={90} color="#fd7e14"/>
                </div>:
                
            <div style={{width:"90%",marginTop:"20px",fontSize:"14px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}>
                <FaInfoCircle size={30}/>
                <div style={{width:"80%",color:"black",textAlign:"center"}}>No Business data available</div>
                <div style={{width:"80%",color:"gray",textAlign:"center"}}>Please add a Business to see them listed here.</div>
            </div>:
            <div style={{width:"90%",marginTop:"0px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px",backgroundColor:"rgb(255,255,255)",borderRadius:"10px"}}>
            <div style={{width:"100%",fontSize:"14px",overflow:"hidden",borderRadius:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#fd7d143a",color:"black"}}>
                <div style={{width:"90%",fontWeight:"bolder",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"10%",textAlign:"center"}}><input type="checkbox"/></div>
                        <div style={{width:"10%",textAlign:"center"}}>S/N</div>
                    </div>
                    <div style={{width:"70%",textAlign:"start"}}>Business Name</div>
                </div>
            </div>
            {all_data.map((item,index)=>{
                if((item.status==z_main&&z_main!="") || (item.status==z_all&&z_all!="") || (item.extra_data.contact_email?.toString().toLowerCase().startsWith(z_search.toString().toLowerCase()) && z_search!="") || (item.title_name?.toString().toLowerCase().startsWith(z_search.toString().toLowerCase()) && z_search!="")){
                return (
                    <div key={index} style={{width:"100%",position:"relative",cursor:"grab",transition:"all 0.1s linear",marginTop:"0px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(255,255,255)",borderRadius:"0px",borderBottom:"1px solid rgb(220,220,220)"}} draggable onDragOver={(e)=>{
                        e.preventDefault();
                    }} onDragStart={(e)=>{
                        set_dragIndex(index);
                        e.target.style.opacity="0";
                        // const dragImage=document.createElement("div");
                        // dragImage.style.backgroundColor="red";
                        // dragImage.style.color="black";
                        // dragImage.style.paddingTop="20px";
                        // dragImage.style.paddingBottom="20px";
                        // dragImage.style.width="90%";
                        // dragImage.textContent=item.title_name;

                        // document.body.appendChild(dragImage);

                        // e.dataTransfer.setDragImage(dragImage,20,20);
                        // setTimeout(()=>{
                        //     document.body.removeChild(dragImage);
                        // },0);
                    }} onDrop={(e)=>{
                        
                        handleDrop(index);
                    }}
                    onDragEnd={(e)=>{
                        e.target.style.opacity="1";
                    }}
                    >
                        <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <div style={{width:"13%",opacity:i==index?"0":"1",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div style={{}}><input type="checkbox"/></div>
                                <div style={{textAlign:"flex-end",fontSize:"14px"}}>{index+1}</div>
                            </div>
                            
                            <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                {/* <div style={{paddingRight:"10px",backgroundColor:"rgb(200,200,200)",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",textAlign:"center"}}> */}
                                    {/* <FaImage size={30} color={"gray"} style={{paddingRight:"10px"}}/> */}
                                    <img src={item.entity_featured_url} alt="" style={{width:"15%",opacity:i==index?"0":"1",aspectRatio:"1/1",borderRadius:"100px",backgroundColor:"rgb(200,200,200)"}}/>
                                {/* </div> */}
                                <div style={{width:"65%",overflow:"scroll",opacity:i==index?"0":"1",display:"flex",flexDirection:"column",alignItems:"start"}}>
                                    <div style={{fontSize:"14px",fontWeight:"bolder"}}>{item.title_name}</div>
                                    <div style={{fontSize:"12px",color:"gray"}}>{item.extra_data.contact_email}</div>
                                    <div style={{fontSize:"12px",color:"gray"}}>{item.extra_data.business_address}</div>
                                    <div style={{width:"40%",fontSize:"12px",paddingTop:"3px",paddingBottom:"3px",backgroundColor:"rgb(250,250,250)",color:"gray",borderRadius:"9px",textAlign:"center"}}>{item.status}</div>
                                </div>
                                <FaEllipsisVertical size={24} color="gray" style={{cursor:"pointer"}} onClick={()=>{
                                    if(i==index){
                                        set_i(null);
                                    }else{
                                    set_i(index);
                                    }
                                }}/>
                            </div>
                        </div>
                        {/* {
                            i==index&&
                            <div style={{width:"30%",zIndex:"10",fontSize:"12px",position:"absolute",backgroundColor:"rgb(255,255,255)",boxShadow:"px 0px 10px black",paddingLeft:"10px",paddingRight:"10px",top:"0%",right:"10%",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"start"}}>
                                <div style={{width:"100%",height:"100%",paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-evenly"}}>
                                    <div className="view" style={{display:"flex",alignItems:"center",justifyContent:"start"}} onClick={()=>{
                                        set_view(true);
                                        set_business_name_v(item.title_name);
                                        set_business_address_v(item.extra_data.business_address);
                                        set_business_email_v(item.extra_data.contact_email);
                                        set_business_desc_v(item.description);
                                        set_business_country_v(item.extra_data.country_of_registration);
                                        set_business_status_v(item.status);
                                        set_business_logo_v(item.entity_featured_url);
                                        
                                        set_i(null);
                                    }}><BsViewList size={20}/> View</div>
                                    <div className="view" style={{display:"flex",alignItems:"center",justifyContent:"start"}}  onClick={()=>{
                                        set_edit(true);
                                        set_business_uuid(item.uuid);
                                        set_business_owned_by(item.owned_by);

                                        set_business_name_v(item.title_name);
                                        set_business_address_v(item.extra_data.business_address);
                                        set_business_email_v(item.extra_data.contact_email);
                                        set_business_desc_v(item.description);
                                        set_business_country_v(item.extra_data.country_of_registration);
                                        set_business_status_v(item.status);
                                        set_short_name(item.meta_key);
                                        set_business_logo_v(item.entity_featured_url);

                                        set_i(null);
                                        
                                    }}><BiEdit size={20}/> Edit</div>
                                    <Link to={"/menu?q=create_menu"} state={item} className="view" style={{textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"start"}}><MdManageAccounts size={20}/> Manage</Link>
                                </div>
                            </div>
                        } */}
                        {
                            i==index&&
                            <div style={{width:"80%",zIndex:"10",fontSize:"12px",position:"absolute",backgroundColor:"rgb(255,255,255)",boxShadow:"px 0px 10px black",paddingLeft:"10px",paddingRight:"10px",top:"20%",left:"0%",display:"flex",flexDirection:"row",alignItems:"end",justifyContent:"start"}}>
                                <div style={{width:"100%",height:"100%",paddingLeft:"10px",paddingRight:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                    <div className="view" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(250,250,250)",borderRight:"1px solid rgb(200,200,200)"}} onClick={()=>{
                                        set_view(true);
                                        set_business_name_v(item.title_name);
                                        set_business_address_v(item.extra_data.business_address);
                                        set_business_email_v(item.extra_data.contact_email);
                                        set_business_desc_v(item.description);
                                        set_business_country_v(item.extra_data.country_of_registration);
                                        set_business_status_v(item.status);
                                        set_business_logo_v(item.entity_featured_url);
                                        
                                        set_i(null);
                                    }}><BsViewList size={20}/> View</div>
                                    <div className="view" style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(250,250,250)",borderRight:"1px solid rgb(200,200,200)"}} onClick={()=>{
                                        set_edit(true);
                                        set_business_uuid(item.uuid);
                                        set_business_owned_by(item.owned_by);

                                        set_business_name_v(item.title_name);
                                        set_business_address_v(item.extra_data.business_address);
                                        set_business_email_v(item.extra_data.contact_email);
                                        set_business_desc_v(item.description);
                                        set_business_country_v(item.extra_data.country_of_registration);
                                        set_business_status_v(item.status);
                                        set_short_name(item.meta_key);
                                        set_business_logo_v(item.entity_featured_url);

                                        set_i(null);
                                        
                                    }}><BiEdit size={20}/> Edit</div>
                                    <Link to={"/menu?q=create_menu"} state={item} className="view" style={{textDecoration:"none",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(250,250,250)"}}><MdManageAccounts size={20}/> Manage</Link>
                                </div>
                            </div>
                        }
                    </div>
                        
                    
                )}

            })}
            </div>
            }
            
            </div>

            {/* ..................................... */}

            {
                            ad&&
                            <div style={{width:"100%",height:"100%",fontSize:"14px",overflow:"scroll",backgroundColor:"rgb(250,250,250)",position:"absolute",top:"0%",left:"0%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <div style={{backgroundColor:"orange",width:"80%",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                    <div style={{width:"90%",textAlign:"center",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                        <div style={{color:"white",cursor:"pointer",textAlign:"center",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
                                            set_ad(false);
                                        }}>
                                        <FaArrowLeft size={30}/>
                                        </div>
                                        <div style={{marginLeft:"20px"}}>CREATE A NEW BUSINESS</div>
                                    </div>
                                    
                                </div>
                                <div style={{width:"80%",height:"80%",backgroundColor:"white",position:"relative",marginBottom:"20px",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                                    <div style={{width:"60%",aspectRatio:"2/1",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative",backgroundColor:"rgb(250,250,250)"}} onDragLeave={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="0px dashed transparent";
                                    }} onDragOver={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="2px dashed orange";
                                    }} onDrop={(e)=>{
                                        e.preventDefault();
                                        if(e.dataTransfer.files[0].type.startsWith("image/")){
                                            set_sc(e.dataTransfer.files[0]); 
                                        }
                                        e.target.style.border="0px dashed transparent";
                                    }}>
                                    {
                                        sc==""?
                                        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                            <ImageDown size={100} color="gray"/>
                                            <div style={{marginTop:"10px"}}>Drag & Drop Image File here</div>
                                        </div>:<img src={URL.createObjectURL(sc)} alt="qwe" style={{width:"100%",aspectRatio:"2/1"}}/>
                                    }
                                    </div>
                                    <div>OR</div>
                                    <label style={{width:"80%",backgroundColor:"rgb(230,230,230)",cursor:"pointer",borderRadius:"10px",marginTop:"10px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                        <Upload size={20}/>
                                        <div>Click here to upload image</div>
                                        <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                            set_sc(e.target.files[0]);
                                        }}/>
                                    </label>
                                    <div style={{width:"80%",paddingTop:"3px",paddingBottom:"3px",display:"flex",flexDirection:"row",alignItems:"center",fontSize:"10px"}}>Max: 2MB. PNG, JPEG only.</div>
                                    <div style={{width:"80%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                        <div style={{width:"100%",marginTop:"10px"}}>Business Name</div>
                                        <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
                                            <FaBook size={20}/>
                                            <input type="text" value={title_name} placeholder="Smart Business Suite" style={{width:"90%",border:"0px"}} onChange={(e)=>{
                                                set_title_name(e.target.value);
                                            }}/>
                                        </div>
            
                                        <div style={{width:"100%",marginTop:"10px"}}>Short Name</div>
                                        <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
                                            <FaPerson size={20}/>
                                            <input type="text" placeholder="SBS" style={{width:"90%",border:"0px"}}/>
                                        </div>
            
                                        <div style={{width:"100%",marginTop:"10px"}}>Description</div>
                                        <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                            <input type="text" value={description} placeholder="Add description here" style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"transparent",border:"0px"}} onChange={(e)=>{
                                                set_description(e.target.value);
                                            }}/>
                                        </div>
            
                                        <div style={{width:"100%",marginTop:"10px"}}>Business Address</div>
                                        <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
                                            <FaLocationPin size={20}/>
                                            <input type="text" value={business_address} placeholder="Abuja" style={{width:"90%",border:"0px"}} onChange={(e)=>{
                                                set_business_address(e.target.value);
                                            }}/>
                                        </div>
            
                                        <div style={{width:"100%",marginTop:"10px"}}>Contact Email</div>
                                        <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
                                            <FaMessage size={20}/>
                                            <input type="text" value={contact_email} placeholder="Business contact email" style={{width:"90%",border:"0px"}} onChange={(e)=>{
                                                set_contact_email(e.target.value);
                                            }}/>
                                        </div>
            
                                        <div style={{width:"100%",marginTop:"10px"}}>Country</div>
                                        <div style={{width:"100%",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"4px",marginBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",paddingLeft:"10px",paddingRight:"10px",boxSizing:"border-box"}}>
                                            <FaEarthAfrica size={20}/>
                                            <input type="text" value={country} placeholder="" style={{width:"90%",border:"0px"}} onChange={(e)=>{
                                                set_country(e.target.value);
                                            }}/>
                                        </div>
            
                                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",cursor:"pointer",backgroundColor:"orange",marginTop:"10px",textAlign:"center",borderRadius:"4px",marginBottom:"10px",color:"white",fontSize:"14px"}} onClick={async()=>{
                                            if(loading==false){
                                               // await create_business11();
                                              await file_upload(sc);
                                            }
                                            
                                        }}>{loading?"Loading...":"Register"}</div>
                                    </div>
                                    
                                
                                </div>
                                
                                {ad_fail&&
                                <div style={{position:"absolute",backgroundColor:"red",color:"white",top:"0%",left:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                                    <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                        <FaExclamationCircle size={30}/> {ad_fail_message} 
                                    </div>
                                </div>
                                }
                                
                            </div>
                        }
            {
                view&&
                <Business_view set_view={set_view} business_name_v={business_name_v} business_address_v={business_address_v} business_email_v={business_email_v} business_desc_v={business_desc_v} business_country_v={business_country_v} business_status_v={business_status_v} business_logo_v={business_logo_v}/>
            }
            {   edit&&
                <Business_edit set_ad_success={set_ad_success} set_ad_success_message={set_ad_success_message} set_get_now={set_get_now} get_now={get_now} set_edit={set_edit} business_owned_by={business_owned_by} short_name1={short_name} business_uuid={business_uuid} business_name_v={business_name_v} business_address_v={business_address_v} business_email_v={business_email_v} business_desc_v={business_desc_v} business_country_v={business_country_v} business_status_v={business_status_v} business_logo_v={business_logo_v}/>
            }

            {ad_success&&
                    <div style={{position:"absolute",backgroundColor:"orange",color:"white",top:"0%",left:"0%",width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 1s linear",textAlign:"center",fontSize:"16px"}}>
                        <div style={{paddingTop:"20px",paddingBottom:"20px",width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                            <FaCheckCircle size={30}/> {ad_success_message}
                        </div>
                    </div>
            }
        </div>

        <Business_large/>
        </>
    )
}

export default Business;