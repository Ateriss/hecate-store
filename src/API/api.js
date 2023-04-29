import axios from "axios"


const api = axios.create({
    baseURL: "https://fakestoreapi.com"
  });


export const fetchData = async (setLoad, setCategories, setProducts)=>{
    setLoad(true);
    try{
        const categoryList = async (setData)=>{
            try{
                const response = await api.get('/products/categories')
                setData(response.data);
            }
            catch(error){
                console.log(error);
            }
        }
        const productsList = async (setData)=>{
            try{
                const response = await api.get(`/products`)
                setData(response.data)
            }
            catch(error){
                console.log(error)
            }
        }
        await categoryList(setCategories);
        await productsList(setProducts);
        setLoad(false);
    }catch(error){
        console.log(error);
        setLoad(false);
    }

}

export const categoryImages = {
    'electronics':  'https://images.pexels.com/photos/3345882/pexels-photo-3345882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    "women's clothing": 'https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1600',
    "men's clothing": 'https://images.pexels.com/photos/2027490/pexels-photo-2027490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'jewelery': 'https://images.pexels.com/photos/8100365/pexels-photo-8100365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
}

export const productRandom = ()=>{return Math.random() - .5;}






