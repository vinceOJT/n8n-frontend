import React, { useEffect, useState } from 'react'
import { GetSheetsData } from './readSheets';


function piedata() {
    const [chartData, setChartData] = useState<any[]>([]);

    useEffect(() => {
        async function loadData() {
            const rawRows = await GetSheetsData();

            if (rawRows && rawRows.length > 1) {
                // We skip rawRows[0] if it's the header row
                const formatted = rawRows.slice(1).map((row: any, i: number) => {
                    const countryName = row[5] || "Unknown";
                    const colorKey = countryName.toLowerCase().trim();
                    return {
                        // Mapping your columns
                        browser: countryName,
                        visitors: parseInt(row[3]) || 0,
                        fill: `var(--color-${colorKey.replace(/\s+/g, '-')})` //using regex to replace south korea => sout-korea
                    };
                });
                setChartData(formatted);
            }
        }
        loadData();
    }, []);
    return {
        chartData
    }
}

export default piedata
