import GallaryItem from "./GallaryItem";

function Gallary(props) {
    const data = props.data.result.read()
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