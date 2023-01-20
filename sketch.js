let table;
let checkboxes = [];
let button;
let colleges = [];
let LiberalArtsColleges = [];


function preload() {

  table = loadTable('data.csv', 'csv', 'header');

  checkboxes[0] = createCheckbox('Small(5000>)', false);
  checkboxes[0].parent("size");
  checkboxes[0].changed(() => myCheckedEvent(0));

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

  let num = 8;
  checkboxes[num] = createCheckbox('No Greek Life', false);
  checkboxes[num].parent("greeklife");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Catholic', false);
  checkboxes[num].parent("religion");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Methodist', false);
  checkboxes[num].parent("religion");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Presbyterian', false);
  checkboxes[num].parent("religion");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;


  checkboxes[num] = createCheckbox('Jewish', false);
  checkboxes[num].parent("religion");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('none', false);
  checkboxes[num].parent("religion");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;


  checkboxes[num] = createCheckbox('Public', false);
  checkboxes[num].parent("public");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Private', false);
  checkboxes[num].parent("public");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Has Student Government', false);
  checkboxes[num].parent("etc");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Has a Football Team', false);
  checkboxes[num].parent("etc");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;

  checkboxes[num] = createCheckbox('Tech/Engineering School', false);
  checkboxes[num].parent("etc");
  checkboxes[num].changed(() => myCheckedEvent(num));
  num++;


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
  document.getElementById("survey").style.display = "none";
  document.getElementById("surveyTitle").innerHTML = "Survey Results:";

}

function checkColleges() {

  let filteredColleges = [];
  for (let c of colleges) {
    if (collegeIncluded(c)) {
      filteredColleges.push(c);
    }
  }
  console.log("filtered", filteredColleges)
  document.getElementById("results").innerHTML = JSON.stringify(filteredColleges);
}


function collegeIncluded(college) {
  let properties = ["sz", "location"];
  for (const property in college) {

    if (properties.indexOf(property) == -1) {
      continue;
    }
   if (property == "name")c
      continue;


    let value = getCheckboxID(college[property])
    if (property == "location") {
      console.log(value, )
    }
    if (!checkboxes[value].checked()) {
      console.log(college.name, property, college[property], value);
      return false;

    }


  }
  return true;
}

function getCheckboxID(label) {
  if (label == "small") {
    return 0;
  }

  if (label == "medium") {
    return 1;
  }

  if (label == "large") {
    return 2;
  }

  if (label == "city") {
    return 3;
  }

  if (label == "suburban") {
    return 4;
  }

  if (label == "town") {
    return 5;
  }

  if (label == "rural") {
    return 6;
  }

  if (label == "greekLife") {
    return 7;
  }

  if (label == "catholic") {
    return 8;
  }

  if (label == "methodist") {
    return 9;
  }

  if (label == "presbyterian") {
    return 10;
  }

  if (label == "jewish") {
    return 11;
  }

  if (label == "public") {
    return 12;
  }


  if (label == "studentGovernment") {
    return 13;
  }

  if (label == "footballTeam") {
    return 14;
  }

  if (label == "techEngineeringSchool") {
    return 15;
  }
  return 0;
}

function createColleges() {
  for (let i = 1; i < table.getRowCount(); i++) {
    let sz = "";
    let location = "";
    let studentGovernment = "";
    let greekLife = "";
    let footballTeam = "";

    if (table.getString(i, 1) == "Yes") {
      sz = "small"
    } else if (table.getString(i, 2) == "Yes") {
      sz = "medium"
    } else if (table.getString(i, 3) == "Yes") {
      sz = "large"
    }

    if (table.getString(i, 4) == "Yes") {
      location = "city"
    } else if (table.getString(i, 5) == "Yes") {
      location = "surburban"
    } else if (table.getString(i, 6) == "Yes") {
      location = "town"
    } else if (table.getString(i, 7) == "Yes") {
      location = "rural"
    }
    if (table.getString(i, 8) == "Yes") {
      greekLife = "greekLife"
    }else {
      greekLife = "noGreekLife";
    }

    if (table.getString(i, 9) == "Yes") {
      religion = "catholic"
    } else if (table.getString(i, 10) == "Yes") {
      religion = "methodist"
    } else if (table.getString(i, 11) == "Yes") {
      religion = "presbyterian"
    } else if (table.getString(i, 12) == "Yes") {
      religion = "jewish"
    } else {
      religion= "noReligion";
    }

    if (table.getString(i, 13) == "Yes") {
      studentGovernment = "studentGovernment"
    }
    if (table.getString(i, 14) == "Yes") {
      footballTeam = "footballTeam"
    }
    if (table.getString(i, 15) == "Yes") {
      techEngineeringSchool = "techEngineeringSchool"
    }

    let name = table.getString(i, 0);
    if (table.getString(i, 16) == "Yes") {
      colleges.push(new LiberalArtsCollege(name, sz, location, greekLife, religion, studentGovernment, footballTeam, techEngineeringSchool));
    } else {
      colleges.push(new College(name, sz, location, greekLife, religion, studentGovernment, footballTeam, techEngineeringSchool));
    }
  }
}

function setup() {
  createColleges();
}





