"use client";

import { Check, Copy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface PaymentSuccessProps {
  brandName?: string;
  transactionId: string;
  onGoHome?: () => void;
}

export function PaymentSuccess({
  brandName = "NOVACRUST",
  transactionId,
  onGoHome,
}: PaymentSuccessProps) {
  return (
    <div className="flex flex-col items-center ">
      <div className="mb-16 flex justify-center">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <Image src="/logo.png" height={40} width={177} alt="logo" />
        </div>
      </div>

      {/* Status Icon */}
      <div className="mb-6 flex justify-center">
        <div className="flex h-16.25 w-16.25 items-center justify-center rounded-full bg-emerald-600">
          <Check className="h-12 w-12 text-white" />
        </div>
      </div>

      {/* Message */}

      <h2 className="mb-1 text-xl md:text-2xl font-semibold text-foreground">
        Your transaction is processing.
      </h2>

      <p className="mb-10 text-lg md:text-xl text-muted-foreground">
        The recipient will receive it shortly.
      </p>

      {/* Transaction ID */}
      <div className="w-full mb-14 rounded-2xl bg-muted/60 px-6 py-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Transaction ID</span>

          <button
            onClick={() => navigator.clipboard.writeText(transactionId)}
            className="flex items-center gap-2 font-medium hover:opacity-80"
          >
            {transactionId}
            <Copy className="h-4 w-4 opacity-60" />
          </button>
        </div>
      </div>

      {/* Footer action */}
      <Button
        variant="ghost"
        className="text-base font-medium text-center"
        onClick={onGoHome}
        size="lg"
      >
        Go back to home
      </Button>
    </div>
  );
}
