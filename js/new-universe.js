// import Universe from 'universe'


var mbuto = document.querySelector("nav .mbuto");
// console.log("mbuto is", mbuto)

mbuto.addEventListener('click', () => {
    setTimeout(() => {
        const space = document.querySelector(".space");
        const reality = document.querySelector(".reality");
        const power = document.querySelector(".power");
        const soul = document.querySelector(".soul");
        const mind = document.querySelector(".mind");
        const time = document.querySelector(".time");
        const stoneImages = document.querySelectorAll(".stone img");
        const arrayOfStoneImages = Array.from(stoneImages);

        // console.log("New Universe from mbuto")
        const universe = new Universe();
        const radius = 38; // rem units
        const size = 5.5; // rem

        let stones = [time, reality, power, space, soul, mind,];

        stones.map((_, index) => {
            const randomPosition = Math.floor(Math.random() * 5);
            Universe.swapStones(index, randomPosition, stones);
        });

        // Set circle positions (every 60° apart)
        stones.forEach((stone, i) => {
            // console.log("Hitting for each")
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
    }, 500)

    setTimeout(() => {

        const developer = document.querySelector(".developer");
        developer.style.visibility = `visible`;
        developer.style.transform = `translate(${-50}%, ${-50}%) scale(${1})`;
    }, 1000)

})