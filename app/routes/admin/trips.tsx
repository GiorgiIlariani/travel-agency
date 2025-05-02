import { Header } from "components";

const Trips = () => {
  return (
    <main className="dashboard wrapper">
      <Header
        title="Trips"
        description="View and edit AI-generated travel plans"
        ctaText="Create a trip"
        ctaUrl="/trips/create"
      />
      Trips
    </main>
  );
};

export default Trips;
