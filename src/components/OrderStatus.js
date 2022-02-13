import React from "react";
import { useSortBy, useTable } from "react-table/dist/react-table.development";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
function OrderStatus() {
  const data = React.useMemo(
    () => [
      {
        trackingDetails: "12345",
        orderDetails: "12345",
        orderStatus: "Pending",
        dimentionalWeight: "15",
        orderAmount: "20",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12346",
        orderDetails: "12345",
        orderStatus: "In Progress",
        dimentionalWeight: "23",
        orderAmount: "17",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12347",
        orderDetails: "12345",
        orderStatus: "Pending",
        dimentionalWeight: "15",
        orderAmount: "16",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12348",
        orderDetails: "12345",
        orderStatus: "Completed",
        dimentionalWeight: "25",
        orderAmount: "15",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12345",
        orderDetails: "12345",
        orderStatus: "Pending",
        dimentionalWeight: "15",
        orderAmount: "20",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12346",
        orderDetails: "12345",
        orderStatus: "In Progress",
        dimentionalWeight: "23",
        orderAmount: "17",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12347",
        orderDetails: "12345",
        orderStatus: "Pending",
        dimentionalWeight: "15",
        orderAmount: "16",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
      {
        trackingDetails: "12348",
        orderDetails: "12345",
        orderStatus: "Completed",
        dimentionalWeight: "25",
        orderAmount: "15",
        addressDetails: "A-1/141 Sector-11 Rohini",
        Actions: "Hello",
      },
    ],
    []
  );
  const columns = React.useMemo(
    () => [
      // {
      //   Header: "Actions",
      //   accessor: "actions",
      // },
      {
        Header: "Order ID",
        accessor: "orderDetails",
      },
      {
        Header: "Tracking Details",
        accessor: "trackingDetails",
      },

      {
        Header: "Status",
        accessor: "orderStatus",
      },
      {
        Header: "Dimentional Weight(cm/kg)",
        accessor: "dimentionalWeight",
      },
      {
        Header: "Order Amount(₹)",
        accessor: "orderAmount",
      },
      {
        Header: "Address Details",
        accessor: "addressDetails",
      },
    ],
    []
  );
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);

  return (
    <div className="mt-4  border border-base rounded-md">
      <table {...getTableProps()} className="table-auto w-full">
        <thead className="border-b border-base">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className="font-sans py-4  bg-skin-fill text-skin-muted font-semibold">
                  <div className="flex justify-center items-center">
                    {column.render("Header")}
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <IoMdArrowDropdown />
                      ) : (
                        <IoMdArrowDropup />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, key) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                className="cursor-pointer hover:bg-skin-fill-muted-dark">
                {row.cells.map((cell) => {
                  return (
                    // <td
                    //   key={key}
                    //   className="border-b border-base-muted font-sans"
                    //   style={{
                    //     padding: "10px",
                    //     textAlign: "center",
                    //   }}>
                    //   {console.log(cell.column.id)}
                    //   {cell.render("Cell")}
                    // </td>

                    <StatusCell
                      column={cell.column}
                      value={cell.value}
                      cell={cell}
                    />
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default OrderStatus;

const StatusCell = ({ column, value, cell }) => {
  return (
    <td className="text-center font-sans py-2 border-b border-base-dark">
      {column.id === "orderStatus" ? (
        <>
          {value === "Pending" ? (
            <h5 className="p-1 rounded-full bg-red-400">
              {cell.render("Cell")}
            </h5>
          ) : value === "Completed" ? (
            <h5 className="p-1 rounded-full bg-green-400">
              {cell.render("Cell")}
            </h5>
          ) : (
            <h5 className="p-1 rounded-full bg-yellow-400">
              {cell.render("Cell")}
            </h5>
          )}
        </>
      ) : (
        <h5 className="text-skin-base">{cell.render("Cell")}</h5>
      )}

      {/* {value} */}
    </td>
  );
};
