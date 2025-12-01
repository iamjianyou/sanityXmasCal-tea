import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-2">
      <h2 className="text-3xl font-bold">Hei jeg heter Jianyou</h2>
      <p className="text-2xl"> og jeg liker å drikke te</p>
      <Image
        src="/kungfuTea.png"
        alt="Description"
        width={400}
        height={300}
        className="mt-4"
      />
    </div>
  );
}
