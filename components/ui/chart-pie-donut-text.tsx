"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    type ChartConfig,
} from "@/components/ui/chart"

export const description = "A donut chart with text"

// const chartData = [
//     { browser: "chrome", visitors: 2725, fill: "var(--color-chrome)" },
//     { browser: "safari", visitors: 1200, fill: "var(--color-safari)" },
//     { browser: "firefox", visitors: 1287, fill: "var(--color-firefox)" },
//     { browser: "edge", visitors: 2173, fill: "var(--color-edge)" },
//     { browser: "other", visitors: 3190, fill: "var(--color-other)" },
// ]

// const chartConfig = {
//     visitors: {
//         label: "Visitors",
//     },
//     chrome: {
//         label: "Chrome",
//         color: "var(--chart-1)",
//     },
//     safari: {
//         label: "Safari",
//         color: "var(--chart-2)",
//     },
//     firefox: {
//         label: "Firefox",
//         color: "var(--chart-3)",
//     },
//     edge: {
//         label: "Edge",
//         color: "var(--chart-4)",
//     },
//     other: {
//         label: "Other",
//         color: "var(--chart-5)",
//     },
// } satisfies ChartConfig




interface ChartDataItem {
    browser: string;
    visitors: number;
    fill: string;
}
interface ChartProps {
    data: ChartDataItem[];
}
const chartConfig = {
    visitors: {
        label: "Visitors",
    },
    philippines: { label: "Philippines", color: "#FFD200" },
    canada: { label: "Canada", color: "#f9a8d4" },
    usa: { label: "USA", color: "#4bbe15" },
    china: { label: "China", color: "#e63946" },
    japan: { label: "Japan", color: "#bc4749" },
    "south-korea": { label: "South Korea", color: "#3a86ff" },
    indonesia: { label: "Indonesia", color: "#fb8500" },
    australia: { label: "Australia", color: "#00b4d8" },
    germany: { label: "Germany", color: "#6a4c93" },
    france: { label: "France", color: "#4361ee" },
    uk: { label: "United Kingdom", color: "#3f37c9" },
    brazil: { label: "Brazil", color: "#52b788" },
    india: { label: "India", color: "#ff9e00" },
    mexico: { label: "Mexico", color: "#2d6a4f" },
    singapore: { label: "Singapore", color: "#ef233c" },
    italy: { label: "Italy", color: "#0096c7" },
    spain: { label: "Spain", color: "#ffb703" },
    vietnam: { label: "Vietnam", color: "#d00000" },
} satisfies ChartConfig

export function ChartPieDonutText({ data }: ChartProps) {
    const totalVisitors = React.useMemo(() => {
        return data.reduce((acc, curr) => acc + curr.visitors, 0)
    }, [data])

    return (
        <Card className="flex-grow bg-white border border-slate-100 rounded-[1rem] p-6 md:p-10 shadow-[0_16px_64px_-12px_rgba(0,0,0,0.2)] flex flex-col justify-center">
            <CardHeader className="items-center pb-0">
                <CardTitle>Pie Chart - callblog website progress</CardTitle>
                <CardDescription>January 2026 - Current</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px] bg-white">

                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />

                        <Pie
                            data={data}
                            dataKey="visitors"
                            nameKey="browser"
                            innerRadius={60}
                            strokeWidth={10}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalVisitors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Visitors
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center text-center gap-2 leading-none font-medium">
                    This chart shows the total views from each country that has visiter our blogs
                </div>
                <div className="text-muted-foreground leading-none">
                    Showing total visitors from start of project to current
                </div>
            </CardFooter>
        </Card>
    )
}
