
const express = require('express')
const router = express.Router()

const { createCategory, getAllCategory, categoryByName, getCategoryByID, deleteCategory, updateCategory } = require('./Controller')

router.post('/addcategory', addCategory)
router.get('/getcategory', getCategory);
router.get('/categorybyname', categoryByName)
router.get('/getcategorybyid', getCategoryByID);
router.delete('/deletecategory', deleteCategory);
router.put('/updatecategory', updateCategory);


module.exports = router