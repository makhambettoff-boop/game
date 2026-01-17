const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();
app.use(express.json());

let users = [
  { id:1, name: "Asem", age: "19", city: "Shymkent" },
  {id:2, name: "Aruzhan", age: "20", city: "Astana" },
  {id:3, name: "Aliya", age:"20", city: "Almaty" },
  {id:4, name: "Alina", age:"22", city: "Oral" },
  {id:5, name: "Nazerke", age: "30", city: "Kostanay" }
];

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: ID арқылы қолданушыны табу
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Қолданушы табылды
 *       404:
 *         description: Қолданушы табылмады
 */

app.get("/users", (req, res) => {
    res.json(users);
});

// Swagger параметрлері
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Менің API-м", 
      version: "1.0.0",
      description: "Бұл менің awesome API құжаттамам!",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./inndex.js"], // маршруты осы файлда болса
};

const specs = swaggerJsdoc(options);

// Swagger UI қосу
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.listen(3000, () => console.log("Server 3000 портта жұмыс істеп тұр"));

app.get("/users/:id", (req, res) => {
     const id = Number(req.params.id);
  const user = users.find((u) => u.id === id); 
  res.json(user)
});



