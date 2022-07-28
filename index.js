class SpeechRecognitionAPI{
    constructor(options){
        const SpeechToText = window.speechRecognition || window.webkitSpeechRecognition;
        this.speechApi = new SpeechToText();
        this.output = options.output ? options.output : document.createElement("div");
        this.speechApi.continuous = true;
        this.speechApi.interimResult = true;
        // this.speechApi.interimResult = true;
        // this.speechApi.SpeechRecognitionResult.isFinal = flase;
        this.speechApi.onresult = (event) => {
            // console.log(event);
            var resultIndex = event.resultIndex;
            console.log("---Index", resultIndex)
            var transcript = event.results[resultIndex][0].transcript;
            console.log("---Transcript", transcript)
            this.output.textContent += transcript;
        }
    }
    init(){
        console.log('speech start')
        this.speechApi.start();
    }
    stop(){
        console.log('stop speech')
        this.speechApi.stop();
    }
}
window.onload = function(){
    var speech = new SpeechRecognitionAPI({
        output: document.querySelector(".output")
    })
    document.querySelector(".btn-start").addEventListener("click", () => {
        speech.init();
        // window.console.log(speech)
    })
    document.querySelector(".btn-end").addEventListener("click", () => {
        speech.stop();
    })
}