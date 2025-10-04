export const Orders = async () => {
    const fetchResponse = await fetch ("http://localhost:8088/orders?_expand=paintColor&_expand=interiorColor&_expand=wheel&_expand=techPackage")
    const orders = await fetchResponse.json()
console.log(orders)
    let ordersHTML = orders.map(
        (order) => {
            let orderPrice = order.paintColor.price + order.interiorColor.price + order.wheel.price + order.techPackage.price
            orderPrice = orderPrice.toLocaleString("en-US", {style: "currency", currency: "USD"})
            return `<div>Order #${order.id} Cost ${orderPrice}</div>`
        }
    ).join("")

    return ordersHTML
}