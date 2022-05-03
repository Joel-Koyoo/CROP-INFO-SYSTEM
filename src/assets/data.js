let imgs = [
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/085/original/Anthracnose_2.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/062/788/original/CBSD_J.Legg_Trial_8921.JPG",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/062/288/original/13505169343_bebefb39c3_o.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/126/original/Anthracnose_1.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/128/original/Cercospora_leaf_spot_1.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/130/original/Cercospora_leaf_spot_4.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/067/261/original/5223011-PPT.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/150/original/Rust_6.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/086/original/5500527-SMPT.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/077/original/1436068-SMPT.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/079/original/1599351-SMPT.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/000/602/original/Alternaria_leaf_spot.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/000/603/original/Anthracnose.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/100/045/original/5365358-PPT.jpg",
  "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/000/767/original/White_mold_2.jpg",
  "https://www.google.com/imgres?imgurl=http%3A%2F%2Feagri.org%2Feagri50%2FPATH272%2Flecture06%2F39b--67-500_10-04-04_eyespot%2520disease.jpg&imgrefurl=http%3A%2F%2Feagri.org%2Feagri50%2FPATH272%2Flecture06%2F013.html&tbnid=uhZPs90e72HG2M&vet=12ahUKEwiVzYf67MD3AhUG3hoKHQM9B5kQMygBegUIARC5AQ..i&docid=3GmInTmRT6ojzM&w=597&h=527&q=eye%20spot%20in%20sugarcane&ved=2ahUKEwiVzYf67MD3AhUG3hoKHQM9B5kQMygBegUIARC5AQ",
];

