export const EXAMPLE_RESPONSE = `
To create a staking dApp on the Westend network, we need to build a React component that allows users to bond their tokens and select a reward destination. This involves connecting to the user's wallet, selecting an account, and interacting with the Polkadot.js API to perform the staking operation. Below is a complete JSX file for a simple staking dApp component:

\`\`\`jsx
import React, { useState, useEffect } from 'react';
import { web3Enable, web3Accounts, web3FromSource } from '@polkadot/extension-dapp';
import { ApiPromise, WsProvider } from '@polkadot/api';

const MiniApp = () => {
  const [api, setApi] = useState(null);
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState(null);
  const [bondValue, setBondValue] = useState('');
  const [rewardDestination, setRewardDestination] = useState('Staked');
  const [status, setStatus] = useState('');

  useEffect(() => {
    const init = async () => {
      const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
      const api = await ApiPromise.create({ provider: wsProvider });
      setApi(api);

      const extensions = await web3Enable('Staking DApp');
      if (extensions.length === 0) {
        setStatus('No extension found');
        return;
      }

      const allAccounts = await web3Accounts();
      setAccounts(allAccounts);
      if (allAccounts.length > 0) {
        setSelectedAccount(allAccounts[0].address);
      }
    };

    init();
  }, []);

  const handleBond = async () => {
    if (!api || !selectedAccount) return;

    const injector = await web3FromSource(accounts.find(acc => acc.address === selectedAccount).meta.source);

    api.tx.staking
      .bond(bondValue, rewardDestination)
      .signAndSend(selectedAccount, { signer: injector.signer }, ({ status }) => {
        if (status.isInBlock) {
          setStatus(\`Transaction included at blockHash \${status.asInBlock}\`);
        } else if (status.isFinalized) {
          setStatus(\`Transaction finalized at blockHash \${status.asFinalized}\`);
        }
      })
      .catch((error) => {
        setStatus(\`Transaction failed: \${error.message}\`);
      });
  };

  return (
    <main className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Westend Staking DApp</h1>
      <div>
        <label htmlFor="account" className="block text-sm font-medium text-gray-700">Select Account</label>
        <select
          id="account"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={selectedAccount}
          onChange={(e) => setSelectedAccount(e.target.value)}
        >
          {accounts.map(account => (
            <option key={account.address} value={account.address}>
              {account.meta.name || account.address}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="bondValue" className="block text-sm font-medium text-gray-700">Bond Value</label>
        <input
          type="number"
          id="bondValue"
          className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          value={bondValue}
          onChange={(e) => setBondValue(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rewardDestination" className="block text-sm font-medium text-gray-700">Reward Destination</label>
        <select
          id="rewardDestination"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          value={rewardDestination}
          onChange={(e) => setRewardDestination(e.target.value)}
        >
          <option value="Staked">Staked</option>
          <option value="Stash">Stash</option>
          <option value="Controller">Controller</option>
        </select>
      </div>
      <button
        onClick={handleBond}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Bond
      </button>
      {status && <p className="text-center text-sm text-gray-500">{status}</p>}
    </main>
  );
};

export default MiniApp;
\`\`\`

This component connects to the Westend network, allows users to select an account from their Polkadot.js extension, input a bond value, choose a reward destination, and submit a bond transaction. The status of the transaction is displayed to the user.
`;
