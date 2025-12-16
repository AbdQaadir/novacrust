import { CRYPTO_CURRENCIES_ENUM } from "@/components/CheckoutWidget/constants";

export const convertCryptoToFiat = (
  currency: CRYPTO_CURRENCIES_ENUM,
  amount: number
): number => {
  // 1 CELO is worth approximately ₦202.72 to ₦206.48.
  // 1 TON is worth approximately ₦2,272.55 to ₦2,358.52.
  // 1 BNB is worth approximately ₦1,256,539 to ₦1,287,880.

  switch (currency) {
    case CRYPTO_CURRENCIES_ENUM.USDT_CELO:
      return amount * 202.72;
    case CRYPTO_CURRENCIES_ENUM.USDT_TON:
      return amount * 2272.55;
    case CRYPTO_CURRENCIES_ENUM.USDT_BNB:
      return amount * 1256539;
    default:
      return 0;
  }
};
