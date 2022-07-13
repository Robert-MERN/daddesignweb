import React, { useContext, createContext, useState } from "react";
import axios from "axios";
import { useAlert } from 'react-alert';
const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const alert = useAlert()
    const [activeMenu, setActiveMenu] = useState(false);
    const defaultValue = {
        tabOne: false,
        tabTwo: false,
        tabThree: false,
        tabFour: false,
        tabFive: false
    }
    const [heightAnimation, setHeightAnimation] = useState(defaultValue);

    const heightPress = (prop) => {
        if (heightAnimation[prop] === false) {
            setHeightAnimation({ ...defaultValue, [prop]: true });
        } else {
            setHeightAnimation({ ...defaultValue, [prop]: false });
        }
    }

    const initalValue = {
        tabOne: false,
        tabTwo: false,
        tabThree: false,
        tabFour: false,
        tabFive: false,
        tabSix: false,
    }
    const [tabValue, setTabValue] = useState({ ...initalValue, tabOne: true });
    const tabPress = (prop) => {
        setTabValue({ ...initalValue, [prop]: true });
    }
    // form
    const [form, setForm] = useState(false);
    const [formDetail, setFormDetail] = useState({ subject: "Dad Designs Web" });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const openForm = (packagePrice, pageName, packageName, buttonName, normal, separate, card) => {
        if (buttonName === "Website Form") {
            setFormDetail({ ...formDetail, buttonName, pageName });
        } else {
            if (!separate) {
                setForm(true);
                if (!normal) {
                    if (card) {
                        setFormDetail({ ...formDetail, packagePrice, packageName, buttonName, pageName });
                    }
                } else {
                    setFormDetail({ ...formDetail, buttonName, pageName });
                }
            } else {
                setForm(true);
                setFormDetail({ ...formDetail, buttonName, pageName });
            }

        }

    };
    const closeForm = () => {
        setForm(false);
    };
    const handleChangeForm = (e) => {
        setFormDetail({ ...formDetail, [e.target.name]: e.target.value });
    }
    let errorNum = 0;
    const submitForm = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await axios.post("https://api.daddesignsweb.com/sendmail", formDetail);
            setFormSubmitted(true);
            setLoading(false);
            setFormDetail({ subject: "Dad Designs Web" });
            alert.show("Thank you for submitting the form!", { type: "success" });
        } catch (err) {
            console.error(err);
            errorNum = errorNum + 1;
            setLoading(false);
            if (errorNum < 3) {
                alert.show("We couldn't send your form. try again!", { type: "error" });
            } else {
                alert.show("Contact with us if you aren't be able to send form!", { type: "error" });
            }
        }
    }
    const [specificService, setSpecificService] = useState("");
    const [chatShow, setChatShow] = useState("first");

    // video custom order 
    const orderVideoCustom = (packagePrice, videoType, videoDuration) => {
        setForm(true);
        setFormDetail({ packagePrice, pageName: "video-editing", packageName: "Custom Order", buttonName: "Order Now", videoType, videoDuration })
    }
    // content writing custom order
    const orderContentCustom = (packagePrice, stars, words, pages, urgency, keywordSearch) => {
        setForm(true);
        setFormDetail({ packagePrice, pageName: "conetnt-writing", packageName: "Custom Order", buttonName: "Order Now", stars, words, pages, urgency, keywordSearch })
    }


    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                tabValue, tabPress,
                heightAnimation, heightPress,
                form, openForm, closeForm,
                submitForm, handleChangeForm, formSubmitted, setFormSubmitted, setFormDetail, formDetail,
                loading,
                setSpecificService, specificService,
                chatShow, setChatShow,
                orderVideoCustom, orderContentCustom
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

const useStateContext = () => useContext(StateContext);
export default useStateContext;
