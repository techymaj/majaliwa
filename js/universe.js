const space = document.querySelector(".space");
const reality = document.querySelector(".reality");
const power = document.querySelector(".power");
const soul = document.querySelector(".soul");
const mind = document.querySelector(".mind");
const time = document.querySelector(".time");
const stoneImages = document.querySelectorAll(".stone img");
const spaceImage = document.querySelector(".space img");
const realityImage = document.querySelector(".reality img");
const powerImage = document.querySelector(".power img");
const soulImage = document.querySelector(".soul img");
const mindImage = document.querySelector(".mind img");
const timeImage = document.querySelector(".time img");
const developer = document.querySelector(".developer");

const arrayOfStones = Array.from(stoneImages);

const boomButton = document.querySelector("button");

boomButton.addEventListener('click', () => {
    setTimeout(() => {
        const radius = 38; // rem units
        const size = 5.5; // rem

        const stones = [time, power, space, soul, reality, mind,];

        // Set circle positions (every 60° apart)
        stones.forEach((stone, i) => {
            const angle = (i * 360 / stones.length) * (Math.PI / 180); // convert to radians
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            console.log("Stoned", stone)

            if (stone.classList.contains("time")) {
                stone.style.width = `${7}rem`;
            } else {
                stone.style.width = `${size}rem`;
            }

            stone.style.transform = `translate(${x}rem, ${y}rem)`;
            stone.style.transition = `transform 0.3s ease`;

            arrayOfStones.forEach(stone => {
                stone.style.animation = "spin-stone 3s infinite linear";
            });
        });

    }, 5000)

    setTimeout(() => {
        arrayOfStones.forEach(stone => {
            console.log("stone", stone)
            stone.style.boxShadow = `${0} ${0} ${3.6}rem ${stone.dataset.color}`;
            stone.style.border = `${2}px solid ${stone.dataset.color}`;
            stone.style.borderRadius = `${16}px`;
        });
    }, 14000)

    setTimeout(() => {
        arrayOfStones.forEach(stone => {
            stone.style.boxShadow = `initial`;
            stone.style.border = `initial`;
            stone.style.borderRadius = `initial`;
        });
    }, 18000)

    setTimeout(() => {
        spaceImage.style.boxShadow = `${0} ${0} ${3.6}rem blue`;
        spaceImage.style.border = `${2}px solid blue`;
        spaceImage.style.borderRadius = `${16}px`;
        spaceImage.style.width = `${6}rem`;
    }, 20000)

    setTimeout(() => {
        spaceImage.style.boxShadow = `initial`;
        spaceImage.style.border = `initial`;
        spaceImage.style.borderRadius = `initial`;
        spaceImage.style.width = `${5.5}rem`;

        realityImage.style.boxShadow = `${0} ${0} ${3.6}rem crimson`;
        realityImage.style.border = `${2}px solid crimson`;
        realityImage.style.borderRadius = `${16}px`;
        realityImage.style.width = `${6}rem`;
    }, 22500)

    setTimeout(() => {
        realityImage.style.boxShadow = `initial`;
        realityImage.style.border = `initial`;
        realityImage.style.borderRadius = `initial`;
        realityImage.style.width = `${5.5}rem`;

        powerImage.style.boxShadow = `${0} ${0} ${3.6}rem purple`;
        powerImage.style.border = `${2}px solid purple`;
        powerImage.style.borderRadius = `${16}px`;
        powerImage.style.width = `${6}rem`;
    }, 25000)

    setTimeout(() => {
        powerImage.style.boxShadow = `initial`;
        powerImage.style.border = `initial`;
        powerImage.style.borderRadius = `initial`;
        powerImage.style.width = `${5.5}rem`;

        soulImage.style.boxShadow = `${0} ${0} ${3.6}rem orange`;
        soulImage.style.border = `${2}px solid orange`;
        soulImage.style.borderRadius = `${16}px`;
        soulImage.style.width = `${6}rem`;
    }, 27500)

    setTimeout(() => {
        soulImage.style.boxShadow = `initial`;
        soulImage.style.border = `initial`;
        soulImage.style.borderRadius = `initial`;
        soulImage.style.width = `${5.5}rem`;

        mindImage.style.boxShadow = `${0} ${0} ${3.6}rem yellow`;
        mindImage.style.border = `${2}px solid yellow`;
        mindImage.style.borderRadius = `${16}px`;
        mindImage.style.width = `${6}rem`;
    }, 30000)

    setTimeout(() => {
        mindImage.style.boxShadow = `initial`;
        mindImage.style.border = `initial`;
        mindImage.style.borderRadius = `initial`;
        mindImage.style.width = `${5.5}rem`;

        timeImage.style.boxShadow = `${0} ${0} ${3.6}rem green`;
        timeImage.style.border = `${2}px solid green`;
        timeImage.style.borderRadius = `${16}px`;
        timeImage.style.width = `${8.5}rem`;
    }, 33000)

    setTimeout(() => {
        timeImage.style.boxShadow = `initial`;
        timeImage.style.border = `initial`;
        timeImage.style.borderRadius = `initial`;
        timeImage.style.width = `${7}rem`;
    }, 40000)

    setTimeout(() => {
        developer.style.visibility = `visible`;
    }, 45000)
})