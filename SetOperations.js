var operation = process.argv[2];

if (operation == "NAME"){
    console.log("SetOperations.js - Performs common set operation on INTEGERS");
}
else if (operation == "SYNOPSIS"){
    console.log("SetOperations.js [OPTION] \n OPTIONS: \n -u SET1 SET2, --union SET1 SET2 \n -i SET1 SET2, --intersection SET1 SET2 \n -d SET1 SET2, --difference SET1 SET2 \n -h, --help");
}
else if ((operation == "-h") || (operation == "--help")){
    console.log("SetOperations.js [OPTION] \n OPTIONS: \n -u SET1 SET2, --union SET1 SET2 \n -i SET1 SET2, --intersection SET1 SET2 \n -d SET1 SET2, --difference SET1 SET2 \n -h, --help");
}
else if ((operation == "-u") || (operation == "--union")){
    var set1 = process.argv[3];
    var set2 = process.argv[4];
    var set1Split = set1.split(',');
    var set2Split = set2.split(',');
    var uset = [];
    var i = 0;
    while (set1Split[i] != undefined){
        uset[i] = set1Split[i];
        i++;
    }
    var i = 0;
    while ((i < uset.length) && (set2Split[i] != undefined)){
        if (set2Split[i] != uset[i]){
            var newNum = 0;
            for (x = 0; x < uset.length; x++){
                if (set2Split[i] != uset[x]){
                    newNum = set2Split[i];
                }
                else if(set2Split[i] == uset[x]){
                    newNum = 0;
                    break
                }
            }
            if (newNum != 0){
                uset.push(newNum);
                newNum = 0;
            }
        }
        i++;
    }
    var i = 0;
    console.log(uset);
}
else if ((operation == "-i") || (operation == "--intersection")){
    var set1 = process.argv[3];
    var set2 = process.argv[4];
    var set1Split = set1.split(',');
    var set2Split = set2.split(',');
    var uset = [];
    var i = 0;
    var x = 0;
    while (set1Split[i] != undefined){
        x = 0;
        while(set2Split[x] != undefined){
            if (set1Split[i] == set2Split[x]){
                uset.push(set1Split[i])
            }
            x++;
        }
        i++;
    }
    var i = 0;
    var x = 0;
    console.log(uset);
}
else if ((operation == "-d") || (operation == "--difference")){
    var set1 = process.argv[3];
    var set2 = process.argv[4];
    var set1Split = set1.split(',');
    var set2Split = set2.split(',');
    var uset = [];
    var i = 0;
    var x = 0;
    while (set1Split[i] != undefined){
        var newNum = 0;
        while(set2Split[x] != undefined){
            if (set1Split[i] == set2Split[x]){
                newNum = 0;
                break;
            }
            else if (set1Split[i] != set2Split[x]){
                newNum = set1Split[i];
            }
            x++;
        }
        if (newNum != 0){
            uset.push(newNum);
        }
        i++;
    }
    var i = 0;
    var x = 0;
    console.log(uset);
}
else {
    console.log("please use the -h or --help commands for assistance in using this program")
}
