import { useDispatch, useSelector } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SettingsForm from "../components/settings/settingForm";
import Overlay from "../components/Overlay";
import { setMobileVisible } from "../features/dashboard/sidebarSlice";

const Settings = ()=>{
    const dispatch = useDispatch();
    const { mobileVisible } = useSelector((state)=>state.sidebar);
        useEffect(()=>{
            dispatch(addLight("settings"));
            dispatch(setMobileVisible(false));
        },[dispatch])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <div>settings</div>
                <SettingsForm/>
            </MainContent>
            {mobileVisible && <Overlay/>}
        </>
    )
}

export default Settings;