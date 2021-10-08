let FieldService =  {
    getField: function(id) {
        return {
            "label": "Sales region",
            "required": false,
            "choices": [
                "Asia",
                "Australia",
                "Western Europe",
                "North America",
                "Eastern Europe",
                "Latin America",
                "Middle East and Africa"
            ],
            "displayAlpha": true,
            "default": "North America"
        }
    },
    saveField: function (fieldJson) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(fieldJson)
        };
        fetch('http://www.mocky.io/v2/566061f21200008e3aabd919', requestOptions)
            .then(response => response.json())
            .then(data => console.log('Response from mock POST call: ',data));
    }
}

export default FieldService
