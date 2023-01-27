
import { useEffect, useState } from "react";
// import { set } from "react-hook-form";

const useForum = () =>{
    const [messages, setMessages] = useState();
   
    useEffect(() => {
        fetch(`http://localhost:5000/messages`)
            .then(res => res.json())
            .then(data => {
                setMessages(data)
            })
    }, [messages])




    // const [products, setProducts] = useState([]);
    // // const [isLoading, setIsLoading ] = useState(true);
    

    // useEffect(()=>{
        
    //     // setIsLoading(true);
    //     fetch(`https://taja-jinis.herokuapp.com/products`)
    //     // fetch('http://localhost:5000/products')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setProducts(data);
    //         // setIsLoading(false);
    //         // console.log(data);
    //     });
    // } , [])


    return [messages, setMessages];
}
export default useForum;