
const BASE_URL = "http://localhost:5000"

function getDiaries(setDiaries) {
    fetch(BASE_URL)
    .then((diaries) => diaries.json())
    .then((diaries) => setDiaries(diaries))
    .catch((err) => console.log(err))
}


function saveDiary(diary) {
    fetch(`${BASE_URL}/save`, {
        method: "POST",
        body: JSON.stringify(diary),
        headers: {"Content-type": "application/json"}
    })
    .then((diaries) => diaries.json())
    .catch((err) => console.log(err))
} 

function getSpecificDiary(_id, setDairy) {
    fetch(`${BASE_URL}/dairy/${_id}`)
    .then((diaries) => diaries.json())
    .then((data) => setDairy(data))
    .catch((err) => console.log(err))

}

function updateDairy(dairy) {
    fetch(`${BASE_URL}/update`, {
        method: "PATCH",
        body: JSON.stringify(dairy),
        headers: {"Content-type": "application/json"}
    })
    .then((d) => d.json())
    .catch((err) => console.log(err))
}

function getUser(user, next) {
    const username = user.username
    fetch(`${BASE_URL}/user/${username}`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json"}
    })
    .then((data) => data.json())
    .then((data) => {
        try {
            window.localStorage.setItem("token", data.token)
            next(data)}
        catch {
            next(data)
        }
    })
    .catch((err) => console.log(err))
}

function createUser(user, next) {
    fetch(`${BASE_URL}/create`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {"Content-type": "application/json"}
    })
    .then((data) => data.json())
    .then((data) => {
        window.localStorage.setItem("token", data.token)
        next(data)})
    .catch((err) => console.log(err))
}


export { getDiaries, saveDiary, getSpecificDiary, updateDairy, getUser, createUser }