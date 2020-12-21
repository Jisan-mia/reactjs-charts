import React from "react";
import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const data = [
	{ year: "2002", react: 26, vue: 20, angular: 49 },
	{ year: "2004", react: 20, vue: 30, angular: 50 },
	{ year: "2006", react: 30, vue: 20, angular: 50 },
	{ year: "2008", react: 30, vue: 30, angular: 40 },
	{ year: "2010", react: 40, vue: 30, angular: 30 },
	{ year: "2012", react: 60, vue: 15, angular: 35 },
	{ year: "2014", react: 65, vue: 25, angular: 20 },
];
const TryLineChart = () => {
	return (
		<div>
			<h2>Reactjs, Vue and Angular popularity</h2>
			<LineChart
				width={600}
				height={400}
				data={data}
				margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			>
				<XAxis dataKey="year" />
				<YAxis unit="%" type="number" domain={[0, 100]} />
				<CartesianGrid strokeDasharray="3 3" />
				<Tooltip />
				<Legend />
				<Line
					unit="%"
					type="monotone"
					dataKey="vue"
					stroke="#8884d8"
					activeDot={{ r: 8 }}
				/>
				<Line type="monotone" dataKey="react" unit="%" stroke="#82ca9d" />
				<Line
					type="monotone"
					dataKey="angular"
					unit="%"
					stroke="rgba(255,0,0,0.7)"
				/>
			</LineChart>
		</div>
	);
};

export default TryLineChart;
