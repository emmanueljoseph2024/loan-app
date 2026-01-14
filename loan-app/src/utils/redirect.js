export const redirectToVerifier = (verificationUrl) => {
  if (!verificationUrl) {
    throw new Error("Verification URL is missing");
  }

  // Redirect user to ID Norm verification page
  window.location.href = verificationUrl;
};
