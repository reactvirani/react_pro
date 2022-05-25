import logo from './logo.svg';
import './App.css';
import Header from './component/header/Header';
import Main from './conntainer/Home/Main';
import Footer from './component/footer/Footer';
import { Switch, Route} from 'react-router-dom';
import main from './conntainer/Home/Main';
import Department from './conntainer/department/Department';
import Doctors from './conntainer/doctors/Doctors';
import Contact from './conntainer/contact/Contact';
import About from './conntainer/About/About';
import Form from './conntainer/Form/Form';
import Apointment from './conntainer/appointment/apointment';



function App() {
  return (
    <>
    <Header />
    <Switch>
      <Route exact path={'/'} component={Main} />
      <Route exact path={'/Department'} component={Department} />
      <Route exact path={'/About'} component={About} />
      <Route exact path={'/Doctors'} component={Doctors} />
      <Route exact path={'/Contact'} component={Contact} />
      <Route exact path={'/Form'} component={Form} />
      <Route exact path={'/Apointment'} component={Apointment} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
