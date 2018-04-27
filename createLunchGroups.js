// Input: Array of names
// Output: Array of arrays of groups of names


// var createLunchGroups = function(names){
//     console.log('input ', names.length);
//     var output = [];
//     var count = 0;
//     var numberOfGroups = names.length / 4;
//     var openGroups = [];
//     for(var i = 0; i <= numberOfGroups - 1; i++){
//         openGroups.push(i);
//     }
//     names.forEach(function(name){
//         var alreadyHasMax = true;
//         while(alreadyHasMax){
//             var randomIdx = Math.floor(Math.random() * (openGroups.length));
//             var groupIdx = openGroups[randomIdx];
//             var existingGroup = output[groupIdx] || [];
//             if(existingGroup.length >= 5){
//                 openGroups.forEach(function(groupId, index){
//                     if(groupId === randomIdx){
//                         openGroups.splice(index, 1);
//                     }
//                 })
//                 alreadyHasMax = true;
//             } else {
//                 alreadyHasMax = false;
//                 existingGroup.push(name);
//                 output[randomIdx] = existingGroup;
//             }
//         }
//     })
//     output.forEach(function(group){
//         group.forEach(function(name){
//             count++;
//         })
//     })
//     console.log(count);
//     return output;
// }

var createLunchGroups2 = function(names){
    console.log(names.length);
    var output = [];
    var count = 0;
    var currentGroup = [];

    // Add each name to group until max of 3
    names.forEach(function(name){
        currentGroup.push(name);
        if(currentGroup.length === 3){
            var groupCopy = currentGroup.slice(0);
            output.push(groupCopy);
            currentGroup = [];
        }
    })

    // Add any extra names to first few groups
    currentGroup.forEach(function(name, index){
        output[index].push(name);
    })

    output.forEach(function(group){
        group.forEach(function(name){
            count++;
        })
    });
    console.log(count);
    return output;
}



var names = ["Bob", "Carol", "Dan", "Mark", "Becca", "Bobby", "Abigail", "Kali", "Denise", "Danny", "Bob", "Carol", "Dan", "Mark", "Becca", "Bobby", "Abigail", "Kali", "Denise", "Danny", "Bob", "Carol", "Dan", "Mark", "Becca", "Bobby", "Abigail", "Kali", "Denise", "Danny", "Bob", "Carol", "Dan", "Mark", "Becca", "Bobby", "Abigail", "Kali", "Denise", "Danny"];
var names2 = ["Bob", "Carol", "Dan", "Mark", "Becca", "Bobby", "Abigail", "Kali", "Denise", "Danny","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K"];
console.log(createLunchGroups2(names2));
