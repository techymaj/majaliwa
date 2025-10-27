const space = document.querySelector(".space");
const reality = document.querySelector(".reality");
const power = document.querySelector(".power");
const soul = document.querySelector(".soul");
const mind = document.querySelector(".mind");
const time = document.querySelector(".time");

const stoneImages = document.querySelectorAll(".stone img");
const allStones = document.getElementsByClassName("stone");
const arrayOfHomePageStones = Array.from(allStones);

const spaceImage = document.querySelector(".space img");
const realityImage = document.querySelector(".reality img");
const powerImage = document.querySelector(".power img");
const soulImage = document.querySelector(".soul img");
const mindImage = document.querySelector(".mind img");
const timeImage = document.querySelector(".time img");

const developer = document.querySelector(".developer");

const arrayOfStoneImages = Array.from(stoneImages);

const boomButton = document.querySelector("button");

boomButton.addEventListener('click', () => {
    const universe = new Universe();
    setTimeout(() => {
        const radius = 38; // rem units
        const size = 5.5; // rem

        let stones = [time, reality, power, space, soul, mind,];

        stones.map((_, index) => {
            const randomPosition = Math.floor(Math.random() * 5);
            Universe.swapStones(index, randomPosition, stones);
        });

        // Set circle positions (every 60° apart)
        stones.forEach((stone, i) => {
            const angle = (i * 360 / stones.length) * (Math.PI / 180); // convert to radians
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            if (stone.classList.contains("time")) {
                stone.style.width = `${7}rem`;
            } else {
                stone.style.width = `${size}rem`;
            }

            stone.style.transform = `translate(${x}rem, ${y}rem)`;
            stone.style.transition = `transform 0.3s ease`;

            arrayOfStoneImages.forEach(stone => {
                stone.style.animation = "spin-stone 3s infinite linear";
            });
        });

        universe.bigBang();

    }, 5000)

    setTimeout(() => {
        arrayOfStoneImages.forEach(stone => {
            stone.style.boxShadow = `${0} ${0} ${3.6}rem ${stone.dataset.color}`;
            stone.style.border = `${2}px solid ${stone.dataset.color}`;
            stone.style.borderRadius = `${16}px`;
        });
    }, 14000)

    setTimeout(() => {
        arrayOfStoneImages.forEach(stone => {
            stone.style.boxShadow = `initial`;
            stone.style.border = `initial`;
            stone.style.borderRadius = `initial`;
        });
    }, 19000)

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
        developer.style.transform = `translate(${-50}%, ${-50}%) scale(${1})`;
        boomButton.remove();
    }, 45000)
})

arrayOfHomePageStones.forEach(stone => {

    stone.addEventListener('click', () => {
        const page = stone.classList;
        const listOfClasses = Array.from(page);
        const stoneClass = listOfClasses[1];
        // console.log("active stone:", stoneClass)

        setTimeout(() => {
            const navStonesIterable = document.querySelectorAll("nav .stone");
            const arrayOfNavStones = Array.from(navStonesIterable);
            // console.log(arrayOfNavStones)

            arrayOfNavStones.forEach((navStone) => {
                if (navStone.classList[1] == stoneClass) {
                    navStone.classList.toggle('active')
                    return;
                }
            })
        }, 500) // wait half a second for page to load so access to navStones is not undefined
    })
});

class Universe {
    bigBang() {
        const stonesDiv = document.querySelector(".stones")
        const universe = stonesDiv.parentElement;

        for (let i = 0; i < 50; i++) {
            const galaxy = document.createElement("div");
            galaxy.classList.add("galaxy");
            this.assignRandomDimensions(galaxy);
            this.assignRandomPosition(galaxy);
            this.addRandomGalaxyColor(galaxy);
            this.addRandomBlur(galaxy);
            universe.insertBefore(galaxy, stonesDiv);
        }
    }

     assignRandomPosition(galaxy) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;

        const top = Math.random() * windowHeight;
        if (top == windowHeight) {
            top = Math.random() * 100;
        }

        const left = Math.random() * windowWidth;
        if (left == windowWidth) {
            left = Math.random() * 100;
        }

        galaxy.style.top = `${top}px`;
        galaxy.style.left = `${left}px`;
    }

     assignRandomDimensions(galaxy) {
        const width = Math.random() * 8;
        const height = Math.random() * 15;

        galaxy.style.width = `${width}px`;
        galaxy.style.height = `${height}px`;
    }

     addRandomBlur(galaxy) {
        const blur = (Math.random() * 4) + 1;
        /* 
        if blur < 2
          mask-image: url('star.svg'); 
          mask-size: contain; 
          mask-repeat: no-repeat; 
          mask-position: center; 
        */
        if (blur < 2) {
            galaxy.style['mask-image'] = `url(../assets/star.png)`;
            galaxy.style['mask-size'] = `contain`;
            galaxy.style['mask-repeat'] = `no-repeat`;
            galaxy.style['mask-position'] = `center`;

            const width = Math.random() * 40;
            const height = Math.random() * 45;

            galaxy.style.width = `${width}px`;
            galaxy.style.height = `${height}px`;
            galaxy.style.backgroundColor = `#dbccdbe8`;
            galaxy.style.filter = `blur(${blur + 10}px)`;

        }
        galaxy.style.filter = `blur(${blur}px)`;
    }

    /**
     * Assigns a random, universe-appropriate color to a galaxy element.
     * @param {HTMLElement} galaxy The DOM element representing a galaxy.
     */
     addRandomGalaxyColor(galaxy) {
        // Expanded color palette to better depict the universe
        const colors = [
            "white",     // Represents bright stars
            "yellow",    // Represents older stars/galaxies
            "blue",      // Represents hotter stars or cool nebulae
            "red",       // Represents cool stars, dust clouds, or nebulae
            "pink",      // Represents emission nebulae (H-alpha)
            "cyan",      // Represents reflection nebulae
            "magenta",   // A common artistic or false-color for space
            "lime"       // Less common, but can represent certain gasses
        ];

        // FIX: Math.random() generates a number between 0 (inclusive) and 1 (exclusive).
        // To cover all indices (0 to colors.length - 1), you must multiply by the array's length.
        const index = Math.floor(Math.random() * colors.length);

        // Assuming 'galaxy' is a DOM element
        galaxy.style.backgroundColor = colors[index];
    }

    static swapStones(stoneIndex, randomPosition, array) {
        let temp = array[stoneIndex];
        array[stoneIndex] = array[randomPosition];
        array[randomPosition] = temp;
    }
}