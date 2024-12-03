"use client"

import axios from "axios"
import { useState } from "react"

import { Button } from "@/components/ui/button"
//import { formatPrice } from "@/lib/format"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";

interface courseEnrollButtonProps{
    price: number,
    courseId: string
}

export const CourseEnrollButton = ({courseId,price}: courseEnrollButtonProps) => {

    const [isLoading,setIsLoading] = useState(false);
    const router = useRouter();
    

    const onClick = async () => {
        try {
            setIsLoading(true)

            //console.log(`/api/courses/${courseId}/checkout`);

            if (confirm("Are you sure?") == true) {
                const response = await axios.post(`/api/courses/${courseId}/checkout`)
                console.log("checkout response: ", response);
                console.log(price);
                router.refresh();
            } else {
                let x = "You pressed Cancel.";
                console.log(x);
            }


            //console.log("response.data.url", response.data.url);
            
            //window.location.assign(response.data.url)
            
        } catch (error: any) {
            console.log("course enroll btn", error.message)
            toast.error("Something went wrong!")
        }finally{
            setIsLoading(false)
        }
    }

    return (
        <Button onClick={onClick} disabled={isLoading} className="w-full md:w-auto " size="sm">
            {/* Enroll for {formatPrice(price)} */}
            Enroll
        </Button>   )
}