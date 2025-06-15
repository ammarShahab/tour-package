import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import MyPackagesTable from "./MyPackagesTable";

const MyPackages = () => {
  const data = useLoaderData();
  console.log(data);
  const [myPackages, setMyPackages] = useState(data || []);
  console.log(myPackages);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure delete your package?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/packages/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("After delete", data);

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your package has been deleted.",
                icon: "success",
              });
            }
            const remainingPackages = myPackages?.filter(
              (myPackage) => myPackage._id !== id
            );
            setMyPackages(remainingPackages);
            window.location.reload();
          });
      }
    });
  };

  return (
    <div className="min-h-4/6 bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Manage My Packages
        </h1>

        {myPackages.length < 1 ? (
          <h3 className="text-center font-semibold">No Packages Found</h3>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full text-sm text-gray-600">
              <thead className="hidden sm:table-header-group">
                <tr className="bg-gray-200 text-gray-600 uppercase text-xs sm:text-sm">
                  <th className="py-3 px-4 text-left">Image</th>
                  <th className="py-3 px-4 text-left">Tour Name</th>
                  <th className="py-3 px-4 text-left">Guide Name</th>
                  <th className="py-3 px-4 flex justify-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myPackages.map((myPackage) => (
                  <MyPackagesTable
                    key={myPackage._id}
                    myPackage={myPackage}
                    setMyPackages={setMyPackages}
                    handleDelete={handleDelete}
                  ></MyPackagesTable>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyPackages;
