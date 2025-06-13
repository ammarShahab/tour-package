import React from "react";

const MyPackagesTable = ({ myPackage }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100 flex flex-col sm:table-row">
      <td className="py-3 px-4 flex items-center sm:table-cell">
        <img
          src={myPackage.image}
          alt="Tour"
          className="w-12 h-12 object-cover rounded mr-2 sm:mr-0"
        />
        {/* <span className="sm:hidden font-semibold">Image</span> */}
      </td>
      <td className="py-3 px-4 flex items-center sm:table-cell">
        <span className="sm:hidden font-semibold mr-2">Tour:</span>
        {myPackage.tour_name}
      </td>
      <td className="py-3 px-4 flex items-center sm:table-cell">
        <span className="sm:hidden font-semibold mr-2">Guide:</span>
        {myPackage.guide_name}
      </td>
      <td className="py-3 px-4 flex sm:justify-center ">
        {/* <span className="sm:hidden font-semibold mr-2">Actions:</span> */}
        <div className="space-x-2">
          <button
            // onClick={() => handleUpdate(myPackage._id)}
            className=" text-white px-5 py-3 rounded text-xs sm:text-sm bg-[#fe8d02] hover:bg-yellow-500 font-semibold"
          >
            Update
          </button>
          <button
            // onClick={() => handleDelete(myPackage._id)}
            className="bg-red-500 text-white px-5 py-3 rounded text-xs sm:text-sm hover:bg-red-600 font-semibold"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default MyPackagesTable;
