const City=props=>{
    return(
        <div className="my-5">
            <h1>{props.city},{props.country}</h1>
            <h3 className="my-4">{props.time}</h3>
        </div>
    )
}
export default City;