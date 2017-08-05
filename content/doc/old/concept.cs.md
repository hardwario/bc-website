# Koncept

Tady jsme setřídili naše myšlenky, které nás inspirovaly při vývoji systému BigClown, a také ti zde popisujeme jednotlivé prvky našeho řešení tak, aby jsi lépe pochopil náš záměr a mohl si rychleji začít stavět svou domácí automatizaci.

## O co nám jde?

Víme, že jednotkou života není sekunda, ale zážitek.
Smysluplné prožití života by podle nás mělo být cílem každého rozumného člověka.
No a my se snažíme pomáhat dosáhnout tohoto cíle všem těm, kteří nechtějí trávit svůj volný čas sledováním nekonečných seriálů nebo nadáváním na politiky.
**Soustředíme se na ty z vás, kteří si chtějí hrát s elektronikou, programovat a učit se nové technologie.**
A aby ti to dávalo nějaký smysl a zároveň tě to bavilo, tak výsledkem naší spolupráce bude tvá originální a funkční domácí automatizace.
A kdo z ostatních to má? :-)

## Naše výjimečnost

V každé přiručce supermanažera jsme se dočetli, že abychom byli úspěšní, tak musíme být unikátní a nejlépe, aby na celém světě nebyl nikdo stejný...
My jsme se soustředili hlavně na vývoj a výrobu, ale tady je náš mix vlastností, který nás dělá světově unikátním :-)

1. **Jsme open-source**, protože chceš do svého systému vidět a mít volnost ho propojit s čímkoliv co si umaneš
2. **Děláme spolehlivou elektroniku** s 10letou zárukou, protože se nechceš trápit nekvalitou
3. **Na bezpečnost a spotřebu jsme mysleli už při návrhu**, protože nechceš aby ti soused reguloval topení a nechceš měnit baterky každý týden
4. K sestavení naší elektroniky **nepotřebuješ pájku**, protože svůj čas chceš věnovat vymýšlením originálních funkcí
5. **Ukazujeme inspirativní projekty**, protože není nic lepšího, než když vylepšíš projekt někoho jiného
6. **Jsme BigClown**, protože kdyby někdo měl těch 5 výše uvedených vlastností, tak nás alespoň odliší tento název :-)

## Naše prvky

### Core Module

#### Pro koho je Core modul zajímavý

Následující popis bude zajímavý zejména pro ty z vás, kteří si chtějí psát vlastní firmware.
Pro ostatní je důležité vědět, že **Core Module je nezbytným prvkem všech našich jednotek a že po zacvaknutí do sestavy funguje bez nutnosti cokoliv dělat...**

#### Ideový základ Core modulu

Domácí automatizace stavěná svépomocí musí být modulární se společným jmenovatelem pro všechny prvky - těmi máme na mysli různé senzory, aktory, zobrazovače apod.
Při návrhu jsme věděli o existenci rozhraní Arduino (shield), ale nevyhovovalo nám ani mechanicky, ani rozměrově.
Navíc neumožňuje inteligentní přepínání vstupního zdroje napětí.
My jsme chtěli něco víc kompaktního, něco, co má na sobě ARM procesor, rádio na 868 MHz a standardizovaný konektor pro připojování.
**Tak se zrodila myšlenka Core Module, který je přesně na míru ušitý potřebám modulárního prvku domácí automatizace.**

#### Osazení Core modulu

**Core Module je špičkově vybaven a je schopen zvládnout téměř všechny potřeby kladené na domácí automatizaci.**
Je osazen výkonným ARM mikrokontrolérem Cortex M0+, rádiovým čipem SIPIRIT 1 komunikujícím v pásmu 868 MHz, najdeš na něm také teplotní senzor, akcelerometr, kryptočip, USBčko, standardní debuggovací konektor, LEDku a tlačítko.
Prostě obrázek mluví za vše... ;-)

![](images/core-module/core-module.png)

#### Firmware Core modulu

Tím jak jsme kolem Core Module stavěli další hardwarové prvky, tak nám bylo jasné, že pouhá HW modularita nestačí a to, co na trhu v nepřeberné změti převážně čínských modulů chybí, je **dobře navržené a unifikované deklarativní API pro efektivní vývoj firmware.**
Protože trendem poslední doby je dělat event-driven single-threaded aplikace (viz Node.js), tak jsme se tímto nechali inspirovat a základní myšlenku jsme přenesli do embedded API pro náš Core Module, které je v "C".
**Věříme tomu, že právě čisté "C" je efektivní prostředí pro spolehlivé bateriové aplikace.**

