import {Fragment} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';
import RecruitmentForm from './Components/Form/Form';

function App () {
  return (
    <Fragment>
      <Navbar />
      <Content />
      {/* <RecruitmentForm /> */}
      <Footer />
    </Fragment>
  );
}

export default App;
