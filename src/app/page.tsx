import adventures from "@/data/adventures";
import cruises from "@/data/cruises";

export default function Home() {
  const adventureList = adventures;
  const cruiseList = cruises;
  return (
    <div className="">
      <div>
        {adventureList.map((adventure, i) => (
          <div>
            <p>{adventure.name}</p>
            <p>{adventure.image}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
