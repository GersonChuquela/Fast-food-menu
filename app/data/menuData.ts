export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  items: MenuItem[];
}

export const menuData: Category[] = [
  {
    id: 1,
    name: "Hambúrgueres",
    items: [
      {
        id: 1,
        name: "Clássico",
        description: "Hambúrguer, queijo, alface, tomate",
        price: 250,
        image: "/img/hamburguer2.jpg?height=200&width=300",
      },
      {
        id: 2,
        name: "Duplo",
        description: "Dois hambúrgueres, queijo duplo, bacon",
        price: 350,
        image: "/img/hamburguer1.jpg?height=200&width=300",
      },
      {
        id: 3,
        name: "Vegetariano",
        description: "Hambúrguer de grão-de-bico, queijo, rúcula",
        price: 300,
        image: "/img/hamburguer3.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Acompanhamentos",
    items: [
      {
        id: 4,
        name: "Batata Frita",
        description: "Porção individual",
        price: 100,
        image: "/img/fries.jpg",
      },
      {
        id: 5,
        name: "Onion Rings",
        description: "Anéis de cebola empanados",
        price: 120,
        image: "/img/onion-rings.jpg",
      },
      {
        id: 9,
        name: "Asinhas",
        description: "Asinhas de galinha",
        price: 80,
        image: "/img/asinhas.avif",
      },
    ],
  },
  {
    id: 3,
    name: "Bebidas",
    items: [
      {
        id: 6,
        name: "Refrigerante",
        description: "Lata 350ml",
        price: 50,
        image: "/img/refresco.jpg",
      },
      {
        id: 7,
        name: "Suco Natural",
        description: "Copo 300ml",
        price: 70,
        image: "/img/sumo1.jpg",
      },
      {
        id: 8,
        name: "Água Mineral",
        description: "Garrafa 500ml",
        price: 30,
        image: "/img/agua.jpg",
      },
    ],
  },
];
