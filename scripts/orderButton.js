export const OrderButton = () => {
    document.addEventListener("click", handleOrderSubmission)

        return `<button id='order-button'>Create Custom Order</button>`
}

import { placeOrder } from "./transientState.js"

const handleOrderSubmission = (clickEvent) => {
    if (clickEvent.target.id === "order-button") {
        placeOrder()
            console.log("Button clicked!")
    }
}