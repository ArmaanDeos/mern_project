import "./widgetlg.css";

const WidgetLarge = () => {
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

        <tr className="tableTr">
          <td className="tableTdUser">
            <img
              className="tableImg"
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
              alt=""
            />
            <span className="tableName">Susan Carol</span>
          </td>
          <td className="tableTdDate">2 Jun 2023</td>
          <td className="tableTdAmount">$122.09</td>
          <td className="tableTdStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="tableTr">
          <td className="tableTdUser">
            <img
              className="tableImg"
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
              alt=""
            />
            <span className="tableName">Susan Carol</span>
          </td>
          <td className="tableTdDate">2 Jun 2023</td>
          <td className="tableTdAmount">$122.09</td>
          <td className="tableTdStatus">
            <Button type="Approved" />
          </td>
        </tr>

        <tr className="tableTr">
          <td className="tableTdUser">
            <img
              className="tableImg"
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
              alt=""
            />
            <span className="tableName">Susan Carol</span>
          </td>
          <td className="tableTdDate">2 Jun 2023</td>
          <td className="tableTdAmount">$122.09</td>
          <td className="tableTdStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="tableTr">
          <td className="tableTdUser">
            <img
              className="tableImg"
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
              alt=""
            />
            <span className="tableName">Susan Carol</span>
          </td>
          <td className="tableTdDate">2 Jun 2023</td>
          <td className="tableTdAmount">$122.09</td>
          <td className="tableTdStatus">
            <Button type="Pending" />
          </td>
        </tr>

        <tr className="tableTr">
          <td className="tableTdUser">
            <img
              className="tableImg"
              src="https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png"
              alt=""
            />
            <span className="tableName">Susan Carol</span>
          </td>
          <td className="tableTdDate">2 Jun 2023</td>
          <td className="tableTdAmount">$122.09</td>
          <td className="tableTdStatus">
            <Button type="Declined" />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default WidgetLarge;
