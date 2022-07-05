import GallaryItem from "./GallaryItem";
import { useContext } from 'react'
import { DataContext } from '../Context/DataContext'

function Gallary() {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return(
            <GallaryItem item={item} key={index}/>
        )
    })
    return (
        <div>
           {display}
        </div>
    )
}

export default Gallary