import React from "react";
import { AmountInput } from "../../../components/AmountInput";
import {
  CASH_ACCOUNT_ENUM,
  CASH_ACCOUNT_OPTIONS,
  CASH_CURRENCIES_ENUM,
  CASH_CURRENCY_OPTIONS,
  CRYPTO_ACCOUNT_ENUM,
  CRYPTO_ACCOUNT_OPTIONS,
  CRYPTO_CURRENCIES_ENUM,
  CRYPTO_CURRENCY_OPTIONS,
} from "../../../constants";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { CheckoutWidgetFormValue } from "../../../CheckoutWidget";
import { convertCryptoToFiat } from "@/utils/convertCryptoToFiat";

function PaymentStep() {
  const formbag = useFormContext<CheckoutWidgetFormValue>();
  const { setValue, watch } = formbag;

  const handleRecieveConvert = (val: string) => {
    const selectedCurrency = watch("payFromCurrency");
    const convertedAmount = convertCryptoToFiat(selectedCurrency, Number(val));
    setValue("receiveAmount", convertedAmount);
  };
  return (
    <div className="flex flex-col w-full h-full gap-6">
      <AmountInput
        label="You pay"
        value={watch("payAmount").toString() || "0"}
        onChange={(val) => {
          setValue("payAmount", Number(val));
          handleRecieveConvert(val);
        }}
        currency={watch("payFromCurrency")}
        onCurrencyClick={(curr) => {
          setValue("payFromCurrency", curr as CRYPTO_CURRENCIES_ENUM);

          // Update recieve amount
          const val = watch("payAmount").toString() || "0";
          handleRecieveConvert(val);
        }}
        currencies={CRYPTO_CURRENCY_OPTIONS}
      />

      <AmountInput
        label="You receive"
        value={watch("receiveAmount").toString() || "0"}
        // onChange={(val) => setValue("receiveAmount", Number(val))}
        currency={watch("payToCurrency")}
        onCurrencyClick={(curr) =>
          setValue("payToCurrency", curr as CASH_CURRENCIES_ENUM)
        }
        readOnly
        currencies={CASH_CURRENCY_OPTIONS}
      />

      <div className="w-full flex flex-col gap-2">
        <Label
          htmlFor="from-account"
          className="text-sm font-outfit text-primary font-medium"
        >
          Pay from
        </Label>
        <Select
          value={watch("payFrom") || ""}
          onValueChange={(value: CRYPTO_ACCOUNT_ENUM) =>
            setValue("payFrom", value)
          }
        >
          <SelectTrigger
            className="w-full h-15 p-6 rounded-[30px] bg-background"
            id="from-account"
          >
            <SelectValue placeholder="" />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            {CRYPTO_ACCOUNT_OPTIONS?.map((account, index) => {
              return (
                <SelectItem
                  value={account.id}
                  key={`currency-option-${account.id}-${index}`}
                >
                  <span>{account.icon}</span>
                  {account.title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <div className="w-full flex flex-col gap-2">
        <Label
          htmlFor="to-account"
          className="text-sm font-outfit text-primary font-medium"
        >
          Pay to
        </Label>

        <Select
          value={watch("payTo") || ""}
          onValueChange={(value: CASH_ACCOUNT_ENUM) => setValue("payTo", value)}
        >
          <SelectTrigger
            className="w-full h-15 p-6 rounded-[30px] bg-background"
            id="from-account"
          >
            <SelectValue />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            {CASH_ACCOUNT_OPTIONS?.map((account, index) => {
              return (
                <SelectItem
                  value={account.id}
                  key={`currency-option-${account.id}-${index}`}
                >
                  {account.title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export default PaymentStep;
