# Sipka ClO<sub>2</sub> calculator

This project was created to calculate Chlorine Dioxide gas in a given space from Sipka Labs controlled release Chlorine Dioxide powdered mix.
This calculation helps how much Chlorine Dioxide mix can generate Chlorine Dioxide for a given space in cubic feet, or the reverse. 
The manufacturing of powdered mix to generate a safer level of anti-viral Chlorine Dioxide products.


## Features
This calculator uses high-level chemistry for applying practically (Ideal Gas Law: PV=nRT) to dynamically calculate the concentration of ClO<sub>2</sub> gas released according to 8% times the amount of ClO<sub>2</sub>-generating product and the volume of space. <br>( input_mass + input_volume -> output_concentration )<br><br> 
The reverse calculation can also be computed, meaning given the desired concentration of ClO<sub>2</sub> in a volume of space, the result will be the amount of powdered ClO<sub>2</sub>-generating product. <br>( output_mass <- input_volume + input_concentration )<br><br>
The calculations under the hood have been simplified, but for a full walkthrough of the math, you can click "Show calculations" to reveal step-by-step calculations and explanations. Once you understand these details, you can click "Hide calculations" to hide this.<br><br>
There is also some input validation. The inputs are required to be numbers and if one or more fields are empty, the calculation will not run and the labels of the empty fields will turn red to remind the user to enter the required values in order to calculate the desired result.

## Design reasoning
This webpage was designed in Figma using general design principles and color theory. I designed the Desktop view first as that is the most robust version and once that is figured out, the mobile version will simply have some elements removed, relocated, and resized.
### Layout and element design
I did not want the body to take up the entire width, so I added some left-right margins to limit the working space to about 80%. This was done so that our eyes can focus on the center, and find all the important information without scanning too much. <br><br>
Overall, I wanted to include plenty of whitespace around most elements so the design would not feel cramped. I ensured that each section (including 2 inputs, 1 output, the calculate button, show calculations, and the calculation details) were grouped together through spacing and a divider line.
The calculate button was positioned below the inputs to encourage the user to enter the inputs before clicking Calculate.<br><br>
For the calculation details, it is a centered box with each calculation on a separate row. The rows are distinguished by alternating the background color from white to off-white.<br><br>
The "Show Calculations" and "Hide Calculations" were purposely designed not like buttons, but instead like links. They will be clicked much less often than the Calculate buttons because not everyone will want to see the detailed calculations. So I designed them to be less clickable, but still recognizable as clickable.<br><br>
The inputs are simple white boxes with a border. This feels natural for inputs in the modern design space, as you see a blank box to enter something into. <br>
I wanted to make the outputs look distinct from the inputs. So instead of a full light border, it has a dark bottom border. This acts like an underline under the final answer. However, with just the underline, the design felt empty and bland; so I added a half-circle under the output to signify the result as something special. Circle is a perfect shape and acts nicely in this context to hold up and emphasize the calculated output answer.<br><br>
For the footer, I chose to make it 100% wide, as to act as a bottom cap for the entire webpage. In its middle, I created a simplified business card with the company logo, a slogan, and some general information. The default size of this card is aligned with the golden ratio.<br><br>
As a note, almost all elements have rounded corners of either 5px or 10px. This was done to make each element softer and more approachable for the human eye, yet it is not rounded too much as to appear unprofessional.
### Colors
The colors of this project were chosen deliberately. The dark purple, used mostly for important text and the output field, was sampled directly from the company's logo. This was important as I wanted this webpage to fit nicely with the company's brand and color scheme. The red underline under the page title is also sampled directly from the company's logo.<br><br>
The yellow background color has two factors. Firstly, it is the complimentary color of this purple, except its brightness was increased. Secondly, this color is close to the actual color of the chemical when exposed to water.<br><br>
All other colors are brighter and desaturated versions of the main purple. I made sure that the Calculate button has a decent contrast level with the background. This lighter purple is still the complimentary hue to the yellow but it has less saturation, so it is easy on the eye, while still grabbing attention.<br>
The grays and off-whites are very desaturated versions of purple, but it is not 100% gray. I wanted to keep the color in this design so that it would not be boring and the colors would be harmonious. <br><br>
The colors of interactable elements get darker than their original color when hovered over, focused using tab, or activated when clicked. This was done to add interest and also confirm to the user what they selected.
## Coding
This webpage was made with HTML, CSS, and JavaScript. The layout of certain elements was figured out on paper before code implementation. However, there was an issue regarding the layout of the calculation details once I had begun coding the CSS. This was due to different screen sizes needing slightly different layouts. When the view width gets smaller, instead of calculation on the left and explanation on the right, they should be stacked on top of each other. Using display:flex on each row was the natural solution, however, position:absolute was needed to position the explanation portion of each row to left:55%. With top:50% there was some strange vertical shifting that was only able to be countered using an offset with css transform. Even though the vertical position of these elements is not perfect, they are still very readable.<br>
Everything else was relatively easy to style. <br><br>
For the functionality, javascript was required. It works by grabbing the elements from the DOM and listening for clicks on the calculate button. Once clicked, I get the inputs and validate them to make sure they are not empty. If they are empty, I change the text color to red to signify that that field is required. Once validated, I run the calculate() function. This function calculates the final result using a pre-calculated conversion factor. It then performs 8 calculations and displays the result of each using formatted strings and innerHTML. Each value, when displayed, is rounded using an all-purpose rounding function on line 275. Note that rounded values are never used for the actual calculation, it is simply used to simplify the displayed value. This was done so that the math would be as accurate as possible while increasing the readability of the numbers. For the show/hide calculations, "Show calculations" only works when there is a calculation to show, meaning if the output field is not empty and "show calculations" is clicked. "Hide calculations" is only visible inside the calculation details box. 

There is quite a bit of repetition in this code because there are two sections, for two different formulas, 2 different sets of input/output fields, variables, calculate buttons, and details. If more sections were required, I could refactor the code to pull DOM elements using querySelectorAll instead of getElementById, and set up each function using arrays of elements and elements as parameters, <strong>but it is not needed and it would overcomplicate the code.</strong> Simple solutions that work well are best for small projects.
