import { useEffect, useState } from "react";


const useData = () =>{
    const [data, setData] = useState();
   
    useEffect(() => {
        fetch(`http://localhost:5000/data`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [data])




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


    return [data, setData];
}
export default useData;