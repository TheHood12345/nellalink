import OneSignal from "react-onesignal";
import { useEffect, useMemo, useRef, useState } from "react";
import { Bell, CheckCircle2, Copy, IdCard, LockKeyhole, Send, Verified } from "lucide-react";
import { FaAngleDown, FaAngleUp, FaArrowLeft, FaBell, FaCaretDown, FaCaretUp, FaCertificate, FaCheckCircle, FaExclamationCircle, FaInfoCircle, FaLock, FaRegBell } from "react-icons/fa";
import { FaCircleXmark, FaRightToBracket } from "react-icons/fa6";
import { Link, Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { BsFillArrowLeftCircleFill, BsPerson } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import BottomNav from "./boxContent/nav/bottomNav";
import TopNav from "./boxContent/nav/topNav";
import LeftNav from "./boxContent/nav/leftNav";

function Box(){

    const navigate = useNavigate();
    const [logout,set_logout] = useState();
    const [notif,set_notif] = useState();

    const [success,set_success] = useState(false);
    const [fail,set_fail] = useState(false);
    const [success_message,set_success_message] = useState("");
    const [fail_message,set_fail_message] = useState("");

    // const [feedbacks,set_feedbacks] = useState([]);

    // useEffect(()=>{
    //     set_feedbacks((prev)=> [0,...prev]);
    // },[success,fail]);

    const [notif_num,set_notif_num] = useState(0);
    const [notif_items,set_notif_items] = useState([]);

    const [seek_nav,set_seek_nav] = useState("home");
    const [seek_top_bar,set_seek_top_bar] = useState("");

    const [seek_logout,set_seek_logout] = useState(false);

    const platform = useMemo(()=> /Android/i.test(navigator.userAgent)? "android": /iPhone|iPad|iPod/i.test(navigator.userAgent)? "ios": "web");

    const [query]=useSearchParams();

        useEffect(()=>{
        if(query.get("notification")=="true"){
            set_notif(true);
        }
    },[query]);

    useEffect(()=>{
        if(!localStorage.getItem("login")){
            set_success_message("Logged in successfully");
            set_success(true);
            setTimeout(()=>{
                set_success(false);
                localStorage.setItem("login","yes");
            },5000);
        }
    },[]);

    // useEffect(()=>{
        // async function registerDevice(){
        //     await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/${localStorage.getItem("uuid")}/device`, {
        //         method: "post",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "x-api-key": import.meta.env.VITE_APP_API_KEY
        //         },
        //         body: JSON.stringify({
        //             "device_id": `d_${platform}_${localStorage.getItem("uuid")}`,
        //             "platform":  platform,      //"web", "android" , "ios"
        //             "label": Date.now().toString(),
        //             "enable_notification": true
        //         })
        //     }).then((res)=>res.json()).then((data)=>{
        //         console.log("-----------agent---------",navigator.userAgent);
        //         console.log("RESPONSE----: ", data);
        //         if(data.status==true){
        //             // set_success_message(data.message);
        //             // set_success(true);
        //             // setTimeout(()=>{
        //             //     set_success(false);
        //             // },5000);
        //         }else{
        //             // set_fail_message(data.message);
        //             // set_fail(true);
        //             // setTimeout(()=>{
        //             //     set_fail(false);
        //             // },5000);
        //         }
        //     }).catch((err)=>{
        //         console.log("FAILED TO DO STUFF, DUE TO:    ", err);
        //         // set_fail_message("Check your internet connection.");
        //         // set_fail(true);
        //         // setTimeout(()=>{
        //         //     set_fail(false);
        //         // },5000);
        //     });
        // }

        // async function notificationSettings(){
        //     await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/${localStorage.getItem("uuid")}/notification-setting`, {
        //         method: "post",
        //         headers: {
        //             "Content-Type": "application/json",
        //             "x-api-key": import.meta.env.VITE_APP_API_KEY
        //         },
        //         body: JSON.stringify({
        //             "platform": platform,
        //             "device_id": `d_${platform}_${localStorage.getItem("uuid")}`,
        //             "providers": {
        //                 "onesignal": {
        //                     token: "5950f0e8-e8f0-4e6b-be72-26f7266d155d"
        //                 }
        //             }
        //         })
        //     }).then((res)=>res.json()).then((data)=>{
        //         console.log("-----------agent---------",navigator.userAgent);
        //         console.log("RESPONSE----: ", data);
        //         if(data.status==true){
        //             set_success_message(data.message);
        //             set_success(true);
        //             setTimeout(()=>{
        //                 set_success(false);
        //             },5000);
        //         }else{
        //             set_fail_message(data.message);
        //             set_fail(true);
        //             setTimeout(()=>{
        //                 set_fail(false);
        //             },5000);
        //         }
        //     }).catch((err)=>{
        //         console.log("FAILED TO DO STUFF, DUE TO:    ", err);
        //         set_fail_message("Check your internet connection.");
        //         set_fail(true);
        //         setTimeout(()=>{
        //             set_fail(false);
        //         },5000);
        //     });
        // }

        // async function go(){
        //     //await registerDevice();
        //     await notificationSettings();
        // }

       // go();

    // }, []);


        async function notificationSettings(id){
            await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/${localStorage.getItem("uuid")}/notification-setting`, {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": import.meta.env.VITE_APP_API_KEY
                },
                body: JSON.stringify({
                    
                    "platform": platform,
                    "device_id": `d_${platform}_${localStorage.getItem("uuid")}`,
                    "providers": {
                        "onesignal": {
                            "appId": "5950f0e8-e8f0-4e6b-be72-26f7266d155d",
                            "subscription_id": id,

                        }
                    }
                })
            }).then((res)=>res.json()).then((data)=>{
                console.log("LOADED!!!!!!!!!!!");
                console.log("-----------agent---------",navigator.userAgent);
                console.log("RESPONSE----: ", data);
                if(data.status==true){
                    set_success_message(data.message);
                    set_success(true);
                    setTimeout(()=>{
                        set_success(false);
                    },5000);
                }else{
                    // set_fail_message(data.message);
                    // set_fail(true);
                    // setTimeout(()=>{
                    //     set_fail(false);
                    // },5000);
                }
            }).catch((err)=>{
                console.log("FAILED TO DO set notification:    ", err);
                // set_fail_message("An error occured.");
                // set_fail(true);
                // setTimeout(()=>{
                //     set_fail(false);
                // },5000);
            });
         }
    useEffect(()=>{

        async function init(){
            await OneSignal.init({
                appId: "5950f0e8-e8f0-4e6b-be72-26f7266d155d",
                //import.meta.env.VITE_ONESIGNAL_APP_ID,
                allowLocalhostAsSecureOrigin: true
            })
            // .then(async(res)=>{
            //     console.log("OneSignal initialized: ",res);
            //     console.log("Subscription ID =", OneSignal.User.PushSubscription.id);
            //      //const subscriptionId = await OneSignal.User.PushSubscription.id;
            // console.log("Sub ID--****************-----------:   ",subscriptionId);
            //     //await notificationSettings(OneSignal.User.PushSubscription.id);
            // }).catch((err)=>{
            //     console.log("OneSignal failed to initialize:    ",err);
            //     // set_notif_num((num)=>num+=1);
            // });
            await OneSignal.Notifications.requestPermission();
            // await OneSignal.Notifications.requestPermission().then((res)=>{
            //     console.log("OneSignal requested permission successfully: ",res);


            // }).catch((err)=>{
            //     console.log("OneSignal failed to request permission:    ",err)
            // });
            const subscriptionId = OneSignal.User.PushSubscription.id;
            console.log("Subscription ID:   ", subscriptionId);
            console.log("Permission:    ",OneSignal.Notifications.permission);

            //console.log("PERMISSION:   +++++ ", Notification.permission);

            // OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event)=>{
            //     event.preventDefault();
            //     set_notif_num((num)=>num+=1);
            //     set_notif_items(prev => [{title:event.notification.title,id:event.notification.notificationId,body:event.notification.body},...prev]);
            //     console.log("New Notification:  ",event.notification);
            //     event.notification.display();
            // });
            // const subscriptionId = OneSignal.User.PushSubscription.id;
            // console.log("Sub ID-------------:   ",subscriptionId);

            // const playerId = await OneSignal.User.getO;
            // console.log("Player ID: ",playerId);


            // async function notificationSettings(){
            // await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/${localStorage.getItem("uuid")}/notification-setting`, {
            //     method: "post",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "x-api-key": import.meta.env.VITE_APP_API_KEY
            //     },
            //     body: JSON.stringify({
            //        "platform": platform,
            //         "device_id": `d_${platform}_${localStorage.getItem("uuid")}`,
            //         "providers": {
            //             "onesignal": {
            //                 "app_id": "5950f0e8-e8f0-4e6b-be72-26f7266d155d",
            //                 "subscription_id": subscriptionId,

            //             }
            //         }
            //     })
            // }).then((res)=>res.json()).then((data)=>{
            //     console.log("-----------agent---------",navigator.userAgent);
            //     console.log("RESPONSE----: ", data);
            //     if(data.status==true){
            //         set_success_message(data.message);
            //         set_success(true);
            //         setTimeout(()=>{
            //             set_success(false);
            //         },5000);
            //     }else{
            //         set_fail_message(data.message);
            //         set_fail(true);
            //         setTimeout(()=>{
            //             set_fail(false);
            //         },5000);
            //     }
            // }).catch((err)=>{
            //     console.log("FAILED TO DO set notification:    ", err);
            //     // set_fail_message("An error occured.");
            //     // set_fail(true);
            //     // setTimeout(()=>{
            //     //     set_fail(false);
            //     // },5000);
            // });
            // }
            //  notificationSettings();
        }
       // init();
    },[]);

    // const [subscriptionId, setSubscriptionId] = useState(null);
    // const [isSubscribed, setIsSubscribed] = useState(false);
    // const [initialized, setInitialized] = useState(false);
    // const initStarted = useRef(false);

    // useEffect(()=>{
    //     if(initStarted.current) return; //prevent double init
    //     initStarted.current = true;

    //     const initOneSignal = async () => {
    //         try{
    //         await OneSignal.init({
    //             appId: "5950f0e8-e8f0-4e6b-be72-26f7266d155d",
    //             allowLocalhostAsSecureOrigin: true,
    //             //notifyButton: {enable:true},
    //         });

    //         console.log("OneSignal object after init:   ",OneSignal);
    //         if(OneSignal.User && OneSignal.User.PushSubscription){
    //             const id = OneSignal.User.PushSubscription.id;
    //             const optedIn = OneSignal.User.PushSubscription.optedIn;
    //             setSubscriptionId(id ?? null);
    //             setIsSubscribed(!!optedIn);
    //             OneSignal.User.PushSubscription.addEventListener("change",(event) => {
    //                 setSubscriptionId(event.current.id ?? null);
    //                 setIsSubscribed(!!event.current.optedIn);
    //                 console.log("Subscription changed:  ",event.current);
    //             });

    //         } else {
    //             console.warn("OneSignal.User.PushSubscription not available. Check your react-onesignal version (needs v1.4.0+ for this API.");
    //         }
    //         //Foreground notification handler
    //         if(OneSignal.Notifications){
    //             OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event) => {
    //             const { notification } = event;
    //             alert(`${notification.title}\n\n${notification.body}`);
    //         });
    //         OneSignal.Notifications.addEventListener("click", (event) => {
    //             console.log("Notification clicked:  ",event);
    //         });
    //         }
    //         setInitialized(true);
    //     }catch(err){
    //         console.error("OneSignal init error:",err);
    //     }

    //        // setInitialized(true);

            
    //         //setSubscriptionId(id);

            
            
            

            

            
    //     };

    //     initOneSignal();

    // },[]);

    // const requestPermission = async () => {
    //     if(OneSignal.Notifications){
    //         await OneSignal.Notifications.requestPermission();
    //     }else{
    //         console.warn("OneSignal.Notifications not available");
    //     }
    // };


  const [subscriptionId, setSubscriptionId] = useState(null);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const initStarted = useRef(false);
  const lastSentId = useRef(null);
  const retryTimeoutRef = useRef(null);

  const sendSubscriptionToServer = async (id, attempt = 1) => {
    if (!id || id === lastSentId.current) return;

    const MAX_DELAY = 30000; // cap backoff at 30s
    const delay = Math.min(1000 * 2 ** (attempt - 1), MAX_DELAY); // 1s, 2s, 4s, 8s... capped

    try {
      const response = await fetch(`${import.meta.env.VITE_CORE_BACKEND_BASE_API_URL}/public/api/v1/nellalink/user/${localStorage.getItem("uuid")}/notification-setting`, {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "x-api-key": import.meta.env.VITE_APP_API_KEY
        },
        body: JSON.stringify({ 
           // subscriptionId: id 
            "platform": platform,
            "device_id": `d_${platform}_${localStorage.getItem("uuid")}`,
            "providers": {
                "onesignal": {
                    "appId": "5950f0e8-e8f0-4e6b-be72-26f7266d155d",
                    "subscription_id": id,

                }
            }
        }),
      });

      if (!response.ok) throw new Error(`Server responded with ${response.status}`);

      lastSentId.current = id;
      console.log("Subscription ID sent to server:", id);
        set_success_message("Subscription successfully sent to the server");
        set_success(true);
        setTimeout(()=>{
            set_success(false);
        },5000);
    } catch (err) {
      console.warn(`Attempt ${attempt} failed, retrying in ${delay / 1000}s..., err`);

      retryTimeoutRef.current = setTimeout(() => {
        sendSubscriptionToServer(id, attempt + 1);
      }, delay);
    }
  };

  useEffect(() => {
    if (initStarted.current) return;
    initStarted.current = true;

    const initOneSignal = async () => {
      try {
        await OneSignal.init({
          appId: "5950f0e8-e8f0-4e6b-be72-26f7266d155d",
          allowLocalhostAsSecureOrigin: true,
        });

        if (!OneSignal.User || !OneSignal.User.PushSubscription) {
          console.warn("OneSignal.User.PushSubscription not available.");
          return;
        }

        const currentId = OneSignal.User.PushSubscription.id;
        const currentOptedIn = OneSignal.User.PushSubscription.optedIn;
        setSubscriptionId(currentId ?? null);
        setIsSubscribed(!!currentOptedIn);
        if (currentId) sendSubscriptionToServer(currentId);

        OneSignal.User.PushSubscription.addEventListener("change", (event) => {
          const newId = event.current.id ?? null;
          setSubscriptionId(newId);
          setIsSubscribed(!!event.current.optedIn);
          if (newId) sendSubscriptionToServer(newId);
        });

        const permission = OneSignal.Notifications.permission;
        if (!permission) {
          await OneSignal.Notifications.requestPermission();
        }

        if (OneSignal.Notifications) {
          OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event) => {
            const { notification } = event;
            alert(`${notification.title}\n\n${notification.body}`);
            set_notif_num((num)=>num+=1);
          });
        }
      } catch (err) {
        console.error("OneSignal init error:", err);
      }
    };

    initOneSignal();

    // Clean up any pending retry if the component unmounts
    return () => {
      if (retryTimeoutRef.current) clearTimeout(retryTimeoutRef.current);
    };
  }, []);

    return (
        <div className="box">

            <div style={{width:"100%",height:"100%",color:"rgb(40,40,40)",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"start",justifyContent:"start"}}>

                {/* *****LEFT BAR******** */}
                <div className="left_bar" style={{height:"100%",display:"flex",backgroundColor:"rgb(200,208,215)",transition:"all 0.3s linear",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                    <div style={{height:"80%",display:"flex",flexDirection:"column",alignItems:"center",overflow:"scroll"}}>
                        <div style={{fontSize:"30px",gap:"10px",fontFamily:"poppins-bold",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginTop:"30px"}}>
                            <div>Nellalink{platform}</div>
                            <div>SBS</div>
                            
                        </div>
                        {/* *****LEFT NAV***** */}
                        <div style={{alignSelf:"end",width:"100%"}}>
                            {/* <div style={{fontSize:"7px"}}>OneSignal Test</div> */}
                            {/* <div style={{fontSize:"7px"}}>Initialized:{initialized?" yes": " no"}</div> */}
                            {/* <div style={{fontSize:"7px"}}>subscribed:{isSubscribed?" yes": " no"}</div> */}
                            {/* <div style={{fontSize:"7px"}}>subId{subscriptionId ?? " Not subscribed yet"}</div> */}
                            {/* <button style={{cursor:"pointer",fontSize:"7px",backgroundColor:"red"}}>Enable notification</button> */}
                        <LeftNav seek_nav={seek_nav} set_seek_nav={set_seek_nav}/>
                        </div>
                        
                    </div>
                    <div style={{width:"100%",height:"20%",backgroundColor:"rgb(51, 73, 92)",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",height:"80%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <img src="/35.png" style={{width:"20%",aspectRatio:"1/1"}}/>
                            <div style={{width:"70%",height:"100%",display:"flex",flexDirection:"column",alignItems:"start",justifyContent:"end"}}>
                                <div style={{fontFamily:"poppins-bold",height:"20%"}}>{localStorage.getItem("name")}</div>
                                <div style={{fontFamily:"poppins-light",fontSize:"10px",height:"60%",overflow:"scroll"}}>Merchant ID: {localStorage.getItem("uuid")}</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* *******BODY******* */}
                <div className="body" style={{backgroundColor:"rgb(252,252,253)",height:"100%"}}>
                    {/* *******TOP***** */}
                    <div style={{width:"100%",height:"15%",backgroundColor:"white",boxShadow:"0px 3px 3px rgb(200,200,200)",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                        <div style={{width:"90%",height:"90%",backgroundColor:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                            <TopNav seek_nav={seek_nav} set_seek_logout={set_seek_logout} seek_top_bar={seek_top_bar} set_seek_top_bar={set_seek_top_bar} notif_num={notif_num} notif_items={notif_items}/>
                        </div>
                    </div>

                    
                    <div style={{width:"100%",height:"85%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"space-between"}}>
                        
                        {/* *******B CONTENT******** */}
                        <div className="body_content" style={{position:"relative",width:"100%",height:"100%",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"scroll",transition:"all 0.3s linear"}}>
                            <Outlet context={{notif_num:notif_num,notif_items:notif_items,set_success,set_success_message,set_fail,set_fail_message}}/>

                             {
                                seek_logout&&
                                <div className="box_card" style={{width:"300px",display:"flex",boxSizing:"border-box",borderRadius:"10px",position:"absolute",flexDirection:"column",alignItems:"start",paddingLeft:"10px",paddingTop:"10px",paddingBottom:"10px",backgroundColor:"white"}}>
                                    <div style={{textAlign:"center",fontFamily:"poppins-bold"}}>Confirm Logout</div>
                                    <div style={{width:"90%",fontSize:"12px",textAlign:"start"}}>Are you sure you want to logout?</div>
                                    <div style={{width:"90%",fontSize:"12px",display:"flex",marginTop:"20px",flexDirection:"row",alignItems:"center",justifyContent:"end"}}>
                                        <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                                            set_seek_logout(false);
                                        }}>
                                                <div>Cancel</div>
                                        </div>
                                        <div style={{width:"40%",paddingTop:"10px",paddingBottom:"10px",borderRadius:"10px",backgroundColor:"red",color:"white",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{
                                            localStorage.clear();
                                            navigate(`/login`,{replace: true});
                                        }}>
                                                <div>Logout</div>
                                        </div>
                                    </div>
                                </div>
                            }
                            {
                                success&&
                                <div className="success" style={{display:"flex",backdropFilter:"blur(30px)",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                <FaCheckCircle size={30} style={{marginRight:"10px"}}/> {success_message}
                                </div>
                            }
                            {
                                fail&&
                                <div className="fail" style={{display:"flex",backdropFilter:"blur(60px)",flexDirection:"row",alignItems:"center",justifyContent:"start"}}>
                                    <FaExclamationCircle color={"white"} size={20} style={{marginRight:"10px"}}/> <div style={{marginLeft:"10px"}}>{fail_message}</div>
                                </div>
                            }

                        </div>


                        {/* *******BOTTOM******** */}
                        <div className="body_bottom_bar" style={{width:"100%",transition:"all 0.3s linear",backgroundColor:"white",boxShadow:"0px -3px 3px rgb(200,200,200)"}}>
                            <BottomNav seek_nav={seek_nav} set_seek_nav={set_seek_nav}  set_seek_logout={set_seek_logout}/>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Box;