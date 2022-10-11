const initTypeWriter = () => {


    const professions = ["Estudiante Front-End", "Developer Front-End"];
    let typed = new Typed(".typing", {
        strings: professions,
        typeSpeed: 80,
        backSpeed: 60,
        loop: true
    })
};

export default initTypeWriter;