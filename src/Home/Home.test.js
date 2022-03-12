import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
const Data = require('../data/sample-queue.json')

describe('Home', () => {
  const initialState = { 
    patientQueue: { 
      activePatient: {}, 
      queue: Data 
    }
  };

  const mockStore = configureStore();
  let store;

  it('renders welcome text', () => {
    store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    , { wrapper: MemoryRouter });
    const el = screen.getByText(/Welcome to HealthyQ/i);
    expect(el).toBeInTheDocument();
  });
})
