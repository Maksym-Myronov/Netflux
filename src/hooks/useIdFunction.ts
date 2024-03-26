import { fetchTrailer } from '../store/trailerSlice';
import { useAppDispatch } from './useStore';

export const useIdFunction = () => {
	const dispatch = useAppDispatch();
	const handleAddIdToFunction = (idNumber: number) => {
		dispatch(fetchTrailer(idNumber));
	};

	return [handleAddIdToFunction];
};
