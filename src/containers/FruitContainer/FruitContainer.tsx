import { SelectItems } from "@/components/common/SelectItems"
import { useState } from "react"

const groupings = ["None", "Family", "Genus", "Order"]

export const FruitContainer = () => {
    const [selectedGrouping, setSelectedGrouping] = useState<string | undefined>()
    return <div className="w-full text-center">
        <h1>Select Fruit</h1>
        <SelectItems items={groupings} selectedItem={ selectedGrouping} setSelectedItem={setSelectedGrouping} placeholder="Group By"/>
    </div>
}