let table;
let checkboxes = [];

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('data.csv', 'csv', 'header');

  checkboxes[0] = createCheckbox('Small(5000>)', false);
  checkboxes[0].parent("checkboxes");
  checkboxes[0].changed(()=> myCheckedEvent(0));

  checkboxes[1] = createCheckbox('Medium(5000-10000)', false);
  checkboxes[1].parent("checkboxes");
  checkboxes[1].changed(() => myCheckedEvent(1));
  
  checkboxes[2] = createCheckbox('Large(10000<)', false);
  checkboxes[2].parent("checkboxes");
  checkboxes[2].changed(() => myCheckedEvent(2));

  checkboxes[3] = createCheckbox('City', false);
  checkboxes[3].parent("checkboxes");
  checkboxes[3].changed(() => myCheckedEvent(3));


  checkboxes[4] = createCheckbox('Suburban', false);
  checkboxes[4].parent("checkboxes");
  checkboxes[4].changed(() => myCheckedEvent(4));

  checkboxes[5] = createCheckbox('Town', false);
  checkboxes[5].parent("checkboxes");
  checkboxes[5].changed(() => myCheckedEvent(5));

  checkboxes[6] = createCheckbox('Rural', false);
  checkboxes[6].parent("checkboxes");
  checkboxes[6].changed(() => myCheckedEvent(6));

  checkboxes[7] = createCheckbox('Has Greek Life', false);
  checkboxes[7].parent("checkboxes");
  checkboxes[7].changed(() => myCheckedEvent(7));

  checkboxes[8] = createCheckbox('Catholic', false);
  checkboxes[8].parent("checkboxes");
  checkboxes[8].changed(() => myCheckedEvent(8));

  checkboxes[9] = createCheckbox('Methodist', false);
  checkboxes[9].parent("checkboxes");
  checkboxes[9].changed(() => myCheckedEvent(9));

  checkboxes[10] = createCheckbox('Presbyterian', false);
  checkboxes[10].parent("checkboxes");
  checkboxes[10].changed(() => myCheckedEvent(10));


  checkboxes[11] = createCheckbox('Jewish', false);
  checkboxes[11].parent("checkboxes");
  checkboxes[11].changed(() => myCheckedEvent(11));


  checkboxes[12] = createCheckbox('Public', false);
  checkboxes[12].parent("checkboxes");
  checkboxes[12].changed(() => myCheckedEvent(12));

  checkboxes[13] = createCheckbox('Has Student Government', false);
  checkboxes[13].parent("checkboxes");
  checkboxes[13].changed(() => myCheckedEvent(13));

  checkboxes[14] = createCheckbox('Has a Football Team', false);
  checkboxes[14].parent("checkboxes");
  checkboxes[14].changed(() => myCheckedEvent(14));

  checkboxes[15] = createCheckbox('Tech/Engineering School', false);
  checkboxes[15].parent("checkboxes");
  checkboxes[15].changed(() => myCheckedEvent(15));


} 



function myCheckedEvent(id) {
  if (checkboxes[id].checked()) {
    console.log('Checking!');
  } else {
    console.log('Unchecking!');
  }
}

function setup() {
    //createCanvas(400, 400);
    print(table.getRowCount() + ' total rows in table');
    print(table.getColumnCount() + ' total columns in table');
    print(table.getColumn('name'));
    // print(table.getString(0, 0));
   
    for (let r = 0; r < table.getRowCount(); r++)
      for (let c = 0; c < table.getColumnCount(); c++) {
        print(table.getString(r, c));
      }
  }
  
  function draw() {
    //background(255, 0, 50);
    for(let i = 0; i < 10; i++){
      // ...
    }
  }

let colleges = [];


 

  //https://docs.google.com/document/d/1rm1MFeSm5X7rzaDxcykFrEfHo42_psByxt7qca1mVqo/edit
  //Right now, I'm using google docs to think of all the categories, sort of as a brainstorm. I have saved it with you.

  //I have shifted almost all of the data on google docs into sheets so it is easier to utilize when coding.
  //https://docs.google.com/spreadsheets/d/1bEYa_xUSEbtfwZd3KwkP4Wppt_zLWmmLdMczmKg7X2o/edit?usp=sharing
  //this is my second day

  ///I shifted all the data onto the google sheets. I also outlined my specific plan and questions. I could address those with you tomorrow in class. 

  //looked into the html concept as well as bootstrap and every single component in it. 
  //found a few features I would like to use: Dropdown, I could conduct the survey through multiple dropdowns
  //Navbar for extra information(don't think it is crucial though)
  //placeholders for potential decoration
  //toasts for the introduction
  //will do further research on this tomorrow

  //https://docs.google.com/document/d/1rm1MFeSm5X7rzaDxcykFrEfHo42_psByxt7qca1mVqo/edit 
  //put new research, notes down on this document. I also looked around searching about the html concept on the internet for a bit. 


  //basically, created a really basic college class but not sure i successfully created.
  //also spend around 30 min watching css and html videos on youtube
  //https://www.youtube.com/watch?v=1PnVor36_40
  //https://www.youtube.com/watch?v=salY_Sm6mv4
  


  //Edited the html for the survey page
  //wrote some messages for each page... need to transfer onto the html files and create more
  //I currently have the index & survey html
  //For the about page... Title: About our service Description: College Finder selects a list of college that matches our customer's preference based on a survey. We currently have 101 Top US colleges that have a SAT Range of 1350-1600 in our database.
  //Result Page should be directly connected to the survey page like a slideshow or automatically transitioning. 
  //Final Page... Title: What should you take away from your list? Description: When selecting your list of colleges, it is incredibably crucial to consider the criteria listed in our service. On top of this, we recommend talking to alumni or admissions officers to get a bigger picture of each school. Remember to select a balanced list of safety, target, and reach schools!
  //https://getbootstrap.com/docs/5.2/forms/checks-radios/ will use this for survey probably
  

  //create canvas