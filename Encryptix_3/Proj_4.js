const Span = document.getElementById("result");
const animationedElement = document.getElementById("result");
const del= document.getElementById("del");

function appendValue(value){
    if(Span.textContent === '|'){
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
        Span.classList.remove('paused');
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
        alert("Error: Invalid expression");
    }
}

function ACbtn(){
        Span.textContent = "|";  
        Span.classList.remove('paused'); 
}