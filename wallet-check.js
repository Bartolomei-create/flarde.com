
window.addEventListener('DOMContentLoaded', async () => {
  if (typeof window.ethereum !== 'undefined') {
    try {
      const accounts = await window.ethereum.request({ method: 'eth_accounts' });
      if (accounts.length > 0) {
        document.getElementById('wallet-status').textContent = '🟢';
      }
    } catch (err) {
      console.error('Wallet check failed:', err);
    }
  }
});
