export function Card({props}){
    let {title, image,caption} = props
    return(
        <div className="card">
            <p className="title">
                {title}
            </p>
            <img src={image} alt="moving in history"/>
            <p className="caption">
                {caption}
            </p>
        </div>
    )
}