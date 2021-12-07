const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const endButton = document.getElementById('end-btn')
const previousButton = document.getElementById('previous-btn')

const bigbutton1f = document.getElementById('btn-extd1f')
const bigbutton1v = document.getElementById('btn-extd1v')

const bigbutton2f = document.getElementById('btn-extd2f')
const bigbutton2v = document.getElementById('btn-extd2v')

const bigbutton3f = document.getElementById('btn-extd3f')
const bigbutton3v = document.getElementById('btn-extd3v')

const food_list1 = document.getElementById('list-food1')
const food_list2 = document.getElementById('list-food2')
const food_list3 = document.getElementById('list-food3')

const food_name1_1 = document.getElementById('food-text1-1')
const food_name1_2 = document.getElementById('food-text1-2')
const food_name1_3 = document.getElementById('food-text1-3')
const food_name1_4 = document.getElementById('food-text1-4')

const food_name2_1 = document.getElementById('food-text2-1')
const food_name2_2 = document.getElementById('food-text2-2')
const food_name2_3 = document.getElementById('food-text2-3')
const food_name2_4 = document.getElementById('food-text2-4')

const food_name3_1 = document.getElementById('food-text3-1')
const food_name3_2 = document.getElementById('food-text3-2')
const food_name3_3 = document.getElementById('food-text3-3')
const food_name3_4 = document.getElementById('food-text3-4')

const food_desc1_1 = document.getElementById('food-desc1-1')
const food_desc1_2 = document.getElementById('food-desc1-2')
const food_desc1_3 = document.getElementById('food-desc1-3')
const food_desc1_4 = document.getElementById('food-desc1-4')

const food_desc2_1 = document.getElementById('food-desc2-1')
const food_desc2_2 = document.getElementById('food-desc2-2')
const food_desc2_3 = document.getElementById('food-desc2-3')
const food_desc2_4 = document.getElementById('food-desc2-4')

const food_desc3_1 = document.getElementById('food-desc3-1')
const food_desc3_2 = document.getElementById('food-desc3-2')
const food_desc3_3 = document.getElementById('food-desc3-3')
const food_desc3_4 = document.getElementById('food-desc3-4')

const food_img1_1 = document.getElementById('food-img1-1')
const food_img1_2 = document.getElementById('food-img1-2')
const food_img1_3 = document.getElementById('food-img1-3')
const food_img1_4 = document.getElementById('food-img1-4')

const food_img2_1 = document.getElementById('food-img2-1')
const food_img2_2 = document.getElementById('food-img2-2')
const food_img2_3 = document.getElementById('food-img2-3')
const food_img2_4 = document.getElementById('food-img2-4')

const food_img3_1 = document.getElementById('food-img3-1')
const food_img3_2 = document.getElementById('food-img3-2')
const food_img3_3 = document.getElementById('food-img3-3')
const food_img3_4 = document.getElementById('food-img3-4')

const food_title1 = document.getElementById('fd-txt1')
const food_title2 = document.getElementById('fd-txt2')
const food_title3 = document.getElementById('fd-txt3')

const map_title1 = document.getElementById('mp-txt1')
const map_title2 = document.getElementById('mp-txt2')
const map_title3 = document.getElementById('mp-txt3')

const option5 = document.getElementById('op-5')

const questionContainerElement = document.getElementById('option-container')
const questionElement = document.getElementById('question')
const optionsButtonsElement = document.getElementById('option-btns')
const image = document.getElementById('question-title')

const place1txt = document.getElementById('place1-txt')
const place2txt = document.getElementById('place2-txt')
const place3txt = document.getElementById('place3-txt')

const statetxt1 = document.getElementById('state-txt1')
const statetxt2 = document.getElementById('state-txt2')
const statetxt3 = document.getElementById('state-txt3')

const places = document.getElementById('places')

const place_1 = document.getElementById('place-1')
const place_2 = document.getElementById('place-2')
const place_3 = document.getElementById('place-3')

const container = document.getElementById('container')

container.classList.remove('hide')

const place1 = document.getElementsByClassName('place')
const place2 = document.getElementsByClassName('place')
const place3 = document.getElementsByClassName('place')
const place4 = document.getElementsByClassName('place')


const map1 = document.getElementById('gg-map1')
const map2 = document.getElementById('gg-map2')
const map3 = document.getElementById('gg-map3')

var total = parseInt(total)
var clima
var fclima
var fregiao
var ftransporte
var pt
var bool = true
total = 0

let Questions, currentQuestionIndex

