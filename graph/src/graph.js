import React from 'react';
import styled from "styled-components";
import { LineChart } from '@mui/x-charts';
import Scorebox1 from './components/scoreBox1';
import Scorebox2 from './components/scoreBox2';
import Scorebox3 from './components/scoreBox3'

export default function Graph() {

  const dataset1 = [
    {
      title: "대화 참여도",
      score: 80
    },
    {
      title: "비속어 빈도",
      score: 10
    },
    {
      title: "호의적 어조",
      score: 80
    },
  ]


  const dataset2 = [
    {
      date: "2022.07.30",
      score: 70
    },
    {
      date: "2022.08.10",
      score: 55
    },
    {
      date: "2022.09.20",
      score: 62
    },
    {
      date: "2022.10.15",
      score: 86
    },
    {
      date: "2022.11.21",
      score: 63
    },
    {
      date: "2022.12.16",
      score: 59
    },
    {
      date: "2023.01.18",
      score: 73
    },
  ]

  return (
    <div style={BlockContainer2}>
      <div>
        <div style={BlockLabel}>감정 지표</div>
        <div style={Block2}>
          <div style={Block3}>
            <div style={Block4}>
              <div style={{ color: "#000", fontSize: "13px", fontWeight: "bold", height:"5px" }}>이번 상담 지수는..</div>
              <span>
                <span style={{ fontSize: "81px", fontWeight: "bold", height:"69px" }}>87</span>
                <span style={{ fontSize: "31px", paddingLeft: "1px" }}>점</span>
              </span>
              <Button2>양 호</Button2>
            </div>
            <div style={Block5}>
              <Scorebox1 />
              <Scorebox2 />
              <Scorebox3 />
            </div>
          </div>
          <div style={Block6}></div>
        </div>
      </div>
      <div>
        <div style={BlockLabel}>상담 만족도 그래프</div>
        <div style={Block2}><LineChart
          dataset={dataset2}
          xAxis={[{
            scaleType: 'band',
            dataKey: "date",
            valueFormatter: (v) => v.toString(),
          }]}
          series={[
            { curve: "linear", dataKey: "score", color: "#372FFF" }]}
          yAxis={[{ min: 20, max: 100 }]}
        />
        </div>
      </div>
    </div>
  )
}

const Block2 = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",
  width: 475,
  height: 516,
  borderRadius: 8,
  marginBottom: 39,
  padding: 20,
}
const Block3 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "start",
  alignItems: "flex-start",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 455,
  height: 180,
}
const Block4 = {
  display: "inline-block",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 130,
  height: 150,
  padding: "0% 5% 5% 5%",
}

const Block5 = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 260,
  height: 150,
  
  borderRadius: 8,
}
const Block6 = {
  display: "block",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.25)",

  width: 409,
  height: 277,
  borderRadius: 8,
  marginBottom: 39,
  padding: 20,
}

const BlockContainer2 = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly",
  alignItems: "flex-end",
  backgroundColor: "white",
  border: "1px solid var(--neutral-20)",
  width: 1039,
  height: 667,
  borderBottomLeftRadius: 8,
  borderBottomRightRadius: 8,
  marginBottom: 108,
}
const BlockLabel = {
  fontWeight: "bold",
  fontSize: "var(--body-3)",
  marginBottom: 11
}
const Button2 = styled.button`
  display: flex;
  width: 121px;
  height: 47px;
  padding: 21.557px 19.597px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 9.799px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 0.49px solid var(--primary-100, #372fff);
  background: var(--primary-100, #372fff);
  color: var(--neutral-white, #fff);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 17.637px; /* 128.571% */
  letter-spacing: -0.412px;
`;