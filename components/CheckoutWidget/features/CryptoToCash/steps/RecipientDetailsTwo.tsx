import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
import { CheckoutWidgetFormValue } from "../../../CheckoutWidget";
import { Input } from "@/components/ui/input";
import { PhoneInput } from "@/components/ui/phone-input";

function RecipientDetailsTwo() {
  const formbag = useFormContext<CheckoutWidgetFormValue>();
  const {
    setValue,
    watch,
    formState: { errors },
  } = formbag;

  return (
    <div className="flex flex-col w-full h-full gap-6">
      <div className="w-full flex flex-col gap-2">
        <Label
          htmlFor="recipientEmail"
          className="text-sm font-outfit text-primary font-medium"
        ></Label>
      </div>

      <Input
        id="recipientEmail"
        name="recipientEmail"
        type="email"
        placeholder="Enter recipient email"
        label="Recipient email"
        value={watch("recipientEmail")}
        onChange={(e) => {
          setValue("recipientEmail", e.target.value, {
            shouldValidate: true,
          });
        }}
        error={!!errors.recipientEmail?.message}
        errorText={errors.recipientEmail?.message}
      />

      <PhoneInput
        id="recipientPhone"
        name="recipientPhone"
        type="tel"
        placeholder="000 - 000 - 00000"
        label="Recipient phone number"
        value={watch("recipientPhone")}
        onChange={(value) => {
          setValue("recipientPhone", value, {
            shouldValidate: true,
          });
        }}
        defaultCountry="NG"
      />
    </div>
  );
}

export default RecipientDetailsTwo;
