import React, { useState } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const MyPackages = () => {
  const data = useLoaderData();
  console.log(data);
  const [myPackages, setMyPackages] = useState(data || []);
  console.log(myPackages);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/recipes/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("After delete", data);

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
            const remainingRecipes = myPackages?.filter(
              (recipe) => recipe._id !== id
            );
            setIsDelete(remainingRecipes);
            window.location.reload();
          });
      }
    });
  };

  return <p>{myPackages.length} packages</p>;
};

export default MyPackages;
