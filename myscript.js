// grab DOM elements
const input_mass1 = document.getElementById("input-mass1");
const input_volume1 = document.getElementById("input-volume1");
const output_conc1 = document.getElementById("output-conc1");
const output_conc1_mobile = document.getElementById("output-conc1-mobile");

const input_volume2 = document.getElementById("input-volume2");
const input_conc2 = document.getElementById("input-conc2");
const output_mass2 = document.getElementById("output-mass2");
const output_mass2_mobile = document.getElementById("output-mass2-mobile");


const calc_btn1 = document.getElementById("calc-btn1");
const calc_btn2 = document.getElementById("calc-btn2");
//const CONVERSION_FACTOR = 1296.418671059857; // 0.1x solid to gas
// const CONVERSION_FACTOR = 1296.4; // 0.1x solid to gas rounded
const CONVERSION_FACTOR = 1037.13493684788584; //0.08x solid to gas accurate

const labels = document.querySelectorAll(".label");
// calc_rows is where to display each calculation step
const calc_rows1 = document.querySelectorAll("#calc-details1 .calc-row p:first-child");
const calc_rows2 = document.querySelectorAll("#calc-details2 .calc-row p:first-child");

// show calculations, onclick show calc-details1
const show_calc1 = document.querySelector(".show-calc1");
const hide_calc1 = document.querySelectorAll(".hide-calc1");
const calc_details1 = document.getElementById("calc-details1");
const hidden_hide_calc1 = document.querySelector(".hide-calc1.hidden-label");
// console.log(hidden_hide_calc1);

// by default hide calculation details
calc_details1.style.display = "none";
// if show calculations is clicked, show calc-details
show_calc1.addEventListener("click", function () {
    // if output is not empty
    if (output_conc1.textContent || output_conc1_mobile.textContent) {
        // show big block of calculation details
        calc_details1.style.display = "block";
        show_calc1.style.display = "none";
        hidden_hide_calc1.style.display = "block";

    }

})
// if hide calculations is clicked, hide calc-details
hide_calc1[0].addEventListener("click", function () {
    calc_details1.style.display = "none";
    hidden_hide_calc1.style.display = "none";
    show_calc1.style.display = "block";
})
hide_calc1[1].addEventListener("click", function () {
    calc_details1.style.display = "none";
    hidden_hide_calc1.style.display = "none";
    show_calc1.style.display = "block";
})

// show calculations, onclick show calc-details2
const show_calc2 = document.querySelector(".show-calc2");
const hide_calc2 = document.querySelectorAll(".hide-calc2");
const calc_details2 = document.getElementById("calc-details2");
const hidden_hide_calc2 = document.querySelector(".hide-calc2.hidden-label");
// by default hide calculation details
calc_details2.style.display = "none";
// if show calculations is clicked, show calc-details
show_calc2.addEventListener("click", function () {
    // if output is not empty
    if (output_mass2.textContent || output_mass2_mobile.textContent) {
        calc_details2.style.display = "block";
        show_calc2.style.display = "none";
        hidden_hide_calc2.style.display = "block";
    }
});
// if hide calculations is clicked, hide calc-details
hide_calc2[0].addEventListener("click", function () {
    calc_details2.style.display = "none";
    hidden_hide_calc2.style.display = "none";
    show_calc2.style.display = "block";
});
hide_calc2[1].addEventListener("click", function () {
    calc_details2.style.display = "none";
    hidden_hide_calc2.style.display = "none";
    show_calc2.style.display = "block";
});

// initialize input var values
let mass1 = null;
let volume1 = null;
let conc2 = null;
let volume2 = null;

