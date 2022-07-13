import React, { useState, useEffect, useRef, lazy, Suspense } from 'react'
// main css import 
import "./app.css";
// routers import 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// context import
import useStateContext from './context/ContextProvider';
// pages import
const Contact = lazy(() => import("./pages/Contact"));
const Home = lazy(() => import("./pages/Home"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const LandingPageTwo = lazy(() => import("./pages/LandingPageTwo"));
const Services = lazy(() => import("./pages/Services"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const About = lazy(() => import("./pages/About"));
const ServicesOne = lazy(() => import("./pages/ServicesOne"));
const ServicesTwo = lazy(() => import("./pages/ServicesTwo"));
const ServicesThree = lazy(() => import("./pages/ServicesThree"));
const ServicesFour = lazy(() => import("./pages/ServicesFour"));
const ServicesFive = lazy(() => import("./pages/ServicesFive"));
const ServicesSix = lazy(() => import("./pages/ServicesSix"));
const ServicesSeven = lazy(() => import("./pages/ServicesSeven"));
const ServicesEight = lazy(() => import("./pages/ServicesEight"));
const ServicesNine = lazy(() => import("./pages/ServicesNine"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
// components import 
const Menu = lazy(() => import("./components/Menu"));
const Button = lazy(() => import("./components/Button"));
const Form = lazy(() => import("./components/Form"));
const Navbar = lazy(() => import("./components/Navbar"));
const Loader = lazy(() => import("./components/Loader"));




const App = () => {
  const location = window.location.pathname;
  const [textClass, settextClass] = useState("");
  const isMounted = useRef();
  useEffect(() => {
    if (isMounted.current) return
    isMounted.current = true;
    if (location === "/web-design-services-v3") {
      settextClass("variation-three");
    } else if (location === "/web-design-services-v2") {
      settextClass("variation-two");
    } else {
      settextClass("variation-one");
    }
  }, [location])
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { setActiveMenu, activeMenu, form, openForm, loading, chatShow, setChatShow, parentForm, setPreventClick } = useStateContext();
  const openMenu = () => {
    setActiveMenu(true);
  }
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 150) {
      setShow(true);
    } else {
      setShow(false);

    }
  }


  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    }
  }, []);
  useEffect(() => {
    if (window.screen.width > 1280) {
      if (chatShow === "first" && !form) {
        setTimeout(() => {
          if (!form) {
            document.getElementById("open-chat")?.click();
          }
          setChatShow("second");
        }, 4000);
      } else if (chatShow === "second" && !form) {
        setTimeout(() => {
          if (!form) {
            document.getElementById("open-chat")?.click();
          }
          setChatShow("third");
        }, 20000);
      } else if (chatShow === "third" && !form) {
        setTimeout(() => {
          if (!form) {
            document.getElementById("open-chat")?.click();
          }
          setChatShow("second");
        }, 20000);
      }
    }
    return () => {
      clearTimeout();
    }
  }, [chatShow, setChatShow, form]);

  const scrollToTop = () => {
    document.getElementById("root").scrollIntoView({ behavior: "smooth" });
  }
  return (
    <>
      <div className={`root ${activeMenu || form ? "bg-black" : ""} relative transition-all`}>
        <a id="open-chat" className='hidden' href="javascript:$zopim.livechat.window.show()">click</a>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <Form classes={textClass} />
        </Suspense>
        <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
          <div onClick={scrollToTop} className={`bg-yellow-300 menu fixed bottom-3 left-5 p-3 transition-all duration-400 rounded-full cursor-pointer hover:bg-yellow-200 ${show ? "translate-x-0" : "-translate-x-36"} w-50`} >
            <img src={`${PF}scroll.webp`} className="w-50" alt="" />
          </div>
        </Suspense>
        {loading &&
          <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
            <Loader />
          </Suspense>
        }
        <div className={`root ${form ? "opacity-40" : "opacity-100"} transition-all duration-400`}>
          <Router>
            <div className='border-t-5 border-black relative' >
              <Navbar toShow={show} />
              {!activeMenu && (
                <>
                  <Link to="/home">
                    <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                      <div className='fixed top-2 left-4 md:left-10 xl:top-1 menu w-50 md:w-70 xl:w-80 2xl:w-100' >
                        <img src={`${PF}logo.webp`} className='object-contain w-50 md:w-70 xl:w-80 2xl:w-100 transition-all' alt="" />
                      </div>
                    </Suspense>
                  </Link>
                  <div className='fixed md:top-5 2xl:top-8 xl:right-4 top-2 right-2  md:right-12 menu' >
                    {location.includes("/web-design-services") ?
                      <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                        <Button
                          customFunc={() => openForm("", "landing-page-v1", "", "Get a Free Quote", true)}
                          text="Get A Free Quote"
                          classes={textClass}
                        />
                      </Suspense>
                      :
                      <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                        <Button customFunc={openMenu} text="Menu" classes={textClass} />
                      </Suspense>
                    }
                    <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                      <div className={`fixed 2xl:top-8 top-4  ${location.includes("/web-design-services") ? "2xl:right-72 right-64" : "right-36  2xl:right-48"}  menu xl:block hidden transition-all duration-300`} >
                        <a href="tel:647-660-1776">
                          <Button
                            text="647-660-1776"
                            classes={textClass}
                            call={true}
                          />
                        </a>
                      </div>
                    </Suspense>
                  </div>
                </>)
              }
              <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                <Menu classes={textClass} />
              </Suspense>
              <Routes>
                {/* landing page */}
                <Route path='/web-design-services-v1-A' element={
                  <LandingPage />
                } />
                {/* <Route path='/web-design-services-v1-b' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <LandingPageTwo />
                  </Suspense>
                } /> */}
                {/* home */}
                <Route path='/' element={

                  <Home />

                } />
                <Route path='/home' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <Home />
                  </Suspense>
                } />
                {/* contact page */}
                <Route path='/contact' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <Contact />
                  </Suspense>
                } />
                {/* privacvy policy page */}
                <Route path='/privacy-policy' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <PrivacyPolicy />
                  </Suspense>
                } />
                {/* terms and condition page */}
                <Route path='/terms-conditions' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <Terms />
                  </Suspense>
                } />
                {/* About page */}
                <Route path='/about' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <About />
                  </Suspense>
                } />
                {/* Services Page */}
                <Route path='/services' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <Services />
                  </Suspense>
                } />
                {/* web-design-development */}
                <Route path='/web-design-development' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesOne />
                  </Suspense>
                } />
                {/* logo-design */}
                <Route path='/logo-design' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesTwo />
                  </Suspense>
                } />
                {/* web-application-development */}
                <Route path='/web-application-development' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesThree />
                  </Suspense>
                } />
                {/* search-engine-optimization */}
                <Route path='/search-engine-optimization' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesFour />
                  </Suspense>
                } />
                {/* social-media-marketin */}
                <Route path='/social-media-marketing' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesFive />
                  </Suspense>
                } />
                {/* mobile-application-development */}
                <Route path='/mobile-application-development' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesSix />
                  </Suspense>
                } />
                {/* graphic-design */}
                <Route path='/graphic-design' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesSeven />
                  </Suspense>
                } />
                {/* video-editing */}
                <Route path='/video-editing' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesEight />
                  </Suspense>
                } />
                {/* content-writing-publications */}
                <Route path='/content-writing-publications' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <ServicesNine />
                  </Suspense>
                } />
                {/* Testimonials */}
                <Route path='/testimonials' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <Testimonials />
                  </Suspense>
                } />

                {/* random page */}
                <Route path='*' element={
                  <Suspense fallback={<div className='fallback' ><img src={`${PF}logo.webp`} alt="" /></div>} >
                    <Home />
                  </Suspense>
                } />
              </Routes>
            </div>
          </Router>
        </div>
      </div>
    </>
  )
}

export default App