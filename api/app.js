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
      "author": {
        "name": "soulaimane yahya",
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci",
        "avatar": "https://avatars.steamstatic.com/dc30b0e566d1757260e2147531c73de24275a5e8_full.jpg",
      },
      "lead": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente. Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "tags": ["lorem", "ipsum"],
      "comments": [
        {
            "id": 1,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 2,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 3,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 4,
            "content": "lorem ipsum dolor sit ament"
        }
      ]
    },
    {
      "id": 2,
      "title": "Lorem ipsum dolor sit amet",
      "slug": "lorem-ipsum-dolor-sit-amet",
      "author": {
        "name": "soulaimane yahya",
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci",
        "avatar": "https://avatars.steamstatic.com/7f76280268995438cbff25d1f1e24b9da2ddd664_full.jpg",
      },
      "lead": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "tags": ["lorem", "sit", "amet"],
      "comments": [
        {
            "id": 1,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 2,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 3,
            "content": "lorem ipsum dolor sit ament"
        }
      ]
    },
    {
      "id": 3,
      "title": "Sed diam nonumy eirmod tempor",
      "slug": "sed-diam-nonumy-eirmod-tempor",
      "author": {
        "name": "soulaimane yahya",
        "bio": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci",
        "avatar": "https://avatars.steamstatic.com/dc0aca2f0e3ed51701348d6ffb6653b589ac6104_full.jpg",
      },
      "lead": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "content": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam cum ut similique impedit adipisci, quidem ducimus consequuntur possimus blanditiis magnam, mollitia quasi iste quia, odio officia. Laboriosam sit reprehenderit sapiente.",
      "tags": ["nonumy", "eirmod", "tempor"],
      "comments": [
        {
            "id": 1,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 2,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 3,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 4,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 5,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 6,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 7,
            "content": "lorem ipsum dolor sit ament"
        },
        {
            "id": 8,
            "content": "lorem ipsum dolor sit ament"
        }
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
