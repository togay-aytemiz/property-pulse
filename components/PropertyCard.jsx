import Image from "next/image";
import Link from "next/link";

import { FaBed, FaBath, FaRuler, FaMoneyBill, FaMap } from "react-icons/fa";

<FaBath />;
<FaRuler />;
<FaMoneyBill />;
<FaMap />;

const PropertyCard = ({ property }) => {
  const {
    _id,
    name,
    type,
    description,
    location,
    beds,
    baths,
    square_feet,
    rates,
    images,
  } = property;

  const { monthly, weekly, nightly } = rates;

  const getRateDisplay = () => {
    if (monthly) {
      return `$${monthly.toLocaleString()}/mo`;
    } else if (weekly) {
      return `$${weekly.toLocaleString()}/wk`;
    } else {
      return `$${nightly.toLocaleString()}/ngt`;
    }
  };

  return (
    <div>
      <div className="bg-white rounded-xl shadow-md relative">
        <Image
          src={`/images/properties/${images[0]}`}
          alt=""
          className="object-cover rounded-t-xl w-full h-auto"
          width={0}
          height={0}
          sizes="100vw"
        />
        <div className="p-4">
          <div className="text-left md:text-center lg:text-left mb-6">
            <div className="text-gray-600">{type}</div>
            <h3 className="text-xl font-bold">{name}</h3>
          </div>
          <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
            {getRateDisplay()}
          </h3>

          <div className="flex justify-center gap-4 text-gray-500 mb-4">
            <p>
              <FaBed className="inline mr-1" /> {beds}{" "}
              <span className="md:hidden lg:inline">Beds</span>
            </p>
            <p>
              <FaBath className="inline mr-1" /> {baths}{" "}
              <span className="md:hidden lg:inline">Baths</span>
            </p>
            <p>
              <FaRuler className="inline mr-1" />
              {square_feet} <span className="md:hidden lg:inline">sqft</span>
            </p>
          </div>

          <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
            {monthly && (
              <p>
                <FaMoneyBill className="inline mr-1 mb-1" /> Monthly
              </p>
            )}
            {weekly && (
              <p>
                <FaMoneyBill className="inline mr-1 mb-1" /> Weekly
              </p>
            )}
            {nightly && (
              <p>
                <FaMoneyBill className="inline mr-1 mb-1" /> Nightly
              </p>
            )}
          </div>

          <div className="border border-gray-100 mb-5"></div>

          <div className="flex flex-col lg:flex-row justify-between mb-4">
            <div className="flex align-middle gap-2 mb-4 lg:mb-0">
              <FaMap className="mt-1 text-lg text-orange-700" />
              <span className="text-orange-700">
                {" "}
                {location.city} {location.state}{" "}
              </span>
            </div>
            <Link
              href={`/properties/${_id}`}
              className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
            >
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PropertyCard;
