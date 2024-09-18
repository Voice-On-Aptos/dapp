"use client";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn, currencyFormatter } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import React from "react";
import { Pie, PieChart, TooltipProps } from "recharts";

const chartData = [
  { name: "Amount spent", amount: 5000, fill: "#FD8282" },
  { name: "Amount left", amount: 25000, fill: "#00BCD4" },
];

const chartConfig = {} satisfies ChartConfig;

type CustomTooltipProps = TooltipProps<number, string> & {
  active?: boolean;
  payload?: Array<{
    payload: {
      name: string;
      amount: number;
    };
  }>;
};

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-shark-2 text-white px-[0.375rem] py-1 rounded-md">
        <p className="text-xs font-medium">{`${currencyFormatter(
          data.amount
        )}`}</p>
        <p className="text-s9">{data.name}</p>
      </div>
    );
  }
  return null;
};

export function RewardChart() {
  return (
    <div className="">
      <div className="">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[200px]"
        >
          <PieChart>
            <ChartTooltip cursor={false} content={<CustomTooltip />} />
            <Pie data={chartData} dataKey="amount" innerRadius={40} />
          </PieChart>
        </ChartContainer>
      </div>
      <div className="mt-4">
        <h4 className="text-xs text-abbey mb-1">Total Amount</h4>
        <h5 className="font-bold text-shark text-lg lg:text-s20">
          {currencyFormatter(30000)}
        </h5>
        <ul className="mt-4 text-xs text-mako space-y-2">
          {chartData?.map((data) => (
            <li>
              <span
                style={{
                  backgroundColor: data?.fill,
                }}
                className={`size-[0.375rem] mb-0.5 inline-block mr-2 rounded-full`}
              />
              {data?.name}{" "}
              <span className="font-bold text-shark">
                {currencyFormatter(data?.amount)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const CommunityRewardPool = () => {
  return (
    <div className="w-full bg-white rounded-lg text-mako p-3 pb-6 lg:p-4 lg:pb-8 border border-alice-blue">
      <h3 className="text-shark text-xs font-bold mb-[0.375rem]">
        REWARD POOL
      </h3>
      <p className="text-xs text-dove-gray">
        Rewards are distributed as you engage on the platform
      </p>
      <RewardChart />
    </div>
  );
};

export default CommunityRewardPool;
