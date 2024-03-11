import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/components/NotFound";
import {Layout} from "./components/Layout";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>

                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;