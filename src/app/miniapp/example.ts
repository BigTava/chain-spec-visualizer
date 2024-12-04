export const EXAMPLE_PRMOP = `
o send a remark on the Westend network using a React component, you would typically interact with the Polkadot.js API. Below is a self-contained React component that demonstrates how to send a remark transaction on the Westend network. This example assumes you have a basic understanding of how to use Polkadot.js and have a wallet extension like Polkadot.js extension installed in your browser.

\`\`\`jsx
import React, { useState } from 'react';
import { ApiPromise, WsProvider } from '@polkadot/api';
import { web3Enable, web3Accounts, web3FromSource } from '@polkadot/extension-dapp';

const SendRemark = () => {
  const [status, setStatus] = useState('');
  const [remark, setRemark] = useState('');

  const sendRemarkTransaction = async () => {
    setStatus('Connecting to Westend...');

    // Connect to the Westend network
    const wsProvider = new WsProvider('wss://westend-rpc.polkadot.io');
    const api = await ApiPromise.create({ provider: wsProvider });

    // Enable the extension
    const extensions = await web3Enable('my cool dapp');
    if (extensions.length === 0) {
      setStatus('No extension found');
      return;
    }

    // Get accounts
    const allAccounts = await web3Accounts();
    if (allAccounts.length === 0) {
      setStatus('No accounts found');
      return;
    }

    // Use the first account for simplicity
    const account = allAccounts[0];
    const injector = await web3FromSource(account.meta.source);

    // Create a remark transaction
    const tx = api.tx.system.remark(remark);

    // Sign and send the transaction
    setStatus('Sending transaction...');
    tx.signAndSend(account.address, { signer: injector.signer }, ({ status }) => {
      if (status.isInBlock) {
        setStatus(\`Transaction included at blockHash \${status.asInBlock}\`);
      } else if (status.isFinalized) {
        setStatus(\`Transaction finalized at blockHash \${status.asFinalized}\`);
      }
    }).catch((error) => {
      setStatus(\`Transaction failed: \${error.message}\`);
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-xl font-bold">Send Remark on Westend</h1>
      <input
        type="text"
        className="w-full p-2 border border-gray-300 rounded"
        placeholder="Enter your remark"
        value={remark}
        onChange={(e) => setRemark(e.target.value)}
      />
      <button
        onClick={sendRemarkTransaction}
        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Send Remark
      </button>
      {status && <p className="text-gray-700">{status}</p>}
    </div>
  );
};

export default SendRemark;
\`\`\`

### Key Points:
- **Polkadot.js API**: This component uses the Polkadot.js API to interact with the Westend network.
- **Web3 Extension**: It requires the Polkadot.js browser extension to sign transactions.
- **State Management**: React's \`useState\` is used to manage the remark input and transaction status.
- **UI**: Tailwind CSS is used for styling the component.

### Prerequisites:
- Ensure you have the Polkadot.js extension installed in your browser.
- Make sure your account is funded with some Westend tokens to cover transaction fees.

This component is a basic example and can be expanded with additional features such 
`;
