import "./index.css";
import Header from "./components/Header/Header";
import "./Bootstrap.scss";
import Footer from "./components/Footer/Footer";
import Test from "./components/JointJs/Test";
import Test2 from "./components/JointJs/Test2";
import "./App.css";
import JointJs from "./components/JointJs/JointJs";
import { Helmet } from "react-helmet";
import useScript from 'react-script-hook';


<link
  rel="stylesheet"
  type="text/css"
  href="https://resources.jointjs.com/demos/rappid/build/package/rappid.css"
/>;

function App() {
//   useScript({
//     src: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js',
//     onload: () => console.log('Script loaded!'),
// });
  return (
    <div className="App flex flex-col justify-between">
      <Header />
      {/* <JointJs /> */}
      <Test/>
      {/* <Test2/> */}
      <Footer/>

    {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.4.0/backbone-min.js"></script>
    <script src="https://resources.jointjs.com/demos/rappid/build/package/rappid.js"></script> */}
    </div>
  );
}

export default App;
