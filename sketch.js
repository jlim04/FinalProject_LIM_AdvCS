let table;

function preload() {
  //my table is comma separated value "csv"
  //and has a header specifying the columns labels
  table = loadTable('data.csv', 'csv', 'header');
} 

function setup() {
    createCanvas(400, 400);
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
    background(255, 0, 50);
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
  