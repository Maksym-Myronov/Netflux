import { Route, Routes } from 'react-router-dom';
import { NotFound } from './pages/components/NotFound';
import { Layout } from './components/Layout';
import { Main } from './components/Main';
import { Sitcom } from './pages/components/Sitcom';
import { Watchlist } from './pages/components/Watchlist';
import { TopRated } from './pages/components/TopRated';
import { WatchMovie } from './pages/components/WatchMovie';
import { Results } from './pages/components/Results';
import { SeeAllGenres } from './pages/components/SeeAllGenres';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route index element={<Main />} />
				<Route path="sitcom" element={<Sitcom />} />
				<Route path="watchlist" element={<Watchlist />} />
				<Route path="toprated" element={<TopRated />} />
				<Route path="watchTrailer" element={<WatchMovie />} />
				<Route path="allRedults" element={<Results />} />
				<Route path="allGenres" element={<SeeAllGenres />} />
			</Route>
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

export default App;
