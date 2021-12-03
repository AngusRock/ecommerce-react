import cafeGrano from '../assets/cafe_grano.png';
import cafeGranoSmall from '../assets/cafe_grano_small.png';
import maquinaCafe from '../assets/maquina_cafe.png';
import maquinaCafeSmall from '../assets/maquina_cafe_small.png';
import cafeBolsa from '../assets/cafe_bolsa.png';
import cafeBolsaSmall from '../assets/cafe_bolsa_small.png';
import cafeCapsula from '../assets/cafe_capsula.jpg';
import cafeCapsulaSmall from '../assets/cafe_capsula_small.png';

const products = [
    {
        id: 0,
        title: 'Cafe Arabica',
        package: 'Bolsa 1kg',
        price: 420,
        pictureUrl: cafeGrano,
        smallPictureUrl:cafeGranoSmall,
        stock: 7,
        description: 'Café en granos con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'Grano',
        country: 'Colombia'
    },
    {
        id: 1,
        title: 'Cafe Robusta',
        package: 'Bolsa 2kg',
        price: 800,
        pictureUrl: cafeBolsa,
        smallPictureUrl:cafeBolsaSmall,
        stock: 5,
        description: 'Café en granos con un 4% de cafeína, mas fuerte en sabor y cuerpo.',
        type: 'Grano',
        country: 'Brasil'
    },
    {
        id: 2,
        title: 'Cafe Arabica',
        package: 'Bolsa 3kg',
        price: 1220,
        pictureUrl: cafeBolsa,
        smallPictureUrl:cafeBolsaSmall,
        stock: 4,
        description: 'Café en granos con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'Grano',
        country: 'Guatemala'
    },
    {
        id: 3,
        title: 'Cafe Arabica',
        package: '10 Capsulas',
        price: 1020,
        pictureUrl: cafeCapsula,
        smallPictureUrl:cafeCapsulaSmall,
        stock: 4,
        description: 'Café en capsulas con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'Capsulas',
        country: 'Colombia'
    },
    {
        id: 4,
        title: 'Cafe Robusta',
        package: '10 Capsulas',
        price: 800,
        pictureUrl: cafeCapsula,
        smallPictureUrl:cafeCapsulaSmall,
        stock: 15,
        description: 'Café en capsulas con un 4% de cafeína, mas fuerte en sabor y cuerpo.',
        type: 'Capsulas',
        country: 'Colombia'
    },
    {
        id: 5,
        title: 'Cafe Arabica',
        package: '20 Capsulas',
        price: 1450,
        pictureUrl: cafeCapsula,
        smallPictureUrl:cafeCapsulaSmall,
        stock: 20,
        description: 'Café con un 0,8% y un 1,4% de cafeína, sutil, delicado y elegante con un gran equilibrio entre sabor y cuerpo.',
        type: 'Capsulas',
        country: 'Etiopia'
    },
    {
        id: 6,
        title: 'Cafetera Blanca',
        package: '1 Cafetera',
        price: 22200,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 8,
        description: 'Cafetera para moler cafe en grano',
        type: 'Cafetera',
        country: 'Alemania'

    },
    {
        id: 7,
        title: 'Cafetera Negra',
        package: '1 Cafetera',
        price: 22200,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 4,
        description: 'Cafetera para moler cafe en grano',
        type: 'Cafetera',
        country: 'Alemania'

    },
    {
        id: 8,
        title: 'Cafetera Roja',
        package: '1 Cafetera',
        price: 22200,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 4,
        description: 'Cafetera para moler cafe en grano',
        type: 'Cafetera',
        country: 'EEUU'

    },
    {
        id: 9,
        title: 'Cafetera Blanca con Espumador',
        package: '1 Cafetera',
        price: 24850,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 6,
        description: 'Cafetera para moler cafe en grano con espumador',
        type: 'Cafetera',
        country: 'España'

    },
    {
        id: 10,
        title: 'Cafetera Negra con Espumador',
        package: '1 Cafetera',
        price: 24850,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 4,
        description: 'Cafetera para moler cafe en grano con espumador',
        type: 'Cafetera',
        country: 'Alemania'

    },
    {
        id: 11,
        title: 'Cafetera Roja con Espumador',
        package: '1 Cafetera',
        price: 24850,
        pictureUrl: maquinaCafe,
        smallPictureUrl:maquinaCafeSmall,
        stock: 10,
        description: 'Cafetera para moler cafe en grano con espumador',
        type: 'Cafetera',
        country: 'Alemania'

    }
]

export default products;