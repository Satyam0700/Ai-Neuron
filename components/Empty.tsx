import Image from "next/image";

interface EmptyProps {
  label: string;
}

const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex-col items-center justify-center">
      {/* <div className="relative h-72 w-72">
        <Image alt="Empty" fill src="/code.jpg" />
      </div> */}
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-6">Explore The Power of Neuron</h2>
      <p className="text-muted-foreground text-sm text-center">
        {label}
      </p>
    </div>
  );
};

export default Empty;
