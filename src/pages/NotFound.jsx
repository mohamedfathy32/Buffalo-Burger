import { Link } from "react-router-dom";

export default function NotFound() {
    return <>
        <div className=" bg-[#1c1c1b] relative z-10">
            <div className="container flex flex-col-reverse lg:flex-row justify-between items-center py-12">
                <div className="mx-12">
                    <h4 className="mb-3 text-4xl md:text-5xl font-bold w-[250px]  smd:w-max md:!w-[500px] leading-tight text-orange-600 uppercase">
                        We couldn’t find a page with this link.
                    </h4>
                    <p className="mb-8 text-2xl md:w-max text-white">But we found good offers and delicious sandwiches.</p>
                    <Link className="uppercase hover:bg-orange-700 text-base inline-block rounded-lg bg-orange-600 border border-orange-600 px-8 py-3 text-center font-semibold  text-white w-full" to="/">Discover our menu</Link>
                </div>
                <div className=" w-[288px] h-[276px] md:w-[500px] md:h-[500px]  md:mr-6">
                    <div className="w-100 h-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 720 720"
                            width="720"
                            height="720"
                            preserveAspectRatio="xMidYMid slice"
                            style={{ width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)', contentVisibility: 'visible' }}
                        >
                            <defs>
                                <clipPath id="__lottie_element_35">
                                    <rect width="720" height="720" x="0" y="0"></rect>
                                </clipPath>
                            </defs>
                            <g clipPath="url(#__lottie_element_35)">
                                <g transform="matrix(0.9934637546539307,0.04016632214188576,-0.03993601351976395,0.999193012714386,16.730010986328125,-14.16937255859375)" opacity='1' className="block">
                                    <g opacity='1' transform="matrix(1,0,0,1,332.8429870605469,325.59698486328125)">
                                        <path fill="rgb(255,95,0)" fillOpacity="1" d=" M211.59800720214844,-9.612000465393066 C211.59800720214844,-9.612000465393066 211.59800720214844,-9.720999717712402 211.59800720214844,-9.720999717712402 C211.5279998779297,-14.119000434875488 211.13099670410156,-18.06999969482422 210.43600463867188,-21.61400032043457 C210.43600463867188,-21.618999481201172 210.43600463867188,-21.628999710083008 210.43099975585938,-21.634000778198242 C210.42999267578125,-21.642000198364258 210.42799377441406,-21.64900016784668 210.427001953125,-21.6560001373291 C208.5290069580078,-35.22600173950195 204.61500549316406,-46.25299835205078 196.5229949951172,-54.082000732421875 C191.6739959716797,-58.762001037597656 185.64300537109375,-62.54899978637695 180.197998046875,-67.19999694824219 C164.12600708007812,-80.94999694824219 151.08599853515625,-97.1709976196289 134.73599243164062,-110.5479965209961 C124.03900146484375,-119.27899932861328 111.48600006103516,-128.0050048828125 97.65799713134766,-132.5709991455078 C89.26399993896484,-135.3560028076172 81.73400115966797,-136.36399841308594 75.18199920654297,-139.32699584960938 C68.81900024414062,-142.23599243164062 62.72800064086914,-145.98300170898438 57.70000076293945,-151.26499938964844 C52.80099868774414,-156.3719940185547 50.027000427246094,-162.93899536132812 46.34400177001953,-169.55599975585938 C42.71500015258789,-176.09300231933594 39.071998596191406,-182.80299377441406 35.582000732421875,-188.73500061035156 C28.236000061035156,-201.20899963378906 -9.020999908447266,-224.8159942626953 -27.38599967956543,-226.54800415039062 C-27.38599967956543,-226.54800415039062 -27.38599967956543,-226.8260040283203 -27.38599967956543,-226.8260040283203 C-30.360000610351562,-226.78599548339844 -33.362998962402344,-226.74200439453125 -36.34600067138672,-226.677001953125 C-45.9900016784668,-225.093994140625 -54.571998596191406,-221.24200439453125 -60.30500030517578,-216.13400268554688 C-66.38099670410156,-210.70899963378906 -108.75,-169.52099609375 -112.28399658203125,-152.78799438476562 C-107.95600128173828,-155.23500061035156 -102.02899932861328,-158.6649932861328 -94.1969985961914,-159.3699951171875 C-78.3280029296875,-160.8000030517578 -60.20600128173828,-158.91799926757812 -54.680999755859375,-150.20199584960938 C-60.84600067138672,-152.70899963378906 -69.3489990234375,-154.16799926757812 -78.01499938964844,-153.97999572753906 C-80.36299896240234,-153.9199981689453 -82.92900085449219,-152.8780059814453 -85.14800262451172,-152.9720001220703 C-86.87100219726562,-153.02200317382812 -88.42400360107422,-154.04400634765625 -90.24099731445312,-154.07400512695312 C-94.97100067138672,-154.13299560546875 -98.51499938964844,-152.197998046875 -101.20500183105469,-149.41299438476562 C-108.27899932861328,-151.26499938964844 -113.64900207519531,-147.2239990234375 -116.2750015258789,-142.89100646972656 C-124.65899658203125,-141.8979949951172 -128.42100524902344,-136.46299743652344 -130.0540008544922,-128.92799377441406 C-141.45599365234375,-126.97699737548828 -150.7969970703125,-122.98699951171875 -152.09300231933594,-111.26300048828125 C-161.0469970703125,-108.2249984741211 -167.21200561523438,-99.53800201416016 -166.02099609375,-88.65799713134766 C-173.31199645996094,-85.17900085449219 -170.33399963378906,-67.3489990234375 -165.906005859375,-63.91400146484375 C-190.6699981689453,-65.77100372314453 -202.24000549316406,-81.302001953125 -207.71499633789062,-103.13200378417969 C-208.39500427246094,-84.82599639892578 -203.82400512695312,-68.43099975585938 -197.072998046875,-56.22600173950195 C-190.3719940185547,-44.10499954223633 -180.46499633789062,-33.30400085449219 -164.1540069580078,-31.44700050354004 C-168.81500244140625,-29.858999252319336 -174.18099975585938,-28.597999572753906 -179.91400146484375,-28.493999481201172 C-184.5050048828125,-28.399999618530273 -188.4510040283203,-29.392000198364258 -192.11900329589844,-27.988000869750977 C-203.12899780273438,-23.7189998626709 -205.06500244140625,-10.625 -212.23699951171875,-2.2909998893737793 C-212.23699951171875,-2.2909998893737793 -212.23699951171875,-1.9930000305175781 -212.23699951171875,-1.9930000305175781 C-201.08900451660156,-1.2239999771118164 -186.8179931640625,1.2730000019073486 -175.22799682617188,0.3449999988079071 C-165.19200134277344,-0.4490000009536743 -160.9530029296875,-7.215000152587891 -152.70799255371094,-8.678999900817871 C-146.35499572753906,-5.809999942779541 -152.67300415039062,5.501999855041504 -147.6009979248047,10.317000389099121 C-134.0050048828125,9.329000473022461 -127.73600006103516,16.030000686645508 -124.97100067138672,26.309999465942383 C-128.66400146484375,27.32200050354004 -132.88299560546875,27.51099967956543 -136.31300354003906,26.204999923706055 C-138.13499450683594,25.510000228881836 -140.13499450683594,23.356000900268555 -140.83999633789062,23.599000930786133 C-137.71800231933594,37.98400115966797 -132.531005859375,50.55699920654297 -125.01100158691406,60.007999420166016 C-122.33100128173828,63.35300064086914 -118.64299774169922,66.12799835205078 -116.7959976196289,69.40399932861328 C-113.94200134277344,74.41699981689453 -114.92500305175781,82.10600280761719 -114.35900115966797,88.73699951171875 C-113.3270034790039,101.0270004272461 -110.2239990234375,109.70899963378906 -100.23300170898438,112.64700317382812 C-98.13300323486328,101.56800079345703 -108.70999908447266,97.28500366210938 -104.2229995727539,88.56800079345703 C-103.50900268554688,95.29399871826172 -97.82499694824219,96.63400268554688 -95.68099975585938,100.6449966430664 C-93.76499938964844,104.12899780273438 -95.29399871826172,106.70099639892578 -94.00299835205078,111.04900360107422 C-92.04299926757812,117.63099670410156 -77.697998046875,114.68199920654297 -68.2969970703125,115.0739974975586 C-65.22899627685547,115.21800231933594 -61.630001068115234,115.34700012207031 -59.34700012207031,114.32499694824219 C-55.93199920654297,112.78600311279297 -56.37900161743164,109.10800170898438 -54.41299819946289,106.48699951171875 C-52.775001525878906,104.25399780273438 -50.06999969482422,103.60800170898438 -47.941001892089844,101.91100311279297 C-43.58300018310547,98.35700225830078 -42.37699890136719,93.6760025024414 -39.834999084472656,88.64299774169922 C-39.999000549316406,95.66600036621094 -39.79499816894531,99.91999816894531 -42.847999572753906,103.89600372314453 C-44.88800048828125,106.55699920654297 -47.91600036621094,107.31600189208984 -49.305999755859375,109.98699951171875 C-49.75699996948242,110.84500122070312 -49.80699920654297,112.43399810791016 -50.42300033569336,113.58499908447266 C-51.018001556396484,114.65699768066406 -52.49700164794922,115.0790023803711 -52.189998626708984,115.68499755859375 C-36.1870002746582,115.80899810791016 -31.367000579833984,105.11199951171875 -26.915000915527344,94.08300018310547 C-27.64900016784668,101.91600036621094 -29.976999282836914,107.29100036621094 -33.76499938964844,111.8030014038086 C-41.388999938964844,120.94100189208984 -53.0880012512207,123.07099914550781 -70.24700164794922,121.96399688720703 C-84.33399963378906,121.07499694824219 -99.20500183105469,121.86900329589844 -108.2239990234375,116.64800262451172 C-114.30000305175781,113.13300323486328 -116.97000122070312,104.89900207519531 -118.37999725341797,97.15599822998047 C-119.9229965209961,88.89600372314453 -119.87899780273438,79.58899688720703 -122.99600219726562,72.80899810791016 C-124.60900115966797,69.20999908447266 -128.06399536132812,67.03099822998047 -130.2969970703125,63.979000091552734 C-136.05999755859375,56.10100173950195 -139.31100463867188,45.85599899291992 -144.76100158691406,37.98400115966797 C-148.20599365234375,50.9739990234375 -154.5500030517578,62.6879997253418 -156.01400756835938,76.63600158691406 C-155.4029998779297,77.79199981689453 -154.1820068359375,75.55400085449219 -153.93899536132812,76.31300354003906 C-157.55799865722656,85.99199676513672 -163.46400451660156,95.02100372314453 -163.82200622558594,106.88899993896484 C-161.20599365234375,107.28099822998047 -160.36700439453125,104.39700317382812 -159.12100219726562,104.43699645996094 C-160.9929962158203,110.11100006103516 -164.64599609375,116.95500183105469 -162.95799255371094,124.15299987792969 C-161.61300659179688,125.2300033569336 -160.04400634765625,122.76300048828125 -159.38400268554688,123.21499633789062 C-163.15199279785156,135.29100036621094 -168.5469970703125,145.8090057373047 -170.0760040283203,160.0800018310547 C-167.7030029296875,160.51600646972656 -167.08299255371094,157.69700622558594 -165.9459991455078,157.9010009765625 C-135.88600158691406,138.04600524902344 -104.4020004272461,113.6449966430664 -72.0739974975586,173.26800537109375 C-61.28799819946289,176.50900268554688 -56.915000915527344,187.78700256347656 -48.12900161743164,195.23699951171875 C-46.29800033569336,196.77099609375 -44.66999816894531,197.23199462890625 -43.00199890136719,198.71600341796875 C-37.095001220703125,203.947998046875 -32.80699920654297,213.45799255371094 -27.996999740600586,220.52200317382812 C-27.073999404907227,221.89700317382812 -23.996000289916992,226.8260040283203 -21.652999877929688,226.37399291992188 C-17.180999755859375,225.52499389648438 -19.73699951171875,215.12600708007812 -19.499000549316406,212.32699584960938 C-18.798999786376953,215.4290008544922 -18.381999969482422,219.56399536132812 -15.805999755859375,219.71299743652344 C-12.277000427246094,219.91600036621094 -11.36400032043457,213.5780029296875 -10.598999977111816,209.77499389648438 C-9.541999816894531,210.10800170898438 -10.032999992370605,212.0290069580078 -8.182000160217285,211.54299926757812 C-3.882999897003174,208.95199584960938 -2.9800000190734863,203.08399963378906 -1.2680000066757202,197.99200439453125 C0.0820000022649765,199.98699951171875 0.09700000286102295,203.19900512695312 2.697999954223633,203.28799438476562 C7.260000228881836,203.4669952392578 8.157999992370605,192.8939971923828 8.689000129699707,187.97999572753906 C9.861000061035156,190.2830047607422 10.29800033569336,192.93899536132812 12.95300006866455,192.97900390625 C17.604000091552734,193.06300354003906 19.469999313354492,183.41400146484375 21.976999282836914,180.60899353027344 C26.707000732421875,177.427001953125 32.4900016784668,174.7169952392578 38.7239990234375,172.41900634765625 C56.44200134277344,165.89100646972656 73.0989990234375,157.0290069580078 88.21299743652344,146.08700561523438 C88.21299743652344,146.08700561523438 97.36499786376953,160.50100708007812 97.36499786376953,160.50100708007812 C98.38200378417969,159.70700073242188 99.4990005493164,158.83900451660156 100.70999908447266,157.90499877929688 C117.1500015258789,143.69900512695312 121.56600189208984,116.89399719238281 134.14500427246094,99.52200317382812 C134.25799560546875,99.36599731445312 134.3719940185547,99.20999908447266 134.48599243164062,99.05599975585938 C134.81300354003906,98.61399841308594 135.14599609375,98.17900085449219 135.48399353027344,97.7509994506836 C135.58099365234375,97.62899780273438 135.67599487304688,97.50499725341797 135.7729949951172,97.38400268554688 C136.1699981689453,96.89099884033203 136.5749969482422,96.40699768066406 136.98800659179688,95.93299865722656 C137.031005859375,95.88300323486328 137.072998046875,95.83100128173828 137.11700439453125,95.78199768066406 C137.59100341796875,95.24199676513672 138.0749969482422,94.71499633789062 138.572998046875,94.2020034790039 C138.59100341796875,94.30000305175781 138.60899353027344,94.39800262451172 138.6269989013672,94.49600219726562 C140.85000610351562,106.42500305175781 155.87899780273438,110.48999786376953 163.90899658203125,101.39299774169922 C189.6909942626953,72.18800354003906 212.23699951171875,34.40299987792969 211.59800720214844,-9.612000465393066z M17.340999603271484,-36.67399978637695 C13.246000289916992,-39.125999450683594 9.473999977111816,-45.176998138427734 11.404999732971191,-52.36399841308594 C12.42199993133545,-56.14099884033203 15.633999824523926,-61.4379997253418 18.100000381469727,-62.03300094604492 C20.68199920654297,-62.638999938964844 27.0049991607666,-61.1150016784668 30.038000106811523,-61.04499816894531 C59.874000549316406,-60.236000061035156 68.5459976196289,-78.18499755859375 74.05599975585938,-101.75199890136719 C73.8219985961914,-102.8239974975586 74.55699920654297,-102.8290023803711 74.3479995727539,-101.75700378417969 C71.16200256347656,-77.91200256347656 65.08599853515625,-55.35200119018555 48.849998474121094,-42.58100128173828 C41.75699996948242,-37.00199890136719 27.58099937438965,-30.534000396728516 17.340999603271484,-36.67399978637695z"></path>
                                    </g>
                                </g>
                                <g opacity='1' className="block" transform="matrix(0.6069289445877075,0.6661258339881897,-0.5420618653297424,0.7458393573760986,402.3857727050781,-262.05718994140625)">
                                    <g opacity='1' transform="matrix(1,0,0,1,582.8280029296875,308.1789855957031)">
                                        <path fill="rgb(255,95,0)" fillOpacity="1" d=" M35.13999938964844,35.165000915527344 C17.538999557495117,48.94900131225586 -6.1570000648498535,58.071998596191406 -37.51300048828125,57.57600021362305 C-37.51300048828125,57.57600021362305 -61.382999420166016,55.862998962402344 -61.382999420166016,55.862998962402344 C-62.965999603271484,55.75400161743164 -64.37100219726562,55.034000396728516 -65.38400268554688,53.95199966430664 C-66.39099884033203,52.8650016784668 -67.00700378417969,51.4109992980957 -67.00700378417969,49.823001861572266 C-67.00700378417969,46.3380012512207 -64.0780029296875,43.573001861572266 -60.604000091552734,43.77199935913086 C-60.604000091552734,43.77199935913086 -38.04899978637695,45.0620002746582 -38.04899978637695,45.0620002746582 C-20.531999588012695,45.9109992980957 -4.604000091552734,42.96799850463867 9.225000381469727,37.6870002746582 C22.000999450683594,32.821998596191406 34.66299819946289,25.7189998626709 35.60200119018555,10.104000091552734 C36.03799819946289,2.553999900817871 34.77299880981445,-2.563999891281128 34.659000396728516,-9.864999771118164 C34.196998596191406,-36.04800033569336 56.959999084472656,-39.80099868774414 64.23699951171875,-58.071998596191406 C63.933998107910156,-50.15999984741211 62.70800018310547,-40.58000183105469 59.888999938964844,-34.152000427246094 C62.12200164794922,-35.57699966430664 64.4010009765625,-39.54800033569336 65.38300323486328,-43.18600082397461 C64.2770004272461,-36.340999603271484 63.37799835205078,-26.750999450683594 60.40999984741211,-20.731000900268555 C62.10200119018555,-21.95599937438965 65.20500183105469,-24.288999557495117 65.95899963378906,-27.386999130249023 C67.00700378417969,2.76200008392334 52.35900115966797,21.663999557495117 35.13999938964844,35.165000915527344z"></path>
                                    </g>
                                </g>
                                <g opacity='1' className="block" transform="matrix(0.9972018003463745,-0.07475688308477402,0.07475688308477402,0.9972018003463745,-34.582489013671875,14.095794677734375)">
                                    <g opacity='1' transform="matrix(1,0,0,1,205.57899475097656,516.4639892578125)">
                                        <path fill="rgb(255,95,0)" fillOpacity="1" d=" M55.191001892089844,-17.599000930786133 C49.62699890136719,-10.843000411987305 46.50400161743164,-1.7699999809265137 37.95100021362305,2.0920000076293945 C36.73500061035156,2.2360000610351562 37.5890007019043,0.23000000417232513 37.31100082397461,-0.5889999866485596 C31.836000442504883,8.380999565124512 27.523000717163086,18.476999282836914 17.138999938964844,22.731000900268555 C16.215999603271484,22.268999099731445 15.65999984741211,21.434999465942383 15.89799976348877,19.761999130249023 C12.98900032043457,23.5939998626709 11.192000389099121,28.503000259399414 5.335000038146973,29.490999221801758 C4.308000087738037,28.070999145507812 5.057000160217285,25.743000030517578 5.548999786376953,24.114999771118164 C1.0809999704360962,27.520000457763672 -1.8869999647140503,34.91600036621094 -10.057000160217285,35.71500015258789 C-12.201000213623047,34.21099853515625 -11.168000221252441,29.584999084472656 -10.48799991607666,27.375999450683594 C-14.156000137329102,32.15599822998047 -18.865999221801758,37.2140007019043 -21.84000015258789,43.96500015258789 C-24.89699935913086,50.86399841308594 -23.736000061035156,59.88800048828125 -25.601999282836914,68.48999786376953 C-33.13199996948242,71.29499816894531 -44.345001220703125,76.52100372314453 -54.99700164794922,75.54900360107422 C-57.93000030517578,75.2760009765625 -60.05500030517578,74.30799865722656 -61.59299850463867,72.08399963378906 C-62.71500015258789,64.83200073242188 -57.92499923706055,62.54399871826172 -54.683998107910156,58.84600067138672 C-49.263999938964844,52.67100143432617 -43.874000549316406,46.185001373291016 -41.03499984741211,37.15599822998047 C-37.32699966430664,25.202999114990234 -36.42900085449219,12.38700008392334 -33.375999450683594,-2.046999931335449 C-34.935001373291016,-1.1979999542236328 -37.41600036621094,2.8459999561309814 -40.15599822998047,2.552999973297119 C-42.731998443603516,0.9599999785423279 -42.26100158691406,-3.0799999237060547 -42.10200119018555,-6.067999839782715 C-41.64099884033203,-14.760000228881836 -39.69499969482422,-24.766000747680664 -38.68199920654297,-32.965999603271484 C-36.09600067138672,-39.994998931884766 -33.41999816894531,-46.77899932861328 -30.89299964904785,-52.92399978637695 C-24.4060001373291,-68.70899963378906 -6.572000026702881,-76.52200317382812 9.440999984741211,-70.61599731445312 C9.440999984741211,-70.61599731445312 37.20199966430664,-60.3849983215332 37.20199966430664,-60.3849983215332 C54.459999084472656,-54.020999908447266 62.715999603271484,-34.375999450683594 55.191001892089844,-17.599000930786133z"></path>
                                    </g>
                                </g>
                                <g opacity='1' className="block" transform="matrix(1,0,0,1,0,0)">
                                    <g opacity='1' transform="matrix(1,0,0,1,385.739013671875,520.291015625)">
                                        <path fill="rgb(255,95,0)" fillOpacity="1" d=" M42.821998596191406,-8.812999725341797 C41.90399932861328,-8.852999687194824 41.893001556396484,-9.875 41.30699920654297,-10.267000198364258 C41.058998107910156,-5.442999839782715 41.56999969482422,0.13600000739097595 40.04100036621094,3.765000104904175 C38.31399917602539,4.1570000648498535 38.53799819946289,2.503999948501587 37.64500045776367,2.0280001163482666 C37.03900146484375,9.442999839782715 37.132999420166016,17.548999786376953 33.50899887084961,22.06599998474121 C32.268001556396484,22.993999481201172 31.812000274658203,20.93400001525879 31.086999893188477,20.31399917602539 C29.429000854492188,25.93199920654297 29.79599952697754,33.50199890136719 25.115999221801758,36.231998443603516 C21.764999389648438,31.690000534057617 21.44300079345703,24.035999298095703 19.729999542236328,17.82200050354004 C19.18899917602539,37.70600128173828 23.225000381469727,55.47600173950195 32.48699951171875,66.18800354003906 C30.03499984741211,76.47200012207031 18.336000442504883,93.43800354003906 5.361000061035156,83.65499877929688 C2.313999891281128,81.36599731445312 -1.5190000534057617,76.40299987792969 -1.9859999418258667,73.3499984741211 C-2.5169999599456787,69.68699645996094 -0.8240000009536743,64.9520034790039 -0.3970000147819519,60.50400161743164 C0.9179999828338623,46.39799880981445 -1.0920000076293945,32.99599838256836 -4.651000022888184,21.822999954223633 C-5.271999835968018,24.740999221801758 -4.645999908447266,28.875999450683594 -6.894999980926514,30.215999603271484 C-13.545999526977539,28.2549991607666 -14.548999786376953,19.44499969482422 -16.142000198364258,12.182999610900879 C-19.54199981689453,22.93899917602539 -25.96500015258789,10.678999900817871 -27.9060001373291,4.330999851226807 C-28.674999237060547,1.8309999704360962 -29.281999588012695,-0.6320000290870667 -29.7450008392334,-3.0399999618530273 C-32.29399871826172,-16.31100082397461 -35.43199920654297,-29.459999084472656 -39.237998962402344,-42.42599868774414 C-39.237998962402344,-42.42599868774414 -39.42599868774414,-43.06700134277344 -39.42599868774414,-43.06700134277344 C-45.50699996948242,-63.79499816894531 -33.266998291015625,-85.4520034790039 -12.369999885559082,-90.93099975585938 C-12.369999885559082,-90.93099975585938 -7.618000030517578,-92.177001953125 -7.618000030517578,-92.177001953125 C-4.367000102996826,-93.03099822998047 -1.097000002861023,-93.43800354003906 2.11899995803833,-93.43800354003906 C18.573999404907227,-93.43800354003906 33.70800018310547,-82.76599884033203 38.74599838256836,-66.3219985961914 C38.74599838256836,-66.3219985961914 43.18299865722656,-54.59299850463867 44.46900177001953,-34.19200134277344 C45.040000915527344,-25.759000778198242 45.50699996948242,-15.027000427246094 42.821998596191406,-8.812999725341797z"></path>
                                    </g>
                                </g>
                                <g opacity='1' className="block" transform="matrix(0.975242018699646,0,0,0.975242018699646,13.146484375,14.4833984375)">
                                    <g opacity='1' transform="matrix(1,0,0,1,494.906005859375,438.0950012207031)">
                                        <path fill="rgb(255,95,0)" fillOpacity="1" d=" M59.55699920654297,8.895000457763672 C59.31399917602539,15.616000175476074 57.66999816894531,22.226999282836914 56.314998626708984,28.6299991607666 C52.47800064086914,46.887001037597656 47.18299865722656,66.55799865722656 47.5,88.12000274658203 C47.564998626708984,92.30400085449219 48.19900131225586,96.93000030517578 49.22200012207031,101.20899963378906 C50.71099853515625,107.4729995727539 56.54399871826172,120.17500305175781 47.19300079345703,122.11100006103516 C47.15299987792969,129.9429931640625 49.231998443603516,135.58200073242188 49.95100021362305,142.64999389648438 C43.29499816894531,144.64500427246094 34.132999420166016,152.46299743652344 22.63800048828125,150.56700134277344 C18.239999771118164,149.83700561523438 14.590999603271484,144.87399291992188 15.897000312805176,139.343994140625 C16.298999786376953,137.58200073242188 18.065000534057617,136.1479949951172 18.799999237060547,134.82200622558594 C25.35700035095215,123.0979995727539 27.635000228881836,105.37300109863281 28.125999450683594,88.16400146484375 C28.62299919128418,70.56800079345703 26.69700050354004,53.314998626708984 22.233999252319336,40.553001403808594 C19.20199966430664,31.881999969482422 14.347999572753906,25.785999298095703 7.583000183105469,20.222000122070312 C-5.322999954223633,9.668999671936035 -19.73200035095215,2.4769999980926514 -23.4950008392334,-18.29599952697754 C-23.4950008392334,-18.29599952697754 -50.948001861572266,-89.01799774169922 -50.948001861572266,-89.01799774169922 C-59.90800094604492,-112.08899688720703 -49.26100158691406,-138.13800048828125 -26.711000442504883,-148.3280029296875 C-20.576000213623047,-151.10299682617188 -14.034000396728516,-152.46299743652344 -7.5269999504089355,-152.46299743652344 C2.118000030517578,-152.46299743652344 11.696999549865723,-149.47000122070312 19.77199935913086,-143.6280059814453 C38.391998291015625,-130.16600036621094 49.5260009765625,-108.69000244140625 49.858001708984375,-85.71600341796875 C49.86199951171875,-85.4280014038086 49.867000579833984,-85.13999938964844 49.87200164794922,-84.85299682617188 C49.87200164794922,-84.85299682617188 50.409000396728516,-72.33999633789062 50.409000396728516,-72.33999633789062 C44.880001068115234,-54.38600158691406 42.819000244140625,-29.017000198364258 52.01599884033203,-13.625 C56.290000915527344,-6.442999839782715 59.909000396728516,-2.005000114440918 59.55699920654297,8.895000457763672z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </>
}