### Jednotky

Jednotkou se u nás rozumí sestava modulů, která komunikuje do systému.
Například si můžete poskládat jednotku s funkcí meteostanice, pohybového detektoru, relé, displeje apod.
Až na pár výjimek je nezbytnou součástí každé jednotky tzv. Core Module, který dává jednotce logiku, zabezpečuje komunikaci a jsou v něm bezpečně uloženy bezpečnostní klíče.
Bezdrátové jednotky komunikují v síti typu hvězda do centrální jednotky, kterou nazýváme [Gateway](#gateway).
Počet bezdrátových jednotek komunikujících na jednu Gateway je omezen na 64.

Každou jednotku si můžeš poskládat z modulů a tagů.

#### Moduly

Moduly jsou prvky jednotek, jejichž komponenty nebylo možné osadit na formát Tagu (viz níže).
Jejich desky plošných spojů jsou vždy osazeny 14pinovými konektory pro vzájemné propojení a uprostřed mají 4 montážní otvory s horizontální roztečí 2.54 mm a vertikální 4.75 mm.

#### Tagy

Tagy jsou prvky jednotek o velikosti 16 x 16 mm a jsou většinou osazeny právě jedním funkčním prvkem, např. sensorem.
K jednotce je připojíš skrze 5pinovou lištu s kolíky.

### Propojování modulů a tagů

Ke vzájemnému propojování modulů a tagů jsme pro tebe připravili systém konektorů.
U modulů jde na jedné straně o dvě 14pinové dutinkové lišty a na druhé straně o dvě 14pinové lišty s kolíčky.
Aby se zamezilo nesprávnému zapojení, tak na pravých lištách je na šesté pozici odspodu zaslepena jedna dutinka a vynechán jeden kolík.
U tagů jde o 5pinovou lištu s kolíky, které se zasunují do zespodu počítaných prvních pěti dutinek pravé lišty 14pinového konektoru, nebo do samostatných 5pinových dutinkových lišt, které můžete najít na většině našich modulů.
U tagů není ošetřeno nesprávné zasunutí, dej si tedy pozor a tagy zasunuj tak, aby kolíky byly vždy blíže středu modulu než zbytek tagu.

### Senzory

Senzor je zařízení, které detekuje a reaguje na nějaký typ vstupu z fyzického prostředí.
Jde například o pohyb, teplo, světlo, vlhkost ad.
V našem systému jsou senzory většinou ve formátu tagu, výjimkou je například CO2 senzor, jehož komponenty se na tag fyzicky nevejdou.
**Naší snahou je nadále rozšiřovat rodinu senzorů o nové typy tak, aby pokryly většinu vstupů z tvého okolí.**

### Aktory

Aktory jsou zařízení měnící energii v řízený pohyb.
Hlavním představitelem této skupiny jsou relé.
V našem systému máme Relay Module, který ti umožní spínat malé spotřebiče (lampičku, větráček, ...) a Power Module s vysokoproudovým relé, kterým můžeš ovládat i něco většího (230 V AC/16A).

## Gateway

Centrálním prvkem naší bezdrátové sítě je Gateway, na kterou komunikují všechny bezdrátové jednotky.
Gateway je dále spojena přes USB s tzv. Hubem.
V současnosti plní roli Gateway Core Module, v budoucnu najdeš v našem portfoliu samostatnou položku, která kromě komunikace bude plnit roli bezpečného učení bezdrátových jednotek do systému.

## Hub

V našem pojetí jde o softwarový balíček, který si můžeš nainstalovat na jakékoliv zařízení s Linuxem.
Hojně se jako hostitel využívá Raspberry PI, ale prakticky si můžeš náš Hub nainstalovat kdekoliv se ti zlíbí.

Softwarový balíček obsahuje:
* Gateway - MQTT klient, software který obsluhuje sériový port  a zabezpečuje komunikaci mezi gateway a MQTT
* MQTT broker Mosquito, který řídí zprávy v našem systému

## Komunikace

### Komunikace uvnitř tvého objektu

#### I2C

I2C protokol používáme pro komunikaci mezi prvky jednotky (moduly a tagy). Více se dočteš [tady](doplnit link).

#### MQTT

MQTT je jednoduchý a nenáročný protokol pro předávání zpráv mezi klienty prostřednictvím centrálního bodu - brokeru.
Díky této nenáročnosti a jednoduchosti je snadno implementovatelný i do zařízení s “malými” procesory a poměrně rychle se rozšířil.
Dnes je OASIS standardem a pro všechna tato pozitiva jsme si ho vybrali do našeho systému.
Více o tomto protokolu a jeho implementaci v systému BigClown si přečti například [na Wikipedii](https://en.wikipedia.org/wiki/MQTT).

#### 868 MHz

Tak tady to byl největší otazník - jakou technologii použít pro přenos dat mezi jednotkami v rámci domu?
Rozebrali jsme všechny standardy - ZigBee, Z-Wave, WiFi, Bluetooth, 6LowPAN, Thread.
S většinou týmů jsme se i setkali.
A nakonec jsme zvolili řešení, které se opírá o fyzikální zákony a naše zkušenosti z Jablotronu.
**Navrhli jsme vlastní otevřený protokol postavený na MQTT, ale upravený pro efektivnější přenosy s cílem šetřit energii.
A komunikujeme v pásmu 868 MHz, což ti zajistí pokrytí standardního domu s jednou gateway.**

### Komunikace do světa a zpět

No a jak dostaneš informace z tvé automatizace do světa a jak ji můžeš vzdáleně ovládat?
Tady musíme zdůraznit, že náš systém domácí automatizace nemusí být vůbec spojen s okolním světem a může fungovat nezávisle na internetu.
Ale možností propojení BigClowna s okolním světem je několik a vždy máš nad systémem absolutní kontrolu.

#### LAN

Nejjednodušším způsobem je připojit hostitele (např. Raspberry Pi) k vaší lokální síti (LAN) a skrze ní propojit automatizaci s internetem.

#### Narrow Band sítě

Pracujeme na modulech pro narrow band sítě, např. SigFox, LoRaWAN a Narrow Band IoT.
Tyto moduly jsou součástí jednotek, a tak můžeš obejít Hub a posílat data a ovládat jednotky napřímo.

## Bezpečnost

Jsme moc rádi, že členem našeho týmu je Michal, který je odborníkem na IT bezpečnost a je autorem návrhu zabezpečení systému BigClown.
**Důležitou informací pro tebe je, že jsme již v návrhu systému na bezpečnost mysleli.**
Náš Core Module proto obsahuje speciální kryptočip a komunikační protokol počítá s šifrováním a autentizací.
Ve finálním stavu bude vše připraveno tak, aby jsi bezpečnost vlastně neřešil a věděl, že bezpečněji to snad už ani nejde.

## Programování chování tvé automatizace

Domácí automatizace není jen o železe, ale také o programech řešících závislosti a návaznosti.
Určitě budeš chtít řešit situace, kdy na základě jedné informace a ve spojení s jinou by mělo dojít ke změně stavu něčeho.
Třeba že pokles teploty v místnosti když je zároveň venku světlo, zapne systém topení.
Tyto úkoly budeš řešit pomocí skriptů psaných v Pythonu nebo Node.js.
Pro zjednodušení jsme připravili vzorové skripty, které si budeš moci libovolně upravit.
Nebo využiješ některý z již hotových skriptů napsaných jinými uživateli.

Pokud nebudeš chtít psát program, pak se nabízí bezvadná aplikace [Node-RED](https://nodered.org/).
Je to grafický nástroj pro datové propojení prvků domácí automatizace a jiných zařízení.
S Node-RED hravě propojíš informaci o počasí ve tvém regionu s tvým LED páskem nebo účtem na Twitteru.

## Cloud a aplikace

Říkáš si "fajn, funguje to automaticky, ale mě by se líbila nějaká appka...".
**My se nepouštíme do vývoje vlastního cloudu a aplikace, ale snažíme se doporučovat nejlepší platformy na trhu.**
Zatím se nám nejvíce líbí [Blynk](http://www.blynk.cc), a proto u nás najdeš připravený skript a návod zprovoznění.
Dokážeme taky propojit BigClown s Microsoft Azure/Power BI nebo s AWS.
**Ale pokud najdeš něco, co se ti bude líbit více, tak nám [napiš](mailto: projects@bigclown.com) a my se na to koukneme.**

## Krabičky

Naše krásné modulky můžou existovat i bez krabiček, ale chápeme, že můžeš mít jiný vkus :-)
Proto jsou pro tebe v našem obchodě připraveny [modely STL pro 3D tisk ke stažení](https://obchod.bigclown.cz/collections/krabicky).
A pracujeme na konfigurátoru, který ti v budoucnu pomůže lépe a rychleji upravovat velikost i vzhled krabiček.






























