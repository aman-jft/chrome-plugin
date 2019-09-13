var data = [
    {
        'TYPE': 'T',
        'VALUE': 'E5545941'
    },
    {
        'TYPE': 'P',
        'VALUE': 'Breakthewheel@321'
    },
    {
        'TYPE': 'P',
        'VALUE': 'Breakthewheel@101'
    },
    {
        'TYPE': 'T',
        'VALUE': 'SVCACCT_PRD_CCP'
    },
    {
        'TYPE': 'P',
        'VALUE': 'u2sMg01Uz8U24eLb'
    },
];
function displayData() {

    var root = document.getElementsByClassName("data");
    var fields = '<ol>';
    data.forEach((d, i) => {
        fields = fields + `
        <li>
            <div class="row">
                
                <input id="value${i + 1}" type="${d.TYPE == 'P' ? 'password' : 'text'}" value="${d.VALUE}" />
                <a class="visiblity ${d.TYPE == 'P' ? 'visibilityOn' : ''}" cust-value="value${i+1}"> <i class="material-icons" style="font-size:24px">${d.TYPE == 'P' ? 'visibility_off' : 'visibility'}</i></a>
                <a class="copy" cust-value="value${i+1}"> <i class="material-icons" style="font-size:24px">content_copy</i></a>
            </div>
        </li>
        `;
    });
    fields = fields + '</ol>';
    root[0].innerHTML = fields;
}

function show() {
    let inputCust = this.getAttribute("cust-value");
    let input = document.getElementById(inputCust);
    input.setAttribute("type", "text");
}

function hide() {
    let inputCust = this.getAttribute("cust-value");
    let input = document.getElementById(inputCust);
    input.setAttribute("type", "password");
}

function copy() {
    copyValue(this.getAttribute("cust-value"));
}

function copyValue(id) {
    var input = document.getElementById(id);
    var x = document.createElement("INPUT");
    x.setAttribute("value", input.value);
    document.body.appendChild(x);
    x.select();
    document.execCommand("copy");

    var tool = document.getElementById("tooltip");
    tool.innerHTML="Copied!!!";
    document.body.removeChild(x);
    // Close pop up.
    window.close();
}

window.onload = function () {
    console.log("onload" + Date());
    displayData();
}

/**
 * Register Copy button
*/
window.addEventListener("load", function () {
    var copyLinks = document.getElementsByClassName('copy');
    var i;
    for (i = 0; i < copyLinks.length; i++) {
        copyLinks[i].addEventListener('click', copy, false);
    }

    var visibilityOn = document.getElementsByClassName('visibilityOn');
    for (i = 0; i < visibilityOn.length; i++) {
        visibilityOn[i].addEventListener('mousedown', show, false);
        visibilityOn[i].addEventListener('mouseup', hide, false);
    }
});

var ctrl = false;
document.addEventListener('keydown', function(event){
    if (event.keyCode==17) {
        ctrl = true;
    }
    if(event.keyCode>=49 && event.keyCode<=58 && ctrl) {
       copyValue('value'+(event.keyCode-48));
    }
});

document.addEventListener('keyup', function(event){
    if (event.keyCode==17) {
        ctrl = false;
    }
});

