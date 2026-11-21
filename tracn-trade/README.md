# Trac’n Trade Alpha — Sneaker Closet + Commerce Intelligence

A distinct Next.js application under `tracn-trade/`, isolated on branch `feat/tracn-trade-alpha-20261121` in the TracSheet site repository. Set a hosting project's **Root Directory** to `tracn-trade`.

## Run locally

```bash
cd tracn-trade
npm install
npm run dev
```

## What this first build contains

- Mobile-responsive Trac’n Trade storefront in black/chrome/gold
- Marketplace search, category tabs, wishlisting, concept product detail cards
- **My Top Shelf** digital sneaker closet: item collection, ratings and privacy toggle
- Closet-driven color insights and complimentary merchandise suggestions
- **SBI Studio** concept generation demo for a True Warriors-inspired apparel merchant (no real AI or third-party brand partnership claimed)
- **Rare Find Requests** inquiry-only pre-order demand discovery
- Lime-green, gold-trimmed, yellow-number sale tags per product spec
- Transparent **DEMO MODE**: no accounts, bank link, TracSheet API, payments, saved persistence, real inventory or affiliate tracking. App state resets on reload.

## Delivery principles and planned backend

1. **TracSheet ID** remains canonical identity and reputation authority; Trac’n Trade is the marketplace/UI.
2. **Interest Bank** is user-controlled. Consent scopes for collection sharing, suggestions, location, and receipt/account connections must be separate and revocable.
3. **Purchases** may arrive by verified Trac’n Trade receipt, receipt import, or explicitly authorized financial-data providers. Never store bank passwords or assume financial transaction merchant data validates a specific product.
4. **Listings** separate verified in-stock, supported pre-orders, and non-binding sourcing requests. Add escrow/payment infrastructure only after fulfillment, refund and consumer-protection procedures exist.
5. **Promotions** disclose sponsorship/affiliate connections clearly; product photography requires suitable rights and brand references must not mislead about affiliation.
6. **NFT/virtual closet** is future opt-in extension, not a launch dependency.

## Later integrations

- Authenticated users, roles and seller admin
- TracSheet ID verification + verified interaction receipts
- Database, inventory and media uploads
- Search indexing, event-driven recommendation engine and regional relevance
- Secure, consented transaction feed, orders and refunds
- Affiliate partners' approved feeds and compliant disclosure components
- Seller moderation, counterfeit disputes, returns and support
- Privacy export/delete, audit history, backups and anti-fraud

This alpha is for product review, not public commercial transactions.
