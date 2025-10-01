import { InteriorOptions } from './interiorColors.js'
import { OrderButton } from './orderButton.js'
import { Orders } from './placedOrders.js'
import { PaintOptions } from './paintColors.js'
import { TechOptions } from './techPackages.js'
import { WheelOptions } from './wheels.js'

const container = document.querySelector("#container")

const render = async () => {
    const interiorOptionsHTML = await InteriorOptions()
    const paintOptionsHTML = await PaintOptions()
    const techOptionsHTML = await TechOptions()
    const wheelOptionsHTML = await WheelOptions()
    const buttonHTML = OrderButton()
    const ordersHTMl = await Orders()


    const composedHTML = `
        <h1>Cars R Us</h1>

        <article class="choices">
            <section class="choices__interiors options">
                <h2>Interiors</h2>
                ${interiorOptionsHTML}
            </section>

            <section class="choices__paints options">
                <h2>Paints</h2>
                ${paintOptionsHTML}
            </section>

            <section class="choices__techs options">
                <h2>Techs</h2>
                ${techOptionsHTML}
            </section>

            <section class="choices__wheels options">
                <h2>Techs</h2>
                ${wheelOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${buttonHTML}
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${ordersHTMl}
        </article>
    `

    container.innerHTML = composedHTML
}
render ()