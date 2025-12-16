"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  CASH_ACCOUNT_ENUM,
  CASH_CURRENCIES_ENUM,
  CRYPTO_ACCOUNT_ENUM,
  CRYPTO_CURRENCIES_ENUM,
  PAYMENT_METHOD_OPTIONS,
  PAYMENT_METHODS_ENUM,
  PAYMENT_STEPS,
  PAYMENT_STEPS_ENUM,
} from "./constants";
import ComingSoon from "./components/ComingSoon";
import CryptoToCash from "./features/CryptoToCash/CryptoToCash";

import { FormProvider, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft } from "lucide-react";
import MethodSwitcher from "./components/MethodSwitcher";

const schema = z
  .object({
    step: z.enum(PAYMENT_STEPS_ENUM),
    paymentMethod: z.enum(PAYMENT_METHODS_ENUM),
    payAmount: z.number(),
    receiveAmount: z.number(),
    payFrom: z.enum(CRYPTO_ACCOUNT_ENUM),
    payFromCurrency: z.enum(CRYPTO_CURRENCIES_ENUM),
    payTo: z.enum(CASH_ACCOUNT_ENUM),
    payToCurrency: z.enum(CASH_CURRENCIES_ENUM),
    recipientBank: z.enum(CASH_ACCOUNT_ENUM),
    recipientAccountNumber: z.string().min(10),
    recipientAccountName: z.string(),
    recipientEmail: z.email("Invalid Email"),
    recipientPhone: z.string(),
  })
  .required();

export type CheckoutWidgetFormValue = z.infer<typeof schema>;

const DEFAULT_VALUES = {
  step: PAYMENT_STEPS[0].id,
  paymentMethod: PAYMENT_METHOD_OPTIONS[0].id,
  payAmount: 0,
  receiveAmount: 0,
  payFromCurrency: CRYPTO_CURRENCIES_ENUM.USDT_CELO,
  payFrom: CRYPTO_ACCOUNT_ENUM.METAMASK,
  payTo: CASH_ACCOUNT_ENUM.FIRST_BANK,
  payToCurrency: CASH_CURRENCIES_ENUM.NGN,
  recipientBank: CASH_ACCOUNT_ENUM.FIRST_BANK,
  recipientAccountNumber: "",
  recipientAccountName: "Test name",
  recipientEmail: "",
  recipientPhone: "",
};

function CheckoutWidget(): React.JSX.Element {
  const formBag = useForm<CheckoutWidgetFormValue>({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const { watch, setValue, reset } = formBag;
  const paymentMethod = watch("paymentMethod");

  const handleChangeMethod = (id: PAYMENT_METHODS_ENUM) => {
    if (id === watch("paymentMethod")) return;

    reset();
    setValue("paymentMethod", id);
  };

  const currStepDetails = PAYMENT_STEPS.find(
    (_step) => _step.id === watch("step")
  );

  const onGoBack = () => {
    const lastStepIndex = PAYMENT_STEPS.findIndex(
      (_step) => _step.id === watch("step")
    );
    if (lastStepIndex === -1) return;
    setValue("step", PAYMENT_STEPS[lastStepIndex - 1].id);
  };

  return (
    <FormProvider {...formBag}>
      <Card className="w-[95vw] max-w-160 h-full min-h-160 mx-auto rounded-[30px] shadow-none flex flex-col px-4 sm:px-8 md:px-14 pt-8 pb-12 border border-primary-foreground">
        <div className="w-full flex flex-row justify-center px-0">
          {watch("step") === PAYMENT_STEPS[0].id ? (
            <MethodSwitcher
              activeMethod={paymentMethod}
              onMethodChange={handleChangeMethod}
            />
          ) : (
            <div className="w-full flex flex-row items-center">
              <Button onClick={onGoBack} variant="ghost">
                <ArrowLeft />
              </Button>

              <h2 className="flex-1 text-center -ml-4 font-medium text-xl">
                {currStepDetails?.title}
              </h2>
            </div>
          )}
        </div>

        <CardContent className="flex-1 w-full h-full flex flex-col p-0">
          {paymentMethod === PAYMENT_METHODS_ENUM.CRYPTO_TO_CASH && (
            <CryptoToCash />
          )}

          {paymentMethod === PAYMENT_METHODS_ENUM.CASH_TO_CRYPTO && (
            <ComingSoon placeholderText="Cash to Crypto" />
          )}

          {paymentMethod === PAYMENT_METHODS_ENUM.CRYPTO_TO_FLAT && (
            <ComingSoon placeholderText="Crypto to Flat" />
          )}
        </CardContent>
      </Card>
    </FormProvider>
  );
}

export default CheckoutWidget;
