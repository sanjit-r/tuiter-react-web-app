import Labs from "./Labs";
import HelloWorld from "./Labs/a6/hello-world.js";
import Tuiter from "./tuiter";
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";

function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Routes>
                  <Route path="/*" element={<Labs/>}/>
                  <Route path="/hello"
                         element={<HelloWorld/>}/>
                  <Route path="/tuiter/*"
                         element={<Tuiter/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}
export default App;