interface DigitoProps {
  value: string | number;
}

export default function Digito({ value }: DigitoProps) {
  return (
    <span className="rounded-lg bg-gray-700 p-8 text-9xl font-bold text-white max-[965px]:p-4 max-[965px]:text-8xl max-sm:p-4 max-sm:text-8xl">
      {value}
    </span>
  );
}
