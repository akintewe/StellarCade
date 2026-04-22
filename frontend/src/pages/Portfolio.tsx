import React from 'react';
import { EmptyStateBlock } from '../components/v1/EmptyStateBlock';
import { StatusPill } from '../components/v1/StatusPill';
import './Portfolio.css';

type SectionStatus = 'loading' | 'error' | 'ready';

export interface WalletPortfolioData {
  availableBalance: number;
  networkLabel: string;
}

export interface RewardPortfolioItem {
  id: string;
  title: string;
  amountLabel: string;
}

export interface CollectiblePortfolioItem {
  id: string;
  name: string;
  rarity: string;
}

export interface PortfolioSectionState<T> {
  status: SectionStatus;
  items: T[];
  errorMessage?: string;
}

export interface PortfolioState {
  wallet: PortfolioSectionState<WalletPortfolioData>;
  rewards: PortfolioSectionState<RewardPortfolioItem>;
  collectibles: PortfolioSectionState<CollectiblePortfolioItem>;
}

export interface PortfolioProps {
  state?: PortfolioState;
  onOpenWallet?: () => void;
  onBrowseRewards?: () => void;
  onBrowseCollectibles?: () => void;
}

const DEFAULT_PORTFOLIO_STATE: PortfolioState = {
  wallet: {
    status: 'ready',
    items: [{ availableBalance: 0, networkLabel: 'Testnet wallet' }],
  },
  rewards: {
    status: 'ready',
    items: [],
  },
  collectibles: {
    status: 'ready',
    items: [],
  },
};

