const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

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

router.post('/6_S1_2-2-2_MSSR', function (req, res)
  {
    const selectedOption = req.body['delete-document']
     let error = {}
     if (!selectedOption) {
       error = { text: "Select an option" }
      return res.render("6_S1_2-2-2_MSSR", { error })}

     // Make a variable and give it the value from 'fy-year'
     var deletedoc = req.session.data['delete-document']

     // Check whether the variable matches a condition
     if (deletedoc == "yes"){
       // Send user to next page
       res.redirect('/6_S1_2-2A_MSSR')
     }
     else {
       // Send user to ineligible page
       res.redirect('/6_S1_2-2-1_MSSR')
     }
   })


   router.post('return-user/6r_S1_2-2-2_MSSR', function (req, res)
   {
     const selectedOption = req.body['delete-document2']
      let error = {}
      if (!selectedOption) {
        error = { text: "Select an option" }
       return res.render("/return-user/6r_S1_2-2-2_MSSR", { error })}

      // Make a variable and give it the value from 'fy-year'
      var deletedoc2 = req.session.data['delete-document2']

      // Check whether the variable matches a condition
      if (deletedoc2 == "yes"){
        // Send user to next page
        res.redirect('/return-user/6r_S1_2-2_MSSR')
      }
      else {
        // Send user to ineligible page
        res.redirect('/return-user/6r_S1_2-2-1_MSSR')
      }
    })





router.post('/6_S1_1-2_MSSR', function (req, res)
{
  const selectedOption = req.body['scoping']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("6_S1_1-2_MSSR", { error })}

  // Make a variable and give it the value from 'fy-year'
  var scopingconfirm = req.session.data['scoping']

  // Check whether the variable matches a condition
  if (scopingconfirm == "yes"){
    // Send user to next page
    res.redirect('/6_S1_1-2A-1_MSSR')
  }
  else {
    // Send user to ineligible page
    res.redirect('/6_S1_1-2-1_MSSR')
  }
})


router.post('/6_S1_1-2-1_MSSR', function (req, res)
{
  const selectedOption = req.body['scopingNo']
  let error = {}
  if (!selectedOption) {
    error = { text: "Select an option" }
    return res.render("6_S1_1-2-1_MSSR", { error })}

  // Make a variable and give it the value from 'fy-year'
  var scopingNOconfirm = req.session.data['scopingNo']

  // Check whether the variable matches a condition
  if (scopingNoconfirm == "yes"){
    // Send user to next page
    res.redirect('/6_S1_1-2A-1_MSSR')
  }
  else {
    // Send user to ineligible page
    res.redirect('/6_S1_1-2-1_MSSR')
  }
})


module.exports = router
