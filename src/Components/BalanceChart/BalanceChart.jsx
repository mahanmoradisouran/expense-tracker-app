import { LineChart, Line, Tooltip, YAxis, XAxis } from "recharts";

const BalanceChart = () => {

  const width = window.innerWidth;

  const data = [
    { name: "Sun", bal: 400, inc: 2400, exp: 2400 },
    { name: "Mon", bal: -100, inc: 2400, exp: 2400 },
    { name: "Teu", bal: 200, inc: 2400, exp: 2400 },
    { name: "Wen", bal: 350, inc: 2400, exp: 2400 },
    { name: "The", bal: -100, inc: 2400, exp: 2400 },
    { name: "Fri", bal: -9, inc: 2400, exp: 2400 },
    { name: "Sat", bal: 50, inc: 2400, exp: 2400 },
  ];

  return (
    <>
      <LineChart
        width={width }
        height={300}
        data={data}
        margin={{ top: 0, left: -40, right: 20, bottom: 0 }}
      >
        <Line type="monotone" dataKey="bal" stroke="#7F3DFF" strokeWidth={5} />
        <XAxis dataKey="name" visibility="hidden" />
        <YAxis visibility="hidden" />
        <Tooltip />
      </LineChart>
    </>
  );
};

export default BalanceChart;