function SectionFrame({
  title,
  eyebrow,
  children,
}: {
  title: string;
  eyebrow: string;
  children: React.ReactNode;
}) {
  const sectionId = `section-${title.toLowerCase().replace(/\s+/g, '-')}`;
  return (
    <section className="portfolio-page__section" aria-labelledby={sectionId}>
      <div className="portfolio-page__section-header">
        <p className="portfolio-page__eyebrow">{eyebrow}</p>
        <h2 id={sectionId} className="portfolio-page__section-title">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function SectionLoading({ testId, label }: { testId: string; label: string }) {
  return (
    <div className="portfolio-page__section-state" role="status" data-testid={testId}>
      <StatusPill tone="pending" label="Loading" size="compact" />
      <p>{label}</p>
    </div>
  );
}

function SectionError({
  testId,
  message,
}: {
  testId: string;
  message: string;
}) {
  return (
    <div className="portfolio-page__section-state portfolio-page__section-state--error" role="alert" data-testid={testId}>
      <StatusPill tone="error" label="Unavailable" size="compact" />
      <p>{message}</p>
    </div>
  );
}

export const Portfolio: React.FC<PortfolioProps> = ({
  state = DEFAULT_PORTFOLIO_STATE,
  onOpenWallet,
  onBrowseRewards,
  onBrowseCollectibles,
}) => {
  const walletSnapshot = state.wallet.items[0] ?? { availableBalance: 0, networkLabel: 'Wallet' };
  const walletIsEmpty = walletSnapshot.availableBalance <= 0;

  return (
    <div className="portfolio-page" data-testid="portfolio-page">
      <header className="portfolio-page__hero">
        <div>
          <p className="portfolio-page__eyebrow">Portfolio</p>
          <h1 className="portfolio-page__title">Assets, rewards, and collectibles</h1>
          <p className="portfolio-page__subtitle">
            Clear first-run states help new players understand what to do next without confusing empty data for a broken page.
          </p>
        </div>
        <StatusPill tone="neutral" label="Portfolio beta" />
      </header>

      <div className="portfolio-page__grid">
        <SectionFrame title="Wallet" eyebrow="Balance">
          {state.wallet.status === 'loading' ? (
            <SectionLoading
              testId="portfolio-wallet-loading"
              label="Checking your wallet balance and network snapshot."
            />
          ) : state.wallet.status === 'error' ? (
            <SectionError
              testId="portfolio-wallet-error"
              message={state.wallet.errorMessage ?? 'Wallet balance could not be loaded.'}
            />
          ) : walletIsEmpty ? (
            <EmptyStateBlock
              testId="portfolio-wallet-empty"
              icon="W"
              title="Your wallet balance is still at zero"
              description="Fund your wallet to join paid matches, claim drops, and unlock balance-aware actions."
              actions={[
                {
                  label: 'Open wallet tools',
                  onClick: onOpenWallet ?? (() => {}),
                  variant: 'primary',
                },
              ]}
            />
          ) : (
            <div className="portfolio-page__content-card" data-testid="portfolio-wallet-populated">
              <div className="portfolio-page__content-header">
                <StatusPill tone="success" label="Funded" size="compact" />
                <span>{walletSnapshot.networkLabel}</span>
              </div>
              <strong className="portfolio-page__metric">{walletSnapshot.availableBalance.toFixed(2)} XLM</strong>
              <p className="portfolio-page__copy">Available now for deposits, game entries, and marketplace settlement flows.</p>
            </div>
          )}
        </SectionFrame>

        <SectionFrame title="Rewards" eyebrow="History">
          {state.rewards.status === 'loading' ? (
            <SectionLoading
              testId="portfolio-rewards-loading"
              label="Gathering emissions, quests, and payout history."
            />
          ) : state.rewards.status === 'error' ? (
            <SectionError
              testId="portfolio-rewards-error"
              message={state.rewards.errorMessage ?? 'Rewards history could not be loaded.'}
            />
          ) : state.rewards.items.length === 0 ? (
            <EmptyStateBlock
              testId="portfolio-rewards-empty"
              icon="R"
              title="No rewards history yet"
              description="Play a match, finish a quest, or complete onboarding to start building your rewards trail."
              actions={[
                {
                  label: 'Browse reward paths',
                  onClick: onBrowseRewards ?? (() => {}),
                  variant: 'primary',
                },
              ]}
            />
          ) : (
            <ul className="portfolio-page__list" data-testid="portfolio-rewards-populated">
              {state.rewards.items.map((reward) => (
                <li key={reward.id} className="portfolio-page__list-item">
                  <div>
                    <strong>{reward.title}</strong>
                    <p>{reward.amountLabel}</p>
                  </div>
                  <StatusPill tone="success" label="Earned" size="compact" />
                </li>
              ))}
            </ul>
          )}
        </SectionFrame>

        <SectionFrame title="Collectibles" eyebrow="Owned">
          {state.collectibles.status === 'loading' ? (
            <SectionLoading
              testId="portfolio-collectibles-loading"
              label="Checking what collectibles your account currently owns."
            />
          ) : state.collectibles.status === 'error' ? (
            <SectionError
              testId="portfolio-collectibles-error"
              message={state.collectibles.errorMessage ?? 'Collectibles could not be loaded.'}
            />
          ) : state.collectibles.items.length === 0 ? (
            <EmptyStateBlock
              testId="portfolio-collectibles-empty"
              icon="C"
              title="No collectibles owned yet"
              description="Collectibles from events and drops will appear here once you mint, earn, or purchase them."
              actions={[
                {
                  label: 'Browse collectibles',
                  onClick: onBrowseCollectibles ?? (() => {}),
                  variant: 'primary',
                },
              ]}
            />
          ) : (
            <ul className="portfolio-page__list" data-testid="portfolio-collectibles-populated">
              {state.collectibles.items.map((collectible) => (
                <li key={collectible.id} className="portfolio-page__list-item">
                  <div>
                    <strong>{collectible.name}</strong>
                    <p>{collectible.rarity}</p>
                  </div>
                  <StatusPill tone="warning" label={collectible.rarity} size="compact" />
                </li>
              ))}
            </ul>
          )}
        </SectionFrame>
      </div>
    </div>
  );
};

export default Portfolio;
