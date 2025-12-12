const Api = (props) => {

    var imageUrl = props.imageUrl;
    var title = props.title;
    var P1 = props.P1;
    var P2 = props.P2;
    var P3 = props.P3;
    var P4 = props.P4;
    var P5 = props.P5;

    return (
        <>
            <div className="Div-1">
                <img src={imageUrl} alt="API" />
            </div>
            <div className="Div-2">
                <h2>{title}</h2>
                <p className="P1">{P1}</p>
                <p className="P2">{P2}</p>
                <p className="P3">{P3}</p>
                <p className="P2">{P4}</p>
                <p className="P3">{P5}</p>
            </div>
        </>
    )
}

export default Api;