// I'll just leave it here as a reminder how not to do things)

const pokemonTypes = {
    "1": {
        "type": "grass"
    },
    "2": {
        "type": "grass"
    },
    "3": {
        "type": "grass"
    },
    "4": {
        "type": "fire"
    },
    "5": {
        "type": "fire"
    },
    "6": {
        "type": "fire"
    },
    "7": {
        "type": "water"
    },
    "8": {
        "type": "water"
    },
    "9": {
        "type": "water"
    },
    "10": {
        "type": "bug"
    },
    "11": {
        "type": "bug"
    },
    "12": {
        "type": "bug"
    },
    "13": {
        "type": "bug"
    },
    "14": {
        "type": "bug"
    },
    "15": {
        "type": "bug"
    },
    "16": {
        "type": "normal"
    },
    "17": {
        "type": "normal"
    },
    "18": {
        "type": "normal"
    },
    "19": {
        "type": "normal"
    },
    "20": {
        "type": "normal"
    },
    "21": {
        "type": "normal"
    },
    "22": {
        "type": "normal"
    },
    "23": {
        "type": "poison"
    },
    "24": {
        "type": "poison"
    },
    "25": {
        "type": "electric"
    },
    "26": {
        "type": "electric"
    },
    "27": {
        "type": "ground"
    },
    "28": {
        "type": "ground"
    },
    "29": {
        "type": "poison"
    },
    "30": {
        "type": "poison"
    },
    "31": {
        "type": "poison"
    },
    "32": {
        "type": "poison"
    },
    "33": {
        "type": "poison"
    },
    "34": {
        "type": "poison"
    },
    "35": {
        "type": "fairy"
    },
    "36": {
        "type": "fairy"
    },
    "37": {
        "type": "fire"
    },
    "38": {
        "type": "fire"
    },
    "39": {
        "type": "normal"
    },
    "40": {
        "type": "normal"
    },
    "41": {
        "type": "poison"
    },
    "42": {
        "type": "poison"
    },
    "43": {
        "type": "grass"
    },
    "44": {
        "type": "grass"
    },
    "45": {
        "type": "grass"
    },
    "46": {
        "type": "bug"
    },
    "47": {
        "type": "bug"
    },
    "48": {
        "type": "bug"
    },
    "49": {
        "type": "bug"
    },
    "50": {
        "type": "ground"
    },
    "51": {
        "type": "ground"
    },
    "52": {
        "type": "normal"
    },
    "53": {
        "type": "normal"
    },
    "54": {
        "type": "water"
    },
    "55": {
        "type": "water"
    },
    "56": {
        "type": "fighting"
    },
    "57": {
        "type": "fighting"
    },
    "58": {
        "type": "fire"
    },
    "59": {
        "type": "fire"
    },
    "60": {
        "type": "water"
    },
    "61": {
        "type": "water"
    },
    "62": {
        "type": "water"
    },
    "63": {
        "type": "psychic"
    },
    "64": {
        "type": "psychic"
    },
    "65": {
        "type": "psychic"
    },
    "66": {
        "type": "fighting"
    },
    "67": {
        "type": "fighting"
    },
    "68": {
        "type": "fighting"
    },
    "69": {
        "type": "grass"
    },
    "70": {
        "type": "grass"
    },
    "71": {
        "type": "grass"
    },
    "72": {
        "type": "water"
    },
    "73": {
        "type": "water"
    },
    "74": {
        "type": "rock"
    },
    "75": {
        "type": "rock"
    },
    "76": {
        "type": "rock"
    },
    "77": {
        "type": "fire"
    },
    "78": {
        "type": "fire"
    },
    "79": {
        "type": "water"
    },
    "80": {
        "type": "water"
    },
    "81": {
        "type": "electric"
    },
    "82": {
        "type": "electric"
    },
    "83": {
        "type": "normal"
    },
    "84": {
        "type": "normal"
    },
    "85": {
        "type": "normal"
    },
    "86": {
        "type": "water"
    },
    "87": {
        "type": "water"
    },
    "88": {
        "type": "poison"
    },
    "89": {
        "type": "poison"
    },
    "90": {
        "type": "water"
    },
    "91": {
        "type": "water"
    },
    "92": {
        "type": "ghost"
    },
    "93": {
        "type": "ghost"
    },
    "94": {
        "type": "ghost"
    },
    "95": {
        "type": "rock"
    },
    "96": {
        "type": "psychic"
    },
    "97": {
        "type": "psychic"
    },
    "98": {
        "type": "water"
    },
    "99": {
        "type": "water"
    },
    "100": {
        "type": "electric"
    },
    "101": {
        "type": "electric"
    },
    "102": {
        "type": "grass"
    },
    "103": {
        "type": "grass"
    },
    "104": {
        "type": "ground"
    },
    "105": {
        "type": "ground"
    },
    "106": {
        "type": "fighting"
    },
    "107": {
        "type": "fighting"
    },
    "108": {
        "type": "normal"
    },
    "109": {
        "type": "poison"
    },
    "110": {
        "type": "poison"
    },
    "111": {
        "type": "ground"
    },
    "112": {
        "type": "ground"
    },
    "113": {
        "type": "normal"
    },
    "114": {
        "type": "grass"
    },
    "115": {
        "type": "normal"
    },
    "116": {
        "type": "water"
    },
    "117": {
        "type": "water"
    },
    "118": {
        "type": "water"
    },
    "119": {
        "type": "water"
    },
    "120": {
        "type": "water"
    },
    "121": {
        "type": "water"
    },
    "122": {
        "type": "psychic"
    },
    "123": {
        "type": "bug"
    },
    "124": {
        "type": "ice"
    },
    "125": {
        "type": "electric"
    },
    "126": {
        "type": "fire"
    },
    "127": {
        "type": "bug"
    },
    "128": {
        "type": "normal"
    },
    "129": {
        "type": "water"
    },
    "130": {
        "type": "water"
    },
    "131": {
        "type": "water"
    },
    "132": {
        "type": "normal"
    },
    "133": {
        "type": "normal"
    },
    "134": {
        "type": "water"
    },
    "135": {
        "type": "electric"
    },
    "136": {
        "type": "fire"
    },
    "137": {
        "type": "normal"
    },
    "138": {
        "type": "rock"
    },
    "139": {
        "type": "rock"
    },
    "140": {
        "type": "rock"
    },
    "141": {
        "type": "rock"
    },
    "142": {
        "type": "rock"
    },
    "143": {
        "type": "normal"
    },
    "144": {
        "type": "ice"
    },
    "145": {
        "type": "electric"
    },
    "146": {
        "type": "fire"
    },
    "147": {
        "type": "dragon"
    },
    "148": {
        "type": "dragon"
    },
    "149": {
        "type": "dragon"
    },
    "150": {
        "type": "psychic"
    },
    "151": {
        "type": "psychic"
    },
    "152": {
        "type": "grass"
    },
    "153": {
        "type": "grass"
    },
    "154": {
        "type": "grass"
    },
    "155": {
        "type": "fire"
    },
    "156": {
        "type": "fire"
    },
    "157": {
        "type": "fire"
    },
    "158": {
        "type": "water"
    },
    "159": {
        "type": "water"
    },
    "160": {
        "type": "water"
    },
    "161": {
        "type": "normal"
    },
    "162": {
        "type": "normal"
    },
    "163": {
        "type": "normal"
    },
    "164": {
        "type": "normal"
    },
    "165": {
        "type": "bug"
    },
    "166": {
        "type": "bug"
    },
    "167": {
        "type": "bug"
    },
    "168": {
        "type": "bug"
    },
    "169": {
        "type": "poison"
    },
    "170": {
        "type": "water"
    },
    "171": {
        "type": "water"
    },
    "172": {
        "type": "electric"
    },
    "173": {
        "type": "fairy"
    },
    "174": {
        "type": "normal"
    },
    "175": {
        "type": "fairy"
    },
    "176": {
        "type": "fairy"
    },
    "177": {
        "type": "psychic"
    },
    "178": {
        "type": "psychic"
    },
    "179": {
        "type": "electric"
    },
    "180": {
        "type": "electric"
    },
    "181": {
        "type": "electric"
    },
    "182": {
        "type": "grass"
    },
    "183": {
        "type": "water"
    },
    "184": {
        "type": "water"
    },
    "185": {
        "type": "rock"
    },
    "186": {
        "type": "water"
    },
    "187": {
        "type": "grass"
    },
    "188": {
        "type": "grass"
    },
    "189": {
        "type": "grass"
    },
    "190": {
        "type": "normal"
    },
    "191": {
        "type": "grass"
    },
    "192": {
        "type": "grass"
    },
    "193": {
        "type": "bug"
    },
    "194": {
        "type": "water"
    },
    "195": {
        "type": "water"
    },
    "196": {
        "type": "psychic"
    },
    "197": {
        "type": "dark"
    },
    "198": {
        "type": "dark"
    },
    "199": {
        "type": "water"
    },
    "200": {
        "type": "ghost"
    },
    "201": {
        "type": "psychic"
    },
    "202": {
        "type": "psychic"
    },
    "203": {
        "type": "normal"
    },
    "204": {
        "type": "bug"
    },
    "205": {
        "type": "bug"
    },
    "206": {
        "type": "normal"
    },
    "207": {
        "type": "ground"
    },
    "208": {
        "type": "steel"
    },
    "209": {
        "type": "fairy"
    },
    "210": {
        "type": "fairy"
    },
    "211": {
        "type": "water"
    },
    "212": {
        "type": "bug"
    },
    "213": {
        "type": "bug"
    },
    "214": {
        "type": "bug"
    },
    "215": {
        "type": "dark"
    },
    "216": {
        "type": "normal"
    },
    "217": {
        "type": "normal"
    },
    "218": {
        "type": "fire"
    },
    "219": {
        "type": "fire"
    },
    "220": {
        "type": "ice"
    },
    "221": {
        "type": "ice"
    },
    "222": {
        "type": "water"
    },
    "223": {
        "type": "water"
    },
    "224": {
        "type": "water"
    },
    "225": {
        "type": "ice"
    },
    "226": {
        "type": "water"
    },
    "227": {
        "type": "steel"
    },
    "228": {
        "type": "dark"
    },
    "229": {
        "type": "dark"
    },
    "230": {
        "type": "water"
    },
    "231": {
        "type": "ground"
    },
    "232": {
        "type": "ground"
    },
    "233": {
        "type": "normal"
    },
    "234": {
        "type": "normal"
    },
    "235": {
        "type": "normal"
    },
    "236": {
        "type": "fighting"
    },
    "237": {
        "type": "fighting"
    },
    "238": {
        "type": "ice"
    },
    "239": {
        "type": "electric"
    },
    "240": {
        "type": "fire"
    },
    "241": {
        "type": "normal"
    },
    "242": {
        "type": "normal"
    },
    "243": {
        "type": "electric"
    },
    "244": {
        "type": "fire"
    },
    "245": {
        "type": "water"
    },
    "246": {
        "type": "rock"
    },
    "247": {
        "type": "rock"
    },
    "248": {
        "type": "rock"
    },
    "249": {
        "type": "psychic"
    },
    "250": {
        "type": "fire"
    },
    "251": {
        "type": "psychic"
    },
    "252": {
        "type": "grass"
    },
    "253": {
        "type": "grass"
    },
    "254": {
        "type": "grass"
    },
    "255": {
        "type": "fire"
    },
    "256": {
        "type": "fire"
    },
    "257": {
        "type": "fire"
    },
    "258": {
        "type": "water"
    },
    "259": {
        "type": "water"
    },
    "260": {
        "type": "water"
    },
    "261": {
        "type": "dark"
    },
    "262": {
        "type": "dark"
    },
    "263": {
        "type": "normal"
    },
    "264": {
        "type": "normal"
    },
    "265": {
        "type": "bug"
    },
    "266": {
        "type": "bug"
    },
    "267": {
        "type": "bug"
    },
    "268": {
        "type": "bug"
    },
    "269": {
        "type": "bug"
    },
    "270": {
        "type": "water"
    },
    "271": {
        "type": "water"
    },
    "272": {
        "type": "water"
    },
    "273": {
        "type": "grass"
    },
    "274": {
        "type": "grass"
    },
    "275": {
        "type": "grass"
    },
    "276": {
        "type": "normal"
    },
    "277": {
        "type": "normal"
    },
    "278": {
        "type": "water"
    },
    "279": {
        "type": "water"
    },
    "280": {
        "type": "psychic"
    },
    "281": {
        "type": "psychic"
    },
    "282": {
        "type": "psychic"
    },
    "283": {
        "type": "bug"
    },
    "284": {
        "type": "bug"
    },
    "285": {
        "type": "grass"
    },
    "286": {
        "type": "grass"
    },
    "287": {
        "type": "normal"
    },
    "288": {
        "type": "normal"
    },
    "289": {
        "type": "normal"
    },
    "290": {
        "type": "bug"
    },
    "291": {
        "type": "bug"
    },
    "292": {
        "type": "bug"
    },
    "293": {
        "type": "normal"
    },
    "294": {
        "type": "normal"
    },
    "295": {
        "type": "normal"
    },
    "296": {
        "type": "fighting"
    },
    "297": {
        "type": "fighting"
    },
    "298": {
        "type": "normal"
    },
    "299": {
        "type": "rock"
    },
    "300": {
        "type": "normal"
    },
    "301": {
        "type": "normal"
    },
    "302": {
        "type": "dark"
    },
    "303": {
        "type": "steel"
    },
    "304": {
        "type": "steel"
    },
    "305": {
        "type": "steel"
    },
    "306": {
        "type": "steel"
    },
    "307": {
        "type": "fighting"
    },
    "308": {
        "type": "fighting"
    },
    "309": {
        "type": "electric"
    },
    "310": {
        "type": "electric"
    },
    "311": {
        "type": "electric"
    },
    "312": {
        "type": "electric"
    },
    "313": {
        "type": "bug"
    },
    "314": {
        "type": "bug"
    },
    "315": {
        "type": "grass"
    },
    "316": {
        "type": "poison"
    },
    "317": {
        "type": "poison"
    },
    "318": {
        "type": "water"
    },
    "319": {
        "type": "water"
    },
    "320": {
        "type": "water"
    },
    "321": {
        "type": "water"
    },
    "322": {
        "type": "fire"
    },
    "323": {
        "type": "fire"
    },
    "324": {
        "type": "fire"
    },
    "325": {
        "type": "psychic"
    },
    "326": {
        "type": "psychic"
    },
    "327": {
        "type": "normal"
    },
    "328": {
        "type": "ground"
    },
    "329": {
        "type": "ground"
    },
    "330": {
        "type": "ground"
    },
    "331": {
        "type": "grass"
    },
    "332": {
        "type": "grass"
    },
    "333": {
        "type": "normal"
    },
    "334": {
        "type": "dragon"
    },
    "335": {
        "type": "normal"
    },
    "336": {
        "type": "poison"
    },
    "337": {
        "type": "rock"
    },
    "338": {
        "type": "rock"
    },
    "339": {
        "type": "water"
    },
    "340": {
        "type": "water"
    },
    "341": {
        "type": "water"
    },
    "342": {
        "type": "water"
    },
    "343": {
        "type": "ground"
    },
    "344": {
        "type": "ground"
    },
    "345": {
        "type": "rock"
    },
    "346": {
        "type": "rock"
    },
    "347": {
        "type": "rock"
    },
    "348": {
        "type": "rock"
    },
    "349": {
        "type": "water"
    },
    "350": {
        "type": "water"
    },
    "351": {
        "type": "normal"
    },
    "352": {
        "type": "normal"
    },
    "353": {
        "type": "ghost"
    },
    "354": {
        "type": "ghost"
    },
    "355": {
        "type": "ghost"
    },
    "356": {
        "type": "ghost"
    },
    "357": {
        "type": "grass"
    },
    "358": {
        "type": "psychic"
    },
    "359": {
        "type": "dark"
    },
    "360": {
        "type": "psychic"
    },
    "361": {
        "type": "ice"
    },
    "362": {
        "type": "ice"
    },
    "363": {
        "type": "ice"
    },
    "364": {
        "type": "ice"
    },
    "365": {
        "type": "ice"
    },
    "366": {
        "type": "water"
    },
    "367": {
        "type": "water"
    },
    "368": {
        "type": "water"
    },
    "369": {
        "type": "water"
    },
    "370": {
        "type": "water"
    },
    "371": {
        "type": "dragon"
    },
    "372": {
        "type": "dragon"
    },
    "373": {
        "type": "dragon"
    },
    "374": {
        "type": "steel"
    },
    "375": {
        "type": "steel"
    },
    "376": {
        "type": "steel"
    },
    "377": {
        "type": "rock"
    },
    "378": {
        "type": "ice"
    },
    "379": {
        "type": "steel"
    },
    "380": {
        "type": "dragon"
    },
    "381": {
        "type": "dragon"
    },
    "382": {
        "type": "water"
    },
    "383": {
        "type": "ground"
    },
    "384": {
        "type": "dragon"
    },
    "385": {
        "type": "steel"
    },
    "386": {
        "type": "psychic"
    },
    "387": {
        "type": "grass"
    },
    "388": {
        "type": "grass"
    },
    "389": {
        "type": "grass"
    },
    "390": {
        "type": "fire"
    },
    "391": {
        "type": "fire"
    },
    "392": {
        "type": "fire"
    },
    "393": {
        "type": "water"
    },
    "394": {
        "type": "water"
    },
    "395": {
        "type": "water"
    },
    "396": {
        "type": "normal"
    },
    "397": {
        "type": "normal"
    },
    "398": {
        "type": "normal"
    },
    "399": {
        "type": "normal"
    },
    "400": {
        "type": "normal"
    },
    "401": {
        "type": "bug"
    },
    "402": {
        "type": "bug"
    },
    "403": {
        "type": "electric"
    },
    "404": {
        "type": "electric"
    },
    "405": {
        "type": "electric"
    },
    "406": {
        "type": "grass"
    },
    "407": {
        "type": "grass"
    },
    "408": {
        "type": "rock"
    },
    "409": {
        "type": "rock"
    },
    "410": {
        "type": "rock"
    },
    "411": {
        "type": "rock"
    },
    "412": {
        "type": "bug"
    },
    "413": {
        "type": "bug"
    },
    "414": {
        "type": "bug"
    },
    "415": {
        "type": "bug"
    },
    "416": {
        "type": "bug"
    },
    "417": {
        "type": "electric"
    },
    "418": {
        "type": "water"
    },
    "419": {
        "type": "water"
    },
    "420": {
        "type": "grass"
    },
    "421": {
        "type": "grass"
    },
    "422": {
        "type": "water"
    },
    "423": {
        "type": "water"
    },
    "424": {
        "type": "normal"
    },
    "425": {
        "type": "ghost"
    },
    "426": {
        "type": "ghost"
    },
    "427": {
        "type": "normal"
    },
    "428": {
        "type": "normal"
    },
    "429": {
        "type": "ghost"
    },
    "430": {
        "type": "dark"
    },
    "431": {
        "type": "normal"
    },
    "432": {
        "type": "normal"
    },
    "433": {
        "type": "psychic"
    },
    "434": {
        "type": "poison"
    },
    "435": {
        "type": "poison"
    },
    "436": {
        "type": "steel"
    },
    "437": {
        "type": "steel"
    },
    "438": {
        "type": "rock"
    },
    "439": {
        "type": "psychic"
    },
    "440": {
        "type": "normal"
    },
    "441": {
        "type": "normal"
    },
    "442": {
        "type": "ghost"
    },
    "443": {
        "type": "dragon"
    },
    "444": {
        "type": "dragon"
    },
    "445": {
        "type": "dragon"
    },
    "446": {
        "type": "normal"
    },
    "447": {
        "type": "fighting"
    },
    "448": {
        "type": "fighting"
    },
    "449": {
        "type": "ground"
    },
    "450": {
        "type": "ground"
    },
    "451": {
        "type": "poison"
    },
    "452": {
        "type": "poison"
    },
    "453": {
        "type": "poison"
    },
    "454": {
        "type": "poison"
    },
    "455": {
        "type": "grass"
    },
    "456": {
        "type": "water"
    },
    "457": {
        "type": "water"
    },
    "458": {
        "type": "water"
    },
    "459": {
        "type": "grass"
    },
    "460": {
        "type": "grass"
    },
    "461": {
        "type": "dark"
    },
    "462": {
        "type": "electric"
    },
    "463": {
        "type": "normal"
    },
    "464": {
        "type": "ground"
    },
    "465": {
        "type": "grass"
    },
    "466": {
        "type": "electric"
    },
    "467": {
        "type": "fire"
    },
    "468": {
        "type": "fairy"
    },
    "469": {
        "type": "bug"
    },
    "470": {
        "type": "grass"
    },
    "471": {
        "type": "ice"
    },
    "472": {
        "type": "ground"
    },
    "473": {
        "type": "ice"
    },
    "474": {
        "type": "normal"
    },
    "475": {
        "type": "psychic"
    },
    "476": {
        "type": "rock"
    },
    "477": {
        "type": "ghost"
    },
    "478": {
        "type": "ice"
    },
    "479": {
        "type": "electric"
    },
    "480": {
        "type": "psychic"
    },
    "481": {
        "type": "psychic"
    },
    "482": {
        "type": "psychic"
    },
    "483": {
        "type": "steel"
    },
    "484": {
        "type": "water"
    },
    "485": {
        "type": "fire"
    },
    "486": {
        "type": "normal"
    },
    "487": {
        "type": "ghost"
    },
    "488": {
        "type": "psychic"
    },
    "489": {
        "type": "water"
    },
    "490": {
        "type": "water"
    },
    "491": {
        "type": "dark"
    },
    "492": {
        "type": "grass"
    },
    "493": {
        "type": "normal"
    },
    "494": {
        "type": "psychic"
    },
    "495": {
        "type": "grass"
    },
    "496": {
        "type": "grass"
    },
    "497": {
        "type": "grass"
    },
    "498": {
        "type": "fire"
    },
    "499": {
        "type": "fire"
    },
    "500": {
        "type": "fire"
    },
    "501": {
        "type": "water"
    },
    "502": {
        "type": "water"
    },
    "503": {
        "type": "water"
    },
    "504": {
        "type": "normal"
    },
    "505": {
        "type": "normal"
    },
    "506": {
        "type": "normal"
    },
    "507": {
        "type": "normal"
    },
    "508": {
        "type": "normal"
    },
    "509": {
        "type": "dark"
    },
    "510": {
        "type": "dark"
    },
    "511": {
        "type": "grass"
    },
    "512": {
        "type": "grass"
    },
    "513": {
        "type": "fire"
    },
    "514": {
        "type": "fire"
    },
    "515": {
        "type": "water"
    },
    "516": {
        "type": "water"
    },
    "517": {
        "type": "psychic"
    },
    "518": {
        "type": "psychic"
    },
    "519": {
        "type": "normal"
    },
    "520": {
        "type": "normal"
    },
    "521": {
        "type": "normal"
    },
    "522": {
        "type": "electric"
    },
    "523": {
        "type": "electric"
    },
    "524": {
        "type": "rock"
    },
    "525": {
        "type": "rock"
    },
    "526": {
        "type": "rock"
    },
    "527": {
        "type": "psychic"
    },
    "528": {
        "type": "psychic"
    },
    "529": {
        "type": "ground"
    },
    "530": {
        "type": "ground"
    },
    "531": {
        "type": "normal"
    },
    "532": {
        "type": "fighting"
    },
    "533": {
        "type": "fighting"
    },
    "534": {
        "type": "fighting"
    },
    "535": {
        "type": "water"
    },
    "536": {
        "type": "water"
    },
    "537": {
        "type": "water"
    },
    "538": {
        "type": "fighting"
    },
    "539": {
        "type": "fighting"
    },
    "540": {
        "type": "bug"
    },
    "541": {
        "type": "bug"
    },
    "542": {
        "type": "bug"
    },
    "543": {
        "type": "bug"
    },
    "544": {
        "type": "bug"
    },
    "545": {
        "type": "bug"
    },
    "546": {
        "type": "grass"
    },
    "547": {
        "type": "grass"
    },
    "548": {
        "type": "grass"
    },
    "549": {
        "type": "grass"
    },
    "550": {
        "type": "water"
    },
    "551": {
        "type": "ground"
    },
    "552": {
        "type": "ground"
    },
    "553": {
        "type": "ground"
    },
    "554": {
        "type": "fire"
    },
    "555": {
        "type": "fire"
    },
    "556": {
        "type": "grass"
    },
    "557": {
        "type": "bug"
    },
    "558": {
        "type": "bug"
    },
    "559": {
        "type": "dark"
    },
    "560": {
        "type": "dark"
    },
    "561": {
        "type": "psychic"
    },
    "562": {
        "type": "ghost"
    },
    "563": {
        "type": "ghost"
    },
    "564": {
        "type": "water"
    },
    "565": {
        "type": "water"
    },
    "566": {
        "type": "rock"
    },
    "567": {
        "type": "rock"
    },
    "568": {
        "type": "poison"
    },
    "569": {
        "type": "poison"
    },
    "570": {
        "type": "dark"
    },
    "571": {
        "type": "dark"
    },
    "572": {
        "type": "normal"
    },
    "573": {
        "type": "normal"
    },
    "574": {
        "type": "psychic"
    },
    "575": {
        "type": "psychic"
    },
    "576": {
        "type": "psychic"
    },
    "577": {
        "type": "psychic"
    },
    "578": {
        "type": "psychic"
    },
    "579": {
        "type": "psychic"
    },
    "580": {
        "type": "water"
    },
    "581": {
        "type": "water"
    },
    "582": {
        "type": "ice"
    },
    "583": {
        "type": "ice"
    },
    "584": {
        "type": "ice"
    },
    "585": {
        "type": "normal"
    },
    "586": {
        "type": "normal"
    },
    "587": {
        "type": "electric"
    },
    "588": {
        "type": "bug"
    },
    "589": {
        "type": "bug"
    },
    "590": {
        "type": "grass"
    },
    "591": {
        "type": "grass"
    },
    "592": {
        "type": "water"
    },
    "593": {
        "type": "water"
    },
    "594": {
        "type": "water"
    },
    "595": {
        "type": "bug"
    },
    "596": {
        "type": "bug"
    },
    "597": {
        "type": "grass"
    },
    "598": {
        "type": "grass"
    },
    "599": {
        "type": "steel"
    },
    "600": {
        "type": "steel"
    },
    "601": {
        "type": "steel"
    },
    "602": {
        "type": "electric"
    },
    "603": {
        "type": "electric"
    },
    "604": {
        "type": "electric"
    },
    "605": {
        "type": "psychic"
    },
    "606": {
        "type": "psychic"
    },
    "607": {
        "type": "ghost"
    },
    "608": {
        "type": "ghost"
    },
    "609": {
        "type": "ghost"
    },
    "610": {
        "type": "dragon"
    },
    "611": {
        "type": "dragon"
    },
    "612": {
        "type": "dragon"
    },
    "613": {
        "type": "ice"
    },
    "614": {
        "type": "ice"
    },
    "615": {
        "type": "ice"
    },
    "616": {
        "type": "bug"
    },
    "617": {
        "type": "bug"
    },
    "618": {
        "type": "ground"
    },
    "619": {
        "type": "fighting"
    },
    "620": {
        "type": "fighting"
    },
    "621": {
        "type": "dragon"
    },
    "622": {
        "type": "ground"
    },
    "623": {
        "type": "ground"
    },
    "624": {
        "type": "dark"
    },
    "625": {
        "type": "dark"
    },
    "626": {
        "type": "normal"
    },
    "627": {
        "type": "normal"
    },
    "628": {
        "type": "normal"
    },
    "629": {
        "type": "dark"
    },
    "630": {
        "type": "dark"
    },
    "631": {
        "type": "fire"
    },
    "632": {
        "type": "bug"
    },
    "633": {
        "type": "dark"
    },
    "634": {
        "type": "dark"
    },
    "635": {
        "type": "dark"
    },
    "636": {
        "type": "bug"
    },
    "637": {
        "type": "bug"
    },
    "638": {
        "type": "steel"
    },
    "639": {
        "type": "rock"
    },
    "640": {
        "type": "grass"
    },
    "641": {
        "type": "flying"
    },
    "642": {
        "type": "electric"
    },
    "643": {
        "type": "dragon"
    },
    "644": {
        "type": "dragon"
    },
    "645": {
        "type": "ground"
    },
    "646": {
        "type": "dragon"
    },
    "647": {
        "type": "water"
    },
    "648": {
        "type": "normal"
    },
    "649": {
        "type": "bug"
    }
}




export default pokemonTypes;