import React from "react";
import { Fragment } from "react";
import "./Content.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { useNavigate } from "react-router-dom";
import { PopupButton } from "@typeform/embed-react";
function Content() {
  const navigate = useNavigate();
  return (
    <Fragment>
      {/* Main Page */}
      <div className="main-container container-fluid row justify-content-center align-items-center text-center m-0">
        {/* Main Content */}
        <div className="content-box col-lg-10 col-11 row justify-content-center align-items-center text-center m-md-5 m-3">
          {/* Title Box */}
          <div className="title-box col-11 m-5 row justify-content-center align-items-center">
            <h1 className="m-md-5 mx-5 mt-4 col-12 title">Recruitment 2022</h1>
            <PopupButton id="EikLBuEY"
              // onClick={() => navigate("/form")}
              className="btn col-lg-3 col-sm-6 col-8 col-md-2 mb-4"
            >
              {/* <Link style={{ textDecoration: 'none' }} to="/form"> */}
              Register Now
              {/* </Link> */}
            </PopupButton>
          </div>

          {/* Timeline */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#0F283E", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #0F283E",
              }}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Recruitment Form
              </h3>
              <h5 className="mt-3 vertical-timeline-element-subtitle">
                15 July
              </h5>
              <p>Recruitment forms out</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#0F283E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Form Closes</h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                25 July
              </h5>
              <p>The form closes and shortlisting of candidates begin</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#0F283E", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #0F283E",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Emails Out</h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                1 August
              </h5>
              <p>
                The shortlisted candidates recieves mails for their quiz slots
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              iconStyle={{ background: "#0F283E", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Direct PI form
              </h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                1 August
              </h5>
              <p>
                Don't want to give the quiz ?<br />
                No worries, Just showcase us your work/projects and get a chance
                to give direct PI
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{ background: "#0F283E", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #0F283E",
              }}
              iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">
                Personal Interview Round
              </h3>
              <h5 className="mt-3 vertical-timeline-element-subtitle">
                Tentative
              </h5>
              <p>
                The final shortlisted condidates will be emailed thier PI rounds
                details
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title">Results</h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                Soon :)
              </h5>
              <p>The best out of the best will be chosen </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
          {/*  */}

          {/* FAQ */}
          <div className="faq-box col-12 m-0 p-0 justify-content-center align-items-center">
            <h1 className="mt-5">Got Any Questions?</h1>
          </div>
          <div
            className="accordion accordion-flush mx-5 mb-5"
            id="accordionFlushExample"
          >
            <div className="accordion-item m-2">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Do I need prior skills and knowledge to apply for ACM's
                  recruitments?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  Not at all! Everyone is welcome to apply in any domain. All
                  you need is a thirst for knowledge and a drive to grow and
                  develop!
                </div>
              </div>
            </div>
            <div className="accordion-item m-2">
              <h2 className="accordion-header" id="flush-headingTwo">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Are the recruitments for 2nd year?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  Yes, the recruitments are for the just turned sophomores
                </div>
              </div>
            </div>

            <div className="accordion-item m-2">
              <h2 className="accordion-header" id="flush-headingThree">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Is there any other method of recruitment other than those
                  mentioned above?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  There are two ways to reach the Personal Interview round to
                  get selected :
                  <br />
                  1. Via the Quiz
                  <br />
                  2. Via Showcasing your projects or some other work
                  <br />
                  Fill the registration form to get more updates
                </div>
              </div>
            </div>

            <div className="accordion-item m-2">
              <h2 className="accordion-header" id="flush-headingFour">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  What are the various domains in which I can apply?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  The various domains in which you can apply are :
                  <br />
                  <strong>Tech: </strong>
                  Web Dev, App Dev, Academic Department, ML/DL
                  <br />
                  <strong>Non-Tech: </strong> Graphic Designing, UI/UX
                  Designing, Video Editting, Marketing
                </div>
              </div>
            </div>

            <div className="accordion-item m-2">
              <h2 className="accordion-header" id="flush-headingFive">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive"
                  aria-expanded="false"
                  aria-controls="flush-collapseFive"
                >
                  What the heck is ACM Thapar and what does it do?
                </button>
              </h2>
              <div
                id="flush-collapseFive"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  To know about us go on our{" "}
                  <a href="https://acmthapar.com/">official website</a>{" "}
                  and check out our social media handles for sure :)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Content;
