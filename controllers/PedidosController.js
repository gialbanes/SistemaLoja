import express from "express";
const router = express.Router();


router.get("/pedidos", (req, res) => {
    const pedidos = [
      { 
        numero: 1, 
        valor: 227.3 
      },
      { 
        numero: 2, 
        valor: 469.70 
      },
      { 
        numero: 3, 
        valor: 135.70 
      },
      { 
        numero: 4, 
        valor: 123.70 
      },
      { 
        numero: 5, 
        valor: 91.90 
      },
      { 
        numero: 6, 
        valor: 79.80 
      },
      { 
        numero: 7, 
        valor: 55.90 
      },
      { 
        numero: 8, 
        valor: 34.90 
      },
      { 
        numero: 9, 
        valor: 97.80 
      },
      { 
        numero: 10, 
        valor: 118.70 
      },
      { 
        numero: 11, 
        valor: 43.90 
      },
      { 
        numero: 12, 
        valor: 80.90 
      },
      { 
        numero: 13, 
        valor: 150.00 
      },
      { 
        numero: 14, 
        valor: 69.90 
      },
      { 
        numero: 15, 
        valor: 119.50 
      },
      { 
        numero: 16, 
        valor: 23.90 
      },
      { 
        numero: 17, 
        valor: 85.60 
      },
      { 
        numero: 18, 
        valor: 104.30 
      }
    ];
    res.render("pedidos", {
      pedidos: pedidos,
    });
  });

export default router;