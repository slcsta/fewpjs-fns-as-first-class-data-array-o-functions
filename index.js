function wakeDog(dogName, dogBreed) {
    console.log(`Wake ${dogName} the ${dogBreed}`);
    return (`Wake ${dogName} the ${dogBreed}`);
}

function leashDog(dogName, dogBreed) {
    console.log(`Leash ${dogName} the ${dogBreed}`);
    return (`Leash ${dogName} the ${dogBreed}`);
}

function walkToPark(dogName, dogBreed) {
    console.log(`Walk to the park with ${dogName} the ${dogBreed}`);
    return (`Walk to the park with ${dogName} the ${dogBreed}`);
}

function throwFrisbee(dogName, dogBreed) {
    console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
    return (`Throw the frisbee for ${dogName} the ${dogBreed}`);
}

function walkHome(dogName, dogBreed) {
    console.log(`Walk home with ${dogName} the ${dogBreed}`);
    return (`Walk home with ${dogName} the ${dogBreed}`);
}

function unleashDog(dogName, dogBreed) {
    console.log(`Unleash ${dogName} the ${dogBreed}`);
    return (`Unleash ${dogName} the ${dogBreed}`);
}

/* create routine: an array of all the functions defined
    should hold references to each of the functions */

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

/* create a function that runs the routine array */

function exerciseDog(dogName, dogBreed) {
    const func = []
    for (let i = 0; i < routine.length; i++) {
        func.push(routine[i](dogName, dogBreed));
    }
    return func;
}

