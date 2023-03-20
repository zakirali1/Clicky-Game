

const fs = require('fs');
const path = require('path');



const outputDir = path.join(__dirname, 'generate.json')

const data = [
    {
        id: 0,
        src: './images/brian.svg'

},

{
    id: 1,
    src: './images/chris.svg'
},

{
    id: 2,
    src: './images/lois.svg'

},

{
    id: 3,
    src: './images/peter.svg'
},

{
    id: 4,
    src:'./stewie.svg'

}

];



fs.writeFile(outputDir, JSON.stringify(data), err => {
    err ? console.log(err) : console.log('success')
})

