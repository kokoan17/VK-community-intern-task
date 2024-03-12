import { useDispatch as ReduxUseDispatch } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { RootState } from '../../redux/reducers';

export type ReduxDispatch = ThunkDispatch<RootState, any, Action>;
export default function (): ReduxDispatch {
  return ReduxUseDispatch<ReduxDispatch>();
}