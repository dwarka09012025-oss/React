import Data from './Data'

const Sutdent = () => {
    return (
        <>
            <div className='Div-1'>
                <table>
                    <thead>
                        <tr className='TR'>
                            <th colSpan={13}>RESULT</th>
                        </tr>
                        <tr>
                            <th rowSpan={2}>Roll no.</th>
                            <th rowSpan={2}>Student Name</th>
                            <th colSpan={5}>Subject</th>
                            <th rowSpan={2}>Total</th>
                            <th rowSpan={2}>Percentage</th>
                            <th rowSpan={2}>Grade</th>
                            <th rowSpan={2}>Minimum</th>
                            <th rowSpan={2}>Maximum</th>
                            <th rowSpan={2}>Average</th>
                        </tr>
                        <tr>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>English</th>
                            <th>Gujarati</th>
                            <th>Hindi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <Data roll_no="05" name="Parth Budheliya" maths="98" science="78" english="89" gujrati="71" hindi="68"/>
                        <Data roll_no="08" name="Darshan Bareja" maths="85" science="77" english="85" gujrati="62" hindi="81"/>
                        <Data roll_no="43" name="Tirth Nayani" maths="82" science="87" english="91" gujrati="69" hindi="77"/>
                        <Data roll_no="73" name="Meet Thummar" maths="79" science="88" english="93" gujrati="61" hindi="75"/>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Sutdent;