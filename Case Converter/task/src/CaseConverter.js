document.getElementById("upper-case").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    document.getElementById("text").value = text.toUpperCase();
});

document.getElementById("lower-case").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    document.getElementById("text").value = text.toLowerCase();
})

document.getElementById("proper-case").addEventListener("click", function () {
    let text = document.getElementById("text").value;
    let textArr = text.split(" ");
    text="";
    for (let i = 0; i < textArr.length; i++) {
        let word = textArr[i];
        let first = word.substring(0, 1).toUpperCase();
        let leftovers = word.substring(1, word.length).toLowerCase()
        text += first + leftovers + " ";
    }
    document.getElementById("text").value = text.trim();
});

document.getElementById("sentence-case").addEventListener("click", function (){
    let text = document.getElementById("text").value;
    let sentArr = text.split(". ");
    text="";
    for (let i = 0; i < sentArr.length; i++) {
        let word = sentArr[i];
        let First = word.substring(0, 1).toUpperCase();
        let Leftovers = word.substring(1, word.length).toLowerCase();
        sentArr[i] = First+Leftovers;
        text += sentArr[i];
    }
    document.getElementById("text").value = sentArr.join(". ") ;

})
function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

document.getElementById("save-text-file").addEventListener("click", function() {
    let text = document.getElementById("text").value;
    let fileName = "text.txt"
    download(fileName, text);
}, false);