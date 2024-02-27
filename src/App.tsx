
import {Route, Routes} from "react-router-dom";
import PhotoHeader from "./components/PhotoHeader";
import NotFound from "./pages/components/NotFound";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<PhotoHeader />} />
          <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
