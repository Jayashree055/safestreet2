body{
  margin: 0;
  padding: 0;
  background-color: #1d2634;
  color: azure;
  font-family: 'Courier New', Courier, monospace;
  height: 80vh;
}
.icon{
  vertical-align: middle;
  line-height: 1px;
  font-size: 30px;
}
.icon_header{
  vertical-align: middle;
  line-height: 5px;
  font-size: 30px;
}

.icon,.icon_header{
  margin-right: 25px;
}

.icon close-icon{
  color: red;
  margin-left: 30px;
  margin-top: 10px;
  cursor: pointer;
}
.grid-container{
  display: grid;
  grid-template-columns: 260px 1fr 1fr 1fr;
  grid-template-rows: 0.2fr 3fr;
  grid-template-areas: 
    'sidebar header header header'
    'sidebar main main main';
  height: 90vh;

}

/* header */
.header{
  grid-area: header;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 0 30px;
  box-shadow: 0 6px 7px -3px black;
  margin-left: calc(16% - 300px);
  background-color: #263043; /* Background to match */
}

.menu-icon{
  display: none;

}
.header-left {
  display: flex;
  align-items: center; /* Align icons and input vertically */
  gap: 15px; /* Spacing between the search icon and input */
}

.header-left .search-icon {
  font-size: 24px; /* Size of the search icon */
}

.search-input {
  height: 40px;
  width: 300px;
  border: none;
  border-radius: 5px;
  padding-left: 10px;
}

.header-right {
  display: flex;
  align-items: center; /* Align the icons vertically */
  gap: 20px; /* Space between each icon */
}

.icon {
  font-size: 30px; /* Set size for all icons */
  cursor: pointer;
  color: white;
}

/* end header */

/* sidebar */
#sidebar {
  grid-area: sidebar;
  height: 100vh;
  width: 300px; /* Increased sidebar width */
  background-color: #263043;
  
  /* overflow-y: auto; */
  overflow: hidden;
  overflow: hidden;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.sidebar-logo{
  height: 150px;
  width: auto;
  align-items: center;
  padding: 50px;
  padding-left: 20px;
}
.sidebar-title{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px 0 30px;
  margin-bottom: 30px;
  
}

.sidebar-title > span{
  display: none;
}

.sidebar-brand{
  margin-top: 15px;
  font-size: 26px;
  font-weight: 700;
}

.sidebar-list{
  padding: 0;
  list-style-type: none;
}

.sidebar-list-item{
  padding: 20px 20px 20px 20px;
  font-size: 20px;
  
}

.sidebar-list-item:hover{
  background-color: black;
  cursor: pointer;
}

.sidebar-list-item > a{
  text-decoration: none;
  color: #eaeaec;
}

.sidebar-responsive{
  display: inline !important;
  position: absolute;
  z-index: 12 !important;
}
/* end sidebar */



/* main */
.main-container{
  grid-area: main;
  /* overflow-y: auto; */
  overflow: hidden;
  padding: 20px 20px;
  color: aliceblue;
  width: 210%;
 
}
.main-title{
  display: flex;
  justify-content: space-between;
}
.main-cards{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  margin: 15px 0;
  

}

.card{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 8px 15px;
  border-radius: 5px;
  grid-template-columns: repeat(2,1fr);
  gap: 20px;
  width: 80%;
  
}

.card:first-child{
  background-color: blue;
}
.card:nth-child(2){
  background-color: orange;
}
.card:nth-child(3){
  background-color: green;
}
.card:nth-child(4){
  background-color: red;
}

.card:nth-child(5){
  background-color: rgb(170, 197, 82);
}
.card:nth-child(6){
  background-color: rgb(181, 87, 188);
}


.card-inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
  
}
.card-inner > .card_icon{
  font-size: 25px;
}
/* end main */

@media screen and (max-width: 992px){
  .grid-container{
    grid-template-columns: 1fr;
    grid-template-rows: 0.2fr 3fr;
    grid-template-areas: 
    'header'
    'main';
  }

  #sidebar{
    display: none;
  }

  .menu-icon{
    display: inline;
  }

  .sidebar-title > span{
    display: inline;
  }
}

/* Damage Reports Page */
.damage-reports-container {
  padding: 20px;
  background-color: #aed278;
  min-height: 80vh;
  width: 280%;
  /* display: flex; */
}

.damage-reports-content {
  font-size: 24px;
  font-weight: bold;
  margin-top: 10px;
  color: black;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px;
}

.damage-reports-table {
  background-color: rgb(240, 241, 227);
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  color: black;
  flex: 1;
  min-width: 45%;
  overflow-x: auto;
}

.damage-reports-table table {
  width: 100%;
  border-collapse: collapse;
}

.damage-reports-table th,
.damage-reports-table td {
  padding: 12px;
  border: 1px solid #020506;
  text-align: left;
}

.damage-reports-table th {
  background-color: #edac89;
}

.high-severity {
  color: red;
  font-weight: bold;
}

.medium-severity {
  color: orange;
  font-weight: bold;
}

.status-resolved {
  color: rgb(15, 99, 15);
}

.status-pending {
  color: orange;
}


/* map */
.map-container{
  flex: 1;
  min-width: 100%;
  height: 400px;
  background: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
}

.leaflet-container{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

/* responsive design */
@media (max-width: 1000px) {
  .damage-reports-content {
    flex-direction: row;
    align-items: center;
  }

  .damage-reports-table,
  .map-container {
    min-width: 100%;
  }
}

.welcome-container{
  
  justify-content: space-between;
  font-size: 40px;
  font-family: cursive;
  padding-left: 500px;
  padding-top: 100px;
}
.tagline{
 font-size: 30px;
 font-family: Arial, Helvetica, sans-serif;
 color:yellow ;
}

.welcome-container .btn{
  height: 60px;
  width:150px;
}



.title {
  color: #fff;
  font-size: 24px;
  margin-bottom: 20px;
}

.input-group {
  margin-bottom: 15px;
}

.input-group label {
  display: block;
  color: #fff;
  margin-bottom: 5px;
}

.input-group input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.2);
  color: #fff;
  font-size: 16px;
}

.input-group input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.3);
}

.register-btn {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background: #28a745;
  color: white;
  font-size: 18px;
  cursor: pointer;
  transition: 0.3s;
}

.register-btn:hover {
  background: #218838;
}
.welcome-container {
  background: url("/public/welcome.jpg") no-repeat center center/cover;
  
  display: flex;
  justify-content:space-evenly; /* Aligns content towards the left */
  align-items: center;
  height: 82vh;
  background-size: cover;
  width: 168%;
  padding-left: 450px; /* Adjust this based on tree position */
  position: relative;
}

/* Ensure text is inside a box */
.welcome-box {
  background: rgba(0, 0, 0, 0.7); /* Semi-transparent box */
  padding: 20px;
  border-radius: 10px;
  height: 50%;
  width:60% ;
  color: white;
  text-align: center;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.2);
}


