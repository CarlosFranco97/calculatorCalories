const typeIntensityAndExercise = {
    1: {
        1: 16,
        2: 14,
        3: 12
    },

    2: {
        1: 13,
        2: 11,
        3: 9
    }, 

    3: {
        1: 10, 
        2: 8,
        3: 6
    }
}

const isValidInput = (input, min, max) => input < min || input > max;

let exerciseType = Number(prompt('Ingrese el tipo de ejercicio \n 1) Correr \n 2) Nadar \n 3) Andar en bicicleta'));
if(isValidInput(exerciseType, 1, 3)) {
    alert('La opción ingresada está por fuera del rango de opciones');
} else {
    let intensityExercise = Number(prompt('Ingrese la intensidad del ejercicio \n 1) Alta \n 2) Media \n 3) Baja'));
    if(isValidInput(intensityExercise, 1, 3)) {
        alert('La opción ingrsada está por fuera del rango de opciones');
    } else {
        let exerciseDuration = Number(prompt('Ingrese la duración del ejercicio en minutos'));
        if(exerciseDuration <= 0) {
            alert('Tiempo de duración no válido');
        }
        let caloriesBurned = typeIntensityAndExercise[intensityExercise][exerciseType] * exerciseDuration;
        console.log(`${caloriesBurned} calorías`);
    }
}
