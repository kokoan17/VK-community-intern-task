import { TypedUseSelectorHook, useSelector as useReduxSelector } from 'react-redux';
import { RootState } from '../../redux/reducers';

const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export default useSelector;