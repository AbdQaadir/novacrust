import { ButtonGroup } from "@/components/ui/button-group";
import React from "react";
import { PAYMENT_METHOD_OPTIONS, PAYMENT_METHODS_ENUM } from "../constants";
import { Button } from "@/components/ui/button";

type Props = {
  activeMethod: string;
  onMethodChange: (method: PAYMENT_METHODS_ENUM) => void;
};
function MethodSwitcher({ activeMethod, onMethodChange }: Props) {
  return (
    <ButtonGroup className="bg-[#F2F2F2] rounded-[30px]">
      {PAYMENT_METHOD_OPTIONS.map(({ id, title }) => {
        const isActive = activeMethod == id;
        return (
          <Button
            key={`payment-option-${id}`}
            variant={isActive ? "default" : "ghost"}
            onClick={() => onMethodChange(id)}
            className="rounded-[30px]! text-xs md:text-base px-2.5 sm:px-6"
            size="sm"
          >
            {title}
          </Button>
        );
      })}
    </ButtonGroup>
  );
}

export default MethodSwitcher;
