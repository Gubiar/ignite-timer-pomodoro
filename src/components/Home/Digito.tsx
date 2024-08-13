interface DigitoProps {
  value: string | number;
}

export default function Digito({ value }: DigitoProps) {
  return (
    <span className="font-bold max-sm:text-8xl max-sm:p-4 max-[965px]:text-8xl max-[965px]:p-4 text-9xl p-8 rounded-lg bg-gray-700 text-white">
      {value}
    </span>
  );
}
