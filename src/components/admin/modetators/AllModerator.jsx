// import React from 'react'

// function AllModerator() {
//   return (
//     {requests.length > 0 ? (
//         <div>
//           {requests.map((item) => (
//             <div key={item._id} className="container-fulid">
//               <div className="row m-2 p-3">
//                 <div className="col-lg-3">
//                   <p className="text-color fs-5 text-center my-2 py-1">
//                     {item.name}
//                   </p>
//                 </div>

//                 <div className="col-lg-3">
//                   <p className="text-color fs-5 text-center my-2 py-1">
//                     {new Date(item.requestedAt).toLocaleDateString("en-GB")}
//                   </p>
//                 </div>

//                 <div className="col-lg-6">
//                   <div className="row">
//                     <div className="col-md-3 me-5 text-center my-2">
//                       <button className="btn btn-primary">details</button>
//                     </div>

//                     <div className="col-md-3 me-5 text-center my-2">
//                       <button onClick={() => approve(item._id)} className={`btn btn-success ${
//                           item.status === "pending" ? "" : "disabled"
//                         }`}>
//                         {item.status === "approved" ? "approved" : "approve"}
//                       </button>
//                     </div>

//                     <div className="col-md-3 text-center my-2">
//                       <button
//                         onClick={() => reject(item._id)}
//                         className={`btn btn-danger ${
//                           item.status === "pending" ? "" : "disabled"
//                         }`}
//                       >
//                         {item.status === "rejected" ? "rejected" : "reject"}
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div>no item</div>
//       )}
//   )
// }

// export default AllModerator