import adventures from "@/data/adventures";
import cruises from "@/data/cruises";
import Image from "next/image";

export default function Home() {
  const adventureList = adventures;
  const cruiseList = cruises;
  return (
    <div className="px-32 mb-10">
      <main className="grid space-y-10">
        <div>
          <h2 className="font-bold py-10 text-lg">My Adventures</h2>
          <div className="grid grid-cols-5 gap-4">
            {adventureList.map((adventures, i) => (
              <div key={i} className="grid gap-2 border rounded-lg shadow pb-4">
                <div className="flex justify-center">
                  <Image
                    className="rounded-lg"
                    src={adventures.image}
                    width={200}
                    height={200}
                    alt="Adventure Image"
                  />
                </div>
                <div className="flex justify-center">
                  <p className="font-bold">{adventures.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h2 className="font-bold py-10 text-lg">Popular Cruises</h2>
          <div className="grid grid-cols-5 gap-4">
            {cruiseList.map((cruises, i) => (
              <div key={i} className="grid gap-2 border rounded-lg shadow pb-4">
                <div className="flex justify-center">
                  <Image
                    className="rounded-lg"
                    src={cruises.shipImage}
                    width={200}
                    height={200}
                    alt=""
                  />
                </div>
                <div className="px-2 text-sm">
                  <p className="font-bold">
                    {cruises.nights} nights {cruises.name}
                  </p>
                  <p className="">{cruises.shipName}</p>
                  <div className="">
                    From <div className="font-bold">{cruises.startPort}</div>
                  </div>
                  <div className="">
                    To <div className="font-bold">{cruises.endPort}</div>
                  </div>
                  <div className="pt-2">
                    <p className="">£{cruises.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
