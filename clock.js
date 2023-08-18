const form = document.querySelector('.form');
const result = document.querySelector('.result');

let intervalId;

function clock(timeZone) {
    const date = new Date();
    const options = {
        timeZone: timeZone
    };
    return date.toLocaleTimeString('en-US', options);
}

function recievesEvent(event) {
    event.preventDefault();

    const select = form.querySelector('select');
    let timeZone = 'UTC';

    if (intervalId) {
        clearInterval(intervalId);
    }

    intervalId = setInterval(function () {
        result.innerHTML = clock(timeZone);
    }, 1000);

    if (select.value === 'Afghanistan') {
        timeZone = 'Asia/Kabul';
    } else if (select.value === 'South Africa') {
        timeZone = 'Africa/Johannesburg';
    } else if (select.value === 'Albania') {
        timeZone = 'Europe/Tirane';
    } else if (select.value === 'Germany') {
        timeZone = 'Europe/Berlin';
    } else if (select.value === 'Andorra') {
        timeZone = 'Europe/Andorra';
    } else if (select.value === 'Angola') {
        timeZone = 'Africa/Luanda';
    } else if (select.value === 'Antigua and Barbuda') {
        timeZone = 'America/Antigua';
    } else if (select.value === 'Saudi Arabia') {
        timeZone = 'Asia/Riyadh';
    } else if (select.value === 'Algeria') {
        timeZone = 'Africa/Algiers';
    } else if (select.value === 'Argentina') {
        timeZone = 'America/Argentina/Buenos_Aires';
    } else if (select.value === 'Armenia') {
        timeZone = 'Asia/Yerevan';
    } else if (select.value === 'Australia') {
        timeZone = 'Australia/Sydney';
    } else if (select.value === 'Austria') {
        timeZone = 'Europe/Vienna';
    } else if (select.value === 'Azerbaijan') {
        timeZone = 'Asia/Baku';
    } else if (select.value === 'Bahamas') {
        timeZone = 'America/Nassau';
    } else if (select.value === 'Bahrain') {
        timeZone = 'Asia/Bahrain';
    } else if (select.value === 'Bangladesh') {
        timeZone = 'Asia/Dhaka';
    } else if (select.value === 'Barbados') {
        timeZone = 'America/Barbados';
    } else if (select.value === 'Belarus') {
        timeZone = 'Europe/Minsk';
    } else if (select.value === 'Belgium') {
        timeZone = 'Europe/Brussels';
    } else if (select.value === 'Belize') {
        timeZone = 'America/Belize';
    } else if (select.value === 'Benin') {
        timeZone = 'Africa/Porto-Novo';
    } else if (select.value === 'Bolivia') {
        timeZone = 'America/La_Paz';
    } else if (select.value === 'Bosnia') {
        timeZone = 'Europe/Sarajevo';
    } else if (select.value === 'Botswana') {
        timeZone = 'Africa/Gaborone';
    } else if (select.value === 'Brasilia') {
        timeZone = 'America/Sao_Paulo';
    } else if (select.value === 'Amazon') {
        timeZone = 'America/Manaus';
    } else if (select.value === 'Northeast') {
        timeZone = 'America/Fortaleza';
    } else if (select.value === 'West') {
        timeZone = 'America/Rio_Branco';
    } else if (select.value === 'Brunei') {
        timeZone = 'Asia/Brunei';
    } else if (select.value === 'Bulgaria') {
        timeZone = 'Europe/Sofia';
    } else if (select.value === 'BurkinaFaso') {
        timeZone = 'Africa/Ouagadougou';
    } else if (select.value === 'Burundi') {
        timeZone = 'Africa/Bujumbura';
    } else if (select.value === 'Bhutan') {
        timeZone = 'Asia/Thimphu';
    } else if (select.value === 'CapeVerde') {
        timeZone = 'Atlantic/Cape_Verde';
    } else if (select.value === 'Cameroon') {
        timeZone = 'Africa/Douala';
    } else if (select.value === 'Cambodia') {
        timeZone = 'Asia/Phnom_Penh';
    } else if (select.value === 'Canada') {
        timeZone = 'America/Toronto';
    } else if (select.value === 'Qatar') {
        timeZone = 'Asia/Qatar';
    } else if (select.value === 'Kazakhstan') {
        timeZone = 'Asia/Almaty';
    } else if (select.value === 'Chad') {
        timeZone = 'Africa/Ndjamena';
    } else if (select.value === 'Chile') {
        timeZone = 'America/Santiago';
    } else if (select.value === 'China') {
        timeZone = 'Asia/Shanghai';
    } else if (select.value === 'Cyprus') {
        timeZone = 'Asia/Nicosia';
    } else if (select.value === 'Colombia') {
        timeZone = 'America/Bogota';
    } else if (select.value === 'Comoros') {
        timeZone = 'Indian/Comoro';
    } else if (select.value === 'CongoDR') {
        timeZone = 'Africa/Kinshasa';
    } else if (select.value === 'Congo') {
        timeZone = 'Africa/Brazzaville';
    } else if (select.value === 'NorthKorea') {
        timeZone = 'Asia/Pyongyang';
    } else if (select.value === 'SouthKorea') {
        timeZone = 'Asia/Seoul';
    } else if (select.value === 'IvoryCoast') {
        timeZone = 'Africa/Abidjan';
    } else if (select.value === 'CostaRica') {
        timeZone = 'America/Costa_Rica';
    } else if (select.value === 'Croatia') {
        timeZone = 'Europe/Zagreb';
    } else if (select.value === 'Cuba') {
        timeZone = 'America/Havana';
    } else if (select.value === 'Denmark') {
        timeZone = 'Europe/Copenhagen';
    } else if (select.value === 'Djibouti') {
        timeZone = 'Africa/Djibouti';
    } else if (select.value === 'Dominica') {
        timeZone = 'America/Dominica';
    } else if (select.value === 'Egypt') {
        timeZone = 'Africa/Cairo';
    } else if (select.value === 'ElSalvador') {
        timeZone = 'America/El_Salvador';
    } else if (select.value === 'UnitedArabEmirates') {
        timeZone = 'Asia/Dubai';
    } else if (select.value === 'Ecuador') {
        timeZone = 'America/Guayaquil';
    } else if (select.value === 'Eritrea') {
        timeZone = 'Africa/Asmara';
    } else if (select.value === 'Slovakia') {
        timeZone = 'Europe/Bratislava';
    } else if (select.value === 'Slovenia') {
        timeZone = 'Europe/Ljubljana';
    } else if (select.value === 'Spain') {
        timeZone = 'Europe/Madrid';
    } else if (select.value === 'Eastern') {
        timeZone = 'America/New_York';
    } else if (select.value === 'Central') {
        timeZone = 'America/Chicago';
    } else if (select.value === 'Mountain') {
        timeZone = 'America/Denver';
    } else if (select.value === 'Pacific') {
        timeZone = 'America/Los_Angeles';
    } else if (select.value === 'Alaska') {
        timeZone = 'America/Anchorage';
    } else if (select.value === 'Hawaii') {
        timeZone = 'Pacific/Honolulu';
    } else if (select.value === 'Arizona') {
        timeZone = 'America/Phoenix';
    } else if (select.value === 'Estonia') {
        timeZone = 'Europe/Tallinn';
    } else if (select.value === 'Ethiopia') {
        timeZone = 'Africa/Addis_Ababa';
    } else if (select.value === 'Fiji') {
        timeZone = 'Pacific/Fiji';
    } else if (select.value === 'Philippines') {
        timeZone = 'Asia/Manila';
    } else if (select.value === 'Finland') {
        timeZone = 'Europe/Helsinki';
    } else if (select.value === 'France') {
        timeZone = 'Europe/Paris';
    } else if (select.value === 'Gabon') {
        timeZone = 'Africa/Libreville';
    } else if (select.value === 'Gambia') {
        timeZone = 'Africa/Banjul';
    } else if (select.value === 'Ghana') {
        timeZone = 'Africa/Accra';
    } else if (select.value === 'Georgia') {
        timeZone = 'Asia/Tbilisi';
    } else if (select.value === 'Grenada') {
        timeZone = 'America/Grenada';
    } else if (select.value === 'Greece') {
        timeZone = 'Europe/Athens';
    } else if (select.value === 'Guatemala') {
        timeZone = 'America/Guatemala';
    } else if (select.value === 'Guyana') {
        timeZone = 'America/Guyana';
    } else if (select.value === 'Guinea') {
        timeZone = 'Africa/Conakry';
    } else if (select.value === 'EquatorialGuinea') {
        timeZone = 'Africa/Malabo';
    } else if (select.value === 'GuineaBissau') {
        timeZone = 'Africa/Bissau';
    } else if (select.value === 'Haiti') {
        timeZone = 'America/Port-au-Prince';
    } else if (select.value === 'Netherlands') {
        timeZone = 'Europe/Amsterdam';
    } else if (select.value === 'Honduras') {
        timeZone = 'America/Tegucigalpa';
    } else if (select.value === 'Hungary') {
        timeZone = 'Europe/Budapest';
    } else if (select.value === 'Yemen') {
        timeZone = 'Asia/Aden';
    } else if (select.value === 'MarshallIslands') {
        timeZone = 'Pacific/Majuro';
    } else if (select.value === 'SolomonIslands') {
        timeZone = 'Pacific/Guadalcanal';
    } else if (select.value === 'India') {
        timeZone = 'Asia/Kolkata';
    } else if (select.value === 'Indonesia') {
        timeZone = 'Asia/Jakarta';
    } else if (select.value === 'Iran') {
        timeZone = 'Asia/Tehran';
    } else if (select.value === 'Guatemala') {
        timeZone = 'America/Guatemala';
    } else if (select.value === 'Guyana') {
        timeZone = 'America/Guyana';
    } else if (select.value === 'Guinea') {
        timeZone = 'Africa/Conakry';
    } else if (select.value === 'EquatorialGuinea') {
        timeZone = 'Africa/Malabo';
    } else if (select.value === 'GuineaBissau') {
        timeZone = 'Africa/Bissau';
    } else if (select.value === 'Haiti') {
        timeZone = 'America/Port-au-Prince';
    } else if (select.value === 'Netherlands') {
        timeZone = 'Europe/Amsterdam';
    } else if (select.value === 'Honduras') {
        timeZone = 'America/Tegucigalpa';
    } else if (select.value === 'Hungary') {
        timeZone = 'Europe/Budapest';
    } else if (select.value === 'Yemen') {
        timeZone = 'Asia/Aden';
    } else if (select.value === 'MarshallIslands') {
        timeZone = 'Pacific/Majuro';
    } else if (select.value === 'SolomonIslands') {
        timeZone = 'Pacific/Guadalcanal';
    } else if (select.value === 'India') {
        timeZone = 'Asia/Kolkata';
    } else if (select.value === 'Indonesia') {
        timeZone = 'Asia/Jakarta';
    } else if (select.value === 'Iran') {
        timeZone = 'Asia/Tehran';
    } else if (select.value === 'Iraq') {
        timeZone = 'Asia/Baghdad';
    } else if (select.value === 'Ireland') {
        timeZone = 'Europe/Dublin';
    } else if (select.value === 'Iceland') {
        timeZone = 'Atlantic/Reykjavik';
    } else if (select.value === 'Israel') {
        timeZone = 'Asia/Jerusalem';
    } else if (select.value === 'Italy') {
        timeZone = 'Europe/Rome';
    } else if (select.value === 'Jamaica') {
        timeZone = 'America/Jamaica';
    } else if (select.value === 'Japan') {
        timeZone = 'Asia/Tokyo';
    } else if (select.value === 'Jordan') {
        timeZone = 'Asia/Amman';
    } else if (select.value === 'Kosovo') {
        timeZone = 'Europe/Belgrade';
    } else if (select.value === 'Kuwait') {
        timeZone = 'Asia/Kuwait';
    } else if (select.value === 'Laos') {
        timeZone = 'Asia/Vientiane';
    } else if (select.value === 'Lesotho') {
        timeZone = 'Africa/Maseru';
    } else if (select.value === 'Latvia') {
        timeZone = 'Europe/Riga';
    } else if (select.value === 'Lebanon') {
        timeZone = 'Asia/Beirut';
    } else if (select.value === 'Liberia') {
        timeZone = 'Africa/Monrovia';
    } else if (select.value === 'Libya') {
        timeZone = 'Africa/Tripoli';
    } else if (select.value === 'Liechtenstein') {
        timeZone = 'Europe/Vaduz';
    } else if (select.value === 'Lithuania') {
        timeZone = 'Europe/Vilnius';
    } else if (select.value === 'Luxembourg') {
        timeZone = 'Europe/Luxembourg';
    } else if (select.value === 'NorthMacedonia') {
        timeZone = 'Europe/Skopje';
    } else if (select.value === 'Madagascar') {
        timeZone = 'Indian/Antananarivo';
    } else if (select.value === 'Malaysia') {
        timeZone = 'Asia/Kuala_Lumpur';
    } else if (select.value === 'Malawi') {
        timeZone = 'Africa/Blantyre';
    } else if (select.value === 'Maldives') {
        timeZone = 'Indian/Maldives';
    } else if (select.value === 'Mali') {
        timeZone = 'Africa/Bamako';
    } else if (select.value === 'Malta') {
        timeZone = 'Europe/Malta';
    } else if (select.value === 'Morocco') {
        timeZone = 'Africa/Casablanca';
    } else if (select.value === 'Mauritius') {
        timeZone = 'Indian/Mauritius';
    } else if (select.value === 'Mauritania') {
        timeZone = 'Africa/Nouakchott';
    } else if (select.value === 'Mexico') {
        timeZone = 'America/Mexico_City';
    } else if (select.value === 'Myanmar') {
        timeZone = 'Asia/Yangon';
    } else if (select.value === 'Micronesia') {
        timeZone = 'Pacific/Chuuk';
    } else if (select.value === 'Mozambique') {
        timeZone = 'Africa/Maputo';
    } else if (select.value === 'Moldova') {
        timeZone = 'Europe/Chisinau';
    } else if (select.value === 'Monaco') {
        timeZone = 'Europe/Monaco';
    } else if (select.value === 'Mongolia') {
        timeZone = 'Asia/Ulaanbaatar';
    } else if (select.value === 'Montenegro') {
        timeZone = 'Europe/Podgorica';
    } else if (select.value === 'Namibia') {
        timeZone = 'Africa/Windhoek';
    } else if (select.value === 'Nauru') {
        timeZone = 'Pacific/Nauru';
    } else if (select.value === 'Nepal') {
        timeZone = 'Asia/Kathmandu';
    } else if (select.value === 'Nicaragua') {
        timeZone = 'America/Managua';
    } else if (select.value === 'Niger') {
        timeZone = 'Africa/Niamey';
    } else if (select.value === 'Nigeria') {
        timeZone = 'Africa/Lagos';
    } else if (select.value === 'Norway') {
        timeZone = 'Europe/Oslo';
    } else if (select.value === 'NewZealand') {
        timeZone = 'Pacific/Auckland';
    } else if (select.value === 'Oman') {
        timeZone = 'Asia/Muscat';
    } else if (select.value === 'Palau') {
        timeZone = 'Pacific/Palau';
    } else if (select.value === 'Palestine') {
        timeZone = 'Asia/Gaza';
    } else if (select.value === 'Panama') {
        timeZone = 'America/Panama';
    } else if (select.value === 'PapuaNewGuinea') {
        timeZone = 'Pacific/Port_Moresby';
    } else if (select.value === 'Pakistan') {
        timeZone = 'Asia/Karachi';
    } else if (select.value === 'Paraguay') {
        timeZone = 'America/Asuncion';
    } else if (select.value === 'Peru') {
        timeZone = 'America/Lima';
    } else if (select.value === 'Poland') {
        timeZone = 'Europe/Warsaw';
    } else if (select.value === 'Portugal') {
        timeZone = 'Europe/Lisbon';
    } else if (select.value === 'Kenya') {
        timeZone = 'Africa/Nairobi';
    } else if (select.value === 'Kyrgyzstan') {
        timeZone = 'Asia/Bishkek';
    } else if (select.value === 'UnitedKingdom') {
        timeZone = 'Europe/London';
    } else if (select.value === 'CentralAfricanRepublic') {
        timeZone = 'Africa/Bangui';
    } else if (select.value === 'DominicanRepublic') {
        timeZone = 'America/Santo_Domingo';
    } else if (select.value === 'CzechRepublic') {
        timeZone = 'Europe/Prague';
    } else if (select.value === 'Romania') {
        timeZone = 'Europe/Bucharest';
    } else if (select.value === 'Rwanda') {
        timeZone = 'Africa/Kigali';
    } else if (select.value === 'Russia') {
        timeZone = 'Europe/Moscow';
    } else if (select.value === 'Samoa') {
        timeZone = 'Pacific/Apia';
    } else if (select.value === 'SanMarino') {
        timeZone = 'Europe/San_Marino';
    } else if (select.value === 'SaintLucia') {
        timeZone = 'America/St_Lucia';
    } else if (select.value === 'SaintKittsAndNevis') {
        timeZone = 'America/St_Kitts';
    } else if (select.value === 'SaoTomeAndPrincipe') {
        timeZone = 'Africa/Sao_Tome';
    } else if (select.value === 'SaintVincentAndTheGrenadines') {
        timeZone = 'America/St_Vincent';
    } else if (select.value === 'Senegal') {
        timeZone = 'Africa/Dakar';
    } else if (select.value === 'SierraLeone') {
        timeZone = 'Africa/Freetown';
    } else if (select.value === 'Serbia') {
        timeZone = 'Europe/Belgrade';
    } else if (select.value === 'Seychelles') {
        timeZone = 'Indian/Mahe';
    } else if (select.value === 'Singapore') {
        timeZone = 'Asia/Singapore';
    } else if (select.value === 'Syria') {
        timeZone = 'Asia/Damascus';
    } else if (select.value === 'Somalia') {
        timeZone = 'Africa/Mogadishu';
    } else if (select.value === 'SriLanka') {
        timeZone = 'Asia/Colombo';
    } else if (select.value === 'Eswatini') {
        timeZone = 'Africa/Mbabane';
    } else if (select.value === 'Sudan') {
        timeZone = 'Africa/Khartoum';
    } else if (select.value === 'SouthSudan') {
        timeZone = 'Africa/Juba';
    } else if (select.value === 'Sweden') {
        timeZone = 'Europe/Stockholm';
    } else if (select.value === 'Switzerland') {
        timeZone = 'Europe/Zurich';
    } else if (select.value === 'Suriname') {
        timeZone = 'America/Paramaribo';
    } else if (select.value === 'Thailand') {
        timeZone = 'Asia/Bangkok';
    } else if (select.value === 'Tajikistan') {
        timeZone = 'Asia/Dushanbe';
    } else if (select.value === 'Tanzania') {
        timeZone = 'Africa/Dar_es_Salaam';
    } else if (select.value === 'TimorLeste') {
        timeZone = 'Asia/Dili';
    } else if (select.value === 'Togo') {
        timeZone = 'Africa/Lome';
    } else if (select.value === 'Tonga') {
        timeZone = 'Pacific/Tongatapu';
    } else if (select.value === 'TrinidadAndTobago') {
        timeZone = 'America/Port_of_Spain';
    } else if (select.value === 'Tunisia') {
        timeZone = 'Africa/Tunis';
    } else if (select.value === 'Turkmenistan') {
        timeZone = 'Asia/Ashgabat';
    } else if (select.value === 'Turkey') {
        timeZone = 'Europe/Istanbul';
    } else if (select.value === 'Tuvalu') {
        timeZone = 'Pacific/Funafuti';
    } else if (select.value === 'Ukraine') {
        timeZone = 'Europe/Kiev';
    } else if (select.value === 'Uganda') {
        timeZone = 'Africa/Kampala';
    } else if (select.value === 'Uruguay') {
        timeZone = 'America/Montevideo';
    } else if (select.value === 'Uzbekistan') {
        timeZone = 'Asia/Tashkent';
    } else if (select.value === 'Vanuatu') {
        timeZone = 'Pacific/Efate';
    } else if (select.value === 'Vatican') {
        timeZone = 'Europe/Vatican';
    } else if (select.value === 'Venezuela') {
        timeZone = 'America/Caracas';
    } else if (select.value === 'Vietnam') {
        timeZone = 'Asia/Ho_Chi_Minh';
    } else if (select.value === 'Zambia') {
        timeZone = 'Africa/Lusaka';
    } else if (select.value === 'Zimbabwe') {
        timeZone = 'Africa/Harare';
    }

    result.innerHTML = clock(timeZone);
}

form.addEventListener('submit', recievesEvent);
