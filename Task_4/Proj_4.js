const Span = document.getElementById("result");
const animationedElement = document.getElementById("result");
const del= document.getElementById("del");

function appendValue(value){
    if(Span.textContent === '|'){
        // Span.removeChild(Span.firstChild);
        Span.textContent = '';
    }
    Span.classList.add('paused');
    Span.append(value);    
}

del.addEventListener("click", () => {
    let display = Span.textContent;
    Span.textContent = display.substring(0, display.length - 1);

    // Check if the content becomes empty after deletion
    if (Span.textContent === "") {
        // If content is empty, remove the 'paused' class
        Span.classList.remove('paused');
        // Set the content back to '|' symbol
        Span.textContent = "|";
    }
});


function calculate() {
    let expression = Span.textContent;
    
    try {
        let result = eval(expression);
        if (isNaN(result)) {
            // If result is NaN, display error
            alert("Error: Invalid expression");
        } else {
            // Update the display with the result
            Span.textContent = result;
        }
    } catch (error) {
        // If an error occurs during evaluation, display error message
        alert("Error: Invalid expression");
    }
}

function ACbtn(){
        Span.textContent = "|"; // Reset the display content to '|'
        Span.classList.remove('paused'); 
}