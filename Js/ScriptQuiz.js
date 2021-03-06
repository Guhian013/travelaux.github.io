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
        } else if (selectedButton.dataset.value >= 5 && selectedButton.dataset.value <= 9) {
            pt = selectedButton.dataset.value
            setRegiao(pt)
        } else if (selectedButton.dataset.value >= 10 && selectedButton.dataset.value <= 13) {
            pt = selectedButton.dataset.value
            setTransporte(pt)
        }
        bool = false
    }
    if (options.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = "Recome??ar"
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
            sub_text.innerText = "Esses s??o os estados que recomendamos para voc??! Saiba mais sobre eles apertando a setinha no canto direito! :D"
        })
    }
}

function setClima(value) {
    fclima = value
    console.log("Clima: " + fclima)
}

function setRegiao(value) {
    fregiao = value
    console.log("Regi??o: " + fregiao)
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
        place1txt.innerText = "Amap??"
        statetxt1.innerText = "Amap?? ?? um estado no norte do Brasil que faz fronteira com o Suriname, a Guiana Francesa e o Oceano Atl??ntico. A floresta amaz??nica abrange uma grande parte da sua ??rea e o rio Oiapoque faz parte da sua fronteira a norte. No sul, a capital, Macap??, ?? conhecida pela Fortaleza de S??o Jos?? de Macap??, situada ?? beira-mar, um forte portugu??s do s??culo XVIII, e pelo Monumento do Marco Zero, um obelisco que marca o equador."
        state_img1.src = "https://amapaecocamping.com.br/wp-content/uploads/2020/10/Macapa-capital-do-estado-do-Amapa-1024x768.jpeg"

        food_name1_1.innerText = "Pescada de Gurijuba"
        food_img1_1.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/pescada-de-gurijuba.jpg"
        food_desc1_1.innerText = "?? muito comum o uso de peixes como ingrediente em pratos t??picos da regi??o amaz??nica, uma vez que eles s??o abundantes por ali. No caso da gurijuba, embora esse peixe possa ser encontrado em quase qualquer rio da regi??o, a receita da pescada est?? firmada no Amap??."

        food_name1_2.innerText = "Tucunar?? na brasa"
        food_img1_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tucunare-na-brasa.jpg"
        food_desc1_2.innerText = "O tucunar?? possui receitas em diversos estados da regi??o Norte. Assim como no Acre o tucunar?? recheado ?? um prato t??pico, no Amap?? ?? mais comum comer o tucunar?? na brasa, com um tempero bem leve, apenas lim??o sal e pimenta do reino. Uma outra receita comum ?? a caldeirada de tucunar??."

        food_name1_3.innerText = "Camar??o no Bafo"
        food_img1_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/camarao-ao-bafo.jpg"
        food_desc1_3.innerText = "O Amap?? ?? um dos estados nortistas que ?? banhado pelo Oceano Atl??ntico, e por possuir um litoral, frutos do mar tamb??m fazem parte da sua culin??ria. Um desses ingredientes ?? o camar??o, e a receita t??pica preparada com ele ?? o camar??o no bafo, que leva um pouco de cacha??a de alambique, pimenta dedo de mo??a, cebola e tomate."

        food_name1_4.innerText = "Tacac??"
        food_img1_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-amapa-tacaca/545-121725-culinaria-amapense-tacaca-foto-carismaticos-do-santuariogr.jpg"
        food_desc1_4.innerText = "Preparado com tucupi (que ?? o sumo retirado da raiz da mandioca brava), goma de mandioca e camar??o. Seu tempero leva pimenta de cheiro, alho, sal e jambu, um tipo de erva t??pica da regi??o."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083987.4528746754!2d-54.620577521026256!3d1.596783970843328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d653d73cd997b21%3A0x911a614576f6bcd4!2zQW1hcMOh!5e0!3m2!1spt-BR!2sbr!4v1638791542883!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Amap?? ?? predominantemente equatorial ??mido ou tropical super ??mido, devido ?? influ??ncia da Floresta Amaz??nica em seu territ??rio. Desse modo, o seu clima ?? marcado por altas temperaturas, e elevados ??ndices pluviom??tricos."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Amap?? est?? em uma m??dia de R$ 836 (atualmente) dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Tocantins"
        statetxt2.innerText = "Tocantins ?? um estado na regi??o norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e planta????es de soja. A capital moderna, Palmas, foi constru??da propositadamente no centro geogr??fico do estado e est?? rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaru??u do Porto ?? um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de ??gua. H?? tamb??m pontos tur??sticos como: Parque estadual do Jalap??o, fervedouro do cei??a, pal??cio Araguaia e etc."
        state_img2.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name2_1.innerText = "Chambari"
        food_img2_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc2_1.innerText = "O chambari ?? uma adapta????o tocantinense do ???ossobuco??? italiano, que significa, literalmente, osso furado. No Tocantins, o osso ?? cortado horizontalmente e cozido com pimenta e temperos. O chambari ?? servido com arroz, cheiro verde e, com frequ??ncia, tamb??m com farinha de mandioca e muita pimenta."

        food_name2_2.innerText = "Amor Perfeito"
        food_img2_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc2_2.innerText = "A f??cula da raiz de mandioca - tamb??m chamada de tapioca -, leite de coco, a????car refinado, manteiga de leite. Estes s??o os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensa????o que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name2_3.innerText = "Pa??oca de Carne de Sol"
        food_img2_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc2_3.innerText = "Em quest??o de praticidade, poucos alimentos ganham da pa??oca de carne seca. Re??ne poucos ingredientes, mant??m a qualidade por v??rios dias sem necessidade de geladeira e ?? razoavelmente f??cil de fazer. A iguaria ?? consumida em todas as regi??es, mas tem como principal refer??ncia a hist??rica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name2_4.innerText = "Peixe no Leite de Coco Baba??u"
        food_img2_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/peixe-no-leite-de-coco-babacu.jpg"
        food_desc2_4.innerText = "Outra especialidade tocantinense ?? o peixe no leite de coco baba??u. Essa receita ?? preparada com caris, cheiro-verde, tomate, cebola, pimenta-de-cheiro e leite de coco baba??u. Depois dos caris limpos, o peixe ?? colocado para ferver junto com os temperos para formar um molho. Depois disso, ?? acrescentado o leite de coco, sempre mexendo para n??o talhar."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Em Tocantins, a esta????o com precipita????o ?? quente, abafada e de c??u quase encoberto; a esta????o seca ?? morna e de c??u quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 ??C a 31 ??C e raramente ?? inferior a 11 ??C ou superior a 36 ??C. O m??s mais quente do ano em Tocantins ?? fevereiro, com a m??xima de 31 ??C e m??nima de 21 ??C, em m??dia, j?? o m??s mais frio ?? junho com m??xima de 15 ??C e m??nima de 27 ??C em m??dia."

        travel_desc2.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalap??o + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma ??nica pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Par??"
        statetxt3.innerText = "O estado do Par??, est?? localizado na regi??o norte do Brasil, abriga o Parque Nacional da Amaz??nia. O parque protege uma grande ??rea da densa floresta Amaz??nica e abriga milhares de animais. Boa parte desta ??rea ?? alagada todos os anos, tornando o acesso a essas ??reas distantes somente por barco. Pr??xima da desembocadura do Rio Amazonas est?? Bel??m, a capital do Par??. Famosa por sua arquitetura colonial e pelo mercado Ver-o-Peso ??s margens do rio. Nos dias atuais, o Par?? ?? um dos principais produtores de ferro e ouro do Brasil, al??m disso, a cultura desse estado ?? marcada por influ??ncias ind??genas e religiosas."
        state_img3.src = "https://1.bp.blogspot.com/-x5Qwp8dbH9Y/XpOWRimbXoI/AAAAAAAAp1w/rRk810ou8js3_hTOCxry7ATsvyRFTsHLQCLcBGAsYHQ/s1600/esta%25C3%25A7%25C3%25A3o-das-docas-belem-do-para.jpg"

        food_name3_1.innerText = "Pato no Tucupi"
        food_img3_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc3_1.innerText = "Pato no tucupi ?? um prato brasileiro t??pico da culin??ria da regi??o Norte do Brasil, por??m em especial do estado do Par??. ?? elaborado com tucupi, l??quido de cor amarela extra??do da raiz da mandioca brava, e com jambu, erva t??pica da regi??o norte. Pode ser acompanhado por arroz branco ou farinha-d'??gua de mandioca."

        food_name3_2.innerText = "Mani??oba"
        food_img3_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc3_2.innerText = "A Mani??oba ?? um prato de origem ind??gena, t??pico da culin??ria paraense e amapaense. Pela origem da folha de que ?? produzido, surgiu provavelmente entre aldeias ind??genas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca mo??da."

        food_name3_3.innerText = "Tacac??"
        food_img3_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacac??_Cred-Kato-1.jpg"
        food_desc3_3.innerText = "Tacac?? ?? um prato t??pico da Regi??o Amaz??nica de origem ind??gena. ?? muito apreciado em v??rias localidades da regi??o Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, tamb??m servida com jambu e camar??o seco."

        food_name3_4.innerText = "Chib??"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc3_4.innerText = "Chib?? ou Jacuba ?? uma bebida brasileira t??pica da culin??ria tupi ?? uma bebida com um gosto levemente ??cido. ?? feito misturando de farinha de mandioca e ??gua. Os gr??os de farinha incham, resultando em uma textura semelhante a fub??. Pode ser acompanhado de sal, pimenta ou outros temperos salgados ?? gosto."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310730.867194925!2d-61.52762278360523!3d-3.5616704612925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2zUGFyw6E!5e0!3m2!1spt-BR!2sbr!4v1638972167247!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado tem a segunda maior extens??o do Brasil (1.245.759,305 km??) -, tem seu interior a predomin??ncia do Clima Equatorial Quente e ??mido. Entretanto, como sua ??rea ?? muito extensa, existem algumas variabilidades nos tipos clim??ticos do Estado, que segundo a classifica????o de K??ppen destacam-se mais dois: o Clima Equatorial Semi??mido e o Clima Tropical Equatorial de Savanas. A temperatura m??dia anual ?? de 26 ??C, e esse clima se caracteriza por possuir amplitudes t??rmicas maiores em rela????o ao Clima Equatorial. Isso ocorre devida ?? influ??ncia da Continentalidade nas temperaturas di??rias."

        travel_desc3.innerText = "O custo total de uma viagem de cinco dias inteiros (quatro dias inteiros e dois ???meios dias???) e seis noites em Bel??m ?? em m??dia R$ 1.148 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
    } else if(fregiao == 5 && fclima == 2) {
		place1txt.innerText = "Roraima"
        statetxt1.innerText = "O estado de Roraima localizado na regi??o norte do Brasil, ?? conhecido pela Floresta Amaz??nica. A capital, Boa Vista, na margem oeste de Rio Branco, fica pr??xima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos ??ngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspira????o de Sir Arthur Conan Doyle para O Mundo Perdido."
        state_img1.src = "https://www.oikostravel.com.br/wp-content/uploads/2020/07/Expedi????o-Monte-Roraima.jpg"

        food_name1_1.innerText = "Caldeirada"
        food_img1_1.src = "http://s2.glbimg.com/uZqdjuwmg02KKizUlii9S4x6g-A=/s.glbimg.com/og/rg/f/original/2014/09/05/redeam_bda_peixe_05092014.jpg"
        food_desc1_1.innerText = "Prato muito comum no estado, a caldeirada ?? uma forma de prepara????o de peixe, que ?? limpo e cortado em peda??os, colocado em um caldeir??o com temperos (cebola, tomate, piment??o, cheiro verde e pimenta-de-cheiro) refogados em ??leo e cozidos em ??gua."

        food_name1_2.innerText = "Pirarucu Desfiado"
        food_img1_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pirarucu-desfiado.jpg"
        food_desc1_2.innerText = "?? uma forma t??pica roraimense de preparar o pirarucu. O peixe ?? lavado com ??gua e lim??o, escaldado no fogo e desfiado, retirando-se todas as espinhas. ?? refogado em uma panela com ??leo e temperos, e a esses ingredientes ?? acrescentado leite de coco ou de castanha do Par??."

        food_name1_3.innerText = "Guisado de Galinha Caipira"
        food_img1_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/guisado-de-galinha-caipira.jpg"
        food_desc1_3.innerText = "Um tipo de receita muito popular na regi??o. A galinha ?? cortada em peda??os, guisada em ??leo, cebola, alho, pimenta-do-reino, pimenta-de-cheiro, tomate, sal, cheiro verde e colorau. Acompanha pir??o feito com o pr??prio caldo."

        food_name1_4.innerText = "Pa??oca com Banana"
        food_img1_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pacoca-com-banana.jpg"
        food_desc1_4.innerText = "Prato preparado com farinha, banana e carne bovina bem seca ou charque batida no pil??o. ?? indicado pelos roraimenses como ideal para viagens por conservar-se durante muitos dias fora da geladeira."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083457.8505257973!2d-64.10488380441548!3d1.844161315734518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638976305616!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Nas regi??es mais elevadas do estado n??o h?? um per??odo seco bem definido e a temperatura do m??s mais frio costuma oscilar entre 15?? e 20 ??C. Nas regi??es de menor altitude, a temperatura m??dia m??nima mensal ?? de 20 ??C e a m??dia m??xima de 38 ??C. Nas ??reas planas a temperatura m??dia mensal est?? acima de 26 ??C. O longo per??odo de chuvas e a deficiente drenagem organizada permitem uma acumula????o ininterrupta de ??gua. Enquanto todas quase todas as capitais brasileiras est??o na primavera, Boa Vista ?? a ??nica delas a estar no outono, por estar localizada acima da linha do Equador."

        travel_desc1.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o das passagens a??reas ?? acima de R$986, e a dura????o do voo pode variar entre 3h30 e 9h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Tocantins"
        statetxt2.innerText = "Tocantins ?? um estado na regi??o norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e planta????es de soja. A capital moderna, Palmas, foi constru??da propositadamente no centro geogr??fico do estado e est?? rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaru??u do Porto ?? um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de ??gua. H?? tamb??m pontos tur??sticos como: Parque estadual do Jalap??o, fervedouro do cei??a, pal??cio Araguaia e etc."
        state_img2.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name2_1.innerText = "Chambari"
        food_img2_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc2_1.innerText = "O chambari ?? uma adapta????o tocantinense do ???ossobuco??? italiano, que significa, literalmente, osso furado. No Tocantins, o osso ?? cortado horizontalmente e cozido com pimenta e temperos. O chambari ?? servido com arroz, cheiro verde e, com frequ??ncia, tamb??m com farinha de mandioca e muita pimenta."

        food_name2_2.innerText = "Amor Perfeito"
        food_img2_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc2_2.innerText = "A f??cula da raiz de mandioca - tamb??m chamada de tapioca -, leite de coco, a????car refinado, manteiga de leite. Estes s??o os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensa????o que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name2_3.innerText = "Pa??oca de Carne de Sol"
        food_img2_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc2_3.innerText = "Em quest??o de praticidade, poucos alimentos ganham da pa??oca de carne seca. Re??ne poucos ingredientes, mant??m a qualidade por v??rios dias sem necessidade de geladeira e ?? razoavelmente f??cil de fazer. A iguaria ?? consumida em todas as regi??es, mas tem como principal refer??ncia a hist??rica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name2_4.innerText = "Peixe no Leite de Coco Baba??u"
        food_img2_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/peixe-no-leite-de-coco-babacu.jpg"
        food_desc2_4.innerText = "Outra especialidade tocantinense ?? o peixe no leite de coco baba??u. Essa receita ?? preparada com caris, cheiro-verde, tomate, cebola, pimenta-de-cheiro e leite de coco baba??u. Depois dos caris limpos, o peixe ?? colocado para ferver junto com os temperos para formar um molho. Depois disso, ?? acrescentado o leite de coco, sempre mexendo para n??o talhar."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Em Tocantins, a esta????o com precipita????o ?? quente, abafada e de c??u quase encoberto; a esta????o seca ?? morna e de c??u quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 ??C a 31 ??C e raramente ?? inferior a 11 ??C ou superior a 36 ??C. O m??s mais quente do ano em Tocantins ?? fevereiro, com a m??xima de 31 ??C e m??nima de 21 ??C, em m??dia, j?? o m??s mais frio ?? junho com m??xima de 15 ??C e m??nima de 27 ??C em m??dia."

        travel_desc2.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalap??o + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma ??nica pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rond??nia"
        statetxt3.innerText = "O estado de Rond??nia, fica localizado na regi??o norte do Brasil, e sua capital ?? Porto Velho, banhada pelo rio Madeira. Al??m deste, h?? outros destinos importantes como: Ariquemes, Cacoal, Guajar??-Mirim, Ji-Paran??, Rolim de Moura e Vilhena."
        state_img3.src = "https://rondonia.ro.gov.br/wp-content/uploads/2020/07/CPA-Pal??cio-Rio-Madeira-14.07.20-Fotos-Frank-Nery-13.jpg"

        food_name3_1.innerText = "Torta de Cupua??u"
        food_img3_1.src = "https://www.visiteobrasil.com.br/galerias/carac8-rondonia-torta-de-cupuacu/563-011122-culinaria-rondoniense-torta-de-cupuacu-foto-reproducao-tv-liberalgr.jpg"
        food_desc3_1.innerText = "Algumas frutas t??picas da regi??o s??o bastante usadas em receitas de tortas e outros tipos de sobremesa. O cupua??u ?? uma delas. A fruta ?? parente pr??xima do cacau, e por conta disso seu gosto muitas vezes se assemelha ao do chocolate. Al??m de tortas, o cupua??u pode ser usado para fazer bombons e at?? mesmo receitas de sabor azedo."

        food_name3_2.innerText = "Doce de Buriti"
        food_img3_2.src = "https://www.visiteobrasil.com.br/galerias/carac8-rondonia-doce-de-buriti/564-011742-culinaria-rondoniense-doce-de-buriti-foto-marilene-ribeiro-ci-divulgacaogr.jpg"
        food_desc3_2.innerText = "Outra fruta que ?? bastante usada na gastronomia rondoniense ?? o buriti. Apesar de ser empregada na confec????o de tipos de produtos, de sabonetes a verm??fugos, a fruta ?? rica em vitaminas e c??lcio, o que valoriza ainda mais o seu doce."

        food_name3_3.innerText = "Pirarucu Rondon"
        food_img3_3.src = "http://s2.glbimg.com/b2d8-Sxy0XWkmRpSvEPk1VLE9B0=/620x465/s2.glbimg.com/kiRb3cZOcOxgmw0_Dscmq-CxsPQ=/620x465/s.glbimg.com/jo/g1/f/original/2016/08/18/img_6105.jpg"
        food_desc3_3.innerText = "A receita do Pirarucu Rondon ?? um prato bem t??pico do estado, tem cinco ingredientes e leva at?? 35 minutos para ficar pronto. O prato ?? composto pelo pirarucu, jambu, macaxeira, batata doce, tucupi"

        food_name3_4.innerText = "Tacac??"
        food_img3_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-rondonia-tacaca/561-011056-culinaria-rondoniense-tacaca-de-rondonia-foto-baenningergr.jpg"
        food_desc3_4.innerText = "Tacac?? ?? uma comida regional muito diferente, preparada com o tucup?? (caldo da mandioca), previamente fervido com alho e chic??ria), camar??es secos gra??dos, goma (mingau feito com uma massa fina e branca, resultado da lavagem da mandioca ralada) e jamb?? (planta considerada afrodis??aca)."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4012850.4642982725!2d-65.5369612909414!3d-10.826667114104417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92325cd96f516b57%3A0x733763d5340621dd!2zUm9uZMO0bmlh!5e0!3m2!1spt-BR!2sbr!4v1638976435117!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "A regi??o tem alt??ssima umidade e a temperatura m??dia est?? em torno de 26??C. A varia????o de temperatura ?? pequena, mas neste estado do norte ocorre um fen??meno clim??tico at??pico. A ???friagem??? faz com que os term??metros baixem v??rios graus de forma brusca, podendo chegar at?? 10??C."

        travel_desc3.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o do voo ?? acima de R$975, e a dura????o do voo pode variar entre 4h e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
	} else if(fregiao == 5 && fclima == 3) {
		place1txt.innerText = "Amazonas"
        statetxt1.innerText = "Amazonas ?? um enorme estado no noroeste do Brasil, coberto quase na sua totalidade pela floresta tropical da Amaz??nia. A capital, Manaus, ?? um porto fluvial com pontos de refer??ncia que datam do ciclo da borracha de finais do s??culo XIX, incluindo o Teatro Amazonas, uma grande casa de ??pera. A cidade marca o Encontro das ??guas, onde o rio Negro, de ??gua negra, e o rio Solim??es se juntam para formar o rio Amazonas."
        state_img1.src = "https://cdn.falauniversidades.com.br/wp-content/uploads/2021/04/19161129/Amazonas.jpg"

        food_name1_1.innerText = "Tapioca"
        food_img1_1.src = "https://www.u-amazon.com/blogs/wp-content/uploads/2021/05/3-4-1024x683.png"
        food_desc1_1.innerText = "A tapioca, ou beiju, ?? uma iguaria de origem ind??gena tupi-guarani, feita com a goma da tapioca. O recheio ir?? variar, podendo ser apreciada apenas com manteiga, com queijo ou mesmo com tucum??, uma fruta t??pica da regi??o."

        food_name1_2.innerText = "Guaran??"
        food_img1_2.src = "https://www.u-amazon.com/blogs/wp-content/uploads/2021/05/4-4-1024x683.png"
        food_desc1_2.innerText = "O guaran?? ?? um cip?? origin??rio da Amaz??nia. Seus frutos s??o utilizados para fazer bebida ou s??o transformados em p??. Com propriedades estimulantes, ?? normalmente adicionado a sucos e a vitaminas."

        food_name1_3.innerText = "Tucunar??"
        food_img1_3.src = "https://www.u-amazon.com/blogs/wp-content/uploads/2021/05/5-5-1024x683.png"
        food_desc1_3.innerText = "Esp??cie de peixe que se torna um ingrediente vers??til e muito saboroso, usado em caldeiradas ou servido frito, ?? milanesa."

        food_name1_4.innerText = "Brigadeiro de Tucupi"
        food_img1_4.src = "https://s2.glbimg.com/dxnFkU4t5WM_Ao2NOmZhJV2DePk=/620x455/e.glbimg.com/og/ed/f/original/2018/10/19/brigadeiro-de-tucupi.jpg"
        food_desc1_4.innerText = "O doce ?? feito com tucupi preto, que ?? o mela??o do tradicional tucupi ??? sumo amarelo extra??do da ra??z da mandioca. A receita leva 30 minutos para ficar pronta e rende 20 por????es."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16307384.704508508!2d-73.99534554581057!3d-3.745764141344254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92183f5c8b1d6ed1%3A0x176d6af66b3c2efa!2sAmazonas!5e0!3m2!1spt-BR!2sbr!4v1639057872387!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima de Amazonas ?? considerado tropical ??mido de mon????o, com temperatura m??dia compensada anual de 27 ??C e umidade do ar relativamente elevada, com ??ndice pluviom??trico em torno de 2 300 mil??metros (mm) anuais."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Manaus (Capital de Amazonas) varia em m??dia de R$ 580 ?? R$ 1450 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Par??"
        statetxt2.innerText = "O estado do Par??, est?? localizado na regi??o norte do Brasil, abriga o Parque Nacional da Amaz??nia. O parque protege uma grande ??rea da densa floresta Amaz??nica e abriga milhares de animais. Boa parte desta ??rea ?? alagada todos os anos, tornando o acesso a essas ??reas distantes somente por barco. Pr??xima da desembocadura do Rio Amazonas est?? Bel??m, a capital do Par??. Famosa por sua arquitetura colonial e pelo mercado Ver-o-Peso ??s margens do rio. Nos dias atuais, o Par?? ?? um dos principais produtores de ferro e ouro do Brasil, al??m disso, a cultura desse estado ?? marcada por influ??ncias ind??genas e religiosas."
        state_img2.src = "https://1.bp.blogspot.com/-x5Qwp8dbH9Y/XpOWRimbXoI/AAAAAAAAp1w/rRk810ou8js3_hTOCxry7ATsvyRFTsHLQCLcBGAsYHQ/s1600/esta%25C3%25A7%25C3%25A3o-das-docas-belem-do-para.jpg"

        food_name2_1.innerText = "Pato no Tucupi"
        food_img2_1.src = "https://t2.rg.ltmcdn.com/pt/images/4/1/9/img_pato_no_tucupi_paraense_2914_orig.jpg"
        food_desc2_1.innerText = "Pato no tucupi ?? um prato brasileiro t??pico da culin??ria da regi??o Norte do Brasil, por??m em especial do estado do Par??. ?? elaborado com tucupi, l??quido de cor amarela extra??do da raiz da mandioca brava, e com jambu, erva t??pica da regi??o norte. Pode ser acompanhado por arroz branco ou farinha-d'??gua de mandioca."

        food_name2_2.innerText = "Mani??oba"
        food_img2_2.src = "https://www.portalr3.com.br/wp-content/uploads/2021/01/20210128-manicoba.jpg"
        food_desc2_2.innerText = "A Mani??oba ?? um prato de origem ind??gena, t??pico da culin??ria paraense e amapaense. Pela origem da folha de que ?? produzido, surgiu provavelmente entre aldeias ind??genas no norte brasileiro, embora seja comumente apontado como uma comida paraense. Tem como principal ingrediente a maniva, a folha da mandioca mo??da."

        food_name2_3.innerText = "Tacac??"
        food_img2_3.src = "https://www.prazeresdamesa.com.br/wp-content/uploads/2020/09/BanzeiroSP_Tacac??_Cred-Kato-1.jpg"
        food_desc2_3.innerText = "Tacac?? ?? um prato t??pico da Regi??o Amaz??nica de origem ind??gena. ?? muito apreciado em v??rias localidades da regi??o Norte do Brasil. Preparado com um caldo amarelado, chamado tucupi. Coloca-se esse caldo por cima da goma de mandioca, tamb??m servida com jambu e camar??o seco."

        food_name2_4.innerText = "Chib??"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2017/04/am2.png?fit=1024%2C536&ssl=1"
        food_desc2_4.innerText = "Chib?? ou Jacuba ?? uma bebida brasileira t??pica da culin??ria tupi ?? uma bebida com um gosto levemente ??cido. ?? feito misturando de farinha de mandioca e ??gua. Os gr??os de farinha incham, resultando em uma textura semelhante a fub??. Pode ser acompanhado de sal, pimenta ou outros temperos salgados ?? gosto."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16310730.867194925!2d-61.52762278360523!3d-3.5616704612925862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9288f999ac2c0997%3A0x315ec83ee755f30a!2zUGFyw6E!5e0!3m2!1spt-BR!2sbr!4v1638972167247!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O estado tem a segunda maior extens??o do Brasil (1.245.759,305 km??) -, tem seu interior a predomin??ncia do Clima Equatorial Quente e ??mido. Entretanto, como sua ??rea ?? muito extensa, existem algumas variabilidades nos tipos clim??ticos do Estado, que segundo a classifica????o de K??ppen destacam-se mais dois: o Clima Equatorial Semi??mido e o Clima Tropical Equatorial de Savanas. A temperatura m??dia anual ?? de 26 ??C, e esse clima se caracteriza por possuir amplitudes t??rmicas maiores em rela????o ao Clima Equatorial. Isso ocorre devida ?? influ??ncia da Continentalidade nas temperaturas di??rias."

        travel_desc2.innerText = "O custo total de uma viagem de cinco dias inteiros (quatro dias inteiros e dois ???meios dias???) e seis noites em Bel??m ?? em m??dia R$ 1.148 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Acre"
        statetxt3.innerText = "Acre ?? um estado no noroeste do Brasil, na Floresta Amaz??nica. ?? conhecido pela quantidade de ??rvores-da-borracha e castanhas-do-brasil. Na fronteira peruana, a oeste, o Parque Nacional da Serra do Divisor possui montanhas elevadas e v??rias quedas de ??gua, al??m de diversas esp??cies animais, como tatus-gigantes, tapires e aves raras. A sudeste, encontra-se Rio Branco, a capital do estado, nas margens do rio Acre."
        state_img3.src = "https://agencia.ac.gov.br/wp-content/uploads/2020/09/WhatsApp-Image-2020-01-06-at-09.15.29-1-C??pia-1200x673.jpeg"

        food_name3_1.innerText = "Tucunar?? recheado"
        food_img3_1.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tucunare-recheado.jpg"
        food_desc3_1.innerText = "Esta receita utiliza um dos peixes comuns na bacia hidrogr??fica amaz??nica. O tucunar?? ?? aberto pelo lombo e tem sua tripas retiradas, depois ?? recheado com legumes cozidos e/ou batata doce, temperado com lim??o e pimenta-do-reino, e depois posto para assar. Um ponto importante para deixar o peixe suculento ?? coloc??-lo para marinar na vinha d???alho, que ?? basicamente vinho e alho."

        food_name3_2.innerText = "Pirarucu ?? Casaca"
        food_img3_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/pirarucu-a-casaca.jpg"
        food_desc3_2.innerText = "Este prato ?? muito comum no estado do Amazonas, principalmente em Manaus, por??m ?? muito apreciado tamb??m no Acre. O pirarucu ?? cascata tamb??m leva farinha de mandioca, que ?? conhecida na regi??o como farinha d?????gua. Os ingredientes s??o todos montados em camadas."

        food_name3_3.innerText = "Saltenha"
        food_img3_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/saltenha.jpg"
        food_desc3_3.innerText = "A origem deste salgado ?? boliviana, e vale lembrar que a Bol??via detinha a posse do territ??rio que hoje corresponde ao Acre. A saltenha tornou-se um dos principais salgados do estado acreano, podendo ser encontrada em quase qualquer barraca ou lanchonete. Apesar de normalmente ser frita, tamb??m pode ser assada."

        food_name3_4.innerText = "Tambaqui Acreano"
        food_img3_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tambaqui-acreano.jpg"
        food_desc3_4.innerText = "Os peixes s??o o carro forte da culin??ria acreana. S??o diversas as receitas com carne branca que encontramos n??o s?? no Acre, mas em toda a Regi??o Norte. A receita do tambaqui acreano j?? foi premiada e usa as costelas do peixe."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8068242.876102725!2d-74.80123332555144!3d-9.102721649406758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x917f8daa4e9106b9%3A0x25ec0ac5083607c1!2sAcre!5e0!3m2!1spt-BR!2sbr!4v1639058810496!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima caracter??stico do Acre ?? o equatorial, que apresenta durante todo o ano altas temperaturas e elevada umidade."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Acre varia em m??dia de R$ 753 ?? R$ 998 (atualmente) dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
		
	} else if(fregiao == 5 && fclima == 4) {
        place1txt.innerText = "Tocantins"
        statetxt1.innerText = "Tocantins ?? um estado na regi??o norte do Brasil. Caracteriza-se pelo cerrado, rios vastos e planta????es de soja. A capital moderna, Palmas, foi constru??da propositadamente no centro geogr??fico do estado e est?? rodeada de colinas arborizadas. Ligeiramente a sudeste de Palmas, Taquaru??u do Porto ?? um destino de ecoturismo conhecido pelos trilhos de caminhada e pelas quedas de ??gua. H?? tamb??m pontos tur??sticos como: Parque estadual do Jalap??o, fervedouro do cei??a, pal??cio Araguaia e etc."
        state_img1.src = "https://terravistabrasil.com.br/wp-content/uploads/2020/05/jalapao-tocantins.jpg"

        food_name1_1.innerText = "Chambari"
        food_img1_1.src = "https://s2.glbimg.com/P4z_WgaVk6HqFVSGRiLJFMGAS7g=/0x0:751x600/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2013/01/24/17_23_15_959_142.jpg"
        food_desc1_1.innerText = "O chambari ?? uma adapta????o tocantinense do ???ossobuco??? italiano, que significa, literalmente, osso furado. No Tocantins, o osso ?? cortado horizontalmente e cozido com pimenta e temperos. O chambari ?? servido com arroz, cheiro verde e, com frequ??ncia, tamb??m com farinha de mandioca e muita pimenta."

        food_name1_2.innerText = "Amor Perfeito"
        food_img1_2.src = "https://central3.to.gov.br/arquivo/566317_1100x550.jpg"
        food_desc1_2.innerText = "A f??cula da raiz de mandioca - tamb??m chamada de tapioca -, leite de coco, a????car refinado, manteiga de leite. Estes s??o os poucos ingredientes de um biscoito que pelo sabor suave e a deliciosa sensa????o que provoca ao derreter na boca se tornou uma das iguarias mais famosas entre as cozinheiras do Estado, o 'Amor Perfeito'"

        food_name1_3.innerText = "Pa??oca de Carne de Sol"
        food_img1_3.src = "https://central3.to.gov.br/arquivo/566322_1000.jpg"
        food_desc1_3.innerText = "Em quest??o de praticidade, poucos alimentos ganham da pa??oca de carne seca. Re??ne poucos ingredientes, mant??m a qualidade por v??rios dias sem necessidade de geladeira e ?? razoavelmente f??cil de fazer. A iguaria ?? consumida em todas as regi??es, mas tem como principal refer??ncia a hist??rica  cidade de Arraias, localizada no Sudeste do Estado"

        food_name1_4.innerText = "Peixe no Leite de Coco Baba??u"
        food_img1_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/peixe-no-leite-de-coco-babacu.jpg"
        food_desc1_4.innerText = "Outra especialidade tocantinense ?? o peixe no leite de coco baba??u. Essa receita ?? preparada com caris, cheiro-verde, tomate, cebola, pimenta-de-cheiro e leite de coco baba??u. Depois dos caris limpos, o peixe ?? colocado para ferver junto com os temperos para formar um molho. Depois disso, ?? acrescentado o leite de coco, sempre mexendo para n??o talhar."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8064226.727237437!2d-52.732246131568964!3d-9.279032617095593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9323501f52b13997%3A0xe3d4866245cc396c!2sTocantins!5e0!3m2!1spt-BR!2sbr!4v1638795652289!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Em Tocantins, a esta????o com precipita????o ?? quente, abafada e de c??u quase encoberto; a esta????o seca ?? morna e de c??u quase sem nuvens. Ao longo do ano, em geral a temperatura varia de 14 ??C a 31 ??C e raramente ?? inferior a 11 ??C ou superior a 36 ??C. O m??s mais quente do ano em Tocantins ?? fevereiro, com a m??xima de 31 ??C e m??nima de 21 ??C, em m??dia, j?? o m??s mais frio ?? junho com m??xima de 15 ??C e m??nima de 27 ??C em m??dia."

        travel_desc1.innerText = "Um roteiro de 7 dias, sendo 5 dias completos no Jalap??o + o dia da chegada em Palmas e o dia do retorno. O valor, se for uma ??nica pessoa, fica na faixa de R$ 3.600. Separadamente o voo pode custar acima de R$380, e pode durar entre 2h20 e 6h."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Roraima"
        statetxt2.innerText = "O estado de Roraima localizado na regi??o norte do Brasil, ?? conhecido pela Floresta Amaz??nica. A capital, Boa Vista, na margem oeste de Rio Branco, fica pr??xima dos parques nacionais da Serra da Mocidade, a sudoeste, e do Monte Roraima, a norte. Com penhascos ??ngremes e um misterioso cume plano, o Monte Roraima, partilhado com a Venezuela e a Guiana, foi, presumivelmente, a inspira????o de Sir Arthur Conan Doyle para O Mundo Perdido."
        state_img2.src = "https://www.oikostravel.com.br/wp-content/uploads/2020/07/Expedi????o-Monte-Roraima.jpg"

        food_name2_1.innerText = "Caldeirada"
        food_img2_1.src = "http://s2.glbimg.com/uZqdjuwmg02KKizUlii9S4x6g-A=/s.glbimg.com/og/rg/f/original/2014/09/05/redeam_bda_peixe_05092014.jpg"
        food_desc2_1.innerText = "Prato muito comum no estado, a caldeirada ?? uma forma de prepara????o de peixe, que ?? limpo e cortado em peda??os, colocado em um caldeir??o com temperos (cebola, tomate, piment??o, cheiro verde e pimenta-de-cheiro) refogados em ??leo e cozidos em ??gua."

        food_name2_2.innerText = "Pirarucu Desfiado"
        food_img2_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pirarucu-desfiado.jpg"
        food_desc2_2.innerText = "?? uma forma t??pica roraimense de preparar o pirarucu. O peixe ?? lavado com ??gua e lim??o, escaldado no fogo e desfiado, retirando-se todas as espinhas. ?? refogado em uma panela com ??leo e temperos, e a esses ingredientes ?? acrescentado leite de coco ou de castanha do Par??."

        food_name2_3.innerText = "Guisado de Galinha Caipira"
        food_img2_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/guisado-de-galinha-caipira.jpg"
        food_desc2_3.innerText = "Um tipo de receita muito popular na regi??o. A galinha ?? cortada em peda??os, guisada em ??leo, cebola, alho, pimenta-do-reino, pimenta-de-cheiro, tomate, sal, cheiro verde e colorau. Acompanha pir??o feito com o pr??prio caldo."

        food_name2_4.innerText = "Pa??oca com Banana"
        food_img2_4.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/03/pacoca-com-banana.jpg"
        food_desc2_4.innerText = "Prato preparado com farinha, banana e carne bovina bem seca ou charque batida no pil??o. ?? indicado pelos roraimenses como ideal para viagens por conservar-se durante muitos dias fora da geladeira."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083457.8505257973!2d-64.10488380441548!3d1.844161315734518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d930671dfccf45b%3A0x695f00f29e9c7a14!2sRoraima!5e0!3m2!1spt-BR!2sbr!4v1638976305616!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "Nas regi??es mais elevadas do estado n??o h?? um per??odo seco bem definido e a temperatura do m??s mais frio costuma oscilar entre 15?? e 20 ??C. Nas regi??es de menor altitude, a temperatura m??dia m??nima mensal ?? de 20 ??C e a m??dia m??xima de 38 ??C. Nas ??reas planas a temperatura m??dia mensal est?? acima de 26 ??C. O longo per??odo de chuvas e a deficiente drenagem organizada permitem uma acumula????o ininterrupta de ??gua. Enquanto todas quase todas as capitais brasileiras est??o na primavera, Boa Vista ?? a ??nica delas a estar no outono, por estar localizada acima da linha do Equador."

        travel_desc2.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o das passagens a??reas ?? acima de R$986, e a dura????o do voo pode variar entre 3h30 e 9h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Amap??"
        statetxt3.innerText = "Amap?? ?? um estado no norte do Brasil que faz fronteira com o Suriname, a Guiana Francesa e o Oceano Atl??ntico. A floresta amaz??nica abrange uma grande parte da sua ??rea e o rio Oiapoque faz parte da sua fronteira a norte. No sul, a capital, Macap??, ?? conhecida pela Fortaleza de S??o Jos?? de Macap??, situada ?? beira-mar, um forte portugu??s do s??culo XVIII, e pelo Monumento do Marco Zero, um obelisco que marca o equador."
        state_img3.src = "https://amapaecocamping.com.br/wp-content/uploads/2020/10/Macapa-capital-do-estado-do-Amapa-1024x768.jpeg"

        food_name3_1.innerText = "Pescada de Gurijuba"
        food_img3_1.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/pescada-de-gurijuba.jpg"
        food_desc3_1.innerText = "?? muito comum o uso de peixes como ingrediente em pratos t??picos da regi??o amaz??nica, uma vez que eles s??o abundantes por ali. No caso da gurijuba, embora esse peixe possa ser encontrado em quase qualquer rio da regi??o, a receita da pescada est?? firmada no Amap??."

        food_name3_2.innerText = "Tucunar?? na brasa"
        food_img3_2.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/tucunare-na-brasa.jpg"
        food_desc3_2.innerText = "O tucunar?? possui receitas em diversos estados da regi??o Norte. Assim como no Acre o tucunar?? recheado ?? um prato t??pico, no Amap?? ?? mais comum comer o tucunar?? na brasa, com um tempero bem leve, apenas lim??o sal e pimenta do reino. Uma outra receita comum ?? a caldeirada de tucunar??."

        food_name3_3.innerText = "Camar??o no Bafo"
        food_img3_3.src = "https://www.estadosecapitaisdobrasil.com/wp-content/uploads/2015/01/camarao-ao-bafo.jpg"
        food_desc3_3.innerText = "O Amap?? ?? um dos estados nortistas que ?? banhado pelo Oceano Atl??ntico, e por possuir um litoral, frutos do mar tamb??m fazem parte da sua culin??ria. Um desses ingredientes ?? o camar??o, e a receita t??pica preparada com ele ?? o camar??o no bafo, que leva um pouco de cacha??a de alambique, pimenta dedo de mo??a, cebola e tomate."

        food_name3_4.innerText = "Tacac??"
        food_img3_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-amapa-tacaca/545-121725-culinaria-amapense-tacaca-foto-carismaticos-do-santuariogr.jpg"
        food_desc3_4.innerText = "Preparado com tucupi (que ?? o sumo retirado da raiz da mandioca brava), goma de mandioca e camar??o. Seu tempero leva pimenta de cheiro, alho, sal e jambu, um tipo de erva t??pica da regi??o."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083987.4528746754!2d-54.620577521026256!3d1.596783970843328!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d653d73cd997b21%3A0x911a614576f6bcd4!2zQW1hcMOh!5e0!3m2!1spt-BR!2sbr!4v1638791542883!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Amap?? ?? predominantemente equatorial ??mido ou tropical super ??mido, devido ?? influ??ncia da Floresta Amaz??nica em seu territ??rio. Desse modo, o seu clima ?? marcado por altas temperaturas, e elevados ??ndices pluviom??tricos."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Amap?? est?? em uma m??dia de R$ 836 (atualmente) dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

	} else if(fregiao == 6 && fclima == 1) {
        place1txt.innerText = "Piau??"
        statetxt1.innerText = "Piau?? ?? um estado no nordeste do Brasil conhecido pelos parques nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui s??tios arqueol??gicos com pinturas rupestres pr??-hist??ricas. Nas proximidades, o Parque Nacional Serra das Confus??es tem gigantescas forma????es rochosas e grandes ??reas de caatinga (vegeta????o semi??rida), onde vivem aves em risco de extin????o. As mangueiras ladeiam as ruas da capital ?? beira-rio, Teresina."
        state_img1.src = "https://exame.com/wp-content/uploads/2018/06/thinkstockphotos-886667882-e1528831390573.jpg"

        food_name1_1.innerText = "Maria Isabel"
        food_img1_1.src = "https://img-global.cpcdn.com/recipes/39eaaf2ac385653c/680x482cq70/foto-principal-da-receita-arroz-maria-isabel-do-piaui.webp"
        food_desc1_1.innerText = "Arroz Maria Isabel ?? um dos pratos que mais representam o Piau??, que surgiu entre as fam??lias mais humildes do estado. Conta a hist??ria, que os homens dessas fam??lias mais pobres, eram os que consumiam carnes. Uma m??e tirou um peda??o de carne, cortou em pedacinhos e misturou com arroz, para que toda fam??lia pudesse comer carne, e deu ao prato o nome das filhas, Maria e Izabel."

        food_name1_2.innerText = "Carne de Sol"
        food_img1_2.src = "https://s2.glbimg.com/U8uguGGrZTSnNV0F9mYE7Hw5VAI=/0x0:1237x692/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/p/B/qFHWsdT62dzJZoCICQ8g/captura-de-tela-2020-04-27-as-16.14.45.jpg"
        food_desc1_2.innerText = "A carne de sol, tamb??m conhecida como carne seca, ?? um alimento que come??ou a ser consumido no Brasil ainda no per??odo colonial. Com o tempo, o ingrediente se tornou um patrim??nio cultural do munic??pio de Campo Maior, localizado a 81 km de Teresina."

        food_name1_3.innerText = "Arroz com Capote"
        food_img1_3.src = "http://www.mulheresempreendedoraspi.com.br/site/wp-content/uploads/2017/03/dest-6.png"
        food_desc1_3.innerText = "A cria????o de galinha-da-angola, conhecida no Piau?? como capote, vem do processo de coloniza????o brasileiro. As aves vieram importadas da ??frica, e logo se adaptaram ao clima brasileiro. No Piau?? ela ?? muito apreciada na culin??ria, sobretudo no prato chaamdo arroz com capote, que tamb??m vai bem com o capote frito, feito farofa."

        food_name1_4.innerText = "Panelada Piauiense"
        food_img1_4.src = "https://meupiauioficial.com/wp-content/uploads/2017/05/panelada-do-piaui.jpg"
        food_desc1_4.innerText = "A Panelada Piauiense ?? uma das receitas mais famosas e saborosas do estado, simplesmente porque seu sabor ?? muito diferenciado e rico gastronomicamente, ?? aquele tipo de acompanhamento que faz qualquer outra comida ficar deliciosa. Esse prato ?? mais uma das criatividades do piau??. Habitualmente, ela ?? feita com bucho, tripas, nervo de boi e mocot??, adicionando temperos a gosto, para buscar um sabor ainda mais excepcional."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8113542.171589297!2d-47.69755108333961!3d-6.807450319798847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x782e57c7080b28f%3A0x5ae7715404f694a5!2zUGlhdcOt!5e0!3m2!1spt-BR!2sbr!4v1637171672042!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do Piau?? apresenta dois tipos clim??ticos: o clima Tropical quente e ??mido (que tem influ??ncia do ambiente amaz??nico) e o clima Semi??rido (que herda caracter??sticas do Sert??o Nordestino)."

        travel_desc1.innerText = "O gasto total de uma viagem confort??vel de quatro dias seria em cerca de R$ 2.700,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Bahia"
        statetxt2.innerText = "A Bahia ?? um estado do nordeste brasileiro com paisagens que variam da costa tropical at?? a aridez do Sert??o. A capital, Salvador, ?? conhecida por seu centro hist??rico, o Pelourinho, com uma rica arquitetura colonial do s??culo XVII e assentado sobre a Ba??a de Todos-os-Santos. O Carnaval da cidade re??ne foli??es fantasiados que dan??am ao som do samba e do ax?? em uma enorme festa de rua."
        state_img2.src = "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3048082:1613517407/Salvador.jpg"

        food_name2_1.innerText = "Acaraj??"
        food_img2_1.src = "https://a.cdn-hotels.com/gdcs/production43/d1529/f40f10ad-7c31-4522-9f03-349419ab9c45.jpg"
        food_desc2_1.innerText = "O acaraj?? ?? uma especialidade gastron??mica das culin??rias africana e afro-brasileira. Trata-se de um bolinho feito de massa de feij??o-fradinho, cebola e sal, e frito em azeite de dend??. Um prato extremamente famoso e t??pico na Bahia"

        food_name2_2.innerText = "Abar??"
        food_img2_2.src = "https://a.cdn-hotels.com/gdcs/production40/d269/c3769b2a-381b-476c-b863-cc5728f85d06.jpg"
        food_desc2_2.innerText = "O Abar?? ?? um dos pratos t??picos da culin??ria baiana, presente em muitos locais de Salvador. Um bolinho de feij??o cozido em banho-maria e embrulhado em folha de bananeira, que pode acompanhar a moqueca baiana ou ser recheado com vatap?? e caruru, servido com camar??es seco ou uma saladinha verde."

        food_name2_3.innerText = "Vatap??"
        food_img2_3.src = "https://a.cdn-hotels.com/gdcs/production130/d394/8df37ba6-ba3c-44c4-b0b8-33c9b508a034.jpg"
        food_desc2_3.innerText = "O Vatap?? ?? um prato t??pico da culin??ria nordestina e nortista, e tem presen??a garantida nos card??pios dos pratos t??picos de da Bahia, seja servido como acompanhamento de outras comidinhas ou como recheio de um bom acaraj?? ou abar??."

        food_name2_4.innerText = "Caldo de Sururu"
        food_img2_4.src = "https://a.cdn-hotels.com/gdcs/production14/d1593/2203bd05-6049-48f3-8462-5f4661671641.jpg"
        food_desc2_4.innerText = "O pequeno molusco conhecido como 'sururu', muito comum nos manguezais, sai direto de suas conchas para agradar aos paladares mais exigentes dos que provam as del??cias dos pratos de Salvador. O caldinho de sururu ?? uma pedida indispens??vel como entrada dos pratos principais nos melhores restaurantes da capital baiana. A receita leva cebola, tomate, coentro, cheiro-verde e leite de coco."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7948669.111898074!2d-46.456551842282416!3d-13.400801239048862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x7e926f5fb491ed05!2sBahia!5e0!3m2!1spt-BR!2sbr!4v1639062047218!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima predominante no Estado da Bahia ?? o tropical, com m??dias de temperaturas anuais elevadas e m??ximas acima dos 30??C. No sert??o, o clima ?? semi??rido, com pluviosidade anual acumulada abaixo dos 800 mm."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Bahia est?? em uma m??dia de R$ 414 ?? R$ 566 (atualmente) dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Maranh??o"
        statetxt3.innerText = "Maranh??o, estado no nordeste brasileiro, ?? formado em parte pela Floresta Amaz??nica e pelas praias ao longo do Oceano Atl??ntico. Pr??ximo ?? cidade de Barreirinhas, grandes dunas de areia branca criam paisagens que lembram um deserto no Parque Nacional Len????is Maranhenses, onde lagoas de ??gua fresca nas quais se pode nadar se formam durante a temporada de chuvas. ?? na capital, S??o Lu??s, que se encontra o agitado bairro hist??rico conhecido como Reviver."
        state_img3.src = "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/08/o-que-fazer-no-parque-nacional-dos-lencois-maranhenses-1.png"

        food_name3_1.innerText = "Arroz de Cux??"
        food_img3_1.src = "https://conteudo.imguol.com.br/c/entretenimento/5e/2020/08/03/arroz-de-cuxa---receitas-eno-1596486529246_v2_1x1.jpg"
        food_desc3_1.innerText = "Tradicionalmente servido como acompanhamento para frutos-do-mar, peixes fritos e ensopados, esse arroz demanda maestria em seu preparo, porque a vinagreira ?? uma erva ??cida e amarga, o que dificulta seu preparo e exige um controle de propor????es para que o arroz n??o fique com um gosto ruim."

        food_name3_2.innerText = "Peixada Maranhense"
        food_img3_2.src = "https://www.essemundoenosso.com.br/wp-content/uploads/2017/07/culinaria-maranhense-3-peixada-740x493.jpg"
        food_desc3_2.innerText = "Parecida com uma moqueca, a peixada maranhense ?? um cozido bem temperado de peixe, normalmente feita de pescada, mas tamb??m pode ser feita com outros peixes parecidos. Seu diferencial ?? o ovo cozido que vai junto. Um prato ??nico e t??pico da regi??o, que vai bem at?? em dias de calor."

        food_name3_3.innerText = "Mingau de Tapioca"
        food_img3_3.src = "https://guiadaculinaria.com/wp-content/uploads/2019/09/mingau-de-tapioca-1200x720.jpg"
        food_desc3_3.innerText = "Muito consumido em festas de S??o Jo??o, o mingau de tapioca se parece com o curau de milho. De sabor muito leve e f??cil de fazer, ele ?? uma del??cia quando servido quente. Para faz??-lo, usa-se tapioca, leite condensado, leite de coco e canela."

        food_name3_4.innerText = "Ju??ar??"
        food_img3_4.src = "https://www.buenasdicas.com/wp-content/uploads/2017/10/acai-jussara-sao-luis-maranhao-770x515.jpg"
        food_desc3_4.innerText = "A ju??ara ?? um parente pr??ximo do a??a??, de sabor mais suave e com menos calorias. Mas, seja ju??ara ou a??a??, a forma t??pica de servir a iguaria ?? a mesma: acomapanhada de farinha ou camar??o seco."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8131616.336870998!2d-49.77381877236813!3d-5.638238522210157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7edd77a9bcc1ce5%3A0x6276aba3d96c2934!2zTWFyYW5ow6Nv!5e0!3m2!1spt-BR!2sbr!4v1636377025778!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima Tropical ?? predominante no estado, com ocorr??ncia de clima Equatorial na por????o oeste e de uma pequena faixa de clima Semi??rido no sudeste. No oeste do Maranh??o, h?? a ocorr??ncia de clima Equatorial, de temperaturas elevadas e alta pluviosidade na maior parte do ano, podendo chegar a 2000 mm anuais."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? S??o Lu??s (Capital do Maranh??o) varia em m??dia de R$ 790 ?? R$ 1100 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 6 && fclima == 2) {
        place1txt.innerText = "Pernambuco"
        statetxt1.innerText = "Pernambuco ?? um estado no nordeste do Brasil, no Oceano Atl??ntico. A sua capital moderna, o Recife, inclui um porto, a cidade velha e a popular ??rea balnear de Boa Viagem. Ao largo da costa, o arquip??lago vulc??nico de Fernando de Noronha possui uma linha costeira dentada, praias poucos urbanizadas e um parque mar??timo. A sul do Recife, a praia de Porto de Galinhas, protegida por um recife, oferece piscinas naturais. A norte encontra-se Olinda, uma cidade colonial situada entre uma vegeta????o exuberante."
        state_img1.src = "https://static.whow.com.br/wp-content/uploads/2019/10/Foto-Pxhere_Pernambuco-capa.jpg"

        food_name1_1.innerText = "Bolo Souza Le??o"
        food_img1_1.src = "https://img.estadao.com.br/fotos/crop/600x400/resources/jpg/7/5/1453287641157.jpg"
        food_desc1_1.innerText = "?? um dos mais tradicionais bolos da culin??ria pernambucana. O nome vem da fam??lia que repassou a receita. Tem consist??ncia cremosa e ?? preparado com massa de mandioca, calda quente de a????car, ovos e manteiga."

        food_name1_2.innerText = "Cartola"
        food_img1_2.src = "https://midiamax.uol.com.br/media/_versions/legacy/2019/02/cartola-patrimonio-imaterial-de-pe_widelg.jpg"
        food_desc1_2.innerText = "?? uma das mais tradicionais sobremesas da gastronomia pernambucana. Seu preparo consiste em banana frita coberta com queijo coalho assado, polvilhada com a????car e canela."

        food_name1_3.innerText = "Buchada"
        food_img1_3.src = "https://www.visiteobrasil.com.br/galerias/carac8-pernambuco-buchada/509-113302-culinaria-pernambucana-buchada-de-bode-foto-romero-cruzgr.jpg"
        food_desc1_3.innerText = "?? um dos mais tradicionais pratos da cozinha sertaneja. Preparado com o bucho de bode ou carneiro, recheado com um picadinho do sangue coagulado, tripas e f??gado, refogado com hortel??, lim??o, alho, cebola e temperos."

        food_name1_4.innerText = "Sarapatel"
        food_img1_4.src = "https://www.visiteobrasil.com.br/galerias/carac8-pernambuco-sarapatel/510-113324-culinaria-pernambucana-sarapatel-foto-barnaberestaurante-com-brgr.jpg"
        food_desc1_4.innerText = "Prato feito com sangue avinagrado e mi??dos de porco, picadinhos em pequenos cubos, refogados em temperos e cozidos. ?? acompanhado com farinha de mandioca, podendo, tamb??m, ser servido como petisco ou tira-gosto para cacha??a ou batida de lim??o."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4058224.7548695286!2d-39.11264219095019!3d-6.633244590411314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7007c9d931c86c5%3A0x1de0196a93401726!2sPernambuco!5e0!3m2!1spt-BR!2sbr!4v1637164979870!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima de Pernambuco ?? o tropical com varia????es locais marcadas pela posi????o geogr??fica, pela falta de chuvas e pelos sistemas meteorol??gicos atuantes na regi??o. Isso faz com que as chuvas se concentrem especialmente no Litoral e na Zona da Mata, caracterizando o clima destas mesorregi??es como tropical ??mido."

        travel_desc1.innerText = "O gasto total de uma viagem confort??vel de tr??s dias seria em cerca de R$1.850,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Alagoas"
        statetxt2.innerText = "Alagoas ?? um pequeno estado do nordeste brasileiro cujo litoral tropical ?? marcado por praias de areia branca repletas de palmeiras, lagoas cristalinas e recifes de corais. Em Macei??, sua capital, est??o localizadas as famosas praias Paju??ara e Ponta Verde, com hot??is, bares e restaurantes. Os recifes de corais decoram o litoral ao norte de Macei?? que, por isso, tem o apelido de Costa dos Corais."
        state_img2.src = "https://revistaazul.voeazul.com.br/wp-content/uploads/2021/07/alagoas_destaque.jpg"

        food_name2_1.innerText = "Pituzada"
        food_img2_1.src = "https://www.visiteobrasil.com.br/galerias/carac8-alagoas-pituzada/483-115317-pituzada-foto-nide-linsgr.jpg"
        food_desc2_1.innerText = "O pitu ?? um lagostim de ??gua doce, conhecido como ???lagostinha???. Na culin??ria alagoana, ele ?? um ingrediente importante na prepara????o de diversos pratos. A pituzada ?? tamb??m um caldo mais espesso, preparado com leite de coco, extrato de tomate, farinha de mandioca, cebola, alho e cheiro-verde. Normalmente ?? servido com arroz e pir??o e ?? muito apreciada pelos alagoanos e pelos turistas que v??o conhecer o estado."

        food_name2_2.innerText = "Siri Mole ao Coco"
        food_img2_2.src = "https://www.praiasdemaceio.com/wp-content/uploads/2017/05/Siri-mole-ao-coco.jpg"
        food_desc2_2.innerText = "O coco ?? a base da prepara????o de muitos pratos do estado, sobretudo quando acompanhado por algum fruto do mar. O siri mole, por exemplo, ?? um dos frutos do mar mais consumidos do estado. O siri mole ao coco, que parece uma moqueca, ?? feito com leite de coco, siri mole refogado, alho, cebola, piment??o, tomate, coentro, farinha de mandioca e outros temperos da regi??o, sendo servido acompanhado de arroz e farofa."

        food_name2_3.innerText = "Arrumadinho de Feij??o"
        food_img2_3.src = "https://coperaguas.com.br/blog/wp-content/uploads/2020/01/receita-de-arrumadinho-de-feijao.jpg"
        food_desc2_3.innerText = "O arrumadinho de feij??o ?? um prato muito consumido no estado, muito simples e saboroso. Pode ser feito com feij??o verde ou feij??o fradinho, sendo preparado com carne de sol, lingui??a e ervas frescas. Tradicionalmente ?? servido com molho vinagrete e farofa."

        food_name2_4.innerText = "Feij??o de Coco"
        food_img2_4.src = "https://agenciach.com.br/wp-content/uploads/2020/03/receita-de-feijao-com-coco.jpg"
        food_desc2_4.innerText = "O feij??o de coco ?? muito consumido em todo o Nordeste. Parecido com o caldinho de feij??o, prato t??pico carioca, o feij??o de coco ?? um caldo cremoso de feij??o, podendo ser feito com feij??o preto ou feij??o carioca, preparado com coco ralado, leite de coco, cebola e pimenta. Apesar da combina????o soar um pouco estranha, ?? um prato tradicional cheio de sabor, perfeito para ser servido com peixe e arroz."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4027769.3781213453!2d-38.939266155554165!3d-9.649517704358482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x700fd232f520d9b%3A0x7e2d39e57f3df62d!2sAlagoas!5e0!3m2!1spt-BR!2sbr!4v1639065805289!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima de Alagoas ?? o Tropical Atl??ntico, em virtude de sua posi????o entre os tr??picos e pr??ximo ao mar. Enquanto no Leste Alagoano, as chuvas s??o mais regulares, no Sert??o Alagoano, o ??ndice pluviom??trico ?? baixo, tornando a regi??o muito seca."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Alagoas ?? em m??dia de R$ 707 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Cear??"
        statetxt3.innerText = "O Cear??, um estado do nordeste brasileiro, tem um interior montanhoso e um litoral atl??ntico com impressionantes fal??sias vermelhas. O balne??rio de Canoa Quebrada tem enormes dunas de areia rosadas e a Rua Drag??o do Mar, muito movimentada e tamb??m conhecida como Broadway. A cidade isolada de Jericoacoara, cercada pelo Parque Nacional de Jericoacoara, repleto de dunas, ?? famosa por suas ruas de areia, pela pr??tica de windsurfe e pelo p??r do sol incomum em tons de verde."
        state_img3.src = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/77000/77772-Fortaleza-And-Vicinity.jpg"

        food_name3_1.innerText = "Bai??o de dois"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/871/baiao-de-dois-de-fortal-1.jpeg"
        food_desc3_1.innerText = "Uma das comidas mais tradicionais de Fortaleza. Com ingredientes bem brasileiros como arroz, feij??o-de-corda e queijo coalho, o bai??o ?? uma iguaria de sabor ??nico. Normalmente ?? servido juntamente com pa??oca de carne seca ou com macaxeira cozida, farofa e a incompar??vel manteiga de garrafa."

        food_name3_2.innerText = "Moqueca Cearense"
        food_img3_2.src = "https://t2.rg.ltmcdn.com/pt/images/6/8/0/img_peixada_cearense_3086_orig.jpg"
        food_desc3_2.innerText = "Com um sabor inesquec??vel, a moqueca cearense pode ser encontrada em todas as praias do estado, sendo que a receita da capital leva um toque especial do suco de caju. O prato nos presenteia com um sabor incompar??vel, conquistando quem prova."

        food_name3_3.innerText = "Rapadura"
        food_img3_3.src = "https://www.opovo.com.br/_midias/jpg/2019/11/13/rapadura_92_1_20180815102630-10483946.jpg"
        food_desc3_3.innerText = "O Cear?? ?? o maior produtor de rapadura do Brasil. O doce t??pico ?? uma del??cia e pode ser encontrado em diversos formatos e sabores, como de chocolate, de caju e de laranja, as combina????es s??o inumer??veis e deliciosas."

        food_name3_4.innerText = "Caranguejo"
        food_img3_4.src = "https://www.opovo.com.br/_midias/jpg/2020/05/14//696x390/1_fjs_2243-12604558.jpg"
        food_desc3_4.innerText = "O carangueijo ?? t??o amado no Cear??, que possui um dia espec??fico na semana onde h?? promo????es em todas as barracas da Praia do Futuro. Basta ir nos quiosques ??s quintas-feiras para provar e se deliciar com todas as op????es."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067993.4674452688!2d-41.58267516023761!3d-5.317193530296392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bdb31827e686c5%3A0x3bb435e0af957842!2zQ2VhcsOh!5e0!3m2!1spt-BR!2sbr!4v1639067254706!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima predominante no territ??rio cearense ?? o Tropical Quente Semi??rido, abrangendo 9 das 184 sedes municipais. Esse tipo clim??tico apresenta caracter??sticas como escassez e irregularidade pluviom??trica associado a altas taxas de evapotranspira????o."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Cear?? ?? em m??dia de R$ 661 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 6 && fclima == 3) {
        place1txt.innerText = "Maranh??o"
        statetxt1.innerText = "Maranh??o, estado no nordeste brasileiro, ?? formado em parte pela Floresta Amaz??nica e pelas praias ao longo do Oceano Atl??ntico. Pr??ximo ?? cidade de Barreirinhas, grandes dunas de areia branca criam paisagens que lembram um deserto no Parque Nacional Len????is Maranhenses, onde lagoas de ??gua fresca nas quais se pode nadar se formam durante a temporada de chuvas. ?? na capital, S??o Lu??s, que se encontra o agitado bairro hist??rico conhecido como Reviver."
        state_img1.src = "https://www.cvc.com.br/dicas-de-viagem/wp-content/uploads/2021/08/o-que-fazer-no-parque-nacional-dos-lencois-maranhenses-1.png"

        food_name1_1.innerText = "Arroz de Cux??"
        food_img1_1.src = "https://conteudo.imguol.com.br/c/entretenimento/5e/2020/08/03/arroz-de-cuxa---receitas-eno-1596486529246_v2_1x1.jpg"
        food_desc1_1.innerText = "Tradicionalmente servido como acompanhamento para frutos-do-mar, peixes fritos e ensopados, esse arroz demanda maestria em seu preparo, porque a vinagreira ?? uma erva ??cida e amarga, o que dificulta seu preparo e exige um controle de propor????es para que o arroz n??o fique com um gosto ruim."

        food_name1_2.innerText = "Peixada Maranhense"
        food_img1_2.src = "https://www.essemundoenosso.com.br/wp-content/uploads/2017/07/culinaria-maranhense-3-peixada-740x493.jpg"
        food_desc1_2.innerText = "Parecida com uma moqueca, a peixada maranhense ?? um cozido bem temperado de peixe, normalmente feita de pescada, mas tamb??m pode ser feita com outros peixes parecidos. Seu diferencial ?? o ovo cozido que vai junto. Um prato ??nico e t??pico da regi??o, que vai bem at?? em dias de calor."

        food_name1_3.innerText = "Mingau de Tapioca"
        food_img1_3.src = "https://guiadaculinaria.com/wp-content/uploads/2019/09/mingau-de-tapioca-1200x720.jpg"
        food_desc1_3.innerText = "Muito consumido em festas de S??o Jo??o, o mingau de tapioca se parece com o curau de milho. De sabor muito leve e f??cil de fazer, ele ?? uma del??cia quando servido quente. Para faz??-lo, usa-se tapioca, leite condensado, leite de coco e canela."

        food_name1_4.innerText = "Ju??ar??"
        food_img1_4.src = "https://www.buenasdicas.com/wp-content/uploads/2017/10/acai-jussara-sao-luis-maranhao-770x515.jpg"
        food_desc1_4.innerText = "A ju??ara ?? um parente pr??ximo do a??a??, de sabor mais suave e com menos calorias. Mas, seja ju??ara ou a??a??, a forma t??pica de servir a iguaria ?? a mesma: acomapanhada de farinha ou camar??o seco."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8131616.336870998!2d-49.77381877236813!3d-5.638238522210157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7edd77a9bcc1ce5%3A0x6276aba3d96c2934!2zTWFyYW5ow6Nv!5e0!3m2!1spt-BR!2sbr!4v1636377025778!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima Tropical ?? predominante no estado, com ocorr??ncia de clima Equatorial na por????o oeste e de uma pequena faixa de clima Semi??rido no sudeste. No oeste do Maranh??o, h?? a ocorr??ncia de clima Equatorial, de temperaturas elevadas e alta pluviosidade na maior parte do ano, podendo chegar a 2000 mm anuais."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? S??o Lu??s (Capital do Maranh??o) varia em m??dia de R$ 790 ?? R$ 1100 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Bahia"
        statetxt2.innerText = "A Bahia ?? um estado do nordeste brasileiro com paisagens que variam da costa tropical at?? a aridez do Sert??o. A capital, Salvador, ?? conhecida por seu centro hist??rico, o Pelourinho, com uma rica arquitetura colonial do s??culo XVII e assentado sobre a Ba??a de Todos-os-Santos. O Carnaval da cidade re??ne foli??es fantasiados que dan??am ao som do samba e do ax?? em uma enorme festa de rua."
        state_img2.src = "https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3048082:1613517407/Salvador.jpg"

        food_name2_1.innerText = "Acaraj??"
        food_img2_1.src = "https://a.cdn-hotels.com/gdcs/production43/d1529/f40f10ad-7c31-4522-9f03-349419ab9c45.jpg"
        food_desc2_1.innerText = "O acaraj?? ?? uma especialidade gastron??mica das culin??rias africana e afro-brasileira. Trata-se de um bolinho feito de massa de feij??o-fradinho, cebola e sal, e frito em azeite de dend??. Um prato extremamente famoso e t??pico na Bahia"

        food_name2_2.innerText = "Abar??"
        food_img2_2.src = "https://a.cdn-hotels.com/gdcs/production40/d269/c3769b2a-381b-476c-b863-cc5728f85d06.jpg"
        food_desc2_2.innerText = "O Abar?? ?? um dos pratos t??picos da culin??ria baiana, presente em muitos locais de Salvador. Um bolinho de feij??o cozido em banho-maria e embrulhado em folha de bananeira, que pode acompanhar a moqueca baiana ou ser recheado com vatap?? e caruru, servido com camar??es seco ou uma saladinha verde."

        food_name2_3.innerText = "Vatap??"
        food_img2_3.src = "https://a.cdn-hotels.com/gdcs/production130/d394/8df37ba6-ba3c-44c4-b0b8-33c9b508a034.jpg"
        food_desc2_3.innerText = "O Vatap?? ?? um prato t??pico da culin??ria nordestina e nortista, e tem presen??a garantida nos card??pios dos pratos t??picos de da Bahia, seja servido como acompanhamento de outras comidinhas ou como recheio de um bom acaraj?? ou abar??."

        food_name2_4.innerText = "Caldo de Sururu"
        food_img2_4.src = "https://a.cdn-hotels.com/gdcs/production14/d1593/2203bd05-6049-48f3-8462-5f4661671641.jpg"
        food_desc2_4.innerText = "O pequeno molusco conhecido como 'sururu', muito comum nos manguezais, sai direto de suas conchas para agradar aos paladares mais exigentes dos que provam as del??cias dos pratos de Salvador. O caldinho de sururu ?? uma pedida indispens??vel como entrada dos pratos principais nos melhores restaurantes da capital baiana. A receita leva cebola, tomate, coentro, cheiro-verde e leite de coco."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7948669.111898074!2d-46.456551842282416!3d-13.400801239048862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x716037ca23ca5b3%3A0x7e926f5fb491ed05!2sBahia!5e0!3m2!1spt-BR!2sbr!4v1639062047218!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima predominante no Estado da Bahia ?? o tropical, com m??dias de temperaturas anuais elevadas e m??ximas acima dos 30??C. No sert??o, o clima ?? semi??rido, com pluviosidade anual acumulada abaixo dos 800 mm."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Bahia est?? em uma m??dia de R$ 414 ?? R$ 566 (atualmente) dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Norte"
        statetxt3.innerText = "Rio Grande do Norte ?? um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte portugu??s do s??culo XVI. Ponta Negra ?? uma praia enquadrada pela enorme duna, Morro do Careca, um s??mbolo da cidade. A sul, a Praia de Pipa ?? uma est??ncia c??lebre pelo surf e pelos golfinhos."
        state_img3.src = "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/07/Morro-do-careca-Natal.jpg"

        food_name3_1.innerText = "Ginga com Tapioca"
        food_img3_1.src = "https://agorarn.com.br/files/uploads/2018/12/ginga-com-tapioca.jpg"
        food_desc3_1.innerText = "A Ginga com Tapioca ?? uma del??cia potiguar. O nome curioso do prato se deve ao apelido do peixe manjuba, que, normalmente, mede de 10 a 15 cent??metros. Para completar essa mistura de tirar ??gua da boca, o povo do Rio Grande do Norte mistura o pescado com a goma de mandioca, servindo para os turistas uma iguaria fresca e pouco cal??rica."

        food_name3_2.innerText = "Escondidinho de Carne Seca"
        food_img3_2.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/09/Escondidinho1.jpg"
        food_desc3_2.innerText = "O Escondidinho de Carne Seca ?? uma mistura de pur?? de mandioca (tamb??m chamado de macaxeira na regi??o) e carne maturada (a famosa charque). Uma vez montado com queijo ou requeij??o em uma travessa, termina de gratinar no forno."

        food_name3_3.innerText = "Caranguejada"
        food_img3_3.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/08/caranguejada-com-pirao1.jpg"
        food_desc3_3.innerText = "O prato, normalmente, ?? caldoso, podendo ter um visual bastante semelhante ao da peixada. Ao final, a iguaria ?? servida unicamente ou acompanhada por por????es de arroz, pir??o ou batata, por exemplo."

        food_name3_4.innerText = "Bai??o de Dois de Camar??o"
        food_img3_4.src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/4a/d6/a5/camarao-nordestino.jpg"
        food_desc3_4.innerText = "O Bai??o de Dois ?? um prato muito conhecido no Nordeste, sendo preparado com feij??o-de-corda seco ou verde, arroz branco e queijo coalho. No entanto, como tudo recebe um toque magn??fico no Rio Grande do Norte, a receita passou a ser servida com camar??o, tornando-se uma verdadeira obra-prima para os apaixonados por crust??ceos."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031981.7490146954!2d-37.896658696606345!3d-5.895691295285868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b04df549e8eaad%3A0xa92509ac1c4d9ec4!2sRio%20Grande%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1637173247370!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Rio Grande do Norte ?? o Tropical, sendo do subtipo Tropical ??mido no litoral e, ainda, do subtipo Tropical Semi??rido no interior. O Sert??o potiguar, por exemplo, tem no clima Semi??rido a principal explica????o pela escassez de chuvas."

        travel_desc3.innerText = "O gasto total de uma viagem de 7 dias seria em cerca de R$ 2.588,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 6 && fclima == 4) {
        place1txt.innerText = "Cear??"
        statetxt1.innerText = "O Cear??, um estado do nordeste brasileiro, tem um interior montanhoso e um litoral atl??ntico com impressionantes fal??sias vermelhas. O balne??rio de Canoa Quebrada tem enormes dunas de areia rosadas e a Rua Drag??o do Mar, muito movimentada e tamb??m conhecida como Broadway. A cidade isolada de Jericoacoara, cercada pelo Parque Nacional de Jericoacoara, repleto de dunas, ?? famosa por suas ruas de areia, pela pr??tica de windsurfe e pelo p??r do sol incomum em tons de verde."
        state_img1.src = "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/77000/77772-Fortaleza-And-Vicinity.jpg"

        food_name1_1.innerText = "Bai??o de dois"
        food_img1_1.src = "https://img.cybercook.com.br/imagens/receitas/871/baiao-de-dois-de-fortal-1.jpeg"
        food_desc1_1.innerText = "Uma das comidas mais tradicionais de Fortaleza. Com ingredientes bem brasileiros como arroz, feij??o-de-corda e queijo coalho, o bai??o ?? uma iguaria de sabor ??nico. Normalmente ?? servido juntamente com pa??oca de carne seca ou com macaxeira cozida, farofa e a incompar??vel manteiga de garrafa."

        food_name1_2.innerText = "Moqueca Cearense"
        food_img1_2.src = "https://t2.rg.ltmcdn.com/pt/images/6/8/0/img_peixada_cearense_3086_orig.jpg"
        food_desc1_2.innerText = "Com um sabor inesquec??vel, a moqueca cearense pode ser encontrada em todas as praias do estado, sendo que a receita da capital leva um toque especial do suco de caju. O prato nos presenteia com um sabor incompar??vel, conquistando quem prova."

        food_name1_3.innerText = "Rapadura"
        food_img1_3.src = "https://www.opovo.com.br/_midias/jpg/2019/11/13/rapadura_92_1_20180815102630-10483946.jpg"
        food_desc1_3.innerText = "O Cear?? ?? o maior produtor de rapadura do Brasil. O doce t??pico ?? uma del??cia e pode ser encontrado em diversos formatos e sabores, como de chocolate, de caju e de laranja, as combina????es s??o inumer??veis e deliciosas."

        food_name1_4.innerText = "Caranguejo"
        food_img1_4.src = "https://www.opovo.com.br/_midias/jpg/2020/05/14//696x390/1_fjs_2243-12604558.jpg"
        food_desc1_4.innerText = "O carangueijo ?? t??o amado no Cear??, que possui um dia espec??fico na semana onde h?? promo????es em todas as barracas da Praia do Futuro. Basta ir nos quiosques ??s quintas-feiras para provar e se deliciar com todas as op????es."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4067993.4674452688!2d-41.58267516023761!3d-5.317193530296392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7bdb31827e686c5%3A0x3bb435e0af957842!2zQ2VhcsOh!5e0!3m2!1spt-BR!2sbr!4v1639067254706!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima predominante no territ??rio cearense ?? o Tropical Quente Semi??rido, abrangendo 9 das 184 sedes municipais. Esse tipo clim??tico apresenta caracter??sticas como escassez e irregularidade pluviom??trica associado a altas taxas de evapotranspira????o."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Cear?? ?? em m??dia de R$ 661 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Piau??"
        statetxt2.innerText = "Piau?? ?? um estado no nordeste do Brasil conhecido pelos parques nacionais. O Parque Nacional Serra da Capivara, no sudeste, possui s??tios arqueol??gicos com pinturas rupestres pr??-hist??ricas. Nas proximidades, o Parque Nacional Serra das Confus??es tem gigantescas forma????es rochosas e grandes ??reas de caatinga (vegeta????o semi??rida), onde vivem aves em risco de extin????o. As mangueiras ladeiam as ruas da capital ?? beira-rio, Teresina."
        state_img2.src = "https://exame.com/wp-content/uploads/2018/06/thinkstockphotos-886667882-e1528831390573.jpg"

        food_name2_1.innerText = "Maria Isabel"
        food_img2_1.src = "https://img-global.cpcdn.com/recipes/39eaaf2ac385653c/680x482cq70/foto-principal-da-receita-arroz-maria-isabel-do-piaui.webp"
        food_desc2_1.innerText = "Arroz Maria Isabel ?? um dos pratos que mais representam o Piau??, que surgiu entre as fam??lias mais humildes do estado. Conta a hist??ria, que os homens dessas fam??lias mais pobres, eram os que consumiam carnes. Uma m??e tirou um peda??o de carne, cortou em pedacinhos e misturou com arroz, para que toda fam??lia pudesse comer carne, e deu ao prato o nome das filhas, Maria e Izabel."

        food_name2_2.innerText = "Carne de Sol"
        food_img2_2.src = "https://s2.glbimg.com/U8uguGGrZTSnNV0F9mYE7Hw5VAI=/0x0:1237x692/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/p/B/qFHWsdT62dzJZoCICQ8g/captura-de-tela-2020-04-27-as-16.14.45.jpg"
        food_desc2_2.innerText = "A carne de sol, tamb??m conhecida como carne seca, ?? um alimento que come??ou a ser consumido no Brasil ainda no per??odo colonial. Com o tempo, o ingrediente se tornou um patrim??nio cultural do munic??pio de Campo Maior, localizado a 81 km de Teresina."

        food_name2_3.innerText = "Arroz com Capote"
        food_img2_3.src = "http://www.mulheresempreendedoraspi.com.br/site/wp-content/uploads/2017/03/dest-6.png"
        food_desc2_3.innerText = "A cria????o de galinha-da-angola, conhecida no Piau?? como capote, vem do processo de coloniza????o brasileiro. As aves vieram importadas da ??frica, e logo se adaptaram ao clima brasileiro. No Piau?? ela ?? muito apreciada na culin??ria, sobretudo no prato chaamdo arroz com capote, que tamb??m vai bem com o capote frito, feito farofa."

        food_name2_4.innerText = "Panelada Piauiense"
        food_img2_4.src = "https://meupiauioficial.com/wp-content/uploads/2017/05/panelada-do-piaui.jpg"
        food_desc2_4.innerText = "A Panelada Piauiense ?? uma das receitas mais famosas e saborosas do estado, simplesmente porque seu sabor ?? muito diferenciado e rico gastronomicamente, ?? aquele tipo de acompanhamento que faz qualquer outra comida ficar deliciosa. Esse prato ?? mais uma das criatividades do piau??. Habitualmente, ela ?? feita com bucho, tripas, nervo de boi e mocot??, adicionando temperos a gosto, para buscar um sabor ainda mais excepcional."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8113542.171589297!2d-47.69755108333961!3d-6.807450319798847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x782e57c7080b28f%3A0x5ae7715404f694a5!2zUGlhdcOt!5e0!3m2!1spt-BR!2sbr!4v1637171672042!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do Piau?? apresenta dois tipos clim??ticos: o clima Tropical quente e ??mido (que tem influ??ncia do ambiente amaz??nico) e o clima Semi??rido (que herda caracter??sticas do Sert??o Nordestino)."

        travel_desc2.innerText = "O gasto total de uma viagem confort??vel de quatro dias seria em cerca de R$ 2.700,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Norte"
        statetxt3.innerText = "Rio Grande do Norte ?? um estado na extremidade nordeste do Brasil. A capital, Natal, fica numa costa repleta de praias onde se encontra o Forte dos Reis Magos, em forma de estrela, um forte portugu??s do s??culo XVI. Ponta Negra ?? uma praia enquadrada pela enorme duna, Morro do Careca, um s??mbolo da cidade. A sul, a Praia de Pipa ?? uma est??ncia c??lebre pelo surf e pelos golfinhos."
        state_img3.src = "https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/07/Morro-do-careca-Natal.jpg"

        food_name3_1.innerText = "Ginga com Tapioca"
        food_img3_1.src = "https://agorarn.com.br/files/uploads/2018/12/ginga-com-tapioca.jpg"
        food_desc3_1.innerText = "A Ginga com Tapioca ?? uma del??cia potiguar. O nome curioso do prato se deve ao apelido do peixe manjuba, que, normalmente, mede de 10 a 15 cent??metros. Para completar essa mistura de tirar ??gua da boca, o povo do Rio Grande do Norte mistura o pescado com a goma de mandioca, servindo para os turistas uma iguaria fresca e pouco cal??rica."

        food_name3_2.innerText = "Escondidinho de Carne Seca"
        food_img3_2.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/09/Escondidinho1.jpg"
        food_desc3_2.innerText = "O Escondidinho de Carne Seca ?? uma mistura de pur?? de mandioca (tamb??m chamado de macaxeira na regi??o) e carne maturada (a famosa charque). Uma vez montado com queijo ou requeij??o em uma travessa, termina de gratinar no forno."

        food_name3_3.innerText = "Caranguejada"
        food_img3_3.src = "https://www.praiasdenatal.com.br/wp-content/uploads/2014/08/caranguejada-com-pirao1.jpg"
        food_desc3_3.innerText = "O prato, normalmente, ?? caldoso, podendo ter um visual bastante semelhante ao da peixada. Ao final, a iguaria ?? servida unicamente ou acompanhada por por????es de arroz, pir??o ou batata, por exemplo."

        food_name3_4.innerText = "Bai??o de Dois de Camar??o"
        food_img3_4.src = "https://media-cdn.tripadvisor.com/media/photo-s/0c/4a/d6/a5/camarao-nordestino.jpg"
        food_desc3_4.innerText = "O Bai??o de Dois ?? um prato muito conhecido no Nordeste, sendo preparado com feij??o-de-corda seco ou verde, arroz branco e queijo coalho. No entanto, como tudo recebe um toque magn??fico no Rio Grande do Norte, a receita passou a ser servida com camar??o, tornando-se uma verdadeira obra-prima para os apaixonados por crust??ceos."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2031981.7490146954!2d-37.896658696606345!3d-5.895691295285868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b04df549e8eaad%3A0xa92509ac1c4d9ec4!2sRio%20Grande%20do%20Norte!5e0!3m2!1spt-BR!2sbr!4v1637173247370!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Rio Grande do Norte ?? o Tropical, sendo do subtipo Tropical ??mido no litoral e, ainda, do subtipo Tropical Semi??rido no interior. O Sert??o potiguar, por exemplo, tem no clima Semi??rido a principal explica????o pela escassez de chuvas."

        travel_desc3.innerText = "O gasto total de uma viagem de 7 dias seria em cerca de R$ 2.588,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 1) {
        place1txt.innerText = "Mato Grosso do Sul"
        statetxt1.innerText = "Mato Grosso do Sul ?? uma das 27 unidades federativas do Brasil. Localiza-se no sul da Regi??o Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goi??s e Minas Gerais, S??o Paulo e Paran??; e dois pa??ses sul-americanos: Paraguai e Bol??via."
        state_img1.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name1_1.innerText = "Chipa"
        food_img1_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc1_1.innerText = "Essa tradicional receita tem origem na celebra????o da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na v??spera para ser consumida no dia seguinte. Atualmente ?? servida sempre e em qualquer local, sendo uma 'prima' do p??o-de-queijo-mineiro, por??m com consist??ncia e sabor pr??prios."

        food_name1_2.innerText = "Doce de Jaracati??"
        food_img1_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc1_2.innerText = "O jaracati?? ou mam??o-de-veado (Jacaratia spinosa), ?? uma ??rvore da fam??lia do mamoeiro, ainda bastante abundante pois a madeira n??o tem utilidade comercial (?? oca e mole). Seu fruto ?? comest??vel, procurado por muitos animais, mas ?? necess??rio tirar o leite de sua casca antes de comer, pois pode ser t??xico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name1_3.innerText = "Locro"
        food_img1_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc1_3.innerText = "Essa ?? a denomina????o para um prato ?? base de canjica de milho e v??rtebras de boi, denominadas como 'puchero'. ?? um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os pe??es, empreiteiros e outros trabalhadores das fazendas nas regi??es de fronteira entre Brasil e principalmente Paraguai."

        food_name1_4.innerText = "Marmelada"
        food_img1_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc1_4.innerText = "O marmelo, fruta que ocorre na regi??o, pode ser consumida diretamente da ??rvore, mas o doce preparado ?? um dos mais antigos e tradicionais do Brasil, tanto que o nome ???marmelada??? ?? hoje utilizado para designar compotas de sabores diferentes inclusive em outros pa??ses."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima predominante no Estado do Mato Grosso do Sul ?? o clima tropical, sendo o clima tropical semi??mido o predominante no territ??rio do Estado. Este tipo de clima se caracteriza por apresentar ver??es quentes e chuvosos e inverno seco e pouco frio."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Campo Grande (Capital do Mato Grosso do Sul) varia em m??dia de R$ 485 ?? R$ 1450 dependendo da companhia a??rea e outras variantes como tipo de voo, hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Goi??s"
        statetxt2.innerText = "Goi??s, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros ?? uma reserva de montanhas paisag??sticas com trilhos, rios, desfiladeiros e quedas de ??gua. Fundadas durante o s??culo XVIII, as cidades do ciclo de ouro de Piren??polis e Goi??s Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas crist??s."
        state_img2.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name2_1.innerText = "Galinhada"
        food_img2_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc2_1.innerText = "O Prato preferido do Goiano ?? a Galinhada. E n??o ?? s?? arroz com galinha, mas pode ser acompanhada tamb??m com milho e o famoso pequi ou guariroba, a??afr??o, pimenta de cheiro e muita cebolinha verde."

        food_name2_2.innerText = "Empad??o"
        food_img2_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc2_2.innerText = "?? uma torta salgada t??pica da regi??o. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e lingui??a."

        food_name2_3.innerText = "Pamonha"
        food_img2_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-a??s-13.45.32.png"
        food_desc2_3.innerText = "Em quase toda esquina de Goi??nia existe uma Pamonharia. ?? tradi????o em Goi??s reunir a fam??lia para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com lingui??a, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jil?? etc. E ainda tem pamonha frita."

        food_name2_4.innerText = "Peixe na Telha"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc2_4.innerText = "Esse prato es??a sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional ?? usado peixe de ??gua doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, a??afr??o, leite de coco e creme de leite. Acompanha arroz branco e um pir??o feito com o caldo da cabe??a e da espinha do peixe."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O Estado de Goi??s possui clima predominante tropical semi-??mido, suas caracter??sticas se apresentam em duas esta????es distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Goi??nia (Capital de Goi??s) varia em m??dia de R$ 385 ?? R$ 750 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Mato Grosso"
        statetxt3.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, ?? coberto na maioria pela floresta tropical amaz??nica, as zonas h??midas e as plan??cies da savana. A capital, Cuiab??, ?? um centro de viagens que remonta ?? corrida ao ouro do s??culo XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimar??es possui ??reas de caminhada com penhascos em arenito, quedas de ??gua e cavernas. As extensas zonas h??midas do Pantanal albergam diversas esp??cies selvagens, incluindo araras, caim??es e jaguares."
        state_img3.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name3_1.innerText = "Mojica de Pintado"
        food_img3_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc3_1.innerText = "Essa ?? uma das comidas t??picas do Mato Grosso mais deliciosas que existem. ?? uma esp??cie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. ??, sem d??vidas, o orgulho da cozinha mato-grossense e o prato ?? um dos mais elaborados da culin??ria local."

        food_name3_2.innerText = "Furrundu"
        food_img3_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc3_2.innerText = "O furrundu ?? um doce t??pico que leva mam??o ralado, gengibre, cravo, rapadura e canela. Essa sobremesa ?? oferecida em quase todos os estabelecimentos, como restaurantes, bares e at?? em postos de gasolina. "

        food_name3_3.innerText = "Caldo de Piranha"
        food_img3_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc3_3.innerText = "O caldo ?? apreciado por moradores da regi??o, mas qualquer turista tem a oportunidade de experimentar seu sabor ??nico. A sopa ?? encorpada e os locais afirmam ser um energ??tico natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name3_4.innerText = "Farofa de Banana-da-Terra"
        food_img3_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc3_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e h?? quem ainda incremente com carne seca frita."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado de Mato Grosso apresenta sens??vel variedade de climas. Prevalece o tropical super-??mido de mon????o, com elevada temperatura m??dia anual, superior a 24?? C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de ver??o e inverno seco, caracterizado por m??dias de 23??C no planalto."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Cuiab?? (Capital do Mato Grosso) varia em m??dia de R$ 455 ?? R$ 930 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 2) {
        place1txt.innerText = "Mato Grosso do Sul"
        statetxt1.innerText = "Mato Grosso do Sul ?? uma das 27 unidades federativas do Brasil. Localiza-se no sul da Regi??o Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goi??s e Minas Gerais, S??o Paulo e Paran??; e dois pa??ses sul-americanos: Paraguai e Bol??via."
        state_img1.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name1_1.innerText = "Chipa"
        food_img1_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc1_1.innerText = "Essa tradicional receita tem origem na celebra????o da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na v??spera para ser consumida no dia seguinte. Atualmente ?? servida sempre e em qualquer local, sendo uma 'prima' do p??o-de-queijo-mineiro, por??m com consist??ncia e sabor pr??prios."

        food_name1_2.innerText = "Doce de Jaracati??"
        food_img1_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc1_2.innerText = "O jaracati?? ou mam??o-de-veado (Jacaratia spinosa), ?? uma ??rvore da fam??lia do mamoeiro, ainda bastante abundante pois a madeira n??o tem utilidade comercial (?? oca e mole). Seu fruto ?? comest??vel, procurado por muitos animais, mas ?? necess??rio tirar o leite de sua casca antes de comer, pois pode ser t??xico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name1_3.innerText = "Locro"
        food_img1_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc1_3.innerText = "Essa ?? a denomina????o para um prato ?? base de canjica de milho e v??rtebras de boi, denominadas como 'puchero'. ?? um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os pe??es, empreiteiros e outros trabalhadores das fazendas nas regi??es de fronteira entre Brasil e principalmente Paraguai."

        food_name1_4.innerText = "Marmelada"
        food_img1_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc1_4.innerText = "O marmelo, fruta que ocorre na regi??o, pode ser consumida diretamente da ??rvore, mas o doce preparado ?? um dos mais antigos e tradicionais do Brasil, tanto que o nome ???marmelada??? ?? hoje utilizado para designar compotas de sabores diferentes inclusive em outros pa??ses."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima predominante no Estado do Mato Grosso do Sul ?? o clima tropical, sendo o clima tropical semi??mido o predominante no territ??rio do Estado. Este tipo de clima se caracteriza por apresentar ver??es quentes e chuvosos e inverno seco e pouco frio."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Campo Grande (Capital do Mato Grosso do Sul) varia em m??dia de R$ 485 ?? R$ 1450 dependendo da companhia a??rea e outras variantes como tipo de voo, hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Mato Grosso"
        statetxt2.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, ?? coberto na maioria pela floresta tropical amaz??nica, as zonas h??midas e as plan??cies da savana. A capital, Cuiab??, ?? um centro de viagens que remonta ?? corrida ao ouro do s??culo XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimar??es possui ??reas de caminhada com penhascos em arenito, quedas de ??gua e cavernas. As extensas zonas h??midas do Pantanal albergam diversas esp??cies selvagens, incluindo araras, caim??es e jaguares."
        state_img2.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name2_1.innerText = "Mojica de Pintado"
        food_img2_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc2_1.innerText = "Essa ?? uma das comidas t??picas do Mato Grosso mais deliciosas que existem. ?? uma esp??cie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. ??, sem d??vidas, o orgulho da cozinha mato-grossense e o prato ?? um dos mais elaborados da culin??ria local."

        food_name2_2.innerText = "Furrundu"
        food_img2_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc2_2.innerText = "O furrundu ?? um doce t??pico que leva mam??o ralado, gengibre, cravo, rapadura e canela. Essa sobremesa ?? oferecida em quase todos os estabelecimentos, como restaurantes, bares e at?? em postos de gasolina. "

        food_name2_3.innerText = "Caldo de Piranha"
        food_img2_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc2_3.innerText = "O caldo ?? apreciado por moradores da regi??o, mas qualquer turista tem a oportunidade de experimentar seu sabor ??nico. A sopa ?? encorpada e os locais afirmam ser um energ??tico natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name2_4.innerText = "Farofa de Banana-da-Terra"
        food_img2_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc2_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e h?? quem ainda incremente com carne seca frita."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O estado de Mato Grosso apresenta sens??vel variedade de climas. Prevalece o tropical super-??mido de mon????o, com elevada temperatura m??dia anual, superior a 24?? C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de ver??o e inverno seco, caracterizado por m??dias de 23??C no planalto."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Cuiab?? (Capital do Mato Grosso) varia em m??dia de R$ 455 ?? R$ 930 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Goi??s"
        statetxt3.innerText = "Goi??s, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros ?? uma reserva de montanhas paisag??sticas com trilhos, rios, desfiladeiros e quedas de ??gua. Fundadas durante o s??culo XVIII, as cidades do ciclo de ouro de Piren??polis e Goi??s Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas crist??s."
        state_img3.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name3_1.innerText = "Galinhada"
        food_img3_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc3_1.innerText = "O Prato preferido do Goiano ?? a Galinhada. E n??o ?? s?? arroz com galinha, mas pode ser acompanhada tamb??m com milho e o famoso pequi ou guariroba, a??afr??o, pimenta de cheiro e muita cebolinha verde."

        food_name3_2.innerText = "Empad??o"
        food_img3_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc3_2.innerText = "?? uma torta salgada t??pica da regi??o. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e lingui??a."

        food_name3_3.innerText = "Pamonha"
        food_img3_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-a??s-13.45.32.png"
        food_desc3_3.innerText = "Em quase toda esquina de Goi??nia existe uma Pamonharia. ?? tradi????o em Goi??s reunir a fam??lia para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com lingui??a, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jil?? etc. E ainda tem pamonha frita."

        food_name3_4.innerText = "Peixe na Telha"
        food_img3_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc3_4.innerText = "Esse prato es??a sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional ?? usado peixe de ??gua doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, a??afr??o, leite de coco e creme de leite. Acompanha arroz branco e um pir??o feito com o caldo da cabe??a e da espinha do peixe."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O Estado de Goi??s possui clima predominante tropical semi-??mido, suas caracter??sticas se apresentam em duas esta????es distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Goi??nia (Capital de Goi??s) varia em m??dia de R$ 385 ?? R$ 750 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 3) {
        place1txt.innerText = "Mato Grosso do Sul"
        statetxt1.innerText = "Mato Grosso do Sul ?? uma das 27 unidades federativas do Brasil. Localiza-se no sul da Regi??o Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goi??s e Minas Gerais, S??o Paulo e Paran??; e dois pa??ses sul-americanos: Paraguai e Bol??via."
        state_img1.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name1_1.innerText = "Chipa"
        food_img1_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc1_1.innerText = "Essa tradicional receita tem origem na celebra????o da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na v??spera para ser consumida no dia seguinte. Atualmente ?? servida sempre e em qualquer local, sendo uma 'prima' do p??o-de-queijo-mineiro, por??m com consist??ncia e sabor pr??prios."

        food_name1_2.innerText = "Doce de Jaracati??"
        food_img1_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc1_2.innerText = "O jaracati?? ou mam??o-de-veado (Jacaratia spinosa), ?? uma ??rvore da fam??lia do mamoeiro, ainda bastante abundante pois a madeira n??o tem utilidade comercial (?? oca e mole). Seu fruto ?? comest??vel, procurado por muitos animais, mas ?? necess??rio tirar o leite de sua casca antes de comer, pois pode ser t??xico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name1_3.innerText = "Locro"
        food_img1_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc1_3.innerText = "Essa ?? a denomina????o para um prato ?? base de canjica de milho e v??rtebras de boi, denominadas como 'puchero'. ?? um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os pe??es, empreiteiros e outros trabalhadores das fazendas nas regi??es de fronteira entre Brasil e principalmente Paraguai."

        food_name1_4.innerText = "Marmelada"
        food_img1_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc1_4.innerText = "O marmelo, fruta que ocorre na regi??o, pode ser consumida diretamente da ??rvore, mas o doce preparado ?? um dos mais antigos e tradicionais do Brasil, tanto que o nome ???marmelada??? ?? hoje utilizado para designar compotas de sabores diferentes inclusive em outros pa??ses."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima predominante no Estado do Mato Grosso do Sul ?? o clima tropical, sendo o clima tropical semi??mido o predominante no territ??rio do Estado. Este tipo de clima se caracteriza por apresentar ver??es quentes e chuvosos e inverno seco e pouco frio."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Campo Grande (Capital do Mato Grosso do Sul) varia em m??dia de R$ 485 ?? R$ 1450 dependendo da companhia a??rea e outras variantes como tipo de voo, hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Goi??s"
        statetxt2.innerText = "Goi??s, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros ?? uma reserva de montanhas paisag??sticas com trilhos, rios, desfiladeiros e quedas de ??gua. Fundadas durante o s??culo XVIII, as cidades do ciclo de ouro de Piren??polis e Goi??s Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas crist??s."
        state_img2.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name2_1.innerText = "Galinhada"
        food_img2_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc2_1.innerText = "O Prato preferido do Goiano ?? a Galinhada. E n??o ?? s?? arroz com galinha, mas pode ser acompanhada tamb??m com milho e o famoso pequi ou guariroba, a??afr??o, pimenta de cheiro e muita cebolinha verde."

        food_name2_2.innerText = "Empad??o"
        food_img2_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc2_2.innerText = "?? uma torta salgada t??pica da regi??o. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e lingui??a."

        food_name2_3.innerText = "Pamonha"
        food_img2_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-a??s-13.45.32.png"
        food_desc2_3.innerText = "Em quase toda esquina de Goi??nia existe uma Pamonharia. ?? tradi????o em Goi??s reunir a fam??lia para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com lingui??a, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jil?? etc. E ainda tem pamonha frita."

        food_name2_4.innerText = "Peixe na Telha"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc2_4.innerText = "Esse prato es??a sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional ?? usado peixe de ??gua doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, a??afr??o, leite de coco e creme de leite. Acompanha arroz branco e um pir??o feito com o caldo da cabe??a e da espinha do peixe."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O Estado de Goi??s possui clima predominante tropical semi-??mido, suas caracter??sticas se apresentam em duas esta????es distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Goi??nia (Capital de Goi??s) varia em m??dia de R$ 385 ?? R$ 750 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Mato Grosso"
        statetxt3.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, ?? coberto na maioria pela floresta tropical amaz??nica, as zonas h??midas e as plan??cies da savana. A capital, Cuiab??, ?? um centro de viagens que remonta ?? corrida ao ouro do s??culo XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimar??es possui ??reas de caminhada com penhascos em arenito, quedas de ??gua e cavernas. As extensas zonas h??midas do Pantanal albergam diversas esp??cies selvagens, incluindo araras, caim??es e jaguares."
        state_img3.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name3_1.innerText = "Mojica de Pintado"
        food_img3_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc3_1.innerText = "Essa ?? uma das comidas t??picas do Mato Grosso mais deliciosas que existem. ?? uma esp??cie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. ??, sem d??vidas, o orgulho da cozinha mato-grossense e o prato ?? um dos mais elaborados da culin??ria local."

        food_name3_2.innerText = "Furrundu"
        food_img3_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc3_2.innerText = "O furrundu ?? um doce t??pico que leva mam??o ralado, gengibre, cravo, rapadura e canela. Essa sobremesa ?? oferecida em quase todos os estabelecimentos, como restaurantes, bares e at?? em postos de gasolina. "

        food_name3_3.innerText = "Caldo de Piranha"
        food_img3_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc3_3.innerText = "O caldo ?? apreciado por moradores da regi??o, mas qualquer turista tem a oportunidade de experimentar seu sabor ??nico. A sopa ?? encorpada e os locais afirmam ser um energ??tico natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name3_4.innerText = "Farofa de Banana-da-Terra"
        food_img3_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc3_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e h?? quem ainda incremente com carne seca frita."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O estado de Mato Grosso apresenta sens??vel variedade de climas. Prevalece o tropical super-??mido de mon????o, com elevada temperatura m??dia anual, superior a 24?? C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de ver??o e inverno seco, caracterizado por m??dias de 23??C no planalto."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Cuiab?? (Capital do Mato Grosso) varia em m??dia de R$ 455 ?? R$ 930 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 7 && fclima == 4) {
        place1txt.innerText = "Mato Grosso"
        statetxt1.innerText = "Mato Grosso, um grande estado no centro-oeste brasileiro, ?? coberto na maioria pela floresta tropical amaz??nica, as zonas h??midas e as plan??cies da savana. A capital, Cuiab??, ?? um centro de viagens que remonta ?? corrida ao ouro do s??culo XVIII. Nas proximidades, o Parque Nacional da Chapada dos Guimar??es possui ??reas de caminhada com penhascos em arenito, quedas de ??gua e cavernas. As extensas zonas h??midas do Pantanal albergam diversas esp??cies selvagens, incluindo araras, caim??es e jaguares."
        state_img1.src = "https://hotelmt.com.br/wp-content/uploads/2017/09/113047-5-destinos-imperdiveis-para-turismo-no-mato-grosso.jpg"

        food_name1_1.innerText = "Mojica de Pintado"
        food_img1_1.src = "https://hotelmt.com.br/wp-content/uploads/2020/03/original-2187e32d37ac80325435f96992898246.jpg"
        food_desc1_1.innerText = "Essa ?? uma das comidas t??picas do Mato Grosso mais deliciosas que existem. ?? uma esp??cie de caldo com esse enorme pescado, somado ao sabor da mandioca e outros temperos marcantes. ??, sem d??vidas, o orgulho da cozinha mato-grossense e o prato ?? um dos mais elaborados da culin??ria local."

        food_name1_2.innerText = "Furrundu"
        food_img1_2.src = "https://leiamaisba.com.br/upload/images/2013-04-22/20130422093223_doce.jpg"
        food_desc1_2.innerText = "O furrundu ?? um doce t??pico que leva mam??o ralado, gengibre, cravo, rapadura e canela. Essa sobremesa ?? oferecida em quase todos os estabelecimentos, como restaurantes, bares e at?? em postos de gasolina. "

        food_name1_3.innerText = "Caldo de Piranha"
        food_img1_3.src = "https://paraisodacozinha.com.br/wp-content/uploads/caldo-de-piranha.jpg"
        food_desc1_3.innerText = "O caldo ?? apreciado por moradores da regi??o, mas qualquer turista tem a oportunidade de experimentar seu sabor ??nico. A sopa ?? encorpada e os locais afirmam ser um energ??tico natural, famoso por curar aquela ressaca de uma noite agitada."

        food_name1_4.innerText = "Farofa de Banana-da-Terra"
        food_img1_4.src = "https://i2.wp.com/www.saibatudomt.com.br/wp-content/uploads/2018/04/blog1.png"
        food_desc1_4.innerText = "A farinha de mandioca ganha um toque especial com a banana-da-terra e h?? quem ainda incremente com carne seca frita."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15952284.738864267!2d-64.97077761310251!3d-12.542586149809685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x939db1e748370319%3A0xc66268e27d2181fb!2sMato%20Grosso!5e0!3m2!1spt-BR!2sbr!4v1636377806190!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O estado de Mato Grosso apresenta sens??vel variedade de climas. Prevalece o tropical super-??mido de mon????o, com elevada temperatura m??dia anual, superior a 24?? C e alta pluviosidade (2.000mm anuais); e o tropical, com chuvas de ver??o e inverno seco, caracterizado por m??dias de 23??C no planalto."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Cuiab?? (Capital do Mato Grosso) varia em m??dia de R$ 455 ?? R$ 930 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Goi??s"
        statetxt2.innerText = "Goi??s, um estado no centro do Brasil, alberga a savana acidentada, cidades da era colonial e uma agricultura de grande escala. O Parque Nacional da Chapada dos Veadeiros ?? uma reserva de montanhas paisag??sticas com trilhos, rios, desfiladeiros e quedas de ??gua. Fundadas durante o s??culo XVIII, as cidades do ciclo de ouro de Piren??polis e Goi??s Velho (antiga capital do estado) distinguem-se pela arquitetura colonial portuguesa e pelas vibrantes festas crist??s."
        state_img2.src = "https://i.ytimg.com/vi/5OjKEC8KmWY/maxresdefault.jpg"

        food_name2_1.innerText = "Galinhada"
        food_img2_1.src = "https://i1.wp.com/files.agro20.com.br/uploads/2020/04/Galinhada-1.jpg"
        food_desc2_1.innerText = "O Prato preferido do Goiano ?? a Galinhada. E n??o ?? s?? arroz com galinha, mas pode ser acompanhada tamb??m com milho e o famoso pequi ou guariroba, a??afr??o, pimenta de cheiro e muita cebolinha verde."

        food_name2_2.innerText = "Empad??o"
        food_img2_2.src = "https://t1.rg.ltmcdn.com/pt/images/1/1/9/img_empadao_goiano_2911_orig.jpg"
        food_desc2_2.innerText = "?? uma torta salgada t??pica da regi??o. Um belo prato feito com uma massa fina recheada com frango, queijo minas em cubos, azeitona e lingui??a."

        food_name2_3.innerText = "Pamonha"
        food_img2_3.src = "https://uploads.emaisgoias.com.br/2021/01/Captura-de-Tela-2021-01-14-a??s-13.45.32.png"
        food_desc2_3.innerText = "Em quase toda esquina de Goi??nia existe uma Pamonharia. ?? tradi????o em Goi??s reunir a fam??lia para fazer pamonha. Tem Pamonha doce, sal, a moda (geralmente com lingui??a, queijo minas, muita cebolinha verde e pimenta). Com frango e catupiry, com creme de pequi, de jil?? etc. E ainda tem pamonha frita."

        food_name2_4.innerText = "Peixe na Telha"
        food_img2_4.src = "https://i2.wp.com/www.xapuri.info/wp-content/uploads/2015/05/peixe-na-telha-comunidade-mais-comunidade.jpg"
        food_desc2_4.innerText = "Esse prato es??a sempre presente nos restaurantes e nas casas dos goianos. Na receita tradicional ?? usado peixe de ??gua doce, de couro e em postas, geralmente Pintado ou Surubim com molho de tomate, a??afr??o, leite de coco e creme de leite. Acompanha arroz branco e um pir??o feito com o caldo da cabe??a e da espinha do peixe."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858528.037722338!2d-54.074770566586125!3d-15.900063051386356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935db96386b920f5%3A0x8c6d8f8cd8cf0d3!2zR29pw6Fz!5e0!3m2!1spt-BR!2sbr!4v1636375262710!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O Estado de Goi??s possui clima predominante tropical semi-??mido, suas caracter??sticas se apresentam em duas esta????es distintas, uma de seca (maio a setembro) e outra chuvosa (outubro a abril)."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Goi??nia (Capital de Goi??s) varia em m??dia de R$ 385 ?? R$ 750 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Mato Grosso do Sul"
        statetxt3.innerText = "Mato Grosso do Sul ?? uma das 27 unidades federativas do Brasil. Localiza-se no sul da Regi??o Centro-Oeste. Limita-se com cinco estados brasileiros: Mato Grosso, Goi??s e Minas Gerais, S??o Paulo e Paran??; e dois pa??ses sul-americanos: Paraguai e Bol??via."
        state_img3.src = "https://blog.malupires.com.br/wp-content/uploads/2021/07/bonito-mato-grosso-do-sul-pontos-turisticos-2.jpg"

        food_name3_1.innerText = "Chipa"
        food_img3_1.src = "https://aquelemato.org/wp-content/uploads/2018/07/chipa-paraguaia-mato-grosso-do-sul-2.jpg"
        food_desc3_1.innerText = "Essa tradicional receita tem origem na celebra????o da Sexta-feira Santa, quando, devido ao resguardo religioso, as mulheres preparavam uma quantidade de chipa na v??spera para ser consumida no dia seguinte. Atualmente ?? servida sempre e em qualquer local, sendo uma 'prima' do p??o-de-queijo-mineiro, por??m com consist??ncia e sabor pr??prios."

        food_name3_2.innerText = "Doce de Jaracati??"
        food_img3_2.src = "https://media-cdn.tripadvisor.com/media/photo-s/14/12/e3/5c/sorvete-de-jaracatia.jpg"
        food_desc3_2.innerText = "O jaracati?? ou mam??o-de-veado (Jacaratia spinosa), ?? uma ??rvore da fam??lia do mamoeiro, ainda bastante abundante pois a madeira n??o tem utilidade comercial (?? oca e mole). Seu fruto ?? comest??vel, procurado por muitos animais, mas ?? necess??rio tirar o leite de sua casca antes de comer, pois pode ser t??xico. Pode-se fazer um delicioso doce com seu fruto e com seu caule."

        food_name3_3.innerText = "Locro"
        food_img3_3.src = "http://portalfaces.com.br/wp-content/uploads/2020/04/4cb258361327b308ae338549d7b5c827.jpg"
        food_desc3_3.innerText = "Essa ?? a denomina????o para um prato ?? base de canjica de milho e v??rtebras de boi, denominadas como 'puchero'. ?? um alimento bastante forte, sendo preparado logo durante o carneamento do boi, com a finalidade de fortalecer os pe??es, empreiteiros e outros trabalhadores das fazendas nas regi??es de fronteira entre Brasil e principalmente Paraguai."

        food_name3_4.innerText = "Marmelada"
        food_img3_4.src = "https://www.greenme.com.br/wp-content/uploads/2017/11/marmelada.jpg"
        food_desc3_4.innerText = "O marmelo, fruta que ocorre na regi??o, pode ser consumida diretamente da ??rvore, mas o doce preparado ?? um dos mais antigos e tradicionais do Brasil, tanto que o nome ???marmelada??? ?? hoje utilizado para designar compotas de sabores diferentes inclusive em outros pa??ses."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650744.986605649!2d-59.04165762147003!3d-20.558825377289097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x947e91dbe29f7383%3A0x351cd8e9695410ac!2sMato%20Grosso%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1636379447700!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima predominante no Estado do Mato Grosso do Sul ?? o clima tropical, sendo o clima tropical semi??mido o predominante no territ??rio do Estado. Este tipo de clima se caracteriza por apresentar ver??es quentes e chuvosos e inverno seco e pouco frio."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Campo Grande (Capital do Mato Grosso do Sul) varia em m??dia de R$ 485 ?? R$ 1450 dependendo da companhia a??rea e outras variantes como tipo de voo, hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
        
    } else if(fregiao == 8 && fclima == 1) {
        place1txt.innerText = "S??o Paulo"
        statetxt1.innerText = "S??o Paulo ?? uma das 27 unidades federativas do Brasil. Est?? situado na Regi??o Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paran?? a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, al??m do Oceano Atl??ntico a sudeste."
        state_img1.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name1_1.innerText = "Virado ?? Paulista"
        food_img1_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc1_1.innerText = "?? um prato t??pico do estado brasileiro de S??o Paulo, onde tamb??m ?? conhecido como Virado ?? Paulista. Foi criado na ??poca das entradas, bandeiras e mon????es, no Brasil Col??nia. H?? v??rias combina????es do prato em torno do b??sico de bisteca de porco, banana frita, feij??o mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name1_2.innerText = "Cuscuz ?? paulista"
        food_img1_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc1_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem ??rabe e ?? uma das mais importantes receitas de S??o Paulo. ?? uma refei????o simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. J?? no cuscuz ?? paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combina????es que agradem o paladar."

        food_name1_3.innerText = "Bauru"
        food_img1_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc1_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de S??o Paulo. Ele j?? faz parte do card??pio de lanchonetes e restaurantes de todo Pa??s (em diferentes vers??es, ?? claro) e pode ser encontrado Brasil afora."

        food_name1_4.innerText = "Bolovo"
        food_img1_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc1_4.innerText = "Uma miss??o quase imposs??vel ?? encontrar o famoso bolovo fora de S??o Paulo. O bolovo ?? simplesmente um bolinho de carne mo??da recheado com um ovo cozido inteiro."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "S??o Paulo tem esta????es com caracter??sticas bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade est?? localizada em uma zona de clima subtropical ??mido, com caracter??sticas que definem um inverno frio e seco, enquanto o ver??o ?? bem quente e ??mido, com enorme incid??ncia de chuva."

        travel_desc1.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$163, al??mde hospedagem e atra????es tur??sticas, e a dura????o do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Minas Gerais"
        statetxt2.innerText = "Minas Gerais, um grande estado continental no sudeste do Brasil, ?? conhecido por cidades da era colonial que remetem ?? corrida do ouro no pa??s no s??culo 18. Entre elas est??o S??o Jo??o del Rei, Tiradentes e Ouro Preto, a antiga capital, todas com ruas de paralelep??pedo, mans??es ornamentadas e igrejas barrocas decoradas pelo escultor Aleijadinho.O famoso trem a vapor Maria Fuma??a liga Tiradentes a S??o Jo??o del Rei."
        state_img2.src = "https://content.presspage.com/uploads/685/c1920_tiradentesminasgeraisbrazil-2.jpg"

        food_name2_1.innerText = "Frango com Quiabo"
        food_img2_1.src = "https://tecnonoticias.com.br/blogs/cozinhafacil/wp-content/uploads/2020/07/frango-com-quiabo2.jpeg"
        food_desc2_1.innerText = "A mistura desses dois ingredientes rende um dos pratos mais cl??ssicos para os mineiros, feito a partir de um ensopado de frango caipira. Afirma-se que o sabor ???original??? dessa receita s?? ?? poss??vel com a utiliza????o desse tipo de frango, pois o frango industrializado acaba tirando toda a ess??ncia do aut??ntico frango com quiabo."

        food_name2_2.innerText = "Tutu"
        food_img2_2.src = "https://www.visiteobrasil.com.br/galerias/carac8-minas-gerais-tutu-a-mineira/587-112453-culinaria-mineira-tutu-a-mineira-foto-divulgacaogr.jpg"
        food_desc2_2.innerText = "O feij??o, um dos ingredientes mais importantes para os mineiros, se transforma no saboroso tutu quando ?? cozido, temperado, batido e misturado com farinha de milho ou de mandioca. Adquire uma consist??ncia mais pastosa e pode ganhar o adicional de torresmo, bacon ou ovos cozidos."

        food_name2_3.innerText = "Feij??o Tropeiro"
        food_img2_3.src = "https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg"
        food_desc2_3.innerText = "Mais uma vez, o feij??o estrela uma das receitas mais tradicionais de Minas Gerais, em um prato que surgiu com os tropeiros, que misturavam farinha, carne e ovos ao feij??o. O resultado ?? uma iguaria com sabor ??nico, que est?? presente em larga escala pelos restaurantes dos mais de 800 munic??pios mineiros."

        food_name2_4.innerText = "Leit??o a Pururuca"
        food_img2_4.src = "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-leitao-pururuca.jpg"
        food_desc2_4.innerText = "Para que se prepare um leit??o a pururuca, ?? necess??rio empregar muita t??cnica. O porco deve ser assado com pele e, logo ap??s esse procedimento, deve-se passar gelo em toda sua superf??cie para, ent??o, jogar ??leo muito quente sobre ela. Quando bem feita, o resultado dessa t??cnica ?? uma pele fritinha, cheia de bolhas e que fica crocante."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7747774.534855807!2d-49.94785049282104!3d-18.524697480011483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x112170c9379de7b3!2sMinas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1639138637724!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "No Territ??rio mineiro o clima que predomina ?? o tropical de altitude, al??m de apresentar o tropical. O clima tropical se apresenta nas ??reas mais baixas, a temperatura nessa regi??o oscila entre 22 e 23??C com duas esta????es bem definidas, com ver??es chuvosos e invernos secos."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Minas Gerais varia em m??dia de R$ 500 ?? R$ 850 dependendo da companhia a??rea e outras variantes como hor??rio, paradas ou tipo de viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio de Janeiro"
        statetxt3.innerText = "O Rio de Janeiro ?? um estado no sudeste do Brasil. A sua capital, com o mesmo nome, ?? conhecida pelas praias, o P??o de A????car e a est??tua do Cristo Redentor no cimo do morro do Corcovado. O ponto de refer??ncia do arquiteto Oscar Niemeyer, o Museu de Arte Contempor??nea de Niter??i, fica do lado oposto da Ba??a de Guanabara, em Niter??i. Ao longo da costa atl??ntica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img3.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name3_1.innerText = "Feijoada"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc3_1.innerText = "A feijoada carioca ?? conhecida por ingredientes como feij??o preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name3_2.innerText = "Bolinho de Bacalhau"
        food_img3_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc3_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que d??o aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se voc?? servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name3_3.innerText = "Biscoito Globo"
        food_img3_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc3_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem ?? padaria onde era feito. Nas terras cariocas, voc?? pode encontr??-lo na vers??o salgada ou doce."

        food_name3_4.innerText = "Fil?? ?? Oswaldo Aranha"
        food_img3_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc3_4.innerText = "O nome da receita foi dado em homenagem ao pol??tico Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um fil?? temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima no Rio de Janeiro, ?? tropical, quente e ??mido, com varia????es locais, devido ??s diferen??as de altitude, vegeta????o e proximidade do oceano; a temperatura m??dia anual ?? de 22?? cent??grados, com m??dias di??rias elevadas no ver??o (de 30?? a 32??); as chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc3.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 8 && fclima == 2) {
        place1txt.innerText = "Rio de Janeiro"
        statetxt1.innerText = "O Rio de Janeiro ?? um estado no sudeste do Brasil. A sua capital, com o mesmo nome, ?? conhecida pelas praias, o P??o de A????car e a est??tua do Cristo Redentor no cimo do morro do Corcovado. O ponto de refer??ncia do arquiteto Oscar Niemeyer, o Museu de Arte Contempor??nea de Niter??i, fica do lado oposto da Ba??a de Guanabara, em Niter??i. Ao longo da costa atl??ntica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img1.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name1_1.innerText = "Feijoada"
        food_img1_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc1_1.innerText = "A feijoada carioca ?? conhecida por ingredientes como feij??o preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name1_2.innerText = "Bolinho de Bacalhau"
        food_img1_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc1_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que d??o aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se voc?? servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name1_3.innerText = "Biscoito Globo"
        food_img1_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc1_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem ?? padaria onde era feito. Nas terras cariocas, voc?? pode encontr??-lo na vers??o salgada ou doce."

        food_name1_4.innerText = "Fil?? ?? Oswaldo Aranha"
        food_img1_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc1_4.innerText = "O nome da receita foi dado em homenagem ao pol??tico Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um fil?? temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima no Rio de Janeiro, ?? tropical, quente e ??mido, com varia????es locais, devido ??s diferen??as de altitude, vegeta????o e proximidade do oceano; a temperatura m??dia anual ?? de 22?? cent??grados, mesmo assim, seu inverno pode contar com temperaturas abaixo de 20??C. As chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc1.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "S??o Paulo"
        statetxt2.innerText = "S??o Paulo ?? uma das 27 unidades federativas do Brasil. Est?? situado na Regi??o Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paran?? a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, al??m do Oceano Atl??ntico a sudeste."
        state_img2.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name2_1.innerText = "Virado ?? Paulista"
        food_img2_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc2_1.innerText = "?? um prato t??pico do estado brasileiro de S??o Paulo, onde tamb??m ?? conhecido como Virado ?? Paulista. Foi criado na ??poca das entradas, bandeiras e mon????es, no Brasil Col??nia. H?? v??rias combina????es do prato em torno do b??sico de bisteca de porco, banana frita, feij??o mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name2_2.innerText = "Cuscuz ?? paulista"
        food_img2_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc2_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem ??rabe e ?? uma das mais importantes receitas de S??o Paulo. ?? uma refei????o simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. J?? no cuscuz ?? paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combina????es que agradem o paladar."

        food_name2_3.innerText = "Bauru"
        food_img2_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc2_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de S??o Paulo. Ele j?? faz parte do card??pio de lanchonetes e restaurantes de todo Pa??s (em diferentes vers??es, ?? claro) e pode ser encontrado Brasil afora."

        food_name2_4.innerText = "Bolovo"
        food_img2_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc2_4.innerText = "Uma miss??o quase imposs??vel ?? encontrar o famoso bolovo fora de S??o Paulo. O bolovo ?? simplesmente um bolinho de carne mo??da recheado com um ovo cozido inteiro."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "S??o Paulo tem esta????es com caracter??sticas bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade est?? localizada em uma zona de clima subtropical ??mido, com caracter??sticas que definem um inverno frio e seco, que em regi??es ao sul do estado, a temperatura pode chegar a 18??C em m??dia, com enorme incid??ncia de chuva."

        travel_desc2.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$163, al??mde hospedagem e atra????es tur??sticas, e a dura????o do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Esp??rito Santo"
        statetxt3.innerText = "O Esp??rito Santo, estado da regi??o Sudeste do Brasil, ?? conhecido por suas praias tropicais e ??reas naturais montanhosas preservadas. Fundada em 1551, Vit??ria, capital e cidade portu??ria, tem um pequeno centro da era colonial. Do outro lado da estreita ba??a de Vit??ria, fica Vila Velha, com a movimentada Praia da Costa e o Convento da Penha, constru????o do s??culo XVI que fica no alto de um penhasco e oferece uma vista panor??mica."
        state_img3.src = "https://caminhagente.com.br/wp-content/uploads/2019/07/IMG_7937-1-1024x768.jpg"

        food_name3_1.innerText = "Moqueca Capixaba"
        food_img3_1.src = "https://jornal140.com/wp-content/uploads/2019/11/Moqueca-Capixaba.png"
        food_desc3_1.innerText = "A disputa do prato com a moqueca baiana existe, mas de uma forma bem-humorada. Por??m, a moqueca capixaba n??o leva azeite de dend?? e leite de coco. E outra diferen??a ?? que a sua prepara????o ?? feita apenas nas panelas de barro, criadas artesanalmente pelas paneleiras de Goiabeiras."

        food_name3_2.innerText = "Torta Capixaba"
        food_img3_2.src = "https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/03/e9914dea-torta-capixaba-de-bacalhau-_-tm-bacalhau-_-gislaine-oliveira-_-baixa-2.jpg"
        food_desc3_2.innerText = "Esse prato ?? o prato oficial da Semana Santa no Esp??rito Santo. A origem dele ultrapassa 400 anos e envolve as tradi????es das comunidades litor??neas e vilas de pescadores. O prato leva muitos frutos do mar desfiados e cozidos: siri, caranguejo, camar??o, ostra, sururu, badejo e bacalhau."

        food_name3_3.innerText = "Quibebe de Ab??bora"
        food_img3_3.src = "https://cdn.panelinha.com.br/receita/1555347218472-CP-2019-29-01_6544.jpg"
        food_desc3_3.innerText = "O quibebe de ab??bora ?? um pur?? feito com a fruta e temperado com alho, cebola, salsa e cebolinha, al??m de ??leo de girassol, sal e a????car. O acompanhamento ?? com costelinha de porco ou torresmo. Esses sabores, quando se misturam, formam um prato ex??tico e de sabor ??nico."

        food_name3_4.innerText = "Camar??o no Coco"
        food_img3_4.src = "https://midias.agazeta.com.br/2020/02/11/camarao-no-coco-famoso-prato-do-restaurante-atlantica-183317.jpg"
        food_desc3_4.innerText = "Um dos pratos mais ex??ticos e bonitos do Esp??rito Santo ?? o Camar??o no coco. Ele leva ??gua de coco e camar??o como base, mas tamb??m tem salsa, leite de coco, sal e pimenta. ?? servido com batata palha artesanal e arroz branco."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7701014.136922567!2d-39.873300689731224!3d-19.53041333665115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7069579646359%3A0x4e1bd5243c50f799!2sEsp%C3%ADrito%20Santo!5e0!3m2!1spt-BR!2sbr!4v1636367622677!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Estado do Esp??rito Santo ?? tropical ??mido, com temperaturas m??dias anuais de 23??C e volume de precipita????o superior a 1.400 mm por ano, especialmente concentrada no ver??o."

        travel_desc3.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Vit??ria (Capital do Esp??rito Santo) varia em m??dia de R$ 400 ?? R$ 700 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 8 && fclima == 3) {
        place1txt.innerText = "Esp??rito Santo"
        statetxt1.innerText = "O Esp??rito Santo, estado da regi??o Sudeste do Brasil, ?? conhecido por suas praias tropicais e ??reas naturais montanhosas preservadas. Fundada em 1551, Vit??ria, capital e cidade portu??ria, tem um pequeno centro da era colonial. Do outro lado da estreita ba??a de Vit??ria, fica Vila Velha, com a movimentada Praia da Costa e o Convento da Penha, constru????o do s??culo XVI que fica no alto de um penhasco e oferece uma vista panor??mica."
        state_img1.src = "https://caminhagente.com.br/wp-content/uploads/2019/07/IMG_7937-1-1024x768.jpg"

        food_name1_1.innerText = "Moqueca Capixaba"
        food_img1_1.src = "https://jornal140.com/wp-content/uploads/2019/11/Moqueca-Capixaba.png"
        food_desc1_1.innerText = "A disputa do prato com a moqueca baiana existe, mas de uma forma bem-humorada. Por??m, a moqueca capixaba n??o leva azeite de dend?? e leite de coco. E outra diferen??a ?? que a sua prepara????o ?? feita apenas nas panelas de barro, criadas artesanalmente pelas paneleiras de Goiabeiras."

        food_name1_2.innerText = "Torta Capixaba"
        food_img1_2.src = "https://storage.googleapis.com/imagens_videos_gou_cooking_prod/production/mesas/2020/03/e9914dea-torta-capixaba-de-bacalhau-_-tm-bacalhau-_-gislaine-oliveira-_-baixa-2.jpg"
        food_desc1_2.innerText = "Esse prato ?? o prato oficial da Semana Santa no Esp??rito Santo. A origem dele ultrapassa 400 anos e envolve as tradi????es das comunidades litor??neas e vilas de pescadores. O prato leva muitos frutos do mar desfiados e cozidos: siri, caranguejo, camar??o, ostra, sururu, badejo e bacalhau."

        food_name1_3.innerText = "Quibebe de Ab??bora"
        food_img1_3.src = "https://cdn.panelinha.com.br/receita/1555347218472-CP-2019-29-01_6544.jpg"
        food_desc1_3.innerText = "O quibebe de ab??bora ?? um pur?? feito com a fruta e temperado com alho, cebola, salsa e cebolinha, al??m de ??leo de girassol, sal e a????car. O acompanhamento ?? com costelinha de porco ou torresmo. Esses sabores, quando se misturam, formam um prato ex??tico e de sabor ??nico."

        food_name1_4.innerText = "Camar??o no Coco"
        food_img1_4.src = "https://midias.agazeta.com.br/2020/02/11/camarao-no-coco-famoso-prato-do-restaurante-atlantica-183317.jpg"
        food_desc1_4.innerText = "Um dos pratos mais ex??ticos e bonitos do Esp??rito Santo ?? o Camar??o no coco. Ele leva ??gua de coco e camar??o como base, mas tamb??m tem salsa, leite de coco, sal e pimenta. ?? servido com batata palha artesanal e arroz branco."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7701014.136922567!2d-39.873300689731224!3d-19.53041333665115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb7069579646359%3A0x4e1bd5243c50f799!2sEsp%C3%ADrito%20Santo!5e0!3m2!1spt-BR!2sbr!4v1636367622677!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do Estado do Esp??rito Santo ?? tropical ??mido, com temperaturas m??dias anuais de 23??C e volume de precipita????o superior a 1.400 mm por ano, especialmente concentrada no ver??o."

        travel_desc1.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Vit??ria (Capital do Esp??rito Santo) varia em m??dia de R$ 400 ?? R$ 700 dependendo da companhia a??rea e outras variantes como hor??rio ou paradas."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "S??o Paulo"
        statetxt2.innerText = "S??o Paulo ?? uma das 27 unidades federativas do Brasil. Est?? situado na Regi??o Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paran?? a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, al??m do Oceano Atl??ntico a sudeste."
        state_img2.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name2_1.innerText = "Virado ?? Paulista"
        food_img2_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc2_1.innerText = "?? um prato t??pico do estado brasileiro de S??o Paulo, onde tamb??m ?? conhecido como Virado ?? Paulista. Foi criado na ??poca das entradas, bandeiras e mon????es, no Brasil Col??nia. H?? v??rias combina????es do prato em torno do b??sico de bisteca de porco, banana frita, feij??o mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name2_2.innerText = "Cuscuz ?? paulista"
        food_img2_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc2_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem ??rabe e ?? uma das mais importantes receitas de S??o Paulo. ?? uma refei????o simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. J?? no cuscuz ?? paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combina????es que agradem o paladar."

        food_name2_3.innerText = "Bauru"
        food_img2_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc2_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de S??o Paulo. Ele j?? faz parte do card??pio de lanchonetes e restaurantes de todo Pa??s (em diferentes vers??es, ?? claro) e pode ser encontrado Brasil afora."

        food_name2_4.innerText = "Bolovo"
        food_img2_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc2_4.innerText = "Uma miss??o quase imposs??vel ?? encontrar o famoso bolovo fora de S??o Paulo. O bolovo ?? simplesmente um bolinho de carne mo??da recheado com um ovo cozido inteiro."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "S??o Paulo tem esta????es com caracter??sticas bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade est?? localizada em uma zona de clima subtropical ??mido, com caracter??sticas que definem um inverno frio e seco, que em regi??es ao sul do estado, a temperatura pode chegar a 18??C em m??dia, com enorme incid??ncia de chuva."

        travel_desc2.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$163, al??mde hospedagem e atra????es tur??sticas, e a dura????o do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio de Janeiro"
        statetxt3.innerText = "O Rio de Janeiro ?? um estado no sudeste do Brasil. A sua capital, com o mesmo nome, ?? conhecida pelas praias, o P??o de A????car e a est??tua do Cristo Redentor no cimo do morro do Corcovado. O ponto de refer??ncia do arquiteto Oscar Niemeyer, o Museu de Arte Contempor??nea de Niter??i, fica do lado oposto da Ba??a de Guanabara, em Niter??i. Ao longo da costa atl??ntica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img3.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name3_1.innerText = "Feijoada"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc3_1.innerText = "A feijoada carioca ?? conhecida por ingredientes como feij??o preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name3_2.innerText = "Bolinho de Bacalhau"
        food_img3_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc3_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que d??o aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se voc?? servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name3_3.innerText = "Biscoito Globo"
        food_img3_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc3_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem ?? padaria onde era feito. Nas terras cariocas, voc?? pode encontr??-lo na vers??o salgada ou doce."

        food_name3_4.innerText = "Fil?? ?? Oswaldo Aranha"
        food_img3_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc3_4.innerText = "O nome da receita foi dado em homenagem ao pol??tico Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um fil?? temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima no Rio de Janeiro, ?? tropical, quente e ??mido, com varia????es locais, devido ??s diferen??as de altitude, vegeta????o e proximidade do oceano; a temperatura m??dia anual ?? de 22?? cent??grados, mesmo assim, seu inverno pode contar com temperaturas abaixo de 20??C. As chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc3.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
        
    } else if(fregiao == 8 && fclima == 4) {
        place1txt.innerText = "S??o Paulo"
        statetxt1.innerText = "S??o Paulo ?? uma das 27 unidades federativas do Brasil. Est?? situado na Regi??o Sudeste e tem por limites os estados de Minas Gerais a norte e nordeste, Paran?? a sul, Rio de Janeiro a leste e Mato Grosso do Sul a oeste, al??m do Oceano Atl??ntico a sudeste."
        state_img1.src = "https://exame.com/wp-content/uploads/2019/10/sc3a3o-paulo-1.jpg"

        food_name1_1.innerText = "Virado ?? Paulista"
        food_img1_1.src = "https://img.itdg.com.br/tdg/images/recipes/000/026/749/355376/355376_original.jpg"
        food_desc1_1.innerText = "?? um prato t??pico do estado brasileiro de S??o Paulo, onde tamb??m ?? conhecido como Virado ?? Paulista. Foi criado na ??poca das entradas, bandeiras e mon????es, no Brasil Col??nia. H?? v??rias combina????es do prato em torno do b??sico de bisteca de porco, banana frita, feij??o mulatinho virado com farinha de mandioca, arroz, couve e ovo frito."

        food_name1_2.innerText = "Cuscuz ?? paulista"
        food_img1_2.src = "https://img.itdg.com.br/tdg/images/recipes/000/061/325/325758/325758_original.jpg"
        food_desc1_2.innerText = "Muito popular no Nordeste, o cuscuz tem origem ??rabe e ?? uma das mais importantes receitas de S??o Paulo. ?? uma refei????o simples e muito saborosa, que consiste basicamente em uma massa de milho cozida no vapor. J?? no cuscuz ?? paulista, o prato recebe recheios variados, que podem ser carnes, peixes, frangos ou outras combina????es que agradem o paladar."

        food_name1_3.innerText = "Bauru"
        food_img1_3.src = "http://dicas.guiamais.com.br/wp-content/uploads/2012/04/lanche-bauru.jpg"
        food_desc1_3.innerText = "Esta comida paulista foi criada na cidade de Bauru, interior de S??o Paulo. Ele j?? faz parte do card??pio de lanchonetes e restaurantes de todo Pa??s (em diferentes vers??es, ?? claro) e pode ser encontrado Brasil afora."

        food_name1_4.innerText = "Bolovo"
        food_img1_4.src = "https://img.itdg.com.br/tdg/images/recipes/000/199/322/308243/308243_original.jpg"
        food_desc1_4.innerText = "Uma miss??o quase imposs??vel ?? encontrar o famoso bolovo fora de S??o Paulo. O bolovo ?? simplesmente um bolinho de carne mo??da recheado com um ovo cozido inteiro."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773123.4374115462!2d-50.880025451378756!3d-22.553250446881403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597d462f58ad%3A0x1e5241e2e17b7c17!2sS%C3%A3o%20Paulo!5e0!3m2!1spt-BR!2sbr!4v1638976841787!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "S??o Paulo tem esta????es com caracter??sticas bem definidas, o que ajuda na hora de escolher o clima e tempo que mais te agrada. A cidade est?? localizada em uma zona de clima subtropical ??mido, com caracter??sticas que definem um inverno frio e seco, enquanto o ver??o ?? bem quente e ??mido, com enorme incid??ncia de chuva."

        travel_desc1.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$163, al??mde hospedagem e atra????es tur??sticas, e a dura????o do voo pode variar entre 1h40 e 6h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Minas Gerais"
        statetxt2.innerText = "Minas Gerais, um grande estado continental no sudeste do Brasil, ?? conhecido por cidades da era colonial que remetem ?? corrida do ouro no pa??s no s??culo 18. Entre elas est??o S??o Jo??o del Rei, Tiradentes e Ouro Preto, a antiga capital, todas com ruas de paralelep??pedo, mans??es ornamentadas e igrejas barrocas decoradas pelo escultor Aleijadinho.O famoso trem a vapor Maria Fuma??a liga Tiradentes a S??o Jo??o del Rei."
        state_img2.src = "https://content.presspage.com/uploads/685/c1920_tiradentesminasgeraisbrazil-2.jpg"

        food_name2_1.innerText = "Frango com Quiabo"
        food_img2_1.src = "https://tecnonoticias.com.br/blogs/cozinhafacil/wp-content/uploads/2020/07/frango-com-quiabo2.jpeg"
        food_desc2_1.innerText = "A mistura desses dois ingredientes rende um dos pratos mais cl??ssicos para os mineiros, feito a partir de um ensopado de frango caipira. Afirma-se que o sabor ???original??? dessa receita s?? ?? poss??vel com a utiliza????o desse tipo de frango, pois o frango industrializado acaba tirando toda a ess??ncia do aut??ntico frango com quiabo."

        food_name2_2.innerText = "Tutu"
        food_img2_2.src = "https://www.visiteobrasil.com.br/galerias/carac8-minas-gerais-tutu-a-mineira/587-112453-culinaria-mineira-tutu-a-mineira-foto-divulgacaogr.jpg"
        food_desc2_2.innerText = "O feij??o, um dos ingredientes mais importantes para os mineiros, se transforma no saboroso tutu quando ?? cozido, temperado, batido e misturado com farinha de milho ou de mandioca. Adquire uma consist??ncia mais pastosa e pode ganhar o adicional de torresmo, bacon ou ovos cozidos."

        food_name2_3.innerText = "Feij??o Tropeiro"
        food_img2_3.src = "https://simplelivingrecipes.com/wp-content/uploads/2019/06/Feijao-Tropeiro-1.jpeg"
        food_desc2_3.innerText = "Mais uma vez, o feij??o estrela uma das receitas mais tradicionais de Minas Gerais, em um prato que surgiu com os tropeiros, que misturavam farinha, carne e ovos ao feij??o. O resultado ?? uma iguaria com sabor ??nico, que est?? presente em larga escala pelos restaurantes dos mais de 800 munic??pios mineiros."

        food_name2_4.innerText = "Leit??o a Pururuca"
        food_img2_4.src = "https://claudia.abril.com.br/wp-content/uploads/2020/02/receita-leitao-pururuca.jpg"
        food_desc2_4.innerText = "Para que se prepare um leit??o a pururuca, ?? necess??rio empregar muita t??cnica. O porco deve ser assado com pele e, logo ap??s esse procedimento, deve-se passar gelo em toda sua superf??cie para, ent??o, jogar ??leo muito quente sobre ela. Quando bem feita, o resultado dessa t??cnica ?? uma pele fritinha, cheia de bolhas e que fica crocante."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7747774.534855807!2d-49.94785049282104!3d-18.524697480011483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa690a165324289%3A0x112170c9379de7b3!2sMinas%20Gerais!5e0!3m2!1spt-BR!2sbr!4v1639138637724!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "No Territ??rio mineiro o clima que predomina ?? o tropical de altitude, al??m de apresentar o tropical. O clima tropical se apresenta nas ??reas mais baixas, a temperatura nessa regi??o oscila entre 22 e 23??C com duas esta????es bem definidas, com ver??es chuvosos e invernos secos."

        travel_desc2.innerText = "O pre??o de uma passagem de ida e volta partindo de S??o Paulo at?? Minas Gerais varia em m??dia de R$ 500 ?? R$ 850 dependendo da companhia a??rea e outras variantes como hor??rio, paradas ou tipo de viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio de Janeiro"
        statetxt3.innerText = "O Rio de Janeiro ?? um estado no sudeste do Brasil. A sua capital, com o mesmo nome, ?? conhecida pelas praias, o P??o de A????car e a est??tua do Cristo Redentor no cimo do morro do Corcovado. O ponto de refer??ncia do arquiteto Oscar Niemeyer, o Museu de Arte Contempor??nea de Niter??i, fica do lado oposto da Ba??a de Guanabara, em Niter??i. Ao longo da costa atl??ntica do estado, encontra-se Ilha Grande, uma ilha arborizada rodeada de praias, e a cidade colonial de Paraty."
        state_img3.src = "https://todepassagem.clickbus.com.br/wp-content/uploads/2020/03/Cristo-Redentor-RJ.jpg"

        food_name3_1.innerText = "Feijoada"
        food_img3_1.src = "https://img.cybercook.com.br/imagens/receitas/991/feijoada-carioca.jpeg"
        food_desc3_1.innerText = "A feijoada carioca ?? conhecida por ingredientes como feij??o preto e diversas partes do porco. O prato fica ainda mais gostoso acompanhado de couve refogada caprichada, farofinha feita na hora e arroz branco."

        food_name3_2.innerText = "Bolinho de Bacalhau"
        food_img3_2.src = "https://receitasmais.com.br/wp-content/uploads/2013/03/Bolinho-de-bacalhau.jpg"
        food_desc3_2.innerText = "A massa do bolinho conta com batata e cheiro-verde, que d??o aquele toque na textura e no sabor do salgado. Tudo pode ficar ainda mais gostoso se voc?? servir esse aperitivo acompanhado de algumas gotinhas de azeite."

        food_name3_3.innerText = "Biscoito Globo"
        food_img3_3.src = "https://ogimg.infoglobo.com.br/in/19923793-52b-4f7/FT1086A/xglobo.jpg.pagespeed.ic.EG7ao22IEF.jpg"
        food_desc3_3.innerText = "Levinho, crocante e delicioso, o biscoito Globo tem esse nome em homenagem ?? padaria onde era feito. Nas terras cariocas, voc?? pode encontr??-lo na vers??o salgada ou doce."

        food_name3_4.innerText = "Fil?? ?? Oswaldo Aranha"
        food_img3_4.src = "https://www.papodebar.com/wp-content/uploads/2012/11/file-oswaldo-aranha.jpg"
        food_desc3_4.innerText = "O nome da receita foi dado em homenagem ao pol??tico Oswaldo Aranha, que ia sempre a um restaurante na Lapa e pedia o mesmo prato: um fil?? temperado com alho frito acompanhado de batatas portuguesas, farofa de ovo e arroz soltinho."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3786720.626764539!2d-45.16779367556124!3d-22.050767463332168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x981894cae28ac3%3A0x349c31ac10583d0!2sRio%20de%20Janeiro!5e0!3m2!1spt-BR!2sbr!4v1639146625233!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima no Rio de Janeiro, ?? tropical, quente e ??mido, com varia????es locais, devido ??s diferen??as de altitude, vegeta????o e proximidade do oceano; a temperatura m??dia anual ?? de 22?? cent??grados, com m??dias di??rias elevadas no ver??o (de 30?? a 32??); as chuvas variam de 1.200 a 1.800 mm anuais"

        travel_desc3.innerText = "O gasto total de uma viagem seria em cerca de R$ 2.181,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 1) {
        place1txt.innerText = "Santa Catarina"
        statetxt1.innerText = "Santa Catarina ?? um estado na regi??o sul do Brasil. Com uma longa costa com o Atl??ntico e muitas ilhas, ela ?? conhecida por suas praias e montanhas. Florian??polis, a capital, tem um mercado p??blico tradicional com bares, restaurantes e barracas de comida, al??m de um museu hist??rico instalado em um pal??cio do governo colonial do s??culo 19. Florian??polis est?? basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img1.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name1_1.innerText = "Polenta no Fio"
        food_img1_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc1_1.innerText = "A polenta ?? uma refei????o trazida pelos italianos e que ficou bastante popular no sul do pa??s em fun????o dos colonos vindos de l?? e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta ?? mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algod??o."

        food_name1_2.innerText = "Pir??o de Farinha de Mandioca"
        food_img1_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc1_2.innerText = "A cultura cabocla deixou as primeiras contribui????es tanto de ingredientes quanto de t??cnicas para a culin??ria catarinense, um deles foi o costume de comer mandioca. O delicioso pir??o de farinha de mandioca ?? um tradicional acompanhamento de pratos com frutos do mar no estado, que ?? o encontro dessa heran??a ind??gena com a a??oriana."

        food_name1_3.innerText = "Joelho de Porco (Eisbein)"
        food_img1_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc1_3.innerText = "O joelho de porco ?? um prato em que essa parte da perna dianteira do animal ?? servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. ?? tradicionalmente apresentado com chucrute. Por sua popularidade, essa refei????o ?? facilmente encontrada nos restaurantes locais."

        food_name1_4.innerText = "Churrasco e Chimarr??o"
        food_img1_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc1_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culin??ria catarinense tamb??m recebeu forte influ??ncia ga??cha. Portanto ?? comum encontrar ??timas churrascarias espalhadas pelo estado. Al??m disso, uma das bebidas preferidas do povo da regi??o ?? o chimarr??o, tamb??m heran??a dos vizinhos."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do estado ?? muito influenciado pelas massas de ar polares e intertropicais, a temperatura m??dia das regi??es litor??neas ?? de 18??C a 20??C. Na costa do Estado, as temperaturas s??o mais amenas, a capital Florian??polis, por exemplo, tem varia????es entre 20??C e 29??C no ver??o."

        travel_desc1.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$562 (ida e volta), e a dura????o do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Paran??"
        statetxt2.innerText = "Paran?? ?? um estado no sul do Brasil que alberga as Cataratas do Igua??u, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Igua??u, uma floresta subtropical com diversas esp??cies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quil??metros a este, perto das praias atl??nticas de Guaratuba e do grande porto de Paranagu??, fica a frondosa capital do estado, Curitiba."
        state_img2.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name2_1.innerText = "Barreado"
        food_img2_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc2_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela regi??o, ou ainda para alimentar quem participava dos mutir??es para constru????o de espa??os p??blicos."

        food_name2_2.innerText = "Carne de On??a"
        food_img2_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc2_2.innerText = "O emblem??tico prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contr??rio do que sugere ?? preparado com carne crua bovina e n??o de felino. A origem do nome ?? desconhecida, provavelmente foi atribu??da pelo h??lito resultante da ingest??o da carne com temperos e cebola crua utilizada no preparo."

        food_name2_3.innerText = "Pachola"
        food_img2_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc2_3.innerText = "O nome ?? peculiar, por??m o preparo da Pachola ?? muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato ?? servido anualmente no s??bado seguinte ?? sexta-feira da Paix??o."

        food_name2_4.innerText = "Pierogi"
        food_img2_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc2_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravi??li italiano, ?? muito comum no Paran??. Chamado de pierogi, pirogue, pierog, peroh?? ou varenike (s??o muitas as denomina????es e varia????es) comumente ?? servido cozido, frito ou assado e recheado com ricota e batata."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do Paran?? encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paran?? e no litoral. O subtropical Cfb, com ver??es suaves, possui grande distribui????o anual de chuvas (1 200 mm) e m??dias t??rmicas por volta dos 17?? C por ano."

        travel_desc2.innerText = "O gasto total de uma viagem confort??vel de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Sul"
        statetxt3.innerText = "Rio Grande do Sul ?? o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Ga??cha alberga a regi??o vin??cola do Vale dos Vinhedos e inclui cidades tur??sticas de estilo alem??o como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, ?? um grande porto com estruturas cl??ssicas como o Mercado P??blico e a Catedral Metropolitana, no centro hist??rico."
        state_img3.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name3_1.innerText = "Tainha Assada"
        food_img3_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc3_1.innerText = "Essa ?? uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela ?? feita na brasa, presa em uma esp??cie de bambu-taquara."

        food_name3_2.innerText = "Galeto na Brasa"
        food_img3_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc3_2.innerText = "O prato, que teve forte influ??ncia italiana, ?? servido em v??rias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado v??rias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e at?? mesmo polenta frita."

        food_name3_3.innerText = "Pinh??o"
        food_img3_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc3_3.innerText = "O Rio Grande do Sul ?? um dos maiores produtores de pinh??o. Al??m disso, os ga??chos amam esse ingrediente. Mesmo sendo consumido em outras partes da regi??o sul, o pinh??o tamb??m ?? um prato muito caracter??stico do Rio Grande."

        food_name3_4.innerText = "Entrevero"
        food_img3_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc3_4.innerText = "O entrevero ?? uma del??cia e muito consumido em outras partes da regi??o sul. O prato pode ser feito com v??rios ingredientes, como carne de porco, cora????o de frango, bacon e at?? mesmo com pinh??o. A receita ?? basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e pur?? de batatas."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "Devido ?? sua posi????o geogr??fica, o estado apresenta grandes diferen??as em rela????o ao Brasil. A latitude refor??a as influ??ncias das massas de ar oriundas da regi??o Polar e das zonas Tropical Continental e Atl??ntica. As temperaturas apresentam grande varia????o sazonal, com ver??es quentes e invernos bastante rigorosos, com a ocorr??ncia de geadas e precipita????o eventual de neve. As temperaturas m??dias variam entre 15?? e 18??C, com m??ximas de 40??C."

        travel_desc3.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o com quatro di??rias ?? por volta de R$89, fora atra????es tur??sticas que voc?? poder?? encontrar. A dura????o do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 2) {
        place1txt.innerText = "Rio Grande do Sul"
        statetxt1.innerText = "Rio Grande do Sul ?? o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Ga??cha alberga a regi??o vin??cola do Vale dos Vinhedos e inclui cidades tur??sticas de estilo alem??o como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, ?? um grande porto com estruturas cl??ssicas como o Mercado P??blico e a Catedral Metropolitana, no centro hist??rico."
        state_img1.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name1_1.innerText = "Tainha Assada"
        food_img1_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc1_1.innerText = "Essa ?? uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela ?? feita na brasa, presa em uma esp??cie de bambu-taquara."

        food_name1_2.innerText = "Galeto na Brasa"
        food_img1_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc1_2.innerText = "O prato, que teve forte influ??ncia italiana, ?? servido em v??rias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado v??rias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e at?? mesmo polenta frita."

        food_name1_3.innerText = "Pinh??o"
        food_img1_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc1_3.innerText = "O Rio Grande do Sul ?? um dos maiores produtores de pinh??o. Al??m disso, os ga??chos amam esse ingrediente. Mesmo sendo consumido em outras partes da regi??o sul, o pinh??o tamb??m ?? um prato muito caracter??stico do Rio Grande."

        food_name1_4.innerText = "Entrevero"
        food_img1_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc1_4.innerText = "O entrevero ?? uma del??cia e muito consumido em outras partes da regi??o sul. O prato pode ser feito com v??rios ingredientes, como carne de porco, cora????o de frango, bacon e at?? mesmo com pinh??o. A receita ?? basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e pur?? de batatas."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Devido ?? sua posi????o geogr??fica, o estado apresenta grandes diferen??as em rela????o ao Brasil. A latitude refor??a as influ??ncias das massas de ar oriundas da regi??o Polar e das zonas Tropical Continental e Atl??ntica. As temperaturas apresentam grande varia????o sazonal, com ver??es quentes e invernos bastante rigorosos, com a ocorr??ncia de geadas e precipita????o eventual de neve. As temperaturas m??dias variam entre 15?? e 18??C, com m??nimas de at?? -10??C."

        travel_desc1.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o com quatro di??rias ?? por volta de R$89, fora atra????es tur??sticas que voc?? poder?? encontrar. A dura????o do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Paran??"
        statetxt2.innerText = "Paran?? ?? um estado no sul do Brasil que alberga as Cataratas do Igua??u, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Igua??u, uma floresta subtropical com diversas esp??cies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quil??metros a este, perto das praias atl??nticas de Guaratuba e do grande porto de Paranagu??, fica a frondosa capital do estado, Curitiba."
        state_img2.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name2_1.innerText = "Barreado"
        food_img2_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc2_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela regi??o, ou ainda para alimentar quem participava dos mutir??es para constru????o de espa??os p??blicos."

        food_name2_2.innerText = "Carne de On??a"
        food_img2_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc2_2.innerText = "O emblem??tico prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contr??rio do que sugere ?? preparado com carne crua bovina e n??o de felino. A origem do nome ?? desconhecida, provavelmente foi atribu??da pelo h??lito resultante da ingest??o da carne com temperos e cebola crua utilizada no preparo."

        food_name2_3.innerText = "Pachola"
        food_img2_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc2_3.innerText = "O nome ?? peculiar, por??m o preparo da Pachola ?? muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato ?? servido anualmente no s??bado seguinte ?? sexta-feira da Paix??o."

        food_name2_4.innerText = "Pierogi"
        food_img2_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc2_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravi??li italiano, ?? muito comum no Paran??. Chamado de pierogi, pirogue, pierog, peroh?? ou varenike (s??o muitas as denomina????es e varia????es) comumente ?? servido cozido, frito ou assado e recheado com ricota e batata."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do Paran?? encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paran?? e no litoral. O subtropical Cfb, com ver??es suaves, possui grande distribui????o anual de chuvas (1 200 mm) e m??dias t??rmicas por volta dos 17?? C por ano."

        travel_desc2.innerText = "O gasto total de uma viagem confort??vel de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Santa Catarina"
        statetxt3.innerText = "Santa Catarina ?? um estado na regi??o sul do Brasil. Com uma longa costa com o Atl??ntico e muitas ilhas, ela ?? conhecida por suas praias e montanhas. Florian??polis, a capital, tem um mercado p??blico tradicional com bares, restaurantes e barracas de comida, al??m de um museu hist??rico instalado em um pal??cio do governo colonial do s??culo 19. Florian??polis est?? basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img3.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name3_1.innerText = "Polenta no Fio"
        food_img3_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc3_1.innerText = "A polenta ?? uma refei????o trazida pelos italianos e que ficou bastante popular no sul do pa??s em fun????o dos colonos vindos de l?? e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta ?? mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algod??o."

        food_name3_2.innerText = "Pir??o de Farinha de Mandioca"
        food_img3_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc3_2.innerText = "A cultura cabocla deixou as primeiras contribui????es tanto de ingredientes quanto de t??cnicas para a culin??ria catarinense, um deles foi o costume de comer mandioca. O delicioso pir??o de farinha de mandioca ?? um tradicional acompanhamento de pratos com frutos do mar no estado, que ?? o encontro dessa heran??a ind??gena com a a??oriana."

        food_name3_3.innerText = "Joelho de Porco (Eisbein)"
        food_img3_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc3_3.innerText = "O joelho de porco ?? um prato em que essa parte da perna dianteira do animal ?? servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. ?? tradicionalmente apresentado com chucrute. Por sua popularidade, essa refei????o ?? facilmente encontrada nos restaurantes locais."

        food_name3_4.innerText = "Churrasco e Chimarr??o"
        food_img3_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc3_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culin??ria catarinense tamb??m recebeu forte influ??ncia ga??cha. Portanto ?? comum encontrar ??timas churrascarias espalhadas pelo estado. Al??m disso, uma das bebidas preferidas do povo da regi??o ?? o chimarr??o, tamb??m heran??a dos vizinhos."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do estado ?? muito influenciado pelas massas de ar polares e intertropicais, a temperatura m??dia das regi??es litor??neas ?? de 18??C a 20??C. Na costa do Estado, as temperaturas s??o mais amenas, a capital Florian??polis, por exemplo, tem varia????es entre 20??C e 29??C no ver??o."

        travel_desc3.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$562 (ida e volta), e a dura????o do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 3) {
        place1txt.innerText = "Rio Grande do Sul"
        statetxt1.innerText = "Rio Grande do Sul ?? o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Ga??cha alberga a regi??o vin??cola do Vale dos Vinhedos e inclui cidades tur??sticas de estilo alem??o como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, ?? um grande porto com estruturas cl??ssicas como o Mercado P??blico e a Catedral Metropolitana, no centro hist??rico."
        state_img1.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name1_1.innerText = "Tainha Assada"
        food_img1_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc1_1.innerText = "Essa ?? uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela ?? feita na brasa, presa em uma esp??cie de bambu-taquara."

        food_name1_2.innerText = "Galeto na Brasa"
        food_img1_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc1_2.innerText = "O prato, que teve forte influ??ncia italiana, ?? servido em v??rias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado v??rias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e at?? mesmo polenta frita."

        food_name1_3.innerText = "Pinh??o"
        food_img1_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc1_3.innerText = "O Rio Grande do Sul ?? um dos maiores produtores de pinh??o. Al??m disso, os ga??chos amam esse ingrediente. Mesmo sendo consumido em outras partes da regi??o sul, o pinh??o tamb??m ?? um prato muito caracter??stico do Rio Grande."

        food_name1_4.innerText = "Entrevero"
        food_img1_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc1_4.innerText = "O entrevero ?? uma del??cia e muito consumido em outras partes da regi??o sul. O prato pode ser feito com v??rios ingredientes, como carne de porco, cora????o de frango, bacon e at?? mesmo com pinh??o. A receita ?? basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e pur?? de batatas."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "Devido ?? sua posi????o geogr??fica, o estado apresenta grandes diferen??as em rela????o ao Brasil. A latitude refor??a as influ??ncias das massas de ar oriundas da regi??o Polar e das zonas Tropical Continental e Atl??ntica. As temperaturas apresentam grande varia????o sazonal, com ver??es quentes e invernos bastante rigorosos, com a ocorr??ncia de geadas e precipita????o eventual de neve. As temperaturas m??dias variam entre 15?? e 18??C, com m??nimas de at?? -10??C."

        travel_desc1.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o com quatro di??rias ?? por volta de R$89, fora atra????es tur??sticas que voc?? poder?? encontrar. A dura????o do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Santa Catarina"
        statetxt2.innerText = "Santa Catarina ?? um estado na regi??o sul do Brasil. Com uma longa costa com o Atl??ntico e muitas ilhas, ela ?? conhecida por suas praias e montanhas. Florian??polis, a capital, tem um mercado p??blico tradicional com bares, restaurantes e barracas de comida, al??m de um museu hist??rico instalado em um pal??cio do governo colonial do s??culo 19. Florian??polis est?? basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img2.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name2_1.innerText = "Polenta no Fio"
        food_img2_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc2_1.innerText = "A polenta ?? uma refei????o trazida pelos italianos e que ficou bastante popular no sul do pa??s em fun????o dos colonos vindos de l?? e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta ?? mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algod??o."

        food_name2_2.innerText = "Pir??o de Farinha de Mandioca"
        food_img2_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc2_2.innerText = "A cultura cabocla deixou as primeiras contribui????es tanto de ingredientes quanto de t??cnicas para a culin??ria catarinense, um deles foi o costume de comer mandioca. O delicioso pir??o de farinha de mandioca ?? um tradicional acompanhamento de pratos com frutos do mar no estado, que ?? o encontro dessa heran??a ind??gena com a a??oriana."

        food_name2_3.innerText = "Joelho de Porco (Eisbein)"
        food_img2_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc2_3.innerText = "O joelho de porco ?? um prato em que essa parte da perna dianteira do animal ?? servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. ?? tradicionalmente apresentado com chucrute. Por sua popularidade, essa refei????o ?? facilmente encontrada nos restaurantes locais."

        food_name2_4.innerText = "Churrasco e Chimarr??o"
        food_img2_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc2_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culin??ria catarinense tamb??m recebeu forte influ??ncia ga??cha. Portanto ?? comum encontrar ??timas churrascarias espalhadas pelo estado. Al??m disso, uma das bebidas preferidas do povo da regi??o ?? o chimarr??o, tamb??m heran??a dos vizinhos."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do estado ?? muito influenciado pelas massas de ar polares e intertropicais, a temperatura m??dia das regi??es litor??neas ?? de 18??C a 20??C. Na costa do Estado, as temperaturas s??o mais amenas, a capital Florian??polis, por exemplo, tem varia????es entre 20??C e 29??C no ver??o."

        travel_desc2.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$562 (ida e volta), e a dura????o do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Paran??"
        statetxt3.innerText = "Paran?? ?? um estado no sul do Brasil que alberga as Cataratas do Igua??u, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Igua??u, uma floresta subtropical com diversas esp??cies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quil??metros a este, perto das praias atl??nticas de Guaratuba e do grande porto de Paranagu??, fica a frondosa capital do estado, Curitiba."
        state_img3.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name3_1.innerText = "Barreado"
        food_img3_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc3_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela regi??o, ou ainda para alimentar quem participava dos mutir??es para constru????o de espa??os p??blicos."

        food_name3_2.innerText = "Carne de On??a"
        food_img3_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc3_2.innerText = "O emblem??tico prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contr??rio do que sugere ?? preparado com carne crua bovina e n??o de felino. A origem do nome ?? desconhecida, provavelmente foi atribu??da pelo h??lito resultante da ingest??o da carne com temperos e cebola crua utilizada no preparo."

        food_name3_3.innerText = "Pachola"
        food_img3_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc3_3.innerText = "O nome ?? peculiar, por??m o preparo da Pachola ?? muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato ?? servido anualmente no s??bado seguinte ?? sexta-feira da Paix??o."

        food_name3_4.innerText = "Pierogi"
        food_img3_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc3_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravi??li italiano, ?? muito comum no Paran??. Chamado de pierogi, pirogue, pierog, peroh?? ou varenike (s??o muitas as denomina????es e varia????es) comumente ?? servido cozido, frito ou assado e recheado com ricota e batata."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "O clima do Paran?? encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paran?? e no litoral. O subtropical Cfb, com ver??es suaves, possui grande distribui????o anual de chuvas (1 200 mm) e m??dias t??rmicas por volta dos 17?? C por ano."

        travel_desc3.innerText = "O gasto total de uma viagem confort??vel de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()

    } else if(fregiao == 9 && fclima == 4) {
        place1txt.innerText = "Paran??"
        statetxt1.innerText = "Paran?? ?? um estado no sul do Brasil que alberga as Cataratas do Igua??u, com centenas de cascatas que se estendem ao longo da fronteira com a Argentina. Em torno das cataratas encontra-se o Parque Nacional do Igua??u, uma floresta subtropical com diversas esp??cies selvagens, enquanto no norte se encontra a enorme barragem de Itaipu. Centenas de quil??metros a este, perto das praias atl??nticas de Guaratuba e do grande porto de Paranagu??, fica a frondosa capital do estado, Curitiba."
        state_img1.src = "https://www.temporadalivre.com/blog-media/posts/cover/10083/os-principais-pontos-turisticos-do-parana-9124315e.jpg"

        food_name1_1.innerText = "Barreado"
        food_img1_1.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/barreado.png"
        food_desc1_1.innerText = "O barreado segue o ritual de cozinhar a carne por muitas horas numa panela de barro lacrada com farinha. Era preparado pelos caboclos e pescadores durante as festividades do carnaval, ou servir os tropeiros de passagem pela regi??o, ou ainda para alimentar quem participava dos mutir??es para constru????o de espa??os p??blicos."

        food_name1_2.innerText = "Carne de On??a"
        food_img1_2.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/carnedeonca.png"
        food_desc1_2.innerText = "O emblem??tico prato curitibano faz sucesso e desperta muita curiosidade pelo nome, mas ao contr??rio do que sugere ?? preparado com carne crua bovina e n??o de felino. A origem do nome ?? desconhecida, provavelmente foi atribu??da pelo h??lito resultante da ingest??o da carne com temperos e cebola crua utilizada no preparo."

        food_name1_3.innerText = "Pachola"
        food_img1_3.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pachola.png"
        food_desc1_3.innerText = "O nome ?? peculiar, por??m o preparo da Pachola ?? muito simples: 'arroz solto com frango refogado, que leva diversos condimentos'. O prato ?? servido anualmente no s??bado seguinte ?? sexta-feira da Paix??o."

        food_name1_4.innerText = "Pierogi"
        food_img1_4.src = "https://www.turismo.pr.gov.br/sites/turismo/arquivos_restritos/files/imagem/2020-06/pierogi.png"
        food_desc1_4.innerText = "O pequeno pastel, em formato de meia-lua, que lembra o ravi??li italiano, ?? muito comum no Paran??. Chamado de pierogi, pirogue, pierog, peroh?? ou varenike (s??o muitas as denomina????es e varia????es) comumente ?? servido cozido, frito ou assado e recheado com ricota e batata."

        map1.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7432471.978817971!2d-55.816375603025236!3d-24.549937469674937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94db0b9430b8629d%3A0xe893fd5063cef061!2zUGFyYW7DoQ!5e0!3m2!1spt-BR!2sbr!4v1639145496685!5m2!1spt-BR!2sbr"

        clima_desc1.innerText = "O clima do Paran?? encontra-se dividido em subtropical e tropical. O clima tropical ocorre na bacia do Paran?? e no litoral. O subtropical Cfb, com ver??es suaves, possui grande distribui????o anual de chuvas (1 200 mm) e m??dias t??rmicas por volta dos 17?? C por ano."

        travel_desc1.innerText = "O gasto total de uma viagem confort??vel de quatro dias seria em cerca de R$ 1.800,00 por pessoa. Por??m o pre??o pode sofrer altera????o, caso a pessoa queira ficar mais dias, escolha ficar em hot??is de 4 ou 5 estrelas e v??rias outras coisas podem influenciar no pre??o total da viagem."

        bigbutton1f.classList.remove('hide')
        bigbutton1fv()

        place2txt.innerText = "Santa Catarina"
        statetxt2.innerText = "Santa Catarina ?? um estado na regi??o sul do Brasil. Com uma longa costa com o Atl??ntico e muitas ilhas, ela ?? conhecida por suas praias e montanhas. Florian??polis, a capital, tem um mercado p??blico tradicional com bares, restaurantes e barracas de comida, al??m de um museu hist??rico instalado em um pal??cio do governo colonial do s??culo 19. Florian??polis est?? basicamente na ilha de Santa Catarina, que conta com resorts de praia na extremidade norte."
        state_img2.src = "http://hotelbavarium.com.br/wp-content/uploads/2019/12/Parque-Unipraias.jpg"

        food_name2_1.innerText = "Polenta no Fio"
        food_img2_1.src = "https://cafeviagem.com/wp-content/uploads/2020/09/receita-polenta-serra-gaucha-4.jpg"
        food_desc2_1.innerText = "A polenta ?? uma refei????o trazida pelos italianos e que ficou bastante popular no sul do pa??s em fun????o dos colonos vindos de l?? e se instalaram no estado. Diferente da maioria dos demais locais do Brasil, no sul a polenta ?? mais firme, cozida por mais tempo. Inclusive, ganhou esse nome pois dizem que ela pode ser cortada com um fio de algod??o."

        food_name2_2.innerText = "Pir??o de Farinha de Mandioca"
        food_img2_2.src = "https://media.gazetadopovo.com.br/bomgourmet/2017/08/pirao-nacional-5e6438d0.jpg"
        food_desc2_2.innerText = "A cultura cabocla deixou as primeiras contribui????es tanto de ingredientes quanto de t??cnicas para a culin??ria catarinense, um deles foi o costume de comer mandioca. O delicioso pir??o de farinha de mandioca ?? um tradicional acompanhamento de pratos com frutos do mar no estado, que ?? o encontro dessa heran??a ind??gena com a a??oriana."

        food_name2_3.innerText = "Joelho de Porco (Eisbein)"
        food_img2_3.src = "https://receitasnotadez.com.br/wp-content/uploads/2020/03/512356000-612x612-1.jpg"
        food_desc2_3.innerText = "O joelho de porco ?? um prato em que essa parte da perna dianteira do animal ?? servido como o ingrediente principal, assado por horas, e acompanhado de especiarias. ?? tradicionalmente apresentado com chucrute. Por sua popularidade, essa refei????o ?? facilmente encontrada nos restaurantes locais."

        food_name2_4.innerText = "Churrasco e Chimarr??o"
        food_img2_4.src = "https://i.pinimg.com/originals/fd/04/30/fd0430fc04625472a73ae994ea228343.jpg"
        food_desc2_4.innerText = "Em virtude da proximidade com o Rio Grande do Sul, a culin??ria catarinense tamb??m recebeu forte influ??ncia ga??cha. Portanto ?? comum encontrar ??timas churrascarias espalhadas pelo estado. Al??m disso, uma das bebidas preferidas do povo da regi??o ?? o chimarr??o, tamb??m heran??a dos vizinhos."

        map2.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619414.3323212015!2d-53.32679246287408!3d-27.637388274056953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94d94d25c052fff9%3A0x2b277580ed7fab2b!2sSanta%20Catarina!5e0!3m2!1spt-BR!2sbr!4v1639143958280!5m2!1spt-BR!2sbr"

        clima_desc2.innerText = "O clima do estado ?? muito influenciado pelas massas de ar polares e intertropicais, a temperatura m??dia das regi??es litor??neas ?? de 18??C a 20??C. Na costa do Estado, as temperaturas s??o mais amenas, a capital Florian??polis, por exemplo, tem varia????es entre 20??C e 29??C no ver??o."

        travel_desc2.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o de um voo ?? acima de R$562 (ida e volta), e a dura????o do voo pode variar entre 1h40 e 4h dependendo do local de embarque."

        bigbutton2f.classList.remove('hide')
        bigbutton2fv()

        place3txt.innerText = "Rio Grande do Sul"
        statetxt3.innerText = "Rio Grande do Sul ?? o estado mais a sul do Brasil e faz fronteira com a Argentina e o Uruguai. A nordeste, a montanhosa Serra Ga??cha alberga a regi??o vin??cola do Vale dos Vinhedos e inclui cidades tur??sticas de estilo alem??o como Gramado e Canela, famosas pelas paisagens naturais pitorescas. Porto Alegre, a capital, ?? um grande porto com estruturas cl??ssicas como o Mercado P??blico e a Catedral Metropolitana, no centro hist??rico."
        state_img3.src = "https://mapadomundo.org/wp-content/uploads/2016/12/Missoes_iStock.jpg"

        food_name3_1.innerText = "Tainha Assada"
        food_img3_1.src = "https://ceoagro.com.br/wp-content/uploads/2019/07/tainha-assada1.jpg"
        food_desc3_1.innerText = "Essa ?? uma receita bastante famosa e consumida principalmente nas festividades para Nossa Senhora dos Navegantes e na Festa do Mar, que ocorrem no estado. Normalmente ela ?? feita na brasa, presa em uma esp??cie de bambu-taquara."

        food_name3_2.innerText = "Galeto na Brasa"
        food_img3_2.src = "https://exame.com/wp-content/uploads/2020/12/Galetos-1.jpg"
        food_desc1_2.innerText = "O prato, que teve forte influ??ncia italiana, ?? servido em v??rias galeterias pelo estado todo. Sempre assado na brasa, depois de ter passado v??rias horas marinando em um tempero especial. Normalmente os restaurantes servem o galeto acompanhado de uma boa sopa de capeletti, salada de batata e at?? mesmo polenta frita."

        food_name3_3.innerText = "Pinh??o"
        food_img3_3.src = "https://www.jornaldocomercio.com/_midias/jpg/2021/05/07/pinhao_6847dbca_af4e_11eb_b1a8_eec3a079c8c5-9311452.jpg"
        food_desc3_3.innerText = "O Rio Grande do Sul ?? um dos maiores produtores de pinh??o. Al??m disso, os ga??chos amam esse ingrediente. Mesmo sendo consumido em outras partes da regi??o sul, o pinh??o tamb??m ?? um prato muito caracter??stico do Rio Grande."

        food_name3_4.innerText = "Entrevero"
        food_img3_4.src = "https://fuiporaiblog.com/wp-content/uploads/2020/04/entrevero.jpg"
        food_desc3_4.innerText = "O entrevero ?? uma del??cia e muito consumido em outras partes da regi??o sul. O prato pode ser feito com v??rios ingredientes, como carne de porco, cora????o de frango, bacon e at?? mesmo com pinh??o. A receita ?? basicamente uma mistura de carnes cozidas com alguns legumes, servido com acompanhamentos como arroz branco e pur?? de batatas."

        map3.src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7051933.010636368!2d-58.16318989122311!3d-30.341664782596514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9504720c40b45803%3A0xad9fb3dbaf9f73de!2sRio%20Grande%20do%20Sul!5e0!3m2!1spt-BR!2sbr!4v1639147318696!5m2!1spt-BR!2sbr"

        clima_desc3.innerText = "Devido ?? sua posi????o geogr??fica, o estado apresenta grandes diferen??as em rela????o ao Brasil. A latitude refor??a as influ??ncias das massas de ar oriundas da regi??o Polar e das zonas Tropical Continental e Atl??ntica. As temperaturas apresentam grande varia????o sazonal, com ver??es quentes e invernos bastante rigorosos, com a ocorr??ncia de geadas e precipita????o eventual de neve. As temperaturas m??dias variam entre 15?? e 18??C, com m??nimas de at?? -10??C."

        travel_desc3.innerText = "O pre??o da viagem pode variar de acordo com o local do destino, com o local de embarque, e com o hotel incluso no pacote. A m??dia de pre??o com quatro di??rias ?? por volta de R$89, fora atra????es tur??sticas que voc?? poder?? encontrar. A dura????o do voo pode variar entre 1h43 e 8h dependendo do local de embarque."

        bigbutton3f.classList.remove('hide')
        bigbutton3fv()
    }  
}

