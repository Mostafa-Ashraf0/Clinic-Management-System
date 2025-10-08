import dashIcon from './dashboard-icon.svg';
import dashIconDark from './dashboard-icon-dark.svg';
import docIcon from './doctorWhite.svg';
import docIconDark from './doctorDark.svg';
import nurseIcon from './nurseLight.svg';
import nurseIconDark from './nurseDark.svg';
import selectDropDown from './selectDropdownIcon.svg';
import patIcon from './patientsLight.svg';
import patIconDark from './patientsDark.svg'
import admin from "./user.jpg";
import AppIcon from './appointLight.svg';
import AppIconDark from './appointDark.svg'
export const icons = {
    dashboard: {
        light: dashIcon,
        dark: dashIconDark
    },
    doctor:{
        light: docIcon,
        dark: docIconDark
    },
    nurse:{
        light: nurseIcon,
        dark: nurseIconDark
    },
    patients:{
        light: patIcon,
        dark: patIconDark
    },
    appointments: {
        light: AppIcon,
        dark: AppIconDark
    },
    header:{
        dropdown: selectDropDown,
        admin: admin
    }
}