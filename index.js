let homeScore = document.getElementById("home-score")
let home_score = 0

let guestScore = document.getElementById("guest-score")
let guest_score = 0

function home_p1() {
    home_score += 1
    homeScore.textContent = home_score
}

function home_p2() {
    home_score += 2
    homeScore.textContent = home_score
}

function home_p3() {
    home_score += 3
    homeScore.textContent = home_score
}


function guest_p1() {
    guest_score += 1
    guestScore.textContent = guest_score
}

function guest_p2() {
    guest_score += 2
    guestScore.textContent = guest_score
}

function guest_p3() {
    guest_score += 3
    guestScore.textContent = guest_score
}
