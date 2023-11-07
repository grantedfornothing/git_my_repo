import * as React from "react";
const Scorebox2 = (props) => (
    <div>
        <span style={{ fontSize: "11px" }}>비속어 빈도    </span>

        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={168}
            height={21}
            viewBox="0 0 168 21"
            fill="none"
            {...props}
        >
            <line x1={0.5} y1={15} x2={0.5} y2={21} stroke="#7D7D7D" />
            <line x1={41.4414} y1={15} x2={41.4414} y2={21} stroke="#7D7D7D" />
            <line x1={83.7949} y1={15} x2={83.7949} y2={21} stroke="#7D7D7D" />
            <line x1={126.146} y1={15} x2={126.146} y2={21} stroke="#7D7D7D" />
            <line x1={167.088} y1={15} x2={167.088} y2={21} stroke="#7D7D7D" />
            <rect width={168} height={17} fill="#D9D9D9" />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1 0H0V17H1V16.8754C1.17758 16.9555 1.3746 17 1.58203 17C2.36515 17 3 16.3652 3 15.582V1.41797C3 0.634846 2.36515 0 1.58203 0C1.3746 0 1.17758 0.0445389 1 0.124575V0Z"
                fill="#372FFF"
            />
        </svg>
    </div>
);
export default Scorebox2;
