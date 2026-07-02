import Large_nella from "./large_nella";
import Small_nella from "./small_nella";
import OneSignal from "react-onesignal";
import { useEffect } from "react";

function Box(){

    useEffect(()=>{
        async function init(){
            await OneSignal.init({
                appId: import.meta.env.VITE_ONESIGNAL_APP_ID,
            }).then((res)=>{
                console.log("OneSignal initialized: ",res);
            }).catch((err)=>{
                console.log("OneSignal failed to initialize:    ",err)
            });
            await OneSignal.Notifications.requestPermission().then((res)=>{
                console.log("OneSignal requested permission successfully: ",res);
            }).catch((err)=>{
                console.log("OneSignal failed to request permission:    ",err)
            });

            OneSignal.Notifications.addEventListener("foregroundWillDisplay", (event)=>{
                console.log("New Notification:  ",event.notification);
                alert("New notification:    ",event.notification);
                event.preventDefault();
                event.notification.display();
            })
        }
        init();
    },[]);

    return (
        <div className="box">
            <Small_nella/>
            <Large_nella/>
        </div>
    )
}

export default Box;