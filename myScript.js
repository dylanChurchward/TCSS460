$(function () {

    // keyup event listener for celcius text box
    $("#celcius").on("keyup", async function () {
        const url =`http://localhost:3000/celciusToFahrenheit/` + $(this).val();
        const response = await fetch(url, {
            method: 'GET'
        })

        const responseData = await response.json();
        $("#fahrenheit").val(responseData.result);
    });

    // keyup event listener for fahrenheit text box
    $("#fahrenheit").on("keyup", async function () {
        const url =`http://localhost:3000/fahrenheitToCelcius/` + $(this).val();
        const response = await fetch(url, {
            method: 'GET'
        })

        const responseData = await response.json();
        $("#celcius").val(responseData.result);

    });

    // keyup event listener for centimeters text box
    $("#centimeters").on("keyup", async function () {
        const url =`http://localhost:3000/centimetersToInches/` + $(this).val();
        const response = await fetch(url, {
            method: 'GET'
        })

        const responseData = await response.json();
        $("#inches").val(responseData.result);
    });

    // keyup event listener for inches text box
    $("#inches").on("keyup", async function () {
        const url =`http://localhost:3000/inchesToCentimeters/` + $(this).val();
        const response = await fetch(url, {
            method: 'GET'
        })

        const responseData = await response.json();
        $("#centimeters").val(responseData.result);
    });

    // keyup event listener for pounds text box
    $("#pounds").on("keyup", async function () {
        const url =`http://localhost:3000/poundsToKilograms/` + $(this).val();
        const response = await fetch(url, {
            method: 'GET'
        })

        const responseData = await response.json();
        $("#kilograms").val(responseData.result);
    });

    // keyup event listener for kilograms text box
    $("#kilograms").on("keyup", async function () {
        const url =`http://localhost:3000/kilogramsToPounds/` + $(this).val();
        const response = await fetch(url, {
            method: 'GET'
        })

        const responseData = await response.json();
        $("#pounds").val(responseData.result);
    });
});