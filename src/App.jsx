import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Stuff from './Stuff.jsx';
import MyDemo from './MyDemo.jsx';
import Clock from './Clock.jsx';

function App(){
  return(
    <>
      <Header/>
      <Clock/>
      <MyDemo/>
      <Stuff name = "Bob Smith" title = "Assistant to Regional Manager"/>
      <Stuff name = "Sue Jones" title= "CFO"/>
      <Stuff name = "Regina George" title = "Mean Girl"/>
      <Stuff/>
      <Footer/>
    </>
  );
}
export default App