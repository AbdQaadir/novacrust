import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import z from "zod";

type Props = {
  placeholderText: string;
};

const schema = z.object({
  email: z.email("Enter valid email"),
});

function ComingSoon({ placeholderText }: Props) {
  const {
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(schema),
  });
  const onChange = (val: string) => {
    setValue("email", val, {
      shouldDirty: true,
      shouldValidate: true,
    });
  };

  const onSubmit = () => {
    const email = getValues("email");
    toast.success(`Email sent to ${email}`);
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
            value={watch("email")}
            onChange={(e) => onChange(e.target.value)}
            error={!!errors.email}
            errorText={errors.email?.message}
          />
        </div>
      </div>
      <Button
        size="lg"
        className="font-instrument rounded-full h-11 md:h-15 text-sm md:text-md font-bold w-full"
        disabled={!watch("email") || !!errors.email}
        onClick={onSubmit}
      >
        Update me
      </Button>
    </div>
  );
}

export default ComingSoon;
