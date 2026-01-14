export const mockTransfer = async (amount) => {
  return {
    reference: `MOCK_TX_${Date.now()}`,
    status: "success",
    amount,
  };
};
