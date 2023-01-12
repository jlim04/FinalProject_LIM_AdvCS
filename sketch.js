let table;
let checkboxes = [];
let button;
let colleges = [];
let LiberalArtsColleges = [];


function preload() {

  table = loadTable('data.csv', 'csv', 'header');

  checkboxes[0] = createCheckbox('Small(5000>)', false);
  checkboxes[0].parent("size");
  checkboxes[0].changed(()=> myCheckedEvent(0));

  checkboxes[1] = createCheckbox('Medium(5000-10000)', false);
  checkboxes[1].parent("size");
  checkboxes[1].changed(() => myCheckedEvent(1));
  
  checkboxes[2] = createCheckbox('Large(10000<)', false);
  checkboxes[2].parent("size");
  checkboxes[2].changed(() => myCheckedEvent(2));

  checkboxes[3] = createCheckbox('City', false);
  checkboxes[3].parent("location");
  checkboxes[3].changed(() => myCheckedEvent(3));


  checkboxes[4] = createCheckbox('Suburban', false);
  checkboxes[4].parent("location");
  checkboxes[4].changed(() => myCheckedEvent(4));

  checkboxes[5] = createCheckbox('Town', false);
  checkboxes[5].parent("location");
  checkboxes[5].changed(() => myCheckedEvent(5));

  checkboxes[6] = createCheckbox('Rural', false);
  checkboxes[6].parent("location");
  checkboxes[6].changed(() => myCheckedEvent(6));

  checkboxes[7] = createCheckbox('Has Greek Life', false);
  checkboxes[7].parent("greeklife");
  checkboxes[7].changed(() => myCheckedEvent(7));

  checkboxes[8] = createCheckbox('Catholic', false);
  checkboxes[8].parent("religion");
  checkboxes[8].changed(() => myCheckedEvent(8));

  checkboxes[9] = createCheckbox('Methodist', false);
  checkboxes[9].parent("religion");
  checkboxes[9].changed(() => myCheckedEvent(9));

  checkboxes[10] = createCheckbox('Presbyterian', false);
  checkboxes[10].parent("religion");
  checkboxes[10].changed(() => myCheckedEvent(10));


  checkboxes[11] = createCheckbox('Jewish', false);
  checkboxes[11].parent("religion");
  checkboxes[11].changed(() => myCheckedEvent(11));


  checkboxes[12] = createCheckbox('Public', false);
  checkboxes[12].parent("public");
  checkboxes[12].changed(() => myCheckedEvent(12));

  checkboxes[13] = createCheckbox('Has Student Government', false);
  checkboxes[13].parent("etc");
  checkboxes[13].changed(() => myCheckedEvent(13));

  checkboxes[14] = createCheckbox('Has a Football Team', false);
  checkboxes[14].parent("etc");
  checkboxes[14].changed(() => myCheckedEvent(14));

  checkboxes[15] = createCheckbox('Tech/Engineering School', false);
  checkboxes[15].parent("etc");
  checkboxes[15].changed(() => myCheckedEvent(15));


  button = createButton('submit');

  button.parent("submitButton");
 
  button.mousePressed(submit);


} 



function myCheckedEvent(id) {
  if (checkboxes[id].checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}

function submit() {
  console.log('hi');
  
  checkColleges();
  document.getElementById("survey").style.display= "none";
  document.getElementById("surveyTitle").innerHTML = "Survey Results:";

}
 
function checkColleges() {
  // let boxeschecked 
  let filteredColleges = [];
  
  for (let college of colleges) {
    if(collegeIncluded(c))==
     //push
    // for (let j=0; j<checkboxes.length(); j++) {
    //   if (checkboxes[j].checked()==true){
    //   for(let i = 1; i< college.length; i++){
        
    //     if(getCheckboxName(j) == college[i]){
    //       boxeschecked ++
    //     }
    //     if(boxeschecked == college.length-1){
    //       filteredColleges.push(college)
        } 
      } 
    } 
   
    }
  }
}



function collegeIncluded(college) {
  for(const property in college) {
    if (property=="name")
      continue;
    let getCheckboxID(property)=value
    if(!checkboxes[value].checked()
    return false


    
     
  }
  return true
}

function getCheckboxID(label) {
  if (label=="small") {
    return 0
  }
  
  }
}

function createColleges() {
  for (let i=1; i<table.getRowCount(); i++) {
    let sz = "";
    let location = "";
    let studentGovernment = "";
    let greekLife = "";
    let footballTeam = "";

    if (table.getString(i, 1) == "Yes") {
      sz = "small;"
    } else if (table.getString(i,2) == "Yes") {
      sz = "medium;"
    } else if (table.getString(i,3) == "Yes") {
      sz = "large;"
    }
    
    if (table.getString(i,4) == "Yes") {
      location = "city;"
    } else if (table.getString(i,5) == "Yes") {
      location = "surburban;"
    } else if (table.getString(i,6) == "Yes") {
      location = "town;"
    } else if (table.getString(i,7) == "Yes") {
      location = "rural;"
    }
    if (table.getString(i,8) == "Yes") {
      greekLife = "greekLife;"
    }

    if (table.getString(i,9) == "Yes") {
      religion = "catholic;"
    } else if (table.getString(i,10) == "Yes") {
      religion = "methodist;"
    } else if (table.getString(i,11) == "Yes") {
      religion = "presbyterian;"
    } else if (table.getString(i,12) == "Yes") {
      religion = "jewish;"
    }
    
    if (table.getString(i,13) == "Yes") {
      studentGovernment = "studentGovernment;"
    }
    if (table.getString(i,14) == "Yes") {
      footballTeam = "footballTeam;"
    }
    if (table.getString(i,15) == "Yes") {
      techEngineeringSchool = "techEngineeringSchool;"
    }

    let name = table.getString(i, 0);
    if (table.getString(i,16) == "Yes") {
      colleges.push(new LiberalArtsCollege(name, sz, location, greekLife, religion, studentGovernment, footballTeam, techEngineeringSchool));
    } else {
      colleges.push(new College(name, sz, location, greekLife, religion, studentGovernment, footballTeam, techEngineeringSchool));
    }
  }
    
  
}

function setup() {
  createColleges();
}


  


