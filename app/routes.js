const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Financial year check yes and no
router.post('/3_FY-1', function (req, res)
  {
    const selectedOption = req.body['fy-year']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("3_FY-1", { error })}

     // Make a variable and give it the value from 'fy-year'
     var fyyear = req.session.data['fy-year']

     // Check whether the variable matches a condition
     if (fyyear == "yes"){
       // Send user to next page
       res.redirect('/4_before_you_start')
     }
     else {
       // Send user to ineligible page
       res.redirect('/3_FY-1-No')
     }
   })


// PDF document delete check yes and no
router.post('/new-user/6S1-3-FY-PDF/S13-4-DeleteConfirm', function (req, res)
  {
    const selectedOption = req.body['delete-document']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("new-user/6S1-3-FY-PDF/S13-4-DeleteConfirm", { error })}

     // Make a variable and give it the value from 'fy-year'
     var deletedoc = req.session.data['delete-document']

     // Check to confirm the deletion
     if (deletedoc == "yes"){
       // Send user to next page
       res.redirect('/new-user/6S1-3-FY-PDF/S13-5-Deleted')
     }
     else {
       // Cancelling the deletion
       res.redirect('/new-user/6S1-3-FY-PDF/S13-3A-PDFUploaded')
     }
   })


// Scoping check yes and no - new user
router.post('/new-user/6S1-1-Scoping/S11-1-ScopingQ', function (req, res)
{
  const selectedOption = req.body['scoping']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("new-user/6S1-1-Scoping/S11-1-ScopingQ", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var scopingconfirm = req.session.data['scoping']

  // YES, company has to subnit the statement
  if (scopingconfirm == "yes"){
    // Send user to next page
    res.redirect('/new-user/6S1-2-Org/S12A-complete')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/new-user/6S1-1-Scoping/S11-2-NoSelection')
  }
})



// Scoping changing for No to Yes - return user
router.post('/return-user/6S1-1-Scoping-No/S11-1-ScopingA', function (req, res)
{
  const selectedOption = req.body['scopingNY']

  // Make a variable and give it the value from 'scopingconfirm'
  var scopingNYconfirm = req.session.data['scopingNY']

  // YES, company has to subnit the statement
  if (scopingNYconfirm == "yes"){
    // Send user to next page
    res.redirect('/return-user/6S1-1-Scoping-No/6r_MSSR-complete')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user/6S1-1-Scoping-No/S11-2B-NoSelection-selected')
  }
})


// Scoping changing for Yes to No - return user
router.post('/return-user/6S1-1-Scoping-Yes/S11-1-ScopingA', function (req, res)
{
  const selectedOption = req.body['scopingYN']

  // Make a variable and give it the value from 'scopingconfirm'
  var scopingYNconfirm = req.session.data['scopingYN']

  // YES, company has to subnit the statement
  if (scopingYNconfirm == "yes"){
    // Send user to next page
    res.redirect('../6r_MSSR-complete')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/return-user/6S1-1-Scoping-Yes/S11-2-NoSelection')
  }
})



// Organisation type [Single/Group] - new user.
router.post('/new-user/6S1-2-Org/S12-1-Org', function (req, res)
{
  const selectedOption = req.body['org-type']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("new-user/6S1-2-Org/S12-1-Org", { error })}

  // Make a variable and give it the value from 'scopingconfirm'
  var orgTypeconfirm = req.session.data['org-type']

  // YES, company has to subnit the statement
  if (orgTypeconfirm == "group"){
    // Send user to next page
    res.redirect('/new-user/6S1-2-group/S11-2-search')
  }
  else {
    // NO, company do not have to subnit the statement
    res.redirect('/new-user/6S1-2-Org/S12A-complete')
  }
})



module.exports = router
