import { ArrowLeft, Delete, Edit, ImageDown, List, Loader, Minus, Plus, Trash, Trash2Icon } from "lucide-react";
import { use, useEffect, useState } from "react";
import { FaAngleDoubleRight, FaTrash, FaUpload } from "react-icons/fa";
import { FaAngleDown, FaAngleUp, FaPlus } from "react-icons/fa6";
import { useOutletContext } from "react-router-dom";

function Menu_edit({edit_item,set_show_menu_edit,qr_nm,edit_uuid,edit_owned_by,get_now,set_get_now}){
    const url=`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu/${edit_uuid}`;
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const [im,set_im]=useState("");
    const [im1,set_im1]=useState("");
    const [p,set_p]=useState(false);
    const [f,set_f]=useState(false);
    const [b,set_b]=useState(false);

    const [view_more,set_view_more] = useState(false);
    const [added_menu_items,set_added_menu_items] = useState(false);

    const {set_success,set_success_message,set_fail,set_fail_message} = useOutletContext();

    const [loading_save,set_loading_save]=useState(false);

    const [loading_created_menu_item,set_loading_created_menu_item] = useState(false);

    const [title_name,set_title_name]=useState(edit_item.title_name);
    const [desc,set_desc]=useState(edit_item.description);
    const [color,set_color]=useState("orangered");
    const [status,set_status]=useState(edit_item.status);
    const [support_title,set_support_title]=useState("");
    const [support_button,set_support_button]=useState("");
    const [support_desc,set_support_desc]=useState("");
    const [con_email,set_con_email]=useState(edit_item.extra_data.contact_info.email_address);
    const [con_address,set_con_address]=useState(edit_item.extra_data.contact_info.business_address);
    const [con_num,set_con_num]=useState("");
    const [p_title,set_p_title]=useState("");
    const [p_desc,set_p_desc]=useState("");
    const [p_fee,set_p_fee]=useState("");
    const [f_title,set_f_title]=useState("");
    const [f_desc,set_f_desc]=useState("");
    const [f_fee,set_f_fee]=useState("");
    const [b_title,set_b_title]=useState("");
    const [b_desc,set_b_desc]=useState("");
    const [wallet_currency,set_wallet_currency]=useState("Nigerian Naira (NGN)");
    const [wallet_symbol,set_wallet_symbol]=useState("NGN");

    const [all_created,set_all_created] = useState(null);

    const [en,set_en] = useState("");
    const [del,set_del] = useState("");

    useEffect(()=>{
        switch(wallet_currency){
                        case "Nigerian Naira (NGN)":
                            set_wallet_symbol("NGN");
                            break;
                        case "US DOLLAR (USD)":
                            set_wallet_symbol("USD");
                            break;
                        case "EURO (EUR)":
                            set_wallet_symbol("EUR");
                            break;
                        case "Ghanaian Cedi (GHS)":
                            set_wallet_symbol("GHS");
                            break;
                    }
    },[wallet_currency]);

    //https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item/trash/1684b9d0-aa61-4478-9ea3-149b74265fa4

        const [loading_del,set_loading_del] = useState(false);
        async function do_del(i_d){
        set_loading_del(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item/trash/${i_d}`,
            {
                method: 'delete',
                headers: {
                    "content-type": "application/json",
                    "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
                }
            }
        )
        //.then((res)=>res.json())
        .then((data)=>{
            set_loading_del(false);
            // if(data.ok==true){
                console.log("Success:  ",data);
                set_reload(!reload)
                set_success_message("Successfully deleted item");
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },2000);
            // }else{
            //     console.log("Made request but failed:  ",data);
            //     set_fail_message(data.message);
            //     set_fail(true);
            //     setTimeout(()=>{
            //         set_fail(false);
            //     },2000);
            // }
        }).catch((err)=>{
            set_loading_del(false);
            console.log("Could not make request:    ",err);
            set_fail_message(err);
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },2000);
        });
    }


    async function save_edit(){
        set_loading_save(true);
        await fetch(url,
            {
                method: 'put',
                headers: {
                    "content-type": "application/json",
                    "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
                },
                body: JSON.stringify(
                    {
                    "uuid": edit_uuid,
                    "request_id": Date.now().toString(),
                    "meta_key": title_name,
                    "meta_value": `${title_name}-${Date.now().toString()}`,
                    "title_name": title_name,
                    "description": desc,
                    "entity_featured_url": null,
                    "extra_data": {
                        "status": status,
                        "owned_by": null,
                        "data_type": null,
                        "support_tab": {
                            "title": support_title,
                            "content": support_desc,
                            "nav_button_text": support_button,
                            "show_ring_feature_on_support_page": true
                        },
                        "contact_info": {
                            "address": con_address,
                            "email_address": con_email,
                            "mobile_number": con_num,
                            "show_contact_info_on_support_page": true
                        },
                        "enable_dark_mode": true,
                        "menu_primary_color": color,
                        "parent_entity_type": "nellalink_business",
                        "parent_entity_uuid": null,
                        "menu_base_wallet_ticker": wallet_currency,
                        "menu_featured_categories": [
                            "delivery"
                        ],
                        "menu_base_wallet_ticker_symbol": wallet_symbol,
                        "menu_checkout_payments_providers": {
                            "paystack": {
                                "fee": p_fee,
                                "title": p_title,
                                "description": p_desc,
                                "fee_max_amount": 2000
                            },
                            "flutterwave": {
                                "fee": f_fee,
                                "title": f_title,
                                "description": f_desc,
                                "fee_max_amount": 2000
                            },
                            "bank_transfer": {
                                "title": b_title,
                                "description": b_desc
                            }
                        }
                    },
                    "parent_entity_type": "nellalink_business",
                    "parent_entity": "30",
                    "owned_by": edit_owned_by,
                    "added_by": "1",
                    "data_type": null,
                    "status": "enabled",
                    "created_at": Date.now().toString(),
                    "updated_at": Date.now().toString(),
                    "deleted_at": null,
                    "created_by": null,
                    "meta_data": []
                }
                )
            }
        )
        //.then((res)=>res.json())
        .then((data)=>{
            set_loading_save(false);
            if(data.ok==true){
                set_get_now(!get_now);
                console.log("Success:  ",data);
                set_show_menu_edit(false);
                set_success_message("Successful");
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },2000);
            }else{
                console.log("Made request but failed:  ",data);
                //set_fail_message(data.message);
                set_fail_message("Operation failed");
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },2000);
            }
        }).catch((err)=>{
            set_loading_save(false);
            console.log("Could not make request:    ",err);
            set_fail_message("Check your internet connection.");
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },2000);
        });
    }

    const [reload,set_reload] = useState(false);
    const [create_title_name,set_create_title_name] = useState("");
    const [create_desc,set_create_desc] = useState("");
    const [create_status,set_create_status] = useState("enabled");
    const [create_tag,set_create_tag] = useState("");
    const [create_category,set_create_category] = useState("");
    const [create_unit_price_amount,set_create_unit_price_amount] = useState("");
    const [create_max_quan_per_order,set_create_max_quan_per_order] = useState("");
    const [create_min_quan_per_order,set_create_min_quan_per_order] = useState("");
    const [loading_addItem,set_loading_addItem] = useState(false);
    async function addItem(){
        set_loading_addItem(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item`,{
            method: "post",
            headers: {
                "content-type": "application/json",
                "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY,
                "authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({
                "request_id": Date.now().toString(),
                "title_name": create_title_name,
                "description": create_desc,
                "status": create_status,
                "entity_featured_url": "",
                "extra_data": {
                    "tag": create_tag,
                    "category": create_category,
                    "unit_price_amount": create_unit_price_amount,
                    "maximum_quantity_per_order": create_max_quan_per_order,
                    "minimum_quantity_per_order": create_min_quan_per_order
                },
                "meta_value": `${create_title_name}-${Date.now().toString()}`,
                "meta_key": `${create_title_name}-${Date.now().toString()}`,
                "uuid": "",
                "parent_entity_uuid": edit_item.uuid,
                "owned_by": edit_item.owned_by,
                "parent_entity_type": "nellalink_business_menu"
            })
        }).then((res)=>res.json())
        .then((data)=>{
            set_loading_addItem(false);
            if(data.status==true){
                console.log("Success:  ",data.message);
                set_reload(!reload);
                set_success_message("Successful");
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },2000);
            }else{
                console.log("Made request but failed:  ",data);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },2000);
            }
        }).catch((err)=>{
            set_loading_addItem(false);
            console.log("Could not make request:    ",err);
            set_fail_message(err);
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },2000);
        });
    }
