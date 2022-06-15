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
       res.redirect('/6_S1_2-2_MSSR')
     }
     else {
       // Send user to ineligible page
       res.redirect('/6_S1_2-2-1_MSSR')
     }
   })





module.exports = router
