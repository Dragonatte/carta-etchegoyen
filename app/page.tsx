import {Alergenos, FloatingFoodIcons, Picante} from "@/components/icons";

type Producto = {
	nombre: string;
	descripcion: string;
	precio: number;
	alergenos?: string[];
	picante?: 1 | 2 | 3;
}

type Menu<T> = Record<string, T[]>;

const Productos: Menu<Producto> = {
	nuestras_patatas: [
		{
			nombre: "Echegoyen",
			descripcion: "Gouda fundido, salsa cheddar, sañsa especial y virutas de bacon crispy.",
			precio: 7,
			alergenos: ["leche", "huevo", "mostaza"]
		},
		{
			nombre: "Cheeseburger",
			descripcion: "Carne especiada, salsa Burger, Cheddar ahumado fundido, mahonesa ahumada, dados de tomate y virutas de bacon crispy.",
			precio: 8.50,
			alergenos: ["leche", "huevo", "mostaza"]
		},
		{
			nombre: "Steak house",
			descripcion: "Nuestro pulled pork, Gouda fundido, mahonesa ahumada, BBQ Jack Daniel's Tennessee, salsa Bourbon y jalapeños.",
			precio: 9,
			picante: 1,
			alergenos: ["leche", "huevo", "mostaza", "sulfitos"]
		},
		{
			nombre: "Bravas",
			descripcion: "Patatas con nuestra salsa picante y ali-oli de ajo negro.",
			precio: 7.5,
			alergenos: ["huevo"]
		}
	],
	entrantes: [
		{
			nombre: "Pollo corn flakes",
			descripcion: "Pollo crujiente con cereales, acompañado de salsa miel/mostaza (8 uds.)",
			precio: 8.5,
			alergenos: ["gluten", "huevo", "mostaza"]
		}
	],
	hamburguesas: [
		{
			nombre: "Suculenta",
			descripcion: "Pan Viena, 250 g de vaca rubia gallega, lechuga, tomate, Gouda, cebolla, pepinillo, bacon y huevo frito.",
			precio: 12,
			alergenos: ["gluten", "leche", "huevo"]
		},
		{
			nombre: "Crispy",
			descripcion: "Brioche potato roll, pollo rebozado en Corn Flakes, salsa Thai, lechuga, tomate, pepinillo y cebolla caramelizada. Coronado con una bola de queso asturiano René Picott.",
			precio: 12,
			alergenos: ["gluten", "leche", "huevo", "soja", "sésamo"]
		},
		{
			nombre: "Cojonuda",
			descripcion: "Brioche potato roll, 220 g de vaca rubia gallega ahumada, salsa Print, lechuga, cebolla, pepinillo y doble Cheddar ahumado.",
			precio: 12,
			alergenos: ["gluten", "leche", "huevo", "mostaza"]
		},
		{
			nombre: "Cabrísima",
			descripcion: "Brioche negro, 250 g de vaca rubia gallega, lechuga, queso de cabra puro, salsa de cerveza negra y cebolla roja encurtida en habaneros.",
			precio: 12,
			picante: 1,
			alergenos: ["gluten", "leche", "sulfitos"]
		},
		{
			nombre: "Locura",
			descripcion: "Brioche negro, 220 g de vaca rubia gallega ahumada, crema Lotus, bacon, tomate, salsa ranchera y doble Gouda.",
			precio: 12,
			alergenos: ["gluten", "leche", "huevo", "soja"]
		},
		{
			nombre: "Xtreme Cheddar",
			descripcion: "Brioche potato roll, 220 g de vaca rubia gallega ahumada, bacon, aros de Cheddar, cebolla caramelizada, mahonesa ahumada y muuucho Cheddar ahumado.",
			precio: 13.5,
			alergenos: ["gluten", "leche", "huevo"]
		},
		{
			nombre: "Xtreme Bacón",
			descripcion: "Brioche potato roll, 220 g de vaca rubia gallega ahumada, salsa Smokey Baconnaise, mermelada de bacon casera, doble Gouda, cebolla picada y muuucho bacon.",
			precio: 13.5,
			alergenos: ["gluten", "leche", "huevo", "mostaza"]
		},
		{
			nombre: "Carnívora",
			descripcion: "Brioche potato roll, 250 g de vaca rubia gallega, 250 g de pulled pork, mahonesa ahumada, Gouda, bacon, tomate, aros de cebolla rebozados y BBQ Jack Daniel’s Tennessee.",
			precio: 15,
			alergenos: ["gluten", "leche", "huevo", "mostaza", "sulfitos"]
		},
		{
			nombre: "Trufavorita",
			descripcion: "Brioche potato roll, 250 g de vaca rubia gallega, setas Portobello, aceite crudo de trufa, queso Monterrey Jack fundido, salsa de trufa y trufa laminada.",
			precio: 15.5,
			alergenos: ["gluten", "leche", "huevo"]
		}
	],
	pulled_pork: [
		{
			nombre: "Diablo",
			descripcion: "Brioche negro, pulled pork con salsa Búffalo, lechuga, tomate, cebolla y queso Monterrey Jack.",
			precio: 10.50,
			picante: 1,
			alergenos: ["gluten", "leche", "huevo", "sulfitos"]
		},
		{
			nombre: "Black Jack",
			descripcion: "Brioche negro, pulled pork en salsa, lechuga, tomate, cebolla y queso Monterrey Jack.",
			precio: 10.50,
			alergenos: ["gluten", "leche", "huevo", "sulfitos"]
		}
	],
	pulled_chicken: [
		{
			nombre: "",
			descripcion: "Pan Viena, jugoso pollo desmechado con salsa yogurt casero, lechuga, Gouda, bacon y aros de cebolla rebozados",
			precio: 10.70,
			alergenos: ["gluten", "leche", "huevo"]
		}
	],
	cochinita_pibil: [
		{
			nombre: "",
			descripcion: "Pan Viena, carne de cerdo desmechada y macerada en achiote, lechuga, tomate, jalapeños, queso Monterrey Black y cebolla roja encurtida con chiles habaneros.",
			precio: 11.50,
			picante: 1,
			alergenos: ["gluten", "leche", "sulfitos"]
		}
	],
	hot_dogs: [
		{
			nombre: "Original",
			descripcion: "Ketchup, mostaza, cebolla picada, pepinillo y cebolla crujiente.",
			precio: 6,
			alergenos: ["gluten", "mostaza"]
		},
		{
			nombre: "Bacon & Cheese",
			descripcion: "Mahonesa, Gouda, bacon, salsa Cheddar y virutas de bacon crispy.",
			precio: 6.9,
			alergenos: ["gluten", "leche", "huevo"]
		},
		{
			nombre: "Weno, Weno",
			descripcion: "Salsa Bourbon, Gouda, carne especiada, salsa Cheddar y patatas paja.",
			precio: 7.9,
			alergenos: ["gluten", "leche", "sulfitos"]
		},
		{
			nombre: "Tex-Mex",
			descripcion: "Cochinita pibil, bacon, Gouda, maíz, dados de tomate, mahonesa Sriracha y ali-oli de ajo negro.",
			precio: 9,
			picante: 1,
			alergenos: ["gluten", "leche", "huevo", "sulfitos"]
		},
		{
			nombre: "Yankee",
			descripcion: "Pulled pork, Camembert fundido, pollo a la brasa, huevos de codorniz y salsa Thai.",
			precio: 9,
			alergenos: ["gluten", "leche", "huevo", "soja", "sésamo"]
		}
	]
};
/*
{
	tortilla_de_patatas: [
		{
			nombre: "Tortilla de patatas",
			descripcion: "Tortilla de patatas por encargo.",
			precio: 14
		},
		{
			nombre: "Tortilla de patatas rellena",
			descripcion: "Tortilla de patatas rellena (precio según relleno).",
			precio: 16
		}
	],
	extras: [
		{
			nombre: "Ingrediente extra",
			descripcion: "Ingrediente adicional a elegir.",
			precio: 1.5
		},
		{
			nombre: "Habanero",
			descripcion: "Extra de habanero.",
			precio: 2,
			picante: true
		},
		{
			nombre: "El Increíble Hulk",
			descripcion: "Extra muy picante.",
			precio: 2,
			picante: true
		},
		{
			nombre: "Servicio de terraza",
			descripcion: "Servicio de terraza por consumición.",
			precio: 0.2
		}
	]
}

const Productos_vg: Menu<Producto> = {
	para_picar: [
    {
      nombre: "Nachos",
      descripcion: "Guacamole, carne picada vegana, pico de gallo, jalapeños y salsa ranchera.",
      precio: 14,
      picante: true
    },
    {
      nombre: "Tequeños",
      descripcion: "Acompañados de salsa de cerveza negra (6 uds.).",
      precio: 8
    },
    {
      nombre: "Aros de cebolla",
      descripcion: "Rebozados y servidos con mahonesa vegana (12 uds.).",
      precio: 6.5
    },
    {
      nombre: "Nuggets",
      descripcion: "Se acompañan de BBQ (8 uds.).",
      precio: 8
    }
  ],

  nuestras_patatas: [
    {
      nombre: "Echegoyen",
      descripcion: "Gouda vegano fundido, salsa especial y virutas de bacon crispy vegano.",
      precio: 8
    },
    {
      nombre: "Print",
      descripcion: "Cheddar vegano fundido, salsa Print y cebolla caramelizada.",
      precio: 7.5
    },
    {
      nombre: "Steak House",
      descripcion: "Carne picada vegana, Gouda vegano fundido, mahonesa ahumada vegana, BBQ Jack Daniel’s Tennessee y jalapeños.",
      precio: 10,
      picante: true
    },
    {
      nombre: "Patatas Cheeseburger",
      descripcion: "Carne picada vegana, salsa Burger, Cheddar vegano fundido, mahonesa vegana, dados de tomate y virutas de bacon crispy vegano.",
      precio: 9
    }
  ],

  hamburguesas: [
    {
      nombre: "Suculenta",
      descripcion: "Pan Viena, carne de ternera vegana, lechuga, tomate, Gouda vegano, cebolla, pepinillo, bacon vegano y salsa de cerveza negra.",
      precio: 13
    },
    {
      nombre: "Crispy Chicken",
      descripcion: "Pan Viena, pollo crujiente vegano, lechuga, tomate, cebolla caramelizada, guacamole y Gouda vegano.",
      precio: 13
    },
    {
      nombre: "Cojonuda",
      descripcion: "Brioche, carne de ternera vegana, salsa Print, lechuga, cebolla, pepinillo y Cheddar vegano.",
      precio: 13
    },
    {
      nombre: "Locura",
      descripcion: "Brioche, carne de ternera vegana, crema Lotus, mahonesa vegana, bacon vegano, tomate y Gouda vegano.",
      precio: 13
    },
    {
      nombre: "Extreme Cheddar",
      descripcion: "Brioche, carne de ternera vegana, cebolla caramelizada, bacon vegano, mahonesa ahumada vegana, aros de cebolla rebozados y Cheddar vegano.",
      precio: 14
    }
  ],

  hot_dogs: [
    {
      nombre: "Viki",
      descripcion: "Pan perrito, salchicha vegana, salsa Print y cebolla crujiente.",
      precio: 6
    },
    {
      nombre: "Original",
      descripcion: "Pan perrito, salchicha vegana, ketchup, mostaza, cebolla picada, pepinillo y cebolla crujiente.",
      precio: 7
    },
    {
      nombre: "Bacon & Cheese",
      descripcion: "Pan perrito, salchicha vegana, mahonesa vegana, bacon vegano, Gouda vegano y virutas de bacon crispy vegano.",
      precio: 7.5
    }
  ],

  cheese_lovers: [
    {
      nombre: "Cheese Lovers Vegetariano",
      descripcion: "Picoteo para amantes del queso: 2 tequeños, 3 fingers mozzarella, 3 aros Cheddar y 3 jalapeños rellenos de Cheddar, acompañado de BBQ Jack Daniel’s.",
      precio: 9.5,
      picante: true
    }
  ]
}
*/

