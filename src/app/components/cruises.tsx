import Image from "next/image";
import Link from "next/link";
import cruises from "@/data/cruises";

export default function CruisesComponent() {
  const cruiseList = cruises;
  return (
    <>
      <h2 className="font-bsold py-10 text-lg">Popular Cruises</h2>
      <div className="grid grid-cols-5 gap-4">
        {cruiseList.map((cruises, i) => (
          <Link key={i} href={`/cruises/${cruises.name}`}>
            <div className="grid gap-2 border rounded-lg shadow pb-4">
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
                  <p className="">From only - £{cruises.price}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
