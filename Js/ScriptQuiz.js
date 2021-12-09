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

const state_img1 = document.getElementById('img-state1')
const state_img2 = document.getElementById('img-state2')
const state_img3 = document.getElementById('img-state3')

const food_title1 = document.getElementById('fd-txt1')
const food_title2 = document.getElementById('fd-txt2')
const food_title3 = document.getElementById('fd-txt3')

const clima_title1 = document.getElementById('cl-txt1')
const clima_title2 = document.getElementById('cl-txt2')
const clima_title3 = document.getElementById('cl-txt3')

const clima_desc1 = document.getElementById('cl-desc1')
const clima_desc2 = document.getElementById('cl-desc2')
const clima_desc3 = document.getElementById('cl-desc3')

const travel_title1 = document.getElementById('vi-txt1')
const travel_title2 = document.getElementById('vi-txt2')
const travel_title3 = document.getElementById('vi-txt3')

const travel_desc1 = document.getElementById('vi-desc1')
const travel_desc2 = document.getElementById('vi-desc2')
const travel_desc3 = document.getElementById('vi-desc3')

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

const sub_text = document.getElementById('sub-texte')

container.classList.remove('hide')

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
            container.scrollIntoView({behavior: "smooth", block: "start"})
            container.classList.add('hide')
            places.classList.remove('hide')
            place_1.classList.remove('hide')
            place_2.classList.remove('hide')
            place_3.classList.remove('hide')
            state_img1.classList.remove('hide')
            state_img2.classList.remove('hide')
            state_img3.classList.remove('hide')
            sub_text.innerText = "Esses são os estados que recomendamos para você! Saiba mais sobre eles apertando a setinha no canto direito! :D"
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
        map1.classList.remove('hide')
        state_img1.classList.add('hide')
        food_title1.classList.remove('hide')
        clima_title1.classList.remove('hide')
        clima_desc1.classList.remove('hide')
        travel_title1.classList.remove('hide')
        travel_desc1.classList.remove('hide')
        map_title1.classList.remove('hide')
        food_list1.classList.remove('hide')
        place_1.scrollIntoView({behavior: "smooth", block: "start"})
        bigbutton1v.classList.remove('hide')
        statetxt1.classList.remove('hide')
        bigbutton1f.classList.add('hide')
    })

    bigbutton1v.addEventListener('click', () => {
        map1.classList.add('hide')
        console.log('bg1vorto')
        state_img1.classList.remove('hide')
        food_title1.classList.add('hide')
        clima_title1.classList.add('hide')
        clima_desc1.classList.add('hide')
        travel_title1.classList.add('hide')
        travel_desc1.classList.add('hide')
        map_title1.classList.add('hide')
        food_list1.classList.add('hide')
        place_1.style.paddingBottom = '2.5cm'
        place_1.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton1v.classList.add('hide')
        statetxt1.classList.add('hide')
        bigbutton1f.classList.remove('hide')
    })
}

function bigbutton2fv() {
    bigbutton2f.addEventListener('click', () => {
        console.log('bg2foi')
        place_2.style.paddingBottom = '5cm'
        map2.classList.remove('hide')
        state_img2.classList.add('hide')
        food_title2.classList.remove('hide')
        clima_title2.classList.remove('hide')
        clima_desc2.classList.remove('hide')
        travel_title2.classList.remove('hide')
        travel_desc2.classList.remove('hide')
        map_title2.classList.remove('hide')
        food_list2.classList.remove('hide')
        place_2.scrollIntoView({behavior: "smooth", block: "start"})
        bigbutton2v.classList.remove('hide')
        statetxt2.classList.remove('hide')
        bigbutton2f.classList.add('hide')
    })

    bigbutton2v.addEventListener('click', () => {
        map2.classList.add('hide')
        console.log('bg2vorto')
        state_img2.classList.remove('hide')
        food_title2.classList.add('hide')
        clima_title2.classList.add('hide')
        clima_desc2.classList.add('hide')
        travel_title2.classList.add('hide')
        travel_desc2.classList.add('hide')
        map_title2.classList.add('hide')
        food_list2.classList.add('hide')
        place_2.style.paddingBottom = '2.5cm'
        place_2.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton2v.classList.add('hide')
        statetxt2.classList.add('hide')
        bigbutton2f.classList.remove('hide')
    })
}