function setNextPicture() {
    if(currentQuestionIndex == 0) {
        image.src="https://o.quizlet.com/R83wCCnwxgQylxWG3-vYrg_b.png"
    } else if(currentQuestionIndex == 1) {
        image.src="https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL3JlZGVmaW5lZm91cnNlYXNvbnMtMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjgyOH19fQ=="
    } else if(currentQuestionIndex == 2) {
        image.src="https://st8.cannypic.com/thumbs/40/408827_632_canny_pic.jpg"
    }
}

const options = [
    {
        question: "Qual regi??o do Brasil voc?? prefere?",
        options: [
            {text: 'Norte', value: 5},
            {text: 'Nordeste', value: 6},
            {text: 'Centro-Oeste', value: 7},
            {text: 'Sudeste', value: 8},
            {text: 'Sul', value: 9}
        ]
    },
    {
        question: "Qual tipo de clima voc?? prefere?",
        options: [
            {text: 'Quente', value: 1},
            {text: 'Frio', value: 2},
            {text: '??mido', value: 3},
            {text: 'Seco', value: 4}
        ]
    },
    {
        question: "Que tipo de transporte voc?? prefere?",
        options: [
            {text: '??nibus', value: 10},
            {text: 'Carro', value: 11},
            {text: 'Avi??o', value: 12},
            {text: 'Barco', value: 13}
        ]
    }
]