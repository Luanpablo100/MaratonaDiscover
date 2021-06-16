const express = require('express')
const routes = express.Router()

const viewes = __dirname + '/views/'

const profile = {
  name: "Luan",
  avatar: "https://scontent.fpll4-1.fna.fbcdn.net/v/t1.6435-9/163284065_1827761890714551_6019204281993718371_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=IC0fUyvfY2cAX85GINq&_nc_ht=scontent.fpll4-1.fna&oh=1fdc1f4521486acb4d586f3b13617184&oe=60B4AF6C",
  "monthly-budget": 3000,
  "days-per-week": 5,
  "hours-per-day": 5,
  "vacation-per-year": 4
}

const jobs = [
  {
    id:1,
    name: "Pizzaria Guloso",
    "daily-hours": 2,
    "total-hours": 60,
    created_at: Date.now()
  },
  {
    id: 2,
    name: "OneTwo Project",
    "daily-hours": 3,
    "total-hours": 47,
    created_at: Date.now()
  }
]

routes.get('/', (req, res) => res.render(viewes + "index", { jobs }))
routes.get('/job', (req, res) => res.render(viewes + "job"))
routes.post('/job', (req, res) => {

  const lastId = jobs[jobs.length - 1].id || 1;
 
  jobs.push({
    id: lastId + 1,
    name: req.body.name,
    "daily-hours": req.body["daily-hours"],
    "total-hours": req.body["total-hours"],
    created_at: Date.now()
  })

  job.created_at = new  Date.now()
  console.log(jobs)
  return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(viewes + "job-edit"))
routes.get('/profile', (req, res) => res.render(viewes + "profile", { profile }))

routes.get('/index.html', (req, res) => {
  return res.redirect('/')
})


module.exports = routes;