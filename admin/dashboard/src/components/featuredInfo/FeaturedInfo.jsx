import "./featuredinfo.css";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import { useEffect, useState } from "react";
import { userRequest } from "../../utilities/requestMethods";

const FeaturedInfo = () => {
  const [income, setIncome] = useState({ total: 0 });
  const [salePercentage, setSalePercentage] = useState(0);

  useEffect(() => {
    const getIncome = async () => {
      try {
        const res = await userRequest.get("orders/income");
        if (res.data.data && res.data.data.length >= 2) {
          // Calculate salePercentage only if there are at least two income data entries
          const totalToday = res.data.data[0].total;
          const totalYesterday = res.data.data[1].total;
          const salePercentage =
            totalToday !== 0
              ? ((totalToday - totalYesterday) / totalToday) * 100
              : 0;

          setIncome({ total: totalToday });
          setSalePercentage(salePercentage);
        } else {
          console.error("Invalid income data format:", res.data);
        }
      } catch (error) {
        console.log("Error fetching income:", error);
      }
    };
    getIncome();
  }, []);
  console.log(income);
  console.log(salePercentage);

  return (
    <div className="featured">
      {/* Revenue */}
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ {income.total}</span>
          <span className="featuredMoneyRate">
            %{Math.floor(salePercentage)}
            {salePercentage < 0 ? (
              <ArrowDownwardOutlinedIcon className="featuredIcon negative" />
            ) : (
              <ArrowUpwardOutlinedIcon className="featuredIcon" />
            )}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Sales */}
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2,415</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownwardOutlinedIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      {/* Cost */}
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$ 2,415</span>
          <span className="featuredMoneyRate">
            +2.4
            <ArrowUpwardOutlinedIcon className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
