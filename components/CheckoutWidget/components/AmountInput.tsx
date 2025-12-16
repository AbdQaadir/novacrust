/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { numberWithCommas } from "@/utils";
import { Label } from "@/components/ui/label";

interface AmountInputProps {
  label: string;
  value: string;
  onChange?: (val: string) => void;
  currency: string;
  readOnly?: boolean;
  onCurrencyClick: (currency: string) => void;
  currencies: {
    id: string;
    title: string;
    icon: any;
  }[];
}

export function AmountInput({
  label,
  value,
  onChange,
  currency,
  readOnly = false,
  onCurrencyClick,
  currencies,
}: AmountInputProps) {
  const [search, setSearch] = React.useState("");

  const filteredCurrencies = React.useMemo(() => {
    if (search === "") {
      return currencies;
    }
    return currencies.filter((currency) =>
      currency.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, currencies]);

  return (
    <div
      className={cn(
        "relative w-full rounded-2xl border border-border bg-background",
        "p-3 md:p-6",
        "focus-within:ring-2 focus-within:ring-ring"
      )}
    >
      {/* Floating label */}
      <Label className="block text-sm text-muted-foreground">{label}</Label>

      <div className="mt-1 flex items-center justify-between gap-3">
        {/* Amount */}
        <input
          type="text"
          inputMode="decimal"
          readOnly={readOnly}
          value={numberWithCommas(value)}
          // value={value}
          onChange={(e) => {
            if (onChange) onChange(e.target.value.replace(/,/g, ""));
          }}
          className={cn(
            "w-full bg-transparent text-xl md:text-3xl font-medium outline-none",
            "text-foreground placeholder:text-muted-foreground",
            readOnly && "cursor-default"
          )}
        />

        {/* Currency selector */}
        <Select
          value={currency}
          onValueChange={(val) => onCurrencyClick(val)}
          onOpenChange={() => setSearch("")}
        >
          <SelectTrigger className="min-w-fit h-6 md:h-10 rounded-full bg-background text-xs md:text-sm">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="w-full min-w-48 max-w-66">
            <Input
              value={search}
              onChange={(e) => {
                e.stopPropagation();
                e.preventDefault();

                setSearch(e.target.value);
              }}
              placeholder="Search"
              searchIcon={true}
              className="h-8 md:h-11 py-3 px-4 pl-7"
            />
            <div className="mt-2 md:mt-3">
              {filteredCurrencies?.map((currency, index) => {
                return (
                  <SelectItem
                    value={currency.id}
                    key={`currency-option-${currency.id}-${index}`}
                    className="text-xs md:text-sm p-2 md:p-3 flex items-center gap-2"
                  >
                    {currency.icon}
                    {currency.title}
                  </SelectItem>
                );
              })}
            </div>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
