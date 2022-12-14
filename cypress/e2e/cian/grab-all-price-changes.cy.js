/// <reference types="cypress" />

// https://www.cian.ru/export/xls/offers/?currency=2&deal_type=sale&engine_version=2&gas=1&is_dacha=0&maxprice=17000000&minprice=9000000&minsite=19&object_type%5B0%5D=1&offer_type=suburban&p=10&region=4593

const allLinks = [
    "https://ozery.cian.ru/sale/suburban/272049507/",
    "https://odintsovo.cian.ru/sale/suburban/276597508/",
    "https://solnechnogorsk.cian.ru/sale/suburban/275735258/",
    "https://naro-fominsk.cian.ru/sale/suburban/276964420/",
    "https://podolsk.cian.ru/sale/suburban/271586549/",
    "https://www.cian.ru/sale/suburban/277239471/",
    "https://khotkovo.cian.ru/sale/suburban/257492778/",
    "https://www.cian.ru/sale/suburban/270556110/",
    "https://klin.cian.ru/sale/suburban/276198610/",
    "https://dmitrov.cian.ru/sale/suburban/154247967/",
    "https://dmitrov.cian.ru/sale/suburban/196466771/",
    "https://chekhov.cian.ru/sale/suburban/276405128/",
    "https://serpukhov.cian.ru/sale/suburban/277696201/",
    "https://ramenskoye.cian.ru/sale/suburban/278418778/",
    "https://ozery.cian.ru/sale/suburban/275284899/",
    "https://noginsk.cian.ru/sale/suburban/278589423/",
    "https://www.cian.ru/sale/suburban/264552477/",
    "https://domodedovo.cian.ru/sale/suburban/277874378/",
    "https://odintsovo.cian.ru/sale/suburban/246128620/",
    "https://ruza.cian.ru/sale/suburban/275633304/",
    "https://noginsk.cian.ru/sale/suburban/276445880/",
    "https://ozery.cian.ru/sale/suburban/266406885/",
    "https://ruza.cian.ru/sale/suburban/271408027/",
    "https://dmitrov.cian.ru/sale/suburban/256378742/",
    "https://dmitrov.cian.ru/sale/suburban/257378118/",
    "https://www.cian.ru/sale/suburban/265121911/",
    "https://www.cian.ru/sale/suburban/274364532/",
    "https://ivanteyevka.cian.ru/sale/suburban/275141159/",
    "https://solnechnogorsk.cian.ru/sale/suburban/275726283/",
    "https://pavlovsky-posad.cian.ru/sale/suburban/274404523/",
    "https://odintsovo.cian.ru/sale/suburban/263968036/",
    "https://chekhov.cian.ru/sale/suburban/268534758/",
    "https://ivanteyevka.cian.ru/sale/suburban/278219326/",
    "https://chekhov.cian.ru/sale/suburban/203386558/",
    "https://odintsovo.cian.ru/sale/suburban/277217718/",
    "https://www.cian.ru/sale/suburban/277863718/",
    "https://kubinka.cian.ru/sale/suburban/275027628/",
    "https://klin.cian.ru/sale/suburban/274365903/",
    "https://klin.cian.ru/sale/suburban/269399191/",
    "https://elektrogorsk.cian.ru/sale/suburban/276764692/",
    "https://www.cian.ru/sale/suburban/277926725/",
    "https://ramenskoye.cian.ru/sale/suburban/273639672/",
    "https://dmitrov.cian.ru/sale/suburban/277031288/",
    "https://ramenskoye.cian.ru/sale/suburban/277314174/",
    "https://sergiyev-posad.cian.ru/sale/suburban/263098332/",
    "https://krasnozavodsk.cian.ru/sale/suburban/251193511/",
    "https://www.cian.ru/sale/suburban/274991352/",
    "https://www.cian.ru/sale/suburban/273121635/",
    "https://ramenskoye.cian.ru/sale/suburban/255830235/",
    "https://ramenskoye.cian.ru/sale/suburban/277336186/",
    "https://ramenskoye.cian.ru/sale/suburban/269680753/",
    "https://ivanteyevka.cian.ru/sale/suburban/269138136/",
    "https://www.cian.ru/sale/suburban/260176271/",
    "https://dmitrov.cian.ru/sale/suburban/270961893/",
    "https://odintsovo.cian.ru/sale/suburban/271433297/",
    "https://mozhaysk.cian.ru/sale/suburban/278356442/",
    "https://odintsovo.cian.ru/sale/suburban/278575914/",
    "https://www.cian.ru/sale/suburban/272896458/",
    "https://ozery.cian.ru/sale/suburban/276340172/",
    "https://chekhov.cian.ru/sale/suburban/277775732/",
    "https://www.cian.ru/sale/suburban/277087509/",
    "https://losino-petrovskiy.cian.ru/sale/suburban/271530201/",
    "https://sergiyev-posad.cian.ru/sale/suburban/275047970/",
    "https://sergiyev-posad.cian.ru/sale/suburban/271694769/",
    "https://chekhov.cian.ru/sale/suburban/275563693/",
    "https://odintsovo.cian.ru/sale/suburban/250850508/",
    "https://ramenskoye.cian.ru/sale/suburban/244481352/",
    "https://istra.cian.ru/sale/suburban/277626851/",
    "https://dmitrov.cian.ru/sale/suburban/244291254/",
    "https://chekhov.cian.ru/sale/suburban/277282495/",
    "https://volokolamsk.cian.ru/sale/suburban/265851411/",
    "https://naro-fominsk.cian.ru/sale/suburban/272154756/",
    "https://ramenskoye.cian.ru/sale/suburban/269245979/",
    "https://chekhov.cian.ru/sale/suburban/278405262/",
    "https://balashikha.cian.ru/sale/suburban/275290793/",
    "https://solnechnogorsk.cian.ru/sale/suburban/278502576/",
    "https://losino-petrovskiy.cian.ru/sale/suburban/270070121/",
    "https://naro-fominsk.cian.ru/sale/suburban/273479938/",
    "https://www.cian.ru/sale/suburban/266517135/",
    "https://www.cian.ru/sale/suburban/278419962/",
    "https://www.cian.ru/sale/suburban/274309909/",
    "https://naro-fominsk.cian.ru/sale/suburban/277312001/",
    "https://kolomna.cian.ru/sale/suburban/277273131/",
    "https://dmitrov.cian.ru/sale/suburban/276711594/",
    "https://lobnya.cian.ru/sale/suburban/271495802/",
    "https://sergiyev-posad.cian.ru/sale/suburban/276235685/",
    "https://chekhov.cian.ru/sale/suburban/257851523/",
    "https://odintsovo.cian.ru/sale/suburban/272449948/",
    "https://ramenskoye.cian.ru/sale/suburban/277143779/",
    "https://klin.cian.ru/sale/suburban/272067348/",
    "https://klin.cian.ru/sale/suburban/275652195/",
    "https://ozery.cian.ru/sale/suburban/264651391/",
    "https://ozery.cian.ru/sale/suburban/265709787/",
    "https://ruza.cian.ru/sale/suburban/276746602/",
    "https://solnechnogorsk.cian.ru/sale/suburban/273456880/",
    "https://ramenskoye.cian.ru/sale/suburban/277770547/",
    "https://serpukhov.cian.ru/sale/suburban/263092314/",
    "https://serpukhov.cian.ru/sale/suburban/277949818/",
    "https://istra.cian.ru/sale/suburban/277363478/",
    "https://dmitrov.cian.ru/sale/suburban/266961674/",
    "https://pavlovsky-posad.cian.ru/sale/suburban/269523964/",
    "https://pavlovsky-posad.cian.ru/sale/suburban/278055570/",
    "https://solnechnogorsk.cian.ru/sale/suburban/277062256/",
    "https://ramenskoye.cian.ru/sale/suburban/262085992/",
    "https://istra.cian.ru/sale/suburban/271205192/",
    "https://ramenskoye.cian.ru/sale/suburban/274332992/",
    "https://istra.cian.ru/sale/suburban/276523528/",
    "https://naro-fominsk.cian.ru/sale/suburban/266788581/",
    "https://noginsk.cian.ru/sale/suburban/273972128/",
    "https://odintsovo.cian.ru/sale/suburban/192946203/",
    "https://chekhov.cian.ru/sale/suburban/277380222/",
    "https://odintsovo.cian.ru/sale/suburban/273402320/",
    "https://ramenskoye.cian.ru/sale/suburban/271791784/",
    "https://khimki.cian.ru/sale/suburban/270222595/",
    "https://www.cian.ru/sale/suburban/278519836/",
    "https://ramenskoye.cian.ru/sale/suburban/272410759/",
    "https://mytishchi.cian.ru/sale/suburban/275867570/",
    "https://pushkino.cian.ru/sale/suburban/235211036/",
    "https://www.cian.ru/sale/suburban/267884947/",
    "https://ramenskoye.cian.ru/sale/suburban/245465772/",
    "https://ivanteyevka.cian.ru/sale/suburban/277620784/",
    "https://naro-fominsk.cian.ru/sale/suburban/272678790/",
    "https://podolsk.cian.ru/sale/suburban/276347756/",
    "https://klin.cian.ru/sale/suburban/256043883/",
    "https://vidnoye.cian.ru/sale/suburban/275077576/",
    "https://chekhov.cian.ru/sale/suburban/263076818/",
    "https://chekhov.cian.ru/sale/suburban/269353765/",
    "https://odintsovo.cian.ru/sale/suburban/277008844/",
    "https://ruza.cian.ru/sale/suburban/252205298/",
    "https://www.cian.ru/sale/suburban/206743554/",
    "https://istra.cian.ru/sale/suburban/148799258/",
    "https://dmitrov.cian.ru/sale/suburban/269853595/",
    "https://naro-fominsk.cian.ru/sale/suburban/256505810/",
    "https://chekhov.cian.ru/sale/suburban/266242694/",
    "https://www.cian.ru/sale/suburban/238338461/",
    "https://www.cian.ru/sale/suburban/276411983/",
    "https://klin.cian.ru/sale/suburban/271484280/",
    "https://istra.cian.ru/sale/suburban/277062523/",
    "https://dmitrov.cian.ru/sale/suburban/267802048/",
    "https://klin.cian.ru/sale/suburban/232502859/",
    "https://klin.cian.ru/sale/suburban/259405122/",
    "https://domodedovo.cian.ru/sale/suburban/276719756/",
    "https://serpukhov.cian.ru/sale/suburban/278390214/",
    "https://ramenskoye.cian.ru/sale/suburban/269853982/",
    "https://odintsovo.cian.ru/sale/suburban/275375530/",
    "https://ramenskoye.cian.ru/sale/suburban/278178831/",
    "https://domodedovo.cian.ru/sale/suburban/274486944/",
    "https://ramenskoye.cian.ru/sale/suburban/277891862/",
    "https://ramenskoye.cian.ru/sale/suburban/278330467/",
    "https://luhovicy.cian.ru/sale/suburban/275023532/",
    "https://ivanteyevka.cian.ru/sale/suburban/272651730/",
    "https://klin.cian.ru/sale/suburban/243653300/",
    "https://ozery.cian.ru/sale/suburban/276878775/",
    "https://istra.cian.ru/sale/suburban/268142904/",
    "https://www.cian.ru/sale/suburban/242091374/",
    "https://odintsovo.cian.ru/sale/suburban/269018895/",
    "https://istra.cian.ru/sale/suburban/276572241/",
    "https://pavlovsky-posad.cian.ru/sale/suburban/277317246/",
    "https://ramenskoye.cian.ru/sale/suburban/278190909/",
    "https://khimki.cian.ru/sale/suburban/277524569/",
    "https://luhovicy.cian.ru/sale/suburban/275023432/",
    "https://dmitrov.cian.ru/sale/suburban/269646746/",
    "https://www.cian.ru/sale/suburban/274489144/",
    "https://ruza.cian.ru/sale/suburban/274753895/",
    "https://klin.cian.ru/sale/suburban/275895076/",
    "https://www.cian.ru/sale/suburban/275023353/",
    "https://ramenskoye.cian.ru/sale/suburban/278015917/",
    "https://odintsovo.cian.ru/sale/suburban/263076957/",
    "https://chekhov.cian.ru/sale/suburban/273852867/",
    "https://ramenskoye.cian.ru/sale/suburban/273821789/",
    "https://podolsk.cian.ru/sale/suburban/270283579/",
    "https://dmitrov.cian.ru/sale/suburban/269184641/",
    "https://ozery.cian.ru/sale/suburban/278017393/",
    "https://ramenskoye.cian.ru/sale/suburban/271065967/",
    "https://sergiyev-posad.cian.ru/sale/suburban/244047523/",
    "https://www.cian.ru/sale/suburban/260715962/",
    "https://ramenskoye.cian.ru/sale/suburban/272031183/",
    "https://www.cian.ru/sale/suburban/270602874/",
    "https://solnechnogorsk.cian.ru/sale/suburban/278297291/",
    "https://yegoryevsk.cian.ru/sale/suburban/278121638/",
    "https://naro-fominsk.cian.ru/sale/suburban/271301685/",
    "https://dmitrov.cian.ru/sale/suburban/277262797/",
    "https://www.cian.ru/sale/suburban/271702456/",
    "https://korolev.cian.ru/sale/suburban/276105001/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/276189595/",
    "https://taldom.cian.ru/sale/suburban/149162106/",
    "https://www.cian.ru/sale/suburban/263684397/",
    "https://odintsovo.cian.ru/sale/suburban/278253993/",
    "https://odintsovo.cian.ru/sale/suburban/278189699/",
    "https://noginsk.cian.ru/sale/suburban/269879756/",
    "https://www.cian.ru/sale/suburban/277674748/",
    "https://chekhov.cian.ru/sale/suburban/277871098/",
    "https://odintsovo.cian.ru/sale/suburban/266959894/",
    "https://dmitrov.cian.ru/sale/suburban/272995939/",
    "https://www.cian.ru/sale/suburban/278472982/",
    "https://shchyolkovo.cian.ru/sale/suburban/273638947/",
    "https://dmitrov.cian.ru/sale/suburban/269184114/",
    "https://podolsk.cian.ru/sale/suburban/275726567/",
    "https://istra.cian.ru/sale/suburban/275807147/",
    "https://ozery.cian.ru/sale/suburban/278335003/",
    "https://pavlovsky-posad.cian.ru/sale/suburban/274460220/",
    "https://istra.cian.ru/sale/suburban/271208418/",
    "https://www.cian.ru/sale/suburban/275931705/",
    "https://ozery.cian.ru/sale/suburban/273952866/",
    "https://ozery.cian.ru/sale/suburban/273952265/",
    "https://www.cian.ru/sale/suburban/277031955/",
    "https://noginsk.cian.ru/sale/suburban/277986780/",
    "https://serpukhov.cian.ru/sale/suburban/259082377/",
    "https://www.cian.ru/sale/suburban/278478190/",
    "https://odintsovo.cian.ru/sale/suburban/276861623/",
    "https://istra.cian.ru/sale/suburban/272045849/",
    "https://dmitrov.cian.ru/sale/suburban/274947020/",
    "https://www.cian.ru/sale/suburban/209551837/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/274889926/",
    "https://dmitrov.cian.ru/sale/suburban/257388101/",
    "https://dmitrov.cian.ru/sale/suburban/269661707/",
    "https://istra.cian.ru/sale/suburban/277924856/",
    "https://ramenskoye.cian.ru/sale/suburban/275911217/",
    "https://ramenskoye.cian.ru/sale/suburban/275910476/",
    "https://www.cian.ru/sale/suburban/273124429/",
    "https://domodedovo.cian.ru/sale/suburban/274057210/",
    "https://ramenskoye.cian.ru/sale/suburban/270403837/",
    "https://klin.cian.ru/sale/suburban/217398664/",
    "https://ruza.cian.ru/sale/suburban/275107419/",
    "https://www.cian.ru/sale/suburban/272618141/",
    "https://www.cian.ru/sale/suburban/268707003/",
    "https://klin.cian.ru/sale/suburban/278541472/",
    "https://ramenskoye.cian.ru/sale/suburban/277772295/",
    "https://www.cian.ru/sale/suburban/272899700/",
    "https://odintsovo.cian.ru/sale/suburban/275576758/",
    "https://noginsk.cian.ru/sale/suburban/277347900/",
    "https://chekhov.cian.ru/sale/suburban/215161034/",
    "https://www.cian.ru/sale/suburban/275370767/",
    "https://ramenskoye.cian.ru/sale/suburban/277194494/",
    "https://ramenskoye.cian.ru/sale/suburban/276828062/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/277915478/",
    "https://ramenskoye.cian.ru/sale/suburban/270813941/",
    "https://klin.cian.ru/sale/suburban/240445365/",
    "https://chekhov.cian.ru/sale/suburban/278289194/",
    "https://istra.cian.ru/sale/suburban/278529580/",
    "https://odintsovo.cian.ru/sale/suburban/258991889/",
    "https://ruza.cian.ru/sale/suburban/252894428/",
    "https://www.cian.ru/sale/suburban/275889984/",
    "https://noginsk.cian.ru/sale/suburban/276596833/",
    "https://www.cian.ru/sale/suburban/232999265/",
    "https://chekhov.cian.ru/sale/suburban/213602607/",
    "https://ruza.cian.ru/sale/suburban/276608214/",
    "https://www.cian.ru/sale/suburban/270554911/",
    "https://serpukhov.cian.ru/sale/suburban/226259694/",
    "https://istra.cian.ru/sale/suburban/273136750/",
    "https://www.cian.ru/sale/suburban/274619511/",
    "https://kubinka.cian.ru/sale/suburban/274815258/",
    "https://www.cian.ru/sale/suburban/275719809/",
    "https://www.cian.ru/sale/suburban/262003336/",
    "https://odintsovo.cian.ru/sale/suburban/260870708/",
    "https://dmitrov.cian.ru/sale/suburban/278153946/",
    "https://noginsk.cian.ru/sale/suburban/264653411/",
    "https://chekhov.cian.ru/sale/suburban/278365243/",
    "https://istra.cian.ru/sale/suburban/275962022/",
    "https://ivanteyevka.cian.ru/sale/suburban/275352945/",
    "https://krasnogorsk.cian.ru/sale/suburban/277980483/",
    "https://noginsk.cian.ru/sale/suburban/276442820/",
    "https://istra.cian.ru/sale/suburban/275330788/",
    "https://chekhov.cian.ru/sale/suburban/270070333/",
    "https://istra.cian.ru/sale/suburban/277678070/",
    "https://solnechnogorsk.cian.ru/sale/suburban/277676750/",
    "https://naro-fominsk.cian.ru/sale/suburban/274750297/",
    "https://www.cian.ru/sale/suburban/193333403/",
    "https://balashikha.cian.ru/sale/suburban/274394761/",
    "https://ramenskoye.cian.ru/sale/suburban/276163414/",
    "https://ramenskoye.cian.ru/sale/suburban/177417918/",
    "https://ramenskoye.cian.ru/sale/suburban/276374525/",
    "https://www.cian.ru/sale/suburban/275130223/",
    "https://odintsovo.cian.ru/sale/suburban/241622262/",
    "https://dmitrov.cian.ru/sale/suburban/272678136/",
    "https://ramenskoye.cian.ru/sale/suburban/278099550/",
    "https://ruza.cian.ru/sale/suburban/277770541/",
    "https://dmitrov.cian.ru/sale/suburban/278067102/",
    "https://ramenskoye.cian.ru/sale/suburban/273098836/",
    "https://odintsovo.cian.ru/sale/suburban/278363785/",
    "https://serpukhov.cian.ru/sale/suburban/269355047/",
    "https://solnechnogorsk.cian.ru/sale/suburban/266642610/",
    "https://chekhov.cian.ru/sale/suburban/266074950/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/276348783/",
    "https://ramenskoye.cian.ru/sale/suburban/273511545/",
    "https://zaraysk.cian.ru/sale/suburban/166075880/",
    "https://www.cian.ru/sale/suburban/269531292/",
    "https://www.cian.ru/sale/suburban/245184433/",
    "https://noginsk.cian.ru/sale/suburban/241654971/",
    "https://www.cian.ru/sale/suburban/265381480/",
    "https://www.cian.ru/sale/suburban/263524607/",
    "https://www.cian.ru/sale/suburban/272923680/",
    "https://ozery.cian.ru/sale/suburban/254685251/",
    "https://www.cian.ru/sale/suburban/277089722/",
    "https://www.cian.ru/sale/suburban/273067397/",
    "https://ozery.cian.ru/sale/suburban/277112491/",
    "https://pavlovsky-posad.cian.ru/sale/suburban/277575695/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/247586211/",
    "https://klin.cian.ru/sale/suburban/275268433/",
    "https://ramenskoye.cian.ru/sale/suburban/239323781/",
    "https://www.cian.ru/sale/suburban/260755274/",
    "https://www.cian.ru/sale/suburban/256083345/",
    "https://www.cian.ru/sale/suburban/277360875/",
    "https://naro-fominsk.cian.ru/sale/suburban/277772649/",
    "https://noginsk.cian.ru/sale/suburban/276831306/",
    "https://yegoryevsk.cian.ru/sale/suburban/266571039/",
    "https://noginsk.cian.ru/sale/suburban/277025377/",
    "https://www.cian.ru/sale/suburban/275016470/",
    "https://ramenskoye.cian.ru/sale/suburban/250085349/",
    "https://khotkovo.cian.ru/sale/suburban/277868555/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/277337352/",
    "https://chekhov.cian.ru/sale/suburban/273647169/",
    "https://www.cian.ru/sale/suburban/272413153/",
    "https://ramenskoye.cian.ru/sale/suburban/254679373/",
    "https://elektrogorsk.cian.ru/sale/suburban/276098273/",
    "https://ruza.cian.ru/sale/suburban/245784312/",
    "https://ramenskoye.cian.ru/sale/suburban/266464473/",
    "https://chekhov.cian.ru/sale/suburban/274995366/",
    "https://klin.cian.ru/sale/suburban/270839107/",
    "https://ramenskoye.cian.ru/sale/suburban/275096875/",
    "https://www.cian.ru/sale/suburban/226418152/",
    "https://solnechnogorsk.cian.ru/sale/suburban/245700779/",
    "https://www.cian.ru/sale/suburban/268858456/",
    "https://chekhov.cian.ru/sale/suburban/254227127/",
    "https://ruza.cian.ru/sale/suburban/272092326/",
    "https://chekhov.cian.ru/sale/suburban/265949938/",
    "https://chekhov.cian.ru/sale/suburban/275479422/",
    "https://www.cian.ru/sale/suburban/271935177/",
    "https://solnechnogorsk.cian.ru/sale/suburban/274026244/",
    "https://sergiyev-posad.cian.ru/sale/suburban/259824976/",
    "https://noginsk.cian.ru/sale/suburban/278401048/",
    "https://ramenskoye.cian.ru/sale/suburban/227532272/",
    "https://ivanteyevka.cian.ru/sale/suburban/220023842/",
    "https://dmitrov.cian.ru/sale/suburban/276239044/",
    "https://www.cian.ru/sale/suburban/276626544/",
    "https://dmitrov.cian.ru/sale/suburban/225408881/",
    "https://ramenskoye.cian.ru/sale/suburban/273664210/",
    "https://www.cian.ru/sale/suburban/244195802/",
    "https://www.cian.ru/sale/suburban/274670073/",
    "https://serpukhov.cian.ru/sale/suburban/231841098/",
    "https://klin.cian.ru/sale/suburban/263857755/",
    "https://chekhov.cian.ru/sale/suburban/256078112/",
    "https://noginsk.cian.ru/sale/suburban/277606123/",
    "https://solnechnogorsk.cian.ru/sale/suburban/241503204/",
    "https://ramenskoye.cian.ru/sale/suburban/265704021/",
    "https://ramenskoye.cian.ru/sale/suburban/275230109/",
    "https://solnechnogorsk.cian.ru/sale/suburban/276851566/",
    "https://orekhovo-zuyevo.cian.ru/sale/suburban/268101654/",
    "https://dmitrov.cian.ru/sale/suburban/190664064/",
    "https://ramenskoye.cian.ru/sale/suburban/273328774/",
    "https://ozery.cian.ru/sale/suburban/264578289/",
    "https://solnechnogorsk.cian.ru/sale/suburban/276855446/",
    "https://www.cian.ru/sale/suburban/209582257/",
    "https://luhovicy.cian.ru/sale/suburban/273399976/",
    "https://chernogolovka.cian.ru/sale/suburban/225414267/",
    "https://dmitrov.cian.ru/sale/suburban/273602777/",
    "https://dmitrov.cian.ru/sale/suburban/274773718/",
    "https://ozery.cian.ru/sale/suburban/240802321/",
    "https://solnechnogorsk.cian.ru/sale/suburban/276827259/",
    "https://www.cian.ru/sale/suburban/268025305/",
    "https://ozery.cian.ru/sale/suburban/274362509/",
    "https://ozery.cian.ru/sale/suburban/274669952/",
    "https://elektrougli.cian.ru/sale/suburban/274042960/",
    "https://www.cian.ru/sale/suburban/276146259/",
    "https://losino-petrovskiy.cian.ru/sale/suburban/275967339/",
    "https://noginsk.cian.ru/sale/suburban/214679436/",
    "https://serpukhov.cian.ru/sale/suburban/262476301/",
    "https://ramenskoye.cian.ru/sale/suburban/275994992/",
    "https://serpukhov.cian.ru/sale/suburban/261278256/",
    "https://chekhov.cian.ru/sale/suburban/273275340/",
    "https://dmitrov.cian.ru/sale/suburban/228201531/",
    "https://serpukhov.cian.ru/sale/suburban/274062232/",
    "https://dmitrov.cian.ru/sale/suburban/222424735/",
    "https://serpukhov.cian.ru/sale/suburban/275081024/",
    "https://chekhov.cian.ru/sale/suburban/205820714/",
    "https://chekhov.cian.ru/sale/suburban/274830907/",
    "https://www.cian.ru/sale/suburban/277888978/",
    "https://ramenskoye.cian.ru/sale/suburban/270912138/",
    "https://noginsk.cian.ru/sale/suburban/241443936/",
    "https://serpukhov.cian.ru/sale/suburban/236069622/",
    "https://noginsk.cian.ru/sale/suburban/278086445/",
    "https://ramenskoye.cian.ru/sale/suburban/272822865/",
    "https://www.cian.ru/sale/suburban/274595432/",
    "https://www.cian.ru/sale/suburban/265299657/",
    "https://klin.cian.ru/sale/suburban/250441380/",
    "https://ramenskoye.cian.ru/sale/suburban/270160730/",
    "https://ozery.cian.ru/sale/suburban/278152359/",
    "https://chekhov.cian.ru/sale/suburban/277582551/",
    "https://www.cian.ru/sale/suburban/278127625/",
    "https://www.cian.ru/sale/suburban/269501902/"
]

