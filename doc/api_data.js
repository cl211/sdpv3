define({ "api": [
  {
    "type": "delete",
    "url": "/users/:userId",
    "title": "",
    "description": "<p>Cette requête permet de supprimer un user à partir de son ID</p> ",
    "name": "DeleteUsers",
    "group": "Users",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example :",
        "content": "/api/v1/users/171",
        "type": "js"
      }
    ],
    "filename": "routes/api.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "description": "<p>Cette requête permet de récupérer la liste de tous les users</p> ",
    "name": "GetUsers",
    "group": "Users",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example :",
        "content": "/api/v1/users",
        "type": "js"
      }
    ],
    "filename": "routes/api.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users/:userId",
    "title": "",
    "description": "<p>Cette requête permet de récupérer un utilisateur à partir de son ID</p> ",
    "name": "GetUsers",
    "group": "Users",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example :",
        "content": "/api/v1/users/171",
        "type": "js"
      }
    ],
    "filename": "routes/api.js",
    "groupTitle": "Users"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "",
    "description": "<p>Cette requête permet d'ajouter un nouvel utilisateur</p> ",
    "name": "PostUsers",
    "group": "Users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "buque",
            "description": "<p>La buque du PG</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "fams",
            "description": "<p>La fam's du PG</p> "
          },
          {
            "group": "Parameter",
            "type": "<p>String</p> ",
            "optional": false,
            "field": "bande",
            "description": "<p>La bande du PG</p> "
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example :",
        "content": "/api/v1/users",
        "type": "js"
      }
    ],
    "filename": "routes/api.js",
    "groupTitle": "Users"
  },
  {
    "type": "update",
    "url": "/users/:userId",
    "title": "",
    "description": "<p>Cette requête permet de mettre à jour les informations d'un utilisateur</p> ",
    "name": "UpdateUsers",
    "group": "Users",
    "version": "1.0.0",
    "examples": [
      {
        "title": "Example :",
        "content": "/api/v1/users/171",
        "type": "js"
      }
    ],
    "filename": "routes/api.js",
    "groupTitle": "Users"
  }
] });