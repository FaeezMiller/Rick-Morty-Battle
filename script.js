let fighters = [];

// Add the image URLs to the fighters array
fighters.push('https://i.postimg.cc/wTthd3L6/Screenshot-2023-07-24-104930-removebg-preview.png');
fighters.push('https://i.postimg.cc/HkyRjYDm/Screenshot-2023-07-24-100909-removebg-preview.png');
fighters.push('https://i.postimg.cc/C1Qsj8kQ/Screenshot-2023-07-24-101207-removebg-preview.png');
fighters.push('https://i.postimg.cc/zXJTVpsG/Screenshot-2023-07-24-101410-removebg-preview.png');
fighters.push('https://i.postimg.cc/3RmbJ9PZ/Screenshot-2023-07-24-101454-removebg-preview.png');
fighters.push('https://i.postimg.cc/nhX2h0mQ/Screenshot-2023-07-24-101520-removebg-preview.png');
fighters.push('https://i.postimg.cc/mZVy30NH/Screenshot-2023-07-24-101844-removebg-preview.png');
fighters.push('https://i.postimg.cc/50b8L3Xg/Screenshot-2023-07-24-101916-removebg-preview.png');
fighters.push('https://i.postimg.cc/8P2JLH3v/Screenshot-2023-07-24-102010-removebg-preview.png');
fighters.push('https://i.postimg.cc/2yBvfXMz/Screenshot-2023-07-24-102052-removebg-preview.png');
fighters.push('https://i.postimg.cc/pXbkLDZ0/Screenshot-2023-07-24-102548-removebg-preview.png');
fighters.push('https://i.postimg.cc/RFQfCbT9/Screenshot-2023-07-24-103922-removebg-preview-1.png');
fighters.push('https://i.postimg.cc/R0mwrBcG/Screenshot-2023-07-24-104017-removebg-preview.png');
fighters.push('https://i.postimg.cc/sXDSX4Hh/Screenshot-2023-07-24-104135-removebg-preview.png');
fighters.push('https://i.postimg.cc/HxhJLD7q/Screenshot-2023-07-24-104248-removebg-preview.png');
fighters.push('https://i.postimg.cc/N0G79t5F/Screenshot-2023-07-24-104340-removebg-preview.png');
fighters.push('https://i.postimg.cc/5ttL9mRF/Screenshot-2023-07-24-104452-removebg-preview.png');
fighters.push('https://i.postimg.cc/dtxKSQKP/Screenshot-2023-07-24-104619-removebg-preview.png');
fighters.push('https://i.postimg.cc/59HcQdCs/Screenshot-2023-07-24-104716-removebg-preview.png');
fighters.push('https://i.postimg.cc/mDc3qtPt/Screenshot-2023-07-24-104855-removebg-preview-5.png');

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

fightButton.addEventListener("click", function() {
    let randomIndexOne = Math.floor(Math.random() * fighters.length);
    let randomIndexTwo = Math.floor(Math.random() * fighters.length);

    // Create image elements for the fighters
    let fighterOneImg = document.createElement("img");
    fighterOneImg.src = fighters[randomIndexOne];
    let fighterTwoImg = document.createElement("img");
    fighterTwoImg.src = fighters[randomIndexTwo];

    // Clear the stage element and append the images
    stageEl.innerHTML = "";
    stageEl.appendChild(fighterOneImg);
    stageEl.appendChild(document.createTextNode(" vs "));
    stageEl.appendChild(fighterTwoImg);
});



