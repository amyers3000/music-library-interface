import GallaryItem from "./GallaryItem";

function Gallary(props) {

    const display = props.data.map((item, index) => {
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