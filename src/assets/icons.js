import dashIcon from './dashboard-icon.svg';
import dashIconDark from './dashboard-icon-dark.svg';
import docIcon from './doctorWhite.svg';
import docIconDark from './doctorDark.svg';
import nurseIcon from './nurseLight.svg';
import nurseIconDark from './nurseDark.svg';
import selectDropDown from './selectDropdownIcon.svg';
import patIcon from './patientsLight.svg';
import patIconDark from './patientsDark.svg'
import AppIcon from './appointLight.svg';
import AppIconDark from './appointDark.svg';
import Search from './searchIcon.svg';
import addIcon from './addIcon.svg';
import tagIcon from './tagIcon.png';
import deleteIcon from './deleteIcon.png';
import test from './medicalTest.svg';
import testDark from './medicalTestDark.svg';
import binIcon from './bin.png';
import live from './live-light.svg';
import liveDark from './live-dark.svg';
import editLogo from './edit-3-svgrepo-com.svg';
import viewIcon from './eye-svgrepo-com.svg';
import closeIcon from './close-ellipse-svgrepo-com.svg';

export const icons = {
    public: {
        edit: editLogo,
        close: closeIcon
    },
    live: {
        light: live,
        dark: liveDark,
        view: viewIcon
    },
    dashboard: {
        light: dashIcon,
        dark: dashIconDark
    },
    doctor:{
        light: docIcon,
        dark: docIconDark,
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
    medicalTests:{
        light: test, 
        dark: testDark,
        bin: binIcon
    },
    header:{
        dropdown: selectDropDown,
        admin: '',
    },
    control:{
        searchIcon: Search,
        add: addIcon
    },
    tags:{
        tagIcon: tagIcon,
        delete: deleteIcon
    }
}