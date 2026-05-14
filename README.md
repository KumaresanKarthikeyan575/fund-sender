# TSender — ERC20 Airdrop Tool

A decentralized ERC20 token airdrop application that allows users to send tokens to multiple wallet addresses in a single transaction.

## About The Project

TSender is a decentralized ERC20 bulk token transfer application designed to simplify token distribution on EVM-compatible blockchains.

Users can:
- Connect MetaMask wallet
- Select blockchain networks
- Input multiple recipient addresses
- Send ERC20 tokens in one transaction
- Reduce gas fees compared to individual transfers

The application supports multiple networks including Ethereum, Arbitrum, Optimism, Base, zkSync Era, Sepolia, and Localhost.

## Features

- Multi-recipient ERC20 token transfers
- Wallet connection using MetaMask
- Multi-chain support
- Live transaction summary
- Token allowance checking
- Automatic approval flow
- Transaction status tracking
- Responsive modern UI
- Gas-efficient bulk transfers

## UI Screenshots

### Home Page

![Home](https://github.com/KumaresanKarthikeyan575/fund-sender/blob/ea2dd102d49f4997b54c95a0efd2eb925562ba6d/Screenshot%202026-05-15%20003943.png)

### Wallet Connected

![Wallet Connected](https://github.com/KumaresanKarthikeyan575/fund-sender/blob/ea2dd102d49f4997b54c95a0efd2eb925562ba6d/Screenshot%202026-05-15%20004041.png)

### Airdrop Panel

![Airdrop](https://github.com/KumaresanKarthikeyan575/fund-sender/blob/ea2dd102d49f4997b54c95a0efd2eb925562ba6d/Screenshot%202026-05-15%20004339.png)

### Transaction Success

![Success](https://github.com/KumaresanKarthikeyan575/fund-sender/blob/ea2dd102d49f4997b54c95a0efd2eb925562ba6d/Screenshot%202026-05-15%20004441.png)

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript

### Blockchain
- Solidity
- ERC20 Standard
- MetaMask

### Networks
- Ethereum
- Arbitrum
- Optimism
- Base
- zkSync Era
- Sepolia

## Smart Contract Flow

1. User connects wallet
2. User selects network
3. User enters token address
4. User enters recipients and amounts
5. Contract checks token allowance
6. ERC20 approval transaction is executed if needed
7. `airdropERC20()` is called
8. Tokens are distributed to all recipients

## Supported Networks

| Network | Status |
|----------|--------|
| Ethereum | ✅ |
| Arbitrum | ✅ |
| Optimism | ✅ |
| Base | ✅ |
| zkSync Era | ✅ |
| Sepolia | ✅ |
| Localhost | ✅ |

## Installation

Clone the repository:

```bash
https://github.com/KumaresanKarthikeyan575/fund-sender.git
cd fund-sender
open page.tsx
```

# Folder Structure

```md
## Folder Structure
```

```bash
TSender/
│
├── .cache_sypress
├── app/
├── public/
├── test/
└── Readme.md
```

---

# Future Improvements

```md
## Future Improvements
```
- CSV upload support
- Real blockchain integration
- Gas estimation
- WalletConnect support
- Transaction history
- Backend analytics dashboard

## Author

Kumaresan Karthikeyan

- Blockchain Developer
- Java Full Stack Developer
- Smart Contract Enthusiast
