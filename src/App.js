import {Fragment} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
// import RecruitmentForm from './Components/RecruitmentForm/RecruitmentForm';
import {Routes, Route} from 'react-router-dom';
import './App.css';
function App () {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Content />} />
        {/* <Route path="/form" element={<RecruitmentForm />} /> */}
      </Routes>
      {/* <Content /> */}
      {/* <RecruitmentForm /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
