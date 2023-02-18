import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useNavbarCb, useleft_alignCb, usecontentsCb, useFlex13Cb, useFlex19Cb, useFlex20Cb, useFlex21Cb, useFlex22Cb, useFlex399Cb, uselogoCb, useright_alignCb, usebutton2Cb, usebutton1Cb, useStartCb, useFlex29Cb, useFlex38Cb, useFlex35Cb, useFlex36Cb, useFlex37Cb, useFlex39Cb, useFlex31Cb, useOrder_from_fav_appsCb, useFlex43Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useFlex48Cb, useFlex49Cb, useFlex55Cb, useBrowse_menuCb, useFlex56Cb, useFlex59Cb, useFlex60Cb, useFlex65Cb, useFlex72Cb, useFlex73Cb, useFlex74Cb, useFlex75Cb, useFlex80Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex79Cb, useFlex85Cb, useFlex81Cb, useFlex82Cb, useFlex83Cb, useFlex84Cb, useFlex90Cb, useFlex86Cb, useFlex87Cb, useFlex88Cb, useFlex89Cb, useFlex61Cb, useFlex62Cb, useFlex64Cb, useAbout_usCb, useFlex92Cb, useFlex129Cb, useFlex140Cb, useFlex136Cb, useFlex137Cb, useFlex130Cb, useFlex131Cb, useFlex138Cb, useFlex132Cb, useFlex133Cb, useFlex139Cb, useFlex134Cb, useFlex135Cb, useFlex95Cb, useFlex96Cb, useFlex97Cb, useFlex99Cb, useFlex100Cb, useFlex98Cb, useFlex101Cb, useFlex102Cb, useBrowse_our_menuCb, useFlex144Cb, useFlex145Cb, useFlex146Cb, useFlex400Cb, useFlex402Cb, useFlex410Cb, useFlex411Cb, useFlex412Cb, useFlex413Cb, useFlex403Cb, useFlex465Cb, useFlex462Cb, useFlex463Cb, useFlex464Cb, useFlex461Cb, useFlex404Cb, useFlex470Cb, useFlex467Cb, useFlex468Cb, useFlex469Cb, useFlex466Cb, useFlex405Cb, useFlex475Cb, useFlex472Cb, useFlex473Cb, useFlex474Cb, useFlex471Cb, useFlex401Cb, useFlex406Cb, useFlex480Cb, useFlex477Cb, useFlex478Cb, useFlex479Cb, useFlex476Cb, useFlex407Cb, useFlex485Cb, useFlex482Cb, useFlex483Cb, useFlex484Cb, useFlex481Cb, useFlex408Cb, useFlex490Cb, useFlex487Cb, useFlex488Cb, useFlex489Cb, useFlex486Cb, useFlex409Cb, useFlex495Cb, useFlex492Cb, useFlex493Cb, useFlex494Cb, useFlex491Cb, useFlex148Cb, useFlex149Cb, useFlex150Cb, useMost_delicious_burgerCb, useFlex153Cb, useFlex156Cb, useFlex155Cb, useFlex157Cb, useFlex158Cb, useFlex159Cb, useFlex154Cb, useWhat_our_clients_sayCb, useFlex161Cb, useFlex162Cb, useFlex163Cb, useFlex164Cb, useFlex168Cb, useFlex169Cb, useFlex171Cb, useFlex172Cb, useFlex173Cb, useFlex174Cb, useFlex175Cb, useFlex176Cb, useFlex178Cb, useFlex179Cb, useFlex170Cb, useFlex165Cb, useFlex166Cb, useFlex167Cb, useOur_articlesCb, useFlex181Cb, useFlex183Cb, useFlex184Cb, useFlex182Cb, useFlex185Cb, useFlex187Cb, useFlex188Cb, useFlex189Cb, useFlex190Cb, useFlex191Cb, useFlex186Cb, useFlex194Cb, useFlex196Cb, useFlex241Cb, useFlex239Cb, useFlex237Cb, useFlex238Cb, useFlex240Cb, useFlex197Cb, useFlex252Cb, useFlex250Cb, useFlex251Cb, useFlex248Cb, useFlex249Cb, useFlex195Cb, useFlex198Cb, useFlex257Cb, useFlex255Cb, useFlex256Cb, useFlex253Cb, useFlex254Cb, useFlex199Cb, useFlex262Cb, useFlex260Cb, useFlex261Cb, useFlex258Cb, useFlex259Cb, useBook_your_table_nowCb, useFlex264Cb, useFlex287Cb, useFlex283Cb, useFlex277Cb, useFlex278Cb, useFlex284Cb, useFlex279Cb, useFlex280Cb, useFlex285Cb, useFlex281Cb, useFlex282Cb, useFlex286Cb, useFlex288Cb, useFlex265Cb, useFlex289Cb, useFlex291Cb, useFlex295Cb, useFlex306Cb, useFlex307Cb, useFlex296Cb, useFlex308Cb, useFlex309Cb, useFlex310Cb, useFlex311Cb, useFlex304Cb, useFlex332Cb, useFlex330Cb, useFlex331Cb, useFlex320Cb, useFlex318Cb, useFlex314Cb, useFlex315Cb, useFlex313Cb, useFlex312Cb, useFlex319Cb, useFlex316Cb, useFlex317Cb, useFlex329Cb, useFlex327Cb, useFlex323Cb, useFlex324Cb, useFlex322Cb, useFlex321Cb, useFlex328Cb, useFlex325Cb, useFlex326Cb, useFollow_us_on_InstagramCb, useFlex334Cb, useFlex336Cb, useFlex337Cb, useFlex335Cb, useFlex338Cb, useFlex339Cb, useFlex340Cb, useFlex343Cb, useFlex345Cb, useFlex346Cb, useFlex344Cb, useFlex347Cb, useFlex348Cb, useEndCb, useFlex350Cb, useFlex353Cb, useFlex354Cb, useFlex355Cb, useFlex365Cb, useFlex366Cb, useFlex351Cb, useFlex367Cb, useFlex369Cb, useFlex370Cb, useFlex368Cb, useFlex382Cb, useFlex384Cb, useFlex385Cb, useFlex386Cb, useFlex387Cb, useFlex388Cb, useFlex389Cb, useFlex390Cb, useFlex383Cb, useFlex391Cb, useFlex392Cb, useFlex393Cb, useFlex394Cb, useFlex395Cb, useFlex396Cb, useFlex397Cb, useFlex352Cb, useFlex356Cb, useFlex357Cb, useFlex364Cb, useFlex362Cb, useFlex358Cb, useFlex359Cb, useFlex363Cb, useFlex360Cb, useFlex361Cb, useTextBox8Cb, useTextBox7Cb, useTextBox9Cb, useTextBox10Cb, useTextBox11Cb, usetitleCb, useImage2Cb, useButton2Cb, useButton1Cb, useFlex30Cb, useTextBox13Cb, useButton8Cb, useButton9Cb, useTextBox12Cb, useTextBox14Cb, useImage9Cb, useTextBox15Cb, useTextBox17Cb, useTextBox18Cb, useTextBox19Cb, useTextBox16Cb, useImage10Cb, useTextBox20Cb, useImage11Cb, useTextBox21Cb, useTextBox25Cb, useButton14Cb, useButton15Cb, useTextBox26Cb, useTextBox22Cb, useImage12Cb, useButton16Cb, useTextBox27Cb, useTextBox23Cb, useImage13Cb, useButton17Cb, useTextBox28Cb, useTextBox24Cb, useImage14Cb, useButton11Cb, useButton12Cb, useImage16Cb, useTextBox44Cb, useImage23Cb, useTextBox41Cb, useImage24Cb, useTextBox42Cb, useImage25Cb, useTextBox43Cb, useTextBox29Cb, useTextBox30Cb, useTextBox31Cb, useButton19Cb, useButton18Cb, useTextBox46Cb, useTextBox47Cb, useImage67Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox160Cb, useTextBox161Cb, useImage77Cb, useTextBox159Cb, useTextBox163Cb, useTextBox164Cb, useImage78Cb, useTextBox162Cb, useTextBox166Cb, useTextBox167Cb, useImage79Cb, useTextBox165Cb, useTextBox169Cb, useTextBox170Cb, useImage80Cb, useTextBox168Cb, useTextBox172Cb, useTextBox173Cb, useImage81Cb, useTextBox171Cb, useTextBox175Cb, useTextBox176Cb, useImage82Cb, useTextBox174Cb, useTextBox178Cb, useTextBox179Cb, useImage83Cb, useTextBox177Cb, useButton20Cb, useButton21Cb, useButton23Cb, useButton22Cb, useTextBox48Cb, useTextBox49Cb, useImage27Cb, useTextBox50Cb, useTextBox51Cb, useTextBox52Cb, useImage28Cb, useImage30Cb, useTextBox53Cb, useTextBox54Cb, useImage31Cb, useTextBox55Cb, useTextBox56Cb, useImage29Cb, useButton24Cb, useButton25Cb, useTextBox57Cb, useButton26Cb, useImage32Cb, useTextBox58Cb, useTextBox59Cb, useTextBox60Cb, useTextBox80Cb, useTextBox81Cb, useImage39Cb, useImage41Cb, useTextBox85Cb, useTextBox86Cb, useImage42Cb, useTextBox87Cb, useTextBox88Cb, useImage43Cb, useTextBox89Cb, useTextBox90Cb, useTextBox95Cb, useImage47Cb, useTextBox96Cb, useImage48Cb, useTextBox97Cb, useImage49Cb, useTextBox98Cb, useTextBox99Cb, useTextBox100Cb, useInput1Cb, useTextBox101Cb, useInput2Cb, useButton29Cb, useTextBox107Cb, useInput7Cb, useInput3Cb, useTextBox103Cb, useInput4Cb, useTextBox104Cb, useInput5Cb, useTextBox105Cb, useInput6Cb, useTextBox106Cb, useTextBox108Cb, useButton31Cb, useImage50Cb, useImage56Cb, useImage57Cb, useImage58Cb, useImage59Cb, useImage60Cb, useTextBox110Cb, useImage65Cb, useImage66Cb, useTextBox111Cb, useTextBox112Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useTextBox117Cb, useTextBox118Cb, useTextBox119Cb, useTextBox127Cb, useTextBox121Cb, useTextBox122Cb, useTextBox123Cb, useTextBox124Cb, useTextBox125Cb, useTextBox126Cb, useTextBox128Cb, useTextBox109Cb, useImage61Cb, useImage62Cb, useImage63Cb, useImage64Cb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const NavbarProps = useStore((state)=>state["Home"]["Navbar"]);
const NavbarIoProps = useIoStore((state)=>state["Home"]["Navbar"]);
const NavbarCb = useNavbarCb()
const left_alignProps = useStore((state)=>state["Home"]["left_align"]);
const left_alignIoProps = useIoStore((state)=>state["Home"]["left_align"]);
const left_alignCb = useleft_alignCb()
const contentsProps = useStore((state)=>state["Home"]["contents"]);
const contentsIoProps = useIoStore((state)=>state["Home"]["contents"]);
const contentsCb = usecontentsCb()
const Flex13Props = useStore((state)=>state["Home"]["Flex13"]);
const Flex13IoProps = useIoStore((state)=>state["Home"]["Flex13"]);
const Flex13Cb = useFlex13Cb()
const Flex19Props = useStore((state)=>state["Home"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Home"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex20Props = useStore((state)=>state["Home"]["Flex20"]);
const Flex20IoProps = useIoStore((state)=>state["Home"]["Flex20"]);
const Flex20Cb = useFlex20Cb()
const Flex21Props = useStore((state)=>state["Home"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Home"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Home"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Home"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex399Props = useStore((state)=>state["Home"]["Flex399"]);
const Flex399IoProps = useIoStore((state)=>state["Home"]["Flex399"]);
const Flex399Cb = useFlex399Cb()
const logoProps = useStore((state)=>state["Home"]["logo"]);
const logoIoProps = useIoStore((state)=>state["Home"]["logo"]);
const logoCb = uselogoCb()
const right_alignProps = useStore((state)=>state["Home"]["right_align"]);
const right_alignIoProps = useIoStore((state)=>state["Home"]["right_align"]);
const right_alignCb = useright_alignCb()
const button2Props = useStore((state)=>state["Home"]["button2"]);
const button2IoProps = useIoStore((state)=>state["Home"]["button2"]);
const button2Cb = usebutton2Cb()
const button1Props = useStore((state)=>state["Home"]["button1"]);
const button1IoProps = useIoStore((state)=>state["Home"]["button1"]);
const button1Cb = usebutton1Cb()
const StartProps = useStore((state)=>state["Home"]["Start"]);
const StartIoProps = useIoStore((state)=>state["Home"]["Start"]);
const StartCb = useStartCb()
const Flex29Props = useStore((state)=>state["Home"]["Flex29"]);
const Flex29IoProps = useIoStore((state)=>state["Home"]["Flex29"]);
const Flex29Cb = useFlex29Cb()
const Flex38Props = useStore((state)=>state["Home"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["Home"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex35Props = useStore((state)=>state["Home"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Home"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Home"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Home"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex37Props = useStore((state)=>state["Home"]["Flex37"]);
const Flex37IoProps = useIoStore((state)=>state["Home"]["Flex37"]);
const Flex37Cb = useFlex37Cb()
const Flex39Props = useStore((state)=>state["Home"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["Home"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex31Props = useStore((state)=>state["Home"]["Flex31"]);
const Flex31IoProps = useIoStore((state)=>state["Home"]["Flex31"]);
const Flex31Cb = useFlex31Cb()
const Order_from_fav_appsProps = useStore((state)=>state["Home"]["Order_from_fav_apps"]);
const Order_from_fav_appsIoProps = useIoStore((state)=>state["Home"]["Order_from_fav_apps"]);
const Order_from_fav_appsCb = useOrder_from_fav_appsCb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Home"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Home"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Home"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Home"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["Home"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Home"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Home"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Home"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex55Props = useStore((state)=>state["Home"]["Flex55"]);
const Flex55IoProps = useIoStore((state)=>state["Home"]["Flex55"]);
const Flex55Cb = useFlex55Cb()
const Browse_menuProps = useStore((state)=>state["Home"]["Browse_menu"]);
const Browse_menuIoProps = useIoStore((state)=>state["Home"]["Browse_menu"]);
const Browse_menuCb = useBrowse_menuCb()
const Flex56Props = useStore((state)=>state["Home"]["Flex56"]);
const Flex56IoProps = useIoStore((state)=>state["Home"]["Flex56"]);
const Flex56Cb = useFlex56Cb()
const Flex59Props = useStore((state)=>state["Home"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Home"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Home"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Home"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex65Props = useStore((state)=>state["Home"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Home"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex72Props = useStore((state)=>state["Home"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["Home"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex73Props = useStore((state)=>state["Home"]["Flex73"]);
const Flex73IoProps = useIoStore((state)=>state["Home"]["Flex73"]);
const Flex73Cb = useFlex73Cb()
const Flex74Props = useStore((state)=>state["Home"]["Flex74"]);
const Flex74IoProps = useIoStore((state)=>state["Home"]["Flex74"]);
const Flex74Cb = useFlex74Cb()
const Flex75Props = useStore((state)=>state["Home"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["Home"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const Flex80Props = useStore((state)=>state["Home"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Home"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex76Props = useStore((state)=>state["Home"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Home"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Home"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Home"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Home"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Home"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex79Props = useStore((state)=>state["Home"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Home"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex85Props = useStore((state)=>state["Home"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Home"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex81Props = useStore((state)=>state["Home"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Home"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex82Props = useStore((state)=>state["Home"]["Flex82"]);
const Flex82IoProps = useIoStore((state)=>state["Home"]["Flex82"]);
const Flex82Cb = useFlex82Cb()
const Flex83Props = useStore((state)=>state["Home"]["Flex83"]);
const Flex83IoProps = useIoStore((state)=>state["Home"]["Flex83"]);
const Flex83Cb = useFlex83Cb()
const Flex84Props = useStore((state)=>state["Home"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Home"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Flex90Props = useStore((state)=>state["Home"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Home"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex86Props = useStore((state)=>state["Home"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Home"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex87Props = useStore((state)=>state["Home"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Home"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex88Props = useStore((state)=>state["Home"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Home"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex89Props = useStore((state)=>state["Home"]["Flex89"]);
const Flex89IoProps = useIoStore((state)=>state["Home"]["Flex89"]);
const Flex89Cb = useFlex89Cb()
const Flex61Props = useStore((state)=>state["Home"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Home"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Home"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Home"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex64Props = useStore((state)=>state["Home"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Home"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const About_usProps = useStore((state)=>state["Home"]["About_us"]);
const About_usIoProps = useIoStore((state)=>state["Home"]["About_us"]);
const About_usCb = useAbout_usCb()
const Flex92Props = useStore((state)=>state["Home"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Home"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex129Props = useStore((state)=>state["Home"]["Flex129"]);
const Flex129IoProps = useIoStore((state)=>state["Home"]["Flex129"]);
const Flex129Cb = useFlex129Cb()
const Flex140Props = useStore((state)=>state["Home"]["Flex140"]);
const Flex140IoProps = useIoStore((state)=>state["Home"]["Flex140"]);
const Flex140Cb = useFlex140Cb()
const Flex136Props = useStore((state)=>state["Home"]["Flex136"]);
const Flex136IoProps = useIoStore((state)=>state["Home"]["Flex136"]);
const Flex136Cb = useFlex136Cb()
const Flex137Props = useStore((state)=>state["Home"]["Flex137"]);
const Flex137IoProps = useIoStore((state)=>state["Home"]["Flex137"]);
const Flex137Cb = useFlex137Cb()
const Flex130Props = useStore((state)=>state["Home"]["Flex130"]);
const Flex130IoProps = useIoStore((state)=>state["Home"]["Flex130"]);
const Flex130Cb = useFlex130Cb()
const Flex131Props = useStore((state)=>state["Home"]["Flex131"]);
const Flex131IoProps = useIoStore((state)=>state["Home"]["Flex131"]);
const Flex131Cb = useFlex131Cb()
const Flex138Props = useStore((state)=>state["Home"]["Flex138"]);
const Flex138IoProps = useIoStore((state)=>state["Home"]["Flex138"]);
const Flex138Cb = useFlex138Cb()
const Flex132Props = useStore((state)=>state["Home"]["Flex132"]);
const Flex132IoProps = useIoStore((state)=>state["Home"]["Flex132"]);
const Flex132Cb = useFlex132Cb()
const Flex133Props = useStore((state)=>state["Home"]["Flex133"]);
const Flex133IoProps = useIoStore((state)=>state["Home"]["Flex133"]);
const Flex133Cb = useFlex133Cb()
const Flex139Props = useStore((state)=>state["Home"]["Flex139"]);
const Flex139IoProps = useIoStore((state)=>state["Home"]["Flex139"]);
const Flex139Cb = useFlex139Cb()
const Flex134Props = useStore((state)=>state["Home"]["Flex134"]);
const Flex134IoProps = useIoStore((state)=>state["Home"]["Flex134"]);
const Flex134Cb = useFlex134Cb()
const Flex135Props = useStore((state)=>state["Home"]["Flex135"]);
const Flex135IoProps = useIoStore((state)=>state["Home"]["Flex135"]);
const Flex135Cb = useFlex135Cb()
const Flex95Props = useStore((state)=>state["Home"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Home"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Home"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Home"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex97Props = useStore((state)=>state["Home"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Home"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex99Props = useStore((state)=>state["Home"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Home"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex100Props = useStore((state)=>state["Home"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Home"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex98Props = useStore((state)=>state["Home"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Home"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex101Props = useStore((state)=>state["Home"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Home"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["Home"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Home"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Browse_our_menuProps = useStore((state)=>state["Home"]["Browse_our_menu"]);
const Browse_our_menuIoProps = useIoStore((state)=>state["Home"]["Browse_our_menu"]);
const Browse_our_menuCb = useBrowse_our_menuCb()
const Flex144Props = useStore((state)=>state["Home"]["Flex144"]);
const Flex144IoProps = useIoStore((state)=>state["Home"]["Flex144"]);
const Flex144Cb = useFlex144Cb()
const Flex145Props = useStore((state)=>state["Home"]["Flex145"]);
const Flex145IoProps = useIoStore((state)=>state["Home"]["Flex145"]);
const Flex145Cb = useFlex145Cb()
const Flex146Props = useStore((state)=>state["Home"]["Flex146"]);
const Flex146IoProps = useIoStore((state)=>state["Home"]["Flex146"]);
const Flex146Cb = useFlex146Cb()
const Flex400Props = useStore((state)=>state["Home"]["Flex400"]);
const Flex400IoProps = useIoStore((state)=>state["Home"]["Flex400"]);
const Flex400Cb = useFlex400Cb()
const Flex402Props = useStore((state)=>state["Home"]["Flex402"]);
const Flex402IoProps = useIoStore((state)=>state["Home"]["Flex402"]);
const Flex402Cb = useFlex402Cb()
const Flex410Props = useStore((state)=>state["Home"]["Flex410"]);
const Flex410IoProps = useIoStore((state)=>state["Home"]["Flex410"]);
const Flex410Cb = useFlex410Cb()
const Flex411Props = useStore((state)=>state["Home"]["Flex411"]);
const Flex411IoProps = useIoStore((state)=>state["Home"]["Flex411"]);
const Flex411Cb = useFlex411Cb()
const Flex412Props = useStore((state)=>state["Home"]["Flex412"]);
const Flex412IoProps = useIoStore((state)=>state["Home"]["Flex412"]);
const Flex412Cb = useFlex412Cb()
const Flex413Props = useStore((state)=>state["Home"]["Flex413"]);
const Flex413IoProps = useIoStore((state)=>state["Home"]["Flex413"]);
const Flex413Cb = useFlex413Cb()
const Flex403Props = useStore((state)=>state["Home"]["Flex403"]);
const Flex403IoProps = useIoStore((state)=>state["Home"]["Flex403"]);
const Flex403Cb = useFlex403Cb()
const Flex465Props = useStore((state)=>state["Home"]["Flex465"]);
const Flex465IoProps = useIoStore((state)=>state["Home"]["Flex465"]);
const Flex465Cb = useFlex465Cb()
const Flex462Props = useStore((state)=>state["Home"]["Flex462"]);
const Flex462IoProps = useIoStore((state)=>state["Home"]["Flex462"]);
const Flex462Cb = useFlex462Cb()
const Flex463Props = useStore((state)=>state["Home"]["Flex463"]);
const Flex463IoProps = useIoStore((state)=>state["Home"]["Flex463"]);
const Flex463Cb = useFlex463Cb()
const Flex464Props = useStore((state)=>state["Home"]["Flex464"]);
const Flex464IoProps = useIoStore((state)=>state["Home"]["Flex464"]);
const Flex464Cb = useFlex464Cb()
const Flex461Props = useStore((state)=>state["Home"]["Flex461"]);
const Flex461IoProps = useIoStore((state)=>state["Home"]["Flex461"]);
const Flex461Cb = useFlex461Cb()
const Flex404Props = useStore((state)=>state["Home"]["Flex404"]);
const Flex404IoProps = useIoStore((state)=>state["Home"]["Flex404"]);
const Flex404Cb = useFlex404Cb()
const Flex470Props = useStore((state)=>state["Home"]["Flex470"]);
const Flex470IoProps = useIoStore((state)=>state["Home"]["Flex470"]);
const Flex470Cb = useFlex470Cb()
const Flex467Props = useStore((state)=>state["Home"]["Flex467"]);
const Flex467IoProps = useIoStore((state)=>state["Home"]["Flex467"]);
const Flex467Cb = useFlex467Cb()
const Flex468Props = useStore((state)=>state["Home"]["Flex468"]);
const Flex468IoProps = useIoStore((state)=>state["Home"]["Flex468"]);
const Flex468Cb = useFlex468Cb()
const Flex469Props = useStore((state)=>state["Home"]["Flex469"]);
const Flex469IoProps = useIoStore((state)=>state["Home"]["Flex469"]);
const Flex469Cb = useFlex469Cb()
const Flex466Props = useStore((state)=>state["Home"]["Flex466"]);
const Flex466IoProps = useIoStore((state)=>state["Home"]["Flex466"]);
const Flex466Cb = useFlex466Cb()
const Flex405Props = useStore((state)=>state["Home"]["Flex405"]);
const Flex405IoProps = useIoStore((state)=>state["Home"]["Flex405"]);
const Flex405Cb = useFlex405Cb()
const Flex475Props = useStore((state)=>state["Home"]["Flex475"]);
const Flex475IoProps = useIoStore((state)=>state["Home"]["Flex475"]);
const Flex475Cb = useFlex475Cb()
const Flex472Props = useStore((state)=>state["Home"]["Flex472"]);
const Flex472IoProps = useIoStore((state)=>state["Home"]["Flex472"]);
const Flex472Cb = useFlex472Cb()
const Flex473Props = useStore((state)=>state["Home"]["Flex473"]);
const Flex473IoProps = useIoStore((state)=>state["Home"]["Flex473"]);
const Flex473Cb = useFlex473Cb()
const Flex474Props = useStore((state)=>state["Home"]["Flex474"]);
const Flex474IoProps = useIoStore((state)=>state["Home"]["Flex474"]);
const Flex474Cb = useFlex474Cb()
const Flex471Props = useStore((state)=>state["Home"]["Flex471"]);
const Flex471IoProps = useIoStore((state)=>state["Home"]["Flex471"]);
const Flex471Cb = useFlex471Cb()
const Flex401Props = useStore((state)=>state["Home"]["Flex401"]);
const Flex401IoProps = useIoStore((state)=>state["Home"]["Flex401"]);
const Flex401Cb = useFlex401Cb()
const Flex406Props = useStore((state)=>state["Home"]["Flex406"]);
const Flex406IoProps = useIoStore((state)=>state["Home"]["Flex406"]);
const Flex406Cb = useFlex406Cb()
const Flex480Props = useStore((state)=>state["Home"]["Flex480"]);
const Flex480IoProps = useIoStore((state)=>state["Home"]["Flex480"]);
const Flex480Cb = useFlex480Cb()
const Flex477Props = useStore((state)=>state["Home"]["Flex477"]);
const Flex477IoProps = useIoStore((state)=>state["Home"]["Flex477"]);
const Flex477Cb = useFlex477Cb()
const Flex478Props = useStore((state)=>state["Home"]["Flex478"]);
const Flex478IoProps = useIoStore((state)=>state["Home"]["Flex478"]);
const Flex478Cb = useFlex478Cb()
const Flex479Props = useStore((state)=>state["Home"]["Flex479"]);
const Flex479IoProps = useIoStore((state)=>state["Home"]["Flex479"]);
const Flex479Cb = useFlex479Cb()
const Flex476Props = useStore((state)=>state["Home"]["Flex476"]);
const Flex476IoProps = useIoStore((state)=>state["Home"]["Flex476"]);
const Flex476Cb = useFlex476Cb()
const Flex407Props = useStore((state)=>state["Home"]["Flex407"]);
const Flex407IoProps = useIoStore((state)=>state["Home"]["Flex407"]);
const Flex407Cb = useFlex407Cb()
const Flex485Props = useStore((state)=>state["Home"]["Flex485"]);
const Flex485IoProps = useIoStore((state)=>state["Home"]["Flex485"]);
const Flex485Cb = useFlex485Cb()
const Flex482Props = useStore((state)=>state["Home"]["Flex482"]);
const Flex482IoProps = useIoStore((state)=>state["Home"]["Flex482"]);
const Flex482Cb = useFlex482Cb()
const Flex483Props = useStore((state)=>state["Home"]["Flex483"]);
const Flex483IoProps = useIoStore((state)=>state["Home"]["Flex483"]);
const Flex483Cb = useFlex483Cb()
const Flex484Props = useStore((state)=>state["Home"]["Flex484"]);
const Flex484IoProps = useIoStore((state)=>state["Home"]["Flex484"]);
const Flex484Cb = useFlex484Cb()
const Flex481Props = useStore((state)=>state["Home"]["Flex481"]);
const Flex481IoProps = useIoStore((state)=>state["Home"]["Flex481"]);
const Flex481Cb = useFlex481Cb()
const Flex408Props = useStore((state)=>state["Home"]["Flex408"]);
const Flex408IoProps = useIoStore((state)=>state["Home"]["Flex408"]);
const Flex408Cb = useFlex408Cb()
const Flex490Props = useStore((state)=>state["Home"]["Flex490"]);
const Flex490IoProps = useIoStore((state)=>state["Home"]["Flex490"]);
const Flex490Cb = useFlex490Cb()
const Flex487Props = useStore((state)=>state["Home"]["Flex487"]);
const Flex487IoProps = useIoStore((state)=>state["Home"]["Flex487"]);
const Flex487Cb = useFlex487Cb()
const Flex488Props = useStore((state)=>state["Home"]["Flex488"]);
const Flex488IoProps = useIoStore((state)=>state["Home"]["Flex488"]);
const Flex488Cb = useFlex488Cb()
const Flex489Props = useStore((state)=>state["Home"]["Flex489"]);
const Flex489IoProps = useIoStore((state)=>state["Home"]["Flex489"]);
const Flex489Cb = useFlex489Cb()
const Flex486Props = useStore((state)=>state["Home"]["Flex486"]);
const Flex486IoProps = useIoStore((state)=>state["Home"]["Flex486"]);
const Flex486Cb = useFlex486Cb()
const Flex409Props = useStore((state)=>state["Home"]["Flex409"]);
const Flex409IoProps = useIoStore((state)=>state["Home"]["Flex409"]);
const Flex409Cb = useFlex409Cb()
const Flex495Props = useStore((state)=>state["Home"]["Flex495"]);
const Flex495IoProps = useIoStore((state)=>state["Home"]["Flex495"]);
const Flex495Cb = useFlex495Cb()
const Flex492Props = useStore((state)=>state["Home"]["Flex492"]);
const Flex492IoProps = useIoStore((state)=>state["Home"]["Flex492"]);
const Flex492Cb = useFlex492Cb()
const Flex493Props = useStore((state)=>state["Home"]["Flex493"]);
const Flex493IoProps = useIoStore((state)=>state["Home"]["Flex493"]);
const Flex493Cb = useFlex493Cb()
const Flex494Props = useStore((state)=>state["Home"]["Flex494"]);
const Flex494IoProps = useIoStore((state)=>state["Home"]["Flex494"]);
const Flex494Cb = useFlex494Cb()
const Flex491Props = useStore((state)=>state["Home"]["Flex491"]);
const Flex491IoProps = useIoStore((state)=>state["Home"]["Flex491"]);
const Flex491Cb = useFlex491Cb()
const Flex148Props = useStore((state)=>state["Home"]["Flex148"]);
const Flex148IoProps = useIoStore((state)=>state["Home"]["Flex148"]);
const Flex148Cb = useFlex148Cb()
const Flex149Props = useStore((state)=>state["Home"]["Flex149"]);
const Flex149IoProps = useIoStore((state)=>state["Home"]["Flex149"]);
const Flex149Cb = useFlex149Cb()
const Flex150Props = useStore((state)=>state["Home"]["Flex150"]);
const Flex150IoProps = useIoStore((state)=>state["Home"]["Flex150"]);
const Flex150Cb = useFlex150Cb()
const Most_delicious_burgerProps = useStore((state)=>state["Home"]["Most_delicious_burger"]);
const Most_delicious_burgerIoProps = useIoStore((state)=>state["Home"]["Most_delicious_burger"]);
const Most_delicious_burgerCb = useMost_delicious_burgerCb()
const Flex153Props = useStore((state)=>state["Home"]["Flex153"]);
const Flex153IoProps = useIoStore((state)=>state["Home"]["Flex153"]);
const Flex153Cb = useFlex153Cb()
const Flex156Props = useStore((state)=>state["Home"]["Flex156"]);
const Flex156IoProps = useIoStore((state)=>state["Home"]["Flex156"]);
const Flex156Cb = useFlex156Cb()
const Flex155Props = useStore((state)=>state["Home"]["Flex155"]);
const Flex155IoProps = useIoStore((state)=>state["Home"]["Flex155"]);
const Flex155Cb = useFlex155Cb()
const Flex157Props = useStore((state)=>state["Home"]["Flex157"]);
const Flex157IoProps = useIoStore((state)=>state["Home"]["Flex157"]);
const Flex157Cb = useFlex157Cb()
const Flex158Props = useStore((state)=>state["Home"]["Flex158"]);
const Flex158IoProps = useIoStore((state)=>state["Home"]["Flex158"]);
const Flex158Cb = useFlex158Cb()
const Flex159Props = useStore((state)=>state["Home"]["Flex159"]);
const Flex159IoProps = useIoStore((state)=>state["Home"]["Flex159"]);
const Flex159Cb = useFlex159Cb()
const Flex154Props = useStore((state)=>state["Home"]["Flex154"]);
const Flex154IoProps = useIoStore((state)=>state["Home"]["Flex154"]);
const Flex154Cb = useFlex154Cb()
const What_our_clients_sayProps = useStore((state)=>state["Home"]["What_our_clients_say"]);
const What_our_clients_sayIoProps = useIoStore((state)=>state["Home"]["What_our_clients_say"]);
const What_our_clients_sayCb = useWhat_our_clients_sayCb()
const Flex161Props = useStore((state)=>state["Home"]["Flex161"]);
const Flex161IoProps = useIoStore((state)=>state["Home"]["Flex161"]);
const Flex161Cb = useFlex161Cb()
const Flex162Props = useStore((state)=>state["Home"]["Flex162"]);
const Flex162IoProps = useIoStore((state)=>state["Home"]["Flex162"]);
const Flex162Cb = useFlex162Cb()
const Flex163Props = useStore((state)=>state["Home"]["Flex163"]);
const Flex163IoProps = useIoStore((state)=>state["Home"]["Flex163"]);
const Flex163Cb = useFlex163Cb()
const Flex164Props = useStore((state)=>state["Home"]["Flex164"]);
const Flex164IoProps = useIoStore((state)=>state["Home"]["Flex164"]);
const Flex164Cb = useFlex164Cb()
const Flex168Props = useStore((state)=>state["Home"]["Flex168"]);
const Flex168IoProps = useIoStore((state)=>state["Home"]["Flex168"]);
const Flex168Cb = useFlex168Cb()
const Flex169Props = useStore((state)=>state["Home"]["Flex169"]);
const Flex169IoProps = useIoStore((state)=>state["Home"]["Flex169"]);
const Flex169Cb = useFlex169Cb()
const Flex171Props = useStore((state)=>state["Home"]["Flex171"]);
const Flex171IoProps = useIoStore((state)=>state["Home"]["Flex171"]);
const Flex171Cb = useFlex171Cb()
const Flex172Props = useStore((state)=>state["Home"]["Flex172"]);
const Flex172IoProps = useIoStore((state)=>state["Home"]["Flex172"]);
const Flex172Cb = useFlex172Cb()
const Flex173Props = useStore((state)=>state["Home"]["Flex173"]);
const Flex173IoProps = useIoStore((state)=>state["Home"]["Flex173"]);
const Flex173Cb = useFlex173Cb()
const Flex174Props = useStore((state)=>state["Home"]["Flex174"]);
const Flex174IoProps = useIoStore((state)=>state["Home"]["Flex174"]);
const Flex174Cb = useFlex174Cb()
const Flex175Props = useStore((state)=>state["Home"]["Flex175"]);
const Flex175IoProps = useIoStore((state)=>state["Home"]["Flex175"]);
const Flex175Cb = useFlex175Cb()
const Flex176Props = useStore((state)=>state["Home"]["Flex176"]);
const Flex176IoProps = useIoStore((state)=>state["Home"]["Flex176"]);
const Flex176Cb = useFlex176Cb()
const Flex178Props = useStore((state)=>state["Home"]["Flex178"]);
const Flex178IoProps = useIoStore((state)=>state["Home"]["Flex178"]);
const Flex178Cb = useFlex178Cb()
const Flex179Props = useStore((state)=>state["Home"]["Flex179"]);
const Flex179IoProps = useIoStore((state)=>state["Home"]["Flex179"]);
const Flex179Cb = useFlex179Cb()
const Flex170Props = useStore((state)=>state["Home"]["Flex170"]);
const Flex170IoProps = useIoStore((state)=>state["Home"]["Flex170"]);
const Flex170Cb = useFlex170Cb()
const Flex165Props = useStore((state)=>state["Home"]["Flex165"]);
const Flex165IoProps = useIoStore((state)=>state["Home"]["Flex165"]);
const Flex165Cb = useFlex165Cb()
const Flex166Props = useStore((state)=>state["Home"]["Flex166"]);
const Flex166IoProps = useIoStore((state)=>state["Home"]["Flex166"]);
const Flex166Cb = useFlex166Cb()
const Flex167Props = useStore((state)=>state["Home"]["Flex167"]);
const Flex167IoProps = useIoStore((state)=>state["Home"]["Flex167"]);
const Flex167Cb = useFlex167Cb()
const Our_articlesProps = useStore((state)=>state["Home"]["Our_articles"]);
const Our_articlesIoProps = useIoStore((state)=>state["Home"]["Our_articles"]);
const Our_articlesCb = useOur_articlesCb()
const Flex181Props = useStore((state)=>state["Home"]["Flex181"]);
const Flex181IoProps = useIoStore((state)=>state["Home"]["Flex181"]);
const Flex181Cb = useFlex181Cb()
const Flex183Props = useStore((state)=>state["Home"]["Flex183"]);
const Flex183IoProps = useIoStore((state)=>state["Home"]["Flex183"]);
const Flex183Cb = useFlex183Cb()
const Flex184Props = useStore((state)=>state["Home"]["Flex184"]);
const Flex184IoProps = useIoStore((state)=>state["Home"]["Flex184"]);
const Flex184Cb = useFlex184Cb()
const Flex182Props = useStore((state)=>state["Home"]["Flex182"]);
const Flex182IoProps = useIoStore((state)=>state["Home"]["Flex182"]);
const Flex182Cb = useFlex182Cb()
const Flex185Props = useStore((state)=>state["Home"]["Flex185"]);
const Flex185IoProps = useIoStore((state)=>state["Home"]["Flex185"]);
const Flex185Cb = useFlex185Cb()
const Flex187Props = useStore((state)=>state["Home"]["Flex187"]);
const Flex187IoProps = useIoStore((state)=>state["Home"]["Flex187"]);
const Flex187Cb = useFlex187Cb()
const Flex188Props = useStore((state)=>state["Home"]["Flex188"]);
const Flex188IoProps = useIoStore((state)=>state["Home"]["Flex188"]);
const Flex188Cb = useFlex188Cb()
const Flex189Props = useStore((state)=>state["Home"]["Flex189"]);
const Flex189IoProps = useIoStore((state)=>state["Home"]["Flex189"]);
const Flex189Cb = useFlex189Cb()
const Flex190Props = useStore((state)=>state["Home"]["Flex190"]);
const Flex190IoProps = useIoStore((state)=>state["Home"]["Flex190"]);
const Flex190Cb = useFlex190Cb()
const Flex191Props = useStore((state)=>state["Home"]["Flex191"]);
const Flex191IoProps = useIoStore((state)=>state["Home"]["Flex191"]);
const Flex191Cb = useFlex191Cb()
const Flex186Props = useStore((state)=>state["Home"]["Flex186"]);
const Flex186IoProps = useIoStore((state)=>state["Home"]["Flex186"]);
const Flex186Cb = useFlex186Cb()
const Flex194Props = useStore((state)=>state["Home"]["Flex194"]);
const Flex194IoProps = useIoStore((state)=>state["Home"]["Flex194"]);
const Flex194Cb = useFlex194Cb()
const Flex196Props = useStore((state)=>state["Home"]["Flex196"]);
const Flex196IoProps = useIoStore((state)=>state["Home"]["Flex196"]);
const Flex196Cb = useFlex196Cb()
const Flex241Props = useStore((state)=>state["Home"]["Flex241"]);
const Flex241IoProps = useIoStore((state)=>state["Home"]["Flex241"]);
const Flex241Cb = useFlex241Cb()
const Flex239Props = useStore((state)=>state["Home"]["Flex239"]);
const Flex239IoProps = useIoStore((state)=>state["Home"]["Flex239"]);
const Flex239Cb = useFlex239Cb()
const Flex237Props = useStore((state)=>state["Home"]["Flex237"]);
const Flex237IoProps = useIoStore((state)=>state["Home"]["Flex237"]);
const Flex237Cb = useFlex237Cb()
const Flex238Props = useStore((state)=>state["Home"]["Flex238"]);
const Flex238IoProps = useIoStore((state)=>state["Home"]["Flex238"]);
const Flex238Cb = useFlex238Cb()
const Flex240Props = useStore((state)=>state["Home"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["Home"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex197Props = useStore((state)=>state["Home"]["Flex197"]);
const Flex197IoProps = useIoStore((state)=>state["Home"]["Flex197"]);
const Flex197Cb = useFlex197Cb()
const Flex252Props = useStore((state)=>state["Home"]["Flex252"]);
const Flex252IoProps = useIoStore((state)=>state["Home"]["Flex252"]);
const Flex252Cb = useFlex252Cb()
const Flex250Props = useStore((state)=>state["Home"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["Home"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex251Props = useStore((state)=>state["Home"]["Flex251"]);
const Flex251IoProps = useIoStore((state)=>state["Home"]["Flex251"]);
const Flex251Cb = useFlex251Cb()
const Flex248Props = useStore((state)=>state["Home"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["Home"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex249Props = useStore((state)=>state["Home"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["Home"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex195Props = useStore((state)=>state["Home"]["Flex195"]);
const Flex195IoProps = useIoStore((state)=>state["Home"]["Flex195"]);
const Flex195Cb = useFlex195Cb()
const Flex198Props = useStore((state)=>state["Home"]["Flex198"]);
const Flex198IoProps = useIoStore((state)=>state["Home"]["Flex198"]);
const Flex198Cb = useFlex198Cb()
const Flex257Props = useStore((state)=>state["Home"]["Flex257"]);
const Flex257IoProps = useIoStore((state)=>state["Home"]["Flex257"]);
const Flex257Cb = useFlex257Cb()
const Flex255Props = useStore((state)=>state["Home"]["Flex255"]);
const Flex255IoProps = useIoStore((state)=>state["Home"]["Flex255"]);
const Flex255Cb = useFlex255Cb()
const Flex256Props = useStore((state)=>state["Home"]["Flex256"]);
const Flex256IoProps = useIoStore((state)=>state["Home"]["Flex256"]);
const Flex256Cb = useFlex256Cb()
const Flex253Props = useStore((state)=>state["Home"]["Flex253"]);
const Flex253IoProps = useIoStore((state)=>state["Home"]["Flex253"]);
const Flex253Cb = useFlex253Cb()
const Flex254Props = useStore((state)=>state["Home"]["Flex254"]);
const Flex254IoProps = useIoStore((state)=>state["Home"]["Flex254"]);
const Flex254Cb = useFlex254Cb()
const Flex199Props = useStore((state)=>state["Home"]["Flex199"]);
const Flex199IoProps = useIoStore((state)=>state["Home"]["Flex199"]);
const Flex199Cb = useFlex199Cb()
const Flex262Props = useStore((state)=>state["Home"]["Flex262"]);
const Flex262IoProps = useIoStore((state)=>state["Home"]["Flex262"]);
const Flex262Cb = useFlex262Cb()
const Flex260Props = useStore((state)=>state["Home"]["Flex260"]);
const Flex260IoProps = useIoStore((state)=>state["Home"]["Flex260"]);
const Flex260Cb = useFlex260Cb()
const Flex261Props = useStore((state)=>state["Home"]["Flex261"]);
const Flex261IoProps = useIoStore((state)=>state["Home"]["Flex261"]);
const Flex261Cb = useFlex261Cb()
const Flex258Props = useStore((state)=>state["Home"]["Flex258"]);
const Flex258IoProps = useIoStore((state)=>state["Home"]["Flex258"]);
const Flex258Cb = useFlex258Cb()
const Flex259Props = useStore((state)=>state["Home"]["Flex259"]);
const Flex259IoProps = useIoStore((state)=>state["Home"]["Flex259"]);
const Flex259Cb = useFlex259Cb()
const Book_your_table_nowProps = useStore((state)=>state["Home"]["Book_your_table_now"]);
const Book_your_table_nowIoProps = useIoStore((state)=>state["Home"]["Book_your_table_now"]);
const Book_your_table_nowCb = useBook_your_table_nowCb()
const Flex264Props = useStore((state)=>state["Home"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["Home"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex287Props = useStore((state)=>state["Home"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["Home"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex283Props = useStore((state)=>state["Home"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["Home"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex277Props = useStore((state)=>state["Home"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["Home"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex278Props = useStore((state)=>state["Home"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["Home"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex284Props = useStore((state)=>state["Home"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["Home"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex279Props = useStore((state)=>state["Home"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["Home"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex280Props = useStore((state)=>state["Home"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["Home"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex285Props = useStore((state)=>state["Home"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["Home"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex281Props = useStore((state)=>state["Home"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["Home"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex282Props = useStore((state)=>state["Home"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["Home"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex286Props = useStore((state)=>state["Home"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["Home"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex288Props = useStore((state)=>state["Home"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["Home"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex265Props = useStore((state)=>state["Home"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["Home"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex289Props = useStore((state)=>state["Home"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["Home"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex291Props = useStore((state)=>state["Home"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["Home"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex295Props = useStore((state)=>state["Home"]["Flex295"]);
const Flex295IoProps = useIoStore((state)=>state["Home"]["Flex295"]);
const Flex295Cb = useFlex295Cb()
const Flex306Props = useStore((state)=>state["Home"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["Home"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex307Props = useStore((state)=>state["Home"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["Home"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex296Props = useStore((state)=>state["Home"]["Flex296"]);
const Flex296IoProps = useIoStore((state)=>state["Home"]["Flex296"]);
const Flex296Cb = useFlex296Cb()
const Flex308Props = useStore((state)=>state["Home"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["Home"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex309Props = useStore((state)=>state["Home"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["Home"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex310Props = useStore((state)=>state["Home"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["Home"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex311Props = useStore((state)=>state["Home"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["Home"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex304Props = useStore((state)=>state["Home"]["Flex304"]);
const Flex304IoProps = useIoStore((state)=>state["Home"]["Flex304"]);
const Flex304Cb = useFlex304Cb()
const Flex332Props = useStore((state)=>state["Home"]["Flex332"]);
const Flex332IoProps = useIoStore((state)=>state["Home"]["Flex332"]);
const Flex332Cb = useFlex332Cb()
const Flex330Props = useStore((state)=>state["Home"]["Flex330"]);
const Flex330IoProps = useIoStore((state)=>state["Home"]["Flex330"]);
const Flex330Cb = useFlex330Cb()
const Flex331Props = useStore((state)=>state["Home"]["Flex331"]);
const Flex331IoProps = useIoStore((state)=>state["Home"]["Flex331"]);
const Flex331Cb = useFlex331Cb()
const Flex320Props = useStore((state)=>state["Home"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["Home"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex318Props = useStore((state)=>state["Home"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["Home"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex314Props = useStore((state)=>state["Home"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["Home"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex315Props = useStore((state)=>state["Home"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["Home"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex313Props = useStore((state)=>state["Home"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["Home"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex312Props = useStore((state)=>state["Home"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["Home"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const Flex319Props = useStore((state)=>state["Home"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["Home"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex316Props = useStore((state)=>state["Home"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["Home"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex317Props = useStore((state)=>state["Home"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["Home"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex329Props = useStore((state)=>state["Home"]["Flex329"]);
const Flex329IoProps = useIoStore((state)=>state["Home"]["Flex329"]);
const Flex329Cb = useFlex329Cb()
const Flex327Props = useStore((state)=>state["Home"]["Flex327"]);
const Flex327IoProps = useIoStore((state)=>state["Home"]["Flex327"]);
const Flex327Cb = useFlex327Cb()
const Flex323Props = useStore((state)=>state["Home"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["Home"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex324Props = useStore((state)=>state["Home"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["Home"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Flex322Props = useStore((state)=>state["Home"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["Home"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex321Props = useStore((state)=>state["Home"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["Home"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex328Props = useStore((state)=>state["Home"]["Flex328"]);
const Flex328IoProps = useIoStore((state)=>state["Home"]["Flex328"]);
const Flex328Cb = useFlex328Cb()
const Flex325Props = useStore((state)=>state["Home"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["Home"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const Flex326Props = useStore((state)=>state["Home"]["Flex326"]);
const Flex326IoProps = useIoStore((state)=>state["Home"]["Flex326"]);
const Flex326Cb = useFlex326Cb()
const Follow_us_on_InstagramProps = useStore((state)=>state["Home"]["Follow_us_on_Instagram"]);
const Follow_us_on_InstagramIoProps = useIoStore((state)=>state["Home"]["Follow_us_on_Instagram"]);
const Follow_us_on_InstagramCb = useFollow_us_on_InstagramCb()
const Flex334Props = useStore((state)=>state["Home"]["Flex334"]);
const Flex334IoProps = useIoStore((state)=>state["Home"]["Flex334"]);
const Flex334Cb = useFlex334Cb()
const Flex336Props = useStore((state)=>state["Home"]["Flex336"]);
const Flex336IoProps = useIoStore((state)=>state["Home"]["Flex336"]);
const Flex336Cb = useFlex336Cb()
const Flex337Props = useStore((state)=>state["Home"]["Flex337"]);
const Flex337IoProps = useIoStore((state)=>state["Home"]["Flex337"]);
const Flex337Cb = useFlex337Cb()
const Flex335Props = useStore((state)=>state["Home"]["Flex335"]);
const Flex335IoProps = useIoStore((state)=>state["Home"]["Flex335"]);
const Flex335Cb = useFlex335Cb()
const Flex338Props = useStore((state)=>state["Home"]["Flex338"]);
const Flex338IoProps = useIoStore((state)=>state["Home"]["Flex338"]);
const Flex338Cb = useFlex338Cb()
const Flex339Props = useStore((state)=>state["Home"]["Flex339"]);
const Flex339IoProps = useIoStore((state)=>state["Home"]["Flex339"]);
const Flex339Cb = useFlex339Cb()
const Flex340Props = useStore((state)=>state["Home"]["Flex340"]);
const Flex340IoProps = useIoStore((state)=>state["Home"]["Flex340"]);
const Flex340Cb = useFlex340Cb()
const Flex343Props = useStore((state)=>state["Home"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["Home"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const Flex345Props = useStore((state)=>state["Home"]["Flex345"]);
const Flex345IoProps = useIoStore((state)=>state["Home"]["Flex345"]);
const Flex345Cb = useFlex345Cb()
const Flex346Props = useStore((state)=>state["Home"]["Flex346"]);
const Flex346IoProps = useIoStore((state)=>state["Home"]["Flex346"]);
const Flex346Cb = useFlex346Cb()
const Flex344Props = useStore((state)=>state["Home"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["Home"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Flex347Props = useStore((state)=>state["Home"]["Flex347"]);
const Flex347IoProps = useIoStore((state)=>state["Home"]["Flex347"]);
const Flex347Cb = useFlex347Cb()
const Flex348Props = useStore((state)=>state["Home"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["Home"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const EndProps = useStore((state)=>state["Home"]["End"]);
const EndIoProps = useIoStore((state)=>state["Home"]["End"]);
const EndCb = useEndCb()
const Flex350Props = useStore((state)=>state["Home"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["Home"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex353Props = useStore((state)=>state["Home"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["Home"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex354Props = useStore((state)=>state["Home"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["Home"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex355Props = useStore((state)=>state["Home"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["Home"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const Flex365Props = useStore((state)=>state["Home"]["Flex365"]);
const Flex365IoProps = useIoStore((state)=>state["Home"]["Flex365"]);
const Flex365Cb = useFlex365Cb()
const Flex366Props = useStore((state)=>state["Home"]["Flex366"]);
const Flex366IoProps = useIoStore((state)=>state["Home"]["Flex366"]);
const Flex366Cb = useFlex366Cb()
const Flex351Props = useStore((state)=>state["Home"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["Home"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex367Props = useStore((state)=>state["Home"]["Flex367"]);
const Flex367IoProps = useIoStore((state)=>state["Home"]["Flex367"]);
const Flex367Cb = useFlex367Cb()
const Flex369Props = useStore((state)=>state["Home"]["Flex369"]);
const Flex369IoProps = useIoStore((state)=>state["Home"]["Flex369"]);
const Flex369Cb = useFlex369Cb()
const Flex370Props = useStore((state)=>state["Home"]["Flex370"]);
const Flex370IoProps = useIoStore((state)=>state["Home"]["Flex370"]);
const Flex370Cb = useFlex370Cb()
const Flex368Props = useStore((state)=>state["Home"]["Flex368"]);
const Flex368IoProps = useIoStore((state)=>state["Home"]["Flex368"]);
const Flex368Cb = useFlex368Cb()
const Flex382Props = useStore((state)=>state["Home"]["Flex382"]);
const Flex382IoProps = useIoStore((state)=>state["Home"]["Flex382"]);
const Flex382Cb = useFlex382Cb()
const Flex384Props = useStore((state)=>state["Home"]["Flex384"]);
const Flex384IoProps = useIoStore((state)=>state["Home"]["Flex384"]);
const Flex384Cb = useFlex384Cb()
const Flex385Props = useStore((state)=>state["Home"]["Flex385"]);
const Flex385IoProps = useIoStore((state)=>state["Home"]["Flex385"]);
const Flex385Cb = useFlex385Cb()
const Flex386Props = useStore((state)=>state["Home"]["Flex386"]);
const Flex386IoProps = useIoStore((state)=>state["Home"]["Flex386"]);
const Flex386Cb = useFlex386Cb()
const Flex387Props = useStore((state)=>state["Home"]["Flex387"]);
const Flex387IoProps = useIoStore((state)=>state["Home"]["Flex387"]);
const Flex387Cb = useFlex387Cb()
const Flex388Props = useStore((state)=>state["Home"]["Flex388"]);
const Flex388IoProps = useIoStore((state)=>state["Home"]["Flex388"]);
const Flex388Cb = useFlex388Cb()
const Flex389Props = useStore((state)=>state["Home"]["Flex389"]);
const Flex389IoProps = useIoStore((state)=>state["Home"]["Flex389"]);
const Flex389Cb = useFlex389Cb()
const Flex390Props = useStore((state)=>state["Home"]["Flex390"]);
const Flex390IoProps = useIoStore((state)=>state["Home"]["Flex390"]);
const Flex390Cb = useFlex390Cb()
const Flex383Props = useStore((state)=>state["Home"]["Flex383"]);
const Flex383IoProps = useIoStore((state)=>state["Home"]["Flex383"]);
const Flex383Cb = useFlex383Cb()
const Flex391Props = useStore((state)=>state["Home"]["Flex391"]);
const Flex391IoProps = useIoStore((state)=>state["Home"]["Flex391"]);
const Flex391Cb = useFlex391Cb()
const Flex392Props = useStore((state)=>state["Home"]["Flex392"]);
const Flex392IoProps = useIoStore((state)=>state["Home"]["Flex392"]);
const Flex392Cb = useFlex392Cb()
const Flex393Props = useStore((state)=>state["Home"]["Flex393"]);
const Flex393IoProps = useIoStore((state)=>state["Home"]["Flex393"]);
const Flex393Cb = useFlex393Cb()
const Flex394Props = useStore((state)=>state["Home"]["Flex394"]);
const Flex394IoProps = useIoStore((state)=>state["Home"]["Flex394"]);
const Flex394Cb = useFlex394Cb()
const Flex395Props = useStore((state)=>state["Home"]["Flex395"]);
const Flex395IoProps = useIoStore((state)=>state["Home"]["Flex395"]);
const Flex395Cb = useFlex395Cb()
const Flex396Props = useStore((state)=>state["Home"]["Flex396"]);
const Flex396IoProps = useIoStore((state)=>state["Home"]["Flex396"]);
const Flex396Cb = useFlex396Cb()
const Flex397Props = useStore((state)=>state["Home"]["Flex397"]);
const Flex397IoProps = useIoStore((state)=>state["Home"]["Flex397"]);
const Flex397Cb = useFlex397Cb()
const Flex352Props = useStore((state)=>state["Home"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["Home"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex356Props = useStore((state)=>state["Home"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["Home"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Flex357Props = useStore((state)=>state["Home"]["Flex357"]);
const Flex357IoProps = useIoStore((state)=>state["Home"]["Flex357"]);
const Flex357Cb = useFlex357Cb()
const Flex364Props = useStore((state)=>state["Home"]["Flex364"]);
const Flex364IoProps = useIoStore((state)=>state["Home"]["Flex364"]);
const Flex364Cb = useFlex364Cb()
const Flex362Props = useStore((state)=>state["Home"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["Home"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const Flex358Props = useStore((state)=>state["Home"]["Flex358"]);
const Flex358IoProps = useIoStore((state)=>state["Home"]["Flex358"]);
const Flex358Cb = useFlex358Cb()
const Flex359Props = useStore((state)=>state["Home"]["Flex359"]);
const Flex359IoProps = useIoStore((state)=>state["Home"]["Flex359"]);
const Flex359Cb = useFlex359Cb()
const Flex363Props = useStore((state)=>state["Home"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["Home"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const Flex360Props = useStore((state)=>state["Home"]["Flex360"]);
const Flex360IoProps = useIoStore((state)=>state["Home"]["Flex360"]);
const Flex360Cb = useFlex360Cb()
const Flex361Props = useStore((state)=>state["Home"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["Home"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const TextBox8Props = useStore((state)=>state["Home"]["TextBox8"]);
const TextBox8IoProps = useIoStore((state)=>state["Home"]["TextBox8"]);
const TextBox8Cb = useTextBox8Cb()
const TextBox7Props = useStore((state)=>state["Home"]["TextBox7"]);
const TextBox7IoProps = useIoStore((state)=>state["Home"]["TextBox7"]);
const TextBox7Cb = useTextBox7Cb()
const TextBox9Props = useStore((state)=>state["Home"]["TextBox9"]);
const TextBox9IoProps = useIoStore((state)=>state["Home"]["TextBox9"]);
const TextBox9Cb = useTextBox9Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const titleProps = useStore((state)=>state["Home"]["title"]);
const titleIoProps = useIoStore((state)=>state["Home"]["title"]);
const titleCb = usetitleCb()
const Image2Props = useStore((state)=>state["Home"]["Image2"]);
const Image2IoProps = useIoStore((state)=>state["Home"]["Image2"]);
const Image2Cb = useImage2Cb()
const Button2Props = useStore((state)=>state["Home"]["Button2"]);
const Button2IoProps = useIoStore((state)=>state["Home"]["Button2"]);
const Button2Cb = useButton2Cb()
const Button1Props = useStore((state)=>state["Home"]["Button1"]);
const Button1IoProps = useIoStore((state)=>state["Home"]["Button1"]);
const Button1Cb = useButton1Cb()
const Flex30Props = useStore((state)=>state["Home"]["Flex30"]);
const Flex30IoProps = useIoStore((state)=>state["Home"]["Flex30"]);
const Flex30Cb = useFlex30Cb()
const TextBox13Props = useStore((state)=>state["Home"]["TextBox13"]);
const TextBox13IoProps = useIoStore((state)=>state["Home"]["TextBox13"]);
const TextBox13Cb = useTextBox13Cb()
const Button8Props = useStore((state)=>state["Home"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Home"]["Button8"]);
const Button8Cb = useButton8Cb()
const Button9Props = useStore((state)=>state["Home"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Home"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox14Props = useStore((state)=>state["Home"]["TextBox14"]);
const TextBox14IoProps = useIoStore((state)=>state["Home"]["TextBox14"]);
const TextBox14Cb = useTextBox14Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox16Props = useStore((state)=>state["Home"]["TextBox16"]);
const TextBox16IoProps = useIoStore((state)=>state["Home"]["TextBox16"]);
const TextBox16Cb = useTextBox16Cb()
const Image10Props = useStore((state)=>state["Home"]["Image10"]);
const Image10IoProps = useIoStore((state)=>state["Home"]["Image10"]);
const Image10Cb = useImage10Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox25Props = useStore((state)=>state["Home"]["TextBox25"]);
const TextBox25IoProps = useIoStore((state)=>state["Home"]["TextBox25"]);
const TextBox25Cb = useTextBox25Cb()
const Button14Props = useStore((state)=>state["Home"]["Button14"]);
const Button14IoProps = useIoStore((state)=>state["Home"]["Button14"]);
const Button14Cb = useButton14Cb()
const Button15Props = useStore((state)=>state["Home"]["Button15"]);
const Button15IoProps = useIoStore((state)=>state["Home"]["Button15"]);
const Button15Cb = useButton15Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Image12Props = useStore((state)=>state["Home"]["Image12"]);
const Image12IoProps = useIoStore((state)=>state["Home"]["Image12"]);
const Image12Cb = useImage12Cb()
const Button16Props = useStore((state)=>state["Home"]["Button16"]);
const Button16IoProps = useIoStore((state)=>state["Home"]["Button16"]);
const Button16Cb = useButton16Cb()
const TextBox27Props = useStore((state)=>state["Home"]["TextBox27"]);
const TextBox27IoProps = useIoStore((state)=>state["Home"]["TextBox27"]);
const TextBox27Cb = useTextBox27Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const Button17Props = useStore((state)=>state["Home"]["Button17"]);
const Button17IoProps = useIoStore((state)=>state["Home"]["Button17"]);
const Button17Cb = useButton17Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image14Props = useStore((state)=>state["Home"]["Image14"]);
const Image14IoProps = useIoStore((state)=>state["Home"]["Image14"]);
const Image14Cb = useImage14Cb()
const Button11Props = useStore((state)=>state["Home"]["Button11"]);
const Button11IoProps = useIoStore((state)=>state["Home"]["Button11"]);
const Button11Cb = useButton11Cb()
const Button12Props = useStore((state)=>state["Home"]["Button12"]);
const Button12IoProps = useIoStore((state)=>state["Home"]["Button12"]);
const Button12Cb = useButton12Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox44Props = useStore((state)=>state["Home"]["TextBox44"]);
const TextBox44IoProps = useIoStore((state)=>state["Home"]["TextBox44"]);
const TextBox44Cb = useTextBox44Cb()
const Image23Props = useStore((state)=>state["Home"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Home"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const Image24Props = useStore((state)=>state["Home"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Home"]["Image24"]);
const Image24Cb = useImage24Cb()
const TextBox42Props = useStore((state)=>state["Home"]["TextBox42"]);
const TextBox42IoProps = useIoStore((state)=>state["Home"]["TextBox42"]);
const TextBox42Cb = useTextBox42Cb()
const Image25Props = useStore((state)=>state["Home"]["Image25"]);
const Image25IoProps = useIoStore((state)=>state["Home"]["Image25"]);
const Image25Cb = useImage25Cb()
const TextBox43Props = useStore((state)=>state["Home"]["TextBox43"]);
const TextBox43IoProps = useIoStore((state)=>state["Home"]["TextBox43"]);
const TextBox43Cb = useTextBox43Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const TextBox30Props = useStore((state)=>state["Home"]["TextBox30"]);
const TextBox30IoProps = useIoStore((state)=>state["Home"]["TextBox30"]);
const TextBox30Cb = useTextBox30Cb()
const TextBox31Props = useStore((state)=>state["Home"]["TextBox31"]);
const TextBox31IoProps = useIoStore((state)=>state["Home"]["TextBox31"]);
const TextBox31Cb = useTextBox31Cb()
const Button19Props = useStore((state)=>state["Home"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Home"]["Button19"]);
const Button19Cb = useButton19Cb()
const Button18Props = useStore((state)=>state["Home"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Home"]["Button18"]);
const Button18Cb = useButton18Cb()
const TextBox46Props = useStore((state)=>state["Home"]["TextBox46"]);
const TextBox46IoProps = useIoStore((state)=>state["Home"]["TextBox46"]);
const TextBox46Cb = useTextBox46Cb()
const TextBox47Props = useStore((state)=>state["Home"]["TextBox47"]);
const TextBox47IoProps = useIoStore((state)=>state["Home"]["TextBox47"]);
const TextBox47Cb = useTextBox47Cb()
const Image67Props = useStore((state)=>state["Home"]["Image67"]);
const Image67IoProps = useIoStore((state)=>state["Home"]["Image67"]);
const Image67Cb = useImage67Cb()
const TextBox129Props = useStore((state)=>state["Home"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Home"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Home"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Home"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Home"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Home"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox160Props = useStore((state)=>state["Home"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Home"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox161Props = useStore((state)=>state["Home"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Home"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image77Props = useStore((state)=>state["Home"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["Home"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox159Props = useStore((state)=>state["Home"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Home"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox163Props = useStore((state)=>state["Home"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Home"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const TextBox164Props = useStore((state)=>state["Home"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Home"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const Image78Props = useStore((state)=>state["Home"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["Home"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox162Props = useStore((state)=>state["Home"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Home"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox166Props = useStore((state)=>state["Home"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Home"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const TextBox167Props = useStore((state)=>state["Home"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Home"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const Image79Props = useStore((state)=>state["Home"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Home"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox165Props = useStore((state)=>state["Home"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Home"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const TextBox169Props = useStore((state)=>state["Home"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Home"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["Home"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Home"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image80Props = useStore((state)=>state["Home"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["Home"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox168Props = useStore((state)=>state["Home"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Home"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox172Props = useStore((state)=>state["Home"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Home"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Home"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Home"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()
const Image81Props = useStore((state)=>state["Home"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Home"]["Image81"]);
const Image81Cb = useImage81Cb()
const TextBox171Props = useStore((state)=>state["Home"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Home"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox175Props = useStore((state)=>state["Home"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Home"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const TextBox176Props = useStore((state)=>state["Home"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Home"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const Image82Props = useStore((state)=>state["Home"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Home"]["Image82"]);
const Image82Cb = useImage82Cb()
const TextBox174Props = useStore((state)=>state["Home"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Home"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox178Props = useStore((state)=>state["Home"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Home"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Home"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Home"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Image83Props = useStore((state)=>state["Home"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["Home"]["Image83"]);
const Image83Cb = useImage83Cb()
const TextBox177Props = useStore((state)=>state["Home"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Home"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Button20Props = useStore((state)=>state["Home"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Home"]["Button20"]);
const Button20Cb = useButton20Cb()
const Button21Props = useStore((state)=>state["Home"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Home"]["Button21"]);
const Button21Cb = useButton21Cb()
const Button23Props = useStore((state)=>state["Home"]["Button23"]);
const Button23IoProps = useIoStore((state)=>state["Home"]["Button23"]);
const Button23Cb = useButton23Cb()
const Button22Props = useStore((state)=>state["Home"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Home"]["Button22"]);
const Button22Cb = useButton22Cb()
const TextBox48Props = useStore((state)=>state["Home"]["TextBox48"]);
const TextBox48IoProps = useIoStore((state)=>state["Home"]["TextBox48"]);
const TextBox48Cb = useTextBox48Cb()
const TextBox49Props = useStore((state)=>state["Home"]["TextBox49"]);
const TextBox49IoProps = useIoStore((state)=>state["Home"]["TextBox49"]);
const TextBox49Cb = useTextBox49Cb()
const Image27Props = useStore((state)=>state["Home"]["Image27"]);
const Image27IoProps = useIoStore((state)=>state["Home"]["Image27"]);
const Image27Cb = useImage27Cb()
const TextBox50Props = useStore((state)=>state["Home"]["TextBox50"]);
const TextBox50IoProps = useIoStore((state)=>state["Home"]["TextBox50"]);
const TextBox50Cb = useTextBox50Cb()
const TextBox51Props = useStore((state)=>state["Home"]["TextBox51"]);
const TextBox51IoProps = useIoStore((state)=>state["Home"]["TextBox51"]);
const TextBox51Cb = useTextBox51Cb()
const TextBox52Props = useStore((state)=>state["Home"]["TextBox52"]);
const TextBox52IoProps = useIoStore((state)=>state["Home"]["TextBox52"]);
const TextBox52Cb = useTextBox52Cb()
const Image28Props = useStore((state)=>state["Home"]["Image28"]);
const Image28IoProps = useIoStore((state)=>state["Home"]["Image28"]);
const Image28Cb = useImage28Cb()
const Image30Props = useStore((state)=>state["Home"]["Image30"]);
const Image30IoProps = useIoStore((state)=>state["Home"]["Image30"]);
const Image30Cb = useImage30Cb()
const TextBox53Props = useStore((state)=>state["Home"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Home"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Home"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Home"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const Image31Props = useStore((state)=>state["Home"]["Image31"]);
const Image31IoProps = useIoStore((state)=>state["Home"]["Image31"]);
const Image31Cb = useImage31Cb()
const TextBox55Props = useStore((state)=>state["Home"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Home"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox56Props = useStore((state)=>state["Home"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Home"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const Image29Props = useStore((state)=>state["Home"]["Image29"]);
const Image29IoProps = useIoStore((state)=>state["Home"]["Image29"]);
const Image29Cb = useImage29Cb()
const Button24Props = useStore((state)=>state["Home"]["Button24"]);
const Button24IoProps = useIoStore((state)=>state["Home"]["Button24"]);
const Button24Cb = useButton24Cb()
const Button25Props = useStore((state)=>state["Home"]["Button25"]);
const Button25IoProps = useIoStore((state)=>state["Home"]["Button25"]);
const Button25Cb = useButton25Cb()
const TextBox57Props = useStore((state)=>state["Home"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Home"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const Button26Props = useStore((state)=>state["Home"]["Button26"]);
const Button26IoProps = useIoStore((state)=>state["Home"]["Button26"]);
const Button26Cb = useButton26Cb()
const Image32Props = useStore((state)=>state["Home"]["Image32"]);
const Image32IoProps = useIoStore((state)=>state["Home"]["Image32"]);
const Image32Cb = useImage32Cb()
const TextBox58Props = useStore((state)=>state["Home"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Home"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox59Props = useStore((state)=>state["Home"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Home"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Home"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Home"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox80Props = useStore((state)=>state["Home"]["TextBox80"]);
const TextBox80IoProps = useIoStore((state)=>state["Home"]["TextBox80"]);
const TextBox80Cb = useTextBox80Cb()
const TextBox81Props = useStore((state)=>state["Home"]["TextBox81"]);
const TextBox81IoProps = useIoStore((state)=>state["Home"]["TextBox81"]);
const TextBox81Cb = useTextBox81Cb()
const Image39Props = useStore((state)=>state["Home"]["Image39"]);
const Image39IoProps = useIoStore((state)=>state["Home"]["Image39"]);
const Image39Cb = useImage39Cb()
const Image41Props = useStore((state)=>state["Home"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["Home"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox85Props = useStore((state)=>state["Home"]["TextBox85"]);
const TextBox85IoProps = useIoStore((state)=>state["Home"]["TextBox85"]);
const TextBox85Cb = useTextBox85Cb()
const TextBox86Props = useStore((state)=>state["Home"]["TextBox86"]);
const TextBox86IoProps = useIoStore((state)=>state["Home"]["TextBox86"]);
const TextBox86Cb = useTextBox86Cb()
const Image42Props = useStore((state)=>state["Home"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["Home"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox87Props = useStore((state)=>state["Home"]["TextBox87"]);
const TextBox87IoProps = useIoStore((state)=>state["Home"]["TextBox87"]);
const TextBox87Cb = useTextBox87Cb()
const TextBox88Props = useStore((state)=>state["Home"]["TextBox88"]);
const TextBox88IoProps = useIoStore((state)=>state["Home"]["TextBox88"]);
const TextBox88Cb = useTextBox88Cb()
const Image43Props = useStore((state)=>state["Home"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["Home"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox89Props = useStore((state)=>state["Home"]["TextBox89"]);
const TextBox89IoProps = useIoStore((state)=>state["Home"]["TextBox89"]);
const TextBox89Cb = useTextBox89Cb()
const TextBox90Props = useStore((state)=>state["Home"]["TextBox90"]);
const TextBox90IoProps = useIoStore((state)=>state["Home"]["TextBox90"]);
const TextBox90Cb = useTextBox90Cb()
const TextBox95Props = useStore((state)=>state["Home"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Home"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const Image47Props = useStore((state)=>state["Home"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Home"]["Image47"]);
const Image47Cb = useImage47Cb()
const TextBox96Props = useStore((state)=>state["Home"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Home"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()
const Image48Props = useStore((state)=>state["Home"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["Home"]["Image48"]);
const Image48Cb = useImage48Cb()
const TextBox97Props = useStore((state)=>state["Home"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Home"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const Image49Props = useStore((state)=>state["Home"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Home"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox98Props = useStore((state)=>state["Home"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Home"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox99Props = useStore((state)=>state["Home"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Home"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox100Props = useStore((state)=>state["Home"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Home"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Input1Props = useStore((state)=>state["Home"]["Input1"]);
const Input1IoProps = useIoStore((state)=>state["Home"]["Input1"]);
const Input1Cb = useInput1Cb()
const TextBox101Props = useStore((state)=>state["Home"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Home"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Input2Props = useStore((state)=>state["Home"]["Input2"]);
const Input2IoProps = useIoStore((state)=>state["Home"]["Input2"]);
const Input2Cb = useInput2Cb()
const Button29Props = useStore((state)=>state["Home"]["Button29"]);
const Button29IoProps = useIoStore((state)=>state["Home"]["Button29"]);
const Button29Cb = useButton29Cb()
const TextBox107Props = useStore((state)=>state["Home"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["Home"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Input7Props = useStore((state)=>state["Home"]["Input7"]);
const Input7IoProps = useIoStore((state)=>state["Home"]["Input7"]);
const Input7Cb = useInput7Cb()
const Input3Props = useStore((state)=>state["Home"]["Input3"]);
const Input3IoProps = useIoStore((state)=>state["Home"]["Input3"]);
const Input3Cb = useInput3Cb()
const TextBox103Props = useStore((state)=>state["Home"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["Home"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const Input4Props = useStore((state)=>state["Home"]["Input4"]);
const Input4IoProps = useIoStore((state)=>state["Home"]["Input4"]);
const Input4Cb = useInput4Cb()
const TextBox104Props = useStore((state)=>state["Home"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Home"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Input5Props = useStore((state)=>state["Home"]["Input5"]);
const Input5IoProps = useIoStore((state)=>state["Home"]["Input5"]);
const Input5Cb = useInput5Cb()
const TextBox105Props = useStore((state)=>state["Home"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Home"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Input6Props = useStore((state)=>state["Home"]["Input6"]);
const Input6IoProps = useIoStore((state)=>state["Home"]["Input6"]);
const Input6Cb = useInput6Cb()
const TextBox106Props = useStore((state)=>state["Home"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Home"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox108Props = useStore((state)=>state["Home"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["Home"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const Button31Props = useStore((state)=>state["Home"]["Button31"]);
const Button31IoProps = useIoStore((state)=>state["Home"]["Button31"]);
const Button31Cb = useButton31Cb()
const Image50Props = useStore((state)=>state["Home"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Home"]["Image50"]);
const Image50Cb = useImage50Cb()
const Image56Props = useStore((state)=>state["Home"]["Image56"]);
const Image56IoProps = useIoStore((state)=>state["Home"]["Image56"]);
const Image56Cb = useImage56Cb()
const Image57Props = useStore((state)=>state["Home"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Home"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Home"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Home"]["Image58"]);
const Image58Cb = useImage58Cb()
const Image59Props = useStore((state)=>state["Home"]["Image59"]);
const Image59IoProps = useIoStore((state)=>state["Home"]["Image59"]);
const Image59Cb = useImage59Cb()
const Image60Props = useStore((state)=>state["Home"]["Image60"]);
const Image60IoProps = useIoStore((state)=>state["Home"]["Image60"]);
const Image60Cb = useImage60Cb()
const TextBox110Props = useStore((state)=>state["Home"]["TextBox110"]);
const TextBox110IoProps = useIoStore((state)=>state["Home"]["TextBox110"]);
const TextBox110Cb = useTextBox110Cb()
const Image65Props = useStore((state)=>state["Home"]["Image65"]);
const Image65IoProps = useIoStore((state)=>state["Home"]["Image65"]);
const Image65Cb = useImage65Cb()
const Image66Props = useStore((state)=>state["Home"]["Image66"]);
const Image66IoProps = useIoStore((state)=>state["Home"]["Image66"]);
const Image66Cb = useImage66Cb()
const TextBox111Props = useStore((state)=>state["Home"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["Home"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()
const TextBox112Props = useStore((state)=>state["Home"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Home"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const TextBox113Props = useStore((state)=>state["Home"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Home"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Home"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Home"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Home"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Home"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Home"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Home"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox117Props = useStore((state)=>state["Home"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Home"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const TextBox118Props = useStore((state)=>state["Home"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Home"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Home"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Home"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const TextBox127Props = useStore((state)=>state["Home"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Home"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox121Props = useStore((state)=>state["Home"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Home"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const TextBox122Props = useStore((state)=>state["Home"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Home"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox123Props = useStore((state)=>state["Home"]["TextBox123"]);
const TextBox123IoProps = useIoStore((state)=>state["Home"]["TextBox123"]);
const TextBox123Cb = useTextBox123Cb()
const TextBox124Props = useStore((state)=>state["Home"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Home"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox125Props = useStore((state)=>state["Home"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Home"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Home"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Home"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox128Props = useStore((state)=>state["Home"]["TextBox128"]);
const TextBox128IoProps = useIoStore((state)=>state["Home"]["TextBox128"]);
const TextBox128Cb = useTextBox128Cb()
const TextBox109Props = useStore((state)=>state["Home"]["TextBox109"]);
const TextBox109IoProps = useIoStore((state)=>state["Home"]["TextBox109"]);
const TextBox109Cb = useTextBox109Cb()
const Image61Props = useStore((state)=>state["Home"]["Image61"]);
const Image61IoProps = useIoStore((state)=>state["Home"]["Image61"]);
const Image61Cb = useImage61Cb()
const Image62Props = useStore((state)=>state["Home"]["Image62"]);
const Image62IoProps = useIoStore((state)=>state["Home"]["Image62"]);
const Image62Cb = useImage62Cb()
const Image63Props = useStore((state)=>state["Home"]["Image63"]);
const Image63IoProps = useIoStore((state)=>state["Home"]["Image63"]);
const Image63Cb = useImage63Cb()
const Image64Props = useStore((state)=>state["Home"]["Image64"]);
const Image64IoProps = useIoStore((state)=>state["Home"]["Image64"]);
const Image64Cb = useImage64Cb()

  return (<>
  <Flex className="p-Home Navbar bpt" {...NavbarProps} {...NavbarCb} {...NavbarIoProps}>
<Flex className="p-Home left_align bpt" {...left_alignProps} {...left_alignCb} {...left_alignIoProps}>
<Flex className="p-Home Flex399 bpt" {...Flex399Props} {...Flex399Cb} {...Flex399IoProps}>
<Flex className="p-Home logo bpt" {...logoProps} {...logoCb} {...logoIoProps}>
<Image className="p-Home Image2 bpt" {...Image2Props} {...Image2Cb} {...Image2IoProps}/>
</Flex>
<TextBox className="p-Home title bpt" {...titleProps} {...titleCb} {...titleIoProps}/>
</Flex>
<Flex className="p-Home contents bpt" {...contentsProps} {...contentsCb} {...contentsIoProps}>
<Flex className="p-Home Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<TextBox className="p-Home TextBox7 bpt" {...TextBox7Props} {...TextBox7Cb} {...TextBox7IoProps}/>
</Flex>
<Flex className="p-Home Flex13 bpt" {...Flex13Props} {...Flex13Cb} {...Flex13IoProps}>
<TextBox className="p-Home TextBox8 bpt" {...TextBox8Props} {...TextBox8Cb} {...TextBox8IoProps}/>
</Flex>
<Flex className="p-Home Flex20 bpt" {...Flex20Props} {...Flex20Cb} {...Flex20IoProps}>
<TextBox className="p-Home TextBox9 bpt" {...TextBox9Props} {...TextBox9Cb} {...TextBox9IoProps}/>
</Flex>
<Flex className="p-Home Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<TextBox className="p-Home TextBox10 bpt" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
</Flex>
<Flex className="p-Home Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox className="p-Home TextBox11 bpt" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home right_align bpt" {...right_alignProps} {...right_alignCb} {...right_alignIoProps}>
<Flex className="p-Home button1 bpt" {...button1Props} {...button1Cb} {...button1IoProps}>
<Button className="p-Home Button1 bpt" {...Button1Props} {...Button1Cb} {...Button1IoProps}/>
</Flex>
<Flex className="p-Home button2 bpt" {...button2Props} {...button2Cb} {...button2IoProps}>
<Button className="p-Home Button2 bpt" {...Button2Props} {...Button2Cb} {...Button2IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Start bpt" {...StartProps} {...StartCb} {...StartIoProps}>
<Flex className="p-Home Flex29 bpt" {...Flex29Props} {...Flex29Cb} {...Flex29IoProps}>
<Flex className="p-Home Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex className="p-Home Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
<TextBox className="p-Home TextBox14 bpt" {...TextBox14Props} {...TextBox14Cb} {...TextBox14IoProps}/>
</Flex>
<TextBox className="p-Home TextBox13 bpt" {...TextBox13Props} {...TextBox13Cb} {...TextBox13IoProps}/>
<Flex className="p-Home Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex className="p-Home Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Button className="p-Home Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Flex>
<Flex className="p-Home Flex37 bpt" {...Flex37Props} {...Flex37Cb} {...Flex37IoProps}>
<Button className="p-Home Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex31 bpt" {...Flex31Props} {...Flex31Cb} {...Flex31IoProps}>
<Image className="p-Home Image9 bpt" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex30 bpt" {...Flex30Props} {...Flex30Cb} {...Flex30IoProps}/>
</Flex>
<Flex className="p-Home Order_from_fav_apps bpt" {...Order_from_fav_appsProps} {...Order_from_fav_appsCb} {...Order_from_fav_appsIoProps}>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox className="p-Home TextBox15 bpt" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex className="p-Home Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Flex className="p-Home Flex55 bpt" {...Flex55Props} {...Flex55Cb} {...Flex55IoProps}>
<Image className="p-Home Image10 bpt" {...Image10Props} {...Image10Cb} {...Image10IoProps}/>
</Flex>
<TextBox className="p-Home TextBox16 bpt" {...TextBox16Props} {...TextBox16Cb} {...TextBox16IoProps}/>
</Flex>
<Flex className="p-Home Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<TextBox className="p-Home TextBox17 bpt" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
</Flex>
<Flex className="p-Home Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<TextBox className="p-Home TextBox18 bpt" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
</Flex>
<Flex className="p-Home Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<TextBox className="p-Home TextBox19 bpt" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Browse_menu bpt" {...Browse_menuProps} {...Browse_menuCb} {...Browse_menuIoProps}>
<Flex className="p-Home Flex56 bpt" {...Flex56Props} {...Flex56Cb} {...Flex56IoProps}>
<Flex className="p-Home Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<TextBox className="p-Home TextBox20 bpt" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
</Flex>
<Flex className="p-Home Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Flex className="p-Home Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<Flex className="p-Home Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Image className="p-Home Image11 bpt" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Flex>
<Flex className="p-Home Flex73 bpt" {...Flex73Props} {...Flex73Cb} {...Flex73IoProps}>
<TextBox className="p-Home TextBox21 bpt" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
</Flex>
<Flex className="p-Home Flex74 bpt" {...Flex74Props} {...Flex74Cb} {...Flex74IoProps}>
<TextBox className="p-Home TextBox25 bpt" {...TextBox25Props} {...TextBox25Cb} {...TextBox25IoProps}/>
</Flex>
<Flex className="p-Home Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<Button className="p-Home Button14 bpt" {...Button14Props} {...Button14Cb} {...Button14IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<Flex className="p-Home Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Image className="p-Home Image12 bpt" {...Image12Props} {...Image12Cb} {...Image12IoProps}/>
</Flex>
<Flex className="p-Home Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<TextBox className="p-Home TextBox22 bpt" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
</Flex>
<Flex className="p-Home Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<TextBox className="p-Home TextBox26 bpt" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
</Flex>
<Flex className="p-Home Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Button className="p-Home Button15 bpt" {...Button15Props} {...Button15Cb} {...Button15IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<Flex className="p-Home Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Image className="p-Home Image13 bpt" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Flex>
<Flex className="p-Home Flex83 bpt" {...Flex83Props} {...Flex83Cb} {...Flex83IoProps}>
<TextBox className="p-Home TextBox23 bpt" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
</Flex>
<Flex className="p-Home Flex82 bpt" {...Flex82Props} {...Flex82Cb} {...Flex82IoProps}>
<TextBox className="p-Home TextBox27 bpt" {...TextBox27Props} {...TextBox27Cb} {...TextBox27IoProps}/>
</Flex>
<Flex className="p-Home Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Button className="p-Home Button16 bpt" {...Button16Props} {...Button16Cb} {...Button16IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex className="p-Home Flex89 bpt" {...Flex89Props} {...Flex89Cb} {...Flex89IoProps}>
<Image className="p-Home Image14 bpt" {...Image14Props} {...Image14Cb} {...Image14IoProps}/>
</Flex>
<Flex className="p-Home Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<TextBox className="p-Home TextBox24 bpt" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
</Flex>
<Flex className="p-Home Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<TextBox className="p-Home TextBox28 bpt" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Flex>
<Flex className="p-Home Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<Button className="p-Home Button17 bpt" {...Button17Props} {...Button17Cb} {...Button17IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<Flex className="p-Home Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Button className="p-Home Button11 bpt" {...Button11Props} {...Button11Cb} {...Button11IoProps}/>
</Flex>
<Flex className="p-Home Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Button className="p-Home Button12 bpt" {...Button12Props} {...Button12Cb} {...Button12IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home About_us bpt" {...About_usProps} {...About_usCb} {...About_usIoProps}>
<Flex className="p-Home Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<Image className="p-Home Image16 bpt" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<Flex className="p-Home Flex129 bpt" {...Flex129Props} {...Flex129Cb} {...Flex129IoProps}>
<Flex className="p-Home Flex140 bpt" {...Flex140Props} {...Flex140Cb} {...Flex140IoProps}>
<Flex className="p-Home Flex136 bpt" {...Flex136Props} {...Flex136Cb} {...Flex136IoProps}>
<TextBox className="p-Home TextBox44 bpt" {...TextBox44Props} {...TextBox44Cb} {...TextBox44IoProps}/>
</Flex>
<Flex className="p-Home Flex137 bpt" {...Flex137Props} {...Flex137Cb} {...Flex137IoProps}>
<Flex className="p-Home Flex130 bpt" {...Flex130Props} {...Flex130Cb} {...Flex130IoProps}>
<Image className="p-Home Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
</Flex>
<Flex className="p-Home Flex131 bpt" {...Flex131Props} {...Flex131Cb} {...Flex131IoProps}>
<TextBox className="p-Home TextBox41 bpt" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex138 bpt" {...Flex138Props} {...Flex138Cb} {...Flex138IoProps}>
<Flex className="p-Home Flex132 bpt" {...Flex132Props} {...Flex132Cb} {...Flex132IoProps}>
<Image className="p-Home Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex>
<Flex className="p-Home Flex133 bpt" {...Flex133Props} {...Flex133Cb} {...Flex133IoProps}>
<TextBox className="p-Home TextBox42 bpt" {...TextBox42Props} {...TextBox42Cb} {...TextBox42IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex139 bpt" {...Flex139Props} {...Flex139Cb} {...Flex139IoProps}>
<Flex className="p-Home Flex134 bpt" {...Flex134Props} {...Flex134Cb} {...Flex134IoProps}>
<Image className="p-Home Image25 bpt" {...Image25Props} {...Image25Cb} {...Image25IoProps}/>
</Flex>
<Flex className="p-Home Flex135 bpt" {...Flex135Props} {...Flex135Cb} {...Flex135IoProps}>
<TextBox className="p-Home TextBox43 bpt" {...TextBox43Props} {...TextBox43Cb} {...TextBox43IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Flex className="p-Home Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<TextBox className="p-Home TextBox29 bpt" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
</Flex>
<Flex className="p-Home Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Flex className="p-Home Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox className="p-Home TextBox30 bpt" {...TextBox30Props} {...TextBox30Cb} {...TextBox30IoProps}/>
</Flex>
<Flex className="p-Home Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox className="p-Home TextBox31 bpt" {...TextBox31Props} {...TextBox31Cb} {...TextBox31IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<Flex className="p-Home Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<Button className="p-Home Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
</Flex>
<Flex className="p-Home Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<Button className="p-Home Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Browse_our_menu bpt" {...Browse_our_menuProps} {...Browse_our_menuCb} {...Browse_our_menuIoProps}>
<Flex className="p-Home Flex144 bpt" {...Flex144Props} {...Flex144Cb} {...Flex144IoProps}>
<TextBox className="p-Home TextBox46 bpt" {...TextBox46Props} {...TextBox46Cb} {...TextBox46IoProps}/>
</Flex>
<Flex className="p-Home Flex145 bpt" {...Flex145Props} {...Flex145Cb} {...Flex145IoProps}>
<TextBox className="p-Home TextBox47 bpt" {...TextBox47Props} {...TextBox47Cb} {...TextBox47IoProps}/>
</Flex>
<Flex className="p-Home Flex146 bpt" {...Flex146Props} {...Flex146Cb} {...Flex146IoProps}>
<Flex className="p-Home Flex400 bpt" {...Flex400Props} {...Flex400Cb} {...Flex400IoProps}>
<Flex className="p-Home Flex402 bpt" {...Flex402Props} {...Flex402Cb} {...Flex402IoProps}>
<Flex className="p-Home Flex410 bpt" {...Flex410Props} {...Flex410Cb} {...Flex410IoProps}>
<Image className="p-Home Image67 bpt" {...Image67Props} {...Image67Cb} {...Image67IoProps}/>
<Flex className="p-Home Flex411 bpt" {...Flex411Props} {...Flex411Cb} {...Flex411IoProps}>
<TextBox className="p-Home TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex412 bpt" {...Flex412Props} {...Flex412Cb} {...Flex412IoProps}>
<TextBox className="p-Home TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Flex>
<Flex className="p-Home Flex413 bpt" {...Flex413Props} {...Flex413Cb} {...Flex413IoProps}>
<TextBox className="p-Home TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex403 bpt" {...Flex403Props} {...Flex403Cb} {...Flex403IoProps}>
<Flex className="p-Home Flex465 bpt" {...Flex465Props} {...Flex465Cb} {...Flex465IoProps}>
<Flex className="p-Home Flex464 bpt" {...Flex464Props} {...Flex464Cb} {...Flex464IoProps}>
<Image className="p-Home Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<Flex className="p-Home Flex461 bpt" {...Flex461Props} {...Flex461Cb} {...Flex461IoProps}>
<TextBox className="p-Home TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex463 bpt" {...Flex463Props} {...Flex463Cb} {...Flex463IoProps}>
<TextBox className="p-Home TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex>
<Flex className="p-Home Flex462 bpt" {...Flex462Props} {...Flex462Cb} {...Flex462IoProps}>
<TextBox className="p-Home TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex404 bpt" {...Flex404Props} {...Flex404Cb} {...Flex404IoProps}>
<Flex className="p-Home Flex470 bpt" {...Flex470Props} {...Flex470Cb} {...Flex470IoProps}>
<Flex className="p-Home Flex469 bpt" {...Flex469Props} {...Flex469Cb} {...Flex469IoProps}>
<Image className="p-Home Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<Flex className="p-Home Flex466 bpt" {...Flex466Props} {...Flex466Cb} {...Flex466IoProps}>
<TextBox className="p-Home TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex468 bpt" {...Flex468Props} {...Flex468Cb} {...Flex468IoProps}>
<TextBox className="p-Home TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
</Flex>
<Flex className="p-Home Flex467 bpt" {...Flex467Props} {...Flex467Cb} {...Flex467IoProps}>
<TextBox className="p-Home TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex405 bpt" {...Flex405Props} {...Flex405Cb} {...Flex405IoProps}>
<Flex className="p-Home Flex475 bpt" {...Flex475Props} {...Flex475Cb} {...Flex475IoProps}>
<Flex className="p-Home Flex474 bpt" {...Flex474Props} {...Flex474Cb} {...Flex474IoProps}>
<Image className="p-Home Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<Flex className="p-Home Flex471 bpt" {...Flex471Props} {...Flex471Cb} {...Flex471IoProps}>
<TextBox className="p-Home TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex473 bpt" {...Flex473Props} {...Flex473Cb} {...Flex473IoProps}>
<TextBox className="p-Home TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex>
<Flex className="p-Home Flex472 bpt" {...Flex472Props} {...Flex472Cb} {...Flex472IoProps}>
<TextBox className="p-Home TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex401 bpt" {...Flex401Props} {...Flex401Cb} {...Flex401IoProps}>
<Flex className="p-Home Flex406 bpt" {...Flex406Props} {...Flex406Cb} {...Flex406IoProps}>
<Flex className="p-Home Flex480 bpt" {...Flex480Props} {...Flex480Cb} {...Flex480IoProps}>
<Flex className="p-Home Flex479 bpt" {...Flex479Props} {...Flex479Cb} {...Flex479IoProps}>
<Image className="p-Home Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
<Flex className="p-Home Flex476 bpt" {...Flex476Props} {...Flex476Cb} {...Flex476IoProps}>
<TextBox className="p-Home TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex478 bpt" {...Flex478Props} {...Flex478Cb} {...Flex478IoProps}>
<TextBox className="p-Home TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex>
<Flex className="p-Home Flex477 bpt" {...Flex477Props} {...Flex477Cb} {...Flex477IoProps}>
<TextBox className="p-Home TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex407 bpt" {...Flex407Props} {...Flex407Cb} {...Flex407IoProps}>
<Flex className="p-Home Flex485 bpt" {...Flex485Props} {...Flex485Cb} {...Flex485IoProps}>
<Flex className="p-Home Flex484 bpt" {...Flex484Props} {...Flex484Cb} {...Flex484IoProps}>
<Image className="p-Home Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
<Flex className="p-Home Flex481 bpt" {...Flex481Props} {...Flex481Cb} {...Flex481IoProps}>
<TextBox className="p-Home TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex483 bpt" {...Flex483Props} {...Flex483Cb} {...Flex483IoProps}>
<TextBox className="p-Home TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Flex>
<Flex className="p-Home Flex482 bpt" {...Flex482Props} {...Flex482Cb} {...Flex482IoProps}>
<TextBox className="p-Home TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex408 bpt" {...Flex408Props} {...Flex408Cb} {...Flex408IoProps}>
<Flex className="p-Home Flex490 bpt" {...Flex490Props} {...Flex490Cb} {...Flex490IoProps}>
<Flex className="p-Home Flex489 bpt" {...Flex489Props} {...Flex489Cb} {...Flex489IoProps}>
<Image className="p-Home Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<Flex className="p-Home Flex486 bpt" {...Flex486Props} {...Flex486Cb} {...Flex486IoProps}>
<TextBox className="p-Home TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex488 bpt" {...Flex488Props} {...Flex488Cb} {...Flex488IoProps}>
<TextBox className="p-Home TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex>
<Flex className="p-Home Flex487 bpt" {...Flex487Props} {...Flex487Cb} {...Flex487IoProps}>
<TextBox className="p-Home TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex409 bpt" {...Flex409Props} {...Flex409Cb} {...Flex409IoProps}>
<Flex className="p-Home Flex495 bpt" {...Flex495Props} {...Flex495Cb} {...Flex495IoProps}>
<Flex className="p-Home Flex494 bpt" {...Flex494Props} {...Flex494Cb} {...Flex494IoProps}>
<Image className="p-Home Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
<Flex className="p-Home Flex491 bpt" {...Flex491Props} {...Flex491Cb} {...Flex491IoProps}>
<TextBox className="p-Home TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex493 bpt" {...Flex493Props} {...Flex493Cb} {...Flex493IoProps}>
<TextBox className="p-Home TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
</Flex>
<Flex className="p-Home Flex492 bpt" {...Flex492Props} {...Flex492Cb} {...Flex492IoProps}>
<TextBox className="p-Home TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex148 bpt" {...Flex148Props} {...Flex148Cb} {...Flex148IoProps}>
<Flex className="p-Home Flex149 bpt" {...Flex149Props} {...Flex149Cb} {...Flex149IoProps}>
<Button className="p-Home Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Flex>
<Flex className="p-Home Flex150 bpt" {...Flex150Props} {...Flex150Cb} {...Flex150IoProps}>
<Button className="p-Home Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Most_delicious_burger bpt" {...Most_delicious_burgerProps} {...Most_delicious_burgerCb} {...Most_delicious_burgerIoProps}>
<Flex className="p-Home Flex153 bpt" {...Flex153Props} {...Flex153Cb} {...Flex153IoProps}>
<Flex className="p-Home Flex158 bpt" {...Flex158Props} {...Flex158Cb} {...Flex158IoProps}>
<TextBox className="p-Home TextBox48 bpt" {...TextBox48Props} {...TextBox48Cb} {...TextBox48IoProps}/>
</Flex>
<Flex className="p-Home Flex159 bpt" {...Flex159Props} {...Flex159Cb} {...Flex159IoProps}>
<TextBox className="p-Home TextBox49 bpt" {...TextBox49Props} {...TextBox49Cb} {...TextBox49IoProps}/>
</Flex>
<Flex className="p-Home Flex156 bpt" {...Flex156Props} {...Flex156Cb} {...Flex156IoProps}>
<Flex className="p-Home Flex157 bpt" {...Flex157Props} {...Flex157Cb} {...Flex157IoProps}>
<Button className="p-Home Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
</Flex>
<Flex className="p-Home Flex155 bpt" {...Flex155Props} {...Flex155Cb} {...Flex155IoProps}>
<Button className="p-Home Button23 bpt" {...Button23Props} {...Button23Cb} {...Button23IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex154 bpt" {...Flex154Props} {...Flex154Cb} {...Flex154IoProps}>
<Image className="p-Home Image27 bpt" {...Image27Props} {...Image27Cb} {...Image27IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home What_our_clients_say bpt" {...What_our_clients_sayProps} {...What_our_clients_sayCb} {...What_our_clients_sayIoProps}>
<Flex className="p-Home Flex161 bpt" {...Flex161Props} {...Flex161Cb} {...Flex161IoProps}>
<TextBox className="p-Home TextBox50 bpt" {...TextBox50Props} {...TextBox50Cb} {...TextBox50IoProps}/>
</Flex>
<Flex className="p-Home Flex162 bpt" {...Flex162Props} {...Flex162Cb} {...Flex162IoProps}>
<TextBox className="p-Home TextBox51 bpt" {...TextBox51Props} {...TextBox51Cb} {...TextBox51IoProps}/>
</Flex>
<Flex className="p-Home Flex163 bpt" {...Flex163Props} {...Flex163Cb} {...Flex163IoProps}>
<TextBox className="p-Home TextBox52 bpt" {...TextBox52Props} {...TextBox52Cb} {...TextBox52IoProps}/>
</Flex>
<Flex className="p-Home Flex164 bpt" {...Flex164Props} {...Flex164Cb} {...Flex164IoProps}>
<Flex className="p-Home Flex168 bpt" {...Flex168Props} {...Flex168Cb} {...Flex168IoProps}>
<Image className="p-Home Image28 bpt" {...Image28Props} {...Image28Cb} {...Image28IoProps}/>
</Flex>
<Flex className="p-Home Flex169 bpt" {...Flex169Props} {...Flex169Cb} {...Flex169IoProps}>
<Flex className="p-Home Flex171 bpt" {...Flex171Props} {...Flex171Cb} {...Flex171IoProps}>
<Image className="p-Home Image30 bpt" {...Image30Props} {...Image30Cb} {...Image30IoProps}/>
</Flex>
<Flex className="p-Home Flex172 bpt" {...Flex172Props} {...Flex172Cb} {...Flex172IoProps}>
<TextBox className="p-Home TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
</Flex>
<Flex className="p-Home Flex173 bpt" {...Flex173Props} {...Flex173Cb} {...Flex173IoProps}>
<TextBox className="p-Home TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
</Flex>
<Flex className="p-Home Flex174 bpt" {...Flex174Props} {...Flex174Cb} {...Flex174IoProps}>
<Flex className="p-Home Flex175 bpt" {...Flex175Props} {...Flex175Cb} {...Flex175IoProps}>
<Image className="p-Home Image31 bpt" {...Image31Props} {...Image31Cb} {...Image31IoProps}/>
</Flex>
<Flex className="p-Home Flex176 bpt" {...Flex176Props} {...Flex176Cb} {...Flex176IoProps}>
<Flex className="p-Home Flex178 bpt" {...Flex178Props} {...Flex178Cb} {...Flex178IoProps}>
<TextBox className="p-Home TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
</Flex>
<Flex className="p-Home Flex179 bpt" {...Flex179Props} {...Flex179Cb} {...Flex179IoProps}>
<TextBox className="p-Home TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex170 bpt" {...Flex170Props} {...Flex170Cb} {...Flex170IoProps}>
<Image className="p-Home Image29 bpt" {...Image29Props} {...Image29Cb} {...Image29IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex165 bpt" {...Flex165Props} {...Flex165Cb} {...Flex165IoProps}>
<Flex className="p-Home Flex166 bpt" {...Flex166Props} {...Flex166Cb} {...Flex166IoProps}>
<Button className="p-Home Button24 bpt" {...Button24Props} {...Button24Cb} {...Button24IoProps}/>
</Flex>
<Flex className="p-Home Flex167 bpt" {...Flex167Props} {...Flex167Cb} {...Flex167IoProps}>
<Button className="p-Home Button25 bpt" {...Button25Props} {...Button25Cb} {...Button25IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Our_articles bpt" {...Our_articlesProps} {...Our_articlesCb} {...Our_articlesIoProps}>
<Flex className="p-Home Flex181 bpt" {...Flex181Props} {...Flex181Cb} {...Flex181IoProps}>
<Flex className="p-Home Flex183 bpt" {...Flex183Props} {...Flex183Cb} {...Flex183IoProps}>
<TextBox className="p-Home TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
</Flex>
<Flex className="p-Home Flex184 bpt" {...Flex184Props} {...Flex184Cb} {...Flex184IoProps}>
<Button className="p-Home Button26 bpt" {...Button26Props} {...Button26Cb} {...Button26IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex182 bpt" {...Flex182Props} {...Flex182Cb} {...Flex182IoProps}>
<Flex className="p-Home Flex185 bpt" {...Flex185Props} {...Flex185Cb} {...Flex185IoProps}>
<Flex className="p-Home Flex187 bpt" {...Flex187Props} {...Flex187Cb} {...Flex187IoProps}>
<Image className="p-Home Image32 bpt" {...Image32Props} {...Image32Cb} {...Image32IoProps}/>
</Flex>
<Flex className="p-Home Flex188 bpt" {...Flex188Props} {...Flex188Cb} {...Flex188IoProps}>
<Flex className="p-Home Flex189 bpt" {...Flex189Props} {...Flex189Cb} {...Flex189IoProps}>
<TextBox className="p-Home TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
</Flex>
<Flex className="p-Home Flex190 bpt" {...Flex190Props} {...Flex190Cb} {...Flex190IoProps}>
<TextBox className="p-Home TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
</Flex>
<Flex className="p-Home Flex191 bpt" {...Flex191Props} {...Flex191Cb} {...Flex191IoProps}>
<TextBox className="p-Home TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex186 bpt" {...Flex186Props} {...Flex186Cb} {...Flex186IoProps}>
<Flex className="p-Home Flex194 bpt" {...Flex194Props} {...Flex194Cb} {...Flex194IoProps}>
<Flex className="p-Home Flex196 bpt" {...Flex196Props} {...Flex196Cb} {...Flex196IoProps}>
<Flex className="p-Home Flex241 bpt" {...Flex241Props} {...Flex241Cb} {...Flex241IoProps}>
<Flex className="p-Home Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Image className="p-Home Image39 bpt" {...Image39Props} {...Image39Cb} {...Image39IoProps}/>
</Flex>
<Flex className="p-Home Flex239 bpt" {...Flex239Props} {...Flex239Cb} {...Flex239IoProps}>
<Flex className="p-Home Flex238 bpt" {...Flex238Props} {...Flex238Cb} {...Flex238IoProps}>
<TextBox className="p-Home TextBox81 bpt" {...TextBox81Props} {...TextBox81Cb} {...TextBox81IoProps}/>
</Flex>
<Flex className="p-Home Flex237 bpt" {...Flex237Props} {...Flex237Cb} {...Flex237IoProps}>
<TextBox className="p-Home TextBox80 bpt" {...TextBox80Props} {...TextBox80Cb} {...TextBox80IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex197 bpt" {...Flex197Props} {...Flex197Cb} {...Flex197IoProps}>
<Flex className="p-Home Flex252 bpt" {...Flex252Props} {...Flex252Cb} {...Flex252IoProps}>
<Flex className="p-Home Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Image className="p-Home Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
</Flex>
<Flex className="p-Home Flex251 bpt" {...Flex251Props} {...Flex251Cb} {...Flex251IoProps}>
<Flex className="p-Home Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<TextBox className="p-Home TextBox85 bpt" {...TextBox85Props} {...TextBox85Cb} {...TextBox85IoProps}/>
</Flex>
<Flex className="p-Home Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<TextBox className="p-Home TextBox86 bpt" {...TextBox86Props} {...TextBox86Cb} {...TextBox86IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex195 bpt" {...Flex195Props} {...Flex195Cb} {...Flex195IoProps}>
<Flex className="p-Home Flex198 bpt" {...Flex198Props} {...Flex198Cb} {...Flex198IoProps}>
<Flex className="p-Home Flex257 bpt" {...Flex257Props} {...Flex257Cb} {...Flex257IoProps}>
<Flex className="p-Home Flex255 bpt" {...Flex255Props} {...Flex255Cb} {...Flex255IoProps}>
<Image className="p-Home Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
</Flex>
<Flex className="p-Home Flex256 bpt" {...Flex256Props} {...Flex256Cb} {...Flex256IoProps}>
<Flex className="p-Home Flex253 bpt" {...Flex253Props} {...Flex253Cb} {...Flex253IoProps}>
<TextBox className="p-Home TextBox87 bpt" {...TextBox87Props} {...TextBox87Cb} {...TextBox87IoProps}/>
</Flex>
<Flex className="p-Home Flex254 bpt" {...Flex254Props} {...Flex254Cb} {...Flex254IoProps}>
<TextBox className="p-Home TextBox88 bpt" {...TextBox88Props} {...TextBox88Cb} {...TextBox88IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex199 bpt" {...Flex199Props} {...Flex199Cb} {...Flex199IoProps}>
<Flex className="p-Home Flex262 bpt" {...Flex262Props} {...Flex262Cb} {...Flex262IoProps}>
<Flex className="p-Home Flex260 bpt" {...Flex260Props} {...Flex260Cb} {...Flex260IoProps}>
<Image className="p-Home Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
</Flex>
<Flex className="p-Home Flex261 bpt" {...Flex261Props} {...Flex261Cb} {...Flex261IoProps}>
<Flex className="p-Home Flex258 bpt" {...Flex258Props} {...Flex258Cb} {...Flex258IoProps}>
<TextBox className="p-Home TextBox89 bpt" {...TextBox89Props} {...TextBox89Cb} {...TextBox89IoProps}/>
</Flex>
<Flex className="p-Home Flex259 bpt" {...Flex259Props} {...Flex259Cb} {...Flex259IoProps}>
<TextBox className="p-Home TextBox90 bpt" {...TextBox90Props} {...TextBox90Cb} {...TextBox90IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Book_your_table_now bpt" {...Book_your_table_nowProps} {...Book_your_table_nowCb} {...Book_your_table_nowIoProps}>
<Flex className="p-Home Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Flex className="p-Home Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Flex className="p-Home Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox className="p-Home TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Flex>
<Flex className="p-Home Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<TextBox className="p-Home TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Flex>
<Flex className="p-Home Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<Flex className="p-Home Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Image className="p-Home Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex>
<Flex className="p-Home Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<TextBox className="p-Home TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Flex className="p-Home Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<Image className="p-Home Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
</Flex>
<Flex className="p-Home Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<TextBox className="p-Home TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Flex className="p-Home Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<Image className="p-Home Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
</Flex>
<Flex className="p-Home Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<TextBox className="p-Home TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Flex className="p-Home Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<Flex className="p-Home Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Flex className="p-Home Flex295 bpt" {...Flex295Props} {...Flex295Cb} {...Flex295IoProps}>
<Flex className="p-Home Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<TextBox className="p-Home TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Flex>
<Flex className="p-Home Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<Input className="p-Home Input1 bpt" {...Input1Props} {...Input1Cb} {...Input1IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex296 bpt" {...Flex296Props} {...Flex296Cb} {...Flex296IoProps}>
<Flex className="p-Home Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<Flex className="p-Home Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<Flex className="p-Home Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<TextBox className="p-Home TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<Input className="p-Home Input2 bpt" {...Input2Props} {...Input2Cb} {...Input2IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Flex className="p-Home Flex319 bpt" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<Flex className="p-Home Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<TextBox className="p-Home TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex>
<Flex className="p-Home Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Input className="p-Home Input4 bpt" {...Input4Props} {...Input4Cb} {...Input4IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Flex className="p-Home Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Flex className="p-Home Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<Flex className="p-Home Flex312 bpt" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<TextBox className="p-Home TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Input className="p-Home Input3 bpt" {...Input3Props} {...Input3Cb} {...Input3IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex329 bpt" {...Flex329Props} {...Flex329Cb} {...Flex329IoProps}>
<Flex className="p-Home Flex328 bpt" {...Flex328Props} {...Flex328Cb} {...Flex328IoProps}>
<Flex className="p-Home Flex326 bpt" {...Flex326Props} {...Flex326Cb} {...Flex326IoProps}>
<TextBox className="p-Home TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
</Flex>
<Flex className="p-Home Flex325 bpt" {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}>
<Input className="p-Home Input6 bpt" {...Input6Props} {...Input6Cb} {...Input6IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex327 bpt" {...Flex327Props} {...Flex327Cb} {...Flex327IoProps}>
<Flex className="p-Home Flex324 bpt" {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Flex className="p-Home Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex className="p-Home Flex321 bpt" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<TextBox className="p-Home TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex323 bpt" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Input className="p-Home Input5 bpt" {...Input5Props} {...Input5Cb} {...Input5IoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex332 bpt" {...Flex332Props} {...Flex332Cb} {...Flex332IoProps}>
<Flex className="p-Home Flex330 bpt" {...Flex330Props} {...Flex330Cb} {...Flex330IoProps}>
<TextBox className="p-Home TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
</Flex>
<Flex className="p-Home Flex331 bpt" {...Flex331Props} {...Flex331Cb} {...Flex331IoProps}>
<Input className="p-Home Input7 bpt" {...Input7Props} {...Input7Cb} {...Input7IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex304 bpt" {...Flex304Props} {...Flex304Cb} {...Flex304IoProps}>
<Button className="p-Home Button29 bpt" {...Button29Props} {...Button29Cb} {...Button29IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Follow_us_on_Instagram bpt" {...Follow_us_on_InstagramProps} {...Follow_us_on_InstagramCb} {...Follow_us_on_InstagramIoProps}>
<Flex className="p-Home Flex334 bpt" {...Flex334Props} {...Flex334Cb} {...Flex334IoProps}>
<Flex className="p-Home Flex336 bpt" {...Flex336Props} {...Flex336Cb} {...Flex336IoProps}>
<TextBox className="p-Home TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
</Flex>
<Flex className="p-Home Flex337 bpt" {...Flex337Props} {...Flex337Cb} {...Flex337IoProps}>
<Button className="p-Home Button31 bpt" {...Button31Props} {...Button31Cb} {...Button31IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex335 bpt" {...Flex335Props} {...Flex335Cb} {...Flex335IoProps}>
<Flex className="p-Home Flex338 bpt" {...Flex338Props} {...Flex338Cb} {...Flex338IoProps}>
<Image className="p-Home Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
</Flex>
<Flex className="p-Home Flex339 bpt" {...Flex339Props} {...Flex339Cb} {...Flex339IoProps}>
<Image className="p-Home Image56 bpt" {...Image56Props} {...Image56Cb} {...Image56IoProps}/>
</Flex>
<Flex className="p-Home Flex340 bpt" {...Flex340Props} {...Flex340Cb} {...Flex340IoProps}>
<Flex className="p-Home Flex343 bpt" {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<Flex className="p-Home Flex345 bpt" {...Flex345Props} {...Flex345Cb} {...Flex345IoProps}>
<Image className="p-Home Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
</Flex>
<Flex className="p-Home Flex346 bpt" {...Flex346Props} {...Flex346Cb} {...Flex346IoProps}>
<Image className="p-Home Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex344 bpt" {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<Flex className="p-Home Flex347 bpt" {...Flex347Props} {...Flex347Cb} {...Flex347IoProps}>
<Image className="p-Home Image59 bpt" {...Image59Props} {...Image59Cb} {...Image59IoProps}/>
</Flex>
<Flex className="p-Home Flex348 bpt" {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<Image className="p-Home Image60 bpt" {...Image60Props} {...Image60Cb} {...Image60IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home End bpt" {...EndProps} {...EndCb} {...EndIoProps}>
<Flex className="p-Home Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<Flex className="p-Home Flex355 bpt" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<Flex className="p-Home Flex365 bpt" {...Flex365Props} {...Flex365Cb} {...Flex365IoProps}>
<Image className="p-Home Image66 bpt" {...Image66Props} {...Image66Cb} {...Image66IoProps}/>
</Flex>
<Flex className="p-Home Flex366 bpt" {...Flex366Props} {...Flex366Cb} {...Flex366IoProps}>
<TextBox className="p-Home TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<TextBox className="p-Home TextBox110 bpt" {...TextBox110Props} {...TextBox110Cb} {...TextBox110IoProps}/>
</Flex>
<Flex className="p-Home Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Image className="p-Home Image65 bpt" {...Image65Props} {...Image65Cb} {...Image65IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<Flex className="p-Home Flex367 bpt" {...Flex367Props} {...Flex367Cb} {...Flex367IoProps}>
<Flex className="p-Home Flex369 bpt" {...Flex369Props} {...Flex369Cb} {...Flex369IoProps}>
<TextBox className="p-Home TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Flex>
<Flex className="p-Home Flex370 bpt" {...Flex370Props} {...Flex370Cb} {...Flex370IoProps}>
<TextBox className="p-Home TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex368 bpt" {...Flex368Props} {...Flex368Cb} {...Flex368IoProps}>
<Flex className="p-Home Flex382 bpt" {...Flex382Props} {...Flex382Cb} {...Flex382IoProps}>
<Flex className="p-Home Flex384 bpt" {...Flex384Props} {...Flex384Cb} {...Flex384IoProps}>
<TextBox className="p-Home TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
</Flex>
<Flex className="p-Home Flex385 bpt" {...Flex385Props} {...Flex385Cb} {...Flex385IoProps}>
<TextBox className="p-Home TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
</Flex>
<Flex className="p-Home Flex386 bpt" {...Flex386Props} {...Flex386Cb} {...Flex386IoProps}>
<TextBox className="p-Home TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex>
<Flex className="p-Home Flex387 bpt" {...Flex387Props} {...Flex387Cb} {...Flex387IoProps}>
<TextBox className="p-Home TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
</Flex>
<Flex className="p-Home Flex388 bpt" {...Flex388Props} {...Flex388Cb} {...Flex388IoProps}>
<TextBox className="p-Home TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
</Flex>
<Flex className="p-Home Flex389 bpt" {...Flex389Props} {...Flex389Cb} {...Flex389IoProps}>
<TextBox className="p-Home TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
</Flex>
<Flex className="p-Home Flex390 bpt" {...Flex390Props} {...Flex390Cb} {...Flex390IoProps}>
<TextBox className="p-Home TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex383 bpt" {...Flex383Props} {...Flex383Cb} {...Flex383IoProps}>
<Flex className="p-Home Flex391 bpt" {...Flex391Props} {...Flex391Cb} {...Flex391IoProps}>
<TextBox className="p-Home TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex>
<Flex className="p-Home Flex392 bpt" {...Flex392Props} {...Flex392Cb} {...Flex392IoProps}>
<TextBox className="p-Home TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
</Flex>
<Flex className="p-Home Flex393 bpt" {...Flex393Props} {...Flex393Cb} {...Flex393IoProps}>
<TextBox className="p-Home TextBox123 bpt" {...TextBox123Props} {...TextBox123Cb} {...TextBox123IoProps}/>
</Flex>
<Flex className="p-Home Flex394 bpt" {...Flex394Props} {...Flex394Cb} {...Flex394IoProps}>
<TextBox className="p-Home TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
</Flex>
<Flex className="p-Home Flex395 bpt" {...Flex395Props} {...Flex395Cb} {...Flex395IoProps}>
<TextBox className="p-Home TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex>
<Flex className="p-Home Flex396 bpt" {...Flex396Props} {...Flex396Cb} {...Flex396IoProps}>
<TextBox className="p-Home TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Flex>
<Flex className="p-Home Flex397 bpt" {...Flex397Props} {...Flex397Cb} {...Flex397IoProps}>
<TextBox className="p-Home TextBox128 bpt" {...TextBox128Props} {...TextBox128Cb} {...TextBox128IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<Flex className="p-Home Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<TextBox className="p-Home TextBox109 bpt" {...TextBox109Props} {...TextBox109Cb} {...TextBox109IoProps}/>
</Flex>
<Flex className="p-Home Flex357 bpt" {...Flex357Props} {...Flex357Cb} {...Flex357IoProps}>
<Flex className="p-Home Flex364 bpt" {...Flex364Props} {...Flex364Cb} {...Flex364IoProps}>
<Flex className="p-Home Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<Flex className="p-Home Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<Image className="p-Home Image64 bpt" {...Image64Props} {...Image64Cb} {...Image64IoProps}/>
</Flex>
<Flex className="p-Home Flex360 bpt" {...Flex360Props} {...Flex360Cb} {...Flex360IoProps}>
<Image className="p-Home Image63 bpt" {...Image63Props} {...Image63Cb} {...Image63IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<Flex className="p-Home Flex359 bpt" {...Flex359Props} {...Flex359Cb} {...Flex359IoProps}>
<Image className="p-Home Image62 bpt" {...Image62Props} {...Image62Cb} {...Image62IoProps}/>
</Flex>
<Flex className="p-Home Flex358 bpt" {...Flex358Props} {...Flex358Cb} {...Flex358IoProps}>
<Image className="p-Home Image61 bpt" {...Image61Props} {...Image61Cb} {...Image61IoProps}/>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
</Flex>
  </>);
}