// function to run when calculate button is clicked
calc_btn1.addEventListener("click", function () {
    // console.log(calc_btn1);
    // console.log("calc btn clicked");
    let result1 = null;
    // if fields are not empty and function returns success
    if (getForm1Values() == 0) {
        // run calculate function
        result1 = calculate1();
    }
    // set output field to final result from calculator
    // if forms were empty and calculate function was not run, set the value to the original result = null
    //console.log(result1);
    output_conc1.textContent = result1;
    output_conc1_mobile.textContent = result1;
    
});
calc_btn2.addEventListener("click", function () {
    let result2 = null;
    // if fields are not empty and function returns success
    if (getForm2Values() == 0) {
        // run calculate function
        result2 = calculate2();
        
    }
    // set output field to final result from calculator
    // if forms were empty and calculate function was not run, set the value to the original result = null
    output_mass2.textContent = result2;
    output_mass2_mobile.textContent = result2;
});

// validate inputs, making sure they are not empty,
// if they are empty, set label color to red and do not calculate
// if they are not empty and have a user inputted value, get that value, store it into the appropriate variable mass1, volume1
function getForm1Values() {
    
    let return_value = 0;
    // get values from input fields
    mass1 = input_mass1.value;
    volume1 = input_volume1.value;
    // console.log(volume1);
    // if field is empty, do not calculate, turn appropriate p.label red
    if (!mass1) {
        //console.log("change color of enter mass label")
        labels[0].style.color = "red";
        return_value = 1;
    }
    else {
        // if input mass is valid, set color back to default
        labels[0].style.color = "#382B59";
        return_value = 0;
    }
    if (!volume1) {
        // console.log("change color of enter volume label")
        labels[1].style.color = "red";
        return_value = 1;
    }
    else {
        // if input volume is valid, set color back to default
        labels[1].style.color = "#382B59";
        return_value = 0;
    }
    if(!mass1 || !volume1) {
        return_value = 1;
    }

    //console.log("return"+return_value);
    // return 0 means success, no error, non-empty input fields
    return return_value;
}
// validate inputs, making sure they are not empty,
// if they are empty, set label color to red and do not calculate
// if they are not empty and have a user inputted value, get that value, store it into the appropriate variable mass1, volume1
function getForm2Values() {
    
    let return_value = 0;
    // get values from input fields
    conc2 = input_conc2.value;
    volume2 = input_volume2.value;
    // console.log(volume1);
    // if field is empty, do not calculate, turn appropriate p.label red
    if (!volume2) {
        // console.log("change color of enter volume label")
        labels[5].style.color = "red";
        return_value = 1;
    }
    else {
        // if input mass is valid, set color back to default
        labels[5].style.color = "#382B59";
        return_value = 0;
    }
    if (!conc2) {
        // console.log("change color of enter volume label")
        labels[6].style.color = "red";
        return_value = 1;
    }
    else {
        // if input volume is valid, set color back to default
        labels[6].style.color = "#382B59";
        return_value = 0;
    }
    if (!volume2 || !conc2) {
        return_value = 1;
    }

    // return 0 means success, no error, non-empty input fields
    return return_value;
}

