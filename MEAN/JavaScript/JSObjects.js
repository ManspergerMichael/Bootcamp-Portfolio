let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function listOfObjs(arr){
    for (let i = 0; i < arr.length; i++){
        console.log("Name: "+arr[i].name+", Cohort: "+arr[i].cohort )
    }
}

listOfObjs(students);

let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function object_list_objects(obj){
    for (key in obj){
        console.log(key+" : ");
        //obj[key] gets the list, obj[key][value] gets the object in the list 
        for(value in obj[key]){
            nameLength = (obj[key][value].first_name + obj[key][value].last_name).length;
            console.log(value+" - "+obj[key][value].first_name+", "+obj[key][value].last_name+" - "+nameLength);
        }
    }
 } 

 object_list_objects(users);