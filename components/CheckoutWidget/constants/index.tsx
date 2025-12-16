import { LucideAArrowDown } from "lucide-react";
import Image from "next/image";

export enum PAYMENT_METHODS_ENUM {
  CRYPTO_TO_CASH = "crypto-to-cash",
  CASH_TO_CRYPTO = "cash-to-crypto",
  CRYPTO_TO_FLAT = "crypto-to-flat",
}
export const PAYMENT_METHOD_OPTIONS = [
  {
    id: PAYMENT_METHODS_ENUM.CRYPTO_TO_CASH,
    title: "Crypto to cash",
  },
  {
    id: PAYMENT_METHODS_ENUM.CASH_TO_CRYPTO,
    title: "Cash to crypto",
  },
  {
    id: PAYMENT_METHODS_ENUM.CRYPTO_TO_FLAT,
    title: "Crypto to flat load",
  },
];

export enum CRYPTO_CURRENCIES_ENUM {
  USDT_CELO = "usdt-celo",
  USDT_TON = "usdt-ton",
  USDT_BNB = "usdt-bnb",
}
export const CRYPTO_CURRENCY_OPTIONS = [
  {
    id: CRYPTO_CURRENCIES_ENUM.USDT_CELO,
    title: "USDT - CELO",
    icon: (
      <Image
        src="/celo.png"
        width={20}
        height={20}
        alt="celo"
        className="rounded-full"
      />
    ),
  },
  {
    id: CRYPTO_CURRENCIES_ENUM.USDT_TON,
    title: "USDT - TON",
    icon: (
      <Image
        src="/ton.png"
        width={20}
        height={20}
        alt="ton"
        className="rounded-full"
      />
    ),
  },
  {
    id: CRYPTO_CURRENCIES_ENUM.USDT_BNB,
    title: "USDT - BNB",
    icon: (
      <Image
        src="/bnb.png"
        width={20}
        height={20}
        alt="bnb"
        className="rounded-full"
      />
    ),
  },
];

export enum CRYPTO_ACCOUNT_ENUM {
  METAMASK = "metamask",
  RAINBOW = "rainbow",
  WALLET_CONNECT = "wallet-connect",
  OTHERS = "others",
}
export const CRYPTO_ACCOUNT_OPTIONS = [
  {
    id: CRYPTO_ACCOUNT_ENUM.METAMASK,
    title: "Metamask",
    icon: (
      <Image
        src="/metamask.png"
        width={20}
        height={20}
        alt="metamask"
        className="rounded-full"
      />
    ),
  },
  {
    id: CRYPTO_ACCOUNT_ENUM.RAINBOW,
    title: "Rainbow",
    icon: (
      <Image
        src="/rainbow.png"
        width={20}
        height={20}
        alt="rainbow"
        className="rounded-full"
      />
    ),
  },
  {
    id: CRYPTO_ACCOUNT_ENUM.WALLET_CONNECT,
    title: "Wallet Connect",
    icon: (
      <Image
        src="/walletconnect.png"
        width={20}
        height={20}
        alt="wallet-connect"
        className="rounded-full"
      />
    ),
  },
  {
    id: CRYPTO_ACCOUNT_ENUM.OTHERS,
    title: "Other Crypto Wallets (Binance, Conibase, Bybit etc)",
    icon: (
      <Image
        src="/wallet.png"
        width={20}
        height={20}
        alt="wallet"
        className="rounded-full"
      />
    ),
  },
];

export enum CASH_CURRENCIES_ENUM {
  NGN = "ngn",
}
export const CASH_CURRENCY_OPTIONS = [
  {
    id: CASH_CURRENCIES_ENUM.NGN,
    title: "NGN",
    icon: (
      <Image
        src="/ngn.png"
        width={20}
        height={20}
        alt="ngn"
        className="rounded-full"
      />
    ),
  },
];

export enum CASH_ACCOUNT_ENUM {
  OPAY = "opay",
  PALMPAY = "palmpay",
  FIRST_BANK = "first-bank",
  UNION_BANK = "union-bank",
  UBA = "uba",
}
export const CASH_ACCOUNT_OPTIONS = [
  {
    id: CASH_ACCOUNT_ENUM.OPAY,
    title: "Opay",
  },
  {
    id: CASH_ACCOUNT_ENUM.PALMPAY,
    title: "PalmPay",
  },
  {
    id: CASH_ACCOUNT_ENUM.FIRST_BANK,
    title: "First Bank",
  },
  {
    id: CASH_ACCOUNT_ENUM.UNION_BANK,
    title: "Union Bank",
  },
  {
    id: CASH_ACCOUNT_ENUM.UBA,
    title: "UBA",
  },
];

export enum PAYMENT_STEPS_ENUM {
  PAYMENT_STEP = "payment-step",
  PAYMENT_DETAILS_ONE = "payment-details-one",
  PAYMENT_DETAILS_TWO = "payment-details-two",
  PAYMENT_REVIEW = "payment-review",
  PAYMENT_SUCCESS = "payment-success",
}

export const PAYMENT_STEPS = [
  {
    id: PAYMENT_STEPS_ENUM.PAYMENT_STEP,
    title: "Payment",
  },
  {
    id: PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_ONE,
    title: "Recipient Details",
  },
  {
    id: PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_TWO,
    title: "Recipient Details",
  },
  {
    id: PAYMENT_STEPS_ENUM.PAYMENT_REVIEW,
    title: "Send [asset] to the address below",
  },
  {
    id: PAYMENT_STEPS_ENUM.PAYMENT_SUCCESS,
    title: "Payment Successful",
  },
];
