(function(window) {
  //I recommend this
  'use strict';

  function defineLibrary() {
    var Library = {}; // Naam om library aan te roepen in HTML

    // button aanmaak functie
    // met document Get Element BY Id en createElement plaats en maak ik de buttons.

    Library.createButtons = function() {
        var divButtons = document.getElementById("textButtons");
        var btnBold = document.createElement("BUTTON");
        var btnCursief = document.createElement("BUTTON");
        var btnUnderline = document.createElement("BUTTON");

        btnBold.setAttribute("id", "btnBold");
        btnCursief.setAttribute("id", "btnCursief");
        btnUnderline.setAttribute("id", "btnUnderline");

        divButtons.appendChild(btnBold);
        divButtons.appendChild(btnCursief);
        divButtons.appendChild(btnUnderline);

        document.getElementById("btnBold").innerHTML = "BOLD";
        document.getElementById("btnCursief").innerHTML = "CURSIEF";
        document.getElementById("btnUnderline").innerHTML = "UNDERLINE";
      }
      // opmaakfunctie 
      // met getElementbytagname worden alle p tags opgehaald
      // met een loopje word de id van de geklikte p tag opgehaald en in currentid gestopt
      // hierna een onclick op de gegenereerde buttons met daarin get elementId op het geklikte currentId
    Library.changeText = function() {

      var textElements = document.getElementsByTagName("P");
        console.log(textElements);
      var currentId;

      for (var i = 0; i < textElements.length; i++) {
        textElements[i].onclick = function() {
          currentId = this.id;
        }
      }

      btnBold.onclick = function() {
        var string = document.getElementById(currentId);
        string.style.fontWeight = "bold";
          console.log(string);
      }
      btnCursief.onclick = function() {
        var string = document.getElementById(currentId);
        string.style.fontStyle = "italic";
          console.log(string);
      }
      btnUnderline.onclick = function() {
        var string = document.getElementById(currentId);
        string.style.textDecoration = "underline";
          console.log(string);
      }

    }

    return Library;
  }
  //define globally if it doesn't already exist
  if (typeof(Library) === 'undefined') {
    window.Library = defineLibrary();
  } else {
    console.log("Library already defined.");
  }
})(window);