function bigbutton3fv() {
    bigbutton3f.addEventListener('click', () => {
        console.log('bg3foi')
        place_3.style.paddingBottom = '5cm'
        map3.classList.remove('hide')
        state_img3.classList.add('hide')
        food_title3.classList.remove('hide')
        clima_title3.classList.remove('hide')
        clima_desc3.classList.remove('hide')
        travel_title3.classList.remove('hide')
        travel_desc3.classList.remove('hide')
        map_title3.classList.remove('hide')
        food_list3.classList.remove('hide')
        place_3.scrollIntoView({behavior: "smooth", block: "start"})
        bigbutton3v.classList.remove('hide')
        statetxt3.classList.remove('hide')
        bigbutton3f.classList.add('hide')
    })

    bigbutton3v.addEventListener('click', () => {
        map3.classList.add('hide')
        console.log('bg3vorto')
        state_img3.classList.remove('hide')
        food_title3.classList.add('hide')
        clima_title3.classList.add('hide')
        clima_desc3.classList.add('hide')
        travel_title3.classList.add('hide')
        travel_desc3.classList.add('hide')
        map_title3.classList.add('hide')
        food_list3.classList.add('hide')
        place_3.style.paddingBottom = '2.5cm'
        place_3.scrollIntoView({behavior: "smooth", block: "center"})
        bigbutton3v.classList.add('hide')
        statetxt3.classList.add('hide')
        bigbutton3f.classList.remove('hide')
    })
}

