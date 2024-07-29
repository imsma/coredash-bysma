import { ResponsiveLine } from "@nivo/line";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export default function LineChart() {
  const data = [
    {
      id: "japan",
      color: "hsl(197, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 83,
        },
        {
          x: "helicopter",
          y: 95,
        },
        {
          x: "boat",
          y: 67,
        },
        {
          x: "train",
          y: 295,
        },
        {
          x: "subway",
          y: 74,
        },
        {
          x: "bus",
          y: 280,
        },
        {
          x: "car",
          y: 285,
        },
        {
          x: "moto",
          y: 293,
        },
        {
          x: "bicycle",
          y: 21,
        },
        {
          x: "horse",
          y: 143,
        },
        {
          x: "skateboard",
          y: 169,
        },
        {
          x: "others",
          y: 167,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(31, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 237,
        },
        {
          x: "helicopter",
          y: 59,
        },
        {
          x: "boat",
          y: 182,
        },
        {
          x: "train",
          y: 278,
        },
        {
          x: "subway",
          y: 133,
        },
        {
          x: "bus",
          y: 185,
        },
        {
          x: "car",
          y: 183,
        },
        {
          x: "moto",
          y: 154,
        },
        {
          x: "bicycle",
          y: 244,
        },
        {
          x: "horse",
          y: 113,
        },
        {
          x: "skateboard",
          y: 218,
        },
        {
          x: "others",
          y: 132,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(183, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 239,
        },
        {
          x: "helicopter",
          y: 38,
        },
        {
          x: "boat",
          y: 67,
        },
        {
          x: "train",
          y: 0,
        },
        {
          x: "subway",
          y: 73,
        },
        {
          x: "bus",
          y: 9,
        },
        {
          x: "car",
          y: 127,
        },
        {
          x: "moto",
          y: 23,
        },
        {
          x: "bicycle",
          y: 273,
        },
        {
          x: "horse",
          y: 92,
        },
        {
          x: "skateboard",
          y: 152,
        },
        {
          x: "others",
          y: 27,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(93, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 164,
        },
        {
          x: "helicopter",
          y: 73,
        },
        {
          x: "boat",
          y: 82,
        },
        {
          x: "train",
          y: 7,
        },
        {
          x: "subway",
          y: 270,
        },
        {
          x: "bus",
          y: 78,
        },
        {
          x: "car",
          y: 277,
        },
        {
          x: "moto",
          y: 32,
        },
        {
          x: "bicycle",
          y: 96,
        },
        {
          x: "horse",
          y: 65,
        },
        {
          x: "skateboard",
          y: 56,
        },
        {
          x: "others",
          y: 80,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(98, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 18,
        },
        {
          x: "helicopter",
          y: 178,
        },
        {
          x: "boat",
          y: 185,
        },
        {
          x: "train",
          y: 246,
        },
        {
          x: "subway",
          y: 41,
        },
        {
          x: "bus",
          y: 276,
        },
        {
          x: "car",
          y: 114,
        },
        {
          x: "moto",
          y: 124,
        },
        {
          x: "bicycle",
          y: 197,
        },
        {
          x: "horse",
          y: 74,
        },
        {
          x: "skateboard",
          y: 251,
        },
        {
          x: "others",
          y: 233,
        },
      ],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Line Chart</CardTitle>
        <CardDescription>This is a line chart</CardDescription>
      </CardHeader>
      <CardContent className="w-full h-[300px]">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
        />
      </CardContent>
    </Card>
  );
}
