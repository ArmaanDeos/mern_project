import { useEffect, useState } from "react";
import "./widgetlg.css";
import { userRequest } from "../../utilities/requestMethods";
import { format } from "timeago.js";

const WidgetLarge = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, []);

  // button component
  const Button = ({ type }) => {
    return <button className={`widgetLgBtn ${type}`}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      {/* tables */}
      <table className="widgetTable">
        <tr className="tableTr">
          <th className="tableTh">Customer</th>
          <th className="tableTh">Date</th>
          <th className="tableTh">Amount</th>
          <th className="tableTh">Status</th>
        </tr>

        {orders.map((order) => (
          <tr className="tableTr" key={order._id}>
            <td className="tableTdUser">
              <span className="tableName">{order.userId}</span>
            </td>
            <td className="tableTdDate">{format(order.createdAt)}</td>
            <td className="tableTdAmount">{order.amount}</td>
            <td className="tableTdStatus">
              <Button type={order.status} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLarge;
