'use client';
import React from 'react'
import { getSheetsData } from '@/lib/readSheets'




export default async function ShowDataSheet() {
    const data = await getSheetsData();

    return (
        <div>
            <h2>Data Verification:</h2>
            <pre className="bg-gray-100 p-4 rounded">
                {data ? JSON.stringify(data, null, 2) : "No data received yet"}
            </pre>
        </div>
    )
}





