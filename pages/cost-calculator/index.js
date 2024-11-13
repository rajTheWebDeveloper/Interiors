import { useEffect, useState } from "react"
import { Button, Flex, Grid, Input, Select, Stack } from "@mantine/core"

export default function CostCalculator()
{
    const [type,setType]=useState({label:"",value:0})
    const [quantity,setQuantity]=useState("")
    const [totalPrice,setTotalPrice]=useState(0)
    const [showPricing,setShowPricing]=useState(false)
    const [errorInputs,setErrorInputs]=useState({})
    // --------------------------------------------------------
    const [calculated,setCalulated]=useState({label:"",price:0,quantity:0,amount:0,gst:0,total:0})


    const handleClick=()=>
    {
        let errors={}
        if(quantity=="")
        {
            errors.input="Quantity not provided"
            setShowPricing(false)
        }
        if(type.label=="")
        {
            errors.select="Type not selected"
            setShowPricing(false)
        }
        setErrorInputs(errors)
        if(Object.entries(errors).length===0)
        {
            setShowPricing(true)
            setCalulated({label:type.label,price:type.value,quantity:quantity,amount:type.value*quantity,gst:(parseFloat(type.value*quantity*0.18).toFixed(2)),total:(type.value*quantity+(Number(parseFloat(type.value*quantity*0.18).toFixed(2))))})
        }
    }

    useEffect(()=>
    {
        console.log(errorInputs)
    },[errorInputs])
    return <section className="calculator max-w-[1200px] w-[90vw] mx-auto text-black">
        
        <article>
            <h2 className="text-white">False Ceiling Cost Calculator</h2>
        </article>

        <Grid>
                {showPricing && <Grid.Col span={{base:12,md:8}} className="text-white my-6">
                    <h2 className="font-bold text-center my-3 text-lg">{calculated.label}</h2>
                    <Stack>
                        <Flex justify="space-between">
                            <p className="font-semibold">Price/unit:</p>
                            <p className="font-semibold">₹ {calculated.price} /sq.ft</p>
                        </Flex>
                        <Flex justify="space-between">
                            <p className="font-semibold">Quantity:</p>
                            <p className="font-semibold">{calculated.quantity} /sq.ft</p>
                        </Flex>
                        <Flex justify="space-between">
                            <p className="font-semibold">Amount:</p>
                            <p className="font-semibold">₹ {calculated.amount.toFixed(2)}</p>
                        </Flex>
                        <hr/>
                        <Flex justify="space-between">
                            <p className="font-semibold">GST (18%):</p>
                            <p className="font-semibold">₹ {calculated.gst}</p>
                        </Flex>
                        <Flex justify="space-between">
                            <h4 className="font-bold text-lg">Total Amount:</h4>
                            <h4 className="font-bold text-green-700 text-lg">₹ {calculated.total}</h4>
                        </Flex>
                    </Stack>
                </Grid.Col>}
        </Grid>

        <Grid className="mt-8">
                <Grid.Col span={{base:12,md:8}}>
                    <Stack>
                        <select className="outline-none w-[100%] h-[40px] rounded-sm" required onChange={(e)=>setType(JSON.parse(e.target.value))}>
                                <option value={JSON.stringify({label:"",value:0})}>Select Type</option>
                                <option value={JSON.stringify({label:"Grid Ceiling",value:"48"})}>Grid Ceiling</option>
                                <option value={JSON.stringify({label:"Gypsum Ceiling",value:"100"})}>Gypsum Ceiling</option>
                                <option value={JSON.stringify({label:"False Ceiling Bundle",value:"180"})}>False Ceiling Bundle</option>
                            </select>
                            {errorInputs.select && <span className="text-red-500">Please enter type</span>}
                            <Input label="Quantity (Sq.Ft)*" value={quantity} placeholder="Enter total quantity" onChange={(e)=>setQuantity(e.target.value)} />
                            {errorInputs.input && <span className="text-red-500">Please enter quantity</span>}
                            <Button color="#8443B3" onClick={handleClick}>Calculate</Button>
                    </Stack>
                </Grid.Col>
        </Grid>

    </section>
}