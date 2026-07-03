import { useState,useEffect } from "react";
import { BiEdit } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { FaArrowDown, FaBusinessTime, FaCaretDown, FaCheckCircle, FaDollarSign, FaDownload, FaEuroSign, FaIcicles, FaInfoCircle, FaPlus, FaRegImages, FaSearch, FaUpload } from "react-icons/fa";
import { FaArrowRight, FaCediSign, FaCircleXmark, FaDeleteLeft, FaEllipsisVertical, FaImage, FaNairaSign, FaSpinner, FaX } from "react-icons/fa6";
import { MdManageAccounts } from "react-icons/md";
import { Link, useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Menu_qr_code from "./menu_qr_code";
import Menu_del from "./menu_del";
import Menu_edit from "./menu_edit";
import { Loader } from "lucide-react";

function Menu_large(){

    const location = useLocation();
    const navigate = useNavigate();
    const [query] = useSearchParams();

    const url=`https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu?owned_by=${location.state?.owned_by}&parent_entity_type=${location.state?.parent_entity_type}&parent_entity_uuid=${location.state?.parent_entity_uuid}`
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const get_all_menu_url = `https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu?owned_by=${localStorage.getItem("uuid")}&parent_entity_type=nellalink_business&per_page=20000000`;
//https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu?owned_by=6a622d6e-b707-4159-9742-1ad91d4cc620&parent_entity_type=nellalink_business&parent_entity_uuid=2abf5fdf-8982-4cde-97a1-9e0f3a4e8a4e
//https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu?owned_by=6a622d6e-b707-4159-9742-1ad91d4cc620&parent_entity_type=nellalink_business&parent_entity_uuid=2abf5fdf-8982-4cde-97a1-9e0f3a4e8a4e
//https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu?owned_by=6a622d6e-b707-4159-9742-1ad91d4cc620&parent_entity_type=nellalink_business
    const get_business_url = `https://backend-test.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business?owned_by=${localStorage.getItem("uuid")}&page=1&parent_entity_type=&parent_entity_uuid=&per_page=10&sort_by=uuid&sort_order=asc`;

    const z = ["Filter Enabled, Disabled","Enabled","Disabled"];
    const [z_main,set_z_main]=useState("enabled");
    const [z_all,set_z_all]=useState("disabled");
    const [z_search,set_z_search]=useState("");
    const [x,set_x]=useState("Filter Enabled");
    const [q,set_q]=useState(false);
    const [show_menu,set_show_menu] = useState("");

    const [title,set_title] = useState("");
    const [description,set_description] = useState("");
    const [slug,set_slug] = useState("");
    const [currency,set_currency] = useState("Nigerian Naira (NGN)");
    const [category,set_category]=useState("");
    const [s_title,set_s_title]=useState("");
    const [n_tx,set_n_tx]=useState("");
    const [t_desc,set_t_desc]=useState("");
    const [con_email,set_con_email]=useState(localStorage.getItem("email"));
    const [con_address,set_con_address]=useState("");
    const [phone_num,set_phone_num]=useState("");

    const [loading,set_loading]=useState(false);

    const [create_text,set_create_text] = useState("Operation failed");
    const [create_top,set_create_top] = useState(-10);
    const [create_s_text,set_create_s_text] = useState("Success");
    const [create_s_top,set_create_s_top] = useState(-10);

    const [loading_get_now,set_loading_get_now]=useState(false);
    const [get_now,set_get_now]=useState(false);
    const [all_data,set_all_data]=useState(null);
    const [i,set_i]=useState(null);
    const [en,set_en]=useState(null);

    const [show_business,set_show_business]=useState(false);
    const [loading_b_get_now,set_loading_b_get_now]=useState(false);
    const [get_b_now,set_get_b_now]=useState(false);
    const [all_b_data,set_all_b_data]=useState(null);
    const [i_b,set_i_b]=useState(null);

    const [a,set_a]=useState(2);

    const [im_menu,set_im_menu]=useState("");

    const [p_title,set_p_title]=useState("");
    const [p_desc,set_p_desc]=useState("");
    const [p_fee,set_p_fee]=useState("");

    const [f_title,set_f_title]=useState("");
    const [f_desc,set_f_desc]=useState("");
    const [f_fee,set_f_fee]=useState("");

    const [b_title,set_b_title]=useState("");
    const [b_desc,set_b_desc]=useState("");

    const [p,set_p]=useState(false);
    const [f,set_f]=useState(false);
    const [b,set_b]=useState(false);

    const [color,set_color]=useState("rgb(19, 161, 85)");

    const [copied_top,set_copied_top]=useState(-10);
    const [is_copied,set_is_copied]=useState(false);

    const [show_qr,set_show_qr]=useState(false);
    const [qr_nm,set_qr_nm]=useState("");

    const [show_del,set_show_del]=useState(false);
    const [uuid_del,set_uuid_del]=useState("");

    const [show_menu_edit,set_show_menu_edit]=useState(false);

    const [ht,set_ht]=useState({
        //first:40,second:60,add1:30,search1:"flex",filter1:"flex"
        first:10,
        second: 90,
        add1: 100,
        search1: "none",
        filter1: "none"
    });

    const [p_i,set_p_i]=useState("-1");

    const [edit_uuid,set_edit_uuid]=useState("");
    const [edit_owned_by,set_edit_owned_by]=useState("");

    const [dragIndex,set_dragIndex] = useState(null);

    const [drag,set_drag] = useState({parentId:null,index:null});
    const handleDrop = (parentId,dropIndex)=>{
        // if(!all_data) return null;
        // if(drag.parentId !== parentId) return
        // const groups = {...all_data};

        // const list = [...groups[parentId]];

        // const temp = list[drag.index];
        // list[drag.index] = list[dropIndex];
        // list[dropIndex] = temp;
        // groups[parentId]=list;
        // set_all_data(groups);
        // set_drag({parentId:null,index:null});

        const data=[...all_data];
        const indexes=data.map((item,i)=>
        item.parent_entity_uuid===parentId? i : -1).filter(i => i !== -1);

        const from = indexes[drag.index];
        const to = indexes[dropIndex];

        [data[from],data[to]]=[data[to],data[from]];

        set_all_data(data);
        
    }

  



    useEffect(()=>{
        if(query.get("q") == "create_menu"){
            set_show_menu(true);
        }
    },[query]);
    

        async function create_menu(){
        set_loading(true);
        await fetch(url,{
            method:"post",
            body: JSON.stringify({
                slug: slug,
                request_id: Date.now().toString(),
                entity_featured_url: "",
                meta_key: title,
                meta_value: "untitled-2026-06-13",
                title_name: title,
                description: description,
                status: "enabled",
                created_by: "",
                extra_data: {
                    menu_base_wallet_ticker: "",
                    menu_featured_categories: [
                        "delivery"
                        ],
                    menu_base_wallet_ticker_symbol: "",
                    menu_primary_color: color,
                    enable_dark_mode: true,
                    support_tab: {
                    title: s_title,
                    content: "",
                    nav_button_text: n_tx,
                    show_ring_feature_on_support_page: true
                    },
                    contact_info: {
                        email_address: con_email,
                        mobile_number: phone_num,
                        address: con_address,
                        show_contact_info_on_support_page: true
                    },
                    menu_checkout_payments_providers: {
                        paystack: {
                            title: p_title,
                            description: p_desc,
                            fee: p_fee,
                            fee_max_amount: 2000
                        },
                        flutterwave: {
                            title: f_title,
                            description: f_desc,
                            fee: f_fee,
                            fee_max_amount: 2000
                        },
                        bank_transfer: {
                            title: b_title,
                            description: b_desc
                        }
                    },
                    parent_entity_type: "nellalink_business",
                    //parent_entity_type:location.state?.parent_entity_type,
                    parent_entity_uuid: location.state?.uuid,
                    owned_by: location.state?.owned_by,
                    data_type: null,
                    status: "enabled"
                },
                parent_entity_type: "nellalink_business",
               // status: "enabled",
                owned_by: location.state?.owned_by,
                parent_entity_uuid: location.state?.uuid,
                parent_entity: location.state?.uuid,
               // uuid: "accf7c79-605c-43ed-9553-58d80f961888"
            }),
            headers:{
                "Content-Type":"application/json",
                "x-api-key": api
            },
         }).then((res)=> res.json()).then((data)=>{
            if(data.status==true){
                set_loading(false);
                // set_ad(false);
                set_create_s_text("successfully created Menu");
                set_get_now(!get_now);
                set_create_s_top(0);
                set_show_menu(false);
                navigate(location.pathname+location.search,{replace:true,state:null});
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

        useEffect(()=>{
            async function get_menu(){
            set_loading_get_now(true);
                await fetch(get_all_menu_url,{
                    method: "get",
                    headers:{
                        "Content-Type": "application/json",
                        "x-api-key": api
                    }
                }).then((res)=>res.json()).then((data)=>{
                    set_loading_get_now(false);
                    if(data.status==true){
                        set_all_data(data.data);
                        console.log("All menu success:   ",data);
                    }else{
                        console.log("MENU Request Sent but failed:   ",data)
                    }
                }).catch((err)=>{
                    set_loading_get_now(false);
                    console.log("ERROR ON MENU: ",err);
                });
            }
            get_menu();
        },[get_now]);

            useEffect(()=>{
                async function get_business(){
                set_loading_b_get_now(true);
                    await fetch(get_business_url,{
                        method: "get",
                        headers:{
                            "Content-Type": "application/json",
                            "x-api-key": api
                        }
                    }).then((res)=>res.json()).then((data)=>{
                        set_loading_b_get_now(false);
                        if(data.status==true){
                            set_all_b_data(data.data);
                            //set_get_b_now(!get_b_now);
                        }else{
        
                        }
                        console.log("success:   ",data);
                    }).catch((err)=>{
                        set_loading_b_get_now(false);
                        console.log("SORRY",err);
                    });
                }
                get_business();
            },[get_b_now]);
        


    return (
        <div id="large_menu" style={{width:"100%",height:"85%",overflow:"scroll",flexDirection:"column",alignItems:"center",position:"relative",color:"black"}}>
            <div style={{width:"90%",height:`10%`,transition:"all 0.3s linear",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{width:"30%",height:`100%`,transition:"all 0.3s linear",cursor:"pointer",paddingLeft:"3%",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",backgroundColor:"#fd7e14",borderRadius:"10px"}} onClick={()=>{
                if(!location.state){
                    //navigate("/business");
                    if(all_b_data){
                        set_show_business(true);
                    }else{
                        set_get_b_now(!get_b_now);
                        set_show_business(true);
                    }
                    
                    
                }else{
                    set_show_menu(true);
                }
                set_i(null);
                
            }}><FaPlus size={30}/><div style={{fontSize:"20px",paddingLeft:"3%"}}>Add Menu {location.state?.title_name}</div></div>
            <div style={{width:"50%",height:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <div style={{width:"50%",height:"100%",display:`flex`,flexDirection:"row",alignItems:"center",borderRadius:"10px"}}>
                <FaSearch size={20} style={{width:"10%",display:"flex",flexDirection:"row",alignItems:"center",alignItems:"center"}}/>
                <input type="text" value={z_search} placeholder="Search Email, name" style={{backgroundColor:"transparent",height:"100%",border:"0px",width:"90%"}} onChange={(e)=>{
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
           
            <div style={{width:"40%",height:"100%",color:"black",display:`flex`,flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px",position:"relative"}}>
                <div style={{width:"90%",fontWeight:"bold",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",borderRadius:"10px",cursor:"pointer"}} onClick={()=>{
                    set_q(!q);
                }}>
                    <div>{x}</div>
                    <FaArrowDown/>
                </div>
                {/* {
                q==true?
                <div style={{width:"100%",backgroundColor:"white",paddingTop:"10px",paddingBottom:"10px",position:"absolute",border:"1px solid black",top:"0%",overflow:"scroll"}}>
                    {
                        z.map((item,index)=>{
                            return (
                                <div className="add" style={{width:"100%",paddingLeft:"3px",paddingRight:"3px",paddingTop:"1%",paddingBottom:"1%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
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
                } */}
            </div>
            </div>
            </div>
             {/* ................... */}
            {/* <div style={{width:"90%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"-3px 3px 3px gray",borderRadius:"10px"}}>
                <FaIcicles size={30}/>
                <div style={{color:"black"}}>No menu data available</div>
                <div>Please add new items to see them listed here.</div>
            </div> */}
             <div style={{width:"100%",position:"relative",height:`${ht.second}%`,display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}} onScroll={(e)=>{
                // if(e.target.scrollTop >= 20){
                //     set_ht({
                //         first:10,
                //         second: 90,
                //         add1: 100,
                //         search1: "none",
                //         filter1: "none"
                //     })
                // }else{
                //     set_ht({
                //         first:40,
                //         second: 60,
                //         add1: 30,
                //         search1: "flex",
                //         filter1: "flex"
                //     })
                // }
             }}>
                        {
                all_data==null?
                loading_get_now==true?
                <div style={{width:"90%",height:"100%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px"}}>
                    <Loader className="loading"  size={90} color="#fd7e14"/>
                </div>:
                
            <div style={{width:"90%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}>
                <FaInfoCircle size={30}/>
                <div style={{color:"black"}}>No menu data available</div>
                <div>Please add new items to see them listed here.</div>
            </div>:
            <div style={{width:"90%",marginTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}>
            <div style={{width:"100%",fontSize:"14px",overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#fd7d143a",color:"black"}}>
                <div style={{width:"100%",fontWeight:"bolder",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{width:"10%",fontWeight:"bolder",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                        <div style={{width:"60%",textAlign:"end"}}>S/N</div>
                    </div>
                    <div style={{width:"20%",textAlign:"center"}}>Menu Name</div>
                    <div style={{width:"20%",textAlign:"center"}}>Email</div>
                    <div style={{width:"20%",textAlign:"center"}}>Description</div>
                    <div style={{width:"20%",textAlign:"center"}}>View</div>
                    <div style={{width:"10%",textAlign:"center"}}>Actions</div>
                </div>
            </div>
            {/* {
            all_data.map((item,index)=>{
                return (
                    
                        
                    
                )
            })
            } */}
            {
                Object.entries(
                    all_data.reduce((acc,item)=>{
                        const key = item.parent_entity_uuid;
                        // const key = item.title_name;
                        if(!acc[key]){
                            acc[key] = [];
                        }
                        acc[key].push(item);
                        return acc;
                    },{})
                ).map(([parentId,items],index)=>{

                    
                    
                    return(
                    <div key={parentId} style={{width:"100%",position:"relative",borderRadius:"10px",marginTop:"20px",position:"relative",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",color:"#fd7e14"}}>{/*"parentId"*/}Category {index+1}</div>
                        <div style={{color:"orange",fontSize:"14px",position:"absolute",right:"1%",top:"1%",textDecoration:"underline",cursor:"pointer"}} onClick={()=>{
                            set_p_i(index);
                            if(a==2){
                                set_a(all_data.length);
                            }else{
                                set_a(2);
                            }
                        }}>{a==2?"See all":"Collapse"} {a==2?<FaArrowRight/>:<FaCaretDown/>}</div>
                       
                        {
                            items.map((item,index)=>{

                                if(index<a){
                                    if((item.status==z_main&&z_main!="") || (item.status==z_all&&z_all!="") || (item.extra_data.contact_email==z_search && z_search!="") || (item.title_name==z_search && z_search!="")){
                                return(<div key={index} style={{width:"100%",position:"relative",backgroundColor:"rgb(250,250,250)",marginTop:"10px",cursor:"grab",transition:"all 0.1s linear",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",borderRadius:"10px",borderRadius:"0px",borderBottom:"1px solid rgb(200,200,200)"}} draggable
                                     onDragStart={(e)=>{
                                        set_drag({parentId,index});
                                        e.target.style.opacity="0";
                                    }} onDrop={(e)=>{
                                        
                                        handleDrop(parentId,index);
                                    }}onDragEnd={(e)=>{
                                        e.target.style.opacity="1";
                                    }}
                                    onDragOver={(e)=>{
                                        e.preventDefault();
                                    }}>
                        
                                
                        
                                <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                           
                            <div style={{width:"10%",textAlign:"center",fontSize:"14px"}}>{index+1}</div>
                            
                            <div style={{width:"20%",fontWeight:"bolder",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                    <img src={item.entity_featured_url} alt="" style={{width:"20%",aspectRatio:"1/1",borderRadius:"100px",backgroundColor:"rgb(200,200,200)"}}/>
                                
                                    <div style={{width:"60%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                                        <div style={{fontSize:"14px",color:"gray",fontWeight:"bolder"}}>{item.title_name}</div>
                                    </div>
                            </div>
                                <div style={{width:"20%",fontSize:"14px",fontFamily:"arial",color:"gray"}}>{item.extra_data.contact_info.email_address}</div>
                                <div style={{width:"20%",fontSize:"14px",fontFamily:"arial",color:"gray"}}>{item.description}</div>
                                
                            <a href={`https://business.nellalink.com/app/mb/menu/${item.title_name}/`} target="_blank" style={{width:"20%",textAlign:"center",fontSize:"14px",fontWeight:"bolder",color:"gray"}}>View Menu</a>
                            <div style={{width:"10%",textAlign:"center",fontSize:"14px",fontWeight:"bolder"}}>
                                <FaEllipsisVertical size={24} style={{cursor:"pointer"}} onClick={()=>{
                                    set_i(index);
                                    set_en(item.parent_entity_uuid);
                                }}/>
                            </div>
                
                        </div>


                        {/* {
                            i==index&&
                            <div style={{width:"60%",zIndex:"2",position:"absolute",backgroundColor:"white",boxShadow:"0px 0px 10px black",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",top:"0%",right:"11%",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"start"}}>
                                <div style={{width:"90%",backgroundColor:"white",paddingRight:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                                    <div className="view"><BsViewList/> Generate QR</div>
                                    <div className="view"><BiEdit/> Copy URL</div>
                                    <div className="view"><BsViewList/> Download Flyer</div>
                                    <div className="view"><BiEdit/> Edit</div>
                                </div>
                            </div>
                        } */}


{
                            (i==index && en==item.parent_entity_uuid)&&
                            <div style={{width:"60%",zIndex:"2",position:"absolute",backgroundColor:"white",boxShadow:"0px 0px 10px black",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",top:"0%",right:"11%",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"start"}}>
                                <div style={{width:"90%",backgroundColor:"white",paddingRight:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                                    <div className="view" onClick={()=>{
                                        set_qr_nm(item.title_name);
                                        set_show_qr(true);
                                        set_i(-1);
                                        
                                    }}><BsViewList/> Generate QR</div>
                                    <div className="view" onClick={()=>{
                                        navigator.clipboard.writeText("https://business.nellalink.com/app/mb/menu/https://nella.vercel.app/").then(()=>{
                                            set_i(-1);
                                            set_is_copied(true);
                                            set_copied_top(0);
                                            setTimeout(()=>{
                                                set_copied_top(-10);
                                                setTimeout(()=>{
                                                    set_is_copied(false);
                                                },3000,);
                                            },2000,);
                                        }).catch((err)=>{
                                            console.log("Failed to copy:    ",err);
                                        });
                                    }}><BiEdit/> Copy URL</div>
                                    <div className="view" onClick={()=>{
                                        set_i(-1);
                                        const link = document.createElement("a");
                                        link.href = "/flyer.png";
                                        link.download = "nellalink-flyer.png";
                                        link.click();
                                    }}><BsViewList/> Download Flyer</div>
                                    <div className="view" onClick={()=>{
                                        set_i(-1);
                                        set_qr_nm(item.title_name);
                                        set_edit_uuid(item.uuid);
                                        set_edit_owned_by(item.owned_by);
                                        set_show_menu_edit(true);
                                    }}><BiEdit/> Edit</div>
                                    <div className="view" onClick={()=>{
                                        set_i(-1);
                                        set_qr_nm(item.title_name);
                                        set_uuid_del(item.uuid);
                                        set_show_del(true);
                                    }}><FaDeleteLeft/> Delete</div>
                                </div>
                            </div>
                        }

                    </div>
                                
                            )}}}
                        )
                        }
                         
                    </div>

                )
            }
            )
            }
            
            </div>

            
            }
             {
                q==true?
                <div style={{width:"90%",backgroundColor:"white",paddingTop:"10px",paddingBottom:"10px",position:"absolute",border:"1px solid black",top:"0%",overflow:"scroll"}}>
                    {
                        z.map((item,index)=>{
                            return (
                                <div className="add" style={{width:"100%",paddingLeft:"3px",paddingRight:"3px",paddingTop:"1%",paddingBottom:"1%",overflow:"scroll",display:"flex",flexDirection:"row",alignItems:"center"}} onClick={()=>{
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
                        {/* ----------------------------------------------------------------------------------- */}
            {
                show_menu&&
                <div style={{width:"100%",height:"100%",fontSize:"16px",overflow:"scroll",top:"0%",left:"0%",backgroundColor:"rgba(240,240,240,0.9)",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{width:"90%",height:"90%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",backgroundColor:"rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-around"}}>
                            <div style={{fontSize:"15px"}}>Add Menu</div><div></div>
                            <FaCircleXmark size={20} style={{cursor:"pointer"}} onClick={()=>{
                                set_show_menu(false);
                                navigate(location.pathname+location.search,{replace:true,state:null});
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px   ",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Title</div>
                            <input type="text" value={title} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Enter menu title" onChange={(e)=>{
                                set_title(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Description</div>
                            <input type="text" value={description} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Enter description" onChange={(e)=>{
                                set_description(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center",fontFamily:"arial"}}>
                            <div style={{width:"90%"}}>Menu Link</div>
                            <div style={{width:"80%",overflow:"scroll",mask:"linear-gradient(to left, transparent, white)",color:"gray",paddingTop:"10px",paddingBottom:"10px"}}>https://business.nellalink.com/app/menu/</div>
                            <input type="text" value={slug} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="your-slug" onChange={(e)=>{
                                set_slug(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Wallet Ticker</div>
                            <select type="text" value={currency} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Select a currency" onChange={(e)=>{
                                set_slug(e.target.value);
                            }} onChange={(e)=>{
                                set_currency(e.target.value);
                            }}>
                                {/* <option>Select a currency</option> */}
                                <option>Nigerian Naira (NGN)</option>
                                <option>US Dollar (USD)</option>
                                <option>EURO (EUR)</option>
                                <option>Ghanaian Cedi (GHS)</option>
                            </select>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Ticker Symbol</div>
                            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(240,240,240)"}} onChange={(e)=>{
                                set_description(e.target.value);
                            }}>{currency=="Nigerian Naira (NGN)"?<FaNairaSign/>:currency=="US Dollar (USD)"?<FaDollarSign/>:currency=="EURO (EUR)"?<FaEuroSign/>:currency=="Ghanaian Cedi (GHS)"?<FaCediSign/>:null}</div>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Categories for Menu Items</div>
                            <input type="text" value={category} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Add category..." onChange={(e)=>{
                                set_category(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Primary color</div>
                            <input type="color" value={color} style={{width:"90%",cursor:"pointer",paddingTop:"20px",paddingBottom:"20px",backgroundColor:color,border:"10px solid rgb(23, 43, 71)",borderRadius:"10px"}} placeholder="Add category..." onChange={(e)=>{
                                set_color(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"orange",color:"white"}}>
                            <div style={{width:"90%"}}>SUPPORT INFORMATION</div>
                            
                        </div>
                        <div style={{width:"100%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Support Tab Title</div>
                            <input type="text" value={s_title} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="e.g. Need Help?" onChange={(e)=>{
                                set_s_title(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Navigation Button Text</div>
                            <input type="text" value={n_tx} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="e.g. Contact Us" onChange={(e)=>{
                                set_n_tx(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Support Tab Description</div>
                            <input type="text" value={t_desc} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Enter support info with HTML tags if needed" onChange={(e)=>{
                                set_t_desc(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"orange",color:"white"}}>
                            <div style={{width:"90%"}}>Contact Information</div>
                           
                        </div>
                        <div style={{width:"100%",marginTop:"20px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Contact Email</div>
                            <input type="text" value={con_email} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Add email here" onChange={(e)=>{
                                set_con_email(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Contact Address</div>
                            <input text="text" value={con_address} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Add address here" onChange={(e)=>{
                                set_con_address(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Phone Number</div>
                            <input type="text" value={phone_num} style={{width:"90%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="080x xxx xxxx" onChange={(e)=>{
                                set_phone_num(e.target.value);
                            }}/>
                        </div>
                        <div style={{width:"100%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"orange",color:"white"}}>
                            <div style={{width:"90%"}}>Checkout Payment Providers</div>
                            
                        </div>
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%",fontWeight:"bolder"}}>Payment Providers</div>
                            
                        </div>
                        <div style={{width:"90%",marginTop:"0px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                            
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <input type="checkbox" value={p} onChange={(e)=>{
                                    set_p(e.target.checked);
                                }}/>
                                <div>Paystack</div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <input type="checkbox" value={f} onChange={(e)=>{
                                    set_f(e.target.checked);
                                }}/>
                                <div>Flutterwave</div>
                            </div>
                            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                <input type="checkbox" value={b} onChange={(e)=>{
                                    set_b(e.target.checked);
                                }}/>
                                <div>Bank Transfer</div>
                            </div>
                        </div>
                        {p&&
                            <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <div style={{width:"90%"}}>Paystack</div>
                                <input type="text" value={p_title} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Title" onChange={(e)=>{
                                    set_p_title(e.target.value);
                                }}/>
                                <input type="text" value={p_desc} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Enter description" onChange={(e)=>{
                                    set_p_desc(e.target.value);
                                }}/>
                                <input type="text" value={p_fee} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Fee" onChange={(e)=>{
                                    set_p_fee(e.target.value);
                                }}/>
                            </div>
                            
                        }
                        {f&&
                            <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <div style={{width:"90%"}}>Flutterwave</div>
                                <input type="text" value={f_title} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Title" onChange={(e)=>{
                                    set_f_title(e.target.value);
                                }}/>
                                <input type="text" value={f_desc} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Enter description" onChange={(e)=>{
                                    set_f_desc(e.target.value);
                                }}/>
                                <input type="text" value={f_fee} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Fee" onChange={(e)=>{
                                    set_f_fee(e.target.value);
                                }}/>
                            </div>
                        }
                        {b&&
                            <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                                <div style={{width:"90%"}}>Bank Transfer</div>
                                <input type="text" value={b_title} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Title" onChange={(e)=>{
                                    set_b_title(e.target.value);
                                }}/>
                                <input type="text" value={b_desc} style={{width:"85%",paddingTop:"20px",paddingBottom:"20px"}} placeholder="Description" onChange={(e)=>{
                                    set_b_desc(e.target.value);
                                }}/>
                            </div>
                        }
                        <div style={{width:"100%",marginTop:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                            <div style={{width:"90%"}}>Select Menu Image</div>
                            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"rgb(200,200,200)"}} onDragLeave={(e)=>{
                                            e.preventDefault();
                                            e.target.style.border="0px dashed transparent";
                                        }} onDragOver={(e)=>{
                                            e.preventDefault();
                                            e.target.style.border="2px dashed orange";
                                        }} onDrop={(e)=>{
                                            e.preventDefault();
                                            if(e.dataTransfer.files[0].type.startsWith("image/")){
                                                set_im_menu(e.dataTransfer.files[0]); 
                                            }
                                            e.target.style.border="0px dashed transparent";
                                        }}>
                                {
                                    im_menu==""?
                                    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                        <FaUpload size={100} color="gray"/>
                                        <div>Drag & Drop Image File here</div>
                                    </div>
                                    :
                                <img src={URL.createObjectURL(im_menu)} alt={"image"} style={{width:"80%",aspectRatio:"2/1"}}/>
                                }
                               
                            </div>
                            <div style={{marginTop:"5px"}}>OR</div>

                            <label style={{width:"90%",backgroundColor:"rgb(240,240,240)",border:"1px solid orange",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                
                            <input type="file" accept="image/*" style={{width:"85%",paddingTop:"10px",paddingBottom:"10px",display:"none"}} onChange={(e)=>{
                                set_im_menu(e.target.files[0]);
                            }}/>
                             <div>Click to upload image</div>
                        </label>
                        </div>
                        <div style={{width:"100%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"}}>
                            <div style={{width:"40%",textAlign:"center",cursor:"pointer",backgroundColor:"rgb(200,200,200)",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px"}} onClick={()=>{
                                set_show_menu(false);
                            }}>Cancel</div>
                            <div style={{width:"40%",textAlign:"center",cursor:"pointer",backgroundColor:"orange",color:"white",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px"}} onClick={async()=>{
                                if(loading==false){
                                    await create_menu();
                                }
                                
                            }}>{loading==false?"Save":"Loading..."}</div>
                        </div>
                    </div>

                    <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"red",color:"honeydew",top:`${create_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.3s linear",textAlign:"center",fontSize:"14px"}}>
                        {/*FAILED TO LOGIN*/} {create_text}
                    </div>
                    
                </div>
                
            }
            {show_business&&
                <div style={{position:"absolute",top:"0%",left:"0%",width:"100%",height:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                    <div style={{position:"relative",overflow:"scroll",width:"90%",height:"80%",backgroundColor:"rgb(240,240,240)",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"center"}}>
                        <div style={{fontSize:"20px",marginTop:"20px"}}>SELECT BUSINESS</div>

                        <FaCircleXmark size={30} style={{position:"absolute",right:"1%",top:"1%",cursor:"pointer"}} onClick={()=>{
                            set_show_business(false);
                            navigate(location.pathname+location.search,{replace:true,state:null});
                        }}/>

                                    {
                                        all_b_data==null?
                                        loading_b_get_now==true?
                                        <div style={{width:"90%",height:"100%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",borderRadius:"10px"}}>
                                            <Loader className="loading"  size={90} color="#fd7e14"/>
                                        </div>:
                                        
                                    <div style={{width:"90%",marginTop:"20px",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",boxShadow:"-3px 3px 3px gray",borderRadius:"10px"}}>
                                        <FaInfoCircle size={30}/>
                                        <div style={{color:"black"}}>No menu data available</div>
                                        <div>Please add new items to see them listed here.</div>
                                    </div>:
                                    <div style={{width:"90%",marginTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"column",alignItems:"center",borderRadius:"10px"}}>
                                    <div style={{width:"100%",fontSize:"14px",overflow:"hidden",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange"}}>
                                        <div style={{width:"90%",fontWeight:"bolder",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",backgroundColor:"orange"}}>
                                
                                            <div style={{width:"10%",textAlign:"end"}}>S/N</div>
                                            <div style={{width:"80%",textAlign:"start"}}>Business Name</div>
                                        </div>
                                    </div>
                                    {all_b_data.map((item,index)=>{
                                        return (
                                            <div key={index} style={{width:"100%",position:"relative",marginTop:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",boxShadow:"0px 0px 3px rgb(200,200,200)",borderRadius:"10px"}}>
                                                <div style={{width:"90%",paddingTop:"20px",paddingBottom:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        
                                                    <div style={{width:"10%",fontSize:"14px",display:"column",alignItems:"start",justifyContent:"start",textAlign:"center",fontSize:"20px"}}>{index+1}</div>
                                                    
                                                    <div style={{width:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                                        {/* <div style={{paddingRight:"10px",backgroundColor:"rgb(200,200,200)",borderRadius:"20px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"center",textAlign:"center"}}> */}
                                                            {/* <FaImage size={30} color={"gray"} style={{paddingRight:"10px"}}/> */}
                                                        {/* </div> */}
                                                        <div style={{width:"100%",fontSize:"14px"}}>
                                                            <div style={{fontSize:"14px",colo:"black",fontWeight:"bolder"}}>{item.title_name}</div>
                                                            <div style={{fontSize:"12px",fontFamily:"arial"}}>{item.extra_data.contact_email}</div>
                                                            <div style={{fontSize:"12px",fontFamily:"arial"}}>{item.extra_data.business_address}</div>
                                                            <div style={{fontStyle:"italic"}}>{item.status}</div>
                                                            <Link to={"/menu?q=create_menu"} state={item} style={{textDecoration:"none",paddingTop:"20px",paddingBottom:"20px",width:"100%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white"}} onClick={()=>{
                                                                set_show_business(false);
                                                                navigate(location.pathname+location.search,{replace:true,state:null});
                                                            }}><MdManageAccounts size={20}/> Select</Link>
                                                        </div>
                                                        {/* <FaEllipsisVertical size={24} style={{cursor:"pointer"}} onClick={()=>{
                                                            set_i_b(index);
                                                        }}/> */}
                                                    </div>
                                                </div>
                                                {/* {
                                                    i_b==index&&
                                                    <div style={{width:"60%",position:"absolute",backgroundColor:"white",boxShadow:"0px 0px 10px black",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"10px",paddingRight:"10px",top:"0%",right:"11%",display:"flex",flexDirection:"column",alignItems:"end",justifyContent:"start"}}>
                                                        <div style={{width:"90%",backgroundColor:"white",paddingRight:"10px",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"start"}}>
                                                            <div className="view"><BsViewList/> View</div>
                                                            <div className="view"><BiEdit/> Edit</div>
                                                            <Link to={"/menu?q=create_menu"} state={item} className="view" style={{textDecoration:"none"}} onClick={()=>{
                                                                set_show_business(false);
                                                            }}><MdManageAccounts/> Manage</Link>
                                                        </div>
                                                    </div>
                                                } */}
                                            </div>
                                                
                                            
                                        )
                                    })}
                                    
                                    </div>
                                    }
                                    
                                    
                    </div>
                    <div style={{width:"90%",height:"20%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>
                        <div>OR</div>
                        <div style={{width:"90%",height:"60%",borderRadius:"10px",backgroundColor:"orange",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer"}} onClick={()=>{
                                navigate("/business?q=create");
                            }}>
                                <FaBusinessTime size={30}/> CREATE A BUSINESS
                        </div>
                    </div>
                    </div>
            }
            {
                show_qr&&
                <Menu_qr_code set_show_qr={set_show_qr} qr_nm={qr_nm}/>
            }
            {
                show_del&&
                <Menu_del set_show_del={set_show_del} qr_nm={qr_nm} get_now={get_now} set_get_now={set_get_now} uuid_del={uuid_del}/>
            }
            {
                show_menu_edit&&
                <Menu_edit qr_nm={qr_nm} edit_uuid={edit_uuid} edit_owned_by={edit_owned_by}/>
            }
            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"rgba(0, 255, 255, 0.5)",color:"black",top:`${create_s_top}%`,width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.5s linear",textAlign:"center",fontSize:"16px"}}>
                        {/* Successful */} {create_s_text}
            </div>
            <div style={{position:"absolute",fontFamily:"arial",backgroundColor:"rgba(0, 255, 255, 0.5)",color:"black",top:`${copied_top}%`,width:"100%",display:is_copied?"flex":"none",flexDirection:"row",alignItems:"center",justifyContent:"center",transition:"all 0.5s linear",textAlign:"center",fontSize:"16px"}}>
                        <FaCheckCircle/> COPIED SUCCESSFULLY
            </div>
                    
        </div>
    )
}

export default Menu_large;