function calculate1() {
    // fast calculation 2.5928373421197146
    let final_result = mass1 * CONVERSION_FACTOR;
    final_result /= volume1;

    // in depth calculation
    let new_val = null;
    let prev_val = null;
    
    new_val = mass1 * 0.08; // 8% yield from solid mix to gas
    calc_rows1[0].innerHTML = `<span class="purple-text">${roundToDecimals(mass1,3)} g</span> * 0.08 <br>= ${roundToDecimals(new_val,3)} g`;

    prev_val = new_val;

    new_val = prev_val / 67;
    calc_rows1[1].innerHTML = `${roundToDecimals(prev_val,3)} g * 1 mole / 67 g <br>= ${roundToDecimals(new_val,3)}`;

    prev_val = new_val;

    new_val = prev_val * 22.416, 12;
    calc_rows1[2].innerHTML = `${roundToDecimals(prev_val,3)} mole * 22.416 L / 1 mole <br>= ${roundToDecimals(new_val,3)} L`;

    prev_val = new_val;

    new_val = prev_val * 1000, 12;
    calc_rows1[3].innerHTML = `${roundToDecimals(prev_val,3)} L * 1000 mL / 1 L <br>= ${roundToDecimals(new_val,3)} ml`;

    prev_val = new_val;

    new_val = prev_val * 298.15 / 273.15;
    calc_rows1[4].innerHTML = `${roundToDecimals(prev_val,3)} * 298.15 K / 273.15 K <br>= ${roundToDecimals(new_val,3)}`;

    prev_val = new_val;

    new_val = prev_val * 1;
    calc_rows1[5].innerHTML = `${roundToDecimals(prev_val,3)} * 760 mmHg / 760 mmHg * 1<br>= ${roundToDecimals(new_val,3)}`;

    let new_volume1 = volume1 / 35.5;
    calc_rows1[6].innerHTML = `1 / <span class="purple-text">${roundToDecimals(volume1,3)} ft<sup>3</sup></span> * 35.5 ft<sup>3</sup> / 1 m<sup>3</sup> <br>= 1 / ${roundToDecimals(new_volume1,3)} m<sup>3</sup>`;

    new_val = prev_val / new_volume1;
    calc_rows1[7].innerHTML = `${roundToDecimals(prev_val,3)} * 1 / ${roundToDecimals(new_volume1,3)} <br>= <span class="purple-text">${roundToDecimals(new_val,3)} ppm</span>`;

    console.log(new_val);
    // round ppm value to 1 decimal place. Even though it is not necesarily practical, it reduces the margin of error from rounding
    return roundToDecimals( final_result, 1 )
    
}

function calculate2() {
    let final_result = conc2 * volume2
    final_result /= CONVERSION_FACTOR;

    // in depth calculation
    let new_val = null;
    let prev_val = null;
    
    let new_volume2 = volume2 / 35.5;
    calc_rows2[0].innerHTML = `${roundToDecimals(volume2,3)} ft<sup>3</sup> * 1 m<sup>3</sup> / 35.5 ft<sup>3</sup> <br>= ${roundToDecimals(new_volume2,3)} m<sup>3</sup>`;

    new_val = conc2 * new_volume2;
    calc_rows2[1].innerHTML = `${roundToDecimals(conc2,3)} ppm * ${roundToDecimals(new_volume2,3)} m<sup>3</sup> <br>= ${new_val} ml`;

    prev_val = new_val;

    new_val = prev_val * 1;
    calc_rows2[2].innerHTML = `${roundToDecimals(prev_val,3)} * 760 mmHg / 760 mmHg * 1 <br>= ${roundToDecimals(new_val,3)}`;

    prev_val = new_val;

    new_val = prev_val * 273.15 / 298.15;
    calc_rows2[3].innerHTML = `${roundToDecimals(prev_val,3)} * 273.15 K / 298.15 K <br>= ${roundToDecimals(new_val,3)}`;

    prev_val = new_val;

    new_val = prev_val / 1000;
    calc_rows2[4].innerHTML = `${roundToDecimals(prev_val,3)} ml * 1 L / 1000 ml <br>= ${roundToDecimals(new_val,3)} L `;

    prev_val = new_val;

    new_val = prev_val / 22.416;
    calc_rows2[5].innerHTML = `${roundToDecimals(prev_val,3)} L * 1 mole / 22.416 L <br>= ${roundToDecimals(new_val,3)} mole`;

    prev_val = new_val;

    new_val = prev_val * 67;
    calc_rows2[6].innerHTML = `${roundToDecimals(prev_val,3)} mole * 67 g / 1 mole <br>= ${roundToDecimals(new_val,3)} g`;

    prev_val = new_val;

    new_val = prev_val / 0.08;
    calc_rows2[7].innerHTML = `${roundToDecimals(prev_val,3)} g * 8 <br>= ${roundToDecimals(new_val,3)} g`;

    console.log(new_val); 
    // round final result to 1 decimal place
    return roundToDecimals( final_result , 1);
    // console.log(final_result);
}

// used to round calculated numbers
// round number to # decimal
function roundToDecimals(num, numdecimals) {
    return (Math.round(num*(10**numdecimals))) / (10**numdecimals);
}
//console.log("TEST"+roundToDecimals(0.123456, 3)); // RETURN 0.123

