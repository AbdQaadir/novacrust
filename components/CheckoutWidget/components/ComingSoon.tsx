import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

type Props = {
  placeholderText: string;
};
function ComingSoon({ placeholderText }: Props) {
  const [email, setEmail] = useState("");

  const onChange = (val: string) => {
    setEmail(val);
  };

  return (
    <div className="w-full h-full text-center flex flex-col justify-between py-6 gap-12">
      <div className="text-center space-y-4">
        <h1 className="text-center font-display text-2xl md:text-[32px] font-medium">
          Coming Soon!
        </h1>

        <p className="text-md md:text-xl">
          {placeholderText || "It"} is almost here. <br /> Enter your email and
          we&apos;ll let you know the moment it&apos;s live.
        </p>
        <div>
          <Input
            type="email"
            placeholder="Enter your email"
            label="Email"
            value={email}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
      <Button
        size="lg"
        className="font-instrument rounded-full h-11 md:h-15 text-sm md:text-md font-bold w-full"
      >
        Update me
      </Button>
    </div>
  );
}

export default ComingSoon;
