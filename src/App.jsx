import Quiz from "./components/Quiz";
import "./App.css";
import logo from "./assets/images/quizlogo.png";
const App = () => {
  return (
    <div className="app">
      <img className="logo" src={logo} alt="logo" />
      <Quiz />
      <p className="footer">Made with ❤️ by Abhishek Gurjar</p>
    </div>
  );
};

export default App;
