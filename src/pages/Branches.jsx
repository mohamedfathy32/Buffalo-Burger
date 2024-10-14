import Branch from "../components/Branch";

export default function BranchesPage() {

    const branches = [
        {
            name: 'al-ahly',
            address: '٩ ش حافظ رمضان - متفرع من احمد فخري - مدينه نصر',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0675106,31.3468592,17z/data=!4m6!3m5!1s0x14583e0ba3c57a49:0x53bd4e78acadf3b!8m2!3d30.06854!4d31.3501!16s%2Fg%2F11ggnfchkd?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'alex-semouha',
            address: 'شــــارع الطيار محمود شكري - سموحـــه',
            src: 'https://www.google.com/maps/place/Buffalo+Burger+smouha/@31.2178889,29.9441969,18.3z/data=!4m6!3m5!1s0x14f5c522fa296467:0xd9f75af57c758390!8m2!3d31.2179831!4d29.9459529!16s%2Fg%2F11k5zklq1h?entry=tts&shorturl=1'
        },

        {
            name: 'almaza-avenue-mall',
            address: 'Almaza Avenue Mall',
            src: 'https://www.google.com/maps/place/Almaza+Avenue+Mall/@30.0924272,31.3453517,17z/data=!3m1!4b1!4m6!3m5!1s0x145815b42aaee707:0xab349ff18d15352a!8m2!3d30.0924226!4d31.3479266!16s%2Fg%2F11j8nwr25m?entry=tts&g_ep=EgoyMDI0MDkyNS4wKgBIAVAD'
        },

        {
            name: 'truimph',
            address: '١٠٥ ش النزهه مصر الجديد',
            src: 'https://www.google.com/maps/place/105+El-Nozha,+El+Nozha,+Cairo+Governorate+4470142/@30.0993622,31.3408215,17z/data=!3m1!4b1!4m6!3m5!1s0x145815e55b291b51:0xcff912a8b0e211be!8m2!3d30.0993576!4d31.3433964!16s%2Fg%2F11bw3y15z3?entry=tts&shorturl=1'
        },

        {
            name: 'zayed',
            address: 'السرايا مول - الشيخ زايد',
            src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.029968,30.9956077,19z/data=!4m6!3m5!1s0x14585b87427c0c31:0xd56cfa2263cc5904!8m2!3d30.0300981!4d30.9957818!16s%2Fg%2F11fjz4l_79?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'almaza-mall',
            address: 'مول الماظه',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0820864,31.3656564,18z/data=!4m6!3m5!1s0x14583d3caec6af9d:0xe0b7f70e0e503110!8m2!3d30.0821015!4d31.3664652!16s%2Fg%2F11h5mnwzmx?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'concord-mall',
            address: 'فرع كونكورد بلازا مول القاهره الجديده',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0249122,31.4822205,20z/data=!4m6!3m5!1s0x1458239c37cb50b3:0x6177d53402cde9f2!8m2!3d30.0249122!4d31.4826478!16s%2Fg%2F11g0mvqmys?entry=tts&shorturl=1'
        },

        {
            name: 'el-obour',
            address: 'جولــف سيتـــي مـــــول - طـريــق مصـــر الاسمــاعيليــة',
            src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.17433,31.473216,17z/data=!4m6!3m5!1s0x14581b5e2e3541c7:0xc1e0d7bb5b649b42!8m2!3d30.1747529!4d31.4763521!16s%2Fg%2F11qqzs6cgx?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'new-cairo-1',
            address: ' التجمع الاول',
            src: "https://www.google.com/maps/place/30%C2%B003'10.1%22N+31%C2%B026'32.7%22E/@30.0527982,31.4398428,17z/data=!3m1!4b1!4m4!3m3!8m2!3d30.0527982!4d31.4424177?hl=en&entry=ttu"
        },

        {
            name: 'shobra',
            address: '212 شارع شبرا امام صيدليات مصر',
            src: 'https://goo.gl/maps/MU3oZSSHDRSCxPUc9'
        },

        {
            name: 'drive-thru',
            address: 'غرب سوميد - مول جرين بارك المجاورة الاولي بجوار جو باص',
            src: 'https://goo.gl/maps/9CvZbCXMPtj4HxvA9'
        },

        {
            name: 'ismailia',
            address: 'شــــارع شبين الكــوم - أمــــام بنزينـــــة توتـــــال',
            src: 'https://goo.gl/maps/WvkL3xveocD6jTQLA'
        },

        {
            name: 'mall-of-egypt',
            address: 'مول مصر',
            src: 'https://www.google.com/maps/place/%D9%85%D9%88%D9%84+%D9%85%D8%B5%D8%B1%E2%80%AD/@29.9712029,31.0154256,16z/data=!4m6!3m5!1s0x145851ee0be1eec3:0xa5b302adfcac13d1!8m2!3d29.9724274!4d31.0164062!16s%2Fg%2F11g8_2kq5p?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'port-said',
            address: 'شارع طرح البحر - حي شرق بورسعيد',
            src: 'https://www.google.com/maps/place//@31.2710227,32.3010397,18z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'sheraton',
            address: '2 شــــارع انقرة - أمــــام مركز الالعاب الرياضية',
            src: 'https://www.google.com/maps/place/%D8%A8%D9%81%D8%A7%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.10916,31.376304,17z/data=!3m1!4b1!4m6!3m5!1s0x145816683d373641:0x43010af9938f7f81!8m2!3d30.10916!4d31.376304!16s%2Fg%2F11c0rq37sc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'hurghada',
            address: 'القرى السياحية - الغردقة - البحر الاحمر',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@27.1737554,33.8239781,13.67z/data=!4m7!3m6!1s0x1452870949b09d3b:0xd38e8fa2174eda25!8m2!3d27.1899487!4d33.8330103!15sChdidWZmYWxvIGJ1cmdlciBodXJnaGFkYSIDiAEBWhkiF2J1ZmZhbG8gYnVyZ2VyIGh1cmdoYWRhkgEUZmFzdF9mb29kX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11jjb3xpzb?entry=tts&shorturl=1'
        },

        {
            name: 'zahraa-elmaadi',
            address: 'ع3 -ش الخمسين-تقسيم الرقابه الاداريه-بجوار صيدليه علاج',
            src: 'https://www.google.com/maps/place/Buffalo+burger/@29.9650292,31.3080568,19z/data=!4m6!3m5!1s0x145839a70f08907f:0x8de689a45febb143!8m2!3d29.965412!4d31.3087932!16s%2Fg%2F11swq59z59?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'alex-aasafra',
            address: '730 طريق الجيش قصر الاليزيه - العصافرة على البحر بجوار كافيتريا النجمة',
            src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@31.2763442,30.003067,17z/data=!3m1!4b1!4m6!3m5!1s0x14f5d101e81dd519:0x67eef3608aa6ba40!8m2!3d31.2763442!4d30.003067!16s%2Fg%2F11nnwk67tt?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'city-stars',
            address: 'Mall of arabia',
            src: 'https://www.google.com/maps/place/Food+Court+Mall+of+Arabia/@30.0054897,30.9701348,17z/data=!3m1!4b1!4m6!3m5!1s0x14585744572fd851:0x95284e4049bf89b8!8m2!3d30.0054851!4d30.9727097!16s%2Fg%2F11c584ky_1?entry=tts&shorturl=1'
        },

        {
            name: 'al-haram',
            address: '١٧٥ ش الهرم امام مسرح الزعيم',
            src: 'https://www.google.com/maps/place/176+%D8%A7%D9%84%D9%87%D8%B1%D9%85%D8%8C+%D8%A3%D9%88%D9%84%D9%89+%D8%A7%D9%84%D9%87%D8%B1%D9%85%D8%8C+%D8%A7%D9%84%D8%B7%D8%A7%D9%84%D8%A8%D9%8A%D8%A9%D8%8C+%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9+%D8%A7%D9%84%D8%AC%D9%8A%D8%B2%D8%A9+3531301%E2%80%AD/@29.9946845,31.1603689,18z/data=!4m6!3m5!1s0x145845dc8616ae3b:0xc89b5fd14e2f8dd4!8m2!3d29.9949019!4d31.1622105!16s%2Fg%2F11fnyzlfx7?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'asyut',
            address: 'ابراج نايل بلازا - ش احمد علي علوبه',
            src: 'https://www.google.com/maps/place/Buffalo+burger/@27.1921244,31.1870005,19z/data=!4m6!3m5!1s0x14450b53bf2aeb23:0x693a3198d0f376c0!8m2!3d27.1925107!4d31.1878883!16s%2Fg%2F11h_cykbwx?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'elmanyal',
            address: 'المنيل',
            src: 'https://www.google.com/maps/place/Buffalo+Burger+Manial+branch+-+%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1+%D9%81%D8%B1%D8%B9+%D8%A7%D9%84%D9%85%D9%86%D9%8A%D9%84%E2%80%AD/@30.0226393,31.2207741,17z/data=!3m1!4b1!4m6!3m5!1s0x1458474e6e3956e3:0xa3c50e24450f336e!8m2!3d30.0226347!4d31.225645!16s%2Fg%2F11trx18gjg?entry=tts&shorturl=1'
        },

        {
            name: 'al-sherouk-city',
            address: 'سيتي بلازا مول - الشروق الدور الارضي',
            src: 'https://www.google.com/maps/place/Buffalo+Burger+-+City+Plaza+Mall/@30.1144769,31.6064442,17z/data=!3m1!4b1!4m6!3m5!1s0x14581de9c96e3ab5:0x8077b994cff6602!8m2!3d30.1144769!4d31.6064442!16s%2Fg%2F11c3sr0zcc?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'al-rehab-city-food-court',
            address: 'الرحاب - بوابه ٦ - الفود كورد - بجوار اربياتا',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0591127,31.4897694,17z/data=!3m1!4b1!4m6!3m5!1s0x1458194c26e7d12f:0x20c95ae3f1678ac0!8m2!3d30.0591127!4d31.4897694!16s%2Fg%2F11ghmbttw3?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'downtown-mall',
            address: 'قطاميه داون تاون مول - مبني S1 - الدور الارضي -قطعه A شارع التسعين',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0177319,31.4058723,14.85z/data=!3m1!5s0x14583cefe5e4eb99:0x382d242e33b636d!4m6!3m5!1s0x14583dab4fc73631:0x563c644602257d45!8m2!3d30.0174232!4d31.4119593!16s%2Fg%2F11f7s99_9t?entry=tts&shorturl=1'
        },

        {
            name: 'maadi',
            address: '27 شــــارع النصـــر - أمــــام سيراميكــا كليــوبـاتــــــرا',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@29.9747194,31.2414082,13z/data=!4m6!3m5!1s0x1458386406821efb:0xf12859a068970ca5!8m2!3d29.9747194!4d31.2793301!16s%2Fg%2F11ggnf9m5z?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'syria',
            address: '48 شارع البطل احمد عبد العزيز',
            src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1+(%D8%A7%D9%84%D9%85%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D9%86)%E2%80%AD/@30.0539071,31.2007727,18z/data=!4m6!3m5!1s0x145841799489faed:0x9abd4a72cd8fbcea!8m2!3d30.0548995!4d31.2043034!16s%2Fg%2F11kpfh4g80?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'alex',
            address: 'ش المشير-سيتى سكوير مول -الاسكندرية',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@31.2271618,29.8527976,12z/data=!4m7!3m6!1s0x14f5c4ee79455bcb:0x39a10881bfbad68b!8m2!3d31.2271618!4d29.9419867!15sCg5CdWZmYWxvIEJ1cmdlciIDiAEBWhAiDmJ1ZmZhbG8gYnVyZ2VykgEUZmFzdF9mb29kX3Jlc3RhdXJhbnTgAQA!16s%2Fg%2F11g9sz6t9z?entry=tts&shorturl=1'
        },

        {
            name: 'october',
            address: 'البطئ--موازي للمحور المركزي، قسم أول 6 أكتوبر، اول 6 أكتوبر، الجيزة - مول سيتي سكيب',
            src: 'https://www.google.com/maps/place/Point+Fashion/@29.962917,30.9263969,17z/data=!3m1!4b1!4m6!3m5!1s0x1458566ecb51b3bb:0x2c2103aa799a0331!8m2!3d29.962917!4d30.9263969!16s%2Fg%2F122z2g2y?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'faisal',
            address: '124 شــــارع فيصـل - أمــــام شــــارع المستشفــي',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@29.9954449,31.143223,16z/data=!4m6!3m5!1s0x145845b8b1b0e1fd:0xf0632c7c554791bc!8m2!3d29.9954448!4d31.1510869!16s%2Fg%2F11hdy84rl6?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'city-stars',
            address: 'سيتـــي ستــــارز فــودكـورت - الــــدور 8',
            src: 'https://www.google.com/maps/search/%D8%B3%D9%8A%D8%AA%D9%80%D9%80%D9%80%D9%8A+%D8%B3%D8%AA%D9%80%D9%80%D9%80%D9%80%D8%A7%D8%B1%D8%B2+%D9%81%D9%80%D9%80%D9%88%D8%AF%D9%83%D9%80%D9%88%D8%B1%D8%AA+%E2%80%AD/@30.0729535,31.3425886,17z?entry=tts&shorturl=1'
        },

        {
            name: 'hadayek-el-ahram',
            address: 'الثروة المعدنية - حدائق الاهرام',
            src: 'https://www.google.com/maps/place/Buffalo+Burger+%D8%A8%D8%A7%D9%81%D8%A7%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1(+%D8%AD%D8%AF%D8%A7%D8%A6%D9%82+%D8%A7%D9%84%D8%A7%D9%87%D8%B1%D8%A7%D9%85)%E2%80%AD/@29.9812057,31.1053452,20z/data=!4m6!3m5!1s0x14584f5a31847cbb:0x48c27ffe3c06947!8m2!3d29.9812832!4d31.1058247!16s%2Fg%2F11jccd_0t_?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'el-mansoura',
            address: 'شــــارع الجمهورية - أمــــام كليـــة الحقـــــــــوق',
            src: 'https://www.google.com/maps/place/%D8%A8%D8%A7%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@31.0458225,31.3504653,17z/data=!4m6!3m5!1s0x14f79dd7d5e3e025:0xcfa9effce868519c!8m2!3d31.0458501!4d31.3542442!16s%2Fg%2F11ggnfccl1?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'zamalek',
            address: 'ش طه حسين - اليمامه سنتر',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@31.2312137,28.632133,8z/data=!3m1!5s0x145840e3c46353ef:0xa2615a82a076a41!4m7!3m6!1s0x145840e3db5e5231:0xa5caad275e350a68!8m2!3d30.0637886!4d31.2207915!15sChZidWZmYWxvIGJ1cmdlciB6YW1hbGVrIgOIAQFaGCIWYnVmZmFsbyBidXJnZXIgemFtYWxla5IBFGZhc3RfZm9vZF9yZXN0YXVyYW504AEA!16s%2Fg%2F11b5phnqlz?entry=tts&shorturl=1'
        },

        {
            name: 'el-batrawy',
            address: '٢٧ ش البطراوي - عباس العقاد',
            src: 'https://www.google.com/maps/place/%D8%A8%D9%81%D9%84%D9%88+%D8%A8%D8%B1%D8%AC%D8%B1%E2%80%AD/@30.0618788,31.3360246,17z/data=!3m1!4b1!4m6!3m5!1s0x14583e6926c30827:0x694bd01370f7038c!8m2!3d30.0618788!4d31.3360246!16s%2Fg%2F11hcw6b0fw?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'madinty',
            address: 'فــودكـورت Open Air Mall',
            src: 'https://www.google.com/maps/place/Food+Hall+-+Open+Air+Mall/@30.1066564,31.6261773,17z/data=!3m1!4b1!4m6!3m5!1s0x14581de89e7edc41:0xd544701510e43a10!8m2!3d30.1066564!4d31.6261773!16s%2Fg%2F11r_xr3b6g?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'mokkatam',
            address: 'شارع 9 امام حديقه الاندلس – المقطم',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.0361252,31.2254038,13z/data=!4m7!3m6!1s0x14583924239276b5:0xa67d619fdb4bdcf5!8m2!3d30.0083261!4d31.3120851!15sChdidWZmYWxvIGJ1cmdlciBtb2thdHRhbVoZIhdidWZmYWxvIGJ1cmdlciBtb2thdHRhbZIBFGZhc3RfZm9vZF9yZXN0YXVyYW50mgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVI1YkdKWGNuVjNSUkFC4AEA!16s%2Fg%2F11p9sf_jhs?entry=tts&shorturl=1'
        },

        {
            name: 'roxy',
            address: 'ش الاهرم - مصر الجديدة',
            src: 'https://www.google.com/maps/place/Buffalo+burger/@30.0882299,31.3171464,16z/data=!4m6!3m5!1s0x14583fc9adb17707:0xf4f30a321d7bcd18!8m2!3d30.0902668!4d31.3201711!16s%2Fg%2F11rwtwvr12?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'tanta',
            address: '45 شــــارع الجيــش - أمــــام دار المناسبات',
            src: 'https://www.google.com/maps/place/%E2%80%8E%D9%85%D9%88%D9%84+%D8%B7%D9%86%D8%B7%D8%A7%E2%80%AD/@30.8142391,30.9663603,13z/data=!4m6!3m5!1s0x14f7b7b312fbd47f:0x41995038b864f501!8m2!3d30.8413235!4d31.0177946!16s%2Fg%2F11g_qlww8y?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'el-mansoura-2',
            address: 'ش مسجد بلال، المنصورة (قسم 2)، اول المنصورة، الدقهلية',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@31.0346478,31.3585207,20z/data=!4m6!3m5!1s0x14f79d3dc6445a6f:0xbed4aef845721a15!8m2!3d31.0345939!4d31.3583265!16s%2Fg%2F11j30p3gy2?entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D'
        },

        {
            name: 'zakazeek',
            address: '2 شــــارع الخشاب – القومية',
            src: 'https://www.google.com/maps/place/Buffalo+Burger/@30.5885702,31.4889425,17z/data=!4m6!3m5!1s0x14f7f1c2c93aa279:0x6bcee06f248906ef!8m2!3d30.5876325!4d31.4907175!16s%2Fg%2F11flm9960n?entry=tts&shorturl=1'
        },

    ];

    return (
        <>
            <div className="flex flex-col smd:inline-grid smd:grid-cols-2 md:inline-grid  md:grid-cols-3 gap-y-6 gap-x-6 w-full bg-stone-900 p-4 md:p-[60px] ">

                {branches.map((branch) =>
                    <Branch
                        key={branch.name}
                        name={branch.name}
                        address={branch.address}
                        src={branch.src}
                    />
                )}


            </div>
        </>
    )
}