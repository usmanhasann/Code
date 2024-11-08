import React from "react";

const Rating = ({ rating }) => {
  //create an   array with 5 stars and false position
  let ratingArray = Array(5).fill(false);
  //*it will check ( i < rating)that the no of star coming is less than the initial value
  //todo:ratinArray[i]=true means that the start have to print which is less then the logic

  for (let i = 0; i < rating; i++) {
    ratingArray[i] = true;
  }

  return (
    <>
      {ratingArray.map((value, index) =>
        value ? (
          <i
            key={index}
            className="text-lg bi bi-star-fill text-yellow-500 mr-1"
          ></i>
        ) : (
          <i
            key={index}
            className="text-lg bi bi-star text-yellow-500 mr-1"
          ></i>
        )
      )}
      {/* <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> */}
    </>
  );
};

export default Rating;
