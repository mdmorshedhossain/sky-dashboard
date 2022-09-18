const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const returnPath = 'http://localhost:3000';

// start to implement multer
const UPLOAD_FLDER = "./bannerImage/";
const multer = require('multer');
const path = require("path");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/images', express.static('bannerImage')); // using for multer 


// Define multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, UPLOAD_FLDER);
    },
    filename: (req, file, cb) => {
        const fileExt = path.extname(file.originalname);
        const fileName = file.originalname
                            .replace(fileExt, "")
                            .toLowerCase()
                            .split(' ')
                            .join("-") + "-" + Date.now();
        cb(null, fileName + fileExt);
    }, 
});

// Multer upload
const upload = multer({
    // dest: UPLOAD_FLDER,
    storage: storage,
    fileFilter: (req, file, cb) =>{
        if(
            file.mimetype === "image/png" ||
            file.mimetype === "image/jpg" ||
            file.mimetype === "image/jpeg"
        ){
            cb(null, true);
        }
        else{
            cb(new Error("Only image are allowed"))
        }
    }
});


// Create connection
const db = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "tdev"
});
// Connect
db.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('mysql connected');
});


// ************************* Start Banner image section *************************

// Get all banner images
app.get('/bannerimages', (req,res) => {
    let sql = 'SELECT * FROM bannerimage';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

// Insert banner images
app.post('/bannerImage', upload.single("bannerImage"), (req, res)=>{
   
    const image = (req.file?.filename);
    console.log(image);
    let sql = "INSERT INTO bannerimage (image) VALUES (?)";
    db.query(sql, [image], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/banner-image`);
    })
})

// updating exiasting Banner image
app.post('/editBannerImage', upload.single("editBannerImage"), (req, res)=>{
    
    const image = (req.file?.filename);
    const id = req.body?.id;
    console.log("editWelcomeImage",id);

    let sql = "UPDATE bannerimage SET image = ? WHERE id = ? ";
    db.query(sql, [image, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/banner-image`);
    })
})

//Delete banner images
app.delete('/deleteBannerImage/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM bannerimage WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})


//...............................................//



// app.post('/insertimage', (req,res) =>{
//     const {image} = req.body;
//     console.log(image);

//     let sql = "INSERT INTO bannerimage (image) VALUES (?)";
//     db.query(sql, [image], (err, result)=>{
//         if(err) console.log(err);
//         // console.log(result);
//         res.send('Image inserted');
//     })
// })

// Update banner images
// app.put('/updateimage/:id', (req,res) =>{
//     const {id} = req.params;
//     const {image} = req.body;
//     console.log(id, image);

//     let sql = "UPDATE bannerimage SET image = ? WHERE id = ? ";
//     db.query(sql, [image,id] , (err, result)=>{
//         if(err) console.log(err);
//     })
// })


// ************************** End banner image section *****************************







//********************* Start welcome section *******************

//Get all welcome info
app.get('/welcome', (req,res) => {
    let sql = 'SELECT * FROM welcome';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        res.send(result);
    })
})

//Add new welcome info
app.post('/welcome', upload.single("welcomeImage"), (req, res)=>{
    
    const image = (req.file?.filename);
    const title = req.body?.title
    const details = req.body?.description

    let sql = "INSERT INTO welcome (image, title, details) VALUES (?, ?, ?)";
    db.query(sql, [image,title, details], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/welcome`);
    })
})

// updating exiasting welcome info
app.post('/editWelcome', upload.single("editWelcomeImage"), (req, res)=>{
    
    const image = (req.file?.filename);
    const title = req.body?.title;
    const details = req.body?.description;
    const id = req.body?.id;
    console.log("editWelcomeImage",id);

    let sql = "UPDATE welcome SET image = ?, title = ?, details = ? WHERE id = ? ";
    db.query(sql, [image, title, details, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/welcome`);
    })
})

