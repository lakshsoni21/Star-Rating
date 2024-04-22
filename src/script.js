import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import {FaDove, FaStar} from "react-icons/fa";

const StarRating = () => {
    const [Rating, setRating] = useState(null);
    const [Hover, setHover] = useState(null);

    return (
        <>
            {
                [...Array(5)].map((star, i) => {
                    const ratingValue = i+1;

                    return (
                        <label>
                            <input className="hidden cursor-pointer" type="radio" name="rating" value={ratingValue}  onClick={() => {setRating(ratingValue)}}
                            />
                            < FaStar size={100} color={ratingValue <= (Hover || Rating) ? "#ffc107" : "gray"} 
                            onMouseEnter={() => {setHover(ratingValue)}}
                            onMouseLeave={() => {setHover(null)}} />
                        </label>
                    )
                })
            }
        </>
    )
}


const AppLayout = () => {
    return (
        <div className="flex justify-center w-full">
            <StarRating />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
