export default function progressCircle() {
    function initProgressCircle() {
        let options = {
            startAngle: -1.55,
            size: 159,
            value: 0.65,
            fill: { color: "#149DDC" },
        };

        $(".circle .bar")
            .circleProgress(options)
            .on("circle-animation-progress", (event, progress, stepValue) =>
                $(this)
                .parent()
                .find("span")
                .text(String(stepValue.toFixed(2).substring(2)) + "%")
            );

        $(".js .bar").circleProgress({
            value: 0.4,
        });

        $(".jquery .bar").circleProgress({
            value: 0.3,
        });

        $(".angular .bar").circleProgress({
            value: 0.2,
        });
    }

    function handleMutation(mutation) {
        if (mutation[0].target.classList.contains("active")) {
            observer.disconnect();
            initProgressCircle();
        }
    };

    const observer = new MutationObserver(handleMutation),
        observerTarget = document.querySelector(".habilidades");
    observer.observe(observerTarget, { attributes: true });
}