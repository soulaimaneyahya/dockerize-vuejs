const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

// logger middleware
app.use((req, res, next) => {
    console.log('new request made:');
    console.log('host:', req.hostname);
    console.log('path:', req.path);
    console.log('method:', req.method);
    next()
})

const articles = [
    {
      "id": 1,
      "title": "Lorem ipsum dolor",
      "slug": "lorem-ipsum-dolor",
      "lead": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "tags": ["Lorem", "ipsum"],
      "comments": [

      ]
    },
    {
      "id": 2,
      "title": "Lorem ipsum dolor sit amet",
      "slug": "lorem-ipsum-dolor-sit-amet",
      "lead": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "tags": ["sit", "amet"],
      "comments": [

      ]
    },
    {
      "id": 3,
      "title": "Sed diam nonumy eirmod tempor",
      "slug": "sed-diam-nonumy-eirmod-tempor",
      "lead": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "tags": ["nonumy", "eirmod", "tempor"],
      "comments": [

      ]
    }
];

app.get('/articles', (req, res) => {
  res.status(200).json(articles)
})

app.get('/articles/:id', (req, res) => {
    res.status(200).json(articles[req.params.id -1])
})

app.get('/', (req, res) => {
    res.status(200).json({
        "message": "success"
    })
})

// catch
app.use((req, res) => {
    res.status(400).json({
        "message": "not found"
    })
    res.status(403).json({
        "message": "unauthorized"
    })
    res.status(500).json({
        "message": "server error"
    })
})

app.listen(3000, () => {
    console.log('listening for requests on port 3000')
})
