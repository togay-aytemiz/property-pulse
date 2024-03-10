import Link from "next/link";
// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/request";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // sort properties by date
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <div>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          {properties.length === 0 ? (
            <p>No Properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => {
                return <PropertyCard key={property._id} property={property} />;
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
export default PropertiesPage;
