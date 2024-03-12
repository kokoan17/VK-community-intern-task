import { ThunkDispatch as LibThunkDispatch } from 'redux-thunk';
import { RootState } from '../redux/reducers';

export type ThunkAction<R = Promise<any>> = (
  dispatch: LibThunkDispatch<RootState, any, any>,
  getState: () => RootState,
) => R;