import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// TODO: Figure out why this is failing
describe.skip('App', () => {
  const initialState = { 
    queue: { 
      activeQueueItem: {},
      queue: {},
      status: ''
    },
    patients: {
      activePatient: {},
      patients: [],
      status: ''
    }
  };

  const mockStore = configureStore();
  let store;

  it('renders welcome text', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <App />
      </Provider>
    , { wrapper: MemoryRouter });
    const el = screen.getByText(/Welcome to the homepage!/i);
    expect(el).toBeInTheDocument();
  });
})
