'use client';

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

/* Validation Schema */
const formSchema = z.object({
    roughIdea: z.string().min(5, "Idea must be at least 5 characters"),
    targetAudience: z.string().min(2, "Please specify an audience"),
}); // Checks if the user is follwing these set of rules for each input

function submitlogic() {
    const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>("");

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema), // Connects Zod to our form as validation
        defaultValues: {
            roughIdea: "",
            targetAudience: "",
        },
    });

    /* Submit Handler */
    async function onSubmit(values: z.infer<typeof formSchema>) { // Lifecycle of submission
        try {
            setIsGenerating(true);
            setGeneratedUrl(null);
            setShowError(false);
            setErrorMessage("");

            const response = await fetch(process.env.N8N_PATH!, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                const message = errorData?.message || `HTTP ${response.status} - ${response.statusText}`;
                throw new Error(message);
            }

            const data = await response.json();

            setGeneratedUrl(data.url);
            form.reset();
        } catch (error: any) {
            console.error(error);
            setErrorMessage(error.message || "An unexpected error occurred");
            setShowError(true);
        } finally {
            setIsGenerating(false);
        }
    }
    return {
        form,
        onSubmit,
        generatedUrl,
        isGenerating,
        showError,
        errorMessage,
        setShowError,
        setGeneratedUrl
    }
}

export default submitlogic