//https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item/730182a7-c77d-4def-861e-8d298bb501ca
const [loading_enabled_to_disabled,set_loading_enabled_to_disabled] = useState(false);
        async function enabled_to_disabled(u){
        set_loading_enabled_to_disabled(true);
        await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item/${u.uuid}`,{
            method: "put",
            headers: {
                "content-type": "application/json",
                "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY,
               // "authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify({

    "uuid": u.uuid,
    "request_id": u.request_id,
    "meta_key": u.meta_key,
    "meta_value": u.meta_value,
    "title_name": u.title_name,
    "description": u.description,
    "entity_featured_url": u.entity_featured_url,
    "extra_data": {
        "tag": u.extra_data.tag,
        "category": u.extra_data.category,
        "unit_price_amount": u.extra_data.unit_price_amount,
        "maximum_quantity_per_order": u.extra_data.maximum_quantity_per_order,
        "minimum_quantity_per_order": u.extra_data.minimum_quantity_per_order
    },
    "parent_entity_type": u.parent_entity_type,
    "parent_entity": u.parent_entity??"",
    "owned_by": u.owned_by,
    "added_by": "1",
    "data_type": null,
    "status": u.status == "enabled"?"disabled":"enabled",
    "created_at": u.created_at,
    "updated_at": Date.now().toString(),
    "deleted_at": null,
    "created_by": null,
    "sort_position": "2554",
    "parent_entity_uuid": u.parent_entity_uuid

            })
        }).then((res)=>res.json())
        .then((data)=>{
            set_loading_enabled_to_disabled(false);
            if(data.status==true){
                console.log("Success:  ",data.message);
                set_reload(!reload);
                set_success_message("Successful");
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },2000);
            }else{
                console.log("Made request but failed:  ",data);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },2000);
            }
        }).catch((err)=>{
           set_loading_enabled_to_disabled(false);
            console.log("Could not make request:    ",err);
            set_fail_message(err);
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },2000);
        });
    }



//&sort_by=extra_data.sort_position&sort_order=asc
    useEffect(()=>{
        async function get_all_menu_items(){
            set_loading_created_menu_item(true);
            await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item?parent_entity_type=nellalink_business_menu&parent_entity_uuid=${edit_uuid}&per_page=500`,{
                method: "get",
                headers:{
                    "content-type": "application/json",
                    "x-api-key": import.meta.env.VITE_CORE_BACKEND_BASE_API_KEY
                }
            }).then((res)=>res.json()).then((data)=>{
            set_loading_created_menu_item(false);
            if(data.status==true){
                console.log("Created Menu Items Loaded:  ",data);
                set_all_created(data.data);
                set_success_message(data.message);
                set_success(true);
                setTimeout(()=>{
                    set_success(false);
                },2000);
            }else{
                console.log("Made request but failed to get menu Items:  ",data);
                set_fail_message(data.message);
                set_fail(true);
                setTimeout(()=>{
                    set_fail(false);
                },2000);
            }
        }).catch((err)=>{
            set_loading_created_menu_item(false);
            console.log("Could not make menu item request:    ",err);
            //set_fail_message("Check your internet connection.");
            set_fail_message(err);
            set_fail(true);
            setTimeout(()=>{
                set_fail(false);
            },2000);
        });
        }
        get_all_menu_items();
    },[reload])

    //https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu_item/730182a7-c77d-4def-861e-8d298bb501ca
    
    return (
        <div style={{width:"100%",height:"100%",color:"rgb(40,40,40)",fontSize:"12px",position:"absolute",top:"0%",left:"0%",backgroundColor:"rgba(255,255,255,0)",backdropFilter:"blur(10px)",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            <div className="box_card" style={{width:"80%",height:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            <div style={{width:"90%",paddingTop:"5px",paddingBottom:"5px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                {/* <img src="/35.png" alt="..." style={{width:"20%",aspectRatio:"1/1",alignSelf:"center"}}/> */}
                <ArrowLeft style={{cursor:"pointer"}} onClick={()=>{
                    set_show_menu_edit(false);
                }}/>
                <div style={{fontFamily:"poppins-bold"}}>EDIT MENU</div>
            </div>
            <label style={{width:"90%",marginBottom:"10px",fontSize:"12px",cursor:"pointer",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                    set_im(e.target.files[0]);
                                }}/>
             <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start"}} onDragLeave={(e)=>{
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
                                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100px",height:"100px",backgroundColor:"rgb(240,240,240)",borderRadius:"100px"}}>
                                                                <ImageDown size={50} color="gray"/>
                                </div>:
                                <img src={URL.createObjectURL(im)} alt="image" style={{width:"100px",height:"100px",backgroundColor:"rgb(240,240,240)",borderRadius:"100px"}}/>
                            }
                            
                        </div>
                        
                        </label>
            {/* <div className="profile_card" style={{display:"grid",gridAutoFlow:"row",gridTemplateColumns:"1fr",gap:"10px",width:"90%",overflow:"scroll"}}> */}
            <div className="profile_card" style={{display:"grid",gap:"20px",width:"90%"}}>
            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Name</div>
                <input type="text" value={title_name} placeholder="Enter menu name" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_title_name(e.target.value);
                }}/>
            </div>

            

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"0px"}}>
                <div>Category</div>
                <input type="text" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

           

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"0px"}}>
                <div>Status</div>
                <select type="color" value={status} placeholder="Add category" style={{paddingTop:"13px",borderRadius:"10px",borderColor:"rgb(240,240,240)",backgroundColor:"rgba(240,240,240,0)",color:"rgb(40,40,40)",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_status(e.target.value);
                }}>
                    <option>Enable</option>
                    <option>Disable</option>
                </select>
            </div>
             <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"0px"}}>
                <div>Primary Color</div>
                <input type="color" value={color} style={{width:"10%",aspectRatio:"1/1",border:"4px solid orange",borderRadius:"100px",backgroundColor:color}}  onChange={(e)=>{
                    set_color(e.target.value);
                }}/>
            </div>
            

            </div>

            <div style={{width:"90%",marginTop:"0px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Description</div>
                <textarea type="text" value={desc} placeholder="Enter description" style={{paddingTop:"20px",borderRadius:"10px",borderColor:"rgb(220,220,220)",backgroundColor:"transparent",color:"rgb(100,100,100)",fontFamily:"poppins-light",paddingBottom:"20px",width:"100%"}} onChange={(e)=>{
                    set_desc(e.target.value);
                }}></textarea>
            </div>

            
            
            
            
            <div style={{display:"flex",flexDirection:"row",alignItems:"center",color:"orange",fontFamily:"poppins-bold",width:"90%",marginTop:"20px",marginBottom:"0px"}} onClick={()=>{
                set_view_more(!view_more);
            }}>{view_more?"View less":"View more"} {view_more?<FaAngleUp style={{marginLeft:"10px"}}/>:<FaAngleDown style={{marginLeft:"10px"}}/>}</div>
            
            {view_more&&
            <div style={{width:"100%",display:"flex",marginBottom:"20px",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"rgb(220,220,220)",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
               Support Information
            </div>
            }
            {view_more&&
            <div className="profile_card" style={{display:"grid",gap:"20px",width:"90%"}}>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"0px"}}>
                <div>Support Tab Title</div>
                <input type="text" placeholder="e.g. Need Help?" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"0px"}}>
                <div>Navigation Button Text</div>
                <input type="text" placeholder="e.g. Contact Us" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>
            </div>
            }
            {view_more&&
            <div style={{width:"90%",marginTop:"20px",marginBottom:"20px",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Support Tab Description</div>
                <textarea type="text" placeholder="Enter support info with HTML tags if needed" style={{paddingTop:"13px",paddingBottom:"13px",borderRadius:"10px",borderColor:"rgb(240,240,240)",backgroundColor:"transparent",width:"100%"}}></textarea>
            </div>
            }
            
            {view_more&&
            <div style={{width:"100%",display:"flex",marginBottom:"20px",flexDirection:"column",alignItems:"start",marginTop:"0px",backgroundColor:"rgb(220,220,220)",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Checkout Payment Providers
            </div>
            }
            {view_more&&
            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"0px"}}>
                Payment Providers
            </div>}
            {view_more&&
            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_p(!p);
                }}/>
                <div>Paystack</div>
            </div>}
            {view_more&&
            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"0px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_f(!f);
                }}/>
                <div>Flutterwave</div>
            </div>}
            {view_more&&
            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"0px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_b(!b);
                }}/>
                <div>Bank Transfer</div>
            </div>
            }

            {view_more&&
            <div className="profile_card" style={{display:"grid",gap:"20px",width:"90%"}}>
            {
                p&&
                <div className="box_card" style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div style={{width:"100%",textAlign:"center",fontFamily:"poppins-bold"}}>Paystack</div>
                    <input type="text" value={p_title} placeholder="Title..." style={{paddingTop:"13px",border:"0px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_p_title(e.target.value);
                    }}/>
                    <input type="text" value={p_desc} placeholder="Enter description..." style={{paddingTop:"13px",border:"0px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_p_desc(e.target.value);
                    }}/>
                    <input type="text" value={p_fee} placeholder="Fee..." style={{paddingTop:"13px",border:"0px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_p_fee(e.target.value);
                    }}/>
                </div>
            }
            {
                f&&
                <div className="box_card" style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start",border:"0px",marginTop:"10px"}}>
                    <div style={{width:"100%",textAlign:"center",fontFamily:"poppins-bold"}}>Flutterwave</div>
                    <input type="text" value={f_title} placeholder="Title..." style={{paddingTop:"13px",paddingBottom:"13px",border:"0px",width:"100%"}} onChange={(e)=>{
                        set_f_title(e.target.value);
                    }}/>
                    <input type="text" value={f_desc} placeholder="Enter description..." style={{paddingTop:"13px",paddingBottom:"13px",border:"0px",width:"100%"}} onChange={(e)=>{
                        set_f_desc(e.target.value);
                    }}/>
                    <input type="text" value={f_fee} placeholder="Fee..." style={{paddingTop:"13px",paddingBottom:"13px",border:"0px",width:"100%"}} onChange={(e)=>{
                        set_f_fee(e.target.value);
                    }}/>
                </div>
            }
            {
                b&&
                <div className="box_card" style={{width:"100%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div style={{width:"100%",textAlign:"center",fontFamily:"poppins-bold"}}>Bank Transfer</div>
                    <input type="text" value={b_title} placeholder="Title..." style={{paddingTop:"13px",border:"0px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_b_title(e.target.value);
                    }}/>
                    <input type="text" value={b_desc} placeholder="Enter description..." style={{paddingTop:"13px",border:"0px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_b_desc(e.target.value);
                    }}/>
                </div>
            }
            </div>
            }
            {view_more&&
            <div style={{width:"100%",display:"flex",marginBottom:"20px",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"rgb(220,220,220)",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Contact Information
            </div>}
            {view_more&&
            <div className="profile_card" style={{display:"grid",gap:"20px",width:"90%"}}>

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Contact Email</div>
                <input type="text" value={con_email} placeholder="example@gmail.com" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_con_email(e.target.value);
                }}/>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Contact Address</div>
                <input type="text" value={con_address} placeholder="Add contact address here" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_con_address(e.target.value);
                }}/>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Phone Number</div>
                <input type="text" value={con_num} placeholder="080x xxx xxxx" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_con_num(e.target.value);
                }}/>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Wallet Currency</div>
                <select value={wallet_currency} placeholder="Add category" style={{paddingTop:"13px",backgroundColor:"transparent",borderRadius:"10px",borderColor:"rgb(240,240,240)",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_wallet_currency(e.target.value);
                    console.log(e.target.value)
                    
                }}>
                    <option>Nigerian Naira (NGN)</option>
                    <option>US DOLLAR (USD)</option>
                    <option>EURO (EUR)</option>
                    <option>Ghanaian Cedi (GHS)</option>
                </select>
            </div>

            <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Currency Symbol</div>
                <input type="text" value={wallet_symbol} disabled placeholder="..." style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>
            </div>}

           

            {/* </div>    */}

            <div style={{width:"100%",marginBottom:"40px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"20px"}} onClick={save_edit}>
                <div style={{width:"90%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",cursor:"pointer",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center"}} onClick={save_edit}>
                    {!loading_save?<FaUpload/>:<Loader className="loading"  size={20} color="white"/>} {loading_save?"Loading...":"Save"}
                </div>
            </div>




            {/* ---------END ONE SAVE. LOOK UP!, YOU JUST PASSED ! --------------------- */}

            {
            loading_created_menu_item?
            <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"0px",marginBottom:"20px",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Loader className="loading"  size={60} color="orange"/>
            </div>
            :
            all_created == null?
            <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"20px",marginBottom:"20px",boxShadow:"0px 0px 3px black",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{color:"black",textAlign:"center"}}>No menu item data available</div>
                <div style={{color:"gray",width:"90%",textAlign:"center"}}>Please add new items to see them listed here.</div>
            </div>:
            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center"}}>
                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginBottom:"20px"}}>
                    <div style={{fontFamily:"poppins-bold"}}>Menu Items</div>
                    <div style={{display:"flex",flexDirection:"row",alignItems:"center"}}>Filter<FaAngleDoubleRight/></div>
                    <div style={{width:"100%",gap:"10px",display:"flex",flexDirection:"row",alignItems:"start",overflow:"scroll",scrollSnapType:"x mandatory"}}>
                        <div style={{flex:"0 0 40%",scrollSnapAlign:"center",border:"1px solid rgb(220,220,220)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <input type="text" placeholder="Search title or description..." style={{width:"100%",height:"100%",border:"0px"}}/>
                        </div>
                        <div style={{flex:"0 0 40%",scrollSnapAlign:"center",border:"1px solid rgb(220,220,220)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <input type="text" placeholder="Filter by tag..." style={{width:"100%",height:"100%",border:"0px"}}/>
                        </div>
                        <div style={{flex:"0 0 40%",scrollSnapAlign:"center",border:"1px solid rgb(220,220,220)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <input type="text" placeholder="All Categories..." style={{width:"100%",height:"100%",border:"0px"}}/>
                             {/* <select placeholder="Filter by tag..." style={{width:"100%",height:"30px",border:"0px",border:"0px",backgroundColor:"transparent",color:"rgb(40,40,40)"}}>
                                <option>All categories</option>
                            </select> */}
                        </div> 
                        <div style={{flex:"0 0 40%",scrollSnapAlign:"center",border:"1px solid rgb(220,220,220)",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <input type="text" placeholder="Max price" style={{width:"100%",height:"100%",border:"0px"}}/>
                        </div>
                           
                        
                    </div>
                </div>

                {all_created.map((item,index)=>(
                        <div className="box_card" style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"white",borderRadius:"10px",marginBottom:"20px"}}>
                            <div style={{width:"90%",paddingTop:"10px",paddingBottom:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                <div style={{width:"60%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                    <List/>
                                    <img alt="" style={{width:"10%",aspectRatio:"1/1",borderRadius:"100px",backgroundColor:"rgb(220,220,220)",marginLeft:"10px"}}/>
                                    <div style={{width:"50%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start",marginLeft:"10px"}}>
                                        <div style={{fontFamily:"poppins-bold"}}>{item.title_name}</div>
                                        <div style={{width:"100%",display:"flex",flexDirection:"row",alignItems:"center"}}>
                                            <div>{item.description}</div>
                                            <div>-</div>
                                            <div>{item.extra_data.unit_price_amount}</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{width:"40%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                                    <Edit color="rgb(52,199,89)"/>
                                    {loading_del && del==item.uuid?
                                    <Loader className="loading"  size={20} color="rgb(183,28,28)"/>
                                    :<Trash2Icon color="rgb(183,28,28)" style={{cursor:"pointer"}} onClick={async()=>{
                                        set_del(item.uuid);
                                        await do_del(item.uuid);
                                    }}/>}
                                    <div style={{width:"40%",fontFamily:"poppins-bold",paddingTop:"5px",paddingBottom:"5px",overflow:"scroll",backgroundColor:item.status=="enabled"?"rgb(52,199,89)":"rgb(240,240,240)",color:item.status=="enabled"?"white":"rgb(40,40,40)",textAlign:"center",borderRadius:"10px",fontSize:"8px"}} onClick={async()=>{
                                        set_en(item.uuid);
                                        // if(item.status=="enabled"){
                                           await enabled_to_disabled(item);  
                                        // }
                                       
                                    }}>{loading_enabled_to_disabled && en==item.uuid?<Loader className="loading"  size={20} color="white"/>: item.status}</div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
            }
            {
                added_menu_items&&
                     <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"20px",marginBottom:"20px",boxShadow:"0px 0px 3px black",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                
                <div className="profile_card" style={{display:"grid",gap:"20px",width:"90%"}}>
                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Title</div>
                    <input type="text" value={create_title_name} placeholder="Enter menu title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_create_title_name(e.target.value);
                    }}/>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Description</div>
                    <textarea type="text" value={create_desc} placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",backgroundColor:"transparent",borderRadius:"10px",borderColor:"rgb(240,240,240)",color:"rgb(40,40,40)",width:"100%"}} onChange={(e)=>{
                        set_create_desc(e.target.value);
                    }}></textarea>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Unit Price Amount</div>
                    <input type="number" value={create_unit_price_amount} placeholder="Enter price" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_create_unit_price_amount(e.target.value);
                    }}/>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Max Quantity Per Order</div>
                    <input type="number" value={create_max_quan_per_order} placeholder="0" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_create_max_quan_per_order(e.target.value);
                    }}/>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Minimun Quantity Per Order</div>
                    <input type="number" value={create_min_quan_per_order} placeholder="0" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_create_min_quan_per_order(e.target.value);
                    }}/>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Choose Category</div>
                    <select value={create_category} placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",backgroundColor:"transparent",borderRadius:"10px",borderColor:"rgb(220,220,220)",color:"rgb(40,40,40)",width:"100%"}} onChange={(e)=>{
                        set_create_category(e.target.value);
                    }}>
                        <option>enabled</option>
                        <option>disabled</option>
                    </select>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Tag</div>
                    <input type="text" value={create_tag} placeholder="Enter tag" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_create_tag(e.target.value);
                    }}/>
                </div>

                <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Status</div>
                    <select value={create_status} style={{paddingTop:"13px",paddingBottom:"13px",backgroundColor:"transparent",borderRadius:"10px",borderColor:"rgb(220,220,220)",color:"rgb(40,40,40)",width:"100%"}} onChange={(e)=>{
                        set_create_status(e.target.value);
                    }}>
                        <option>Enable</option>
                        <option>Disable</option>
                    </select>
                </div>
                </div>

                
                <label style={{width:"90%",marginTop:"20px",fontSize:"12px",cursor:"pointer",borderRadius:"10px",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"start"}}>
                                <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                    set_im1(e.target.files[0]);
                                }}/>
                                <div>Item Image</div>
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start"}} onDragLeave={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="0px dashed transparent";
                                    }} onDragOver={(e)=>{
                                        e.preventDefault();
                                        e.target.style.border="2px dashed orange";
                                    }} onDrop={(e)=>{
                                        e.preventDefault();
                                        if(e.dataTransfer.files[0].type.startsWith("image/")){
                                            set_im1(e.dataTransfer.files[0]); 
                                        }
                                        e.target.style.border="0px dashed transparent";
                        }}>
                            {
                                im1==""?
                                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100px",height:"100px",borderRadius:"100px",backgroundColor:"rgb(240,240,240)"}}>
                                                                <ImageDown size={40} color="gray"/>
                                </div>:
                                <img src={URL.createObjectURL(im1)} alt="image" style={{width:"100px",height:"100px",borderRadius:"100px",backgroundColor:"rgb(240,240,240)"}}/>
                            }
                            
                        </div>
                        
                        
                        </label>
            
            <div style={{width:"90%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px",textAlign:"center"}}>
                <div style={{width:"49%",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"rgb(240,240,240)",color:"rgb(40,40,40)",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{
                    set_added_menu_items(false);
                }}>
                    Cancel
                </div>
            
                <div style={{width:"49%",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"#fd7e14",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={async()=>{
                    await addItem();
                }}>
                    {loading_addItem?<Loader className="loading"  size={20} color="white"/>:<FaUpload/>} {loading_addItem?"Loading...":"Save"}
                </div>
            
            </div>

                

                
            
            </div>
                
            }

            <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"end",marginBottom:"100px",color:"orange",width:"90%"}}>
            <div style={{display:"flex",cursor:"pointer",flexDirection:"row",alignItems:"center",color:"orange",fontFamily:"poppins-light",marginTop:"0px",backgroundColor:"#fd7e14",color:"white",borderRadius:"10px",paddingLeft:"10px",paddingRight:"10px",paddingTop:"10px",paddingBottom:"10px"}} onClick={()=>{
                set_added_menu_items(!added_menu_items);
            }}>{added_menu_items?<Minus/>:<Plus/>} {added_menu_items?"Remove Form": "Add Menu Item"}</div>
            </div>

            
            </div>
        </div>
    )
}

export default Menu_edit;