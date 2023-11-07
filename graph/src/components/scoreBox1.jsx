import * as React from "react";
const Scorebox1 = (props) => (

    <div>
        <span style={{ fontSize: "11px" }}>대화 참여도    </span>
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
                d="M15.0257 0H0V17H15.0257H107.294H120.471C124.889 17 128.471 13.4183 128.471 9V8C128.471 3.58172 124.889 0 120.471 0H107.294H15.0257Z"
                fill="#372FFF"
            />
        </svg>
    </div>
);
export default Scorebox1;