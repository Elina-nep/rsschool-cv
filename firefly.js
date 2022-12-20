let container = document.getElementById('firefly');

container.width = window.innerWidth;
container.height = window.innerHeight;

const drawFirefly = () => {
    for (let i = 0; i < 15; i++) {

        let steps = 12 * Math.random() + 16;
        let rotationSpeed = 10 * (Math.random() + 8) * 10000;
        let delay = 8000 * Math.random() + 500

        let animation = [];
        for (let i = 0; i < steps; i++) {
            animation.push({ offset: i / steps, transform: `translateX(${100 * Math.random() - 50}vw) translateY(${100 * Math.random() - 50}vh) scale(${75 * Math.random() / 75 + 0.25})` })
        }
        console.log(animation)

        let fly = document.createElement('div');
        fly.className = 'firefly';


        fly.animate(animation, {
            // sync options
            duration: rotationSpeed,
            // delay: delay,
            easing: "ease",
            iterations: Infinity
        });
        container.appendChild(fly)
    }
}

drawFirefly()
// container.onclick()



    // @for $i from 1 through $quantity

    // $steps: random(12) + 16
    // $rotationSpeed: random(10) + 8s

    //     .firefly: nth - child(#{ $i })
    // animation - name: move#{ $i }

    //       &:: before
    // animation - duration: #{ $rotationSpeed }

    //       &:: after
    // animation - duration: #{ $rotationSpeed }, random(6000) + 5000ms
    // animation - delay: 0ms, random(8000) + 500ms

    // @keyframes move#{ $i }
    // @for $step from 0 through $steps
    //         #{ $step * (100 / $steps) }%
    //     transform: translateX(random(100) - 50vw) translateY(random(100) - 50vh) scale(random(75) / 100 + .25)


    // thanks to https://codepen.io/alvarotrigo/pen/KKvGNOj for animation idea 