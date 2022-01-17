'use strict';

module.exports = {
	// se ejecuta cuando hacemos la siembra
	up: async (queryInterface, Sequelize) => {
		const oldProductos = [
			{
				Codigo: 'AL6V0210UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CUANDO NECESITABA UNA MANO, ME ENCONTRE CON SU PATA - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0211UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - YO TENGO UN HIJO DE 4 PATAS - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0212UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - YO TENGO UNA HIJA DE 4 PATAS - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0213UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - YO TENGO HIJOS DE 4 PATAS - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0214UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - YO TENGO UN HIJO FELINO - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0215UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - UN MAULLIDO ES UN MASAJE AL CORAZON - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0216UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CAT LOVER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0217UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CHIHU LOVER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0218UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - FRENCHIE LOVER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0219UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - DOG LOVER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0220UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - I WOOF YOU - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0221UNN',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - SCHNAUZER LOVER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0222UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BULLDOG FRANCES - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0223UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BULLDOG FRANCES - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0224UBN',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BULLDOG FRANCES NENA - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0225UBN',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BULLDOG FRANCES NENE - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0226UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BULLDOG INGLES - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0227UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BEAGLE - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0228UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BOXER - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0229UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CANICHE NENA - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0230UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CANICHE NENE - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0231UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CHIHUAHUA - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0232UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CHIHUAHUA - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0233UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - GATO - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0234UGR',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - GATO - GRIS - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0235UNA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - GATO - NARANJA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0236UNE',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - GATO - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0237UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - GOLDEN - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0238UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - JACK RUSELL - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0239UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - LABRADORA - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0240UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - OVEJERO - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0241UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PEPA - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0242UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PEPE - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0243UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PICHICHO - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0244UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PICHICHA - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0245UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PUG NENA - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0246UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PUG NENE - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0247UGR',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SALCHICHA ARLEQUIN - GRIS - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0248UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SALCHICHA - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0249UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SALCHICHA - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0250UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SALCHICHA - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0251UGR',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SCHNAUZER - GRIS - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0252UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SHARPEI - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0253UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SHIH TZU OREJAS GRIS - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0254UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PERSONALIZADO - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0550UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SHIH TZU OREJAS BEIGE - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0551UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SALCHICHA COLLAR COLORES - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0552UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PICHICHO ANTEOJOS Y FLOR - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0553UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - NEGRA - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0554UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BICHON FRISE - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0555UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - COCKER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0556UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - COCKER - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0557UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - MALTES - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0558UBN',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BORDER COLLIE - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0559UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BATATA - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0560UBN',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PITBULL - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0561UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PITBULL - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0562UBM',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PITBULL - BYM - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0563UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PINSCHER - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0564UNE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SCHNAUZER - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0565UBN',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - PASTOR AUSTRALIANO - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0566UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - GALGO - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0567UBN',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - GALGO - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0568UBM',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - GALGO - BYM - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0569UBE',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CALLEJERO - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0570UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - DOGO - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0571UMA',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - FOX TERRIER - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0572UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - FOX TERRIER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0579UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CANICHE LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0580UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - PUG LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0581UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - SALCHICHA ARLEQUIN LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0582UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - SALCHICHA MARRON LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0583UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - SALCHICHA NEGRO LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0584UVE',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - AIREDALE LOVER - VERDE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0585UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - AIREDALE LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0586UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - GALGO LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0587UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - PEKINES LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0588UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - FRENCHIE BEIGE LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0589UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - BATATA LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0590UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - MALTES LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0591UBL',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - WESTY LOVER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0592UNA',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - WESTY LOVER - NARANJA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0593UVE',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - WESTY LOVER - VERDE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'AL6V0806UBL',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - WESTY - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N0994RV',
				Descripcion:
					'BANDERIN - NAVIDAD BULLDOG FRANCES - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N0995RV',
				Descripcion:
					'BANDERIN - NAVIDAD BULLDOG INGLES - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N0996RV',
				Descripcion: 'BANDERIN - NAVIDAD CANICHE - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N0997RV',
				Descripcion: 'BANDERIN - NAVIDAD GATITO - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N0998RV',
				Descripcion: 'BANDERIN - NAVIDAD PEPE - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N0999RV',
				Descripcion: 'BANDERIN - NAVIDAD SALCHICHA - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N1000RV',
				Descripcion: 'BANDERIN - NAVIDAD SCHNAUZER - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BA6N1001RV',
				Descripcion: 'BANDERIN - NAVIDAD SHARPEI - RYV - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0746BFU',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS BEIGE - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0747BNE',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS BEIGE - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0748BVE',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS BEIGE - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0749BFU',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS NEGROS - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0750BNE',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS NEGROS - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0751BVE',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS NEGROS - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0752BCE',
				Descripcion:
					'BASE MOISES EXTRA GRANDE - PERROS SUPER - CELESTE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0753BFU',
				Descripcion: 'BASE MOISES EXTRA GRANDE - WOOF - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0754BNE',
				Descripcion: 'BASE MOISES EXTRA GRANDE - WOOF - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0755BVE',
				Descripcion: 'BASE MOISES EXTRA GRANDE - WOOF - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0756CFU',
				Descripcion: 'BASE MOISES GRANDE - PERROS BEIGE - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0757CNE',
				Descripcion: 'BASE MOISES GRANDE - PERROS BEIGE - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0758CVE',
				Descripcion: 'BASE MOISES GRANDE - PERROS BEIGE - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0759CFU',
				Descripcion: 'BASE MOISES GRANDE - PERROS NEGROS - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0760CNE',
				Descripcion: 'BASE MOISES GRANDE - PERROS NEGROS - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0761CVE',
				Descripcion: 'BASE MOISES GRANDE - PERROS NEGROS - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0762CCE',
				Descripcion: 'BASE MOISES GRANDE - PERROS SUPER - CELESTE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0763CFU',
				Descripcion: 'BASE MOISES GRANDE - WOOF - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0764CNE',
				Descripcion: 'BASE MOISES GRANDE - WOOF - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0765CVE',
				Descripcion: 'BASE MOISES GRANDE - WOOF - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0766DFU',
				Descripcion: 'BASE MOISES MEDIANO - PERROS BEIGE - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0767DNE',
				Descripcion: 'BASE MOISES MEDIANO - PERROS BEIGE - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0768DVE',
				Descripcion: 'BASE MOISES MEDIANO - PERROS BEIGE - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0769DFU',
				Descripcion:
					'BASE MOISES MEDIANO - PERROS NEGROS - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0770DNE',
				Descripcion: 'BASE MOISES MEDIANO - PERROS NEGROS - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0771DVE',
				Descripcion: 'BASE MOISES MEDIANO - PERROS NEGROS - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0772DCE',
				Descripcion:
					'BASE MOISES MEDIANO - PERROS SUPER - CELESTE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0773DFU',
				Descripcion: 'BASE MOISES MEDIANO - WOOF - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0774DNE',
				Descripcion: 'BASE MOISES MEDIANO - WOOF - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0775DVE',
				Descripcion: 'BASE MOISES MEDIANO - WOOF - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0776EFU',
				Descripcion: 'BASE MOISES CHICO - PERROS BEIGE - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0777ENE',
				Descripcion: 'BASE MOISES CHICO - PERROS BEIGE - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0778EVE',
				Descripcion: 'BASE MOISES CHICO - PERROS BEIGE - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0779EFU',
				Descripcion: 'BASE MOISES CHICO - PERROS NEGROS - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0780ENE',
				Descripcion: 'BASE MOISES CHICO - PERROS NEGROS - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0781EVE',
				Descripcion: 'BASE MOISES CHICO - PERROS NEGROS - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0782ECE',
				Descripcion: 'BASE MOISES CHICO - PERROS SUPER - CELESTE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0783EFU',
				Descripcion: 'BASE MOISES CHICO - WOOF - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0784ENE',
				Descripcion: 'BASE MOISES CHICO - WOOF - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BM6V0785EVE',
				Descripcion: 'BASE MOISES CHICO - WOOF - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BO6N1070UFU',
				Descripcion: 'BOLSA - PATITAS MARRONES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BO6N1071UTU',
				Descripcion:
					'BOLSA - PATITAS MARRONES - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BO6N1072UFU',
				Descripcion: 'BOLSA - PATITAS NEGRAS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'BO6N1073UTU',
				Descripcion: 'BOLSA - PATITAS NEGRAS - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1172UNN',
				Descripcion:
					'CINTURON PARA AUTO - MAR DEL PLATA - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1173UNN',
				Descripcion:
					'CINTURON PARA AUTO - BANANAS - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1174UNN',
				Descripcion:
					'CINTURON PARA AUTO - ROSWELL - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1283NN',
				Descripcion:
					'CINTURON PARA AUTO - SIN TRAICION - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1284NN',
				Descripcion:
					'CINTURON PARA AUTO - PERRIS - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1354NN',
				Descripcion:
					'CINTURON PARA AUTO - LANIN - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1355NN',
				Descripcion:
					'CINTURON PARA AUTO - ZONDA - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1356NN',
				Descripcion:
					'CINTURON PARA AUTO - LIMAY - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1357NN',
				Descripcion:
					'CINTURON PARA AUTO - FONCK - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1358NN',
				Descripcion:
					'CINTURON PARA AUTO - HUA HUM - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1359GR',
				Descripcion: 'COMEDERO TELA - GRIS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1360NE',
				Descripcion: 'COMEDERO TELA - NEGRO - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CA6N1361VE',
				Descripcion: 'COMEDERO TELA - CAMUFLADO - VERDE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CD6N1192UCE',
				Descripcion:
					'COMEDERO DOBLE PLASTICO Y ACERO - LISO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CD6N1193URS',
				Descripcion:
					'COMEDERO DOBLE PLASTICO Y ACERO - LISO - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CD6N1194UVE',
				Descripcion:
					'COMEDERO DOBLE PLASTICO Y ACERO - LISO - VERDE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CI6N1186UNN',
				Descripcion:
					'COMEDERO ACERO INOXIDABLE - LISO 1 - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CI6N1187UNN',
				Descripcion:
					'COMEDERO ACERO INOXIDABLE - LISO 2 - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CI6N1188UNN',
				Descripcion:
					'COMEDERO ACERO INOXIDABLE - LISO 3 - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CI6N1189UNN',
				Descripcion:
					'COMEDERO ACERO INOXIDABLE - LISO 4 - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CI6N1190UNN',
				Descripcion:
					'COMEDERO ACERO INOXIDABLE - LISO 5 - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CI6N1191UNN',
				Descripcion:
					'COMEDERO ACERO INOXIDABLE - LISO 6 - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1224EAM',
				Descripcion:
					'COLLAR IDENTIFICADOR CHICO - LISO - AMARILLO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1225ECE',
				Descripcion:
					'COLLAR IDENTIFICADOR CHICO - LISO - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1226ENA',
				Descripcion:
					'COLLAR IDENTIFICADOR CHICO - LISO - NARANJA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1227ERJ',
				Descripcion:
					'COLLAR IDENTIFICADOR CHICO - LISO - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1228ERS',
				Descripcion:
					'COLLAR IDENTIFICADOR CHICO - LISO - ROSA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1229EVE',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - VERDE CLARO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1230EVI',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - VIOLETA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1231DAM',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - AMARILLO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1232DCE',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1233DNA',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - NARANJA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1234DRJ',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1235DRS',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1236DVE',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - VERDE CLARO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1237DVI',
				Descripcion:
					'COLLAR IDENTIFICADOR MEDIANO - LISO - VIOLETA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1238CAM',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - AMARILLO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1239CCE',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - CELESTE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1240CNA',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - NARANJA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1241CRJ',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - ROJO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1242CRS',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - ROSA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1243CVE',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - VERDE CLARO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1244CVI',
				Descripcion:
					'COLLAR IDENTIFICADOR GRANDE - LISO - VIOLETA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1245BAM',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - AMARILLO - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1246BCE',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - CELESTE - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1247BNA',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - NARANJA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1248BRJ',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - ROJO - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1249BRS',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - ROSA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1250BVE',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - VERDE CLARO - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1251BVI',
				Descripcion:
					'COLLAR IDENTIFICADOR EXTRA GRANDE - LISO - VIOLETA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1252AAM',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - AMARILLO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1253ACE',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - CELESTE - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1254ANA',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - NARANJA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1255ARJ',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - ROJO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1256ARS',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - ROSA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1257AVE',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - VERDE CLARO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1258AVI',
				Descripcion:
					'COLLAR IDENTIFICADOR GIGANTE - LISO - VIOLETA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1309NN',
				Descripcion: 'COLLAR - LANIN - SIN COLOR - XS - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1310NN',
				Descripcion: 'COLLAR - ZONDA - SIN COLOR - XS - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1311NN',
				Descripcion: 'COLLAR - LIMAY - SIN COLOR - XS - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1312NN',
				Descripcion: 'COLLAR - FONCK - SIN COLOR - XS - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1313NN',
				Descripcion: 'COLLAR - HUA HUM - SIN COLOR - XS - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1314NN',
				Descripcion: 'COLLAR - LANIN - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1315NN',
				Descripcion: 'COLLAR - ZONDA - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1316NN',
				Descripcion: 'COLLAR - LIMAY - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1317NN',
				Descripcion: 'COLLAR - FONCK - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1318NN',
				Descripcion: 'COLLAR - HUA HUM - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1319NN',
				Descripcion: 'COLLAR - LANIN - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1320NN',
				Descripcion: 'COLLAR - ZONDA - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1321NN',
				Descripcion: 'COLLAR - LIMAY - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1322NN',
				Descripcion: 'COLLAR - FONCK - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1323NN',
				Descripcion: 'COLLAR - HUA HUM - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1324NN',
				Descripcion: 'COLLAR - LANIN - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1325NN',
				Descripcion: 'COLLAR - ZONDA - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1326NN',
				Descripcion: 'COLLAR - LIMAY - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1327NN',
				Descripcion: 'COLLAR - FONCK - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CL6N1328NN',
				Descripcion: 'COLLAR - HUA HUM - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0102AFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - FUCSIA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0103ANE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - NEGRO - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0104ARJ',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - ROJO - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0105ATU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - TURQUESA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0106AFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERSONALIZADO - FUCSIA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0107AGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERSONALIZADO - GRIS - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0108ATU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERSONALIZADO - TURQUESA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0109BFU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0110BGR',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - GRIS - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0111BMA',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - MARRON CLARO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0112BTU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - TURQUESA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0113BFU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0114BGR',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - GRIS - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0115BTU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - TURQUESA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0116CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0117CGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - GRIS - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0118CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0119CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0120CGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - GRIS - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0121CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0122CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0123CGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - GRIS - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0124CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0125CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA SALCHICHA - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0126CGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA SALCHICHA - GRIS - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0127CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA SALCHICHA - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0128CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0129CGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - GRIS - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0130CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0131CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERSONALIZADO - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0132CGR',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERSONALIZADO - GRIS - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0133CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERSONALIZADO - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0134DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0135DGR',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - GRIS - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0136DTU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0137DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0138DGR',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - GRIS - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0139DTU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0140DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA MIX PERRITOS - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0141DGR',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA MIX PERRITOS - GRIS - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0142DTU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA MIX PERRITOS - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0143DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0144DGR',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - GRIS - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0145DTU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0146DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA SCHNAUZER - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0147DGR',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA SCHNAUZER - GRIS - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0148DTU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - FRANJA SCHNAUZER - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0149DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERSONALIZADO - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0150DGR',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERSONALIZADO - GRIS - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0151DTU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERSONALIZADO - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0152UFU',
				Descripcion:
					'COLCHON LAVABLE GATO - GATITOS MIX - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0153UTU',
				Descripcion:
					'COLCHON LAVABLE GATO - GATITOS MIX - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0154UNE',
				Descripcion:
					'COLCHON LAVABLE GATO - MIAU LUNARES - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0155UNE',
				Descripcion:
					'COLCHON LAVABLE GATO - GATO GRIS - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0666BFU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS BEIGE - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0667BNE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS BEIGE - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0668BVE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS BEIGE - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0669BFU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS NEGROS - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0670BNE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS NEGROS - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0671BVE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS NEGROS - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0672BCE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - PERROS SUPER - CELESTE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0673BFU',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - WOOF - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0674BNE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - WOOF - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0675BVE',
				Descripcion:
					'COLCHON LAVABLE PERRO EXTRA GRANDE - WOOF - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0676CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS BEIGE - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0677CNE',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS BEIGE - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0678CVE',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS BEIGE - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0679CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS NEGROS - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0680CNE',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS NEGROS - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0681CVE',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS NEGROS - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0682CCE',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERROS SUPER - CELESTE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0683CFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - WOOF - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0684CNE',
				Descripcion: 'COLCHON LAVABLE PERRO GRANDE - WOOF - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0685CVE',
				Descripcion: 'COLCHON LAVABLE PERRO GRANDE - WOOF - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0686DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS BEIGE - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0687DNE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS BEIGE - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0688DVE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS BEIGE - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0689DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS NEGROS - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0690DNE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS NEGROS - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0691DVE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS NEGROS - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0692DCE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - PERROS SUPER - CELESTE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0693DFU',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - WOOF - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0694DNE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - WOOF - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0695DVE',
				Descripcion:
					'COLCHON LAVABLE PERRO MEDIANO - WOOF - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0696EFU',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS BEIGE - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0697ENE',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS BEIGE - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0698EVE',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS BEIGE - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0699EFU',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS NEGROS - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0700ENE',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS NEGROS - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0701EVE',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS NEGROS - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0702ECE',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - PERROS SUPER - CELESTE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0703EFU',
				Descripcion: 'COLCHON LAVABLE PERRO CHICO - WOOF - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0704ENE',
				Descripcion: 'COLCHON LAVABLE PERRO CHICO - WOOF - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0705EVE',
				Descripcion: 'COLCHON LAVABLE PERRO CHICO - WOOF - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0796CTU',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0797CNE',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0821AFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - WOOF - FUCSIA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0822ANE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - WOOF - NEGRO - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0823AVE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - WOOF - VERDE - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0824AFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERROS BEIGE - FUCSIA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0825ANE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERROS BEIGE - NEGRO - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0826AVE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERROS BEIGE - VERDE - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0827AFU',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERROS NEGROS - FUCSIA - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0828ANE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERROS NEGROS - NEGRO - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN2V0829AVE',
				Descripcion:
					'COLCHON LAVABLE PERRO GIGANTE - PERROS NEGROS - VERDE - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1259ENE',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1260EFU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1261ETU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - TURQUESA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1262DNE',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1263DFU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1264DTU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - TURQUESA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1265CNE',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1266CFU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1267CTU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - TURQUESA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1268BNE',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1269BFU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CN4V1270BTU',
				Descripcion:
					'COLCHON REDONDO LAVABLE - PERRITOS DURMIENDO - TURQUESA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0001CFU',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS MIX - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0002CTU',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS MIX - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0003DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA BULLDOG FRANCES - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0004DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA BULLDOG FRANCES - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0005DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA CANICHE - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0006DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA CANICHE - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0007DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - PERRITOS MIX - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0008DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - PERRITOS MIX - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0009DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SALCHICHA - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0010DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SALCHICHA - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0011DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SCHNAUZER - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0012DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SCHNAUZER - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0013DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SHIH TZU - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0014DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SHIH TZU - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0015UFU',
				Descripcion: 'COLCHONETA GATO - GATITOS MIX - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0016UTU',
				Descripcion: 'COLCHONETA GATO - GATITOS MIX - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0076UFU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - BULLDOG FRANCES - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0077UGR',
				Descripcion:
					'COLCHONETA AUTO / PASEO - BULLDOG FRANCES - GRIS - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0078UTU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - BULLDOG FRANCES - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0079UFU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - PERRITOS MIX - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0080UGR',
				Descripcion:
					'COLCHONETA AUTO / PASEO - PERRITOS MIX - GRIS - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0081UTU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - PERRITOS MIX - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0082UFU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - SALCHICHA - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0083UGR',
				Descripcion:
					'COLCHONETA AUTO / PASEO - SALCHICHA - GRIS - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0084UTU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - SALCHICHA - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0085UFU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - PERSONALIZADO - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0086UGR',
				Descripcion:
					'COLCHONETA AUTO / PASEO - PERSONALIZADO - GRIS - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0087UTU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - PERSONALIZADO - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0088CRJ',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPA - ROJO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0089CMA',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPA - MARRON CLARO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0090CTU',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPA - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0091CRJ',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPE - ROJO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0092CMA',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPE - MARRON CLARO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0093CTU',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPE - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0094CFU',
				Descripcion: 'COLCHONETA SOLIDARIA - LABRADOR - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0095CFU',
				Descripcion: 'COLCHONETA SOLIDARIA - OVEJERO - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0096CTU',
				Descripcion: 'COLCHONETA SOLIDARIA - OVEJERO - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0097DFU',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPA - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0098DRJ',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPA - ROJO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0099DMA',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPA - MARRON CLARO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0100DRJ',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPE - ROJO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0101DMA',
				Descripcion: 'COLCHONETA SOLIDARIA - PEPE - MARRON CLARO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0435CNE',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS Y HUESITOS - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0436CTU',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS Y HUESITOS - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0437CFU',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS MIX CUADRADOS - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0438DFU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA SHARPEI NEGRO - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0439DTU',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - CARITA PUG - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0462UGR',
				Descripcion:
					'COLCHONETA AUTO / PASEO - SALCHICHA NEGRO - GRIS - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0463UTU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - YORKI NENA Y NENE - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0464UMA',
				Descripcion:
					'COLCHONETA AUTO / PASEO - YORKI - MARRON CLARO - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0465UMA',
				Descripcion:
					'COLCHONETA AUTO / PASEO - WESTY - MARRON CLARO - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0802CRJ',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS MIX - ROJO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0803CNE',
				Descripcion:
					'COLCHONETA PERRO GRANDE - PERRITOS MIX - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0804DRJ',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - PERRITOS MIX - ROJO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G0805DNE',
				Descripcion:
					'COLCHONETA PERRO MEDIANO - PERRITOS MIX - NEGRO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G1175UFU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - CANICHE - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G1176UGR',
				Descripcion: 'COLCHONETA AUTO / PASEO - CANICHE - GRIS - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO1G1177UTU',
				Descripcion:
					'COLCHONETA AUTO / PASEO - CANICHE - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0017AFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - FUCSIA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0018ANE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - NEGRO - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0019ARJ',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - ROJO - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0020ATU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERRITOS Y HUESITOS - TURQUESA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0021AFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERSONALIZADO - FUCSIA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0022AGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERSONALIZADO - GRIS - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0023ATU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERSONALIZADO - TURQUESA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0024BFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - FUCSIA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0025BGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - GRIS - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0026BMA',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - MARRON CLARO - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0027BTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - TURQUESA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0028BFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - FUCSIA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0029BGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - GRIS - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0030BTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERSONALIZADO - TURQUESA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0031CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0032CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0033CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0034CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0035CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0036CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0037CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0038CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0039CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0040CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0041CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0042CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0043CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0044CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0045CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0046CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERSONALIZADO - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0047CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERSONALIZADO - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0048CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERSONALIZADO - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0049DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0050DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0051DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA BULLDOG FRANCES - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0052DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0053DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0054DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA CANICHE/BICHON - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0055DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA PERRITOS MIX - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0056DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA PERRITOS MIX - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0057DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA PERRITOS MIX - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0058DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0059DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0060DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SALCHICHA - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0061DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SCHNAUZER - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0062DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SCHNAUZER - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0063DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - FRANJA SCHNAUZER - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0064DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERSONALIZADO - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0065DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERSONALIZADO - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0066DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERSONALIZADO - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0706BFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS BEIGE - FUCSIA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0707BNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS BEIGE - NEGRO - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0708BVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS BEIGE - VERDE - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0709BFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS NEGROS - FUCSIA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0710BNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS NEGROS - NEGRO - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0711BVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS NEGROS - VERDE - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0712BCE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - PERROS SUPER - CELESTE - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0713BFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - WOOF - FUCSIA - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0714BNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - WOOF - NEGRO - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0715BVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - WOOF - VERDE - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0716CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS BEIGE - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0717CNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS BEIGE - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0718CVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS BEIGE - VERDE - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0719CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS NEGROS - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0720CNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS NEGROS - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0721CVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS NEGROS - VERDE - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0722CCE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS SUPER - CELESTE - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0723CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - WOOF - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0724CNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - WOOF - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0725CVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - WOOF - VERDE - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0726DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS BEIGE - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0727DNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS BEIGE - NEGRO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0728DVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS BEIGE - VERDE - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0729DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS NEGROS - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0730DNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS NEGROS - NEGRO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0731DVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS NEGROS - VERDE - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0732DCE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS SUPER - CELESTE - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0733DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - WOOF - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0734DNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - WOOF - NEGRO - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0735DVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - WOOF - VERDE - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0736EFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS BEIGE - FUCSIA - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0737ENE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS BEIGE - NEGRO - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0738EVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS BEIGE - VERDE - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0739EFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS NEGROS - FUCSIA - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0740ENE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS NEGROS - NEGRO - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0741EVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS NEGROS - VERDE - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0742ECE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERROS SUPER - CELESTE - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0743EFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - WOOF - FUCSIA - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0744ENE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - WOOF - NEGRO - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0745EVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - WOOF - VERDE - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0800CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0800ETU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0801CNE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0801ENE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0807UFU',
				Descripcion:
					'COLCHONETA LAVABLE GATO - GATITOS MIX - FUCSIA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0808UTU',
				Descripcion:
					'COLCHONETA LAVABLE GATO - GATITOS MIX - TURQUESA - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0809UNE',
				Descripcion:
					'COLCHONETA LAVABLE GATO - MIAU LUNARES - NEGRO - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0810UNE',
				Descripcion:
					'COLCHONETA LAVABLE GATO - GATO GRIS - NEGRO - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0830AFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - WOOF - FUCSIA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0831ANE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - WOOF - NEGRO - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0832AVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - WOOF - VERDE - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0833AFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERROS BEIGE - FUCSIA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0834ANE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERROS BEIGE - NEGRO - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0835AVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERROS BEIGE - VERDE - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0836AFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERROS NEGROS - FUCSIA - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0837ANE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERROS NEGROS - NEGRO - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G0838AVE',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GIGANTE - PERROS NEGROS - VERDE - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G1063CGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS CHICOS Y MEDIANOS - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G1064CFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS CHICOS Y MEDIANOS - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G1065CTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERROS CHICOS Y MEDIANOS - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G1066DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS CHICOS Y MEDIANOS - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G1067DFU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS CHICOS Y MEDIANOS - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO2G1068DTU',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - PERROS CHICOS Y MEDIANOS - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G0067CFU',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO GRANDE - PATCHWORK - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G0068CGR',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO GRANDE - PATCHWORK - GRIS - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G0069CTU',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO GRANDE - PATCHWORK - TURQUESA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G0070DFU',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO MEDIANO - PATCHWORK - FUCSIA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G0071DGR',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO MEDIANO - PATCHWORK - GRIS - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G0072DTU',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO MEDIANO - PATCHWORK - TURQUESA - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G1167EFU',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO CHICO - PATCHWORK - FUCSIA - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G1168EGR',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO CHICO - PATCHWORK - GRIS - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO3G1169ETU',
				Descripcion:
					'COLCHONETA ECONOMICA PERRO CHICO - PATCHWORK - TURQUESA - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO4G0073CNN',
				Descripcion:
					'COLCHONETA REDONDO LAVABLE GRANDE - DONA - SIN COLOR - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO4G0074DNN',
				Descripcion:
					'COLCHONETA REDONDO LAVABLE MEDIANO - DONA - SIN COLOR - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO4G0075ENN',
				Descripcion:
					'COLCHONETA REDONDO LAVABLE CHICO - DONA - SIN COLOR - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO4G0596NN',
				Descripcion:
					'COLCHONETA REDONDO LAVABLE EXTRA GRANDE - DONA - SIN COLOR - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO6N1123DGR',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - WOOF BEBE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CO6N1124DRS',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - WOOF BEBE - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1344NN',
				Descripcion: 'CORREA - LANIN - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1345NN',
				Descripcion: 'CORREA - ZONDA - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1346NN',
				Descripcion: 'CORREA - LIMAY - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1347NN',
				Descripcion: 'CORREA - FONCK - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1348NN',
				Descripcion: 'CORREA - HUA HUM - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1349NN',
				Descripcion: 'CORREA - LANIN - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1350NN',
				Descripcion: 'CORREA - ZONDA - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1351NN',
				Descripcion: 'CORREA - LIMAY - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1352NN',
				Descripcion: 'CORREA - FONCK - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'CR6N1353NN',
				Descripcion: 'CORREA - HUA HUM - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0266UAZ',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - BULLDOG FRANCES - AZUL - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0267UGR',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - BULLDOG FRANCES - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0268UFU',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - BULLDOG FRANCES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0269UCE',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERRITOS MIX - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0270UFU',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERRITOS MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0271UFU',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERRITOS Y GATITOS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0272UCE',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERRITOS Y GATITOS - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0273UFU',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERSONALIZADO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0274UGR',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERSONALIZADO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0275UCE',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERSONALIZADO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'DE6N0811GR',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - PERRITOS MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0276UFU',
				Descripcion:
					'FUNDA PARA AUTO - BULLDOG FRANCES MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0277UGR',
				Descripcion:
					'FUNDA PARA AUTO - BULLDOG FRANCES MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0278UTU',
				Descripcion:
					'FUNDA PARA AUTO - BULLDOG FRANCES MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0279UFU',
				Descripcion:
					'FUNDA PARA AUTO - CANICHE/BICHON MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0280UGR',
				Descripcion:
					'FUNDA PARA AUTO - CANICHE/BICHON MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0281UTU',
				Descripcion:
					'FUNDA PARA AUTO - CANICHE/BICHON MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0282UFU',
				Descripcion:
					'FUNDA PARA AUTO - PERRITOS MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0283UGR',
				Descripcion:
					'FUNDA PARA AUTO - PERRITOS MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0284UTU',
				Descripcion:
					'FUNDA PARA AUTO - PERRITOS MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0285UFU',
				Descripcion:
					'FUNDA PARA AUTO - SALCHICHA MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0286UGR',
				Descripcion:
					'FUNDA PARA AUTO - SALCHICHA MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0287UTU',
				Descripcion:
					'FUNDA PARA AUTO - SALCHICHA MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0288UFU',
				Descripcion:
					'FUNDA PARA AUTO - SCHNAUZER MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0289UGR',
				Descripcion:
					'FUNDA PARA AUTO - SCHNAUZER MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FA6N0290UTU',
				Descripcion:
					'FUNDA PARA AUTO - SCHNAUZER MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1004BNE',
				Descripcion: 'FUNDA PARA SILLON - LISO - NEGRO - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1005BVE',
				Descripcion: 'FUNDA PARA SILLON - LISO - VERDE - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1006BBE',
				Descripcion: 'FUNDA PARA SILLON - LISO - BEIGE - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1007BGR',
				Descripcion: 'FUNDA PARA SILLON - LISO - GRIS - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1008CNE',
				Descripcion: 'FUNDA PARA SILLON - LISO - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1009CVE',
				Descripcion: 'FUNDA PARA SILLON - LISO - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1010CBE',
				Descripcion: 'FUNDA PARA SILLON - LISO - BEIGE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1011CGR',
				Descripcion: 'FUNDA PARA SILLON - LISO - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1012DNE',
				Descripcion: 'FUNDA PARA SILLON - LISO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1013DVE',
				Descripcion: 'FUNDA PARA SILLON - LISO - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1014DBE',
				Descripcion: 'FUNDA PARA SILLON - LISO - BEIGE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1015DGR',
				Descripcion: 'FUNDA PARA SILLON - LISO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1016ENE',
				Descripcion: 'FUNDA PARA SILLON - LISO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1017EVE',
				Descripcion: 'FUNDA PARA SILLON - LISO - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1018EBE',
				Descripcion: 'FUNDA PARA SILLON - LISO - BEIGE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FS6N1019EGR',
				Descripcion: 'FUNDA PARA SILLON - LISO - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU4N1197CNN',
				Descripcion:
					'FUNDA ANTIDESGARRO REDONDO GRANDE - DONA - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU4N1198DNN',
				Descripcion:
					'FUNDA ANTIDESGARRO REDONDO MEDIANO - DONA - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU4N1199ENN',
				Descripcion:
					'FUNDA ANTIDESGARRO REDONDO CHICO - DONA - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU4N1200BNN',
				Descripcion:
					'FUNDA ANTIDESGARRO REDONDO EXTRA GRANDE - DONA - SIN COLOR - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0156AFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERRITOS Y HUESITOS - FUCSIA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0157ANE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERRITOS Y HUESITOS - NEGRO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0158ARJ',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERRITOS Y HUESITOS - ROJO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0159ATU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERRITOS Y HUESITOS - TURQUESA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0160AFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERSONALIZADO - FUCSIA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0161AGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERSONALIZADO - GRIS - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0162ATU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERSONALIZADO - TURQUESA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0163BFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - FUCSIA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0164BGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - GRIS - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0165BMA',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - MARRON CLARO - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0166BTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS MIX CUADRADOS - TURQUESA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0167BFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERSONALIZADO - FUCSIA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0168BGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERSONALIZADO - GRIS - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0169BTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERSONALIZADO - TURQUESA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0170CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA BULLDOG FRANCES - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0171CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA BULLDOG FRANCES - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0172CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA BULLDOG FRANCES - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0173CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA CANICHE/BICHON - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0174CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA CANICHE/BICHON - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0175CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA CANICHE/BICHON - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0176CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA PERRITOS MIX - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0177CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA PERRITOS MIX - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0178CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA PERRITOS MIX - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0179CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SALCHICHA - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0180CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SALCHICHA - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0181CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SALCHICHA - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0182CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SCHNAUZER - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0183CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SCHNAUZER - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0184CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SCHNAUZER - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0185CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERSONALIZADO - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0186CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERSONALIZADO - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0187CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERSONALIZADO - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0188DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA BULLDOG FRANCES - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0189DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA BULLDOG FRANCES - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0190DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA BULLDOG FRANCES - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0191DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA CANICHE/BICHON - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0192DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA CANICHE/BICHON - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0193DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA CANICHE/BICHON - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0194DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA PERRITOS MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0195DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA PERRITOS MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0196DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA PERRITOS MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0197DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SALCHICHA - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0198DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SALCHICHA - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0199DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SALCHICHA - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0200DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SCHNAUZER - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0201DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SCHNAUZER - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0202DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SCHNAUZER - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0203DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERSONALIZADO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0204DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERSONALIZADO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0205DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERSONALIZADO - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0206UFU',
				Descripcion:
					'FUNDA ANTIDESGARRO GATO - GATITOS MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0207UTU',
				Descripcion:
					'FUNDA ANTIDESGARRO GATO - GATITOS MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0208UNE',
				Descripcion:
					'FUNDA ANTIDESGARRO GATO - MIAU LUNARES - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0209UNE',
				Descripcion:
					'FUNDA ANTIDESGARRO GATO - GATO GRIS - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0440DRN',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA CANICHE/BICHON - RYN - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0441DRN',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA PERRITOS MIX - RYN - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0442BRN',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - FRANJA PERRITOS MIX - RYN - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0443BTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - FRANJA PERRITOS MIX - TURQUESA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0444CRN',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - FRANJA SALCHICHA - RYN - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0445DRN',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - FRANJA SCHNAUZER - RYN - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0446CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - BULLDOG FRANCES MIX BEIGE - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0447ENE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - CARITA CHIHUAHUA NEGRO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0448DAZ',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - COCKER MIX NEGRO - AZUL - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0449DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA JACK RUSELL - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0450DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERRO BLANCO CON OREJAS MARRONES - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0451DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA PUG - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0452DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA SCHNAUZER - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0453DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA SALCHICHA - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0454DVI',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA SALCHICHA - VIOLETA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0455DVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - SALCHICHA MIX NEGRO - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0456DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA SHIH TZU - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0457DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA SHIH TZU - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0458DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - SHIH TZU MIX BLANCO - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0459CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - SHARPEI NEGRO - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0460DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - CARITA YORKI - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0461DNA',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - WESTY MIX BLANCO - NARANJA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0786EFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS BEIGE - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0787EFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS NEGROS - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0788EFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - WOOF - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0789ENE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS BEIGE - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0790ENE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS NEGROS - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0791ENE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - WOOF - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0792EVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS BEIGE - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0793EVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS NEGROS - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0794EVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - WOOF - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0795ECE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERROS SUPER - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0798CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERRITOS Y HUESITOS - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N0799CNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERRITOS Y HUESITOS - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1103CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - WOOF - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1104CNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - WOOF - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1105CVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - WOOF - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1106CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS BEIGE - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1107CNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS BEIGE - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1108CVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS BEIGE - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1109CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS NEGROS - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1110CNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS NEGROS - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1111CVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS NEGROS - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1112AFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - WOOF - FUCSIA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1113ANE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - WOOF - NEGRO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1114AVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - WOOF - VERDE - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1115AFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERROS BEIGE - FUCSIA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1116ANE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERROS BEIGE - NEGRO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1117AVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERROS BEIGE - VERDE - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1118AFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERROS NEGROS - FUCSIA - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1119ANE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERROS NEGROS - NEGRO - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1120AVE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GIGANTE - PERROS NEGROS - VERDE - XXL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1121DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - WOOF BEBE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1122DRS',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - WOOF BEBE - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1157DGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERROS CHICOS Y MEDIANOS - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1158DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERROS CHICOS Y MEDIANOS - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1159DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERROS CHICOS Y MEDIANOS - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1160CGR',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS CHICOS Y MEDIANOS - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1161CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS CHICOS Y MEDIANOS - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1162CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERROS CHICOS Y MEDIANOS - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1271ENE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERRITOS DURMIENDO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1272EFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERRITOS DURMIENDO - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1273ETU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO CHICO - PERRITOS DURMIENDO - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1274DNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERRITOS DURMIENDO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1275DFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERRITOS DURMIENDO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1276DTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO MEDIANO - PERRITOS DURMIENDO - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1277CNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERRITOS DURMIENDO - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1278CFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERRITOS DURMIENDO - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1279CTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO GRANDE - PERRITOS DURMIENDO - TURQUESA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1280BNE',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS DURMIENDO - NEGRO - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1281BFU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS DURMIENDO - FUCSIA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'FU6N1282BTU',
				Descripcion:
					'FUNDA ANTIDESGARRO PERRO EXTRA GRANDE - PERRITOS DURMIENDO - TURQUESA - XL - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1289AM',
				Descripcion: 'HUESO FLEX GRANDE - LISO - AMARILLO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1290AZ',
				Descripcion: 'HUESO FLEX GRANDE - LISO - AZUL - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1291RJ',
				Descripcion: 'HUESO FLEX GRANDE - LISO - ROJO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1292AM',
				Descripcion: 'HUESO FLEX GRANDE - LISO - AMARILLO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1293AZ',
				Descripcion: 'HUESO FLEX GRANDE - LISO - AZUL - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1294RJ',
				Descripcion: 'HUESO FLEX GRANDE - LISO - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1295AM',
				Descripcion: 'HUESO FLEX GRANDE - LISO - AMARILLO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1296AZ',
				Descripcion: 'HUESO FLEX GRANDE - LISO - AZUL - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'HF6N1297RJ',
				Descripcion: 'HUESO FLEX GRANDE - LISO - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ID6N0432UNN',
				Descripcion:
					'TAGGY 1 COLOR - PERSONALIZADO - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ID6N0433UNN',
				Descripcion:
					'TAGGY 2 COLORES - PERSONALIZADO - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0291EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES MIX - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0292EGR',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES MIX - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0293ETU',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES MIX - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0294EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0295EGR',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0296ETU',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0297EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATITO MIX - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0298EGR',
				Descripcion: 'INDIVIDUAL CUERINA - GATITO MIX - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0299ETU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATITO MIX - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0300ENE',
				Descripcion: 'INDIVIDUAL CUERINA - GUAU - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0301ENE',
				Descripcion: 'INDIVIDUAL CUERINA - MIAU - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0302EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITO MIX - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0303EGR',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITO MIX - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0304ETU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITOS MIX - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0305EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0306EGR',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0307ETU',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0308EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - SCHNAUZER MIX - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0309EGR',
				Descripcion:
					'INDIVIDUAL CUERINA - SCHNAUZER MIX - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0310ETU',
				Descripcion:
					'INDIVIDUAL CUERINA - SCHNAUZER MIX - TURQUESA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0311EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERSONALIZADO - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0312EGR',
				Descripcion:
					'INDIVIDUAL CUERINA - PERSONALIZADO - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0313ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - PERSONALIZADO - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0314DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERSONALIZADO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0315DGR',
				Descripcion:
					'INDIVIDUAL CUERINA - PERSONALIZADO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0316DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - PERSONALIZADO - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0317DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0318DGR',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0319DTU',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0320DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0321DGR',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0322DTU',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0323DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATITO MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0324DGR',
				Descripcion: 'INDIVIDUAL CUERINA - GATITO MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0325DTU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATITO MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0326DNE',
				Descripcion: 'INDIVIDUAL CUERINA - GUAU - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0327DNE',
				Descripcion: 'INDIVIDUAL CUERINA - MIAU - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0328DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITO MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0329DGR',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITO MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0330DTU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITOS MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0331DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0332DGR',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0333DTU',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0334DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - SCHNAUZER MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0335DGR',
				Descripcion:
					'INDIVIDUAL CUERINA - SCHNAUZER MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0336DTU',
				Descripcion:
					'INDIVIDUAL CUERINA - SCHNAUZER MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0505EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA BULLDOG FRANCES - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0506ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA BULLDOG FRANCES - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0507EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA BOXER - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0508ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA BOXER - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0509EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA CANICHE - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0510ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA CANICHE - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0511ERN',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE/BICHON MIX - RYN - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0512ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA BLANCO - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0513EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA GRIS - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0514ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA GRIS - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0515EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SALCHICHA - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0516ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SALCHICHA - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0517ERN',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA MIX - RYN - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0518EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SCHNAUZER - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0519EFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SHIT TZU - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0520ECE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SHIT TZU - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0521DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES CARITA - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0522DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES CARITA - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0523DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA BOXER - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0524DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA BOXER - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0525DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CANICHE CARITA - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0526DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA BLANCO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0527DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA GRIS - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0528DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA PEPE - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0529DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - PERRITOS Y GATITOS - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0530DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA PUG - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0531DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA PUG - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0532DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SALCHICHA - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0533DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SALCHICHA - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0534DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SCHNAUZER - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0535DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SCHNAUZER - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0536DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SHIT TZU - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0537DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA SHIT TZU - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0538DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - BULLDOG FRANCES CARITA MARRON - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0539DRS',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA BLANCO - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0540DVE',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA GRIS - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0541DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - GATO CARITA NEGRO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0542DMA',
				Descripcion:
					'INDIVIDUAL CUERINA - MIAU - MARRON CLARO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0543DVE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA PINSCHER - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0544DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - CARITA PINSCHER - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0545DMA',
				Descripcion:
					'INDIVIDUAL CUERINA - ANIMAL PRINT - MARRON CLARO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0546DRS',
				Descripcion: 'INDIVIDUAL CUERINA - CARITA PUG - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0547DFU',
				Descripcion:
					'INDIVIDUAL CUERINA - SALCHICHA CARITA MARRON - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0548DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - LABRADOR BEIGE /SCHNAUZER GRIS - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N0549DCE',
				Descripcion:
					'INDIVIDUAL CUERINA - YORKI NENA Y NENE - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N1020ENE',
				Descripcion:
					'INDIVIDUAL - TENGO HIJOS DE 4 PATAS - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N1021EGR',
				Descripcion: 'INDIVIDUAL - WOOF - GRIS - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'IN6N1022ERS',
				Descripcion: 'INDIVIDUAL - WOOF - ROSA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0337UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - CHANCHO - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0338UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - CONEJO - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0339UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - CUPCAKE - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0340UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - DONA - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0341UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HAMBURGUESA - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0342UNA',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO - NARANJA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0343UVE',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO - VERDE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0344UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - OVEJA - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0345UMA',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - OVEJA - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0346UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - PEPE NORTE - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0347URJ',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - PEPE NORTE - ROJO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0348UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - PERRO ANTEOJOS - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0349UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - PERRO ROCKERO - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0350UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - PERRO SUPER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V0351UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - UNICORNIO - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1062UNN',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - PERRO NEGRO - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1093UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO BEBE - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1094UTU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO BEBE - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1095UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO BOMBON - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1096UTU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO BOMBON - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1097UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO BORN IN CUARENTENA - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1098UTU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO BORN IN CUARENTENA - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1099UTU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO EL JEFE - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1100UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO LA JEFA - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1101UTU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO EL REY - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1102UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - HUESO PRINCESA - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1125UFU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - CONEJO - FUCSIA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1126UTU',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - CONEJO - TURQUESA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1170UNE',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - BULLDOG FRANCES - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'JB6V1171UMA',
				Descripcion:
					'JUGUETE BLANDO C/CASCABEL - BULLDOG FRANCES - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1127DNN',
				Descripcion:
					'KIT JUEGO - UNICORNIO PELOTA - JB6V0351UNN - PE6N0949DFU - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1128DFU',
				Descripcion:
					'KIT JUEGO - OVEJA SOGA TRENZADA CON TIRADOR Y PELOTA - JB6V0344UFU - ST6N1082URS - PE6N0949DFU - FUCSIA - M - SIN RELLEN',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1129DMA',
				Descripcion:
					'KIT JUEGO - OVEJA SOGA TRENZADA CON TIRADOR Y PELOTA - JB6V0345UMA - ST6N1084UMU - PE6N0945DNA - MARRON - M - SIN RELLEN',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1130DNN',
				Descripcion:
					'KIT JUEGO - PERRO SUPER CON PELOTA - JB6V0350UNN - PE6N0942DAZ - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1131DNN',
				Descripcion:
					'KIT JUEGO - PERRO ROCKERO SOGA CUATRO NUDOS Y PELOTA - JB6V0349UNN - PE6N0942DAZ - SN6N1079UMU - SIN COLOR - M - SIN REL',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1132DNN',
				Descripcion:
					'KIT JUEGO - DONA SOGA TRENZADA CON TIRADOR Y PELOTA - JB6V0340UNN - ST6N1082URS - PE6N0949DFU - SIN COLOR - M - SIN RELL',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1133DFU',
				Descripcion:
					'KIT JUEGO - CONEJO SOGA CUATRO NUDOS Y PELOTA - JB6V1125UFU - SN6N1078UFU - PE6N0949DFU - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1134DTU',
				Descripcion:
					'KIT JUEGO - CONEJO SOGA CUATRO NUDOS Y PELOTA - JB6V1126UTU - SN6N1079UMU - PE6N0945DNA - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1371UFU',
				Descripcion:
					'KIT DOG MOM - KIT DOG MOM - TB6N0866UFU - TO6N1045UFU - LL6N1222UFU - IN6N1020ENE - TA6N1368UNN - FUCSIA - UNICO - SIN R',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1372UTU',
				Descripcion:
					'KIT DOG MOM - KIT DOG MOM - TB6N0664UNE - TO6N1046UTU - LL6N1223UNE - IN6N1020ENE - TA6N1368UNN - TURQUESA - UNICO - SIN',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1373UFU',
				Descripcion:
					'KIT CAT MOM - KIT CAT MOM - TB6N1147UFU - TO6N1037UFU - LL6N1366UFU - IN6N1020ENE - TA6N1368UNN - FUCSIA - UNICO - SIN R',
				ID_Empresa: '1',
			},
			{
				Codigo: 'KT6N1374UTU',
				Descripcion:
					'KIT CAT MOM - KIT CAT MOM - TB6N1148UGR - TO6N1038UTU - LL6N1367UNE - IN6N1020ENE - TA6N1368UNN - TURQUESA - UNICO - SIN',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N0897UAZ',
				Descripcion:
					'LLAVERO - TENGO HIJOS DE 4 PATAS - AZUL - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N0898UFU',
				Descripcion:
					'LLAVERO - TENGO HIJOS DE 4 PATAS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N0899UNE',
				Descripcion:
					'LLAVERO - TENGO HIJOS DE 4 PATAS - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N0900UVE',
				Descripcion:
					'LLAVERO - TENGO HIJOS DE 4 PATAS - VERDE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1201UFU',
				Descripcion:
					'LLAVERO - I LOVE BORDER COLLIE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1202UNE',
				Descripcion:
					'LLAVERO - I LOVE BORDER COLLIE - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1203UFU',
				Descripcion: 'LLAVERO - I LOVE CANICHE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1204UNE',
				Descripcion: 'LLAVERO - I LOVE CANICHE - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1205UFU',
				Descripcion: 'LLAVERO - I LOVE FRENCHIE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1206UNE',
				Descripcion: 'LLAVERO - I LOVE FRENCHIE - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1207UFU',
				Descripcion: 'LLAVERO - I LOVE CATS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1208UNE',
				Descripcion: 'LLAVERO - I LOVE CATS - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1209UFU',
				Descripcion: 'LLAVERO - I LOVE GOLDEN - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1210UNE',
				Descripcion: 'LLAVERO - I LOVE GOLDEN - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1211UFU',
				Descripcion:
					'LLAVERO - I LOVE SCHNAUZER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1212UNE',
				Descripcion: 'LLAVERO - I LOVE SCHNAUZER - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1213UFU',
				Descripcion:
					'LLAVERO - I LOVE SALCHICHA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1214UNE',
				Descripcion: 'LLAVERO - I LOVE SALCHICHA - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1215UCE',
				Descripcion: 'LLAVERO - AMO A MI PERRO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1216UFU',
				Descripcion: 'LLAVERO - AMO A MI PERRO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1217UNE',
				Descripcion: 'LLAVERO - AMO A MI PERRO - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1218UCE',
				Descripcion: 'LLAVERO - AMO A MI GATO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1219UFU',
				Descripcion: 'LLAVERO - AMO A MI GATO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1220UNE',
				Descripcion: 'LLAVERO - AMO A MI GATO - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1221UCE',
				Descripcion: 'LLAVERO - DOG MOM - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1222UFU',
				Descripcion: 'LLAVERO - DOG MOM - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1223UNE',
				Descripcion: 'LLAVERO - DOG MOM - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1366UFU',
				Descripcion: 'LLAVERO - CAT MOM - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'LL6N1367UNE',
				Descripcion: 'LLAVERO - CAT MOM - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0352UFU',
				Descripcion:
					'MANTAS MICROPOLAR - BULLDOG FRANCES MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0353UGR',
				Descripcion:
					'MANTAS MICROPOLAR - BULLDOG FRANCES MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0354UTU',
				Descripcion:
					'MANTAS MICROPOLAR - BULLDOG FRANCES MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0355UFU',
				Descripcion:
					'MANTAS MICROPOLAR - CANICHE/BICHON MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0356UGR',
				Descripcion:
					'MANTAS MICROPOLAR - CANICHE/BICHON MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0357UTU',
				Descripcion:
					'MANTAS MICROPOLAR - CANICHE/BICHON MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0358UFU',
				Descripcion:
					'MANTAS MICROPOLAR - GATITO MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0359UGR',
				Descripcion:
					'MANTAS MICROPOLAR - GATITO MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0360UTU',
				Descripcion:
					'MANTAS MICROPOLAR - GATITO MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0361UFU',
				Descripcion:
					'MANTAS MICROPOLAR - PERRITOS MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0362UGR',
				Descripcion:
					'MANTAS MICROPOLAR - PERRITOS MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0363UTU',
				Descripcion:
					'MANTAS MICROPOLAR - PERRITOS MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0364UGR',
				Descripcion:
					'MANTAS MICROPOLAR - PERRITOS Y GATITOS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0365UFU',
				Descripcion:
					'MANTAS MICROPOLAR - SALCHICHA MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0366UGR',
				Descripcion:
					'MANTAS MICROPOLAR - SALCHICHA MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0367UTU',
				Descripcion:
					'MANTAS MICROPOLAR - SALCHICHA MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0368UFU',
				Descripcion:
					'MANTAS MICROPOLAR - SCHNAUZER MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0369UGR',
				Descripcion:
					'MANTAS MICROPOLAR - SCHNAUZER MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0370UTU',
				Descripcion:
					'MANTAS MICROPOLAR - SCHNAUZER MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0371UFU',
				Descripcion:
					'MANTAS MICROPOLAR - PERSONALIZADO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0372UGR',
				Descripcion:
					'MANTAS MICROPOLAR - PERSONALIZADO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0373UTU',
				Descripcion:
					'MANTAS MICROPOLAR - PERSONALIZADO - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0466UMA',
				Descripcion:
					'MANTAS MICROPOLAR - WESTY - MARRON CLARO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0467UFU',
				Descripcion:
					'MANTAS MICROPOLAR - CONEJO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0468UFU',
				Descripcion:
					'MANTAS MICROPOLAR - BATATA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0469UTU',
				Descripcion:
					'MANTAS MICROPOLAR - GATO MIX BYN - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0470UTU',
				Descripcion:
					'MANTAS MICROPOLAR - BULLDOG INGLES - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0471UTU',
				Descripcion:
					'MANTAS MICROPOLAR - BOXER BLANCO - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0472UFU',
				Descripcion:
					'MANTAS MICROPOLAR - COCKER MARRON - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0473UNE',
				Descripcion:
					'MANTAS MICROPOLAR - SHARPEI NEGRO TIPO - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0474UFU',
				Descripcion:
					'MANTAS MICROPOLAR - NEGRO PELUDO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0475UTU',
				Descripcion:
					'MANTAS MICROPOLAR - PEPA - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0476UFU',
				Descripcion:
					'MANTAS MICROPOLAR - MALTES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0477UTU',
				Descripcion:
					'MANTAS MICROPOLAR - BULLDOG FRANCES - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0478URJ',
				Descripcion:
					'MANTAS MICROPOLAR - BULLDOG FRANCES - ROJO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0479URJ',
				Descripcion:
					'MANTAS MICROPOLAR - GATO GRIS - ROJO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0480UFU',
				Descripcion:
					'MANTAS MICROPOLAR - GATO GRIS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0481UVI',
				Descripcion:
					'MANTAS MICROPOLAR - PICHICHA MARRON - VIOLETA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0482UGR',
				Descripcion:
					'MANTAS MICROPOLAR - PICHICHO BYN - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0483UTU',
				Descripcion:
					'MANTAS MICROPOLAR - PICHICHO BYN - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0812DBL',
				Descripcion: 'MANTAS CORDERITO - LISA - BLANCO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0813DGR',
				Descripcion: 'MANTAS CORDERITO - LISA - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0814DNE',
				Descripcion: 'MANTAS CORDERITO - LISA - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0815CBL',
				Descripcion: 'MANTAS CORDERITO - LISA - BLANCO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0816CGR',
				Descripcion: 'MANTAS CORDERITO - LISA - GRIS - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0817CNE',
				Descripcion: 'MANTAS CORDERITO - LISA - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0818UFU',
				Descripcion:
					'MANTAS POLAR SOFT - PATITAS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0819UGR',
				Descripcion: 'MANTAS POLAR SOFT - PATITAS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N0820UTU',
				Descripcion:
					'MANTAS POLAR SOFT - PATITAS - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1090DNE',
				Descripcion:
					'MANTAS CORDERITO - PERRITOS DURMIENDO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1091DFU',
				Descripcion:
					'MANTAS CORDERITO - PERRITOS DURMIENDO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1092DTU',
				Descripcion:
					'MANTAS CORDERITO - PERRITOS DURMIENDO - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1135DFU',
				Descripcion:
					'MANTAS CORDERITO - BULLDOG FRANCES - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1136DGR',
				Descripcion:
					'MANTAS CORDERITO - BULLDOG FRANCES - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1137DTU',
				Descripcion:
					'MANTAS CORDERITO - BULLDOG FRANCES - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1138DFU',
				Descripcion:
					'MANTAS CORDERITO - PERRITOS MIX - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1139DGR',
				Descripcion: 'MANTAS CORDERITO - PERRITOS MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1140DTU',
				Descripcion:
					'MANTAS CORDERITO - PERRITOS MIX - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1141DFU',
				Descripcion: 'MANTAS CORDERITO - SALCHICHA - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MA6N1142DTU',
				Descripcion:
					'MANTAS CORDERITO - SALCHICHA - TURQUESA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0374UBE',
				Descripcion: 'MINI PETS - BULLDOG FRANCES - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0375UBN',
				Descripcion: 'MINI PETS - BULLDOG FRANCES NENA - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0376UBN',
				Descripcion: 'MINI PETS - BULLDOG FRANCES NENE - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0377UMA',
				Descripcion: 'MINI PETS - BULLDOG INGLES - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0378UMA',
				Descripcion: 'MINI PETS - BEAGLE - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0379UMA',
				Descripcion: 'MINI PETS - BOXER - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0380UBL',
				Descripcion: 'MINI PETS - BULLTERRIER - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0381UBL',
				Descripcion: 'MINI PETS - CANICHE NENA - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0382UBL',
				Descripcion: 'MINI PETS - CANICHE NENE - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0383UBE',
				Descripcion: 'MINI PETS - CHIHUAHUA - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0384UNE',
				Descripcion: 'MINI PETS - CHIHUAHUA - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0385UBN',
				Descripcion: 'MINI PETS - DALMATA - BYN - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0386UGR',
				Descripcion: 'MINI PETS - GATO - GRIS - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0387UNA',
				Descripcion: 'MINI PETS - GATO - NARANJA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0388UNE',
				Descripcion: 'MINI PETS - GATO - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0389UBE',
				Descripcion: 'MINI PETS - GOLDEN - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0390UBL',
				Descripcion: 'MINI PETS - JACK RUSELL - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0391UBE',
				Descripcion: 'MINI PETS - LABRADORA - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0392UBE',
				Descripcion: 'MINI PETS - LABRADOR - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0393UBE',
				Descripcion: 'MINI PETS - MESTIZO - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0394UNE',
				Descripcion: 'MINI PETS - NEGRA - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0395UNE',
				Descripcion: 'MINI PETS - NEGRO - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0396UBE',
				Descripcion: 'MINI PETS - OVEJERO - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0397UMA',
				Descripcion: 'MINI PETS - PEPA - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0398UMA',
				Descripcion: 'MINI PETS - PEPE - MARRON CLARO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0399UMA',
				Descripcion: 'MINI PETS - PICHICHO - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0400UMA',
				Descripcion: 'MINI PETS - PICHICHA - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0401UNE',
				Descripcion: 'MINI PETS - PINSCHER - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0402UMA',
				Descripcion: 'MINI PETS - PITBULL - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0403UBE',
				Descripcion: 'MINI PETS - PUG NENE - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0404UGR',
				Descripcion: 'MINI PETS - SALCHICHA ARLEQUIN - GRIS - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0405UMA',
				Descripcion: 'MINI PETS - SALCHICHA - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0406UNE',
				Descripcion: 'MINI PETS - SALCHICHA NENA - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0407UNE',
				Descripcion: 'MINI PETS - SALCHICHA NENE - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0408UGR',
				Descripcion: 'MINI PETS - SCHNAUZER - GRIS - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0409UBE',
				Descripcion: 'MINI PETS - SHARPEI - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0410UMA',
				Descripcion: 'MINI PETS - SHARPEI - MARRON - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0411UNE',
				Descripcion: 'MINI PETS - YORKI - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0573UBL',
				Descripcion: 'MINI PETS - SURTIDO - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V0594UBL',
				Descripcion: 'MINI PETS - GATO - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V1061UNE',
				Descripcion: 'MINI PETS - BULLDOG FRANCES - NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MC6V1069UBE',
				Descripcion: 'MINI PETS - PUG NENA - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0597BFU',
				Descripcion:
					'MOISES EXTRA GRANDE - PERROS BEIGE - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0598BNE',
				Descripcion: 'MOISES EXTRA GRANDE - PERROS BEIGE - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0599BVE',
				Descripcion: 'MOISES EXTRA GRANDE - PERROS BEIGE - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0600BFU',
				Descripcion:
					'MOISES EXTRA GRANDE - PERROS NEGROS - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0601BNE',
				Descripcion:
					'MOISES EXTRA GRANDE - PERROS NEGROS - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0602BVE',
				Descripcion:
					'MOISES EXTRA GRANDE - PERROS NEGROS - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0603BCE',
				Descripcion:
					'MOISES EXTRA GRANDE - PERROS SUPER - CELESTE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0604BFU',
				Descripcion: 'MOISES EXTRA GRANDE - WOOF - FUCSIA - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0605BNE',
				Descripcion: 'MOISES EXTRA GRANDE - WOOF - NEGRO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0606BVE',
				Descripcion: 'MOISES EXTRA GRANDE - WOOF - VERDE - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0607CFU',
				Descripcion: 'MOISES GRANDE - PERROS BEIGE - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0608CNE',
				Descripcion: 'MOISES GRANDE - PERROS BEIGE - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0609CVE',
				Descripcion: 'MOISES GRANDE - PERROS BEIGE - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0610CFU',
				Descripcion: 'MOISES GRANDE - PERROS NEGROS - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0611CNE',
				Descripcion: 'MOISES GRANDE - PERROS NEGROS - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0612CVE',
				Descripcion: 'MOISES GRANDE - PERROS NEGROS - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0613CCE',
				Descripcion: 'MOISES GRANDE - PERROS SUPER - CELESTE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0614CFU',
				Descripcion: 'MOISES GRANDE - WOOF - FUCSIA - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0615CNE',
				Descripcion: 'MOISES GRANDE - WOOF - NEGRO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0616CVE',
				Descripcion: 'MOISES GRANDE - WOOF - VERDE - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0617DFU',
				Descripcion: 'MOISES MEDIANO - PERROS BEIGE - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0618DNE',
				Descripcion: 'MOISES MEDIANO - PERROS BEIGE - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0619DVE',
				Descripcion: 'MOISES MEDIANO - PERROS BEIGE - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0620DFU',
				Descripcion: 'MOISES MEDIANO - PERROS NEGROS - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0621DNE',
				Descripcion: 'MOISES MEDIANO - PERROS NEGROS - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0622DVE',
				Descripcion: 'MOISES MEDIANO - PERROS NEGROS - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0623DCE',
				Descripcion: 'MOISES MEDIANO - PERROS SUPER - CELESTE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0624DFU',
				Descripcion: 'MOISES MEDIANO - WOOF - FUCSIA - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0625DNE',
				Descripcion: 'MOISES MEDIANO - WOOF - NEGRO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0626DVE',
				Descripcion: 'MOISES MEDIANO - WOOF - VERDE - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0627EFU',
				Descripcion: 'MOISES CHICO - PERROS BEIGE - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0628ENE',
				Descripcion: 'MOISES CHICO - PERROS BEIGE - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0629EVE',
				Descripcion: 'MOISES CHICO - PERROS BEIGE - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0630EFU',
				Descripcion: 'MOISES CHICO - PERROS NEGROS - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0631ENE',
				Descripcion: 'MOISES CHICO - PERROS NEGROS - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0632EVE',
				Descripcion: 'MOISES CHICO - PERROS NEGROS - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0633ECE',
				Descripcion: 'MOISES CHICO - PERROS SUPER - CELESTE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0634EFU',
				Descripcion: 'MOISES CHICO - WOOF - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0635ENE',
				Descripcion: 'MOISES CHICO - WOOF - NEGRO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MO6V0636EVE',
				Descripcion: 'MOISES CHICO - WOOF - VERDE - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'MR6N1288RJ',
				Descripcion: 'MORDEDOR - CIRCULAR - ROJO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PA6N1002RJ',
				Descripcion: 'PAÑUELO - NAVIDAD MIX PERRITOS - ROJO - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PA6N1003RJ',
				Descripcion: 'PAÑUELO - NAVIDAD MIX GATITOS - ROJO - U - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PA6N1285AZ',
				Descripcion: 'PAÑUELO - CUADRILLE - AZUL - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PA6N1286FU',
				Descripcion: 'PAÑUELO - CUADRILLE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PA6N1287RS',
				Descripcion: 'PAÑUELO - CUADRILLE - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PB6N0434UNN',
				Descripcion:
					'PORTA BOLSAS - BARRIL PERSONALIZADO - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PB6N0595UNN',
				Descripcion:
					'PORTA BOLSAS - ROBOT PERSONALIZADO - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PD6N1180ECE',
				Descripcion: 'PELOTA LIMPIA DIENTES - LISA - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PD6N1181ERJ',
				Descripcion: 'PELOTA LIMPIA DIENTES - LISA - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PD6N1182EVE',
				Descripcion: 'PELOTA LIMPIA DIENTES - LISA - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PD6N1183DCE',
				Descripcion: 'PELOTA LIMPIA DIENTES - LISA - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PD6N1184DRJ',
				Descripcion: 'PELOTA LIMPIA DIENTES - LISA - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PD6N1185DVE',
				Descripcion: 'PELOTA LIMPIA DIENTES - LISA - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0931ERJ',
				Descripcion: 'PELOTA - LISO - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0932EAZ',
				Descripcion: 'PELOTA - LISO - AZUL - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0933ECE',
				Descripcion: 'PELOTA - LISO - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0934EAM',
				Descripcion: 'PELOTA - LISO - AMARILLO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0935ENA',
				Descripcion: 'PELOTA - LISO - NARANJA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0936EVE',
				Descripcion: 'PELOTA - LISO - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0937ENE',
				Descripcion: 'PELOTA - LISO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0938ERS',
				Descripcion: 'PELOTA - LISO - ROSA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0939EFU',
				Descripcion: 'PELOTA - LISO - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0940EVI',
				Descripcion: 'PELOTA - LISO - VIOLETA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0941DRJ',
				Descripcion: 'PELOTA - LISO - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0942DAZ',
				Descripcion: 'PELOTA - LISO - AZUL - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0943DCE',
				Descripcion: 'PELOTA - LISO - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0944DAM',
				Descripcion: 'PELOTA - LISO - AMARILLO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0945DNA',
				Descripcion: 'PELOTA - LISO - NARANJA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0946DVE',
				Descripcion: 'PELOTA - LISO - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0947DNE',
				Descripcion: 'PELOTA - LISO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0948DRS',
				Descripcion: 'PELOTA - LISO - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0949DFU',
				Descripcion: 'PELOTA - LISO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0950DVI',
				Descripcion: 'PELOTA - LISO - VIOLETA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0951CRJ',
				Descripcion: 'PELOTA - LISO - ROJO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0952CAZ',
				Descripcion: 'PELOTA - LISO - AZUL - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0953CCE',
				Descripcion: 'PELOTA - LISO - CELESTE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0954CAM',
				Descripcion: 'PELOTA - LISO - AMARILLO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0955CNA',
				Descripcion: 'PELOTA - LISO - NARANJA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0956CVE',
				Descripcion: 'PELOTA - LISO - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0957CNE',
				Descripcion: 'PELOTA - LISO - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0958CRS',
				Descripcion: 'PELOTA - LISO - ROSA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0959CFU',
				Descripcion: 'PELOTA - LISO - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PE6N0960CVI',
				Descripcion: 'PELOTA - LISO - VIOLETA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0255EAZ',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - AZUL - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0256EFU',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - FUCSIA OSCURO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0257ERJ',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0258EVE',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0259EVI',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - VIOLETA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0260DCE',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0261DFU',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - FUCSIA FLUOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0262DRJ',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0263DRS',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0264DVE',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0265DVI',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - VIOLETA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0901ERJ',
				Descripcion: 'PLATO COMEDERO - LISO - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0902EAZ',
				Descripcion: 'PLATO COMEDERO - LISO - AZUL - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0903ECE',
				Descripcion: 'PLATO COMEDERO - LISO - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0904EAM',
				Descripcion: 'PLATO COMEDERO - LISO - AMARILLO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0905ENA',
				Descripcion: 'PLATO COMEDERO - LISO - NARANJA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0906EVE',
				Descripcion: 'PLATO COMEDERO - LISO - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0907ENE',
				Descripcion: 'PLATO COMEDERO - LISO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0908ERS',
				Descripcion: 'PLATO COMEDERO - LISO - ROSA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0909EFU',
				Descripcion: 'PLATO COMEDERO - LISO - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0910EVI',
				Descripcion: 'PLATO COMEDERO - LISO - VIOLETA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0911DRJ',
				Descripcion: 'PLATO COMEDERO - LISO - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0912DAZ',
				Descripcion: 'PLATO COMEDERO - LISO - AZUL - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0913DCE',
				Descripcion: 'PLATO COMEDERO - LISO - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0914DAM',
				Descripcion: 'PLATO COMEDERO - LISO - AMARILLO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0915DNA',
				Descripcion: 'PLATO COMEDERO - LISO - NARANJA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0916DVE',
				Descripcion: 'PLATO COMEDERO - LISO - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0917DNE',
				Descripcion: 'PLATO COMEDERO - LISO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0918DRS',
				Descripcion: 'PLATO COMEDERO - LISO - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0919DFU',
				Descripcion: 'PLATO COMEDERO - LISO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0920DVI',
				Descripcion: 'PLATO COMEDERO - LISO - VIOLETA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0921CRJ',
				Descripcion: 'PLATO COMEDERO - LISO - ROJO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0922CAZ',
				Descripcion: 'PLATO COMEDERO - LISO - AZUL - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0923CCE',
				Descripcion: 'PLATO COMEDERO - LISO - CELESTE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0924CAM',
				Descripcion: 'PLATO COMEDERO - LISO - AMARILLO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0925CNA',
				Descripcion: 'PLATO COMEDERO - LISO - NARANJA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0926CVE',
				Descripcion: 'PLATO COMEDERO - LISO - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0927CNE',
				Descripcion: 'PLATO COMEDERO - LISO - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0928CRS',
				Descripcion: 'PLATO COMEDERO - LISO - ROSA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0929CFU',
				Descripcion: 'PLATO COMEDERO - LISO - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N0930CVI',
				Descripcion: 'PLATO COMEDERO - LISO - VIOLETA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1298AM',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - HUESO - AMARILLO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1299CE',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - HUESO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1300RJ',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - HUESO - ROJO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1301RS',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - HUESO - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1302VE',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - HUESO - VERDE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1303AM',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - OVAL - AMARILLO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1304FU',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - OVAL - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1305GR',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - OVAL - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1306GC',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - OVAL - GRIS CLARO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1307RJ',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - OVAL - ROJO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1308VI',
				Descripcion:
					'COMEDERO DOBLE PLASTICO - OVAL - VIOLETA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1362AM',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - AMARILLO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1363NE',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1364AM',
				Descripcion:
					'PLATO COMEDERO - PERSONALIZADO - AMARILLO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PL6N1365NE',
				Descripcion: 'PLATO COMEDERO - PERSONALIZADO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1329NN',
				Descripcion: 'PRETAL - LANIN - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1330NN',
				Descripcion: 'PRETAL - ZONDA - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1331NN',
				Descripcion: 'PRETAL - LIMAY - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1332NN',
				Descripcion: 'PRETAL - FONCK - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1333NN',
				Descripcion: 'PRETAL - HUA HUM - SIN COLOR - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1334NN',
				Descripcion: 'PRETAL - LANIN - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1335NN',
				Descripcion: 'PRETAL - ZONDA - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1336NN',
				Descripcion: 'PRETAL - LIMAY - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1337NN',
				Descripcion: 'PRETAL - FONCK - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1338NN',
				Descripcion: 'PRETAL - HUA HUM - SIN COLOR - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1339NN',
				Descripcion: 'PRETAL - LANIN - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1340NN',
				Descripcion: 'PRETAL - ZONDA - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1341NN',
				Descripcion: 'PRETAL - LIMAY - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1342NN',
				Descripcion: 'PRETAL - FONCK - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PR6N1343NN',
				Descripcion: 'PRETAL - HUA HUM - SIN COLOR - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0961ERJ',
				Descripcion: 'PELOTA CON SOGA - LISO - ROJO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0962EAZ',
				Descripcion: 'PELOTA CON SOGA - LISO - AZUL - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0963ECE',
				Descripcion: 'PELOTA CON SOGA - LISO - CELESTE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0964EAM',
				Descripcion: 'PELOTA CON SOGA - LISO - AMARILLO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0965ENA',
				Descripcion: 'PELOTA CON SOGA - LISO - NARANJA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0966EVE',
				Descripcion: 'PELOTA CON SOGA - LISO - VERDE - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0967ENE',
				Descripcion: 'PELOTA CON SOGA - LISO - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0968ERS',
				Descripcion: 'PELOTA CON SOGA - LISO - ROSA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0969EFU',
				Descripcion: 'PELOTA CON SOGA - LISO - FUCSIA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0970EVI',
				Descripcion: 'PELOTA CON SOGA - LISO - VIOLETA - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0971DRJ',
				Descripcion: 'PELOTA CON SOGA - LISO - ROJO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0972DAZ',
				Descripcion: 'PELOTA CON SOGA - LISO - AZUL - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0973DCE',
				Descripcion: 'PELOTA CON SOGA - LISO - CELESTE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0974DAM',
				Descripcion: 'PELOTA CON SOGA - LISO - AMARILLO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0975DNA',
				Descripcion: 'PELOTA CON SOGA - LISO - NARANJA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0976DVE',
				Descripcion: 'PELOTA CON SOGA - LISO - VERDE - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0977DNE',
				Descripcion: 'PELOTA CON SOGA - LISO - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0978DRS',
				Descripcion: 'PELOTA CON SOGA - LISO - ROSA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0979DFU',
				Descripcion: 'PELOTA CON SOGA - LISO - FUCSIA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0980DVI',
				Descripcion: 'PELOTA CON SOGA - LISO - VIOLETA - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0981CRJ',
				Descripcion: 'PELOTA CON SOGA - LISO - ROJO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0982CAZ',
				Descripcion: 'PELOTA CON SOGA - LISO - AZUL - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0983CCE',
				Descripcion: 'PELOTA CON SOGA - LISO - CELESTE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0984CAM',
				Descripcion: 'PELOTA CON SOGA - LISO - AMARILLO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0985CNA',
				Descripcion: 'PELOTA CON SOGA - LISO - NARANJA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0986CVE',
				Descripcion: 'PELOTA CON SOGA - LISO - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0987CNE',
				Descripcion: 'PELOTA CON SOGA - LISO - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0988CRS',
				Descripcion: 'PELOTA CON SOGA - LISO - ROSA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0989CFU',
				Descripcion: 'PELOTA CON SOGA - LISO - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N0990CVI',
				Descripcion: 'PELOTA CON SOGA - LISO - VIOLETA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N1074CCE',
				Descripcion: 'PELOTA TELA SOGA - RAYADA - CELESTE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N1075CFU',
				Descripcion: 'PELOTA TELA SOGA - RAYADA - FUCSIA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N1076CNA',
				Descripcion: 'PELOTA TELA SOGA - RAYADA - NARANJA - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'PS6N1077CVE',
				Descripcion: 'PELOTA TELA SOGA - RAYADA - VERDE - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RC6N1085UAM',
				Descripcion: 'RATON A CUERDA - LISO - AMARILLO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RC6N1086URS',
				Descripcion: 'RATON A CUERDA - LISO - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RC6N1087UGR',
				Descripcion: 'RATON A CUERDA - LISO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RC6N1088UBM',
				Descripcion: 'RATON A CUERDA - RAYADO - BYM - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RC6N1089UBN',
				Descripcion: 'RATON A CUERDA - RAYADO - BYN - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0412UBL',
				Descripcion: 'REMERA - CAT MOM - BLANCO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0413UGR',
				Descripcion: 'REMERA - CAT MOM - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0414UNE',
				Descripcion: 'REMERA - CAT MOM - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0415UBL',
				Descripcion: 'REMERA - DOG MOM - BLANCO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0416UGR',
				Descripcion: 'REMERA - DOG MOM - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0417UNE',
				Descripcion: 'REMERA - DOG MOM - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0418CBL',
				Descripcion: 'REMERA - DOG DAD - BLANCO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0419CNE',
				Descripcion: 'REMERA - DOG DAD - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0420DBL',
				Descripcion: 'REMERA - DOG DAD - BLANCO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0421DNE',
				Descripcion: 'REMERA - DOG DAD - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0422UBL',
				Descripcion:
					'REMERA - I JUST WANT ALL THE DOGS - BLANCO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0423UGR',
				Descripcion:
					'REMERA - I JUST WANT ALL THE DOGS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0424UNE',
				Descripcion:
					'REMERA - I JUST WANT ALL THE DOGS - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0425UBL',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - BLANCO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0426UGR',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0427UNE',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0428CBL',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - BLANCO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0429CNE',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0430DBL',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - BLANCO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RE6N0431DNE',
				Descripcion:
					'REMERA - TENGO HIJOS DE 4 PATAS - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4C0502CBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - L - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4C0503DBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - M - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4C0504EBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - S - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4G0489CBE',
				Descripcion: 'RELLENO - UNICO - BEIGE - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4G0490DBE',
				Descripcion: 'RELLENO - UNICO - BEIGE - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4G1195EBE',
				Descripcion: 'RELLENO - UNICO - REDONDO - BEIGE - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL4G1196BBE',
				Descripcion: 'RELLENO - UNICO - REDONDO - BEIGE - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7C0497ABL',
				Descripcion: 'RELLENO - UNICO - BLANCO - XXL - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7C0498BBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - XL - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7C0499CBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - L - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7C0500DBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - M - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7C0501EBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - S - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7G0484ABE',
				Descripcion: 'RELLENO - UNICO - BEIGE - XXL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7G0485BBE',
				Descripcion: 'RELLENO - UNICO - BEIGE - XL - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7G0486CBE',
				Descripcion: 'RELLENO - UNICO - BEIGE - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7G0487DBE',
				Descripcion: 'RELLENO - UNICO - BEIGE - M - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7G0488EBE',
				Descripcion: 'RELLENO - UNICO - BEIGE - S - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7V0492ABL',
				Descripcion: 'RELLENO - UNICO - BLANCO - XXL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7V0493BBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - XL - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7V0494CBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - L - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7V0495DBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - M - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'RL7V0496EBL',
				Descripcion: 'RELLENO - UNICO - BLANCO - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SD6N1179UMU',
				Descripcion:
					'SOGA DOS NUDOS - RAYADA - MULTICOLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SE6N1143UCE',
				Descripcion: 'SEÑALADOR - PERRITO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SE6N1144URS',
				Descripcion: 'SEÑALADOR - PERRITO - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SE6N1145UCE',
				Descripcion: 'SEÑALADOR - GATITO - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SE6N1146URS',
				Descripcion: 'SEÑALADOR - GATITO - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SN6N1078UFU',
				Descripcion:
					'SOGA CUATRO NUDOS - RAYADA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'SN6N1079UMU',
				Descripcion:
					'SOGA CUATRO NUDOS - RAYADA - MULTICOLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ST6N1080UAM',
				Descripcion:
					'SOGA TRENZADA CON TIRADOR - RAYADA - AMARILLO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ST6N1081UVE',
				Descripcion:
					'SOGA TRENZADA CON TIRADOR - RAYADA - VERDE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ST6N1082URS',
				Descripcion:
					'SOGA TRENZADA CON TIRADOR - RAYADA - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ST6N1083UMF',
				Descripcion:
					'SOGA TRENZADA CON TIRADOR - RAYADA - MULTICOLOR FLUOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ST6N1084UMU',
				Descripcion:
					'SOGA TRENZADA CON TIRADOR - RAYADA - MULTICOLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'ST6N1178UMU',
				Descripcion:
					'SOGA TRES NUDOS - RAYADA - MULTICOLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TA6N1368UNN',
				Descripcion:
					'TAZA - PATITAS TENGO HIJOS DE CUATRO PATAS - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TA6N1369UNN',
				Descripcion:
					'TAZA - PATITAS HAY PALABRAS - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TA6N1370UNN',
				Descripcion:
					'TAZA - PATITAS Y DE REPENTE ENCUENTRAS - SIN COLOR - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0637UGR',
				Descripcion: 'TAPA BOCA - BORDER COLLIE - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0638UGR',
				Descripcion:
					'TAPA BOCA - BULLDOG FRANCES NEGRO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0639UGR',
				Descripcion:
					'TAPA BOCA - BULLDOG FRANCES BEIGE - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0640UGR',
				Descripcion: 'TAPA BOCA - BULLDOG INGLES - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0641UGR',
				Descripcion: 'TAPA BOCA - BEAGLE - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0642UGR',
				Descripcion: 'TAPA BOCA - BOXER - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0643UGR',
				Descripcion: 'TAPA BOCA - BULL TERRIER - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0644UGR',
				Descripcion: 'TAPA BOCA - CANICHE - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0645UGR',
				Descripcion: 'TAPA BOCA - CHIHUAHUA - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0646UGR',
				Descripcion: 'TAPA BOCA - GALGO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0647UGR',
				Descripcion: 'TAPA BOCA - GATITO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0648UGR',
				Descripcion: 'TAPA BOCA - GOLDEN - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0649UGR',
				Descripcion: 'TAPA BOCA - JACK RUSELL - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0650UGR',
				Descripcion: 'TAPA BOCA - MALTES - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0651UGR',
				Descripcion: 'TAPA BOCA - OVEJERO - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0652UGR',
				Descripcion: 'TAPA BOCA - PEPE - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0653UGR',
				Descripcion: 'TAPA BOCA - PERRITOS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0654UGR',
				Descripcion: 'TAPA BOCA - PITBULL - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0655UGR',
				Descripcion: 'TAPA BOCA - PUG - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0656UGR',
				Descripcion: 'TAPA BOCA - SALCHICHA - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0657UGR',
				Descripcion: 'TAPA BOCA - SHARPEI - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0658UGR',
				Descripcion: 'TAPA BOCA - SHITZU - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0659UGR',
				Descripcion: 'TAPA BOCA - SCHNAUZER - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0660UGR',
				Descripcion: 'TAPA BOCA - WEIMARANER - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0661UGR',
				Descripcion: 'TAPA BOCA - WESTY - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0662UGR',
				Descripcion: 'TAPA BOCA - YORKIE - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0663UCE',
				Descripcion: 'TAPA BOCA - PERROS SUPER - CELESTE - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0664UNE',
				Descripcion: 'TAPA BOCA - PERRITOS MIX - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0665URS',
				Descripcion:
					'TAPA BOCA - PERROS DURMIENDO - ROSA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0839UFU',
				Descripcion: 'TAPA BOCA - BORDER COLLIE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0840UFU',
				Descripcion:
					'TAPA BOCA - BULLDOG FRANCES NEGRO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0841UFU',
				Descripcion:
					'TAPA BOCA - BULLDOG FRANCES BEIGE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0842UFU',
				Descripcion:
					'TAPA BOCA - BULLDOG INGLES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0843UFU',
				Descripcion: 'TAPA BOCA - BEAGLE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0844UFU',
				Descripcion: 'TAPA BOCA - BOXER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0845UFU',
				Descripcion: 'TAPA BOCA - BULL TERRIER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0846UFU',
				Descripcion: 'TAPA BOCA - CANICHE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0847UFU',
				Descripcion: 'TAPA BOCA - CHIHUAHUA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0848UFU',
				Descripcion: 'TAPA BOCA - GALGO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0849UFU',
				Descripcion: 'TAPA BOCA - GATITO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0850UFU',
				Descripcion: 'TAPA BOCA - GOLDEN - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0851UFU',
				Descripcion: 'TAPA BOCA - JACK RUSELL - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0852UFU',
				Descripcion: 'TAPA BOCA - MALTES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0853UFU',
				Descripcion: 'TAPA BOCA - OVEJERO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0854UFU',
				Descripcion: 'TAPA BOCA - PEPE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0855UFU',
				Descripcion: 'TAPA BOCA - PERRITOS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0856UFU',
				Descripcion: 'TAPA BOCA - PITBULL - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0857UFU',
				Descripcion: 'TAPA BOCA - PUG - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0858UFU',
				Descripcion: 'TAPA BOCA - SALCHICHA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0859UFU',
				Descripcion: 'TAPA BOCA - SHARPEI - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0860UFU',
				Descripcion: 'TAPA BOCA - SHITZU - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0861UFU',
				Descripcion: 'TAPA BOCA - SCHNAUZER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0862UFU',
				Descripcion: 'TAPA BOCA - WEIMARANER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0863UFU',
				Descripcion: 'TAPA BOCA - WESTY - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0864UFU',
				Descripcion: 'TAPA BOCA - YORKIE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0865UFU',
				Descripcion: 'TAPA BOCA - PERROS SUPER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0866UFU',
				Descripcion: 'TAPA BOCA - PERRITOS MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0867UFU',
				Descripcion:
					'TAPA BOCA - PERROS DURMIENDO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0868DGR',
				Descripcion: 'TAPA BOCA - BORDER COLLIE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0869DGR',
				Descripcion:
					'TAPA BOCA - BULLDOG FRANCES NEGRO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0870DGR',
				Descripcion:
					'TAPA BOCA - BULLDOG FRANCES BEIGE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0871DGR',
				Descripcion: 'TAPA BOCA - BULLDOG INGLES - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0872DGR',
				Descripcion: 'TAPA BOCA - BEAGLE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0873DGR',
				Descripcion: 'TAPA BOCA - BOXER - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0874DGR',
				Descripcion: 'TAPA BOCA - BULL TERRIER - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0875DGR',
				Descripcion: 'TAPA BOCA - CANICHE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0876DGR',
				Descripcion: 'TAPA BOCA - CHIHUAHUA - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0877DGR',
				Descripcion: 'TAPA BOCA - GALGO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0878DGR',
				Descripcion: 'TAPA BOCA - GATITO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0879DGR',
				Descripcion: 'TAPA BOCA - GOLDEN - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0880DGR',
				Descripcion: 'TAPA BOCA - JACK RUSELL - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0881DGR',
				Descripcion: 'TAPA BOCA - MALTES - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0882DGR',
				Descripcion: 'TAPA BOCA - OVEJERO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0883DGR',
				Descripcion: 'TAPA BOCA - PEPE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0884DGR',
				Descripcion: 'TAPA BOCA - PERRITOS - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0885DGR',
				Descripcion: 'TAPA BOCA - PITBULL - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0886DGR',
				Descripcion: 'TAPA BOCA - PUG - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0887DGR',
				Descripcion: 'TAPA BOCA - SALCHICHA - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0888DGR',
				Descripcion: 'TAPA BOCA - SHARPEI - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0889DGR',
				Descripcion: 'TAPA BOCA - SHITZU - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0890DGR',
				Descripcion: 'TAPA BOCA - SCHNAUZER - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0891DGR',
				Descripcion: 'TAPA BOCA - WEIMARANER - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0892DGR',
				Descripcion: 'TAPA BOCA - WESTY - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0893DGR',
				Descripcion: 'TAPA BOCA - YORKIE - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0894DGR',
				Descripcion: 'TAPA BOCA - PERROS SUPER - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0895DGR',
				Descripcion: 'TAPA BOCA - PERRITOS MIX - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0896DGR',
				Descripcion: 'TAPA BOCA - PERROS DURMIENDO - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0991DGR',
				Descripcion: 'TAPA BOCA - LABRADOR - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0992UFU',
				Descripcion: 'TAPA BOCA - LABRADOR - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N0993UGR',
				Descripcion: 'TAPA BOCA - LABRADOR - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1147UFU',
				Descripcion: 'TAPA BOCA - GATITOS MIX - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1148UGR',
				Descripcion: 'TAPA BOCA - GATITOS MIX - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1149UTU',
				Descripcion: 'TAPA BOCA - GATITOS MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1152URJ',
				Descripcion: 'TAPA BOCA - PERRITOS MIX - ROJO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1153UTU',
				Descripcion:
					'TAPA BOCA - PERRITOS MIX - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1154UFU',
				Descripcion: 'TAPA BOCA - PATITA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1155UNE',
				Descripcion: 'TAPA BOCA - PATITA - NEGRO - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TB6N1156UTU',
				Descripcion: 'TAPA BOCA - PATITA - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TC6V0574UNN',
				Descripcion:
					'TIRA COLGANTE X3 - BULLDOG FRANCES - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TC6V0575UNN',
				Descripcion:
					'TIRA COLGANTE X3 - SCHNAUZER - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TC6V0576UNN',
				Descripcion: 'TIRA COLGANTE X3 - CANICHE - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TC6V0577UNN',
				Descripcion: 'TIRA COLGANTE X3 - PUG - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TC6V0578UNN',
				Descripcion:
					'TIRA COLGANTE X3 - SALCHICHA - SIN COLOR - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1023UFU',
				Descripcion: 'TOALLA - BEAGLE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1024UTU',
				Descripcion: 'TOALLA - BEAGLE - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1025UFU',
				Descripcion: 'TOALLA - BOXER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1026UTU',
				Descripcion: 'TOALLA - BOXER - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1027UFU',
				Descripcion: 'TOALLA - BULLDOG FRANCES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1028UTU',
				Descripcion:
					'TOALLA - BULLDOG FRANCES - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1029UFU',
				Descripcion: 'TOALLA - BULLDOG INGLES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1030UTU',
				Descripcion: 'TOALLA - BULLDOG INGLES - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1031UFU',
				Descripcion: 'TOALLA - CANICHE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1032UTU',
				Descripcion: 'TOALLA - CANICHE - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1033UFU',
				Descripcion: 'TOALLA - CHIHUAHUA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1034UTU',
				Descripcion: 'TOALLA - CHIHUAHUA - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1035UFU',
				Descripcion: 'TOALLA - GALGO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1036UTU',
				Descripcion: 'TOALLA - GALGO - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1037UFU',
				Descripcion: 'TOALLA - GATO GRIS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1038UTU',
				Descripcion: 'TOALLA - GATO GRIS - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1039UFU',
				Descripcion: 'TOALLA - GOLDEN - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1040UTU',
				Descripcion: 'TOALLA - GOLDEN - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1041UFU',
				Descripcion: 'TOALLA - LABRADOR - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1042UTU',
				Descripcion: 'TOALLA - LABRADOR - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1043UFU',
				Descripcion:
					'TOALLA - MIX PERROS CHICOS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1044UTU',
				Descripcion:
					'TOALLA - MIX PERROS CHICOS - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1045UFU',
				Descripcion:
					'TOALLA - MIX PERROS GRANDES - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1046UTU',
				Descripcion:
					'TOALLA - MIX PERROS GRANDES - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1047UFU',
				Descripcion: 'TOALLA - PEPE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1048UTU',
				Descripcion: 'TOALLA - PEPE - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1049UFU',
				Descripcion: 'TOALLA - PERRO NEGRO - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1050UTU',
				Descripcion: 'TOALLA - PERRO NEGRO - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1051UFU',
				Descripcion: 'TOALLA - PUG - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1052UTU',
				Descripcion: 'TOALLA - PUG - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1053UFU',
				Descripcion: 'TOALLA - SALCHICHA - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1054UTU',
				Descripcion: 'TOALLA - SALCHICHA - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1055UFU',
				Descripcion: 'TOALLA - SCHNAUZER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1056UTU',
				Descripcion: 'TOALLA - SCHNAUZER - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1057UFU',
				Descripcion: 'TOALLA - WEIMARANER - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1058UTU',
				Descripcion: 'TOALLA - WEIMARANER - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1059UFU',
				Descripcion: 'TOALLA - YORKIE - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'TO6N1060UTU',
				Descripcion: 'TOALLA - YORKIE - TURQUESA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000001',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - DALMATA   - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000002',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CANICHE MARRON NENA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000003',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CANICHE NEGRO NENA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000004',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - CANICHE NEGRO NENE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000005',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - YORKIE  - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000006',
				Descripcion: 'ALMOHADONES MUÑECOS PETS - YORKIE NENA - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000007',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - GATO BLANCO CON MANCHAS EN LOS OJOS  - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000008',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS -  GATO BLANCO Y NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000009',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - SHARPEI NEGRO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000010',
				Descripcion:
					'ALMOHADONES MUÑECOS PETS - BULLDOG FRANCES BEIGE Y BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000011',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - I WOOF YOU BDF BEIGE - BLANCO - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000012',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - I WOOF YOU BDF NEGRO - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000013',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - FRENCHI LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000014',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - PUG LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000015',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CHIHUI BEIGE LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000016',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - PEKINES LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000017',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CAT LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000018',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - DOG LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000019',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - SCHNAUZER GRIS LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000020',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - CANICHE NENE LOVER - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000021',
				Descripcion:
					'ALMOHADONES DECO 40X40 CM - YO TENGO UN HIJO DE 4 PATAS - BEIGE - UNICO - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000025',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO CHIUAHUA NEGRO - GRIS - S - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000026',
				Descripcion:
					'COLCHON LAVABLE PERRO CHICO - CARITA CANICHE ROJO - FUCSIA - S - VELLON',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000034',
				Descripcion:
					'COLCHON LAVABLE PERRO GRANDE - FRANJA PERRITOS MIX - GRIS - L - COPOS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000036',
				Descripcion: 'COLCHON SOLIDARIO - CERRADO - VELLON - M - PEPA - ROJO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000038',
				Descripcion:
					'COLCHONETA LAVABLE REDONDO - PERRITOS DURMIENDO ROSA - GUATA - 76X76 CM APROX. ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000039',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - GUATA - CORDURA GRIS CLARO LISO - 87X71 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000040',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO- SHARPEI NEGRO - FUCSIA ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000042',
				Descripcion:
					'COLCHONETA LAVABLE GATO - GATITOS MIX - ROJO - UNICO - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000049',
				Descripcion: 'CORREA Y COLLAR GRANDE - VERDE - L',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000050',
				Descripcion: 'CORREA Y COLLAR GRANDE - AMARILLA - L',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000051',
				Descripcion: 'CORREA Y COLLAR MEDIANA - VERDE  - M',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000052',
				Descripcion: 'CORREA Y COLLAR MEDIANA - AMARILLA - M',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000053',
				Descripcion: 'CORREA Y COLLAR CHICA - VERDE - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000054',
				Descripcion: 'CORREA Y COLLAR CHICA - AMARILLA - S ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000055',
				Descripcion: 'CORREA Y COLLAR CHICA - CELESTE - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000056',
				Descripcion: 'COLLAR GRANDE - GRIS - L',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000057',
				Descripcion: 'COLLAR GRANDE - FUCSIA - L',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000058',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE- UNICO- SIN RELLENO- L- CANICHE ROJO- FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000059',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA CANICHE/BICHON - ROJO Y NEGRO - L - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000060',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE- UNICO- SIN RELLENO- XL- PERRITO PELUDO BLANCO Y NEGRO - TURQUESA - 98X70 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000062',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE- UNICO- SIN RELLENO- XL- PUG - FUCSIA - 98X70 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000063',
				Descripcion: 'DELANTAL CUERINA CON PLASTICO - MIX PERRITOS FUCSIA ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000064',
				Descripcion: 'DELANTAL CUERNA CON PASTICO - MIX PERRITOS GRIS ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000065',
				Descripcion:
					'DELANTAL CUERINA CON PLASTICO - PERRITOS Y GATITOS TURQUESA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000066',
				Descripcion: 'DELANTAL CUERINA CON PLASTICO - BDF FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000067',
				Descripcion:
					'DELANTAL CUERINA MULTIUSO - 3 GATITOS - GRIS - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000068',
				Descripcion:
					'INDIVIDUAL - PERSONALIZADO - LABRADORA NENA LOLA - FUCSIA - M',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000069',
				Descripcion: 'INDIVIDUAL  CUERINA - PEPE - CELESTE - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000070',
				Descripcion: 'INDIVIDUAL  CUERINA - PERRITOS Y GATITOS - CELESTE - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000071',
				Descripcion: 'INDIVIDUAL  CUERINA - PERRITOS Y GATITOS - FUCSIA - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000072',
				Descripcion: 'INDIVIDUAL S - SCHNAUZER CELESTE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000073',
				Descripcion: 'INDIVIDUAL S - GATITO GRIS  VERDE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000074',
				Descripcion: 'INDIVIDUAL S - BORDER COLLIE - FUCSIA ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000075',
				Descripcion: 'INDIVIDUAL S - MIX PERRITOS BORDO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000076',
				Descripcion:
					'JUGUETE BLANDO  SIN CASCABEL - UNICO - VELLON - UNICO - TORRE EIFFEL  (20X51 CM) ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000077',
				Descripcion: 'MANTA MICROPOLAR - LABRADOR FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000078',
				Descripcion: 'MANTA MICROPOLAR -  WESTY - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000079',
				Descripcion: 'MANTA MICROPOLAR - WEIMARANER NEGRO - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000080',
				Descripcion: 'MANTA MICROPOLAR - BOXER BLANCO - TURQUESA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000082',
				Descripcion: 'MANTA MICROPOLAR CHICA -  BULLDOG FRANCES - ROJA - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000083',
				Descripcion: 'MANTA MICROPOLAR  CHICA - BULLDOG FRANCES - VERDE - S ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000084',
				Descripcion:
					'MANTA MICROPOLAR CHICA - PERRITO NEGRO Y BLANCO - VERDE - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000085',
				Descripcion:
					'MANTA MICROPOLAR CHICA - PERRITO NEGRO Y BLANCO - NEGRA - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000086',
				Descripcion: 'MANTA MICROPOLAR CHICA - PICHICHA - FUCSIA - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000087',
				Descripcion: 'MANTA MICROPOLAR CHICA - GATITO GRIS - FUCSIA - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000088',
				Descripcion: 'MANTA MICROPOLAR CHICA - GATITO GRIS - ROJA - S',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000093',
				Descripcion:
					'MANTAS CORDERITO GRIS - PATITAS MARRON / FRANJA FUCSIA - GRIS - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000095',
				Descripcion:
					'MANTAS CORDERITO NEGRO  - PATITAS MARRON / FRANJA FUCSIA - NEGRO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000097',
				Descripcion:
					'MANTAS CORDERITO  - PATITAS MARRON NEGRO - BLANCO - S - SIN RELLENO ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000098',
				Descripcion:
					'MANTAS CORDERITO  - PATITAS NEGRO VERDE - BLANCO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000100',
				Descripcion:
					'MANTAS CORDERITO  - PATITAS NEGRO VERDE - NEGRO - S - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000101',
				Descripcion: 'MINI PETS - SHARPEI BEIGE PAÑUELO AZUL ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000102',
				Descripcion: 'MINI PETS - UNICO - VELLON - SHARPEI GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000103',
				Descripcion: 'MINI PETS - UNICO - VELLON - SHARPEI NEGRO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000104',
				Descripcion: 'MINI PETS - UNICO - VELLON - CANICHE COLORADO NENA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000105',
				Descripcion: 'MINI PETS - UNICO - VELLON - WESTY',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000106',
				Descripcion: 'MINI PETS - UNICO - VELLON - CHOW CHOW',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000107',
				Descripcion: 'MINI PETS - UNICO - VELLON - UNICO - PUG NENA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000108',
				Descripcion: 'MINI PETS SIN CINTA - BEAGLE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000109',
				Descripcion: 'MINI PETS SIN CINTA - BOXER ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000110',
				Descripcion: 'MINI PETS SIN CINTA - BULLTERRIER',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000111',
				Descripcion: 'MINI PETS SIN CINTA - BULLDOG FRANCÉS BEIGE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000112',
				Descripcion: 'MINI PETS SIN CINTA - CHIHUAHUA BEIGE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000113',
				Descripcion: 'MINI PETS SIN CINTA - CHIHUAHUA NEGRO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000114',
				Descripcion: 'MINI PETS SIN CINTA - DÁLMATA ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000115',
				Descripcion: 'MINI PETS SIN CINTA - GATO BLANCO ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000116',
				Descripcion: 'MINI PETS SIN CINTA -  GATO GRIS ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000117',
				Descripcion: 'MINI PETS SIN CINTA - GATO NEGRO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000118',
				Descripcion: 'MINI PETS SIN CINTA - GATO NARANJA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000119',
				Descripcion: 'MINI PETS SIN CINTA - OVEJERO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000120',
				Descripcion: 'MINI PETS SIN CINTA - PICHICHO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000121',
				Descripcion: 'MINI PETS SIN CINTA - PINSCHER ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000122',
				Descripcion: 'MINI PETS SIN CINTA - PITBULL',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000123',
				Descripcion: 'MINI PETS SIN CINTA - PUG NENA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000124',
				Descripcion: 'MINI PETS SIN CINTA - PUG NENE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000125',
				Descripcion: 'MINI PETS SIN CINTA - SHARPEI BEIGE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000126',
				Descripcion: 'MINI PETS SIN CINTA - SHARPEI GRIS ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000127',
				Descripcion: 'MINI PETS SIN CINTA - SHARPEI MARRÓN ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000128',
				Descripcion: 'MINI PETS SIN CINTA - YORKIE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000129',
				Descripcion: 'MONEDERO - UNICO - GATO - VIOLETA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000130',
				Descripcion: 'MONEDERO - UNICO - PUG - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000131',
				Descripcion: 'PORTA CELULAR - UNICO - TENGO HIJOS DE 4 PATAS - NEGRO ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000132',
				Descripcion: 'PORTA CELULAR - UNICO - GATO VIAJERO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000133',
				Descripcion: 'PORTA CELULAR - UNICO - GATO ALOHA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000134',
				Descripcion: 'PORTA CELULAR - UNICO - PEPA DEPORTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000135',
				Descripcion: 'PORTA CELULAR - UNICO - BDF - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000136',
				Descripcion: 'PORTA CELULAR - UNICO - BDF - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000137',
				Descripcion: 'PORTA CELULAR - UNICO - BDF - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000138',
				Descripcion: 'PORTA CELULAR - UNICO - SALCHI NEGRO - FUCSIA ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000139',
				Descripcion: 'PORTA CELULAR - UNICO - SALCHI  NEGRO- GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000140',
				Descripcion: 'PORTA CELULAR - UNICO - SALCHI NEGRO - CELESTE ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000141',
				Descripcion: 'PORTA CELULAR - UNICO - SCHNAUZER - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000142',
				Descripcion: 'PORTA CELULAR - UNICO - SCHNAUZER - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000143',
				Descripcion: 'PORTA CELULAR - UNICO - GATO - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000144',
				Descripcion: 'PORTA CELULAR - UNICO - GATO - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000145',
				Descripcion: 'PORTA CELULAR - UNICO - GATO - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000146',
				Descripcion: 'PORTA CELULAR - UNICO - CANICHE - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000147',
				Descripcion: 'PORTA CELULAR - UNICO - PEPE - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000148',
				Descripcion: 'PORTA CELULAR - UNICO - PEPE - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000149',
				Descripcion: 'PORTA CELULAR - UNICO - PEPE - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000150',
				Descripcion: 'PORTA COSMETICOS - UNICO - GATITOS - VIOLETA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000151',
				Descripcion: 'PORTA COSMETICOS - UNICO - GATITOS - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000152',
				Descripcion: 'PORTA COSMETICOS - UNICO - GATITOS - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000153',
				Descripcion: 'PORTA COSMETICOS - UNICO - PEPA - ALOHA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000154',
				Descripcion: 'PORTA COSMETICOS - UNICO - SALCHICHA ARLEQUIN - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000155',
				Descripcion: 'PORTA COSMETICOS - UNICO - SALCHICHA ARLEQUIN - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000156',
				Descripcion: 'PORTA COSMETICOS - UNICO - SALCHICHA ARLEQUIN - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000157',
				Descripcion: 'PORTA COSMETICOS - UNICO - SALCHICHA MARRON - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000158',
				Descripcion: 'PORTA COSMETICOS - UNICO - SALCHICHA NEGRO - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000159',
				Descripcion: 'PORTA COSMETICOS - UNICO - GATITO - ALOHA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000160',
				Descripcion: 'PORTA COSMETICOS - UNICO - GATITO - VIAJERA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000161',
				Descripcion: 'PORTA COSMETICOS - UNICO - SHIH TZU - GRIS',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000162',
				Descripcion: 'PORTA COSMETICOS - UNICO - SHIH TZU - CELESTE',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000163',
				Descripcion: 'TOALLA 145X95 CM - BULLDOG FRANCÉS LUNARES- FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000164',
				Descripcion: 'TOALLA 145X95 CM - SALCHICHA - FUCSIA LUNARES',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000166',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - SHIH TZU - TURQUESA - S 40X46 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000167',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - CANICHE NEGRO - FUCSIA - S 40X46 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000169',
				Descripcion:
					'COLCHONETA LAVABLE PERRO MEDIANO - COCKER BLANCO Y NEGRO - GRIS - M ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000170',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - SHARPEI BEIGE - ROJO - L 66X91 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000171',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - SAMOYEDO CORONA - TURQUESA - L - 67X94 CM',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000172',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - CANICHE - TURQUESA - L - 67X97 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000173',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - SHIH TZU  - TURQUESA - L - 67X97 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000174',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FLORES FUCSIA FONDO CELESTE - L - 78X64 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000175',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PERRITOS Y HUESITOS - FUCSIA - L - 76X64 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000176',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE- PERRITO PELUDO BLANCO Y NEGRO - TURQUESA - L - 67X79 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000177',
				Descripcion:
					'COLCHONETA LAVABLE PERRO  GRANDE - PUG - VIOLETA - L - 67X79 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000178',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - PUG - FUCSIA - L - 67X79 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000179',
				Descripcion:
					'COLCHONETA LAVABLE PERRO EXTRA GRANDE - FRANJA PERRITOS MIX - FUCSIA - XL - 107X80 CM',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000182',
				Descripcion: 'LLAVERO MINI PET SURTIDO - ÚNICO - VELLÓN',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000183',
				Descripcion:
					'JUGUETE BLANDO  SIN CASCABEL - UNICO - VELLON - UNICO - DONA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000184',
				Descripcion:
					'JUGUETE BLANDO  SIN CASCABEL - UNICO - VELLON - UNICO - PERRO MARRÓN FUCSIA ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000185',
				Descripcion:
					'MANTAS CORDERITO BLANCO - PATITAS MARRON / FRANJA NEGRA - BLANCO - M - SIN RELLENO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000186',
				Descripcion:
					'TIRA COLGANTE X3 MINI PET - CANICHE NENA - VELLÓN - ÚNICO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000187',
				Descripcion:
					'TIRA COLGANTE X3 MINI PET - CANICHE NENE - VELLÓN - ÚNICO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000188',
				Descripcion: 'TIRA COLGANTE X3 MINI PET - PUG NENE - VELLÓN - ÚNICO',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000189',
				Descripcion: 'JUGUETE DURO SIN CASCABEL - ÚNICO - VELLÓN - SUPERMAN',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000190',
				Descripcion: 'MINI ALMOHADONES CUADRADOS AURE 10X10 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000191',
				Descripcion: 'MANTAS MICROPOLAR - DOGO - TURQUESA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000192',
				Descripcion: 'MANTAS MICROPOLAR - BDF BLANCO MANCHAS NEGRAS - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000193',
				Descripcion: 'MANTAS MICROPOLAR - YORKIE - FUCSIA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000194',
				Descripcion: 'MANTA MICROPOLARS - GOLDEN - NARANJA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000195',
				Descripcion: 'BOLSA PERRITOS Y HUESITOS FUCSIA L (68x9x49cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000196',
				Descripcion: 'BOLSA PERRITOS Y HUESITOS TURQUESA L (68x9x49cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000197',
				Descripcion: 'BOLSA CARITA SALCHICHA FUCSIA L (68x9x49cm) ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000198',
				Descripcion: 'BOLSA CARITA SALCHICHA TURQUESA L (68x9x49cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000199',
				Descripcion: 'BOLSA CARITA BULLDOG FRANCES TURQUESA L (68x9x49cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000200',
				Descripcion: 'BOLSA PERRITOS Y HUESITOS FUCSIA XL (88x9x68cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000201',
				Descripcion: 'BOLSA PERRITOS Y HUESITOS NEGRA XL (88x9x68cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000202',
				Descripcion: 'BOLSA PERRITOS Y HUESITOS TURQUESA XL (88x9x68cm)',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000203',
				Descripcion: 'MONEDERO PEPA AMO VIAJAR - ROSA - 11X15 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000204',
				Descripcion: 'MONEDERO ALOHA - CELESTE - 14X12 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000205',
				Descripcion: 'MONEDERO AMO VIAJAR - VERDE - 14X12 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000206',
				Descripcion: 'MONEDERO AMO VIAJAR - LILA - 14X12 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000207',
				Descripcion: 'MONEDERO GYM - VERDE - 14X12 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000208',
				Descripcion: 'MONEDERO PEPA YOGA - VIOLETA - 14X12 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000209',
				Descripcion: 'MONEDERO MALTES - VIOLETA - 14X12 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000210',
				Descripcion: 'SOBRE VIAJE - ROSA - 32X21 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000211',
				Descripcion: 'SOBRE VIAJE - VERDE - 32X21 CM ',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000212',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA BULLDOG FRANCES - ROJO Y NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000213',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SCHNAUZER - ROJO Y NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000214',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - FRANJA SALCHICHA - ROJO Y NEGRO - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000215',
				Descripcion:
					'COLCHONETA LAVABLE PERRO GRANDE - BULLDOG BEIGE MIX - FUCSIA - L - GUATA',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000216',
				Descripcion:
					'COLCHONETA LAVABLE PERRO CHICO - PERRO BYN Y MALTES - GRIS - S - GUATA - 60X44 CM',
				ID_Empresa: '1',
			},
			{
				Codigo: 'VV000000217',
				Descripcion:
					'MANTAS MICROPOLAR - WEIMARANER GRIS - FUCSIA - UNICO - SIN RELLENO',
				ID_Empresa: '1',
			},
		];

		let productos = oldProductos.map((x) => ({
			codigo: x.Codigo,
			descripcion: x.Descripcion,
			EmpresaId: x.ID_Empresa,
		}));

		await queryInterface.bulkInsert('producto', productos, {});
	},

	// se ejecuta cuando se deshace la siembra
	down: async (queryInterface, Sequelize) => {
		await queryInterface.bulkDelete('producto', null, {});
	},
};
