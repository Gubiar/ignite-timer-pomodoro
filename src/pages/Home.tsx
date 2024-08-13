// HomePage.tsx
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCountdown } from "../context/CountdownContext";
import FormFields from "../components/Home/FormFields";
import FormButton from "../components/Home/FormButton";
import Display from "../components/Home/Display";
import { timerFormSchema } from "../zodSchemas";

const HomePage = () => {
  const { addCycle } = useCountdown();

  const timerForm = useForm<z.infer<typeof timerFormSchema>>({
    resolver: zodResolver(timerFormSchema),
  });

  const { reset, handleSubmit } = timerForm;

  const onSubmit = (values: z.infer<typeof timerFormSchema>) => {
    addCycle(values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full justify-center max-sm:gap-0 max-sm:justify-between gap-16 m-auto p-4"
    >
      <FormProvider {...timerForm}>
        <FormFields />
      </FormProvider>
      <Display />
      <FormButton />
    </form>
  );
};

export default HomePage;
