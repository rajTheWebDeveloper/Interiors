import { Button, Stack } from "@mantine/core";
import Link from "next/link";

export default function CostBanner()
{
    return <section className="max-w-[1200px] w-[90vw] mx-auto text-center text-white h-auto my-10">
       <Stack gap={30}>
            <h2 className="text-3xl font-bold">False Ceiling Price From ₹48/sq.ft</h2>
            <Link href="/cost-calculator"><Button color="#8443B3" className="max-w-[300px] mx-auto">Fall Ceiling Cost Calculator</Button></Link>
            <p>Wan to know the total false ceiling cost estimation for a gypsum false ceiling with lighting and painting?</p>
            <p>Use our <span className="text-[#8443B3]"><Link href="/cost-calculator">false ceiling cost calculator</Link></span> to check the total false ceiling cost estimations for the false ceiling with lighting and painting!</p>
       </Stack>
    </section>
}