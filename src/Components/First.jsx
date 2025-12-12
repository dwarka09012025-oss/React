function First() {
    return (
        <div className="Div-1">
            <table>
                <thead>
                    <tr>
                        <th rowSpan={2}>Student Name</th>
                        <th rowSpan={2}>Roll no.</th>
                        <th colSpan={5}>Subject</th>
                        <th rowSpan={2}>Total</th>
                        <th rowSpan={2}>Percentage</th>
                    </tr>
                    <tr>
                        <th>Maths</th>
                        <th>Science</th>
                        <th>English</th>
                        <th>Gujarati</th>
                        <th>Computer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Parth Budheliya</td>
                        <td>05</td>
                        <td>90</td>
                        <td>85</td>
                        <td>88</td>
                        <td>92</td>
                        <td>95</td>
                        <td>450</td>
                        <td>90.0%</td>
                    </tr>
                    <tr>
                        <td>Tirth Nayani</td>
                        <td>43</td>
                        <td>95</td>
                        <td>81</td>
                        <td>69</td>
                        <td>81</td>
                        <td>78</td>
                        <td>404</td>
                        <td>80.8%</td>
                    </tr>
                    <tr>
                        <td>Meet Thummar</td>
                        <td>71</td>
                        <td>92</td>
                        <td>87</td>
                        <td>71</td>
                        <td>75</td>
                        <td>80</td>
                        <td>405</td>
                        <td>81.0%</td>
                    </tr>
                    <tr>
                        <td>Darshan Bareja</td>
                        <td>08</td>
                        <td>88</td>
                        <td>79</td>
                        <td>85</td>
                        <td>80</td>
                        <td>82</td>
                        <td>414</td>
                        <td>82.8%</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default First;