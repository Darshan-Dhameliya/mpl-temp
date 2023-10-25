import React from "react";
import { useSelector } from "react-redux";

export default function SessionHistory() {
  const sessions = useSelector((state) => state?.user?.sessions || []);

  return (
    <>
      <div className="text-white text-2xl font-bold mb-2">Session History</div>
      <table className="w-full">
        <tr>
          <th>Browser</th>
          <th>Location</th>
          <th>IP Address</th>
          <th>Last used</th>
          <th>Action</th>
        </tr>
        {sessions.map((item) => {
          console.log(item);
          return (
            <tr key={item?.id}>
              <td>{item?.browser}</td>
              <td>{item?.ip}</td>
              <td>{item?.locationCountry}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
