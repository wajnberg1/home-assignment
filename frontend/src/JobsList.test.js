import React from 'react';
import { render, screen, waitFor, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-fetch-mock';
import JobsList from './JobsList';

beforeEach(() => {
  fetch.resetMocks();
});


test('JobsList component should render data after fetch', async () => {
  const mockData = [
  {
    "user": "Moshe",
    "group": "AMS",
    "submitted": "4/6/2024, 08:32 PM",
    "completed": "",
    "command": "python /home/user/train.py",
    "log": "loading model\ntraining...\nrunning validation tests...",
    "status": "pending"
  }];

  fetch.mockResponseOnce(JSON.stringify(mockData));
  render(<JobsList />);

  // Wait for the table to appear
  await waitFor(() => expect(screen.getByText('Moshe')).toBeInTheDocument());

  // Check if the data is rendered correctly
  expect(screen.getByText('pending')).toBeInTheDocument();
  expect(screen.getByText('4/6/2024, 08:32 PM')).toBeInTheDocument();
});

test('JobsList component should match snapshot after data is loaded', async () => {
  const mockData = [
  {
    "user": "Moshe",
    "group": "AMS",
    "submitted": "4/6/2024, 08:32 PM",
    "completed": "",
    "command": "python /home/user/train.py",
    "log": "loading model\ntraining...\nrunning validation tests...",
    "status": "pending"
  }];

  fetch.mockResponseOnce(JSON.stringify(mockData));
  const { asFragment } = render(<JobsList />);

  // Wait for the data to load
  await waitFor(() => expect(screen.getByText('Moshe')).toBeInTheDocument());

  // Take a snapshot
  expect(asFragment()).toMatchSnapshot();
});

test('User is able to select one job', async () => {
  const mockData = [
  {
    "user": "Moshe",
    "group": "AMS",
    "submitted": "4/6/2024, 08:32 PM",
    "completed": "",
    "command": "python /home/user/train.py",
    "log": "loading model\ntraining...\nrunning validation tests...",
    "status": "pending"
  }];

  fetch.mockResponseOnce(JSON.stringify(mockData));
  render(<JobsList />);

  // Wait for the table to appear
  await waitFor(() => expect(screen.getByText('Moshe')).toBeInTheDocument());

  // Check if the user is able to select the job: the radio button should be present
  expect(screen.getByRole('radio', { })).toBeInTheDocument();
});

test('User clicks the job and sees its details', async () => {
  const mockData = [
  {
    "user": "Moshe",
    "group": "AMS",
    "submitted": "4/6/2024, 08:32 PM",
    "completed": "",
    "command": "python /home/user/train.py",
    "log": "loading model\ntraining...\nrunning validation tests...",
    "status": "pending"
  }];

  fetch.mockResponseOnce(JSON.stringify(mockData));
  render(<JobsList />);

  // Wait for the table to appear
  await waitFor(() => expect(screen.getByText('Moshe')).toBeInTheDocument());

  // Check if the user is able to select the job: the radio button should be present
  const radio = screen.getByRole('radio', { });
  
  // Simulates the job selection
  fireEvent.click(radio);
  
  // Check if the job details are rendered correctly
  expect(screen.getByText('python /home/user/train.py')).toBeInTheDocument();
});

test('JobsList component should match snapshot after job details are loaded', async () => {
  const mockData = [
  {
    "user": "Moshe",
    "group": "AMS",
    "submitted": "4/6/2024, 08:32 PM",
    "completed": "",
    "command": "python /home/user/train.py",
    "log": "loading model\ntraining...\nrunning validation tests...",
    "status": "pending"
  }];

  fetch.mockResponseOnce(JSON.stringify(mockData));
  const { asFragment } = render(<JobsList />);

  // Wait for the table to appear
  await waitFor(() => expect(screen.getByText('Moshe')).toBeInTheDocument());

  // Check if the user is able to select the job: the radio button should be present
  const radio = screen.getByRole('radio', { });
  
  // Simulates the job selection
  fireEvent.click(radio);
  
  // Take a snapshot
  expect(asFragment()).toMatchSnapshot(); 
});