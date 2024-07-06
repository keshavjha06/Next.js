import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutepage() {
    console.log("server route rendered");

    const result = serverSideFunction()
    return (
        <>
            <h1>ServerRoutePage</h1>
            <p>{result}</p>
        </>
    );
}