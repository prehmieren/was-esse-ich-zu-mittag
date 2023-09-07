const btn = document.getElementById('random-btn')
async function getActivity() {
    const thaiName = document.getElementById('thai-name')
    const germanName = document.getElementById('german-name')
    const description = document.getElementById('description')
    const icon = document.getElementById('icon')
    const randomIndex = Math.floor(Math.random() * 39)

    const request = await fetch('https://raw.githubusercontent.com/prehmieren/was-esse-ich-zu-mittag/main/mittagFood.json')
    const data = await request.json()
    const randomFood = (data[randomIndex]);
    thaiName.innerText = randomFood.thai_name;
    germanName.innerText = randomFood.german_name
    description.innerText = randomFood.description
    if (randomIndex <= 8 || randomIndex == 33 || randomIndex == 36) {
        icon.innerText = "🐄"
    } else if (randomIndex >= 18 && randomIndex <= 26 || randomIndex == 35 || randomIndex == 38) {
        icon.innerText = "🐔"
    } else if (randomIndex >= 9 && randomIndex <= 17 || randomIndex == 34 || randomIndex == 37) {
        icon.innerText = "🐖"
    } else if (randomIndex == 30 || randomIndex == 31 || randomIndex == 32) {
        icon.innerText = "🥬"
    } else {
        icon.innerText = "🐟"
    }
}

btn.addEventListener('click', getActivity)
