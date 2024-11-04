import AdventureComponent from "./components/adventure";
import CruisesComponent from "./components/cruises";

export default function Home() {
  return (
    <div className="px-32 mb-10">
      <main className="grid space-y-10">
        <AdventureComponent />
        <CruisesComponent />
      </main>
    </div>
  );
}
