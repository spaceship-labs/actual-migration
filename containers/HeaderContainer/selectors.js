import { createSelector } from 'reselect';


const containerSelector = (state) => state.containers.HeaderContainer;
const propsSelector = createSelector(
  [containerSelector],
  (containerState) => ({ loading: containerState.get('loading') }),
);

export { propsSelector };
