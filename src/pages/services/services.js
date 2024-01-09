import { forwardRef, useState } from "react";
import "../services/services.css";

const Services = forwardRef((props, ref) => {
  function changeBgColor(value) {
    var element =
      value == 1
        ? document.querySelector(".Ellipse1")
        : value == 2
        ? document.querySelector(".Ellipse2")
        : document.querySelector(".Ellipse3");
    element.style.backgroundColor = "#F43E04";
  }
  function backToNormal(value) {
    document.querySelector(".Ellipse1").style.backgroundColor = "#E6E6E6";
    document.querySelector(".Ellipse2").style.backgroundColor = "#E6E6E6";
   document.querySelector(".Ellipse3").style.backgroundColor = "#E6E6E6";
    
  }
  return (
    <section className="services-bg" ref={ref}>
      <div className="heading-text-style">Our Featured Service</div>
      <div className="sub-heading-style">
        Provides training and equips them with sound knowledgein all domain and
        does its best to create job opportunities.
      </div>
      <div className="feature-types">
        {/* ......................................Online Training....................................... */}
        <div
          onMouseEnter={() => changeBgColor(1)}
          onMouseOut={() => backToNormal(1)}
          className="Component1"
          style={{ width: 441, height: 404, position: "relative" }}
        >
          <div
            className="Subtract1"
            style={{
              width: 418,
              height: 379,
              left: 0,
              top: 25,
              position: "absolute",
            }}
          />
          <div
            style={{
              left: 20,
              top: 178,
              position: "absolute",
              color: "black",
              fontSize: 24,
              fontFamily: "Mitr",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Is for those who are at remote
            <br />
            locations ,with an intention to <br />
            provide services for all those <br />
            aspirants who want to be part <br />
            of the core department.
          </div>
          <div
            className="OnlineTraining"
            style={{
              left: 20,
              top: 76,
              position: "absolute",
              color: "black",
              fontSize: 32,
              fontFamily: "Mitr",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Online Training
          </div>
          <div
            className="Group1244830097"
            style={{
              width: 144,
              height: 144,
              left: 297,
              top: 0,
              position: "absolute",
            }}
          >
            <div className="Ellipse1" />
            <div
              className="online-training-img"
              style={{
                width: 72,
                height: 72,
                left: 36,
                top: 36,
                position: "absolute",
              }}
            ></div>
          </div>
        </div>
        {/* ..................................................Job Training.............................................. */}
        <div
          className="Component2"
          onMouseEnter={() => changeBgColor(2)}
          onMouseOut={() => backToNormal(2)}
          style={{ width: 441, height: 404, position: "relative" }}
        >
          <div
            className="Subtract2"
            style={{
              width: 418,
              height: 379,
              left: 0,
              top: 25,
              position: "absolute",
            }}
          />
          <div
            style={{
              left: 20,
              top: 178,
              position: "absolute",
              color: "black",
              fontSize: 24,
              fontFamily: "Mitr",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Is for those who are at remote
            <br />
            locations ,with an intention to <br />
            provide services for all those <br />
            aspirants who want to be part <br />
            of the core department.
          </div>
          <div
            className="OnlineTraining"
            style={{
              left: 20,
              top: 76,
              position: "absolute",
              color: "black",
              fontSize: 32,
              fontFamily: "Mitr",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Job Training
          </div>
          <div
            className="Group1244830097"
            style={{
              width: 144,
              height: 144,
              left: 297,
              top: 0,
              position: "absolute",
            }}
          >
            <div className="Ellipse2" />
            <div
              className="job-training-img"
              style={{
                width: 72,
                height: 72,
                left: 36,
                top: 36,
                position: "absolute",
              }}
            ></div>
          </div>
        </div>
        {/* ..............................................................Placements................................. */}
        <div
          className="Component3"
          onMouseEnter={() => changeBgColor(3)}
          onMouseOut={() => backToNormal(3)}
          style={{ width: 441, height: 404, position: "relative" }}
        >
          <div
            className="Subtract3"
            style={{
              width: 418,
              height: 379,
              left: 0,
              top: 25,
              position: "absolute",
            }}
          />
          <div
            style={{
              left: 20,
              top: 178,
              position: "absolute",
              color: "black",
              fontSize: 24,
              fontFamily: "Mitr",
              fontWeight: "300",
              wordWrap: "break-word",
            }}
          >
            Is for those who are at remote
            <br />
            locations ,with an intention to <br />
            provide services for all those <br />
            aspirants who want to be part <br />
            of the core department.
          </div>
          <div
            className="OnlineTraining"
            style={{
              left: 20,
              top: 76,
              position: "absolute",
              color: "black",
              fontSize: 32,
              fontFamily: "Mitr",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Placements
          </div>
          <div
            className="Group1244830097"
            style={{
              width: 144,
              height: 144,
              left: 297,
              top: 0,
              position: "absolute",
            }}
          >
            <div className="Ellipse3" />
            <div
              className="placements-img"
              style={{
                width: 72,
                height: 72,
                left: 36,
                top: 36,
                position: "absolute",
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
});
export default Services;
