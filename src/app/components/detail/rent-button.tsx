"use client";

import { Car } from "@/app/types";
import { getPaymentUrl } from "@/app/utils/service";
import { useState } from "react";
import LoaderLoad from "../loaderLoad";

interface Props {
  car: Car;
}

const RentButton = ({ car }: Props) => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleRent = () => {
    setIsloading(true);
    //* API' a ödeme oturumu oluşturması için araç bilgileri ile istek at
    //* API' a satın alım sayfasının url' ini oluşturup döndür
    getPaymentUrl(car)
      //* Kullanıcıyı satın alım sayfasına yönlendir
      .then((data) => {
        window.location.href = data.url;
      })
      .finally(() => setIsloading(false));
  };

  return (
    <button
      onClick={handleRent}
      className="bg-basic-blue py-2 px-6 text-white rounded-md hover:brightness-90 transition min-w-[150px] cursor-pointer"
    >
      {isLoading ? <LoaderLoad size="size-5" /> : "Şimdi Kirala"}
    </button>
  );
};

export default RentButton;
