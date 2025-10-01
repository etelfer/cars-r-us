const transientState = {
    paintId: 0,
    interiorId: 0,
    techId: 0,
    wheelId: 0
}

export const setPaintChoice = (chosenPaint) => {
        transientState.paintId = Number(chosenPaint)
        console.log(transientState)
}

export const setInteriorChoice = (chosenInterior) => {
        transientState.interiorId = Number(chosenInterior)
                console.log(transientState)
}

export const setTechChoice = (chosenTech) => {
        transientState.techId = Number(chosenTech)
                console.log(transientState)
}

export const setWheelChoice = (chosenWheel) => {
        transientState.wheelId = Number(chosenWheel)
                console.log(transientState)
}