function verifyBlocks() {
    if(fregiao == 5 && fclima == 1) {
        place1txt.innerText = "Amapá"
        statetxt1.innerText = "pupipi"
        state_img1.src = "https://amapaecocamping.com.br/wp-content/uploads/2020/10/Macapa-capital-do-estado-do-Amapa-1024x768.jpeg"

        food_name1_1.innerText = "1.1"
        food_img1_1.src = "../Images/modelo.jpg"
        food_desc1_1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_2.innerText = "1.2"
        food_img1_2.src = "../Images/modelo.jpg"
        food_desc1_2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_3.innerText = "1.3"
        food_img1_3.src = "../Images/modelo.jpg"
        food_desc1_3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_4.innerText = "1.4"
        food_img1_4.src = "../Images/modelo.jpg"
        food_desc1_4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083987.4528746754!2d-54.620577521026256!3d1.596783970843328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d653d73cd997b21%3A0x911a614576f6bcd4!2zQW1hcMOh!5e0!3m2!1spt-BR!2sbr!4v1638791542883!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        travel_desc1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Tocantins"
        statetxt2.innerText = "Tocantins é um estado na região norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água. Há também pontos turísticos como: Parque estadual do Jalapão, fervedouro do ceiça, palácio Araguaia e etc."
        state_img2.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name2_1.innerText = "Chambari"
        food_img2_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc2_1.innerText = "O chambari é uma adaptação tocantinense do “ossobuco” italiano, que significa, literalmente, osso furado. No Tocantins, o osso é cortado horizontalmente e cozido com pimenta e temperos. O chambari é servido com arroz, cheiro verde e, com frequência, também com farinha de mandioca e muita pimenta."

        food_name2_2.innerText = "Amor Perfeito"
        food_img2_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc2_2.innerText = "A fécula da raiz de mandioca - também chamada de tapioca -, leite de coco, açúcar refinado, manteiga de leite. Estes são os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensação que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name2_3.innerText = "Paçoca de Carne de Sol"
        food_img2_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc2_3.innerText = "Em questão de praticidade, poucos alimentos ganham da paçoca de carne seca. Reúne poucos ingredientes, mantém a qualidade por vários dias sem necessidade de geladeira e é razoavelmente fácil de fazer. A iguaria é consumida em todas as regiões, mas tem como principal referência a histórica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name2_4.innerText = "2.4"
        food_img2_4.src = "../Images/modelo.jpg"
        food_desc2_4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Em Tocantins, a estação com precipitação é quente, abafada e de céu quase encoberto; a estação seca é morna e de céu quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 °C a 31 °C e raramente é inferior a 11 °C ou superior a 36 °C. O mês mais quente do ano em Tocantins é fevereiro, com a máxima de 31 °C e mínima de 21 °C, em média, já o mês mais frio é junho com máxima de 15 °C e mínima de 27 °C em média."

        travel_desc2.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalapão + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma única pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Pará"
        statetxt3.innerText = "O estado do Pará, está localizado na região norte do Brasil, abriga o Parque Nacional da Amazônia. O parque protege uma grande área da densa floresta Amazônica e abriga milhares de animais. Boa parte desta área é alagada todos os anos, tornando o acesso a essas áreas distantes somente por barco. Próxima da desembocadura do Rio Amazonas está Belém, a capital do Pará. Famosa por sua arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio. Nos dias atuais, o Pará é um dos principais produtores de ferro e ouro do Brasil, além disso, a cultura desse estado é marcada por influências indígenas e religiosas."
        state_img3.src = "https://1.bp.blogspot.com/-x5Qwp8dbH9Y/XpOWRimbXoI/AAAAAAAAp1w/rRk810ou8js3_hTOCxry7ATsvyRFTsHLQCLcBGAsYHQ/s1600/esta%25C3%25A7%25C3%25A3o-das-docas-belem-do-para.jpg"

        food_name3_1.innerText = "Pato no Tucupi"
        food_img3_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc3_1.innerText = "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil, porém em especial do estado do Pará. É elaborado com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva típica da região norte. Pode ser acompanhado por arroz branco ou farinha-d'água de mandioca."

        food_name3_2.innerText = "Maniçoba"
        food_img3_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc3_2.innerText = "A Maniçoba é um prato de origem indígena, típico da culinária paraense e amapaense. Pela origem da folha de que é produzido, surgiu provavelmente entre aldeias indígenas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca moída."

        food_name3_3.innerText = "Tacacá"
        food_img3_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacacá_Cred-Kato-1.jpg"
        food_desc3_3.innerText = "Tacacá é um prato típico da Região Amazônica de origem indígena. É muito apreciado em várias localidades da região Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, também servida com jambu e camarão seco."

        food_name3_4.innerText = "Chibé"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc3_4.innerText = "Chibé ou Jacuba é uma bebida brasileira típica da culinária tupi É uma bebida com um gosto levemente ácido. É feito misturando de farinha de mandioca e água. Os grãos de farinha incham, resultando em uma textura semelhante a fubá. Pode ser acompanhado de sal, pimenta ou outros temperos salgados à gosto."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310730.867194925!2d-61.52762278360523!3d-3.5616704612925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2zUGFyw6E!5e0!3m2!1spt-BR!2sbr!4v1638972167247!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado tem a segunda maior extensão do Brasil (1.245.759,305 km²) -, tem seu interior a predominância do Clima Equatorial Quente e Úmido. Entretanto, como sua área é muito extensa, existem algumas variabilidades nos tipos climáticos do Estado, que segundo a classificação de Köppen destacam-se mais dois: o Clima Equatorial Semiúmido e o Clima Tropical Equatorial de Savanas. A temperatura média anual é de 26 °C, e esse clima se caracteriza por possuir amplitudes térmicas maiores em relação ao Clima Equatorial. Isso ocorre devida à influência da Continentalidade nas temperaturas diárias."

        travel_desc3.innerText = "O custo total de uma viagem de cinco dias inteiros (quatro dias inteiros e dois “meios dias”) e seis noites em Belém é em média R$ 1.148 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
    } else if(fregiao == 5 && fclima == 2) {
		place1txt.innerText = "Roraima"
        statetxt1.innerText = "O estado de Roraima localizado na região norte do Brasil, é conhecido pela Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio Branco, fica próxima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan Doyle para O Mundo Perdido."
        state_img1.src = "titi"

        food_name1_1.innerText = "Caldeirada"
        food_img1_1.src = "../Images/modelo.jpg"
        food_desc1_1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_2.innerText = "Pirarucu Desfiado"
        food_img1_2.src = "../Images/modelo.jpg"
        food_desc1_2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_3.innerText = "Pé de Moleque"
        food_img1_3.src = "../Images/modelo.jpg"
        food_desc1_3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_4.innerText = "Paçoca com Banana"
        food_img1_4.src = "../Images/modelo.jpg"
        food_desc1_4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083457.8505257973!2d-64.10488380441548!3d1.844161315734518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638976305616!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Nas regiões mais elevadas do estado não há um período seco bem definido e a temperatura do mês mais frio costuma oscilar entre 15° e 20 °C. Nas regiões de menor altitude, a temperatura média mínima mensal é de 20 °C e a média máxima de 38 °C. Nas áreas planas a temperatura média mensal está acima de 26 °C. O longo período de chuvas e a deficiente drenagem organizada permitem uma acumulação ininterrupta de água. Enquanto todas quase todas as capitais brasileiras estão na primavera, Boa Vista é a única delas a estar no outono, por estar localizada acima da linha do Equador."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço das passagens aéreas é acima de R$986, e a duração do voo pode variar entre 3h30 e 9h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Tocantins"
        statetxt2.innerText = "Tocantins é um estado na região norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e plantações de soja. A capital moderna, Palmas, foi construída propositadamente no centro geográfico do estado e está rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaruçu do Porto é um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de água. Há também pontos turísticos como: Parque estadual do Jalapão, fervedouro do ceiça, palácio Araguaia e etc."
        state_img2.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name2_1.innerText = "Chambari"
        food_img2_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc2_1.innerText = "O chambari é uma adaptação tocantinense do “ossobuco” italiano, que significa, literalmente, osso furado. No Tocantins, o osso é cortado horizontalmente e cozido com pimenta e temperos. O chambari é servido com arroz, cheiro verde e, com frequência, também com farinha de mandioca e muita pimenta."

        food_name2_2.innerText = "Amor Perfeito"
        food_img2_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc2_2.innerText = "A fécula da raiz de mandioca - também chamada de tapioca -, leite de coco, açúcar refinado, manteiga de leite. Estes são os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensação que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name2_3.innerText = "Paçoca de Carne de Sol"
        food_img2_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc2_3.innerText = "Em questão de praticidade, poucos alimentos ganham da paçoca de carne seca. Reúne poucos ingredientes, mantém a qualidade por vários dias sem necessidade de geladeira e é razoavelmente fácil de fazer. A iguaria é consumida em todas as regiões, mas tem como principal referência a histórica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name2_4.innerText = "2.4"
        food_img2_4.src = "../Images/modelo.jpg"
        food_desc2_4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Em Tocantins, a estação com precipitação é quente, abafada e de céu quase encoberto; a estação seca é morna e de céu quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 °C a 31 °C e raramente é inferior a 11 °C ou superior a 36 °C. O mês mais quente do ano em Tocantins é fevereiro, com a máxima de 31 °C e mínima de 21 °C, em média, já o mês mais frio é junho com máxima de 15 °C e mínima de 27 °C em média."

        travel_desc2.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalapão + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma única pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rondônia"
        statetxt3.innerText = "O estado de Rondônia, fica localizado na região norte do Brasil, e sua capital é é Porto Velho, banhada pelo rio Madeira. Além deste, há outros destinos importantes como: Ariquemes, Cacoal, Guajará-Mirim, Ji-Paraná, Rolim de Moura e Vilhena."
        state_img3.src = "tata"

        food_name3_1.innerText = "Torta de Cupuaçu"
        food_img3_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc3_1.innerText = "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil, porém em especial do estado do Pará. É elaborado com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva típica da região norte. Pode ser acompanhado por arroz branco ou farinha-d'água de mandioca."

        food_name3_2.innerText = "Doce de Buriti"
        food_img3_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc3_2.innerText = "A Maniçoba é um prato de origem indígena, típico da culinária paraense e amapaense. Pela origem da folha de que é produzido, surgiu provavelmente entre aldeias indígenas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca moída."

        food_name3_3.innerText = "Pirarucu Rondon"
        food_img3_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacacá_Cred-Kato-1.jpg"
        food_desc3_3.innerText = "Tacacá é um prato típico da Região Amazônica de origem indígena. É muito apreciado em várias localidades da região Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, também servida com jambu e camarão seco."

        food_name3_4.innerText = "Tacacá"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc3_4.innerText = "Chibé ou Jacuba é uma bebida brasileira típica da culinária tupi É uma bebida com um gosto levemente ácido. É feito misturando de farinha de mandioca e água. Os grãos de farinha incham, resultando em uma textura semelhante a fubá. Pode ser acompanhado de sal, pimenta ou outros temperos salgados à gosto."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012850.4642982725!2d-65.5369612909414!3d-10.826667114104417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cd96f516b57%3A0x733763d5340621dd!2zUm9uZMO0bmlh!5e0!3m2!1spt-BR!2sbr!4v1638976435117!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "A região tem altíssima umidade e a temperatura média está em torno de 26ºC. A variação de temperatura é pequena, mas neste estado do norte ocorre um fenômeno climático atípico. A “friagem” faz com que os termômetros baixem vários graus de forma brusca, podendo chegar até 10°C."

        travel_desc3.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço do voo é acima de R$975, e a duração do voo pode variar entre 4h e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
	} else if(fregiao == 5 && fclima == 3) {
		place1txt.innerText = "Amazônia"
        statetxt1.innerText = "O estado de Roraima localizado na região norte do Brasil, é conhecido pela Floresta Amazónica. A capital, Boa Vista, na margem oeste de Rio Branco, fica próxima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos íngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspiração de Sir Arthur Conan Doyle para O Mundo Perdido."
        state_img1.src = "titi"

        food_name1_1.innerText = "Caldeirada"
        food_img1_1.src = "../Images/modelo.jpg"
        food_desc1_1.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_2.innerText = "Pirarucu Desfiado"
        food_img1_2.src = "../Images/modelo.jpg"
        food_desc1_2.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_3.innerText = "Pé de Moleque"
        food_img1_3.src = "../Images/modelo.jpg"
        food_desc1_3.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        food_name1_4.innerText = "Paçoca com Banana"
        food_img1_4.src = "../Images/modelo.jpg"
        food_desc1_4.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, quaerat? Odit omnis id libero, corporis deleniti iusto tempore tenetur enim, temporibus veniam nostrum voluptate! Enim at debitis vitae officiis natus."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083457.8505257973!2d-64.10488380441548!3d1.844161315734518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638976305616!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Nas regiões mais elevadas do estado não há um período seco bem definido e a temperatura do mês mais frio costuma oscilar entre 15° e 20 °C. Nas regiões de menor altitude, a temperatura média mínima mensal é de 20 °C e a média máxima de 38 °C. Nas áreas planas a temperatura média mensal está acima de 26 °C. O longo período de chuvas e a deficiente drenagem organizada permitem uma acumulação ininterrupta de água. Enquanto todas quase todas as capitais brasileiras estão na primavera, Boa Vista é a única delas a estar no outono, por estar localizada acima da linha do Equador."

        travel_desc1.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço das passagens aéreas é acima de R$986, e a duração do voo pode variar entre 3h30 e 9h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Pará"
        statetxt2.innerText = "O estado do Pará, está localizado na região norte do Brasil, abriga o Parque Nacional da Amazônia. O parque protege uma grande área da densa floresta Amazônica e abriga milhares de animais. Boa parte desta área é alagada todos os anos, tornando o acesso a essas áreas distantes somente por barco. Próxima da desembocadura do Rio Amazonas está Belém, a capital do Pará. Famosa por sua arquitetura colonial e pelo mercado Ver-o-Peso às margens do rio. Nos dias atuais, o Pará é um dos principais produtores de ferro e ouro do Brasil, além disso, a cultura desse estado é marcada por influências indígenas e religiosas."
        state_img2.src = "https://1.bp.blogspot.com/-x5Qwp8dbH9Y/XpOWRimbXoI/AAAAAAAAp1w/rRk810ou8js3_hTOCxry7ATsvyRFTsHLQCLcBGAsYHQ/s1600/esta%25C3%25A7%25C3%25A3o-das-docas-belem-do-para.jpg"

        food_name2_1.innerText = "Pato no Tucupi"
        food_img2_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc2_1.innerText = "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil, porém em especial do estado do Pará. É elaborado com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva típica da região norte. Pode ser acompanhado por arroz branco ou farinha-d'água de mandioca."

        food_name2_2.innerText = "Maniçoba"
        food_img2_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc2_2.innerText = "A Maniçoba é um prato de origem indígena, típico da culinária paraense e amapaense. Pela origem da folha de que é produzido, surgiu provavelmente entre aldeias indígenas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca moída."

        food_name2_3.innerText = "Tacacá"
        food_img2_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacacá_Cred-Kato-1.jpg"
        food_desc2_3.innerText = "Tacacá é um prato típico da Região Amazônica de origem indígena. É muito apreciado em várias localidades da região Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, também servida com jambu e camarão seco."

        food_name2_4.innerText = "Chibé"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc2_4.innerText = "Chibé ou Jacuba é uma bebida brasileira típica da culinária tupi É uma bebida com um gosto levemente ácido. É feito misturando de farinha de mandioca e água. Os grãos de farinha incham, resultando em uma textura semelhante a fubá. Pode ser acompanhado de sal, pimenta ou outros temperos salgados à gosto."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310730.867194925!2d-61.52762278360523!3d-3.5616704612925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2zUGFyw6E!5e0!3m2!1spt-BR!2sbr!4v1638972167247!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O estado tem a segunda maior extensão do Brasil (1.245.759,305 km²) -, tem seu interior a predominância do Clima Equatorial Quente e Úmido. Entretanto, como sua área é muito extensa, existem algumas variabilidades nos tipos climáticos do Estado, que segundo a classificação de Köppen destacam-se mais dois: o Clima Equatorial Semiúmido e o Clima Tropical Equatorial de Savanas. A temperatura média anual é de 26 °C, e esse clima se caracteriza por possuir amplitudes térmicas maiores em relação ao Clima Equatorial. Isso ocorre devida à influência da Continentalidade nas temperaturas diárias."

        travel_desc2.innerText = "O custo total de uma viagem de cinco dias inteiros (quatro dias inteiros e dois “meios dias”) e seis noites em Belém é em média R$ 1.148 por pessoa. Porém o preço pode sofrer alteração, caso a pessoa queira ficar mais dias, escolha ficar em hotéis de 4 ou 5 estrelas e várias outras coisas podem influenciar no preço total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Acre"
        statetxt3.innerText = "O estado de Rondônia, fica localizado na região norte do Brasil, e sua capital é é Porto Velho, banhada pelo rio Madeira. Além deste, há outros destinos importantes como: Ariquemes, Cacoal, Guajará-Mirim, Ji-Paraná, Rolim de Moura e Vilhena."
        state_img3.src = "tata"

        food_name3_1.innerText = "Torta de Cupuaçu"
        food_img3_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc3_1.innerText = "Pato no tucupi é um prato brasileiro típico da culinária da região Norte do Brasil, porém em especial do estado do Pará. É elaborado com tucupi, líquido de cor amarela extraído da raiz da mandioca brava, e com jambu, erva típica da região norte. Pode ser acompanhado por arroz branco ou farinha-d'água de mandioca."

        food_name3_2.innerText = "Doce de Buriti"
        food_img3_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc3_2.innerText = "A Maniçoba é um prato de origem indígena, típico da culinária paraense e amapaense. Pela origem da folha de que é produzido, surgiu provavelmente entre aldeias indígenas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca moída."

        food_name3_3.innerText = "Pirarucu Rondon"
        food_img3_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacacá_Cred-Kato-1.jpg"
        food_desc3_3.innerText = "Tacacá é um prato típico da Região Amazônica de origem indígena. É muito apreciado em várias localidades da região Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, também servida com jambu e camarão seco."

        food_name3_4.innerText = "Tacacá"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc3_4.innerText = "Chibé ou Jacuba é uma bebida brasileira típica da culinária tupi É uma bebida com um gosto levemente ácido. É feito misturando de farinha de mandioca e água. Os grãos de farinha incham, resultando em uma textura semelhante a fubá. Pode ser acompanhado de sal, pimenta ou outros temperos salgados à gosto."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012850.4642982725!2d-65.5369612909414!3d-10.826667114104417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cd96f516b57%3A0x733763d5340621dd!2zUm9uZMO0bmlh!5e0!3m2!1spt-BR!2sbr!4v1638976435117!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "A região tem altíssima umidade e a temperatura média está em torno de 26ºC. A variação de temperatura é pequena, mas neste estado do norte ocorre um fenômeno climático atípico. A “friagem” faz com que os termômetros baixem vários graus de forma brusca, podendo chegar até 10°C."

        travel_desc3.innerText = "O preço da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A média de preço do voo é acima de R$975, e a duração do voo pode variar entre 4h e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
	} else if(fregiao == 5 && fclima == 4) {
		
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