export const cropsList = [
  {
    id: 1,
    name: "Cassava/Mihogo",
    description:
      "Mizizi ya muhogo huliwa kama mboga na huchukuliwa kuwa na sumu ikiwa mbichi ndiyo maana ni lazima ipikwe kabla ya kuliwa. Mzizi una aina mbalimbali za matumizi, baadhi yao ni pamoja na uzalishaji wa unga, wanga, au ethanol. Majani ya muhogo yanaweza kutoa chanzo kizuri cha vitamini na protini ambayo inaweza kuliwa baada ya kupikwa. Nyasi za muhogo hutumika kama chakula cha mifugo na huchangia katika utengenezaji wa viambatisho, nguo na vipodozi.",
    details:
      "Mihogo ni mimea inayokuzwa hasa kwa ajili ya mizizi yake ya kuhifadhi ambayo huliwa kama mboga. Mmea wa muhogo ni mmea wenye miti mirefu na wenye mashina yaliyosimama na majani mepesi yaliyopangwa ond na petioles (shina za majani) hadi urefu wa 30 cm. Mmea hutoa maua yasiyo na petal kwenye mbio. Mizizi inayoweza kuliwa ya mmea kawaida huwa na silinda na mikanda na huwa na rangi nyeupe, kahawia au nyekundu. Mimea ya muhogo inaweza kufikia urefu wa m 4 na kwa kawaida huvunwa miezi 9-12 baada ya kupandwa. ",
    seasons: [{ time: " March to June " }, { time: "October to December " }],
    diseases: [
      { name: "Anthracnose" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[0]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Cankers kwenye shina na petioles ya majani; majani yakianguka chini; kunyauka kwa majani ambayo hufa na kuanguka kutoka kwa mmea na kusababisha kuharibika kwa majani; kifo cha shina; sehemu laini za mmea hujipinda na kupotoshwa",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Ugonjwa Huu kawaida haisababishi uharibifu mkubwa wa kiuchumi kwa muhogo na udhibiti sio lazima; kuepuka kupanda vipandikizi na cankers; ugonjwa ukitokea uchafu wa mazao unapaswa kuondolewa na kuharibiwa baada ya kuvuna",
      },

      { name: "Madoa ya Majani ya Kahawia ya Muhogo" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[1]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Madoa ya kahawia ya mviringo au yasiyo ya kawaida na ukingo mweusi kati ya mishipa ya majani kwenye majani yaliyozeeka; vituo vya vidonda vinaweza kuacha givinf huacha kuonekana kwa shothole; ikiwa maambukizi ni makali, majani yanaweza kugeuka njano, kukauka na kushuka kutoka kwenye mmea",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Ondoa majani na uchafu wa mazao kutoka kwa mimea ili kuzuia kuenea kwa magonjwa; ondoa magugu karibu na mazao",
      },
      { name: "Madoa ya majani" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[2]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Matangazo makubwa, nyeupe kwenye uso wa juu wa majani; madoa yenye katikati ya kijivu chini ya majani katika hali ya hewa ya unyevunyevu",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Ondoa majani na uchafu wa mazao kutoka kwa mimea ili kuzuia kuenea kwa magonjwa; ondoa magugu karibu na mazao",
      },
      {
        detailsNam: "Maelezo Zaidi",
      },
      {
        details:
          "Mahitaji ya kimsingi Muhogo hustawi katika maeneo ya kitropiki na ya joto duniani kwani inahitaji halijoto ya joto kwa ukuaji bora. Mimea hiyo inahitaji angalau miezi 8 ya hali ya hewa ya joto, inastawi katika mikoa yenye hali ya hewa ya joto, yenye unyevu na mvua ya kawaida. Mihogo inaweza kukuzwa katika aina nyingi za udongo, ikizalisha hata kwenye udongo duni lakini itazaa vyema kwenye udongo wa udongo wenye unyevunyevu na wenye pH kati ya 5.5 na 6.5. Muhogo unastahimili ukame lakini hautastahimili ukataji wa maji. Uzalishaji wa mizizi huongezeka wakati halijoto ni kati ya 25 na 32°C (77–90°F). Mihogo inapaswa kupandwa kwenye jua kali na ni nyeti sana kwa kivuli, ambayo husababisha mavuno kidogo. Vipandikizi Muhogo huenezwa kutoka kwa vipandikizi vya shina kwani mizizi haitoi machipukizi. Vipandikizi vya shina vinapaswa kuchukuliwa tu kutoka kwa mimea ambayo haina magonjwa, ambayo ina umri wa miezi 10 na mizizi iliyozaa. Vipandikizi vinapaswa kuchukuliwa kutoka kwenye shina ngumu na kuacha angalau sentimita 30 (inchi 11.8) za shina ardhini. Shina linaweza kukatwa kwa kisu chenye ncha kali, secateurs au msumeno na kila ukataji uwe na nodi 1-2 na urefu wa takriban 20 cm (7.9 in). Kuchipua Ni vyema kutumbukiza vipandikizi vya shina kwenye kiua viua kuvu kabla ya kupanda ili kusaidia kuzuia ukuaji wa magonjwa. Vipandikizi vinaweza kupandwa moja kwa moja kwenye kitalu au kuoteshwa kwenye trei au mifuko ya polyethilini. Ili kuotesha mashina, panda kwenye trei ya seli au mfuko ambao umejaa udongo bora. Panda shina moja katika kila seli au mfuko kwa kulisukuma kwenye udongo katika mwelekeo uliokuwa ukiota kwenye mmea mama (sehemu kongwe ya shina kwanza). Trei zinapaswa kuwekwa katika kivuli kidogo hadi shina zianze kuota. Ikiwa unapanda vipandikizi vya shina kwenye kitalu (bora zaidi kwa vipandikizi vilivyochukuliwa kutoka juu juu ya shina ambapo kuni hazijakomaa), chagua mahali penye udongo wa hali ya juu kwenye kivuli kidogo na uandae kitanda kisichopungua mita 1 (futi 3.3) kwa upana. Shina zinaweza kupandwa kwa mlalo kwenye kitalu na hii huchochea ukuaji wa shina nyingi. Nafasi ya vipandikizi 10 x 10 cm (4 x 4 ndani) gridi ya taifa. Kukata shina kunapaswa kumwagilia mara baada ya kupanda na mara kwa mara baada ya hapo. Lengo la kuweka udongo unyevu lakini si mvua. Shina zinapaswa kuanza kuota siku 7-10 baada ya kupanda. Kupandikiza Mimea inayoenezwa kutoka kwa vipandikizi vya shina huwa tayari kupandwa baada ya takriban wiki 4-6. Andaa shamba kwa ajili ya kupanda kwa kulima udongo na kuondoa magugu. Vipandikizi vya angani kwa sentimita 75–100 (futi 2.5–3.2) katika safu zilizo na nafasi ya mita 1–5 (futi 3.2–16.4) tofauti. Mbolea mimea kama inafaa. Mbolea au kinyesi cha kuku kinaweza kutumika. Kulima udongo ili kuondoa magugu na kuvunja udongo kuzunguka mimea. Kuvuna Muhogo huwa tayari kuvunwa takriban mwaka mmoja baada ya kupandwa kulingana na aina inayokuzwa. Baadhi ya aina zinazokomaa mapema zinaweza kuwa tayari kuvunwa katika takriban miezi tisa. Katika maeneo yenye baridi, mizizi ya muhogo inaweza kubaki ardhini kwa muda wa miaka 2 kabla ya kuvuna lakini inaweza kuwa na nyuzinyuzi kwa hivyo haipendekezwi mahali ambapo muhogo unalimwa kwa ajili ya matumizi. Mizizi ya muhogo huvunwa kwa kuchimba. Mizizi inapaswa kuchimbwa kwa uangalifu ili kuzuia uharibifu.",
      },
    ],
    steps: [
      { step: " 1. Select site " },
      { step: " 2. land preparation " },
      { step: " 3. Planting material selection(cassava sticks)" },
      { step: " 4. Cutting cassava sticks" },
      { step: " 5. Planting" },
      { step: " 6. Weed control" },
      { step: " 7. Harvesting" },
    ],

    images: [
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/006/376/original/7733317642_b3b40c497f_o.jpg",
      },
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/085/original/Anthracnose_2.jpg",
      },
      {
        url: "https://media.istockphoto.com/photos/bulk-of-fresh-cassava-harvested-in-farmland-picture-id626302984?k=6&m=626302984&s=612x612&w=0&h=mQeXxc8Z6ixtwD0dTcM0oVx7s0cvdndC7_dhOCPbLm8=",
      },
      {
        url: "https://i.pinimg.com/originals/5e/c2/7e/5ec27e04128fa482cf330125b12d23d3.jpg",
      },
      {
        url: "https://plantinstructions.com/wp-content/uploads/2017/10/cassava.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Maize/Mahindi",
    description:
      "Mahindi na unga wa mahindi (mahindi yaliyokaushwa, ya kusagwa) ni chakula kikuu katika nchi kote ulimwenguni. Masikio yanaweza kupikwa na kuliwa kutoka kwenye mabua kama mboga au punje zinaweza kuondolewa na kuliwa kama zilivyo au kutumika kuzalisha aina mbalimbali za vyakula ikiwa ni pamoja na nafaka na unga. Mahindi pia ni chanzo kikuu cha wanga, ambayo inaweza kusindikwa kuwa mafuta na sharubati ya mahindi ya fructose. Mahindi pia hulimwa kama chakula cha mifugo.",
    details:
      "Mahitaji ya kimsingi Mahindi hulimwa vyema katika maeneo yenye joto, tropiki na chini ya tropiki kwani huhitaji udongo wenye joto ili kukua vyema. Mojawapo ya hitaji muhimu la kukuza mahindi ni udongo wa hali ya juu wenye kina kirefu, wenye rutuba na unaotoa maji vizuri na pH kati ya 6.0 na 6.8. Mimea ya mahindi ni malisho mazito sana na hata udongo wenye rutuba zaidi unaweza kuhitaji kuongezwa virutubishi wakati mimea inakua, hasa nitrojeni. Mahindi pia yanahitaji nafasi nyingi yanapokua na kuchavushwa na upepo. Inapaswa kupandwa mahali ambapo itapata jua kamili kwa siku nyingi na kutoa unyevu wa kutosha. ",
    seasons: [
      { time: " March to September " },
      { time: "October to February " },
    ],
    diseases: [
      { name: "Anthracnose" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[4]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "- Madoa madogo ya mviringo au marefu yaliyolowekwa na maji ambayo hukua hadi urefu wa 15 mm huonekana kwenye majani, Vidonda huendeleza kituo cha tan na mpaka nyekundu-kahawia au machungwa ,Vidonda vinaweza kuungana na kutengeneza mabaka makubwa ya necrotic(wafu), Majani yaliyoathirika sana kwenye mseto unaoshambuliwa huweza kunyauka na kufa ,Miili inayozaa matunda hukua kwenye tishu zilizokufa na inaweza kutoa mbegu za waridi au chungwa ,Juu kufa na kuoza buaa",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Mseto wa mimea sugu kwa anthracnose; kubadilisha mazao na kulima uchafu wa mazao kwenye udongo kunaweza kusaidia kupunguza matukio ya maambukizo ya msimu wa mapema.",
      },

      { name: "Madoa ya majani ya Cercospora" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[5]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Matangazo madogo ya necrotic na halos ya klorotiki kwenye majani ambayo hupanuka hadi vidonda vya mstatili 1-6 cm kwa urefu na 2-4 mm kwa upana; vidonda vinapokomaa huwa na rangi ya hudhurungi na hatimaye kuwa kijivu; vidonda vina kando kali, sambamba na ni opaque; ugonjwa unaweza kuendeleza haraka na kusababisha blighting kamili ya majani na kifo cha mimea.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Panda mahuluti ya mahindi yenye upinzani dhidi ya ugonjwa huo; mzunguko wa mazao na uchafu wa kulima kwenye udongo unaweza kupunguza kiwango cha chanjo kwenye udongo lakini hauwezi kutoa udhibiti katika maeneo ambayo ugonjwa umeenea; dawa za kuua kuvu za majani zinaweza kuwa na faida kiuchumi kwa baadhi ya mahuluti wanaoshambuliwa kwa wingi.",
      },
      { name: "Kuoza kwa mkaa" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[6]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Dalili kawaida huonekana kwanza katika hatua ya tasling; mabua ya mmea husagwa na pith imeoza kabisa na nyuzi nyuzi za tishu za mishipa iliyoachwa intact; miili ndogo, nyeusi ya matunda ya kuvu huonekana kwenye nyuzi za mishipa na kutoa tishu rangi ya kijivu; fangasi hukua na kuwa internodes ya bua na kusababisha mmea kuiva mapema na kusababisha shina kudhoofika; mmea unaweza kuvunjika",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Kwa sasa hakuna dawa za kuua kuvu za kutibu ugonjwa huo; epuka kusisitiza mimea kwa kutumia usimamizi mzuri wa maji; kubadilisha mazao na nafaka ndogo kunaweza kusaidia kupunguza matukio ya magonjwa.",
      },
      { name: "Kutu ya kawaida " },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[7]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Mviringo au vidogo vya mdalasini pustules kahawia kwenye nyuso za juu na chini za majani; pustules hupasuka na kutolewa spores nyekundu ya unga; pustules hubadilika rangi ya hudhurungi-nyeusi zinapokomaa na kutoa spora za unga wa kahawia iliyokolea; ikiwa maambukizi ni kali, pustules inaweza kuonekana kwenye tassels na masikio na majani inaweza kuanza njano; katika mahuluti ya mahindi yanayostahimili kwa kiasi, dalili huonekana kama mikunjo ya klorotiki au necrotic kwenye majani ambayo hutoa spore kidogo au kutotoa kabisa.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Njia bora zaidi ya kudhibiti ugonjwa ni kupanda mahuluti sugu; utumiaji wa dawa zinazofaa za kuua kuvu kunaweza kutoa kiwango fulani cha udhibiti na kupunguza ukali wa ugonjwa; dawa za kuua kuvu hufaa zaidi wakati kiasi cha chanjo ya pili bado ni kidogo, kwa ujumla wakati mimea ina pustules chache za kutu kwa kila jani..",
      },
      {
        detailsNam: "Maelezo Zaidi",
      },
      {
        details:
          "Mahitaji ya kimsingi Muhogo hustawi katika maeneo ya kitropiki na ya joto duniani kwani inahitaji halijoto ya joto kwa ukuaji bora. Mimea hiyo inahitaji angalau miezi 8 ya hali ya hewa ya joto, inastawi katika mikoa yenye hali ya hewa ya joto, yenye unyevu na mvua ya kawaida. Mihogo inaweza kukuzwa katika aina nyingi za udongo, ikizalisha hata kwenye udongo duni lakini itazaa vyema kwenye udongo wa udongo wenye unyevunyevu na wenye pH kati ya 5.5 na 6.5. Muhogo unastahimili ukame lakini hautastahimili ukataji wa maji. Uzalishaji wa mizizi huongezeka wakati halijoto ni kati ya 25 na 32°C (77–90°F). Mihogo inapaswa kupandwa kwenye jua kali na ni nyeti sana kwa kivuli, ambayo husababisha mavuno kidogo. Vipandikizi Muhogo huenezwa kutoka kwa vipandikizi vya shina kwani mizizi haitoi machipukizi. Vipandikizi vya shina vinapaswa kuchukuliwa tu kutoka kwa mimea ambayo haina magonjwa, ambayo ina umri wa miezi 10 na mizizi iliyozaa. Vipandikizi vinapaswa kuchukuliwa kutoka kwenye shina ngumu na kuacha angalau sentimita 30 (inchi 11.8) za shina ardhini. Shina linaweza kukatwa kwa kisu chenye ncha kali, secateurs au msumeno na kila ukataji uwe na nodi 1-2 na urefu wa takriban 20 cm (7.9 in). Kuchipua Ni vyema kutumbukiza vipandikizi vya shina kwenye kiua viua kuvu kabla ya kupanda ili kusaidia kuzuia ukuaji wa magonjwa. Vipandikizi vinaweza kupandwa moja kwa moja kwenye kitalu au kuoteshwa kwenye trei au mifuko ya polyethilini. Ili kuotesha mashina, panda kwenye trei ya seli au mfuko ambao umejaa udongo bora. Panda shina moja katika kila seli au mfuko kwa kulisukuma kwenye udongo katika mwelekeo uliokuwa ukiota kwenye mmea mama (sehemu kongwe ya shina kwanza). Trei zinapaswa kuwekwa katika kivuli kidogo hadi shina zianze kuota. Ikiwa unapanda vipandikizi vya shina kwenye kitalu (bora zaidi kwa vipandikizi vilivyochukuliwa kutoka juu juu ya shina ambapo kuni hazijakomaa), chagua mahali penye udongo wa hali ya juu kwenye kivuli kidogo na uandae kitanda kisichopungua mita 1 (futi 3.3) kwa upana. Shina zinaweza kupandwa kwa mlalo kwenye kitalu na hii huchochea ukuaji wa shina nyingi. Nafasi ya vipandikizi 10 x 10 cm (4 x 4 ndani) gridi ya taifa. Kukata shina kunapaswa kumwagilia mara baada ya kupanda na mara kwa mara baada ya hapo. Lengo la kuweka udongo unyevu lakini si mvua. Shina zinapaswa kuanza kuota siku 7-10 baada ya kupanda. Kupandikiza Mimea inayoenezwa kutoka kwa vipandikizi vya shina huwa tayari kupandwa baada ya takriban wiki 4-6. Andaa shamba kwa ajili ya kupanda kwa kulima udongo na kuondoa magugu. Vipandikizi vya angani kwa sentimita 75–100 (futi 2.5–3.2) katika safu zilizo na nafasi ya mita 1–5 (futi 3.2–16.4) tofauti. Mbolea mimea kama inafaa. Mbolea au kinyesi cha kuku kinaweza kutumika. Kulima udongo ili kuondoa magugu na kuvunja udongo kuzunguka mimea. Kuvuna Muhogo huwa tayari kuvunwa takriban mwaka mmoja baada ya kupandwa kulingana na aina inayokuzwa. Baadhi ya aina zinazokomaa mapema zinaweza kuwa tayari kuvunwa katika takriban miezi tisa. Katika maeneo yenye baridi, mizizi ya muhogo inaweza kubaki ardhini kwa muda wa miaka 2 kabla ya kuvuna lakini inaweza kuwa na nyuzinyuzi kwa hivyo haipendekezwi mahali ambapo muhogo unalimwa kwa ajili ya matumizi. Mizizi ya muhogo huvunwa kwa kuchimba. Mizizi inapaswa kuchimbwa kwa uangalifu ili kuzuia uharibifu.",
      },
    ],
    steps: [
      { step: " 1. Field selection " },
      { step: " 2. Seed-bed preparation " },
      { step: " 3. Drilling and sowing" },
      { step: " 4. Choosing a variety" },
      { step: " 5. Weed control" },
      { step: " 6. Crop nutrition" },
      { step: " 7. Pests and diseases" },
    ],

    images: [
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/001/130/original/Cercospora_leaf_spot_4.jpg",
      },
      {
        url: "https://images.unsplash.com/photo-1531339137874-f8999782d3bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      },
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/333/original/1303616796_a8af71b884_z.jpg",
      },
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/334/original/5911966026_0107065d80_z.jpg",
      },
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/332/original/7591705008_c5dd75af75_z.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Ground nuts (Peanut)",
    description:
      " inayokuzwa kwa ajili ya mafuta yake na karanga zinazoliwa. Mimea ya karanga ni ndogo, kwa kawaida imesimama, mimea yenye shina nyembamba na majani kama manyoya. Majani yamepangwa kwa jozi mbadala na yana viambatisho vinavyofanana na jani karibu na bua. Mmea wa karanga hutoa maua ya manjano, chungwa, krimu au meupe ambayo hutoa 'vigingi', miundo ya maua ambayo huzama ardhini ili kukuza ganda. Maganda yanaweza kufikia urefu wa 10 cm (4 in) na yanaweza kuwa na kati ya mbegu 1 hadi 5",
    details:
      "Matumizi ni kama; Karanga nyingi zinazozalishwa kibiashara hutumika kwa uchimbaji wa mafuta yao ambayo hutumika katika kupikia. Bidhaa inayotokana na uchimbaji wa mafuta ni keki iliyoshinikizwa ambayo hutumiwa kama chakula cha mifugo na pia katika utengenezaji wa unga wa karanga. Kokwa mbichi pia kwa kawaida huchomwa na kuliwa kama chakula cha vitafunio.",
    seasons: [
      { time: "15th February to 15th April during the first season " },
      { time: "Early August for the second season " },
    ],
    diseases: [
      { name: "Cylindrocladium nyeusi kuoza" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[8]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Majani kwenye shina kuu kugeuka klorotiki na kunyauka; mmea mzima hunyauka haraka sana wakati kuna kipindi cha mkazo wa maji kufuatia unyevu mwingi; makundi ya vimelea vya rangi nyekundu-kahawia hutokea kwenye mashina, vigingi na maganda; mizizi iliyoharibiwa; mizizi nyeusi na iliyokauka.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Njia bora zaidi ya kudhibiti ugonjwa ni kupanda aina za karanga ambazo zina ukinzani kwa ugonjwa huo; mzunguko wa mazao na yasiyo ya asili kama vile mahindi, pamba au tumbaku inaweza kusaidia kupunguza chanjo kwenye udongo; uwekaji wa vifukizio sahihi vya udongo kwenye mashamba yaliyoshambuliwa sana kunaweza kusaidia kudhibiti ugonjwa huo..",
      },

      { name: "Madoa ya mapema ya majani" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[9]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Klorotiki ndogo hujikunja kwenye petioles za majani, mashina na vigingi ambavyo hupanuka na kuwa na rangi nyeusi; vidonda kwenye sehemu ya juu ya majani kwa kawaida huwa na halo ya manjano na huwa na rangi nyekundu ya kahawia kwenye upande wa chini wa majani.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Ikiwa ugonjwa upo, mzunguko wa mbali na karanga kwa muda wa miaka 2-3 unapendekezwa lakini haitoshi kudhibiti ugonjwa kabisa; vifusi vya zao la karanga vilipwe kwenye udongo baada ya kuvuna na wajitoleaji wowote waondolewe kwenye zao ambalo si asili; dawa za kuua ukungu zinapaswa kutumika kwa tahadhari kwani zinaweza kuzidisha magonjwa mengine ya majani pale yanapokuwepo.",
      },

      { name: "Mahali palipochelewa kwenye majani" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[10]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Klorotiki ndogo hujikunja kwenye petioles za majani, mashina na vigingi ambavyo hupanuka na kuwa na rangi nyeusi; dalili zinaweza kufanana sana au kufanana na doa la mwanzo la majani na zinaweza tu kutofautishwa kwa uchunguzi wa konidia chini ya darubini.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Ikiwa ugonjwa upo, mzunguko wa mbali na karanga kwa muda wa miaka 2-3 unapendekezwa lakini haitoshi kudhibiti ugonjwa kabisa; mazao ya karanga yalimwe kwenye udongo baada ya kuvuna na wajitoleaji wowote waondolewe kwenye zao ambalo si asili; dawa za kuua ukungu zinapaswa kutumika kwa tahadhari kwani zinaweza kuzidisha magonjwa mengine ya majani pale yanapokuwepo..",
      },
    ],
    steps: [
      { step: " 1. dust the seeds with thairum to protect from soil fungi" },
      { step: " 2. sow the seeds at a depth of 5-6cm" },
      { step: " 3. weed in the first 3-6 weeks after planting" },
    ],
    images: [
      {
        url: "https://netstorage-legit.akamaized.net/images/vllkyt38hnq3bpgcj.jpg",
      },
      {
        url: "https://image.chitra.live/api/v1/wps/6aa4064/4aa37b43-4488-4e66-9b9a-8fe563cd72d5/3/groundnuts-671x403.jpg",
      },
      {
        url: "https://www.agrifarming.in/wp-content/uploads/2018/08/Groundnut-Farming-Project-Report..jpg",
      },
    ],
  },

  {
    id: 4,
    name: "Beans",
    description:
      "is an herbaceous annual plant in the family Fabaceae which is grown as a pulse and green vegetable. The common bean can be bushy, vine-like or climbing depending on the variety being grown. The leaves grow alternately on the stems, are green or purple in color and are divided into 3 oval leaflets with smooth edges. The leaves can grow 6–15 cm (2.4–5.9 in) long and 3–11 cm (1.2–4.3 in) wide. The common bean produces white, pink, lilac or purple flowers which are approximately 1 cm (0.4 in) in diameter, and bean pods 8–20 cm (3.1–7.9 in) long and 1–1.5 cm (0.4–0.6 in) wide which can range in color from green to yellow or black to purple",
    details:
      "Basic requirements Common beans are warm-season crops and should be planted after all danger of frost has passed and the soil has warmed. Beans will grow best at soil temperatures between 15.5 and 29°C (60–85°F) and are sensitive to cold temperatures and frosts. Beans will grow best in a fertile, well-draining soil with a pH between 6.0 and 6.75 Beans will perform best in full sunlight. Varieties Common beans can either be bush or pole varieties. Bush beans will grow erect without any support and require less care than pole varieties. Pole beans grow vertically on a support and are generally easier to harvest. Most type of bean are now available as both bush and pole varieties. Some green bean varieties may be referred to as “string” beans. This name is a reference to older varieties which produced a stringy fibre along the seam of the pod. Modern cultivars were bred which did not produce this substance and which are commonly referred to as “snap” beans due to the ease with which the green pods can be snapped in two. Sowing seeds Beans should be direct seeded in the garden in when the soil has reached a temperature of at least 15.5°C (60°F), with the optimum temperature for germination being between 15.5 and 29°C (60–85°F)",
    seasons: [{ time: "March to June" }, { time: "August to November" }],
    diseases: [
      { name: "Alternaria leaf spot" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[11]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Small irregular brown lesions on leaves which expand and turn gray-brown or dark brown with concentric zones; older areas of lesions may dry out and drop from leaves causing shot hole; lesions coalesce to form large necrotic patches",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Plant beans in fertile soil; foliar fungicide application may be required",
      },

      { name: "Anthracnose" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[12]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Small, dark brown to black lesions on cotyledons; oval or eye-shaped lesions on stems which turn sunken and brown with purple to red margins; stems may break if cankers weaken stem; pods drying and shrinking above areas of visible symptoms; reddish brown spots on pods which become circular and sunken with rust colored margin.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Plant resistant varieties; use certified disease free seed; avoid sprinkler irrigation, water plants at base; plow bean crop debris into soil.",
      },

      { name: "Bean rust " },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[13]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Initially the symptoms appear as small yellow/white spots on leaves. Later the spots become enlarged and shows raised brick red rust pustules (uredinia). Normally this pustules are surrounded by a yellow halo. Premature leaf drop may occur if the disease is severe.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Grow available resistant varieties. Remove and destroy the infected crop debris. Follow crop rotation. Keep the field free from weeds. If the disease is severe, spray suitable fungicide.",
      },

      { name: "White mold " },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[14]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Flowers covered in white, cottony fungal growth; small, circular, dark green, water-soaked lesions on pods leaves and branches which enlarge and become slimy; cottony white growth may be visible on lesions during periods of high humidity; death of branches and/or entire plant.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "There is no true immunity to white mold in any bean varieties; rotate crops with non-hosts like cereals and corn; plant rows parallel to direction of prevailing winds to prevent spread of disease from secondary hosts nearby; avoid excessive nitrogen fertilizer; use a wide row spacing.",
      },
    ],
    steps: [
      { step: " 1.Prepare your farm land" },
      {
        step: " 2.The depth of planting should not exceed 5cm as your seeds may not germinate when planted deep.",
      },
      { step: " 3.We would recommend spacing of (50*10cm or 25*20cm)" },
    ],
    images: [
      {
        url: "https://plantvillage-production-new.s3.amazonaws.com/images/pics/000/002/381/original/4947491450_1669cdb4ab_z.jpg",
      },
      {
        url: "https://greekfoodnews.com/wp-content/uploads/2019/11/Greek-Beans-greekfoodnews.jpg",
      },
      {
        url: "https://www.africabusinessclassroom.com/wp-content/uploads/2017/09/bean-farming.jpg",
      },
    ],
  },

  {
    id: 5,
    name: "Sugarcane",
    description:
      "Sugarcane, Saccharum officinarum, is a perennial grass in the family Poaceae grown for its stem (cane) which is primarily used to produce sucrose. Sugarcane has a thick, tillering stem which is clearly divided into nodes and internodes. The leaves of the plant grow from the nodes of the stem, arranged in two rows on either side of the stem. The leaves are tubular and blade-like, thicker in the centres than at the margins and encircle the stem. ",
    details:
      "Sugarcane is a tropical, perennial grass that forms lateral shoots at the base to produce multiple stems, typically 3 to 4 m (10 to 13 ft) high and about 5 cm (2 in) in diameter.Sugarcane is primarily used for the production of cane sugar (sucrose). One of the biproducts of sugarcane production is bioethanol which can be used as a fuel in place of gasoline. The dried fibre which is left over after the extraction of the sugarcane juice is called bagasse and is used in paper and textile production, as a fuel or as an organic mulch.",
    seasons: [{ time: "January to March" }],
    diseases: [
      { name: "Alternaria leaf spot" },
      { imageDeta: "Picha" },

      {
        image: (
          <div>
            <img height={300} src={imgs[15]} alt="new" />
          </div>
        ),
      },
      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Small water-soaked spots on leaves; elongated water-soaked spots in shape of an eye; straw colored lesions with reddish brown center develop from water-soaked lesions.",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Disease can be controlled through the application of appropriate foliar fungicides.",
      },

      { name: "Pineapple disease" },

      { detailsDeta: "Maelezo Ya Ugonjwa" },
      {
        details:
          "Setts not rooting; central soft portion of set has red discoloration which turns brown-black; cavities in infected internodes; In older canes leaves may be yellowing and plant appears withered; cut stem has a strong smell of pineapple",
      },
      { solutionDeta: "Solution/Tiba" },
      {
        solution:
          "Setts not rooting; central soft portion of set has red discoloration which turns brown-black; cavities in infected internodes; In older canes leaves may be yellowing and plant appears withered; cut stem has a strong smell of pineapple",
      },
    ],

    steps: [
      { step: " 1. prepare farm land " },
      { step: " 2. Select healthy sugarcane plants" },
      { step: " 3. Split the sugarcane stems into foot-long pieces" },
      { step: " 4. Dig furrows in a sunny planting spot" },
      { step: " 5. Moisten the furrows" },
      { step: " 6. Plant the sugarcane" },
    ],
    images: [
      {
        url: "https://furtherafrica.com/content-files/uploads/2020/07/900_sugar_cane.jpg",
      },
      {
        url: "https://www.chinimandi.com/wp-content/uploads/2018/07/main-qimg-1c39337ce45e4a680fedb8f239d14649-c-4.jpg",
      },
      {
        url: "https://media.istockphoto.com/photos/sugarcane-plants-picture-id480850511?k=6&m=480850511&s=612x612&w=0&h=fZsBo7Al5PPu7pjeKR4OsKK2xVob_2IZWkFzzLWBXOM=",
      },
    ],
  },
];
