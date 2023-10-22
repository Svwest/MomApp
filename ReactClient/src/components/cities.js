//https://data.gov.il/dataset/unified/resource/e9701dcb-9f1c-43bb-bd44-eb380ade542f

import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('https://data.gov.il/api/3/action/datastore_search', {
      params: {
        resource_id: 'e9701dcb-9f1c-43bb-bd44-eb380ade542f',
        limit: 1500, // 1273
      },
    });

    const records = response.data.result.records;
    const recordsArray = Object.values(records);  
    return recordsArray; // Возвращаем массив записей
  
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
};

export default fetchData;



/*
"help": "https://data.gov.il/api/3/action/help_show?name=datastore_search",
    "success": true,
    "result": {
        "include_total": true,
        "limit": 1500,
        "records_format": "objects",
        "resource_id": "e9701dcb-9f1c-43bb-bd44-eb380ade542f",
        "total_estimation_threshold": null,
        "records": [
            {
                "_id": 1,
                "symbol_number": 967,
                "name_in_hebrew": "אבו ג'ווייעד (שבט) ",
                "name_in_english": "ABU JUWEI'ID ",
                "name_in_arabic": "أبو جويعد",
                "name_in_russian": null,
                "X": "206977.0073",
                "Y": "565472.1393"
            },
            {
                "_id": 2,
                "symbol_number": 472,
                "name_in_hebrew": "אבו גוש ",
                "name_in_english": "ABU GHOSH ",
                "name_in_arabic": "أبو غوش",
                "name_in_russian": null,
                "X": "210534.3263",
                "Y": "634813.9596"
            },
            {
                "_id": 3,
                "symbol_number": 473,
                "name_in_hebrew": "אבו סנאן ",
                "name_in_english": "ABU SINAN ",
                "name_in_arabic": "أبو سنان",
                "name_in_russian": null,
                "X": "216186.6566",
                "Y": "762891.9453"
            },         {
                "_id": 1256,
                "symbol_number": 778,
                "name_in_hebrew": "תרום ",
                "name_in_english": "TARUM ",
                "name_in_arabic": "تَروم",
                "name_in_russian": null,
                "X": "198418.1692",
                "Y": "632307.074"
            }
        ],
        "fields": [
            {
                "id": "_id",
                "type": "int"
            },
            {
                "id": "symbol_number",
                "type": "numeric",
                "info": {
                    "label": "סמל יישוב ",
                    "notes": "",
                    "type_override": ""
                }
            },
            {
                "id": "name_in_hebrew",
                "type": "text",
                "info": {
                    "label": "שם היישוב בעברית",
                    "notes": "",
                    "type_override": ""
                }
            },
            {
                "id": "name_in_english",
                "type": "text",
                "info": {
                    "label": "שם היישוב באנגלית",
                    "notes": "",
                    "type_override": ""
                }
            },
            {
                "id": "name_in_arabic",
                "type": "text",
                "info": {
                    "label": "שם היישוב בערבית",
                    "notes": "",
                    "type_override": ""
                }
            },
            {
                "id": "name_in_russian",
                "type": "text",
                "info": {
                    "label": "שם ישוב ברוסית",
                    "notes": "",
                    "type_override": ""
                }
            },
            {
                "id": "X",
                "type": "text",
                "info": {
                    "label": "קאורדינטת מזרח",
                    "notes": "",
                    "type_override": ""
                }
            },
            {
                "id": "Y",
                "type": "text",
                "info": {
                    "label": "קאורדינטת צפון",
                    "notes": "",
                    "type_override": ""
                }
            }
        ],
        "_links": {
            "start": "/api/3/action/datastore_search?resource_id=e9701dcb-9f1c-43bb-bd44-eb380ade542f&limit=1500",
            "next": "/api/3/action/datastore_search?resource_id=e9701dcb-9f1c-43bb-bd44-eb380ade542f&limit=1500&offset=1500"
        },
        "total": 1256,
        "total_was_estimated": false
    }
}
*/