const placis = [
    {place1, clima: 1, regiao: 8, transporte: 11},
    {place2, clima: 2, regiao: 5, transporte: 12},
    {place3, clima: 3, regiao: 6, transporte: 10},
    {place4, clima: 3, regiao: 7, transporte: 9}
]

startButton.addEventListener('click', () => {
    startQuiz()
    pageScroll()
    bool = true
})
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextOption()
    setNextPicture()
    bool = true
    console.log(currentQuestionIndex)
})

function resetTotal() {
    total = 0
}

function pageScroll() {
    container.scrollIntoView({behavior: "smooth", block: "center"})
}

function startQuiz() {
    endButton.classList.add('hide')
    startButton.classList.add('hide')
    Questions = options
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextOption()
}

function setNextOption() {
    resetState()
    if(Questions[currentQuestionIndex] == 0) {
        option5.classList.remove('hide')

    }
    showQuestion(Questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.options.forEach(option => {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        if (option.value) {
            button.dataset.value = option.value
        }
        button.addEventListener('click', selectOption)
        optionsButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (optionsButtonsElement.firstChild) {
        optionsButtonsElement.removeChild(optionsButtonsElement.firstChild)
    }
}

function selectOption(e) {
    if (bool) {
        const selectedButton = e.target
        selectedButton.classList.remove('btn')
        selectedButton.classList.add('selected-button')
        pageScroll()
        if (selectedButton.dataset.value >= 1 && selectedButton.dataset.value <= 4) {
            pt = selectedButton.dataset.value
            setClima(pt)
        } else if (selectedButton.dataset.value >= 5 && selectedButton.dataset.value <= 8) {
            pt = selectedButton.dataset.value
            setRegiao(pt)
        } else if (selectedButton.dataset.value >= 9 && selectedButton.dataset.value <= 12) {
            pt = selectedButton.dataset.value
            setTransporte(pt)
        }
        bool = false
    }
    if (options.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Recomeçar"
        startButton.classList.remove('start-init')
        startButton.addEventListener('click', resetTotal)
        startButton.classList.remove('hide')
        endButton.classList.remove('hide')
        endButton.addEventListener('click',() => {
            verifyBlocks()
            container.classList.add('hide')
            places.classList.remove('hide')
            place_1.classList.remove('hide')
            place_2.classList.remove('hide')
            place_3.classList.remove('hide')
            statetxt1.classList.remove('hide')
            statetxt2.classList.remove('hide')
            statetxt3.classList.remove('hide')
        })
    }
}

function setClima(value) {
    fclima = value
    console.log("Clima: " + fclima)
}

function setRegiao(value) {
    fregiao = value
    console.log("Região: " + fregiao)
}

function setTransporte(value) {
    ftransporte = value
    console.log("Transporte: " + ftransporte)
}

function bigbutton1fv() {
    bigbutton1f.addEventListener('click', () => {
        console.log('bg1foi')
        place_1.style.paddingBottom = '5cm'
        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083987.4528746754!2d-54.620577521026256!3d1.596783970843328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d653d73cd997b21%3A0x911a614576f6bcd4!2zQW1hcMOh!5e0!3m2!1spt-BR!2sbr!4v1638791542883!5m2!1spt-BR!2sbr"
        map1.classList.remove('hide')
        food_title1.classList.remove('hide')
        map_title1.classList.remove('hide')
        food_list1.classList.remove('hide')
        place_1.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton1v.classList.remove('hide')
        bigbutton1f.classList.add('hide')
    })

    bigbutton1v.addEventListener('click', () => {
        map1.classList.add('hide')
        console.log('bg1vorto')
        food_title1.classList.add('hide')
        map_title1.classList.add('hide')
        food_list1.classList.add('hide')
        place_1.style.paddingBottom = '2.5cm'
        place_1.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton1v.classList.add('hide')
        bigbutton1f.classList.remove('hide')
    })
}

function bigbutton2fv() {
    bigbutton2f.addEventListener('click', () => {
        console.log('bg2foi')
        place_2.style.paddingBottom = '5cm'
        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8166884.830406468!2d-66.37240152938632!3d1.8508755174469462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638793747726!5m2!1spt-BR!2sbr"
        map2.classList.remove('hide')
        food_title2.classList.remove('hide')
        map_title2.classList.remove('hide')
        food_list2.classList.remove('hide')
        place_2.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton2v.classList.remove('hide')
        bigbutton2f.classList.add('hide')
    })

    bigbutton2v.addEventListener('click', () => {
        map2.classList.add('hide')
        console.log('bg2vorto')
        food_title2.classList.add('hide')
        map_title2.classList.add('hide')
        food_list2.classList.add('hide')
        place_2.style.paddingBottom = '2.5cm'
        place_2.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton2v.classList.add('hide')
        bigbutton2f.classList.remove('hide')
    })
}

function bigbutton3fv() {
    bigbutton3f.addEventListener('click', () => {
        console.log('bg3foi')
        place_3.style.paddingBottom = '5cm'
        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"
        map3.classList.remove('hide')
        food_title3.classList.remove('hide')
        map_title3.classList.remove('hide')
        food_list3.classList.remove('hide')
        place_3.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton3v.classList.remove('hide')
        bigbutton3f.classList.add('hide')
    })

    bigbutton3v.addEventListener('click', () => {
        map3.classList.add('hide')
        console.log('bg3vorto')
        food_title3.classList.add('hide')
        map_title3.classList.add('hide')
        food_list3.classList.add('hide')
        place_3.style.paddingBottom = '2.5cm'
        place_3.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton3v.classList.add('hide')
        bigbutton3f.classList.remove('hide')
    })
}

function verifyBlocks() {
    if(fclima == 1 && fregiao == 5) {
        place1txt.innerText = "Amapá"
        statetxt1.innerText = "pupipi"

        food_name1_1.innerText = "1.1"
        food_img1_1.src = "../Images/modelo.jpg"
        food_desc1_1.innerText = "dassssssssssssssssst"

        food_name1_2.innerText = "1.2"
        food_img1_2.src = "../Images/modelo.jpg"
        food_desc1_2.innerText = "dddffffffffffffffdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffff"

        food_name1_3.innerText = "1.3"
        food_img1_3.src = "../Images/modelo.jpg"
        food_desc1_3.innerText = "ddddddddddddddddddddddd"

        food_name1_4.innerText = "1.4"
        food_img1_4.src = "../Images/modelo.jpg"
        food_desc1_4.innerText = "dggggggggggggggd"


        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Roraima"
        statetxt2.innerText = "lalulu"

        food_name2_1.innerText = "2.1"
        food_img2_1.src = "../Images/modelo.jpg"
        food_desc2_1.innerText = "2.1"

        food_name2_2.innerText = "2.2"
        food_img2_2.src = "../Images/modelo.jpg"
        food_desc2_2.innerText = "2.2"

        food_name2_3.innerText = "2.3"
        food_img2_3.src = "../Images/modelo.jpg"
        food_desc2_3.innerText = "2.3"

        food_name2_4.innerText = "2.4"
        food_img2_4.src = "../Images/modelo.jpg"
        food_desc2_4.innerText = "2.4"

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Tocantins"
        statetxt3.innerText = "ticotico"

        food_name3_1.innerText = "3.1"
        food_img3_1.src = "../Images/modelo.jpg"
        food_desc3_1.innerText = "3.1"

        food_name3_2.innerText = "3.2"
        food_img3_2.src = "../Images/modelo.jpg"
        food_desc3_2.innerText = "3.2"

        food_name3_3.innerText = "3.3"
        food_img3_3.src = "../Images/modelo.jpg"
        food_desc3_3.innerText = "3.3"

        food_name3_4.innerText = "3.4"
        food_img3_4.src = "../Images/modelo.jpg"
        food_desc3_4.innerText = "3.4"

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
    }
}

function setNextPicture() {
    if(currentQuestionIndex == 0) {
        image.src="https://o.quizlet.com/R83wCCnwxgQylxWG3-vYrg_b.png"
    } else if(currentQuestionIndex == 1) {
        image.src="https://www.sketchappsources.com/resources/source-image/climate-icons-hosseinian.png"
    } else if(currentQuestionIndex == 2) {
        image.src="https://st8.cannypic.com/thumbs/40/408827_632_canny_pic.jpg"
    }
}

const options = [
    {
        question: "Qual região do Brasil você prefere?",
        options: [
            {text: 'Norte', value: 5},
            {text: 'Nordeste', value: 6},
            {text: 'Centro-Oeste', value: 7},
            {text: 'Sudeste', value: 8},
            {text: 'Sul', value: 9}
        ]
    },
    {
        question: "Qual tipo de clima você prefere?",
        options: [
            {text: 'Quente', value: 1},
            {text: 'Frio', value: 2},
            {text: 'Chuvoso', value: 3},
            {text: 'Árido', value: 4}
        ]
    },
    {
        question: "Que tipo de transporte você prefere?",
        options: [
            {text: 'Ônibus', value: 10},
            {text: 'Carro', value: 11},
            {text: 'Avião', value: 12},
            {text: 'Barco', value: 13}
        ]
    }
]