function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 2,
                    blocks: 2,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 3,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 14,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 12,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 28,
                    shoe: 14,
                    points: 2,
                    rebounds: 3,
                    assists: 2,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 33,
                    shoe: 15,
                    points: 33,
                    rebounds: 6,
                    assists: 12,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 34,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 2,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
}

console.log("--- gameObject() output ---")
console.log(gameObject())

function getPlayerStatsByName(playerName) {
    const game = gameObject()
    const teams = [game.home, game.away]

    for (const team of teams) {
        if (team.players[playerName]) {
            return team.players[playerName]
        }
    }
    return undefined
}

function getAllPlayers() {
    const game = gameObject()
    const allPlayers = []

    for (const playerName in game.home.players) {
        allPlayers.push({
            name: playerName,
            stats: game.home.players(playerName), 
            teamName: game.home.teamName
        })
    }

    for (const playerName in game.away.players) {
        allPlayers.push({
            name: playerName,
            stats: game.away.players(playerName),
            teamName: game.away.teamName
        })
    }
    return allPlayers
}

function numPointsScored(playerName) {
    const playerStats = getPlayerStatsByName(playerName)
    return playerStats ? playerStats.points : undefined
}

function shoeSize(playerName) {
    const playerStats = getPlayerStatsByName(playerName)
    return playerStats ? playerStats.shoe : undefined
}

function teamColors(teamName) {
    const game = gameObject()
    if (game.home.teamName === teamName) {
        return game.home.colors
    } else if (game.away.teamName === teamName) {
        return game.away.colors
    }
    return undefined
}

function teamName() {
    const game = gameObject()
    return [game.home.teamName, game.away.teamName]
}

function playerNumbers() {
    const game = gameObject()
    let playersObject

    if (game.home.teamName === teamName) {
        playersObject = game.home.players
    } else if (game.away.teamName === teamName) {
        playersObject = game.away.players
    } else {
        return undefined
    }

    return Object.values(playersObject).map(player => player.number)
}

function playerStats(playerName) {
    return getPlayerStatsByName(playerName)
}

function bigShoeRebounds() {
    const allPlayers = getAllPlayers()
    if (allPlayers.length === 0) {
        return undefined
    }

    let playerWithLargestShoe = allPlayers[0]

    for (let i = 1; i < allPlayers.length; i++) {
        if (allPlayers[i].stats.shoe > playerWithLargestShoe.stats.shoe) {
            playerWithLargestShoe = allPlayers[i]
        }
    }

    return playerWithLargestShoe.stats.rebounds
}

function mostPointsScored() {
    const allPlayers = getAllPlayers()
    if (allPlayers.length === 0) {
        return undefined
    }

    let playerWithMaxPoints = allPlayers[0]

    for (let i = 1; i < allPlayers.length; i++) {
        if (allPlayers[i].stats.points > playerWithMaxPoints.stats.points) {
            playerWithMaxPoints = allPlayers[i]
        }
    }
    return playerWithMaxPoints.name
}

function winningTeam() {
    const game = gameObject()
    let homeTeamTotalPoints = 0
    let awayTeamTotalPoints = 0

    for (const playerName in game.home.players) {
        homeTeamTotalPoints += game.home.players[playerName].points
    }

    for (const playerName in game.away.players) {
        awayTeamTotalPoints += game.away.players[playerName].points
    }

    if (homeTeamTotalPoints > awayTeamTotalPoints) {
        return game.home.teamName
    } else if (awayTeamTotalPoints > homeTeamTotalPoints) {
        return game.away.teamName
    } else {
        return "It's  a tie!"
    }
}

function playerWithLongestName() {
    const allPlayers = getAllPlayers()
    if (allPlayers.length === 0) {
        return undefined
    }

    let longestNamePlayer = allPlayers[0]

    for (let i = 1; i < allPlayers.length; i++) {
        if (allPlayers[i].name.length > longestNamePlayer.name.length) {
            longestNamePlayer = allPlayers[i]
        }
    }
    return longestNamePlayer.name
}

function doesLongNameStealATon() {
    const longestName =playerWithLongestName()
    if (!longestName) {
        return false
    }

    const longestNamePlayerStats = getPlayerStatsByName(longestName)
    if (!longestNamePlayerStats) {
        return false
    }

    const allPlayers = getAllPlayers()
    if (allPlayers.length === 0) {
        return false
    }

    let maxSteals = -1
    let playerWithMaxSteals = null

    for (const player of allPlayers) {
        if (player.stats.steals > maxSteals) {
            maxSteals = player.stats.steals
            playerWithMaxSteals = player.name
        }
    }

    const playersWithMaxSteals = allPlayers.filter(player => player.stats.steals === maxSteals)
    const longestNamePlayerHasMaxSteals = playerWithMaxSteals.some(player => player.name === longestName)

    return longestNamePlayerHasMaxSteals
}

console.log("\n--- Function Building Tests ---")
console.log("Points scored by Alan Anderson:", numPointsScored("Alan Anderson"))
console.log("Shoe size of Jeff Adrien:", shoeSize("Jeff Adrien"))
console.log("Colors of Brooklyn Nets:", teamColors("Brooklyn Nets"))
console.log("All team names:", teamNames())
console.log("Jersey numbers for Charlotte Hornets:", playerNumbers("Charlotte Hornets"))
console.log("Stats for Brook Lopez:", playerStats("Brook Lopez"))
console.log("Rebounds for player with biggest shoe:", bigShoeRebounds())

console.log("\n--- Bonus Questions Tests ---")
console.log("Player with most points:", mostPointsScored())
console.log("Winning Team:", winningTeam())

console.log("Player with longest name:", playerWithLongestName())

console.log("\n--- Super Bonus Test ---")
console.log("Does player with longest name steal a ton?", doesLongNameStealATon())
