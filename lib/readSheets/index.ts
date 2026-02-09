'use server';

import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';


export const GetSheetsData = async (): Promise<any> => {
    try {
        const auth = new GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_SERVICE_ACC_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],

        });

        const sheets = google.sheets({ version: "v4", auth });
        const range = "TOTAL DATA!A:Z"; // Match your sheet name


        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.GOOGLE_SHEET_ID,
            range
        });

        const rows = response.data.values;
        if (!rows || rows.length === 0) {
            return [];
        }
        console.log("Sheet Data:", rows); // This prints the raw array of arrays to your terminal


        return rows; // Don't forget to return the data!
    } catch (error) {
        console.error("Error fetching sheets data", error);
        return null;
    }

}









