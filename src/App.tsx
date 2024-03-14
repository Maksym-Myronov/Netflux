import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/components/NotFound";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import {Sitcom} from "./pages/components/Sitcom";
import {Watchlist} from "./pages/components/Watchlist";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path="sitcom" element={<Sitcom />} />
                    <Route path="watchlist" element={<Watchlist />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;