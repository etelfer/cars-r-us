let transientState = {
    paintColorId: 0,
    interiorColorId: 0,
    techPackageId: 0,
    wheelId: 0
}

export const setPaintChoice = (chosenPaint) => {
        transientState.paintColorId = Number(chosenPaint)
        console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
        transientState.interiorColorId = Number(chosenInterior)
                console.log(transientState)
}

export const setTechChoice = (chosenTech) => {
        transientState.techPackageId = Number(chosenTech)
                console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
        transientState.wheelId = Number(chosenWheel)
                console.log(transientState)
}

export const placeOrder = async () => {

        const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }


    const response = await fetch("http://localhost:8088/orders", postOptions)

    const newOrderEvent = new CustomEvent("newOrderCreated")
    document.dispatchEvent(newOrderEvent)
}