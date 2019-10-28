1. db.lesrestaurants.find().pretty()

2. db.lesrestaurants.find({},{'restaurant_id': 1,'name': 1,'borough': 1,'cuisine': 1})

3. db.lesrestaurants.find({},{'_id':0,'restaurant_id': 1,'name': 1,'borough': 1,'cuisine': 1})

4. db.lesrestaurants.find({},{'_id':0,'restaurant_id': 1,'name': 1,'borough': 1,'cuisine': 1,'address.zipcode':1})

5. db.lesrestaurants.find({'borough':'Bronx'})

6. db.lesrestaurants.find({'borough':'Bronx'}).limit(5)

7. db.lesrestaurants.find({'borough':'Bronx'}).skip(5).limit(5)

8. db.lesrestaurants.find({'grades.score':{$gt:90}})

9. db.lesrestaurants.find({'grades':{
     $elemMatch: {
         score: {
             $gt:80, $lte:100
            }
        }
    }
})

10. db.lesrestaurants.find({"address.coord.0":{$lt:-95.754168}})

11. db.lesrestaurants.find({cuisine: 'American ', 'grades.score':{$gt:70}, 'address.coord.0':{$lt:-65.754168}})

12. db.lesrestaurants.find({$and:[
    { cuisine: 'American ' },
    { 'grades.score':{$gt:70} }, 
    { 'address.coord.0':{$lt:-65.754168} }
    ]})

13.  db.lesrestaurants.find({$and:[
    { cuisine: {$ne:'American '} },
    { 'grades.grade':"A" }, 
    { borough: { $ne: 'Brooklyn'} }
    ]})

14. db.lesrestaurants.find({name: { $regex : /Wil$/ }}
,{'restaurant_id': 1,'name': 1,'borough': 1,'cuisine': 1})

15. db.lesrestaurants.find({name: { $regex : /^ces/ }}
,{'restaurant_id': 1,'name': 1,'borough': 1,'cuisine': 1})

16. db.lesrestaurants.find({name: { $regex : /$reg$/ }}
    ,{'restaurant_id': 1,'name': 1,'borough': 1,'cuisine': 1})

17. db.lesrestaurants.find({"borough": "Bronx",
$or : [
{"cuisine": "American "},
{"cuisine": "Chinese"}
]})

18. db.lesrestaurants.find({$or:[
    { borough: "Staten Island" },
    { borough: "Brooklyn" },
    { borough: "Bronx" }
    ]})

19. db.lesrestaurants.find({$nor:[
    { borough: "Staten Island" },
    { borough: "Brooklyn" },
    { borough: "Bronx" }
    ]})

20. db.lesrestaurants.find({'grades.score':{$lt:10}},{'_id': 1,'name': 1,'borough': 1,'cuisine': 1})

21. db.lesrestaurants.find({ name: { $regex: /Wil$/ },
    $nor : [
    { cuisine: "Chinese" },
    { cuisine: "American " }
    ]})

22. db.lesrestaurants.find({'grades.score':11, 'grades.grade':'A', 'grades.date': ISODate("2014-08-11T00:00:00Z") },
{'_id': 1,'name': 1,'grades.grade': 1})

23. db.lesrestaurants.find({'grades.1.score':9, 'grades.1.grade':'A', 'grades.1.date': ISODate("2014-08-11T00:00:00Z") },
{'_id': 1,'name': 1,'grades.grade': 1})

24. db.lesrestaurants.find({'address':{
    $elemMatch:
    {
        'coord.1':{
            $gt:42, $lte:52
        }
    }
}
}
,{'_id': 1,'name': 1,'address.coord': 1})

25. db.lesrestaurants.insert({
    "address.building" : '',
    "address.coord.0" : '',
    "address.coord.1" : '',
    "address.street" : '',
    "address.zipcode" : '',
    "borough" : '',
    "cuisine": '',
    "grades.0": '',
    "grades.1": '',
    "grades.2": '',
    "name":'',
    "restaurant_id":'' })