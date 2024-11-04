import adventures from "@/data/adventures";
import Image from "next/image";

export default function AdventureComponent() {
  const adventureList = adventures;

  return (
    <>
      <h2 className="font-bold pt-10 text-lg">My Adventures</h2>
      <div className="grid grid-cols-5 gap-4">
        {adventureList.map((adventures, i) => (
          <div key={i} className="grid gap-2 border rounded-lg shadow pb-4">
            <div className="flex justify-center">
              <Image
                className="rounded-lg"
                src={adventures.image}
                width={200}
                height={200}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center">
              <p className="font-bold">{adventures.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
