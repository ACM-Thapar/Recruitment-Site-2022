import React from 'react';
import {Fragment} from 'react';
import './Content.css';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Content () {
  return (
    <Fragment>
      {/* Main Page */}
      <div className="main-container container-fluid row justify-content-center align-items-center text-center m-0">

        {/* Main Content */}
        <div className="content-box col-lg-10 col-11 row justify-content-center align-items-center text-center m-md-5 m-3">

          {/* Title Box */}
          <div className="title-box col-11 m-5 row justify-content-center align-items-center">
            <h1 className="m-md-5 mx-5 mt-4 col-12 title">Recruitment 2022</h1>
            <button className="btn my-5 col-9 col-sm-3 col-md-3 col-lg-3">
              Register Now
            </button>
          </div>

          {/* Timeline */}
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '7px solid  #0F283E',
              }}
              // date="2011 - present"
              iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Recruitment Form
              </h3>
              <h5 className="mt-3 vertical-timeline-element-subtitle">
                15 July
              </h5>
              <p>
                Recruitment forms out
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              // date="2010 - 2011"
              iconStyle={{background: '#0F283E', color: '#fff'}}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Form Closes</h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                25 July
              </h5>
              <p>
                The form closes and shortlisting of candidates begin
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '7px solid  #0F283E',
              }}
              // date="2008 - 2010"
              iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
              // icon={<WorkIcon />}
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
              // date="2006 - 2008"
              iconStyle={{background: '#0F283E', color: '#fff'}}
              // icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Direct PI form
              </h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                1 August
              </h5>
              <p>
                Don't want to give the quiz ?<br />
                No worries, Just showcase us your work/projects and get a chance to give direct PI
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '7px solid  #0F283E',
              }}
              // date="April 2013"
              iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Personal Interview Round
              </h3>
              <h5 className="mt-3 vertical-timeline-element-subtitle">
                Tentative
              </h5>
              <p>
                The final shortlisted condidates will be emailed thier PI rounds details
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--education"
              // date="November 2012"
              iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Results
              </h3>
              <h5 className=" mt-3 vertical-timeline-element-subtitle">
                Soon :)
              </h5>
              <p>
                The best out of the best will be chosen{' '}
              </p>
            </VerticalTimelineElement>
            {/* <VerticalTimelineElement
              className="vertical-timeline-element--education"
              contentStyle={{background: '#0F283E', color: '#fff'}}
              contentArrowStyle={{
                borderRight: '7px solid  #0F283E',
              }}
              // date="2002 - 2006"
              iconStyle={{background: 'rgb(233, 30, 99)', color: '#fff'}}
              // icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                Bachelor of Science in Interactive Digital Media Visual Imaging
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Bachelor Degree
              </h5>
              <p>
                Creative Direction, Visual Design
              </p>
            </VerticalTimelineElement> */}
            {/* <VerticalTimelineElement
              iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
              // icon={<StarIcon />}
            /> */}
          </VerticalTimeline>
          {/*  */}

          {/* Departments*/}
          {/* <div className="department-box col-12 m-0 p-0 justify-content-center align-items-center">
            <h1 className="mt-5">Departments that need you</h1>
            <div className="deps row justify-content-center align-items-center text-center">
              <div className=" dep tech col-3 m-3">
                <div></div>
              </div>
              <div className="dep non-tech col-3 m-3">non-tech</div>
            </div>
          </div> */}

          {/* FAQ */}
          <div className="faq-box col-12 m-0 p-0 justify-content-center align-items-center">
            <h1 className="mt-5">
              Got Any Questions?
            </h1>
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
                  Do I keed prior skills and knowledge to apply for ACM's recruitments?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  Not at all! Everyone is welcome to apply in any domain. All you need is a thirst for knowledge and a drive to grow and develop!
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
                  Yes, the recruitments are for te students who had just turned sophomores
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
                  Is there any other method of recruitment other than those mentioned above?
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body text-start">
                  There are two ways to reach th Personal Interview round to get selected :
                  <br />
                  1. Via the Quiz
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
                  <strong>Non-Tech: </strong>
                  {' '}
                  Graphic Designing, UI/UX Designing, Video Editting, Marketing
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
                  To know about us go on our official website and check out our social media handles foe sure :)
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