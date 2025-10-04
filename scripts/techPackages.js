import { setTechChoice } from "./transientState.js"

export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/techPackages")
    const techPackages = await response.json()

    document.addEventListener("change", handleTechPackageChoice)

   let techPackageHTML =  `<select id="techPackage">
        <option value="0">Choose a Tech Package...</option>`

        // set the beginning of the HTML so that it will be a select dropdown menu that firstly displays "Choose a Tech Package"
    
    
    const techPackageOptions = techPackages.map(techPackage => {
        return `<option value="${techPackage.id}">${techPackage.package}</option>`
    })

    // created a map function that takes each techPackage and converts it to display as another option in the drop down menu

    techPackageHTML += techPackageOptions.join("")

    // join all of the responses gotten from running our techPackage array through the map function so they all display in the dropdown menu

    techPackageHTML += `</select>`

    return techPackageHTML
}

const handleTechPackageChoice = (event) => {

    if (event.target.id === "techPackage") {
        setTechChoice(event.target.value)
    }
}

document.addEventListener("change", handleTechPackageChoice)