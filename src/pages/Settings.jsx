import { useDispatch } from "react-redux";
import { addLight } from "../features/dashboard/sidebarSlice";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SettingsForm from "../components/settings/settingForm";

const Settings = ()=>{
    const dispatch = useDispatch();
        useEffect(()=>{
            dispatch(addLight("settings"));
        },[])
    return(
        <>
            <Header/>
            <Sidebar/>
            <MainContent>
                <div>settings</div>
                <SettingsForm/>
            </MainContent>
        </>
    )
}

export default Settings;