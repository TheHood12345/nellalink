import { use, useEffect, useState } from "react";
import { FaUpload } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

function Menu_edit({qr_nm,edit_uuid,edit_owned_by}){
    const url=`https://backend-sbs.nellalink.com/public/api/v1/nellalink/smart-meta-manager/entity/nellalink_business_menu/${edit_uuid}`;
    const api = "nll_95ea8f6437ee8358a029ac4da016b71e5a94";
    const [im,set_im]=useState("");
    const [im1,set_im1]=useState("");
    const [p,set_p]=useState(false);
    const [f,set_f]=useState(false);
    const [b,set_b]=useState(false);

    const [loading_save,set_loading_save]=useState(false);

    const [title_name,set_title_name]=useState("");
    const [desc,set_desc]=useState("");
    const [color,set_color]=useState("");
    const [status,set_status]=useState("");
    const [support_title,set_support_title]=useState("");
    const [support_button,set_support_button]=useState("");
    const [support_desc,set_support_desc]=useState("");
    const [con_email,set_con_email]=useState("");
    const [con_address,set_con_address]=useState("");
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

    async function save_edit(){
        set_loading_save(true);
        await fetch(url,
            {
                method: 'put',
                headers: {
                    "content-type": "application/json",
                    "x-api-key": import.meta.env.VITE_APP_API_KEY
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
                console.log("Success:  ",data);
            }else{
                console.log("Made request but failed:  ",data);
            }
        }).catch((err)=>{
            set_loading_save(false);
            console.log("Could not make request:    ",err);
        });
    }
    
    return (
        <div style={{width:"100%",height:"100%",fontSize:"16px",position:"absolute",top:"0%",left:"0%",backgroundColor:"white",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",paddingTop:"5px",paddingBottom:"5px"}}>
                <img src="/35.png" alt="..." style={{width:"20%",aspectRatio:"1/1",alignSelf:"center"}}/>
                <div>{qr_nm}</div>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start"}}>
                <div>Name</div>
                <input type="text" value={title_name} placeholder="Enter menu name" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_title_name(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Description</div>
                <textarea type="text" value={desc} placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_desc(e.target.value);
                }}></textarea>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Category</div>
                <input type="text" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Primary Color</div>
                <input type="color" value={color} placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%",border:"4px solid black",borderRadius:"10px",backgroundColor:color}}  onChange={(e)=>{
                    set_color(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Status</div>
                <select type="color" value={status} placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_status(e.target.value);
                }}>
                    <option>Enable</option>
                    <option>Disable</option>
                </select>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
               Support Information
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Support Tab Title</div>
                <input type="text" placeholder="e.g. Need Help?" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Navigation Button Text</div>
                <input type="text" placeholder="e.g. Contact Us" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Support Tab Description</div>
                <textarea type="text" placeholder="Enter support info with HTML tags if needed" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}></textarea>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Checkout Payment Providers
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px"}}>
                Payment Providers
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_p(!p);
                }}/>
                <div>Paystack</div>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_f(!f);
                }}/>
                <div>Flutterwave</div>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"start",marginTop:"10px"}}>
                <input type="checkbox" onChange={(e)=>{
                    set_b(!b);
                }}/>
                <div>Bank Transfer</div>
            </div>

            {
                p&&
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Paystack</div>
                    <input type="text" value={p_title} placeholder="Title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_p_title(e.target.value);
                    }}/>
                    <input type="text" value={p_desc} placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_p_desc(e.target.value);
                    }}/>
                    <input type="text" value={p_fee} placeholder="Fee" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_p_fee(e.target.value);
                    }}/>
                </div>
            }
            {
                f&&
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Flutterwave</div>
                    <input type="text" value={f_title} placeholder="Title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_f_title(e.target.value);
                    }}/>
                    <input type="text" value={f_desc} placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_f_desc(e.target.value);
                    }}/>
                    <input type="text" value={f_fee} placeholder="Fee" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_f_fee(e.target.value);
                    }}/>
                </div>
            }
            {
                b&&
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Bank Transfer</div>
                    <input type="text" value={b_title} placeholder="Title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_b_title(e.target.value);
                    }}/>
                    <input type="text" value={b_desc} placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                        set_b_desc(e.target.value);
                    }}/>
                </div>
            }

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"20px",paddingBottom:"20px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                Contact Information
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Contact Email</div>
                <input type="text" value={con_email} placeholder="example@gmail.com" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_con_email(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Contact Address</div>
                <input type="text" value={con_address} placeholder="Add contact address here" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_con_address(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Phone Number</div>
                <input type="text" value={con_num} placeholder="080x xxx xxxx" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_con_num(e.target.value);
                }}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Wallet Currency</div>
                <select value={wallet_currency} placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}} onChange={(e)=>{
                    set_wallet_currency(e.target.value);
                    console.log(e.target.value)
                    
                }}>
                    <option>Nigerian Naira (NGN)</option>
                    <option>US DOLLAR (USD)</option>
                    <option>EURO (EUR)</option>
                    <option>Ghanaian Cedi (GHS)</option>
                </select>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                <div>Currency Symbol</div>
                <input type="text" value={wallet_symbol} disabled placeholder="..." style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
            </div>

            <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(240,240,240)",paddingTop:"10px",paddingBottom:"10px",marginTop:"20px"}} onDragLeave={(e)=>{
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
                                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <FaUpload size={100} color="gray"/>
                                                                <div>Drag & Drop Image File here</div>
                                </div>:
                                <img src={URL.createObjectURL(im)} alt="image" style={{width:"90%",aspectRatio:"3/1"}}/>
                            }
                            
                        </div>
                        <div style={{marginTop:"5px"}}>OR</div>
                        <label style={{width:"90%",fontSize:"12px",marginTop:"5px",paddingTop:"13px",paddingBottom:"13px",cursor:"pointer",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}><FaPlus/> Click to upload business logo
                                <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                    set_im(e.target.files[0]);
                                }}/>
                        </label>

            <div style={{width:"90%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",marginTop:"20px",backgroundColor:"orange",color:"white",paddingTop:"10px",paddingBottom:"10px",textAlign:"center"}} onClick={save_edit}>
                {!loading_save?<FaUpload/>:null} {loading_save?"Loading...":"Save"}
            </div>

            <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"20px",boxShadow:"0px 0px 3px black",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                <div style={{color:"black"}}>No menu item data available</div>
                <div style={{color:"gray",width:"90%"}}>Please add new items to seee them listed here.</div>
            </div>

            <div style={{width:"90%",display:"flex",fontFamily:"arial",flexDirection:"column",marginTop:"20px",marginBottom:"20px",boxShadow:"0px 0px 3px black",borderRadius:"10px",paddingTop:"10px",paddingBottom:"10px",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}}>
                
                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Title</div>
                    <input type="text" placeholder="Enter menu title" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Description</div>
                    <input type="text" placeholder="Enter description" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Unit Price Amount</div>
                    <input type="text" placeholder="Enter price" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Max Quantity Per Order</div>
                    <input type="text" placeholder="0" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Minimun Quantity Per Order</div>
                    <input type="text" placeholder="0" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Choose Category</div>
                    <select type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}>
                        <option>Enable</option>
                        <option>Disable</option>
                    </select>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Tag</div>
                    <input type="text" placeholder="Enter tag" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}/>
                </div>

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"start",marginTop:"10px"}}>
                    <div>Status</div>
                    <select type="color" placeholder="Add category" style={{paddingTop:"13px",paddingBottom:"13px",width:"100%"}}>
                        <option>Enable</option>
                        <option>Disable</option>
                    </select>
                </div>

                {/* -----------------image------------ */}

                <div style={{width:"90%",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"rgb(240,240,240)",paddingTop:"10px",paddingBottom:"10px",marginTop:"20px"}} onDragLeave={(e)=>{
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
                                <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}>
                                                                <FaUpload size={100} color="gray"/>
                                                                <div>Drag & Drop Image File here</div>
                                </div>:
                                <img src={URL.createObjectURL(im1)} alt="image" style={{width:"90%",aspectRatio:"3/1"}}/>
                            }
                            
                        </div>
                        <div style={{marginTop:"5px"}}>OR</div>
                        <label style={{width:"90%",fontSize:"12px",marginTop:"5px",paddingTop:"17px",paddingBottom:"17px",cursor:"pointer",borderRadius:"10px",backgroundColor:"rgb(240,240,240)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}><FaPlus/> Click to upload business logo
                                <input type="file" accept="image/*" style={{display:"none"}} onChange={(e)=>{
                                    set_im1(e.target.files[0]);
                                }}/>
                        </label>
            
            <div style={{width:"90%",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px",textAlign:"center"}}>
                <div style={{width:"45%",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"gray",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{

                }}>
                    Cancel
                </div>
            
                <div style={{width:"45%",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{

                }}>
                    <FaUpload/> Save
                </div>
            
            </div>

                {/* ------------------item end---------------- */}

                
            
            </div>
            <div style={{width:"90%",marginBottom:"20px",borderRadius:"10px",cursor:"pointer",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",backgroundColor:"orange",color:"white",paddingTop:"15px",paddingBottom:"15px",textAlign:"center"}} onClick={()=>{

                }}>
                    <FaPlus/> Add menu item
                </div>
            

        </div>
    )
}

export default Menu_edit;