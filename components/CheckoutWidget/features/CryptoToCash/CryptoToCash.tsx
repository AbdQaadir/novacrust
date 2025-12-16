import { Button } from "@/components/ui/button";

import PaymentStep from "./steps/PaymentStep";
import { CheckoutWidgetFormValue } from "../../CheckoutWidget";
import { useFormContext } from "react-hook-form";
import { PAYMENT_STEPS, PAYMENT_STEPS_ENUM } from "../../constants";
import RecipientDetailsOne from "./steps/RecipientDetailsOne";
import RecipientDetailsTwo from "./steps/RecipientDetailsTwo";
import { useMemo } from "react";

function CryptoToCash() {
  const formbag = useFormContext<CheckoutWidgetFormValue>();

  const { setValue, watch, getValues } = formbag;

  const step = watch("step");
  const currStepIndex = PAYMENT_STEPS.findIndex((_step) => _step.id === step);

  const onButtonClick = () => {
    if (currStepIndex === -1) return;

    if (currStepIndex === PAYMENT_STEPS.length - 1) return;

    // If is last step, then submit form
    setValue("step", PAYMENT_STEPS[currStepIndex + 1].id);
  };

  const buttonText = useMemo(() => {
    switch (step) {
      case PAYMENT_STEPS_ENUM.PAYMENT_STEP:
        return "Convert now";
      case PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_ONE:
      case PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_TWO:
        return "Next";

      default:
        return "Convert now";
    }
  }, [step]);

  const values = getValues();

  const isStepValid = useMemo(() => {
    switch (step) {
      case PAYMENT_STEPS_ENUM.PAYMENT_STEP:
        const hasSourceAmount = values.payAmount > 0;
        const hasTargetAmount = values.receiveAmount > 0;
        const hasPayFromAccount = !!values.payFrom;
        const hasPayToAccount = !!values.payTo;

        return (
          hasSourceAmount &&
          hasTargetAmount &&
          hasPayFromAccount &&
          hasPayToAccount
        );
      case PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_ONE:
        const hasRecipientBank = !!values.recipientBank;
        const hasRecipientAccountNumber = !!values.recipientAccountNumber;
        const hasRecipientAccountName = !!values.recipientAccountName;

        return (
          hasRecipientBank &&
          hasRecipientAccountNumber &&
          hasRecipientAccountName
        );

      case PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_TWO:
        const hasRecipientEmail = !!values.recipientEmail;
        const hasRecipientPhone = !!values.recipientPhone;
        return hasRecipientEmail && hasRecipientPhone;

      default:
        return false;
    }
  }, [step, values]);

  return (
    <div className="flex flex-1 flex-col w-full h-full gap-6">
      <div className="flex-1!">
        {step === PAYMENT_STEPS_ENUM.PAYMENT_STEP && <PaymentStep />}

        {step === PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_ONE && (
          <RecipientDetailsOne />
        )}

        {step === PAYMENT_STEPS_ENUM.PAYMENT_DETAILS_TWO && (
          <RecipientDetailsTwo />
        )}
      </div>
      <Button
        size="lg"
        className="font-instrument rounded-full h-11 md:h-15 text-sm md:text-md font-bold w-full"
        onClick={onButtonClick}
        type="button"
        disabled={!isStepValid}
      >
        {buttonText}
      </Button>
    </div>
  );
}

export default CryptoToCash;
