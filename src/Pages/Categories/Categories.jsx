
import './categorias.css'
import { CatCard } from '../../Components/CatCard/CatCard'
import { useEffect, useState } from 'react'
import { fetchData } from '../../API/api'
import { Loading } from '../Home/Loading/Loading'
import { categoryImages } from '../../API/api'


function Categories(){
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        fetchData(setLoading, setCategories)
    },[])
    return(
        <section className='w-screen bg-muyclaro relative z-0'>
        <div className="categorias">
                {loading? <Loading/>: categories.map((cat)=>{
                    const image = categoryImages[cat];
                    console.log(image)
                    return <CatCard src={image} key={cat} title={cat} />
                })}; 
        </div>
        </section>
    )
}

export { Categories }