describe('grab all urls', () => {

    it('displays two todo items by default', () => {
        cy.wrap(allLinks).each((link) => {
            cy.wait(3000)
            cy.writeFile('out/cian-prices.txt', link + '\n', {flag: 'a+'})
            cy.clearCookies()
            cy.clearLocalStorage()
            cy.visit(link, {
                headers: {
                    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36',
                }
            });
            cy.wait(2000)

            cy.get('[data-name=CardSection]').scrollIntoView();

            cy.get('[data-name="OfferAdded"]').then(el => {
                cy.writeFile('out/cian-prices.txt', 'updated ' + el.text() + '\n', {flag: 'a+'})
            })
            cy.get('[data-name="OfferStats"]').then(el => {
                cy.writeFile('out/cian-prices.txt', 'stats ' + el.text() + '\n', {flag: 'a+'})
            })

            cy.writeFile('out/cian-prices.txt', 'changes ' + '\n', {flag: 'a+'})
            cy.get('[data-name="PriceHistory"]').trigger('mouseover');
            cy.get('[data-name="PriceHistory"] td').each(td => {
                cy.writeFile('out/cian-prices.txt', td.text() + '\n', {flag: 'a+'})
            })
            cy.wait(3000)

            cy.writeFile('out/cian-prices.txt', '\n', {flag: 'a+'})
        });
    })

});
