"use client";

import { Copy, Info } from "lucide-react";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckoutWidgetFormValue } from "@/components/CheckoutWidget/CheckoutWidget";
import { useFormContext } from "react-hook-form";
import { toast } from "sonner";

export function PaymentReview() {
  const formbag = useFormContext<CheckoutWidgetFormValue>();
  const { payAmount, payFromCurrency } = formbag.getValues();

  const [asset, network] = payFromCurrency.toUpperCase().split("-");
  const wallet = payFromCurrency.toUpperCase();
  const address = "4LiV4YjbxsL6739MKghUd";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    toast.success("Copied to clipboard");
  };
  return (
    <div>
      {/* Address pill */}
      <div className="mb-10 flex justify-center">
        <div
          className={cn(
            "flex items-center gap-3 rounded-full",
            "bg-emerald-50 px-5 py-3 text-sm font-medium text-emerald-900"
          )}
        >
          <span className="truncate">{address}</span>

          <button
            onClick={handleCopy}
            className="rounded-md p-1 hover:bg-emerald-100"
          >
            <Copy className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Summary card */}
      <Card className="mb-6 rounded-2xl bg-muted/40 p-6">
        <div className="space-y-4 text-sm">
          <SummaryRow
            label="Amount to send"
            value={`${payAmount} ${asset}`}
            copyable
          />
          <SummaryRow label="Network" value={network} />
          <SummaryRow label="Wallet" value={wallet} />
        </div>
      </Card>

      {/* Info notice */}
      <div className="mb-10 flex gap-3 text-sm text-muted-foreground">
        <Info className="mt-0.5 h-4 w-4" />
        <p>
          Only send <strong className="uppercase">{asset}</strong> to this
          address. Ensure the sender is on the{" "}
          <strong className="uppercase">{network}</strong> network, otherwise
          you might lose your deposit.
        </p>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  copyable,
}: {
  label: string;
  value: string;
  copyable?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>

      <div className="flex items-center gap-2 font-medium">
        <span>{value}</span>

        {copyable && (
          <Copy className="h-4 w-4 cursor-pointer opacity-60 hover:opacity-100" />
        )}
      </div>
    </div>
  );
}
