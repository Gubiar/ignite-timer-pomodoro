interface DigitoProps {
  value: string | number;
}

export default function Digito({ value }: DigitoProps) {
  return <span className="font-bold text-9xl p-8 rounded-lg bg-gray-700 text-white">{value}</span>;
}
