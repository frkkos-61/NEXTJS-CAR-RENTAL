import { Car } from "@/app/types";
import Image from "next/image";
import Link from "next/link";
import { BsFillFilePersonFill as Person } from "react-icons/bs";
import { FaGasPump as Gas } from "react-icons/fa";
import { TbSteeringWheelFilled as Steer } from "react-icons/tb";
import generateImage from "./../../utils/generateImages";

type Props = {
  car: Car;
};

const Card = ({ car }: Props) => {
  const arr = [
    { icon: <Gas />, value: car.fuelType },
    { icon: <Steer />, value: car.transmission },
    { icon: <Person />, value: car.capacity },
  ];
  return (
    <div className="border border-zinc-300 shadow rounded hover:shadow-lg p-4 md:p-6 hover:scale-103">
      <div>
        <h1 className="text-xl max-md:text-2xl font-bold text-black line-clamp-1">
          {car.make} {car.model}{" "}
        </h1>
        <p className="text-zinc-500">{car.type} </p>
      </div>

      <div className="max-md:flex max-md:justify-between max-md:gap-10">
        <div className="w-full h-[200px] relative">
          <Image src={generateImage(car)} alt={car.make} unoptimized fill />
        </div>

        <div className="flex max-md:flex-col max-md:justify-center max-md:items-start gap-5 justify-between">
          {arr.map((i, key) => (
            <div key={key} className="text-zinc-500 flex justify-center items-center gap-2 text-lg">
              <p>{i.icon} </p>
              <p>{i.value} </p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between mt-5 items-center">
        <p className="font-bold">
          <span className="text-black text-xl max-md:text-2xl">{car.price}₺ / </span>
          <span className="text-zinc-500 ps-1">gün</span>
        </p>
        <Link
          href={`/car/${car._id}`}
          className="bg-basic-blue py-2 px-4 rounded-md hover:brightness-90 transition text-white"
        >
          Aracı Kirala
        </Link>
      </div>
    </div>
  );
};

export default Card;
