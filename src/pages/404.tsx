 import { useEffect } from "react"
import { useRouter } from "next/router"

export default function Error():null {
    const router = useRouter();

    useEffect(() => {
    router.push("/courses")
    })

    return null
}