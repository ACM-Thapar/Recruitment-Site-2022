import {Fragment} from 'react';
import Navbar from './Components/Navbar/Navbar';
import Content from './Components/Content/Content';
import Footer from './Components/Footer/Footer';

function App () {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  );
}

export default App;
