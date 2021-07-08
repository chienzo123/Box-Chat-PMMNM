function getBotResponse(input) {
    //rock paper scissors
    if (input == "Chào Ngọc") {
        return "Chào cậu";
    } else if (input == "Cậu với Quý yêu nhau chưa") {
        return "rùi";
    } else if (input == "Quý ăn cậu chưa") {
        return "rùi";
    } else if (input == "Quý bao nhiêu phút c") {
        return "2p :(";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}