import RChart from "@/components/shared/RChart";
import React from "react";

const chartData = [
  { name: "Yes", amount: 5000, fill: "#FD8282" },
  { name: "No", amount: 2000, fill: "#00BCD4" },
];

const Analytics = () => {
  return (
    <div className="rounded-xl bg-white p-4 pb-8 border border-alice-blue">
      <h3 className="text-shark text-xs uppercase font-bold mb-[0.375rem]">
        VOTE ANALYTICS
      </h3>
      <p className="text-xs text-dove-gray">
        How members of the community voted
      </p>
      <div>
        <RChart data={chartData} />
        <ul className="text-xs text-mako space-y-2">
          {chartData?.map((data, index) => (
            <li key={index}>
              <span
                style={{
                  backgroundColor: data?.fill,
                }}
                className={`size-[0.375rem] mb-0.5 inline-block mr-2 rounded-full`}
              />
              {data?.name}{" "}
              <span className="font-bold text-shark">{data?.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Analytics;
