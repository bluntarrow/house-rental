import { AnimatePresence } from "framer-motion";
import { BrowserRouter } from "react-router-dom";

// pages
import AnimatedRoutes from './components/app/AnimatedRoutes'

import Toolbar from "./components/app/Toolbar";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        <div className="relative h-screen overflow-auto">
          <Toolbar />
          <AnimatedRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
