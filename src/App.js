import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/joseane-ivelise-grigolo-863a1a35/"
            target="_blank"
            rel="noreferrer"
          >
            Joseane Grigolo{" "}
          </a>
          and is open-sourced on{" "}
          <a
            href="https://github.com/JoseaneGrigolo/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
