import adventures from "@/data/adventures";
import cruises from "@/data/cruises";
import Image from "next/image";

export default function Home() {
  const adventureList = adventures;
  const cruiseList = cruises;
  return (
    <div className="">
      <div>
        {adventureList.map((adventure, i) => (
          <div>
            <p>{adventure.name}</p>
            <Image
              src={adventure.image}
              height={100}
              width={100}
              alt="adventure image"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
