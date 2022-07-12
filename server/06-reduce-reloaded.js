const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((acc, item) => {
    if (!acc[item]) {
        acc[item] = 1
    } else {
        acc[item] = acc[item] + 1;
    }
    return acc;
}, {});

console.log(rta);

const data = [
    {
        name: "Nicolas",
        level: "low"
    },
    {
        name: "Andrea",
        level: "medium"
    },
    {
        name: "Zulema",
        level: "hight"
    },
    {
        name: "Santiago",
        level: "low"
    },
    {
        name: "Valentina",
        level: "medium"
    },
    {
        name: "Lucia",
        level: "hight"
    }
]

const rta2 = data
    .map(item => item.level)
    .reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 1;
        } else {
            acc[item] = acc[item] + 1;
        }
        return acc;
    }, {});

console.log(rta2);