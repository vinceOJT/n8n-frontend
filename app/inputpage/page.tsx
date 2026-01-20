"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

// Define validation rules
const formSchema = z.object({
  roughIdea: z.string().min(5, "Idea must be at least 5 characters"),
  targetAudience: z.string().min(2, "Please specify an audience"),
})

// Use 'export default' so Next.js can render the page
export default function InputPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      roughIdea: "",
      targetAudience: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Sending to n8n:", values)
    
    // Replace with your actual n8n webhook URL
    const response = await fetch('/api/v1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })

    if (response.ok) {
      alert("Success! Idea sent.")
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md p-8 border rounded-xl shadow-lg bg-card">
        <h1 className="text-2xl font-bold mb-6 text-center">Submit Your Idea</h1>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="roughIdea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rough Idea</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="What is your concept?" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="targetAudience"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Target Audience</FormLabel>
                  <FormControl>
                    <Input placeholder="Who is this for?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Send to n8n
            </Button>
          </form>
        </Form>
      </div>
    </main>
  )
}