//Delete welcomw info
app.delete('/deleteWelcome/:id', (req,res) =>{
    const {id} = req.params;
    console.log('deleteWelcome',id);

    let sql = "DELETE FROM welcome WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})


//************************** End welcome section **********************








//********************* Start Our events section *******************

//Get all our event info
app.get('/ourEvents', (req,res) => {
    let sql = 'SELECT * FROM ourevents';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


//Add a new event info
app.post('/ourEvents', upload.single("ourEvents"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    console.log("our events work");

    let sql = "INSERT INTO ourevents (image, date, title, details) VALUES (?, ?, ?, ?)";
    db.query(sql, [image, date, title, details], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/our-events`);
    })
})

// updating existing Our Event info
//Problem here date and details are not working here
app.post('/editOurEvent', upload.single("editOurEvent"), (req, res)=>{
    
    console.log("hiting edit event");

    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    const id = req.body?.id;

    let sql = "UPDATE ourevents SET image = ?, date = ?, title = ?, details = ? WHERE id = ? ";
    db.query(sql, [image, date, title, details, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/our-events`);
    })
})



//Delete our events info
app.delete('/ourEvent/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM ourevents WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})



//************************** End our events section **********************







//********************* Start upcoming events section *******************

//Get all our event info
app.get('/upcomingEvents', (req,res) => {
    let sql = 'SELECT * FROM upcomingevents';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//Add a new upcoming event info
app.post('/addUpcomingEvents', upload.single("addUpcomingEvents"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    console.log("our events work", image, date, title,details);

    let sql = "INSERT INTO upcomingevents (image, date, title, details) VALUES (?, ?, ?, ?)";
    db.query(sql, [image, date, title, details], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/upcoming-events`);
    })
})

// updating existing Our Event info
app.post('/editOurEvent', upload.single("editOurEvent"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    const id = req.body?.id;
    console.log("our events work");

    let sql = "UPDATE ourevents SET image = ?, date = ?, title = ?, details = ? WHERE id = ? ";
    db.query(sql, [image, date, title, details, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/our-events`);
    })
})

//Delete our events info
app.delete('/ourEvents/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM ourevents WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})



//************************** End upcoming events section **********************








//********************* Start upcoming events section *******************

//Get all our upcomming event info
app.get('/upcomingEvents', (req,res) => {
    let sql = 'SELECT * FROM upcomingevents';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

//Add a new upcoming events info
app.post('/upcomingEvents', upload.single("upcomingEvents"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    console.log("our events work");

    let sql = "INSERT INTO upcomingevents (image, date, title, details) VALUES (?, ?, ?, ?)";
    db.query(sql, [image, date, title, details], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/upcoming-events`);
    })
})

// updating existing Our upcoming Event info
app.post('/editUpcomingEvent', upload.single("editUpcomingEvent"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    const id = req.body?.id;
    console.log("our events work");

    let sql = "UPDATE upcomingevents SET image = ?, date = ?, title = ?, details = ? WHERE id = ? ";
    db.query(sql, [image, date, title, details, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/upcoming-events`);
    })
})

//Delete our upcoming events info
app.delete('/upcomingevents/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM upcomingevents WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End upcoming events section **********************






//********************* Start Tourism news section *******************

//Get all Tourism news info
app.get('/tourismNews', (req,res) => {
    let sql = 'SELECT * FROM tourismnews';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


//Add a new upcoming events info
app.post('/addTourismNews', upload.single("addTourismNews"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    console.log("our events work");

    let sql = "INSERT INTO tourismnews (image, date, title, details) VALUES (?, ?, ?, ?)";
    db.query(sql, [image, date, title, details], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/tourism-news`);
    })
})

// updating existing Our upcoming Event info
app.post('/editTourismNews', upload.single("editTourismNews"), (req, res)=>{
    
    const image = (req.file?.filename);
    const date = req.body?.date;
    const title = req.body?.title;
    const details = req.body?.details;
    const id = req.body?.id;

    let sql = "UPDATE tourismnews SET image = ?, date = ?, title = ?, details = ? WHERE id = ? ";
    db.query(sql, [image, date, title, details, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/tourism-news`);
    })
})


//Delete our events info
app.delete('/deleteTourismNews/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM tourismnews WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End Tourism news section **********************








//********************* Start gallery section *******************

//Get all gallery images
app.get('/galleryimage', (req,res) => {
    console.log("calling gallery");
    let sql = 'SELECT * FROM gallery';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


//Add a new Gallery Images
app.post('/addNewGalleryImages', upload.single("addNewGalleryImages"), (req, res)=>{
    
    const image = (req.file?.filename);

    let sql = "INSERT INTO gallery (image) VALUES (?)";
    db.query(sql, [image], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/gallery`);
    })
})

// Updating Gallery Images
app.post('/editGalleryImages', upload.single("editGalleryImages"), (req, res)=>{
    
    const image = (req.file?.filename);
    const id = req.body?.id;

    let sql = "UPDATE gallery SET image = ? WHERE id = ? ";
    db.query(sql, [image, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/gallery`);
    })
})


//Delete our events info
app.delete('/deleteGalleryImages/:id', (req,res) =>{
    const {id} = req.params;
    let sql = "DELETE FROM gallery WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End gallery section **********************








//********************* Start partners section *******************

//Get all our partners
app.get('/partners', (req,res) => {
    let sql = 'SELECT * FROM partners';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


//Add a new partners
app.post('/addNewPartners', upload.single("addNewPartners"), (req, res)=>{
    const image = (req.file?.filename);

    let sql = "INSERT INTO partners (image) VALUES (?)";
    db.query(sql, [image], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/our-partners`);
    })
})

// Updating partners
app.post('/editPartners', upload.single("editPartners"), (req, res)=>{
    const image = (req.file?.filename);
    const id = req.body?.id;

    let sql = "UPDATE partners SET image = ? WHERE id = ? ";
    db.query(sql, [image, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/landing-page/our-partners`);
    })
})


//Delete our events info
app.delete('/deletePartners/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM partners WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End of partners section **********************










//********************* Start Board of directors *******************

//Get all our directors
app.get('/boardOfDirectors', (req,res) => {
    let sql = 'SELECT * FROM boardofdirectors';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})



//Add a new Board of directors
app.post('/addBoardOfDirectors', upload.single("addBoardOfDirectors"), (req, res)=>{
    
    const image = (req.file?.filename);
    const name = req.body?.name;
    const title = req.body?.title;
    console.log("our events work");

    let sql = "INSERT INTO boardofdirectors (image, name, title) VALUES (?, ?, ?)";
    db.query(sql, [image, name, title], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/board-of-directory`);
    })
})

// updating existing Our upcoming Event info
app.post('/editBoardOfDirectors', upload.single("editBoardOfDirectors"), (req, res)=>{
    
    const image = (req.file?.filename);
    const name = req.body?.name;
    const title = req.body?.title;
    const id = req.body?.id;

    let sql = "UPDATE boardofdirectors SET image = ?, name = ?, title = ? WHERE id = ? ";
    db.query(sql, [image, name, title, id] , (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/board-of-directory`);
    })
})


//Delete our events info
app.delete('/deleteBoardOfDirectors/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM boardofdirectors WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End of partners section **********************










//********************* Start All Airlines Section *******************

//Get all Airlines
app.get('/allAirlines', (req,res) => {
    let sql = 'SELECT * FROM allairlines';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


//Add a new Airlines
app.post('/addAirlines', upload.none(), (req, res)=>{
    console.log('addAirlines');
    
    const name = req.body?.name;
    const location = req.body?.location;
    const telephone = req.body?.telephone;
    const phone = req.body?.phone;
    const email = req.body?.email;
    const website = req.body?.website;

    let sql = "INSERT INTO allairlines (name, location, telephone, phone, email, website) VALUES (?, ?, ?, ?, ?, ?)";
    db.query(sql, [name, location, telephone, phone, email, website], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/all-airlines`);
    })
})

// updating existing Airlines
app.post('/editAirlines', upload.none(), (req, res)=>{
    
    const name = req.body?.name;
    const location = req.body?.location;
    const telephone = req.body?.telephone;
    const phone = req.body?.phone;
    const email = req.body?.email;
    const website = req.body?.website;
    const id = req.body?.id;

    let sql = "UPDATE allairlines SET name = ?, location = ?, telephone = ?, phone = ?, email = ?, website = ?  WHERE id = ? ";
    db.query(sql, [name, location, telephone, phone, email, website, id] , (err, res)=>{
        if(err) console.log(err);
        res.redirect(`${returnPath}/dashboard/all-airlines`);
    })
})



//Delete airlines
app.delete('/deleteAirlines/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM allairlines WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End of All Airlines section **********************










//********************* Start Enquiry section *******************

//Get all our Enquiries
app.get('/enquiry', (req,res) => {
    let sql = 'SELECT * FROM enquiry';
    db.query(sql, (err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})


// add new contact
app.post('/addEnquiry', upload.none(), (req, res)=>{

    console.log("add Enquiry");
    
    const name = req.body?.name;
    const email = req.body?.email;
    const phone = req.body?.phone;
    const comment = req.body?.comment;

    console.log(name, email, phone, comment);

    let sql = "INSERT INTO enquiry (name, email, phone, comment) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, phone, comment], (err, result)=>{
        if(err) console.log(err);
        res.redirect(`localhost:3001/contact`);
    })
})


//Delete enquiry
app.delete('/deleteEnquiry/:id', (req,res) =>{
    const {id} = req.params;
    console.log(id);

    let sql = "DELETE FROM enquiry WHERE id = ?";
    db.query(sql, id , (err, result)=>{
        if(err) console.log(err);
    })
})

//************************** End of Enquiry section **********************

















// Create DB
// app.get('/createdb',(req,res) =>{
//     let sql = 'CREATE DATABASE tdevstore';
//     db.query(sql,(err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Database created');
//     })
// })

// Create Table
// app.get('/createTable', (req, res) =>{
//     let sql = 'CREATE TABLE welcome(id int AUTO_INCREMENT, image VARCHAR(255), title VARCHAR(255),  details VARCHAR(255), PRIMARY KEY(id))';
//     db.query(sql,(err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('Table created');
//     })
// })



// Insert Data into table

// app.get('/insert',(req,res) =>{
//     let sql = "INSERT INTO allairlines (name, location, telephone, phone, email, website) VALUES ('ashik','location','telephone','phone','email','website')";
//     db.query(sql,(err, result)=>{
//         if(err) throw err;
//         console.log(result);
//         res.send('data inserted');
//     })
// })


app.listen(5000, () =>{
    console.log("Server running on port 5000");
})