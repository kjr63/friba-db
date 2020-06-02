const ONLY_TRADE = true;
const discArray = [
    { manuf:"Discraft", type:"Putteri", mold:"Zone", plastic:"D-Pro", weight:"175g", color:"Sininen", mint:"7", info:"", image:"", status:"Vaihtari" },
    { manuf:"Viking Discs", type:"Putteri", mold:"Rune", plastic:"Ground", weight:"171g", color:"Valkea", mint:"7", info:"", image:"", status:"Vaihtari" },
    { manuf:"Viking Discs", type:"Midari", mold:"Warrior", plastic:"Armour", weight:"174g", color:"Keltainen", mint:"9", info:"", image:"", status:"Vaihtari" }
];
var discViewList = [];
var discObject = { "discs": []};
function initDiscRegister () {
    //viewDiscs (discArray);
}
function viewDiscs (discList) {
    // Lisää muotoilukomennot tietueisiin
    discViewList = formattedDiscList (discList);    
    discObject.discs = discViewList;
    w3.displayObject("id01", discObject);
}
function formattedDiscList (cl) {
    var cArray = [];
    var arrayCount = 0;
    //alert (cl[0].created);
    for (i=0; i < cl.length; i++) {
        var discFormatted = {
            manuf:"",
            type:"",
            mold:"",
            plastic:"",
            weight:"",
            color:"",
            mint:"",
            info:"",
            image:"",
            status:""
        }
        if (cl[i].status.indexOf("Vaihtari") > -1) {
            discFormatted.manuf = cl[i].manuf;
            discFormatted.type = cl[i].type;
            discFormatted.mold = cl[i].mold;
            discFormatted.plastic = cl[i].plastic;
            discFormatted.weight = cl[i].weight;
            discFormatted.color = cl[i].color;
            discFormatted.mint = cl[i].mint;
            discFormatted.info = cl[i].info;
            discFormatted.image = cl[i].image;
            discFormatted.status = cl[i].status;
            cArray[arrayCount++] = discFormatted;
        }
    }
    if (ONLY_TRADE)
        return cArray;
    else
        return cl;
}

function printActives () {
    //alert ("Tulostetaan aktiiviset");
    let displayList = "";
    for (i=0; i < customerViewList.length; i++) {
        //if (customerViewList[i].status === "100") {
            let c = customerViewList[i];
            displayList +=
                c.customerId+";"+
                c.domainName+";"+
                c.theme+";"+
                c.pageTitle+";"+
                c.name+";"+
                c.address+";"+
                c.phone+";"+
                c.email+";"+
                c.status+";"+
                c.created+";\n";   
        //}
    }
    prompt ("Aktiiviset asiakkaat",displayList);
}










