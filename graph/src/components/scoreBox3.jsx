import * as React from "react";
const Scorebox3 = (props) => (
    <div>
        <span style={{fontSize:"11px"}}>호의적 어조    </span>
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
                d="M16.0391 0H0V17H16.0391H122.77H139C143.419 17 147 13.4183 147 9V8C147 3.58172 143.419 0 139 0H122.77H16.0391Z"
                fill="#372FFF"
            />
        </svg>
    </div>
);
export default Scorebox3;