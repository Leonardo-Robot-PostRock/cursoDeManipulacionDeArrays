const numbers = [1, 2, 3, 4];
let rta = false;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 2 === 0) {
        rta = true;
        break;
    }
}
console.log(rta);

const rta2 = numbers.some(item => item % 2 === 0)
console.log('rta2', rta2);

//Ejemplo con objetos, en este caso si almenos uno fue entregado, la respuesta será true

const orders = [
    {
        customerName: 'Nicolas',
        total: 60,
        delivered: true
    },
    {
        customerName: 'Julien',
        total: 140,
        delivered: false
    },
    {
        customerName: 'Pierre',
        total: 90,
        delivered: true
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: 'Nicol',
        total: 100,
        delivered: false
    }
]

const rta3 = orders.some(item => item.delivered);
console.log('rta3', rta3);

//Manejo de fechas

const dates = [
    {
        startDate: new Date(2022, 1, 1, 10), //01/01/2022 10:00am
        endDate: new Date(2022, 1, 1, 11),
        title: "Cita de trabajo"
    },
    {
        startDate: new Date(2022, 1, 1, 15),
        endDate: new Date(2022, 1, 1, 15, 30), //01/01/2022 15:30 or 3:30pm
        title: "Cita con mi jefe"
    },
    {
        startDate: new Date(2022, 1, 1, 20),
        endDate: new Date(2022, 1, 1, 21),
        title: "Cena"
    }
]

const newAppointment = {
    startDate: new Date(2022, 1, 1, 8),
    endDate: new Date(2022, 1, 1, 9, 30)
}
/*Installa librería de funciones para manejo de interposición de fechas de #https://date-fns.org/ */
var areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {
                start: date.startDate, end: date.endDate
            },
            {
                start: newDate.startDate, end: newDate.endDate
            }
        )
    })
}

console.log('isOverlap:', isOverlap(newAppointment));