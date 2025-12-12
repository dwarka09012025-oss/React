const Data = (props) => {

    var maths = parseInt(props.maths)
    var science = parseInt(props.science)
    var english = parseInt(props.english)
    var gujrati = parseInt(props.gujrati)
    var Hindi = parseInt(props.hindi)

    const total = maths + science + english + gujrati + Hindi;
    if (maths <= 35 || science <= 35 || english <= 35 || gujrati <= 35 || Hindi <= 35) {
        var per = 0;
    }
    else {
        per = total / 5;
    }

    const min = Math.min(maths, science, english, gujrati, Hindi);
    const max = Math.max(maths, science, english, gujrati, Hindi);

    if (per >= 90 && per <= 100) {
        var grade = 'A+';
    }
    else if (per >= 80 && per < 90) {
        grade = 'A';
    }
    else if (per >= 70 && per < 80) {
        grade = 'B';
    }
    else if (per >= 60 && per < 70) {
        grade = 'C';
    }
    else if (per >= 50 && per < 60) {
        grade = 'D';
    }
    else if (per >= 35 && per < 50) {
        grade = 'E'
    }
    else {
        grade = 'Fail!!';
    }

    if (per === 0) {
        var average = 0;
    }
    else {
        average = per;
    }

    return (
        <>
            <tr>
                <td>{props.roll_no}</td>
                <td>{props.name}</td>
                <td>{props.maths}</td>
                <td>{props.science}</td>
                <td>{props.english}</td>
                <td>{props.gujrati}</td>
                <td>{props.hindi}</td>
                <td>{total}</td>
                <td>{per + "%"}</td>
                <td>{grade}</td>
                <td>{min}</td>
                <td>{max}</td>
                <td>{average}</td>
            </tr>
        </>
    )
}

export default Data;