import { setTechChoice } from "./transientState.js"

export const TechOptions = async () => {
    const response = await fetch("http://localhost:8088/techPackages")
    const techPackages = await response.json()

    const techPackagesHTML = techPackages.map((techPackage => {
        return `<input type="radio" name="techPackage" value=${techPackage.id} /> ${techPackage.package}`
    })
)
    return techPackagesHTML.join("")
}

const handleTechPackageChoice = (event) => {

    if (event.target.name === "techPackage") {
        setTechChoice(event.target.value)
    }
}

document.addEventListener("change", handleTechPackageChoice)