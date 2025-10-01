export const PaintOptions = async () => {
    const response = await fetch("http://localhost:8088/paintColors")
    const paintColors = await response.json()

        document.addEventListener("change", handlePaintColorChoice)

    const paintColorsHTML = paintColors.map((paintColor => {
        return `<input type="radio" name="paintColor" value=${paintColor.id} /> ${paintColor.color}`
    })
)
    return paintColorsHTML.join("")
}

const handlePaintColorChoice = (event) => {

    if (event.target.name === "paintColor") {
        setStyleChoice(event.target.value)
    }
}