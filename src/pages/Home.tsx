// HomePage.tsx
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCountdown } from "../context/CountdownContext";
import FormFields from "../components/Home/FormFields";
import FormButton from "../components/Home/FormButton";
import Display from "../components/Home/Display";
import { timerFormSchema } from "../zodSchemas";
import { CycleProps } from "../types";

const HomePage = () => {
  const { setCycles, setActiveCycleId } = useCountdown();

  const timerForm = useForm<z.infer<typeof timerFormSchema>>({
    resolver: zodResolver(timerFormSchema),
  });

  const { reset, handleSubmit } = timerForm;

  const addCycle = (values: z.infer<typeof timerFormSchema>) => {
    const newCycleId = new Date().getTime();
    const newCycle: CycleProps = {
      createDate: new Date(),
      duration: values.timeAmount,
      id: newCycleId,
      name: values.name,
      status: { id: 1, value: "Em andamento" },
    };

    setCycles((prev) => [newCycle, ...prev]);
    setActiveCycleId(newCycleId);
  };

  const onSubmit = (values: z.infer<typeof timerFormSchema>) => {
    addCycle(values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="m-auto flex h-full w-full flex-col justify-center gap-16 p-4 max-sm:justify-between max-sm:gap-0"
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
