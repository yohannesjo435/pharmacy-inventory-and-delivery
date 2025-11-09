import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUp } from "lucide-react";

const AdminDashboard = () => {
  return (
    <div className="bg-[#fefefe]">
      <div className="w-[90%] m-auto">
        <div className="mt-5 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 *:shadow-2xs *:border *:rounded-2xl *:p-4">
          {items.map(({ title, amount, icon, alt, percentage, arrow }) => (
            <div
              className="flex flex-col justify-around h-36"
              key={`${title}-${amount}`}
            >
              <div className="flex justify-between">
                <div>
                  <div className="text-gray-500 text-[12px]">{title}</div>
                  <div className="text-2xl font-semibold">${amount}</div>
                </div>
                <Image src={`/svg/${icon}`} width={50} height={100} alt={alt} />
              </div>
              <div className="flex gap-2">
                {arrow === "ArrowUp" ? (
                  <>
                    <ArrowUp
                      size={22}
                      color="aqua"
                      className="hidden md:block"
                    />
                    <ArrowUp size={18} color="aqua" className="md:hidden" />
                    <p className="-ml-1 md:text-[15px] text-[13px]">
                      <span className="text-[#00FFFF] mr-2">{percentage}%</span>
                      Since Last Week
                    </p>
                  </>
                ) : (
                  <>
                    <ArrowUp
                      size={22}
                      color="aqua"
                      className="hidden md:block"
                    />
                    <ArrowUp size={18} color="aqua" className="md:hidden" />
                    <p className="-ml-1 md:text-[15px] text-[13px]">
                      <span className="text-red-500 mr-2">{percentage}%</span>
                      Since Last Week
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-1 flex-col gap-4 pt-0">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
            <div className="bg-muted/50 aspect-video rounded-xl" />
          </div>
          <div className="bg-muted/50 flex-1 rounded-xl min-h-[400px]"></div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

const items = [
  {
    title: "Total Income",
    amount: "342.247",
    percentage: "6.7",
    icon: "moneyIcon.svg",
    alt: "money Icon",
    arrow: "ArrowUp",
  },
  {
    title: "Per Day Income",
    amount: "12.145",
    percentage: "2.4",
    icon: "wallet.svg",
    alt: "money Icon",
    arrow: "ArrowDown",
  },
  {
    title: "Per Day Order",
    amount: "214.00",
    percentage: "4.2",
    icon: "bag.svg",
    alt: "money Icon",
    arrow: "ArrowUp",
  },
  {
    title: "Customers",
    amount: "2.14k",
    percentage: "5.5",
    icon: "customers.svg",
    alt: "money Icon",
    arrow: "ArrowUp",
  },
];
