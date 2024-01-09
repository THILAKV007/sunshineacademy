import { React, useRef } from "react";
import "./App.css";
import Home from "./pages/home/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplyOnline from "./pages/apply_online/apply_online";
import CourseDetail from "./pages/courses/course-detail";
export default function App() {
  const homeRef=useRef(null);
  const dashboardRef=useRef(null);
  const servicesRef=useRef(null);
  const coursesRef=useRef(null);
  const aboutUsRef=useRef(null);
 const contactUsRef=useRef(null);
 console.log("initial",dashboardRef, servicesRef, coursesRef, aboutUsRef, contactUsRef);
  return (
    <div ref={homeRef}>
      <Routes>
        <Route
        render={routeProps => (
          <Home
          exact
          to="/"
            {...routeProps}
            innerRefs={{ dashboardRef, servicesRef, coursesRef, aboutUsRef, contactUsRef}}
          />
        )}
        path="/" element={<Home innerRefs={{ dashboardRef, servicesRef, coursesRef, aboutUsRef, contactUsRef}}/>}/>
          <Route 
          render={(routeProps) => (
            <Home
            exact
            to="/home"
              {...routeProps} 
              innerRefs={{ 
                dashboardRef,
                servicesRef,
                coursesRef,
                aboutUsRef,
                contactUsRef,
              }}
            />
          )}
          path="/home" index element={<Home innerRefs={{ dashboardRef, servicesRef, coursesRef, aboutUsRef, contactUsRef}}/>} />
       
        <Route path="/apply-online" element={<ApplyOnline  innerRefs={{ dashboardRef, servicesRef, coursesRef, aboutUsRef, contactUsRef}}/>} />
        <Route path="/course-detail" element={<CourseDetail innerRefs={{dashboardRef,servicesRef,coursesRef, aboutUsRef, contactUsRef}}/>}></Route>
      </Routes>
    </div>
  );
}
