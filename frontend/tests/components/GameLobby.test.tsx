import { render, screen, waitFor } from '@testing-library/react';
import { expect, test, vi, describe, it } from 'vitest';
import GameLobby from '../../src/pages/GameLobby';
import { ApiClient } from '../../src/services/typed-api-sdk';

vi.mock('../../src/services/typed-api-sdk');

test('renders GameLobby and fetches games', async () => {
  const mockGames = [
    { id: '123456789', name: 'Elite Clash', status: 'active', wager: 50 }
  ];
  
  (ApiClient as any).prototype.getGames.mockResolvedValue({
    success: true,
    data: mockGames
  });

  render(<GameLobby />);
  
  expect(screen.getByText(/Loading elite games.../i)).toBeDefined();
  
  await waitFor(() => {
    expect(screen.getByText(/Elite Clash/i)).toBeDefined();
    expect(screen.getByText(/50 XLM/i)).toBeDefined();
    expect(screen.getByText(/#12345678/i)).toBeDefined();
  });
});

describe('GameLobby two-column layout', () => {
  it('renders the lobby-dashboard container', async () => {
    (ApiClient as any).prototype.getGames.mockResolvedValue({
      success: true,
      data: [],
    });

    const { container } = render(<GameLobby />);

    await waitFor(() => {
      expect(container.querySelector('.lobby-dashboard')).toBeTruthy();
    });
  });

  it('renders two dashboard columns', async () => {
    (ApiClient as any).prototype.getGames.mockResolvedValue({
      success: true,
      data: [],
    });

    const { container } = render(<GameLobby />);

    await waitFor(() => {
      const cols = container.querySelectorAll('.lobby-dashboard__col');
      expect(cols.length).toBe(2);
    });
  });

  it('renders the games grid when games are present', async () => {
    (ApiClient as any).prototype.getGames.mockResolvedValue({
      success: true,
      data: [{ id: 'abc123', name: 'Test Game', status: 'active', wager: 10 }],
    });

    const { container } = render(<GameLobby />);

    await waitFor(() => {
      expect(container.querySelector('.games-grid')).toBeTruthy();
    });
  });

  it('renders empty state when no games', async () => {
    (ApiClient as any).prototype.getGames.mockResolvedValue({
      success: true,
      data: [],
    });

    render(<GameLobby />);

    await waitFor(() => {
      expect(screen.getByText(/No games active/i)).toBeDefined();
    });
  });
});
