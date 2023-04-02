import { render, screen } from '@testing-library/react';
import StatsInfo  from './';

describe('StatsInfo', () => {
  it('renders', () => {
    render(<StatsInfo forkCount={200} watcherCount={100} starCount={300}/>);
    expect(screen.getByText('300')).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
  });
  it('renders 0', async() => {
    render(<StatsInfo />);
    expect(await screen.findAllByText('0')).toHaveLength(3)
  });
});