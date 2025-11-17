<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>rcp-game</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="background">
        <div class="heding">
            <p id="head-para">ROCK PAPER SCISSOR GAME </p>
        </div>
        <div class="choses">
            <div id="rock" class="chose"><img src="rock.png" alt="" ></div>
            <div id="paper" class="chose"><img src="paper.jpeg" alt="" srcset=""></div>
            <div id="scissor" class="chose"><img src="scissor.png" alt="" srcset=""></div>
        </div>
        <div class="score-bar">
            <div class="my-scor">
                <p id="self">0</p>
                <p>YOU</p>
            </div>
            <div class="com-scor">
                <p id="comp">0</p>
                <p>COMPUTER</p>
            </div>
        </div>
        <div class="info-bar">
            <p id="info">Play the game!</p>
        </div>
    </div>
    <script src="rpsgame.js"></script>
</body>
</html>
