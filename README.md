# Multi-Signature Vault

An expert-level, yet accessible implementation of a Multi-Sig wallet. This contract ensures that no single individual can move funds; instead, a predefined threshold of owners must confirm a transaction before it can be executed.

## Features
- **Configurable Threshold**: Set the required number of confirmations (e.g., 2-of-3, 3-of-5).
- **Transaction Queue**: Propose, view, and confirm transactions before execution.
- **Security First**: Prevents re-entrancy and ensures only authorized owners can interact with the vault.
- **Flat Architecture**: Simplified structure for immediate deployment and auditing.

## How to Use
1. Deploy the contract with an array of owner addresses and the required confirmation count.
2. Submit a transaction using `submitTransaction`.
3. Other owners call `confirmTransaction` using the `txIndex`.
4. Once the threshold is met, anyone can call `executeTransaction`.

## License
MIT
