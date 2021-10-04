
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import About from './components/About/About';
import Courses from './components/Courses/Courses';
import CourseDetails from './components/CourseDetails/CourseDetails';
import Teachers from './components/Teachers/Teachers';


function App() {
  return (
    <div >
      < Router >
        <Header></Header>

        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route path='/home'>
            <Home></Home>
          </Route>

          <Route path='/about'>
            <About></About>
          </Route>

          <Route exact path='/courses'>
            <Courses></Courses>
          </Route>

          <Route path='/course/:courseId'>
            <CourseDetails></CourseDetails>
          </Route>

          <Route path='/teachers'>
            <Teachers></Teachers>
          </Route>

          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>

        <Footer></Footer>
      </ Router >
    </div >
  );
}

export default App;
