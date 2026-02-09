// app/chatsystem/page.tsx
import React from 'react';
import { getSheetsData } from '@/lib/readSheets';

export default async function ShowDataSheet() {
    const data = await getSheetsData();

    return (
        <div className="p-4 border rounded-xl bg-white shadow-sm mt-4">
            <h2 className="text-lg font-bold text-slate-900 mb-2">Live Sheet Data:</h2>
            <pre className="bg-slate-900 text-green-400 p-4 rounded-lg overflow-auto max-h-60 text-xs">
                {data ? JSON.stringify(data, null, 2) : "Fetching data..."}
            </pre>
        </div>
    );
}


