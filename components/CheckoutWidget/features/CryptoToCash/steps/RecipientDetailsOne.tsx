import { CASH_ACCOUNT_ENUM, CASH_ACCOUNT_OPTIONS } from "../../../constants";
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
import { Input } from "@/components/ui/input";

function RecipientDetailsOne() {
  const formbag = useFormContext<CheckoutWidgetFormValue>();
  const {
    setValue,
    watch,
    formState: { errors },
  } = formbag;

  console.log({ errors });
  return (
    <div className="flex flex-col w-full h-full gap-6">
      <div className="w-full flex flex-col gap-2">
        <Label
          htmlFor="recipientBank"
          className="text-sm font-outfit text-primary font-medium"
        >
          Bank
        </Label>
        <Select
          value={watch("recipientBank") || ""}
          onValueChange={(value: CASH_ACCOUNT_ENUM) =>
            setValue("recipientBank", value)
          }
        >
          <SelectTrigger
            className="w-full h11 md:h-15 p-6 rounded-[30px] bg-background"
            id="from-account"
          >
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent position="item-aligned">
            {CASH_ACCOUNT_OPTIONS?.map((account, index) => {
              return (
                <SelectItem
                  value={account.id}
                  key={`currency-option-${account.id}-${index}`}
                >
                  {/* <span>{account.icon}</span> */}
                  {account.title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

      <Input
        id="recipientAccountNumber"
        name="recipientAccountNumber"
        type="number"
        maxLength={10}
        placeholder="Enter your account number"
        label="Account number"
        value={watch("recipientAccountNumber")}
        onChange={(e) => {
          const len = e.target.value.length;
          if (len >= 10) {
            setValue("recipientAccountNumber", e.target.value.slice(0, 10), {
              shouldValidate: true,
            });
          }
          if (len < 10) {
            setValue("recipientAccountNumber", e.target.value, {
              shouldValidate: true,
            });
          }
        }}
        error={!!errors.recipientAccountNumber}
        errorText={errors.recipientAccountNumber?.message}
      />

      <Input
        id="recipientAccountName"
        name="recipientAccountName"
        type="text"
        disabled
        placeholder="Enter your account name"
        label="Account name"
        value={watch("recipientAccountName")}
      />
    </div>
  );
}

export default RecipientDetailsOne;
