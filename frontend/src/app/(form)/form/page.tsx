'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    console.log("Form Data:", data);
    setSubmitted(true);


  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <Card className="shadow-lg rounded-xl">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-xl font-bold">Report a Forest Fire or Environmental Issue</h2>
          {submitted ? (
            <p className="text-green-600">Thank you for your report. Authorities will review the information.</p>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Input placeholder="Type of Issue" {...register("issueType", { required: true })} />
                {errors.issueType && <p className="text-red-500 text-sm">Issue type is required</p>}
              </div>
              <div>
                <Textarea placeholder="Description" {...register("description", { required: true })} />
                {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
              </div>
              <Input placeholder="Suspected Cause" {...register("cause")} />
              <Button onClick={() => router.push('/login')} type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg">Submit Report</Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