export default function CartaPage() {
	return (
		<main className="relative isolate p-4">
			<FloatingFoodIcons />

			<section id={"carta"} className="relative z-10 pt-32">
				<h1 className="text-6xl font-title font-bold text-center text-accent tracking-[0.35em]">Nuestra Carta</h1>
				{/*<a className={"w-full block font-title text-accent-vg text-center tracking-widest"} href={"#carta-vegana"}>¡Tenemos
					opciones veganas!</a>*/}
				{ Object.entries(Productos).map(([s, p]: [string, Producto[]]) => (
						<section key={s} className="flex flex-col my-8 w-full">
							<h2
									className={"text-4xl font-title font-semibold tracking-widest capitalize mb-4 text-accent"}
							>
								{s.replace(/_/g, ' ').replace("vg", '')}
							</h2>
							<ul className="space-y-4">
								{ p.map((item: Producto, index: number) => (
									<li key={index} className="border-b border-gray-600 pb-4">
										<h3 className="text-xl font-bold pb-4">{item.nombre} </h3>
										<section className="flex gap-1 items-end">
											<div className="flex-1">
												<p className="text-gray-400">{item.descripcion}</p>
											  <Picante nivel={item.picante} />
												<Alergenos alergenos={item.alergenos} />
											</div>
											<p className={"font-semibold text-right text-accent/75"}>{item.precio.toFixed(2)}€</p>
										</section>
									</li>
								)) }
							</ul>
						</section>
					))
				}
			</section>
			{/*
			<section id={"carta-vegana"} className="pt-32">
				<h1 className="text-6xl font-title font-bold text-center text-accent-vg tracking-[0.35em]">Nuestra Carta Vegana</h1>
				{ Object.entries(Productos_vg).map(([s, p]: [string, Producto[]]) => (
						<section key={s} className="flex flex-col my-8 w-full">
							<h2
									className={"text-4xl font-title font-semibold tracking-widest capitalize mb-4 text-accent-vg"}
							>
								{s.replace(/_/g, ' ').replace("vg", '')}
							</h2>
							<ul className="space-y-4">
								{ p.map((item: Producto, index: number) => (
									<li key={index} className="border-b border-gray-600 pb-4">
										<h3 className="text-xl font-bold pb-4">{item.nombre} <Picante nivel={item.picante} /></h3>
										<section className="flex gap-1 items-end">
											<div className="flex-1">
												<p className="text-gray-400">{item.descripcion}</p>
												<Alergenos alergenos={item.alergenos} />
											</div>
											<p className={"font-semibold text-right text-accent-vg/75"}>{item.precio.toFixed(2)}€</p>
										</section>
									</li>
								)) }
							</ul>
						</section>
					))
				}
			</section>
			*/}
		</main>
	);
}