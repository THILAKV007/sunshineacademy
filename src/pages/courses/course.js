import { useNavigate } from "react-router-dom";
import "../courses/course.css";
import { React, forwardRef, useState } from "react";
const Course = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const [selectedCource, setCourse] = useState(0);
  function couseSelected(index) {
    setCourse(index);
  }
  return (
    <section className="courses-bg" ref={ref}>
      <div className="heading-text-style">Course offered</div>
      <div className="sub-heading-style">
        We offered industries leading course for medical coding & Medical
        billing course for medical coding & Medical billing
      </div>
      <div className="course-list-tile">
        <div className="course-lists">
          {(() => {
            let contents = [];
            for (let i = 0; i < 5; i++) {
              contents.push(
                <div
                  style={{
                    color: selectedCource == i ? "black" : "white",
                    fontSize: 20,
                    fontStyle: "normal",
                    fontWeight: 300,
                    marginTop: 7,
                    backgroundColor:
                      selectedCource == i ? "white" : "transparent",
                    borderRadius: selectedCource == i ? "50px" : 0,
                    paddingTop: 10,
                    paddingBottom: 10,
                    paddingLeft: 20,
                    paddingRight: 20,
                  }}
                  onClick={() => couseSelected(i)}
                >
                  {i == 0
                    ? "CMC"
                    : i == 1
                    ? "ACMC"
                    : i == 2
                    ? "COC"
                    : i == 3
                    ? "CIC"
                    : "CPC"}
                </div>
              );
            }
            return contents;
          })()}
        </div>
      </div>
      <div className="courses-examples">
        <div>
          <img
            src="/assets/doctor.png"
            alt=""
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="1500"
            onClick={() => navigate("/course-detail", { state: { type: 1 } })}
          ></img>
        </div>
        <div>
          <img
            src="/assets/stethes.png"
            onClick={() => navigate("/course-detail", { state: { type: 2 } })}
          ></img>
        </div>
        <div>
          <img
            src="/assets/medical-book.png"
            onClick={() => navigate("/course-detail", { state: { type: 3 } })}
          ></img>
        </div>
      </div>
    </section>
  );
});
export default Course;
