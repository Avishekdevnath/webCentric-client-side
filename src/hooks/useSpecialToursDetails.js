import { useState } from "react";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase";


const useSpecialTourDetails=()=>{
    const [specialTours, setSpecialTours] = useState();
    const [selectedTours,setSelectedTours] = useState();
    const [user] = useAuthState(auth);

useEffect(() => {
    fetch(`http://localhost:5000/SpecialBookingDetails`)
        .then(res => res.json())
        .then(data => {
            setSpecialTours(data)
            data.map(e=>{
                if(user.email===e.email)
                {
                    setSelectedTours(e)
                }
            })
            // console.log(selectedTours)
            // selectedTours
            
        }, [specialTours])
})





return  [specialTours, setSpecialTours. selectedTours, setSelectedTours ];


}

export default useSpecialTourDetails;
